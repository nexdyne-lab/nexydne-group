import React, { useEffect } from "react";
import { useLocation, Link } from "wouter";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import Breadcrumbs from "@/components/Breadcrumbs";
import BainHoverCard from "@/components/BainHoverCard";

export default function CustomerDataPlatform() {
  const [location, setLocation] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const relatedCapabilities = [
    {
      title: "Predictive Analytics & Modeling",
      description: "Leverage historical data to forecast future customer behaviors and identify high-value opportunities.",
      link: "/solutions/customer-intelligence/predictive-analytics-modeling"
    },
    {
      title: "Behavioral Segmentation",
      description: "Group customers into meaningful segments based on their behaviors, preferences, and lifecycle stage.",
      link: "/solutions/customer-intelligence/behavioral-segmentation"
    },
    {
      title: "Journey Analytics & Optimization",
      description: "Analyze and optimize the end-to-end customer journey across all touchpoints.",
      link: "/solutions/customer-intelligence/journey-analytics-optimization"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-charcoal selection:bg-primary selection:text-white">
      <SEO 
        title="Customer Data Platform Selection & Implementation" 
        description="Help organizations select, implement, and optimize customer data platforms to unify customer data across touchpoints and enable real-time activation."
        canonical="/solutions/customer-intelligence/customer-data-platform"
      />
      <Navigation />

      <section className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center pt-16 sm:pt-20 bg-charcoal">
        <div className="container px-4 sm:px-6 md:px-12 grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Breadcrumbs variant="light" />
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl eb-garamond font-bold tracking-tight text-white leading-[1.05] mb-3 sm:mb-4">
              Customer Data Platform Selection & Implementation
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 leading-relaxed max-w-2xl mb-6 sm:mb-10">
              Help organizations select, implement, and optimize customer data platforms to unify customer data across touchpoints and enable real-time activation.
            </p>
            
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <Link href="/contact">
                <Button className="bg-white hover:bg-muted text-charcoal px-8 py-6 text-base font-semibold transition-all">
                  Schedule a Consultation
                </Button>
              </Link>
              <Link href="/cases">
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-base font-semibold transition-all bg-transparent">
                  See Our Success Stories
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
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663032212491/tdkBNfVTZoxFpdQV.jpg" 
              alt="Customer Data Platform Concept" 
              className="w-full h-auto rounded-lg"
            />
          </motion.div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 bg-white border-b border-border">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-2xl eb-garamond font-bold text-charcoal">Our Experience & Impact</h2>
          </motion.div>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              { metric: "360-degree", label: "Complete customer view achieved" },
              { metric: "3x", label: "Faster time to customer insight" },
              { metric: "85%", label: "Reduction in data silos" }
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
              In today's fragmented digital landscape, a unified view of the customer is no longer a luxury—it's a necessity. Customer Data Platforms (CDPs) provide the foundational technology to break down data silos, stitch together customer identities, and create a persistent, single source of truth. This enables organizations to move beyond disjointed channel-specific interactions and deliver truly consistent, personalized experiences.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-charcoal/80 leading-relaxed"
            >
              Selecting and implementing the right CDP is a critical strategic decision. It requires a deep understanding of your data ecosystem, marketing technology stack, and future business goals. Our experts guide you through the entire lifecycle, from vendor evaluation and business case development to technical implementation, data governance, and use case activation. We ensure your CDP investment delivers not just unified data, but actionable intelligence that drives measurable business growth.
            </motion.p>
          </div>
        </div>
      </section>

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
            <h2 className="text-4xl md:text-5xl eb-garamond font-bold text-charcoal mb-6">
              Our CDP Implementation Capabilities
            </h2>
            <p className="text-xl text-charcoal/60 max-w-2xl">
              We provide end-to-end services to ensure your CDP drives transformative value.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                title: "Strategy & Vendor Selection",
                description: "Define your CDP strategy, document requirements, and run a structured evaluation process to select the platform that best fits your unique business needs."
              },
              {
                title: "Data Modeling & Integration",
                description: "Design a robust customer data model and integrate disparate data sources (online, offline, CRM, ERP) to create a unified and trustworthy customer profile."
              },
              {
                title: "Identity Resolution & Governance",
                description: "Implement advanced identity stitching techniques to resolve customer identities across devices and channels, while establishing strong data governance and privacy compliance."
              },
              {
                title: "Use Case Activation",
                description: "Prioritize and implement high-impact use cases such as advanced segmentation, personalization, journey orchestration, and measurement."
              },
              {
                title: "MarTech Stack Integration",
                description: "Seamlessly connect your CDP with your existing marketing and analytics tools to enable real-time data activation and a cohesive technology ecosystem."
              },
              {
                title: "Optimization & Managed Services",
                description: "Provide ongoing support, performance tuning, and strategic guidance to ensure you continuously derive maximum value from your CDP investment."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <BainHoverCard title={item.title} description={item.description} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-24 bg-base text-white">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-4xl md:text-5xl eb-garamond font-bold mb-6">Our Approach to CDP Success</h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">We follow a proven, three-phase methodology to de-risk your investment and accelerate time-to-value.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 sm:gap-12 text-center relative">
            <div className="absolute top-1/2 left-0 w-full h-px bg-white/10 hidden md:block"></div>
            <div className="absolute top-0 left-1/2 w-px h-full bg-white/10 md:hidden"></div>
            {[
              {
                title: "Phase 1: Foundation & Strategy",
                description: "We begin by defining your business objectives, auditing your data sources, and creating a strategic roadmap and business case for your CDP."
              },
              {
                title: "Phase 2: Implementation & Integration",
                description: "Our technical experts lead the platform implementation, data integration, identity resolution, and connection to your marketing activation channels."
              },
              {
                title: "Phase 3: Activation & Optimization",
                description: "We focus on activating high-value marketing and analytics use cases, training your team, and establishing a framework for continuous optimization."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative z-10"
              >
                <div className="mb-4 inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full text-2xl font-bold">{index + 1}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-white/60">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-24 bg-base text-white">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl eb-garamond font-bold">Client Success with CDP</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-charcoal/20 p-8 rounded-lg"
            >
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-secondary mb-4 block">Retail & E-commerce</span>
              <h3 className="text-2xl font-bold mb-4">Global retailer achieves a single customer view, boosting loyalty by 25%.</h3>
              <p className="text-white/60">We implemented a CDP to unify data from online, in-store, and mobile app channels, enabling personalized promotions and a 15% increase in customer lifetime value.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-charcoal/20 p-8 rounded-lg"
            >
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-secondary mb-4 block">Financial Services</span>
              <h3 className="text-2xl font-bold mb-4">Leading bank reduces customer churn by 18% with proactive, data-driven outreach.</h3>
              <p className="text-white/60">By integrating their CDP with marketing automation, the bank was able to identify at-risk customers and deliver timely, relevant retention offers, significantly improving customer retention.</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-24 bg-subtle border-t border-border">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl eb-garamond font-bold text-charcoal">Related Capabilities</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {relatedCapabilities.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={item.link}>
                  <a className="block h-full p-8 bg-white border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    <h3 className="text-2xl font-bold text-charcoal mb-3">{item.title}</h3>
                    <p className="text-charcoal/70 mb-4">{item.description}</p>
                    <span className="text-primary font-semibold flex items-center">
                      Explore Capability <ArrowRight className="ml-2 w-4 h-4" />
                    </span>
                  </a>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24 bg-primary text-white">
        <div className="container px-4 sm:px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl eb-garamond font-bold mb-4">Ready to Unify Your Customer Data?</h2>
            <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto mb-8">Let's discuss how a Customer Data Platform can transform your customer relationships and drive business growth. Contact us today for a complimentary assessment.</p>
            <Link href="/contact">
              <Button className="bg-white hover:bg-muted text-charcoal px-10 py-7 text-lg font-semibold transition-all">
                Get in Touch
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
