import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Link } from "wouter";

const sections = [
  { id: "acceptance", title: "Acceptance of Terms" },
  { id: "services", title: "Description of Services" },
  { id: "accounts", title: "User Accounts" },
  { id: "conduct", title: "User Conduct" },
  { id: "intellectual-property", title: "Intellectual Property" },
  { id: "content", title: "User Content" },
  { id: "third-party", title: "Third-Party Links" },
  { id: "disclaimers", title: "Disclaimers" },
  { id: "limitation", title: "Limitation of Liability" },
  { id: "indemnification", title: "Indemnification" },
  { id: "termination", title: "Termination" },
  { id: "governing-law", title: "Governing Law" },
  { id: "changes", title: "Changes to Terms" },
  { id: "contact", title: "Contact Information" },
];

export default function TermsOfUse() {
  return (
    <div className="min-h-screen bg-white font-sans text-charcoal">
      <SEO 
        title="Terms of Use | NexDyne Technologies" 
        description="Terms and conditions governing your use of NexDyne Technologies websites and services."
        canonical="/terms"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-white pt-32 pb-16 border-b border-border/50">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="max-w-4xl">
            <h1 className="text-3xl sm:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-charcoal tracking-tight mb-3">
              Terms of Use
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
                
                {/* Acceptance */}
                <section id="acceptance" className="scroll-mt-32 mb-6 sm:mb-8 md:mb-12">
                  <h2 className="text-2xl font-serif font-bold text-charcoal mb-4">
                    Acceptance of Terms
                  </h2>
                  <p className="text-charcoal/80 leading-relaxed mb-4">
                    Welcome to NexDyne Technologies. These Terms of Use ("Terms") govern your access to and use of our websites, applications, and services (collectively, the "Services") operated by NexDyne Technologies, Inc. and its affiliates ("NexDyne," "we," "us," or "our").
                  </p>
                  <p className="text-charcoal/80 leading-relaxed mb-4">
                    By accessing or using our Services, you agree to be bound by these Terms and our <Link href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link>. If you do not agree to these Terms, you may not access or use our Services.
                  </p>
                  <p className="text-charcoal/80 leading-relaxed">
                    If you are using the Services on behalf of an organization, you represent and warrant that you have the authority to bind that organization to these Terms.
                  </p>
                </section>

                {/* Services */}
                <section id="services" className="scroll-mt-32 mb-6 sm:mb-8 md:mb-12">
                  <h2 className="text-2xl font-serif font-bold text-charcoal mb-4">
                    Description of Services
                  </h2>
                  <p className="text-charcoal/80 leading-relaxed mb-4">
                    NexDyne Technologies provides digital transformation consulting, AI-powered automation solutions, data analytics, and related professional services. Our Services include:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-charcoal/80">
                    <li>Access to our websites and digital platforms</li>
                    <li>Thought leadership content, insights, and publications</li>
                    <li>Event registration and participation</li>
                    <li>Newsletter subscriptions and communications</li>
                    <li>Professional consulting and implementation services</li>
                  </ul>
                  <p className="text-charcoal/80 leading-relaxed mt-4">
                    We reserve the right to modify, suspend, or discontinue any aspect of our Services at any time without prior notice.
                  </p>
                </section>

                {/* Accounts */}
                <section id="accounts" className="scroll-mt-32 mb-6 sm:mb-8 md:mb-12">
                  <h2 className="text-2xl font-serif font-bold text-charcoal mb-4">
                    User Accounts
                  </h2>
                  <p className="text-charcoal/80 leading-relaxed mb-4">
                    Some features of our Services may require you to create an account. When creating an account, you agree to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-charcoal/80">
                    <li>Provide accurate, current, and complete information</li>
                    <li>Maintain and promptly update your account information</li>
                    <li>Maintain the security and confidentiality of your login credentials</li>
                    <li>Accept responsibility for all activities that occur under your account</li>
                    <li>Notify us immediately of any unauthorized access or security breach</li>
                  </ul>
                  <p className="text-charcoal/80 leading-relaxed mt-4">
                    We reserve the right to suspend or terminate accounts that violate these Terms or for any other reason at our sole discretion.
                  </p>
                </section>

                {/* Conduct */}
                <section id="conduct" className="scroll-mt-32 mb-6 sm:mb-8 md:mb-12">
                  <h2 className="text-2xl font-serif font-bold text-charcoal mb-4">
                    User Conduct
                  </h2>
                  <p className="text-charcoal/80 leading-relaxed mb-4">
                    You agree to use our Services only for lawful purposes and in accordance with these Terms. You agree not to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-charcoal/80">
                    <li>Violate any applicable laws, regulations, or third-party rights</li>
                    <li>Use the Services for any fraudulent, harmful, or illegal purpose</li>
                    <li>Interfere with or disrupt the Services or servers</li>
                    <li>Attempt to gain unauthorized access to any part of the Services</li>
                    <li>Use automated systems to access the Services without permission</li>
                    <li>Transmit viruses, malware, or other harmful code</li>
                    <li>Impersonate any person or entity</li>
                    <li>Collect or harvest information about other users</li>
                  </ul>
                </section>

                {/* Intellectual Property */}
                <section id="intellectual-property" className="scroll-mt-32 mb-6 sm:mb-8 md:mb-12">
                  <h2 className="text-2xl font-serif font-bold text-charcoal mb-4">
                    Intellectual Property
                  </h2>
                  <p className="text-charcoal/80 leading-relaxed mb-4">
                    All content, features, and functionality of our Services, including but not limited to text, graphics, logos, icons, images, audio, video, software, and data compilations, are the exclusive property of NexDyne Technologies or our licensors and are protected by copyright, trademark, and other intellectual property laws.
                  </p>
                  <p className="text-charcoal/80 leading-relaxed mb-4">
                    You are granted a limited, non-exclusive, non-transferable license to access and use our Services for personal, non-commercial purposes. This license does not include:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-charcoal/80">
                    <li>Modifying or copying our materials</li>
                    <li>Using materials for commercial purposes without authorization</li>
                    <li>Removing any copyright or proprietary notices</li>
                    <li>Transferring materials to another person or organization</li>
                  </ul>
                </section>

                {/* User Content */}
                <section id="content" className="scroll-mt-32 mb-6 sm:mb-8 md:mb-12">
                  <h2 className="text-2xl font-serif font-bold text-charcoal mb-4">
                    User Content
                  </h2>
                  <p className="text-charcoal/80 leading-relaxed mb-4">
                    You may have the opportunity to submit content through our Services, including comments, feedback, and other materials ("User Content"). By submitting User Content, you:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-charcoal/80">
                    <li>Grant us a non-exclusive, worldwide, royalty-free license to use, reproduce, modify, and distribute your User Content</li>
                    <li>Represent that you own or have the rights to submit such content</li>
                    <li>Agree that your User Content does not violate any third-party rights</li>
                  </ul>
                  <p className="text-charcoal/80 leading-relaxed mt-4">
                    We do not endorse User Content and reserve the right to remove any content that violates these Terms.
                  </p>
                </section>

                {/* Third Party */}
                <section id="third-party" className="scroll-mt-32 mb-6 sm:mb-8 md:mb-12">
                  <h2 className="text-2xl font-serif font-bold text-charcoal mb-4">
                    Third-Party Links
                  </h2>
                  <p className="text-charcoal/80 leading-relaxed">
                    Our Services may contain links to third-party websites or services that are not owned or controlled by NexDyne Technologies. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services. You acknowledge and agree that we shall not be responsible or liable for any damage or loss caused by your use of any third-party websites or services.
                  </p>
                </section>

                {/* Disclaimers */}
                <section id="disclaimers" className="scroll-mt-32 mb-6 sm:mb-8 md:mb-12">
                  <h2 className="text-2xl font-serif font-bold text-charcoal mb-4">
                    Disclaimers
                  </h2>
                  <p className="text-charcoal/80 leading-relaxed mb-4">
                    THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                  </p>
                  <p className="text-charcoal/80 leading-relaxed">
                    We do not warrant that the Services will be uninterrupted, secure, or error-free, that defects will be corrected, or that the Services are free of viruses or other harmful components. Any content or information obtained through the Services is at your own risk.
                  </p>
                </section>

                {/* Limitation */}
                <section id="limitation" className="scroll-mt-32 mb-6 sm:mb-8 md:mb-12">
                  <h2 className="text-2xl font-serif font-bold text-charcoal mb-4">
                    Limitation of Liability
                  </h2>
                  <p className="text-charcoal/80 leading-relaxed mb-4">
                    TO THE MAXIMUM EXTENT PERMITTED BY LAW, NEXDYNE TECHNOLOGIES AND ITS OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, OR GOODWILL, ARISING OUT OF OR RELATED TO YOUR USE OF THE SERVICES.
                  </p>
                  <p className="text-charcoal/80 leading-relaxed">
                    Our total liability for any claims arising from or related to these Terms or the Services shall not exceed the amount you paid to us, if any, in the twelve (12) months preceding the claim.
                  </p>
                </section>

                {/* Indemnification */}
                <section id="indemnification" className="scroll-mt-32 mb-6 sm:mb-8 md:mb-12">
                  <h2 className="text-2xl font-serif font-bold text-charcoal mb-4">
                    Indemnification
                  </h2>
                  <p className="text-charcoal/80 leading-relaxed">
                    You agree to indemnify, defend, and hold harmless NexDyne Technologies and its officers, directors, employees, agents, and affiliates from and against any claims, liabilities, damages, losses, costs, and expenses (including reasonable attorneys' fees) arising out of or related to your use of the Services, your violation of these Terms, or your violation of any rights of another party.
                  </p>
                </section>

                {/* Termination */}
                <section id="termination" className="scroll-mt-32 mb-6 sm:mb-8 md:mb-12">
                  <h2 className="text-2xl font-serif font-bold text-charcoal mb-4">
                    Termination
                  </h2>
                  <p className="text-charcoal/80 leading-relaxed">
                    We may terminate or suspend your access to the Services immediately, without prior notice or liability, for any reason, including if you breach these Terms. Upon termination, your right to use the Services will immediately cease. All provisions of these Terms that by their nature should survive termination shall survive, including ownership provisions, warranty disclaimers, and limitations of liability.
                  </p>
                </section>

                {/* Governing Law */}
                <section id="governing-law" className="scroll-mt-32 mb-6 sm:mb-8 md:mb-12">
                  <h2 className="text-2xl font-serif font-bold text-charcoal mb-4">
                    Governing Law
                  </h2>
                  <p className="text-charcoal/80 leading-relaxed">
                    These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, United States, without regard to its conflict of law provisions. Any disputes arising from or related to these Terms or the Services shall be resolved exclusively in the state or federal courts located in Delaware, and you consent to the personal jurisdiction of such courts.
                  </p>
                </section>

                {/* Changes */}
                <section id="changes" className="scroll-mt-32 mb-6 sm:mb-8 md:mb-12">
                  <h2 className="text-2xl font-serif font-bold text-charcoal mb-4">
                    Changes to Terms
                  </h2>
                  <p className="text-charcoal/80 leading-relaxed">
                    We reserve the right to modify these Terms at any time. We will provide notice of material changes by posting the updated Terms on this page with a new "Last updated" date. Your continued use of the Services after any changes constitutes acceptance of the modified Terms. We encourage you to review these Terms periodically.
                  </p>
                </section>

                {/* Contact */}
                <section id="contact" className="scroll-mt-32 mb-6 sm:mb-8 md:mb-12">
                  <h2 className="text-2xl font-serif font-bold text-charcoal mb-4">
                    Contact Information
                  </h2>
                  <p className="text-charcoal/80 leading-relaxed mb-4">
                    If you have any questions about these Terms of Use, please contact us:
                  </p>
                  <div className="bg-subtle p-4 sm:p-5 md:p-6 rounded-lg">
                    <p className="text-charcoal/80 mb-2">
                      <strong>NexDyne Technologies</strong>
                    </p>
                    <p className="text-charcoal/80 mb-2">
                      Legal Department
                    </p>
                    <p className="text-charcoal/80 mb-2">
                      Email: <a href="mailto:legal@nexdyne.com" className="text-primary hover:underline">legal@nexdyne.com</a>
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
