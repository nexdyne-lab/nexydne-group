# Stage 6 — Nurture Sequence (Resend Automations)

The automated follow-up that turns a lead-magnet download into a conversation.
Built on **Resend Automations**. Email #1 (delivery) is sent immediately by our
capture code; this sequence handles the follow-ups.

**Design: one dedicated nurture per magnet** — higher relevance converts better.
Each magnet emits its own event and has its own automation + its own 3 emails,
with magnet-specific mistakes, score bands, and offer.

## How it works

1. On capture, our backend emits a **per-magnet** event:
   `POST https://api.resend.com/events/send` →
   `{ event: "magnet.downloaded.<slug>", email, payload: { slug, magnetTitle, firstName } }`
   (`emitEvent()` in [`server/_core/email.ts`](../server/_core/email.ts), called
   from `resources.requestGuide`.)
2. Each magnet's automation listens for **its** event and runs its tailored flow:
   `trigger → 3d → email 2 → 3d → email 3 → 4d → email 4`, personalized off
   `{{{FIRST_NAME}}}`.

**Live automations (enabled):**

| Magnet | Trigger event | Automation id |
|---|---|---|
| AI Readiness Guide | `magnet.downloaded.ai-readiness-guide` | `019f7740-4be0-7468-a3e0-00734a91f600` |
| Operations Readiness Checklist | `magnet.downloaded.operations-readiness-checklist` | `019f7740-4cb2-742e-a2bd-2bd126b96a90` |

## Built via API (reproducible — the fast path for the next company)

1. `POST /templates` per email → `{name, alias, subject, from, html}`, then
   `POST /templates/:id/publish`. Personalize with `{{{FIRST_NAME}}}` — it's
   **reserved/auto-populated**, so do NOT declare it in a `variables` array (422).
2. `POST /automations` with `status:"enabled"`, `steps` (`trigger`
   `{event_name}` · `delay` `{duration:"3 days"}` · `send_email` `{template:{id}}`)
   and `connections` (`{from,to}`).

> IDs are Resend-side (not in the repo). Edit copy/timing via API or dashboard.

## Personalization gotcha (important)
Event-triggered Resend automations **do not** resolve the reserved
`{{{FIRST_NAME}}}` from the contact record, and event-payload values do **not**
flow into template variables (both verified via the rendered-email API). So the
greeting uses a **declared `{{{FNAME}}}` variable with fallback `"there"`** →
renders **"Hi there,"** reliably (never "Hi ,"). The **delivery email #1** (sent
by our own code, not the automation) DOES use the real first name.
To get the literal first name in the nurture too, re-architect to
**audience-triggered** automations (one Resend Audience per magnet, trigger =
"contact added"), where `{{{FIRST_NAME}}}` resolves from the contact. Deferred.

## Adding a magnet later
Create its 3 tailored templates + one automation on `magnet.downloaded.<its-slug>`.
Skipping it is harmless — that magnet just gets the delivery email, no follow-ups.
**Write fresh, magnet-specific copy each time** — that's the whole point of
branching.

---

## Email copy — AI Readiness path

**AI-2 · "the mistake" · +3 days** — *Subject: The #1 reason AI projects fail*
> Companies don't fail because they picked the wrong model — they point AI at an
> undocumented process, scattered data, or a decision no human is watching. AI
> amplifies those gaps. The ten questions force "is the business ready?" before
> "which tool?" Start where you paused.

**AI-3 · "read your score" · +3 days** — *Subject: How to read your AI readiness score*
> Score /20 is a map: 0–7 not ready (fix process + ownership first) · 8–14
> partially (close your lowest 2–3, run one pilot) · 15–20 ready (prioritize +
> plan; don't do too much at once). Lowest-scoring questions = your roadmap.

**AI-4 · "the invite" · +4 days** — *Subject: Want us to run the AI readiness check with you?*
> The next step is our **AI & Operations Readiness Assessment** — we pressure-test
> your answers, find where AI actually pays off, hand you a prioritized plan.
> Reply "assessment" for a short call.

## Email copy — Operations path

**OPS-2 · "the mistake" · +3 days** — *Subject: The #1 reason scaling breaks operations*
> Growth doesn't create operational problems — it exposes them. The undocumented
> process, the report only one person can run, the approval stuck in one inbox:
> they work at ten people and break at fifty. The fifteen checks surface the
> cracks before volume widens them.

**OPS-3 · "read your score" · +3 days** — *Subject: How to read your operations readiness score*
> Score /30 is a map: 0–14 not ready to scale (fix foundations first) · 15–23
> partially (close your lowest 2–3, then add load) · 24–30 ready to scale (build
> the plan, keep measuring). Lowest-scoring area = where scaling strains first.

**OPS-4 · "the invite" · +4 days** — *Subject: Want a second set of eyes on your operations?*
> The next step is our **Operations Diagnostic** — we find the gaps that break
> first as you grow and hand you a prioritized plan (what to fix now, what can
> wait). Reply "diagnostic" for a short call.

*(Full HTML for all six lives in the Resend templates, prefixed `ai-nurture-*` /
`ops-nurture-*`.)*

---

## Status — ✅ LIVE (per-magnet)

- ✅ Code emits `magnet.downloaded.<slug>` on every capture (deployed).
- ✅ Two enabled automations (AI + Ops), 6 published templates, built via API.

## Verify
Real download with your own email → Resend → **Automations → [that magnet's
nurture] → Runs**: your run is enrolled, waiting on the 3-day delay. (Delivery
email #1 arrives immediately, separately, from the capture code.)

## Measurement
Per automation: runs, step opens/clicks, and the number that matters — **replies
asking for the assessment/diagnostic.** Tune delays/subjects from there.
