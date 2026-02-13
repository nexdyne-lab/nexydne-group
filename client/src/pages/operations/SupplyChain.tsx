import { motion } from "framer-motion";
import { ArrowRight, Layers, BarChart3, Cog } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";

export default function SupplyChain() {
  return (
    <div className="min-h-screen bg-white text-[#051C2C] selection:bg-[#0077B5] selection:text-white">
      <SEO 
        title="Supply Chain Optimization" 
        description="Build resilient, cost-effective supply chains that adapt to disruption. Optimize inventory management, supplier relationships, and logistics."
        canonical="/capabilities/operations/supply-chain"
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
              Supply Chain Optimization
            </h1>
            
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-2xl mb-10">
              Build resilient, cost-effective supply chains that adapt to disruption. Optimize inventory management, supplier relationships, and logistics networks.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button className="bg-white hover:bg-gray-200 text-black px-8 py-6 text-base font-semibold transition-all">
                  Discuss Your Supply Chain
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
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80" 
              alt="Supply Chain Optimization" 
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
              { metric: "150+", label: "supply chain transformation engagements across industries" },
              { metric: "20-35%", label: "typical reduction in total supply chain costs" },
              { metric: "40-60%", label: "improvement in inventory turns and service levels" }
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
              Global supply chains face unprecedented complexity—geopolitical disruptions, demand volatility, sustainability pressures, and rising costs. Traditional approaches built for stability cannot keep pace with the speed of change. The companies that thrive are those building adaptive supply networks that sense, respond, and evolve.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              We bring end-to-end supply chain expertise that transforms complexity into competitive advantage. Our approach combines strategic network design with operational excellence—helping you build supply chains that are resilient, efficient, and responsive to market dynamics.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              The most successful supply chain organizations share a common trait: they've moved beyond siloed optimization to build integrated systems where data flows seamlessly from demand signal to delivery. This means investing in the infrastructure that enables real-time visibility, predictive decision-making, and autonomous execution.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Our approach goes beyond cost reduction. We help you build supply chains that can sense and respond to change, creating sustainable competitive advantage in volatile markets. From optimizing inventory algorithms to designing resilient supplier networks, we work alongside your team to build capabilities that deliver lasting results.
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
              Building resilient supply chains
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Diagnose the network",
                description: "We map your end-to-end supply chain—analyzing flows, costs, and service levels. We identify pain points, quantify improvement opportunities, and benchmark against best-in-class performers."
              },
              {
                title: "Design the architecture",
                description: "We develop a target state that balances cost, service, and resilience. We optimize network design, sourcing strategy, and inventory positioning to create a supply chain that delivers competitive advantage."
              },
              {
                title: "Deploy and scale",
                description: "We implement changes in agile sprints, measuring impact at each stage. We build internal capabilities alongside process improvements—ensuring your transformation is sustainable and self-reinforcing."
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
              Our Supply Chain Capabilities
            </h2>
            <p className="text-xl text-[#051C2C]/60 max-w-2xl">
              Comprehensive supply chain transformation across strategy, planning, sourcing, and execution.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Supply Chain Strategy",
                description: "Define your supply chain vision and operating model. Align network design, sourcing strategy, and capabilities with business objectives."
              },
              {
                title: "Demand Planning & Forecasting",
                description: "Improve forecast accuracy with advanced analytics. Reduce stockouts and excess inventory through better demand sensing and planning."
              },
              {
                title: "Inventory Optimization",
                description: "Right-size inventory across the network. Balance service levels with working capital through scientific inventory management."
              },
              {
                title: "Procurement Excellence",
                description: "Transform procurement from cost center to value creator. Strategic sourcing, supplier development, and contract optimization."
              },
              {
                title: "Logistics & Distribution",
                description: "Optimize transportation and distribution networks. Reduce costs while improving delivery performance and flexibility."
              },
              {
                title: "Supply Chain Digitization",
                description: "Deploy technology to enable visibility and agility. Control towers, analytics platforms, and automation solutions."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group"
              >
                <div className="h-full min-h-[200px] p-8 bg-white border-l-4 border-l-transparent group-hover:border-l-[#CC0000] border border-gray-200 transition-all duration-300 flex flex-col">
                  <div className="flex-1">
                    <h3 className="text-2xl eb-garamond font-bold text-[#051C2C] leading-tight origin-top-left transition-all duration-300 group-hover:text-base group-hover:mb-2">
                      {item.title}
                    </h3>
                    
                    <p className="text-[#051C2C]/70 leading-relaxed text-sm max-h-0 overflow-hidden opacity-0 group-hover:max-h-[120px] group-hover:opacity-100 group-hover:mt-3 transition-all duration-300 ease-in-out">
                      {item.description}
                    </p>
                  </div>
                  
                  <div className="flex items-center text-[#CC0000] text-sm font-semibold mt-auto pt-4">
                    Read More <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
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
              Driving supply chain transformation
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                category: "CONSUMER GOODS",
                title: "Supply chain redesign delivers $25M in annual savings for CPG company",
                description: "A mid-market consumer goods company was struggling with high logistics costs, poor service levels, and excess inventory. We redesigned their distribution network, implemented demand-driven planning, and optimized inventory positioning. The result: 30% cost reduction, 95% service levels, and 40% improvement in inventory turns.",
                image: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80"
              },
              {
                category: "MANUFACTURING",
                title: "Resilience program reduces supply disruption impact by 65%",
                description: "A global manufacturer faced repeated supply disruptions that were costing millions in lost production. We implemented multi-sourcing strategies, built supplier risk monitoring capabilities, and created contingency playbooks. Disruption impact dropped by 65%, and the company gained competitive advantage during industry-wide shortages.",
                image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80"
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
                Expert perspectives on supply chain strategy and transformation.
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
                category: "Supply Chain Strategy",
                readTime: "6 min read",
                title: "Building Resilient Supply Chains in an Uncertain World",
                description: "Strategies for creating supply networks that adapt to disruption while maintaining cost efficiency and service levels.",
                link: "/capabilities/insights/operations/supply-chain-resilience"
              },
              {
                category: "Demand Planning",
                readTime: "5 min read",
                title: "AI-Powered Demand Sensing: Beyond Traditional Forecasting",
                description: "How leading companies are using machine learning to improve forecast accuracy and reduce inventory costs.",
                link: "/insights/ai-demand-sensing"
              },
              {
                category: "Procurement",
                readTime: "7 min read",
                title: "Strategic Sourcing in a Volatile World",
                description: "Balancing cost optimization with supply security in an era of geopolitical uncertainty and supplier concentration risk.",
                link: "/insights/strategic-sourcing"
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
                title: "Process Automation & Digitization",
                description: "Eliminate manual bottlenecks with intelligent automation. From order processing to quality control, accelerate workflows and reduce errors.",
                link: "/capabilities/operations/process-automation"
              },
              {
                icon: BarChart3,
                title: "Performance Analytics",
                description: "Make data-driven decisions with real-time operational intelligence. Build dashboards, KPI frameworks, and predictive analytics capabilities.",
                link: "/capabilities/operations/performance-analytics"
              },
              {
                icon: Cog,
                title: "Production & Asset Optimization",
                description: "Maximize throughput and equipment effectiveness. Deploy predictive maintenance, production scheduling, and lean manufacturing principles.",
                link: "/capabilities/operations/production-optimization"
              }
            ].map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Link href={capability.link} className="block h-full">
                  <div className="h-full min-h-[200px] p-8 bg-white border-l-4 border-l-transparent group-hover:border-l-[#CC0000] border border-gray-200 transition-all duration-300 flex flex-col">
                    <div className="flex-1">
                      <h3 className="text-2xl eb-garamond font-bold text-[#051C2C] leading-tight origin-top-left transition-all duration-300 group-hover:text-base group-hover:mb-2">
                        {capability.title}
                      </h3>
                      
                      <p className="text-[#051C2C]/70 leading-relaxed text-sm max-h-0 overflow-hidden opacity-0 group-hover:max-h-[120px] group-hover:opacity-100 group-hover:mt-3 transition-all duration-300 ease-in-out">
                        {capability.description}
                      </p>
                    </div>
                    
                    <div className="flex items-center text-[#CC0000] text-sm font-semibold mt-auto pt-4">
                      Read More <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
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
              Ready to transform your supply chain?
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
              Let's discuss how we can help you build a more resilient, efficient supply chain.
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
