import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, DollarSign, Cog, BarChart3, Target, Zap, RefreshCw, LineChart, Settings } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { RelatedContent } from "@/components/RelatedContent";

export default function PerformanceImprovement() {
  return (
    <div className="min-h-screen bg-background font-sans text-charcoal selection:bg-primary selection:text-white">
      <SEO
        title="Performance Improvement"
        description="Unlock hidden value in your operations. We identify cost-saving opportunities, optimize working capital, and streamline processes to improve profitability."
        canonical="/capabilities/strategy-corporate-finance/performance-improvement"
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
                <span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Operational Excellence</span>
              </div>

              <h1 className="text-charcoal font-bold tracking-[-0.035em] leading-[1.0] text-[clamp(2.4rem,5.4vw,4.2rem)]">
                Performance Improvement
              </h1>

              <p className="mt-7 text-[1.1rem] md:text-[1.2rem] leading-[1.55] text-muted-foreground max-w-[60ch]">
                Unlock hidden value in your operations. We identify cost-saving opportunities, optimize working capital, and streamline processes to improve profitability.
              </p>

              <div className="mt-9 flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-7">
                <Link href="/contact">
                  <span className="inline-block bg-primary text-primary-foreground px-7 py-4 text-[13px] font-semibold uppercase tracking-[0.1em] hover:bg-primary-hover transition-colors">
                    Unlock Your Potential
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
              <h2 className="nx-h2 mb-5 sm:mb-6 md:mb-8">
                Unlock hidden value <br />
                <span className="text-primary">in your operations.</span>
              </h2>
              
              <div className="space-y-6 text-lg text-charcoal/70 leading-relaxed">
                <p>
                  Growing companies accumulate operational complexity faster than they build management capabilities to control it. Processes proliferate, costs creep upward, and working capital gets trapped in inefficient operations—all while leadership attention focuses on growth rather than efficiency.
                </p>
                <p>
                  NexDyne delivers the <strong className="text-charcoal font-semibold">Performance Optimization System</strong> that uncovers hidden value and builds sustainable improvement capabilities. We don't just identify opportunities—we implement changes and establish continuous improvement disciplines that ensure gains persist.
                </p>
              </div>

              <div className="pt-8">
                <Link href="/contact" className="inline-flex items-center text-primary hover:text-primary/90 font-semibold text-base group transition-colors">
                  Discuss your performance goals 
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
                  src="/images/capabilities/cap-team-screens.jpg" 
                  alt="Performance Analytics" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-0 left-0 p-4 sm:p-6 md:p-8">
                  <div className="text-white">
                    <div className="font-bold text-2xl mb-2">Operational Excellence</div>
                    <div className="text-white/80">From cost center to value driver.</div>
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
            <h2 className="nx-h2 text-charcoal mb-6">
              Comprehensive performance solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Systematic approaches to unlock value across your operations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-4 sm:p-6 md:p-8 lg:gap-5 sm:p-7 md:p-5 sm:p-7 md:p-10">
            {[
              {
                icon: <DollarSign className="w-7 h-7" />,
                title: "Cost Optimization & Margin Improvement",
                description: "We conduct comprehensive cost structure analysis to identify savings opportunities without compromising strategic capabilities. Through spend analytics, vendor rationalization, and process redesign, we target structural cost reductions rather than across-the-board cuts."
              },
              {
                icon: <RefreshCw className="w-7 h-7" />,
                title: "Working Capital Optimization",
                description: "We unlock cash trapped in operations through systematic working capital management. By optimizing inventory levels, accelerating receivables collection, and extending payables strategically, we improve cash conversion cycles without disrupting operations."
              },
              {
                icon: <Cog className="w-7 h-7" />,
                title: "Process Excellence & Lean Operations",
                description: "We redesign core processes to eliminate waste and improve throughput. Through value stream mapping, bottleneck analysis, and lean principles, we identify activities that consume resources without creating value, reducing cycle times and improving quality."
              },
              {
                icon: <LineChart className="w-7 h-7" />,
                title: "Organizational Effectiveness",
                description: "We enhance organizational productivity through span-of-control optimization, role clarification, and performance management. By analyzing organizational structures and resource allocation, we identify redundancies and capability gaps."
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
              <h2 className="nx-h2 mb-6">
                Measurable <span className="text-primary">impact</span>
              </h2>
              <p className="text-lg text-charcoal/70 leading-relaxed mb-5 sm:mb-6 md:mb-8">
                Our performance improvement programs deliver tangible financial results through disciplined execution and rigorous tracking.
              </p>
              
              <div className="space-y-6">
                {[
                  "8% average operating cost reduction",
                  "$6.5M working capital released in 6 months",
                  "40% reduction in order-to-ship cycle time",
                  "60% increase in throughput capacity"
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
                { metric: "8%", label: "Cost Reduction" },
                { metric: "$6.5M", label: "Capital Released" },
                { metric: "40%", label: "Faster Cycles" },
                { metric: "60%", label: "Capacity Gain" }
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
              <h2 className="nx-h2 text-charcoal">
                Performance improvement success
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
                title: "Manufacturer reduces operating costs by $3.2M annually",
                category: "Cost Optimization",
                image: "/images/industries/ops-gears.jpg",
                link: "/case-studies/manufacturing-cost-reduction"
              },
              {
                title: "Distributor releases $6.5M in working capital",
                category: "Working Capital",
                image: "/images/capabilities/cap-data-bars.jpg",
                link: "/case-studies/distribution-working-capital"
              },
              {
                title: "E-commerce company scales operations 2x with 15% headcount increase",
                category: "Process Excellence",
                image: "/images/capabilities/cap-diverse-team.jpg",
                link: "/case-studies/ecommerce-operations"
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
            <h2 className="nx-h2 text-charcoal mb-6">
              Complementary capabilities
            </h2>
            <p className="text-xl text-charcoal/60 max-w-2xl mx-auto">
              Explore other services that support your performance improvement goals.
            </p>
          </motion.div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:p-6 md:p-8">
            {[
              {
                title: "Financial Planning & Analysis",
                description: "Build robust budgeting, forecasting, and variance analysis processes.",
                link: "/capabilities/strategy-corporate-finance/fpa"
              },
              {
                title: "Business Strategy & Transformation",
                description: "Define your path to victory and restructure for scalability.",
                link: "/capabilities/strategy-corporate-finance/business-strategy"
              },
              {
                title: "Fractional CFO Services",
                description: "Access high-level financial leadership without the full-time cost.",
                link: "/capabilities/strategy-corporate-finance/cfo-services"
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
            title: "The Smart Cost Reduction Playbook",
            category: "Cost Management",
            link: "/insights/smart-cost-reduction",
            image: "/images/industries/meeting-topview.jpg"
          },
          {
            title: "Unlocking Cash: Working Capital Optimization",
            category: "Cash Flow",
            link: "/insights/working-capital-optimization",
            image: "/images/capabilities/cap-team-screens.jpg"
          },
          {
            title: "Building Lean Operations That Scale",
            category: "Process Excellence",
            link: "/insights/lean-operations-scale",
            image: "/images/industries/ops-gears.jpg"
          }
        ]}
      />

      <Footer />
    </div>
  );
}
