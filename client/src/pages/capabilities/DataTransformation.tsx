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

export default function DataTransformation() {
  const [location, setLocation] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Related capabilities data
  const relatedCapabilities = [
    {
      title: "Predictive Analytics",
      description: "Transform historical data into forward-looking insights that drive strategic decisions.",
      link: "/capabilities/artificial-intelligence/predictive-analytics"
    },
    {
      title: "Process Automation",
      description: "Streamline operations with intelligent automation that learns and adapts.",
      link: "/capabilities/artificial-intelligence/process-automation"
    },
    {
      title: "AI Strategy & Roadmap",
      description: "Define your AI vision and create a prioritized implementation plan.",
      link: "/capabilities/artificial-intelligence/ai-strategy-roadmap"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-charcoal selection:bg-primary selection:text-white">
      <SEO 
        title="Data Transformation" 
        description="Unlock the true value of data. We build performance by making lasting improvements in technology, processes, and capabilities."
        canonical="/capabilities/artificial-intelligence/data-transformation"
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
              Data Transformation
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 leading-relaxed max-w-2xl mb-6 sm:mb-10">
              Unlock the true value of data. We build performance by making lasting improvements in technology, processes, and capabilities.
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
              src="/images/data-abstract.jpg" 
              alt="Data Transformation Visualization" 
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
              { metric: "20%", label: "Average revenue growth from data-driven decisions" },
              { metric: "60%", label: "Reduction in reporting time" },
              { metric: "3x", label: "Faster time-to-insight" }
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
              In the digital economy, data is the primary driver of competitive advantage. Yet most organizations struggle to extract value from their data assets. Siloed systems, poor quality, and lack of governance create friction that prevents data from flowing to where it's needed most.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-charcoal/80 leading-relaxed"
            >
              We've helped organizations across industries transform their data capabilities—from legacy modernization to advanced analytics enablement. Our approach focuses on sustainable change that delivers both quick wins and long-term value. The average enterprise has data spread across 400+ applications—we help you create unified architectures that break down barriers.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-charcoal/80 leading-relaxed"
            >
              Poor data quality costs organizations an average of $12.9 million annually. We implement governance frameworks that ensure data is trusted, accurate, and compliant. In fast-moving markets, the ability to access and analyze data quickly is a competitive advantage—we build real-time pipelines that reduce time-to-insight from weeks to minutes.
            </motion.p>
          </div>
        </div>
      </section>

      {/* How We Can Help Section - Data Transformation Capabilities (H100 Hover Cards) */}
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
              Our Data Transformation Capabilities
            </h2>
            <p className="text-xl text-charcoal/60 max-w-2xl">
              End-to-end services from strategy to implementation and continuous optimization.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                title: "Data Strategy & Roadmap",
                description: "Define a clear data vision aligned with your business goals. Assess current maturity, identify high-value use cases, and create a roadmap for modernization with quick wins."
              },
              {
                title: "Architecture & Platform",
                description: "Design scalable data architectures that break down silos. Whether data mesh, data fabric, or modern data warehouse, we select the right technologies and establish robust governance."
              },
              {
                title: "Data Migration & Integration",
                description: "Execute transformation with precision—migrating legacy data, building automated pipelines, and implementing master data management across your enterprise."
              },
              {
                title: "Data Quality & Governance",
                description: "Implement governance frameworks that ensure data is trusted, accurate, and compliant. Establish data stewardship, lineage tracking, and quality monitoring."
              },
              {
                title: "Analytics Enablement",
                description: "Build self-service analytics capabilities that empower business users. Create semantic layers, dashboards, and reporting tools that democratize data access."
              },
              {
                title: "Real-Time Data Pipelines",
                description: "Design and implement streaming architectures that deliver insights in real-time. Enable event-driven analytics and operational intelligence at scale."
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
        <div className="container px-4 md:px-12">
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
              Three pillars of successful data transformation
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Value-focused execution",
                description: "We start with business outcomes, not technology. Every initiative is tied to measurable value—whether it's revenue growth, cost reduction, or risk mitigation. We deliver quick wins in 90 days while building for the long term."
              },
              {
                title: "Sustainable architecture",
                description: "We design data platforms that scale with your business. Our architectures are built for flexibility, enabling you to adapt as requirements evolve without costly rework or technical debt."
              },
              {
                title: "Lasting capabilities",
                description: "We don't just build solutions—we build your team's capabilities. Knowledge transfer and training are embedded in every engagement to ensure you can operate and evolve independently."
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
                <p className="text-white leading-relaxed">{pillar.description}</p>
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
        <div className="container px-4 md:px-12">
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
                See how data transformation drives business value.
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
                title: "Unified Data Platform for Regional Healthcare Network",
                category: "Healthcare",
                description: "Building a modern data platform that consolidated 15 legacy systems, enabling real-time patient insights and reducing reporting time by 60%.",
                image: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032212491/wJvotZsWaNAHStzh.png",
                link: "/cases/healthcare-data-platform"
              },
              {
                title: "Real-Time Analytics for Manufacturing Operations",
                category: "Manufacturing",
                description: "Implementing streaming data pipelines that provide real-time visibility into production metrics, reducing downtime by 40%.",
                image: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032212491/NenSkkYRibzfhUFq.png",
                link: "/cases/manufacturing-analytics"
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
        <div className="container px-4 md:px-12">
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
        <div className="container px-4 md:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 eb-garamond">
              Ready to unlock the value of your data?
            </h2>
            <p className="text-xl text-white/80 mb-10">
              Let's discuss how our data transformation expertise can help you build a modern, scalable data foundation.
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
