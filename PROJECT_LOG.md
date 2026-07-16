# NexDyne Website — Project Log

**Read this first.** This is the running record of what's been built, how the
site is wired, and what's still open. If you're a new session or a new
developer: skim "Current state" → "Architecture" → the latest "Changelog"
entries, and you're oriented.

**Keep it updated.** After a meaningful chunk of work (a feature shipped, a
service configured, a decision made), add a dated entry at the TOP of the
Changelog and update "Current state" / "Open items" if they changed. One entry
per push or logical unit of work. Newest first.

---

## Current state (as of 2026-07-15)

The marketing site is **LIVE at https://nexdynegroup.com** (and www). It's a
Vite + React front end with an Express + tRPC backend, hosted on Railway,
fronted by Cloudflare. These work end-to-end and are verified in production:

- **Site** serving on the real domain over HTTPS.
- **Contact form** → emails the owner + sends the customer a branded
  acknowledgment (Resend), Turnstile-protected.
- **Newsletter signups** → captured into a Resend Audience (real subscriber list).
- **Case-study PDF lead capture** → stored in MySQL, adds to Audience on consent.
- **Google Analytics 4** live, gated behind the cookie banner (Consent Mode v2).
- **Security**: Cloudflare Bot Fight Mode, edge seal on the raw Railway URL,
  rate limiting, security headers, hardened sessions, dependency vulns patched.

Deploy flow: push to `main` → Railway auto-builds & deploys (~4 min).

## Architecture (key facts)

- **App code**: `site-a-neutral/` (client/ = React, server/ = Express+tRPC).
- **Hosting**: Railway hosts the Node app. Cloudflare = DNS + a Worker reverse
  proxy (`nexdyne-proxy`) that serves the domain (Railway's own custom-domain
  routing never attached — see 2026-07-06 changelog). **Deep runbook: `site-a-neutral/DEPLOY.md`.**
- **Repo**: GitHub `nexdyne-lab/nexydne-group`, deploy branch = `main`
  (work branch `deploy-setup` mirrors it).
- **Services**: Railway (app + MySQL), Cloudflare (DNS/Worker/security/Turnstile),
  Resend (email + audience), Google Analytics (`G-RG4366SXT8`), Google Workspace
  (human email — separate from Resend).
- **Secrets**: local `/.env` (gitignored) holds API tokens for setup. Production
  secrets live as Railway env vars. **Never commit `.env`.**
- **Verifying a deploy is live**: don't poll the local asset hash (Railway rebuilds
  produce different hashes); grep the live page/bundle for a string unique to the
  new commit, or watch the Railway deployment status.

## Open items

See **`TODO-LATER.md`** for the actionable list. Summary of what's pending:

- **Revoke the API tokens** in `.env` (Railway token is broad) once setup is done.
- **Cloudflare Web Analytics** (free, cookieless) — optional, not yet added.
- **Google Search Console** — not yet set up (pairs with GA4 for SEO).
- **Fabricated specifics** still in some article bodies (invented client ROI
  figures) — a content-honesty sweep is worthwhile but not urgent.
- **CSP header** not yet added (needs testing against the built site).
- The process-optimization insights hub links to a few `/insights/*` URLs that
  may not all exist — worth a broken-link audit.

---

## Changelog (newest first)

### 2026-07-15 — Marketing & content pipeline
- **Insights honesty**: removed fabricated "2,500+ business leaders" newsletter
  claim; earlier removed fabricated authors (Sarah Mitchell, Lisa Chen, Michael
  Torres) from migrated articles.
- **Migrated 3 old blog articles** (`/insights/ai-automation-reshaping-business`,
  `/measuring-automation-roi`, `/digital-transformation-readiness`) onto the
  shared InsightArticleV2 template. Routes/URLs unchanged. The process-optimization
  insights page was left as-is (it's a listing hub, not an article).
- **Newsletter collection LIVE**: created Resend Audience "NexDyne Subscribers";
  wired the Footer + two blog newsletter boxes + consented lead-captures to add
  contacts. Signups were previously fake `setTimeout` stubs.
- **Contact form LIVE**: wired to Resend (was a stub). Sends owner an inquiry
  (reply-to = sender) + the customer a branded acknowledgment. Turnstile-gated.
- **Resend set up**: Pro plan, `nexdynegroup.com` verified as a sending domain,
  DNS added via Cloudflare (Google Workspace mail untouched).
- **Google Analytics 4 LIVE** (`G-RG4366SXT8`) with Consent Mode v2 — no cookies
  until the visitor accepts the banner.
- **Cookie banner** redesigned to a centered modal (Bain-style), then made honest.
- **Removed the page-blocking HumanGate** from /contact + /careers (it hard-blocked
  the page when Turnstile was slow). Protection now: Bot Fight Mode + form-level
  Turnstile + edge seal.

### 2026-07-06 — Launch, security, domain
- **Security hardening**: security headers + HSTS, rate limiting on /api/, body
  limits, JWT fail-closed guard, cookie sameSite, exact-PORT bind. Dependency
  audit 76→9 vulns (0 critical/high).
- **Railway** fully configured via API: app service + MySQL (migrations applied,
  lead capture verified end-to-end).
- **Cloudflare**: zone active, SSL Full (strict). Railway's custom-domain routing
  never attached (edge 404'd for hours) → served the site via a **Cloudflare Worker
  reverse proxy** instead. This is why the domain works.
- **Edge seal**: the raw `*.up.railway.app` URL 308-redirects to the domain so bots
  can't bypass Cloudflare.
- **Bot defense**: Cloudflare Bot Fight Mode + Turnstile widget created.
- **Design**: warm flat "veil" image treatment (no gradients) on hero + cards; new
  AI-section image; slim cookie banner.

### 2026-07-14 — Design system: color discipline, type scale, navigation
- **Site-wide color audit COMPLETE** across every section (Homepage, Capabilities
  + subpages, Solutions, Industries, all Case Studies, About). Established and
  applied one rule: **red (`#DE2F23`, primary) leads on light surfaces + every
  button + the hero signal bar; amber (`#FFB41D`) is the accent for dark surfaces
  only (`bg-black`/`bg-charcoal`); charcoal = structure.** Reversed an earlier
  "amber everywhere" pass that under-used the primary. Most pages fixed via shared
  templates. **Full playbook + per-template record: `COLOR_AUDIT.md`.**
- **Type-scale / font sweep COMPLETE** (Bain-style bold, consistent sizing). Root
  cause: ~630 headings used hardcoded raw Tailwind sizes instead of the central
  `nx-*` scale — why sizes didn't match. Converted all hero `<h1>` → `nx-h1` and
  all section `<h2>` → `nx-h2` (in verified buckets: Capabilities, Solutions,
  cases/services, remaining pages, components, h1 pages/components). Enlarged the
  "too small" scale steps in `index.css`: `nx-h3` → 1.3/1.5rem, `nx-lead` →
  1.06/1.25rem; card titles across templates + homepage → bold 24px. Deliberately
  did **not** blanket-sweep `<h3>` (mix of card titles and intentionally-small
  labels — would have broken small labels). Scale lives in `client/src/index.css`.
- **Navbar mega-menus redesigned**: Capabilities/Solutions hover menus trimmed to
  the 6 major capabilities / 4 major solutions with one-line descriptors; featured
  card is now solid `#1b1b1b` with a thin orange top-rule (was the "ugly charcoal"
  box). Kept the "Capabilities" label.
- **Hamburger menu rebuilt** as a Bain-style two-level slide drawer (clear Back
  link + clear ✕ close), plus utility links (Offices/Alumni/Media/Contact/etc.).
  Restrained monochrome (red hover only) after trying and reverting per-section
  color dots. All drawer links verified against real routes.
- **New `/solutions` overview page** built (route was a 404) — full-bleed centered
  hero, red "Get in touch" CTA.
- **Homepage** "core areas of expertise" section → black bg + amber accents + red
  CTA (matches the industry-page dark CTAs).
- **Footer brand line** fixed: "Unleashing the Potential of the Companies Building
  What's Next" → **"Human intelligence, governed and scaled."**
- Note: two dead tracked files exist under `client/src/pages/` (`XXta22kf`,
  `IntelligentProcessOptimization.tsx.backup`) — unreferenced, not built; safe to
  delete in a future cleanup.

### 2026-07-14 (design chat, for context)
- Insights V2: new InsightArticleV2 long-read template; migrated ~90 legacy
  insight/capability/solution articles onto it; fixed 21 broken article links.
- Bain-style redesign of Values, Careers, Contact pages.
