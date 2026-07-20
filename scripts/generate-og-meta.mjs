// Build-time generator: route → {title, description, image} for server-side
// OG tag injection (social crawlers don't run JS, so raw HTML must carry
// per-page tags). Output: client/public/og-meta.json (copied into dist/public
// by the build; read by serveStatic at runtime).
// Run: node scripts/generate-og-meta.mjs  (wired into `npm run build`)
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const read = (p) => fs.readFileSync(path.join(root, p), "utf8");
const app = read("client/src/App.tsx");

// route path -> component name
const routes = [];
for (const line of app.split("\n")) {
  const m = line.match(/<Route path=\{?"([^"]+)"\}? component=\{(\w+)\}/);
  if (m && !m[1].includes(":") && !m[1].includes("*")) routes.push([m[1], m[2]]);
}
// component name -> import file
const imports = {};
for (const m of app.matchAll(/import \{?\s*(\w+)\s*\}? from "(?:@\/|\.\/)?(pages\/[^"]+)"/g)) {
  imports[m[1]] = "client/src/" + m[2] + (m[2].endsWith(".tsx") ? "" : ".tsx");
}

const meta = {};
const grab = (src, key) => {
  const m = src.match(new RegExp(`${key}="([^"]+)"`)) || src.match(new RegExp(`${key}=\\{"([^"]+)"\\}`));
  return m ? m[1] : null;
};

let articles = 0, cases = 0;
for (const [route, comp] of routes) {
  const file = imports[comp];
  if (!file || !fs.existsSync(path.join(root, file))) continue;
  const src = read(file);

  // V2 insight articles: title/subtitle/heroImage
  if (src.includes("InsightArticleV2")) {
    const title = grab(src, "title");
    const subtitle = grab(src, "subtitle");
    const hero = grab(src, "heroImage");
    if (title) {
      meta[route] = { title, description: subtitle || "", image: hero || "/og-image.jpg" };
      articles++;
    }
    continue;
  }

  // Case studies (IndustryCaseStudyTemplate): prefer the crafted seoTitle/
  // seoDescription, fall back to title/subtitle; share with the case's hero.
  if (src.includes("IndustryCaseStudyTemplate")) {
    const title = grab(src, "seoTitle") || grab(src, "title");
    const desc = grab(src, "seoDescription") || grab(src, "subtitle");
    const hero = grab(src, "heroImage");
    if (title) {
      meta[route] = { title, description: desc || "", image: hero || "/og-image.jpg" };
      cases++;
    }
  }
}

// Lead-magnet landing pages from the client config registry
const lm = read("client/src/pages/resources/leadMagnets.tsx");
for (const block of lm.split(/\n  "(?=[a-z0-9-]+": \{)/).slice(1)) {
  const slug = block.match(/^([a-z0-9-]+)":/)?.[1];
  const title = block.match(/seoTitle: "([^"]+)"/)?.[1];
  const desc = block.match(/seoDescription:\s*\n?\s*"([^"]+)"/)?.[1];
  const og = block.match(/ogImage: "([^"]+)"/)?.[1];
  if (slug && title) meta[`/resources/${slug}`] = { title, description: desc || "", image: og || "/og-image.jpg" };
}

fs.writeFileSync(path.join(root, "client/public/og-meta.json"), JSON.stringify(meta, null, 1));
console.log(`og-meta.json → ${Object.keys(meta).length} routes (${articles} articles + ${cases} case studies + magnets)`);
