import { motion } from "framer-motion";
import { ArrowRight, BarChart3, TrendingUp, PieChart, LineChart, Target, Layers, Database, Zap } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { RelatedContent } from "@/components/RelatedContent";

export default function FinancialPlanningAnalysis() {
  return (
    <div className="min-h-screen bg-background font-sans text-charcoal selection:bg-primary selection:text-white">
      <SEO 
        title="Financial Planning & Analysis (FP&A)" 
        description="Turn data into decisions. We build robust budgeting, forecasting, and variance analysis processes to give you clear visibility into your business performance."
        canonical="/capabilities/strategy-corporate-finance/fpa"
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative w-full bg-background overflow-hidden pt-16 sm:pt-20">
        <div aria-hidden className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(70% 60% at 82% 14%, rgba(224,76,44,0.05) 0%, transparent 55%), radial-gradient(55% 55% at 6% 95%, rgba(111,68,163,0.045) 0%, transparent 55%)" }} />
        <div className="relative mx-auto max-w-[1400px] px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center min-h-[56vh] py-24 lg:py-28"
          >
            <div className="max-w-[920px]">
              <Link href="/capabilities/strategy-corporate-finance" className="inline-flex items-center text-muted-foreground hover:text-charcoal text-sm mb-6 transition-colors">
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 mr-2 rotate-180" />
                Strategy & Business Finance
              </Link>

              <div className="flex items-center gap-3 mb-6">
                <span className="block h-[3px] w-9 bg-primary" />
                <span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Financial Intelligence</span>
              </div>

              <h1 className="text-charcoal tracking-[-0.035em] leading-[1.0] text-[clamp(2.4rem,5.4vw,4.2rem)]">
                Financial Planning & Analysis
              </h1>

              <p className="mt-7 text-[1.1rem] md:text-[1.2rem] leading-[1.55] text-muted-foreground max-w-[60ch]">
                Turn data into decisions. We build robust budgeting, forecasting, and variance analysis processes to give you clear visibility into your business performance.
              </p>

              <div className="mt-9 flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-7">
                <Link href="/contact">
                  <span className="inline-block bg-primary text-primary-foreground px-7 py-4 text-[13px] font-semibold uppercase tracking-[0.1em] hover:bg-primary-hover transition-colors">
                    Transform Your FP&A
                  </span>
                </Link>
                <Link href="/cases">
                  <span className="inline-block text-charcoal text-[13px] font-semibold uppercase tracking-[0.1em] border-b-2 border-charcoal/25 hover:border-primary pb-1 transition-colors">
                    View Case Studies
                  </span>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* DZ10 Philosophy Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-white text-charcoal">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-8 sm:gap-6 sm:p-6 sm:p-8 md:p-12 lg:gap-8 sm:gap-6 sm:p-8 md:p-12 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-primary mb-4 sm:mb-6 block">
                Our Philosophy
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-5 sm:mb-6 md:mb-8">
                Transform financial data <br />
                <span className="text-primary">into strategic intelligence.</span>
              </h2>
              
              <div className="space-y-6 text-lg text-charcoal/70 leading-relaxed">
                <p>
                  Most growing companies are drowning in data but starving for insight. Financial information is scattered across multiple systems, forecasts are built on guesswork, and variance analysis happens too late to be actionable.
                </p>
                <p>
                  NexDyne delivers the <strong className="text-charcoal font-semibold">Analytical Infrastructure</strong> that transforms raw financial data into strategic intelligence. We build integrated FP&A systems that connect your budgeting, forecasting, and reporting into a single source of truth.
                </p>
              </div>

              <div className="pt-8">
                <Link href="/contact" className="inline-flex items-center text-primary hover:text-primary/90 font-semibold text-base group transition-colors">
                  Discuss your FP&A needs 
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-xl sm:shadow-2xl">
                <img 
                  src="/images/industries/fin-monitors.jpg" 
                  alt="Financial Analytics Dashboard" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-0 left-0 p-4 sm:p-6 md:p-8">
                  <div className="text-white">
                    <div className="font-bold text-2xl mb-2">Data-Driven Decisions</div>
                    <div className="text-white/80">From spreadsheet chaos to strategic clarity.</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* DZ10 Offerings Grid */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 sm:mb-12 md:mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-primary mb-4 sm:mb-6 block">
              Core Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-6">
              Comprehensive FP&A solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Build the analytical foundation that supports confident decision-making at every level.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-4 sm:p-6 md:p-8 lg:gap-5 sm:p-7 md:p-5 sm:p-7 md:p-10">
            {[
              {
                icon: <TrendingUp className="w-7 h-7" />,
                title: "Dynamic Budgeting & Forecasting",
                description: "We replace static annual budgets with rolling forecasts that adapt to changing business conditions. By implementing driver-based models and scenario planning frameworks, we enable you to stress-test assumptions and model multiple futures with precision."
              },
              {
                icon: <BarChart3 className="w-7 h-7" />,
                title: "Variance Analysis & KPI Dashboards",
                description: "We design real-time variance analysis systems that surface deviations before they become problems. By establishing clear KPI hierarchies and automated alerting, we ensure that your leadership team focuses on exceptions that matter."
              },
              {
                icon: <PieChart className="w-7 h-7" />,
                title: "Management Reporting & Storytelling",
                description: "We professionalize your management reporting to communicate financial performance with clarity and impact. Our team designs narrative-driven board packs that contextualize numbers within strategic priorities."
              },
              {
                icon: <Database className="w-7 h-7" />,
                title: "Data Integration & Automation",
                description: "We eliminate manual data consolidation by integrating your ERP, CRM, and operational systems into a unified analytical platform. Through automated data pipelines and validation rules, we ensure timely and accurate reporting."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="h-full flex flex-col p-4 sm:p-6 md:p-8 bg-white rounded-lg sm:rounded-xl border border-border hover:border-primary/50 transition duration-300">
                  <div className="mb-6 p-3 bg-charcoal/5 w-fit rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition duration-300">
                    {item.icon}
                  </div>

                  <h3 className="text-xl font-bold text-charcoal mb-4 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed text-sm flex-grow">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DZ10 Results Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-white text-charcoal">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 sm:gap-6 sm:p-6 sm:p-8 md:p-12 lg:gap-8 sm:gap-6 sm:p-8 md:p-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-primary mb-4 sm:mb-6 block">
                Proven Results
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Measurable <span className="text-primary">impact</span>
              </h2>
              <p className="text-lg text-charcoal/70 leading-relaxed mb-5 sm:mb-6 md:mb-8">
                Our FP&A transformations deliver tangible improvements in forecast accuracy, reporting speed, and decision quality.
              </p>
              
              <div className="space-y-6">
                {[
                  "35% improvement in forecast accuracy through driver-based models",
                  "60% reduction in close-to-report cycle time",
                  "10 days to 5 days monthly variance analysis turnaround",
                  "40-page reports transformed into 10-metric dashboards"
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <p className="text-charcoal/70">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { metric: "35%", label: "Forecast Accuracy Gain" },
                { metric: "60%", label: "Faster Reporting" },
                { metric: "5 Days", label: "Monthly Close Cycle" },
                { metric: "100+", label: "FP&A Transformations" }
              ].map((item, index) => (
                <motion.div 
                  key={item.label} 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="p-4 sm:p-5 md:p-6 bg-charcoal/5 rounded-lg sm:rounded-xl"
                >
                  <div className="text-3xl font-bold text-primary mb-2">{item.metric}</div>
                  <p className="text-sm text-charcoal/60 uppercase tracking-wider">{item.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* DZ10 Case Studies Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 sm:mb-12 md:mb-16 gap-4 sm:p-5 md:p-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-primary mb-4 sm:mb-6 block">
                Our Impact
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal">
                FP&A transformation success
              </h2>
            </motion.div>
            <Link href="/cases">
              <Button variant="outline" className="border-border text-charcoal hover:bg-charcoal/5 bg-transparent transition duration-300 hover:scale-[1.02]">
                View all case studies
              </Button>
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-4 sm:p-6 md:p-8 lg:gap-5 sm:p-7 md:p-5 sm:p-7 md:p-10">
            {[
              {
                title: "FP&A transformation reduces close cycle by 60%",
                category: "Professional Services",
                image: "/images/industries/fin-trader.jpg",
                link: "/case-studies/fpa-transformation"
              },
              {
                title: "Predictive revenue model improves forecast accuracy by 35%",
                category: "B2B SaaS",
                image: "/images/industries/fin-handshake-city.jpg",
                link: "/cases/predictive-revenue"
              },
              {
                title: "Automated variance analysis cuts reporting time in half",
                category: "Logistics",
                image: "/images/industries/advisor-charts.jpg",
                link: "/cases/variance-analysis"
              }
            ].map((study, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <Link href={study.link}>
                  <div className="relative overflow-hidden rounded-lg sm:rounded-xl aspect-[4/3] mb-6">
                    <img 
                      src={study.image} 
                      alt={study.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                  <div className="text-primary text-xs font-bold uppercase tracking-[0.15em] mb-3">{study.category}</div>
                  <h3 className="text-xl font-bold text-charcoal mb-4 group-hover:text-primary transition-colors leading-tight">
                    {study.title}
                  </h3>
                  <div className="flex items-center text-charcoal text-sm font-semibold group-hover:translate-x-2 transition-transform duration-300">
                    Read case study <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-white text-charcoal">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-primary mb-4 sm:mb-6 block">
              Related Services
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-6">
              Complementary capabilities
            </h2>
            <p className="text-xl text-charcoal/60 max-w-2xl mx-auto">
              Explore other services that enhance your financial operations.
            </p>
          </motion.div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:p-6 md:p-8">
            {[
              {
                title: "Fractional CFO Services",
                description: "Access high-level financial leadership without the full-time cost.",
                link: "/capabilities/strategy-corporate-finance/cfo-services"
              },
              {
                title: "Capital Raising & Investment",
                description: "Prepare for your next funding round with confidence.",
                link: "/capabilities/strategy-corporate-finance/capital-raising"
              },
              {
                title: "Performance Improvement",
                description: "Unlock hidden value through cost optimization and process streamlining.",
                link: "/capabilities/strategy-corporate-finance/performance-improvement"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={service.link} className="group block h-full">
                  <div className="h-full p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl bg-background border border-border hover:bg-charcoal transition duration-500 hover:scale-[1.02] hover:shadow-xl">
                    <h3 className="text-xl font-bold text-charcoal mb-4 group-hover:text-white transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm mb-6 group-hover:text-white/70 transition-colors">
                      {service.description}
                    </p>
                    <div className="flex items-center text-primary text-sm font-semibold group-hover:text-white group-hover:translate-x-2 transition duration-300">
                      Learn more <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <RelatedContent 
        items={[
          {
            title: "Why Rolling Forecasts Outperform Annual Budgets",
            category: "FP&A",
            link: "/insights/rolling-forecasts",
            image: "/images/industries/fin-monitors.jpg"
          },
          {
            title: "Building KPI Dashboards That Drive Action",
            category: "Analytics",
            link: "/insights/kpi-dashboards",
            image: "/images/industries/fin-trader.jpg"
          },
          {
            title: "The CFO's Guide to Data Integration",
            category: "Technology",
            link: "/insights/cfo-data-integration",
            image: "/images/industries/fin-handshake-city.jpg"
          }
        ]}
      />

      <Footer />
    </div>
  );
}
