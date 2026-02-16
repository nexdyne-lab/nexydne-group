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

export default function DataPlatformEngineering() {
  const [location, setLocation] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const relatedCapabilities = [
    {
      title: "Cloud Migration & Architecture",
      description: "Seamlessly migrate and re-architect your applications for the cloud to enhance scalability and performance.",
      link: "/solutions/enterprise-transformation/cloud-migration-architecture"
    },
    {
      title: "DevOps & CI/CD",
      description: "Automate your software delivery pipeline to accelerate innovation and improve release quality.",
      link: "/solutions/enterprise-transformation/devops-cicd"
    },
    {
      title: "Security & Compliance",
      description: "Integrate robust security and compliance frameworks into your cloud-native platforms.",
      link: "/solutions/enterprise-transformation/security-and-compliance"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-[#051C2C] selection:bg-[#0077B5] selection:text-white">
      <SEO 
        title="Data Platform Engineering" 
        description="Design and build modern data platforms that unify data sources, enable real-time analytics, and power AI/ML workloads at enterprise scale."
        canonical="/solutions/enterprise-transformation/data-platform-engineering"
      />
      <Navigation />

      <section className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center pt-16 sm:pt-20 bg-black">
        <div className="container px-4 sm:px-6 md:px-12 grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Breadcrumbs variant="light" />
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl eb-garamond font-bold tracking-tight text-white leading-[1.05] mb-3 sm:mb-4">
              Data Platform Engineering
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 leading-relaxed max-w-2xl mb-6 sm:mb-10">
              Design and build modern data platforms that unify data sources, enable real-time analytics, and power AI/ML workloads at enterprise scale.
            </p>
            
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <Link href="/contact">
                <Button className="bg-white hover:bg-gray-200 text-black px-8 py-6 text-base font-semibold transition-all">
                  Build Your Data Platform
                </Button>
              </Link>
              <Link href="/cases">
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-base font-semibold transition-all bg-transparent">
                  See Our Data Solutions
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
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663032212491/IrHhqHKxiHuRUSxd.jpg" 
              alt="Data Platform Engineering Visualization" 
              className="w-full h-auto rounded-lg"
            />
          </motion.div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 bg-white border-b border-gray-200">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-[#051C2C]">The Impact of Unified Data</h2>
          </motion.div>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              { metric: "50%", label: "Faster time-to-insight" },
              { metric: "3x", label: "Increase in data accessibility" },
              { metric: "70%", label: "Reduction in data preparation effort" }
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
              In today's digital economy, data is the lifeblood of the enterprise. However, siloed data sources, legacy infrastructure, and inconsistent data quality prevent organizations from realizing the full potential of their data assets. A modern data platform is not just a repository; it's a strategic enabler that unifies disparate data, provides a single source of truth, and empowers teams with self-service analytics and AI capabilities.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-[#051C2C]/80 leading-relaxed"
            >
              We engineer scalable, cloud-native data platforms that serve as the foundation for your data-driven future. By leveraging modern architectures like data mesh and data fabric, we break down data silos and create a seamless, accessible data ecosystem. Our platforms are designed for performance, reliability, and security, enabling you to run everything from real-time analytics and business intelligence to complex machine learning models at enterprise scale.
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
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0077B5] mb-6 block">
              How We Can Help
            </span>
            <h2 className="text-4xl md:text-5xl eb-garamond font-bold text-[#051C2C] mb-6">
              Our Data Platform Capabilities
            </h2>
            <p className="text-xl text-[#051C2C]/60 max-w-2xl">
              We provide end-to-end services to design, build, and manage your modern data platform.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                title: "Data Strategy & Architecture",
                description: "Define a clear data strategy and design a future-proof architecture (e.g., data mesh, lakehouse) aligned with your business goals."
              },
              {
                title: "Data Ingestion & Integration",
                description: "Build robust, scalable pipelines to ingest data from any source in real-time or batch, ensuring data quality and reliability."
              },
              {
                title: "Data Governance & Security",
                description: "Implement comprehensive data governance frameworks to manage data quality, access control, and compliance with regulations like GDPR and CCPA."
              },
              {
                title: "Self-Service Analytics & BI",
                description: "Empower business users with self-service tools and dashboards for data exploration, visualization, and reporting."
              },
              {
                title: "MLOps & AI Enablement",
                description: "Operationalize machine learning models with MLOps practices, enabling rapid deployment, monitoring, and retraining of AI applications."
              },
              {
                title: "Cloud Data Platform Modernization",
                description: "Migrate and modernize your existing data warehouse or data lake to a scalable, cost-effective cloud-native platform on AWS, Azure, or GCP."
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

      <section className="py-12 sm:py-16 lg:py-24 bg-[#051C2C]">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-4xl md:text-5xl eb-garamond font-bold text-white mb-6">
              Our Approach to Data Platform Engineering
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              We follow a structured, agile methodology to deliver value quickly and iteratively.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 text-white">
            {[
              {
                step: "01",
                title: "Discovery & Roadmap",
                description: "We start by understanding your business objectives, assessing your current data landscape, and defining a strategic roadmap for your modern data platform."
              },
              {
                step: "02",
                title: "Foundation & Build",
                description: "We build the core infrastructure of your data platform, implementing data ingestion pipelines, storage layers, and governance controls in iterative sprints."
              },
              {
                step: "03",
                title: "Enablement & Scale",
                description: "We empower your teams to leverage the new platform through training and support, and continuously optimize and scale the platform to meet evolving business needs."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-6xl font-bold text-[#0077B5] mb-4">{item.step}</div>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-white/70">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-24 bg-[#051C2C] border-t border-white/10">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl eb-garamond font-bold text-white">Client Success Stories</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-black/20 p-8 rounded-lg"
            >
              <span className="text-sm font-bold uppercase tracking-widest text-[#00d4ff] mb-4 block">Retail & E-commerce</span>
              <h3 className="text-2xl font-bold text-white mb-4">Global retailer achieves real-time inventory visibility, reducing stockouts by 30%.</h3>
              <Link to="/cases/retail-inventory-optimization" className="text-white font-semibold hover:text-[#00d4ff] transition-colors flex items-center">
                Read Case Study <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-black/20 p-8 rounded-lg"
            >
              <span className="text-sm font-bold uppercase tracking-widest text-[#00d4ff] mb-4 block">Financial Services</span>
              <h3 className="text-2xl font-bold text-white mb-4">Investment bank builds a scalable platform for algorithmic trading, increasing trade execution speed by 40%.</h3>
              <Link to="/cases/algorithmic-trading-platform" className="text-white font-semibold hover:text-[#00d4ff] transition-colors flex items-center">
                Read Case Study <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-24 bg-gray-50">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl eb-garamond font-bold text-[#051C2C]">Related Capabilities</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {relatedCapabilities.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <BainHoverCard title={item.title} description={item.description} link={item.link} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24 bg-[#0077B5]">
        <div className="container px-4 sm:px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl eb-garamond font-bold text-white mb-4">
              Ready to Unlock Your Data's Potential?
            </h2>
            <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Let's discuss how a modern data platform can transform your business. Our experts are ready to help you design and build a solution tailored to your unique needs.
            </p>
            <Link href="/contact">
              <Button className="bg-white hover:bg-gray-200 text-black px-10 py-7 text-lg font-semibold transition-all">
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
