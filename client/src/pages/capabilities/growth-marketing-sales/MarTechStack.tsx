import { motion } from "framer-motion";
import { ArrowRight, Layers, Database, Zap, BarChart3, Settings, Link2 } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import BainHoverCard from "@/components/BainHoverCard";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";

export default function MarTechStack() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#051C2C] selection:bg-[#0077B5] selection:text-white">
      <SEO 
        title="MarTech Stack" 
        description="Marketing technology strategy, platform selection, and integration. We help you build and optimize the technology infrastructure that powers modern marketing."
        canonical="/capabilities/growth-marketing-sales/martech-stack"
      />
      <Navigation />
      
      {/* Hero Section - Dark Background */}
      <section className="relative min-h-[70vh] flex items-center pt-20 bg-black">
        <div className="container px-4 md:px-12 grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link href="/capabilities/growth-marketing-sales" className="inline-flex items-center text-white/60 hover:text-white mb-6 text-sm transition-colors">
              <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
              Growth, Marketing & Sales
            </Link>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.05] mb-4 eb-garamond">
              MarTech Stack
            </h1>
            
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-2xl mb-10">
              Marketing technology strategy, platform selection, and integration. We help you build and optimize the technology infrastructure that powers modern marketing.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button className="bg-white hover:bg-gray-200 text-black px-8 py-6 text-base font-semibold transition-all">
                  Optimize Your MarTech
                </Button>
              </Link>
              <Link href="/cases">
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
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80" 
              alt="Marketing Technology Dashboard" 
              className="w-full h-auto rounded-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Our Experience & Impact - Bain Style with Border-Left Accent */}
      <section className="py-20 bg-white border-b border-gray-200">
        <div className="container px-4 md:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-[#051C2C] mb-12 eb-garamond"
          >
            Our Experience & Impact
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { metric: "180+", label: "MarTech transformations delivered across industries" },
              { metric: "35%", label: "average reduction in MarTech spend through rationalization" },
              { metric: "3x", label: "improvement in marketing team productivity" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`${index > 0 ? 'border-l border-gray-200 pl-8' : ''}`}
              >
                <div>
                  <div className="text-5xl md:text-6xl font-bold text-[#051C2C] mb-4">{item.metric}</div>
                  <p className="text-lg text-[#051C2C]/60">{item.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Thought Leadership - 2-Column Layout */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-[#051C2C] leading-tight eb-garamond">
                Your MarTech stack is either a competitive advantage or an expensive liability.
              </h2>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6 text-lg text-[#051C2C]/80 leading-relaxed"
            >
              <p>
                The average enterprise uses over 90 marketing technology tools. Most are underutilized, poorly integrated, and creating more complexity than value. The result: fragmented data, frustrated teams, and marketing that can't move at the speed of business.
              </p>
              <p>
                The most effective marketing organizations have rationalized their MarTech stack around a clear strategy. They've built integrated ecosystems that enable personalization at scale, real-time decision-making, and measurable ROI.
              </p>
              <p>
                We help companies transform their MarTech from a cost center to a capability—building the technology foundation that enables marketing excellence.
              </p>
              <ul className="space-y-3 mt-6">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#06b6d4] mt-2 flex-shrink-0"></span>
                  <span>MarTech audit and rationalization</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#06b6d4] mt-2 flex-shrink-0"></span>
                  <span>Platform selection and implementation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#06b6d4] mt-2 flex-shrink-0"></span>
                  <span>Data integration and customer data platforms</span>
                </li>
              </ul>
            </motion.div>
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
            <h2 className="text-4xl md:text-5xl font-bold eb-garamond">
              Building marketing technology that works
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Assess and rationalize",
                description: "We audit your current MarTech landscape, identifying redundancies, gaps, and integration opportunities. We develop a rationalization roadmap that reduces cost while improving capability."
              },
              {
                title: "Design and select",
                description: "We design target architecture based on your marketing strategy and operational needs. We help you select platforms that fit your requirements, budget, and technical environment."
              },
              {
                title: "Implement and enable",
                description: "We implement new platforms and integrations, ensuring data flows seamlessly across your ecosystem. We train teams and establish governance to maximize adoption and value."
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

      {/* How We Can Help - H100 Capability Cards */}
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
            <h2 className="text-4xl md:text-5xl font-bold text-[#051C2C] mb-6 eb-garamond">
              Our MarTech Capabilities
            </h2>
            <p className="text-xl text-[#051C2C]/60 max-w-2xl">
              Comprehensive MarTech services from strategy to implementation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Layers,
                title: "MarTech Strategy",
                description: "Develop a MarTech strategy aligned with your marketing objectives. Define architecture principles, governance models, and investment priorities."
              },
              {
                icon: Database,
                title: "Customer Data Platforms",
                description: "Implement CDP solutions that unify customer data across touchpoints. Enable real-time personalization and audience activation."
              },
              {
                icon: Settings,
                title: "Marketing Automation",
                description: "Select and implement marketing automation platforms. Design workflows that scale personalized engagement across channels."
              },
              {
                icon: BarChart3,
                title: "Analytics & Attribution",
                description: "Build measurement infrastructure that tracks marketing performance. Implement attribution models that inform investment decisions."
              },
              {
                icon: Link2,
                title: "Integration & Data Flow",
                description: "Design and implement integrations that connect your MarTech ecosystem. Ensure data flows seamlessly between platforms."
              },
              {
                icon: Zap,
                title: "AI & Personalization",
                description: "Implement AI-powered personalization engines. Enable dynamic content, product recommendations, and predictive targeting."
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
            <h2 className="text-4xl md:text-5xl font-bold text-[#051C2C] eb-garamond">
              Transforming marketing technology
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                category: "FINANCIAL SERVICES",
                title: "MarTech consolidation saves $4M annually while improving marketing velocity",
                description: "A regional bank was struggling with 85+ marketing tools, fragmented data, and slow campaign execution. We rationalized their stack to 12 core platforms, implemented a CDP, and established governance. Annual MarTech spend dropped 40% while time-to-market improved by 60%.",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
              },
              {
                category: "RETAIL",
                title: "CDP implementation enables real-time personalization across 50M customers",
                description: "A national retailer couldn't activate customer data fast enough for real-time personalization. We implemented a CDP that unified data from 15 sources and enabled real-time audience activation. Personalized campaigns now reach customers within minutes, driving 25% higher engagement.",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
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
                <Link href="/cases" className="block">
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
                  <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4 group-hover:text-[#0077B5] transition-colors leading-tight">
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
              <h2 className="text-4xl md:text-5xl font-bold text-[#051C2C] eb-garamond">
                Latest Insights
              </h2>
              <p className="text-xl text-[#051C2C]/60 mt-4">
                Expert perspectives on marketing technology strategy.
              </p>
            </motion.div>
            <Link href="/insights">
              <Button variant="outline" className="border-[#051C2C]/20 text-[#051C2C] hover:bg-[#051C2C]/5 bg-transparent transition-all duration-300">
                View all insights
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                category: "MarTech",
                readTime: "7 min read",
                title: "The MarTech Rationalization Imperative",
                description: "Why leading CMOs are cutting their MarTech stack in half—and getting better results.",
                link: "/insights/martech-rationalization"
              },
              {
                category: "CDP",
                readTime: "6 min read",
                title: "CDP Selection: Beyond the Hype",
                description: "A practical framework for evaluating and selecting customer data platforms.",
                link: "/insights/cdp-selection"
              },
              {
                category: "Integration",
                readTime: "5 min read",
                title: "The Hidden Cost of MarTech Fragmentation",
                description: "How disconnected marketing tools are costing you more than you think.",
                link: "/insights/martech-fragmentation"
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
                    <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4 group-hover:text-[#0077B5] transition-colors leading-tight">
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
            <h2 className="text-4xl md:text-5xl font-bold text-[#051C2C] mb-6 eb-garamond">
              Explore related capabilities
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                title: "Digital Marketing",
                description: "Drive traffic and conversions through performance marketing, SEO, and paid media optimization.",
                link: "/capabilities/growth-marketing-sales/digital-marketing"
              },
              {
                title: "Marketing Operations",
                description: "Build the processes, governance, and capabilities that enable marketing excellence at scale.",
                link: "/capabilities/growth-marketing-sales/marketing-operations"
              },
              {
                title: "Insights & Analytics",
                description: "Turn data into actionable insights that drive marketing decisions and business outcomes.",
                link: "/capabilities/growth-marketing-sales/insights-analytics"
              }
            ].map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 eb-garamond">
              Ready to optimize your MarTech stack?
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
              Let's discuss how the right marketing technology can accelerate your growth and improve marketing ROI.
            </p>
            <Link href="/contact">
              <Button className="bg-white hover:bg-gray-100 text-[#051C2C] px-10 py-6 text-lg font-semibold transition-all">
                Start Your MarTech Transformation
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
