import { Link } from "wouter";
import { Linkedin, Twitter, Facebook, Youtube, Instagram, ArrowRight } from "lucide-react";
import { useState } from "react";

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
    <footer className="bg-base text-text-light">
      {/* Newsletter Subscription Section */}
      <div className="border-b border-white/10">
        <div className="container px-4 sm:px-6 py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
            {/* Left: Subscription Text */}
            <div>
              <p className="font-serif text-xl sm:text-2xl md:text-3xl text-text-light leading-relaxed italic">
              The next era belongs to leaders who prepare for it. Subscribe to NexDyne Consulting Group Insights — principled perspectives on governance, strategy, and the future of human intelligence.
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
                  className="flex-1 px-4 py-3 sm:py-4 bg-white/10 border-0 text-white placeholder:text-white focus:outline-none focus:ring-2 focus:ring-secondary text-sm "
                  required
                />
                <button
                  type="submit"
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-primary text-white font-bold uppercase tracking-wider hover:bg-primary-hover transition-all duration-200 ease-in-out text-sm "
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
                  className="mt-1 w-4 h-4 border-2 border-white/30 rounded-none accent-secondary"
                />
                <span className="text-sm text-text-light/70">
                  *I have read and understand{" "}
                  <Link href="/privacy-policy" className="text-text-light underline hover:text-secondary transition-colors">
                    NexDyne Consulting Group's Privacy Notice
                  </Link>
                  .
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container px-4 sm:px-6 py-10 sm:py-12 md:py-16 lg:py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 sm:gap-10 md:gap-12">
          {/* Left Column: Tagline */}
          <div className="sm:col-span-2 md:col-span-4">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-text-light leading-tight">
              Unlocking the<br />
              Potential of Those<br />
              Who Advance the<br />
              World
            </h2>
          </div>

          {/* Middle Column: Navigation Links */}
          <div className="sm:col-span-1 md:col-span-3">
            <nav className="grid grid-cols-2 sm:grid-cols-1 gap-3 sm:space-y-4">
              <Link
                href="/careers"
                className="block text-text-light/80 hover:text-secondary transition-colors text-lg"
              >
                Careers
              </Link>
              <Link
                href="/insights"
                className="block text-text-light/80 hover:text-secondary transition-colors text-lg"
              >
                Subscribe
              </Link>
              <Link
                href="/alumni"
                className="block text-text-light/80 hover:text-secondary transition-colors text-lg"
              >
                Alumni
              </Link>
              <Link
                href="/about"
                className="block text-text-light/80 hover:text-secondary transition-colors text-lg"
              >
                About
              </Link>
              <Link
                href="/about/us-office"
                className="block text-text-light/80 hover:text-secondary transition-colors text-lg"
              >
                Offices
              </Link>
            </nav>
          </div>

          {/* Right Column: Contact CTA */}
          <div className="sm:col-span-2 md:col-span-5">
            <h3 className="font-serif text-xl sm:text-2xl md:text-3xl text-text-light mb-3 sm:mb-4">
              How can we assist you?
            </h3>
            <p className="text-white mb-4 sm:mb-6 leading-relaxed text-sm ">
              We value the opportunity to connect with you. Please submit your inquiries and feedback, and our experienced professionals are ready to assist you.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-primary hover:border-primary transition-all duration-200 ease-in-out group text-sm "
            >
              Contact Us
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container px-4 sm:px-6 py-4 sm:py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6">
            {/* Left: Logo and Legal Links */}
            <div className="flex flex-col md:flex-row items-center gap-4 sm:gap-6">
              {/* Logo */}
              <div className="flex items-center gap-3">
                <img
                  src="/nexdyne-logo-darkmode.png"
                  alt="NexDyne Consulting Group"
                  className="h-20 sm:h-24 md:h-28 w-auto object-contain"
                />
              </div>

              {/* Legal Links */}
              <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-white">
                <Link href="/privacy-policy" className="text-white hover:text-secondary transition-colors uppercase tracking-wider">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-white hover:text-secondary transition-colors uppercase tracking-wider">
                  Terms of Use
                </Link>
                <Link href="/sitemap" className="text-white hover:text-secondary transition-colors uppercase tracking-wider">
                  Sitemap
                </Link>
                <Link href="/accessibility" className="text-white hover:text-secondary transition-colors uppercase tracking-wider">
                  Responsible Disclosure
                </Link>
                <Link href="/cookies" className="text-white hover:text-secondary transition-colors uppercase tracking-wider">
                  Cookie Preferences
                </Link>
              </div>
            </div>

            {/* Right: Social Icons */}
            <div className="flex items-center gap-3 sm:gap-4 text-white">
              <span className="hidden sm:inline text-xs text-white uppercase tracking-wider">Follow Us</span>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 -m-2 text-white hover:text-secondary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 -m-2 text-white hover:text-secondary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 -m-2 text-white hover:text-secondary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 -m-2 text-white hover:text-secondary transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 -m-2 text-white hover:text-secondary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Copyright and Equal Opportunity Statement */}
          <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-white/5">
            <p className="text-[10px] sm:text-xs text-white leading-relaxed mb-3 sm:mb-4">
              NexDyne Consulting Group is an Equal Opportunity Employer. All qualified applicants will receive consideration for employment without regard to race, color, age, religion, sex, sexual orientation, gender identity / expression, national origin, protected veteran status, or any other characteristic protected under federal, state or local law, where applicable, and those with criminal histories will be considered in a manner consistent with applicable state and local laws.
            </p>
            <p className="text-xs text-white">
              © {new Date().getFullYear()} NexDyne Consulting Group
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
