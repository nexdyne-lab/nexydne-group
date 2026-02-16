import { motion } from "framer-motion";
import { ArrowRight, Layers, BarChart3, Cog, Users, TrendingUp, Shield } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import BainHoverCard from "@/components/BainHoverCard";
import Navbar from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";

export default function StrategicProcurement() {
  return (
    <div className="min-h-screen bg-white text-[#051C2C] selection:bg-[#0077B5] selection:text-white">
      <SEO 
        title="Strategic Procurement" 
        description="Transform procurement from a cost center to a strategic advantage. Optimize supplier relationships, reduce costs, and manage risk across your supply base."
        canonical="/capabilities/operations/strategic-procurement"
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
              Strategic Procurement
            </h1>
            
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-2xl mb-10">
              Transform procurement from a cost center to a strategic advantage. Optimize supplier relationships, reduce costs, and build resilient supply bases.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button className="bg-white hover:bg-gray-200 text-black px-8 py-6 text-base font-semibold transition-all">
                  Discuss Your Procurement
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
              src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80" 
              alt="Strategic Procurement" 
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
              { metric: "120+", label: "procurement transformation engagements for midmarket companies" },
              { metric: "15-25%", label: "typical reduction in total procurement spend" },
              { metric: "30-50%", label: "improvement in supplier performance and reliability" }
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

      {/* Thought Leadership Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-12">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xl md:text-2xl text-[#051C2C] leading-relaxed mb-8">
                For midmarket companies, procurement often operates as a transactional function—processing purchase orders and managing vendor payments. Yet the most successful growing businesses recognize that strategic procurement can be a powerful lever for competitive advantage, driving cost savings, innovation, and risk mitigation.
              </p>
              <p className="text-lg text-[#051C2C]/70 leading-relaxed mb-8">
                We help midmarket companies transform their procurement capabilities from reactive purchasing to proactive strategic sourcing. Our approach combines category management expertise with practical implementation support, enabling you to capture savings while building supplier relationships that support your growth.
              </p>
              <p className="text-lg text-[#051C2C]/70 leading-relaxed mb-8">
                In an era of supply chain volatility, procurement excellence isn't just about cost reduction—it's about building resilience. We help you develop supplier diversification strategies, risk assessment frameworks, and contingency plans that protect your operations from disruption.
              </p>
              <p className="text-lg text-[#051C2C]/70 leading-relaxed">
                Our team brings deep category expertise across direct and indirect spend, combined with practical experience helping companies at your scale. We understand the resource constraints of midmarket organizations and design solutions that deliver impact without requiring enterprise-level investments.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Approach Section - Dark Background */}
      <section className="py-24 bg-[#0a1628]">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0077B5] mb-6 block">
              Our Approach
            </span>
            <h2 className="text-4xl md:text-5xl eb-garamond font-bold text-white mb-6">
              How we deliver procurement excellence
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Spend Analysis & Opportunity Identification",
                description: "We start with a comprehensive analysis of your spend data to identify savings opportunities, consolidation potential, and strategic sourcing priorities across all categories."
              },
              {
                title: "Category Strategy & Execution",
                description: "We develop tailored sourcing strategies for each spend category, from competitive bidding to strategic partnerships, and support you through negotiation and implementation."
              },
              {
                title: "Capability Building & Sustainability",
                description: "We build your internal procurement capabilities through process design, tool implementation, and team development to ensure lasting impact beyond our engagement."
              }
            ].map((approach, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border-t border-white/20 pt-8"
              >
                <h3 className="text-xl font-bold text-white mb-4">{approach.title}</h3>
                <p className="text-white/60 leading-relaxed">{approach.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Can Help Section - H100 Hover Effect */}
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
              Our Procurement Capabilities
            </h2>
            <p className="text-xl text-[#051C2C]/60 max-w-3xl">
              We help you build procurement capabilities that drive cost savings, manage risk, and support your growth strategy.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Strategic Sourcing",
                description: "Develop category strategies and execute competitive sourcing events that capture savings while maintaining quality and service levels.",
                link: "/contact"
              },
              {
                title: "Supplier Management",
                description: "Build strategic supplier relationships through performance management, development programs, and collaborative improvement initiatives.",
                link: "/contact"
              },
              {
                title: "Spend Analytics",
                description: "Gain visibility into your spend patterns with analytics tools that identify savings opportunities and track procurement performance.",
                link: "/contact"
              },
              {
                title: "Contract Management",
                description: "Optimize your contract portfolio through standardization, compliance monitoring, and renewal management processes.",
                link: "/contact"
              },
              {
                title: "Risk Management",
                description: "Assess and mitigate supply risk through supplier diversification, financial monitoring, and contingency planning.",
                link: "/contact"
              },
              {
                title: "Procurement Transformation",
                description: "Design and implement end-to-end procurement operating models including organization, processes, and technology enablement.",
                link: "/contact"
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
            <h2 className="text-4xl md:text-5xl eb-garamond font-bold text-[#051C2C] mb-6">
              Procurement transformations that deliver
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
                category: "Manufacturing",
                title: "Regional manufacturer achieves 22% cost reduction through strategic sourcing",
                description: "A 300-employee manufacturer engaged us to transform their procurement function. Through spend analysis, category strategy development, and supplier negotiations, we delivered $4.2M in annual savings while improving supplier quality metrics by 35%.",
                link: "/case-studies/manufacturing-procurement"
              },
              {
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
                category: "Healthcare Services",
                title: "Healthcare provider builds resilient supply base amid market volatility",
                description: "A regional healthcare network faced supply disruptions and cost pressures. We helped them develop a supplier diversification strategy, implement risk monitoring tools, and negotiate multi-year agreements that reduced costs by 18% while improving supply reliability.",
                link: "/case-studies/healthcare-procurement"
              }
            ].map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={result.link} className="group block">
                  <div className="relative overflow-hidden aspect-[16/10] mb-6">
                    <img 
                      src={result.image} 
                      alt={result.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <span className="text-[#0077B5] text-xs font-bold uppercase tracking-wider mb-3 block">{result.category}</span>
                  <h3 className="text-2xl eb-garamond font-bold text-[#051C2C] mb-4 group-hover:text-[#0077B5] transition-colors leading-tight">
                    {result.title}
                  </h3>
                  <p className="text-[#051C2C]/60 leading-relaxed mb-4">
                    {result.description}
                  </p>
                  <div className="flex items-center text-[#0077B5] text-sm font-semibold group-hover:translate-x-2 transition-transform duration-300">
                    Read full case study <ArrowRight className="ml-2 w-4 h-4" />
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6"
          >
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0077B5] mb-6 block">
                Latest Insights
              </span>
              <h2 className="text-4xl md:text-5xl eb-garamond font-bold text-[#051C2C]">
                Procurement perspectives
              </h2>
            </div>
            <Link href="/insights" className="group flex items-center text-[#051C2C] font-semibold hover:text-[#0077B5] transition-colors">
              View all insights <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                category: "Strategic Sourcing",
                readTime: "6 min read",
                title: "Beyond Cost Cutting: Building Strategic Supplier Partnerships",
                description: "How midmarket companies can leverage supplier relationships for innovation, quality improvement, and competitive advantage.",
                link: "/insights/strategic-supplier-partnerships"
              },
              {
                category: "Risk Management",
                readTime: "5 min read",
                title: "Supply Risk in the New Normal: A Midmarket Playbook",
                description: "Practical strategies for assessing, monitoring, and mitigating supply risk without enterprise-level resources.",
                link: "/insights/supply-risk-playbook"
              },
              {
                category: "Procurement Technology",
                readTime: "7 min read",
                title: "Right-Sizing Procurement Technology for Growing Companies",
                description: "How to select and implement procurement tools that match your scale and deliver ROI without overwhelming your team.",
                link: "/insights/procurement-technology"
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

      {/* Related Capabilities Section - H100 Hover Effect */}
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
                title: "Supply Chain Optimization",
                description: "Build resilient, cost-effective supply chains that adapt to disruption. Optimize inventory management, supplier relationships, and logistics networks.",
                link: "/capabilities/operations/supply-chain"
              },
              {
                title: "Performance Analytics",
                description: "Make data-driven decisions with real-time operational intelligence. Build dashboards, KPI frameworks, and predictive analytics capabilities.",
                link: "/capabilities/operations/performance-analytics"
              },
              {
                title: "Process Automation & Digitization",
                description: "Eliminate manual bottlenecks with intelligent automation. From order processing to quality control, accelerate workflows and reduce errors.",
                link: "/capabilities/operations/process-automation"
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
              Ready to transform your procurement?
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
              Let's discuss how we can help you capture savings and build strategic supplier relationships.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button className="bg-white hover:bg-gray-100 text-[#0077B5] px-8 py-6 text-base font-semibold transition-all">
                  Schedule a Consultation
                </Button>
              </Link>
              <Link href="/capabilities/operations">
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-base font-semibold transition-all bg-transparent">
                  Explore All Operations Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
