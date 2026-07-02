import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, ArrowLeft, TrendingUp, Target, Database, BarChart3, Download } from 'lucide-react';
import { CaseStudyPDFButton } from "@/components/CaseStudyPDFButton";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import CaseStudyContactForm from "@/components/CaseStudyContactForm";
import { BackToTop } from "@/components/BackToTop";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";

export default function CaseStudyPredictiveRevenue() {
  return (
    <div className="min-h-screen bg-background text-charcoal selection:bg-primary selection:text-white">
      <SEO
        title="Predictive Revenue Models | Case Study | NexDyne Technologies"
        description="How we helped a growing software company transition from static annual budgets to dynamic, driver-based forecasting—improving accuracy by 35%."
        canonical="/cases/predictive-revenue"
      />
      <Navigation />
      
      {/* Neutral Hero Section */}
      <section className="relative w-full bg-background overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(70% 60% at 82% 14%, rgba(224,76,44,0.05) 0%, transparent 55%), radial-gradient(55% 55% at 6% 95%, rgba(111,68,163,0.045) 0%, transparent 55%)" }} />
        <div className="relative mx-auto max-w-[1400px] px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          <Breadcrumbs />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center min-h-[50vh] py-24 lg:py-28"
          >
            <div className="max-w-[920px]">
              <div className="flex items-center gap-3 mb-6">
                <span className="block h-[3px] w-9 bg-primary" />
                <span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Case Study · B2B SaaS</span>
              </div>
              <h1 className="text-charcoal font-bold tracking-[-0.035em] leading-[1.05] text-[clamp(2.2rem,4.8vw,3.8rem)]">
                Predictive revenue models for <span className="text-primary">35%</span> better accuracy
              </h1>
              <p className="mt-7 text-[1.1rem] md:text-[1.2rem] leading-[1.55] text-muted-foreground max-w-[62ch]">
                How we helped a growing software company transition from static annual budgets to dynamic, driver-based forecasting—improving accuracy by 35% and enabling proactive resource allocation.
              </p>

              {/* PDF Download Button */}
              <div className="mt-8">
              <CaseStudyPDFButton
              title="Predictive revenue models for 35% better accuracy"
              industry="B2B SaaS"
              summary="How we helped a growing software company transition from static annual budgets to dynamic, driver-based forecasting—improving accuracy by 35% and enabling proactive resource allocation."
              challenge="See full case study for detailed challenge description."
              solution="See full case study for detailed solution description."
              results={[
                "Significant business impact achieved",
                "Measurable improvements delivered",
                "Client objectives exceeded"
              ]}
              variant="hero"
            />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* DZ10 Stats Section */}
      <section className="py-10 sm:py-12 lg:py-16 bg-charcoal text-white border-t-2 border-primary">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
            {[
              { metric: "35%", label: "Forecast accuracy improvement" },
              { metric: "15 days", label: "Saved in monthly planning cycle" },
              { metric: "$2.4M", label: "Additional ARR captured" },
              { metric: "3 months", label: "Time to full implementation" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border-l-2 border-primary/50 pl-8"
              >
                <div className="text-5xl font-bold text-white mb-2">{stat.metric}</div>
                <div className="text-base text-white/70">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DZ10 Sticky Navigation */}
      <nav className="sticky top-20 bg-charcoal text-white z-40 border-y border-border">
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
            <h2 className="text-3xl font-bold text-charcoal mb-6">Company Overview</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-charcoal/80 leading-relaxed mb-4">
                Our client is a rapidly growing B2B SaaS company providing workflow automation tools to mid-market enterprises. With 180 employees and $28M in annual recurring revenue, they were experiencing 40% year-over-year growth but struggling to forecast revenue accurately enough to make confident hiring and investment decisions.
              </p>
              <p className="text-charcoal/70 leading-relaxed">
                The company had recently raised a Series B round and was under pressure from the board to demonstrate predictable, sustainable growth. Their existing financial planning process relied heavily on static annual budgets with quarterly adjustments, which left leadership constantly reacting to surprises rather than proactively managing the business.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:p-5 md:p-6 mt-12 p-4 sm:p-6 md:p-8 bg-charcoal/5 rounded-lg sm:rounded-xl">
              <div>
                <div className="text-sm font-semibold text-primary mb-2">Industry</div>
                <div className="text-charcoal font-medium">B2B SaaS</div>
              </div>
              <div>
                <div className="text-sm font-semibold text-primary mb-2">Company Size</div>
                <div className="text-charcoal font-medium">180 employees</div>
              </div>
              <div>
                <div className="text-sm font-semibold text-primary mb-2">Annual Revenue</div>
                <div className="text-charcoal font-medium">$28M ARR</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* DZ10 Challenge Section */}
      <section id="challenge" className="py-12 sm:py-16 md:py-24 lg:py-32 bg-charcoal text-white border-t-2 border-primary">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-amber mb-4 sm:mb-6 block">
              The Challenge
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white max-w-4xl leading-tight">
              Static budgets couldn't keep pace with growth
            </h2>
          </motion.div>
        </div>
      </section>

      <section className="py-10 sm:py-12 lg:py-16 bg-white text-charcoal">
        <div className="container px-4 sm:px-6 md:px-12 max-w-4xl">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-charcoal mb-4">Static budgets couldn't keep pace with growth</h3>
              <p className="text-charcoal/70 leading-relaxed">
                The company's finance team was building annual budgets based on historical trends and high-level assumptions about new customer acquisition. But with a complex sales cycle involving multiple deal sizes, contract lengths, and expansion opportunities, these static projections were consistently off by 20-30%. This made it nearly impossible to plan headcount, marketing spend, or infrastructure investments with confidence.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-charcoal mb-4">Disconnected data sources created blind spots</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Revenue data lived in Salesforce, customer success metrics were tracked in Gainsight, and financial actuals were in NetSuite. The finance team spent weeks each quarter manually extracting, reconciling, and consolidating data from these systems—leaving little time for actual analysis or strategic planning. By the time they had a clear picture of performance, the quarter was already over.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-charcoal mb-4">No visibility into leading indicators</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Leadership was making decisions based on lagging indicators like closed deals and recognized revenue. They had no systematic way to track leading indicators like pipeline velocity, sales cycle length, or expansion opportunity maturity. This meant they were constantly surprised by revenue shortfalls or windfalls, with no early warning system to course-correct.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DZ10 Quote Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-charcoal text-white border-t-2 border-primary">
        <div className="container px-4 sm:px-6 md:px-12 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <blockquote className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white leading-tight mb-5 sm:mb-6 md:mb-8">
              "We were flying blind. Every board meeting felt like a surprise party—and not the good kind. We needed to move from reactive firefighting to proactive management, but our planning process was holding us back."
            </blockquote>
            <div className="text-base text-white">
              <div className="font-semibold">— Sarah Chen</div>
              <div className="text-white/60">CFO, Client Company</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* DZ10 Solution Section */}
      <section id="solution" className="py-12 sm:py-16 md:py-24 lg:py-32 bg-charcoal text-white border-t-2 border-primary">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-amber mb-4 sm:mb-6 block">
              The Solution
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white max-w-4xl leading-tight">
              Driver-based revenue forecasting
            </h2>
          </motion.div>
        </div>
      </section>

      <section className="py-10 sm:py-12 lg:py-16 bg-white text-charcoal">
        <div className="container px-4 sm:px-6 md:px-12 max-w-4xl">
          <p className="text-xl text-charcoal/80 leading-relaxed mb-6 sm:mb-8 md:mb-12">
            We implemented a comprehensive driver-based revenue forecasting model that integrated data from across the business and provided real-time visibility into both leading and lagging indicators. The solution was built in three phases over 12 weeks.
          </p>

          <div className="space-y-12">
            {/* Phase 1 */}
            <div className="flex gap-4 sm:p-6 md:p-8">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                  1
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center gap-3">
                  <Database className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  Data integration and revenue driver identification
                </h3>
                <p className="text-charcoal/70 leading-relaxed mb-4">
                  We started by mapping the company's revenue generation process from end to end, identifying the key drivers at each stage: lead generation, opportunity creation, pipeline progression, deal closure, and customer expansion. We then built automated data pipelines to pull this information from Salesforce, Gainsight, and NetSuite into a unified data warehouse.
                </p>
                <ul className="space-y-2 text-charcoal/70">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Identified 12 key revenue drivers across the customer lifecycle</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Built automated ETL pipelines for daily data refresh</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Created unified customer data model with 18 months of history</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="flex gap-4 sm:p-6 md:p-8">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                  2
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center gap-3">
                  <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  Predictive model development and validation
                </h3>
                <p className="text-charcoal/70 leading-relaxed mb-4">
                  Using historical data, we built statistical models to predict conversion rates, deal velocity, and expansion timing based on observable characteristics like deal size, industry, and customer engagement patterns. We validated these models against out-of-sample data to ensure they were robust and reliable before putting them into production.
                </p>
                <ul className="space-y-2 text-charcoal/70">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Developed conversion probability models for each pipeline stage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Built time-to-close prediction models by deal segment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Created expansion opportunity scoring system</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="flex gap-4 sm:p-6 md:p-8">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                  3
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center gap-3">
                  <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  Dashboard deployment and process integration
                </h3>
                <p className="text-charcoal/70 leading-relaxed mb-4">
                  We built an executive dashboard that surfaced the most important metrics and forecasts in real-time, with drill-down capabilities for deeper analysis. We also redesigned the monthly planning process to incorporate these insights, moving from static budget reviews to dynamic scenario planning sessions focused on resource allocation decisions.
                </p>
                <ul className="space-y-2 text-charcoal/70">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Deployed real-time revenue forecast dashboard with 13-week rolling view</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Created territory-level performance tracking and forecasting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Implemented weekly forecast review cadence with sales leadership</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DZ10 Impact Section */}
      <section id="impact" className="py-12 sm:py-16 md:py-24 lg:py-32 bg-charcoal text-white border-t-2 border-primary">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-amber mb-4 sm:mb-6 block">
              The Impact
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white max-w-4xl leading-tight">
              Results & Impact
            </h2>
          </motion.div>
        </div>
      </section>

      <section className="py-10 sm:py-12 lg:py-16 bg-white text-charcoal">
        <div className="container px-4 sm:px-6 md:px-12 max-w-4xl">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center gap-3">
                <Target className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                Dramatically improved forecast accuracy
              </h3>
              <p className="text-charcoal/70 leading-relaxed mb-4">
                Within three months of implementation, forecast accuracy improved from 70% to 95% for the 13-week rolling forecast. The company could now predict quarterly revenue within 5% accuracy, giving leadership the confidence to make bold investment decisions without fear of missing targets.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 sm:p-5 md:p-6 bg-charcoal/5 rounded-lg sm:rounded-xl">
                  <div className="text-3xl font-bold text-charcoal mb-2">95%</div>
                  <div className="text-sm text-charcoal/60">13-week forecast accuracy (up from 70%)</div>
                </div>
                <div className="p-4 sm:p-5 md:p-6 bg-charcoal/5 rounded-lg sm:rounded-xl">
                  <div className="text-3xl font-bold text-charcoal mb-2">±5%</div>
                  <div className="text-sm text-charcoal/60">Quarterly revenue variance (down from ±25%)</div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center gap-3">
                <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                Enabled proactive resource allocation
              </h3>
              <p className="text-charcoal/70 leading-relaxed mb-4">
                With early visibility into pipeline health and conversion trends, the company was able to reallocate sales resources to high-performing territories and products before the quarter ended. This proactive approach helped them capture an additional $2.4M in ARR that would have been missed under the old reactive planning model.
              </p>
              <div className="p-4 sm:p-5 md:p-6 bg-charcoal/5 rounded-lg sm:rounded-xl">
                <div className="text-3xl font-bold text-charcoal mb-2">$2.4M</div>
                <div className="text-sm text-charcoal/60">Additional ARR captured through proactive territory management</div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center gap-3">
                <Database className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                Freed up finance team capacity
              </h3>
              <p className="text-charcoal/70 leading-relaxed mb-4">
                By automating data collection and consolidation, the finance team saved approximately 15 days per month that had previously been spent on manual reporting. This time was redirected toward strategic analysis, scenario planning, and partnership with business leaders on growth initiatives.
              </p>
              <div className="p-4 sm:p-5 md:p-6 bg-charcoal/5 rounded-lg sm:rounded-xl">
                <div className="text-3xl font-bold text-charcoal mb-2">60%</div>
                <div className="text-sm text-charcoal/60">Reduction in time spent on manual reporting and reconciliation</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DZ10 Quote Section 2 */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-charcoal text-white border-t-2 border-primary">
        <div className="container px-4 sm:px-6 md:px-12 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <blockquote className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white leading-tight mb-5 sm:mb-6 md:mb-8">
              "This has been transformational for how we run the business. We're no longer guessing about what's going to happen next quarter—we can see it coming and adjust our strategy accordingly. The board has noticed the difference, and so has our entire leadership team."
            </blockquote>
            <div className="text-base text-white">
              <div className="font-semibold">— Sarah Chen</div>
              <div className="text-white/60">CFO, Client Company</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* DZ10 Contact Form Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 sm:px-6 md:px-12">
          <CaseStudyContactForm caseStudyTitle="Predictive Revenue Models" />
        </div>
      </section>

      {/* DZ10 Related Cases Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-background text-charcoal">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 sm:mb-12 md:mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-muted-foreground mb-4 sm:mb-6 block">
              Related Case Studies
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal">More success stories</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4 sm:p-6 md:p-8 max-w-5xl">
            {[
              {
                title: "Automating variance analysis workflows",
                industry: "Logistics",
                description: "How we reduced close-to-report time from 15 days to 5 days",
                image: "/case-data-dashboard.391db27a.jpg",
                link: "/cases/variance-analysis"
              },
              {
                title: "Designing executive dashboards for clarity",
                industry: "Professional Services",
                description: "How we improved board meeting efficiency by 60%",
                image: "/case-data-dashboard.391db27a.jpg",
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
                  <div className="aspect-[16/9] overflow-hidden mb-6 rounded-lg sm:rounded-xl relative bg-subtle">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <span className="text-xs font-bold text-primary uppercase tracking-wider">{item.industry}</span>
                  <h3 className="text-xl font-bold text-charcoal mt-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground mt-2">{item.description}</p>
                  <span className="text-primary text-sm font-semibold flex items-center gap-1 mt-4 group-hover:gap-2 transition-[gap]">
                    Read case study <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link href="/cases">
              <Button variant="outline" className="border-charcoal/20 text-charcoal hover:bg-charcoal/5 px-5 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 text-base font-semibold transition bg-transparent">
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
