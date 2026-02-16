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

export default function SecurityCompliance() {
  const [location, setLocation] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Related capabilities data
  const relatedCapabilities = [
    {
      title: "Cloud Migration & Architecture",
      description: "Securely migrate and architect your cloud environment for resilience and compliance.",
      link: "/solutions/enterprise-transformation/cloud-migration-architecture"
    },
    {
      title: "DevOps & CI/CD",
      description: "Integrate security into your development lifecycle with DevSecOps practices.",
      link: "/solutions/enterprise-transformation/devops-cicd"
    },
    {
      title: "Infrastructure Modernization",
      description: "Modernize your infrastructure with security as a foundational component.",
      link: "/solutions/enterprise-transformation/infrastructure-modernization"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-[#051C2C] selection:bg-[#0077B5] selection:text-white">
      <SEO 
        title="Security & Compliance" 
        description="Embed security into every layer of your technology stack with zero-trust architectures, compliance automation, and proactive threat management."
        canonical="/solutions/enterprise-transformation/security-and-compliance"
      />
      <Navigation />

      {/* Section 1: Hero Section */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center pt-16 sm:pt-20 bg-black">
        <div className="container px-4 sm:px-6 md:px-12 grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Breadcrumbs variant="light" />
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl eb-garamond font-bold tracking-tight text-white leading-[1.05] mb-3 sm:mb-4">
              Security & Compliance
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 leading-relaxed max-w-2xl mb-6 sm:mb-10">
              Embed security into every layer of your technology stack with zero-trust architectures, compliance automation, and proactive threat management.
            </p>
            
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <Link href="/contact">
                <Button className="bg-white hover:bg-gray-200 text-black px-8 py-6 text-base font-semibold transition-all">
                  Schedule a Security Assessment
                </Button>
              </Link>
              <Link href="/cases">
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-base font-semibold transition-all bg-transparent">
                  See Our Security Work
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
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663032212491/wvgLJwZkyCYuUljX.jpg" 
              alt="Security & Compliance Visualization" 
              className="w-full h-auto rounded-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Section 2: Stats Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white border-b border-gray-200">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-[#051C2C]">Our Experience & Impact</h2>
          </motion.div>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              { metric: "99.9%", label: "Reduction in critical vulnerabilities" },
              { metric: "50%", label: "Decrease in compliance reporting time" },
              { metric: "24/7", label: "Threat monitoring and response" }
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

      {/* Section 3: Thought Leadership */}
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
              In today's hyper-connected world, the security perimeter has dissolved. A reactive, bolt-on approach to security is no longer viable. We champion a proactive, defense-in-depth strategy, embedding security controls and compliance automation directly into your technology stack. By adopting a zero-trust mindset, we help you move from a model of implicit trust to one of explicit verification for every user and device.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-[#051C2C]/80 leading-relaxed"
            >
              Achieving and maintaining compliance with regulations like GDPR, HIPAA, and PCI DSS is a complex, ongoing challenge. Our approach automates evidence collection and reporting, transforming compliance from a periodic fire drill into a continuous, automated process. This not only reduces risk but also frees up your teams to focus on innovation, confident that your systems are built on a secure and compliant foundation.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Section 4: How We Can Help */}
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
              Our Security & Compliance Capabilities
            </h2>
            <p className="text-xl text-[#051C2C]/60 max-w-2xl">
              We offer a full spectrum of services to build and maintain a robust security posture.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                title: "Zero-Trust Architecture",
                description: "Design and implement a zero-trust security model, ensuring every access request is authenticated, authorized, and encrypted."
              },
              {
                title: "Compliance Automation",
                description: "Automate the collection of compliance evidence and streamline reporting for standards like ISO 27001, SOC 2, and more."
              },
              {
                title: "Threat & Vulnerability Management",
                description: "Proactively identify, assess, and remediate security vulnerabilities across your entire technology landscape."
              },
              {
                title: "Cloud Security Posture Management",
                description: "Continuously monitor and secure your cloud environments (AWS, Azure, GCP) against misconfigurations and threats."
              },
              {
                title: "DevSecOps Integration",
                description: "Embed security testing and controls into your CI/CD pipelines, making security a shared responsibility."
              },
              {
                title: "Incident Response & Forensics",
                description: "Prepare for and respond to security incidents with a clear plan, minimizing impact and recovery time."
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

      {/* Section 5: Our Approach */}
      <section className="py-12 sm:py-16 lg:py-24 bg-[#051C2C] text-white">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#00d4ff] mb-6 block">
              Our Approach
            </span>
            <h2 className="text-4xl md:text-5xl eb-garamond font-bold mb-6">
              A Three-Step Methodology
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              We follow a structured approach to embed security and compliance into your organization's DNA.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12 relative">
            {/* Dashed lines connecting the steps */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-white/20 border-t border-dashed"></div>
            
            {[
              {
                step: "01",
                title: "Assess & Baseline",
                description: "We start by conducting a comprehensive assessment of your current security posture, identifying gaps against industry best practices and regulatory requirements."
              },
              {
                step: "02",
                title: "Implement & Automate",
                description: "We then implement robust security controls and automate compliance processes, integrating them seamlessly into your existing workflows and infrastructure."
              },
              {
                step: "03",
                title: "Monitor & Evolve",
                description: "Finally, we establish continuous monitoring and a framework for ongoing improvement, ensuring your security posture evolves to meet new threats."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative z-10 text-center"
              >
                <div className="relative inline-block mb-6">
                  <div className="w-20 h-20 bg-[#0077B5] rounded-full flex items-center justify-center text-2xl font-bold">{item.step}</div>
                </div>
                <h3 className="text-2xl font-serif font-bold mb-4">{item.title}</h3>
                <p className="text-white/70">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Case Studies */}
      <section className="py-12 sm:py-16 lg:py-24 bg-[#051C2C] text-white">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold">Case Studies</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-[#0A2A40] p-8 rounded-lg"
            >
              <span className="text-sm font-semibold text-[#00d4ff] mb-2 block">Financial Services</span>
              <h3 className="text-2xl font-serif font-bold mb-4">Automating PCI DSS Compliance for a Fintech Leader</h3>
              <Link href="/cases/fintech-pci-dss" className="text-white/80 hover:text-white flex items-center font-semibold">
                Read Case Study <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-[#0A2A40] p-8 rounded-lg"
            >
              <span className="text-sm font-semibold text-[#00d4ff] mb-2 block">Healthcare</span>
              <h3 className="text-2xl font-serif font-bold mb-4">Implementing a Zero-Trust Framework for a Major Hospital Network</h3>
              <Link href="/cases/healthcare-zero-trust" className="text-white/80 hover:text-white flex items-center font-semibold">
                Read Case Study <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 7: Related Capabilities */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50 border-t border-gray-200">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-[#051C2C]">Related Capabilities</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
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

      {/* Section 8: CTA */}
      <section className="py-12 sm:py-16 lg:py-24 bg-[#0077B5] text-white">
        <div className="container px-4 sm:px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl eb-garamond font-bold mb-4">Ready to Strengthen Your Security Posture?</h2>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Let's build a secure and compliant future for your organization. Contact us today to start the conversation.
            </p>
            <Link href="/contact">
              <Button className="bg-white hover:bg-gray-200 text-black px-10 py-7 text-lg font-semibold transition-all">
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
