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

export default function CloudMigrationArchitecture() {
  const [location, setLocation] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const relatedCapabilities = [
    {
      title: "Infrastructure Modernization",
      description: "Modernize your IT infrastructure to support agile, cloud-native applications and services.",
      link: "/solutions/enterprise-transformation/infrastructure-modernization"
    },
    {
      title: "Platform Engineering",
      description: "Build and manage scalable, resilient platforms that accelerate application delivery and innovation.",
      link: "/solutions/enterprise-transformation/platform-engineering"
    },
    {
      title: "DevOps & CI/CD",
      description: "Implement automated pipelines for continuous integration and delivery, enabling faster, more reliable software releases.",
      link: "/solutions/enterprise-transformation/devops-cicd"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-charcoal selection:bg-primary selection:text-white">
      <SEO 
        title="Cloud Migration & Architecture" 
        description="Design and execute seamless cloud migration strategies, building resilient, scalable architectures on AWS, Azure, or GCP that align with business objectives."
        canonical="/solutions/enterprise-transformation/cloud-migration-architecture"
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
              Cloud Migration & Architecture
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 leading-relaxed max-w-2xl mb-6 sm:mb-10">
              Design and execute seamless cloud migration strategies, building resilient, scalable architectures on AWS, Azure, or GCP that align with business objectives.
            </p>
            
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <Link href="/contact">
                <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-base font-semibold transition-colors duration-200 ease-in-out">
                  Schedule a Consultation
                </Button>
              </Link>
              <Link href="/cases">
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-base font-semibold transition-all bg-transparent">
                  View Our Work
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
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663032212491/sWMnoOHwFQawAExj.jpg" 
              alt="Cloud Migration & Architecture Visualization" 
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
              { metric: "30%", label: "Reduction in TCO" },
              { metric: "50%", label: "Improvement in application performance" },
              { metric: "99.9%", label: "Uptime for migrated applications" }
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
              Migrating to the cloud is more than a technical shift; it's a strategic business decision that can unlock unprecedented agility, scalability, and innovation. However, a successful migration requires a robust, well-defined architecture that aligns with your long-term objectives. Without a clear strategy, organizations risk cost overruns, security vulnerabilities, and a failure to realize the full potential of the cloud.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-charcoal/80 leading-relaxed"
            >
              Our approach to cloud migration and architecture is grounded in a deep understanding of your business needs. We work with you to design and execute a seamless migration strategy, whether you're moving to AWS, Azure, or GCP. We build resilient, scalable architectures that not only support your current applications but also provide a foundation for future growth and innovation. From initial assessment to post-migration optimization, we ensure your cloud journey is a success.
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
              Our Cloud Migration & Architecture Capabilities
            </h2>
            <p className="text-xl text-charcoal/60 max-w-2xl">
              We offer a comprehensive suite of services to guide you through every stage of your cloud journey.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                title: "Cloud Readiness Assessment",
                description: "Evaluate your existing infrastructure, applications, and processes to determine your readiness for the cloud and identify the optimal migration strategy."
              },
              {
                title: "Migration Strategy & Planning",
                description: "Develop a detailed migration plan, including a timeline, budget, and resource allocation, to ensure a smooth and successful transition to the cloud."
              },
              {
                title: "Cloud Architecture Design",
                description: "Design a secure, scalable, and resilient cloud architecture that meets your business requirements and leverages the full capabilities of your chosen cloud platform."
              },
              {
                title: "Application Migration & Modernization",
                description: "Migrate your existing applications to the cloud and modernize them to take advantage of cloud-native services and architectures."
              },
              {
                title: "Cloud Security & Compliance",
                description: "Implement robust security controls and ensure compliance with industry regulations to protect your data and applications in the cloud."
              },
              {
                title: "Cloud Cost Optimization",
                description: "Optimize your cloud spending by identifying and eliminating waste, rightsizing resources, and leveraging cost-saving features of your cloud platform."
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
            <h2 className="text-4xl md:text-5xl eb-garamond font-bold mb-6">Our Approach</h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">We follow a proven, three-step methodology to ensure a successful cloud migration.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 sm:gap-12">
            {[
              { title: "Assess", description: "We begin by assessing your current environment to understand your business goals, technical requirements, and readiness for the cloud." },
              { title: "Migrate", description: "We execute the migration plan, moving your applications and data to the cloud with minimal disruption to your business operations." },
              { title: "Optimize", description: "We continuously monitor and optimize your cloud environment to ensure it is performing at its best and delivering the expected business value." }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-6xl font-bold text-primary mb-4">{`0${index + 1}`}</div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-white/70">{item.description}</p>
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
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl eb-garamond font-bold mb-6">Case Studies</h2>
            <p className="text-xl text-white/70 max-w-2xl">See how we've helped other organizations successfully migrate to the cloud.</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-8">
            {[
              { industry: "Financial Services", headline: "Global bank achieves 40% cost savings with AWS migration" },
              { industry: "Healthcare", headline: "Healthcare provider improves patient outcomes with Azure-based data platform" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 p-8 rounded-lg"
              >
                <div className="text-sm font-bold uppercase tracking-wider text-secondary mb-4">{item.industry}</div>
                <h3 className="text-2xl font-bold mb-4">{item.headline}</h3>
                <Link href="/cases" className="text-white font-semibold flex items-center hover:text-secondary transition-colors">
                  Read Case Study <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
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
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl eb-garamond font-bold text-charcoal mb-6">Related Capabilities</h2>
            <p className="text-xl text-charcoal/60 max-w-2xl">Explore other ways we can help you transform your enterprise.</p>
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

      <section className="py-12 sm:py-16 lg:py-24 bg-primary text-white">
        <div className="container px-4 sm:px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl eb-garamond font-bold mb-6">Ready to start your cloud journey?</h2>
            <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-8">Let us help you navigate the complexities of cloud migration and build a resilient, scalable architecture that drives business value.</p>
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
