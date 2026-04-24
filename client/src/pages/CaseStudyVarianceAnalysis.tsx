import { Link } from "wouter";
import { motion } from "framer-motion";
import { CaseStudyPDFButton } from "@/components/CaseStudyPDFButton";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import CaseStudyContactForm from "@/components/CaseStudyContactForm";
import { BackToTop } from "@/components/BackToTop";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";

export default function CaseStudyVarianceAnalysis() {
  return (
    <div className="min-h-screen bg-white text-white selection:bg-primary selection:text-white">
      <SEO
        title="Variance Analysis Automation | Case Study | NexDyne Technologies"
        description="How we reduced close-to-report time from 15 days to 5 days through exception-based reporting and automated commentary generation."
        canonical="/cases/variance-analysis"
      />
      <Navigation />

      {/* DZ10 Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/case-variance-analysis.4c7d8e92.jpg')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0"></div>

        <div className="container relative z-10 px-4 md:px-12">
          <Breadcrumbs />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] text-primary mb-4 sm:mb-6 block">
              Case Study · Logistics & Warehousing
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl tracking-tight leading-[1.05] mb-5 sm:mb-3 md:mb-4">
              Automating variance analysis for <span className="text-primary">67%</span> faster close
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 leading-relaxed max-w-3xl mb-5 sm:mb-6 md:mb-8">
              How we reduced close-to-report time from 15 days to 5 days through exception-based reporting and automated commentary generation—freeing the CFO to focus on strategy instead of data reconciliation.
            </p>

            {/* PDF Download Button */}
            <CaseStudyPDFButton
              title="Automating variance analysis for 67% faster close"
              industry="Logistics & Warehousing"
              summary="How we reduced close-to-report time from 15 days to 5 days through exception-based reporting and automated commentary generation—freeing the CFO to focus on strategy instead of data reconciliation."
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
      <section className="py-10 sm:py-12 lg:py-16 bg-white border-t border-white/10">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
            {[
              { metric: "67%", label: "Reduction in close time" },
              { metric: "120 hrs", label: "Saved per month" },
              { metric: "90%", label: "Fewer manual errors" },
              { metric: "8 weeks", label: "Implementation timeline" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border-l-2 border-primary/50 pl-8"
              >
                <div className="text-5xl text-primary mb-2">{stat.metric}</div>
                <div className="text-base text-white/70">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DZ10 Sticky Navigation */}
      <nav className="sticky top-20 bg-white text-white z-40 border-y border-white/10">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="flex items-center gap-1">
            <a href="#challenge" className="px-4 sm:px-5 md:px-6 py-3 sm:py-4 text-sm font-medium hover:bg-white/5 transition-colors hover:text-primary">
              THE CHALLENGE
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

      {/* Company Overview */}
      <section className="py-10 sm:py-12 lg:py-16 bg-white text-charcoal">
        <div className="container px-4 sm:px-6 md:px-12 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl text-charcoal mb-6">Company Overview</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-charcoal/80 leading-relaxed mb-4">
                Our client is a regional logistics and warehousing company operating 12 facilities across the Southeast United States. With 220 employees and $45M in annual revenue, they provide third-party logistics services to manufacturers, distributors, and e-commerce companies. The business operates on thin margins typical of the logistics industry, making tight financial control essential for profitability.
              </p>
              <p className="text-charcoal/70 leading-relaxed">
                The company had grown through a combination of organic expansion and strategic acquisitions, which created a complex operational structure with multiple business units, cost centers, and service lines. This complexity made monthly financial close and variance analysis increasingly time-consuming and error-prone.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12 p-4 sm:p-6 md:p-8 bg-white/5 rounded-lg sm:">
              <div>
                <div className="text-sm font-semibold text-primary mb-2">Industry</div>
                <div className="text-charcoal font-medium">Logistics & Warehousing</div>
              </div>
              <div>
                <div className="text-sm font-semibold text-primary mb-2">Company Size</div>
                <div className="text-charcoal font-medium">220 employees</div>
              </div>
              <div>
                <div className="text-sm font-semibold text-primary mb-2">Annual Revenue</div>
                <div className="text-charcoal font-medium">$45M</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* DZ10 Challenge Section */}
      <section id="challenge" className="py-12 sm:py-16 md:py-24 lg:py-32 bg-primary">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white/80 mb-4 sm:mb-6 block">
              The Challenge
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white max-w-4xl leading-tight">
              Manual variance analysis consumed weeks each month
            </h2>
          </motion.div>
        </div>
      </section>

      <section className="py-10 sm:py-12 lg:py-16 bg-white text-charcoal">
        <div className="container px-4 sm:px-6 md:px-12 max-w-4xl">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl text-charcoal mb-4">Manual variance analysis consumed weeks each month</h3>
              <p className="text-charcoal/70 leading-relaxed">
                The finance team spent the first 15 days of each month closing the books and preparing variance analysis reports. This involved manually extracting data from the ERP system, building complex Excel workbooks to compare actuals against budget and prior year, investigating every variance over $5,000, and writing narrative explanations for each significant difference. By the time the analysis was complete, the information was already outdated and the team had no time left for forward-looking planning.
              </p>
            </div>

            <div>
              <h3 className="text-xl text-charcoal mb-4">Inconsistent analysis across business units</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Each of the company's 12 facilities had its own general manager who was responsible for explaining variances in their P&L. However, there was no standardized process or template, so the quality and depth of analysis varied wildly. Some managers provided detailed, insightful commentary while others offered vague explanations or simply blamed "timing differences." This made it difficult for the CFO to understand true performance drivers or hold leaders accountable.
              </p>
            </div>

            <div>
              <h3 className="text-xl text-charcoal mb-4">Errors and reconciliation issues created distrust</h3>
              <p className="text-charcoal/70 leading-relaxed">
                The manual process was error-prone, with frequent issues like formula mistakes, version control problems, and data entry errors. The CFO often discovered discrepancies during board presentations, which undermined confidence in the financial reporting. The team spent additional time each month reconciling and re-reconciling numbers, which further delayed the close process and created tension between finance and operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DZ10 Quote Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 sm:px-6 md:px-12 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <blockquote className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-primary leading-tight mb-5 sm:mb-6 md:mb-8">
              "We were spending so much time looking backward that we had no capacity to look forward. I felt like a historian instead of a CFO. We needed to automate the routine work so we could focus on the strategic questions that actually move the business."
            </blockquote>
            <div className="text-base text-white">
              <div className="font-semibold">— Michael Rodriguez</div>
              <div className="text-white/60">CFO, Client Company</div>
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
            <span className="text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white/80 mb-4 sm:mb-6 block">
              The Solution
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white max-w-4xl leading-tight">
              Automated variance analysis system
            </h2>
          </motion.div>
        </div>
      </section>

      <section className="py-10 sm:py-12 lg:py-16 bg-white text-charcoal">
        <div className="container px-4 sm:px-6 md:px-12 max-w-4xl">
          <p className="text-xl text-charcoal/80 leading-relaxed mb-6 sm:mb-8 md:mb-12">
            We designed and implemented an automated variance analysis system that eliminated manual data manipulation, standardized reporting across business units, and generated intelligent commentary based on data patterns. The solution was deployed in two phases over 8 weeks.
          </p>

          <div className="space-y-12">
            {/* Phase 1 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary text-white flex items-center justify-center text-lg">
                  1
                </div>
              </div>
              <div>
                <h3 className="text-xl text-charcoal mb-4 flex items-center gap-3">

                  Automated data extraction and variance calculation
                </h3>
                <p className="text-charcoal/70 leading-relaxed mb-4">
                  We built automated workflows to extract financial data from the ERP system on the first day after month close, calculate variances across multiple dimensions (actual vs. budget, actual vs. prior year, actual vs. forecast), and flag exceptions based on configurable thresholds. This eliminated the manual Excel work and reduced the data preparation phase from 5 days to less than 2 hours.
                </p>
                <ul className="space-y-2 text-charcoal/70">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Automated daily ERP data extraction with validation checks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Built multi-dimensional variance calculation engine</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Implemented exception-based reporting with configurable thresholds</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Created drill-down capabilities to transaction-level detail</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary text-white flex items-center justify-center text-lg">
                  2
                </div>
              </div>
              <div>
                <h3 className="text-xl text-charcoal mb-4 flex items-center gap-3">

                  Intelligent commentary generation and standardized reporting
                </h3>
                <p className="text-charcoal/70 leading-relaxed mb-4">
                  We developed an AI-powered commentary system that analyzed variance patterns and generated draft explanations based on historical data, operational metrics, and business context. Business unit managers could review, edit, and approve these drafts through a simple workflow, ensuring consistent quality while dramatically reducing the time required. The system also created standardized executive summary reports that rolled up key insights across all facilities.
                </p>
                <ul className="space-y-2 text-charcoal/70">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Built pattern recognition engine to identify common variance drivers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Developed automated commentary generation with manager review workflow</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Created standardized templates for facility and consolidated reporting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Implemented approval workflows with audit trail</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
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
            <span className="text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white/80 mb-4 sm:mb-6 block">
              The Impact
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white max-w-4xl leading-tight">
              Results & Impact
            </h2>
          </motion.div>
        </div>
      </section>

      <section className="py-10 sm:py-12 lg:py-16 bg-white text-charcoal">
        <div className="container px-4 sm:px-6 md:px-12 max-w-4xl">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl text-charcoal mb-4 flex items-center gap-3">

                Dramatically faster close process
              </h3>
              <p className="text-charcoal/70 leading-relaxed mb-4">
                The automated system reduced close-to-report time from 15 days to 5 days—a 67% improvement. The finance team now completes variance analysis by the 5th business day of each month, giving leadership 10 additional days to act on insights before the next month is already well underway. This acceleration has fundamentally changed how the company operates, enabling faster decision-making and course correction.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 sm:p-5 md:p-6 bg-white/5 rounded-lg sm:">
                  <div className="text-3xl text-charcoal mb-2">5 days</div>
                  <div className="text-sm text-charcoal/60">Close-to-report time (down from 15 days)</div>
                </div>
                <div className="p-4 sm:p-5 md:p-6 bg-white/5 rounded-lg sm:">
                  <div className="text-3xl text-charcoal mb-2">120 hrs</div>
                  <div className="text-sm text-charcoal/60">Finance team hours saved per month</div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl text-charcoal mb-4 flex items-center gap-3">

                Improved accuracy and consistency
              </h3>
              <p className="text-charcoal/70 leading-relaxed mb-4">
                By eliminating manual data manipulation and standardizing the analysis process, the system reduced errors by 90%. The CFO no longer worries about discovering discrepancies during board meetings, and business unit managers now provide consistently high-quality variance explanations. The audit trail and approval workflow also improved internal controls and made the year-end audit process significantly smoother.
              </p>
              <div className="p-4 sm:p-5 md:p-6 bg-white/5 rounded-lg sm:">
                <div className="text-3xl text-charcoal mb-2">90%</div>
                <div className="text-sm text-charcoal/60">Reduction in manual errors and reconciliation issues</div>
              </div>
            </div>

            <div>
              <h3 className="text-xl text-charcoal mb-4 flex items-center gap-3">

                Freed capacity for strategic work
              </h3>
              <p className="text-charcoal/70 leading-relaxed mb-4">
                With 120 hours per month freed up, the finance team redirected their efforts toward strategic initiatives like pricing optimization, customer profitability analysis, and capital investment evaluation. The CFO now spends less than 20% of his time on backward-looking reporting and more than 50% on forward-looking strategy—a complete reversal from before the automation.
              </p>
              <div className="p-4 sm:p-5 md:p-6 bg-white/5 rounded-lg sm:">
                <div className="text-3xl text-charcoal mb-2">3x</div>
                <div className="text-sm text-charcoal/60">Increase in time spent on strategic analysis vs. routine reporting</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DZ10 Quote Section 2 */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 sm:px-6 md:px-12 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <blockquote className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-primary leading-tight mb-5 sm:mb-6 md:mb-8">
              "This automation has been a game-changer. We're no longer drowning in spreadsheets and reconciliation issues. We have time to think, to analyze, to advise the business. That's what finance should be doing—and now we actually can."
            </blockquote>
            <div className="text-base text-white">
              <div className="font-semibold">— Michael Rodriguez</div>
              <div className="text-white/60">CFO, Client Company</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* DZ10 Contact Form Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 sm:px-6 md:px-12">
          <CaseStudyContactForm caseStudyTitle="Variance Analysis Automation" />
        </div>
      </section>

      {/* DZ10 Related Cases Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 sm:mb-12 md:mb-16"
          >
            <span className="text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white/60 mb-4 sm:mb-6 block">
              Related Case Studies
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white">More success stories</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4 max-w-5xl">
            {[
              {
                title: "Building predictive revenue models",
                industry: "B2B SaaS",
                description: "How we improved forecast accuracy by 35% through driver-based modeling",
                image: "/case-predictive-revenue.5d4e2f73.jpg",
                link: "/cases/predictive-revenue"
              },
              {
                title: "Designing executive dashboards for clarity",
                industry: "Professional Services",
                description: "How we improved board meeting efficiency by 60%",
                image: "/case-dashboards.8b2c4d91.jpg",
                link: "/cases/executive-dashboards"
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
                  <div className="aspect-[16/9] overflow-hidden mb-6 rounded-lg sm: relative bg-white/5">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <span className="text-xs text-primary uppercase tracking-wider">{item.industry}</span>
                  <h3 className="text-xl text-white mt-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-white/60 mt-2">{item.description}</p>
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
