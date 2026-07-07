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
| `nx-surface-charcoal` | `#242424` | Authority bands: perspective statements, insights headers, CTA bands |
| `nx-surface-ember` | `#C93E20` (brand orange deepened for ≥5:1 white text) | ONE high-energy band per page max (expertise/link-list sections) |

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

## 9. Rollout plan (agreed with user)

Homepage = done (v3, live). Next: pick ONE capability page → apply the kit →
propagate template-wide; then industry page → propagate; then remaining
templates. Workflow per page: redesign → `npm run build` → screenshot loop
(desktop 1440 + mobile 390) → user reviews on :31000 → user says push →
`deploy-setup` → ff-merge `main` → verify live.
