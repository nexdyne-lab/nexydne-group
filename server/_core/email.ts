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
 * Add (or upsert) a contact to the Resend Audience — the subscriber list that
 * powers newsletters/broadcasts. No-ops if RESEND_API_KEY or RESEND_AUDIENCE_ID
 * is unset. Best-effort: never throws, returns false on failure so callers can
 * carry on (a signup should still "succeed" for the user even if list-add fails).
 */
export async function addToAudience(input: {
  email: string;
  firstName?: string | null;
  lastName?: string | null;
}): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  const audienceId = process.env.RESEND_AUDIENCE_ID;
  if (!apiKey || !audienceId) {
    console.log(`[Audience] not configured — would add ${input.email}`);
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

/** Minimal HTML-escape for user-supplied values interpolated into email HTML. */
export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
