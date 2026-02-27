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

export default function IoT() {
  const [location, setLocation] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Related capabilities data
  const relatedCapabilities = [
    {
      title: "Digital Twins",
      description: "Create virtual replicas of physical assets for simulation, monitoring, and optimization.",
      link: "/capabilities/artificial-intelligence/digital-twins"
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
    <div className="min-h-screen bg-white font-sans text-charcoal selection:bg-primary selection:text-white">
      <SEO 
        title="Internet of Things (IoT)" 
        description="Connect, monitor, and optimize your physical assets with intelligent IoT solutions that drive operational excellence and unlock new business models."
        canonical="/capabilities/artificial-intelligence/iot"
      />
      <Navigation />

      {/* Section 1: Hero Section - Dark Background (F100) */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center pt-16 sm:pt-20 bg-charcoal">
        <div className="container px-4 sm:px-6 md:px-12 grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Breadcrumbs variant="light" />
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05] mb-3 sm:mb-4 eb-garamond">
              Internet of Things
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 leading-relaxed max-w-2xl mb-6 sm:mb-10">
              Connect, monitor, and optimize your physical assets with intelligent IoT solutions that drive operational excellence and unlock new business models.
            </p>
            
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <Link href="/contact">
                <Button className="bg-white hover:bg-muted text-charcoal px-8 py-6 text-base font-semibold transition-all">
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
              src="/images/iot-abstract.jpg" 
              alt="IoT Network Visualization" 
              className="w-full h-auto rounded-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Section 2: Our Experience & Impact (F100) */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white border-b border-border">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-charcoal eb-garamond">Our Experience & Impact</h2>
          </motion.div>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              { metric: "75B", label: "Connected devices expected by 2025" },
              { metric: "30%", label: "Average reduction in operational costs" },
              { metric: "25%", label: "Improvement in asset utilization" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-charcoal mb-2 sm:mb-3">{item.metric}</div>
                <p className="text-lg text-charcoal/60">{item.label}</p>
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
              className="text-xl text-charcoal/80 leading-relaxed"
            >
              The Internet of Things is transforming how organizations operate, compete, and create value. By connecting physical assets to digital systems, IoT enables real-time visibility, predictive maintenance, and automated decision-making at unprecedented scale.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-charcoal/80 leading-relaxed"
            >
              Yet many IoT initiatives fail to deliver expected value. The challenge isn't the technology—it's the integration. Successful IoT requires seamless connection between sensors, edge computing, cloud platforms, and business applications. We help organizations navigate this complexity with proven architectures and implementation approaches.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-charcoal/80 leading-relaxed"
            >
              The real opportunity lies in combining IoT data with AI and analytics. When you can predict equipment failures before they happen, optimize energy consumption in real-time, and automate responses to changing conditions, you unlock transformative operational improvements.
            </motion.p>
          </div>
        </div>
      </section>

      {/* How We Can Help Section - IoT Capabilities (H100 Hover Cards) */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6 block">
              How We Can Help
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 eb-garamond">
              Our IoT Capabilities
            </h2>
            <p className="text-xl text-charcoal/60 max-w-2xl">
              End-to-end services from strategy to deployment and continuous optimization.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                title: "IoT Strategy & Roadmap",
                description: "Define your IoT vision aligned with business objectives. Identify high-value use cases, assess technology options, and create a phased implementation roadmap."
              },
              {
                title: "Platform Architecture",
                description: "Design scalable IoT architectures that connect devices, edge computing, and cloud platforms. Select the right technologies for your specific requirements and constraints."
              },
              {
                title: "Device Integration",
                description: "Connect sensors, actuators, and industrial equipment to your IoT platform. Implement secure communication protocols and device management capabilities."
              },
              {
                title: "Edge Computing",
                description: "Deploy intelligent edge solutions that process data locally for real-time response. Reduce latency, bandwidth costs, and enable offline operation."
              },
              {
                title: "Analytics & AI Integration",
                description: "Apply machine learning to IoT data for predictive maintenance, anomaly detection, and automated optimization. Turn sensor data into actionable insights."
              },
              {
                title: "Security & Compliance",
                description: "Implement comprehensive IoT security including device authentication, encrypted communication, and vulnerability management. Ensure regulatory compliance."
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
      <section className="py-20 bg-base">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-secondary mb-4 block">
              Our Approach
            </span>
            <h2 className="text-3xl md:text-5xl font-light text-white eb-garamond">
              From connected devices to business value
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Start with outcomes",
                description: "We focus on business value, not technology for its own sake. Every IoT initiative is tied to measurable outcomes—whether it's reducing downtime, improving quality, or enabling new services."
              },
              {
                title: "Build for scale",
                description: "We design IoT architectures that grow with your business. Our solutions handle thousands to millions of devices while maintaining performance, security, and manageability."
              },
              {
                title: "Enable continuous improvement",
                description: "IoT generates continuous streams of data. We help you build feedback loops that drive ongoing optimization, turning operational data into competitive advantage."
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
                <p className="text-muted-foreground/50 leading-relaxed">{pillar.description}</p>
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
      <section className="py-24 bg-base">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4 block">
                Client Results
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white eb-garamond">
                See how IoT is transforming operations.
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
                title: "Smart Building Management for Commercial Real Estate",
                category: "Real Estate",
                description: "Deploying IoT sensors and analytics to optimize HVAC, lighting, and space utilization, reducing energy costs by 35%.",
                image: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032212491/GMYREBkSkJsbPKKZ.png",
                link: "/cases/smart-building-iot"
              },
              {
                title: "Predictive Maintenance for Industrial Equipment",
                category: "Manufacturing",
                description: "Implementing IoT-based condition monitoring that predicts equipment failures 2 weeks in advance, reducing unplanned downtime by 45%.",
                image: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032212491/VxfeLOEjcawJcOtF.png",
                link: "/cases/industrial-predictive-maintenance"
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
                    <div className="absolute inset-0 bg-gradient-to-t from-base via-base/50 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-8">
                      <span className="text-xs font-bold text-primary mb-3 uppercase tracking-wider block">{study.category}</span>
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
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
      <section className="py-24 bg-subtle">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4 block">
              Related Capabilities
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal eb-garamond">
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
      <section className="py-24 bg-primary">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 eb-garamond">
              Ready to connect your operations?
            </h2>
            <p className="text-xl text-white/80 mb-10">
              Let's discuss how IoT can transform your physical assets into intelligent, connected systems.
            </p>
            <Link href="/contact">
              <Button className="bg-white hover:bg-subtle text-primary px-10 py-6 text-lg font-semibold">
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
