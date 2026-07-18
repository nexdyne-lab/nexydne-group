# Stage 6 — Nurture Sequence (Resend Automations)

The automated follow-up that turns a lead-magnet download into a conversation.
Built on **Resend Automations** (native event-driven flows). Email #1 (delivery)
is sent immediately by our capture code; this sequence handles the follow-ups.

## How it works

1. On capture, our backend emits a Resend event:
   `POST https://api.resend.com/events/send` →
   `{ event: "magnet.downloaded", email, payload: { slug, magnetTitle, firstName } }`
   (helper: `emitEvent()` in [`server/_core/email.ts`](../server/_core/email.ts);
   called in the `resources.requestGuide` mutation.)
2. A Resend **Automation** listens for `magnet.downloaded` and runs the flow
   below. One linear flow serves every magnet — personalized off `firstName` +
   `magnetTitle`. (Add a conditional branch on `payload.slug` later if a magnet
   needs bespoke copy.)

## The flow (build this in Resend → Automations)

```
Trigger:  Event = "magnet.downloaded"
   │
   ├─ Wait 3 days  → Send Email: "Nurture 2 — the #1 mistake"
   ├─ Wait 3 days  → Send Email: "Nurture 3 — read your score"
   └─ Wait 4 days  → Send Email: "Nurture 4 — the invite"
```

**Setup steps (once per project):**
1. Resend → **Automations → Create** (drag-drop, or the plain-language AI builder:
   *"When `magnet.downloaded` fires: wait 3 days send template Nurture 2; wait 3
   days send Nurture 3; wait 4 days send Nurture 4."*).
2. Set the **Trigger** to the custom event `magnet.downloaded`.
3. Create the three **Templates** below (subject + body). Use the merge variable
   for the contact's first name (Resend: `{{{FIRST_NAME}}}`).
4. Add **Time Delay** + **Send Email** steps per the flow.
5. **Turn the automation ON.** (It records events even before it's on, so the
   code trigger can ship first.)

> The delivery email (#1) is NOT in this automation — our code sends it instantly
> at capture. This flow is only #2–#4.

---

## Email templates (ready to paste)

Voice: practical, honest, restrained — no hype. Personalize with `{{{FIRST_NAME}}}`.

### Nurture 2 — the #1 mistake  · *send 3 days after download*
**Subject:** The #1 reason these projects fail

```
Hi {{{FIRST_NAME}}},

A few days ago you downloaded one of our readiness tools. Here's the pattern we
see most often — and it has nothing to do with technology.

The companies that struggle don't fail because they picked the wrong tool. They
fail because they moved *before* they understood their own operation. They
automated a workflow nobody had written down. They bought software before
defining the problem. They handed a decision to a system before deciding what a
human should still own.

The score you gave yourself is the antidote: it forces the question "are we
ready?" before the question "what should we buy?"

If any item made you pause, that pause is the useful part. Start there.

— NexDyne Consulting Group
```

### Nurture 3 — read your score  · *send 3 days later*
**Subject:** How to actually read your readiness score

```
Hi {{{FIRST_NAME}}},

Your score isn't a grade — it's a map. Here's how to read it:

• Low / not ready — Good news, honestly. The fixes (clear process, a named
  owner, one source of truth) are cheaper than the tools and pay off with or
  without new technology. Do these first.

• Middle / partially ready — The most common place to land, and where the right
  first move creates the most value. Pick your two or three lowest-scoring areas,
  close those, then run one narrow pilot.

• High / ready — You're set up to prioritize and build a real plan. Your risk
  now is doing too much at once. Sequence it, and keep measuring.

Whatever your number, your lowest-scoring items are your roadmap. Fix them in
order.

— NexDyne Consulting Group
```

### Nurture 4 — the invite  · *send 4 days later*
**Subject:** Want us to run this with you?

```
Hi {{{FIRST_NAME}}},

The tool you downloaded is a self-assessment. The next step, if it's useful, is
applying it to your business with someone who does this for a living.

That's what our readiness assessment is: we run the framework on your actual
company, pressure-test the answers, and hand you a prioritized, honest plan —
what to fix first, what to pilot, and what to leave alone for now. No jargon, no
sales theater.

If that would help, just reply to this email with "assessment" and we'll set up
a short call.

Either way — thanks for reading, and good luck with the work.

— NexDyne Consulting Group
```

---

## Status

- ✅ **Code trigger shipped** — `emitEvent("magnet.downloaded")` fires on every
  capture (deployed).
- ⏳ **Automation + templates** — build in the Resend dashboard using the steps +
  copy above (one-time setup). Until then, events are recorded but no follow-ups
  send.

## Measurement

Watch in Resend: automation runs, per-step opens/clicks, and — the number that
matters — **replies asking for the assessment**. Tune delays/subjects from there.
