import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import GrowthBreadcrumbs from "@/components/GrowthBreadcrumbs";
import BainHoverCard from "@/components/BainHoverCard";

export default function GrowthMarketingSales() {
  return (
    <div className="min-h-screen bg-white font-sans text-charcoal selection:bg-primary selection:text-white">
      <SEO 
        title="Growth, Marketing & Sales" 
        description="Drive sustainable revenue growth by aligning strategy, customer experience, and commercial execution with data-driven precision."
        canonical="/capabilities/growth-marketing-sales"
      />
      <Navbar />
      
      {/* Hero Section - Dark Background */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center pt-16 sm:pt-20 bg-charcoal">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <GrowthBreadcrumbs />
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-2 sm:mb-3 eb-garamond">
                Growth, Marketing & Sales
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-white/70 leading-relaxed max-w-xl mb-6 sm:mb-8">
                Drive sustainable revenue growth by aligning strategy, customer experience, and commercial execution with data-driven precision. We help mid-market organizations outperform their competitors.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-base font-semibold transition-all duration-300">
                    Accelerate Growth <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/capabilities/growth-marketing-sales/case-studies">
                  <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-base font-semibold bg-transparent">
                    View Case Studies
                  </Button>
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:block"
            >
              <img 
                src="/images/abstract-growth.jpg"
                alt="Growth Strategy Visualization" 
                className="w-full h-[500px] object-cover rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* F100/H100 Experience & Impact Section - Border-Left Accent Animation */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white border-b border-border">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-charcoal mb-12 eb-garamond"
          >
            Our Experience & Impact
          </motion.h2>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              { metric: "75+", label: "Growth and marketing transformations delivered for mid-market companies" },
              { metric: "$50M+", label: "Incremental revenue generated for clients through optimized commercial strategies" },
              { metric: "18+", label: "Industry verticals served with specialized growth expertise" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`${index > 0 ? 'md:border-l border-border md:pl-8' : ''}`}
              >
                <div>
                  <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-charcoal mb-3 sm:mb-4">{item.metric}</div>
                  <p className="text-lg text-charcoal/60">{item.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Thought Leadership - 2-Column Layout (F100 Style) */}
      <section className="py-12 sm:py-16 lg:py-20 xl:py-28 bg-white">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-charcoal leading-tight eb-garamond">
                Turn growth ambitions into commercial results.
              </h2>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6 text-lg text-charcoal/80 leading-relaxed"
            >
              <p>
                Growth in today's market requires more than good products and aggressive targets. It demands a clear understanding of where your customers are, what drives their decisions, and how to reach them efficiently across an increasingly fragmented landscape.
              </p>
              <p>
                We work with growing companies who have proven product-market fit but are struggling to scale their commercial engine. Our approach connects <strong className="text-charcoal font-semibold">customer insights, marketing operations, and sales execution</strong> into a unified growth system—one that delivers predictable revenue without burning through budget on tactics that don't work.
              </p>
              <p>
                Whether you're optimizing pricing, building a scalable marketing function, or transforming your sales organization, we bring the strategic frameworks and hands-on expertise to help you compete against larger players and win in your target markets.
              </p>
              <ul className="space-y-3 mt-6">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0"></span>
                  <span>Customer insights that drive strategic decisions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0"></span>
                  <span>Marketing operations that scale efficiently</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0"></span>
                  <span>Sales execution that converts opportunities</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Approach Section - 3 Column Dark Background */}
      <section className="py-24 bg-base text-white">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4 block">
              Our Approach
            </span>
            <h2 className="text-4xl md:text-5xl font-bold eb-garamond">
              Build a commercial engine that scales
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Connect insights to action",
                description: "We help you understand your customers deeply—what they value, how they decide, and where they're underserved—then translate those insights into strategies that drive measurable results."
              },
              {
                title: "Optimize your go-to-market",
                description: "We streamline marketing operations, align sales and marketing teams, and implement the right technology stack so your commercial engine runs efficiently at every stage of growth."
              },
              {
                title: "Scale what works",
                description: "We identify your highest-performing channels, campaigns, and sales motions, then build the systems and processes to replicate success across markets and segments."
              }
            ].map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-left"
              >
                <h3 className="text-xl font-bold mb-4">
                  {pillar.title}
                </h3>
                <p className="text-white leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <Link href="/contact">
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-4 bg-transparent">
                Get in touch
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* F100/H100 Core Capabilities Grid - H100 Hover Cards with Red Border-Left */}
      <section className="py-24 bg-subtle">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6 block">
              How We Help
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 eb-garamond">
              Commercial transformation capabilities
            </h2>
            <p className="text-xl text-charcoal/60 max-w-2xl">
              We partner with organizations to transform their commercial engines and unlock sustainable growth through integrated capabilities across the entire customer lifecycle.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Brand Strategy",
                description: "Build a distinctive brand that resonates with your target market. We help you define your positioning, messaging, and visual identity to stand out from competitors and command premium pricing.",
                link: "/capabilities/growth-marketing-sales/brand-strategy"
              },
              {
                title: "Growth Strategy",
                description: "Identify and capture new opportunities through market analysis, competitive positioning, and portfolio optimization. We help you define where to play and how to win in your target markets.",
                link: "/capabilities/growth-marketing-sales/growth-strategy"
              },
              {
                title: "Marketing Operations",
                description: "Build a scalable marketing engine that maximizes ROI. We streamline workflows, establish data governance, and implement performance measurement frameworks.",
                link: "/capabilities/growth-marketing-sales/marketing-operations"
              },
              {
                title: "Consumer & Shopper Insights",
                description: "Decode the customer decision journey through deep behavioral research. We translate insights about beliefs and motivations into actionable business strategies.",
                link: "/capabilities/growth-marketing-sales/consumer-shopper-insights"
              },
              {
                title: "Customer Experience",
                description: "Design experiences that convert and retain. We map customer journeys, identify friction points, and create moments that matter across every touchpoint.",
                link: "/capabilities/growth-marketing-sales/customer-experience"
              },
              {
                title: "Pricing & Monetization",
                description: "Capture the full value you create through optimized pricing architecture, packaging strategies, and promotional effectiveness analysis.",
                link: "/capabilities/growth-marketing-sales/pricing-monetization"
              },
              {
                title: "Sales Excellence",
                description: "Transform your sales organization for peak performance. We optimize territories, improve productivity, and build high-performance teams with data-driven coaching.",
                link: "/capabilities/growth-marketing-sales/sales-excellence"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <BainHoverCard
                  title={item.title}
                  description={item.description}
                  link={item.link}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Capabilities - White Background */}
      <section className="py-12 md:py-28 bg-white">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6 block">
              Specialized Expertise
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-6 eb-garamond">
              Deep expertise across the commercial stack
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Digital Marketing",
                description: "Performance marketing, brand strategy, and analytics attribution for measurable growth.",
                link: "/capabilities/growth-marketing-sales/digital-marketing"
              },
              {
                title: "E-commerce",
                description: "Platform strategy, conversion optimization, and marketplace management.",
                link: "/capabilities/growth-marketing-sales/ecommerce"
              },
              {
                title: "MarTech Stack",
                description: "Stack orchestration, middleware strategy, and semantic infrastructure.",
                link: "/capabilities/growth-marketing-sales/martech-stack"
              },
              {
                title: "Retention & Loyalty",
                description: "Churn prediction, customer health scoring, and loyalty program design.",
                link: "/capabilities/growth-marketing-sales/retention-loyalty"
              },
              {
                title: "Green Growth",
                description: "Sustainable consumer goods, advanced manufacturing, and energy materials.",
                link: "/capabilities/growth-marketing-sales/green-growth"
              },
              {
                title: "Personalization at Scale",
                description: "AI-driven personalization across channels and touchpoints.",
                link: "/capabilities/growth-marketing-sales/personalization-at-scale"
              },
              {
                title: "Insights & Analytics",
                description: "Advanced analytics, attribution modeling, and decision intelligence.",
                link: "/capabilities/growth-marketing-sales/insights-analytics"
              },
              {
                title: "Portfolio Optimization",
                description: "Product portfolio strategy, SKU rationalization, and assortment planning.",
                link: "/capabilities/growth-marketing-sales/portfolio-optimization"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <BainHoverCard
                  title={item.title}
                  description={item.description}
                  link={item.link}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How AI is Transforming Growth & Marketing Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container px-4 md:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6 eb-garamond">
                How AI is Transforming Growth & Marketing
              </h2>
              <p className="text-lg text-charcoal/70 leading-relaxed mb-8">
                AI is fundamentally changing how companies acquire, engage, and retain customers. Forward-thinking marketing and sales teams are embedding AI across their commercial operations—personalizing experiences at scale, predicting customer behavior, and optimizing spend in real-time. Here's where we're seeing the biggest impact:
              </p>
              
              <div className="space-y-4">
                {[
                  { title: "Customer segmentation", desc: "Move beyond demographics to behavior-based micro-segments that drive targeted campaigns" },
                  { title: "Predictive lead scoring", desc: "Prioritize sales efforts on prospects most likely to convert and expand" },
                  { title: "Content personalization", desc: "Deliver the right message to the right customer at the right moment across channels" },
                  { title: "Marketing mix optimization", desc: "Allocate budget dynamically based on real-time performance signals" },
                  { title: "Churn prediction", desc: "Identify at-risk customers early and trigger retention interventions" },
                  { title: "Pricing intelligence", desc: "Optimize pricing and promotions based on demand elasticity and competitive dynamics" },
                  { title: "Sales forecasting", desc: "Improve pipeline accuracy with AI-powered deal scoring and close predictions" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <div>
                      <span className="font-semibold text-charcoal">{item.title}.</span>{" "}
                      <span className="text-charcoal/70">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
              
              <Link href="/capabilities/artificial-intelligence" className="inline-flex items-center text-destructive font-semibold mt-8 hover:underline">
                See how we help companies implement AI for growth <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
                alt="AI-powered marketing analytics dashboard" 
                className="w-full h-[350px] object-cover rounded-lg shadow-xl mb-8"
              />
              
              {/* Results & Approach Two-Column */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border-l-2 border-primary pl-6">
                  <h3 className="text-lg font-serif font-bold text-charcoal mb-3">Results We've Delivered</h3>
                  <p className="text-charcoal/70 text-sm leading-relaxed mb-4">
                    From retail to professional services, we've helped companies across industries implement AI-powered growth strategies that deliver measurable commercial results.
                  </p>
                  <Link href="/capabilities/artificial-intelligence" className="text-sm text-charcoal font-semibold hover:text-primary transition-colors flex items-center">
                    See how we're helping companies grow with AI <ArrowRight className="ml-1 w-3 h-3" />
                  </Link>
                </div>
                <div className="border-l-2 border-primary pl-6">
                  <h3 className="text-lg font-serif font-bold text-charcoal mb-3">Our Approach</h3>
                  <p className="text-charcoal/70 text-sm leading-relaxed mb-4">
                    We help marketing and sales teams become AI-ready by connecting customer data, building the right infrastructure, and implementing use cases that deliver quick wins while building toward long-term transformation.
                  </p>
                  <Link href="/capabilities/artificial-intelligence" className="text-sm text-charcoal font-semibold hover:text-primary transition-colors flex items-center">
                    Learn more about our AI approach <ArrowRight className="ml-1 w-3 h-3" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Case Studies Section - Light Gray Background */}
      <section className="py-20 md:py-28 bg-subtle">
        <div className="container px-4 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6 block">
                Featured Case Studies
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal eb-garamond">
                Driving commercial transformation
              </h2>
            </motion.div>
            <Link href="/capabilities/growth-marketing-sales/case-studies">
              <Button variant="outline" className="border-base/20 text-charcoal hover:bg-base/5 bg-transparent">
                View all case studies
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Regional retailer scales e-commerce revenue by 40% with AI-powered personalization",
                category: "E-commerce Transformation",
                result: "40% revenue increase",
                description: "A 150-employee regional retailer partnered with NexDyne to implement AI-driven personalization across their digital channels, resulting in significant revenue growth and improved customer retention.",
                image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80"
              },
              {
                title: "Professional services firm reduces customer acquisition cost by 35%",
                category: "Digital Marketing",
                result: "35% CAC reduction",
                description: "Through advanced attribution modeling and marketing mix optimization, we helped a mid-market professional services firm dramatically improve their marketing efficiency.",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
              },
              {
                title: "Manufacturing company increases sales productivity by 45%",
                category: "Sales Excellence",
                result: "45% productivity gain",
                description: "Territory optimization and data-driven coaching transformed the sales organization of a 200-employee manufacturing company, driving significant productivity improvements.",
                image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
              }
            ].map((study, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-lg aspect-[4/3] mb-6">
                  <img 
                    src={study.image} 
                    alt={study.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block px-3 py-1 bg-primary text-white text-xs font-bold rounded">
                      {study.result}
                    </span>
                  </div>
                </div>
                <div className="text-primary text-xs font-bold uppercase tracking-[0.15em] mb-3">{study.category}</div>
                <h3 className="text-xl font-serif font-bold text-charcoal mb-3 group-hover:text-primary transition-colors leading-tight">
                  {study.title}
                </h3>
                <p className="text-charcoal/60 text-sm leading-relaxed mb-4">
                  {study.description}
                </p>
                <div className="flex items-center text-primary text-sm font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  Read case study <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bain-Style Insights Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container px-4 md:px-12">
          {/* Header with horizontal lines */}
          <div className="flex items-center justify-center mb-16">
            <div className="flex-1 h-px bg-gray-300"></div>
            <h2 className="text-2xl md:text-3xl font-bold text-charcoal px-8 text-center eb-garamond">
              Our Growth & Marketing Insights
            </h2>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          {/* 4-column insight cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
                category: "Sales Excellence",
                title: "The AI advantage in sales: Moving from pilots to scale",
                description: "Early AI successes show 30% or better improvement in win rates. We identify the most promising use cases across the sales life cycle.",
                type: "Brief",
                link: "/insights/ai-in-sales"
              },
              {
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
                category: "Marketing Operations",
                title: "Building a scalable marketing engine for mid-market growth",
                description: "How growing companies can build marketing operations that scale without the enterprise complexity or budget.",
                type: "Guide",
                link: "/insights/marketing-operations"
              },
              {
                image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80",
                category: "Customer Experience",
                title: "Personalization that pays: A practical guide for growing companies",
                description: "Personalization doesn't require enterprise budgets. Here's how mid-market companies are driving 2-3x conversion improvements.",
                type: "Analysis",
                link: "/insights/personalization-guide"
              },
              {
                image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80",
                category: "Pricing Strategy",
                title: "Pricing for growth: Capturing value without losing customers",
                description: "Most companies leave 15-25% of potential revenue on the table through suboptimal pricing. Here's how to fix it.",
                type: "Perspective",
                link: "/insights/pricing-strategy"
              }
            ].map((insight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Link href={insight.link} className="block">
                  <div className="relative overflow-hidden aspect-[4/3] mb-4">
                    <img 
                      src={insight.image} 
                      alt={insight.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="text-destructive text-xs font-bold uppercase tracking-wider mb-2">
                    {insight.category}
                  </div>
                  <h3 className="text-lg font-serif font-bold text-charcoal mb-2 leading-tight group-hover:underline decoration-1 underline-offset-2">
                    {insight.title}
                  </h3>
                  <p className="text-charcoal/60 text-sm leading-relaxed mb-4">
                    {insight.description}
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-charcoal/50">{insight.type}</span>
                    <svg className="w-5 h-5 text-charcoal/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                    </svg>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* See More button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link href="/insights">
              <Button variant="outline" className="border-destructive text-destructive hover:bg-destructive/5 bg-transparent px-8 py-4">
                SEE MORE
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Related Capabilities Section - Light Gray Background */}
      <section className="py-20 md:py-28 bg-subtle">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6 block">
              Explore Further
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-6 eb-garamond">
              Related Capabilities
            </h2>
            <p className="text-lg text-charcoal/60 max-w-2xl mx-auto">
              Discover how our integrated capabilities can amplify your growth initiatives.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Artificial Intelligence",
                subtitle: "Customer Analytics",
                description: "Unlock deep customer insights with advanced analytics and AI-powered segmentation to drive personalized experiences.",
                link: "/capabilities/artificial-intelligence"
              },
              {
                title: "Technology",
                subtitle: "Digital Infrastructure",
                description: "Build scalable digital infrastructure to support your growth ambitions and enable seamless customer experiences.",
                link: "/solutions/enterprise-transformation"
              },
              {
                title: "Business Building",
                subtitle: "Digital Ventures",
                description: "Launch new digital products and revenue streams with our venture building expertise and proven methodologies.",
                link: "/capabilities/business-building"
              }
            ].map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={capability.link} className="group block h-full">
                  <div className="h-full p-8 rounded-lg bg-white border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                    <div className="text-primary text-xs font-bold uppercase tracking-[0.15em] mb-2">{capability.title}</div>
                    <h3 className="text-xl font-serif font-bold text-charcoal mb-4 group-hover:text-primary transition-colors">
                      {capability.subtitle}
                    </h3>
                    <p className="text-charcoal/60 leading-relaxed mb-6">
                      {capability.description}
                    </p>
                    <div className="flex items-center text-primary text-sm font-semibold group-hover:translate-x-2 transition-transform duration-300">
                      Explore capability <ArrowRight className="ml-2 w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Blue Background */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="container px-4 md:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 eb-garamond">
                Ready to accelerate your growth?
              </h2>
              <p className="text-xl text-white/80 mb-10">
                Let's discuss how we can help transform your commercial engine and drive sustainable revenue growth.
              </p>
              <Link href="/contact">
                <Button className="bg-white text-primary hover:bg-white/90 px-10 py-6 text-lg font-semibold">
                  Schedule a Consultation <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
