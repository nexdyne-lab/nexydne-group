import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://www.newco.tech'; // Replace with actual domain

// Extract routes from App.tsx
const appTsxPath = path.join(__dirname, 'client', 'src', 'App.tsx');
const appTsxContent = fs.readFileSync(appTsxPath, 'utf-8');

const routeRegex = /<Route path=\{?["']([^"']+)["']\}?/g;
const routes = [];
let match;

while ((match = routeRegex.exec(appTsxContent)) !== null) {
  const routePath = match[1];
  if (routePath !== '/404' && !routePath.includes('*')) {
    routes.push(routePath);
  }
}

// Generate XML content
const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${BASE_URL}${route}</loc>
    <changefreq>weekly</changefreq>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

// Write sitemap.xml to public folder
const publicPath = path.join(__dirname, 'client', 'public', 'sitemap.xml');
fs.writeFileSync(publicPath, sitemapContent);

console.log(`Sitemap generated with ${routes.length} routes at ${publicPath}`);
