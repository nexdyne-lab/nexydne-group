import React, { useEffect } from "react";
import { useLocation, Link } from "wouter";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { 
  Code, 
  Globe, 
  Zap, 
  Shield, 
  CheckCircle2,
  Share2,
  Layers,
  Cpu,
  Network,
  Workflow,
  ArrowRight,
  ArrowLeft
} from "lucide-react";
import BainHoverCard from "@/components/BainHoverCard";
import { SEO } from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";

export default function SystemIntegration() {
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
      title: "DevOps & Security",
      description: "Ship faster with automated pipelines that have compliance baked in.",
      link: "/solutions/enterprise-transformation/devops-automation"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-[#051C2C] selection:bg-[#0077B5] selection:text-white">
      <SEO 
        title="System Integration" 
        description="Unify your digital core. We connect disparate apps, data, and partners into a seamless, synchronized ecosystem."
        canonical="/solutions/enterprise-transformation/api-integration"
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
              Integration &<br />
              <span className="text-[#0077B5]">APIs</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-2xl mb-10">
              Unify your digital core. We connect disparate apps, data, and partners into a seamless, synchronized ecosystem.
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
              src="/images/system-integration-abstract.jpg" 
              alt="System Integration Visualization" 
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
            <h2 className="text-2xl eb-garamond font-bold text-[#051C2C]">Our Experience & Impact</h2>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { metric: "200+", label: "Integrations delivered across industries" },
              { metric: "85%", label: "Faster time-to-market for new features" },
              { metric: "99.9%", label: "API uptime across deployments" }
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
              Integration isn't just plumbing; it's the enabler of agility. When your systems talk, your business moves faster. When they don't, every initiative becomes a multi-month IT project.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-[#051C2C]/80 leading-relaxed"
            >
              We've helped organizations break down data silos, automate cross-system workflows, and build API-first architectures that turn internal capabilities into competitive advantages.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-[#051C2C]/80 leading-relaxed"
            >
              Silos are strategy killers—when sales can't see inventory and finance can't see real-time revenue, everyone loses. APIs are products with their own roadmaps and developer experience. Event-driven is the future—modern systems react to events in real-time, enabling automation that was previously impossible.
            </motion.p>
          </div>
        </div>
      </section>

      {/* How We Can Help Section - Integration & APIs Capabilities */}
      <section className="py-24 bg-white">
        <div className="container px-4 md:px-12">
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
              Our Integration & API Capabilities
            </h2>
            <p className="text-xl text-[#051C2C]/60 max-w-2xl">
              End-to-end integration services from strategy to implementation to ongoing management.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "API Design & Development",
                description: "Design RESTful and GraphQL APIs with developer-friendly documentation. Build APIs that are secure, scalable, and easy to consume."
              },
              {
                title: "System Integration",
                description: "Connect ERP, CRM, and legacy systems into a unified ecosystem. Enable real-time data flow across your entire technology stack."
              },
              {
                title: "iPaaS Implementation",
                description: "Deploy and configure MuleSoft, Boomi, or Workato. Build reusable connectors and integration patterns for faster delivery."
              },
              {
                title: "Event-Driven Architecture",
                description: "Implement event streaming with Kafka, RabbitMQ, or cloud-native services. Enable real-time reactions and decoupled systems."
              },
              {
                title: "API Gateway & Management",
                description: "Deploy Kong, Apigee, or AWS API Gateway. Implement rate limiting, authentication, and analytics for your API portfolio."
              },
              {
                title: "B2B & Partner Integration",
                description: "Connect with suppliers, customers, and partners via EDI, APIs, or file-based integration. Automate B2B transactions securely."
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
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80" 
                alt="API integration visualization" 
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
                The difference isn't luck. It's process. We've refined our approach over 200+ integrations, learning what works for companies your size. We know how to design clean API contracts, build resilient middleware, and avoid the integration debt that plagues most organizations.
              </p>
              
              <p className="text-xl text-[#051C2C]/70 leading-relaxed">
                More importantly, we know when to use point-to-point versus hub-and-spoke architectures—saving you from unnecessary complexity.
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
              Connect systems that were never meant to talk
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Design for the ecosystem",
                description: "We don't just connect two systems—we architect for your entire technology landscape. APIs become strategic assets that enable future integrations, not one-off fixes."
              },
              {
                title: "Build for reliability",
                description: "We implement patterns that handle failure gracefully. Circuit breakers, retry logic, and graceful degradation ensure one system's problems don't cascade across your business."
              },
              {
                title: "Govern for scale",
                description: "As your API portfolio grows, so does complexity. We establish versioning, documentation, and monitoring practices that keep your integration layer manageable."
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
              The Power of Unity
            </span>
            <h2 className="text-4xl md:text-5xl eb-garamond font-bold text-[#051C2C] mb-6">
              When your systems talk, your business moves faster.
            </h2>
          </motion.div>

          {/* H100 Hover Effect Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Seamless Orchestration",
                description: "Bridge ERP, CRM, and legacy mainframes with event-driven architectures that ensure data consistency."
              },
              {
                title: "Real-Time Intelligence",
                description: "Stop waiting for batch jobs. Deliver data in real-time for up-to-the-second decision making."
              },
              {
                title: "API-First Economy",
                description: "Turn internal capabilities into external products with secure, developer-friendly APIs."
              },
              {
                title: "Zero-Trust Security",
                description: "Rigorous OAuth 2.0, JWT, and API Gateway policies ensure every connection is authenticated."
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
              Integration Toolkit
            </span>
            <h2 className="text-3xl md:text-4xl eb-garamond font-bold text-[#051C2C] mb-4">
              Modern Integration Technologies
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We leverage best-in-class tools to build scalable, maintainable integrations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                category: "Protocols", 
                subtitle: "Modern Standards",
                icon: "🔗",
                tools: ["RESTful APIs", "GraphQL", "gRPC & Protobuf"] 
              },
              { 
                category: "Gateways", 
                subtitle: "Control Plane",
                icon: "🛡️",
                tools: ["Kong / Apigee", "AWS API Gateway", "Azure API Management"] 
              },
              { 
                category: "Streaming", 
                subtitle: "Event Bus",
                icon: "⚡",
                tools: ["Apache Kafka", "RabbitMQ", "Amazon SQS/SNS"] 
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
                See how we've connected enterprises to their ecosystems.
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
                title: "Unified Commerce Platform",
                category: "Retail",
                description: "Connecting 50+ point-of-sale systems, e-commerce platforms, and inventory systems into a single view.",
                image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop",
                link: "/cases/unified-commerce"
              },
              {
                title: "Healthcare Interoperability",
                category: "Healthcare",
                description: "Building FHIR-compliant APIs that enable seamless patient data exchange across 20+ hospital systems.",
                image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2670&auto=format&fit=crop",
                link: "/cases/healthcare-interoperability"
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
              <h3 className="text-2xl md:text-3xl font-serif font-bold mb-2">The API Strategy Playbook</h3>
              <p className="text-white/80">A comprehensive guide to building API-first architectures.</p>
            </div>
            <Link href="/insights/api-strategy-playbook">
              <Button className="bg-white text-[#0077B5] hover:bg-gray-100 px-8 py-4 font-semibold whitespace-nowrap">
                Download the Playbook <ArrowRight className="ml-2 w-4 h-4 inline" />
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
              Ready to connect your systems?
            </h2>
            <p className="text-xl text-white/80 mb-10">
              Let's discuss how our integration expertise can help you build a unified digital ecosystem.
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
