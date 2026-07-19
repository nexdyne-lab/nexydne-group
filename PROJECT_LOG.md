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
- **Canonical red not settled**: `#DE1C26` (owner's latest) vs `#DE2F23` (current
  site/log) vs `#E04C2C` (older code). Pick one and sweep app code + social tiles +
  THEME_REFERENCE in one pass. (See 2026-07-15 social/collateral changelog entry.)
- **"Mid-Size" in a few article/hub titles** (e.g. ai-roi-framework, lean-operations) —
  hub subtitles were cleaned to "growing companies" but the article H1s were left
  (changing one desyncs the hub card that mirrors it); a matched sweep would fix both.
- **A few fabricated named quotes** still sit inside some migrated article bodies
  (e.g. BuildingDataCulture's "Sarah Jenkins, CDO") — role-ify in a content pass.
- **Citations**: most insight articles cite no sources — optional Perplexity pass
  to add Big3-style references. (Broken insight-hub links — RESOLVED 2026-07-15.)

---

## Changelog (newest first)

### 2026-07-19 — Warm-up underway + Newsletter Issue 01 SENT + Turnstile hotfix

- **Turnstile hotfix:** yesterday's preload fix had added `turnstile.ready()`,
  which throws in explicit-render mode → EVERY capture modal showed "couldn't
  load verification" in prod. Removed the call (render directly); verified live;
  security unchanged (client token requirement + server verifyTurnstile intact).
- **Domain warm-up started:** 3 fresh Gmail inboxes through the funnel (all
  delivered, in audience — also proves the Turnstile fix in the wild);
  insights@ saved to contacts in each; ~10 more to go per warmup-emails.md
  (kept outside the repo).
- **Newsletter Issue 01 sent** via Broadcast API to the 7-contact warm-up
  audience — all delivered. Send log in growth-marketing/newsletter.md.

### 2026-07-19 — Lead-magnet PDFs redesigned: minimal document style (Video-Guide look)

- Both guide PDFs restyled per David's direction: professional/minimal like the
  NexDyne Video Production Guide — white pages, generous margins, red section
  heads + bold lead-ins ("Why it matters —", red "Warning signs —"), hairline
  dividers, NO cards/boxes. Charcoal cover + closing CTA bookends kept. Same
  content, new typesetting. AI guide now 7pp; Ops checklist 5pp (denser, doc-like).
- Sources rewritten in `lead-magnets/*.html`; re-rendered; **uploaded to R2 at
  the same keys** (download endpoints served the new files instantly — no
  deploy needed for the PDFs). Cover/peek images regenerated into
  `client/public/images/` (peeks now show the clean typeset pages).
- CTA pages now also carry the postal address (email-compliance consistency).
- Note: still interim — the professional design pass David is commissioning
  will replace these via the same swap (R2 key + images).

### 2026-07-19 — LinkedIn LAUNCHED: page live, post #1 published, 6-post queue built

- **Company page live** (`linkedin.com/company/nexdyne-consulting-group`) with
  logo, banner, tagline, About (links /resources), location.
- **Post #1 (founder launch) published from David's profile** — @NexDyne tag,
  guide link, early traction within minutes. Coaching: David's headline to lead
  with "Founder & CEO, NexDyne Consulting Group".
- **Queue built + dated through Aug 5** in `growth-marketing/linkedin-launch.md`:
  #2 carousel Tue 7/22 (**7-slide PDF rendered** —
  `social-tiles/out/nexdyne-5-signs-carousel.pdf`, "5 signs you're not ready
  for AI"), #3 Shadow AI Thu 7/24, #4 Operations Tue 7/29, and **two researched
  timely posts**: #5 "the 88% problem" Thu 7/31 (agent-pilot failure data →
  readiness thesis), #6 "regulation whiplash" Tue 8/5 (Colorado AI-law rewrite +
  EU Aug-2 transparency rules → govern-yourself doctrine).
- Open: attention images for posts #3–#6 (social-tiles stat/question tiles;
  David picking reference styles).

### 2026-07-18 — LinkedIn (Stage 7 pt 2) kickoff: company-page assets + strategy

- Strategy set: **founder-led** — David's personal profile is the posting engine
  (people-posts get ~5–10× company-page reach); the company page is the trust
  storefront (reposts + credibility).
- Generated exact-spec page assets via the social-tiles pipeline (outside repo,
  in `social-tiles/out/`): `linkedin-banner.png` (1128×191 @2x — charcoal,
  "Human intelligence. Governed. Scaled.", white wordmark, left third kept clear
  of the avatar overlap) and `linkedin-logo.png` (300×300 @2x — brand mark on
  white). Sources: `social-tiles/li-banner.html`, `li-logo.html`, `li-shot.mjs`.
- Page copy written (tagline + About with /resources link). Next: launch posts
  (founder post + "5 signs" carousel).

### 2026-07-18 — Email compliance + format hardening (all sends)

- Audit of the newsletter format surfaced two real gaps; fixed across the board:
  - **CAN-SPAM physical address** added to every commercial email footer:
    5 newsletter drafts (updated in place, still drafts), all 6 nurture
    templates (re-published), and the delivery email (routers.ts).
  - **First-name personalization** in the newsletter: `Hi {{{FIRST_NAME|there}}},`
    (pipe-fallback works in Broadcasts, not Templates).
- Rebuilt the newsletter skeleton as **table-based email-safe HTML** (600px,
  Arial stack, inline styles) for old-Outlook reliability, and added a proper
  **signature block** (name, tagline, address, links).
- Format standards documented in growth-marketing/newsletter.md.

### 2026-07-18 — Newsletter (Stage 6b): "NexDyne Insights" — 5 issues drafted in Resend

- Closed the offer-ladder gap between nurture (10-day bridge) and assessment:
  the **ongoing newsletter relationship**. Monthly "NexDyne Insights": one hook
  question, two curated reads (problem lead + constructive follow-up), one quiet
  rotating CTA, reply prompt.
- **5 issues written** (`growth-marketing/newsletter-issue-01..05.html`) from
  the existing /insights catalog — issue 1 leads with "Shadow AI Is the New
  Shadow IT" (sharpest SMB hook in the catalog); then automation ROI, scaling,
  agentic-AI budget, cash discipline.
- **All 5 created as DRAFT Broadcasts in Resend** (verified status=draft,
  nothing sent) targeting the Case-Study Leads audience. Send monthly after the
  domain warm-up; workflow + issue bank + gotchas in
  `growth-marketing/newsletter.md`.
- Gotcha: Broadcasts support `{{{RESEND_UNSUBSCRIBE_URL}}}` + pipe-fallbacks
  (Templates don't); a broadcast targets one audience.

### 2026-07-18 — Stage 7 on-site promo: service-page CTAs (plan-compliance gap closed)

- Audit vs. the original lead-magnet plan flagged one missing website channel:
  the AI/Operations **service pages** didn't promote the magnets.
- Added an optional `readinessTool` prop to `MarketingMasterTemplate` — renders a
  black promo band (red rule + cover on a **red offset panel** so the charcoal
  booklet reads on black) before the closing CTA.
- Wired on `/capabilities/artificial-intelligence` (→ AI guide) and
  `/capabilities/operations` (→ Ops checklist). Any other template page can opt
  in with the same prop.
- Remaining plan deltas (deliberate): exit-intent popup deferred until baseline
  conversion is known; audience tagging lives in the leads DB + per-magnet
  events (Resend contacts can't hold rich tags).

### 2026-07-18 — Stage 7 (traffic) part 1: on-site promo for the lead magnets

Four surfaces now feed existing site traffic into the funnel (all verified on
localhost before push; nx-* editorial system throughout):

- **"Resources" nav entry** — desktop bar + mobile drawer (Careers direct-link
  pattern) → `/resources`.
- **`/resources` hub page** (`pages/resources/ResourcesIndex.tsx`) — charcoal
  hero, cards for both magnets (covers, meta, checks, square CTAs), assessment-
  ladder close. Add future magnets to its `TOOLS` array.
- **Homepage promo band** — charcoal split band between Spotlight and Careers:
  "Know whether you're ready — before you invest" + both covers → `/resources`.
- **Article-end CTA on all 115 Insights articles** — one edit to
  `InsightArticleV2`: bordered red-rule callout after the byline → AI guide +
  all resources.
- **Footer** — "Free Resources" link in the footer nav.

### 2026-07-18 — Deliverability: reply handling, insights@ alias, auth verified, warm-up plan

- **Reply handling:** emails send `From: insights@nexdynegroup.com` with no
  `reply_to`, so replies route to `insights@` automatically (verified on sent
  emails). Sending ≠ receiving — so added `insights@` as a **Google Workspace
  alias** (now receives → David's Gmail) + Gmail "Send mail as" (reply *as*
  insights@). `insights@` now both sends (Resend) and receives. Matters because
  nurture #4 asks prospects to reply "assessment".
- **Email auth verified (the #1 deliverability lever, all in place):** SPF (Resend
  return-path `send.nexdynegroup.com` via Amazon SES), DKIM (`resend._domainkey`),
  DMARC (`p=quarantine`). Legit mail passes via DKIM+SPF alignment.
- **Domain warm-up plan** documented in the playbook (start ~10–20/day to engaged
  inboxes, ramp over 2–3 weeks) — do before driving real traffic.

### 2026-07-18 — Funnel tested end-to-end; nurture live at production cadence

- Verified the full lead-magnet funnel in production (real download → gated R2
  delivery email personalized with the real name → per-magnet nurture with
  "Hi there," + working unsubscribe). Fixed the greeting + Turnstile issues found
  during testing (see entries below).
- Both nurture automations restored from 1-min test mode to **3 days / 3 days /
  4 days** and enabled. **Stage 6 fully live.** Remaining: Stage 7 (traffic).

### 2026-07-18 — Fix: Turnstile "verification could not load" on first modal open

- `TurnstileWidget` lazy-loaded the Cloudflare script only when the capture modal
  first opened → cold-load race → "could not load", needed a page refresh.
- Fix: **preload the script at module import** (page load), gate render behind
  `window.turnstile.ready()`, add `retry:"auto"`, and replace the "please
  refresh" dead-end with a self-healing **"Try again"** button (re-renders, no
  reload). Affects every public form (lead magnets, case studies, contact).

### 2026-07-18 — Nurture branched per-magnet (Stage 6 upgrade)

- Switched nurture from one shared sequence to **per-magnet automations** for
  relevance/quality. Code now emits `magnet.downloaded.<slug>` (was
  `magnet.downloaded`).
- Deleted the old generic automation + 3 templates. Built via API: **6
  magnet-specific templates** (`ai-nurture-*`, `ops-nurture-*`) + **2 enabled
  automations**: `AI Readiness Nurture` (`019f7740-4be0-…`) and `Operations
  Readiness Nurture` (`019f7740-4cb2-…`). Each: trigger → 3d → 3d → 4d, with
  tailored mistake / score-band / offer copy (AI Assessment vs Operations
  Diagnostic).
- Adding a magnet now includes making its own 3 tailored templates + 1 automation
  on `magnet.downloaded.<its-slug>`; skipping is harmless (delivery email only).
- Updated nurture-sequence.md + GROWTH_AND_MARKETING.md.

### 2026-07-18 — Nurture automation (Stage 6): LIVE — Resend automation built via API + enabled

- Built the full 3-email nurture sequence in Resend **via the API** (not the
  dashboard): 3 published Templates + one **enabled** Automation `Lead Magnet
  Nurture` (`019f7727-8faf-71e8-8825-9f0426a79ab0`), triggering on the
  `magnet.downloaded` event → 3d → N2 → 3d → N3 → 4d → N4.
- Gotcha logged: `{{{FIRST_NAME}}}` is a **reserved** template variable — reference
  it in HTML but do NOT declare it in the `variables` array (422). Delay step =
  `{type:"delay", config:{duration:"3 days"}}`.
- Reproducible API script + copy + IDs in `growth-marketing/nurture-sequence.md`
  ("Built via API"). GROWTH_AND_MARKETING.md Stage 6 → ✅ Live.
- Verify: real download → Resend → Automations → Runs shows enrollment waiting on
  the 3-day delay. (Delivery email #1 still sent immediately by capture code.)

### 2026-07-18 — Nurture automation (Stage 6): Resend event trigger shipped

- Added `emitEvent()` to `server/_core/email.ts` — posts a custom event to Resend
  (`POST /events/send`), best-effort/no-throw like the other email helpers.
- `resources.requestGuide` now emits **`magnet.downloaded`** on every capture
  (payload: `slug`, `magnetTitle`, `firstName`) — the trigger for a Resend
  **Automation** nurture flow. Personalized off firstName + magnetTitle, so one
  linear sequence serves all magnets.
- Sequence (deliver now → #2 in 3d → #3 in 3d → #4 in 4d) + 3 ready-to-paste
  email templates + exact Resend build steps documented in
  `growth-marketing/nurture-sequence.md`. GROWTH_AND_MARKETING.md Stage 6 updated.
- **Open:** build the automation + 3 templates in the Resend dashboard (one-time;
  events are recorded until it's switched on, so nothing is lost meanwhile).

### 2026-07-18 — Growth & Marketing engine: lead magnets, gated R2 delivery, config-driven landing template + framework doc

Built the full top-of-funnel lead-magnet system and captured it as a **portable
playbook** for reuse across other companies.

- **Lead magnets (2 live):** *SMB AI Readiness Guide* (10-question diagnostic) and
  *Operations Readiness Checklist* (15-point). Authored as self-contained HTML,
  rendered to PDF via Puppeteer (`lead-magnets/*.html` + `render-*.mjs`).
- **Gated delivery via private Cloudflare R2** (`nexdyne-assets` bucket): new
  `GET /api/download/:slug` streams from R2 (`@aws-sdk/client-s3`), soft-gate
  (raw file never linked; only the endpoint). `server/_core/downloads.ts` holds
  the `LEAD_MAGNETS` server registry (file + email copy). Env:
  `R2_ACCOUNT_ID/ACCESS_KEY_ID/SECRET_ACCESS_KEY/BUCKET` (local + Railway; Railway
  needs a **redeploy** to pick up new vars — that bit us once).
- **Config-driven landing template** modeled on HubSpot's offer page in NexDyne
  brand: `client/src/pages/resources/LeadMagnetLanding.tsx` (generic component +
  capture modal) + `leadMagnets.tsx` (per-magnet config) + dynamic
  `/resources/:slug` route. **Adding a magnet = R2 upload + 2 config entries + a
  deploy** (no bespoke page). Design uses the `nx-*` system (not generic Tailwind).
- **Capture** reused/extended: `resources.requestGuide` mutation is now
  slug-driven (per-magnet delivery email, audience add, lead tracking, owner
  notify); Turnstile-gated.
- **Framework doc:** `growth-marketing/GROWTH_AND_MARKETING.md` — the full
  step-by-step playbook (email infra → collect → magnet → R2 → template →
  nurture → channels) with a **port-to-a-new-project checklist**, env reference,
  and code map. This is the baseline to replicate on the next company.
- **Open / next:** automated **nurture email sequence** in Resend (4 emails) and
  **distribution channels** (LinkedIn + on-site promo + SEO). Admin panel for
  no-code magnet management deferred until volume justifies it.

### 2026-07-16 — Case-study migration waves 1–3 (12 pages done)
- Migrating all OLD-template case studies onto the approved IndustryCaseStudyTemplate,
  in reviewed waves. Routes/URLs UNCHANGED; each page's own numbers preserved; no
  fabricated quotes (template now hides the quote section when none is provided);
  industry links + hero images verified per page. Selection = grep old-template import
  (approved pages excluded by construction); each file git-proven old before migration.
- Done: wave1 (3 solution CI cases), wave2 (accounting-firm, credit-union, medical-practice),
  wave3 (airline-maintenance, energy-grid, financial-compliance, insurance-climate,
  logistics-cold-chain, media-content). Commits 072d5f7, 72fd764, 71b2cc8.
- Remaining: ~42 routed old-template case pages (of 51 routed; 39 unrouted/dead are skipped).
  Continue in waves of ~6, same pattern.


### 2026-07-16 — Case-study template consistency (wave 1)
- Migrated the 3 Data-Driven Customer Intelligence **solution** case studies
  (bank-cross-sell, saas-churn-reduction, ecommerce-repeat-purchase) from the OLD
  `CaseStudyTemplate` to the approved `IndustryCaseStudyTemplate` (same design as
  `/cases/aerospace-digital-engineering`). Routes/URLs unchanged; each page's own
  numbers preserved. User-approved on localhost before push. Commit 072d5f7.
- **KNOWN INCONSISTENCY (mapped, not yet fixed):** the site has TWO case-study
  templates. Approved = `IndustryCaseStudyTemplate` (rich: client context, structured
  challenge/approach/results). Old = `CaseStudyTemplate` (challenge/solution/impact
  blobs). **127 pages still on the OLD template**, incl. **82 under `/cases`** (e.g.
  AirlineMaintenance, BankCoreModernization) + many `/capabilities/case-studies/*`.
  The `/cases` section is itself a mix. Migrating each = careful per-page content
  restructure (NOT mechanical). Plan: do in waves, keep each page's own content,
  routes untouched, QC vs aerospace, prove-before-push. Also: prominent charcoal
  Download PDF button was added to `CaseStudyTemplate` (132 pages) — that stays
  useful until those pages are migrated off it.


### 2026-07-15 — Social media, brand collateral & launch posts (content-design session)
This was a **brand/marketing-content** session, mostly outside the app code. All
outputs live in **`social-tiles/`** (project root, not `site-a-neutral/`).
- **Social-tile pipeline built**: `social-tiles/tile-N.html` → PNG via
  `node social-tiles/tile-shot.mjs [WxH] N...` (needs `node serve.mjs` on :3000).
  Shared isometric/mesh SVG helpers in `social-tiles/lib-iso.js`. ~26 tiles across
  registers: **editorial-split** (image untouched + off-white text panel — the
  clean/HBR default for insight posts), **typographic** (charcoal or off-white —
  stats/quotes/doctrine), **photo-overlay** (light scrim, brand-moment only), and
  **square 1080²** templates modeled on the Strategy/Tungsten FB pages
  (CASE STUDY / BLOG / INSIGHT / LIVE BRIEFING / We're Hiring). Photo **scrim
  recipe** codified in `Brand Assets/Brand Revision and USP/THEME_REFERENCE.md` §6.
- **Facebook drafts**: 10 posts saved as **Spool drafts** (4 homepage spotlight
  insights + HIG doctrine, 65% churn stat, USP, careers, NPS photo-canvas).
  **Facebook is NOT connected in Spool** — needs Meta app creds (client id/secret)
  before anything can publish; direct posting also needs public image URLs.
- **Hero-carousel illustrations**: 4 custom SVG iso line-art backgrounds (sources
  `social-tiles/tile-20..23.html`) exported to
  `social-tiles/out/hero/hero-{hig,ai,ops,cloud}.jpg` (2560×1440, ~280KB). Named to
  **drop-in replace** `client/public/images/hero/hero-*.jpg` (the 4 slides in
  `BainHeroCarousel.tsx`). **NOT yet integrated** — handed to another session to swap.
- **Public-launch posts** (finished, in `social-tiles/out/posts/`):
  - `public-sector-milestone.jpg` + caption — company's **first public-sector
    milestone**, framed as "a State of Michigan agency" (MDHHS deliberately NOT
    named/sealed, for publicity-rights safety). Charcoal register; links to
    /industries/public-sector + /capabilities/artificial-intelligence. Signed by
    David Seyaker, Founder & CEO.
  - `hiring-creative-director.jpg` (charcoal) + `hiring-creative-director-red.jpg`
    (**red hero-moment, recommended**) + caption — **fractional / remote Creative
    Director**, reports to Founder & CEO, owns NexDyne + every client/partner's
    visual voice. Links /careers.
  - **Post 2 (founder David steps forward as CEO to lead growth & marketing)** —
    planned, NOT yet built.
- **Brand v2 colour fix** (early in session, app code): 52 replacements / 28 files —
  purple `bg-secondary` CTAs → `bg-primary`, removed legacy cyan-glow shadows,
  fixed self-hover no-ops, quiz progress bars → amber. Subsumed by the definitive
  2026-07-14 COLOR_AUDIT; logged for history.
- **⚠ Red hex divergence (open)**: three reds now in play — user's latest **official
  `#DE1C26`** (used on the red hiring tile), the site/log standard **`#DE2F23`**, and
  older live code **`#E04C2C`**. Needs one reconciliation pass to pick the canonical
  red and sweep app code + tiles + THEME_REFERENCE together.

### 2026-07-15 — Design: Bain-style page redesigns + full Insights V2 migration
- **New long-read article template `components/InsightArticleV2.tsx`**: reading-progress
  bar, editorial masthead, full-bleed hero, two-column body with a **sticky left-rail
  live TOC + share**, orange drop cap, numbered Key Takeaways panel, refined typography
  (orange-border pull-quotes, inline `<Cite>`), author byline, charcoal CTA. Drop-in
  compatible with the old `InsightArticle` props (+ optional `sections` for the TOC).
- **Migrated ALL 112 insight articles onto V2** via subagent waves: 91 top-level
  `/insights/*` + 21 nested (`capabilities/insights/*`, `solutions/.../insights/*`).
  Preserved content; dropped ~10 fabricated author bylines; tsc/build clean each wave.
- **Insight hubs fixed + restyled**: the 6 capability hubs + CI index advertised
  **21 broken/phantom article links** — all repointed to real articles (**0 broken**).
  Redesigned the shared `components/InsightsListing.tsx` (light masthead + refined
  cards + charcoal CTA).
- **`/insights` landing redesigned** to the V2 aesthetic: light photo-hero + card
  panel (was a dark charcoal overlay), uniform image-led article cards (orange
  eyebrow), rounded filter pills, off-white bands, bordered "coming soon" cards.
- **About cluster redesigned** using Bain's "Our Social Impact" as reference — About,
  Our Impact, Purpose/Mission & Values, Careers, Contact: photo heroes with light card
  panels, split feature cards, image-led card grids, "Ready to talk?" contact rows.
  Instrument Sans only (no serif), light heroes (no dark), brand palette.
- **Leadership consolidated**: removed duplicate `/team` (redirects → `/about/team`);
  `/about/team` in McKinsey "Our People" format with a **David Seyaker founder card**
  above 6 AI managing partners; removed Raphaelyn from the grid.
- **David's title** → **"Founder & Chief Executive Officer"** (sole founder; corrected
  from Co-Founder) on About + team.
- **Footer tagline**: removed BCG's "Unlocking the Potential of Those Who Advance the
  World"; current line = **"Human intelligence, governed and scaled."**
- **Process cleanup**: killed ~16 orphaned `tsx watch`/vite-preview dev-server node
  processes (some 8 days old) that had exhausted app memory.

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
