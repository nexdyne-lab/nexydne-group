import React, { useEffect } from "react";
import { useLocation, Link } from "wouter";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import { SEO } from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";

export default function DigitalTwins() {
  const [location, setLocation] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Related capabilities data
  const relatedCapabilities = [
    {
      title: "Internet of Things",
      description: "Connect, monitor, and optimize your physical assets with intelligent IoT solutions.",
      link: "/capabilities/artificial-intelligence/iot"
    },
    {
      title: "Predictive Analytics",
      description: "Transform historical data into forward-looking insights that drive strategic decisions.",
      link: "/capabilities/artificial-intelligence/predictive-analytics"
    },
    {
      title: "Process Automation",
      description: "Streamline operations with intelligent automation that learns and adapts.",
      link: "/capabilities/artificial-intelligence/process-automation"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-[#051C2C] selection:bg-[#0077B5] selection:text-white">
      <SEO 
        title="Digital Twins" 
        description="Create virtual replicas of physical assets, processes, and systems to simulate, predict, and optimize performance in real-time."
        canonical="/capabilities/artificial-intelligence/digital-twins"
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
              Digital Twins
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 leading-relaxed max-w-2xl mb-6 sm:mb-10">
              Create virtual replicas of physical assets, processes, and systems to simulate, predict, and optimize performance in real-time.
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
              src="/images/digital-twins-abstract.jpg" 
              alt="Digital Twins Visualization" 
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
              { metric: "$48B", label: "Global digital twin market by 2026" },
              { metric: "25%", label: "Reduction in maintenance costs" },
              { metric: "10x", label: "Faster scenario testing" }
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
              Digital twins represent the convergence of IoT, AI, and simulation technologies. By creating virtual replicas of physical assets and processes, organizations can test scenarios, predict outcomes, and optimize performance without risking real-world disruption.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-[#051C2C]/80 leading-relaxed"
            >
              The power of digital twins lies in their ability to bridge the physical and digital worlds. Real-time data from sensors feeds into the virtual model, which uses AI to predict behavior, identify anomalies, and recommend optimizations. Changes can be tested virtually before being applied to the physical asset.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-[#051C2C]/80 leading-relaxed"
            >
              From manufacturing plants to supply chains to entire cities, digital twins are enabling a new level of operational intelligence. Organizations that master this capability gain unprecedented visibility into their operations and the ability to optimize continuously.
            </motion.p>
          </div>
        </div>
      </section>

      {/* How We Can Help Section - Digital Twins Capabilities (H100 Hover Cards) */}
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
              Our Digital Twin Capabilities
            </h2>
            <p className="text-xl text-[#051C2C]/60 max-w-2xl">
              End-to-end services from strategy to deployment and continuous optimization.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                title: "Digital Twin Strategy",
                description: "Define your digital twin vision and identify high-value use cases. Assess readiness, select technologies, and create a phased implementation roadmap."
              },
              {
                title: "Model Development",
                description: "Build accurate virtual replicas of your physical assets using physics-based modeling, machine learning, and real-time data integration."
              },
              {
                title: "IoT Integration",
                description: "Connect sensors and data sources to feed real-time information into your digital twin. Ensure data quality, reliability, and security."
              },
              {
                title: "Simulation & Analysis",
                description: "Run what-if scenarios, stress tests, and optimization algorithms on your digital twin to identify improvements without real-world risk."
              },
              {
                title: "Predictive Capabilities",
                description: "Apply AI and machine learning to predict equipment failures, quality issues, and performance degradation before they occur."
              },
              {
                title: "Visualization & Dashboards",
                description: "Create intuitive 3D visualizations and dashboards that make digital twin insights accessible to operators, engineers, and executives."
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
                    <h3 className="text-2xl font-serif font-bold text-[#051C2C] leading-tight origin-top-left transition-all duration-300 group-hover:text-base group-hover:mb-2">
                      {item.title}
                    </h3>
                    
                    <p className="text-[#051C2C]/70 leading-relaxed text-sm max-h-0 overflow-hidden opacity-0 group-hover:max-h-[120px] group-hover:opacity-100 group-hover:mt-3 transition-all duration-300 ease-in-out">
                      {item.description}
                    </p>
                  </div>
                  
                  <div className="flex items-center text-[#CC0000] text-sm font-semibold mt-auto pt-4">
                    Read More <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
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
              Bridge the physical and digital worlds
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Start with the asset",
                description: "We begin by deeply understanding your physical assets—their behavior, failure modes, and optimization opportunities. This domain knowledge is essential for building accurate digital twins."
              },
              {
                title: "Build for fidelity",
                description: "We create digital twins that accurately represent real-world behavior. Our models combine physics-based simulation with machine learning to capture complex dynamics."
              },
              {
                title: "Enable continuous learning",
                description: "Digital twins improve over time. We design systems that continuously learn from real-world data, refining predictions and recommendations as conditions change."
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
                See how digital twins are transforming operations.
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
                title: "Manufacturing Line Digital Twin for Automotive",
                category: "Manufacturing",
                description: "Creating a digital twin of an assembly line that enables real-time optimization and predictive maintenance, reducing downtime by 35%.",
                image: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032212491/alGBppklyaGfucnU.png",
                link: "/cases/automotive-digital-twin"
              },
              {
                title: "Supply Chain Digital Twin for Retail",
                category: "Retail",
                description: "Building a digital twin of the end-to-end supply chain that simulates disruptions and optimizes inventory positioning.",
                image: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032212491/TPixWdJmiwYVUYmJ.png",
                link: "/cases/supply-chain-digital-twin"
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

          <div className="grid md:grid-cols-3 gap-6">
            {relatedCapabilities.map((cap, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link href={cap.link} className="group block h-full">
                  <div className="h-full min-h-[180px] p-8 bg-white border-l-4 border-l-transparent group-hover:border-l-[#CC0000] border border-gray-200 transition-all duration-300 flex flex-col">
                    <div className="flex-1">
                      <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-2 group-hover:text-[#0077B5] transition-colors">
                        {cap.title}
                      </h3>
                      <p className="text-[#051C2C]/60 text-sm mb-4">{cap.description}</p>
                    </div>
                    <div className="flex items-center text-[#CC0000] text-sm font-semibold mt-auto">
                      Learn more <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
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
              Ready to create your digital twin?
            </h2>
            <p className="text-xl text-white/80 mb-10">
              Let's discuss how digital twins can transform your operations and enable predictive, optimized decision-making.
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
