import { CaseStudyPDFButton } from "@/components/CaseStudyPDFButton";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import CaseStudyContactForm from "@/components/CaseStudyContactForm";
import { BackToTop } from "@/components/BackToTop";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";

export default function FPATransformation() {
  return (
    <div className="min-h-screen bg-white text-white selection:bg-primary selection:text-white">
      <SEO
        title="FP&A Transformation | Case Study | NexDyne Technologies"
        description="How we helped a mid-market manufacturer transform their financial planning and analysis function, reducing close time by 60% and improving forecast accuracy."
        canonical="/case-studies/fpa-transformation"
      />
      <Navigation />

      {/* DZ10 Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0"></div>

        <div className="container relative z-10 px-4 md:px-12">
          <Breadcrumbs />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="text-xs uppercase tracking-[0.2em] text-primary mb-6 block">
              Case Study · Manufacturing
            </span>
            <h1 className="text-5xl md:text-7xl tracking-tight leading-[1.05] mb-4">
              FP&A transformation delivers <span className="text-primary">60%</span> faster close
            </h1>
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-3xl mb-8">
              How we helped a mid-market manufacturer modernize their financial planning and analysis function, dramatically reducing close time while improving forecast accuracy and strategic insight.
            </p>

            {/* PDF Download Button */}
            <CaseStudyPDFButton
              title="FP&A transformation delivers 60% faster close"
              industry="Manufacturing"
              capability="Financial Planning & Analysis"
              summary="How we helped a mid-market manufacturer modernize their financial planning and analysis function, dramatically reducing close time while improving forecast accuracy and strategic insight."
              challenge="Each of the three facilities operated on a different ERP system—a legacy of the company's acquisition-driven growth. The finance team spent days each month manually extracting data from each system, reconciling differences in chart of accounts structures, and consolidating results into Excel spreadsheets. Errors were common and difficult to trace. The monthly close took 15 business days, meaning leadership didn't see financial results until nearly three weeks after month-end."
              solution="We implemented a Data Fabric architecture using a virtualization layer that connected disparate sources without requiring a massive physical migration. We built a unified financial dashboard that aggregated data in real-time. The system used modern cloud technologies to ensure scalability and strict access controls for compliance."
              results={[
                "60% reduction in close time",
                "40% improvement in forecast accuracy",
                "25 hours saved per month on reporting",
                "4 months to full implementation"
              ]}
              metrics={[
                { value: "60%", label: "Reduction in close time" },
                { value: "40%", label: "Improvement in forecast accuracy" },
                { value: "25 hrs", label: "Saved per month on reporting" },
                { value: "4 months", label: "Time to full implementation" }
              ]}
              clientInfo={{
                industry: "Industrial Manufacturing",
                companySize: "320 employees",
                revenue: "$85M"
              }}
              testimonial={{
                quote: "Our finance team was working incredibly hard, but we weren't getting the insights we needed to run the business. We were always looking in the rearview mirror instead of through the windshield.",
                author: "Michael Torres",
                role: "CEO, Client Company"
              }}
              variant="hero"
            />
          </motion.div>
        </div>
      </section>

      {/* DZ10 Stats Section */}
      <section className="py-16 bg-white border-t border-white/10">
        <div className="container px-4 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {[
              { metric: "60%", label: "Reduction in close time" },
              { metric: "40%", label: "Improvement in forecast accuracy" },
              { metric: "25 hrs", label: "Saved per month on reporting" },
              { metric: "4 months", label: "Time to full implementation" }
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
        <div className="container px-4 md:px-12">
          <div className="flex items-center gap-1">
            <a href="#challenge" className="px-6 py-4 text-sm font-medium hover:bg-white/5 transition-colors hover:text-primary">
              THE CHALLENGE
            </a>
            <a href="#solution" className="px-6 py-4 text-sm font-medium hover:bg-white/5 transition-colors hover:text-primary">
              THE SOLUTION
            </a>
            <a href="#impact" className="px-6 py-4 text-sm font-medium hover:bg-white/5 transition-colors hover:text-primary">
              THE IMPACT
            </a>
          </div>
        </div>
      </nav>

      {/* Company Overview */}
      <section className="py-16 bg-white text-charcoal">
        <div className="container px-4 md:px-12 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl text-charcoal mb-6">Company Overview</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-charcoal/80 leading-relaxed mb-4">
                Our client is a mid-market industrial equipment manufacturer with $85M in annual revenue and operations across three facilities. The company had grown rapidly through acquisition but was struggling with fragmented financial systems and manual processes that made it difficult to get a clear picture of performance.
              </p>
              <p className="text-charcoal/70 leading-relaxed">
                The finance team of eight was spending the majority of their time on data collection and reconciliation rather than analysis and strategic support. Leadership was frustrated by the lack of timely, accurate financial information to guide decision-making.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-12 p-8 bg-white/5">
              <div>
                <div className="text-sm font-semibold text-primary mb-2">Industry</div>
                <div className="text-charcoal font-medium">Industrial Manufacturing</div>
              </div>
              <div>
                <div className="text-sm font-semibold text-primary mb-2">Company Size</div>
                <div className="text-charcoal font-medium">320 employees</div>
              </div>
              <div>
                <div className="text-sm font-semibold text-primary mb-2">Annual Revenue</div>
                <div className="text-charcoal font-medium">$85M</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* DZ10 Challenge Section */}
      <section id="challenge" className="py-24 md:py-32 bg-primary">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs uppercase tracking-[0.2em] text-white/80 mb-6 block">
              The Challenge
            </span>
            <h2 className="text-4xl md:text-5xl text-white max-w-4xl leading-tight">
              Fragmented systems and manual processes
            </h2>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white text-charcoal">
        <div className="container px-4 md:px-12 max-w-4xl">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl text-charcoal mb-4">Multiple ERP systems with no integration</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Each of the three facilities operated on a different ERP system—a legacy of the company's acquisition-driven growth. The finance team spent days each month manually extracting data from each system, reconciling differences in chart of accounts structures, and consolidating results into Excel spreadsheets. Errors were common and difficult to trace.
              </p>
            </div>

            <div>
              <h3 className="text-xl text-charcoal mb-4">Extended close process limiting strategic value</h3>
              <p className="text-charcoal/70 leading-relaxed">
                The monthly close took 15 business days, meaning leadership didn't see financial results until nearly three weeks after month-end. By then, the information was too stale to drive meaningful action. The finance team was so consumed by the close process that they had no capacity for forward-looking analysis or strategic support.
              </p>
            </div>

            <div>
              <h3 className="text-xl text-charcoal mb-4">Forecasting based on gut feel rather than data</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Annual budgets were built through a laborious bottom-up process that took three months to complete. Once approved, they were rarely updated despite significant changes in business conditions. Quarterly forecasts were essentially educated guesses based on conversations with operations leaders rather than systematic analysis of trends and drivers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DZ10 Quote Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container px-4 md:px-12 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <blockquote className="text-3xl md:text-4xl text-primary leading-tight mb-8">
              "Our finance team was working incredibly hard, but we weren't getting the insights we needed to run the business. We were always looking in the rearview mirror instead of through the windshield."
            </blockquote>
            <div className="text-base text-white">
              <div className="font-semibold">— Michael Torres</div>
              <div className="text-white/60">CEO, Client Company</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* DZ10 Solution Section */}
      <section id="solution" className="py-24 md:py-32 bg-primary">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs uppercase tracking-[0.2em] text-white/80 mb-6 block">
              The Solution
            </span>
            <h2 className="text-4xl md:text-5xl text-white max-w-4xl leading-tight">
              Modern FP&A infrastructure and processes
            </h2>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white text-charcoal">
        <div className="container px-4 md:px-12 max-w-4xl">
          <p className="text-xl text-charcoal/80 leading-relaxed mb-12">
            We implemented a comprehensive FP&A transformation that addressed technology, processes, and capabilities. The solution was delivered in four phases over 16 weeks.
          </p>

          <div className="space-y-12">
            {/* Phase 1 */}
            <div className="flex gap-8">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary text-white flex items-center justify-center text-lg">
                  1
                </div>
              </div>
              <div>
                <h3 className="text-xl text-charcoal mb-4 flex items-center gap-3">

                  Data integration and standardization
                </h3>
                <p className="text-charcoal/70 leading-relaxed mb-4">
                  We built automated data pipelines to extract financial data from all three ERP systems nightly, mapping each to a unified chart of accounts and loading into a cloud-based data warehouse. This eliminated manual data extraction and created a single source of truth for financial reporting.
                </p>
                <ul className="space-y-2 text-charcoal/70">
                  <li className="flex items-start gap-2">

                    <span>Automated ETL from three ERP systems</span>
                  </li>
                  <li className="flex items-start gap-2">

                    <span>Unified chart of accounts with mapping rules</span>
                  </li>
                  <li className="flex items-start gap-2">

                    <span>Cloud data warehouse for centralized analytics</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="flex gap-8">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary text-white flex items-center justify-center text-lg">
                  2
                </div>
              </div>
              <div>
                <h3 className="text-xl text-charcoal mb-4 flex items-center gap-3">

                  Close process redesign
                </h3>
                <p className="text-charcoal/70 leading-relaxed mb-4">
                  We mapped the existing close process, identified bottlenecks, and redesigned workflows to eliminate waste and enable parallel processing. We implemented close management software to track tasks, deadlines, and dependencies, providing visibility into close progress and early warning of delays.
                </p>
                <ul className="space-y-2 text-charcoal/70">
                  <li className="flex items-start gap-2">

                    <span>Close calendar with task dependencies</span>
                  </li>
                  <li className="flex items-start gap-2">

                    <span>Automated reconciliation workflows</span>
                  </li>
                  <li className="flex items-start gap-2">

                    <span>Real-time close progress dashboard</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="flex gap-8">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary text-white flex items-center justify-center text-lg">
                  3
                </div>
              </div>
              <div>
                <h3 className="text-xl text-charcoal mb-4 flex items-center gap-3">

                  Driver-based planning implementation
                </h3>
                <p className="text-charcoal/70 leading-relaxed mb-4">
                  We replaced the static annual budget with a rolling forecast model built on operational drivers. The model links production volumes, pricing, and cost drivers to financial outcomes, enabling rapid scenario analysis and monthly forecast updates with minimal manual effort.
                </p>
                <ul className="space-y-2 text-charcoal/70">
                  <li className="flex items-start gap-2">

                    <span>Driver-based revenue and cost models</span>
                  </li>
                  <li className="flex items-start gap-2">

                    <span>Rolling 18-month forecast horizon</span>
                  </li>
                  <li className="flex items-start gap-2">

                    <span>Scenario planning capabilities</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Phase 4 */}
            <div className="flex gap-8">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary text-white flex items-center justify-center text-lg">
                  4
                </div>
              </div>
              <div>
                <h3 className="text-xl text-charcoal mb-4 flex items-center gap-3">

                  Executive reporting and analytics
                </h3>
                <p className="text-charcoal/70 leading-relaxed mb-4">
                  We built a suite of executive dashboards that provide real-time visibility into financial performance, operational metrics, and forecast accuracy. The dashboards are automatically refreshed daily and include drill-down capabilities for deeper analysis.
                </p>
                <ul className="space-y-2 text-charcoal/70">
                  <li className="flex items-start gap-2">

                    <span>Executive P&L dashboard with variance analysis</span>
                  </li>
                  <li className="flex items-start gap-2">

                    <span>Facility-level performance scorecards</span>
                  </li>
                  <li className="flex items-start gap-2">

                    <span>Cash flow and working capital analytics</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DZ10 Impact Section */}
      <section id="impact" className="py-24 md:py-32 bg-primary">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs uppercase tracking-[0.2em] text-white/80 mb-6 block">
              The Impact
            </span>
            <h2 className="text-4xl md:text-5xl text-white max-w-4xl leading-tight">
              Results & Impact
            </h2>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white text-charcoal">
        <div className="container px-4 md:px-12 max-w-4xl">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl text-charcoal mb-4 flex items-center gap-3">

                Dramatically faster close
              </h3>
              <p className="text-charcoal/70 leading-relaxed mb-4">
                Monthly close time dropped from 15 business days to 6 business days—a 60% reduction. Leadership now receives financial results within the first week of each month, enabling timely decision-making and course corrections.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-6 bg-white/5">
                  <div className="text-3xl text-charcoal mb-2">6 days</div>
                  <div className="text-sm text-charcoal/60">New close time (down from 15 days)</div>
                </div>
                <div className="p-6 bg-white/5">
                  <div className="text-3xl text-charcoal mb-2">60%</div>
                  <div className="text-sm text-charcoal/60">Reduction in close cycle time</div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl text-charcoal mb-4 flex items-center gap-3">

                Improved forecast accuracy
              </h3>
              <p className="text-charcoal/70 leading-relaxed mb-4">
                The driver-based forecasting model improved forecast accuracy by 40%, with quarterly revenue forecasts now within 5% of actual results. This accuracy has enabled more confident capital allocation and hiring decisions.
              </p>
              <div className="p-6 bg-white/5">
                <div className="text-3xl text-charcoal mb-2">±5%</div>
                <div className="text-sm text-charcoal/60">Quarterly forecast variance (down from ±15%)</div>
              </div>
            </div>

            <div>
              <h3 className="text-xl text-charcoal mb-4 flex items-center gap-3">

                Finance team transformed to strategic partner
              </h3>
              <p className="text-charcoal/70 leading-relaxed mb-4">
                By automating data collection and reporting, the finance team freed up 25 hours per month that was redirected toward strategic analysis, business partnering, and process improvement. The team is now seen as a valued strategic partner rather than a reporting function.
              </p>
              <div className="p-6 bg-white/5">
                <div className="text-3xl text-charcoal mb-2">25 hrs</div>
                <div className="text-sm text-charcoal/60">Monthly time savings redirected to strategic work</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DZ10 Quote Section 2 */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container px-4 md:px-12 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <blockquote className="text-3xl md:text-4xl text-primary leading-tight mb-8">
              "The transformation has been remarkable. Our finance team has gone from data gatherers to strategic advisors. We now have the insights we need to make confident decisions, and we get them when we need them—not three weeks too late."
            </blockquote>
            <div className="text-base text-white">
              <div className="font-semibold">— Michael Torres</div>
              <div className="text-white/60">CEO, Client Company</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* DZ10 Contact Form Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container px-4 md:px-12">
          <CaseStudyContactForm caseStudyTitle="FP&A Transformation" />
        </div>
      </section>

      {/* DZ10 Related Cases Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="text-xs uppercase tracking-[0.2em] text-white/60 mb-6 block">
              Related Case Studies
            </span>
            <h2 className="text-4xl md:text-5xl text-white">More success stories</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
            {[
              {
                title: "Predictive revenue models for 35% better accuracy",
                industry: "B2B SaaS",
                description: "How we helped a software company transition to driver-based forecasting",
                link: "/case-studies/predictive-revenue"
              },
              {
                title: "Automating variance analysis workflows",
                industry: "Logistics",
                description: "How we reduced close-to-report time from 15 days to 5 days",
                link: "/case-studies/variance-analysis"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={item.link} className="group block h-full p-8 bg-white/5 hover:bg-white/10 transition-colors">
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
            <Link href="/case-studies">
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-base font-semibold transition-all bg-transparent">

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
