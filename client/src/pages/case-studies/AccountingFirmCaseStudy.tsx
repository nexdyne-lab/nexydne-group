import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { SEO } from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { ArrowRight, ArrowLeft, Quote } from "lucide-react";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

// Key metrics
const metrics = [
  { value: "70%", label: "Reduction in manual processing" },
  { value: "120", label: "Employees served" },
  { value: "8", label: "Weeks to implementation" },
  { value: "3.5x", label: "ROI in first year" }
];

// Timeline milestones
const timeline = [
  {
    phase: "Discovery",
    duration: "Week 1-2",
    description: "ProcessFlow AI connected to the firm's document management systems and accounting software, automatically mapping existing workflows across tax preparation, audit documentation, and client onboarding processes."
  },
  {
    phase: "Analysis",
    duration: "Week 3-4",
    description: "The analysis revealed that 65% of staff time was spent on manual document handling—scanning, categorizing, and cross-referencing client materials. Peak season created bottlenecks that led to overtime costs and delayed client deliverables."
  },
  {
    phase: "Design",
    duration: "Week 5-6",
    description: "NexDyne designed an intelligent document processing pipeline using AI-powered OCR and classification, automated data extraction, and smart routing to appropriate team members based on document type and client priority."
  },
  {
    phase: "Deployment",
    duration: "Week 7-8",
    description: "Phased rollout began with tax document processing, followed by audit workpapers and client onboarding. Staff training was conducted in parallel, with adoption support from NexDyne's change management team."
  }
];

// Results breakdown
const results = [
  {
    category: "Operational Efficiency",
    items: [
      "Document processing time reduced from 45 minutes to 12 minutes per client file",
      "Automatic categorization accuracy of 94%, eliminating manual sorting",
      "Real-time status visibility for partners and managers"
    ]
  },
  {
    category: "Cost Savings",
    items: [
      "Overtime hours during tax season reduced by 60%",
      "Paper and physical storage costs eliminated",
      "Staff redeployed to higher-value advisory services"
    ]
  },
  {
    category: "Client Experience",
    items: [
      "Turnaround time for standard tax returns improved by 40%",
      "Client portal enabled self-service document uploads",
      "Proactive notifications kept clients informed of progress"
    ]
  }
];

export default function AccountingFirmCaseStudy() {
  return (
    <div className="min-h-screen bg-white text-charcoal font-sans">
      <SEO 
        title="Regional Accounting Firm Automates Document Processing | Case Study" 
        description="How a 120-employee accounting firm deployed ProcessFlow AI to reduce manual document processing by 70% and transform their tax season operations."
        canonical="/capabilities/ai-technology-consulting/case-study/accounting-firm"
      />

      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-slate-900 overflow-hidden">
        <div className="container relative z-10 px-4 sm:px-6 md:px-12">
          {/* Breadcrumb */}
          <Link href="/capabilities/ai-technology-consulting">
            <span className="inline-flex items-center text-white/70 hover:text-white text-sm mb-8 transition-colors cursor-pointer">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to AI & Technology Consulting
            </span>
          </Link>

          <div className="max-w-4xl">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xs sm:text-sm font-medium tracking-[0.2em] text-white/60 uppercase mb-4 block"
            >
              Professional Services | Case Study
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white leading-[1.15] mb-6"
            >
              Regional accounting firm automates document processing, reducing manual work by 70%
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-white/70 leading-relaxed max-w-3xl"
            >
              A 120-employee accounting firm serving mid-market clients across the Midwest deployed ProcessFlow AI to streamline tax document processing and client onboarding workflows, achieving dramatic efficiency gains ahead of their busiest season.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Key Metrics Bar */}
      <section className="bg-slate-800 py-8">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((metric, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl sm:text-4xl font-bold text-white mb-1">{metric.value}</div>
                <div className="text-sm text-white/60">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="max-w-3xl mx-auto">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.span variants={fadeInUp} className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase mb-4 block">
                The Challenge
              </motion.span>
              <motion.h2 variants={fadeInUp} className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-charcoal mb-8">
                Drowning in documents during tax season
              </motion.h2>
              <motion.div variants={fadeInUp} className="prose prose-lg text-muted-foreground leading-relaxed">
                <p>
                  For two decades, this regional accounting firm had built a reputation for personalized service and deep client relationships. But as their client base grew to over 800 businesses and high-net-worth individuals, their manual processes couldn't keep pace.
                </p>
                <p>
                  Each tax season brought the same challenges: mountains of documents arriving via email, mail, and client drop-offs. Staff spent hours scanning, naming, and organizing files. Partners lost visibility into workload distribution. Clients waited days for confirmation that their materials had been received and processed.
                </p>
                <p>
                  The firm's leadership recognized that their document handling bottleneck wasn't just an operational issue—it was limiting their ability to grow and threatening the client experience that had built their reputation.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 md:py-24 bg-slate-50">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="max-w-3xl mx-auto">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.span variants={fadeInUp} className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase mb-4 block">
                The Solution
              </motion.span>
              <motion.h2 variants={fadeInUp} className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-charcoal mb-8">
                ProcessFlow AI: From chaos to clarity
              </motion.h2>
              <motion.div variants={fadeInUp} className="prose prose-lg text-muted-foreground leading-relaxed">
                <p>
                  NexDyne deployed ProcessFlow AI to transform the firm's document handling from a manual, error-prone process into an intelligent, automated workflow. The solution combined AI-powered document recognition with smart routing and real-time tracking.
                </p>
                <p>
                  Documents arriving through any channel—email attachments, scanned mail, or the new client portal—are automatically classified, data-extracted, and routed to the appropriate team member. The system recognizes over 200 document types, from W-2s and 1099s to complex partnership agreements.
                </p>
              </motion.div>
            </motion.div>
          </div>

          {/* Implementation Timeline */}
          <div className="max-w-4xl mx-auto mt-16">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xl font-serif font-bold text-charcoal mb-8 text-center"
            >
              Implementation Timeline
            </motion.h3>
            <div className="space-y-6">
              {timeline.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="flex-shrink-0 w-24">
                    <div className="text-sm font-bold text-charcoal">{item.phase}</div>
                    <div className="text-xs text-muted-foreground">{item.duration}</div>
                  </div>
                  <div className="flex-1 pb-6 border-l-2 border-slate-200 pl-6">
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="mb-12"
            >
              <motion.span variants={fadeInUp} className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase mb-4 block">
                The Results
              </motion.span>
              <motion.h2 variants={fadeInUp} className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-charcoal mb-6">
                Transforming tax season from crisis to confidence
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-lg text-muted-foreground leading-relaxed">
                Within eight weeks of deployment, the firm experienced measurable improvements across every dimension of their document operations.
              </motion.p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {results.map((result, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-slate-50 rounded-xl p-6"
                >
                  <h3 className="text-lg font-bold text-charcoal mb-4">{result.category}</h3>
                  <ul className="space-y-3">
                    {result.items.map((item, j) => (
                      <li key={j} className="text-sm text-muted-foreground leading-relaxed pl-4 border-l-2 border-slate-300">
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 md:py-24 bg-slate-900">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <Quote className="w-12 h-12 text-white/20 mx-auto mb-6" />
            <motion.blockquote 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xl sm:text-2xl font-serif text-white leading-relaxed mb-8"
            >
              "For the first time in years, we entered tax season feeling prepared rather than anxious. Our team can now focus on what they do best—advising clients—instead of shuffling paper. The ROI was evident within the first quarter."
            </motion.blockquote>
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="text-white font-medium">Managing Partner</div>
              <div className="text-white/60 text-sm">Regional Accounting Firm</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Looking Forward Section */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="max-w-3xl mx-auto">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.span variants={fadeInUp} className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase mb-4 block">
                Looking Forward
              </motion.span>
              <motion.h2 variants={fadeInUp} className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-charcoal mb-8">
                Building on success
              </motion.h2>
              <motion.div variants={fadeInUp} className="prose prose-lg text-muted-foreground leading-relaxed">
                <p>
                  With document processing transformed, the firm is now exploring additional automation opportunities. NexDyne is working with their leadership to implement intelligent workload balancing during peak periods and automated client communication workflows.
                </p>
                <p>
                  The success of this engagement has also positioned the firm to expand their advisory services, using the time freed by automation to deepen client relationships and grow their consulting practice.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-24 bg-slate-900">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white mb-6"
            >
              Ready to transform your operations?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-white/70 mb-8"
            >
              Learn how ProcessFlow AI can help your organization achieve similar results.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/contact">
                <span className="inline-flex items-center px-8 py-4 bg-white text-charcoal font-semibold rounded-full hover:bg-subtle transition-all cursor-pointer group">
                  Schedule a Consultation
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link href="/capabilities/ai-technology-consulting/processflow-ai">
                <span className="inline-flex items-center px-8 py-4 border border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all cursor-pointer">
                  Learn About ProcessFlow AI
                </span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Case Studies */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl font-serif font-bold text-charcoal mb-8">Related Case Studies</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/capabilities/ai-technology-consulting/case-study/credit-union">
                <div className="group p-6 border border-slate-200 rounded-xl hover:border-slate-300 hover:shadow-sm transition-all cursor-pointer">
                  <span className="text-xs font-medium tracking-wider text-muted-foreground uppercase">Financial Services</span>
                  <h4 className="text-lg font-serif font-bold text-charcoal mt-2 group-hover:text-secondary transition-colors">
                    Credit union transforms member services with AI-powered analytics
                  </h4>
                  <span className="inline-flex items-center text-sm text-muted-foreground mt-4 group-hover:text-secondary transition-colors">
                    Read case study <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
              <Link href="/capabilities/ai-technology-consulting/case-study/medical-practice">
                <div className="group p-6 border border-slate-200 rounded-xl hover:border-slate-300 hover:shadow-sm transition-all cursor-pointer">
                  <span className="text-xs font-medium tracking-wider text-muted-foreground uppercase">Healthcare</span>
                  <h4 className="text-lg font-serif font-bold text-charcoal mt-2 group-hover:text-secondary transition-colors">
                    Medical practice network deploys predictive scheduling to optimize patient flow
                  </h4>
                  <span className="inline-flex items-center text-sm text-muted-foreground mt-4 group-hover:text-secondary transition-colors">
                    Read case study <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
