import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, ArrowLeft, Clock, Calendar, Share2, Bookmark, Link2, Shield, Zap, Settings, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { RelatedContent } from "@/components/RelatedContent";

export default function EnterpriseIntegrationPlaybook() {
  return (
    <div className="min-h-screen bg-white font-sans text-charcoal selection:bg-primary selection:text-white">
      <SEO 
        title="The Modern Enterprise Integration Playbook" 
        description="A comprehensive guide to connecting legacy systems with modern cloud platforms while maintaining security and compliance."
        canonical="/insights/enterprise-integration-playbook"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <Link href="/insights">
              <span className="inline-flex items-center text-sm text-charcoal/60 hover:text-primary mb-8 cursor-pointer transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Insights
              </span>
            </Link>
            
            <div className="flex items-center gap-4 mb-6">
              <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider rounded-full">
                Whitepaper
              </span>
              <span className="text-sm text-charcoal/60 flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                15 min read
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight leading-[1.1] mb-4">
              The modern enterprise integration playbook
            </h1>
            
            <p className="text-xl md:text-2xl text-charcoal/70 leading-relaxed mb-8">
              A comprehensive guide to connecting legacy systems with modern cloud platforms while maintaining security and compliance.
            </p>
            
            <div className="flex items-center justify-between border-t border-b border-base/10 py-6">
              <div className="flex items-center gap-6">
                <div>
                  <p className="font-serif font-bold">NEXDYNE Architecture Team</p>
                  <p className="text-sm text-charcoal/60 flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    August 19, 2025
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <button className="p-2 hover:bg-base/5 rounded-full transition-colors">
                  <Share2 className="w-5 h-5 text-charcoal/60" />
                </button>
                <button className="p-2 hover:bg-base/5 rounded-full transition-colors">
                  <Bookmark className="w-5 h-5 text-charcoal/60" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="pb-16">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-5xl mx-auto"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[21/9]">
              <img 
                src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=2000&q=80" 
                alt="Enterprise Integration" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-base/60 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-24">
        <div className="container px-4 md:px-12">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="prose prose-lg max-w-none"
            >
              <p className="text-xl text-charcoal/80 leading-relaxed mb-8">
                Enterprise integration has always been challenging, but the stakes have never been higher. As organizations pursue digital transformation, they must connect decades-old legacy systems with modern cloud platforms, real-time data streams, and AI capabilities—all while maintaining security, compliance, and operational stability.
              </p>

              <p className="text-charcoal/70 leading-relaxed mb-6">
                This playbook distills our experience from 200+ integration projects into actionable guidance for mid-market enterprises navigating this complexity.
              </p>

              <h2 className="text-3xl font-serif font-bold mt-12 mb-6">The integration landscape has changed</h2>
              
              <p className="text-charcoal/70 leading-relaxed mb-6">
                Traditional enterprise integration focused on connecting a handful of on-premise systems through point-to-point interfaces or enterprise service buses (ESBs). Today's reality is far more complex:
              </p>

              <ul className="space-y-3 text-charcoal/70 mb-8">
                <li>Average mid-market company uses 200+ SaaS applications</li>
                <li>Real-time integration requirements have replaced batch processing</li>
                <li>APIs have become the primary integration mechanism</li>
                <li>Data volumes have grown 10-100x in the past decade</li>
                <li>Security and compliance requirements have intensified</li>
              </ul>

              <div className="bg-subtle p-8 rounded-xl my-12">
                <h3 className="text-xl font-serif font-bold mb-4">Key Finding</h3>
                <p className="text-charcoal/70 leading-relaxed mb-0">
                  Organizations with modern integration platforms achieve 60% faster time-to-market for new capabilities and 40% lower integration maintenance costs.
                </p>
              </div>

              <h2 className="text-3xl font-serif font-bold mt-12 mb-6">Integration architecture patterns</h2>

              <p className="text-charcoal/70 leading-relaxed mb-6">
                Successful enterprise integration requires choosing the right architectural patterns for different use cases. Here are the patterns we recommend:
              </p>
            </motion.div>

            {/* Patterns Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid md:grid-cols-2 gap-6 my-12"
            >
              {[
                {
                  icon: <Link2 className="w-6 h-6" />,
                  title: "API-Led Connectivity",
                  description: "Organize APIs into experience, process, and system layers for reusability and governance."
                },
                {
                  icon: <Zap className="w-6 h-6" />,
                  title: "Event-Driven Architecture",
                  description: "Use events for loose coupling between systems, enabling real-time responsiveness."
                },
                {
                  icon: <Settings className="w-6 h-6" />,
                  title: "Hybrid Integration Platform",
                  description: "Connect on-premise and cloud systems through a unified integration layer."
                },
                {
                  icon: <Shield className="w-6 h-6" />,
                  title: "Zero-Trust Integration",
                  description: "Implement security at every integration point, not just the perimeter."
                }
              ].map((pattern, index) => (
                <div key={index} className="bg-base p-6 rounded-xl text-white">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 text-primary">
                    {pattern.icon}
                  </div>
                  <h3 className="text-lg font-serif font-bold mb-2">{pattern.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{pattern.description}</p>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="prose prose-lg max-w-none"
            >
              <h2 className="text-3xl font-serif font-bold mt-12 mb-6">API-first integration strategy</h2>

              <p className="text-charcoal/70 leading-relaxed mb-6">
                APIs have become the lingua franca of enterprise integration. An API-first strategy treats APIs as products—designed for reusability, documented for discoverability, and managed throughout their lifecycle.
              </p>

              <h3 className="text-2xl font-serif font-bold mt-8 mb-4">API Design Principles</h3>
              <p className="text-charcoal/70 leading-relaxed mb-6">
                Design APIs for the consumer, not the provider. Use RESTful conventions for synchronous operations and event schemas for asynchronous communication. Version APIs explicitly and maintain backward compatibility.
              </p>

              <h3 className="text-2xl font-serif font-bold mt-8 mb-4">API Gateway & Management</h3>
              <p className="text-charcoal/70 leading-relaxed mb-6">
                Implement an API gateway to handle cross-cutting concerns: authentication, rate limiting, logging, and transformation. Use API management platforms to publish, monitor, and monetize APIs across the organization.
              </p>

              <h3 className="text-2xl font-serif font-bold mt-8 mb-4">Developer Experience</h3>
              <p className="text-charcoal/70 leading-relaxed mb-6">
                Build developer portals with interactive documentation, sandbox environments, and self-service onboarding. The easier APIs are to discover and use, the more value they create.
              </p>

              <div className="bg-primary/10 p-8 rounded-xl my-12 border-l-4 border-primary">
                <p className="text-charcoal/80 leading-relaxed mb-0 italic">
                  "The best integration is invisible. When systems work together seamlessly, users don't think about integration—they just get things done."
                </p>
                <p className="text-charcoal/60 mt-4 mb-0">— NEXDYNE Architecture Team</p>
              </div>

              <h2 className="text-3xl font-serif font-bold mt-12 mb-6">Legacy system integration strategies</h2>

              <p className="text-charcoal/70 leading-relaxed mb-6">
                Most enterprises can't simply replace legacy systems—they must integrate them into modern architectures while managing risk. Here are proven strategies:
              </p>

              <h3 className="text-2xl font-serif font-bold mt-8 mb-4">Strangler Fig Pattern</h3>
              <p className="text-charcoal/70 leading-relaxed mb-6">
                Gradually replace legacy functionality by routing traffic through a facade that directs requests to either legacy or modern systems. Over time, more traffic goes to modern systems until the legacy system can be decommissioned.
              </p>

              <h3 className="text-2xl font-serif font-bold mt-8 mb-4">Anti-Corruption Layer</h3>
              <p className="text-charcoal/70 leading-relaxed mb-6">
                Build a translation layer between legacy and modern systems that prevents legacy data models and concepts from "corrupting" modern designs. This enables clean architecture while maintaining integration.
              </p>

              <h3 className="text-2xl font-serif font-bold mt-8 mb-4">Change Data Capture</h3>
              <p className="text-charcoal/70 leading-relaxed mb-6">
                Use CDC tools to stream changes from legacy databases to modern systems in real-time, without modifying legacy applications. This enables data synchronization without legacy system changes.
              </p>

              <h2 className="text-3xl font-serif font-bold mt-12 mb-6">Security and compliance</h2>

              <p className="text-charcoal/70 leading-relaxed mb-6">
                Integration creates attack surface. Every connection between systems is a potential vulnerability. Modern integration security requires:
              </p>
            </motion.div>

            {/* Security Checklist */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-subtle p-8 rounded-xl my-12"
            >
              <h3 className="text-xl font-serif font-bold mb-6">Integration Security Checklist</h3>
              <ul className="space-y-4">
                {[
                  "OAuth 2.0 / OpenID Connect for API authentication",
                  "Mutual TLS for service-to-service communication",
                  "API keys with rotation policies for external integrations",
                  "Rate limiting and throttling to prevent abuse",
                  "Input validation and output encoding at every boundary",
                  "Comprehensive audit logging for compliance",
                  "Secrets management with vault solutions",
                  "Network segmentation and private endpoints"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-charcoal/70">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="prose prose-lg max-w-none"
            >
              <h2 className="text-3xl font-serif font-bold mt-12 mb-6">Implementation roadmap</h2>

              <p className="text-charcoal/70 leading-relaxed mb-6">
                Modernizing enterprise integration is a journey, not a project. We recommend a phased approach:
              </p>

              <p className="text-charcoal/70 leading-relaxed mb-6">
                <strong>Phase 1: Foundation (Months 1-3)</strong> — Establish integration platform and governance framework. Implement API gateway and management. Define standards for API design and security.
              </p>

              <p className="text-charcoal/70 leading-relaxed mb-6">
                <strong>Phase 2: Core Integrations (Months 4-8)</strong> — Migrate critical point-to-point integrations to the platform. Build reusable APIs for core business capabilities. Implement event streaming for real-time use cases.
              </p>

              <p className="text-charcoal/70 leading-relaxed mb-6">
                <strong>Phase 3: Scale & Optimize (Months 9-12)</strong> — Expand integration coverage across the enterprise. Build self-service capabilities for business teams. Optimize performance and cost.
              </p>

              <h2 className="text-3xl font-serif font-bold mt-12 mb-6">Conclusion</h2>

              <p className="text-charcoal/70 leading-relaxed mb-6">
                Enterprise integration is the connective tissue of digital transformation. Without robust integration capabilities, organizations cannot realize the benefits of cloud migration, AI adoption, or modern customer experiences. The playbook outlined here provides a roadmap for building integration capabilities that enable—rather than constrain—business agility.
              </p>

              <p className="text-charcoal/70 leading-relaxed mb-6">
                The key is starting with clear architecture principles, investing in the right platform capabilities, and building incrementally toward a connected enterprise.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Content */}
      <RelatedContent
        title="Related Insights"
        items={[
          {
            type: "Article",
            title: "Enterprise transformation in the AI era",
            description: "How leading enterprises are reimagining their operating models to harness AI.",
            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
            link: "/insights/enterprise-transformation-ai"
          },
          {
            type: "Article",
            title: "Building scalable data architectures",
            description: "The architectural patterns that enable enterprises to scale data operations.",
            image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
            link: "/insights/scalable-data-architecture"
          },
          {
            type: "Case Study",
            title: "Health tech platform achieves 99.99% uptime",
            description: "How cloud migration transformed healthcare SaaS reliability.",
            image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
            link: "/cases/healthcare-cloud-migration"
          }
        ]}
      />

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-base">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
              Ready to modernize your integration architecture?
            </h2>
            <p className="text-xl text-white/70 leading-relaxed mb-10">
              Let's discuss how to build a connected enterprise for your organization.
            </p>
            <Link href="/contact">
              <Button className="bg-primary hover:bg-primary/90 text-white px-10 py-6 text-lg font-semibold transition-all">
                Schedule a Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
