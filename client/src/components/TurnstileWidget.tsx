import { useEffect, useRef, useState } from "react";

/**
 * Cloudflare Turnstile widget. Renders the invisible/managed challenge and
 * calls onVerify with a token once the visitor is confirmed human. The token
 * is single-use and short-lived — pass it straight to the server on submit.
 *
 * If VITE_TURNSTILE_SITEKEY is unset (local dev), the widget renders nothing
 * and immediately "verifies" with an empty token so forms still work.
 */

declare global {
  interface Window {
    turnstile?: {
      render: (el: HTMLElement, opts: Record<string, unknown>) => string;
      remove: (id: string) => void;
      reset: (id?: string) => void;
    };
  }
}

const SCRIPT_SRC =
  "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";

let scriptPromise: Promise<void> | null = null;
function loadScript(): Promise<void> {
  if (scriptPromise) return scriptPromise;
  scriptPromise = new Promise((resolve, reject) => {
    if (window.turnstile) return resolve();
    const s = document.createElement("script");
    s.src = SCRIPT_SRC;
    s.async = true;
    s.defer = true;
    s.onload = () => resolve();
    s.onerror = () => reject(new Error("Failed to load Turnstile"));
    document.head.appendChild(s);
  });
  return scriptPromise;
}

interface TurnstileWidgetProps {
  onVerify: (token: string) => void;
  onExpire?: () => void;
  /**
   * "always" (default) keeps the widget visible so the user sees it resolve —
   * right for a standalone gate. "interaction-only" hides it unless a challenge
   * is required — right when it sits inside a larger form.
   */
  appearance?: "always" | "interaction-only";
}

export function TurnstileWidget({
  onVerify,
  onExpire,
  appearance = "always",
}: TurnstileWidgetProps) {
  const ref = useRef<HTMLDivElement>(null);
  const widgetId = useRef<string | null>(null);
  const [failed, setFailed] = useState(false);
  const sitekey = import.meta.env.VITE_TURNSTILE_SITEKEY as string | undefined;

  useEffect(() => {
    // No sitekey (local dev) → skip the challenge entirely.
    if (!sitekey) {
      onVerify("");
      return;
    }

    let cancelled = false;
    loadScript()
      .then(() => {
        if (cancelled || !ref.current || !window.turnstile) return;
        widgetId.current = window.turnstile.render(ref.current, {
          sitekey,
          callback: (token: string) => onVerify(token),
          "expired-callback": () => onExpire?.(),
          "error-callback": () => setFailed(true),
          theme: "light",
          appearance,
        });
      })
      .catch(() => setFailed(true));

    return () => {
      cancelled = true;
      if (widgetId.current && window.turnstile) {
        try {
          window.turnstile.remove(widgetId.current);
        } catch {
          /* widget already gone */
        }
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sitekey]);

  if (!sitekey) return null;
  if (failed) {
    return (
      <p className="text-xs text-primary text-center">
        Verification could not load. Please refresh and try again.
      </p>
    );
  }
  return <div ref={ref} className="flex justify-center" />;
}

export default TurnstileWidget;
