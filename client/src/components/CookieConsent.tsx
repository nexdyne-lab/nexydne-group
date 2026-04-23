import { useState, useEffect } from "react";
import { Link } from "wouter";
import { X, Settings, Shield } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const COOKIE_CONSENT_KEY = "nexdyne_cookie_consent";

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  personalization: boolean;
}

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

  const handleAcceptAll = () => {
    const allAccepted: CookiePreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
      personalization: true,
    };
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(allAccepted));
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(preferences));
    setIsVisible(false);
    setShowPreferences(false);
  };

  const handleRejectNonEssential = () => {
    const essentialOnly: CookiePreferences = {
      necessary: true,
      analytics: false,
      marketing: false,
      personalization: false,
    };
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(essentialOnly));
    setIsVisible(false);
  };

  const togglePreference = (key: keyof CookiePreferences) => {
    if (key === "necessary") return; // Cannot toggle necessary cookies
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="fixed bottom-0 left-0 right-0 z-[9999] p-4 md:p-6"
      >
        <div className="max-w-7xl mx-auto">
          <div className="bg-white border border-border rounded-xl shadow-2xl overflow-hidden">
            {/* Main Banner */}
            {!showPreferences ? (
              <div className="p-6 md:p-8">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-base rounded-lg flex items-center justify-center">
                        <Shield className="w-5 h-5 text-secondary" />
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-charcoal">
                        Your privacy matters
                      </h3>
                    </div>
                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-2xl">
                      We use cookies to enhance your experience, analyse traffic, and serve personalised content. 
                      'Accept Cookies' to consent per our{" "}
                      <Link href="/cookie-policy">
                        <span className="font-semibold text-charcoal hover:text-secondary transition-colors cursor-pointer underline underline-offset-2">
                          Cookie
                        </span>
                      </Link>{" "}
                      and{" "}
                      <Link href="/privacy-policy">
                        <span className="font-semibold text-charcoal hover:text-secondary transition-colors cursor-pointer underline underline-offset-2">
                          Privacy
                        </span>
                      </Link>{" "}
                      policies.
                    </p>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 lg:flex-shrink-0">
                    <button
                      onClick={handleAcceptAll}
                      className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-hover transition-all duration-200 text-sm md:text-base whitespace-nowrap shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    >
                      Accept Cookies
                    </button>
                    <button
                      onClick={() => setShowPreferences(true)}
                      className="px-6 py-3 bg-white text-charcoal font-semibold rounded-lg border-2 border-border hover:border-gray-400 hover:bg-subtle transition-all duration-200 text-sm md:text-base whitespace-nowrap flex items-center justify-center gap-2"
                    >
                      <Settings className="w-4 h-4" />
                      Manage preferences
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              /* Preferences Panel */
              <div className="p-6 md:p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-base rounded-lg flex items-center justify-center">
                      <Settings className="w-5 h-5 text-secondary" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-charcoal">
                      Cookie Preferences
                    </h3>
                  </div>
                  <button
                    onClick={() => setShowPreferences(false)}
                    className="p-2 hover:bg-subtle rounded-lg transition-colors"
                  >
                    <X className="w-5 h-5 text-muted-foreground" />
                  </button>
                </div>

                <div className="space-y-4 mb-6">
                  {/* Necessary Cookies */}
                  <div className="flex items-center justify-between p-4 bg-subtle rounded-lg border border-border">
                    <div className="flex-1">
                      <h4 className="font-semibold text-charcoal mb-1">
                        Strictly Necessary
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Essential for the website to function. Cannot be disabled.
                      </p>
                    </div>
                    <div className="ml-4">
                      <div className="w-12 h-6 bg-secondary rounded-full relative cursor-not-allowed opacity-70">
                        <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow" />
                      </div>
                    </div>
                  </div>

                  {/* Analytics Cookies */}
                  <div className="flex items-center justify-between p-4 bg-subtle rounded-lg border border-border">
                    <div className="flex-1">
                      <h4 className="font-semibold text-charcoal mb-1">
                        Analytics
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Help us understand how visitors interact with our website.
                      </p>
                    </div>
                    <div className="ml-4">
                      <button
                        onClick={() => togglePreference("analytics")}
                        className={`w-12 h-6 rounded-full relative transition-colors duration-200 ${
                          preferences.analytics
                            ? "bg-secondary"
                            : "bg-gray-300"
                        }`}
                      >
                        <div
                          className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-all duration-200 ${
                            preferences.analytics ? "right-1" : "left-1"
                          }`}
                        />
                      </button>
                    </div>
                  </div>

                  {/* Marketing Cookies */}
                  <div className="flex items-center justify-between p-4 bg-subtle rounded-lg border border-border">
                    <div className="flex-1">
                      <h4 className="font-semibold text-charcoal mb-1">
                        Marketing
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Used to deliver relevant advertisements and track campaign effectiveness.
                      </p>
                    </div>
                    <div className="ml-4">
                      <button
                        onClick={() => togglePreference("marketing")}
                        className={`w-12 h-6 rounded-full relative transition-colors duration-200 ${
                          preferences.marketing
                            ? "bg-secondary"
                            : "bg-gray-300"
                        }`}
                      >
                        <div
                          className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-all duration-200 ${
                            preferences.marketing ? "right-1" : "left-1"
                          }`}
                        />
                      </button>
                    </div>
                  </div>

                  {/* Personalization Cookies */}
                  <div className="flex items-center justify-between p-4 bg-subtle rounded-lg border border-border">
                    <div className="flex-1">
                      <h4 className="font-semibold text-charcoal mb-1">
                        Personalization
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Allow us to remember your preferences and provide customized features.
                      </p>
                    </div>
                    <div className="ml-4">
                      <button
                        onClick={() => togglePreference("personalization")}
                        className={`w-12 h-6 rounded-full relative transition-colors duration-200 ${
                          preferences.personalization
                            ? "bg-secondary"
                            : "bg-gray-300"
                        }`}
                      >
                        <div
                          className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-all duration-200 ${
                            preferences.personalization ? "right-1" : "left-1"
                          }`}
                        />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Preferences Actions */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-border">
                  <button
                    onClick={handleRejectNonEssential}
                    className="px-6 py-3 text-muted-foreground font-semibold rounded-lg hover:bg-subtle transition-all duration-200 text-sm md:text-base"
                  >
                    Reject non-essential
                  </button>
                  <div className="flex-1" />
                  <button
                    onClick={handleSavePreferences}
                    className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-hover transition-all duration-200 text-sm md:text-base shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  >
                    Save preferences
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
