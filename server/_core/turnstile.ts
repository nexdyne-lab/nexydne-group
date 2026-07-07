/**
 * Cloudflare Turnstile server-side verification.
 * The client submits a token from the Turnstile widget; we confirm it with
 * Cloudflare's siteverify endpoint before trusting the request as human.
 *
 * If TURNSTILE_SECRET is unset (e.g. local dev), verification is skipped so
 * the form still works — production always has the secret.
 */

const SITEVERIFY_URL =
  "https://challenges.cloudflare.com/turnstile/v0/siteverify";

export async function verifyTurnstile(
  token: string | undefined,
  remoteIp?: string
): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET;

  // No secret configured → verification disabled (local/dev).
  if (!secret) return true;

  // Secret is configured but the client sent no token → reject.
  if (!token) return false;

  try {
    const body = new URLSearchParams({ secret, response: token });
    if (remoteIp) body.append("remoteip", remoteIp);

    const res = await fetch(SITEVERIFY_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
    });
    const data = (await res.json()) as { success?: boolean };
    return data.success === true;
  } catch (err) {
    console.error("[Turnstile] Verification request failed:", err);
    // Fail closed — a verification outage should not open the gate to bots.
    return false;
  }
}
