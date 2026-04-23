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

export default function CaseStudyLegalDocIntel() {
  return (
    <div className="min-h-screen bg-base text-white selection:bg-primary selection:text-white">
      <SEO 
        title="Legal Document Intelligence | Case Study | NexDyne Technologies" 
        description="How AI-powered document intelligence reduced legal research time by 72% and enabled attorneys to handle 40% more cases."
        canonical="/cases/legal-document-intelligence"
      />
      <Navigation />
      
      {/* DZ10 Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/case-legal-doc.5d4e2f73.jpg')] bg-cover bg-center opacity-30"></div>
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
              Case Study · Legal
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-5 sm:mb-3 md:mb-4">
              Transforming legal research with <span className="text-primary">AI-powered</span> intelligence
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 leading-relaxed max-w-3xl mb-5 sm:mb-6 md:mb-8">
              A 55-attorney litigation boutique deployed AI-powered document intelligence, reducing research time by 72% and enabling attorneys to handle 40% more cases.
            </p>
            
            {/* PDF Download Button */}
            <CaseStudyPDFButton
              title="Transforming legal research with AI-powered intelligence"
              industry="Legal"
              summary="A 55-attorney litigation boutique deployed AI-powered document intelligence, reducing research time by 72% and enabling attorneys to handle 40% more cases."
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
              { metric: "72%", label: "reduction", sublabel: "in legal research time" },
              { metric: "40%", label: "increase", sublabel: "in cases per attorney" },
              { metric: "95%", label: "accuracy", sublabel: "in document classification" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border-l-2 border-primary/50 pl-8"
              >
                <div className="text-6xl font-bold text-primary mb-2">{stat.metric}</div>
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white max-w-4xl leading-tight">
              Competing against larger firms with deeper research resources
            </h2>
          </motion.div>
        </div>
      </section>

      <section className="py-10 sm:py-12 lg:py-16 bg-white text-charcoal">
        <div className="container px-4 sm:px-6 md:px-12 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl leading-relaxed text-charcoal/80 mb-6">
              A Chicago-based litigation boutique with 55 attorneys specialized in complex commercial disputes, competing against Am Law 100 firms with significantly larger research departments. While the firm's attorneys were highly skilled, they spent 40-45% of their billable time on legal research and document review rather than strategic case development and client counseling.
            </p>
            <p className="text-base leading-relaxed text-charcoal/70 mb-6">
              Each major case generated thousands of pages of discovery documents, depositions, and legal precedents that required careful analysis. Associates spent weeks reviewing documents to identify relevant passages, extract key facts, and build case chronologies. Partners struggled to maintain oversight across multiple cases while ensuring consistent quality in legal research and analysis.
            </p>
            <p className="text-base leading-relaxed text-charcoal/70 mb-6">
              The firm's economics were challenging. Clients increasingly demanded alternative fee arrangements rather than hourly billing, making research efficiency critical to profitability. Larger competitors were deploying technology to reduce research costs while maintaining quality, putting pressure on the boutique's competitive positioning. The firm needed to match or exceed the research capabilities of much larger organizations without proportional headcount increases.
            </p>
            <p className="text-base leading-relaxed text-charcoal/70">
              Leadership recognized that traditional legal research methods were becoming unsustainable. The firm needed intelligent automation that could handle routine document analysis while preserving the nuanced judgment that differentiated their attorneys. The solution had to integrate with existing practice management systems, maintain attorney-client privilege, and provide the accuracy and reliability required for high-stakes litigation.
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
            <blockquote className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-primary leading-tight mb-5 sm:mb-6 md:mb-8">
              "Our attorneys were spending more time reading documents than developing strategy. We were competing on expertise but losing on efficiency."
            </blockquote>
            <div className="text-base text-white">
              <div className="font-semibold">— David Morrison</div>
              <div className="text-white/60">Managing Partner</div>
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white max-w-4xl leading-tight">
              AI-powered document intelligence that augments attorney expertise
            </h2>
          </motion.div>
        </div>
      </section>

      <section className="py-10 sm:py-12 lg:py-16 bg-white text-charcoal">
        <div className="container px-4 sm:px-6 md:px-12 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl leading-relaxed text-charcoal/80 mb-6">
              We designed and implemented an AI-powered legal intelligence platform tailored to the firm's litigation practice. The $65,000 investment focused on creating sophisticated document analysis capabilities while maintaining the security and privilege requirements essential to legal practice.
            </p>

            <h3 className="text-2xl font-bold text-charcoal mt-12 mb-6">Intelligent document processing and classification</h3>
            <p className="text-base leading-relaxed text-charcoal/70 mb-6">
              The platform automatically ingested documents from multiple sources including e-discovery platforms, court filings, and internal case management systems. Natural language processing classified documents by type, identified key parties and dates, and extracted relevant facts and legal issues. Machine learning models trained on the firm's historical cases recognized patterns and relationships across documents, building comprehensive case timelines and fact matrices. Attorneys received organized, searchable document sets rather than unstructured file collections.
            </p>

            <h3 className="text-2xl font-bold text-charcoal mt-12 mb-6">AI-assisted legal research and precedent analysis</h3>
            <p className="text-base leading-relaxed text-charcoal/70 mb-6">
              The system performed comprehensive legal research across federal and state case law, statutes, and regulations. Advanced algorithms identified relevant precedents based on factual similarity rather than just keyword matching, surfacing cases that traditional research might miss. The platform analyzed judicial reasoning patterns, identified favorable and unfavorable precedents, and suggested distinguishing arguments. Research results included confidence scores and explanatory summaries, allowing attorneys to quickly assess relevance and applicability.
            </p>

            <h3 className="text-2xl font-bold text-charcoal mt-12 mb-6">Automated brief and motion analysis</h3>
            <p className="text-base leading-relaxed text-charcoal/70 mb-6">
              When opposing counsel filed briefs or motions, the platform automatically analyzed arguments, identified cited precedents, and flagged potential weaknesses or inconsistencies. The system compared opposing arguments against the firm's case theory, suggesting counter-arguments and supporting precedents. Attorneys received detailed analysis within hours rather than days, enabling faster and more comprehensive responses. The platform learned from attorney feedback, continuously improving its analytical capabilities.
            </p>

            <h3 className="text-2xl font-bold text-charcoal mt-12 mb-6">Security and privilege protection</h3>
            <p className="text-base leading-relaxed text-charcoal/70">
              All document processing occurred within the firm's secure infrastructure with encryption at rest and in transit. The platform maintained detailed audit logs documenting all access and analysis activities. Privilege detection algorithms identified potentially privileged communications, flagging them for attorney review before inclusion in discovery productions. The system complied with bar association ethics rules regarding technology-assisted legal practice, with human attorney oversight of all substantive legal conclusions.
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
            <blockquote className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-primary leading-tight mb-5 sm:mb-6 md:mb-8">
              "The platform doesn't replace attorney judgment—it amplifies it. Our lawyers spend their time on strategy and advocacy, not on tasks that technology can handle better."
            </blockquote>
            <div className="text-base text-white">
              <div className="font-semibold">— Jennifer Wu</div>
              <div className="text-white/60">Director of Legal Technology</div>
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white max-w-4xl leading-tight">
              Leveling the playing field against much larger competitors
            </h2>
          </motion.div>
        </div>
      </section>

      <section className="py-10 sm:py-12 lg:py-16 bg-white text-charcoal">
        <div className="container px-4 sm:px-6 md:px-12 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl leading-relaxed text-charcoal/80 mb-6">
              Within 18 months of deployment, the legal intelligence platform transformed the firm's research capabilities and competitive positioning, delivering measurable improvements in efficiency, capacity, and profitability.
            </p>

            <h3 className="text-2xl font-bold text-charcoal mt-12 mb-6">Research efficiency and attorney productivity</h3>
            <p className="text-base leading-relaxed text-charcoal/70 mb-6">
              Legal research time decreased by 72%, with comprehensive research that previously required 20-25 hours now completed in 6-8 hours. Document review productivity increased by 180%, enabling associates to process discovery materials three times faster while maintaining higher accuracy. Partners reported spending 65% more time on strategic case development and client counseling rather than document review. The firm handled 40% more cases with the same attorney headcount, significantly improving revenue per attorney.
            </p>

            <h3 className="text-2xl font-bold text-charcoal mt-12 mb-6">Case outcomes and client satisfaction</h3>
            <p className="text-base leading-relaxed text-charcoal/70 mb-6">
              The platform's comprehensive research capabilities led to discovery of favorable precedents in 23 cases that traditional research had missed, directly contributing to improved case outcomes. Motion success rates increased by 18 percentage points, attributed to more thorough legal analysis and faster response times. Client satisfaction scores improved significantly, with clients specifically citing the firm's responsiveness and the quality of legal analysis. The firm won three major cases against Am Law 50 competitors, with opposing counsel noting the boutique's surprisingly sophisticated research capabilities.
            </p>

            <h3 className="text-2xl font-bold text-charcoal mt-12 mb-6">Economic model transformation</h3>
            <p className="text-base leading-relaxed text-charcoal/70 mb-6">
              The improved efficiency enabled the firm to offer competitive alternative fee arrangements while maintaining profitability. Fixed-fee and contingency matters increased from 15% to 42% of the firm's revenue mix, opening new market opportunities. The platform's cost savings of $425,000 annually through reduced research time and avoided associate hiring exceeded the technology investment by a factor of six. The firm's realization rates improved by 12 percentage points as clients perceived greater value in the work product.
            </p>

            <h3 className="text-2xl font-bold text-charcoal mt-12 mb-6">Competitive positioning and growth</h3>
            <p className="text-base leading-relaxed text-charcoal/70">
              The $65,000 investment generated annual benefits of $620,000 through increased capacity ($195,000), research cost savings ($425,000), representing a 300% ROI over 18 months. More strategically, the platform enabled the firm to compete effectively against organizations ten times its size. The firm's reputation for combining boutique expertise with sophisticated technology capabilities attracted lateral partner candidates from larger firms. Management views the platform as fundamental infrastructure that will support the firm's planned growth from 55 to 85 attorneys over the next three years without proportional increases in research staff. The technology has become a key differentiator in new business pitches, with prospective clients specifically asking about the firm's legal technology capabilities.
            </p>
          </div>
        </div>
      </section>

      {/* DZ10 Contact Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-base">
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">Our experts</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl">
            {[
              {
                name: "David Morrison",
                location: "Chicago",
                description: "Leads legal technology practice with focus on AI-powered document intelligence, e-discovery automation, and practice management systems for law firms.",
                image: "/author-female-2.55e29921.jpg"
              },
              {
                name: "Jennifer Wu",
                location: "San Francisco",
                description: "Specializes in natural language processing and machine learning applications for legal research, contract analysis, and compliance automation.",
                image: "/author-female-2.55e29921.jpg"
              }
            ].map((expert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white text-charcoal p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl"
              >
                <div className="flex items-start gap-4">
                  <img className="w-20 h-20 rounded-full object-cover flex-shrink-0" src={expert.image} alt={expert.name} />
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{expert.name}</h3>
                    <p className="text-sm text-primary mb-4">{expert.location}</p>
                    <p className="text-base leading-relaxed text-charcoal/70">
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
          <CaseStudyContactForm caseStudyTitle="Legal Document Intelligence" />
        </div>
      </section>

      {/* DZ10 Related Cases Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-base">
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">More success stories</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                title: "Automating contract review for a law firm",
                industry: "Professional Services",
                metric: "65%",
                metricLabel: "Faster review",
                image: "/case-law-firm.8b2c4d91.jpg",
                link: "/cases/law-firm-contract-automation"
              },
              {
                title: "Building knowledge management for a consulting firm",
                industry: "Professional Services",
                metric: "58%",
                metricLabel: "Faster proposals",
                image: "/case-consulting-knowledge.7a9b3c82.jpg",
                link: "/cases/consulting-knowledge-management"
              },
              {
                title: "Automating audit procedures for an accounting firm",
                industry: "Professional Services",
                metric: "62%",
                metricLabel: "Time saved",
                image: "/case-accounting-audit.5d4e2f73.jpg",
                link: "/cases/accounting-audit-automation"
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
                    <div className="absolute top-4 left-4 bg-base/90 px-3 py-1 rounded-full">
                      <span className="text-xs font-bold text-primary">{item.metric}</span>
                      <span className="text-xs text-white/70 ml-1">{item.metricLabel}</span>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-primary uppercase tracking-wider">{item.industry}</span>
                  <h3 className="text-xl font-bold text-white mt-2 group-hover:text-primary transition-colors">
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
