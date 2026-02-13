import React, { useEffect } from "react";
import { useLocation, Link } from "wouter";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function ProcessDiscoveryMining() {
  const [location, setLocation] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Related capabilities data
  const relatedCapabilities = [
    {
      title: "Intelligent Automation Design",
      description: "Design and implement robust automation solutions based on data-driven process insights.",
      link: "/solutions/process-optimization/intelligent-automation-design"
    },
    {
      title: "Workflow Optimization",
      description: "Redesign and streamline workflows to eliminate bottlenecks and improve operational efficiency.",
      link: "/solutions/process-optimization/workflow-optimization"
    },
    {
      title: "AI-Powered Decision Support",
      description: "Leverage AI to provide real-time insights and recommendations for better decision-making.",
      link: "/solutions/process-optimization/ai-powered-decision-support"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-[#051C2C] selection:bg-[#0077B5] selection:text-white">
      <SEO 
        title="Process Discovery & Mining" 
        description="Uncover hidden inefficiencies and bottlenecks through advanced process mining, creating a data-driven foundation for transformation."
        canonical="/solutions/process-optimization/process-discovery-mining"
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
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl eb-garamond font-bold tracking-tight text-white leading-[1.05] mb-3 sm:mb-4">
              Process Discovery & Mining
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 leading-relaxed max-w-2xl mb-6 sm:mb-10">
              Uncover hidden inefficiencies and bottlenecks through advanced process mining, creating a data-driven foundation for transformation.
            </p>
            
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <Link href="/contact">
                <Button className="bg-white hover:bg-gray-200 text-black px-8 py-6 text-base font-semibold transition-all">
                  Request a Process Analysis
                </Button>
              </Link>
              <Link href="/cases">
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-base font-semibold transition-all bg-transparent">
                  Explore Our Impact
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
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663032212491/ahRLBXyxjnIStHiI.jpg" 
              alt="Process Discovery & Mining Visualization" 
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
            <h2 className="text-2xl eb-garamond font-bold text-[#051C2C]">Our Experience & Impact</h2>
          </motion.div>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              { metric: "40%", label: "Increase in process efficiency" },
              { metric: "95%", label: "Accuracy in identifying process deviations" },
              { metric: "6 months", label: "Average time to ROI" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border-l-4 border-[#0077B5] pl-6"
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
              Your business processes are the engines of value creation, but are they running at peak performance? Many organizations operate with an incomplete understanding of their own workflows, relying on anecdotal evidence and outdated process maps. Process discovery and mining offers a data-driven alternative, transforming digital footprints from your existing IT systems into a dynamic, objective view of how work actually gets done.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-[#051C2C]/80 leading-relaxed"
            >
              By analyzing event logs from systems like your ERP, CRM, and custom applications, we create a living model of your end-to-end processes. This reveals not just the "happy path," but every variation, bottleneck, and compliance deviation. It’s the difference between looking at a static blueprint and watching a live MRI of your organization in action. This clarity is the essential first step toward meaningful, sustainable process improvement.
            </motion.p>
          </div>
        </div>
      </section>

      {/* How We Can Help Section */}
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
            <h2 className="text-4xl md:text-5xl eb-garamond font-bold text-[#051C2C] mb-6">
              Our Process Mining Capabilities
            </h2>
            <p className="text-xl text-[#051C2C]/60 max-w-2xl">
              From data extraction to actionable insights, we provide a comprehensive suite of services.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                title: "Automated Process Discovery",
                description: "Utilize advanced algorithms to automatically construct detailed process models from your raw system data, revealing the true state of your operations."
              },
              {
                title: "Conformance Checking",
                description: "Compare your actual process execution against ideal-state models to pinpoint compliance issues, policy violations, and costly deviations."
              },
              {
                title: "Root Cause Analysis",
                description: "Drill down into process inefficiencies to identify the underlying causes of bottlenecks, delays, and rework using data-driven techniques."
              },
              {
                title: "Performance & KPI Monitoring",
                description: "Establish real-time dashboards to track key process indicators, monitor performance against benchmarks, and detect emerging issues proactively."
              },
              {
                title: "Predictive Process Analytics",
                description: "Leverage machine learning to forecast future process outcomes, predict potential bottlenecks, and anticipate SLA breaches before they occur."
              },
              {
                title: "Digital Twin of an Organization (DTO)",
                description: "Create a dynamic virtual model of your business processes to simulate the impact of changes, test optimization scenarios, and drive continuous improvement."
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
                  
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-[#CC0000] font-semibold text-sm flex items-center">
                      Learn More <ArrowRight className="ml-1 w-4 h-4" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Our Approach */}
      <section className="py-12 sm:py-16 lg:py-24 bg-[#051C2C] text-white">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl eb-garamond font-bold mb-4">
              Our Approach to <span className="text-[#00d4ff]">Process Transformation</span>
            </h2>
            <p className="text-lg text-white/60 max-w-3xl mx-auto">
              We follow a structured methodology to ensure that process mining delivers tangible business value, moving from data to insight to action.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 sm:gap-12">
            {[
              {
                title: "1. Data Scoping & Extraction",
                description: "We work with your teams to identify the most critical processes for analysis and establish a secure, robust pipeline for extracting event data from source systems."
              },
              {
                title: "2. Analysis & Insight Generation",
                description: "Our experts apply advanced mining algorithms to model your processes, quantify inefficiencies, and identify the highest-impact opportunities for improvement."
              },
              {
                title: "3. Action & Value Realization",
                description: "We translate insights into a concrete action plan, whether it involves automation, workflow redesign, or training, and help you implement and measure the results."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-white/60">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Case Studies */}
      <section className="py-12 sm:py-16 lg:py-24 bg-[#051C2C] text-white">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl eb-garamond font-bold text-center mb-12"
          >
            Success Stories in Process Mining
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group relative"
            >
              <Link href="/cases/manufacturing-optimization">
                <div className="relative overflow-hidden rounded-lg">
                  <img src="https://images.unsplash.com/photo-placeholder" alt="Manufacturing Process Optimization" className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 p-6 sm:p-8">
                  <span className="text-xs font-bold uppercase tracking-widest text-white/80">Manufacturing</span>
                  <h3 className="text-2xl eb-garamond font-bold text-white mt-2">Reducing Production Cycle Time by 22%</h3>
                </div>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group relative"
            >
              <Link href="/cases/financial-services-compliance">
                <div className="relative overflow-hidden rounded-lg">
                  <img src="https://images.unsplash.com/photo-placeholder" alt="Financial Services Compliance" className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 p-6 sm:p-8">
                  <span className="text-xs font-bold uppercase tracking-widest text-white/80">Financial Services</span>
                  <h3 className="text-2xl eb-garamond font-bold text-white mt-2">Eliminating 98% of Compliance Deviations</h3>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 7: Related Capabilities */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#f8f8f7]">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl eb-garamond font-bold text-center mb-12 text-[#051C2C]"
          >
            Continue Your Transformation Journey
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {relatedCapabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300"
              >
                <Link href={capability.link}>
                  <h3 className="text-xl font-bold text-[#051C2C] mb-3">{capability.title}</h3>
                  <p className="text-[#051C2C]/60 mb-4">{capability.description}</p>
                  <span className="text-[#0077B5] font-semibold flex items-center">Explore <ArrowRight className="ml-2 w-4 h-4" /></span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8: CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#0077B5] text-white">
        <div className="container px-4 sm:px-6 md:px-12 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl eb-garamond font-bold mb-6"
          >
            Ready to Uncover Your Hidden Factory?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto mb-8"
          >
            Let's talk about how Process Discovery and Mining can illuminate the path to operational excellence for your business. Schedule a complimentary consultation with our experts today.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link href="/contact">
              <Button className="bg-white hover:bg-gray-200 text-black px-10 py-7 text-lg font-semibold transition-all">
                Contact Us
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
