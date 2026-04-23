import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Building2, Users, TrendingUp, MapPin, Briefcase, Globe, ChevronDown, CheckCircle2, Zap, Shield, Clock } from "lucide-react";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";

// FAQ Component
function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const faqs = [
    {
      question: "What size companies qualify for the Mid-Market AI Access Program?",
      answer: "The program is designed for companies with $50 million to $1 billion in annual revenue and between 100 and 5,000 employees. We focus on businesses large enough to benefit from AI but historically excluded from enterprise-grade solutions due to cost and complexity barriers."
    },
    {
      question: "How much does participation in the program cost?",
      answer: "The program offers tiered pricing based on company size and scope of engagement. We offer a free initial AI Readiness Assessment to help companies understand their starting point. Full program participation includes subsidized rates significantly below traditional enterprise consulting fees, with flexible payment structures designed for mid-market budgets."
    },
    {
      question: "What industries does the program serve?",
      answer: "The program serves mid-market companies across all industries, with particular expertise in manufacturing, distribution, healthcare, professional services, and technology. Our AI solutions are adaptable to industry-specific challenges and regulatory requirements."
    },
    {
      question: "How long does a typical AI implementation take?",
      answer: "Implementation timelines vary based on complexity and scope. Initial pilot projects typically take 8-12 weeks from assessment to deployment. Full enterprise AI transformations may span 6-18 months, with value delivered incrementally throughout the process."
    },
    {
      question: "Do we need existing data infrastructure to participate?",
      answer: "No. The AI Readiness Assessment evaluates your current data infrastructure and identifies gaps. Many program participants start with limited data capabilities. We help build the foundation needed for successful AI adoption, including data collection, storage, and governance frameworks."
    },
    {
      question: "What kind of ROI can we expect from AI implementation?",
      answer: "ROI varies by use case and industry, but program participants typically see 15-40% improvements in operational efficiency, 20-30% reductions in manual processing time, and measurable improvements in decision-making speed and accuracy. We work with each company to establish baseline metrics and track progress throughout implementation."
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-white text-charcoal">
      <div className="container px-4 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mb-12"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-6 block">
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Common questions about the program
          </h2>
        </motion.div>

        <div className="max-w-3xl space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="border border-base/10 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-subtle transition-colors"
              >
                <span className="font-semibold text-lg pr-4">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="px-6 pb-6 text-charcoal/70 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function MidMarketAIAccess() {
  return (
    <div className="min-h-screen bg-base font-sans text-white selection:bg-primary selection:text-white">
      <SEO 
        title="Mid-Market AI Access Program | NexDyne Initiatives" 
        description="Expanding access to enterprise-grade AI for America's mid-market companies. A national effort to make advanced AI, analytics, and automation accessible."
        canonical="/initiatives/mid-market-ai"
      />
      <Navigation />
      
      {/* Hero Section - McKinsey Style with Image */}
      <section className="relative min-h-[70vh] flex items-center pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* Background Image */}
          <img 
            src="/images/initiatives/ai-neural-network.jpg" 
            alt="AI Neural Network" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-base via-base/90 to-base/60" />
          {/* Subtle geometric pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 right-20 w-96 h-96 border border-white/20 rounded-full" />
            <div className="absolute bottom-20 left-20 w-64 h-64 border border-white/20 rounded-full" />
          </div>
        </div>
        
        <div className="container px-4 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <Link href="/#initiatives">
              <span className="inline-flex items-center text-sm text-white/50 hover:text-white/80 transition-colors mb-8 cursor-pointer">
                <ArrowLeft className="w-4 h-4 mr-2" />
                NexDyne Initiatives
              </span>
            </Link>
            
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-6 block">
              Mid-Market AI Access Program
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-4">
              Expanding access to enterprise-grade AI for America's mid-market
            </h1>
            
            <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-3xl">
              NexDyne is leading a national effort to make advanced AI, analytics, and automation accessible to mid-market companies traditionally excluded from enterprise technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What It Is - With Side Image */}
      <section className="py-20 md:py-28 bg-white text-charcoal">
        <div className="container px-4 md:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-6 block">
                What It Is
              </span>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-8">
                A national effort to close the AI gap
              </h2>
              
              <div className="prose prose-lg max-w-none text-charcoal/70">
                <p className="text-lg leading-relaxed mb-6">
                  The Mid-Market AI Access Program is designed to bring enterprise-grade AI capabilities to companies that have been systematically excluded from the AI revolution. While Fortune 500 companies have invested billions in AI infrastructure, mid-market businesses—those with $50M to $1B in revenue—have been left behind.
                </p>
                <p className="text-lg leading-relaxed">
                  This program addresses the structural barriers that prevent growing companies from accessing modern AI: prohibitive costs, implementation complexity, and talent requirements that only the largest enterprises can afford.
                </p>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="/images/initiatives/ai-factory-robots.jpg" 
                  alt="Modern AI-powered manufacturing facility"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-lg -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who It Serves */}
      <section className="py-20 md:py-28 bg-subtle text-charcoal">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mb-12"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-6 block">
              Who It Serves
            </span>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
              America's mid-market economy
            </h2>
            <p className="text-lg text-charcoal/70 leading-relaxed">
              The program focuses on companies that form the backbone of regional economies—businesses large enough to benefit from AI but historically excluded from enterprise technology.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl">
            {[
              {
                icon: Building2,
                title: "US SMEs with 50–500 employees",
                description: "Companies at the scale where AI can transform operations but enterprise solutions remain out of reach."
              },
              {
                icon: Briefcase,
                title: "Manufacturing & Distribution",
                description: "Manufacturers, logistics providers, and distributors seeking operational efficiency."
              },
              {
                icon: Users,
                title: "Healthcare & Professional Services",
                description: "Service businesses looking to enhance client delivery and operational capacity."
              },
              {
                icon: MapPin,
                title: "Regional Enterprises",
                description: "Local and regional businesses that anchor community economies across the country."
              },
              {
                icon: TrendingUp,
                title: "Growth-Stage Companies",
                description: "Businesses scaling rapidly and needing infrastructure to support expansion."
              },
              {
                icon: Globe,
                title: "All 50 States",
                description: "A truly national program reaching businesses in every region of the United States."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-charcoal/60 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Matters - With Full Width Image */}
      <section className="py-20 md:py-28 bg-base">
        <div className="container px-4 md:px-12">
          {/* Full width image banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 max-w-6xl"
          >
            <div className="aspect-[21/9] rounded-lg overflow-hidden">
              <img 
                src="/images/initiatives/warehouse-automation.webp" 
                alt="Automated warehouse operations"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50 mb-6 block">
              Why It Matters
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Strengthening local economies through AI adoption
            </h2>
            
            <div className="prose prose-lg max-w-none text-white/70 mb-12">
              <p className="text-lg leading-relaxed mb-6">
                Mid-market companies employ millions of Americans but are underserved by modern AI infrastructure. The cost structures, implementation complexity, and talent requirements of enterprise AI have created a two-tier economy: Fortune 500 companies with AI-powered operations, and everyone else struggling to compete with legacy systems.
              </p>
              <p className="text-lg leading-relaxed">
                Closing this gap strengthens local economies, supports job creation, and enhances global competitiveness. When mid-market companies gain access to AI, the benefits extend far beyond individual businesses—they ripple through supply chains, communities, and regional economies.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Job creation in communities across America",
                "Enhanced global competitiveness for US businesses",
                "Innovation diffusion across supply chains",
                "Stronger regional economic anchors",
                "Workforce enablement and productivity gains",
                "Operational resilience for growing companies"
              ].map((impact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 flex-shrink-0" />
                  <span className="text-white/80">{impact}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Measured Impact */}
      <section className="py-20 md:py-28 bg-white text-charcoal">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mb-12"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-6 block">
              Measured Impact
            </span>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
              Program goals and outcomes
            </h2>
            <p className="text-lg text-charcoal/70 leading-relaxed">
              The Mid-Market AI Access Program is designed with measurable outcomes that track progress toward closing the AI gap for American businesses.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl">
            {[
              { metric: "500+", label: "SMEs supported by 2026" },
              { metric: "15", label: "Regional business hubs" },
              { metric: "$50M–$1B", label: "Revenue range served" },
              { metric: "100–5,000", label: "Employee count range" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center"
              >
                <p className="text-4xl md:text-5xl font-bold text-primary mb-2">{item.metric}</p>
                <p className="text-sm text-charcoal/60">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Components */}
      <section className="py-20 md:py-28 bg-subtle text-charcoal">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mb-12"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-6 block">
              Program Components
            </span>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
              What the program includes
            </h2>
            <p className="text-lg text-charcoal/70 leading-relaxed">
              A comprehensive suite of tools, training, and support designed to accelerate AI adoption for mid-market companies.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
            {[
              {
                icon: Zap,
                title: "AI Readiness Assessment",
                description: "Comprehensive evaluation of your current technology stack, data infrastructure, and organizational readiness for AI implementation.",
                features: ["Technology audit", "Data quality assessment", "Skills gap analysis", "ROI projection"]
              },
              {
                icon: Shield,
                title: "Implementation Support",
                description: "Hands-on guidance through the entire AI implementation process, from vendor selection to deployment and optimization.",
                features: ["Vendor evaluation", "Integration planning", "Change management", "Training programs"]
              },
              {
                icon: Clock,
                title: "Ongoing Optimization",
                description: "Continuous support to ensure your AI systems deliver sustained value and adapt to changing business needs.",
                features: ["Performance monitoring", "Model refinement", "Scaling guidance", "Best practice updates"]
              },
              {
                icon: Users,
                title: "Peer Network Access",
                description: "Connect with other mid-market leaders navigating similar AI journeys through exclusive networking and knowledge-sharing events.",
                features: ["Quarterly roundtables", "Case study sharing", "Expert panels", "Regional meetups"]
              }
            ].map((component, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <component.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{component.title}</h3>
                <p className="text-charcoal/60 leading-relaxed mb-4">{component.description}</p>
                <ul className="space-y-2">
                  {component.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-charcoal/70">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Related Initiatives - With Images */}
      <section className="py-20 md:py-28 bg-subtle text-charcoal">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mb-12"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-6 block">
              Related Initiatives
            </span>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Explore other NexDyne initiatives
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
            <Link href="/initiatives/intelligence-commons">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="group bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
              >
                {/* Card Image */}
                <div className="aspect-[16/9] overflow-hidden">
                  <img 
                    src="/images/initiatives/corporate-skyline.jpg" 
                    alt="Intelligence Commons"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-8">
                  <span className="text-xs font-semibold uppercase tracking-[0.15em] text-primary mb-3 block">
                    NexDyne Intelligence Commons
                  </span>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    Democratizing Business Intelligence for Growing Companies
                  </h3>
                  <p className="text-sm text-charcoal/60 mb-4">
                    A free-to-start AI-powered intelligence platform for market signals, competitive benchmarking, and growth scenario modeling.
                  </p>
                  <span className="inline-flex items-center text-sm font-medium text-charcoal/70 group-hover:text-primary transition-colors">
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </motion.div>
            </Link>

            <Link href="/initiatives/regional-partnerships">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="group bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
              >
                {/* Card Image */}
                <div className="aspect-[16/9] overflow-hidden">
                  <img 
                    src="/images/initiatives/business-collaboration.jpg" 
                    alt="Regional Partnerships"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-8">
                  <span className="text-xs font-semibold uppercase tracking-[0.15em] text-primary mb-3 block">
                    Regional Business Intelligence Partnerships
                  </span>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    Partnering With Local Chambers to Build Data-Driven Growth Ecosystems
                  </h3>
                  <p className="text-sm text-charcoal/60 mb-4">
                    Collaborating with chambers of commerce and economic development organizations to deliver structured intelligence for businesses.
                  </p>
                  <span className="inline-flex items-center text-sm font-medium text-charcoal/70 group-hover:text-primary transition-colors">
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </motion.div>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
