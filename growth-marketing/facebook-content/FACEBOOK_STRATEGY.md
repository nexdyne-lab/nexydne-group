# Facebook Content Strategy — The Three-Style System

*Approved 2026-07-19. Modeled on how HBR, McKinsey, and Entrepreneur run their Facebook pages — chosen deliberately because all three styles are sustainable without a graphic designer.*

A mix is exactly right — and the good news is these three styles map perfectly onto an effort ladder, from free to cheap to occasional. Here's the read on each:

## Style 1 (HBR — bare link, let the preview card do the work)

Our zero-effort workhorse, and we're already fully equipped for it. That preview card — hero image, domain, headline — is precisely the OG meta system we just finished building for all 407 routes. Paste any nexdynegroup.com article link into Facebook and you get that card automatically. Notice what HBR actually does though: the **caption** carries the weight — a first-person, human hook ("I surprised myself by reading 50 books…"), not a summary. That's the skill in this style, and it costs nothing but good writing. This should be the default for 2 of every 3 posts.

## Style 3 (Entrepreneur — photo, gradient, headline on image)

The best value-for-effort of the three, and we can produce it nearly for free: we already have the `social-tiles/` HTML→PNG pipeline and 268 curated stock photos sorted by topic. A NexDyne version writes itself — photo, charcoal gradient rising from the bottom, small NexDyne wordmark where Entrepreneur puts theirs, headline in our display serif, maybe our thin red rule above it. One template, then every new post is just "swap photo + headline." This is the weekly "flagship" look.

## Style 2 (McKinsey — full infographic tile)

The highest effort and only fits certain content: framework and listicle pieces ("4 ways…", "5 steps…", checklists). Our pipeline can do it — we built carousel tiles this way — but each one needs real layout care. Reserve it for 1–2 posts a month on our strongest framework articles (the AI readiness checklist, what-to-automate-first, Shadow AI), where a numbered tile genuinely earns the extra shares.

## The rhythm

**Per week: two Style 1 link posts with a strong human hook, one Style 3 gradient tile; Style 2 monthly for framework pieces.** That's sustainable without a designer and still looks like a publication, not a startup improvising.

One practical note: Facebook is not yet connected in Spool, so posting is manual until that's linked.

Next step when ready: build the Style 3 and Style 2 templates into the social-tiles pipeline and produce the first batch (one gradient tile + captions for the first week of posts) for review before anything goes out.

## How this folder works

- **One subfolder per month** (`2026-07/`, `2026-08/`, …). Files inside are named by post date + slug, e.g. `2026-07-23-shadow-ai-tile.png`, `2026-07-23-caption.md`.
- **`Facebook Content Calendar.xlsx`** (this folder) is the single tracker — every planned post, its style, article link, image asset, and status. Update the Status column as posts go out.
- Posting days are **Mon / Wed / Fri** — deliberately offset from the LinkedIn queue (Tue / Thu) so the two channels never compete on the same day.
