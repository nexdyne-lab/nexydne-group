import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { SEO } from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { ArrowRight, ArrowLeft, CheckCircle2, Users, GraduationCap, Target, BarChart3, MessageSquare, Lightbulb, TrendingUp, Heart } from "lucide-react";

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
    title: "Agentic AI Literacy Programs",
    description: "Comprehensive training programs that demystify AI for your entire organization. From executives to front-line staff, we build the understanding needed to embrace AI-driven transformation.",
    icon: GraduationCap,
    benefits: ["Role-based training curricula", "Hands-on AI workshops", "Executive AI briefings"]
  },
  {
    title: "Cultural Alignment Workshops",
    description: "Technology adoption fails when culture resists. Our workshops identify cultural barriers, build change champions, and create the organizational alignment needed for lasting transformation.",
    icon: Heart,
    benefits: ["Change readiness assessment", "Champion network development", "Resistance management"]
  },
  {
    title: "Performance Monitoring Systems",
    description: "Track adoption metrics that matter. Our monitoring systems measure not just usage, but actual business impact—ensuring your investment delivers measurable returns.",
    icon: BarChart3,
    benefits: ["Real-time adoption dashboards", "Business impact tracking", "Continuous optimization insights"]
  },
  {
    title: "Sustained Engagement Programs",
    description: "Adoption isn't a one-time event—it's an ongoing journey. We design engagement programs that maintain momentum, celebrate wins, and continuously reinforce new ways of working.",
    icon: Users,
    benefits: ["Ongoing coaching support", "Success story amplification", "Continuous learning pathways"]
  }
];

// Adoption framework phases
const frameworkPhases = [
  {
    phase: "Prepare",
    title: "Build the Foundation",
    description: "Assess organizational readiness, identify stakeholders, and develop a tailored change strategy aligned with your culture and goals.",
    activities: ["Stakeholder mapping", "Change impact analysis", "Communication planning"]
  },
  {
    phase: "Enable",
    title: "Develop Capabilities",
    description: "Deliver targeted training, build internal champions, and create the support structures needed for successful adoption.",
    activities: ["Training delivery", "Champion development", "Support infrastructure"]
  },
  {
    phase: "Embed",
    title: "Drive Adoption",
    description: "Launch with structured support, monitor adoption metrics, and actively manage resistance to ensure successful transition.",
    activities: ["Go-live support", "Adoption monitoring", "Resistance management"]
  },
  {
    phase: "Sustain",
    title: "Ensure Lasting Change",
    description: "Reinforce new behaviors, celebrate successes, and continuously optimize to ensure transformation becomes permanent.",
    activities: ["Performance tracking", "Continuous improvement", "Success amplification"]
  }
];

// Results metrics
const metrics = [
  { value: "92%", label: "User adoption rate", description: "Within 90 days of launch" },
  { value: "4.2x", label: "Faster time-to-value", description: "Compared to technology-only implementations" },
  { value: "85%", label: "Employee satisfaction", description: "With new technology post-adoption" },
  { value: "67%", label: "Reduction in support tickets", description: "Through proactive training" }
];

// Use cases
const useCases = [
  {
    industry: "Financial Services",
    title: "AI-Powered Risk Assessment Adoption",
    description: "Enabled 200+ risk analysts to embrace AI-driven risk models. Comprehensive training and change management ensured rapid adoption and trust in new systems.",
    results: "95% adoption in 60 days"
  },
  {
    industry: "Healthcare",
    title: "Clinical Decision Support Rollout",
    description: "Supported physicians and nurses in adopting AI-assisted diagnostic tools. Cultural alignment workshops addressed concerns about AI in clinical settings.",
    results: "88% clinician confidence in AI tools"
  },
  {
    industry: "Professional Services",
    title: "Intelligent Document Processing",
    description: "Transformed how legal teams work with AI-powered document review. Change champions and ongoing coaching ensured sustained adoption.",
    results: "75% reduction in manual review time"
  }
];

// Success factors
const successFactors = [
  {
    title: "Executive Sponsorship",
    description: "Visible leadership commitment that signals organizational priority and removes barriers to adoption."
  },
  {
    title: "Clear Communication",
    description: "Transparent messaging about the 'why' behind change, addressing concerns and building understanding."
  },
  {
    title: "User-Centric Design",
    description: "Solutions designed around how people actually work, minimizing disruption and maximizing value."
  },
  {
    title: "Continuous Feedback",
    description: "Active listening mechanisms that capture user input and drive rapid improvements."
  }
];

export default function IntelligentAdoption() {
  return (
    <div className="min-h-screen bg-white text-[#1A1A1A]">
      <SEO 
        title="Intelligent Adoption Suite - Change Management Excellence" 
        description="Ensure technology investments deliver lasting value with NexDyne's Intelligent Adoption Suite. Comprehensive change management, AI literacy programs, and cultural alignment workshops."
        canonical="/capabilities/ai-technology-consulting/intelligent-adoption"
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
                Intelligent Adoption
              </h1>
              
              <p className="text-xl text-white leading-relaxed max-w-xl">
                Technology alone doesn't drive transformation—people do. Our Intelligent Adoption Suite ensures your technology investments deliver lasting value through comprehensive change management, AI literacy programs, and cultural alignment workshops.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="hidden lg:flex items-center justify-center"
            >
              <img 
                src="/images/adoption-abstract.jpg" 
                alt="Intelligent Adoption Visualization" 
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
              People-centered transformation
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-slate-600 leading-relaxed">
              Four integrated capabilities that ensure your technology investments deliver lasting organizational value.
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
                <div className="w-14 h-14 bg-emerald-900 rounded-xl flex items-center justify-center mb-6">
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

      {/* Adoption Framework Section */}
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
              Our Framework
            </motion.span>
            <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 eb-garamond">
              The NexDyne Adoption Framework
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-slate-600 leading-relaxed">
              A proven four-phase approach that transforms technology implementations into lasting organizational change.
            </motion.p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {frameworkPhases.map((phase, i) => (
              <motion.div 
                key={i}
                variants={fadeInUp}
                className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-emerald-300 hover:shadow-lg transition-all"
              >
                <div className="text-xs font-bold tracking-[0.2em] text-emerald-600 uppercase mb-2">
                  Phase {i + 1}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{phase.phase}</h3>
                <p className="text-sm text-slate-500 mb-4">{phase.title}</p>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed">{phase.description}</p>
                <div className="pt-4 border-t border-slate-100">
                  <span className="text-xs font-medium tracking-wider text-slate-500 uppercase mb-2 block">Key Activities</span>
                  <ul className="space-y-1">
                    {phase.activities.map((activity, j) => (
                      <li key={j} className="text-sm text-slate-600 flex items-center">
                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2" />
                        {activity}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Success Factors Section */}
      <section className="py-24 bg-white">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.span variants={fadeInUp} className="text-xs font-medium tracking-[0.2em] text-slate-500 uppercase mb-4 block">
                What Drives Success
              </motion.span>
              <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 eb-garamond">
                The four pillars of successful adoption
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-lg text-slate-600 leading-relaxed mb-8">
                Based on hundreds of transformation engagements, we've identified the critical success 
                factors that separate successful adoptions from failed implementations.
              </motion.p>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-2 gap-6"
            >
              {successFactors.map((factor, i) => (
                <motion.div 
                  key={i}
                  variants={fadeInUp}
                  className="bg-slate-50 rounded-xl p-6"
                >
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{factor.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{factor.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
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
              Industry Applications
            </motion.span>
            <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 eb-garamond">
              Adoption excellence in action
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-slate-600 leading-relaxed">
              See how organizations across industries are achieving lasting transformation through people-centered change management.
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
                className="bg-emerald-900 rounded-2xl p-8 text-white"
              >
                <span className="text-xs font-medium tracking-[0.15em] text-white/60 uppercase mb-4 block">
                  {useCase.industry}
                </span>
                <h3 className="text-xl font-bold mb-4">{useCase.title}</h3>
                <p className="text-white/70 mb-6 leading-relaxed">{useCase.description}</p>
                <div className="pt-4 border-t border-white/10">
                  <div className="text-2xl font-bold text-teal-400">{useCase.results}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-emerald-900">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 eb-garamond"
            >
              Ready to ensure your transformation succeeds?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-white/70 mb-10 max-w-2xl mx-auto"
            >
              Schedule a change readiness assessment to understand your organization's 
              adoption potential and develop a tailored change strategy.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/contact">
                <span className="inline-flex items-center justify-center px-8 py-4 bg-white text-emerald-900 font-semibold rounded-full hover:bg-gray-100 transition-all cursor-pointer group">
                  Get Change Assessment
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
