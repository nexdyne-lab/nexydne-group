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

export default function TechnologyDueDiligence() {
  const [location, setLocation] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const relatedCapabilities = [
    {
      title: "Cloud Migration & Architecture",
      description: "Assess and execute seamless cloud transitions, optimizing for performance and cost.",
      link: "/solutions/enterprise-transformation/cloud-migration-architecture"
    },
    {
      title: "Security & Compliance",
      description: "Evaluate and fortify security posture to meet industry and regulatory standards.",
      link: "/solutions/enterprise-transformation/security-and-compliance"
    },
    {
      title: "Data Platform Engineering",
      description: "Build and modernize data platforms to unlock analytics and AI capabilities.",
      link: "/solutions/enterprise-transformation/data-platform-engineering"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-charcoal selection:bg-primary selection:text-white">
      <SEO 
        title="Technology Due Diligence" 
        description="Provide comprehensive technology assessments for M&A transactions, evaluating architecture, technical debt, scalability, and team capabilities."
        canonical="/solutions/enterprise-transformation/technology-due-diligence"
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
              Technology Due Diligence
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 leading-relaxed max-w-2xl mb-6 sm:mb-10">
              Provide comprehensive technology assessments for M&A transactions, evaluating architecture, technical debt, scalability, and team capabilities.
            </p>
            
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <Link href="/contact">
                <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-base font-semibold transition-colors duration-200 ease-in-out">
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
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663032212491/yOiuQlIfKQjWwDyU.jpg" 
              alt="Technology Due Diligence" 
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
            <h2 className="text-2xl font-bold text-charcoal">The Stakes of M&A Tech</h2>
          </motion.div>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              { metric: "60%", label: "of acquisitions fail to meet ROI goals due to tech issues" },
              { metric: "$1M+", label: "average cost of unidentified technical debt post-acquisition" },
              { metric: "3-6", label: "months of delay caused by unforeseen integration challenges" }
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
              In the high-stakes world of mergers and acquisitions, technology is a critical, yet often underestimated, factor. A target company's technology stack can be a powerful growth engine or a hidden liability. Without a thorough, expert-led due diligence process, you risk inheriting a brittle architecture, crippling technical debt, and a platform that cannot scale to meet your strategic objectives.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-charcoal/80 leading-relaxed"
            >
              Our Technology Due Diligence service provides the clarity and foresight needed to make informed investment decisions. We go beyond surface-level code reviews to deliver a holistic assessment of the target's technology landscape, from architectural soundness and scalability to team capabilities and development processes. We identify risks, quantify liabilities, and uncover opportunities, empowering you to negotiate better terms and build a post-acquisition integration plan that maximizes value.
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
              Our Diligence Capabilities
            </h2>
            <p className="text-xl text-charcoal/60 max-w-2xl">
              We provide a multi-faceted evaluation of the target's technology ecosystem.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                title: "Architecture & Scalability Review",
                description: "Analyze the system architecture for robustness, scalability, and its ability to support future growth. We identify design flaws and performance bottlenecks."
              },
              {
                title: "Technical Debt Quantification",
                description: "Conduct a deep dive into the codebase to identify and quantify technical debt, estimating the cost and effort required for remediation."
              },
              {
                title: "Infrastructure & DevOps Audit",
                description: "Evaluate the target's hosting environment, CI/CD pipelines, and operational practices for efficiency, security, and reliability."
              },
              {
                title: "Security & Compliance Assessment",
                description: "Assess the application and infrastructure security posture, identifying vulnerabilities and ensuring compliance with relevant regulations (e.g., GDPR, SOC 2)."
              },
              {
                title: "Team & Process Evaluation",
                description: "Assess the skills, structure, and agility of the engineering team, as well as the effectiveness of their development methodologies and processes."
              },
              {
                title: "IP & Open Source Risk Analysis",
                description: "Review the use of third-party and open-source software to identify potential licensing conflicts, security risks, and intellectual property issues."
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

      <section className="py-12 sm:py-16 lg:py-24 bg-base">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-4xl md:text-5xl eb-garamond font-bold text-white mb-6">
              Our Diligence Approach
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              A structured methodology to de-risk your technology investments.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 sm:gap-12 text-white">
            {[
              { 
                title: "Phase 1: Discovery & Scoping", 
                description: "We work with you to understand the deal thesis and define the key areas of focus for the technology assessment, tailoring our approach to your specific concerns."
              },
              { 
                title: "Phase 2: Deep-Dive Analysis", 
                description: "Our experts conduct a comprehensive review of code, architecture, infrastructure, and processes, leveraging a combination of automated tools and hands-on analysis."
              },
              { 
                title: "Phase 3: Reporting & Integration Roadmap", 
                description: "We deliver a detailed report outlining findings, risks, and a prioritized list of recommendations, along with a strategic roadmap for post-acquisition integration."
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
                <div className="text-5xl font-bold text-primary mb-4">{`0${index + 1}`}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-white/70">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-24 bg-base">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl eb-garamond font-bold text-white">Success Stories</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-charcoal p-8 rounded-lg"
            >
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/50 mb-4 block">Private Equity</span>
              <h3 className="text-2xl font-bold text-white mb-4">De-risked a $250M acquisition of a SaaS platform by uncovering critical scalability issues, enabling a 15% purchase price reduction.</h3>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-charcoal p-8 rounded-lg"
            >
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/50 mb-4 block">Corporate M&A</span>
              <h3 className="text-2xl font-bold text-white mb-4">Provided a clear integration roadmap for a strategic acquisition, reducing integration time by 40% and accelerating time-to-value.</h3>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-24 bg-subtle">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl eb-garamond font-bold text-charcoal">Related Capabilities</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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

      <section className="py-16 sm:py-20 lg:py-24 bg-primary">
        <div className="container px-4 sm:px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl eb-garamond font-bold text-white mb-4">
              Secure Your Investment with Expert Diligence
            </h2>
            <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Don't let technology risks derail your M&A strategy. Contact us to ensure your next transaction is built on a solid technical foundation.
            </p>
            <Link href="/contact">
              <Button className="bg-white hover:bg-white/90 text-primary px-10 py-7 text-lg font-semibold transition-colors duration-200 ease-in-out">
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
