import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Eye, TrendingUp, Gauge, PieChart, Activity, LineChart, Target, Database } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { RelatedContent } from "@/components/RelatedContent";

export default function PerformanceAnalytics() {
  return (
    <div className="min-h-screen bg-base font-sans text-white selection:bg-primary selection:text-white">
      <SEO 
        title="Performance Analytics & KPIs" 
        description="Make data-driven decisions with real-time operational intelligence. Build dashboards, KPI frameworks, and predictive analytics capabilities."
        canonical="/capabilities/operations/performance-analytics"
      />
      <Navbar />
      
      {/* DZ10 Hero Section */}
      <section className="relative min-h-[440px] md:min-h-[560px] flex items-center pt-16 sm:pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
            alt="Performance Analytics" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-base via-base/80 to-base/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-base via-transparent to-transparent" />
        </div>
        
        <div className="container px-4 sm:px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white/60 mb-4 sm:mb-6 block">
              Operations / Analytics
            </span>
            
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-white leading-[1.05] mb-5 sm:mb-3 md:mb-4">
              Performance <br />
              <span className="text-primary">Analytics</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 leading-relaxed max-w-2xl mb-10">
              Make data-driven decisions with real-time operational intelligence. Build dashboards, KPI frameworks, and predictive analytics capabilities that drive performance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link href="/contact">
                <Button className="bg-primary hover:bg-primary/90 text-white px-5 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 text-base font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/20">
                  Build Your Analytics
                </Button>
              </Link>
              <Link href="/cases">
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-5 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 text-base font-semibold transition-all duration-300 bg-transparent hover:scale-[1.02]">
                  View Case Studies
                </Button>
              </Link>
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
                The Challenge
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-5 sm:mb-6 md:mb-8">
                You can't improve what <br />
                <span className="text-primary">you can't measure.</span>
              </h2>
              
              <div className="space-y-6 text-lg text-charcoal/70 leading-relaxed">
                <p>
                  Most organizations are data-rich but insight-poor. They have mountains of operational data but lack the visibility and analytics to turn it into actionable intelligence that drives performance improvement.
                </p>
                <p>
                  NexDyne brings <strong className="text-charcoal font-semibold">performance analytics expertise</strong> that transforms how organizations measure, monitor, and improve operations. We design KPI frameworks, build dashboards, and deploy analytics that provide real-time visibility and predictive insights.
                </p>
              </div>

              <div className="pt-8 grid grid-cols-2 gap-4 sm:p-5 md:p-6">
                <div className="p-4 sm:p-5 md:p-6 bg-base/5 rounded-lg sm:rounded-xl">
                  <div className="text-4xl font-bold text-primary mb-2">100%</div>
                  <p className="text-sm text-charcoal/60 uppercase tracking-wider">Real-Time Visibility</p>
                </div>
                <div className="p-4 sm:p-5 md:p-6 bg-base/5 rounded-lg sm:rounded-xl">
                  <div className="text-4xl font-bold text-primary mb-2">50-70%</div>
                  <p className="text-sm text-charcoal/60 uppercase tracking-wider">Faster Decision-Making</p>
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
              <div className="p-4 sm:p-6 md:p-8 bg-base/5 rounded-lg sm:rounded-xl">
                <div className="text-4xl font-bold text-primary mb-2">20-30%</div>
                <div className="text-sm text-charcoal/60">Performance improvement</div>
              </div>
              <div className="p-4 sm:p-6 md:p-8 bg-base/5 rounded-lg sm:rounded-xl">
                <div className="text-4xl font-bold text-primary mb-2">80%</div>
                <div className="text-sm text-charcoal/60">Reporting time reduction</div>
              </div>
              <div className="col-span-2 relative rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-xl sm:shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80" 
                  alt="Analytics Excellence" 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-base via-transparent to-transparent opacity-60" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* DZ10 Offerings Grid */}
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
              Our Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Comprehensive analytics solutions
            </h2>
            <p className="text-xl text-white/60 max-w-2xl">
              End-to-end capabilities to build performance visibility and data-driven decision-making.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-4 sm:p-6 md:p-8 lg:gap-5 sm:p-7 md:p-5 sm:p-7 md:p-10">
            {[
              {
                icon: <Target className="w-7 h-7" />,
                title: "KPI Framework Design",
                description: "Define balanced scorecards and KPI hierarchies that cascade from strategic objectives to operational metrics across all functions."
              },
              {
                icon: <BarChart3 className="w-7 h-7" />,
                title: "Executive Dashboards",
                description: "Build real-time dashboards that provide instant visibility into performance, trends, and exceptions requiring attention."
              },
              {
                icon: <LineChart className="w-7 h-7" />,
                title: "Predictive Analytics",
                description: "Deploy machine learning models that forecast performance, identify risks, and recommend actions before issues occur."
              },
              {
                icon: <Database className="w-7 h-7" />,
                title: "Data Integration",
                description: "Connect disparate data sources to create a unified view of operational performance across systems and functions."
              },
              {
                icon: <PieChart className="w-7 h-7" />,
                title: "Root Cause Analysis",
                description: "Implement analytics that identify the drivers of performance variation and guide targeted improvement actions."
              },
              {
                icon: <Activity className="w-7 h-7" />,
                title: "Performance Management",
                description: "Design review processes, alert systems, and governance that drive accountability and continuous improvement."
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
                <div className="h-full flex flex-col">
                  <div className="mb-6 p-3 bg-white/5 w-fit rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-white/60 leading-relaxed text-sm flex-grow">
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
                We design comprehensive performance management systems that connect strategy to execution. From KPI framework design to dashboard implementation, we build analytics capabilities that provide actionable insights.
              </p>
              
              <div className="space-y-6">
                {[
                  { num: "01", title: "Define", desc: "Identify key performance questions, define metrics, and establish targets aligned with strategic objectives." },
                  { num: "02", title: "Design", desc: "Architect data models, dashboard layouts, and analytics workflows that deliver actionable insights." },
                  { num: "03", title: "Build", desc: "Develop dashboards, integrate data sources, and deploy analytics using modern BI platforms." },
                  { num: "04", title: "Embed", desc: "Train users, establish governance, and embed analytics into daily management routines." }
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
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80" 
                  alt="Analytics Methodology" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-base via-transparent to-transparent opacity-60" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* DZ10 Case Studies Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-base">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 sm:mb-12 md:mb-16 gap-4 sm:p-5 md:p-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white/60 mb-4 sm:mb-6 block">
                Our Impact
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                Analytics transformations
              </h2>
            </motion.div>
            <Link href="/cases">
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 bg-transparent transition-all duration-300 hover:scale-[1.02]">
                View all case studies
              </Button>
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-4 sm:p-6 md:p-8 lg:gap-5 sm:p-7 md:p-5 sm:p-7 md:p-10">
            {[
              {
                title: "Manufacturer builds real-time OEE dashboard across 12 plants",
                category: "Manufacturing Analytics",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
              },
              {
                title: "Retailer deploys predictive inventory analytics, cuts stockouts 40%",
                category: "Predictive Analytics",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
              },
              {
                title: "Logistics company achieves 100% delivery visibility with IoT analytics",
                category: "Real-Time Analytics",
                image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&q=80"
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
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors leading-tight">
                  {study.title}
                </h3>
                <div className="flex items-center text-white text-sm font-semibold group-hover:translate-x-2 transition-transform duration-300">
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
              The analytics partner <br />you've been looking for
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:p-6 md:p-8">
            {[
              { metric: "80+", label: "Analytics Projects" },
              { metric: "100%", label: "Real-Time Visibility" },
              { metric: "25%", label: "Average Performance Gain" },
              { metric: "15+", label: "Industries Served" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-4 sm:p-6 md:p-8 bg-base/5 rounded-lg sm:rounded-xl"
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
            title: "Building a Data-Driven Culture",
            category: "Analytics",
            link: "/insights/data-driven-culture",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
          },
          {
            title: "KPI Frameworks That Drive Results",
            category: "Performance",
            link: "/insights/kpi-frameworks",
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80"
          }
        ]}
      />

      <Footer />
    </div>
  );
}
