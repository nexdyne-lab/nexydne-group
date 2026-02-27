import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Link } from "wouter";

const sections = [
  { id: "introduction", title: "Introduction" },
  { id: "data-collection", title: "Personal Information We Collect" },
  { id: "data-usage", title: "How We Use Your Information" },
  { id: "cookies", title: "Cookies and Tracking Technologies" },
  { id: "third-parties", title: "Information Sharing and Disclosure" },
  { id: "security", title: "Data Security" },
  { id: "retention", title: "Data Retention" },
  { id: "rights", title: "Your Rights and Choices" },
  { id: "children", title: "Children's Privacy" },
  { id: "international", title: "International Data Transfers" },
  { id: "changes", title: "Changes to This Policy" },
  { id: "contact", title: "Contact Us" },
];

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white font-sans text-charcoal">
      <SEO 
        title="Privacy Policy | NexDyne Technologies" 
        description="Learn how NexDyne Technologies collects, uses, and protects your personal information. Our commitment to your privacy."
        canonical="/privacy-policy"
      />
      <Navigation />
      
      {/* Hero Section - Clean, minimal like BCG/McKinsey */}
      <section className="bg-white pt-32 pb-16 border-b border-border/50">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="max-w-4xl">
            <h1 className="text-3xl sm:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-charcoal tracking-tight mb-3">
              Privacy Policy
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
            {/* Table of Contents - Sticky Sidebar */}
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
                
                {/* Introduction */}
                <section id="introduction" className="scroll-mt-32 mb-6 sm:mb-8 md:mb-12">
                  <h2 className="text-2xl font-serif font-bold text-charcoal mb-4">
                    Introduction
                  </h2>
                  <p className="text-charcoal/80 leading-relaxed mb-4">
                    NexDyne Technologies, Inc. and its subsidiaries and affiliates ("NexDyne," "we," "us," or "our") understand that your privacy is important to you. We are committed to respecting your privacy and protecting your personal data.
                  </p>
                  <p className="text-charcoal/80 leading-relaxed mb-4">
                    This Privacy Policy describes how we handle and protect your personal information when we collect it through our websites, applications, and digital assets (collectively, our "Sites") and through our business activities, including service offerings, events, surveys, and communications.
                  </p>
                  <p className="text-charcoal/80 leading-relaxed">
                    By accessing or using our Sites or services, you acknowledge that you have read and understood this Privacy Policy. If you do not agree with our practices, please do not use our Sites or services.
                  </p>
                </section>

                {/* Data Collection */}
                <section id="data-collection" className="scroll-mt-32 mb-6 sm:mb-8 md:mb-12">
                  <h2 className="text-2xl font-serif font-bold text-charcoal mb-4">
                    Personal Information We Collect
                  </h2>
                  <p className="text-charcoal/80 leading-relaxed mb-4">
                    We collect personal information in the course of our business activities directly from you and from third parties. The types of information we collect include:
                  </p>
                  
                  <h3 className="text-lg font-semibold text-charcoal mt-6 mb-3">
                    Information You Provide
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-charcoal/80">
                    <li>Contact information (name, email address, phone number, mailing address)</li>
                    <li>Professional information (company name, job title, industry)</li>
                    <li>Account credentials (username, password)</li>
                    <li>Communications and correspondence with us</li>
                    <li>Survey responses and feedback</li>
                    <li>Event registration information</li>
                  </ul>

                  <h3 className="text-lg font-semibold text-charcoal mt-6 mb-3">
                    Information Collected Automatically
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-charcoal/80">
                    <li>Device information (IP address, browser type, operating system)</li>
                    <li>Usage data (pages visited, time spent, click patterns)</li>
                    <li>Location data (country, region, city based on IP address)</li>
                    <li>Cookies and similar tracking technologies</li>
                  </ul>
                </section>

                {/* Data Usage */}
                <section id="data-usage" className="scroll-mt-32 mb-6 sm:mb-8 md:mb-12">
                  <h2 className="text-2xl font-serif font-bold text-charcoal mb-4">
                    How We Use Your Information
                  </h2>
                  <p className="text-charcoal/80 leading-relaxed mb-4">
                    We use the personal information we collect for the following purposes:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-charcoal/80">
                    <li><strong>Service Delivery:</strong> To provide, maintain, and improve our services and respond to your inquiries</li>
                    <li><strong>Communications:</strong> To send you newsletters, marketing materials, and updates about our services (with your consent where required)</li>
                    <li><strong>Personalization:</strong> To tailor your experience and provide relevant content and recommendations</li>
                    <li><strong>Analytics:</strong> To understand how our Sites are used and to improve our offerings</li>
                    <li><strong>Security:</strong> To protect our Sites, services, and users from fraud and security threats</li>
                    <li><strong>Legal Compliance:</strong> To comply with applicable laws, regulations, and legal processes</li>
                  </ul>
                </section>

                {/* Cookies */}
                <section id="cookies" className="scroll-mt-32 mb-6 sm:mb-8 md:mb-12">
                  <h2 className="text-2xl font-serif font-bold text-charcoal mb-4">
                    Cookies and Tracking Technologies
                  </h2>
                  <p className="text-charcoal/80 leading-relaxed mb-4">
                    We use cookies and similar tracking technologies to collect information about your browsing activities. Cookies are small text files stored on your device that help us provide and improve our services.
                  </p>
                  
                  <h3 className="text-lg font-semibold text-charcoal mt-6 mb-3">
                    Types of Cookies We Use
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-charcoal/80">
                    <li><strong>Essential Cookies:</strong> Required for the operation of our Sites and cannot be disabled</li>
                    <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our Sites</li>
                    <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements and track campaign effectiveness</li>
                    <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                  </ul>
                  <p className="text-charcoal/80 leading-relaxed mt-4">
                    You can manage your cookie preferences through our <Link href="/cookies" className="text-primary hover:underline">Cookie Preferences</Link> page or through your browser settings.
                  </p>
                </section>

                {/* Third Parties */}
                <section id="third-parties" className="scroll-mt-32 mb-6 sm:mb-8 md:mb-12">
                  <h2 className="text-2xl font-serif font-bold text-charcoal mb-4">
                    Information Sharing and Disclosure
                  </h2>
                  <p className="text-charcoal/80 leading-relaxed mb-4">
                    We do not sell your personal information. We may share your information with:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-charcoal/80">
                    <li><strong>Service Providers:</strong> Third-party vendors who assist us in operating our business (hosting, analytics, email delivery)</li>
                    <li><strong>Affiliates:</strong> Our subsidiaries and affiliated companies</li>
                    <li><strong>Business Partners:</strong> For co-sponsored events or joint marketing initiatives</li>
                    <li><strong>Legal Requirements:</strong> When required by law, court order, or governmental authority</li>
                    <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                  </ul>
                </section>

                {/* Security */}
                <section id="security" className="scroll-mt-32 mb-6 sm:mb-8 md:mb-12">
                  <h2 className="text-2xl font-serif font-bold text-charcoal mb-4">
                    Data Security
                  </h2>
                  <p className="text-charcoal/80 leading-relaxed mb-4">
                    We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-charcoal/80">
                    <li>Encryption of data in transit and at rest</li>
                    <li>Access controls and authentication requirements</li>
                    <li>Regular security assessments and audits</li>
                    <li>Employee training on data protection</li>
                  </ul>
                  <p className="text-charcoal/80 leading-relaxed mt-4">
                    While we strive to protect your information, no method of transmission over the Internet or electronic storage is completely secure. We cannot guarantee absolute security.
                  </p>
                </section>

                {/* Retention */}
                <section id="retention" className="scroll-mt-32 mb-6 sm:mb-8 md:mb-12">
                  <h2 className="text-2xl font-serif font-bold text-charcoal mb-4">
                    Data Retention
                  </h2>
                  <p className="text-charcoal/80 leading-relaxed">
                    We retain your personal information for as long as necessary to fulfill the purposes for which it was collected, comply with legal obligations, resolve disputes, and enforce our agreements. When we no longer need your information, we will securely delete or anonymize it.
                  </p>
                </section>

                {/* Rights */}
                <section id="rights" className="scroll-mt-32 mb-6 sm:mb-8 md:mb-12">
                  <h2 className="text-2xl font-serif font-bold text-charcoal mb-4">
                    Your Rights and Choices
                  </h2>
                  <p className="text-charcoal/80 leading-relaxed mb-4">
                    Depending on your location, you may have certain rights regarding your personal information:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-charcoal/80">
                    <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                    <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                    <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                    <li><strong>Portability:</strong> Request transfer of your data to another service</li>
                    <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications</li>
                    <li><strong>Restriction:</strong> Request restriction of processing in certain circumstances</li>
                  </ul>
                  <p className="text-charcoal/80 leading-relaxed mt-4">
                    To exercise these rights, please contact us using the information provided in the "Contact Us" section below.
                  </p>
                </section>

                {/* Children */}
                <section id="children" className="scroll-mt-32 mb-6 sm:mb-8 md:mb-12">
                  <h2 className="text-2xl font-serif font-bold text-charcoal mb-4">
                    Children's Privacy
                  </h2>
                  <p className="text-charcoal/80 leading-relaxed">
                    Our Sites and services are not directed to children under the age of 16. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately, and we will take steps to delete such information.
                  </p>
                </section>

                {/* International */}
                <section id="international" className="scroll-mt-32 mb-6 sm:mb-8 md:mb-12">
                  <h2 className="text-2xl font-serif font-bold text-charcoal mb-4">
                    International Data Transfers
                  </h2>
                  <p className="text-charcoal/80 leading-relaxed">
                    Your personal information may be transferred to and processed in countries other than your country of residence. These countries may have different data protection laws. We implement appropriate safeguards to ensure your information remains protected in accordance with this Privacy Policy, including standard contractual clauses and other transfer mechanisms approved by relevant authorities.
                  </p>
                </section>

                {/* Changes */}
                <section id="changes" className="scroll-mt-32 mb-6 sm:mb-8 md:mb-12">
                  <h2 className="text-2xl font-serif font-bold text-charcoal mb-4">
                    Changes to This Policy
                  </h2>
                  <p className="text-charcoal/80 leading-relaxed">
                    We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. We will post the updated policy on this page with a new "Last updated" date. We encourage you to review this policy periodically. Your continued use of our Sites or services after any changes constitutes acceptance of the updated policy.
                  </p>
                </section>

                {/* Contact */}
                <section id="contact" className="scroll-mt-32 mb-6 sm:mb-8 md:mb-12">
                  <h2 className="text-2xl font-serif font-bold text-charcoal mb-4">
                    Contact Us
                  </h2>
                  <p className="text-charcoal/80 leading-relaxed mb-4">
                    If you have questions about this Privacy Policy or wish to exercise your data protection rights, please contact us:
                  </p>
                  <div className="bg-subtle p-4 sm:p-5 md:p-6 rounded-lg">
                    <p className="text-charcoal/80 mb-2">
                      <strong>NexDyne Technologies</strong>
                    </p>
                    <p className="text-charcoal/80 mb-2">
                      Data Protection Officer
                    </p>
                    <p className="text-charcoal/80 mb-2">
                      Email: <a href="mailto:privacy@nexdyne.com" className="text-primary hover:underline">privacy@nexdyne.com</a>
                    </p>
                    <p className="text-charcoal/80">
                      You may also use our <Link href="/contact" className="text-primary hover:underline">Contact Form</Link> to reach us.
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
