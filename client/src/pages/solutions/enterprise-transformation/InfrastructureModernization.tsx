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

export default function InfrastructureModernization() {
  const [location, setLocation] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const relatedCapabilities = [
    {
      title: "Cloud Migration & Architecture",
      description: "Seamlessly migrate to the cloud with a robust and scalable architecture.",
      link: "/solutions/enterprise-transformation/cloud-migration-architecture"
    },
    {
      title: "Platform Engineering",
      description: "Build and manage scalable platforms to accelerate application development and deployment.",
      link: "/solutions/enterprise-transformation/platform-engineering"
    },
    {
      title: "DevOps & CI/CD",
      description: "Automate your software delivery pipeline for faster and more reliable releases.",
      link: "/solutions/enterprise-transformation/devops-cicd"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-[#051C2C] selection:bg-[#0077B5] selection:text-white">
      <SEO 
        title="Infrastructure Modernization" 
        description="Transform legacy infrastructure into modern, agile platforms that reduce operational overhead and accelerate innovation."
        canonical="/solutions/enterprise-transformation/infrastructure-modernization"
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
              Infrastructure Modernization
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 leading-relaxed max-w-2xl mb-6 sm:mb-10">
              Transform legacy infrastructure into modern, agile platforms that reduce operational overhead and accelerate innovation.
            </p>
            
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <Link href="/contact">
                <Button className="bg-white hover:bg-gray-200 text-black px-8 py-6 text-base font-semibold transition-all">
                  Modernize Your Infrastructure
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
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663032212491/wUPFjEHzPchPpzZj.jpg" 
              alt="Infrastructure Modernization Visualization" 
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
            <h2 className="text-2xl font-bold text-[#051C2C]">Our Experience & Impact</h2>
          </motion.div>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              { metric: "50%", label: "Reduction in operational costs" },
              { metric: "70%", label: "Improvement in application performance" },
              { metric: "99.9%", label: "Uptime for critical systems" }
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
              In today's fast-paced digital landscape, legacy infrastructure can be a significant drag on business agility and innovation. Outdated systems, monolithic architectures, and manual processes create bottlenecks, increase operational costs, and expose your organization to security risks. Infrastructure modernization is not just about replacing old hardware; it's about fundamentally re-architecting your IT foundation to be more agile, scalable, and resilient.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-[#051C2C]/80 leading-relaxed"
            >
              We help you move from a reactive, maintenance-focused IT model to a proactive, value-driven one. By leveraging cloud-native technologies, automation, and modern architectural patterns, we transform your infrastructure into a strategic asset that enables rapid innovation, improves operational efficiency, and provides a solid foundation for future growth. Our approach focuses on delivering measurable business outcomes, ensuring that your modernization efforts are directly aligned with your strategic goals.
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
              Our Infrastructure Modernization Capabilities
            </h2>
            <p className="text-xl text-[#051C2C]/60 max-w-2xl">
              We offer a comprehensive suite of services to help you modernize your IT infrastructure.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                title: "Cloud Adoption & Migration",
                description: "Develop and execute a seamless cloud adoption strategy, migrating your workloads to the right cloud environment for your needs."
              },
              {
                title: "Containerization & Orchestration",
                description: "Leverage Docker and Kubernetes to containerize your applications and automate their deployment, scaling, and management."
              },
              {
                title: "Infrastructure as Code (IaC)",
                description: "Implement IaC practices to automate the provisioning and management of your infrastructure, ensuring consistency and repeatability."
              },
              {
                title: "CI/CD & DevOps Automation",
                description: "Build a robust CI/CD pipeline to automate your software delivery process, from code commit to production deployment."
              },
              {
                title: "Hybrid & Multi-Cloud Strategy",
                description: "Design and implement a hybrid or multi-cloud strategy that gives you the flexibility to run your workloads in the optimal environment."
              },
              {
                title: "Site Reliability Engineering (SRE)",
                description: "Implement SRE principles to improve the reliability, performance, and scalability of your systems."
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
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl eb-garamond font-bold mb-4">
              Our Approach to <span className="text-[#00d4ff]">Infrastructure Transformation</span>
            </h2>
            <p className="text-lg text-white/60 max-w-3xl mx-auto">
              We follow a proven methodology to ensure your infrastructure modernization journey is a success.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 sm:gap-12">
            {[
              {
                title: "1. Assess & Strategize",
                description: "We start by assessing your current infrastructure, identifying pain points, and defining a clear modernization strategy and roadmap."
              },
              {
                title: "2. Design & Implement",
                description: "We design a modern, scalable, and resilient architecture and then implement it using best-in-class tools and technologies."
              },
              {
                title: "3. Optimize & Manage",
                description: "We help you optimize your new infrastructure for cost, performance, and security, and provide ongoing management and support."
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
            className="text-3xl sm:text-4xl font-serif font-bold text-center mb-12"
          >
            Success Stories in Infrastructure Modernization
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group relative"
            >
              <Link href="/cases/retail-cloud-migration">
                <div className="relative overflow-hidden rounded-lg">
                  <img src="https://images.unsplash.com/photo-placeholder" alt="Retail Cloud Migration" className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 p-6 sm:p-8">
                  <span className="text-xs font-bold uppercase tracking-widest text-white/80">Retail</span>
                  <h3 className="text-2xl font-serif font-bold text-white mt-2">Global Retailer Achieves 30% Cost Savings with Cloud Migration</h3>
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
              <Link href="/cases/finance-platform-engineering">
                <div className="relative overflow-hidden rounded-lg">
                  <img src="https://images.unsplash.com/photo-placeholder" alt="Financial Services Platform Engineering" className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 p-6 sm:p-8">
                  <span className="text-xs font-bold uppercase tracking-widest text-white/80">Financial Services</span>
                  <h3 className="text-2xl font-serif font-bold text-white mt-2">FinTech Leader Accelerates Innovation with a Modern Platform</h3>
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
            className="text-3xl font-serif font-bold text-center mb-12 text-[#051C2C]"
          >
            Continue Your Transformation Journey
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {relatedCapabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <BainHoverCard title={capability.title} description={capability.description} link={capability.link} />
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
            className="text-3xl sm:text-4xl font-serif font-bold mb-6"
          >
            Ready to Build a Future-Ready Infrastructure?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto mb-8"
          >
            Let's discuss how our infrastructure modernization services can help you reduce costs, improve agility, and accelerate innovation. Schedule a free consultation with our experts today.
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
