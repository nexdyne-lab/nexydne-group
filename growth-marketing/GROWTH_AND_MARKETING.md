# Growth & Marketing Framework

**A portable, step-by-step playbook for standing up a full growth engine on any
company project.** This is the baseline. It was built on NexDyne first; every
piece here is designed to be lifted into the next company's project and shipped
fast.

> **How to use this doc:** read "The model" for the shape, then work the stages
> in order. Each stage has: *what it is · why · the exact steps · the code/files ·
> the env vars.* The **Port-to-a-new-project checklist** at the bottom is the
> fast path when repeating this on the next company.

Last updated: **2026-07-18**

---

## The model — the funnel, in order

Growth is a pipeline. Build it in this order; each stage feeds the next:

1. **Collect** — capture contact info with consent (forms → email list). *Done.*
2. **Give value** — a lead magnet worth an email address. *Done.*
3. **Deliver + gate** — the magnet is only reachable after a capture. *Done.*
4. **Landing pages** — a repeatable, high-converting page per magnet. *Done.*
5. **Nurture** — an automated email sequence that turns downloads into conversations. *Next.*
6. **Drive traffic** — channels that send the right people to the landing pages. *Next.*
7. **Convert** — a low-friction offer ladder from free → paid. *Ongoing.*
8. **Measure** — track lead quality and conversations booked, not vanity metrics.

**Crawl → walk → run.** Ship the minimum that works, prove it converts, *then*
layer on. Don't build the admin CMS, the paid ads, or the 7-channel machine
before the funnel has captured its first real leads.

---

## Stage 0 — Foundations (accounts + hosting)

The stack this framework assumes (swap equivalents freely):

| Concern | Service | Notes |
|---|---|---|
| App hosting | **Railway** | Auto-deploys from `main`. `railway.json` defines build/start. |
| Edge / DNS / CDN | **Cloudflare** | DNS, a reverse-proxy Worker, bot defense, and R2. |
| Transactional email + lists | **Resend** | Verified sending domain + Audiences (lists). |
| File storage (gated assets) | **Cloudflare R2** | Private bucket, S3-compatible. |
| Bot protection | **Cloudflare Turnstile** | Gates every public form. |
| Analytics | **Google Analytics 4** | `VITE_GA_MEASUREMENT_ID`. |
| Lead database | **MySQL** (`DATABASE_URL`) | Stores captured leads + scores. Optional; forms degrade gracefully without it. |

App shape: **Vite + React** front end, **Express + tRPC** back end. The growth
code is small and self-contained — see the **Code file map** at the end.

---

## Stage 1 — Email infrastructure (Resend) + Audiences

**What:** one place to (a) send transactional email and (b) hold your subscriber
lists ("Audiences"), segmented by where each contact came from.

**Steps**
1. Create a **Resend** account. Add and **verify your sending domain** (DNS
   records in Cloudflare). Until verified, sends are rejected.
2. Create an **API key** → `RESEND_API_KEY`.
3. Pick sender addresses on the verified domain (e.g. `insights@`, `contact@`,
   `noreply@`) → `EMAIL_FROM` is the default from-address.
4. Create one **Audience per source bucket** you want to segment. We use two:
   - Newsletter subscribers → `RESEND_NEWSLETTER_AUDIENCE_ID`
   - Resource/lead-magnet downloaders → `RESEND_CASESTUDY_AUDIENCE_ID`
5. Set `LEAD_NOTIFY_TO` — the address that gets "new lead" notifications.

**Code:** [`server/_core/email.ts`](../server/_core/email.ts)
- `sendEmail({to, subject, html, from?, replyTo?})` — REST call to Resend, no SDK.
  No-ops (logs) if `RESEND_API_KEY` is unset, so local dev never breaks.
- `addToAudience({email, firstName, lastName, source})` — upserts a contact into
  the Audience for that `source`. Best-effort: never throws, so a list hiccup
  never fails a signup.
- `AudienceSource` type + `audienceIdFor()` map source → env var. **Add a new
  source here** to create a new segment.

**Principle:** a list-add or email failure must *never* make a form look broken
to the user. Capture first, then best-effort the rest.

---

## Stage 1b — Deliverability, reply handling & warm-up

Sending works ≠ emails reach the inbox, and ≠ you can receive replies. Three
things to get right per company:

**1. Email authentication (the #1 lever — verify it's live):**
- **SPF, DKIM, DMARC** on the sending domain. Resend sets SPF (on a
  `send.<domain>` return-path via Amazon SES) + DKIM (`resend._domainkey`) on
  domain verification. **Ensure a DMARC record exists** (e.g. `p=quarantine`);
  legit mail then passes via DKIM/SPF alignment. Check with
  `dig +short TXT _dmarc.<domain>` etc.

**2. Reply handling — sending address ≠ a mailbox:**
- You can send `From: insights@<domain>` purely via domain verification — no
  mailbox needed. But **replies to it go nowhere** unless that address also
  *receives*. Since we set no `reply_to`, replies route to the `From` address.
- Fix: add the sending address (e.g. `insights@`) as an **alias** on your mail
  provider (Google Workspace: Users → Add alternate email) so replies land in a
  real inbox. Optionally add it as Gmail **"Send mail as"** to reply *as* it.
- This matters because the nurture invites a reply ("reply 'assessment'") — those
  are your hottest leads.

**3. Warm up the domain before volume:**
- New domains land in spam until they build reputation. Start with **~10–20
  emails/day to engaged inboxes** (people who open, reply, mark "not spam", add
  the sender to contacts), then ramp: ~30–50/day week 2, ~100+/day week 3, then
  open real traffic. The clever move: route friendly contacts *through the funnel*
  so the real sending address gets warmed with genuine engagement. Never blast a
  cold list on day one.

## Stage 2 — Collect (forms, verification, storage, notification)

**What:** public forms that capture contacts, block bots, store the lead, and
alert you — all without ever blocking the user.

**Pieces**
- **Turnstile** (Cloudflare) gates every public form. Client widget uses
  `VITE_TURNSTILE_SITEKEY`; the server verifies with `TURNSTILE_SECRET`.
  - Client: [`components/TurnstileWidget.tsx`](../client/src/components/TurnstileWidget.tsx)
  - Server: `verifyTurnstile()` in `server/_core/turnstile.ts`
- **Newsletter signup** → `newsletter.subscribe` (tRPC) → `addToAudience`.
- **Lead capture** (from any gated download) → `leads.capture` (tRPC):
  1. Turnstile gate
  2. `insertLead()` → MySQL `leads` table (with a computed **lead score**)
  3. `addToAudience()` if marketing consent
  4. `notifyOwner()` → owner gets a "new lead" alert
  - Admin-only endpoints: `leads.list / stats / export / analytics`.
- **Analytics:** GA4 via `VITE_GA_MEASUREMENT_ID`.

**Code:** [`server/routers.ts`](../server/routers.ts) (`newsletter`, `leads`, `contact`, `resources` routers),
[`server/db.ts`](../server/db.ts) (`insertLead`, lead scoring),
[`server/_core/notification.ts`](../server/_core/notification.ts).

**Consent:** lead-magnet forms use **single opt-in with a clear notice**
("you'll also get occasional insights, unsubscribe anytime") — standard for
top-of-funnel. Marketing-list adds are tied to that notice.

---

## Stage 3 — The lead magnet (the asset)

**What makes a good one (this matters more than the tooling):**
- **Diagnostic > ebook.** A self-scoring checklist/assessment beats a passive
  read: it creates a result *and* a natural next step (an assessment offer).
- **One specific problem, for one specific person.** Narrow title that says who
  it's for, what problem, and what decision it helps make.
- **Honest.** A framework of questions/checks has no fabricated stats to defend.
- **Ladders to a paid step**, never straight to "hire us."

**How we produce the PDF (brand-controlled, free, repeatable):**
- Author the magnet as **self-contained HTML** (US-Letter pages), then render to
  PDF with **Puppeteer** (`page.pdf`). Screenshot each page to PNG for previews
  + landing-page mockups.
- Pipeline lives in [`lead-magnets/`](../../lead-magnets/): one `*.html` per
  magnet + a small `render-*.mjs`. Serve locally on a port, render, done.
- Brand system for the PDF: charcoal cover + CTA pages, off-white content,
  Instrument Sans, Orange-Red `#DE2F23` as **signal only**, amber for scoring
  bands, printable score boxes.

**Built so far:** *The SMB AI Readiness Guide* (10-question diagnostic),
*The Operations Readiness Checklist* (15-point diagnostic).

> Alternative: any PDF works (Canva, Gamma, Word→PDF). The HTML pipeline just
> gives the tightest brand match for free.

---

## Stage 4 — Gated delivery (private R2 + download endpoint)

**What:** the magnet file lives in **private object storage**, reachable only
through a **gated endpoint** the landing page/email link to — so every download
follows a completed capture, and adding files needs no code deploy.

**Steps (Cloudflare R2)**
1. R2 → **Create bucket** (private; "Public Access: Disabled"). e.g. `nexdyne-assets`.
2. R2 → **Manage R2 API Tokens → Create Account API token**, **Object Read &
   Write**, scoped to that bucket, TTL **Forever**, no IP filter. Copy the
   **Access Key ID + Secret** (S3-style — *not* the "Token value").
3. Set env (local `.env` **and** Railway): `R2_ACCOUNT_ID`, `R2_ACCESS_KEY_ID`,
   `R2_SECRET_ACCESS_KEY`, `R2_BUCKET`. **Railway needs a redeploy** to pick up
   new vars.
4. Upload files to `lead-magnets/<slug>.pdf` in the bucket (S3 API or dashboard).

**Code:** [`server/_core/downloads.ts`](../server/_core/downloads.ts)
- `LEAD_MAGNETS` registry (server side): per magnet → `{title, downloadFilename,
  r2Key, localFile, contentType, email copy, leadSource}`.
- `GET /api/download/:slug` streams from R2 (via `@aws-sdk/client-s3`, R2 is
  S3-compatible), sets `Content-Disposition: attachment`, `X-Asset-Source` header
  (r2|fallback for ops). Registered **before** the SPA catch-all.
- **Soft gate:** the raw file URL is never linked anywhere; only `/api/download/:slug`
  is. Bucket is private, so there's no bypass.

**Delivery email:** `resources.requestGuide` (tRPC) is **slug-driven** — looks up
the magnet in `LEAD_MAGNETS`, emails a branded message with the download link,
adds to the audience, tracks the lead, notifies the owner.

---

## Stage 5 — Landing page template (config-driven)

**What:** one generic, high-converting landing page that renders any magnet from
a config object. Modeled beat-for-beat on **HubSpot's offer-page structure**, in
our brand.

**Structure (each section does a job):** centered wordmark header → **dark hero**
(tag + name + subhead + "Download Now" + magnet mockup) → **"what's inside"
carousel** → **reinforcement section** (copy + mockup + CTA) → **FAQ** (kills
objections) → **dark final-CTA band** → footer. **Every CTA opens a capture
modal** (Turnstile-gated).

**Code**
- Generic component: [`client/src/pages/resources/LeadMagnetLanding.tsx`](../client/src/pages/resources/LeadMagnetLanding.tsx)
- Config registry: [`client/src/pages/resources/leadMagnets.tsx`](../client/src/pages/resources/leadMagnets.tsx)
- Route: dynamic `<Route path="/resources/:slug">` in `App.tsx` → renders the
  template from config, or 404.

**Brand rules (so a new page never looks "vibe-coded"):** use the `nx-*` type
scale (`nx-h1/h2/eyebrow/lead`, `nx-section`); charcoal eyebrows with a thin red
rule; **square uppercase letter-spaced buttons** (`bg-primary`→`primary-hover`);
sharp bordered cards with red-on-hover; red as *signal only*; white/`#FEFEFE`
canvas, charcoal dark bands.

### ▶ To add a new lead magnet (the repeatable recipe — ~30 min)
1. **Make the PDF** (HTML pipeline or any tool) + a cover/peek image.
2. **Upload the PDF to R2** at `lead-magnets/<slug>.pdf`.
3. **Server entry** — add `LEAD_MAGNETS["<slug>"]` in `server/_core/downloads.ts`.
4. **Client entry** — add `LEAD_MAGNETS["<slug>"]` in
   `client/src/pages/resources/leadMagnets.tsx`; drop cover/peek in `public/images`.
5. **Deploy** (`git push`) → live at `/resources/<slug>`, download at
   `/api/download/<slug>`. No new component or route.

> When the team is publishing magnets often / non-technically, graduate steps
> 3–5 into a **DB-backed admin panel** (create/edit form + PDF/image upload →
> publish, no deploy). The config-driven design maps 1:1 to DB rows, so that's a
> clean upgrade, not a rewrite. Don't build it before the volume calls for it.

---

## Stage 6 — Nurture: automated email sequence  *(Code shipped · automation = 1 dashboard step)*

**Goal:** turn a download into a conversation, automatically. Educational, not
four sales emails. Built on **Resend Automations** (native event-driven flows).

**Architecture:** on capture, our backend emits a **per-magnet** Resend event
`magnet.downloaded.<slug>` (`emitEvent()` in `email.ts`, from
`resources.requestGuide`). **Each magnet has its own Resend Automation** (its own
tailored 3 emails — magnet-specific mistake, score bands, and offer),
personalized off `{{{FIRST_NAME}}}`. More relevant = better conversion.

**The sequence**
1. **Deliver** the magnet — sent immediately by our code at capture (not in the automation).
2. **The #1 mistake** — 3 days later.
3. **How to read your score** — 3 days after that.
4. **Invite the assessment** — 4 days after that.

**Trigger API:** `POST https://api.resend.com/events/send` with
`{ event: "magnet.downloaded", email, payload: {slug, magnetTitle, firstName} }`.
Automations can be built via the dashboard (drag-drop or plain-language AI) or
the API. Conditional paths can branch on `payload.slug` for per-magnet copy.

**Full copy + build steps:** [`growth-marketing/nurture-sequence.md`](./nurture-sequence.md)
(3 ready-to-paste email templates + the exact Resend automation flow).

**Status:** ✅ **LIVE (per-magnet).** Two enabled automations (`AI Readiness
Nurture`, `Operations Readiness Nurture`) + 6 published templates, built via the
Resend **API** (reproducible script — see `nurture-sequence.md`). Adding a magnet
= its own 3 templates + 1 automation on `magnet.downloaded.<slug>`.

---

## Stage 7 — Drive traffic (channels)  *(NEXT — to build)*

A live funnel with no traffic collects nothing. Order of channels:

1. **LinkedIn (primary)** — founder posts, insight posts, a "5 signs…" carousel,
   all pointing at a landing page. (Asset pipeline: `social-tiles/`.)
2. **On-site promo** — homepage, Insights articles, service pages, a "Resources"
   nav entry → the landing pages.
3. **SEO content cluster** — supporting articles around the magnet's problem,
   each funneling to it.
4. **Later, only once proven:** partnerships (chambers, fractional CFOs), a
   webinar off the diagnostic, then paid (LinkedIn/Google/retargeting).

**Status:** not yet built.

---

## Measurement & the revenue ladder

**Track (quality, not vanity):** landing-page conversion %, source of each
subscriber, email open/click, downloads, **assessments booked**, strategy
sessions, revenue attributed. The question isn't "how many downloaded" — it's
"did it attract the right leaders, and did some move toward a conversation."

**Revenue ladder — never jump free → big engagement:**
> free magnet → **readiness assessment / diagnostic** → strategy session →
> consulting engagement.

---

## Port-to-a-new-project checklist

Repeating this whole engine on the next company:

**A. Stand up accounts** (once per company)
- [ ] Resend: verify domain, API key, create Audiences, sender addresses
- [ ] **Deliverability:** confirm SPF/DKIM/DMARC live; add the sending address
      (e.g. `insights@`) as a **receiving alias** in the mail provider so replies
      land in an inbox (see Stage 1b)
- [ ] Cloudflare: DNS, reverse-proxy Worker, Turnstile keys, **R2 bucket + token**
- [ ] Railway project (auto-deploy from `main`)
- [ ] GA4 property
- [ ] MySQL (`DATABASE_URL`) for leads (optional but recommended)

**B. Copy the code** (small, self-contained)
- [ ] `server/_core/email.ts`, `downloads.ts`, `turnstile.ts`, `notification.ts`
- [ ] `server/routers.ts` growth routers: `newsletter`, `leads`, `contact`, `resources`
- [ ] `server/db.ts` leads schema + `insertLead` + scoring
- [ ] `client/src/pages/resources/` (`LeadMagnetLanding.tsx`, `leadMagnets.tsx`)
- [ ] `client/src/components/` (`TurnstileWidget`, capture form/modal)
- [ ] `lead-magnets/` PDF pipeline (`*.html` + `render-*.mjs`)
- [ ] Wire the dynamic `/resources/:slug` route in `App.tsx`

**C. Set env vars** (see reference below) in `.env` (local) + Railway (prod)

**D. Rebrand** the design tokens (colors, fonts, logo) + swap copy

**E. Produce the first magnet**, run the add-a-magnet recipe, go live

**F. Warm up the sending domain** (Stage 1b) before driving real traffic

**G. Turn on nurture + channels**

---

## Environment variable reference

**Growth stack (the part this playbook needs):**
```
# Resend (email + lists)
RESEND_API_KEY=
EMAIL_FROM="Company <noreply@yourdomain.com>"
RESEND_NEWSLETTER_AUDIENCE_ID=
RESEND_CASESTUDY_AUDIENCE_ID=
LEAD_NOTIFY_TO=admin@yourdomain.com

# Cloudflare Turnstile (form bot-gate)
VITE_TURNSTILE_SITEKEY=          # client
TURNSTILE_SECRET=                # server

# Cloudflare R2 (gated file storage)
R2_ACCOUNT_ID=
R2_ACCESS_KEY_ID=
R2_SECRET_ACCESS_KEY=
R2_BUCKET=

# Analytics + leads DB
VITE_GA_MEASUREMENT_ID=
DATABASE_URL=
```
**Also present in the app (infra/auth, not growth-specific):** `EDGE_SECRET`
(Cloudflare Worker edge seal), `OAUTH_SERVER_URL` / `JWT_SECRET` / `OWNER_OPEN_ID`
(admin auth), `CLOUDFLARE_API_TOKEN`, `RAILWAY_TOKEN`, `PORT`, `NODE_ENV`,
`VITE_APP_ID` / `VITE_APP_TITLE`.

---

## Code file map (the growth engine)

```
server/
  _core/email.ts          # Resend send + Audiences (lists)
  _core/downloads.ts      # LEAD_MAGNETS registry + gated /api/download/:slug (R2)
  _core/turnstile.ts      # bot verification
  _core/notification.ts   # owner "new lead" alerts
  routers.ts              # newsletter / leads / contact / resources tRPC routers
  db.ts                   # leads table, insertLead, lead scoring
client/src/
  pages/resources/LeadMagnetLanding.tsx   # generic landing template + capture modal
  pages/resources/leadMagnets.tsx         # per-magnet CONFIG registry
  components/TurnstileWidget.tsx          # form bot-gate widget
  App.tsx                                 # dynamic /resources/:slug route
lead-magnets/
  <slug>.html + render-<x>.mjs            # HTML→PDF pipeline
```

---

## Status snapshot (2026-07-18)

| Stage | Status |
|---|---|
| 1. Email infra (Resend) + Audiences | ✅ Live |
| 2. Collect (forms, Turnstile, DB, notify) | ✅ Live |
| 3. Lead magnet asset (PDF pipeline) | ✅ Live (2 magnets) |
| 4. Gated delivery (private R2 + endpoint) | ✅ Live |
| 5. Landing page template (config-driven) | ✅ Live |
| 6. Nurture automation (Resend) | ✅ Live (event trigger + 3-email automation, enabled via API) |
| 7. Channels / distribution | ⏳ Next |
| Admin panel (no-code magnet management) | 🔮 Later (when volume justifies) |
