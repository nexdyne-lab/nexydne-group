import { Link } from "wouter";
import { Globe, Bookmark, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const leftLinks = [
  { label: "OFFICES", href: "/offices" },
  { label: "ALUMNI", href: "/follow-us" },
  { label: "MEDIA CENTER", href: "/insights" },
  { label: "SUBSCRIBE", href: "/subscribe" },
  { label: "CONTACT", href: "/contact" },
];

interface UtilityBarProps {
  isScrolled: boolean;
  isNavbarLight: boolean;
}

export default function UtilityBar({ isScrolled, isNavbarLight }: UtilityBarProps) {
  const [languageOpen, setLanguageOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setLanguageOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Hide utility bar when scrolled (it slides up)
  return (
    <div
      className={`hidden lg:block w-full transition-all duration-300 ${
        isScrolled
          ? "h-0 opacity-0 overflow-hidden"
          : "h-9 opacity-100"
      } ${
        isNavbarLight
          ? "bg-base text-on-dark/90"
          : "bg-charcoal/30 backdrop-blur-sm text-white/80 border-b border-white/10"
      }`}
    >
      <div className="flex h-full items-center justify-between w-full px-6 lg:px-12">
        {/* Left: Utility Links */}
        <div className="flex items-center gap-0">
          {leftLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3 py-1 text-[11px] font-semibold tracking-wider uppercase transition-colors hover:text-white ${
                i === 0 ? "pl-0" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right: Language + Saved Items */}
        <div className="flex items-center gap-4">
          {/* Language Selector */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setLanguageOpen(!languageOpen)}
              className="flex items-center gap-1.5 px-2 py-1 text-[11px] font-semibold tracking-wider uppercase transition-colors hover:text-white"
            >
              <Globe className="w-3.5 h-3.5" />
              GLOBAL | ENGLISH
              <ChevronDown className={`w-3 h-3 transition-transform ${languageOpen ? "rotate-180" : ""}`} />
            </button>

            {/* Language Dropdown */}
            {languageOpen && (
              <div className="absolute top-full right-0 mt-1 bg-white text-charcoal rounded shadow-lg border border-border py-1 min-w-[160px] z-[60]">
                <button
                  className="w-full text-left px-4 py-2 text-xs font-medium hover:bg-subtle bg-subtle"
                  onClick={() => setLanguageOpen(false)}
                >
                  English (Global)
                </button>
                <button
                  className="w-full text-left px-4 py-2 text-xs font-medium hover:bg-subtle text-muted-foreground cursor-not-allowed"
                  disabled
                >
                  Français (Coming Soon)
                </button>
                <button
                  className="w-full text-left px-4 py-2 text-xs font-medium hover:bg-subtle text-muted-foreground cursor-not-allowed"
                  disabled
                >
                  Español (Coming Soon)
                </button>
              </div>
            )}
          </div>

          {/* Divider */}
          <div className="w-px h-4 bg-white/30" />

          {/* Saved Items */}
          <Link
            href="/saved"
            className="flex items-center gap-1.5 px-2 py-1 text-[11px] font-semibold tracking-wider uppercase transition-colors hover:text-white"
            onClick={(e) => {
              e.preventDefault();
              // Placeholder - show toast
              const toast = document.createElement("div");
              toast.textContent = "Saved Items — Feature coming soon";
              toast.className =
                "fixed top-16 right-6 bg-base text-text-light text-sm px-4 py-2 rounded shadow-lg z-[100] animate-in fade-in slide-in-from-top-2";
              document.body.appendChild(toast);
              setTimeout(() => toast.remove(), 2500);
            }}
          >
            <Bookmark className="w-3.5 h-3.5" />
            SAVED ITEMS
          </Link>
        </div>
      </div>
    </div>
  );
}
