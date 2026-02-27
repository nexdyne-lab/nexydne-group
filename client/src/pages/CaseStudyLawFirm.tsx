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

export default function CaseStudyLawFirm() {
  return (
    <div className="min-h-screen bg-base text-white selection:bg-primary selection:text-white">
      <SEO 
        title="Law Firm Contract Automation | Case Study | NexDyne Technologies" 
        description="How contract automation transformed a leading law firm's operations, reducing turnaround time by 65% while maintaining 99% accuracy."
        canonical="/cases/law-firm-contract-automation"
      />
      <Navigation />
      
      {/* DZ10 Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/case-law-firm-meeting.401c96db.jpg')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-base via-base/60 to-base"></div>
        
        <div className="container relative z-10 px-4 md:px-12">
          <Breadcrumbs />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-primary mb-4 sm:mb-6 block">
              Case Study · Professional Services
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-serif font-bold tracking-tight leading-[1.05] mb-5 sm:mb-3 md:mb-4">
              Transforming contract review for a <span className="text-primary">leading US law firm</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 leading-relaxed max-w-3xl mb-5 sm:mb-6 md:mb-8">
              A 75-attorney boutique law firm partnered with us to automate contract review and analysis, reducing turnaround time by 65% while maintaining 99% accuracy across hundreds of legal documents.
            </p>
            
            {/* PDF Download Button */}
            <CaseStudyPDFButton
              title="Transforming contract review for a leading US law firm"
              industry="Professional Services"
              summary="A 75-attorney boutique law firm partnered with us to automate contract review and analysis, reducing turnaround time by 65% while maintaining 99% accuracy across hundreds of legal documents."
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
      <section className="py-10 sm:py-12 lg:py-16 bg-base border-t border-white/10">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            {[
              { metric: "65%", label: "reduction in", sublabel: "contract review turnaround time" },
              { metric: "850", label: "contracts analyzed", sublabel: "in the first six months" },
              { metric: "99%", label: "accuracy rate", sublabel: "in clause identification and risk flagging" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border-l-2 border-primary/50 pl-8"
              >
                <div className="text-6xl font-serif font-bold text-primary mb-2">{stat.metric}</div>
                <div className="text-lg text-white">{stat.label}</div>
                <div className="text-sm text-white/60">{stat.sublabel}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DZ10 Sticky Navigation */}
      <nav className="sticky top-20 bg-base text-white z-40 border-y border-white/10">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="flex items-center gap-1">
            <a href="#opportunity" className="px-4 sm:px-5 md:px-6 py-3 sm:py-4 text-sm font-medium hover:bg-white/5 transition-colors hover:text-primary">
              THE OPPORTUNITY
            </a>
            <a href="#solution" className="px-4 sm:px-5 md:px-6 py-3 sm:py-4 text-sm font-medium hover:bg-white/5 transition-colors hover:text-primary">
              THE SOLUTION
            </a>
            <a href="#impact" className="px-4 sm:px-5 md:px-6 py-3 sm:py-4 text-sm font-medium hover:bg-white/5 transition-colors hover:text-primary">
              THE IMPACT
            </a>
          </div>
        </div>
      </nav>

      {/* DZ10 Opportunity Section */}
      <section id="opportunity" className="py-12 sm:py-16 md:py-24 lg:py-32 bg-primary">
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
              Managing contract complexity at scale in a growing practice
            </h2>
          </motion.div>
        </div>
      </section>

      <section className="py-10 sm:py-12 lg:py-16 bg-white text-charcoal">
        <div className="container px-4 sm:px-6 md:px-12 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl leading-relaxed text-charcoal/80 mb-6">
              A 75-attorney boutique law firm based in New York was experiencing rapid growth, handling an increasing volume of complex commercial contracts across multiple practice areas including M&A, real estate, and corporate governance. With a client base spanning mid-market companies, regional banks, and local government entities, the firm's attorneys were reviewing 60-80 contracts monthly.
            </p>
            <p className="text-base leading-relaxed text-charcoal/70 mb-6">
              The traditional manual review process was creating significant bottlenecks. Senior partners spent 60-70% of their time on routine contract analysis—reading through lengthy documents to identify standard clauses, flag risk provisions, and ensure compliance with local regulations. Junior associates were overwhelmed with document preparation, with billable hour pressures creating unsustainable workloads.
            </p>
            <p className="text-base leading-relaxed text-charcoal/70 mb-6">
              The firm's managing partner recognized that this approach was unsustainable. Client expectations for faster turnaround times were increasing, while competition from other top-tier firms and legal tech startups was intensifying. The firm needed to maintain its reputation for thoroughness and accuracy while dramatically improving efficiency.
            </p>
            <p className="text-base leading-relaxed text-charcoal/70">
              Leadership identified contract review automation as a strategic priority. The goal was not to replace legal expertise but to augment it—freeing attorneys to focus on high-value advisory work, complex negotiations, and client relationships rather than routine document analysis.
            </p>
          </div>
        </div>
      </section>

      {/* DZ10 Quote Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-base">
        <div className="container px-4 sm:px-6 md:px-12 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <blockquote className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif text-primary leading-tight mb-5 sm:mb-6 md:mb-8">
              "We needed to transform from being document processors to strategic advisors. Our clients don't pay us to read contracts—they pay us to understand risk, negotiate better terms, and protect their interests."
            </blockquote>
            <div className="text-base text-white">
              <div className="font-semibold">— Robert Chen</div>
              <div className="text-white/60">Managing Partner, Corporate & Commercial Practice</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* DZ10 Solution Section */}
      <section id="solution" className="py-12 sm:py-16 md:py-24 lg:py-32 bg-primary">
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
              Building an AI-powered contract intelligence platform
            </h2>
          </motion.div>
        </div>
      </section>

      <section className="py-10 sm:py-12 lg:py-16 bg-white text-charcoal">
        <div className="container px-4 sm:px-6 md:px-12 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl leading-relaxed text-charcoal/80 mb-6">
              We worked closely with the firm's partners and senior associates to design a contract intelligence platform tailored to their specific practice areas and regulatory requirements.
            </p>
            
            <h3 className="text-2xl font-serif font-bold text-charcoal mt-12 mb-6">Discovery and requirements</h3>
            <p className="text-base leading-relaxed text-charcoal/70 mb-6">
              The engagement began with a six-week diagnostic phase. Our team embedded with attorneys across the firm's New York and Washington DC offices, analyzed hundreds of historical contracts from the firm's document management systems, and interviewed partners across practice groups to understand pain points and success criteria. This research revealed that 80% of contract review time was spent on repetitive tasks: identifying standard clauses, checking for missing provisions, and flagging non-standard terms that required attorney attention.
            </p>

            <h3 className="text-2xl font-serif font-bold text-charcoal mt-12 mb-6">Platform development</h3>
            <p className="text-base leading-relaxed text-charcoal/70 mb-6">
              We built a custom AI platform trained on the firm's contract library and US legal frameworks. The system uses natural language processing to automatically extract key terms, identify clause types, and compare provisions against the firm's preferred language and federal and state regulatory requirements. Machine learning models were trained to recognize risk patterns specific to different contract types—from force majeure clauses in supply agreements to indemnification provisions in M&A transactions under Delaware corporate law.
            </p>
            <p className="text-base leading-relaxed text-charcoal/70 mb-6">
              The platform integrates directly with the firm's document management system, allowing attorneys to upload contracts and receive automated analysis within minutes. The system generates structured summaries highlighting critical terms, flags high-risk clauses for attorney review, and suggests alternative language based on the firm's precedent library.
            </p>

            <h3 className="text-2xl font-serif font-bold text-charcoal mt-12 mb-6">Phased rollout and training</h3>
            <p className="text-base leading-relaxed text-charcoal/70">
              Rather than a firm-wide launch, We recommended a phased approach. The platform was first deployed to the corporate practice group, where it was refined based on attorney feedback over three months. We conducted hands-on training sessions, created video tutorials, and established a support channel for questions. Once the corporate team validated the system's accuracy and usability, it was rolled out to real estate, finance, and other practice areas with customized training for each group's specific contract types.
            </p>
          </div>
        </div>
      </section>

      {/* DZ10 Quote Section 2 */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-base">
        <div className="container px-4 sm:px-6 md:px-12 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <blockquote className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif text-primary leading-tight mb-5 sm:mb-6 md:mb-8">
              "The platform doesn't just save time—it makes us better lawyers. It catches issues we might have missed and ensures consistency across our entire practice."
            </blockquote>
            <div className="text-base text-white">
              <div className="font-semibold">— Sarah Mitchell</div>
              <div className="text-white/60">Senior Associate, M&A and Corporate Finance</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* DZ10 Impact Section */}
      <section id="impact" className="py-12 sm:py-16 md:py-24 lg:py-32 bg-primary">
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
              Measurable improvements in efficiency, quality, and client satisfaction
            </h2>
          </motion.div>
        </div>
      </section>

      <section className="py-10 sm:py-12 lg:py-16 bg-white text-charcoal">
        <div className="container px-4 sm:px-6 md:px-12 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl leading-relaxed text-charcoal/80 mb-6">
              Within six months of full deployment, the contract intelligence platform delivered transformative results across the firm's operations.
            </p>

            <h3 className="text-2xl font-serif font-bold text-charcoal mt-12 mb-6">Operational efficiency</h3>
            <p className="text-base leading-relaxed text-charcoal/70 mb-6">
              Average contract review time dropped from 4.5 hours to 1.5 hours—a 65% reduction. Senior partners reported spending 40% less time on routine document analysis, allowing them to take on more complex advisory work and business development activities. The firm increased its contract review capacity by 2.5x without adding headcount, enabling it to serve more clients and take on larger transactions.
            </p>

            <h3 className="text-2xl font-serif font-bold text-charcoal mt-12 mb-6">Quality and risk management</h3>
            <p className="text-base leading-relaxed text-charcoal/70 mb-6">
              The platform achieved 99% accuracy in clause identification and risk flagging, matching or exceeding the performance of experienced attorneys. Standardized analysis across all contracts improved consistency and reduced the risk of missed issues. The firm's malpractice insurance carrier noted the improved risk management processes during their annual review.
            </p>

            <h3 className="text-2xl font-serif font-bold text-charcoal mt-12 mb-6">Client satisfaction and revenue</h3>
            <p className="text-base leading-relaxed text-charcoal/70 mb-6">
              Faster turnaround times and more thorough analysis led to improved client satisfaction scores. Several key clients expanded their relationship with the firm, citing the improved service quality. The efficiency gains allowed the firm to offer more competitive pricing on routine matters while maintaining profitability, helping win new business in a competitive market.
            </p>

            <h3 className="text-2xl font-serif font-bold text-charcoal mt-12 mb-6">Attorney development</h3>
            <p className="text-base leading-relaxed text-charcoal/70">
              Junior associates reported higher job satisfaction as they spent more time on substantive legal work and client interaction rather than document review. The platform also served as a training tool, helping newer attorneys learn to identify key issues and understand the firm's preferred approaches to different contract types.
            </p>
          </div>
        </div>
      </section>

      {/* DZ10 Contact Form Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-base">
        <div className="container px-4 sm:px-6 md:px-12">
          <CaseStudyContactForm caseStudyTitle="Law Firm Contract Automation" />
        </div>
      </section>

      {/* DZ10 Related Cases Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-white text-charcoal">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 sm:mb-12 md:mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-primary mb-4 sm:mb-6 block">
              Related Case Studies
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-charcoal">More success stories</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                title: "Transforming knowledge management for a global consulting firm",
                industry: "Professional Services",
                metric: "3x",
                metricLabel: "Faster insights",
                image: "/case-strategy-consulting.dfdd1294.jpg",
                link: "/cases/consulting-knowledge-management"
              },
              {
                title: "How RPA eliminated 10,000+ hours of manual work at a major bank",
                industry: "Financial Services",
                metric: "10K+",
                metricLabel: "Hours saved",
                image: "/case-banker-meeting.c53f3999.jpg",
                link: "/cases/bank-process-automation"
              },
              {
                title: "Building an AI-powered patient engagement platform",
                industry: "Healthcare",
                metric: "40%",
                metricLabel: "Higher satisfaction",
                image: "/case-patient-care.b97e3209.jpeg",
                link: "/cases/healthcare-patient-engagement"
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
                  <div className="aspect-[4/3] overflow-hidden mb-6 rounded-lg sm:rounded-xl relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 bg-base/90 px-3 py-1 rounded-full">
                      <span className="text-xs font-bold text-primary">{item.metric}</span>
                      <span className="text-xs text-white/70 ml-1">{item.metricLabel}</span>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-primary uppercase tracking-wider">{item.industry}</span>
                  <h3 className="text-xl font-serif font-bold text-charcoal mt-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <span className="text-primary text-sm font-semibold flex items-center gap-1 mt-4 group-hover:gap-2 transition-all">
                    Read case study <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link href="/cases">
              <Button variant="outline" className="border-base/20 text-charcoal hover:bg-base/10 px-5 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 text-base font-semibold transition-all">
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
