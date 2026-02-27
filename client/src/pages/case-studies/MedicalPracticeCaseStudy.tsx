import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { SEO } from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { ArrowRight, ArrowLeft, Quote } from "lucide-react";

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

// Key metrics
const metrics = [
  { value: "35%", label: "Reduction in patient wait times" },
  { value: "180", label: "Staff members across 12 clinics" },
  { value: "10", label: "Weeks to network-wide deployment" },
  { value: "22%", label: "Increase in appointment utilization" }
];

// Timeline milestones
const timeline = [
  {
    phase: "Discovery",
    duration: "Week 1-2",
    description: "NexDyne analyzed scheduling data across all 12 clinics, identifying patterns in no-shows, late arrivals, appointment durations, and provider utilization. The analysis revealed significant variation in scheduling efficiency between locations."
  },
  {
    phase: "Model Development",
    duration: "Week 3-5",
    description: "Using historical data from over 200,000 appointments, our team developed predictive models for no-show probability, optimal appointment duration by visit type, and patient flow patterns throughout the day."
  },
  {
    phase: "Integration",
    duration: "Week 6-8",
    description: "The predictive scheduling system was integrated with the practice's existing EHR and practice management software. Real-time dashboards were deployed for front desk staff and clinic managers."
  },
  {
    phase: "Rollout",
    duration: "Week 9-10",
    description: "Phased deployment began with three pilot clinics, followed by network-wide rollout. Staff training emphasized both the technology and updated scheduling protocols designed to maximize the system's effectiveness."
  }
];

// Results breakdown
const results = [
  {
    category: "Patient Experience",
    items: [
      "Average wait time reduced from 23 minutes to 15 minutes",
      "Patient satisfaction scores increased by 18%",
      "Same-day appointment availability improved by 40%"
    ]
  },
  {
    category: "Operational Efficiency",
    items: [
      "Provider utilization increased from 72% to 88%",
      "No-show rate reduced from 18% to 11%",
      "Overbooking accuracy improved, reducing patient overlap"
    ]
  },
  {
    category: "Financial Impact",
    items: [
      "Revenue per provider increased by 15%",
      "Staff overtime reduced by 25%",
      "Annual capacity equivalent to adding two providers"
    ]
  }
];

export default function MedicalPracticeCaseStudy() {
  return (
    <div className="min-h-screen bg-white text-charcoal font-sans">
      <SEO 
        title="Medical Practice Network Deploys Predictive Scheduling | Case Study" 
        description="How a network of 12 clinics with 180 staff members used AI-powered predictive scheduling to reduce patient wait times by 35% and improve appointment utilization by 22%."
        canonical="/capabilities/ai-technology-consulting/case-study/medical-practice"
      />

      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-emerald-900 via-emerald-800 to-slate-900 overflow-hidden">
        <div className="container relative z-10 px-4 sm:px-6 md:px-12">
          {/* Breadcrumb */}
          <Link href="/capabilities/ai-technology-consulting">
            <span className="inline-flex items-center text-white/70 hover:text-white text-sm mb-8 transition-colors cursor-pointer">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to AI & Technology Consulting
            </span>
          </Link>

          <div className="max-w-4xl">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xs sm:text-sm font-medium tracking-[0.2em] text-white/60 uppercase mb-4 block"
            >
              Healthcare | Case Study
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white leading-[1.15] mb-6"
            >
              Medical practice network deploys predictive scheduling to optimize patient flow
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-white/70 leading-relaxed max-w-3xl"
            >
              A network of 12 primary care and specialty clinics with 180 staff members partnered with NexDyne to implement AI-powered scheduling optimization, reducing patient wait times by 35% while increasing appointment utilization across the network.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Key Metrics Bar */}
      <section className="bg-emerald-800 py-8">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((metric, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl sm:text-4xl font-bold text-white mb-1">{metric.value}</div>
                <div className="text-sm text-white/60">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="max-w-3xl mx-auto">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.span variants={fadeInUp} className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase mb-4 block">
                The Challenge
              </motion.span>
              <motion.h2 variants={fadeInUp} className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-charcoal mb-8">
                The hidden cost of inefficient scheduling
              </motion.h2>
              <motion.div variants={fadeInUp} className="prose prose-lg text-muted-foreground leading-relaxed">
                <p>
                  This physician-owned practice network had grown through acquisition over 15 years, bringing together primary care, internal medicine, and specialty clinics under unified management. But each clinic had retained its own scheduling practices, creating inconsistent patient experiences and operational inefficiencies.
                </p>
                <p>
                  Patients complained about long wait times, while providers felt rushed or underutilized depending on the day. No-show rates averaged 18% across the network, with some clinics experiencing rates as high as 25%. Front desk staff spent hours each day making reminder calls and managing schedule changes.
                </p>
                <p>
                  The practice's leadership calculated that scheduling inefficiency was costing the network the equivalent of two full-time providers in lost capacity—capacity they desperately needed as the region's population grew.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 md:py-24 bg-slate-50">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="max-w-3xl mx-auto">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.span variants={fadeInUp} className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase mb-4 block">
                The Solution
              </motion.span>
              <motion.h2 variants={fadeInUp} className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-charcoal mb-8">
                Predictive intelligence for patient flow
              </motion.h2>
              <motion.div variants={fadeInUp} className="prose prose-lg text-muted-foreground leading-relaxed">
                <p>
                  NexDyne deployed a predictive scheduling system that transforms how the practice manages patient flow. The system analyzes historical patterns to predict no-show probability for each appointment, recommend optimal scheduling sequences, and dynamically adjust appointment durations based on visit type and patient history.
                </p>
                <p>
                  For patients likely to no-show, the system triggers automated outreach through their preferred channel—text, email, or phone call. High-risk appointments are strategically overbooked, while complex cases receive appropriate time buffers.
                </p>
                <p>
                  Real-time dashboards give clinic managers visibility into the day's schedule, highlighting potential bottlenecks before they occur. Providers can see their upcoming patient mix and prepare accordingly.
                </p>
              </motion.div>
            </motion.div>
          </div>

          {/* Implementation Timeline */}
          <div className="max-w-4xl mx-auto mt-16">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xl font-serif font-bold text-charcoal mb-8 text-center"
            >
              Implementation Timeline
            </motion.h3>
            <div className="space-y-6">
              {timeline.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="flex-shrink-0 w-32">
                    <div className="text-sm font-bold text-charcoal">{item.phase}</div>
                    <div className="text-xs text-muted-foreground">{item.duration}</div>
                  </div>
                  <div className="flex-1 pb-6 border-l-2 border-emerald-200 pl-6">
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="mb-12"
            >
              <motion.span variants={fadeInUp} className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase mb-4 block">
                The Results
              </motion.span>
              <motion.h2 variants={fadeInUp} className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-charcoal mb-6">
                Better care through smarter scheduling
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-lg text-muted-foreground leading-relaxed">
                Within three months of network-wide deployment, the practice achieved measurable improvements in patient experience, operational efficiency, and financial performance.
              </motion.p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {results.map((result, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-emerald-50 rounded-xl p-6"
                >
                  <h3 className="text-lg font-bold text-charcoal mb-4">{result.category}</h3>
                  <ul className="space-y-3">
                    {result.items.map((item, j) => (
                      <li key={j} className="text-sm text-muted-foreground leading-relaxed pl-4 border-l-2 border-emerald-300">
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 md:py-24 bg-emerald-900">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <Quote className="w-12 h-12 text-white/20 mx-auto mb-6" />
            <motion.blockquote 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xl sm:text-2xl font-serif text-white leading-relaxed mb-8"
            >
              "Our providers used to dread looking at their schedules—some days were impossibly packed, others had gaps that cost us revenue. Now the schedule flows naturally, patients wait less, and our team goes home on time. It's transformed how we practice medicine."
            </motion.blockquote>
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="text-white font-medium">Chief Medical Officer</div>
              <div className="text-white/60 text-sm">Regional Medical Practice Network</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Looking Forward Section */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="max-w-3xl mx-auto">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.span variants={fadeInUp} className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase mb-4 block">
                Looking Forward
              </motion.span>
              <motion.h2 variants={fadeInUp} className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-charcoal mb-8">
                Expanding AI across the care continuum
              </motion.h2>
              <motion.div variants={fadeInUp} className="prose prose-lg text-muted-foreground leading-relaxed">
                <p>
                  With scheduling optimization delivering clear results, the practice network is now exploring additional AI applications with NexDyne. Priority initiatives include predictive staffing models to optimize clinical support allocation, and patient risk stratification to identify individuals who may benefit from proactive outreach.
                </p>
                <p>
                  The practice has also begun sharing anonymized outcome data to help NexDyne refine its healthcare AI models, contributing to improvements that will benefit healthcare organizations across the country.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-24 bg-slate-900">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white mb-6"
            >
              Ready to optimize your patient flow?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-white/70 mb-8"
            >
              Learn how NexDyne's healthcare AI solutions can help your practice deliver better care more efficiently.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/contact">
                <span className="inline-flex items-center px-8 py-4 bg-white text-charcoal font-semibold rounded-full hover:bg-subtle transition-all cursor-pointer group">
                  Schedule a Consultation
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link href="/industries/healthcare">
                <span className="inline-flex items-center px-8 py-4 border border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all cursor-pointer">
                  Healthcare Solutions
                </span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Case Studies */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl font-serif font-bold text-charcoal mb-8">Related Case Studies</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/capabilities/ai-technology-consulting/case-study/accounting-firm">
                <div className="group p-6 border border-slate-200 rounded-xl hover:border-slate-300 hover:shadow-sm transition-all cursor-pointer">
                  <span className="text-xs font-medium tracking-wider text-muted-foreground uppercase">Professional Services</span>
                  <h4 className="text-lg font-serif font-bold text-charcoal mt-2 group-hover:text-secondary transition-colors">
                    Regional accounting firm automates document processing, reducing manual work by 70%
                  </h4>
                  <span className="inline-flex items-center text-sm text-muted-foreground mt-4 group-hover:text-secondary transition-colors">
                    Read case study <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
              <Link href="/capabilities/ai-technology-consulting/case-study/credit-union">
                <div className="group p-6 border border-slate-200 rounded-xl hover:border-slate-300 hover:shadow-sm transition-all cursor-pointer">
                  <span className="text-xs font-medium tracking-wider text-muted-foreground uppercase">Financial Services</span>
                  <h4 className="text-lg font-serif font-bold text-charcoal mt-2 group-hover:text-secondary transition-colors">
                    Credit union transforms member services with AI-powered analytics
                  </h4>
                  <span className="inline-flex items-center text-sm text-muted-foreground mt-4 group-hover:text-secondary transition-colors">
                    Read case study <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
