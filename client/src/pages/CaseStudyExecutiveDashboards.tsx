import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, ArrowLeft, Eye, BarChart3, Users, TrendingUp, Target, Download } from 'lucide-react';
import { CaseStudyPDFButton } from "@/components/CaseStudyPDFButton";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import CaseStudyContactForm from "@/components/CaseStudyContactForm";
import { BackToTop } from "@/components/BackToTop";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";

export default function CaseStudyExecutiveDashboards() {
  return (
    <div className="min-h-screen bg-background text-charcoal selection:bg-primary selection:text-white">
      <SEO 
        title="Executive Dashboards | Case Study | NexDyne Technologies" 
        description="How we transformed 40-page Excel workbooks into interactive dashboards that surfaced the top 10 metrics that mattered—improving board meeting efficiency by 60%."
        canonical="/cases/executive-dashboards"
      />
      <Navigation />
      
      {/* Neutral Hero Section */}
      <section className="relative w-full bg-background overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(70% 60% at 82% 14%, rgba(224,76,44,0.05) 0%, transparent 55%), radial-gradient(55% 55% at 6% 95%, rgba(111,68,163,0.045) 0%, transparent 55%)" }} />
        <div className="relative mx-auto max-w-[1400px] px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          <div className="pt-28">
            <Breadcrumbs />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center min-h-[50vh] py-16 lg:py-20"
          >
            <div className="max-w-[920px]">
              <div className="flex items-center gap-3 mb-6">
                <span className="block h-[3px] w-9 bg-primary" />
                <span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Case Study · Professional Services
                </span>
              </div>
              <h1 className="text-charcoal font-bold tracking-[-0.035em] leading-[1.05] text-[clamp(2.2rem,4.8vw,3.8rem)]">
                Executive dashboards for clarity
              </h1>
              <p className="mt-7 text-[1.1rem] md:text-[1.2rem] leading-[1.55] text-muted-foreground max-w-[62ch]">
                How we transformed 40-page Excel workbooks into interactive dashboards that surfaced the top 10 metrics that mattered—improving board meeting efficiency by 60% and enabling faster, more confident decision-making.
              </p>

              <div className="mt-8">
            {/* PDF Download Button */}
            <CaseStudyPDFButton
              title="Executive dashboards for clarity"
              industry="Professional Services"
              summary="How we transformed 40-page Excel workbooks into interactive dashboards that surfaced the top 10 metrics that mattered—improving board meeting efficiency by 60% and enabling faster, more confident decision-making."
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
      <section className="py-12 sm:py-16 lg:py-20 bg-charcoal text-white border-t-2 border-primary">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
            {[
              { metric: "60%", label: "Faster board meetings" },
              { metric: "10 metrics", label: "Down from 150+ tracked" },
              { metric: "100%", label: "Executive adoption rate" },
              { metric: "6 weeks", label: "Design and deployment time" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border-l-2 border-primary pl-8"
              >
                <div className="text-5xl font-bold text-white mb-2">{stat.metric}</div>
                <div className="text-base text-white/70">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DZ10 Sticky Navigation */}
      <nav className="sticky top-20 bg-background text-charcoal z-40 border-y border-border">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="flex items-center gap-1">
            <a href="#challenge" className="px-4 sm:px-5 md:px-6 py-3 sm:py-4 text-sm font-medium hover:bg-charcoal/5 transition-colors hover:text-primary">
              THE CHALLENGE
            </a>
            <a href="#solution" className="px-4 sm:px-5 md:px-6 py-3 sm:py-4 text-sm font-medium hover:bg-charcoal/5 transition-colors hover:text-primary">
              THE SOLUTION
            </a>
            <a href="#impact" className="px-4 sm:px-5 md:px-6 py-3 sm:py-4 text-sm font-medium hover:bg-charcoal/5 transition-colors hover:text-primary">
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
                Our client is a professional services firm specializing in management consulting and organizational transformation. With 150 consultants across 8 offices and $32M in annual revenue, they serve Fortune 500 clients in financial services, healthcare, and technology sectors. The firm operates on a project-based model with complex resource allocation, utilization tracking, and profitability analysis requirements.
              </p>
              <p className="text-charcoal/70 leading-relaxed">
                As a partnership, the firm's board consists of senior partners who meet monthly to review performance and make strategic decisions about hiring, compensation, and business development. However, the existing reporting process was overwhelming board members with data rather than insights, leading to long, unfocused meetings and delayed decision-making.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12 p-4 sm:p-6 md:p-8 bg-charcoal/5 rounded-lg sm:rounded-xl">
              <div>
                <div className="text-sm font-semibold text-primary mb-2">Industry</div>
                <div className="text-charcoal font-medium">Professional Services</div>
              </div>
              <div>
                <div className="text-sm font-semibold text-primary mb-2">Company Size</div>
                <div className="text-charcoal font-medium">150 consultants</div>
              </div>
              <div>
                <div className="text-sm font-semibold text-primary mb-2">Annual Revenue</div>
                <div className="text-charcoal font-medium">$32M</div>
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
              Information overload paralyzed decision-making
            </h2>
          </motion.div>
        </div>
      </section>

      <section className="py-10 sm:py-12 lg:py-16 bg-white text-charcoal">
        <div className="container px-4 sm:px-6 md:px-12 max-w-4xl">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-charcoal mb-4">Information overload paralyzed decision-making</h3>
              <p className="text-charcoal/70 leading-relaxed">
                The monthly board package consisted of 40+ pages of Excel tables showing revenue, expenses, utilization, pipeline, and dozens of other metrics broken down by office, practice area, and consultant level. Board members received this package 48 hours before the meeting and were expected to come prepared with questions and recommendations. In reality, most partners skimmed the materials and arrived unprepared, leading to meetings that ran 3-4 hours as everyone tried to make sense of the data in real-time.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-charcoal mb-4">No clear narrative or priorities</h3>
              <p className="text-charcoal/70 leading-relaxed">
                The reports presented data without context or interpretation. There was no executive summary highlighting what mattered most, no clear indication of whether performance was good or bad, and no guidance on what actions should be taken. Each partner focused on different metrics based on their own interests and biases, leading to fragmented discussions that rarely resulted in clear decisions or action items.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-charcoal mb-4">Static reports couldn't answer follow-up questions</h3>
              <p className="text-charcoal/70 leading-relaxed">
                When board members had questions about the data—"What's driving the utilization decline in the Chicago office?" or "How does our pipeline compare to this time last year?"—the CFO had to promise to follow up after the meeting. This meant decisions were deferred until the next month, and by then the context had changed. The inability to drill down into details during the meeting created frustration and slowed the pace of decision-making.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DZ10 Quote Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-background border-t border-border">
        <div className="container px-4 sm:px-6 md:px-12 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="border-l-2 border-primary pl-8"
          >
            <blockquote className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-charcoal leading-tight mb-5 sm:mb-6 md:mb-8">
              "Our board meetings had become data review sessions instead of strategic discussions. We were drowning in metrics but starving for insights. We needed a way to cut through the noise and focus on what really mattered."
            </blockquote>
            <div className="text-base text-charcoal">
              <div className="font-semibold">— Jennifer Park</div>
              <div className="text-muted-foreground">Managing Partner, Client Company</div>
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
              Interactive dashboards that surface what matters
            </h2>
          </motion.div>
        </div>
      </section>

      <section className="py-10 sm:py-12 lg:py-16 bg-white text-charcoal">
        <div className="container px-4 sm:px-6 md:px-12 max-w-4xl">
          <p className="text-xl text-charcoal/80 leading-relaxed mb-6 sm:mb-8 md:mb-12">
            We redesigned the management reporting system from the ground up, starting with a collaborative process to identify the metrics that truly drove business decisions. We then built interactive dashboards that presented these key metrics with context, trends, and drill-down capabilities. The solution was delivered in three phases over 6 weeks.
          </p>

          <div className="space-y-12">
            {/* Phase 1 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                  1
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center gap-3">
                  <Target className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  Metric prioritization and KPI framework design
                </h3>
                <p className="text-charcoal/70 leading-relaxed mb-4">
                  We facilitated workshops with the board and leadership team to identify the 10 most important metrics for running the business. We used a framework that categorized metrics into four areas: financial performance, operational efficiency, client satisfaction, and people development. This process forced difficult conversations about what really mattered and created alignment around priorities.
                </p>
                <ul className="space-y-2 text-charcoal/70">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Conducted stakeholder interviews with all board members</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Facilitated metric prioritization workshop using voting and discussion</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Defined clear targets and thresholds for each key metric</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Documented metric definitions and calculation methodologies</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                  2
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center gap-3">
                  <Eye className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  Dashboard design and visualization development
                </h3>
                <p className="text-charcoal/70 leading-relaxed mb-4">
                  We designed a three-page dashboard structure: an executive summary showing the top 10 metrics with status indicators and trends, a financial deep-dive with revenue and profitability analysis, and an operational deep-dive with utilization and pipeline metrics. Each metric was presented with context (target, prior period, trend) and visual indicators (green/yellow/red) to instantly communicate performance.
                </p>
                <ul className="space-y-2 text-charcoal/70">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Created executive summary with top 10 metrics and status indicators</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Designed financial and operational deep-dive pages</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Implemented interactive drill-down capabilities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Added trend charts and variance analysis visualizations</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                  3
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center gap-3">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  Training and meeting process redesign
                </h3>
                <p className="text-charcoal/70 leading-relaxed mb-4">
                  We trained board members on how to use the interactive dashboards and redesigned the monthly meeting agenda to take advantage of the new format. Instead of reviewing data, meetings now started with the CFO highlighting the 2-3 most important issues revealed by the metrics, followed by focused discussion and decision-making. Board members could access the dashboards anytime between meetings to stay informed.
                </p>
                <ul className="space-y-2 text-charcoal/70">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Conducted hands-on training sessions for all board members</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Redesigned meeting agenda to focus on issues, not data review</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Enabled 24/7 dashboard access for self-service analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Created quick reference guide for common questions</span>
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
                <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                Dramatically more efficient board meetings
              </h3>
              <p className="text-charcoal/70 leading-relaxed mb-4">
                Board meetings were cut from 3-4 hours to 90 minutes—a 60% reduction—while covering more ground and making better decisions. Instead of spending the first two hours reviewing data, meetings now start with a 10-minute dashboard walkthrough highlighting key issues, followed by 80 minutes of strategic discussion and decision-making. Board members report feeling more informed and engaged than ever before.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 sm:p-5 md:p-6 bg-charcoal/5 rounded-lg sm:rounded-xl">
                  <div className="text-3xl font-bold text-charcoal mb-2">90 min</div>
                  <div className="text-sm text-charcoal/60">Average meeting length (down from 3-4 hours)</div>
                </div>
                <div className="p-4 sm:p-5 md:p-6 bg-charcoal/5 rounded-lg sm:rounded-xl">
                  <div className="text-3xl font-bold text-charcoal mb-2">60%</div>
                  <div className="text-sm text-charcoal/60">Improvement in meeting efficiency</div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center gap-3">
                <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                Faster, more confident decision-making
              </h3>
              <p className="text-charcoal/70 leading-relaxed mb-4">
                The ability to drill down into data during meetings meant that questions could be answered immediately rather than deferred to the next month. This accelerated decision-making significantly—the firm reduced the average time from issue identification to decision from 60 days to 15 days. Board members also reported feeling more confident in their decisions because they had the context and detail they needed at their fingertips.
              </p>
              <div className="p-4 sm:p-5 md:p-6 bg-charcoal/5 rounded-lg sm:rounded-xl">
                <div className="text-3xl font-bold text-charcoal mb-2">75%</div>
                <div className="text-sm text-charcoal/60">Faster issue-to-decision cycle (15 days vs. 60 days)</div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center gap-3">
                <Eye className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                Improved transparency and accountability
              </h3>
              <p className="text-charcoal/70 leading-relaxed mb-4">
                The clear, objective metrics and visual status indicators eliminated ambiguity about performance. Office leaders and practice heads could no longer hide behind vague explanations or cherry-picked data—the dashboards told the truth. This transparency improved accountability and drove better performance across the firm. Within six months, overall consultant utilization increased by 8 percentage points as underperforming offices took action to improve.
              </p>
              <div className="p-4 sm:p-5 md:p-6 bg-charcoal/5 rounded-lg sm:rounded-xl">
                <div className="text-3xl font-bold text-charcoal mb-2">8 pts</div>
                <div className="text-sm text-charcoal/60">Increase in average consultant utilization rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DZ10 Quote Section 2 */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-background border-t border-border">
        <div className="container px-4 sm:px-6 md:px-12 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="border-l-2 border-primary pl-8"
          >
            <blockquote className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-charcoal leading-tight mb-5 sm:mb-6 md:mb-8">
              "This has completely changed how we run the business. Our board meetings are now strategic sessions instead of data review marathons. We're making better decisions faster, and everyone is aligned around what matters most. It's been transformational."
            </blockquote>
            <div className="text-base text-charcoal">
              <div className="font-semibold">— Jennifer Park</div>
              <div className="text-muted-foreground">Managing Partner, Client Company</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* DZ10 Contact Form Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 sm:px-6 md:px-12">
          <CaseStudyContactForm caseStudyTitle="Executive Dashboards" />
        </div>
      </section>

      {/* DZ10 Related Cases Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-background">
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

          <div className="grid md:grid-cols-2 gap-4 max-w-5xl">
            {[
              {
                title: "Building predictive revenue models",
                industry: "B2B SaaS",
                description: "How we improved forecast accuracy by 35% through driver-based modeling",
                image: "/case-analytics-dashboard.2080e92b.png",
                link: "/cases/predictive-revenue"
              },
              {
                title: "Automating variance analysis workflows",
                industry: "Logistics",
                description: "How we reduced close-to-report time from 15 days to 5 days",
                image: "/case-data-dashboard.391db27a.jpg",
                link: "/cases/variance-analysis"
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
                  <div className="aspect-[16/9] overflow-hidden mb-6 rounded-lg sm:rounded-xl relative bg-charcoal/5">
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
                  <span className="text-primary text-sm font-semibold flex items-center gap-1 mt-4 group-hover:gap-2 transition-all">
                    Read case study <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link href="/cases">
              <Button variant="outline" className="border-charcoal/25 text-charcoal hover:border-primary hover:bg-charcoal/5 px-5 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 text-base font-semibold transition-all bg-transparent">
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
