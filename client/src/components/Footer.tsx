import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

// Social icons (inline brand glyphs — lucide dropped brand icons)
const socials = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    path: "M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z",
  },
  {
    name: "X",
    href: "https://twitter.com",
    path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  },
  {
    name: "Facebook",
    href: "https://facebook.com",
    path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
  },
  {
    name: "YouTube",
    href: "https://youtube.com",
    path: "M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z",
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [privacyChecked, setPrivacyChecked] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && privacyChecked) {
      // Handle subscription
      console.log("Subscribing:", email);
      setEmail("");
      setPrivacyChecked(false);
    }
  };

  return (
    <footer className="bg-charcoal text-text-light">
      {/* Newsletter Subscription — charcoal conversion band. Red lives on the
          Subscribe button (the action), not the whole surface; an amber rule +
          faint amber glow carry the accent, a hairline sets it off the footer. */}
      <div className="relative overflow-hidden bg-black border-b border-white/10">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(46% 60% at 100% 0%, rgba(255,180,29,0.08) 0%, transparent 55%)," +
              "radial-gradient(44% 58% at 0% 100%, rgba(255,255,255,0.03) 0%, transparent 58%)",
          }}
        />
        <div className="relative container px-4 sm:px-6 py-10 sm:py-12 md:py-14 lg:py-16">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-10 items-center">
            {/* Left: Subscription Text */}
            <div>
              <span aria-hidden className="mb-5 block h-[3px] w-12 bg-amber" />
              <p className="text-xl sm:text-2xl md:text-[1.9rem] font-semibold tracking-[-0.015em] text-white leading-[1.25]">
                The next era belongs to leaders who prepare for it.
              </p>
              <p className="mt-3 text-[1rem] sm:text-[1.05rem] leading-[1.6] text-white/65 max-w-[52ch]">
                Principled perspectives on governance, strategy, and the future
                of human intelligence — in your inbox.
              </p>
            </div>

            {/* Right: Email Form */}
            <div className="space-y-3 sm:space-y-4">
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="flex-1 px-4 py-3 sm:py-4 bg-white border-0 text-charcoal placeholder:text-charcoal/45 focus:outline-none focus:ring-2 focus:ring-white/70 text-sm"
                  required
                />
                <button
                  type="submit"
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-primary text-white font-bold uppercase tracking-wider hover:bg-primary-hover transition-colors duration-200 ease-in-out text-sm"
                >
                  Subscribe
                </button>
              </form>

              {/* Privacy Checkbox */}
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={privacyChecked}
                  onChange={(e) => setPrivacyChecked(e.target.checked)}
                  className="mt-1 w-4 h-4 border-2 border-white/40 rounded-none accent-[#DE2F23]"
                />
                <span className="text-sm text-white/80">
                  *I have read and understand{" "}
                  <Link href="/privacy-policy" className="text-white underline hover:text-amber transition-colors">
                    NexDyne Consulting Group's Privacy Notice
                  </Link>
                  .
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content — clean, institutional (McKinsey/Bain register) */}
      <div className="container px-4 sm:px-6 py-10 sm:py-16 lg:py-20">
        {/* Top: wordmark + tagline (left) · assist CTA (right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-7">
            {/* Official brand logo (icon + wordmark) */}
            <Link href="/" className="inline-block">
              <img
                src="/brand/logo-white.svg"
                alt="NexDyne Consulting Group"
                className="h-7 sm:h-9 w-auto"
              />
            </Link>
            <h2 className="mt-6 sm:mt-8 max-w-[20ch] text-xl sm:text-3xl md:text-[2.4rem] leading-[1.15] tracking-[-0.02em] text-white/90">
              Human intelligence, governed and scaled.
            </h2>
          </div>

          <div className="lg:col-span-5 lg:border-l lg:border-white/10 lg:pl-12">
            <h3 className="text-lg sm:text-2xl text-white tracking-[-0.01em]">
              How can we assist you?
            </h3>
            <p className="mt-3 max-w-[46ch] text-sm leading-relaxed text-white/70">
              We value the opportunity to connect with you. Please submit your inquiries and
              feedback, and our experienced professionals are ready to assist you.
            </p>
            <Link
              href="/contact"
              className="group mt-6 inline-flex items-center gap-2 border border-white px-7 py-3.5 text-[13px] font-semibold uppercase tracking-[0.1em] text-white transition-colors hover:border-primary hover:bg-primary"
            >
              Contact Us
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Divider → primary nav (left) + social icons (right) */}
        <div className="mt-14 border-t border-white/10 pt-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <nav className="flex flex-col gap-y-4 sm:flex-row sm:flex-wrap sm:gap-x-8 sm:gap-y-3">
              {[
                { label: "Careers", href: "/careers" },
                { label: "Subscribe", href: "/insights" },
                { label: "Alumni", href: "/alumni" },
                { label: "About", href: "/about" },
                { label: "Offices", href: "/about/us-office" },
              ].map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  className="text-[15px] text-white/80 transition-colors hover:text-amber"
                >
                  {l.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-5 sm:gap-4">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="flex h-9 w-9 items-center justify-center text-white/70 transition-colors hover:text-white"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Legal links row */}
          <div className="mt-10 flex flex-col gap-y-3 border-t border-white/10 pt-8 text-[13px] sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-2 sm:border-0 sm:pt-0 sm:text-[12px] sm:uppercase sm:tracking-[0.12em]">
            <Link href="/privacy-policy" className="text-white/60 transition-colors hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="text-white/60 transition-colors hover:text-white">Terms of Use</Link>
            <Link href="/sitemap" className="text-white/60 transition-colors hover:text-white">Sitemap</Link>
            <Link href="/accessibility" className="text-white/60 transition-colors hover:text-white">Responsible Disclosure</Link>
            <Link href="/cookies" className="text-white/60 transition-colors hover:text-white">Cookie Preferences</Link>
          </div>
        </div>

        {/* Fine print */}
        <div className="mt-10 border-t border-white/10 pt-8">
          <p className="max-w-[120ch] text-[11px] leading-relaxed text-white/45">
            NexDyne Consulting Group is an Equal Opportunity Employer. All qualified applicants will receive consideration for employment without regard to race, color, age, religion, sex, sexual orientation, gender identity / expression, national origin, protected veteran status, or any other characteristic protected under federal, state or local law, where applicable, and those with criminal histories will be considered in a manner consistent with applicable state and local laws.
          </p>
          <p className="mt-4 text-xs text-white/60">
            © {new Date().getFullYear()} NexDyne Consulting Group
          </p>
        </div>
      </div>
    </footer>
  );
}
