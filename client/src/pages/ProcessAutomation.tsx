import { motion } from "framer-motion";
import { ArrowRight, Zap, TrendingUp, Users, DollarSign, Target, CheckCircle2, Cog, FileText, Bot } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { RelatedContent } from "@/components/RelatedContent";

export default function ProcessAutomation() {
  return (
    <div className="min-h-screen bg-base font-sans text-white selection:bg-primary selection:text-white">
      <SEO 
        title="Process Automation & Digitization" 
        description="Eliminate manual bottlenecks with intelligent automation. From order processing to quality control, accelerate workflows and reduce errors."
        canonical="/capabilities/operations/process-automation"
      />
      <Navbar />
      
      {/* DZ10 Hero Section */}
      <section className="relative min-h-[440px] md:min-h-[560px] flex items-center pt-16 sm:pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80"
            alt="Process Automation & Digitization" 
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
              Operations / Automation
            </span>
            
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-white leading-[1.05] mb-5 sm:mb-3 md:mb-4 eb-garamond">
              Process Automation <br />
              <span className="text-primary">& Digitization</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 leading-relaxed max-w-2xl mb-10">
              Eliminate manual bottlenecks with intelligent automation. From order processing to quality control, accelerate workflows and reduce errors by up to 90%.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link href="/contact">
                <Button className="bg-primary hover:bg-primary/90 text-white px-5 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 text-base font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/20">
                  Automate Your Processes
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
                Manual processes are <br />
                <span className="text-primary">killing your growth.</span>
              </h2>
              
              <div className="space-y-6 text-lg text-charcoal/70 leading-relaxed">
                <p>
                  Your team is drowning in repetitive work. Order processing, data entry, invoice reconciliation, quality checks—tasks that consume hours every day but add little strategic value.
                </p>
                <p>
                  NexDyne brings <strong className="text-charcoal font-semibold">intelligent automation expertise</strong> that transforms how organizations operate. We deploy solutions that eliminate manual bottlenecks, connect disconnected systems, and free your team to focus on strategic work.
                </p>
              </div>

              <div className="pt-8 grid grid-cols-2 gap-4 sm:p-5 md:p-6">
                <div className="p-4 sm:p-5 md:p-6 bg-base/5 rounded-lg sm:rounded-xl">
                  <div className="text-4xl font-bold text-primary mb-2">40-60%</div>
                  <p className="text-sm text-charcoal/60 uppercase tracking-wider">Labor Cost Reduction</p>
                </div>
                <div className="p-4 sm:p-5 md:p-6 bg-base/5 rounded-lg sm:rounded-xl">
                  <div className="text-4xl font-bold text-primary mb-2">85-90%</div>
                  <p className="text-sm text-charcoal/60 uppercase tracking-wider">Error Elimination</p>
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
                <div className="text-4xl font-bold text-primary mb-2">2-3×</div>
                <div className="text-sm text-charcoal/60">Volume capacity increase</div>
              </div>
              <div className="p-4 sm:p-6 md:p-8 bg-base/5 rounded-lg sm:rounded-xl">
                <div className="text-4xl font-bold text-primary mb-2">70%</div>
                <div className="text-sm text-charcoal/60">Processing time reduction</div>
              </div>
              <div className="col-span-2 relative rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-xl sm:shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80" 
                  alt="Automation Excellence" 
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
              Comprehensive automation solutions
            </h2>
            <p className="text-xl text-white/60 max-w-2xl">
              End-to-end capabilities to automate and digitize your operations.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-4 sm:p-6 md:p-8 lg:gap-5 sm:p-7 md:p-5 sm:p-7 md:p-10">
            {[
              {
                icon: <Bot className="w-7 h-7" />,
                title: "Robotic Process Automation",
                description: "Deploy software robots to automate repetitive, rule-based tasks across applications without changing existing systems."
              },
              {
                icon: <Zap className="w-7 h-7" />,
                title: "Workflow Automation",
                description: "Design and implement automated workflows that route work, trigger actions, and orchestrate processes across teams."
              },
              {
                icon: <FileText className="w-7 h-7" />,
                title: "Document Processing",
                description: "Extract data from documents, emails, and forms using AI-powered intelligent document processing."
              },
              {
                icon: <Cog className="w-7 h-7" />,
                title: "System Integration",
                description: "Connect disparate systems and applications to enable seamless data flow and eliminate manual data transfer."
              },
              {
                icon: <Target className="w-7 h-7" />,
                title: "Process Mining",
                description: "Analyze process data to identify automation opportunities, bottlenecks, and optimization potential."
              },
              {
                icon: <TrendingUp className="w-7 h-7" />,
                title: "Intelligent Automation",
                description: "Combine RPA with AI and machine learning to automate complex processes that require judgment and decision-making."
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
                We take a structured approach to automation, starting with process analysis and opportunity identification, then designing, building, and deploying solutions that deliver measurable ROI.
              </p>
              
              <div className="space-y-6">
                {[
                  { num: "01", title: "Discover", desc: "Analyze processes, identify automation candidates, and prioritize by ROI and feasibility." },
                  { num: "02", title: "Design", desc: "Design automation solutions with detailed process flows, exception handling, and integration points." },
                  { num: "03", title: "Build", desc: "Develop and test automation solutions using best-in-class platforms and development practices." },
                  { num: "04", title: "Scale", desc: "Deploy, monitor, and continuously improve automation across the organization." }
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
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80" 
                  alt="Automation Methodology" 
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
                Automation transformations
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
                title: "Distributor automates order processing, saves $500K annually",
                category: "Order Processing",
                image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80"
              },
              {
                title: "Financial services firm eliminates 90% of manual data entry",
                category: "Document Processing",
                image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80"
              },
              {
                title: "Healthcare provider reduces claims processing time by 70%",
                category: "Workflow Automation",
                image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&q=80"
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
              The automation partner <br />you've been looking for
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:p-6 md:p-8">
            {[
              { metric: "100+", label: "Automation Projects" },
              { metric: "50%", label: "Average Cost Reduction" },
              { metric: "$50M+", label: "Client Savings Delivered" },
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
            title: "RPA vs Intelligent Automation: What's Right for You?",
            category: "Technology",
            link: "/insights/rpa-vs-intelligent-automation",
            image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80"
          },
          {
            title: "Building an Automation Center of Excellence",
            category: "Strategy",
            link: "/insights/automation-center-of-excellence",
            image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80"
          }
        ]}
      />

      <Footer />
    </div>
  );
}
