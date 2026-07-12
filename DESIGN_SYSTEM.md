# NexDyne Design System v3 — the propagation guide

Ratified on the homepage 2026-07-06 (commits `08a186f` → `4b3c1f9`, all live on
www.nexdynegroup.com). **This is the reference for rolling the design out to
capability, industry, solutions, insights, and about pages.** Every pattern
below was user-approved on the homepage; propagate these, don't invent new ones.
Brand tokens (colors, fonts, logo) live in `../BRAND.md`; type scale classes
(`nx-h1/h2/h3`, `nx-eyebrow`, `nx-lead`, `nx-section`, `nx-band`) live in
`client/src/index.css`.

---

## 1. Surfaces — the section-background system

Defined in `client/src/index.css`. Never use flat off-white wall-to-wall;
alternate bands so sections read as deliberate.

| Class | Color | Role |
|---|---|---|
| `nx-surface-white` | `#ffffff` | Photo-card grids, breathers between dark bands |
| `nx-surface-mist` | `#edf1f6` (cool blue-gray) | Listing/carding sections; white cards pop on it |
| `nx-surface-stone` | `#f4f1ea` (warm paper) | Editorial statement moments (currently unused on Home — available) |
| `nx-surface-charcoal` | `#000000` | Authority bands: perspective statements, insights headers, CTA bands |
| `nx-surface-ember` | `#CC2A1E` (brand orange deepened for ≥5:1 white text) | ONE high-energy band per page max (expertise/link-list sections) |

Homepage rhythm (copy this cadence, not necessarily the exact order):
dark hero → mist → white → mist → **ember** → **charcoal** → light → charcoal CTA.
Rule of thumb: never two dark bands adjacent; white/mist breathers between.

## 2. Type on each surface

- **Light surfaces (white/mist/stone):** charcoal headings, `charcoal/75` body,
  orange-red `primary` for category eyebrows/links. Eyebrow pattern:
  `h-[3px] w-9 bg-primary` rule + `text-[12px] uppercase tracking-[0.18em]` label.
- **Charcoal bands:** white headings, `white/70–80` body. **Amber = signal only**:
  eyebrows, numerals, hover states. Never amber body text or headings.
- **Ember band:** white headings/links, cream `#FFE3D8` for eyebrow + secondary
  text (NOT gray-white opacities for long copy). Tab underlines white. Row
  hovers: underline + arrow translate (no color-only hovers).
- Headlines: max 2 lines. If it wraps to 3+, cut the words, not the size.

## 3. Photo treatment — scrims, never veils

- **NO flat warm/colored overlays on photos** (the old `nx-img-warm` look is
  banned — user: "warm and just brown").
- Hero-style text-over-photo: `.nx-scrim-text` — directional gradient, dark only
  under the text column, fades to fully transparent so the photo shows true
  color (93deg on desktop, top-down on mobile). Photo filter stays near-true:
  `saturate(1.02) brightness(0.97) contrast(1.03)`.
- Cards with text over image: DON'T. Use the BCG card pattern (§4.2) instead.

## 4. Section patterns (the reusable kit)

### 4.1 Journey statement band (charcoal) — `Home.tsx` "Our Perspective"
statement (2-line H2 + 1-sentence lead) → numbered pillars (amber `01/02/03`,
white titles, `white/65` copy, `border-white/12` separators) → ONE orange
`PrimaryButton` CTA → rounded topic chips (`border-white/25`, amber hover)
prefixed by a small "Explore by topic" label. Use for: category/capability-hub
intro bands, about-page statements.

### 4.2 BCG hover cards — `components/OperationalExcellence.tsx`
Clean photo (aspect 16/10, zero overlay) + white footer band (orange eyebrow +
charcoal title). Hover/focus: SOLID charcoal panel fades in (opacity-only) with
amber eyebrow, white title, description, `EXPLORE →`. Mobile: stays in footer
state, taps through. Use for: solution/case/offering grids everywhere.

### 4.3 News-briefing row — `components/SpotlightStories.tsx`
One-line header + inline "See all →" text link (no fat button below), 2×2 grid
of wide horizontal cards: fixed thumb column (`w-[124px] sm:w-[190px]`), copy
right (orange category, 1–2 line hook title, one-line blurb + inline arrow).
Whole section ≈ one viewport. Use for: related-insights rails, hub news rows.
Content rule: hooky, timely titles ("X just happened. Here's what it means"),
NOT evergreen labels.

### 4.4 Human-led editorial split — `Home.tsx` AI & Technology section
Photo of real people mid-decision (no sci-fi/abstract stock) on `nx-band` grid
+ **floating charcoal statement card** overlapping the photo edge
(`lg:absolute lg:-right-10 lg:bottom-10`, amber tag, 2-line white statement,
`shadow-[0_28px_64px_-28px_rgba(36,36,36,0.55)]`; mobile: `-mt-12 mx-5`).
Copy side: orange-rule eyebrow, `nx-h2-split`, ONE sentence, 2×2 capability
list with `h-2 w-2 bg-amber` square markers, PrimaryButton + underline text link.
Use for: capability/industry intro splits.

### 4.5 Alignment
All section content sits on `.nx-band` (left edge = nav logo: 76px @md,
100px @lg, max-w 1500px). Full-bleed exceptions: hero, careers split,
subscribe band, footer.

## 5. Interaction rules

- Animate `transform` and `opacity` only. No `transition-all`. Color
  transitions only via `transition-colors` on text/borders (existing idiom).
- Every clickable: hover + focus-visible + active. Card reveals must also fire
  on `group-focus-within`.
- framer-motion entrances: `y: 16–26, duration 0.55–0.7`, ease
  `[0.22, 1, 0.36, 1]`, `viewport={{ once: true }}`, stagger `delay: i * 0.08–0.1`.

## 6. Images

- People > abstractions. Pick photos of humans exercising judgment (working a
  laptop decision, whiteboarding) — this IS the "human intelligence" brand.
  Avoid: VR-cube surrealism, posed arms-crossed-at-camera groups, code-screen
  close-ups.
- **Hero rule (updated 2026-07-07):** the homepage hero now runs the
  user-supplied cinematic "night operations" set (shuttle launch, highway
  light trails, tanker terminal aerial, satellite in orbit — sourced from
  `../Brand Assets/New images/`, processed into `client/public/images/hero/`).
  These images are dark enough to hold white type with NO scrim, glow, or
  gradient overlay — none is used; small hero text carries a subtle
  text-shadow instead. Hero headlines are ALL WHITE (no orange accent line);
  orange appears only on the sub-line signal bar + arrow. The
  human-in-command rule still applies to photos of people elsewhere
  (splits, cards): people deciding, machines ambient.
- Statement bands (e.g. Our Perspective) are deliberately image-free — pure
  typography at display scale is their authority.
- NEVER pull from `../downloaded-images/curated images/` for shipped assets —
  those carry competitor CDN filenames (rights risk). Use the vetted
  `client/public/images/` pool.
- Pool: `client/public/images/` (+ curated originals in
  `../downloaded-images/curated images/`). Don't reuse an image twice on the
  same page (check careers + spotlight before assigning).
- Every photo: `object-cover`, explicit aspect ratio, `ring-1 ring-charcoal/10`
  when free-standing on light surfaces.

## 7. Landmines (do not re-trigger)

- **Never define a Tailwind color token named `base`** — `--color-base` hijacked
  `text-base` (font-size) into `color: charcoal` site-wide. Fixed by removal;
  dark-band backgrounds use `bg-charcoal`.
- Vite preview on :31000 serves `dist` — changes invisible until `npm run build`.
- Puppeteer QC: stepped scroll (500px increments) before positioning; a direct
  `scrollIntoView` after load gets reset by the page. Pre-set
  `nexdyne_cookie_consent` in localStorage.
- Deploy checks: probe `https://www.nexdynegroup.com` (raw Railway host
  308-redirects to it).

## 8. Customer-journey section order (ratified on homepage)

Sequence sections to answer the client's questions in order:
**Who are you** (hero) → **what's current** (news briefing) → **what do you
do** (flagship split, then solution cards) → **where's my topic**
(directory/index band with talk-to-expert) → **prove you're smart**
(insights) → **join us** (careers) → **act** (ember subscribe). Key
principle: show the product before the catalog — wayfinding/index sections
come AFTER the offer sections, never between them. Directory CTAs ("Talk to
an expert") sit late, near decision time.
Note (2026-07-07): the homepage's charcoal "Our Perspective" statement band
was REMOVED — hero slide 1 already carries the HIG™ click, so it read as
noise. The journey statement pattern (§4.1) stays in the kit for interior
pages (capability hubs, about) where no hero slide covers it.

## 9. Capability-page blueprint (EY Technology architecture, ratified on /capabilities/artificial-intelligence)

Implemented in `client/src/components/MarketingMasterTemplate.tsx` (serves the
major capability pages: AI, Business Building, Growth Marketing & Sales,
Strategy & Corporate Finance, Operations, + Enterprise Transformation).
Reference: ey.com/en_gl/services/technology + the service-leader inset from
ey.com/en_gl/services/consulting. **Design only — never touch page data files;
all cards/links/subpages are preserved.**

Section order + treatments:
1. **Typographic intro (pure black `#000000` — the ONLY dark band on the
   page).** White H1, two-column editorial intro: positioning statement w/
   orange signal bar left, supporting narrative right (`inPractice.intro`
   moved up here), orange PrimaryButton + white underline secondary.
   Breadcrumbs variant="light".
2. **Featured thinking full-bleed** — heroImage as a CLEAN editorial photo
   moment: **NO scrim, NO gradient, NO filter** (user removed them — "treat
   it like EY"). Content block is bottom-RIGHT, right-aligned
   (`items-end justify-end text-right`), placed over the photo's natural
   dark zone; amber "Featured thinking · {tag}" eyebrow, white title +
   summary + Read more, all with `drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)]`-
   class shadows. Whole section links to the featured article. Section bg
   is `bg-black`.
3. **Bain-style editorial interlude** (replaces boxed secondary cards):
   split 7/5 — LEFT: `font-serif` prose paragraph (~1.25–1.4rem,
   leading-[1.75], black/90, max-w-[62ch] — template-authored,
   parameterized by capabilityName), then the secondary articles as UNBOXED
   hairline rows (`border-t`, orange tag, semibold title hover→primary,
   orange ArrowRight). RIGHT: photo (`inPractice.image` slot) with text
   DIRECTLY on the photo — **no panel, no scrim**: amber "Our perspective"
   tag + white 2-line statement with drop-shadows, positioned over the
   photo's darkest zone (top-left on the AI page's dusk-boardroom image).
   **The image must be dark/warm enough to carry white text** — that's the
   EY method: legibility comes from image CHOICE + placement, not overlays
   (AI page swapped `ai-team-collaboration.jpg` → `/images/hero/hero-ai.jpg`
   for exactly this reason). Serif is allowed here ONLY as body prose —
   headings stay Instrument Sans.
4. **Ambition = EY topic blocks on light**: borderless black subheads +
   outlined black EXPLORE buttons (fill black on hover).
5. Editorial mega-stats (hairline top rules, big black numerals,
   sentence-case labels). **Exactly THREE metrics per page, and they must be
   OUTCOMES** ("3.2x average ROI within 18 months"), never volume claims
   ("120+ implementations delivered") — user rule; grid is 3-across,
   center-aligned.
6. Services grid (single-column header, no leader inset — user removed the
   Practice Leader block entirely; `closingCTA` lead fields are now unused,
   the placeholder people never ship).
7. Client results: quiet tabs (black underline) + **EY open cards** —
   flush 16/9 image, semibold title directly on the canvas (hover →
   text-primary), muted meta line ("{industry} · {metric}"). NO boxes/rings,
   no hover-reveal panels (BCG hover cards stay a HOMEPAGE pattern only).
8. Leaders grid; Insights rail uses the same EY open card
   (meta line: "{tag} · {readTime}").
9. Closing CTA (light, single column: orange eyebrow, black headline,
   copy, orange Get-in-touch — NO lead photo/name/email block; the practice
   lead appears only as the §6 services inset).

Color rule (user-mandated, 2026-07-11): **capability pages use pure
`#000000`, not charcoal** — every former charcoal token in the template was
swept to black (`nx-surface-charcoal` → `bg-black`, `text-charcoal` →
`text-black`, `ring-charcoal/10` → `ring-black/10`, `border-charcoal/40` →
`border-black/40`, etc.). Charcoal remains a HOMEPAGE token only.
Image rule (user-mandated, 2026-07-11): **never put a gradient, scrim, or
solid panel over a photo** on capability pages. White text sits directly on
the image with drop-shadows; legibility is engineered by (a) choosing photos
with natural dark zones and (b) placing the text block over those zones —
the EY approach.
Canvas rule (user-mandated): **#FEFEFE background for the ENTIRE page except
the black intro** — no mist/stone alternation on capability pages; cards
separate via `ring-1 ring-black/10`.
Container rule (user-mandated): capability pages do NOT use `.nx-band` — every
section sits on the EY-width container
`mx-auto w-full max-w-[1800px] px-6 sm:px-10 lg:px-14` (slim margins, bigger
cards; consistent left edge page-wide).
Spacing rule (user-mandated): capability pages do NOT use `.nx-section` —
sections use the tighter `py-10 md:py-12 lg:py-14` (56px @lg vs 72px).
REMOVED (do not re-add): the "Our Approach / How we deliver X" numbered-pillars
section (`approachPillars` unused in props), the "X in practice" split
(Real Outcomes / How We Help lists — redundant with the case-studies section;
`inPractice.intro` still feeds the §1 intro's right column, rest unused), AND
the "Our Ecosystem" partner-logo chip row (`ecosystemLogos` unused in props).

### 9b. Subpage templates now share this blueprint (2026-07-11)

The two capability-subpage templates were rewritten to the §9 EY format
(user: "apply the same format to all the subpages… keep all our subpages
links… not creating new cards or links"). **Design-only — every prop,
section, card, and link preserved; interfaces unchanged.**

- **`CapabilityHubTemplate.tsx`** (37 level-2 pages, e.g.
  `/capabilities/artificial-intelligence/generative-ai`): black typographic
  intro (photo hero dropped — `heroImage`/`heroFocal` now unused props);
  light editorial mega-stats (was a charcoal band); borderless EY ambition
  blocks + single red CTA (hub ambitions have no per-card href, so no
  per-card Explore button); flat `ring-1 ring-black/10` service cards
  ("Learn more"); EY open cards for thought-leadership + featured cases;
  borderless approach pillars (hairline top rule, red step numerals);
  related-caps as hairline `ring-1` tiles; light closing CTA (red primary +
  outlined-black secondary).
- **`ServiceDetailTemplate.tsx`** (208 leaf pages, e.g.
  `/capabilities/artificial-intelligence/agentic-ai/agent-architecture`):
  same intro/stats/approach/CTA treatment; Challenge/Opportunity two-column
  keeps its structure (red-rule eyebrows, The Opportunity eyebrow in
  primary); Outcomes bullets keep the red Check icons; featured cases → EY
  open cards; related services → `ring-1` hairline cards.
- Both add the local `ease` const + `Eyebrow` helper (copied from MMT).
- These templates serve ALL capability subpages site-wide, so the restyle is
  global across capability subpages (consistency), not just the 6 hubs.
- **"Latest perspectives" now always shows 3 large EY cards** (2026-07-11):
  all 37 hub pages shipped `thoughtLeadership={[]}` → the bare "Insights
  coming soon." is replaced by a curated fallback. Source:
  `client/src/data/capabilityPerspectives.ts` — 3 topic sets (`ai` / `growth`
  / `business`), each 3 cards with **verified** `/insights/*` links + real
  images (the site's own insights catalog over-lists articles whose detail
  routes 404, so links were validated against App.tsx routes, NOT taken from
  Insights.tsx or related-content.ts). Template picks the set via new optional
  `insightsTopic` prop (default `ai`); bulk-set `="growth"` on the 18
  growth-marketing-sales pages and `="business"` on the 9 business-building
  pages; the 10 AI-family root pages default to `ai`. Card = flush 3:2 image,
  red category, 1.35rem title, dek, read-time. If a page ever passes real
  `thoughtLeadership`, it is normalized and used instead of the fallback.
- **Outcomes = the one dark band** on service-detail pages (2026-07-11, user
  picked "dark payoff band"): the `ServiceDetailTemplate` Outcomes section
  moved from #FEFEFE to a `bg-black text-white` band — red-rule eyebrow, white
  H2, 2-col list of `border-t border-white/15` ruled rows with red `Check`
  markers + white/90 text. It's the page's single contrasting moment (the
  black intro + this = the only two dark bands); everything else stays light.
- **Approach pillars: numbers removed** (2026-07-11, user "remove the numbers
  and redesign for professional look"): dropped the red `01/02/03` step
  numerals in BOTH hub + service-detail templates; each pillar now sits under
  a `border-t-2 border-black` rule with a 1.35rem semibold title + body
  (`pillar.step` now unused but kept in the interface).
- Puppeteer QC landmine reconfirmed: `fullPage:true` renders off-screen
  `whileInView` blocks at opacity 0 (huge blank gaps). Capture viewport
  chunks after a stepped pre-scroll instead.

## 10. Rollout plan (agreed with user)

Homepage = done (v3, live). Next: pick ONE capability page → apply the kit →
propagate template-wide; then industry page → propagate; then remaining
templates. Workflow per page: redesign → `npm run build` → screenshot loop
(desktop 1440 + mobile 390) → user reviews on :31000 → user says push →
`deploy-setup` → ff-merge `main` → verify live.
