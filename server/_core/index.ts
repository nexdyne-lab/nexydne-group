import "dotenv/config";
import express from "express";
import rateLimit from "express-rate-limit";
import { createServer } from "http";
import net from "net";
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import { registerOAuthRoutes } from "./oauth";
import { appRouter } from "../routers";
import { createContext } from "./context";
import { serveStatic, setupVite } from "./vite";

const isProduction = process.env.NODE_ENV === "production";

function isPortAvailable(port: number): Promise<boolean> {
  return new Promise(resolve => {
    const server = net.createServer();
    server.listen(port, () => {
      server.close(() => resolve(true));
    });
    server.on("error", () => resolve(false));
  });
}

async function findAvailablePort(startPort: number = 3000): Promise<number> {
  for (let port = startPort; port < startPort + 20; port++) {
    if (await isPortAvailable(port)) {
      return port;
    }
  }
  throw new Error(`No available port found starting from ${startPort}`);
}

function securityHeaders(): express.RequestHandler {
  return (req, res, next) => {
    res.setHeader("X-Content-Type-Options", "nosniff");
    res.setHeader("X-Frame-Options", "DENY");
    res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
    res.setHeader(
      "Permissions-Policy",
      "camera=(), microphone=(), geolocation=()"
    );
    if (isProduction) {
      res.setHeader(
        "Strict-Transport-Security",
        "max-age=31536000; includeSubDomains"
      );
    }
    next();
  };
}

async function startServer() {
  const app = express();
  const server = createServer(app);

  // Behind Railway/Cloudflare: trust the first proxy hop so req.ip and
  // req.protocol reflect the real client, not the proxy.
  app.set("trust proxy", 1);

  app.use(securityHeaders());

  // Platform healthcheck — must answer before the edge seal (Railway hits this
  // on the raw host with no edge secret). Kept trivial and unauthenticated.
  app.get("/healthz", (_req, res) => {
    res.status(200).json({ ok: true });
  });

  // Edge seal: in production, only accept traffic that came through the
  // Cloudflare Worker (which stamps x-edge-secret). Direct hits to the raw
  // *.up.railway.app host — the Cloudflare bypass — are redirected to the real
  // domain, so bots can't dodge Bot Fight Mode / challenges by targeting it.
  const edgeSecret = process.env.EDGE_SECRET;
  if (isProduction && edgeSecret) {
    app.use((req, res, next) => {
      if (req.headers["x-edge-secret"] === edgeSecret) return next();
      return res.redirect(308, `https://www.nexdynegroup.com${req.originalUrl}`);
    });
  }

  app.use(express.json({ limit: "1mb" }));
  app.use(express.urlencoded({ limit: "1mb", extended: true }));

  // Rate-limit the API surface; the public lead-capture form is the main target.
  app.use(
    "/api/",
    rateLimit({
      windowMs: 15 * 60 * 1000,
      limit: 300,
      standardHeaders: "draft-7",
      legacyHeaders: false,
    })
  );

  // OAuth callback under /api/oauth/callback
  registerOAuthRoutes(app);
  // tRPC API
  app.use(
    "/api/trpc",
    createExpressMiddleware({
      router: appRouter,
      createContext,
    })
  );
  // development mode uses Vite, production mode uses static files
  if (process.env.NODE_ENV === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  const preferredPort = parseInt(process.env.PORT || "3000");
  // In production the platform assigns PORT and routes traffic to it —
  // silently drifting to another port would break the healthcheck.
  const port = isProduction ? preferredPort : await findAvailablePort(preferredPort);

  if (port !== preferredPort) {
    console.log(`Port ${preferredPort} is busy, using port ${port} instead`);
  }

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
