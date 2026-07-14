# Color Audit — Progress & Playbook

_Last updated: 2026-07-13. Purpose: pause/resume the site-wide color audit. Read this, then continue from "Remaining work"._

---

## 1. The color system (the rule everything follows)

Red (`--color-primary` / `#DE2F23`) is the **primary** brand color and it **leads**. Amber
(`--color-amber` / `#FFB41D`) is the **specialist accent for dark surfaces**. Charcoal/black is
structure. We deliberately reversed an earlier "amber everywhere / red = signal only" pass because
it under-used the primary color.

**The rule:**

| Element | Light surface | Dark surface (`bg-black` / `bg-charcoal`) |
|---|---|---|
| Eyebrow ticks / labels | **red** (`bg-primary` / `text-primary`) | **amber** (`bg-amber` / `text-amber`) |
| Category labels, stat numbers, "→" link arrows | **red** | **amber** |
| Primary CTA **buttons** | **red** (always, both surfaces) | **red** (always) |
| Hero **signal bar** (vertical rule by hero subtitle) | **red** (always) | **red** (always) |
| Hover feedback (`group-hover:text-primary`) | **red** (kept as-is) | (n/a) |
| Body text / headings / structure | charcoal / white | white |

**One-line mental model:** _Red = the brand + every click (buttons, hero signal, hovers).
Amber = accents that sit on a dark background. On light backgrounds, accents are red._

Confirmed by the client with two reference images: amber looks great on dark image bands;
CTAs/accents on light service cards stay red.

**Note on legibility:** amber TEXT on white is weak — that's *why* amber is reserved for dark
surfaces. A red 3px bar or red text reads fine on white.

---

## 2. Status by section

| Section | Status | Notes |
|---|---|---|
| Homepage | ✅ Done & pushed | `Home.tsx`, `SpotlightStories.tsx`, `Footer.tsx` |
| Capabilities (top pages + ~75 AI subpages) | ✅ Done & pushed | Shared templates → covers all capabilities' subpages |
| Solutions | ✅ Done & pushed | overview + `SolutionCat6Template` |
| Industries | ✅ Done & pushed | detail, industry-capability, case-study templates |
| Case studies (all) | ✅ Done & pushed | `/cases` listing (dark band→amber) + `FractionalCFOCaseStudies` eyebrow. All ~270 detail pages ride `IndustryCaseStudyTemplate` (fixed) or `CaseStudyTemplate` (compliant); 8/9 bespoke listings are all-light. Solution case studies (4 majors + subpages) covered via these. |
| **About** | ✅ Done (audited, no changes needed) | `/about`, `/about/values`, `/about/impact`, `/about/team`, `/contact` all audited — already fully compliant (red on light, amber on dark) and well-designed (Big3 editorial). No color/layout fixes required. Open (non-design): `/contact` shows the same email for General/Careers/Press — confirm with client whether to split to careers@/press@. |

**🎉 Site-wide color audit COMPLETE** — every section (Homepage, Capabilities, Solutions, Industries, Case Studies, About) now follows red-leads-on-light / amber-on-dark. Only non-design follow-up: the Contact email split (client input) and the deferred cyan/blue photo swaps + `AITechnologyConsulting` legacy redesign (§4).

---

## 3. What was changed (per template) — the reference for "how we did it"

All templates live in `client/src/components/`. The fix is always: **red accent on a dark section → amber; leave light-surface red and all buttons/hero-signal alone.**

**Homepage**
- `pages/Home.tsx` — dark "Discover our capabilities" section eyebrow = amber; light Careers eyebrow = red; the black "Explore our core areas of expertise" section = amber eyebrow/tab + red "All capabilities" button.
- `components/SpotlightStories.tsx` — light section eyebrow = red.
- `components/Footer.tsx` — newsletter band is **black** (was red `nx-surface-ember`) with an **amber** rule + **red** Subscribe button.

**Capabilities**
- `MarketingMasterTemplate.tsx` — light eyebrows/labels/arrows = red; the **dark** featured band ("Read more") + "OUR PERSPECTIVES" card = amber (they have `drop-shadow`, i.e. sit on dark).
- `ServiceDetailTemplate.tsx` — dark "Outcomes / What clients can expect" section: eyebrow tick + `Check` icons = amber.
- `CapabilityHubTemplate.tsx` — **already compliant, no change** (red on light; hero signal red; footer amber).
- `CaseStudyTemplate.tsx` — **already compliant** (no dark sections; red stat numbers on light hero are correct).
- `InsightArticle.tsx` — **already compliant** (no dark sections).

**Solutions**
- `pages/Solutions.tsx` — dark closing CTA band rule = amber.
- `SolutionCat6Template.tsx` — the `Eyebrow` component now renders an **amber** tick when `onDark` (was always red); raw "Ready to Talk?" eyebrow in the second dark section = amber.
- `SolutionHero.tsx` — **already compliant** (light gradient hero, red on light).

**Industries**
- `IndustryDetailTemplate.tsx` — dark "Work With Us" CTA eyebrow = amber.
- `IndustryCapabilityTemplate.tsx` — dark "Work With Us" CTA eyebrow = amber.
- `IndustryCaseStudyTemplate.tsx` — dark hero badge (`bg-primary/20 text-primary` → `bg-amber/20 text-amber`), dark "The Results" eyebrow + stat numbers = amber. Light quote section + "Related Case Studies" keep red.

---

## 4. Open items (not color-discipline, decide separately)

1. **Off-brand imagery (cyan/blue).** The AI capability hero (cyan-neon glasses) and several insights-card graphics (blue/navy networks) clash with the warm palette. Not fixable by CSS — needs **photo swaps** (per-page `heroImage` prop; insight images in shared data). Client said "forget the photos for now."
2. **`AITechnologyConsulting.tsx`** (`/capabilities/ai-technology-consulting`) — a **legacy bespoke page** using purple (`text-secondary`) hovers + rounded-pill buttons. Not a color tweak; needs a **redesign** to match the site. Flagged, deferred.
3. Minor nits (optional): `CustomModelTuning` has one red button with charcoal text; `Capabilities.tsx` index has a red-highlighted "Consulting" word. Both acceptable.

---

## 5. How to resume (workflow that worked)

**Per template:** grep for color + dark sections, screenshot a representative page, fix red→amber only on dark sections, screenshot to verify, push.

**Grep a template:**
```
grep -nE "bg-black|bg-charcoal|text-primary|bg-primary|text-amber|bg-amber|bg-secondary|text-secondary" client/src/components/<Template>.tsx
```
A section is "dark" if it's `bg-black`/`bg-charcoal text-white`, or an element has `text-white/xx` / `drop-shadow` nearby. `text-charcoal` body text = a **light** section (leave red).

**Dev server:** `http://localhost:3101/` (NOT 3000 — that's a different project).

**Screenshots (Puppeteer's Chrome cache is empty — use system Chrome):**
```js
puppeteer.launch({ headless:'new', executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome' })
```
(Write the throwaway script in the project root so it resolves `puppeteer` from node_modules; `rm` it after.)

**Typecheck before pushing:** `npx tsc --noEmit -p tsconfig.json`

**Scoped git push (MUST — multiple agents share this repo/branch):**
- Only `git add` MY specific files (never `git add -A`). Other agents have uncommitted work — leave it.
- `git checkout main && git merge --ff-only deploy-setup && git push origin main && git checkout deploy-setup`
- Commit trailer: `Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>`
- Heads-up: other agents run `git add -A`, so sometimes my files get committed/pushed by their commit before I push — verify with `git grep -c '<pattern>' origin/main -- <file>` after `git fetch`.

---

## 6. Next action when we return

Audit **About**: screenshot `/about`, `/about/values`, `/about/impact`, `/about/team`; find any
dark sections using red accents → amber; keep light-surface reds + buttons. It's bespoke, so expect
to edit page files directly rather than one template. Then the whole site color audit is complete.
