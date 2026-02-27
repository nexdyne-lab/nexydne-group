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

export default function PlatformEngineering() {
  const [location, setLocation] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const relatedCapabilities = [
    {
      title: "Cloud Migration & Architecture",
      description: "Design and execute seamless cloud migrations, building scalable and resilient architectures for the future.",
      link: "/solutions/enterprise-transformation/cloud-migration-architecture"
    },
    {
      title: "DevOps & CI/CD",
      description: "Automate your software delivery pipeline to accelerate release cycles and improve code quality.",
      link: "/solutions/enterprise-transformation/devops-cicd"
    },
    {
      title: "Infrastructure Modernization",
      description: "Modernize your IT infrastructure to improve agility, performance, and cost-efficiency.",
      link: "/solutions/enterprise-transformation/infrastructure-modernization"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-charcoal selection:bg-primary selection:text-white">
      <SEO 
        title="Platform Engineering" 
        description="Build internal developer platforms that standardize tooling, accelerate delivery, and improve developer experience across the organization."
        canonical="/solutions/enterprise-transformation/platform-engineering"
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
              Platform Engineering
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 leading-relaxed max-w-2xl mb-6 sm:mb-10">
              Build internal developer platforms that standardize tooling, accelerate delivery, and improve developer experience across the organization.
            </p>
            
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <Link href="/contact">
                <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-base font-semibold transition-colors duration-200 ease-in-out">
                  Consult Our Platform Experts
                </Button>
              </Link>
              <Link href="/cases">
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-base font-semibold transition-all bg-transparent">
                  See Our Platform Builds
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
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663032212491/oVYzvixYpSuUpPQV.jpg" 
              alt="Platform Engineering Visualization" 
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
            <h2 className="text-2xl font-bold text-charcoal">Our Experience & Impact</h2>
          </motion.div>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              { metric: "50%", label: "Reduction in developer onboarding time" },
              { metric: "3x", label: "Faster application deployment frequency" },
              { metric: "75%", label: "Decrease in infrastructure-related support tickets" }
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
              In today's competitive landscape, the speed and efficiency of your development teams are paramount. However, cognitive load from complex tooling, inconsistent environments, and manual infrastructure management can create significant friction. Platform engineering addresses this by treating your internal development infrastructure as a product, creating a paved road for developers to build, ship, and run applications with greater autonomy and velocity.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-charcoal/80 leading-relaxed"
            >
              We help you build a robust Internal Developer Platform (IDP) that provides a curated set of self-service tools and capabilities. By abstracting away the underlying complexity of cloud-native infrastructure, we empower your developers to focus on what they do best: writing code and delivering value. This shift from a project-based to a product-based approach for internal tooling fosters a culture of innovation, improves developer experience, and accelerates your digital transformation journey.
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
              Our Platform Engineering Capabilities
            </h2>
            <p className="text-xl text-charcoal/60 max-w-2xl">
              We provide end-to-end services to design, build, and operate your Internal Developer Platform.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                title: "IDP Strategy & Design",
                description: "Define a clear vision and roadmap for your Internal Developer Platform, aligned with your business goals and developer needs."
              },
              {
                title: "Golden Path Development",
                description: "Create well-defined, supported, and paved roads for common development tasks, abstracting infrastructure complexity."
              },
              {
                title: "Self-Service Tooling",
                description: "Implement a curated set of self-service tools for infrastructure provisioning, application deployment, and observability."
              },
              {
                title: "Developer Experience (DevEx) Optimization",
                description: "Continuously measure and improve the developer experience by reducing cognitive load and streamlining workflows."
              },
              {
                title: "Platform Security & Governance",
                description: "Embed security and compliance into the platform, ensuring that all applications are built on a secure and compliant foundation."
              },
              {
                title: "Platform as a Product",
                description: "Manage your IDP as a product, with a dedicated team, clear roadmap, and focus on user (developer) satisfaction."
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
            <h2 className="text-4xl md:text-5xl eb-garamond font-bold mb-6">Our Approach to Building Your IDP</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">We follow a proven methodology to ensure your platform delivers lasting value.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 sm:gap-12 text-center max-w-6xl mx-auto">
            {[
              {
                step: "01",
                title: "Discover & Assess",
                description: "We start by understanding your current development landscape, pain points, and strategic objectives. We assess your existing tools, workflows, and team structures to identify opportunities for improvement."
              },
              {
                step: "02",
                title: "Design & Build",
                description: "We design a tailored IDP architecture and roadmap. We then build the platform iteratively, starting with a minimum viable platform (MVP) that delivers immediate value to a pilot group of developers."
              },
              {
                step: "03",
                title: "Scale & Evolve",
                description: "We help you scale the platform across your organization, gathering feedback and continuously improving its capabilities. We establish a platform team and governance model to ensure long-term success."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <div className="text-6xl font-bold text-primary mb-4">{item.step}</div>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
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
            <h2 className="text-4xl md:text-5xl eb-garamond font-bold">Success Stories</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-8">
            {[
              {
                industry: "Financial Services",
                headline: "Global bank accelerates feature delivery by 40% with a new developer platform."
              },
              {
                industry: "E-commerce",
                headline: "Online retailer reduces infrastructure costs by 30% while improving developer autonomy."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-charcoal/20 p-8 rounded-lg"
              >
                <span className="text-sm font-bold uppercase tracking-widest text-secondary mb-4 block">{item.industry}</span>
                <p className="text-2xl font-semibold leading-snug">{item.headline}</p>
              </motion.div>
            ))}
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

      <section className="py-16 sm:py-20 lg:py-24 bg-primary text-white">
        <div className="container px-4 sm:px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Build Your Developer Platform?</h2>
            <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-8 text-white/80">Let's discuss how a tailored Internal Developer Platform can accelerate your business outcomes.</p>
            <Link href="/contact">
              <Button className="bg-white text-primary hover:bg-white/90 px-10 py-7 text-lg font-semibold transition-colors duration-200 ease-in-out">
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
