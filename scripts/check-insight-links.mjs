// BUILD GUARD: every /insights/<slug> reference in client source must point at
// a registered route. Fails the build with a list of offenders otherwise.
// Run standalone: node scripts/check-insight-links.mjs
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const app = fs.readFileSync(path.join(root, "client/src/App.tsx"), "utf8");
const routes = new Set([...app.matchAll(/<Route path=\{?"(\/insights\/[a-z0-9-]+)"/g)].map((m) => m[1]));

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
  const lines = fs.readFileSync(f, "utf8").split("\n");
  lines.forEach((line, i) => {
    const t = line.trim();
    if (t.startsWith("//") || t.startsWith("*") || t.startsWith("/*")) return; // comments
    for (const m of line.matchAll(/["'`](\/insights\/[a-z0-9-]+)["'`]/g)) {
      if (!routes.has(m[1])) offenders.push(`${path.relative(root, f)}:${i + 1}  ${m[1]}`);
    }
  });
}

if (offenders.length) {
  console.error(`\n✗ ${offenders.length} broken /insights link(s):`);
  offenders.forEach((o) => console.error("   " + o));
  process.exit(1);
}
console.log("✓ insight-link guard: all /insights references resolve");
