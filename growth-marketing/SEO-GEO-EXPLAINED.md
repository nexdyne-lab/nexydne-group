# SEO, GEO & Search Console — Explained in Plain English

*What we built, why it matters, and how to explain it to anyone.
Companion to the technical record in [`GROWTH_AND_MARKETING.md`](./GROWTH_AND_MARKETING.md) (Stage 7).
Written July 19, 2026.*

---

## The problem we started with

The website was a great store on a street with **no signs pointing to it** —
and the signs that did exist pointed to the **wrong addresses** (old domains:
`newco.tech`, `nexdyne.tech`). Google and AI tools either couldn't find the
site properly or were being told it lived somewhere else.

---

## 1 · SEO — getting found by search engines (Google, Bing)

> Think of Google as a **librarian cataloging the internet**. We did four
> things so the librarian catalogs NexDyne correctly.

| # | What we did | Plain-English meaning |
|---|---|---|
| 1 | **Fixed the address everywhere** | Every page now declares its true home: `nexdynegroup.com`. Before, pages told Google "my real address is nexdyne.tech" — a domain we don't use. |
| 2 | **Built a sitemap** | A literal table of contents of all **1,116 pages**, so Google doesn't have to stumble around discovering them one link at a time. |
| 3 | **robots.txt** | The "rules at the front door": who may come in, what to skip (`/api/`), and where the table of contents lives. |
| 4 | **3 new search-targeted articles** | Written to match what customers actually type into Google: *"is my business ready for AI"* · *"what should a small business automate first"* · *"AI readiness checklist."* The article answers the search → ends with the free guide → the reader enters the funnel. |

---

## 2 · GEO — getting cited by AI (ChatGPT, Perplexity, Claude, Google AI answers)

> The new game: more and more buyers don't Google — they **ask an AI**. The AI
> answers from what it has read, and cites sources. GEO makes sure that when
> someone asks *"how do I know if my business is ready for AI?"*, **the answer
> comes from NexDyne and mentions NexDyne.**

| # | What we did | Plain-English meaning |
|---|---|---|
| 1 | **llms.txt** | A briefing document written *specifically for AI systems*: who NexDyne is, what we believe (HIG™), our free tools, our key pages. A press kit for robots. |
| 2 | **Structured data (schema)** | Invisible machine-readable labels on pages: "this is an **Organization** named NexDyne, founded by David Seyaker, at this address" · "this is an **FAQ**" · "this is an **Article**." AI systems trust labeled facts more than prose. |
| 3 | **Opened the door** ⚠️ | The big catch: **Cloudflare was actively blocking every AI crawler** (GPTBot, ClaudeBot, Perplexity's bot…). All the GEO work would have been useless with the door locked. We unblocked them (general bot defense stays on). |
| 4 | **Citable content** | The articles are written the way AI likes to quote: a direct answer in the first paragraph, real statistics with named sources, clean definitions. |

---

## 3 · Google Search Console — what is it for?

GSC is **Google's free control panel for website owners** — the only official
way to talk to Google about your site.

**What we did there:**
- ✅ **Verified ownership** of `nexdynegroup.com` (auto-passed via Google Workspace)
- ✅ **Handed Google the sitemap** — all **1,116 pages accepted on the spot**

**What it's for going forward — the scoreboard.** In a few weeks it will show:
- which pages Google has **indexed**
- **what searches people typed** when the site appeared
- how many **clicked**

That's how we'll know the articles are ranking — real data, not guessing.

---

## The one-sentence version

> **SEO makes Google recommend you. GEO makes AI assistants recommend you.
> Search Console is the dashboard where you watch it happening — and all roads
> lead to the free guides, which capture the lead and start the machine.**

## Expectation setting

Nothing here pays off overnight — search and AI visibility **compound over
weeks and months**. But the plumbing is now correct, the doors are open, and
the meter is running.

---

## How it connects to the funnel

```
Someone searches Google  ──►  cluster article  ──►  free guide CTA ─┐
Someone asks an AI       ──►  AI cites NexDyne ──►  visits site ────┼──►  capture → nurture → newsletter → assessment → client
Someone browses the site ──►  promo bands/CTAs ──►  free guide ─────┘
```
