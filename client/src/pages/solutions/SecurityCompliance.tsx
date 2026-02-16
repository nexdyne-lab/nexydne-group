import { motion } from "framer-motion";
import { ArrowRight, Shield, Lock, Eye, FileCheck, AlertTriangle, Server } from "lucide-react";
import BainHoverCard from "@/components/BainHoverCard";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function SecurityCompliance() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#051C2C] selection:bg-[#0077B5] selection:text-white">
      <SEO 
        title="Security & Compliance" 
        description="Build security into your systems from the start. SOC 2, HIPAA, PCI, and industry-specific compliance frameworks implemented with practical, risk-based approaches."
        canonical="/solutions/enterprise-transformation/security-compliance"
      />
      <Navigation />
      
      {/* Hero Section - Dark Background */}
      <section className="relative min-h-[70vh] flex items-center pt-20 bg-black">
        <div className="container px-4 md:px-12 grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link href="/solutions/enterprise-transformation" className="inline-flex items-center text-white/60 hover:text-white mb-6 text-sm transition-colors">
              <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
              Technology
            </Link>
            
            <h1 className="text-5xl md:text-7xl eb-garamond font-bold tracking-tight text-white leading-[1.05] mb-4">
              Security &<br />
              <span className="text-[#0077B5]">Compliance</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-2xl mb-10">
              Build security into your systems from the start, not as an afterthought. SOC 2, HIPAA, PCI—whatever your industry requires, we implement it with practical, risk-based approaches.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button className="bg-white hover:bg-gray-200 text-black px-8 py-6 text-base font-semibold transition-all">
                  Assess Your Security
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
              src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80" 
              alt="Security & Compliance" 
              className="w-full h-auto rounded-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Our Experience & Impact - Bain Style with Border-Left Accent */}
      <section className="py-20 bg-white border-b border-gray-200">
        <div className="container px-4 md:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-[#051C2C] mb-12"
          >
            Our Experience & Impact
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { metric: "100+", label: "compliance certifications achieved for clients across industries" },
              { metric: "Zero", label: "breaches in systems we've designed and implemented" },
              { metric: "50%", label: "average reduction in compliance audit preparation time" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`${index > 0 ? 'border-l border-gray-200 pl-8' : ''}`}
              >
                <div>
                  <div className="text-5xl md:text-6xl font-bold text-[#051C2C] mb-4">{item.metric}</div>
                  <p className="text-lg text-[#051C2C]/60">{item.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Thought Leadership - 2-Column Layout */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl eb-garamond font-bold text-[#051C2C] leading-tight">
                Security is a business enabler, not a cost center.
              </h2>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6 text-lg text-[#051C2C]/80 leading-relaxed"
            >
              <p>
                Most companies treat security as a checkbox exercise—something to satisfy auditors and check off compliance requirements. But security done right is a competitive advantage. It builds customer trust, enables new business opportunities, and protects the value you've created.
              </p>
              <p>
                The challenge is balancing security with usability and speed. Overly restrictive controls frustrate users and slow down innovation. Too little security exposes you to breaches that can destroy your reputation overnight.
              </p>
              <p>
                We take a risk-based approach. We identify what matters most, implement controls that address real threats, and build security into your development and operations processes so it doesn't slow you down.
              </p>
              <ul className="space-y-3 mt-6">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#06b6d4] mt-2 flex-shrink-0"></span>
                  <span>Security architecture that enables rather than restricts</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#06b6d4] mt-2 flex-shrink-0"></span>
                  <span>Compliance frameworks implemented efficiently</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#06b6d4] mt-2 flex-shrink-0"></span>
                  <span>DevSecOps practices that build security into CI/CD</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Approach Section - 4-Step Numbered Format */}
      <section className="py-24 bg-[#0a1628] text-white">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0077B5] mb-6 block">
              Our Approach
            </span>
            <h2 className="text-4xl md:text-5xl eb-garamond font-bold">
              Security that protects without slowing you down.
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {[
              { num: "01", title: "Assess", desc: "Evaluate your current security posture, identify gaps, and prioritize based on actual risk—not theoretical threats." },
              { num: "02", title: "Design", desc: "Architect security controls that protect without impeding. Solutions that fit your technology stack and culture." },
              { num: "03", title: "Implement", desc: "Deploy identity management, encryption, monitoring, and compliance controls with minimal business disruption." },
              { num: "04", title: "Operate", desc: "Establish incident response, continuous monitoring, and improvement processes that evolve with threats." }
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-7xl font-serif text-white/10 mb-4">{step.num}</div>
                <h3 className="text-xl font-serif font-bold text-white mb-3">{step.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center">
            <Link href="/contact">
              <Button className="bg-[#0077B5] hover:bg-[#005a8c] text-white px-8 py-6 text-base font-semibold transition-all">
                Start Your Security Assessment
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How We Can Help - H100 Capability Cards */}
      <section className="py-24 bg-[#f8f8f7]">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0077B5] mb-6 block">
              How We Can Help
            </span>
            <h2 className="text-4xl md:text-5xl eb-garamond font-bold text-[#051C2C] mb-6">
              Our Security & Compliance Capabilities
            </h2>
            <p className="text-xl text-[#051C2C]/60 max-w-2xl">
              Comprehensive security services from assessment to implementation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: FileCheck,
                title: "Compliance Frameworks",
                description: "SOC 2, HIPAA, PCI-DSS, GDPR, ISO 27001, and industry-specific regulations. We implement the controls and documentation you need to pass audits."
              },
              {
                icon: Shield,
                title: "Security Architecture",
                description: "Zero-trust architectures, defense-in-depth strategies, and secure-by-design principles. We build security into your systems from the foundation."
              },
              {
                icon: Lock,
                title: "Identity & Access Management",
                description: "Single sign-on, multi-factor authentication, privileged access management, and role-based access controls. Secure access without friction."
              },
              {
                icon: Eye,
                title: "Security Operations",
                description: "SIEM implementation, threat detection, incident response, and 24/7 monitoring. We help you detect and respond to threats before they become breaches."
              },
              {
                icon: AlertTriangle,
                title: "Vulnerability Management",
                description: "Penetration testing, vulnerability scanning, and remediation prioritization. We find weaknesses before attackers do."
              },
              {
                icon: Server,
                title: "Cloud Security",
                description: "AWS, Azure, and GCP security configurations. Cloud-native security tools, infrastructure as code security, and container security."
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

      {/* Client Results Section */}
      <section className="py-24 bg-white">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0077B5] mb-6 block">
              Client Results
            </span>
            <h2 className="text-4xl md:text-5xl eb-garamond font-bold text-[#051C2C]">
              Security that enables business growth
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                category: "HEALTHCARE",
                title: "Health tech startup achieves HIPAA compliance in 90 days",
                description: "A digital health company needed HIPAA compliance to sign enterprise customers. We implemented the required controls and documentation, enabling them to close their first hospital system deal.",
                image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80"
              },
              {
                category: "FINTECH",
                title: "Payment processor passes PCI-DSS audit on first attempt",
                description: "A growing fintech company needed PCI-DSS Level 1 certification. We designed their secure architecture from scratch and guided them through a successful audit.",
                image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80"
              }
            ].map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Link href="/case-studies" className="block">
                  <div className="relative overflow-hidden rounded-xl aspect-[16/10] mb-6">
                    <img 
                      src={study.image} 
                      alt={study.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-[#0077B5] text-white text-xs font-bold uppercase tracking-wider rounded">
                        {study.category}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4 group-hover:text-[#0077B5] transition-colors leading-tight">
                    {study.title}
                  </h3>
                  <p className="text-[#051C2C]/60 text-sm leading-relaxed mb-4">
                    {study.description}
                  </p>
                  <div className="flex items-center text-[#0077B5] text-sm font-semibold group-hover:translate-x-2 transition-transform duration-300">
                    Read case study <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Insights Section */}
      <section className="py-24 bg-[#f8f8f7]">
        <div className="container px-4 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0077B5] mb-6 block">
                Insights
              </span>
              <h2 className="text-4xl md:text-5xl eb-garamond font-bold text-[#051C2C]">
                Latest Insights
              </h2>
              <p className="text-xl text-[#051C2C]/60 mt-4">
                Expert perspectives on security and compliance.
              </p>
            </motion.div>
            <Link href="/insights">
              <Button variant="outline" className="border-[#051C2C]/20 text-[#051C2C] hover:bg-[#051C2C]/5 bg-transparent transition-all duration-300">
                View all insights
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                category: "Compliance",
                readTime: "8 min read",
                title: "SOC 2 Type II: A Practical Guide",
                description: "What you actually need to know about achieving and maintaining SOC 2 compliance.",
                link: "/insights/soc2-guide"
              },
              {
                category: "Security",
                readTime: "6 min read",
                title: "Zero Trust: Beyond the Buzzword",
                description: "How to implement zero trust architecture in a way that actually improves security.",
                link: "/insights/zero-trust-implementation"
              },
              {
                category: "DevSecOps",
                readTime: "7 min read",
                title: "Shifting Security Left",
                description: "Integrating security into your development pipeline without slowing down releases.",
                link: "/insights/shift-left-security"
              }
            ].map((insight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={insight.link} className="group block h-full">
                  <div className="h-full p-8 rounded-xl bg-white border border-gray-200 hover:border-[#0077B5]/50 transition-all duration-300 hover:shadow-lg">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-[#0077B5] text-xs font-bold uppercase tracking-wider">{insight.category}</span>
                      <span className="text-[#051C2C]/40">•</span>
                      <span className="text-[#051C2C]/60 text-sm">{insight.readTime}</span>
                    </div>
                    <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4 group-hover:text-[#0077B5] transition-colors leading-tight">
                      {insight.title}
                    </h3>
                    <p className="text-[#051C2C]/60 text-sm leading-relaxed mb-6">
                      {insight.description}
                    </p>
                    <div className="flex items-center text-[#0077B5] text-sm font-semibold group-hover:translate-x-2 transition-transform duration-300">
                      Read article <ArrowRight className="ml-2 w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Capabilities Section */}
      <section className="py-24 bg-white">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0077B5] mb-6 block">
              Related Capabilities
            </span>
            <h2 className="text-4xl md:text-5xl eb-garamond font-bold text-[#051C2C] mb-6">
              Explore related capabilities
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                title: "Cloud Infrastructure",
                description: "Secure cloud foundations on AWS, Azure, and GCP. Build environments with security baked in from the start.",
                link: "/solutions/enterprise-transformation/cloud-infrastructure"
              },
              {
                title: "Data Platform Modernization",
                description: "Modern data platforms with built-in governance, encryption, and access controls.",
                link: "/solutions/enterprise-transformation/data-platform"
              },
              {
                title: "Application Development",
                description: "Secure software development practices. Build applications that protect user data by design.",
                link: "/solutions/enterprise-transformation/app-development"
              }
            ].map((capability, index) => (
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

      {/* CTA Section - Blue Background */}
      <section className="py-24 bg-[#0077B5]">
        <div className="container px-4 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl eb-garamond font-bold text-white mb-6">
              Ready to strengthen your security posture?
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
              Let's discuss how we can help you build security that protects your business and enables growth.
            </p>
            <Link href="/contact">
              <Button className="bg-white hover:bg-gray-100 text-[#051C2C] px-10 py-6 text-lg font-semibold transition-all">
                Start Your Security Assessment
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
