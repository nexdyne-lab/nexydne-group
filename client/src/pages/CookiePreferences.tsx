import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Link } from "wouter";

const sections = [
  { id: "what-are-cookies", title: "What Are Cookies" },
  { id: "how-we-use", title: "How We Use Cookies" },
  { id: "types", title: "Types of Cookies" },
  { id: "managing", title: "Managing Your Preferences" },
  { id: "third-party", title: "Third-Party Cookies" },
  { id: "updates", title: "Updates to This Notice" },
  { id: "contact", title: "Contact Us" },
];

const cookieTypes = [
  {
    name: "Essential Cookies",
    required: true,
    description: "These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and account access. You cannot disable these cookies.",
    examples: ["Session management", "Security tokens", "Load balancing", "User authentication"]
  },
  {
    name: "Analytics Cookies",
    required: false,
    description: "These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our website and services.",
    examples: ["Page views and navigation", "Time spent on pages", "Error tracking", "Performance metrics"]
  },
  {
    name: "Marketing Cookies",
    required: false,
    description: "These cookies are used to track visitors across websites to display relevant advertisements. They help us measure the effectiveness of our marketing campaigns.",
    examples: ["Ad targeting", "Campaign tracking", "Conversion measurement", "Retargeting"]
  },
  {
    name: "Preference Cookies",
    required: false,
    description: "These cookies enable the website to remember choices you make (such as your language preference or region) and provide enhanced, personalized features.",
    examples: ["Language settings", "Regional preferences", "Display preferences", "Accessibility settings"]
  }
];

export default function CookiePreferences() {
  return (
    <div className="min-h-screen bg-white font-sans text-charcoal">
      <SEO 
        title="Cookie Preferences | NexDyne Technologies" 
        description="Learn about how NexDyne Technologies uses cookies and manage your cookie preferences."
        canonical="/cookies"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-white pt-32 pb-16 border-b border-border/50">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="max-w-4xl">
            <h1 className="text-3xl sm:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-charcoal tracking-tight mb-3">
              Cookie Preferences
            </h1>
            <p className="text-lg text-muted-foreground italic">
              Last updated: January 2026
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-12 sm:py-16 lg:py-20">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12">
            {/* Table of Contents */}
            <aside className="lg:col-span-3">
              <div className="lg:sticky lg:top-32">
                <h2 className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground/70 mb-4">
                  Contents
                </h2>
                <nav className="space-y-2">
                  {sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1"
                    >
                      {section.title}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Main Content */}
            <main className="lg:col-span-9 max-w-3xl">
              <div className="prose prose-lg prose-gray max-w-none">
                
                {/* What Are Cookies */}
                <section id="what-are-cookies" className="scroll-mt-32 mb-6 sm:mb-8 md:mb-12">
                  <h2 className="text-2xl font-serif font-bold text-charcoal mb-4">
                    What Are Cookies
                  </h2>
                  <p className="text-charcoal/80 leading-relaxed mb-4">
                    Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and to provide information to website owners.
                  </p>
                  <p className="text-charcoal/80 leading-relaxed">
                    Cookies allow websites to recognize your device and remember information about your visit, such as your preferences and settings. This helps provide you with a more personalized experience and enables certain website functionality.
                  </p>
                </section>

                {/* How We Use Cookies */}
                <section id="how-we-use" className="scroll-mt-32 mb-6 sm:mb-8 md:mb-12">
                  <h2 className="text-2xl font-serif font-bold text-charcoal mb-4">
                    How We Use Cookies
                  </h2>
                  <p className="text-charcoal/80 leading-relaxed mb-4">
                    NexDyne Technologies uses cookies and similar tracking technologies on our websites for several purposes:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-charcoal/80">
                    <li><strong>Essential Operations:</strong> To ensure our website functions correctly and securely</li>
                    <li><strong>Performance Analysis:</strong> To understand how visitors use our website and identify areas for improvement</li>
                    <li><strong>Personalization:</strong> To remember your preferences and provide relevant content</li>
                    <li><strong>Marketing:</strong> To deliver targeted advertising and measure campaign effectiveness</li>
                  </ul>
                </section>

                {/* Types of Cookies */}
                <section id="types" className="scroll-mt-32 mb-6 sm:mb-8 md:mb-12">
                  <h2 className="text-2xl font-serif font-bold text-charcoal mb-4">
                    Types of Cookies We Use
                  </h2>
                  <p className="text-charcoal/80 leading-relaxed mb-6">
                    We use the following categories of cookies on our website:
                  </p>
                  
                  <div className="space-y-6">
                    {cookieTypes.map((cookie, index) => (
                      <div key={index} className="border border-border rounded-lg p-4 sm:p-5 md:p-6">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="text-lg font-semibold text-charcoal">
                            {cookie.name}
                          </h3>
                          <span className={`text-xs font-medium px-3 py-1 rounded-full ${
                            cookie.required 
                              ? "bg-subtle text-muted-foreground" 
                              : "bg-primary/10 text-primary"
                          }`}>
                            {cookie.required ? "Always Active" : "Optional"}
                          </span>
                        </div>
                        <p className="text-muted-foreground text-sm mb-4">
                          {cookie.description}
                        </p>
                        <div>
                          <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground/70">Examples:</span>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {cookie.examples.map((example, i) => (
                              <span key={i} className="text-xs bg-subtle text-muted-foreground px-2 py-1 rounded">
                                {example}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Managing Preferences */}
                <section id="managing" className="scroll-mt-32 mb-6 sm:mb-8 md:mb-12">
                  <h2 className="text-2xl font-serif font-bold text-charcoal mb-4">
                    Managing Your Cookie Preferences
                  </h2>
                  <p className="text-charcoal/80 leading-relaxed mb-4">
                    You have several options for managing cookies:
                  </p>
                  
                  <h3 className="text-lg font-semibold text-charcoal mt-6 mb-3">
                    Browser Settings
                  </h3>
                  <p className="text-charcoal/80 leading-relaxed mb-4">
                    Most web browsers allow you to control cookies through their settings. You can typically find these options in the "Privacy" or "Security" section of your browser. Common browsers include:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-charcoal/80 mb-6">
                    <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Chrome</a></li>
                    <li><a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Mozilla Firefox</a></li>
                    <li><a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Apple Safari</a></li>
                    <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Microsoft Edge</a></li>
                  </ul>

                  <h3 className="text-lg font-semibold text-charcoal mt-6 mb-3">
                    Opt-Out Tools
                  </h3>
                  <p className="text-charcoal/80 leading-relaxed mb-4">
                    You can also use industry opt-out tools to manage advertising cookies:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-charcoal/80">
                    <li><a href="https://optout.networkadvertising.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Network Advertising Initiative (NAI)</a></li>
                    <li><a href="https://optout.aboutads.info/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Digital Advertising Alliance (DAA)</a></li>
                    <li><a href="https://www.youronlinechoices.eu/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">European Interactive Digital Advertising Alliance (EDAA)</a></li>
                  </ul>

                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-6">
                    <p className="text-amber-800 text-sm">
                      <strong>Note:</strong> Disabling certain cookies may affect the functionality of our website and limit your ability to use some features.
                    </p>
                  </div>
                </section>

                {/* Third-Party Cookies */}
                <section id="third-party" className="scroll-mt-32 mb-6 sm:mb-8 md:mb-12">
                  <h2 className="text-2xl font-serif font-bold text-charcoal mb-4">
                    Third-Party Cookies
                  </h2>
                  <p className="text-charcoal/80 leading-relaxed mb-4">
                    Some cookies on our website are set by third-party services that appear on our pages. We use the following third-party services that may set cookies:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-charcoal/80">
                    <li><strong>Google Analytics:</strong> For website analytics and performance measurement</li>
                    <li><strong>LinkedIn:</strong> For social sharing and professional networking features</li>
                    <li><strong>HubSpot:</strong> For marketing automation and lead tracking</li>
                    <li><strong>Intercom:</strong> For customer support and chat functionality</li>
                  </ul>
                  <p className="text-charcoal/80 leading-relaxed mt-4">
                    These third parties have their own privacy policies governing the use of cookies. We encourage you to review their policies for more information.
                  </p>
                </section>

                {/* Updates */}
                <section id="updates" className="scroll-mt-32 mb-6 sm:mb-8 md:mb-12">
                  <h2 className="text-2xl font-serif font-bold text-charcoal mb-4">
                    Updates to This Notice
                  </h2>
                  <p className="text-charcoal/80 leading-relaxed">
                    We may update this Cookie Notice from time to time to reflect changes in our practices or applicable laws. We will post any changes on this page with an updated "Last updated" date. We encourage you to review this notice periodically to stay informed about how we use cookies.
                  </p>
                </section>

                {/* Contact */}
                <section id="contact" className="scroll-mt-32 mb-6 sm:mb-8 md:mb-12">
                  <h2 className="text-2xl font-serif font-bold text-charcoal mb-4">
                    Contact Us
                  </h2>
                  <p className="text-charcoal/80 leading-relaxed mb-4">
                    If you have questions about our use of cookies or this Cookie Notice, please contact us:
                  </p>
                  <div className="bg-subtle p-4 sm:p-5 md:p-6 rounded-lg">
                    <p className="text-charcoal/80 mb-2">
                      <strong>NexDyne Technologies</strong>
                    </p>
                    <p className="text-charcoal/80 mb-2">
                      Privacy Team
                    </p>
                    <p className="text-charcoal/80 mb-2">
                      Email: <a href="mailto:privacy@nexdyne.com" className="text-primary hover:underline">privacy@nexdyne.com</a>
                    </p>
                    <p className="text-charcoal/80">
                      For more information about how we handle your personal data, please see our <Link href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link>.
                    </p>
                  </div>
                </section>

              </div>
            </main>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
