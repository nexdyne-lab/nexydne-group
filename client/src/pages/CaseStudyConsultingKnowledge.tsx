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

export default function CaseStudyConsultingKnowledge() {
  return (
    <div className="min-h-screen bg-base text-white selection:bg-primary selection:text-white">
      <SEO 
        title="Consulting Knowledge Management | Case Study | NexDyne Technologies" 
        description="How a strategy consulting firm transformed institutional knowledge into competitive advantage, reducing research time by 70%."
        canonical="/cases/consulting-knowledge-management"
      />
      <Navigation />
      
      {/* DZ10 Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/case-strategy-consulting.dfdd1294.jpg')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-base via-base/60 to-base"></div>
        
        <div className="container relative z-10 px-4 md:px-12">
          <Breadcrumbs />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-primary mb-4 sm:mb-6 block">
              Case Study · Professional Services
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-medium tracking-tight leading-[1.05] mb-5 sm:mb-3 md:mb-4">
              Transforming institutional knowledge into <span className="text-primary">competitive advantage</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 leading-relaxed max-w-3xl mb-5 sm:mb-6 md:mb-8">
              A 65-employee strategy consulting firm deployed an AI-powered knowledge management system, reducing research time by 70% and improving proposal win rates by 42%.
            </p>
            
            {/* PDF Download Button */}
            <CaseStudyPDFButton
              title="Transforming institutional knowledge into competitive advantage"
              industry="Professional Services"
              summary="A 65-employee strategy consulting firm deployed an AI-powered knowledge management system, reducing research time by 70% and improving proposal win rates by 42%."
              challenge="A global management consulting firm with 1,800 consultants across 14 offices was losing competitive pitches because its institutional knowledge was trapped in disconnected systems. Engagement deliverables, frameworks, market research, and benchmarks lived across SharePoint, individual laptops, project folders, and email threads — meaning that consultants assembling a pitch deck or proposal often duplicated work that had been done elsewhere in the firm. Senior partners estimated that 30-40% of client-facing time was spent re-researching topics or recreating analyses that already existed somewhere in the firm's knowledge base. Newer consultants struggled to ramp on industries where the firm had decades of experience, and proposal teams routinely missed differentiating insights that would have strengthened their bids. The firm's Chief Knowledge Officer recognized that without a unified knowledge platform, the firm was failing to compound its intellectual capital — and was at growing risk from competitors that had invested in AI-assisted research."
              solution="NexDyne built an AI-powered knowledge management platform that unifies the firm's intellectual capital and surfaces relevant insights to consultants in seconds. We began with a discovery phase that catalogued every knowledge repository in the firm, classified content by industry, capability, and engagement type, and worked with practice leaders to define the firm's preferred frameworks and benchmarks. The platform uses semantic search and embedding-based retrieval to let consultants ask natural-language questions ('what have we delivered for European retail banks on customer analytics?') and receive ranked results pulling from prior decks, research reports, expert profiles, and engagement summaries. A summarization layer produces synthesized briefs from multiple sources, and citation tracking makes it easy to verify and reuse content with proper attribution. The platform integrates with the firm's CRM, billing, and document management systems, and a governance layer ensures sensitive client material is access-controlled. Rollout proceeded by capability — strategy consulting first, then operations and digital — with embedded knowledge curators in each practice driving adoption."
              results={[
                "70% reduction in research and analysis time across all engagements",
                "42% increase in proposal win rate for engagements supported by the platform",
                "2,800 consultant hours saved annually across the firm",
                "Newer consultants reach productive proposal contribution 3x faster than before"
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
              { metric: "70%", label: "reduction in", sublabel: "research and analysis time" },
              { metric: "42%", label: "increase in", sublabel: "proposal win rate" },
              { metric: "2,800", label: "hours saved", sublabel: "annually across the firm" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border-l-2 border-primary/50 pl-8"
              >
                <div className="text-6xl font-medium text-primary mb-2">{stat.metric}</div>
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
            <span className="text-xs font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white/80 mb-4 sm:mb-6 block">
              The Opportunity
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-white max-w-4xl leading-tight">
              Unlocking the value trapped in ten years of consulting engagements
            </h2>
          </motion.div>
        </div>
      </section>

      <section className="py-10 sm:py-12 lg:py-16 bg-white text-charcoal">
        <div className="container px-4 sm:px-6 md:px-12 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl leading-relaxed text-charcoal/80 mb-6">
              A Boston-based strategy consulting firm with 65 professionals had accumulated a decade of valuable insights across healthcare, financial services, and technology engagements. Despite this wealth of institutional knowledge, consultants were spending 15-20 hours per week recreating analyses, searching for past deliverables, and duplicating research that colleagues had already completed.
            </p>
            <p className="text-base leading-relaxed text-charcoal/70 mb-6">
              The firm's knowledge resided in fragmented locations including individual hard drives, shared network folders with inconsistent naming conventions, email attachments, and the institutional memory of senior partners. New consultants faced a steep learning curve, often unaware of relevant past work. Proposal development required extensive manual research, limiting the firm's ability to respond quickly to RFPs and reducing win rates.
            </p>
            <p className="text-base leading-relaxed text-charcoal/70 mb-6">
              Managing partners recognized that this inefficiency was constraining growth. The firm was turning down engagements due to capacity constraints while simultaneously wasting billable hours on redundant research. More critically, the lack of systematic knowledge capture meant that when senior consultants left the firm, their expertise left with them.
            </p>
            <p className="text-base leading-relaxed text-charcoal/70">
              The firm needed a solution that would make institutional knowledge discoverable and reusable without creating additional administrative burden for already-busy consultants. The system had to integrate seamlessly into existing workflows and provide value immediately to drive adoption across the organization.
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
              "We were essentially starting from scratch on every engagement, even when we had done similar work six months earlier. It was like having amnesia as an organization."
            </blockquote>
            <div className="text-base text-white">
              <div className="font-semibold">— Jennifer Martinez</div>
              <div className="text-white/60">Managing Partner, Strategy Practice</div>
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
            <span className="text-xs font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white/80 mb-4 sm:mb-6 block">
              The Solution
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-white max-w-4xl leading-tight">
              Building an intelligent knowledge engine that learns from every engagement
            </h2>
          </motion.div>
        </div>
      </section>

      <section className="py-10 sm:py-12 lg:py-16 bg-white text-charcoal">
        <div className="container px-4 sm:px-6 md:px-12 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl leading-relaxed text-charcoal/80 mb-6">
              We partnered with the firm's leadership to design and implement an AI-powered knowledge management platform that would automatically capture, organize, and surface relevant insights from past engagements. The $58,000 investment focused on creating a system that required minimal manual input while delivering maximum value to consultants.
            </p>

            <h3 className="text-2xl font-semibold text-charcoal mt-12 mb-6">Automated knowledge capture</h3>
            <p className="text-base leading-relaxed text-charcoal/70 mb-6">
              The platform integrated with the firm's existing document management system, automatically indexing and categorizing deliverables, presentations, and research materials. Natural language processing extracted key insights, methodologies, and findings from each document, creating a searchable knowledge graph that connected related concepts across engagements. Consultants continued working in their familiar tools while the system captured knowledge in the background.
            </p>

            <h3 className="text-2xl font-semibold text-charcoal mt-12 mb-6">Intelligent search and discovery</h3>
            <p className="text-base leading-relaxed text-charcoal/70 mb-6">
              Rather than requiring consultants to remember specific file names or folder structures, the platform enabled semantic search that understood the intent behind queries. A consultant could search for "healthcare cost reduction strategies for regional hospitals" and receive relevant analyses from multiple past engagements, ranked by relevance and recency. The system learned from usage patterns, improving recommendations over time.
            </p>

            <h3 className="text-2xl font-semibold text-charcoal mt-12 mb-6">Proposal acceleration</h3>
            <p className="text-base leading-relaxed text-charcoal/70 mb-6">
              The platform included specialized features for proposal development, automatically suggesting relevant case studies, methodologies, and team qualifications based on RFP requirements. Consultants could assemble first-draft proposals in hours rather than days, drawing on the firm's full body of work. The system also tracked proposal outcomes, identifying which approaches and positioning strategies yielded the highest win rates.
            </p>

            <h3 className="text-2xl font-semibold text-charcoal mt-12 mb-6">Change management and adoption</h3>
            <p className="text-base leading-relaxed text-charcoal/70">
              We worked closely with the firm's leadership to drive adoption through a combination of training, champions program, and visible quick wins. Early adopters were identified in each practice area and given intensive training to become internal advocates. The platform was introduced through high-value use cases like proposal development where benefits were immediately visible, building momentum for broader adoption across research and client delivery workflows.
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
              "The system pays for itself every time we win a proposal that we would have been too slow to pursue under the old process. And that happens multiple times per quarter."
            </blockquote>
            <div className="text-base text-white">
              <div className="font-semibold">— David Kim</div>
              <div className="text-white/60">Partner, Healthcare Practice</div>
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
            <span className="text-xs font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white/80 mb-4 sm:mb-6 block">
              The Impact
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-white max-w-4xl leading-tight">
              From knowledge scarcity to knowledge abundance
            </h2>
          </motion.div>
        </div>
      </section>

      <section className="py-10 sm:py-12 lg:py-16 bg-white text-charcoal">
        <div className="container px-4 sm:px-6 md:px-12 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl leading-relaxed text-charcoal/80 mb-6">
              Within 14 months of deployment, the knowledge management platform transformed how the firm operated, delivering measurable improvements in efficiency, win rates, and consultant satisfaction.
            </p>

            <h3 className="text-2xl font-semibold text-charcoal mt-12 mb-6">Research and analysis efficiency</h3>
            <p className="text-base leading-relaxed text-charcoal/70 mb-6">
              Time spent on background research and analysis decreased by 70%, freeing approximately 2,800 hours annually across the firm. Consultants reported that they could now find relevant past work in minutes rather than hours, and that the quality of insights improved because they were building on prior analyses rather than starting fresh. Junior consultants particularly benefited, gaining access to institutional knowledge that previously required years of experience to accumulate.
            </p>

            <h3 className="text-2xl font-semibold text-charcoal mt-12 mb-6">Proposal development and win rates</h3>
            <p className="text-base leading-relaxed text-charcoal/70 mb-6">
              Proposal development time dropped from an average of 60 hours to 22 hours, enabling the firm to pursue 35% more opportunities without adding staff. More importantly, proposal win rates increased from 28% to 42%, driven by higher-quality submissions that drew on the firm's full expertise. The firm attributes three major client wins worth $1.8 million in combined fees directly to the improved proposal process.
            </p>

            <h3 className="text-2xl font-semibold text-charcoal mt-12 mb-6">Knowledge retention and institutional learning</h3>
            <p className="text-base leading-relaxed text-charcoal/70 mb-6">
              The platform successfully captured knowledge from two senior partners who retired during the measurement period, preserving their insights for future engagements. New consultants reported reaching productivity milestones 40% faster than previous cohorts, citing the knowledge platform as a critical onboarding resource. The firm now has systematic visibility into its areas of deep expertise, enabling more strategic decisions about practice development and hiring.
            </p>

            <h3 className="text-2xl font-semibold text-charcoal mt-12 mb-6">Financial performance</h3>
            <p className="text-base leading-relaxed text-charcoal/70">
              The $58,000 investment in the platform generated $420,000 in value during the first 18 months through a combination of increased billable hours (2,800 hours at average billing rates), improved win rates (three major engagements), and avoided hiring costs (handling 35% more proposals without adding staff). This represents a 315% ROI over 18 months. The managing partners view the platform as fundamental infrastructure that will continue generating value as the firm grows, with benefits compounding as more knowledge is captured and more consultants adopt the system.
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
            <span className="text-xs font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white/60 mb-4 sm:mb-6 block">
              Get In Touch
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-white">Our experts</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl">
            {[
              {
                name: "Jennifer Martinez",
                location: "Boston",
                description: "Specializes in knowledge management solutions for professional services firms, helping organizations capture and leverage institutional expertise to drive growth and efficiency.",
                image: "/author-female-2.55e29921.jpg"
              },
              {
                name: "David Kim",
                location: "San Francisco",
                description: "Focuses on AI-powered automation for consulting and advisory firms, with deep expertise in natural language processing and semantic search technologies.",
                image: "/author-female-2.55e29921.jpg"
              }
            ].map((expert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white text-charcoal p-4 sm:p-6 md:p-8 rounded-md"
              >
                <div className="flex items-start gap-4">
                  <img className="w-20 h-20 rounded-full object-cover flex-shrink-0" src={expert.image} alt={expert.name} />
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">{expert.name}</h3>
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
          <CaseStudyContactForm caseStudyTitle="Consulting Knowledge Management" />
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
            <span className="text-xs font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white/60 mb-4 sm:mb-6 block">
              Related Case Studies
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-white">More success stories</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                title: "How contract automation transformed a leading law firm's operations",
                industry: "Professional Services",
                metric: "65%",
                metricLabel: "Faster turnaround",
                image: "/case-law-firm-meeting.401c96db.jpg",
                link: "/cases/law-firm-contract-automation"
              },
              {
                title: "How audit automation helped an accounting firm scale 2x without hiring",
                industry: "Professional Services",
                metric: "2x",
                metricLabel: "Client capacity",
                image: "/case-accountants-audit.1c87a151.jpg",
                link: "/cases/accounting-audit-automation"
              },
              {
                title: "Transforming legal research with AI-powered document intelligence",
                industry: "Professional Services",
                metric: "70%",
                metricLabel: "Faster research",
                image: "/case-legal-team.2f84fc95.jpg",
                link: "/cases/legal-document-intelligence"
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
                  <div className="aspect-[4/3] overflow-hidden mb-6 rounded-md relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 bg-base/90 px-3 py-1 rounded-full">
                      <span className="text-xs font-semibold text-primary">{item.metric}</span>
                      <span className="text-xs text-white/70 ml-1">{item.metricLabel}</span>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">{item.industry}</span>
                  <h3 className="text-xl font-semibold text-white mt-2 group-hover:text-primary transition-colors">
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
