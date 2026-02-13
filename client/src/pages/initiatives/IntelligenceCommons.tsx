import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, BarChart3, LineChart, TrendingUp, Target, PieChart, Lightbulb, ChevronDown, Check } from "lucide-react";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";

// FAQ Component for Intelligence Commons
function IntelligenceCommonsFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const faqs = [
    {
      question: "What data sources power the Intelligence Commons?",
      answer: "The platform aggregates data from public filings, industry publications, news sources, economic indicators, and anonymized benchmarking data from participating companies. We use AI to synthesize these sources into actionable intelligence tailored to your industry and competitive context."
    },
    {
      question: "How is my company's data protected?",
      answer: "Your company data is encrypted at rest and in transit. Benchmarking data is anonymized and aggregated—no individual company data is ever shared. We comply with SOC 2 Type II standards and undergo regular third-party security audits."
    },
    {
      question: "Can I cancel my subscription at any time?",
      answer: "Yes. All paid plans are month-to-month with no long-term contracts. You can upgrade, downgrade, or cancel at any time. Your data remains accessible for 30 days after cancellation."
    },
    {
      question: "What industries does the platform cover?",
      answer: "The Intelligence Commons provides intelligence across all major industries, with particularly deep coverage in manufacturing, professional services, healthcare, technology, and retail. Industry-specific dashboards and benchmarks are available for most sectors."
    },
    {
      question: "How accurate are the growth scenario projections?",
      answer: "Our AI models are trained on historical data from thousands of companies and validated against actual outcomes. Projections include confidence intervals and sensitivity analysis. We recommend using scenarios as one input among many in strategic planning, not as definitive predictions."
    },
    {
      question: "Do you offer training on how to use the platform?",
      answer: "Yes. All plans include access to our self-service knowledge base and video tutorials. Growth and Enterprise plans include live onboarding sessions and ongoing training webinars. Enterprise customers receive dedicated training for their teams."
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-white text-[#051C2C]">
      <div className="container px-4 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mb-12"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0077B5] mb-6 block">
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold leading-tight">
            Questions about the platform
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
              className="border border-[#051C2C]/10 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-[#F8F9FA] transition-colors"
              >
                <span className="font-semibold text-lg pr-4">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-[#0077B5] flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="px-6 pb-6 text-[#051C2C]/70 leading-relaxed">
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

export default function IntelligenceCommons() {
  return (
    <div className="min-h-screen bg-[#051C2C] font-sans text-white selection:bg-[#0077B5] selection:text-white">
      <SEO 
        title="NexDyne Intelligence Commons | Democratizing Business Intelligence" 
        description="A free-to-start AI-powered intelligence platform designed to give mid-market leaders access to market signals, competitive benchmarking, and growth scenario modeling."
        canonical="/initiatives/intelligence-commons"
      />
      <Navigation />
      
      {/* Hero Section - McKinsey Style with Image */}
      <section className="relative min-h-[70vh] flex items-center pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* Background Image */}
          <img 
            src="/images/initiatives/corporate-skyline.jpg" 
            alt="Corporate Skyline" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#051C2C] via-[#051C2C]/90 to-[#051C2C]/60" />
          {/* Subtle geometric pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-32 right-32 w-80 h-80 border border-white/20 rounded-full" />
            <div className="absolute bottom-16 left-16 w-48 h-48 border border-white/20 rounded-full" />
            <div className="absolute top-1/2 left-1/3 w-64 h-64 border border-white/20 rounded-full" />
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
            
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0077B5] mb-6 block">
              NexDyne Intelligence Commons
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-white leading-[1.1] mb-4">
              Democratizing business intelligence for growing companies
            </h1>
            
            <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-3xl">
              A free-to-start AI-powered intelligence platform designed to give mid-market leaders access to market signals, competitive benchmarking, and growth scenario modeling.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What It Is - With Side Image */}
      <section className="py-20 md:py-28 bg-white text-[#051C2C]">
        <div className="container px-4 md:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0077B5] mb-6 block">
                What It Is
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold leading-tight mb-8">
                Enterprise intelligence without enterprise costs
              </h2>
              
              <div className="prose prose-lg max-w-none text-[#051C2C]/70">
                <p className="text-lg leading-relaxed mb-6">
                  Today, sophisticated market intelligence, competitive analysis, and growth scenario modeling are locked behind enterprise consulting fees or Fortune 500 tooling. A single competitive analysis from a major consulting firm can cost $100,000 or more.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  The NexDyne Intelligence Commons changes this equation. By combining AI-powered analysis with curated data sources, we're making the same caliber of business intelligence available to growing companies—starting with a free tier that delivers real value.
                </p>
                <p className="text-lg leading-relaxed">
                  This isn't a watered-down version of enterprise tools. It's a purpose-built platform designed for the specific intelligence needs of mid-market leaders making critical growth decisions.
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
                  src="/images/initiatives/analytics-dashboard.jpg" 
                  alt="Business analytics dashboard"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#0077B5]/10 rounded-lg -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Platform Capabilities */}
      <section className="py-20 md:py-28 bg-[#F8F9FA] text-[#051C2C]">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mb-12"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0077B5] mb-6 block">
              Platform Capabilities
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold leading-tight mb-6">
              Intelligence tools for every growth stage
            </h2>
            <p className="text-lg text-[#051C2C]/70 leading-relaxed">
              The Intelligence Commons provides capabilities that were previously available only to the largest enterprises.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl">
            {[
              {
                icon: LineChart,
                title: "Market Signals",
                description: "Real-time monitoring of industry trends, regulatory changes, and market shifts with AI-curated alerts and analysis."
              },
              {
                icon: Target,
                title: "Competitive Benchmarking",
                description: "Track competitor activities, pricing changes, and strategic moves with automated monitoring and comparison tools."
              },
              {
                icon: PieChart,
                title: "Growth Scenario Modeling",
                description: "Model different growth scenarios with AI-powered projections based on market conditions and business inputs."
              },
              {
                icon: BarChart3,
                title: "Industry Comparisons",
                description: "Benchmark your performance against industry peers with anonymized data from similar companies."
              },
              {
                icon: TrendingUp,
                title: "Trend Analysis",
                description: "Identify emerging opportunities and threats before they become obvious to the broader market."
              },
              {
                icon: Lightbulb,
                title: "Strategic Insights",
                description: "AI-generated recommendations based on your specific business context and growth objectives."
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
                <div className="w-10 h-10 bg-[#0077B5]/10 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-[#0077B5]" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-[#051C2C]/60 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why This Is Different - With Full Width Image */}
      <section className="py-20 md:py-28 bg-[#051C2C]">
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
                src="/images/initiatives/business-meeting-strategic.jpg" 
                alt="Strategic business meeting"
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
              Why This Is Different
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-8">
              Opening Fortune 500 capabilities to growing businesses
            </h2>
            
            <div className="prose prose-lg max-w-none text-white/70 mb-12">
              <p className="text-lg leading-relaxed mb-6">
                Fortune 500 companies have entire departments dedicated to competitive intelligence, market research, and strategic planning. They subscribe to expensive data services, retain consulting firms, and employ analysts to synthesize insights.
              </p>
              <p className="text-lg leading-relaxed">
                Mid-market leaders often make critical decisions with a fraction of this intelligence. They rely on industry publications, informal networks, and intuition—not because they don't value data-driven decision making, but because the tools have been inaccessible.
              </p>
            </div>

            <div className="bg-white/5 rounded-lg p-8">
              <h3 className="text-xl font-serif font-bold text-white mb-6">The intelligence gap</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "Competitive analysis typically costs $50-100K per engagement",
                  "Market research subscriptions run $20-50K annually",
                  "Growth modeling requires specialized consultants",
                  "Real-time market signals reserved for enterprise platforms",
                  "Benchmarking data locked in expensive databases",
                  "Strategic planning support priced for Fortune 500 budgets"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-[#0077B5] rounded-full mt-2.5 flex-shrink-0" />
                    <span className="text-white/80 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Public Benefit */}
      <section className="py-20 md:py-28 bg-white text-[#051C2C]">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0077B5] mb-6 block">
              Public Benefit
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold leading-tight mb-8">
              Better intelligence, stronger communities
            </h2>
            
            <div className="prose prose-lg max-w-none text-[#051C2C]/70 mb-12">
              <p className="text-lg leading-relaxed mb-6">
                When mid-market leaders have access to quality business intelligence, they make better decisions. Better decisions lead to stronger companies. Stronger companies create more jobs, pay more taxes, and invest more in their communities.
              </p>
              <p className="text-lg leading-relaxed">
                The Intelligence Commons is designed to create this virtuous cycle—democratizing access to the tools that drive informed decision-making and sustainable growth.
              </p>
            </div>

            <div className="bg-[#F8F9FA] rounded-lg p-8">
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
                <div className="px-6">
                  <p className="text-lg font-semibold text-[#051C2C]">Better intelligence</p>
                </div>
                <ArrowRight className="w-5 h-5 text-[#0077B5] hidden md:block" />
                <div className="md:hidden text-[#0077B5]">↓</div>
                <div className="px-6">
                  <p className="text-lg font-semibold text-[#051C2C]">Better decisions</p>
                </div>
                <ArrowRight className="w-5 h-5 text-[#0077B5] hidden md:block" />
                <div className="md:hidden text-[#0077B5]">↓</div>
                <div className="px-6">
                  <p className="text-lg font-semibold text-[#051C2C]">Stronger companies</p>
                </div>
                <ArrowRight className="w-5 h-5 text-[#0077B5] hidden md:block" />
                <div className="md:hidden text-[#0077B5]">↓</div>
                <div className="px-6">
                  <p className="text-lg font-semibold text-[#051C2C]">Stronger communities</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20 md:py-28 bg-[#051C2C]">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mb-12"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50 mb-6 block">
              Platform Access
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white leading-tight mb-6">
              Intelligence for every growth stage
            </h2>
            <p className="text-lg text-white/70 leading-relaxed">
              Start free and scale as your intelligence needs grow. No enterprise contracts required.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl">
            {[
              {
                name: "Starter",
                price: "Free",
                description: "Essential intelligence for growing businesses",
                features: [
                  "Basic market signals",
                  "Industry trend reports",
                  "Monthly competitive snapshots",
                  "Community benchmarking",
                  "Email alerts"
                ],
                cta: "Get Started Free",
                highlighted: false
              },
              {
                name: "Growth",
                price: "$299/mo",
                description: "Advanced intelligence for scaling companies",
                features: [
                  "Everything in Starter",
                  "Real-time market signals",
                  "Competitive tracking dashboard",
                  "Growth scenario modeling",
                  "Custom alert configuration",
                  "API access"
                ],
                cta: "Start Growth Plan",
                highlighted: true
              },
              {
                name: "Enterprise",
                price: "Custom",
                description: "Full intelligence suite for mid-market leaders",
                features: [
                  "Everything in Growth",
                  "Dedicated analyst support",
                  "Custom research requests",
                  "Board-ready reports",
                  "Strategic planning sessions",
                  "White-label options"
                ],
                cta: "Contact Sales",
                highlighted: false
              }
            ].map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`rounded-lg p-8 ${tier.highlighted ? 'bg-[#0077B5] ring-2 ring-[#0077B5]' : 'bg-white/5'}`}
              >
                <h3 className="text-xl font-semibold text-white mb-2">{tier.name}</h3>
                <p className="text-3xl font-serif font-bold text-white mb-2">{tier.price}</p>
                <p className="text-sm text-white/60 mb-6">{tier.description}</p>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-white/80">
                      <Check className="w-4 h-4 text-[#0077B5] mt-0.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded font-semibold text-sm transition-colors ${
                  tier.highlighted 
                    ? 'bg-white text-[#0077B5] hover:bg-white/90' 
                    : 'bg-[#0077B5] text-white hover:bg-[#005a8c]'
                }`}>
                  {tier.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <IntelligenceCommonsFAQ />

      {/* Related Initiatives - With Images */}
      <section className="py-20 md:py-28 bg-[#F8F9FA] text-[#051C2C]">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mb-12"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0077B5] mb-6 block">
              Related Initiatives
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold leading-tight">
              Explore other NexDyne initiatives
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
            <Link href="/initiatives/mid-market-ai">
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
                    src="/images/initiatives/ai-neural-network.jpg" 
                    alt="Mid-Market AI Access"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-8">
                  <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#0077B5] mb-3 block">
                    Mid-Market AI Access Program
                  </span>
                  <h3 className="text-xl font-serif font-bold mb-3 group-hover:text-[#0077B5] transition-colors">
                    Expanding Access to Enterprise-Grade AI for America's Mid-Market
                  </h3>
                  <p className="text-sm text-[#051C2C]/60 mb-4">
                    A national effort to make advanced AI, analytics, and automation accessible to mid-market companies.
                  </p>
                  <span className="inline-flex items-center text-sm font-medium text-[#051C2C]/70 group-hover:text-[#0077B5] transition-colors">
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
                  <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#0077B5] mb-3 block">
                    Regional Business Intelligence Partnerships
                  </span>
                  <h3 className="text-xl font-serif font-bold mb-3 group-hover:text-[#0077B5] transition-colors">
                    Partnering With Local Chambers to Build Data-Driven Growth Ecosystems
                  </h3>
                  <p className="text-sm text-[#051C2C]/60 mb-4">
                    Collaborating with chambers of commerce and economic development organizations to deliver structured intelligence for businesses.
                  </p>
                  <span className="inline-flex items-center text-sm font-medium text-[#051C2C]/70 group-hover:text-[#0077B5] transition-colors">
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
