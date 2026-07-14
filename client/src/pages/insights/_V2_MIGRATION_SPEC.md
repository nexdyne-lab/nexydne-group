# InsightArticleV2 Migration Spec (TEMP — delete when done)

Goal: migrate insight article pages in `client/src/pages/insights/` onto the approved
`@/components/InsightArticleV2` long-read template. Preserve 100% of the real content.
Match the quality of the exemplar `AIAdoptionOutlook2026.tsx`.

## InsightArticleV2 props (drop-in superset of InsightArticle)
- `category: string` (eyebrow, e.g. "Strategy & Finance")
- `categoryHref?: string` (default "/insights")
- `title: string`
- `subtitle: string` (the dek)
- `heroImage?: string` (path under /images/… — REQUIRED: keep the article's existing hero image; if none, reuse the most relevant existing /images asset already referenced in the file)
- `publishDate?: string` (e.g. "June 2026") and/or `readTime: string` (e.g. "8 min")
- `keyTakeaways?: string[]` — 3–4 crisp bullets
- `references?: { label: string; url: string }[]` — ONLY if the article actually cites sources
- `relatedInsights?: { title, category, link, image }[]` — 3 items
- `authors?: { name: string; role: string }[]`
- `sections?: { id: string; label: string }[]` — the sticky TOC (one per <h2>)
- children = the article body as JSX

## The body (children) — clean JSX only
Use ONLY these tags inside the component: `<p>`, `<h2 id="...">`, `<h3>`, `<ul><li>`,
`<ol><li>`, `<blockquote>`, `<strong>`, `<em>`, and `<Cite n={N} />` (only if references exist).
- Every `<h2>` MUST have a unique `id` (kebab-case slug of its text).
- Do NOT include Navigation/Footer/SEO/hero/containers/prose wrappers — the template renders all chrome.
- Do NOT include any "video play" button, image-in-body gimmicks, or bespoke layout. Drop them; keep the words.

## sections array
Build from the <h2>s in order: `{ id: "<same id as the h2>", label: "<short 2–4 word label>" }`.

## Cite component (only when references exist)
```
const Cite = ({ n }: { n: number }) => (
  <sup><a href={`#ref-${n}`} className="text-primary no-underline hover:underline">{n}</a></sup>
);
```

## Category A (already use InsightArticle) — MECHANICAL
1. Change import to `import InsightArticleV2 from "@/components/InsightArticleV2";`
2. Rename `<InsightArticle` → `<InsightArticleV2` and `</InsightArticle>` → `</InsightArticleV2>`.
3. Add `id` to every `<h2>` in the children and add a `sections={[...]}` prop matching them.
4. Keep ALL existing props/content (keyTakeaways, references, Cite, relatedInsights, heroImage, dates).
5. If it has NO keyTakeaways, add 3–4 that summarize the article (restate points already in the body — invent NO new numbers).

## Category B (legacy bespoke) — FULL REWRITE
Read the whole legacy file. Extract: category/eyebrow, title (h1), subtitle/dek, publishDate,
readTime, heroImage (the <img src> used in its hero), and the FULL body (all headings, paragraphs,
lists, quotes — verbatim wording). Then REPLACE the file with a clean component:
```
import InsightArticleV2 from "@/components/InsightArticleV2";
// (include Cite const ONLY if references exist)
export default function <SameComponentName>() {
  const sections = [ ... ];
  return (
    <InsightArticleV2 category="…" title="…" subtitle="…" heroImage="/images/…"
      publishDate="…" readTime="…" sections={sections}
      keyTakeaways={[ …3–4… ]}
      relatedInsights={[ …3… ]}>
      … body JSX …
    </InsightArticleV2>
  );
}
```
- Keep the SAME `export default function <Name>` name (routes import it by name).
- Keep the SAME heroImage the page already used. Keep any real body links.
- relatedInsights: reuse the article's existing related links if present; otherwise pick 3 other
  real insight routes (`/insights/<slug>`) with a fitting /images asset and a category label.

## HARD content rules (non-negotiable)
- Preserve the article's real substance and wording; do not water it down or truncate.
- Invent NO new statistics, NO company names, NO people's names. Keep only numbers already in the text.
- NEVER write the words "mid-market" in copy.
- American English spelling.
- keyTakeaways must restate points from the body only.

## After writing
Ensure the file is valid TSX (balanced tags, all `<h2>` have ids, string quotes/apostrophes escaped
inside JSX text are fine as normal text). Do not touch any other file. Do not edit App.tsx.
