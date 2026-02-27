import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { SEO } from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { ArrowRight, ArrowLeft, CheckCircle2, Cloud, Server, Shield, Zap, Database, Lock, RefreshCw, Globe } from "lucide-react";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

// Core capabilities
const capabilities = [
  {
    title: "AWS & Google Cloud Certified",
    description: "Our team holds advanced certifications across AWS and Google Cloud platforms. We bring deep expertise in cloud-native architectures, ensuring your modernization follows industry best practices.",
    icon: Cloud,
    benefits: ["Certified cloud architects", "Platform-agnostic approach", "Best practice implementation"]
  },
  {
    title: "Legacy System Migration",
    description: "Transform aging on-premise systems into modern cloud infrastructure. We handle the complexity of data migration, application refactoring, and cutover planning.",
    icon: Server,
    benefits: ["Zero-downtime migrations", "Data integrity assurance", "Phased transition support"]
  },
  {
    title: "Cloud-Native Architecture",
    description: "Design systems built for the cloud from the ground up. Microservices, containers, and serverless architectures that scale automatically with your business needs.",
    icon: Database,
    benefits: ["Auto-scaling infrastructure", "Cost-optimized resources", "High availability design"]
  },
  {
    title: "Security-by-Design",
    description: "Security isn't an afterthought—it's built into every layer. From identity management to data encryption, we ensure your cloud environment meets the strictest compliance requirements.",
    icon: Shield,
    benefits: ["Compliance-ready architecture", "End-to-end encryption", "Identity & access management"]
  }
];

// Migration pathways
const pathways = [
  {
    title: "Lift & Shift",
    description: "Rapid migration of existing workloads to the cloud with minimal changes. Ideal for organizations needing quick wins and immediate cost savings.",
    timeline: "4-8 weeks",
    bestFor: "Legacy systems with time-sensitive migration needs"
  },
  {
    title: "Re-Platform",
    description: "Optimize applications for cloud environments while preserving core functionality. Balance speed with modernization benefits.",
    timeline: "8-16 weeks",
    bestFor: "Applications that need cloud optimization without full rebuild"
  },
  {
    title: "Re-Architect",
    description: "Full transformation to cloud-native architecture. Microservices, containers, and modern DevOps practices for maximum agility.",
    timeline: "16-24 weeks",
    bestFor: "Strategic applications requiring long-term scalability"
  }
];

// Results metrics
const metrics = [
  { value: "40%", label: "Average cost reduction", description: "In infrastructure spending" },
  { value: "99.9%", label: "Uptime guarantee", description: "With our high-availability designs" },
  { value: "3x", label: "Faster deployment", description: "Compared to traditional infrastructure" },
  { value: "60%", label: "Reduction in maintenance", description: "Through managed cloud services" }
];

// Partner certifications
const certifications = [
  { name: "AWS Advanced Partner", logo: "/images/aws-partner.png" },
  { name: "Google Cloud Partner", logo: "/images/gcp-partner.png" },
  { name: "ISO 27001 Certified", logo: "/images/iso-27001.png" },
  { name: "SOC 2 Compliant", logo: "/images/soc2.png" }
];

// Use cases
const useCases = [
  {
    industry: "Financial Services",
    title: "Core Banking Modernization",
    description: "Migrate legacy banking systems to secure, compliant cloud infrastructure. Enable real-time processing and modern API integrations.",
    results: "50% reduction in transaction processing time"
  },
  {
    industry: "Healthcare",
    title: "HIPAA-Compliant Cloud",
    description: "Build healthcare infrastructure that meets strict regulatory requirements while enabling modern patient experiences.",
    results: "100% HIPAA compliance maintained"
  },
  {
    industry: "Professional Services",
    title: "Collaboration Platform Migration",
    description: "Move document management and collaboration tools to the cloud. Enable remote work and improve team productivity.",
    results: "35% improvement in team collaboration"
  }
];

export default function CloudModernization() {
  return (
    <div className="min-h-screen bg-white text-charcoal">
      <SEO 
        title="Cloud Modernization Pathways - Future-Proof Infrastructure" 
        description="Transform legacy systems into cloud-native architectures with NexDyne's certified modernization frameworks. AWS and Google Cloud partnerships ensure security, scalability, and operational resilience."
        canonical="/capabilities/ai-technology-consulting/cloud-modernization"
      />

      <Navigation />

      {/* Hero Section - Clean minimal design */}
      <section className="relative min-h-[85vh] flex items-center pt-20 overflow-hidden bg-charcoal">
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Breadcrumbs variant="light" />
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05] mb-4 eb-garamond">
                Cloud Modernization
              </h1>
              
              <p className="text-xl text-white leading-relaxed max-w-xl">
                Certified modernization frameworks leveraging our AWS and Google Cloud partnerships. Transform legacy systems into cloud-native architectures that ensure security, scalability, and operational resilience.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="hidden lg:flex items-center justify-center"
            >
              <img 
                src="/images/cloud-abstract.jpg" 
                alt="Cloud Modernization Visualization" 
                className="max-w-md"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Capabilities Section */}
      <section className="py-24 bg-white">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <motion.span variants={fadeInUp} className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase mb-4 block">
              Core Capabilities
            </motion.span>
            <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-6 eb-garamond">
              Enterprise-grade cloud expertise
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground leading-relaxed">
              Four pillars of cloud modernization that ensure your transformation delivers lasting value.
            </motion.p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8"
          >
            {capabilities.map((capability, i) => (
              <motion.div 
                key={i}
                variants={fadeInUp}
                className="group bg-slate-50 rounded-2xl p-8 hover:bg-slate-100 transition-colors"
              >
                <div className="w-14 h-14 bg-blue-900 rounded-xl flex items-center justify-center mb-6">
                  <capability.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-3">{capability.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{capability.description}</p>
                <ul className="space-y-2">
                  {capability.benefits.map((benefit, j) => (
                    <li key={j} className="flex items-center text-sm text-charcoal/80">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Migration Pathways Section */}
      <section className="py-24 bg-slate-50">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <motion.span variants={fadeInUp} className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase mb-4 block">
              Migration Options
            </motion.span>
            <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-6 eb-garamond">
              Choose your pathway
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground leading-relaxed">
              Three proven approaches tailored to your timeline, budget, and strategic objectives.
            </motion.p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {pathways.map((pathway, i) => (
              <motion.div 
                key={i}
                variants={fadeInUp}
                className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all"
              >
                <h3 className="text-2xl font-bold text-charcoal mb-4">{pathway.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{pathway.description}</p>
                <div className="space-y-4 pt-4 border-t border-slate-100">
                  <div>
                    <span className="text-xs font-medium tracking-wider text-muted-foreground uppercase">Timeline</span>
                    <div className="text-lg font-semibold text-blue-900">{pathway.timeline}</div>
                  </div>
                  <div>
                    <span className="text-xs font-medium tracking-wider text-muted-foreground uppercase">Best For</span>
                    <div className="text-sm text-muted-foreground">{pathway.bestFor}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24 bg-white">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <motion.span variants={fadeInUp} className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase mb-4 block">
              Industry Applications
            </motion.span>
            <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-6 eb-garamond">
              Cloud modernization in action
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground leading-relaxed">
              See how organizations across industries are transforming their infrastructure.
            </motion.p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {useCases.map((useCase, i) => (
              <motion.div 
                key={i}
                variants={fadeInUp}
                className="bg-blue-900 rounded-2xl p-8 text-white"
              >
                <span className="text-xs font-medium tracking-[0.15em] text-white/60 uppercase mb-4 block">
                  {useCase.industry}
                </span>
                <h3 className="text-xl font-bold mb-4">{useCase.title}</h3>
                <p className="text-white/70 mb-6 leading-relaxed">{useCase.description}</p>
                <div className="pt-4 border-t border-white/10">
                  <div className="text-2xl font-bold text-cyan-400">{useCase.results}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-900">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 eb-garamond"
            >
              Ready to modernize your infrastructure?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-white/70 mb-10 max-w-2xl mx-auto"
            >
              Schedule a cloud readiness assessment to identify the right modernization 
              pathway for your organization.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/contact">
                <span className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-900 font-semibold rounded-full hover:bg-subtle transition-all cursor-pointer group">
                  Get Cloud Assessment
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link href="/capabilities/ai-technology-consulting">
                <span className="inline-flex items-center justify-center px-8 py-4 border border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all cursor-pointer">
                  Explore All Accelerators
                </span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
