import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, ArrowLeft, Cloud, Shield, Zap, CheckCircle2, Server, Clock, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";

export default function HealthcareCloudMigration() {
  return (
    <div className="min-h-screen bg-base font-sans text-white selection:bg-primary selection:text-white">
      <SEO 
        title="Healthcare Cloud Migration Case Study" 
        description="How a 240-employee healthcare SaaS platform achieved 99.99% uptime and 65% cost reduction through cloud migration."
        canonical="/cases/healthcare-cloud-migration"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0077B5] to-secondary opacity-20" />
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
              Case Study · Healthcare Tech
            </span>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-4">
              Health tech platform achieves 99.99% uptime after cloud migration
            </h1>
            
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-2xl">
              A 240-employee healthcare SaaS company transformed their legacy infrastructure to AWS, achieving enterprise-grade reliability and significant cost savings.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16 bg-white text-charcoal">
        <div className="container px-4 md:px-12">
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { value: "99.99%", label: "Uptime Achieved", icon: <Shield className="w-6 h-6" /> },
              { value: "65%", label: "Cost Reduction", icon: <DollarSign className="w-6 h-6" /> },
              { value: "9 months", label: "Migration Timeline", icon: <Clock className="w-6 h-6" /> },
              { value: "240", label: "Employees", icon: <Server className="w-6 h-6" /> }
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
                <div className="text-4xl font-bold text-primary mb-2">{metric.value}</div>
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
              <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-8">
                Legacy infrastructure threatening patient care
              </h2>
              
              <div className="space-y-6 text-lg text-charcoal/70 leading-relaxed">
                <p>
                  MedFlow, a healthcare SaaS platform serving 500+ medical practices, was running on aging on-premise infrastructure that had become a critical business risk. Their monolithic application, built over a decade, struggled with increasing load as their customer base grew.
                </p>
                <p>
                  Downtime incidents were becoming more frequent—averaging 4 hours per month—directly impacting patient scheduling, billing, and clinical workflows. Each minute of downtime meant medical practices couldn't access patient records, schedule appointments, or process insurance claims.
                </p>
                <p>
                  Beyond reliability, their infrastructure costs were spiraling. They were paying for peak capacity 24/7, even though actual usage varied dramatically throughout the day. Compliance requirements (HIPAA, SOC 2) were becoming harder to maintain with their aging security controls.
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
                <h3 className="text-xl font-bold mb-6">Key Challenges</h3>
                <ul className="space-y-4">
                  {[
                    "4+ hours of monthly downtime affecting patient care",
                    "Infrastructure costs consuming 35% of revenue",
                    "HIPAA compliance gaps creating regulatory risk",
                    "6-month deployment cycles slowing innovation",
                    "Single point of failure in database architecture",
                    "No disaster recovery capability"
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Cloud-native architecture built for healthcare
            </h2>
            <p className="text-xl text-white/60">
              We designed and executed a phased migration to AWS that prioritized reliability, security, and cost optimization—without disrupting the 500+ medical practices depending on the platform.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Multi-Region Architecture",
                description: "Deployed across two AWS regions with automatic failover, ensuring continuous availability even during regional outages.",
                icon: <Cloud className="w-6 h-6" />
              },
              {
                title: "Auto-Scaling Infrastructure",
                description: "Implemented elastic scaling that automatically adjusts capacity based on demand, eliminating over-provisioning costs.",
                icon: <Zap className="w-6 h-6" />
              },
              {
                title: "HIPAA-Compliant Security",
                description: "Built comprehensive security controls including encryption at rest and in transit, audit logging, and access management.",
                icon: <Shield className="w-6 h-6" />
              },
              {
                title: "Database Modernization",
                description: "Migrated from single-instance database to Amazon Aurora with read replicas and point-in-time recovery.",
                icon: <Server className="w-6 h-6" />
              },
              {
                title: "CI/CD Pipeline",
                description: "Established automated deployment pipelines enabling multiple daily releases with zero-downtime deployments.",
                icon: <CheckCircle2 className="w-6 h-6" />
              },
              {
                title: "Observability Platform",
                description: "Implemented comprehensive monitoring, alerting, and distributed tracing for proactive issue detection.",
                icon: <CheckCircle2 className="w-6 h-6" />
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
                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
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
            <h2 className="text-3xl md:text-4xl font-bold">
              9-month transformation journey
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {[
              {
                phase: "Months 1-2",
                title: "Assessment & Architecture",
                description: "Conducted comprehensive infrastructure audit, designed target AWS architecture, and created detailed migration plan with risk mitigation strategies."
              },
              {
                phase: "Months 3-4",
                title: "Foundation & Pilot",
                description: "Established AWS landing zone with HIPAA-compliant security controls. Migrated non-critical reporting workload as pilot to validate approach."
              },
              {
                phase: "Months 5-7",
                title: "Core Migration",
                description: "Executed wave-based migration of core application components. Implemented database migration with zero data loss using AWS DMS."
              },
              {
                phase: "Months 8-9",
                title: "Optimization & Cutover",
                description: "Performed final cutover with 15-minute planned downtime. Optimized costs through reserved instances and right-sizing. Decommissioned legacy infrastructure."
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
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
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
            <h2 className="text-3xl md:text-4xl font-bold">
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
              <h3 className="text-xl font-bold mb-6">Reliability Improvements</h3>
              <ul className="space-y-4">
                {[
                  "99.99% uptime (from 99.5%)",
                  "Zero unplanned downtime in 12 months post-migration",
                  "Automatic failover tested and validated quarterly",
                  "Mean time to recovery reduced from 45 minutes to 2 minutes"
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
              <h3 className="text-xl font-bold mb-6">Cost & Efficiency Gains</h3>
              <ul className="space-y-4">
                {[
                  "65% reduction in infrastructure costs",
                  "Deployment frequency increased from monthly to daily",
                  "Engineering productivity improved 40%",
                  "Achieved SOC 2 Type II certification"
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
            <p className="text-2xl md:text-3xl text-white leading-relaxed mb-8 italic">
              "NEXDYNE's Digital Transformation Roadmap gave us the confidence to migrate our entire infrastructure to AWS without disrupting customer operations. We achieved 99.99% uptime and reduced infrastructure costs by 65%. The transformation has been game-changing for our business."
            </p>
            <div>
              <p className="text-white font-bold text-lg">Dr. Emily Watson</p>
              <p className="text-white/60">Chief Technology Officer, MedFlow</p>
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
            <h2 className="text-3xl md:text-4xl font-bold">
              More transformation stories
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                category: "Fintech",
                title: "Payment processor scales to 50M transactions/day",
                link: "/cases/fintech-microservices",
                color: "from-secondary to-[#0077B5]"
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
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to transform your infrastructure?
            </h2>
            <p className="text-xl text-white/70 leading-relaxed mb-10">
              Let's discuss how we can help you achieve similar results.
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
