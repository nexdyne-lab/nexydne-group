import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { SEO } from "@/components/SEO";
import { ArrowRight, ArrowLeft, CheckCircle2, BarChart3, Cpu, Zap, Target, Clock, TrendingUp, FileSearch, Settings, LineChart } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";

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

// Core capabilities of ProcessFlow AI
const capabilities = [
  {
    title: "Process Mining & Mapping",
    description: "Automatically discover and visualize your actual business processes from system logs. Identify bottlenecks, redundancies, and optimization opportunities that manual analysis misses.",
    icon: FileSearch,
    benefits: ["Automated process discovery", "Real-time bottleneck detection", "Compliance gap identification"]
  },
  {
    title: "AI Automation Simulation",
    description: "Before implementing any changes, simulate AI-driven automation scenarios to predict outcomes. Test different approaches in a risk-free environment.",
    icon: Settings,
    benefits: ["Risk-free scenario testing", "Predictive outcome modeling", "Resource optimization planning"]
  },
  {
    title: "ROI Quantification",
    description: "Get concrete numbers before you invest. Our ROI engine calculates expected returns, payback periods, and efficiency gains based on your specific operational data.",
    icon: LineChart,
    benefits: ["Data-driven investment decisions", "Clear payback timelines", "Stakeholder-ready business cases"]
  },
  {
    title: "Rapid Deployment",
    description: "Move from analysis to implementation in weeks, not months. Our pre-built automation templates and integration frameworks accelerate time-to-value.",
    icon: Zap,
    benefits: ["Pre-built automation templates", "Seamless system integration", "Phased rollout support"]
  }
];

// How it works steps
const processSteps = [
  {
    step: "01",
    title: "Connect & Discover",
    description: "We connect to your existing systems—ERP, CRM, workflow tools—and automatically extract process data. No disruption to your operations."
  },
  {
    step: "02",
    title: "Map & Analyze",
    description: "ProcessFlow AI builds a complete visual map of your processes, highlighting inefficiencies, compliance risks, and automation opportunities."
  },
  {
    step: "03",
    title: "Simulate & Quantify",
    description: "We model different automation scenarios, showing you exactly what each approach will deliver in terms of time savings, cost reduction, and quality improvement."
  },
  {
    step: "04",
    title: "Implement & Monitor",
    description: "Once you approve the approach, we deploy automation solutions and provide ongoing monitoring to ensure sustained performance."
  }
];

// Results metrics
const metrics = [
  { value: "85%", label: "Average efficiency improvement", description: "Across all ProcessFlow AI implementations" },
  { value: "6-8", label: "Weeks to first results", description: "From initial assessment to live automation" },
  { value: "3.2x", label: "Average ROI", description: "Within the first 12 months of deployment" },
  { value: "70%", label: "Reduction in manual tasks", description: "For document-heavy processes" }
];

// Use cases
const useCases = [
  {
    industry: "Financial Services",
    title: "Loan Processing Automation",
    description: "Automate document collection, verification, and approval workflows. Reduce processing time from days to hours while improving compliance.",
    results: "65% faster loan processing"
  },
  {
    industry: "Healthcare",
    title: "Patient Intake Optimization",
    description: "Streamline patient registration, insurance verification, and appointment scheduling. Reduce wait times and administrative burden.",
    results: "40% reduction in intake time"
  },
  {
    industry: "Professional Services",
    title: "Invoice & Billing Automation",
    description: "Automate time tracking, invoice generation, and payment reconciliation. Eliminate manual data entry and reduce billing errors.",
    results: "80% reduction in billing errors"
  }
];

export default function ProcessFlowAI() {
  return (
    <div className="min-h-screen bg-white text-[#1A1A1A]">
      <SEO 
        title="ProcessFlow AI - Intelligent Process Optimization" 
        description="ProcessFlow AI uses advanced process mining to map your operations, simulate automation scenarios, and quantify ROI before implementation. Achieve 85% average efficiency improvement."
        canonical="/capabilities/ai-technology-consulting/processflow-ai"
      />

      <Navigation />

      {/* Hero Section - Clean minimal design */}
      <section className="relative min-h-[85vh] flex items-center pt-20 overflow-hidden bg-black">
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Breadcrumbs variant="light" />
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05] mb-4 eb-garamond">
                ProcessFlow AI
              </h1>
              
              <p className="text-xl text-white leading-relaxed max-w-xl">
                Our flagship accelerator uses process mining expertise to rapidly map your operations, simulate AI-driven automation scenarios, and quantify ROI before implementation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="hidden lg:flex items-center justify-center"
            >
              <img 
                src="/images/processflow-abstract.jpg" 
                alt="ProcessFlow AI Visualization" 
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
            <motion.span variants={fadeInUp} className="text-xs font-medium tracking-[0.2em] text-slate-500 uppercase mb-4 block">
              Core Capabilities
            </motion.span>
            <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 eb-garamond">
              What ProcessFlow AI delivers
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-slate-600 leading-relaxed">
              Four integrated capabilities that transform how you understand and optimize your operations.
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
                <div className="w-14 h-14 bg-slate-900 rounded-xl flex items-center justify-center mb-6">
                  <capability.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{capability.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{capability.description}</p>
                <ul className="space-y-2">
                  {capability.benefits.map((benefit, j) => (
                    <li key={j} className="flex items-center text-sm text-slate-700">
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

      {/* How It Works Section */}
      <section className="py-24 bg-slate-50">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <motion.span variants={fadeInUp} className="text-xs font-medium tracking-[0.2em] text-slate-500 uppercase mb-4 block">
              The Process
            </motion.span>
            <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 eb-garamond">
              How ProcessFlow AI works
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-slate-600 leading-relaxed">
              A proven four-step methodology that delivers results in weeks, not months.
            </motion.p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {processSteps.map((step, i) => (
              <motion.div 
                key={i}
                variants={fadeInUp}
                className="relative"
              >
                <div className="text-6xl font-bold text-slate-200 mb-4">{step.step}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed">{step.description}</p>
                {i < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 right-0 translate-x-1/2">
                    <ArrowRight className="w-6 h-6 text-slate-300" />
                  </div>
                )}
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
            <motion.span variants={fadeInUp} className="text-xs font-medium tracking-[0.2em] text-slate-500 uppercase mb-4 block">
              Industry Applications
            </motion.span>
            <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 eb-garamond">
              ProcessFlow AI in action
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-slate-600 leading-relaxed">
              See how organizations across industries are using ProcessFlow AI to transform their operations.
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
                className="bg-slate-900 rounded-2xl p-8 text-white"
              >
                <span className="text-xs font-medium tracking-[0.15em] text-white/60 uppercase mb-4 block">
                  {useCase.industry}
                </span>
                <h3 className="text-xl font-bold mb-4">{useCase.title}</h3>
                <p className="text-white/70 mb-6 leading-relaxed">{useCase.description}</p>
                <div className="pt-4 border-t border-white/10">
                  <div className="text-2xl font-bold text-emerald-400">{useCase.results}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 eb-garamond"
            >
              Ready to optimize your operations?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-white/70 mb-10 max-w-2xl mx-auto"
            >
              Schedule a demo to see how ProcessFlow AI can identify automation opportunities 
              and quantify ROI for your specific operations.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/contact">
                <span className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-900 font-semibold rounded-full hover:bg-gray-100 transition-all cursor-pointer group">
                  Schedule a Demo
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
