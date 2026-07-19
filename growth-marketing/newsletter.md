# The Newsletter — "NexDyne Insights" (monthly)

The **"Newsletter relationship"** rung of the offer ladder: the ongoing drumbeat
that keeps NexDyne in prospects' inboxes for the months (often 6–18) between
"downloaded a resource" and "ready to buy." The nurture sequence is the finite
bridge (10 days); this is the indefinite relationship. Most consulting revenue
comes from this long tail.

## Format (industry-standard, keep it this sharp)

One email a month. Structure — never more:
1. **Masthead** — "NexDyne Insights" + red rule + issue number
2. **Hook intro** — a *question the reader can't answer comfortably*, tied to a
   felt SMB pain ("Do you know which AI tools your team used this week?")
3. **The Lead** — one article, problem-shaped, with a 2–3 sentence POV take
4. **The Follow-Up** — one companion article, constructive half of the story
5. **One quiet CTA** — grey box; rotate AI guide / Ops checklist / assessment
   reply. Always includes "just reply — a real person reads this inbox"
   (replies = deliverability + pipeline)
6. Sign-off + working unsubscribe (`{{{RESEND_UNSUBSCRIBE_URL}}}`)

**Subject rules:** <50 chars, specific, pain/curiosity question, no clickbait.
**Preview text** extends the subject, never repeats it. One theme per issue,
alternating AI ↔ operations ↔ finance so it never goes stale.

## The 5-issue bank (drafted in Resend, ready to send)

| # | Subject | Lead | Follow-up | CTA | Broadcast id |
|---|---|---|---|---|---|
| 01 | Your team is already using AI. Do you know where? | Shadow AI Inside Your Firm | Winning with governed AI | AI guide | `82b581ca-d793-4b4b-b82f-96759c97778b` |
| 02 | Is your automation actually paying for itself? | Measuring Automation ROI | Automation Isn't Optional | Ops checklist | `df978d5e-b1ca-4646-ab08-a6cd027b620d` |
| 03 | What breaks first when you grow | Scaling Operations | The 85% Efficiency Reality | Ops checklist | `d94b6207-21c9-49a4-b7c6-1826c7d8fba2` |
| 04 | AI agents just got a budget line | Agentic AI Budget Line | How AI Agents Transform Ops | AI guide | `e34d4d2e-12ef-45b2-b691-3560f2581fef` |
| 05 | The cash discipline growing companies skip | CFO Cash-Flow Guide | Working Capital Optimization | Assessment reply | `93e8c3c8-c432-4bb6-bdf7-e10e5034e088` |

HTML sources: `newsletter-issue-0N.html` in this folder. Audience: **NexDyne —
Case-Study Leads** (where all lead-magnet downloaders land).

## Monthly workflow (~30 min once running)

1. **Before sending an issue:** open the draft in Resend → Broadcasts, do a
   2-minute freshness check (swap a read if stale), send a test to yourself.
2. **Send** (or schedule) — first business Tuesday of the month is a good slot.
3. **Watch:** opens/clicks in Resend, and above all **replies** — every reply is
   a warm conversation; answer same-day.
4. **Refill the bank:** when 2 issues remain, draft the next batch — pick a
   sharp problem-lead + constructive follow-up from /insights, write the hook
   question, copy an existing `newsletter-issue-0N.html` as the base, create the
   draft broadcast via API (`POST /broadcasts {audience_id, from, subject, html,
   name, preview_text}` — drafts don't send until you say so).

## Gotchas
- Broadcast HTML supports `{{{RESEND_UNSUBSCRIBE_URL}}}` and pipe-fallback
  merge tags (unlike Templates).
- A broadcast targets ONE audience. Downloaders live in Case-Study Leads; if
  the footer-newsletter audience grows, either duplicate the send or
  consolidate audiences (dedup happens per-audience, not across).
- Don't blind-schedule months ahead — content goes stale; send monthly with the
  freshness check.
- **Do not send until the domain warm-up (Stage 1b) has a few days behind it.**
