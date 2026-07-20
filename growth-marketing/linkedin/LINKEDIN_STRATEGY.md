# LinkedIn Growth Strategy — Single Source of Truth

*NexDyne Consulting Group · founder-led LinkedIn engine. This folder is the one
place for everything LinkedIn: strategy, calendar, post copy, and visual assets.*

## The strategy: founder-led

David's **personal profile** is the posting engine — person-posts get roughly
**5–10× the reach** of company-page posts. The **company page**
(`linkedin.com/company/nexdyne-consulting-group`) is the trust storefront: it
reposts David's content ~2 hours later and holds the brand assets.

**Why founder-led:** for a new firm, a named human with a point of view earns
attention that a logo cannot. Every post rides under David's headline, so his
headline leads with **"Founder & CEO, NexDyne Consulting Group."**

## Posting mechanics (every post)

- Post from the **personal profile**; tag `@NexDyne Consulting Group` (type `@`, pick from the dropdown).
- **Best window: Tue–Thu, 8–10am ET** (deliberately offset from Facebook's Mon/Wed/Fri).
- **Reply to every comment in the first hour** — early conversation is the single biggest reach driver.
- **Repost from the company page ~2 hours later.**
- End with a **genuine question** to start comments.
- **3–4 niche hashtags max.**
- **Links:** in-post is fine for launch; test link-in-first-comment on later posts (LinkedIn slightly suppresses posts with outbound links in the body).

## Content mix (the rhythm)

- **~2 posts/week**, Tue + Thu.
- **Text/story posts** (a hook, a short story or argument, a question) are the backbone — highest reach, zero production cost.
- **Carousels (PDF documents)** for framework/listicle pieces — LinkedIn favors native documents; they earn dwell time and saves. Reserve for strong frameworks (e.g. the "5 signs" carousel). Build via the render pipeline (see Assets).
- **A single strong image** occasionally, for milestone or announcement posts.
- Repurpose the same insight article across channels, but **re-write per channel** — LinkedIn is first-person and professional; never paste the Facebook caption.

## How this folder is organized

- **`linkedin-posts.md`** — the master content plan: full copy for every post (#1–#6+), publish status, and coaching notes. This is where post text lives.
- **`LinkedIn Content Calendar.xlsx`** — the tracker: date, post #, type, topic, asset, status. Update Status as posts go out.
- **`2026-07/`, `2026-08/`, …** — one folder per month holding that month's **visual assets** (carousel slides, PDFs, post images), named by post date. Each has a `POSTS.md` index.
- **`assets/page/`** — the LinkedIn Page identity: `linkedin-logo.png` (300×300) + `linkedin-banner.png` (1128×191).
- **`assets/hero-backgrounds/`** — 4 custom iso line-art backgrounds (HIG / AI / Ops / Cloud) for post images.
- **`assets/extra-visuals/`** — milestone/hiring/one-off post images not tied to the core queue.

## Render pipeline (where the machinery lives)

The HTML templates and Puppeteer render scripts stay in **`social-tiles/`** (the
shared render workspace), not here — finished deliverables get copied into the
monthly folders above. Key files:
- `social-tiles/li-banner.html` + `li-shot.mjs` → the 1128×191 page banner
- `social-tiles/li-logo.html` → the 300×300 page logo
- `social-tiles/li-carousel.html` + `li-carousel-shot.mjs` → carousel slides → `out/` → assembled to PDF
- `social-tiles/lib-iso.js` + `tile-20..23.html` → the iso line-art hero backgrounds

**New carousel:** edit `li-carousel.html`, run `li-carousel-shot.mjs`, combine the slide PNGs into a PDF, drop both into the month folder.

## Backlog / ideas
- **Branded short links** (`go.nexdynegroup.com/<slug>` via Cloudflare redirect + UTM) for per-post click attribution — the McKinsey `mck.co` pattern, free on our stack. Would let us test link-in-body vs link-in-comment properly.
- **Attention images for posts #3–#6** (drop zones: `social-tiles/post-images/`, `post-image-refs/`).
- Post-performance review in GSC/LinkedIn analytics after the first month.

Related: `../facebook-content/` (Facebook system), `../GROWTH_AND_MARKETING.md` (master playbook).
