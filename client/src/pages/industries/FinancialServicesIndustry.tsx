import { motion } from "framer-motion";
import { ArrowRight, Shield, TrendingUp, Users, FileCheck, Zap, Building2, ChevronRight, Quote, Mail } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function FinancialServicesIndustry() {
  return (
    <div className="min-h-screen bg-white font-sans text-charcoal selection:bg-primary selection:text-white">
      <SEO 
        title="Financial Services Industry" 
        description="Digital transformation for financial services. NexDyne helps banks, insurers, and fintech companies navigate regulatory complexity while delivering superior customer experiences."
        canonical="/industries/financial-services"
      />
      <Navigation />
      
      {/* Hero Section - Consulting standard: hierarchy, CTA, split with image */}
      <section className="relative min-h-0 flex flex-col lg:flex-row lg:min-h-[68vh] lg:items-center overflow-hidden bg-subtle border-b border-base/10 pt-8">
        <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[50%] pointer-events-none">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80"
              alt="Financial services"
              className="w-full h-full object-cover object-center"
            />
          </motion.div>
        </div>
        <div className="container relative z-10 px-4 md:px-12 py-14 md:py-20 lg:py-24 flex-shrink-0">
          <div className="max-w-xl lg:max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-6"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-primary" aria-hidden>
                Industries
              </p>
              <h1 className="eb-garamond font-bold text-charcoal text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] xl:text-6xl tracking-tight leading-[1.12]">
                Financial Services Industry
              </h1>
              <p className="text-base md:text-lg text-charcoal/75 leading-relaxed max-w-lg">
                Power customer-centric innovation.
              </p>
            </motion.div>
          </div>
        </div>
        <div className="lg:hidden relative w-full aspect-[16/10] min-h-[200px] flex-shrink-0">
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80"
            alt="Financial services"
            className="w-full h-full object-cover object-center"
          />
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
              <p className="text-lg sm:text-xl md:text-2xl text-charcoal/80 leading-relaxed mb-8 first-letter:text-6xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-primary">
                We begin our financial services consulting by partnering with you to define, test, and prove how advanced data collection and analysis, AI, digital channels, and other enhancements will create value—<em>before</em> expanding or embedding these capabilities in your operating model. We automate what's transactional and create cross-functional teams to harness the ingenuity and innovation you'll need to meet customers' changing demands.
              </p>
              
              <p className="text-lg text-charcoal/70 leading-relaxed mb-8">
                The financial services landscape is undergoing unprecedented transformation. Traditional institutions face pressure from fintech disruptors, evolving customer expectations, and an increasingly complex regulatory environment. Success requires not just adopting new technologies, but fundamentally rethinking how value is created and delivered.
              </p>
              
              <p className="text-lg text-charcoal/70 leading-relaxed">
                Our approach combines deep industry expertise with cutting-edge technology capabilities. We help financial institutions navigate the complexities of digital transformation—from core system modernization to AI-powered risk management—while maintaining the security, compliance, and trust that define the industry.
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
            className="eb-garamond font-bold text-base text-2xl md:text-3xl mb-12 md:mb-16"
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
                <div className="text-4xl md:text-5xl font-serif font-bold text-base mb-2">
                  {stat.value}
                </div>
                <div className="text-base text-muted-foreground leading-snug">
                  {stat.label}
                </div>
              </motion.div>
            ))}
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
            className="text-xs font-bold uppercase tracking-[0.2em] text-charcoal mb-10 md:mb-12"
          >
            Featured Insights
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-0 border border-border mb-10 md:mb-12 overflow-hidden"
          >
            <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[320px]">
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80" alt="" className="absolute inset-0 w-full h-full object-cover" aria-hidden />
            </div>
            <div className="flex flex-col justify-center p-8 md:p-10 lg:p-12 bg-white">
              <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2">Collection</span>
              <Link href="/insights/financial-services-future" className="group inline-flex items-start gap-2 text-left mb-3">
                <h3 className="text-xl md:text-2xl lg:text-3xl eb-garamond font-bold text-charcoal leading-tight group-hover:text-primary transition-colors">
                  The Next Normal – The future of financial services: Digital, inclusive, and resilient
                </h3>
                <span className="text-primary shrink-0 mt-1 group-hover:translate-x-1 transition-transform" aria-hidden>&gt;</span>
              </Link>
              <span className="text-sm text-muted-foreground mb-4">November 3, 2025 —</span>
              <p className="text-charcoal/70 text-base leading-relaxed">
                Banks, insurers, and asset managers are reimagining how they serve customers and manage risk. This collection explores core modernization, AI-powered analytics, and the digital experiences that drive growth while meeting regulatory and trust requirements.
              </p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              { category: "Article", title: "The case for a clear ROI framework for core modernization", link: "/insights/core-modernization-roi", image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80", alt: "Banking technology" },
              { category: "Article", title: "Finding a route to digital engagement in wealth management", link: "/insights/wealth-digital", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80", alt: "Wealth management" },
              { category: "Article", title: "The journey toward AI-enabled risk and compliance", link: "/insights/ai-risk-compliance", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80", alt: "Financial analytics" },
            ].map((item, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}>
                <Link href={item.link} className="group block">
                  <div className="overflow-hidden mb-4">
                    <img src={item.image} alt={item.alt} className="w-full aspect-[16/10] object-cover transition-transform duration-300 group-hover:scale-[1.02]" />
                  </div>
                  <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground block mb-2">{item.category}</span>
                  <h3 className="text-lg font-bold text-charcoal leading-snug group-hover:text-primary transition-colors flex items-start gap-2">
                    <span>{item.title}</span>
                    <span className="text-primary shrink-0 group-hover:translate-x-1 transition-transform" aria-hidden>&gt;</span>
                  </h3>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Financial Services Capabilities - Editorial List */}
      <section className="py-20 md:py-28 bg-subtle">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl eb-garamond font-bold text-charcoal mb-6">
              Our Financial Services Capabilities
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
            {/* Customer Insights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="border-t-2 border-base/10 pt-8"
            >
              <h3 className="text-xl font-serif font-bold text-charcoal mb-4 underline decoration-primary decoration-2 underline-offset-4">
                Customer Insights
              </h3>
              <p className="text-charcoal/70 leading-relaxed">
                From retail banking to wealth management, understanding customer behavior requires new methods of acting on data insights. To guide product investment and redraw segmentations, our Demand Centric Growth approach maps what is driving customers' choices in each category so you can build advantaged positions with strong growth potential.
              </p>
            </motion.div>

            {/* Digital Transformation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="border-t-2 border-base/10 pt-8"
            >
              <h3 className="text-xl font-serif font-bold text-charcoal mb-4  decoration-primary decoration-2 underline-offset-4">
                Digital Transformation
              </h3>
              <p className="text-charcoal/70 leading-relaxed">
                Achieving digital maturity is an industry-wide challenge for financial services. Our consultants help banks and insurers integrate digital tools, collaborate with fintech partners, and blend new talent with current staff and external expertise to drive results across channels.
              </p>
            </motion.div>

            {/* Risk & Compliance */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="border-t-2 border-base/10 pt-8"
            >
              <h3 className="text-xl font-serif font-bold text-charcoal mb-4  decoration-primary decoration-2 underline-offset-4">
                Risk & Compliance Management
              </h3>
              <p className="text-charcoal/70 leading-relaxed">
                The financial services industry was once dominated by institutions that owned their value chain, but now winners are positioned to tap into a broad ecosystem of external partners. To help financial institutions make this fundamental shift, we start with a clean sheet to determine the functions that partners can do as well or better, and which functions are critical to keep in-house.
              </p>
            </motion.div>

            {/* Personalization */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="border-t-2 border-base/10 pt-8"
            >
              <h3 className="text-xl font-serif font-bold text-charcoal mb-4  decoration-primary decoration-2 underline-offset-4">
                Personalization at Scale
              </h3>
              <p className="text-charcoal/70 leading-relaxed">
                To reach your customers, you need to know where they're looking, how they make decisions—and even precisely when they're ready to act. Using 360° customer profiles, enhanced by AI systems and data partnerships, we can help you create "segment of one" targeting, tailored to specific channels and capable of being scaled up to capture massive market share.
              </p>
            </motion.div>

            {/* Pricing & Revenue */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="border-t-2 border-base/10 pt-8"
            >
              <h3 className="text-xl font-serif font-bold text-charcoal mb-4  decoration-primary decoration-2 underline-offset-4">
                Pricing & Revenue Management
              </h3>
              <p className="text-charcoal/70 leading-relaxed">
                Pricing optimizations drive significant impact for financial institutions. We help you fund your own margin improvement through product portfolio pricing, fee structure management, and dynamic pricing that answers the demands of customers and competitive pressures alike.
              </p>
            </motion.div>

            {/* Sustainability */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="border-t-2 border-base/10 pt-8"
            >
              <h3 className="text-xl font-serif font-bold text-charcoal mb-4  decoration-primary decoration-2 underline-offset-4">
                ESG & Sustainable Finance
              </h3>
              <p className="text-charcoal/70 leading-relaxed">
                There's a significant opportunity to make sustainability a source of competitive advantage across the value chain. Our financial services consulting experts help institutions rewire decision making to embed ESG as a core value, linking it to shareholder return and long-term resilience.
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
            className="text-center text-xl md:text-2xl font-semibold uppercase tracking-wide text-charcoal mb-10 md:mb-14"
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
              src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1920&q=80"
              alt=""
              className="w-full h-full object-cover grayscale"
              aria-hidden
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            {[
              { title: "Reducing fraud losses", body: "A regional bank deployed our AI-powered fraud detection system across all channels. Machine learning models analyze transaction patterns in real-time, catching sophisticated fraud schemes while reducing false positives—improving both security and customer experience." },
              { title: "Increasing cross-sell revenue", body: "A multinational bank worked with us to create a unified customer data platform and AI-powered recommendation engine. By analyzing transaction patterns, life events, and behavioral signals, the system identifies optimal moments for personalized offers." },
              { title: "Modernizing core banking", body: "We helped a mid-size bank replace legacy core systems with a modern, cloud-native platform. The migration improved resilience and time to market for new products while reducing run costs." },
              { title: "Enabling wealth personalization", body: "A wealth manager implemented our advice and portfolio platform. Advisors now have a single view of the client, model-based recommendations, and automated rebalancing—improving outcomes and scalability." },
            ].map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-base md:text-lg font-bold text-charcoal mb-3">
                  {story.title}
                </h3>
                <p className="text-sm md:text-base text-charcoal/80 leading-relaxed">
                  {story.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Insight - Full Width Editorial */}
      <section className="py-20 md:py-28 bg-base text-white">
        <div className="container px-4 md:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/60 mb-6 block">
                Featured Insight
              </span>
              <h2 className="text-3xl md:text-4xl eb-garamond font-bold text-white mb-6 leading-tight">
                The Future of Banking: How AI is Reshaping Financial Services
              </h2>
              <p className="text-lg text-white/70 leading-relaxed mb-8">
                Artificial intelligence is no longer a future consideration for financial institutions—it's a present imperative. From fraud detection to personalized advisory services, AI is fundamentally changing how banks create value and serve customers. Our latest research explores the key trends shaping the industry and the strategic choices leaders must make.
              </p>
              <Link href="/insights/enterprise-transformation-ai">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base font-semibold transition-all duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary">
                  Read the Full Report <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80" 
                alt="AI in Banking" 
                className="w-full rounded-lg shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured experts */}
      <section className="py-20 md:py-28 bg-subtle">
        <div className="container px-4 md:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="eb-garamond font-bold text-charcoal text-3xl md:text-4xl lg:text-5xl text-center mb-12 md:mb-16"
          >
            Featured experts
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 max-w-5xl mx-auto">
            {[
              { name: "Alastair Green", title: "Senior Partner, Washington DC", description: "Leads our financial services practice with expertise in digital banking, risk transformation, and regulatory strategy.", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80" },
              { name: "Ishaan Nangia", title: "Senior Partner, Melbourne", description: "Specializes in wealth management, core banking modernization, and customer experience for banks and insurers.", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80" },
              { name: "Nicola Sandri", title: "Senior Partner, Milan", description: "Focuses on fintech partnerships, payments strategy, and international expansion for financial institutions.", image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&q=80" }
            ].map((expert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-sm border border-border p-6 md:p-8 flex flex-col items-center text-center"
              >
                <img src={expert.image} alt={expert.name} className="w-28 h-28 rounded-full object-cover mx-auto mb-4" />
                <h3 className="eb-garamond font-bold text-charcoal text-xl md:text-2xl mb-1">{expert.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{expert.title}</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6 line-clamp-4">{expert.description}</p>
                <a href={`mailto:contact@nexdyne.com?subject=Contact ${expert.name}`} className="inline-flex items-center justify-center w-10 h-10 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-all duration-200 ease-in-out" aria-label={`Email ${expert.name}`}>
                  <Mail className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="flex justify-center mt-12 md:mt-16">
            <Link href="/our-people">
              <button type="button" className="px-6 py-3 bg-white border border-primary text-primary font-semibold rounded-md hover:bg-primary/10 transition-all duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary">
                More experts
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Related Services - Card Grid */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl eb-garamond font-bold text-charcoal mb-6">
              Related Services
            </h2>
            <p className="text-xl text-charcoal/60 max-w-3xl">
              Purpose-built solutions that address the unique challenges of banks, insurers, and fintech companies.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {[
              {
                title: "Retail Banking",
                description: "Transform retail banking with digital-first experiences, personalized products, and seamless omnichannel journeys.",
                link: "/solutions/accelerating-business-growth",
                image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80"
              },
              {
                title: "Wealth Management",
                description: "Enable advisors with AI-powered insights, automate compliance, and deliver personalized client experiences at scale.",
                link: "/cases/wealth-onboarding",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80"
              },
              {
                title: "Insurance",
                description: "Modernize underwriting, claims processing, and customer engagement with intelligent automation and data analytics.",
                link: "/industries/insurance",
                image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={service.link} className="group block">
                  <div className="relative overflow-hidden mb-4">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-charcoal mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-charcoal/60 text-sm leading-relaxed mb-3">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center text-primary text-sm font-semibold">
                    Learn more <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Industries */}
      <section className="py-20 md:py-28 bg-subtle">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl eb-garamond font-bold text-charcoal mb-6">
              Related Industries
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Insurance",
                link: "/industries/insurance"
              },
              {
                title: "Private Equity & Investments",
                link: "/industries/private-equity"
              },
              {
                title: "Public Sector",
                link: "/industries/public-sector"
              }
            ].map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={industry.link} className="group block bg-white p-6 hover:bg-base transition-colors duration-300">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-[0.15em] text-primary group-hover:text-white/60 transition-colors">
                        Industry
                      </span>
                      <h3 className="text-lg font-serif font-bold text-charcoal group-hover:text-white transition-colors mt-1">
                        {industry.title}
                      </h3>
                    </div>
                    <ChevronRight className="w-5 h-5 text-charcoal/30 group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-base">
        <div className="container px-4 md:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl eb-garamond font-bold text-white mb-6">
                Ready to transform your financial services organization?
              </h2>
              <p className="text-lg text-white/70 mb-10">
                Let's discuss how we can help you navigate digital transformation, manage risk, and deliver exceptional customer experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base font-semibold transition-all duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary">
                    Contact Us
                  </Button>
                </Link>
                <Link href="/cases">
                  <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-base font-semibold bg-transparent transition-all duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary">
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
