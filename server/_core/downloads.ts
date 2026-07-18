/**
 * Gated lead-magnet download endpoint.
 *
 * GET /api/download/:slug streams the file for a registered lead magnet. The
 * public landing page never links the raw file — only this endpoint — so a
 * download is only ever reached after the capture form is submitted (soft gate).
 *
 * Storage is decoupled from the codebase: if Cloudflare R2 is configured
 * (R2_* env vars), the file streams from the private R2 bucket — so new magnets
 * are managed by uploading to R2, no repo drop / redeploy. Until R2 is turned
 * on, it falls back to the bundled file under dist/public/downloads.
 */
import type { Express, Request, Response } from "express";
import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import type { Readable } from "node:stream";
import fs from "fs";
import path from "path";

export interface LeadMagnet {
  /** Human title — used for lead tracking + email copy. */
  title: string;
  /** Filename the browser saves as (Content-Disposition). */
  downloadFilename: string;
  /** Object key inside the R2 bucket. */
  r2Key: string;
  /** Filename under dist/public/downloads used as the pre-R2 fallback. */
  localFile: string;
  contentType: string;
  /** Delivery-email copy (optional; sensible generic defaults apply). */
  emailIntro?: string; // sentence after the title, describing the magnet
  emailBody?: string; // a "how to use it" paragraph (HTML allowed)
  emailNextStep?: string; // soft next-step CTA paragraph (HTML allowed)
  /** DB `source` tag for lead tracking. */
  leadSource?: string;
}

/** The single source of truth for lead magnets. Add an entry per magnet. */
export const LEAD_MAGNETS: Record<string, LeadMagnet> = {
  "ai-readiness-guide": {
    title: "SMB AI Readiness Guide",
    downloadFilename: "NexDyne-SMB-AI-Readiness-Guide.pdf",
    r2Key: "lead-magnets/ai-readiness-guide.pdf",
    localFile: "NexDyne-SMB-AI-Readiness-Guide.pdf",
    contentType: "application/pdf",
    emailIntro:
      "ten questions to answer before investing in AI, automation, or new technology.",
    emailBody:
      "Score yourself honestly, then focus on your lowest-scoring questions first — in order. Most growing companies land in the middle, and the middle is exactly where the right first move creates outsized value.",
    emailNextStep:
      "When you're ready to apply the framework to your business, we run an <strong>AI &amp; Operations Readiness Assessment</strong> and hand you a prioritized, honest plan. Just reply to this email.",
    leadSource: "ai_readiness_guide",
  },
};

function r2Configured(): boolean {
  return !!(
    process.env.R2_ACCOUNT_ID &&
    process.env.R2_ACCESS_KEY_ID &&
    process.env.R2_SECRET_ACCESS_KEY &&
    process.env.R2_BUCKET
  );
}

let s3: S3Client | null = null;
function r2Client(): S3Client {
  if (!s3) {
    s3 = new S3Client({
      region: "auto",
      endpoint: `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
      credentials: {
        accessKeyId: process.env.R2_ACCESS_KEY_ID as string,
        secretAccessKey: process.env.R2_SECRET_ACCESS_KEY as string,
      },
    });
  }
  return s3;
}

/** Candidate paths for the pre-R2 local fallback, across prod bundle + dev. */
function localCandidates(localFile: string): string[] {
  return [
    path.resolve(import.meta.dirname, "public", "downloads", localFile), // prod: dist/public/downloads
    path.resolve(process.cwd(), "dist", "public", "downloads", localFile),
    path.resolve(process.cwd(), "client", "public", "downloads", localFile), // dev source
  ];
}

export function registerDownloadRoutes(app: Express): void {
  app.get("/api/download/:slug", async (req: Request, res: Response) => {
    const magnet = LEAD_MAGNETS[req.params.slug];
    if (!magnet) {
      res.status(404).send("Resource not found.");
      return;
    }

    res.setHeader("Content-Type", magnet.contentType);
    res.setHeader(
      "Content-Disposition",
      `attachment; filename="${magnet.downloadFilename}"`
    );
    res.setHeader("Cache-Control", "private, no-store");

    try {
      if (r2Configured()) {
        const out = await r2Client().send(
          new GetObjectCommand({ Bucket: process.env.R2_BUCKET as string, Key: magnet.r2Key })
        );
        const body = out.Body as Readable | undefined;
        if (!body) throw new Error("empty R2 response body");
        res.setHeader("X-Asset-Source", "r2");
        body.on("error", (e) => {
          console.error("[download] R2 stream error:", e);
          if (!res.headersSent) res.status(502).end();
        });
        body.pipe(res);
        return;
      }

      // Pre-R2 fallback: stream the bundled file.
      const file = localCandidates(magnet.localFile).find((p) => fs.existsSync(p));
      if (!file) {
        console.error("[download] local fallback missing for", req.params.slug);
        res.status(404).send("File not available.");
        return;
      }
      res.setHeader("X-Asset-Source", "fallback");
      fs.createReadStream(file).pipe(res);
    } catch (e) {
      console.error("[download] failed:", e);
      if (!res.headersSent) res.status(500).send("Download failed. Please try again.");
    }
  });
}
