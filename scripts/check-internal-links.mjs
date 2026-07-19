// BUILD GUARD (site-wide): every /insights, /cases, /solutions, /capabilities,
// /industries reference in client source must point at a registered route
// (literal or matching a dynamic :param route). Fails the build with a list of
// offenders otherwise — dangling internal links can never ship silently.
// Run standalone: node scripts/check-internal-links.mjs
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const app = fs.readFileSync(path.join(root, "client/src/App.tsx"), "utf8");
const routes = new Set([...app.matchAll(/<Route path=\{?"([^"]+)"/g)].map((m) => m[1]));
const dynamic = [...routes].filter((r) => r.includes(":"));
const matchesDynamic = (p) => {
  const segs = p.split("/");
  return dynamic.some((d) => {
    const ds = d.split("/");
    return ds.length === segs.length && ds.every((a, i) => a.startsWith(":") || a === segs[i]);
  });
};

const PREFIXES = "insights|cases|solutions|capabilities|industries";
const LINK_RE = new RegExp(`["'\`](\\/(?:${PREFIXES})(?:\\/[a-z0-9-]+)+)["'\`]`, "g");

const files = [];
(function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p);
    else if (/\.(ts|tsx)$/.test(e.name)) files.push(p);
  }
})(path.join(root, "client/src"));

const offenders = [];
for (const f of files) {
  fs.readFileSync(f, "utf8").split("\n").forEach((line, i) => {
    const t = line.trim();
    if (t.startsWith("//") || t.startsWith("*") || t.startsWith("/*")) return;
    for (const m of line.matchAll(LINK_RE)) {
      if (!routes.has(m[1]) && !matchesDynamic(m[1]))
        offenders.push(`${path.relative(root, f)}:${i + 1}  ${m[1]}`);
    }
  });
}

if (offenders.length) {
  console.error(`\n✗ ${offenders.length} broken internal link(s):`);
  offenders.forEach((o) => console.error("   " + o));
  process.exit(1);
}
console.log("✓ internal-link guard: all insights/cases/solutions/capabilities/industries references resolve");
