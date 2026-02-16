import React, { useEffect } from "react";
import { useLocation, Link } from "wouter";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import { SEO } from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import BainHoverCard from "@/components/BainHoverCard";

export default function ProcessAutomation() {
  const [location, setLocation] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Related capabilities data
  const relatedCapabilities = [
    {
      title: "Agentic AI",
      description: "Deploy autonomous AI agents that handle complex multi-step tasks.",
      link: "/capabilities/artificial-intelligence/agentic-ai"
    },
    {
      title: "Generative AI",
      description: "Intelligent agents that handle inquiries and draft documentation.",
      link: "/capabilities/artificial-intelligence/generative-ai"
    },
    {
      title: "Predictive Analytics",
      description: "Anticipate demand and identify risks before they materialize.",
      link: "/capabilities/artificial-intelligence/predictive-analytics"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-[#051C2C] selection:bg-[#0077B5] selection:text-white">
      <SEO 
        title="Process Automation" 
        description="Transform manual workflows into intelligent automated systems. Combine RPA, AI, and workflow orchestration to eliminate bottlenecks and scale operations."
        canonical="/capabilities/artificial-intelligence/process-automation"
      />
      <Navigation />

      {/* Section 1: Hero Section - Dark Background (F100) */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center pt-16 sm:pt-20 bg-black">
        <div className="container px-4 sm:px-6 md:px-12 grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Breadcrumbs variant="light" />
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05] mb-3 sm:mb-4 eb-garamond">
              Process Automation
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 leading-relaxed max-w-2xl mb-6 sm:mb-10">
              Transform manual workflows into intelligent automated systems. Combine RPA, AI, and workflow orchestration to eliminate bottlenecks and scale operations.
            </p>
            
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <Link href="/contact">
                <Button className="bg-white hover:bg-gray-200 text-black px-8 py-6 text-base font-semibold transition-all">
                  Schedule a Consultation
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
              src="/images/process-automation-abstract.jpg" 
              alt="Process Automation Visualization" 
              className="w-full h-auto rounded-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Section 2: Our Experience & Impact (F100) */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white border-b border-gray-200">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-[#051C2C] eb-garamond">Our Experience & Impact</h2>
          </motion.div>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              { metric: "70%", label: "Reduction in manual processing time" },
              { metric: "90%", label: "Error rate reduction in automated processes" },
              { metric: "150+", label: "Automation programs delivered" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#051C2C] mb-2 sm:mb-3">{item.metric}</div>
                <p className="text-lg text-[#051C2C]/60">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Thought Leadership Paragraphs (F100) */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="max-w-4xl mx-auto space-y-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xl text-[#051C2C]/80 leading-relaxed"
            >
              The promise of automation isn't just cost reduction—it's transformation. When you automate the mundane, you free your people to focus on what humans do best: creative problem-solving, relationship building, and strategic thinking.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-[#051C2C]/80 leading-relaxed"
            >
              But automation done wrong creates new problems. Brittle bots that break with every system update. Siloed automations that don't talk to each other. Shadow IT where departments build their own solutions without governance. We've seen it all—and we know how to avoid it.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-[#051C2C]/80 leading-relaxed"
            >
              The future of automation is intelligent. AI-powered systems that can handle exceptions, learn from outcomes, and adapt to changing conditions. We help you build automation programs that scale—not just individual bots, but enterprise-wide capabilities.
            </motion.p>
          </div>
        </div>
      </section>

      {/* How We Can Help Section - Process Automation Capabilities */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0077B5] mb-6 block">
              How We Can Help
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#051C2C] mb-6 eb-garamond">
              Our Process Automation Capabilities
            </h2>
            <p className="text-xl text-[#051C2C]/60 max-w-2xl">
              End-to-end services from process discovery to automation deployment and continuous optimization.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                title: "Process Mining & Discovery",
                description: "Analyze your existing workflows using process mining tools to identify automation opportunities, bottlenecks, and optimization potential."
              },
              {
                title: "RPA Implementation",
                description: "Deploy robotic process automation using UiPath, Automation Anywhere, or Power Automate. We build bots that are maintainable, scalable, and resilient."
              },
              {
                title: "Intelligent Document Processing",
                description: "Extract data from invoices, contracts, and forms using AI-powered document understanding. Handle unstructured data at scale."
              },
              {
                title: "Workflow Orchestration",
                description: "Design and implement end-to-end workflow automation that coordinates across systems, people, and bots using platforms like Camunda or Temporal."
              },
              {
                title: "AI-Enhanced Automation",
                description: "Combine RPA with machine learning for intelligent automation that handles exceptions, makes decisions, and improves over time."
              },
              {
                title: "Center of Excellence",
                description: "Build internal automation capabilities with governance frameworks, training programs, and reusable component libraries."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="h-full"
              >
                <BainHoverCard title={item.title} description={item.description} link="#" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Our Approach (3-Column Consulting Format) */}
      <section className="py-20 bg-[#051C2C]">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#00d4ff] mb-4 block">
              Our Approach
            </span>
            <h2 className="text-3xl md:text-5xl font-light text-white eb-garamond">
              Build automation that scales with your ambition
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Discover high-value opportunities",
                description: "We use process mining and stakeholder interviews to identify the processes with the highest automation ROI—balancing quick wins with strategic transformation."
              },
              {
                title: "Design for resilience",
                description: "We build automations that handle exceptions gracefully, recover from failures automatically, and adapt to system changes without breaking."
              },
              {
                title: "Scale with governance",
                description: "We establish automation centers of excellence with reusable components, monitoring dashboards, and governance frameworks that enable sustainable growth."
              }
            ].map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <h3 className="text-xl font-bold text-white mb-4">{pillar.title}</h3>
                <p className="text-gray-300 leading-relaxed">{pillar.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/contact">
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-4 bg-transparent">
                Get in touch
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 5: Case Studies (F100) */}
      <section className="py-24 bg-[#051C2C]">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0077B5] mb-4 block">
                Client Results
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white eb-garamond">
                See how automation transforms operations.
              </h2>
            </motion.div>
            <Link href="/cases">
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 bg-transparent">
                View all case studies
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Invoice Processing Automation for Healthcare",
                category: "Healthcare",
                description: "Automating 50,000 monthly invoices with 99% accuracy, reducing processing time from 5 days to 4 hours.",
                image: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032212491/VjElssrnnOYDKLZg.png",
                link: "/cases/healthcare-invoice-automation"
              },
              {
                title: "End-to-End Order Processing for Distributor",
                category: "Distribution",
                description: "Building an intelligent automation platform that handles 10,000 daily orders with minimal human intervention.",
                image: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032212491/eSqreRpytBUAPjUj.png",
                link: "/cases/distributor-order-automation"
              }
            ].map((study, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link href={study.link} className="group block">
                  <div className="relative h-[350px] rounded-lg overflow-hidden">
                    <img 
                      src={study.image}
                      alt={study.title} 
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#051C2C] via-[#051C2C]/50 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-8">
                      <span className="text-xs font-bold text-[#0077B5] mb-3 uppercase tracking-wider block">{study.category}</span>
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#0077B5] transition-colors">
                        {study.title}
                      </h3>
                      <p className="text-white/70 line-clamp-2">{study.description}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Related Capabilities - H100 Hover */}
      <section className="py-24 bg-[#f8f8f7]">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0077B5] mb-4 block">
              Related Capabilities
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#051C2C] eb-garamond">
              Explore more AI capabilities
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {relatedCapabilities.map((cap, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <BainHoverCard
                  title={cap.title}
                  description={cap.description}
                  link={cap.link}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: CTA Section (F100 - Blue Background) */}
      <section className="py-24 bg-[#0077B5]">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 eb-garamond">
              Ready to automate your operations?
            </h2>
            <p className="text-xl text-white/80 mb-10">
              Let's discuss how intelligent automation can transform your workflows and free your teams for higher-value work.
            </p>
            <Link href="/contact">
              <Button className="bg-white hover:bg-gray-100 text-[#0077B5] px-10 py-6 text-lg font-semibold">
                Start a Conversation <ArrowRight className="ml-2 w-5 h-5 inline" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
