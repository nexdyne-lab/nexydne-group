import { useEffect, useRef, useState } from "react";

/**
 * Cloudflare Turnstile widget. Renders the managed challenge and calls onVerify
 * with a token once the visitor is confirmed human. The token is single-use and
 * short-lived — pass it straight to the server on submit.
 *
 * If VITE_TURNSTILE_SITEKEY is unset (local dev), the widget renders nothing and
 * immediately "verifies" with an empty token so forms still work.
 *
 * The script is preloaded as soon as this module is imported (i.e. when a page
 * with a form loads), so it's ready before the user opens a modal — avoiding the
 * cold-load race that made the first open fail and need a refresh.
 */

declare global {
  interface Window {
    turnstile?: {
      render: (el: HTMLElement, opts: Record<string, unknown>) => string;
      remove: (id: string) => void;
      reset: (id?: string) => void;
      ready?: (cb: () => void) => void;
    };
  }
}

const SCRIPT_SRC =
  "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";

let scriptPromise: Promise<void> | null = null;
function loadScript(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();
  if (scriptPromise) return scriptPromise;
  scriptPromise = new Promise((resolve, reject) => {
    if (window.turnstile) return resolve();
    const s = document.createElement("script");
    s.src = SCRIPT_SRC;
    s.async = true;
    s.defer = true;
    s.onload = () => resolve();
    s.onerror = () => {
      scriptPromise = null; // allow a later retry
      reject(new Error("Failed to load Turnstile"));
    };
    document.head.appendChild(s);
  });
  return scriptPromise;
}

// Preload the script eagerly so it's ready by the time a modal/form opens.
if (typeof window !== "undefined" && import.meta.env.VITE_TURNSTILE_SITEKEY) {
  void loadScript();
}

interface TurnstileWidgetProps {
  onVerify: (token: string) => void;
  onExpire?: () => void;
  /**
   * "always" (default) keeps the widget visible so the user sees it resolve.
   * "interaction-only" hides it unless a challenge is required.
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
  const [attempt, setAttempt] = useState(0); // bump to re-render on manual retry
  const [failed, setFailed] = useState(false);
  const sitekey = import.meta.env.VITE_TURNSTILE_SITEKEY as string | undefined;

  useEffect(() => {
    // No sitekey (local dev) → skip the challenge entirely.
    if (!sitekey) {
      onVerify("");
      return;
    }

    let cancelled = false;
    setFailed(false);

    const render = () => {
      if (cancelled || !ref.current || !window.turnstile) return;
      try {
        widgetId.current = window.turnstile.render(ref.current, {
          sitekey,
          callback: (token: string) => onVerify(token),
          "expired-callback": () => onExpire?.(),
          "error-callback": () => {
            if (!cancelled) setFailed(true);
          },
          theme: "light",
          appearance,
          retry: "auto",
        });
      } catch {
        if (!cancelled) setFailed(true);
      }
    };

    loadScript()
      .then(() => {
        if (cancelled) return;
        if (!window.turnstile) {
          setFailed(true);
          return;
        }
        // Wait for Turnstile to be fully initialized before rendering.
        if (window.turnstile.ready) window.turnstile.ready(render);
        else render();
      })
      .catch(() => {
        if (!cancelled) setFailed(true);
      });

    return () => {
      cancelled = true;
      if (widgetId.current && window.turnstile) {
        try {
          window.turnstile.remove(widgetId.current);
        } catch {
          /* widget already gone */
        }
        widgetId.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sitekey, attempt]);

  if (!sitekey) return null;
  if (failed) {
    return (
      <div className="text-center text-xs">
        <span className="text-charcoal/60">Couldn't load human verification. </span>
        <button
          type="button"
          onClick={() => setAttempt((a) => a + 1)}
          className="text-primary underline font-semibold cursor-pointer"
        >
          Try again
        </button>
      </div>
    );
  }
  return <div ref={ref} className="flex justify-center" />;
}

export default TurnstileWidget;
