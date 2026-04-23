import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import BainHoverCard from "@/components/BainHoverCard";

export default function AcceleratingBusinessGrowth() {
  const [activeTab, setActiveTab] = useState(0);
  
  // Client Results Data
  const clientResults = [
    {
      title: "E-commerce launch drives 340% revenue growth",
      description: "A traditional B2B distributor launched their first direct-to-consumer channel, capturing market share from digital-native competitors and creating a new revenue engine.",
      image: "/images/solution-growth.a945b529.webp",
      stats: [
        { value: "340%", label: "Revenue growth in 18 months" },
        { value: "$4.2M", label: "New channel revenue year one" },
        { value: "62%", label: "Lower CAC than industry average" }
      ]
    },
    {
      title: "SaaS productization creates recurring revenue",
      description: "A professional services firm transformed their methodology into a software product, shifting from project-based revenue to predictable recurring streams.",
      image: "/images/solution-growth.a945b529.webp",
      stats: [
        { value: "78%", label: "Recurring revenue ratio" },
        { value: "4.2x", label: "Customer lifetime value increase" },
        { value: "$2.8M", label: "ARR within 24 months" }
      ]
    },
    {
      title: "Marketplace model unlocks network effects",
      description: "A regional service provider built a two-sided marketplace connecting suppliers and buyers, achieving exponential growth through network effects.",
      image: "/images/solution-growth.a945b529.webp",
      stats: [
        { value: "12x", label: "Transaction volume growth" },
        { value: "85%", label: "Gross margin improvement" },
        { value: "3,200+", label: "Active marketplace participants" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-charcoal">
      <SEO 
        title="Accelerating Business Growth" 
        description="Launch new digital products and channels. Drive revenue through e-commerce and digital innovation."
        canonical="/solutions/accelerating-business-growth"
      />
      <Navigation />
      
      {/* Hero Section - Black Background */}
      <section className="relative min-h-[50vh] md:min-h-[60vh] bg-charcoal pt-20">
        <div className="container px-4 sm:px-6 md:px-12 h-full">
          <div className="flex items-center min-h-[40vh] md:min-h-[50vh]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl py-12"
            >
              {/* Breadcrumb */}
              <nav className="flex items-center space-x-2 text-sm text-white/50 mb-8">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <ChevronRight className="w-3 h-3" />
                <Link href="/capabilities" className="hover:text-white transition-colors">Solutions</Link>
                <ChevronRight className="w-3 h-3" />
                <span className="text-white/70">Business Growth</span>
              </nav>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl eb-garamond font-bold tracking-tight text-white leading-[1.1] mb-3">
                Accelerating<br />Business Growth
              </h1>
              
              <p className="text-lg md:text-xl text-white/70 leading-relaxed">
                Launch new digital products and channels that capture market share and create sustainable competitive advantage.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Statistics Section - Bain Style */}
      <section className="py-16 md:py-20 bg-white border-b border-border">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-destructive mb-12">
              Our experience & impact
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
              {[
                { stat: "90+", label: "digital growth programs delivered for mid-market companies" },
                { stat: "3.4x", label: "average revenue growth achieved within 24 months" },
                { stat: "$180M+", label: "new revenue generated through digital channels" },
                { stat: "47%", label: "reduction in customer acquisition costs" }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`py-6 sm:py-8 px-4 sm:px-6 ${i > 0 ? 'md:border-l border-border' : ''} ${i >= 2 ? 'border-t md:border-t-0 border-border' : ''}`}
                >
                  <div className="text-3xl sm:text-4xl md:text-6xl font-bold text-charcoal mb-2 sm:mb-3">
                    {item.stat}
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {item.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Narrative Section - McKinsey Style */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <p className="text-2xl md:text-3xl text-charcoal leading-relaxed ">
                Growth has never been harder—or more urgent. The playbooks that built your business won't scale it to the next level. We help mid-market companies break through growth ceilings by launching digital products, channels, and business models that compound over time.
              </p>
              
              <p className="text-lg text-charcoal/80 leading-relaxed">
                The companies winning today aren't just optimizing what they have—they're building entirely new revenue engines. Consider the forces reshaping growth:
              </p>
              
              <div className="space-y-6 pt-4">
                <div>
                  <p className="text-lg text-charcoal leading-relaxed">
                    <span className="font-bold">Your existing channels have peaked.</span> Most mid-market companies have squeezed every dollar from their traditional sales and marketing. The next 10% improvement costs more than the last 50%. It's time to build new engines, not tune old ones.
                  </p>
                </div>
                
                <div>
                  <p className="text-lg text-charcoal leading-relaxed">
                    <span className="font-bold">Digital-native competitors are eating your lunch.</span> Companies born in the cloud acquire customers at half your cost and scale revenue 3x faster. They're not playing by the same rules—and neither should you.
                  </p>
                </div>
                
                <div>
                  <p className="text-lg text-charcoal leading-relaxed">
                    <span className="font-bold">The window for digital transformation is closing.</span> Every month you delay, competitors capture market share that becomes exponentially harder to reclaim. The best time to launch was yesterday. The second best time is now.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What's Your Growth Ambition - Bain Hover Cards */}
      <section className="py-16 md:py-24 bg-subtle">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl eb-garamond font-bold text-charcoal mb-4">
              What's your growth ambition?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl">
              We've helped companies at every stage of the growth journey—from those launching their first digital channel to those scaling platform business models. Where are you?
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <BainHoverCard
              title="Launch direct-to-consumer channels"
              description="Build e-commerce capabilities that let you own the customer relationship, capture higher margins, and gather first-party data that fuels future growth."
              link="/capabilities/ecommerce"
            />
            <BainHoverCard
              title="Productize your expertise into software"
              description="Transform your methodology, processes, or intellectual property into digital products that generate recurring revenue and scale independently of headcount."
              link="/solutions/business-growth/digital-product-development"
            />
            <BainHoverCard
              title="Build platform and marketplace models"
              description="Design two-sided business models that leverage network effects to achieve exponential growth and create defensible competitive moats."
              link="/capabilities/platforms"
            />
            <BainHoverCard
              title="Optimize customer acquisition at scale"
              description="Deploy data-driven growth marketing that reduces CAC, increases conversion, and builds sustainable customer acquisition engines that compound over time."
              link="/solutions/business-growth/growth-marketing-acquisition"
            />
            <BainHoverCard
              title="Expand into new markets and segments"
              description="Identify and capture adjacent markets with tailored go-to-market strategies that leverage your existing strengths while minimizing execution risk."
              link="/capabilities/market-expansion"
            />
            <BainHoverCard
              title="Transform pricing and monetization"
              description="Shift from one-time transactions to subscription, usage-based, or hybrid models that improve unit economics and create predictable revenue streams."
              link="/solutions/business-growth/pricing-monetization-strategy"
            />
          </div>
        </div>
      </section>

      {/* AI in Sales & Marketing Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Column - Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="/images/solution-growth.a945b529.webp" 
                alt="AI in Sales & Marketing" 
                className="w-full h-[400px] object-cover"
              />
            </motion.div>
            
            {/* Right Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-destructive mb-4">
                AI in Sales & Marketing
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold text-charcoal mb-6 leading-tight">
                AI isn't replacing your growth team—it's multiplying their impact
              </h3>
              
              <p className="text-lg text-charcoal/80 mb-8 leading-relaxed">
                The hype around AI in marketing is deafening, but the practical applications are transformative. We help mid-market companies deploy AI where it actually moves the needle—not chasing shiny objects, but building sustainable competitive advantage.
              </p>
              
              <ul className="space-y-4 mb-10">
                {[
                  "Predictive lead scoring that focuses sales effort on highest-probability opportunities",
                  "Dynamic pricing optimization that captures maximum value without leaving money on the table",
                  "Personalization engines that deliver relevant experiences at scale without massive content teams",
                  "Customer churn prediction that enables proactive retention before it's too late",
                  "Automated campaign optimization that continuously improves performance without manual intervention"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="w-2 h-2 bg-destructive rounded-full mt-2 mr-4 flex-shrink-0" />
                    <span className="text-charcoal/80">{item}</span>
                  </li>
                ))}
              </ul>
              
              {/* Real Outcomes */}
              <div className="border-t border-border pt-8 mb-8">
                <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-destructive mb-4">
                  Real outcomes we've delivered
                </h4>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-3xl font-bold text-charcoal">3.2x</div>
                    <div className="text-sm text-muted-foreground">improvement in lead-to-close conversion</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-charcoal">47%</div>
                    <div className="text-sm text-muted-foreground">reduction in customer acquisition cost</div>
                  </div>
                </div>
              </div>
              
              {/* How We Help */}
              <div className="border-t border-border pt-8">
                <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-destructive mb-4">
                  How we help
                </h4>
                <p className="text-charcoal/80 leading-relaxed">
                  We start with your actual data and business goals—not theoretical AI capabilities. Our approach identifies the highest-impact use cases, builds proof-of-concept models with your real data, and scales what works into production systems your team can operate.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* A Closer Look - Insight Cards */}
      <section className="py-16 md:py-24 bg-subtle">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-destructive mb-4">
              A closer look
            </h2>
            <p className="text-2xl md:text-3xl text-charcoal">
              Deep dives into growth strategy
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "The D2C Playbook: From Launch to Scale",
                description: "A practical guide to building direct-to-consumer channels that acquire customers profitably and scale sustainably.",
                link: "/insights/d2c-playbook"
              },
              {
                title: "Productization: Turning Services into Software",
                description: "How service businesses can create digital products that generate recurring revenue and scale independently.",
                link: "/insights/productization-guide"
              },
              {
                title: "Platform Economics for Mid-Market Companies",
                description: "Understanding when and how to build platform business models that leverage network effects.",
                link: "/insights/platform-economics"
              },
              {
                title: "Growth Marketing Beyond CAC",
                description: "Why customer acquisition cost is just the beginning—and how to build growth systems that compound.",
                link: "/insights/growth-marketing-guide"
              }
            ].map((insight, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link href={insight.link}>
                  <div className="bg-white p-8 border border-border hover:border-destructive transition-colors group cursor-pointer h-full">
                    <h3 className="text-xl font-bold text-charcoal mb-4 group-hover:text-destructive transition-colors leading-tight">
                      {insight.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {insight.description}
                    </p>
                    <span className="inline-flex items-center text-destructive font-semibold">
                      Read more <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Can Help - Bain Hover Cards */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-destructive mb-4">
              How we can help
            </h2>
            <p className="text-2xl md:text-3xl text-charcoal max-w-3xl leading-relaxed">
              We combine strategy, technology, and execution to launch digital growth initiatives that drive measurable revenue.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <BainHoverCard
              title="E-Commerce Strategy & Launch"
              description="Design and launch direct-to-consumer channels that acquire customers efficiently, from platform selection to go-live and beyond."
              link="/solutions/business-growth/ecommerce-strategy-launch"
            />
            <BainHoverCard
              title="Digital Product Development"
              description="Build new digital products and services from concept to launch, with the technical architecture and go-to-market strategy to scale."
              link="/solutions/business-growth/digital-product-development"
            />
            <BainHoverCard
              title="Growth Marketing & Acquisition"
              description="Deploy data-driven marketing strategies that optimize customer acquisition cost and maximize lifetime value across channels."
              link="/solutions/business-growth/growth-marketing-acquisition"
            />
            <BainHoverCard
              title="Pricing & Monetization Strategy"
              description="Transform business models with subscription, usage-based, and hybrid pricing strategies that improve unit economics."
              link="/solutions/business-growth/pricing-monetization-strategy"
            />
            <BainHoverCard
              title="Go-to-Market Acceleration"
              description="Compress time-to-market for new products and channels with agile methodologies and rapid experimentation frameworks."
              link="/solutions/business-growth/go-to-market-acceleration"
            />
            <BainHoverCard
              title="Revenue Operations & Analytics"
              description="Build the data infrastructure and analytics capabilities to measure, optimize, and scale your growth engine."
              link="/solutions/business-growth/revenue-operations-analytics"
            />
          </div>
        </div>
      </section>

      {/* Client Results - Tabbed Section */}
      <section className="py-16 md:py-24 bg-subtle">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-destructive mb-4">
              Our client results
            </h2>
            <p className="text-2xl md:text-3xl text-charcoal">
              Real outcomes from real engagements
            </p>
          </motion.div>
          
          {/* Tabs */}
          <div className="flex flex-wrap gap-4 mb-8 border-b border-border pb-4">
            {clientResults.map((result, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={`px-6 py-3 text-sm font-semibold transition-all ${
                  activeTab === i 
                    ? 'bg-destructive text-white' 
                    : 'bg-white text-muted-foreground hover:bg-subtle border border-border'
                }`}
              >
                {result.title.split(' ').slice(0, 3).join(' ')}...
              </button>
            ))}
          </div>
          
          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-charcoal mb-6 leading-tight">
                {clientResults[activeTab].title}
              </h3>
              <p className="text-lg text-charcoal/80 mb-8 leading-relaxed">
                {clientResults[activeTab].description}
              </p>
              
              <div className="grid grid-cols-3 gap-6">
                {clientResults[activeTab].stats.map((stat, i) => (
                  <div key={i}>
                    <div className="text-3xl font-bold text-destructive">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <img 
                src={clientResults[activeTab].image} 
                alt={clientResults[activeTab].title}
                className="w-full h-[350px] object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Consulting Services Links */}
      <section className="py-16 md:py-20 bg-white border-t border-border">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-destructive mb-8">
              Consulting services
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "E-Commerce & Digital Channels", link: "/services/ecommerce" },
                { title: "Growth Marketing", link: "/services/growth-marketing" },
                { title: "Digital Product Development", link: "/services/digital-products" },
                { title: "Revenue Operations", link: "/services/revenue-operations" },
                { title: "Pricing Strategy", link: "/services/pricing" },
                { title: "Go-to-Market Strategy", link: "/services/gtm-strategy" },
                { title: "Customer Analytics", link: "/services/customer-analytics" },
                { title: "Platform & Marketplace", link: "/services/platforms" }
              ].map((service, i) => (
                <Link key={i} href={service.link}>
                  <div className="group flex items-center justify-between py-4 border-b border-border hover:border-destructive transition-colors cursor-pointer">
                    <span className="text-charcoal group-hover:text-destructive transition-colors font-medium">
                      {service.title}
                    </span>
                    <ArrowRight className="w-4 h-4 text-muted-foreground/70 group-hover:text-destructive group-hover:translate-x-1 transition-all" />
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Growth Ecosystem Section */}
      <section className="py-16 md:py-20 bg-subtle">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-destructive mb-4">
              Our Growth Ecosystem
            </h2>
            <p className="text-xl md:text-2xl text-charcoal max-w-2xl mx-auto">
              We partner with leading e-commerce and growth platforms to accelerate your digital transformation
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16"
          >
            {[
              { name: "Shopify", logo: "/images/partners/shopify.png" },
              { name: "Stripe", logo: "/images/partners/stripe.png" },
              { name: "HubSpot", logo: "/images/partners/hubspot.png" },
              { name: "Segment", logo: "/images/partners/segment.png" },
              { name: "Google Analytics", logo: "/images/partners/google-analytics.png" },
              { name: "Klaviyo", logo: "/images/partners/klaviyo.png" },
              { name: "Mixpanel", logo: "/images/partners/mixpanel.png" },
              { name: "Amplitude", logo: "/images/partners/amplitude.png" },
            ].map((partner, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300"
              >
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="h-10 md:h-12 w-auto object-contain"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Ready to Talk CTA - Bain Style Two Column */}
      <section className="py-16 md:py-24 bg-white border-t border-border">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-destructive mb-4">
                Ready to talk?
              </h2>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal leading-tight">
                Let's build your next growth engine together.
              </h3>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We work with mid-market companies ready to break through growth ceilings. Whether you're launching your first digital channel or scaling a platform business model, our team is ready to help you capture the opportunity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button className="bg-destructive hover:bg-destructive text-white px-8 py-4 text-lg font-semibold">
                    Start a Conversation
                  </Button>
                </Link>
                <Link href="/case-studies">
                  <Button variant="outline" className="border-charcoal text-charcoal hover:bg-charcoal hover:text-white px-8 py-4 text-lg font-semibold">
                    View Our Work
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
