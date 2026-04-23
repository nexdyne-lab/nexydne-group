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

export default function CaseStudyInsuranceClaims() {
  return (
    <div className="min-h-screen bg-base text-white selection:bg-primary selection:text-white">
      <SEO 
        title="Insurance Claims Processing | Case Study | NexDyne Technologies" 
        description="How intelligent automation reduced claims cycle time by 68% and increased customer satisfaction scores by 35 points."
        canonical="/cases/insurance-claims-processing"
      />
      <Navigation />
      
      {/* DZ10 Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/case-insurance-claims.4c7d8e92.jpg')] bg-cover bg-center opacity-30"></div>
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
              Case Study · Insurance
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-5 sm:mb-3 md:mb-4">
              Accelerating claims processing by <span className="text-primary">68%</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 leading-relaxed max-w-3xl mb-5 sm:mb-6 md:mb-8">
              A 95-employee insurance carrier automated claims intake and processing, reducing cycle time by 68% and increasing customer satisfaction scores by 35 points.
            </p>
            
            {/* PDF Download Button */}
            <CaseStudyPDFButton
              title="Accelerating claims processing by 68%"
              industry="Insurance"
              summary="A 95-employee insurance carrier automated claims intake and processing, reducing cycle time by 68% and increasing customer satisfaction scores by 35 points."
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
              { metric: "68%", label: "faster", sublabel: "claims processing cycle time" },
              { metric: "+35", label: "point increase", sublabel: "in Net Promoter Score" },
              { metric: "92%", label: "claims processed", sublabel: "without human intervention" }
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
              Competing on speed in a market where customer expectations are rising
            </h2>
          </motion.div>
        </div>
      </section>

      <section className="py-10 sm:py-12 lg:py-16 bg-white text-charcoal">
        <div className="container px-4 sm:px-6 md:px-12 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl leading-relaxed text-charcoal/80 mb-6">
              A Hartford-based insurance carrier specializing in small commercial policies was losing market share to larger competitors who offered faster claims processing. With 95 employees handling 18,000 claims annually, the company's manual processes created bottlenecks that frustrated policyholders and increased operational costs.
            </p>
            <p className="text-base leading-relaxed text-charcoal/70 mb-6">
              Claims adjusters spent 60-70% of their time on administrative tasks including data entry, document collection, and status updates rather than on actual claims evaluation and customer service. The average claim took 14 days from submission to resolution, with simple claims requiring the same lengthy process as complex ones. Customer satisfaction scores lagged industry benchmarks by 22 points.
            </p>
            <p className="text-base leading-relaxed text-charcoal/70 mb-6">
              The company's leadership recognized that manual processes were unsustainable. Independent agents were directing clients toward competitors with faster turnaround times, and the company was spending $1.2 million annually on temporary staff during peak claims periods. More concerning, the slow processing created cash flow challenges for small business policyholders who needed quick resolution to resume operations after losses.
            </p>
            <p className="text-base leading-relaxed text-charcoal/70">
              The carrier needed automation that could handle straightforward claims end-to-end while routing complex cases to experienced adjusters. The solution had to integrate with legacy systems, maintain compliance with state insurance regulations, and preserve the personalized service that differentiated the company in the small commercial market.
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
              "Our adjusters were drowning in paperwork while customers waited days for updates on straightforward claims. We were providing slow service at high cost—the worst of both worlds."
            </blockquote>
            <div className="text-base text-white">
              <div className="font-semibold">— Patricia O'Brien</div>
              <div className="text-white/60">Chief Claims Officer</div>
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
              Intelligent automation that handles routine work while empowering adjusters to focus on complex cases
            </h2>
          </motion.div>
        </div>
      </section>

      <section className="py-10 sm:py-12 lg:py-16 bg-white text-charcoal">
        <div className="container px-4 sm:px-6 md:px-12 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl leading-relaxed text-charcoal/80 mb-6">
              We designed and implemented an intelligent claims processing platform that automated routine tasks while maintaining the human judgment required for complex claims. The $75,000 investment focused on creating seamless integration with existing systems and ensuring regulatory compliance across all automated workflows.
            </p>

            <h3 className="text-2xl font-bold text-charcoal mt-12 mb-6">Automated intake and triage</h3>
            <p className="text-base leading-relaxed text-charcoal/70 mb-6">
              The platform automated claims intake through multiple channels including web portal, mobile app, email, and phone. Natural language processing extracted key information from unstructured submissions, automatically populating claim records and requesting any missing documentation. Machine learning models assessed claim complexity, routing straightforward cases to automated processing while flagging complex claims for adjuster review. Policyholders received immediate acknowledgment and estimated resolution timelines based on claim characteristics.
            </p>

            <h3 className="text-2xl font-bold text-charcoal mt-12 mb-6">Straight-through processing for routine claims</h3>
            <p className="text-base leading-relaxed text-charcoal/70 mb-6">
              For claims meeting specific criteria including claim amount, policy coverage, and loss type, the system handled the entire process automatically. The platform verified coverage, assessed damages using industry databases and repair cost estimators, determined settlement amounts within policy limits, and initiated payment processing. Automated fraud detection algorithms flagged suspicious patterns for human review. The entire process completed in hours rather than days, with policyholders receiving real-time status updates via their preferred communication channel.
            </p>

            <h3 className="text-2xl font-bold text-charcoal mt-12 mb-6">Adjuster productivity tools</h3>
            <p className="text-base leading-relaxed text-charcoal/70 mb-6">
              For claims requiring human judgment, the platform provided adjusters with comprehensive case summaries, relevant policy provisions, comparable claims data, and recommended next steps. Automated workflows handled scheduling, document collection, and stakeholder communications, allowing adjusters to focus on investigation and decision-making. The system learned from adjuster decisions, continuously improving its recommendations and triage accuracy.
            </p>

            <h3 className="text-2xl font-bold text-charcoal mt-12 mb-6">Compliance and quality assurance</h3>
            <p className="text-base leading-relaxed text-charcoal/70">
              All automated decisions included full audit trails documenting the reasoning and data sources used. The platform enforced state-specific regulatory requirements and company policies, preventing non-compliant actions. Quality assurance sampling reviewed automated decisions against adjuster outcomes, identifying opportunities to refine algorithms and expand automation scope. Regular compliance reports provided management with visibility into processing patterns and potential issues.
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
              "The system handles the routine work flawlessly, which means our adjusters can spend their time on the cases where their expertise really matters. It's the best use of both human and machine capabilities."
            </blockquote>
            <div className="text-base text-white">
              <div className="font-semibold">— James Wilson</div>
              <div className="text-white/60">Senior Claims Manager</div>
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
              From operational bottleneck to competitive differentiator
            </h2>
          </motion.div>
        </div>
      </section>

      <section className="py-10 sm:py-12 lg:py-16 bg-white text-charcoal">
        <div className="container px-4 sm:px-6 md:px-12 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl leading-relaxed text-charcoal/80 mb-6">
              Within 16 months of deployment, the claims automation platform transformed the carrier's operations, delivering improvements in processing speed, customer satisfaction, and cost efficiency.
            </p>

            <h3 className="text-2xl font-bold text-charcoal mt-12 mb-6">Processing speed and efficiency</h3>
            <p className="text-base leading-relaxed text-charcoal/70 mb-6">
              Average claims cycle time decreased from 14 days to 4.5 days, with routine claims now resolving in under 24 hours. The platform processes 92% of straightforward claims without human intervention, freeing adjusters to focus on complex cases requiring investigation and negotiation. Adjuster productivity increased by 180%, enabling the company to handle 40% more claims with the same staff. The need for temporary workers during peak periods was eliminated, saving $320,000 annually.
            </p>

            <h3 className="text-2xl font-bold text-charcoal mt-12 mb-6">Customer satisfaction and retention</h3>
            <p className="text-base leading-relaxed text-charcoal/70 mb-6">
              Net Promoter Score increased by 35 points, moving from below industry average to top quartile performance. Customer complaints about processing delays dropped by 88%. Policyholders particularly valued the real-time status updates and faster resolution, with 94% rating the claims experience as good or excellent. Policy retention rates improved by 12 percentage points, and independent agents reported that fast claims processing became a key selling point when competing for new business.
            </p>

            <h3 className="text-2xl font-bold text-charcoal mt-12 mb-6">Fraud detection and loss control</h3>
            <p className="text-base leading-relaxed text-charcoal/70 mb-6">
              The automated fraud detection algorithms identified 28% more potentially fraudulent claims than the previous manual review process, preventing an estimated $450,000 in inappropriate payments during the measurement period. Pattern recognition capabilities spotted emerging fraud schemes faster than human reviewers, enabling proactive responses. The platform also identified opportunities to improve loss control recommendations to policyholders, reducing repeat claims.
            </p>

            <h3 className="text-2xl font-bold text-charcoal mt-12 mb-6">Financial performance</h3>
            <p className="text-base leading-relaxed text-charcoal/70">
              The $75,000 investment in the platform generated annual benefits of $895,000 through reduced staffing costs ($320,000), fraud prevention ($450,000), and improved retention value ($125,000). This represents a 340% ROI over 18 months. The company's combined ratio improved by 4.2 points, driven by both expense reduction and better loss outcomes. Management views the platform as a strategic asset that enables profitable growth in the small commercial segment where larger competitors struggle to achieve acceptable unit economics.
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
                name: "Patricia O'Brien",
                location: "Hartford",
                description: "Leads insurance automation practice with focus on claims processing, underwriting, and customer experience transformation for regional and specialty carriers.",
                image: "/author-female-2.55e29921.jpg"
              },
              {
                name: "James Wilson",
                location: "Chicago",
                description: "Specializes in machine learning applications for insurance, including fraud detection, risk assessment, and automated decision-making systems.",
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
          <CaseStudyContactForm caseStudyTitle="Insurance Claims Processing" />
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
                title: "Automating compliance for a regional bank",
                industry: "Financial Services",
                metric: "75%",
                metricLabel: "Less manual work",
                image: "/case-bank-compliance.5d4e2f73.jpg",
                link: "/cases/bank-process-automation"
              },
              {
                title: "Streamlining client onboarding for wealth management",
                industry: "Financial Services",
                metric: "80%",
                metricLabel: "Faster onboarding",
                image: "/case-wealth-onboarding.8b2c4d91.jpg",
                link: "/cases/wealth-management-onboarding"
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
