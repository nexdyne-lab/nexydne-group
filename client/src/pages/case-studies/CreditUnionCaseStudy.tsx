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
  { value: "45%", label: "Improvement in member satisfaction" },
  { value: "85", label: "Employees served" },
  { value: "12", label: "Weeks to full deployment" },
  { value: "28%", label: "Increase in cross-sell success" }
];

// Timeline milestones
const timeline = [
  {
    phase: "Assessment",
    duration: "Week 1-3",
    description: "NexDyne conducted a comprehensive analysis of the credit union's member data landscape, identifying fragmented systems across lending, deposits, and member services. The assessment revealed that relationship managers lacked a unified view of member needs and behaviors."
  },
  {
    phase: "Data Integration",
    duration: "Week 4-6",
    description: "Our team integrated data from the core banking system, loan origination platform, digital banking channels, and member service records into a unified analytics layer. Privacy and compliance requirements were addressed through role-based access controls."
  },
  {
    phase: "Model Development",
    duration: "Week 7-9",
    description: "Using the integrated data, NexDyne developed predictive models for member needs anticipation, churn risk identification, and personalized product recommendations. Models were validated against historical outcomes before deployment."
  },
  {
    phase: "Deployment & Training",
    duration: "Week 10-12",
    description: "The Customer Intelligence Platform was deployed to frontline staff through an intuitive dashboard. Comprehensive training ensured adoption, with ongoing support from NexDyne's change management team."
  }
];

// Results breakdown
const results = [
  {
    category: "Member Experience",
    items: [
      "Net Promoter Score increased from 42 to 61",
      "Average call resolution time reduced by 25%",
      "Proactive outreach based on predicted needs"
    ]
  },
  {
    category: "Business Growth",
    items: [
      "Cross-sell conversion rate improved by 28%",
      "New member acquisition up 15% through referrals",
      "Loan portfolio quality improved with better risk insights"
    ]
  },
  {
    category: "Operational Efficiency",
    items: [
      "Relationship managers serve 30% more members",
      "Manual reporting time reduced by 70%",
      "Real-time dashboards replaced weekly batch reports"
    ]
  }
];

export default function CreditUnionCaseStudy() {
  return (
    <div className="min-h-screen bg-white text-[#1A1A1A] font-sans">
      <SEO 
        title="Credit Union Transforms Member Services with AI Analytics | Case Study" 
        description="How an 85-employee credit union implemented AI-powered analytics to improve member satisfaction by 45% and increase cross-sell success by 28%."
        canonical="/capabilities/ai-technology-consulting/case-study/credit-union"
      />

      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 overflow-hidden">
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
              Financial Services | Case Study
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white leading-[1.15] mb-6"
            >
              Credit union transforms member services with AI-powered analytics
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-white/70 leading-relaxed max-w-3xl"
            >
              A mid-sized credit union with 85 employees and 45,000 members implemented NexDyne's Customer Intelligence Platform to personalize member experiences and predict service needs, achieving a 45% improvement in member satisfaction scores.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Key Metrics Bar */}
      <section className="bg-blue-800 py-8">
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
              <motion.span variants={fadeInUp} className="text-xs font-medium tracking-[0.2em] text-slate-500 uppercase mb-4 block">
                The Challenge
              </motion.span>
              <motion.h2 variants={fadeInUp} className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-slate-900 mb-8">
                Competing with big banks on member experience
              </motion.h2>
              <motion.div variants={fadeInUp} className="prose prose-lg text-slate-600 leading-relaxed">
                <p>
                  This community credit union had served its members for over 60 years, building deep roots in the local community. But as national banks invested heavily in digital experiences and personalization, the credit union's leadership worried they were falling behind.
                </p>
                <p>
                  Member data was scattered across multiple systems—core banking, loan origination, digital banking, and call center logs. Relationship managers relied on memory and manual lookups to understand member needs. When a member called, staff often couldn't see the full picture of their relationship with the credit union.
                </p>
                <p>
                  The credit union's member satisfaction scores had plateaued, and younger members were increasingly drawn to digital-first competitors. Leadership knew they needed to leverage their data advantage—deep member relationships spanning decades—but lacked the tools to do so.
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
              <motion.span variants={fadeInUp} className="text-xs font-medium tracking-[0.2em] text-slate-500 uppercase mb-4 block">
                The Solution
              </motion.span>
              <motion.h2 variants={fadeInUp} className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-slate-900 mb-8">
                Unified intelligence for personalized service
              </motion.h2>
              <motion.div variants={fadeInUp} className="prose prose-lg text-slate-600 leading-relaxed">
                <p>
                  NexDyne deployed its Customer Intelligence Platform to unify the credit union's member data and deliver actionable insights to frontline staff. The platform creates a 360-degree view of each member, combining transaction history, product holdings, service interactions, and life events.
                </p>
                <p>
                  Predictive models identify members likely to need specific products—a first-time homebuyer, a family approaching college expenses, a retiree considering wealth management. The system also flags members at risk of leaving, enabling proactive retention outreach.
                </p>
                <p>
                  For relationship managers, the platform provides real-time recommendations during member interactions. When a member calls or visits a branch, staff immediately see relevant insights and suggested next-best actions.
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
              className="text-xl font-serif font-bold text-slate-900 mb-8 text-center"
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
                    <div className="text-sm font-bold text-slate-900">{item.phase}</div>
                    <div className="text-xs text-slate-500">{item.duration}</div>
                  </div>
                  <div className="flex-1 pb-6 border-l-2 border-blue-200 pl-6">
                    <p className="text-slate-600 leading-relaxed">{item.description}</p>
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
              <motion.span variants={fadeInUp} className="text-xs font-medium tracking-[0.2em] text-slate-500 uppercase mb-4 block">
                The Results
              </motion.span>
              <motion.h2 variants={fadeInUp} className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-slate-900 mb-6">
                Competing—and winning—on member experience
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-lg text-slate-600 leading-relaxed">
                Within three months of full deployment, the credit union saw measurable improvements in member satisfaction, business growth, and operational efficiency.
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
                  className="bg-blue-50 rounded-xl p-6"
                >
                  <h3 className="text-lg font-bold text-slate-900 mb-4">{result.category}</h3>
                  <ul className="space-y-3">
                    {result.items.map((item, j) => (
                      <li key={j} className="text-sm text-slate-600 leading-relaxed pl-4 border-l-2 border-blue-300">
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
      <section className="py-20 md:py-24 bg-blue-900">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <Quote className="w-12 h-12 text-white/20 mx-auto mb-6" />
            <motion.blockquote 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xl sm:text-2xl font-serif text-white leading-relaxed mb-8"
            >
              "We've always known our members better than any big bank could. Now we have the tools to prove it. Our staff can anticipate needs before members even ask, and that's created a level of loyalty we haven't seen in years."
            </motion.blockquote>
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="text-white font-medium">Chief Experience Officer</div>
              <div className="text-white/60 text-sm">Community Credit Union</div>
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
              <motion.span variants={fadeInUp} className="text-xs font-medium tracking-[0.2em] text-slate-500 uppercase mb-4 block">
                Looking Forward
              </motion.span>
              <motion.h2 variants={fadeInUp} className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-slate-900 mb-8">
                Expanding the intelligence advantage
              </motion.h2>
              <motion.div variants={fadeInUp} className="prose prose-lg text-slate-600 leading-relaxed">
                <p>
                  Building on the success of the Customer Intelligence Platform, the credit union is now working with NexDyne to extend AI capabilities to additional areas. Planned initiatives include automated loan decisioning to speed approvals while maintaining credit quality, and intelligent chatbot deployment for 24/7 member support.
                </p>
                <p>
                  The credit union has also become a reference customer for NexDyne, sharing their transformation story with other community financial institutions exploring similar journeys.
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
              Ready to transform your member experience?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-white/70 mb-8"
            >
              Learn how NexDyne's Customer Intelligence Platform can help your financial institution compete on experience.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/contact">
                <span className="inline-flex items-center px-8 py-4 bg-white text-slate-900 font-semibold rounded-full hover:bg-gray-100 transition-all cursor-pointer group">
                  Schedule a Consultation
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link href="/industries/financial-services">
                <span className="inline-flex items-center px-8 py-4 border border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all cursor-pointer">
                  Financial Services Solutions
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
            <h3 className="text-xl font-serif font-bold text-slate-900 mb-8">Related Case Studies</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/capabilities/ai-technology-consulting/case-study/accounting-firm">
                <div className="group p-6 border border-slate-200 rounded-xl hover:border-slate-300 hover:shadow-sm transition-all cursor-pointer">
                  <span className="text-xs font-medium tracking-wider text-slate-500 uppercase">Professional Services</span>
                  <h4 className="text-lg font-serif font-bold text-slate-900 mt-2 group-hover:text-[#3DCD58] transition-colors">
                    Regional accounting firm automates document processing, reducing manual work by 70%
                  </h4>
                  <span className="inline-flex items-center text-sm text-slate-600 mt-4 group-hover:text-[#3DCD58] transition-colors">
                    Read case study <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
              <Link href="/capabilities/ai-technology-consulting/case-study/medical-practice">
                <div className="group p-6 border border-slate-200 rounded-xl hover:border-slate-300 hover:shadow-sm transition-all cursor-pointer">
                  <span className="text-xs font-medium tracking-wider text-slate-500 uppercase">Healthcare</span>
                  <h4 className="text-lg font-serif font-bold text-slate-900 mt-2 group-hover:text-[#3DCD58] transition-colors">
                    Medical practice network deploys predictive scheduling to optimize patient flow
                  </h4>
                  <span className="inline-flex items-center text-sm text-slate-600 mt-4 group-hover:text-[#3DCD58] transition-colors">
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
