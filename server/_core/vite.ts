import express, { type Express } from "express";
import fs from "fs";
import { type Server } from "http";
import { nanoid } from "nanoid";
import path from "path";
import { createServer as createViteServer } from "vite";
import viteConfig from "../../vite.config";

export async function setupVite(app: Express, server: Server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true as const,
  };

  const vite = await createViteServer({
    ...viteConfig,
    configFile: false,
    server: serverOptions,
    appType: "custom",
  });

  app.use(vite.middlewares);
  app.use("*", async (req, res, next) => {
    const url = req.originalUrl;

    try {
      const clientTemplate = path.resolve(
        import.meta.dirname,
        "../..",
        "client",
        "index.html"
      );

      // always reload the index.html file from disk incase it changes
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e as Error);
      next(e);
    }
  });
}

export function serveStatic(app: Express) {
  const distPath =
    process.env.NODE_ENV === "development"
      ? path.resolve(import.meta.dirname, "../..", "dist", "public")
      : path.resolve(import.meta.dirname, "public");
  if (!fs.existsSync(distPath)) {
    console.error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }

  app.use(express.static(distPath));

  // ── Per-route OG/social meta injection ─────────────────────────────────
  // Social crawlers (Facebook, LinkedIn, X, Slack…) do NOT execute JS, so the
  // per-page meta our React code sets via Helmet is invisible to them. For
  // routes listed in og-meta.json (generated at build by
  // scripts/generate-og-meta.mjs), rewrite the static head tags in index.html
  // before serving. Unknown routes fall back to the untouched shell.
  const esc = (s: string) =>
    s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  let ogMeta: Record<string, { title: string; description: string; image: string }> = {};
  try {
    ogMeta = JSON.parse(
      fs.readFileSync(path.resolve(distPath, "og-meta.json"), "utf8")
    );
  } catch {
    console.warn("[og] og-meta.json not found — per-route social tags disabled");
  }
  const SITE = "https://nexdynegroup.com";
  const renderShell = (reqPath: string): string | null => {
    const m = ogMeta[reqPath];
    if (!m) return null;
    let html: string;
    try {
      html = fs.readFileSync(path.resolve(distPath, "index.html"), "utf8");
    } catch {
      return null;
    }
    const img = m.image.startsWith("http") ? m.image : SITE + m.image;
    const title = esc(m.title);
    const desc = esc(m.description);
    return html
      .replace(/<title>[^<]*<\/title>/, `<title>${title} | NexDyne Consulting Group</title>`)
      .replace(/(<meta name="description" content=")[^"]*(")/, `$1${desc}$2`)
      .replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${title}$2`)
      .replace(/(<meta property="og:description" content=")[^"]*(")/, `$1${desc}$2`)
      .replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${SITE}${reqPath}$2`)
      .replace(/(<meta property="og:image" content=")[^"]*(")/, `$1${img}$2`)
      .replace(/(<meta name="twitter:image" content=")[^"]*(")/, `$1${img}$2`);
  };

  // fall through to index.html if the file doesn't exist
  app.use("*", (req, res) => {
    const shell = renderShell(req.originalUrl.split("?")[0]);
    if (shell) {
      res.setHeader("Content-Type", "text/html; charset=UTF-8");
      res.send(shell);
      return;
    }
    res.sendFile(path.resolve(distPath, "index.html"));
  });
}
