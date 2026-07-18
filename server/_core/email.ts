/**
 * Transactional email via Resend (https://resend.com) using its REST API —
 * no SDK dependency. Sends from EMAIL_FROM (a verified nexdynegroup.com
 * address) to the site owner.
 *
 * If RESEND_API_KEY is unset (local dev), send() logs and no-ops so forms
 * still work without email configured.
 */

const RESEND_ENDPOINT = "https://api.resend.com/emails";

interface SendEmailInput {
  to: string;
  subject: string;
  html: string;
  replyTo?: string;
  /** Override the default EMAIL_FROM (e.g. send the customer ack from contact@). */
  from?: string;
}

export async function sendEmail(input: SendEmailInput): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  const from =
    input.from || process.env.EMAIL_FROM || "NexDyne <noreply@nexdynegroup.com>";

  if (!apiKey) {
    console.log(`[Email] RESEND_API_KEY unset — would send "${input.subject}" to ${input.to}`);
    return true;
  }

  try {
    const res = await fetch(RESEND_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [input.to],
        subject: input.subject,
        html: input.html,
        ...(input.replyTo ? { reply_to: input.replyTo } : {}),
      }),
    });

    if (!res.ok) {
      const body = await res.text();
      console.error(`[Email] Resend rejected (${res.status}): ${body}`);
      return false;
    }
    return true;
  } catch (err) {
    console.error("[Email] Send failed:", err);
    return false;
  }
}

/**
 * Which subscriber bucket a contact belongs to. Each maps to a separate Resend
 * Audience so we can segment sends by where the person came from.
 */
export type AudienceSource = "newsletter" | "casestudy";

function audienceIdFor(source: AudienceSource): string | undefined {
  switch (source) {
    case "newsletter":
      return process.env.RESEND_NEWSLETTER_AUDIENCE_ID;
    case "casestudy":
      return process.env.RESEND_CASESTUDY_AUDIENCE_ID;
  }
}

/**
 * Add (or upsert) a contact to the Resend Audience for the given source bucket.
 * No-ops if RESEND_API_KEY or the source's audience id is unset. Best-effort:
 * never throws, returns false on failure so callers can carry on (a signup
 * should still "succeed" for the user even if the list-add fails).
 */
export async function addToAudience(input: {
  email: string;
  firstName?: string | null;
  lastName?: string | null;
  source: AudienceSource;
}): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  const audienceId = audienceIdFor(input.source);
  if (!apiKey || !audienceId) {
    console.log(`[Audience:${input.source}] not configured — would add ${input.email}`);
    return true;
  }

  try {
    const res = await fetch(
      `https://api.resend.com/audiences/${audienceId}/contacts`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: input.email,
          first_name: input.firstName || undefined,
          last_name: input.lastName || undefined,
          unsubscribed: false,
        }),
      }
    );
    // 201 created, or 409/200 if the contact already exists — both are fine.
    if (res.ok || res.status === 409) return true;
    console.error(`[Audience] add rejected (${res.status}): ${await res.text()}`);
    return false;
  } catch (err) {
    console.error("[Audience] add failed:", err);
    return false;
  }
}

/**
 * Emit a custom event to Resend, which can trigger an Automation (nurture flow).
 * The automation branches/personalizes off the payload (e.g. magnet slug/title).
 * No-ops if RESEND_API_KEY is unset. Best-effort: never throws — a nurture
 * trigger must never fail the capture the visitor just completed.
 *
 * Set up the matching automation in Resend (Dashboard → Automations): trigger on
 * this event name, add Time Delay + Send Email steps. See the Growth & Marketing
 * playbook (Stage 6) for the exact flow + email copy.
 */
export async function emitEvent(input: {
  event: string;
  email: string;
  payload?: Record<string, unknown>;
}): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.log(`[Event] RESEND_API_KEY unset — would emit "${input.event}" for ${input.email}`);
    return true;
  }
  try {
    const res = await fetch("https://api.resend.com/events/send", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        event: input.event,
        email: input.email,
        payload: input.payload || {},
      }),
    });
    if (res.ok) return true;
    console.error(`[Event] emit rejected (${res.status}): ${await res.text()}`);
    return false;
  } catch (err) {
    console.error("[Event] emit failed:", err);
    return false;
  }
}

/** Minimal HTML-escape for user-supplied values interpolated into email HTML. */
export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
