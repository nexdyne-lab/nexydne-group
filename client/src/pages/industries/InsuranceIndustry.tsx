import { motion } from "framer-motion";
import { ArrowRight, Shield, FileCheck, Users, TrendingUp, BarChart3, ChevronRight, Globe, Heart, Car, Home, Mail } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function InsuranceIndustry() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#051C2C] selection:bg-[#0077B5] selection:text-white">
      <SEO 
        title="Insurance Industry" 
        description="Digital transformation for insurance. NexDyne helps insurers modernize operations, enhance customer experience, and leverage AI for underwriting, claims, and risk management."
        canonical="/industries/insurance"
      />
      <Navigation />
      
      {/* Hero Section - Deep blue with left copy and right visual */}
      <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center overflow-hidden pt-32">
        <div className="absolute inset-0 bg-[#0A235B]" />
        <div className="absolute inset-0 flex justify-end pointer-events-none">
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[75%] max-w-[900px] h-[140%] min-h-[600px] opacity-25">
            <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&q=80" alt="" className="w-full h-full object-cover object-left" aria-hidden />
          </div>
          <svg className="absolute right-0 top-0 bottom-0 w-[72%] max-w-[820px] h-full opacity-70" viewBox="0 0 400 300" preserveAspectRatio="xMaxYMid meet" aria-hidden>
            <defs>
              <pattern id="dish-grid-insurance" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(0, 212, 255, 0.4)" strokeWidth="0.4" />
              </pattern>
              <radialGradient id="dish-fade-insurance" cx="0.6" cy="0.5" r="0.9">
                <stop offset="0%" stopColor="rgba(0, 180, 216, 0.5)" />
                <stop offset="100%" stopColor="transparent" />
              </radialGradient>
            </defs>
            <ellipse cx="320" cy="150" rx="220" ry="180" fill="url(#dish-fade-insurance)" />
            <ellipse cx="320" cy="150" rx="220" ry="180" fill="url(#dish-grid-insurance)" />
            {[0.35, 0.5, 0.65, 0.8, 0.95].map((r, i) => (
              <ellipse key={i} cx="320" cy="150" rx={220 * r} ry={180 * r} fill="none" stroke="rgba(0, 212, 255, 0.35)" strokeWidth="0.5" />
            ))}
          </svg>
        </div>
        <div className="container relative z-10 px-4 md:px-12 py-24 md:py-32">
          <div className="max-w-xl">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl eb-garamond font-bold tracking-tight text-white leading-[1.1] mb-6">
                Insurance Industry
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-[#E0E0E0] leading-relaxed font-sans max-w-lg">
                The insurance industry is at an inflection point. Insurtech disruptors, changing customer expectations, and new risk landscapes are forcing carriers to reimagine their business models. NexDyne helps insurers navigate this transformation—building the digital capabilities needed to compete in the modern insurance marketplace.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Editorial Introduction */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container px-4 md:px-12">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="prose prose-lg max-w-none"
            >
              <p className="text-lg sm:text-xl md:text-2xl text-[#051C2C]/80 leading-relaxed mb-8 first-letter:text-6xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-[#0077B5]">
                Insurance has always been about managing risk—but the risks themselves are changing. Climate change is reshaping property and casualty exposures. Cyber threats create new categories of loss. And customers expect the same seamless digital experiences they get from tech companies. Carriers that can adapt to these changes will thrive; those that can't will struggle to remain relevant.
              </p>
              
              <p className="text-lg text-[#051C2C]/70 leading-relaxed mb-8">
                We partner with insurers to build the digital capabilities that enable this transformation. From AI-powered underwriting that improves risk selection to claims automation that reduces costs and cycle times, our solutions help carriers improve profitability while delivering exceptional customer experiences.
              </p>
              
              <p className="text-lg text-[#051C2C]/70 leading-relaxed">
                Beyond operational improvements, we help insurers reimagine their business models. Usage-based products, embedded insurance, and ecosystem partnerships are creating new growth opportunities for carriers willing to innovate.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Experience & Impact - Metrics */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container px-4 md:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="eb-garamond font-bold text-[#0B2B40] text-2xl md:text-3xl mb-12 md:mb-16"
          >
            Our Experience & Impact
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
            {[
              { value: "40+", label: "Ventures launched with clients across industries" },
              { value: "78%", label: "Reach profitability within 18 months" },
              { value: "4-6 Mo", label: "Typical time from concept to market launch" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-left"
              >
                <div className="text-4xl md:text-5xl font-serif font-bold text-[#0B2B40] mb-2">
                  {stat.value}
                </div>
                <div className="text-base text-[#6C757D] leading-snug">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Help - Grid style with header and separators */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-xs font-semibold uppercase tracking-[0.15em] text-[#6B7280] mb-4">
              How We Help Clients
            </h2>
            <div className="border-t border-[#E5E7EB]" aria-hidden />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 md:gap-y-12 mt-8">
            {[
              { title: "AI-Powered Underwriting", desc: "Transform underwriting with machine learning models that improve risk selection and pricing accuracy. Our solutions analyze traditional and alternative data sources to identify risks that humans miss—improving loss ratios while accelerating decision-making." },
              { title: "Intelligent Claims Processing", desc: "Automate claims processing with AI and computer vision. Our solutions enable straight-through processing for simple claims, intelligent triage for complex ones, and fraud detection that reduces leakage—cutting costs while improving customer satisfaction." },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-lg font-bold text-[#051C2C] mb-2 flex items-center gap-2">
                  {item.title}
                  <ChevronRight className="w-4 h-4 text-[#94A3B8] shrink-0" aria-hidden />
                </h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="border-t border-[#E5E7EB] my-10 md:my-12" aria-hidden />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 md:gap-y-12">
            {[
              { title: "Digital Distribution & Customer Experience", desc: "Build digital channels that meet modern customer expectations. From self-service portals to mobile apps, our solutions enable seamless quoting, binding, and servicing—creating experiences that drive acquisition and retention." },
              { title: "Advanced Risk Analytics", desc: "Leverage data and analytics to understand and price risk more accurately. Our platforms integrate internal and external data sources to provide real-time risk insights—enabling better decisions across the portfolio." },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-lg font-bold text-[#051C2C] mb-2 flex items-center gap-2">
                  {item.title}
                  <ChevronRight className="w-4 h-4 text-[#94A3B8] shrink-0" aria-hidden />
                </h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Study - Full Width */}
      <section className="py-20 md:py-28 bg-[#f8f9fa]">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0077B5] mb-4 block">
              Featured Case Study
            </span>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <img 
                src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80" 
                alt="Insurance Claims Automation" 
                className="w-full rounded-lg shadow-lg"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-3"
            >
              <div className="text-6xl md:text-7xl font-serif font-bold text-[#0077B5] mb-4">
                60%
              </div>
              <div className="text-xl font-medium text-[#051C2C] mb-6">
                reduction in claims processing time
              </div>
              <p className="text-lg text-[#051C2C]/70 leading-relaxed mb-6">
                A major property insurer partnered with us to transform their claims operation. We deployed AI-powered damage assessment using computer vision, automated document processing with NLP, and intelligent workflow routing that matches claims to the right adjusters. The result: 60% reduction in processing time, 40% improvement in customer satisfaction, and $50M in annual savings.
              </p>
              <p className="text-[#051C2C]/70 leading-relaxed mb-8">
                The platform also includes advanced fraud detection that identifies suspicious claims patterns, reducing fraud losses by 25% while improving legitimate claim handling.
              </p>
              <Link href="/cases/insurance-claims-automation" className="inline-flex items-center text-[#0077B5] font-semibold hover:underline">
                Read the full case study <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Insights */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container px-4 md:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs font-bold uppercase tracking-[0.2em] text-[#051C2C] mb-10 md:mb-12"
          >
            Featured Insights
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-0 border border-[#E5E7EB] mb-10 md:mb-12 overflow-hidden"
          >
            <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[320px]">
              <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80" alt="" className="absolute inset-0 w-full h-full object-cover" aria-hidden />
            </div>
            <div className="flex flex-col justify-center p-8 md:p-10 lg:p-12 bg-white">
              <span className="text-xs font-medium uppercase tracking-wider text-[#6B7280] mb-2">Collection</span>
              <Link href="/insights/insurance-future" className="group inline-flex items-start gap-2 text-left mb-3">
                <h3 className="text-xl md:text-2xl lg:text-3xl eb-garamond font-bold text-[#051C2C] leading-tight group-hover:text-[#0077B5] transition-colors">
                  The Next Normal – The future of insurance: Personalized, automated, and resilient
                </h3>
                <span className="text-[#0077B5] shrink-0 mt-1 group-hover:translate-x-1 transition-transform" aria-hidden>&gt;</span>
              </Link>
              <span className="text-sm text-[#6B7280] mb-4">November 3, 2025 —</span>
              <p className="text-[#051C2C]/70 text-base leading-relaxed">
                Insurance is being transformed by data, AI, and changing customer expectations. This collection explores how carriers can modernize core systems, deploy predictive underwriting and claims, and build the digital experiences that drive growth and retention in a competitive market.
              </p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              { category: "Article", title: "The case for a clear ROI framework for claims transformation", link: "/insights/claims-roi", image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&q=80", alt: "Claims process" },
              { category: "Article", title: "Finding a route to underwriting profitability in hard markets", link: "/insights/underwriting-profitability", image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80", alt: "Underwriting" },
              { category: "Article", title: "The journey toward AI-enabled insurance operations", link: "/insights/ai-insurance", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80", alt: "Insurance technology" },
            ].map((item, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}>
                <Link href={item.link} className="group block">
                  <div className="overflow-hidden mb-4">
                    <img src={item.image} alt={item.alt} className="w-full aspect-[16/10] object-cover transition-transform duration-300 group-hover:scale-[1.02]" />
                  </div>
                  <span className="text-xs font-medium uppercase tracking-wider text-[#6B7280] block mb-2">{item.category}</span>
                  <h3 className="text-lg font-bold text-[#051C2C] leading-snug group-hover:text-[#0077B5] transition-colors flex items-start gap-2">
                    <span>{item.title}</span>
                    <span className="text-[#0077B5] shrink-0 group-hover:translate-x-1 transition-transform" aria-hidden>&gt;</span>
                  </h3>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Insurance Capabilities - Editorial Grid */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl eb-garamond font-bold text-[#051C2C] mb-6">
              Our Insurance Capabilities
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
            {/* Predictive Underwriting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="border-t-2 border-[#051C2C]/10 pt-8"
            >
              <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4  decoration-[#0077B5] decoration-2 underline-offset-4">
                Predictive Underwriting
              </h3>
              <p className="text-[#051C2C]/70 leading-relaxed">
                Improve risk selection with machine learning models that analyze hundreds of variables. Our solutions identify profitable risks, flag adverse selection, and optimize pricing—improving loss ratios while maintaining competitive positioning.
              </p>
            </motion.div>

            {/* Claims Analytics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="border-t-2 border-[#051C2C]/10 pt-8"
            >
              <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4  decoration-[#0077B5] decoration-2 underline-offset-4">
                Claims Analytics & Automation
              </h3>
              <p className="text-[#051C2C]/70 leading-relaxed">
                Transform claims operations with AI and automation. Our platforms enable straight-through processing, intelligent routing, and predictive reserving—reducing costs while improving customer experience.
              </p>
            </motion.div>

            {/* Fraud Detection */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="border-t-2 border-[#051C2C]/10 pt-8"
            >
              <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4  decoration-[#0077B5] decoration-2 underline-offset-4">
                Fraud Detection & Prevention
              </h3>
              <p className="text-[#051C2C]/70 leading-relaxed">
                Detect fraud with advanced analytics and network analysis. Our solutions identify suspicious patterns across applications and claims, flagging potential fraud for investigation while minimizing false positives.
              </p>
            </motion.div>

            {/* Customer Analytics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="border-t-2 border-[#051C2C]/10 pt-8"
            >
              <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4  decoration-[#0077B5] decoration-2 underline-offset-4">
                Customer Analytics & Retention
              </h3>
              <p className="text-[#051C2C]/70 leading-relaxed">
                Improve retention with predictive analytics and personalized engagement. Our solutions identify at-risk customers, recommend retention actions, and optimize cross-sell opportunities—maximizing customer lifetime value.
              </p>
            </motion.div>

            {/* Digital Platforms */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="border-t-2 border-[#051C2C]/10 pt-8"
            >
              <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4  decoration-[#0077B5] decoration-2 underline-offset-4">
                Digital Distribution Platforms
              </h3>
              <p className="text-[#051C2C]/70 leading-relaxed">
                Build modern distribution capabilities with digital platforms. Our solutions enable direct-to-consumer sales, agent portals, and embedded insurance partnerships—expanding reach while reducing acquisition costs.
              </p>
            </motion.div>

            {/* Regulatory Compliance */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="border-t-2 border-[#051C2C]/10 pt-8"
            >
              <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4  decoration-[#0077B5] decoration-2 underline-offset-4">
                Regulatory & Compliance
              </h3>
              <p className="text-[#051C2C]/70 leading-relaxed">
                Navigate complex regulatory requirements with confidence. Our solutions help insurers manage compliance, automate reporting, and adapt to changing regulations—reducing risk while improving efficiency.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Client Success Stories - Examples of our work style */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container px-4 md:px-12 max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-xl md:text-2xl font-semibold uppercase tracking-wide text-[#051C2C] mb-10 md:mb-14"
          >
            Examples of Our Work
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full aspect-[21/9] min-h-[200px] mb-10 md:mb-14 overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&q=80"
              alt=""
              className="w-full h-full object-cover grayscale"
              aria-hidden
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            {[
              { title: "Improving loss ratio", body: "A commercial lines insurer deployed our AI underwriting platform to improve risk selection in their small business portfolio. The system analyzes hundreds of data points to predict loss probability and severity—enabling more accurate pricing and better risk selection." },
              { title: "Growing digital policy sales", body: "A personal lines carrier launched a new digital distribution platform with our help. The platform enables instant quoting, digital binding, and self-service policy management—significantly increasing digital sales while reducing acquisition costs." },
              { title: "Streamlining claims handling", body: "We helped a carrier automate claims triage and settlement. AI-powered damage assessment and straight-through processing reduced cycle time and leakage while improving the claimant experience." },
              { title: "Enabling core system transformation", body: "An insurer replaced legacy policy and billing systems with a modern core platform. We supported design, data migration, and integration—enabling new products and distribution channels with lower run costs." },
            ].map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-base md:text-lg font-bold text-[#051C2C] mb-3">
                  {story.title}
                </h3>
                <p className="text-sm md:text-base text-[#051C2C]/80 leading-relaxed">
                  {story.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured experts */}
      <section className="py-20 md:py-28 bg-[#f8f9fa]">
        <div className="container px-4 md:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="eb-garamond font-bold text-[#051C2C] text-3xl md:text-4xl lg:text-5xl text-center mb-12 md:mb-16"
          >
            Featured experts
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 max-w-5xl mx-auto">
            {[
              { name: "Alastair Green", title: "Senior Partner, Washington DC", description: "Leads our insurance practice with expertise in underwriting transformation, claims excellence, and digital distribution.", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80" },
              { name: "Ishaan Nangia", title: "Senior Partner, Melbourne", description: "Specializes in insurance core modernization, pricing analytics, and customer experience for P&C and life insurers.", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80" },
              { name: "Nicola Sandri", title: "Senior Partner, Milan", description: "Focuses on reinsurance, risk analytics, and international expansion for insurance and insurtech clients.", image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&q=80" }
            ].map((expert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-sm border border-[#E5E7EB] p-6 md:p-8 flex flex-col items-center text-center"
              >
                <img src={expert.image} alt={expert.name} className="w-28 h-28 rounded-full object-cover mx-auto mb-4" />
                <h3 className="eb-garamond font-bold text-[#051C2C] text-xl md:text-2xl mb-1">{expert.name}</h3>
                <p className="text-sm text-[#6B7280] mb-4">{expert.title}</p>
                <p className="text-sm text-[#6B7280] leading-relaxed mb-6 line-clamp-4">{expert.description}</p>
                <a href={`mailto:contact@nexdyne.com?subject=Contact ${expert.name}`} className="inline-flex items-center justify-center w-10 h-10 bg-[#051C2C] text-white rounded-md hover:bg-[#051C2C]/90 transition-colors" aria-label={`Email ${expert.name}`}>
                  <Mail className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="flex justify-center mt-12 md:mt-16">
            <Link href="/our-people">
              <button type="button" className="px-6 py-3 bg-white border border-[#0077B5] text-[#0077B5] font-semibold rounded-md hover:bg-[#0077B5]/5 transition-colors">
                More experts
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Related Industries */}
      <section className="py-20 md:py-28 bg-[#f8f9fa]">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl eb-garamond font-bold text-[#051C2C] mb-6">
              Related Industries
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Financial Services", link: "/industries/financial-services" },
              { title: "Healthcare", link: "/industries/healthcare" },
              { title: "Private Equity & Investments", link: "/industries/private-equity" }
            ].map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={industry.link} className="group block bg-white p-6 hover:bg-[#051C2C] transition-colors duration-300">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#0077B5] group-hover:text-white/60 transition-colors">
                        Industry
                      </span>
                      <h3 className="text-lg font-serif font-bold text-[#051C2C] group-hover:text-white transition-colors mt-1">
                        {industry.title}
                      </h3>
                    </div>
                    <ChevronRight className="w-5 h-5 text-[#051C2C]/30 group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-[#051C2C]">
        <div className="container px-4 md:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl eb-garamond font-bold text-white mb-6">
                Ready to transform your insurance operations?
              </h2>
              <p className="text-lg text-white/70 mb-10">
                Let's discuss how we can help you modernize underwriting, automate claims, and build the digital capabilities needed to compete in the modern insurance marketplace.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button className="bg-[#0077B5] hover:bg-[#005a8c] text-white px-8 py-6 text-base font-semibold">
                    Contact Us
                  </Button>
                </Link>
                <Link href="/cases">
                  <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-base font-semibold bg-transparent">
                    View All Case Studies
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
