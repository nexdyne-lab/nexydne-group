import { useState, type ReactNode } from "react";
import { ShieldCheck } from "lucide-react";
import { TurnstileWidget } from "./TurnstileWidget";

/**
 * HumanGate — application-level "verify you are human" interstitial for
 * sensitive pages (contact, careers). Renders a clean verification card until
 * Cloudflare Turnstile confirms the visitor, then shows the page. Verification
 * is remembered for the browser session so repeat visits don't re-challenge.
 *
 * This complements the edge defenses (Cloudflare Bot Fight Mode) and the
 * server-side Turnstile check on form submissions — it is the visible gate,
 * not the only line of defense.
 *
 * If Turnstile isn't configured (local dev, no VITE_TURNSTILE_SITEKEY), the
 * widget resolves immediately with an empty token, so the gate passes through.
 */

const SESSION_KEY = "nexdyne_human_verified";

interface HumanGateProps {
  children: ReactNode;
  /** Short label for what's being accessed, e.g. "the contact page". */
  context?: string;
}

export function HumanGate({ children, context = "this page" }: HumanGateProps) {
  const [verified, setVerified] = useState(() => {
    try {
      return sessionStorage.getItem(SESSION_KEY) === "1";
    } catch {
      return false;
    }
  });

  const handleVerify = (_token: string) => {
    try {
      sessionStorage.setItem(SESSION_KEY, "1");
    } catch {
      /* private mode — gate simply re-shows next navigation */
    }
    setVerified(true);
  };

  if (verified) return <>{children}</>;

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-20 bg-background">
      <div className="w-full max-w-md rounded-2xl border border-charcoal/10 bg-white shadow-[0_12px_40px_rgba(36,36,36,0.08)] p-8 sm:p-10 text-center">
        <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
          <ShieldCheck className="h-6 w-6 text-primary" />
        </div>
        <h1 className="text-[1.4rem] font-bold text-charcoal tracking-[-0.01em]">
          Quick security check
        </h1>
        <p className="mt-3 text-[0.95rem] leading-relaxed text-charcoal/65">
          Before you continue to {context}, please confirm you're human. This
          keeps automated abuse off our forms and takes just a moment.
        </p>
        <div className="mt-7 flex justify-center min-h-[70px] items-center">
          <TurnstileWidget onVerify={handleVerify} />
        </div>
        <p className="mt-6 text-[11px] uppercase tracking-[0.16em] text-charcoal/40">
          Protected by Cloudflare Turnstile
        </p>
      </div>
    </div>
  );
}

export default HumanGate;
