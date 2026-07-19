// Generates client/public/sitemap.xml from App.tsx's literal routes.
// Run: node scripts/generate-sitemap.mjs   (re-run whenever routes change)
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SITE = "https://nexdynegroup.com";
const app = fs.readFileSync(path.join(root, "client/src/App.tsx"), "utf8");

const urls = new Set();
for (const line of app.split("\n")) {
  const m = line.match(/<Route path=\{?"([^"]+)"\}?/);
  if (!m) continue;
  const p = m[1];
  if (p.includes(":") || p.includes("*")) continue; // dynamic
  if (p === "/404") continue;
  if (/admin|login|oauth/i.test(p)) continue;
  if (line.includes("Redirect")) continue; // redirect sources aren't canonical
  urls.add(p);
}

// Dynamic-but-enumerable: lead-magnet landing pages from the client registry.
const magnets = fs.readFileSync(
  path.join(root, "client/src/pages/resources/leadMagnets.tsx"), "utf8");
for (const m of magnets.matchAll(/^\s*slug:\s*"([a-z0-9-]+)"/gm)) {
  urls.add(`/resources/${m[1]}`);
}

const today = new Date().toISOString().slice(0, 10);
const priority = (p) => {
  if (p === "/") return "1.0";
  const depth = p.split("/").filter(Boolean).length;
  if (p.startsWith("/resources")) return "0.9"; // lead magnets — top priority
  if (depth === 1) return "0.8";
  if (depth === 2) return "0.7";
  return "0.6";
};

const sorted = [...urls].sort();
const xml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...sorted.map((p) =>
    `  <url><loc>${SITE}${p}</loc><lastmod>${today}</lastmod><priority>${priority(p)}</priority></url>`),
  "</urlset>",
  "",
].join("\n");

fs.writeFileSync(path.join(root, "client/public/sitemap.xml"), xml);
console.log(`sitemap.xml → ${sorted.length} URLs (${SITE})`);
