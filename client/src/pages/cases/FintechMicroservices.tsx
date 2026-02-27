import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, ArrowLeft, Layers, Zap, Shield, CheckCircle2, Server, Clock, TrendingUp, GitBranch } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";

export default function FintechMicroservices() {
  return (
    <div className="min-h-screen bg-base font-sans text-white selection:bg-primary selection:text-white">
      <SEO 
        title="Fintech Microservices Case Study" 
        description="How a 190-employee payment processor scaled to 50M daily transactions through microservices transformation."
        canonical="/cases/fintech-microservices"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary to-[#0077B5] opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-t from-base via-base/50 to-transparent" />
        </div>
        
        <div className="container px-4 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <Link href="/solutions/scalable-enterprise-transformation">
              <span className="inline-flex items-center text-sm text-white/60 hover:text-white mb-8 cursor-pointer transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Enterprise Transformation
              </span>
            </Link>
            
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6 block">
              Case Study · Fintech
            </span>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight text-white leading-[1.1] mb-4">
              Payment processor scales to 50M transactions per day
            </h1>
            
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-2xl">
              A 190-employee fintech startup rebuilt their core platform with microservices architecture and event-driven processing to handle exponential growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16 bg-white text-charcoal">
        <div className="container px-4 md:px-12">
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { value: "50M", label: "Daily Transactions", icon: <TrendingUp className="w-6 h-6" /> },
              { value: "8x", label: "Capacity Increase", icon: <Zap className="w-6 h-6" /> },
              { value: "12 months", label: "Transformation Time", icon: <Clock className="w-6 h-6" /> },
              { value: "190", label: "Employees", icon: <Server className="w-6 h-6" /> }
            ].map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                  {metric.icon}
                </div>
                <div className="text-4xl font-serif font-bold text-primary mb-2">{metric.value}</div>
                <div className="text-sm text-charcoal/60">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-24 md:py-32 bg-subtle text-charcoal">
        <div className="container px-4 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-start max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6 block">
                The Challenge
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold leading-tight mb-8">
                Monolithic architecture hitting scaling limits
              </h2>
              
              <div className="space-y-6 text-lg text-charcoal/70 leading-relaxed">
                <p>
                  PayStream, a rapidly growing payment processing platform, was experiencing the classic symptoms of monolithic architecture strain. Their single Ruby on Rails application, which had served them well during early growth, was now struggling to handle 6 million daily transactions—and their business was growing 40% year-over-year.
                </p>
                <p>
                  Peak processing times were causing latency spikes that triggered timeouts in merchant integrations. Database locks during high-volume periods created cascading failures. Every deployment required a maintenance window, limiting their ability to ship features and fixes quickly.
                </p>
                <p>
                  With enterprise clients demanding 99.99% uptime SLAs and transaction volumes projected to grow 8x over three years, PayStream needed a fundamental architecture transformation—not just incremental improvements.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-xl font-serif font-bold mb-6">Key Challenges</h3>
                <ul className="space-y-4">
                  {[
                    "Monolithic application hitting 6M transaction ceiling",
                    "Database contention causing latency spikes at peak times",
                    "4-hour deployment windows limiting release velocity",
                    "Single point of failure risking enterprise SLAs",
                    "Tightly coupled code preventing independent scaling",
                    "Technical debt slowing feature development"
                  ].map((challenge, i) => (
                    <li key={i} className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="text-charcoal/70">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 md:py-32 bg-base">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 max-w-3xl"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/60 mb-6 block">
              Our Solution
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
              Event-driven microservices architecture
            </h2>
            <p className="text-xl text-white/60">
              We designed and implemented a modern microservices architecture using event-driven patterns that could scale horizontally to handle 50M+ daily transactions while maintaining sub-100ms latency.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Domain-Driven Decomposition",
                description: "Decomposed the monolith into 12 bounded contexts including payments, settlements, fraud detection, and merchant management—each independently deployable.",
                icon: <Layers className="w-6 h-6" />
              },
              {
                title: "Event Sourcing & CQRS",
                description: "Implemented event sourcing for transaction processing, enabling complete audit trails and the ability to rebuild state from events.",
                icon: <GitBranch className="w-6 h-6" />
              },
              {
                title: "Apache Kafka Backbone",
                description: "Built an event streaming platform on Kafka handling 100K+ events per second with exactly-once delivery semantics.",
                icon: <Zap className="w-6 h-6" />
              },
              {
                title: "Kubernetes Orchestration",
                description: "Deployed on AWS EKS with auto-scaling policies that respond to transaction volume in real-time, scaling from 10 to 200 pods within minutes.",
                icon: <Server className="w-6 h-6" />
              },
              {
                title: "Distributed Tracing",
                description: "Implemented end-to-end observability with Jaeger and Prometheus, enabling rapid debugging across service boundaries.",
                icon: <CheckCircle2 className="w-6 h-6" />
              },
              {
                title: "Zero-Downtime Deployments",
                description: "Established blue-green deployment pipelines enabling multiple daily releases without service interruption.",
                icon: <Shield className="w-6 h-6" />
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 p-8 rounded-xl"
              >
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-6 text-primary">
                  {item.icon}
                </div>
                <h3 className="text-xl font-serif font-bold text-white mb-4">{item.title}</h3>
                <p className="text-white/60 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Timeline */}
      <section className="py-24 md:py-32 bg-white text-charcoal">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6 block">
              Implementation
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold">
              12-month transformation journey
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {[
              {
                phase: "Months 1-3",
                title: "Domain Analysis & Architecture",
                description: "Conducted domain-driven design workshops to identify bounded contexts. Designed target microservices architecture and event schemas. Built proof-of-concept for event sourcing pattern."
              },
              {
                phase: "Months 4-6",
                title: "Platform Foundation",
                description: "Established Kubernetes cluster on AWS EKS. Deployed Kafka cluster with multi-AZ redundancy. Built shared libraries for service communication, authentication, and observability."
              },
              {
                phase: "Months 7-9",
                title: "Service Extraction",
                description: "Extracted payment processing, fraud detection, and settlement services using strangler fig pattern. Implemented event-driven communication between services. Ran parallel processing to validate correctness."
              },
              {
                phase: "Months 10-12",
                title: "Migration & Optimization",
                description: "Completed migration of remaining services. Decommissioned monolith. Optimized auto-scaling policies based on production traffic patterns. Achieved 50M daily transaction capacity."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-8 mb-12 last:mb-0"
              >
                <div className="flex-shrink-0 w-24">
                  <span className="text-sm font-bold text-primary">{item.phase}</span>
                </div>
                <div className="flex-grow pb-12 border-l-2 border-primary/20 pl-8 relative">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-primary rounded-full" />
                  <h3 className="text-xl font-serif font-bold mb-3">{item.title}</h3>
                  <p className="text-charcoal/60 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-24 md:py-32 bg-subtle text-charcoal">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6 block">
              Results
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold">
              Measurable business impact
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-xl shadow-sm"
            >
              <h3 className="text-xl font-serif font-bold mb-6">Scale & Performance</h3>
              <ul className="space-y-4">
                {[
                  "50M daily transactions (8x increase)",
                  "P99 latency reduced from 800ms to 45ms",
                  "Auto-scaling responds to demand in under 2 minutes",
                  "Zero transaction loss during peak events"
                ].map((result, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-charcoal/70">{result}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-8 rounded-xl shadow-sm"
            >
              <h3 className="text-xl font-serif font-bold mb-6">Development Velocity</h3>
              <ul className="space-y-4">
                {[
                  "Deployment frequency: weekly → 10x daily",
                  "Lead time for changes: 3 weeks → 2 days",
                  "Mean time to recovery: 45 min → 5 min",
                  "Independent team deployments enabled"
                ].map((result, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-charcoal/70">{result}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 md:py-32 bg-base">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <p className="text-2xl md:text-3xl font-serif text-white leading-relaxed mb-8 italic">
              "Our legacy monolith was holding us back from scaling. NEXDYNE decomposed it into microservices, implemented CI/CD, and enabled us to deploy 10x more frequently with higher quality. Game-changing transformation that positioned us to win enterprise deals we couldn't pursue before."
            </p>
            <div>
              <p className="text-white font-serif font-bold text-lg">Marcus Johnson</p>
              <p className="text-white/60">VP of Engineering, PayStream</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Case Studies */}
      <section className="py-24 md:py-32 bg-white text-charcoal">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6 block">
              Related Case Studies
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold">
              More transformation stories
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                category: "Healthcare Tech",
                title: "Health tech platform achieves 99.99% uptime",
                link: "/cases/healthcare-cloud-migration",
                color: "from-[#0077B5] to-secondary"
              },
              {
                category: "Media & Entertainment",
                title: "Streaming platform handles 10x traffic spike",
                link: "/cases/media-streaming-scale",
                color: "from-[#0077B5] to-base"
              }
            ].map((caseStudy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={caseStudy.link}>
                  <div className="bg-subtle rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group">
                    <div className={`h-32 bg-gradient-to-br ${caseStudy.color}`} />
                    <div className="p-6">
                      <span className="text-xs font-bold uppercase tracking-wider text-primary mb-2 block">
                        {caseStudy.category}
                      </span>
                      <h3 className="text-xl font-serif font-bold group-hover:text-primary transition-colors">
                        {caseStudy.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
              Ready to scale your platform?
            </h2>
            <p className="text-xl text-white/70 leading-relaxed mb-10">
              Let's discuss how microservices architecture can unlock your growth potential.
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
