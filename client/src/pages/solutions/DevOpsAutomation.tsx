import React, { useEffect } from "react";
import { useLocation, Link } from "wouter";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { 
  GitBranch, 
  Terminal, 
  Zap, 
  Shield, 
  CheckCircle2,
  RefreshCw,
  Settings,
  Server,
  Lock,
  Activity,
  ArrowRight,
  ArrowLeft
} from "lucide-react";
import BainHoverCard from "@/components/BainHoverCard";
import { SEO } from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";

export default function DevOpsSecurity() {
  const [location, setLocation] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Related capabilities data
  const relatedCapabilities = [
    {
      title: "Data Modernization",
      description: "Transform legacy silos into intelligent data platforms that drive real-time insights.",
      link: "/solutions/enterprise-transformation/legacy-modernization"
    },
    {
      title: "Cloud Infrastructure",
      description: "Scalable, secure foundations on AWS, Azure, and GCP.",
      link: "/solutions/enterprise-transformation/cloud-infrastructure"
    },
    {
      title: "System Integration",
      description: "Connect disparate apps, data, and partners into a seamless ecosystem.",
      link: "/solutions/enterprise-transformation/api-integration"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-[#051C2C] selection:bg-[#0077B5] selection:text-white">
      <SEO 
        title="DevOps & Security" 
        description="Velocity meets security. Ship faster with automated pipelines that have compliance and safety baked in from day one."
        canonical="/solutions/enterprise-transformation/devops-automation"
      />
      <Navigation />

      {/* Section 1: Hero Section - Dark Background (F100) */}
      <section className="relative min-h-[70vh] flex items-center pt-20 bg-black">
        <div className="container px-4 md:px-12 grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Breadcrumbs variant="light" />
            
            <h1 className="text-5xl md:text-7xl eb-garamond font-bold tracking-tight text-white leading-[1.05] mb-4">
              DevOps & Security
            </h1>
            
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-2xl mb-10">
              Velocity meets security. Ship faster with automated pipelines that have compliance and safety baked in from day one.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button className="bg-white hover:bg-gray-200 text-black px-8 py-6 text-base font-semibold transition-all">
                  Schedule a Consultation
                </Button>
              </Link>
              <Link href="/case-studies">
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
              src="/images/devops-security-abstract.jpg" 
              alt="DevOps & Security Visualization" 
              className="w-full h-auto rounded-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Section 2: Our Experience & Impact (F100) */}
      <section className="py-20 bg-white border-b border-gray-200">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-[#051C2C]">Our Experience & Impact</h2>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { metric: "90%", label: "Faster release cycles for clients" },
              { metric: "99.9%", label: "Deployment success rate" },
              { metric: "70%", label: "Fewer security incidents post-implementation" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-5xl md:text-6xl font-bold text-[#051C2C] mb-3">{item.metric}</div>
                <p className="text-lg text-[#051C2C]/60">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Thought Leadership Paragraphs (F100) */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-12">
          <div className="max-w-4xl mx-auto space-y-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xl text-[#051C2C]/80 leading-relaxed"
            >
              Traditional security gates slow you down. They create friction between development and operations, turning every release into a multi-week ordeal of manual reviews and sign-offs.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-[#051C2C]/80 leading-relaxed"
            >
              We shift security left, making it an accelerator of innovation rather than a bottleneck. By embedding security into every stage of the development lifecycle, we help organizations ship faster while reducing risk.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-[#051C2C]/80 leading-relaxed"
            >
              Speed and security aren't trade-offs—the fastest organizations are also the most secure. Automation eliminates the human errors that cause most breaches. Compliance should be continuous, not an annual fire drill. Infrastructure is code, version-controlled, tested, and reproducible.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Section 4: Differentiator Section */}
      <section className="py-24 bg-white">
        <div className="container px-4 md:px-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image with accent block */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80" 
                alt="DevOps pipeline visualization" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
              {/* Accent block */}
              <div className="absolute bottom-6 right-6 w-24 h-24 bg-[#0077B5] rounded-lg" />
            </motion.div>
            
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl eb-garamond font-bold text-[#051C2C] leading-[1.1] mb-8">
                We've learned what works—and what doesn't.
              </h2>
              
              <p className="text-xl text-[#051C2C]/70 leading-relaxed mb-6">
                The difference isn't luck. It's process. We've refined our approach across dozens of DevSecOps transformations, learning what works for companies your size. We know how to build pipelines that are both fast and secure.
              </p>
              
              <p className="text-xl text-[#051C2C]/70 leading-relaxed">
                More importantly, we know when to automate and when to keep humans in the loop—avoiding the over-engineering that plagues most DevOps initiatives.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 5: Our Approach (3-Column Consulting Format) */}
      <section className="py-20 bg-[#051C2C]">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#00d4ff] mb-4 block">
              Our Approach
            </span>
            <h2 className="text-3xl md:text-5xl eb-garamond font-light text-white">
              Ship faster without sacrificing quality or security
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Automate the boring stuff",
                description: "Manual deployments, environment setup, and testing slow teams down and introduce errors. We build pipelines that handle the repetitive work so your engineers can focus on solving problems."
              },
              {
                title: "Bake security in from the start",
                description: "Security can't be an afterthought. We integrate vulnerability scanning, compliance checks, and access controls into your CI/CD pipeline—catching issues before they reach production."
              },
              {
                title: "Build a culture, not just tools",
                description: "Tools alone don't create DevOps success. We help teams adopt shared ownership, blameless postmortems, and continuous improvement practices that sustain velocity over time."
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
                <p className="text-gray-300 leading-relaxed">{pillar.description}</p>
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

      {/* Section 6: Key Benefits - H100 Hover Cards */}
      <section className="py-24 bg-[#f8f8f7]">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0077B5] mb-6 block">
              The DevSecOps Advantage
            </span>
            <h2 className="text-4xl md:text-5xl eb-garamond font-bold text-[#051C2C] mb-6">
              Security as an accelerator, not a bottleneck.
            </h2>
          </motion.div>

          {/* H100 Hover Effect Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Rapid Release Cycles",
                description: "Move from quarterly releases to on-demand deployment with CI/CD pipelines that reduce cycle time by 90%."
              },
              {
                title: "Automated Compliance",
                description: "Bake compliance checks (SOC2, HIPAA, GDPR) into the code itself, ensuring every commit is verified."
              },
              {
                title: "Infrastructure as Code",
                description: "Provision environments instantly with Terraform and Ansible, eliminating configuration drift."
              },
              {
                title: "Proactive Monitoring",
                description: "Full-stack observability that correlates logs, metrics, and traces for instant root cause analysis."
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

      {/* Section 7: Tech Stack Section (Preserved Unique Section - Enhanced) */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-12">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0077B5] mb-4 block">
              DevSecOps Toolchain
            </span>
            <h2 className="text-3xl md:text-4xl eb-garamond font-bold text-[#051C2C] mb-4">
              Enterprise-Grade Tools
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We leverage best-in-class tools to build secure, automated delivery pipelines.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                category: "CI/CD", 
                subtitle: "Automation Engines",
                icon: "⚙️",
                tools: ["GitHub Actions", "GitLab CI", "Jenkins"] 
              },
              { 
                category: "Infrastructure", 
                subtitle: "Provisioning & Config",
                icon: "🏗️",
                tools: ["Terraform", "Ansible", "Pulumi"] 
              },
              { 
                category: "Security", 
                subtitle: "Scanning & Compliance",
                icon: "🛡️",
                tools: ["SonarQube (SAST)", "OWASP ZAP (DAST)", "Snyk (Dependency)"] 
              }
            ].map((stack, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="group bg-gray-50 p-8 rounded-lg border border-gray-200 hover:border-[#0077B5] hover:shadow-lg transition-all h-full">
                  <div className="text-4xl mb-4">{stack.icon}</div>
                  <div className="text-2xl font-bold text-[#051C2C] mb-2 group-hover:text-[#0077B5] transition-colors">{stack.category}</div>
                  <p className="text-sm text-gray-500 mb-6">{stack.subtitle}</p>
                  <ul className="space-y-3">
                    {stack.tools.map((tool, j) => (
                      <li key={j} className="flex items-center gap-3 text-sm text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-[#0077B5] shrink-0" />
                        <span>{tool}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8: Case Studies (F100) */}
      <section className="py-24 bg-[#051C2C]">
        <div className="container px-4 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0077B5] mb-4 block">
                Client Results
              </span>
              <h2 className="text-3xl md:text-4xl eb-garamond font-bold text-white">
                See how we've transformed engineering organizations.
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
                title: "From 4 Releases to 400 Per Year",
                category: "Financial Services",
                description: "How a regional bank transformed their release cadence while maintaining regulatory compliance.",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
                link: "/cases/bank-devops-transformation"
              },
              {
                title: "Zero-Trust Security at Scale",
                category: "Healthcare",
                description: "Building a HIPAA-compliant CI/CD pipeline that processes 10,000 deployments monthly.",
                image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2670&auto=format&fit=crop",
                link: "/cases/healthcare-devsecops"
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
                    <div className="absolute inset-0 bg-gradient-to-t from-[#051C2C] via-[#051C2C]/50 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-8">
                      <span className="text-xs font-bold text-[#0077B5] mb-3 uppercase tracking-wider block">{study.category}</span>
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#0077B5] transition-colors">
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

      {/* Section 9: Featured Insight Banner (Preserved Unique Section) */}
      <section className="py-16 bg-[#0077B5]">
        <div className="container px-4 md:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-white">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/70 mb-2 block">Featured Insight</span>
              <h3 className="text-2xl md:text-3xl font-serif font-bold mb-2">The DevSecOps Maturity Model</h3>
              <p className="text-white/80">A comprehensive framework for building secure, high-velocity engineering teams.</p>
            </div>
            <Link href="/insights/devsecops-maturity-model">
              <Button className="bg-white text-[#0077B5] hover:bg-gray-100 px-8 py-4 font-semibold whitespace-nowrap">
                Download the Guide <ArrowRight className="ml-2 w-4 h-4 inline" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 10: Related Capabilities - H100 Hover */}
      <section className="py-24 bg-[#f8f8f7]">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0077B5] mb-4 block">
              Related Capabilities
            </span>
            <h2 className="text-3xl md:text-4xl eb-garamond font-bold text-[#051C2C]">
              Explore more Technology capabilities
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
                <BainHoverCard title={cap.title} description={cap.description} link={cap.link} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 11: CTA Section (F100 - Cyan Background) */}
      <section className="py-24 bg-[#0077B5]">
        <div className="container px-4 md:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl eb-garamond font-bold text-white mb-6">
              Ready to accelerate your engineering velocity?
            </h2>
            <p className="text-xl text-white/80 mb-10">
              Let's discuss how our DevSecOps expertise can help you ship faster and more securely.
            </p>
            <Link href="/contact">
              <Button className="bg-white hover:bg-gray-100 text-[#0077B5] px-10 py-6 text-lg font-semibold">
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
