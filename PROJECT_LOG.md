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

### 2026-07-14 (design chat, for context)
- Insights V2: new InsightArticleV2 long-read template; migrated ~90 legacy
  insight/capability/solution articles onto it; fixed 21 broken article links.
- Bain-style redesign of Values, Careers, Contact pages.
