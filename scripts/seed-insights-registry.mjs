// One-time seeder: builds client/src/data/insightsRegistry.ts from the real
// routed insight articles (extracting props from each component). After
// seeding, the registry file is the maintained source of truth for catalog
// surfaces. Re-run only to regenerate from scratch.
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const read = (p) => fs.readFileSync(path.join(root, p), "utf8");
const app = read("client/src/App.tsx");

const HUBS = new Set(["strategy-finance", "operations", "growth-marketing"]); // topic hubs, not articles
const routes = [];
for (const m of app.matchAll(/<Route path=\{?"\/insights\/([a-z0-9-]+)"\}? component=\{(\w+)\}/g)) {
  if (!HUBS.has(m[1])) routes.push([m[1], m[2]]);
}
const imports = {};
for (const m of app.matchAll(/import (?:\{ )?(\w+)(?: \})? from "(?:@\/|\.\/)?(pages\/[^"]+)"/g)) {
  imports[m[1]] = "client/src/" + m[2] + (m[2].endsWith(".tsx") ? "" : ".tsx");
}
const grab = (src, key) => (src.match(new RegExp(`${key}="([^"]+)"`)) || [])[1] || null;

const entries = [];
const seen = new Set();
for (const [slug, comp] of routes) {
  if (seen.has(slug)) continue;
  seen.add(slug);
  const file = imports[comp];
  if (!file || !fs.existsSync(path.join(root, file))) { console.error("NO FILE:", slug, comp); continue; }
  const src = read(file);
  const isV2 = src.includes("InsightArticleV2");
  const title = grab(src, "title") || grab(src, "seoTitle") || slug;
  const dek = grab(src, "subtitle") || grab(src, "seoDescription") || "";
  const hero = grab(src, "heroImage") || "/images/business-strategy-abstract.jpg";
  const category = grab(src, "category") || "Insights";
  const readTime = grab(src, "readTime") || "6 min";
  const date = grab(src, "publishDate") || grab(src, "date") || "";
  entries.push({ slug, title, dek, heroImage: hero, topic: category, readTime, date, template: isV2 ? "v2" : "bespoke" });
}

const esc = (s) => s.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
const lines = entries.map((e) =>
  `  { slug: "${e.slug}", title: "${esc(e.title)}", dek: "${esc(e.dek)}", heroImage: "${e.heroImage}", topic: "${esc(e.topic)}", readTime: "${e.readTime}", date: "${esc(e.date)}" },`);

const out = `/**
 * INSIGHTS REGISTRY — the single source of truth for the article catalog.
 *
 * Every routed /insights/<slug> article has exactly one entry here. The
 * /insights landing page (hero, editor's pick, tiles, filters) renders from
 * this list, and the build-time link guard (scripts/check-insight-links.mjs)
 * validates every /insights reference site-wide against it.
 *
 * ADDING AN ARTICLE = 3 things, same commit:
 *   1. the page component (InsightArticleV2)
 *   2. the <Route> in App.tsx
 *   3. an entry here
 * The guard fails the build if these ever drift.
 *
 * Seeded from live article props by scripts/seed-insights-registry.mjs.
 */

export interface InsightEntry {
  slug: string;
  title: string;
  dek: string;
  heroImage: string;
  topic: string;
  readTime: string;
  date: string;
  /** Landing-page hero feature. Exactly one entry should set this. */
  featured?: boolean;
  /** Landing-page "Editor's pick" slot. Exactly one entry should set this. */
  editorsPick?: boolean;
}

export const INSIGHTS: InsightEntry[] = [
${lines.join("\n")}
];

export const insightHref = (slug: string) => \`/insights/\${slug}\`;
`;
fs.writeFileSync(path.join(root, "client/src/data/insightsRegistry.ts"), out);
console.log(`registry seeded: ${entries.length} articles (${entries.filter(e=>e.template==="bespoke").length} bespoke)`);
