import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Settings, Target, Zap, BarChart3, Users, Cog, Factory, LineChart, Shield, RefreshCw, Layers } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import BainHoverCard from "@/components/BainHoverCard";
import Navbar from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";

function MethodologyCard({
  method,
  index,
}: {
  method: { title: string; description: string; principles: string[] };
  index: number;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="relative overflow-hidden rounded-xl bg-subtle p-8 min-h-[280px] flex flex-col cursor-pointer transition-all duration-300 hover:shadow-lg"
      style={{
        border: `1px solid ${isHovered ? "transparent" : "#e5e7eb"}`,
        transition: "border 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Peach wash overlay */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          width: "100%",
          backgroundColor: 'var(--color-subtle)',
          right: isHovered ? "-110%" : "100%",
          transition: "right 1s cubic-bezier(0.83, 0, 0.31, 1)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <h3
        className="text-xl font-bold text-charcoal mb-4 transition-colors"
        style={{ position: "relative", zIndex: 1 }}
      >
        <span className={isHovered ? "text-primary" : ""}>{method.title}</span>
      </h3>
      <p
        className="text-charcoal/60 leading-relaxed text-sm mb-6"
        style={{ position: "relative", zIndex: 1 }}
      >
        {method.description}
      </p>
      <ul className="space-y-2 mb-6" style={{ position: "relative", zIndex: 1 }}>
        {method.principles.map((principle, i) => (
          <li key={i} className="flex items-center text-sm text-charcoal/70">
            <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3 shrink-0" />
            {principle}
          </li>
        ))}
      </ul>
     
    </motion.div>
  );
}

export default function Operations() {
  return (
    <div className="min-h-screen bg-white font-sans text-charcoal selection:bg-primary selection:text-white">
      <SEO 
        title="Operations" 
        description="Transform your operational infrastructure to reduce waste, improve quality, and deliver results faster. Build efficient, scalable operations that drive competitive advantage."
        canonical="/capabilities/operations"
      />
      <Navbar />
      
      {/* Hero Section - Dark Background */}
      <section className="relative min-h-[70vh] flex items-center pt-20 bg-charcoal">
        <div className="container px-4 sm:px-6 md:px-12 grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/60 mb-6 block">
              Operations
            </span>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-serif font-bold tracking-tight text-white leading-[1.05] mb-4 eb-garamond">
              Operational Excellence
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-white/70 leading-relaxed max-w-2xl mb-5">
              Transform your operational infrastructure to reduce waste, improve quality, and deliver results faster. Build efficient, scalable operations that drive competitive advantage.
            </p>
            
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <Link href="/contact">
                <Button className="bg-white hover:bg-muted text-charcoal px-8 py-6 text-base font-semibold transition-all">
                  Start Your Transformation
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
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663032212491/CACWfSXoulDIJAgw.jpg" 
              alt="Operations Excellence" 
              className="w-full h-auto rounded-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Our Experience & Impact - Bain Style */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white border-b border-border">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-charcoal mb-12"
          >
            Our Experience & Impact
          </motion.h2>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {[
              { metric: "200+", label: "operations transformation engagements over the past decade" },
              { metric: "25-40%", label: "typical improvement in operational efficiency" },
              { metric: "15-30%", label: "average cost reduction achieved" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`${index > 0 ? 'border-l border-border pl-8' : ''}`}
              >
                <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-charcoal mb-4">{item.metric}</div>
                <p className="text-lg text-charcoal/60">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Thought Leadership Paragraphs */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="max-w-4xl mx-auto space-y-8 text-xl text-charcoal/80 leading-relaxed">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              In the era of algorithmic supply chains and intelligent automation, operational excellence is no longer about incremental improvement—it's about building adaptive systems that learn, optimize, and evolve. For technical leaders and operations executives, the goal is to create an operational architecture that delivers predictable outcomes while maintaining the flexibility to respond to disruption.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              The most successful operations organizations share a common trait: they've moved beyond siloed optimization to build integrated systems where data flows seamlessly from demand signal to delivery. This means investing in the infrastructure that enables real-time visibility, predictive decision-making, and autonomous execution—turning operations from a cost center into a competitive weapon.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Our approach to operations transformation combines proven methodologies with modern technology. We don't just implement tools; we refactor the entire operational stack. From optimizing production scheduling algorithms to designing resilient supply networks, we help you build an operations engine that operates with the precision of a well-tuned system.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              The shift from reactive to predictive operations has fundamentally changed what excellence looks like. Modern operations teams need end-to-end visibility, the ability to simulate scenarios before committing resources, and feedback loops that enable continuous improvement. We work alongside your team to build these capabilities while maintaining the agility to adapt as markets evolve.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Our Approach Section - 3 Column Layout */}
      <section className="py-12 sm:py-16 lg:py-24 bg-base text-white">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4 block">
              Our Approach
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold">
              Build an operations engine that scales
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Diagnose the system",
                description: "We audit your operations across people, process, and technology—mapping value streams, identifying bottlenecks, and benchmarking against best-in-class performers to quantify the improvement opportunity."
              },
              {
                title: "Design the architecture",
                description: "We develop a target operating model that balances efficiency, quality, and resilience. We prioritize initiatives by impact and feasibility, creating a roadmap that delivers quick wins while building toward transformational change."
              },
              {
                title: "Deploy and iterate",
                description: "We implement changes in agile sprints, measuring impact at each stage and iterating based on real-world results. We build internal capabilities alongside external improvements—ensuring your transformation is sustainable."
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

      {/* Enhanced Our Methodology Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6 block">
              Our Methodology
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-6">
              The NexDyne Operations Framework
            </h2>
            <p className="text-xl text-charcoal/60 max-w-3xl mx-auto">
              We integrate proven operational methodologies with modern technology to deliver sustainable transformation.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {[
              {
                title: "Lean Manufacturing",
                description: "Eliminate waste and maximize value. We apply lean principles to streamline workflows, reduce cycle times, and create flow—whether in manufacturing, service delivery, or back-office operations.",
                principles: ["Value stream mapping", "Just-in-time production", "Continuous flow optimization"]
              },
              {
                title: "Six Sigma",
                description: "Drive defects to near-zero. We use statistical process control and DMAIC methodology to identify root causes of variation and implement systematic improvements that deliver measurable quality gains.",
                principles: ["DMAIC methodology", "Statistical process control", "Root cause analysis"]
              },
              {
                title: "Total Quality Management",
                description: "Build quality into every process. We help you create a culture where quality is everyone's responsibility—from leadership commitment to frontline empowerment and customer-focused metrics.",
                principles: ["Customer-focused metrics", "Process standardization", "Continuous improvement culture"]
              },
              {
                title: "Agile Operations",
                description: "Respond faster to change. We bring agile principles from software development to operations—enabling rapid iteration, cross-functional collaboration, and adaptive planning in dynamic environments.",
                principles: ["Sprint-based execution", "Cross-functional teams", "Iterative improvement"]
              },
              {
                title: "Digital Transformation",
                description: "Leverage technology for step-change improvement. We help you deploy automation, AI, and advanced analytics to transform operational capabilities—from predictive maintenance to autonomous decision-making.",
                principles: ["Process automation", "AI-powered analytics", "IoT integration"]
              },
              {
                title: "Change Management",
                description: "Make transformation stick. We address the human side of operational change—building buy-in, developing capabilities, and creating governance structures that sustain improvement over time.",
                principles: ["Stakeholder engagement", "Capability building", "Governance design"]
              }
            ].map((method, index) => (
              <MethodologyCard key={index} method={method} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* How We Can Help - Capability Cards */}
      <section className="py-12 sm:py-16 lg:py-24 bg-subtle">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6 block">
              How We Can Help
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-6">
              Our Operations Capabilities
            </h2>
            <p className="text-xl text-charcoal/60 max-w-2xl">
              We help you build high-performance operations through systematic improvements across the entire value chain.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Supply Chain Optimization",
                description: "Build resilient, cost-effective supply chains that adapt to disruption. Optimize inventory management, supplier relationships, and logistics networks.",
                link: "/capabilities/operations/supply-chain"
              },
              {
                title: "Process Automation & Digitization",
                description: "Eliminate manual bottlenecks with intelligent automation. From order processing to quality control, accelerate workflows and reduce errors.",
                link: "/capabilities/operations/process-automation"
              },
              {
                title: "Quality Management Systems",
                description: "Build a culture of quality that exceeds customer expectations. Implement systematic quality controls and continuous improvement methodologies.",
                link: "/capabilities/operations/quality-management"
              },
              {
                title: "Production & Asset Optimization",
                description: "Maximize throughput and equipment effectiveness. Deploy predictive maintenance, production scheduling, and lean manufacturing principles.",
                link: "/capabilities/operations/production-optimization"
              },
              {
                title: "Workforce Optimization",
                description: "Empower your team with the right skills and tools. Design workforce strategies, training programs, and performance management systems.",
                link: "/capabilities/operations/workforce-optimization"
              },
              {
                title: "Performance Analytics",
                description: "Make data-driven decisions with real-time operational intelligence. Build dashboards, KPI frameworks, and predictive analytics capabilities.",
                link: "/capabilities/operations/performance-analytics"
              },
              {
                title: "Strategic Procurement",
                description: "Optimize your sourcing strategy and supplier relationships. Reduce costs, manage risk, and build a resilient procurement function.",
                link: "/capabilities/operations/strategic-procurement"
              },
              {
                title: "Service Operations",
                description: "Optimize service delivery and customer experience. Transform your service operations to drive efficiency, quality, and customer satisfaction.",
                link: "/capabilities/operations/service-operations"
              },
              {
                title: "Product Development",
                description: "Accelerate innovation and time-to-market. Transform your product development process to deliver winning products faster and more efficiently.",
                link: "/capabilities/operations/product-development"
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
                  link={item.link}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Results Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6 block">
              Client Results
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal">
              Driving operational transformation
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {[
              {
                category: "MANUFACTURING",
                title: "Lean transformation delivers $15M in annual savings for industrial manufacturer",
                description: "A mid-market industrial manufacturer was struggling with rising costs, quality issues, and long lead times. We implemented a comprehensive lean transformation program, redesigning production flows, implementing predictive maintenance, and building a continuous improvement culture. The result: 28% cost reduction, 40% quality improvement, and cycle time cut in half.",
                image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&q=80"
              },
              {
                category: "SUPPLY CHAIN",
                title: "Supply chain resilience program reduces disruption impact by 60%",
                description: "A national distribution company faced repeated supply chain disruptions that were costing millions in lost sales and expedited shipping. We redesigned their supply network, implemented multi-sourcing strategies, and built a control tower for real-time visibility. Disruption impact dropped by 60%, and inventory carrying costs fell by 25%.",
                image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80"
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
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-primary text-white text-xs font-bold uppercase tracking-wider rounded">
                        {study.category}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-charcoal mb-4 group-hover:text-primary transition-colors leading-tight">
                    {study.title}
                  </h3>
                  <p className="text-charcoal/60 text-sm leading-relaxed mb-4">
                    {study.description}
                  </p>
                  <div className="flex items-center text-primary text-sm font-semibold group-hover:translate-x-2 transition-transform duration-300">
                    Read case study <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Insights Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-subtle">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6 block">
                Insights
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal">
                Latest Insights
              </h2>
              <p className="text-xl text-charcoal/60 mt-4">
                Expert perspectives on operations transformation and excellence.
              </p>
            </motion.div>
            <Link href="/insights">
              <Button variant="outline" className="border-base/20 text-charcoal hover:bg-base/5 bg-transparent transition-all duration-300">
                View all insights
              </Button>
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {[
              {
                category: "Operations Strategy",
                readTime: "6 min read",
                title: "The Future of Operations: AI-Powered Excellence",
                description: "How leading companies are deploying AI across their operations—from predictive maintenance to autonomous decision-making.",
                link: "/insights/ai-powered-operations"
              },
              {
                category: "Supply Chain",
                readTime: "5 min read",
                title: "Building Resilient Supply Chains in an Uncertain World",
                description: "Strategies for creating supply networks that adapt to disruption while maintaining cost efficiency.",
                link: "/insights/resilient-supply-chains"
              },
              {
                category: "Lean Operations",
                readTime: "7 min read",
                title: "Lean at Scale: Beyond the Factory Floor",
                description: "How to apply lean principles across the enterprise—from back-office operations to customer service.",
                link: "/insights/lean-at-scale"
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
                  <div className="h-full p-8 rounded-xl bg-white border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-primary text-xs font-bold uppercase tracking-wider">{insight.category}</span>
                      <span className="text-charcoal/40">•</span>
                      <span className="text-charcoal/60 text-sm">{insight.readTime}</span>
                    </div>
                    <h3 className="text-xl font-serif font-bold text-charcoal mb-4 group-hover:text-primary transition-colors leading-tight">
                      {insight.title}
                    </h3>
                    <p className="text-charcoal/60 text-sm leading-relaxed mb-6">
                      {insight.description}
                    </p>
                    <div className="flex items-center text-primary text-sm font-semibold group-hover:translate-x-2 transition-transform duration-300">
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
      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6 block">
              Featured Capabilities
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-6">
              Related capabilities
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Layers,
                title: "Technology",
                description: "Modernize your technology foundation to enable operational excellence. Build the digital infrastructure that powers high-performance operations.",
                link: "/capabilities/technology"
              },
              {
                icon: BarChart3,
                title: "Strategy & Corporate Finance",
                description: "Align operational initiatives with strategic goals and financial resources. Ensure your operations transformation delivers shareholder value.",
                link: "/capabilities/strategy-corporate-finance"
              },
              {
                icon: Cog,
                title: "AI & Technology Consulting",
                description: "Deploy AI and automation to transform operational processes. From predictive analytics to autonomous systems, leverage technology for step-change improvement.",
                link: "/capabilities/ai-technology-consulting"
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
                <BainHoverCard title={capability.title} description={capability.description} link={capability.link} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Blue Background */}
      <section className="py-12 sm:py-16 lg:py-24 bg-primary">
        <div className="container px-4 sm:px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Ready to transform your operations?
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
              Let's discuss how operational excellence can drive sustainable competitive advantage for your organization.
            </p>
            <Link href="/contact">
              <Button className="bg-white hover:bg-subtle text-charcoal px-10 py-6 text-lg font-semibold transition-all">
                Start Your Transformation
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
