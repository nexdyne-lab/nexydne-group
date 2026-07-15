import { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";

const COOKIE_CONSENT_KEY = "nexdyne_cookie_consent";

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  personalization: boolean;
}

const PREFERENCE_ROWS: {
  key: keyof CookiePreferences;
  label: string;
  description: string;
}[] = [
  {
    key: "necessary",
    label: "Strictly necessary",
    description: "Essential for the website to function. Always on.",
  },
  {
    key: "analytics",
    label: "Analytics",
    description: "Help us understand how visitors use the site.",
  },
  {
    key: "marketing",
    label: "Marketing",
    description: "Deliver relevant ads and measure campaigns.",
  },
  {
    key: "personalization",
    label: "Personalization",
    description: "Remember your preferences and settings.",
  },
];

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Always required
    analytics: false,
    marketing: false,
    personalization: false,
  });

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      // Show after a short delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  // Lock body scroll while the modal is open.
  useEffect(() => {
    if (!isVisible) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isVisible]);

  const persist = (prefs: CookiePreferences) => {
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(prefs));
    // Tell Google Analytics (Consent Mode v2) about the choice so it only
    // stores cookies for the categories the visitor allowed.
    const gtag = (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag;
    if (typeof gtag === "function") {
      gtag("consent", "update", {
        analytics_storage: prefs.analytics ? "granted" : "denied",
        ad_storage: prefs.marketing ? "granted" : "denied",
        ad_user_data: prefs.marketing ? "granted" : "denied",
        ad_personalization: prefs.marketing ? "granted" : "denied",
      });
    }
    setIsVisible(false);
    setShowPreferences(false);
  };

  const handleAcceptAll = () =>
    persist({ necessary: true, analytics: true, marketing: true, personalization: true });

  const handleRejectNonEssential = () =>
    persist({ necessary: true, analytics: false, marketing: false, personalization: false });

  const handleSavePreferences = () => persist(preferences);

  const togglePreference = (key: keyof CookiePreferences) => {
    if (key === "necessary") return; // Cannot toggle necessary cookies
    setPreferences(prev => ({ ...prev, [key]: !prev[key] }));
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6">
        {/* Dimmed backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="absolute inset-0 bg-charcoal/60 backdrop-blur-[2px]"
        />

        {/* Centered card */}
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Cookie consent"
          initial={{ opacity: 0, scale: 0.96, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 12 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-lg rounded-2xl bg-white shadow-[0_24px_70px_rgba(36,36,36,0.28)] overflow-hidden"
        >
          {!showPreferences ? (
            /* --- Main consent view --- */
            <div className="p-6 sm:p-8">
              <h2 className="text-[1.35rem] sm:text-[1.5rem] font-bold text-charcoal tracking-[-0.015em]">
                Cookies help us improve your experience
              </h2>
              <p className="mt-3 text-[0.95rem] leading-[1.6] text-charcoal/70">
                We use cookies to improve website functionality and performance. Read our{" "}
                <Link href="/cookie-policy">
                  <span className="font-medium text-charcoal underline underline-offset-2 hover:text-primary transition-colors cursor-pointer">
                    Cookie Policy
                  </span>
                </Link>{" "}
                and{" "}
                <Link href="/privacy-policy">
                  <span className="font-medium text-charcoal underline underline-offset-2 hover:text-primary transition-colors cursor-pointer">
                    Privacy Policy
                  </span>
                </Link>{" "}
                for more information.
              </p>

              <ul className="mt-5 space-y-2.5">
                {[
                  ["Strictly necessary", "are essential for you to browse the site and use its core features."],
                  ["Analytics", "help us understand how you use our site so we can improve it."],
                  ["Marketing", "are used, often by third parties, to deliver content relevant to you."],
                ].map(([label, desc]) => (
                  <li key={label} className="flex gap-2.5 text-[0.9rem] leading-[1.55] text-charcoal/70">
                    <span className="mt-[7px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    <span>
                      <span className="font-semibold text-charcoal">{label}</span> cookies {desc}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleRejectNonEssential}
                  className="flex-1 px-5 py-3 text-[0.9rem] font-semibold text-charcoal border border-charcoal/25 rounded-lg hover:border-charcoal/60 active:bg-charcoal/5 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-charcoal/40"
                >
                  Decline
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="flex-1 px-5 py-3 text-[0.9rem] font-semibold bg-primary text-white rounded-lg hover:bg-primary-hover active:opacity-90 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1"
                >
                  Accept all cookies
                </button>
              </div>

              <button
                onClick={() => setShowPreferences(true)}
                className="mt-5 mx-auto flex items-center gap-1.5 text-[0.85rem] font-semibold text-primary hover:text-primary-hover transition-colors duration-200 focus:outline-none focus-visible:underline"
              >
                Manage cookie settings
                <span aria-hidden>›</span>
              </button>
            </div>
          ) : (
            /* --- Preferences view --- */
            <div className="p-6 sm:p-8">
              <h2 className="text-[1.35rem] font-bold text-charcoal tracking-[-0.015em]">
                Cookie preferences
              </h2>
              <p className="mt-2 text-[0.9rem] leading-[1.55] text-charcoal/65">
                Choose which cookies we may use. You can change this anytime.
              </p>

              <div className="mt-5 divide-y divide-charcoal/8 max-h-[46vh] overflow-y-auto">
                {PREFERENCE_ROWS.map(row => {
                  const on = preferences[row.key];
                  const locked = row.key === "necessary";
                  return (
                    <div key={row.key} className="flex items-center justify-between gap-4 py-3">
                      <div className="min-w-0">
                        <h3 className="text-[0.9rem] font-semibold text-charcoal leading-tight">
                          {row.label}
                        </h3>
                        <p className="text-[0.8rem] text-charcoal/60 leading-snug mt-0.5">
                          {row.description}
                        </p>
                      </div>
                      <button
                        onClick={() => togglePreference(row.key)}
                        disabled={locked}
                        aria-pressed={on}
                        aria-label={`${row.label} cookies ${on ? "enabled" : "disabled"}`}
                        className={`relative w-9 h-5 rounded-full flex-shrink-0 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 ${
                          on ? "bg-primary" : "bg-charcoal/20"
                        } ${locked ? "opacity-60 cursor-not-allowed" : "cursor-pointer"}`}
                      >
                        <span
                          className={`absolute top-0.5 left-0 w-4 h-4 bg-white rounded-full shadow-sm transition-transform duration-200 ${
                            on ? "translate-x-[18px]" : "translate-x-0.5"
                          }`}
                        />
                      </button>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => setShowPreferences(false)}
                  className="flex-1 px-5 py-3 text-[0.9rem] font-semibold text-charcoal border border-charcoal/25 rounded-lg hover:border-charcoal/60 active:bg-charcoal/5 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-charcoal/40"
                >
                  Back
                </button>
                <button
                  onClick={handleSavePreferences}
                  className="flex-1 px-5 py-3 text-[0.9rem] font-semibold bg-primary text-white rounded-lg hover:bg-primary-hover active:opacity-90 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1"
                >
                  Save preferences
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
