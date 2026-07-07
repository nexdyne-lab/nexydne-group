import { useState, useEffect } from "react";
import { Link } from "wouter";
import { X } from "lucide-react";
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
      // Show banner after a short delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const persist = (prefs: CookiePreferences) => {
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(prefs));
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
      <motion.div
        initial={{ y: 64, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 64, opacity: 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="fixed bottom-0 left-0 right-0 z-[9999] bg-white border-t border-charcoal/12 shadow-[0_-6px_24px_rgba(36,36,36,0.08)]"
        role="dialog"
        aria-label="Cookie consent"
      >
        {!showPreferences ? (
          /* --- Slim consent bar --- */
          <div className="mx-auto max-w-[1500px] px-4 md:px-8 py-3.5 md:py-3 flex flex-col md:flex-row md:items-center gap-3 md:gap-6">
            <p className="flex-1 text-[13px] leading-[1.55] text-charcoal/75">
              We use cookies to improve your experience and analyse traffic — see our{" "}
              <Link href="/cookie-policy">
                <span className="underline underline-offset-2 text-charcoal hover:text-primary transition-colors cursor-pointer">
                  Cookie
                </span>
              </Link>{" "}
              and{" "}
              <Link href="/privacy-policy">
                <span className="underline underline-offset-2 text-charcoal hover:text-primary transition-colors cursor-pointer">
                  Privacy
                </span>
              </Link>{" "}
              policies.
            </p>
            <div className="flex items-center gap-2.5 md:flex-shrink-0">
              <button
                onClick={() => setShowPreferences(true)}
                className="flex-1 md:flex-none px-4 py-2 text-[12.5px] font-semibold text-charcoal border border-charcoal/25 rounded-md hover:border-charcoal/60 active:bg-charcoal/5 transition-colors duration-200 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-charcoal/40"
              >
                Preferences
              </button>
              <button
                onClick={handleRejectNonEssential}
                className="flex-1 md:flex-none px-4 py-2 text-[12.5px] font-semibold text-charcoal border border-charcoal/25 rounded-md hover:border-charcoal/60 active:bg-charcoal/5 transition-colors duration-200 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-charcoal/40"
              >
                Decline
              </button>
              <button
                onClick={handleAcceptAll}
                className="flex-1 md:flex-none px-5 py-2 text-[12.5px] font-semibold bg-primary text-white rounded-md hover:bg-primary-hover active:opacity-90 transition-colors duration-200 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1"
              >
                Accept
              </button>
            </div>
          </div>
        ) : (
          /* --- Compact preferences panel --- */
          <div className="mx-auto max-w-3xl px-4 md:px-8 py-4 md:py-5">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-[15px] font-bold text-charcoal">Cookie preferences</h3>
              <button
                onClick={() => setShowPreferences(false)}
                aria-label="Close preferences"
                className="p-1.5 rounded-md hover:bg-charcoal/5 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-charcoal/40"
              >
                <X className="w-4 h-4 text-charcoal/60" />
              </button>
            </div>

            <div className="divide-y divide-charcoal/8 max-h-[40vh] overflow-y-auto">
              {PREFERENCE_ROWS.map(row => {
                const on = preferences[row.key];
                const locked = row.key === "necessary";
                return (
                  <div key={row.key} className="flex items-center justify-between gap-4 py-2.5">
                    <div className="min-w-0">
                      <h4 className="text-[13px] font-semibold text-charcoal leading-tight">
                        {row.label}
                      </h4>
                      <p className="text-[12px] text-charcoal/60 leading-snug mt-0.5">
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
                        className={`absolute top-0.5 w-4 h-4 bg-white rounded-full shadow-sm transition-transform duration-200 ${
                          on ? "translate-x-[18px]" : "translate-x-0.5"
                        }`}
                        style={{ left: 0 }}
                      />
                    </button>
                  </div>
                );
              })}
            </div>

            <div className="flex items-center justify-end gap-2.5 pt-3 mt-1 border-t border-charcoal/8">
              <button
                onClick={handleRejectNonEssential}
                className="px-4 py-2 text-[12.5px] font-semibold text-charcoal/70 rounded-md hover:bg-charcoal/5 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-charcoal/40"
              >
                Reject non-essential
              </button>
              <button
                onClick={handleSavePreferences}
                className="px-5 py-2 text-[12.5px] font-semibold bg-primary text-white rounded-md hover:bg-primary-hover transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1"
              >
                Save preferences
              </button>
            </div>
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
