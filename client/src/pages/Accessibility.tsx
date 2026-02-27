import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Link } from "wouter";

const sections = [
  { id: "commitment", title: "Our Commitment" },
  { id: "standards", title: "Accessibility Standards" },
  { id: "features", title: "Accessibility Features" },
  { id: "assistive", title: "Assistive Technologies" },
  { id: "ongoing", title: "Ongoing Efforts" },
  { id: "feedback", title: "Feedback and Assistance" },
  { id: "contact", title: "Contact Us" },
];

export default function Accessibility() {
  return (
    <div className="min-h-screen bg-white font-sans text-charcoal">
      <SEO 
        title="Accessibility | NexDyne Technologies" 
        description="NexDyne Technologies is committed to digital accessibility. Learn about our accessibility standards and how to request assistance."
        canonical="/accessibility"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-white pt-32 pb-16 border-b border-border/50">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="max-w-4xl">
            <h1 className="text-3xl sm:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-charcoal tracking-tight mb-3 eb-garamond">
              Accessibility Statement
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
                
                {/* Commitment */}
                <section id="commitment" className="scroll-mt-32 mb-6 sm:mb-8 md:mb-12">
                  <h2 className="text-2xl font-serif font-bold text-charcoal mb-4">
                    Our Commitment to Accessibility
                  </h2>
                  <p className="text-charcoal/80 leading-relaxed mb-4">
                    NexDyne Technologies is committed to ensuring digital accessibility for people with disabilities. We believe that everyone should have equal access to information and functionality on our website, regardless of ability.
                  </p>
                  <p className="text-charcoal/80 leading-relaxed mb-4">
                    We are continually improving the user experience for everyone and applying the relevant accessibility standards to ensure we provide equal access to all users. Our goal is to permit all visitors, including those with disabilities, to browse, learn, and interact with our website in a meaningful way.
                  </p>
                  <p className="text-charcoal/80 leading-relaxed">
                    Accessibility is an ongoing effort, and we are committed to maintaining and improving the accessibility of our digital properties over time.
                  </p>
                </section>

                {/* Standards */}
                <section id="standards" className="scroll-mt-32 mb-6 sm:mb-8 md:mb-12">
                  <h2 className="text-2xl font-serif font-bold text-charcoal mb-4">
                    Accessibility Standards
                  </h2>
                  <p className="text-charcoal/80 leading-relaxed mb-4">
                    We strive to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 at Level AA. These guidelines explain how to make web content more accessible for people with disabilities and more user-friendly for everyone.
                  </p>
                  <p className="text-charcoal/80 leading-relaxed mb-4">
                    The guidelines are organized around four principles that provide the foundation for web accessibility:
                  </p>
                  <ul className="list-disc pl-6 space-y-3 text-charcoal/80">
                    <li>
                      <strong>Perceivable:</strong> Information and user interface components must be presentable to users in ways they can perceive. This includes providing text alternatives for non-text content, captions for multimedia, and content that can be presented in different ways.
                    </li>
                    <li>
                      <strong>Operable:</strong> User interface components and navigation must be operable. This includes making all functionality available from a keyboard, giving users enough time to read and use content, and not designing content in a way that causes seizures.
                    </li>
                    <li>
                      <strong>Understandable:</strong> Information and the operation of the user interface must be understandable. This includes making text readable and understandable, making content appear and operate in predictable ways, and helping users avoid and correct mistakes.
                    </li>
                    <li>
                      <strong>Robust:</strong> Content must be robust enough to be interpreted reliably by a wide variety of user agents, including assistive technologies.
                    </li>
                  </ul>
                </section>

                {/* Features */}
                <section id="features" className="scroll-mt-32 mb-6 sm:mb-8 md:mb-12">
                  <h2 className="text-2xl font-serif font-bold text-charcoal mb-4">
                    Accessibility Features
                  </h2>
                  <p className="text-charcoal/80 leading-relaxed mb-4">
                    Our website includes the following accessibility features:
                  </p>
                  
                  <h3 className="text-lg font-semibold text-charcoal mt-6 mb-3">
                    Navigation and Structure
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-charcoal/80">
                    <li>Consistent navigation throughout the website</li>
                    <li>Clear heading hierarchy for easy content scanning</li>
                    <li>Skip navigation links to bypass repetitive content</li>
                    <li>Descriptive page titles and link text</li>
                    <li>Logical tab order for keyboard navigation</li>
                  </ul>

                  <h3 className="text-lg font-semibold text-charcoal mt-6 mb-3">
                    Visual Design
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-charcoal/80">
                    <li>Sufficient color contrast between text and backgrounds</li>
                    <li>Text that can be resized up to 200% without loss of functionality</li>
                    <li>No content that flashes more than three times per second</li>
                    <li>Focus indicators for keyboard users</li>
                    <li>Responsive design that works across devices and screen sizes</li>
                  </ul>

                  <h3 className="text-lg font-semibold text-charcoal mt-6 mb-3">
                    Content and Media
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-charcoal/80">
                    <li>Alternative text for images and graphics</li>
                    <li>Captions and transcripts for video content where available</li>
                    <li>Clear and simple language</li>
                    <li>Descriptive labels for form fields</li>
                    <li>Error messages that clearly identify and describe issues</li>
                  </ul>
                </section>

                {/* Assistive Technologies */}
                <section id="assistive" className="scroll-mt-32 mb-6 sm:mb-8 md:mb-12">
                  <h2 className="text-2xl font-serif font-bold text-charcoal mb-4">
                    Assistive Technologies
                  </h2>
                  <p className="text-charcoal/80 leading-relaxed mb-4">
                    Our website is designed to be compatible with the following assistive technologies:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-charcoal/80">
                    <li>Screen readers (such as JAWS, NVDA, VoiceOver, and TalkBack)</li>
                    <li>Screen magnification software</li>
                    <li>Speech recognition software</li>
                    <li>Keyboard-only navigation</li>
                    <li>Browser accessibility features and extensions</li>
                  </ul>
                  <p className="text-charcoal/80 leading-relaxed mt-4">
                    We recommend using the latest versions of browsers and assistive technologies for the best experience.
                  </p>
                </section>

                {/* Ongoing Efforts */}
                <section id="ongoing" className="scroll-mt-32 mb-6 sm:mb-8 md:mb-12">
                  <h2 className="text-2xl font-serif font-bold text-charcoal mb-4">
                    Ongoing Efforts
                  </h2>
                  <p className="text-charcoal/80 leading-relaxed mb-4">
                    We are committed to maintaining and improving accessibility through the following measures:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-charcoal/80">
                    <li>Regular accessibility audits and testing</li>
                    <li>Training for our content creators and developers</li>
                    <li>Integration of accessibility into our design and development processes</li>
                    <li>Monitoring and addressing accessibility feedback</li>
                    <li>Staying current with accessibility standards and best practices</li>
                  </ul>
                  <p className="text-charcoal/80 leading-relaxed mt-4">
                    While we strive for comprehensive accessibility, we acknowledge that some areas of our website may not yet fully meet all accessibility standards. We are actively working to identify and address these gaps.
                  </p>
                </section>

                {/* Feedback */}
                <section id="feedback" className="scroll-mt-32 mb-6 sm:mb-8 md:mb-12">
                  <h2 className="text-2xl font-serif font-bold text-charcoal mb-4">
                    Feedback and Assistance
                  </h2>
                  <p className="text-charcoal/80 leading-relaxed mb-4">
                    We welcome your feedback on the accessibility of our website. If you encounter any accessibility barriers or have suggestions for improvement, please let us know.
                  </p>
                  <p className="text-charcoal/80 leading-relaxed mb-4">
                    If you need assistance accessing any content or functionality on our website, we are happy to help. We can provide information in alternative formats upon request.
                  </p>
                  <div className="bg-base/5 border border-base/10 rounded-lg p-4 sm:p-5 md:p-6 mt-6">
                    <h3 className="text-lg font-semibold text-charcoal mb-3">
                      When Contacting Us, Please Include:
                    </h3>
                    <ul className="list-disc pl-6 space-y-2 text-charcoal/80">
                      <li>The web page URL where you encountered the issue</li>
                      <li>A description of the accessibility problem</li>
                      <li>The assistive technology you were using (if applicable)</li>
                      <li>Your contact information so we can follow up</li>
                    </ul>
                  </div>
                </section>

                {/* Contact */}
                <section id="contact" className="scroll-mt-32 mb-6 sm:mb-8 md:mb-12">
                  <h2 className="text-2xl font-serif font-bold text-charcoal mb-4">
                    Contact Us
                  </h2>
                  <p className="text-charcoal/80 leading-relaxed mb-4">
                    For accessibility-related inquiries or to request assistance, please contact us:
                  </p>
                  <div className="bg-subtle p-4 sm:p-5 md:p-6 rounded-lg">
                    <p className="text-charcoal/80 mb-2">
                      <strong>NexDyne Technologies</strong>
                    </p>
                    <p className="text-charcoal/80 mb-2">
                      Accessibility Team
                    </p>
                    <p className="text-charcoal/80 mb-2">
                      Email: <a href="mailto:accessibility@nexdyne.com" className="text-primary hover:underline">accessibility@nexdyne.com</a>
                    </p>
                    <p className="text-charcoal/80">
                      You may also use our <Link href="/contact" className="text-primary hover:underline">Contact Form</Link> to reach us.
                    </p>
                  </div>
                  <p className="text-charcoal/80 leading-relaxed mt-6">
                    We aim to respond to accessibility feedback within 5 business days and to resolve accessibility issues as quickly as possible.
                  </p>
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
