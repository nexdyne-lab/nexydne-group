import React, { useEffect } from "react";
import { useLocation, Link } from "wouter";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function DevOpsCICD() {
  const [location, setLocation] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const relatedCapabilities = [
    {
      title: "Cloud Migration & Architecture",
      description: "Design and execute seamless cloud migrations and architect robust, scalable cloud-native solutions.",
      link: "/solutions/enterprise-transformation/cloud-migration-architecture"
    },
    {
      title: "Platform Engineering",
      description: "Build and manage scalable, self-service internal developer platforms that accelerate the software lifecycle.",
      link: "/solutions/enterprise-transformation/platform-engineering"
    },
    {
      title: "Security & Compliance",
      description: "Integrate security and compliance seamlessly into your development lifecycle from day one.",
      link: "/solutions/enterprise-transformation/security-and-compliance"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-[#051C2C] selection:bg-[#0077B5] selection:text-white">
      <SEO 
        title="DevOps & CI/CD" 
        description="Implement end-to-end DevOps practices and CI/CD pipelines that enable rapid, reliable software delivery at scale."
        canonical="/solutions/enterprise-transformation/devops-cicd"
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
              DevOps & CI/CD
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 leading-relaxed max-w-2xl mb-6 sm:mb-10">
              Implement end-to-end DevOps practices and CI/CD pipelines that enable rapid, reliable software delivery at scale.
            </p>
            
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <Link href="/contact">
                <Button className="bg-white hover:bg-gray-200 text-black px-8 py-6 text-base font-semibold transition-all">
                  Schedule a Consultation
                </Button>
              </Link>
              <Link href="/cases">
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-base font-semibold transition-all bg-transparent">
                  See Our Work
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
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663032212491/wZYWQrsipeyyNBfa.jpg" 
              alt="DevOps & CI/CD Automation" 
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
            <h2 className="text-2xl font-bold text-[#051C2C]">The Impact of Integrated Delivery</h2>
          </motion.div>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              { metric: "80%", label: "Faster time-to-market" },
              { metric: "99.9%", label: "Improvement in deployment success rates" },
              { metric: "5x", label: "Increase in developer productivity" }
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
              In today's competitive landscape, the ability to deliver software quickly and reliably is not a luxury—it's a necessity. DevOps and CI/CD are the cultural and technical foundations that bridge the gap between development and operations, fostering a culture of collaboration, automation, and continuous improvement. It's about breaking down silos and creating a seamless flow from code commit to production deployment.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-[#051C2C]/80 leading-relaxed"
            >
              By automating the build, test, and deployment processes, CI/CD pipelines eliminate manual errors, reduce risk, and provide rapid feedback to development teams. This allows for smaller, more frequent releases, enabling your organization to respond to market changes faster, innovate more effectively, and deliver value to your customers with unprecedented speed and quality. It's the engine of modern digital transformation.
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
              Our DevOps & CI/CD Services
            </h2>
            <p className="text-xl text-[#051C2C]/60 max-w-2xl">
              We provide end-to-end solutions to accelerate your software delivery lifecycle.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                title: "CI/CD Pipeline Implementation",
                description: "Design and build robust, automated CI/CD pipelines tailored to your technology stack and business needs, from code commit to production deployment."
              },
              {
                title: "Infrastructure as Code (IaC)",
                description: "Automate the provisioning and management of your infrastructure using tools like Terraform and Ansible, ensuring consistency, repeatability, and scalability."
              },
              {
                title: "Containerization & Orchestration",
                description: "Leverage Docker and Kubernetes to containerize your applications and orchestrate them at scale, improving portability, efficiency, and resilience."
              },
              {
                title: "Monitoring & Observability",
                description: "Implement comprehensive monitoring and observability solutions to gain deep insights into your systems, enabling proactive issue detection and faster resolution."
              },
              {
                title: "DevSecOps Integration",
                description: "Embed security into every stage of your development lifecycle, from code scanning and dependency analysis to secure infrastructure and compliance automation."
              },
              {
                title: "Developer Experience (DevX)",
                description: "Enhance developer productivity and satisfaction by creating streamlined workflows, self-service tools, and a culture of continuous improvement."
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
                  
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-[#CC0000] font-semibold text-sm flex items-center">
                      Learn More <ArrowRight className="ml-1 w-4 h-4" />
                    </span>
                  </div>
                </div>
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
              Our Approach to DevOps Transformation
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              We follow a structured, three-phase approach to ensure a successful and sustainable DevOps adoption.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 sm:gap-12">
            {[
              {
                step: "01",
                title: "Assess & Strategize",
                description: "We begin by assessing your current development and operations processes, tools, and culture to identify key bottlenecks and opportunities. We then co-create a strategic roadmap for your DevOps transformation."
              },
              {
                step: "02",
                title: "Implement & Automate",
                description: "We implement the foundational elements of your DevOps practice, including CI/CD pipelines, infrastructure as code, and monitoring solutions. We automate everything possible to create a frictionless delivery process."
              },
              {
                step: "03",
                title: "Optimize & Scale",
                description: "We continuously monitor, measure, and optimize your DevOps capabilities, fostering a culture of learning and improvement. We help you scale your practices across the organization to maximize business impact."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <div className="text-5xl font-bold text-[#0077B5] mb-4">{item.step}</div>
                <h3 className="text-2xl font-serif font-bold text-white mb-4">{item.title}</h3>
                <p className="text-white/70 leading-relaxed">{item.description}</p>
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
            className="mb-16 text-center"
          >
            <h2 className="text-4xl md:text-5xl eb-garamond font-bold text-white mb-6">
              Success Stories
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              See how we've helped leading enterprises accelerate their software delivery and innovation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
            {[
              {
                industry: "FINTECH",
                headline: "Global investment bank achieves 10x faster deployment frequency with a new automated CI/CD pipeline."
              },
              {
                industry: "E-COMMERCE",
                headline: "Leading online retailer reduces infrastructure costs by 40% through a shift to containerization and Infrastructure as Code."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="bg-black/20 p-8 rounded-lg"
              >
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#00d4ff] mb-4 block">{item.industry}</span>
                <p className="text-xl font-semibold text-white/90 leading-snug">{item.headline}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-24 bg-gray-50">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-left"
          >
            <h2 className="text-4xl md:text-5xl eb-garamond font-bold text-[#051C2C] mb-6">
              Related Capabilities
            </h2>
            <p className="text-xl text-[#051C2C]/60 max-w-2xl">
              Explore other ways we can help you accelerate your enterprise transformation.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {relatedCapabilities.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Link href={item.link}>
                  <a className="group block h-full">
                    <div className="h-full p-8 bg-white border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                      <h3 className="text-2xl font-serif font-bold text-[#051C2C] mb-3 group-hover:text-[#0077B5] transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-[#051C2C]/70 mb-4">
                        {item.description}
                      </p>
                      <span className="font-semibold text-[#0077B5] flex items-center">
                        Learn More <ArrowRight className="ml-1 w-4 h-4" />
                      </span>
                    </div>
                  </a>
                </Link>
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
              Ready to Accelerate Your Delivery?
            </h2>
            <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Let's discuss how our DevOps and CI/CD expertise can help you build a competitive edge. Schedule a free consultation with our experts today.
            </p>
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
