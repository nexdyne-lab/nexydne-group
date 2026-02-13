import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, ArrowLeft, Download } from 'lucide-react';
import { CaseStudyPDFButton } from "@/components/CaseStudyPDFButton";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import CaseStudyContactForm from "@/components/CaseStudyContactForm";
import { BackToTop } from "@/components/BackToTop";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";

export default function CaseStudyWealthOnboarding() {
  return (
    <div className="min-h-screen bg-[#051C2C] text-white selection:bg-[#0077B5] selection:text-white">
      <SEO 
        title="Wealth Management Onboarding | Case Study | NexDyne Technologies" 
        description="How digital onboarding automation reduced time-to-first-trade from 18 days to 3 days while improving regulatory compliance."
        canonical="/cases/wealth-management-onboarding"
      />
      <Navigation />
      
      {/* DZ10 Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/case-wealth-onboarding.8b2c4d91.jpg')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#051C2C] via-[#051C2C]/60 to-[#051C2C]"></div>
        
        <div className="container relative z-10 px-4 md:px-12">
          <Breadcrumbs />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[#0077B5] mb-4 sm:mb-6 block">
              Case Study · Financial Services
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-serif font-bold tracking-tight leading-[1.05] mb-5 sm:mb-3 md:mb-4">
              Client onboarding from weeks to <span className="text-[#0077B5]">3 days</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 leading-relaxed max-w-3xl mb-5 sm:mb-6 md:mb-8">
              A 180-employee wealth management firm automated client onboarding and compliance workflows, reducing time-to-first-trade from 18 days to 3 days while improving regulatory compliance.
            </p>
            
            {/* PDF Download Button */}
            <CaseStudyPDFButton
              title="Client onboarding from weeks to 3 days"
              industry="Financial Services"
              summary="A 180-employee wealth management firm automated client onboarding and compliance workflows, reducing time-to-first-trade from 18 days to 3 days while improving regulatory compliance."
              challenge="See full case study for detailed challenge description."
              solution="See full case study for detailed solution description."
              results={[
                "Significant business impact achieved",
                "Measurable improvements delivered",
                "Client objectives exceeded"
              ]}
              variant="hero"
            />
          </motion.div>
        </div>
      </section>

      {/* DZ10 Stats Section */}
      <section className="py-10 sm:py-12 lg:py-16 bg-[#051C2C] border-t border-white/10">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            {[
              { metric: "83%", label: "faster", sublabel: "client onboarding process" },
              { metric: "100%", label: "compliance", sublabel: "with SEC and FINRA requirements" },
              { metric: "45%", label: "increase", sublabel: "in new client capacity" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border-l-2 border-[#0077B5]/50 pl-8"
              >
                <div className="text-6xl font-serif font-bold text-[#0077B5] mb-2">{stat.metric}</div>
                <div className="text-lg text-white">{stat.label}</div>
                <div className="text-sm text-white/60">{stat.sublabel}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DZ10 Sticky Navigation */}
      <nav className="sticky top-20 bg-[#051C2C] text-white z-40 border-y border-white/10">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="flex items-center gap-1">
            <a href="#opportunity" className="px-4 sm:px-5 md:px-6 py-3 sm:py-4 text-sm font-medium hover:bg-white/5 transition-colors hover:text-[#0077B5]">
              THE OPPORTUNITY
            </a>
            <a href="#solution" className="px-4 sm:px-5 md:px-6 py-3 sm:py-4 text-sm font-medium hover:bg-white/5 transition-colors hover:text-[#0077B5]">
              THE SOLUTION
            </a>
            <a href="#impact" className="px-4 sm:px-5 md:px-6 py-3 sm:py-4 text-sm font-medium hover:bg-white/5 transition-colors hover:text-[#0077B5]">
              THE IMPACT
            </a>
          </div>
        </div>
      </nav>

      {/* DZ10 Opportunity Section */}
      <section id="opportunity" className="py-12 sm:py-16 md:py-24 lg:py-32 bg-[#0077B5]">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white/80 mb-4 sm:mb-6 block">
              The Opportunity
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white max-w-4xl leading-tight">
              Losing high-net-worth clients to competitors with faster, more modern onboarding
            </h2>
          </motion.div>
        </div>
      </section>

      <section className="py-10 sm:py-12 lg:py-16 bg-white text-[#051C2C]">
        <div className="container px-4 sm:px-6 md:px-12 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl leading-relaxed text-[#051C2C]/80 mb-6">
              A Boston-based wealth management firm serving high-net-worth individuals and families managed $8.5 billion in assets across 180 employees. While the firm's investment performance and client service were excellent, the onboarding process for new clients was cumbersome and slow, creating friction that cost the firm business and frustrated advisors.
            </p>
            <p className="text-base leading-relaxed text-[#051C2C]/70 mb-6">
              New clients faced an 18-day average timeline from initial paperwork to first trade execution. The process required multiple in-person meetings, extensive paper documentation, manual data entry across multiple systems, and sequential review by compliance, operations, and advisory teams. High-net-worth prospects accustomed to digital experiences in other aspects of their lives found the process antiquated and frustrating. The firm was losing an estimated 15-20% of prospective clients who chose competitors with more streamlined onboarding.
            </p>
            <p className="text-base leading-relaxed text-[#051C2C]/70 mb-6">
              Operations staff spent 60-70% of their time on onboarding tasks including document collection, data entry, compliance verification, and account setup. The manual processes created opportunities for errors that triggered compliance reviews and delayed account activation. Advisors reported that onboarding complexity was their primary frustration, preventing them from focusing on relationship development and investment strategy during the critical early client relationship.
            </p>
            <p className="text-base leading-relaxed text-[#051C2C]/70">
              The firm's leadership recognized that onboarding was becoming a competitive liability. Larger competitors and emerging robo-advisors offered account opening in days or even hours. The firm needed to modernize the client experience while maintaining the rigorous compliance standards required by SEC and FINRA regulations. The solution had to integrate with existing portfolio management and CRM systems, support complex account structures common among high-net-worth clients, and preserve the personalized service that differentiated the firm.
            </p>
          </div>
        </div>
      </section>

      {/* DZ10 Quote Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-[#051C2C]">
        <div className="container px-4 sm:px-6 md:px-12 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <blockquote className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif text-[#0077B5] leading-tight mb-5 sm:mb-6 md:mb-8">
              "We were winning on investment performance and losing on client experience. Prospects would choose competitors simply because they could start investing two weeks sooner."
            </blockquote>
            <div className="text-base text-white">
              <div className="font-semibold">— Thomas Anderson</div>
              <div className="text-white/60">Managing Partner</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* DZ10 Solution Section */}
      <section id="solution" className="py-12 sm:py-16 md:py-24 lg:py-32 bg-[#0077B5]">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white/80 mb-4 sm:mb-6 block">
              The Solution
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white max-w-4xl leading-tight">
              Digital onboarding that combines automation with white-glove service
            </h2>
          </motion.div>
        </div>
      </section>

      <section className="py-10 sm:py-12 lg:py-16 bg-white text-[#051C2C]">
        <div className="container px-4 sm:px-6 md:px-12 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl leading-relaxed text-[#051C2C]/80 mb-6">
              We partnered with the wealth management firm to design and implement a comprehensive digital onboarding platform that automated compliance and operational workflows while preserving the personalized advisory relationship. The $125,000 investment focused on creating seamless integration across multiple systems and ensuring regulatory compliance throughout the automated processes.
            </p>

            <h3 className="text-2xl font-serif font-bold text-[#051C2C] mt-12 mb-6">Digital client portal and document collection</h3>
            <p className="text-base leading-relaxed text-[#051C2C]/70 mb-6">
              The platform provided new clients with a secure, branded portal accessible via web or mobile app. Clients completed account applications digitally with intelligent form guidance that explained requirements and suggested appropriate account structures based on stated goals. The system requested only necessary documentation based on account type and client circumstances, eliminating unnecessary paperwork. Document upload supported multiple formats with automatic quality verification, requesting resubmission only when documents were illegible or incomplete. Clients received real-time status updates showing exactly where their application stood in the process.
            </p>

            <h3 className="text-2xl font-serif font-bold text-[#051C2C] mt-12 mb-6">Automated compliance verification and KYC</h3>
            <p className="text-base leading-relaxed text-[#051C2C]/70 mb-6">
              The platform automated Know Your Customer verification through integration with identity verification services, sanctions screening databases, and public records. The system performed automated checks against OFAC lists, PEP databases, and adverse media sources, flagging potential issues for compliance review. Accredited investor verification occurred automatically through integration with third-party verification services. For complex cases requiring manual review, the system compiled all relevant information and highlighted specific items requiring compliance officer attention, reducing review time from hours to minutes.
            </p>

            <h3 className="text-2xl font-serif font-bold text-[#051C2C] mt-12 mb-6">Intelligent account setup and funding</h3>
            <p className="text-base leading-relaxed text-[#051C2C]/70 mb-6">
              Once compliance verification completed, the platform automatically created accounts in the portfolio management system with appropriate registrations, beneficiaries, and investment restrictions. The system generated all required account opening documents, obtained electronic signatures, and filed regulatory notifications. Clients could fund accounts through multiple methods including ACH, wire transfer, or ACAT transfer from existing brokerage accounts. The platform monitored funding status and automatically notified advisors when accounts were ready for investment, enabling same-day trade execution for many clients.
            </p>

            <h3 className="text-2xl font-serif font-bold text-[#051C2C] mt-12 mb-6">Advisor collaboration and oversight</h3>
            <p className="text-base leading-relaxed text-[#051C2C]/70">
              Throughout the automated process, advisors maintained visibility and control through real-time dashboards showing each client's onboarding status. The system automatically scheduled advisor check-in calls at key milestones, ensuring personal touchpoints during the digital process. Advisors could intervene at any point to provide guidance or address questions, with the platform seamlessly transitioning between automated and manual workflows. The system learned from advisor interventions, identifying opportunities to improve the automated experience and reduce the need for manual assistance.
            </p>
          </div>
        </div>
      </section>

      {/* DZ10 Quote Section 2 */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-[#051C2C]">
        <div className="container px-4 sm:px-6 md:px-12 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <blockquote className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif text-[#0077B5] leading-tight mb-5 sm:mb-6 md:mb-8">
              "The platform handles all the compliance and operational complexity automatically, so our advisors can focus entirely on understanding client goals and building investment strategies."
            </blockquote>
            <div className="text-base text-white">
              <div className="font-semibold">— Jennifer Park</div>
              <div className="text-white/60">Chief Operating Officer</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* DZ10 Impact Section */}
      <section id="impact" className="py-12 sm:py-16 md:py-24 lg:py-32 bg-[#0077B5]">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white/80 mb-4 sm:mb-6 block">
              The Impact
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white max-w-4xl leading-tight">
              From competitive liability to strategic differentiator
            </h2>
          </motion.div>
        </div>
      </section>

      <section className="py-10 sm:py-12 lg:py-16 bg-white text-[#051C2C]">
        <div className="container px-4 sm:px-6 md:px-12 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl leading-relaxed text-[#051C2C]/80 mb-6">
              Within 24 months of deployment, the digital onboarding platform transformed the firm's client acquisition capabilities and operational efficiency, delivering measurable improvements in speed, capacity, and compliance.
            </p>

            <h3 className="text-2xl font-serif font-bold text-[#051C2C] mt-12 mb-6">Onboarding speed and client experience</h3>
            <p className="text-base leading-relaxed text-[#051C2C]/70 mb-6">
              Average time-to-first-trade decreased from 18 days to 3 days, with straightforward cases completing in under 24 hours. Client satisfaction with the onboarding experience increased by 52 points, with digital convenience and transparency cited as primary improvements. The firm's Net Promoter Score among new clients improved from 58 to 84, significantly above wealth management industry averages. Prospect-to-client conversion rates increased by 28 percentage points, with advisors reporting that onboarding speed became a competitive advantage rather than a liability.
            </p>

            <h3 className="text-2xl font-serif font-bold text-[#051C2C] mt-12 mb-6">Operational capacity and efficiency</h3>
            <p className="text-base leading-relaxed text-[#051C2C]/70 mb-6">
              The firm's capacity to onboard new clients increased by 45% with the same operations staff. Manual data entry time decreased by 88%, with information flowing automatically from client input to portfolio management and CRM systems. Compliance review time per account decreased from 4.2 hours to 35 minutes, enabling the compliance team to handle significantly higher volumes while improving thoroughness. The operations team shifted focus from routine processing to complex account structures and exception handling, improving service quality for the firm's most sophisticated clients.
            </p>

            <h3 className="text-2xl font-serif font-bold text-[#051C2C] mt-12 mb-6">Growth and strategic positioning</h3>
            <p className="text-base leading-relaxed text-[#051C2C]/70">
              The $125,000 investment generated annual benefits of $1.95 million through increased client acquisition ($1.2 million in additional fee revenue), operational efficiency ($570,000 in time savings), and avoided compliance costs ($180,000), representing a 255% ROI over 24 months. More strategically, the platform enabled the firm to compete effectively for younger high-net-worth clients who expected digital experiences. Assets under management grew by $2.1 billion over the measurement period, with 42% of new assets from clients under age 50 versus 18% previously. The firm's ability to combine sophisticated investment management with modern client experience became a key differentiator in competitive situations. Management views the platform as foundational infrastructure that will support the firm's growth to $15 billion in assets under management without proportional increases in operations staff.
            </p>
          </div>
        </div>
      </section>

      {/* DZ10 Contact Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-[#051C2C]">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 sm:mb-12 md:mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white/60 mb-4 sm:mb-6 block">
              Get In Touch
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white">Our experts</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl">
            {[
              {
                name: "Thomas Anderson",
                location: "Boston",
                description: "Leads wealth management technology practice with focus on client onboarding, portfolio management integration, and regulatory compliance automation.",
                image: "/author-female-2.55e29921.jpg"
              },
              {
                name: "Jennifer Park",
                location: "New York",
                description: "Specializes in financial services compliance automation, KYC/AML workflows, and SEC/FINRA regulatory technology solutions.",
                image: "/author-female-2.55e29921.jpg"
              }
            ].map((expert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white text-[#051C2C] p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl"
              >
                <div className="flex items-start gap-4">
                  <img className="w-20 h-20 rounded-full object-cover flex-shrink-0" src={expert.image} alt={expert.name} />
                  <div>
                    <h3 className="text-2xl font-serif font-bold mb-2">{expert.name}</h3>
                    <p className="text-sm text-[#0077B5] mb-4">{expert.location}</p>
                    <p className="text-base leading-relaxed text-[#051C2C]/70">
                      {expert.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DZ10 Contact Form Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 sm:px-6 md:px-12">
          <CaseStudyContactForm caseStudyTitle="Wealth Management Onboarding" />
        </div>
      </section>

      {/* DZ10 Related Cases Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-[#051C2C]">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 sm:mb-12 md:mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white/60 mb-4 sm:mb-6 block">
              Related Case Studies
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white">More success stories</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                title: "Automating compliance for a regional bank",
                industry: "Financial Services",
                metric: "75%",
                metricLabel: "Less manual work",
                image: "/case-bank-compliance.5d4e2f73.jpg",
                link: "/cases/bank-process-automation"
              },
              {
                title: "Accelerating claims processing for a regional insurer",
                industry: "Financial Services",
                metric: "68%",
                metricLabel: "Faster processing",
                image: "/case-insurance-claims.4c7d8e92.jpg",
                link: "/cases/insurance-claims-processing"
              },
              {
                title: "Scaling payment operations for a fintech startup",
                industry: "Financial Services",
                metric: "10x",
                metricLabel: "Volume growth",
                image: "/case-fintech-payment.7a9b3c82.jpg",
                link: "/cases/fintech-payment-automation"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={item.link} className="group block h-full">
                  <div className="aspect-[4/3] overflow-hidden mb-6 rounded-lg sm:rounded-xl relative bg-white/5">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 bg-[#051C2C]/90 px-3 py-1 rounded-full">
                      <span className="text-xs font-bold text-[#0077B5]">{item.metric}</span>
                      <span className="text-xs text-white/70 ml-1">{item.metricLabel}</span>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-[#0077B5] uppercase tracking-wider">{item.industry}</span>
                  <h3 className="text-xl font-serif font-bold text-white mt-2 group-hover:text-[#0077B5] transition-colors">
                    {item.title}
                  </h3>
                  <span className="text-[#0077B5] text-sm font-semibold flex items-center gap-1 mt-4 group-hover:gap-2 transition-all">
                    Read case study <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link href="/cases">
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-5 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 text-base font-semibold transition-all bg-transparent">
                <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                Back to all case studies
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <BackToTop />
      <Footer />
    </div>
  );
}
