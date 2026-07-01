import { motion } from "framer-motion";
import { ArrowRight, Factory, TrendingUp, Wrench, BarChart3, Cpu, Settings, Gauge, Timer, Zap } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { RelatedContent } from "@/components/RelatedContent";

export default function ProductionOptimization() {
  return (
    <div className="min-h-screen bg-background font-sans text-charcoal selection:bg-primary selection:text-white">
      <SEO
        title="Production & Asset Optimization"
        description="Maximize throughput and equipment effectiveness. Deploy predictive maintenance, production scheduling, and lean manufacturing principles."
        canonical="/capabilities/operations/production-optimization"
      />
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full bg-background overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(70% 60% at 82% 14%, rgba(224,76,44,0.05) 0%, transparent 55%), radial-gradient(55% 55% at 6% 95%, rgba(111,68,163,0.045) 0%, transparent 55%)" }} />
        <div className="relative mx-auto max-w-[1400px] px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          <div className="flex flex-col justify-center min-h-[56vh] py-24 lg:py-28">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-[920px]"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="block h-[3px] w-9 bg-primary" />
                <span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Operations / Production</span>
              </div>

              <h1 className="text-charcoal font-bold tracking-[-0.035em] leading-[1.0] text-[clamp(2.4rem,5.4vw,4.2rem)]">
                Production & Asset Optimization
              </h1>

              <p className="mt-7 text-[1.1rem] md:text-[1.2rem] leading-[1.55] text-muted-foreground max-w-[60ch]">
                Maximize throughput and equipment effectiveness. Deploy predictive maintenance, production scheduling, and lean manufacturing principles to unlock hidden capacity.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <Link href="/contact">
                  <Button className="bg-primary text-primary-foreground px-7 py-4 text-[13px] font-semibold uppercase tracking-[0.1em] hover:bg-primary-hover h-auto">
                    Optimize Your Production
                  </Button>
                </Link>
                <Link href="/cases" className="text-charcoal border-b-2 border-charcoal/25 hover:border-primary pb-1 text-[13px] font-semibold uppercase tracking-[0.1em] transition-colors">
                  View Case Studies
                </Link>
              </div>
            </motion.div>
          </div>
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
                The Challenge
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-5 sm:mb-6 md:mb-8">
                Unlock hidden capacity <br />
                <span className="text-primary">in your operations.</span>
              </h2>
              
              <div className="space-y-6 text-lg text-charcoal/70 leading-relaxed">
                <p>
                  Most production operations run at 60-70% of their potential capacity. Unplanned downtime, inefficient scheduling, and suboptimal asset utilization silently drain profitability and limit growth.
                </p>
                <p>
                  NexDyne brings <strong className="text-charcoal font-semibold">world-class production expertise</strong> that transforms how organizations plan, execute, and optimize their manufacturing and asset operations. We combine lean principles with modern technology to unlock hidden capacity.
                </p>
              </div>

              <div className="pt-8 grid grid-cols-2 gap-4 sm:p-5 md:p-6">
                <div className="p-4 sm:p-5 md:p-6 bg-charcoal/5 rounded-lg sm:rounded-xl">
                  <div className="text-4xl font-bold text-primary mb-2">15-30%</div>
                  <p className="text-sm text-charcoal/60 uppercase tracking-wider">Throughput Increase</p>
                </div>
                <div className="p-4 sm:p-5 md:p-6 bg-charcoal/5 rounded-lg sm:rounded-xl">
                  <div className="text-4xl font-bold text-primary mb-2">40%+</div>
                  <p className="text-sm text-charcoal/60 uppercase tracking-wider">Downtime Reduction</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="p-4 sm:p-6 md:p-8 bg-charcoal/5 rounded-lg sm:rounded-xl">
                <div className="text-4xl font-bold text-primary mb-2">20-35%</div>
                <div className="text-sm text-charcoal/60">OEE improvement</div>
              </div>
              <div className="p-4 sm:p-6 md:p-8 bg-charcoal/5 rounded-lg sm:rounded-xl">
                <div className="text-4xl font-bold text-primary mb-2">25-40%</div>
                <div className="text-sm text-charcoal/60">Maintenance cost reduction</div>
              </div>
              <div className="col-span-2 relative rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-xl sm:shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80" 
                  alt="Production Excellence" 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Offerings Grid */}
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
              Our Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-6">
              Comprehensive production solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl">
              End-to-end capabilities to maximize the performance of your production and asset operations.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-4 sm:p-6 md:p-8 lg:gap-5 sm:p-7 md:p-5 sm:p-7 md:p-10">
            {[
              {
                icon: <Gauge className="w-7 h-7" />,
                title: "OEE Improvement",
                description: "Analyze and optimize Overall Equipment Effectiveness through systematic identification and elimination of the six big losses."
              },
              {
                icon: <Wrench className="w-7 h-7" />,
                title: "Predictive Maintenance",
                description: "Deploy condition monitoring and predictive analytics to prevent unplanned downtime and optimize maintenance schedules."
              },
              {
                icon: <Timer className="w-7 h-7" />,
                title: "Production Scheduling",
                description: "Implement advanced planning and scheduling systems that optimize throughput, minimize changeovers, and meet customer demands."
              },
              {
                icon: <Factory className="w-7 h-7" />,
                title: "Lean Manufacturing",
                description: "Apply lean principles—value stream mapping, 5S, SMED, TPM—to eliminate waste and build a culture of continuous improvement."
              },
              {
                icon: <Cpu className="w-7 h-7" />,
                title: "Digital Manufacturing",
                description: "Leverage IoT, digital twins, and real-time analytics to create visibility and control across your production operations."
              },
              {
                icon: <BarChart3 className="w-7 h-7" />,
                title: "Capacity Planning",
                description: "Optimize capacity utilization through demand forecasting, bottleneck analysis, and strategic investment planning."
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
                <div className="h-full flex flex-col bg-white border border-border p-6 rounded-lg sm:rounded-xl">
                  <div className="mb-6 p-3 bg-primary/10 w-fit rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
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

      {/* DZ10 Methodology Section */}
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
                Our Approach
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                The NexDyne <span className="text-primary">Methodology</span>
              </h2>
              <p className="text-lg text-charcoal/70 leading-relaxed mb-5 sm:mb-6 md:mb-8">
                We take a data-driven approach to production optimization, combining deep operational expertise with modern analytics to identify and capture improvement opportunities.
              </p>
              
              <div className="space-y-6">
                {[
                  { num: "01", title: "Diagnose", desc: "Analyze production data, observe operations, and identify the root causes of capacity loss." },
                  { num: "02", title: "Design", desc: "Develop tailored improvement programs targeting the highest-impact opportunities." },
                  { num: "03", title: "Implement", desc: "Execute improvements with hands-on support, training, and change management." },
                  { num: "04", title: "Sustain", desc: "Build management systems and capabilities to maintain gains and drive continuous improvement." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="text-2xl font-bold text-primary">{item.num}</div>
                    <div>
                      <h3 className="text-lg font-bold text-charcoal mb-1">{item.title}</h3>
                      <p className="text-charcoal/60 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
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
                  src="https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&q=80" 
                  alt="Production Methodology" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
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
                Production transformations
              </h2>
            </motion.div>
            <Link href="/cases">
              <Button variant="outline" className="border-border text-charcoal hover:bg-background bg-transparent transition-all duration-300 hover:scale-[1.02]">
                View all case studies
              </Button>
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-4 sm:p-6 md:p-8 lg:gap-5 sm:p-7 md:p-5 sm:p-7 md:p-10">
            {[
              {
                title: "Predictive maintenance increases uptime by 40%",
                category: "Asset Management",
                image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&q=80"
              },
              {
                title: "Lean transformation unlocks 25% capacity increase",
                category: "Lean Manufacturing",
                image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"
              },
              {
                title: "Digital twin reduces changeover time by 50%",
                category: "Digital Manufacturing",
                image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80"
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DZ10 Why NexDyne Section */}
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
              Why NexDyne
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-6">
              The production partner <br />you've been looking for
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:p-6 md:p-8">
            {[
              { metric: "75+", label: "Production Projects" },
              { metric: "25%", label: "Average OEE Improvement" },
              { metric: "$150M+", label: "Capacity Value Unlocked" },
              { metric: "15+", label: "Industries Served" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-4 sm:p-6 md:p-8 bg-charcoal/5 rounded-lg sm:rounded-xl"
              >
                <div className="text-5xl font-bold text-primary mb-2">{item.metric}</div>
                <p className="text-sm text-charcoal/60 uppercase tracking-wider">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <RelatedContent 
        items={[
          {
            title: "The Complete Guide to Process Mining",
            category: "Operations",
            link: "/insights/complete-guide-process-mining",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
          },
          {
            title: "IoT for Predictive Maintenance",
            category: "Technology",
            link: "/insights/iot-predictive-maintenance",
            image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"
          },
          {
            title: "Digital Twins in Manufacturing",
            category: "Innovation",
            link: "/insights/digital-twins-manufacturing",
            image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&q=80"
          }
        ]}
      />

      <Footer />
    </div>
  );
}
