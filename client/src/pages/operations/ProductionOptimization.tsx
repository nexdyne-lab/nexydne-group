import { motion } from "framer-motion";
import { ArrowRight, Layers, BarChart3, Users } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import BainHoverCard from "@/components/BainHoverCard";
import Navbar from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";

export default function ProductionOptimization() {
  return (
    <div className="min-h-screen bg-white text-[#051C2C] selection:bg-[#0077B5] selection:text-white">
      <SEO 
        title="Production & Asset Optimization" 
        description="Maximize throughput and equipment effectiveness. Deploy predictive maintenance, production scheduling, and lean manufacturing principles."
        canonical="/capabilities/operations/production-optimization"
      />
      <Navbar />
      
      {/* Hero Section - Dark Background */}
      <section className="relative min-h-[70vh] flex items-center pt-20 bg-black">
        <div className="container px-4 md:px-12 grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link href="/capabilities/operations" className="inline-flex items-center text-white/60 hover:text-white mb-6 text-sm transition-colors">
              <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
              Operations
            </Link>
            
            <h1 className="text-5xl md:text-7xl eb-garamond font-bold tracking-tight text-white leading-[1.05] mb-4">
              Production & Asset Optimization
            </h1>
            
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-2xl mb-10">
              Maximize throughput and equipment effectiveness. Deploy predictive maintenance, production scheduling, and lean manufacturing principles.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button className="bg-white hover:bg-gray-200 text-black px-8 py-6 text-base font-semibold transition-all">
                  Schedule a Consultation
                </Button>
              </Link>
              <Link href="/capabilities/operations/case-studies">
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-base font-semibold transition-all bg-transparent">
                  View Case Studies
                </Button>
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:block"
          >
            <img 
              src="https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&q=80" 
              alt="Production Optimization" 
              className="w-full h-auto rounded-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Our Experience & Impact - Bain Style */}
      <section className="py-20 bg-white border-b border-gray-200">
        <div className="container px-4 md:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl eb-garamond font-bold text-[#051C2C] mb-12"
          >
            Our Experience & Impact
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { metric: "80+", label: "production optimization programs across manufacturing sectors" },
              { metric: "15-30%", label: "typical improvement in Overall Equipment Effectiveness (OEE)" },
              { metric: "25-40%", label: "reduction in unplanned downtime through predictive maintenance" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`${index > 0 ? 'border-l border-gray-200 pl-8' : ''}`}
              >
                <div className="text-5xl md:text-6xl font-bold text-[#051C2C] mb-4">{item.metric}</div>
                <p className="text-lg text-[#051C2C]/60">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Thought Leadership Paragraphs */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-12">
          <div className="max-w-4xl mx-auto space-y-8 text-xl text-[#051C2C]/80 leading-relaxed">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Most production facilities operate well below their theoretical capacity. Unplanned downtime, changeover losses, quality defects, and scheduling inefficiencies combine to reduce Overall Equipment Effectiveness (OEE) to 60-70%—leaving significant value on the table. The gap between current and potential performance represents millions in unrealized revenue.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              We help you unlock that hidden capacity. Our production optimization services combine lean manufacturing principles with advanced analytics and automation to maximize throughput, minimize waste, and extend asset life. We don't just optimize individual machines—we optimize the entire production system.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              The most successful production transformations share a common trait: they combine operational excellence with digital enablement. Lean principles provide the foundation, while IoT sensors, predictive analytics, and AI amplify the impact—creating a virtuous cycle of continuous improvement.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              The result? More output from existing assets, lower unit costs, and the flexibility to respond to changing demand. We help you build production capabilities that deliver sustainable competitive advantage—not just one-time improvements.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Our Approach Section - 3 Column Layout */}
      <section className="py-24 bg-[#0a1628] text-white">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0077B5] mb-4 block">
              Our Approach
            </span>
            <h2 className="text-4xl md:text-5xl eb-garamond font-bold">
              Unlocking hidden production capacity
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Diagnose the losses",
                description: "We analyze your production data to identify the biggest sources of OEE loss—availability, performance, and quality. We quantify the opportunity and prioritize improvements by impact and feasibility."
              },
              {
                title: "Optimize the system",
                description: "We implement lean manufacturing principles and digital solutions to address root causes. We optimize scheduling, reduce changeovers, implement predictive maintenance, and eliminate quality defects."
              },
              {
                title: "Sustain the gains",
                description: "We build internal capabilities to maintain and extend improvements. We establish performance management systems, train operators, and create a culture of continuous improvement."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-white/70 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link href="/contact">
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-4 bg-transparent">
                Get in touch
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* How We Can Help - Capability Cards */}
      <section className="py-24 bg-[#f8f8f7]">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0077B5] mb-6 block">
              How We Can Help
            </span>
            <h2 className="text-4xl md:text-5xl eb-garamond font-bold text-[#051C2C] mb-6">
              Our Production Optimization Capabilities
            </h2>
            <p className="text-xl text-[#051C2C]/60 max-w-2xl">
              Comprehensive production excellence from assessment through implementation and continuous improvement.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "OEE Improvement",
                description: "Systematic approach to improving Overall Equipment Effectiveness. Address availability, performance, and quality losses with data-driven interventions."
              },
              {
                title: "Predictive Maintenance",
                description: "Move from reactive to predictive maintenance. Deploy sensors, analytics, and AI to anticipate failures before they occur and optimize maintenance schedules."
              },
              {
                title: "Production Scheduling",
                description: "Optimize production planning and scheduling. Balance demand, capacity, and constraints for maximum efficiency and customer service."
              },
              {
                title: "Lean Manufacturing",
                description: "Apply lean principles to eliminate waste. Value stream mapping, 5S, TPM, and continuous improvement programs that engage frontline teams."
              },
              {
                title: "Changeover Optimization",
                description: "Reduce changeover time with SMED methodology. Increase flexibility while maintaining efficiency and reducing batch sizes."
              },
              {
                title: "Asset Lifecycle Management",
                description: "Optimize asset performance across the lifecycle. Capital planning, reliability engineering, and end-of-life decisions that maximize ROI."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <BainHoverCard
                  title={item.title}
                  description={item.description}
                  link="#"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Results Section */}
      <section className="py-24 bg-white">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0077B5] mb-6 block">
              Client Results
            </span>
            <h2 className="text-4xl md:text-5xl eb-garamond font-bold text-[#051C2C]">
              Driving production transformation
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                category: "AUTOMOTIVE",
                title: "OEE improvement program delivers $15M in annual savings for auto parts manufacturer",
                description: "An automotive supplier was struggling with low OEE and frequent quality issues. We implemented a comprehensive improvement program including predictive maintenance, changeover optimization, and statistical process control. OEE improved from 62% to 85%, scrap rates fell by 70%, and the company avoided $20M in capital expansion by unlocking hidden capacity.",
                image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&q=80"
              },
              {
                category: "CONSUMER GOODS",
                title: "Lean transformation increases throughput 40% for packaging manufacturer",
                description: "A packaging company was losing market share due to long lead times and high costs. We deployed lean manufacturing principles across their facilities, optimized production scheduling, and implemented real-time performance monitoring. Throughput increased 40%, lead times dropped by 60%, and unit costs fell by 25%.",
                image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"
              }
            ].map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Link href="/capabilities/operations/case-studies" className="block">
                  <div className="relative overflow-hidden rounded-xl aspect-[16/10] mb-6">
                    <img 
                      src={study.image} 
                      alt={study.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-[#0077B5] text-white text-xs font-bold uppercase tracking-wider rounded">
                        {study.category}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-xl eb-garamond font-bold text-[#051C2C] mb-4 group-hover:text-[#0077B5] transition-colors leading-tight">
                    {study.title}
                  </h3>
                  <p className="text-[#051C2C]/60 text-sm leading-relaxed mb-4">
                    {study.description}
                  </p>
                  <div className="flex items-center text-[#0077B5] text-sm font-semibold group-hover:translate-x-2 transition-transform duration-300">
                    Read case study <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Insights Section */}
      <section className="py-24 bg-[#f8f8f7]">
        <div className="container px-4 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0077B5] mb-6 block">
                Insights
              </span>
              <h2 className="text-4xl md:text-5xl eb-garamond font-bold text-[#051C2C]">
                Latest Insights
              </h2>
              <p className="text-xl text-[#051C2C]/60 mt-4">
                Expert perspectives on production optimization and asset management.
              </p>
            </motion.div>
            <Link href="/capabilities/operations/insights">
              <Button variant="outline" className="border-[#051C2C]/20 text-[#051C2C] hover:bg-[#051C2C]/5 bg-transparent transition-all duration-300">
                View all insights
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                category: "Industry 4.0",
                readTime: "6 min read",
                title: "The Digital Factory: Beyond Pilot Programs",
                description: "How leading manufacturers are scaling Industry 4.0 technologies from pilots to enterprise-wide transformation.",
                link: "/capabilities/insights/operations/digital-factory"
              },
              {
                category: "Maintenance",
                readTime: "5 min read",
                title: "Predictive Maintenance ROI: What to Expect",
                description: "A realistic guide to the costs, benefits, and timeline for implementing predictive maintenance programs.",
                link: "/insights/predictive-maintenance-roi"
              },
              {
                category: "Lean",
                readTime: "7 min read",
                title: "Lean Manufacturing in the Age of AI",
                description: "How artificial intelligence is enhancing—not replacing—traditional lean manufacturing principles.",
                link: "/insights/lean-ai"
              }
            ].map((insight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={insight.link} className="group block h-full">
                  <div className="h-full p-8 rounded-xl bg-white border border-gray-200 hover:border-[#0077B5]/50 transition-all duration-300 hover:shadow-lg">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-[#0077B5] text-xs font-bold uppercase tracking-wider">{insight.category}</span>
                      <span className="text-[#051C2C]/40">•</span>
                      <span className="text-[#051C2C]/60 text-sm">{insight.readTime}</span>
                    </div>
                    <h3 className="text-xl eb-garamond font-bold text-[#051C2C] mb-4 group-hover:text-[#0077B5] transition-colors leading-tight">
                      {insight.title}
                    </h3>
                    <p className="text-[#051C2C]/60 text-sm leading-relaxed mb-6">
                      {insight.description}
                    </p>
                    <div className="flex items-center text-[#0077B5] text-sm font-semibold group-hover:translate-x-2 transition-transform duration-300">
                      Read article <ArrowRight className="ml-2 w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Capabilities Section */}
      <section className="py-24 bg-white">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0077B5] mb-6 block">
              Related Capabilities
            </span>
            <h2 className="text-4xl md:text-5xl eb-garamond font-bold text-[#051C2C] mb-6">
              Explore related capabilities
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Layers,
                title: "Supply Chain Optimization",
                description: "Build resilient, cost-effective supply chains that adapt to disruption. Optimize inventory management, supplier relationships, and logistics networks.",
                link: "/capabilities/operations/supply-chain"
              },
              {
                icon: BarChart3,
                title: "Performance Analytics",
                description: "Make data-driven decisions with real-time operational intelligence. Build dashboards, KPI frameworks, and predictive analytics capabilities.",
                link: "/capabilities/operations/performance-analytics"
              },
              {
                icon: Users,
                title: "Workforce Optimization",
                description: "Empower your team with the right skills and tools. Design workforce strategies, training programs, and performance management systems.",
                link: "/capabilities/operations/workforce-optimization"
              }
            ].map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                <BainHoverCard
                  title={capability.title}
                  description={capability.description}
                  link={capability.link}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Blue Background */}
      <section className="py-24 bg-[#0077B5]">
        <div className="container px-4 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl eb-garamond font-bold text-white mb-6">
              Ready to unlock hidden capacity?
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
              Let's discuss how we can help you maximize the performance of your production assets.
            </p>
            <Link href="/contact">
              <Button className="bg-white hover:bg-gray-100 text-[#051C2C] px-10 py-6 text-lg font-semibold transition-all">
                Schedule a Consultation
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
