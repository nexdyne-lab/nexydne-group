import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, BarChart3, MapPin, TrendingUp, Users, Target, Zap, CheckCircle, Quote, Building2, ShoppingCart, Store } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";

export default function CaseStudyConsumerElectronicsDemandOptimization() {
  return (
    <div className="min-h-screen bg-white font-sans text-charcoal selection:bg-primary selection:text-white">
      <SEO 
        title="Consumer Electronics Demand Optimization Case Study" 
        description="How a consumer electronics and furniture retailer increased annual sales by $2.4M with localized demand forecasting across 120+ stores."
        canonical="/cases/consumer-electronics-demand-optimization"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-base overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=1600&q=80" 
            alt="Consumer Electronics Retail" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-base via-base/90 to-base/70" />
        </div>
        
        <div className="container px-4 md:px-12 relative z-10">
          <Link href="/industries/consumer-products" className="inline-flex items-center text-white/60 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Consumer Products
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6 block">
              Case Study • Consumer Electronics & Furniture Retail
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-white leading-[1.1] mb-4">
              Localized Demand Forecasting Drives $2.4M Sales Increase
            </h1>
            
            <p className="text-xl text-white/70 leading-relaxed max-w-3xl mb-10">
              A consumer electronics and furniture retailer partnered with NexDyne to create a localized demand forecaster that optimized assortment across more than 120 stores, leveraging geolocational data and machine learning to transform their merchandising strategy.
            </p>
            
            {/* Key Metrics */}
            <div className="grid grid-cols-3 gap-6 max-w-2xl">
              {[
                { value: "$2.4M", label: "Annual sales increase" },
                { value: "120+", label: "Stores optimized" },
                { value: "15%", label: "Cash margin improvement" }
              ].map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-serif font-bold text-primary mb-1">{metric.value}</div>
                  <div className="text-sm text-white/60">{metric.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Client Overview */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-12">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6 block">
                Client Overview
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8">
                A Regional Retail Leader Seeking Competitive Edge
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="bg-base/5 p-6 rounded-lg">
                  <Store className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-semibold mb-2">Industry</h3>
                  <p className="text-charcoal/70 text-sm">Consumer Electronics & Furniture Retail</p>
                </div>
                <div className="bg-base/5 p-6 rounded-lg">
                  <MapPin className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-semibold mb-2">Store Network</h3>
                  <p className="text-charcoal/70 text-sm">120+ locations across 6 regions</p>
                </div>
                <div className="bg-base/5 p-6 rounded-lg">
                  <ShoppingCart className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-semibold mb-2">SKU Count</h3>
                  <p className="text-charcoal/70 text-sm">15,000+ active SKUs</p>
                </div>
              </div>
              
              <p className="text-lg text-charcoal/70 leading-relaxed">
                Our client operates a chain of consumer electronics and furniture stores serving diverse communities across urban, suburban, and rural markets. With a product mix ranging from smartphones and laptops to sofas and dining sets, the company faced the complex challenge of optimizing assortment for vastly different customer demographics and preferences at each location.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-20 bg-base/5">
        <div className="container px-4 md:px-12">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6 block">
                The Challenge
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8">
                One-Size-Fits-All Assortment Was Leaving Money on the Table
              </h2>
              
              <div className="space-y-6 text-lg text-charcoal/70 leading-relaxed mb-12">
                <p>
                  The retailer's traditional approach to assortment planning treated all stores similarly, with minor adjustments based on store size and format. This approach was creating significant inefficiencies:
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Mismatched Inventory",
                    description: "Urban stores were overstocked on entry-level products while suburban locations couldn't keep premium items in stock. The disconnect between inventory and local demand was costing millions in lost sales."
                  },
                  {
                    title: "High Markdown Rates",
                    description: "Products that didn't sell in certain locations required deep discounts to clear, eroding margins. Markdown rates varied by 15-25% across stores with similar footprints."
                  },
                  {
                    title: "Limited Local Insights",
                    description: "Store managers had intuitions about local preferences but lacked data to support their recommendations. Decisions were made at the regional level with limited visibility into micro-market dynamics."
                  },
                  {
                    title: "Competitive Pressure",
                    description: "E-commerce competitors were using sophisticated personalization while the retailer's stores offered the same experience everywhere. Customer satisfaction scores were declining in key markets."
                  }
                ].map((challenge, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bg-white p-6 rounded-lg border border-base/10"
                  >
                    <h3 className="font-semibold text-charcoal mb-3">{challenge.title}</h3>
                    <p className="text-charcoal/70 text-sm leading-relaxed">{challenge.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-12">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6 block">
                Our Approach
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8">
                Building a Geospatially-Aware Demand Intelligence Platform
              </h2>
              
              <p className="text-lg text-charcoal/70 leading-relaxed mb-12">
                NexDyne developed a machine learning solution that combined traditional sales data with rich geolocational and demographic datasets to create hyper-local demand forecasts. Our approach went beyond simple clustering to understand the unique demand drivers at each store location.
              </p>
              
              <div className="space-y-8">
                {[
                  {
                    phase: "Phase 1",
                    title: "Geospatial Data Integration",
                    duration: "5 weeks",
                    description: "We integrated multiple external data sources including census demographics, household income data, competitor locations, traffic patterns, and local economic indicators. This created a rich profile for each store's trade area.",
                    outcomes: ["Trade area profiles for all 120+ stores", "Integration of 15+ external data sources", "Automated data refresh pipeline"]
                  },
                  {
                    phase: "Phase 2",
                    title: "Demand Pattern Discovery",
                    duration: "6 weeks",
                    description: "Using unsupervised learning, we identified distinct demand patterns that transcended traditional store clustering. A suburban store near a university might share more demand characteristics with an urban location than with neighboring suburban stores.",
                    outcomes: ["12 distinct demand archetypes identified", "Store-level affinity scores for each archetype", "Seasonal pattern analysis by location type"]
                  },
                  {
                    phase: "Phase 3",
                    title: "Localized Forecasting Model",
                    duration: "7 weeks",
                    description: "We built a hierarchical forecasting model that generated SKU-level predictions for each store, incorporating local demand drivers, seasonality, promotional response, and cross-category effects.",
                    outcomes: ["SKU-store level demand forecasts", "Promotional lift predictions by location", "New product launch predictions"]
                  },
                  {
                    phase: "Phase 4",
                    title: "Assortment Optimization Engine",
                    duration: "6 weeks",
                    description: "The forecasting model fed into an optimization engine that recommended store-specific assortments within space and budget constraints. The system balanced local demand with operational efficiency.",
                    outcomes: ["Store-specific assortment recommendations", "Space-constrained optimization", "Automated reorder point calculations"]
                  }
                ].map((phase, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="border-l-4 border-primary pl-8"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-xs font-bold uppercase tracking-wider text-primary">{phase.phase}</span>
                      <span className="text-sm text-charcoal/50">• {phase.duration}</span>
                    </div>
                    <h3 className="text-xl font-serif font-bold text-charcoal mb-3">{phase.title}</h3>
                    <p className="text-charcoal/70 leading-relaxed mb-4">{phase.description}</p>
                    <ul className="space-y-2">
                      {phase.outcomes.map((outcome, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-charcoal/70">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 bg-base">
        <div className="container px-4 md:px-12">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/60 mb-6 block">
                The Results
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-12">
                Significant Sales and Margin Improvements
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-16">
                {[
                  {
                    metric: "$2.4M",
                    label: "Annual Sales Increase",
                    description: "Localized assortments drove significant sales lift, particularly in stores that had been underperforming due to mismatched inventory."
                  },
                  {
                    metric: "15%",
                    label: "Cash Margin Improvement",
                    description: "Better inventory allocation reduced markdowns and improved sell-through rates across all product categories."
                  },
                  {
                    metric: "22%",
                    label: "Reduction in Stockouts",
                    description: "Stores now carry the right products for their local market, dramatically reducing lost sales from out-of-stock situations."
                  },
                  {
                    metric: "18%",
                    label: "Inventory Turns Improvement",
                    description: "More efficient inventory allocation improved turns while maintaining service levels."
                  }
                ].map((result, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white/5 p-8 rounded-xl"
                  >
                    <div className="text-4xl md:text-5xl font-serif font-bold text-primary mb-2">{result.metric}</div>
                    <div className="text-lg font-semibold text-white mb-3">{result.label}</div>
                    <p className="text-white/60 text-sm leading-relaxed">{result.description}</p>
                  </motion.div>
                ))}
              </div>
              
              {/* Testimonial */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white/10 p-8 md:p-12 rounded-xl relative"
              >
                <Quote className="w-12 h-12 text-primary/30 absolute top-8 left-8" />
                <blockquote className="text-xl md:text-2xl text-white leading-relaxed mb-6 relative z-10 pl-8">
                  "For years, we knew our stores were different, but we didn't have the tools to act on that knowledge. NexDyne gave us the ability to treat each store as a unique market while maintaining operational efficiency. The results speak for themselves—our store managers are happier, our customers are finding what they want, and our margins have improved significantly."
                </blockquote>
                <div className="pl-8">
                  <div className="font-semibold text-white">Chief Merchandising Officer</div>
                  <div className="text-white/60 text-sm">Consumer Electronics & Furniture Retailer</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Innovation Spotlight */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-12">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6 block">
                Innovation Spotlight
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8">
                The Power of Geolocational Intelligence
              </h2>
              
              <div className="bg-base/5 p-8 rounded-xl mb-8">
                <p className="text-lg text-charcoal/70 leading-relaxed mb-6">
                  One of the most impactful innovations in this project was the integration of geolocational data to understand demand drivers that traditional retail analytics miss:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Commuter Patterns",
                      description: "Stores near transit hubs showed different demand patterns for portable electronics during morning vs. evening hours."
                    },
                    {
                      title: "Competitor Proximity",
                      description: "Demand for certain categories shifted based on nearby competitor presence, allowing for strategic differentiation."
                    },
                    {
                      title: "Local Events",
                      description: "Integration with local event calendars helped predict demand spikes for specific product categories."
                    },
                    {
                      title: "Housing Trends",
                      description: "New housing developments and demographic shifts were early indicators of changing furniture demand."
                    }
                  ].map((insight, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-2" />
                      <div>
                        <h4 className="font-semibold text-charcoal mb-1">{insight.title}</h4>
                        <p className="text-charcoal/70 text-sm">{insight.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="py-20 bg-base/5">
        <div className="container px-4 md:px-12">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6 block">
                Key Takeaways
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8">
                Lessons for Retail Localization
              </h2>
              
              <div className="space-y-6">
                {[
                  {
                    title: "Look beyond traditional store clustering",
                    description: "Geographic proximity doesn't equal demand similarity. Data-driven archetypes reveal hidden patterns that traditional clustering misses."
                  },
                  {
                    title: "External data is a competitive advantage",
                    description: "Retailers sitting on transaction data alone are missing half the picture. Geolocational and demographic data unlock new insights."
                  },
                  {
                    title: "Balance localization with operational efficiency",
                    description: "Hyper-local assortments must be balanced against supply chain complexity. The optimization engine is as important as the forecasting model."
                  },
                  {
                    title: "Empower store teams with insights",
                    description: "The best results came when store managers could see the data behind recommendations and provide local context back to the system."
                  }
                ].map((takeaway, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex gap-6"
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-semibold text-charcoal mb-2">{takeaway.title}</h3>
                      <p className="text-charcoal/70 leading-relaxed">{takeaway.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Content */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-12">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6 block">
                Related Case Studies
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold">
                Explore more success stories
              </h2>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Food & Beverage Demand Forecasting",
                  description: "How a regional F&B company reduced planning time by 50% with ML-powered forecasting.",
                  link: "/cases/food-beverage-demand-forecasting",
                  industry: "Food & Beverage"
                },
                {
                  title: "Retail Inventory Optimization",
                  description: "Reducing stockouts by 35% while cutting inventory costs for a national retailer.",
                  link: "/cases/retail-inventory-optimization",
                  industry: "Retail"
                },
                {
                  title: "E-commerce Personalization",
                  description: "Driving 40% conversion improvement through AI-powered product recommendations.",
                  link: "/cases/ecommerce-personalization",
                  industry: "E-commerce"
                }
              ].map((caseStudy, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link href={caseStudy.link} className="group block">
                    <div className="bg-base/5 p-6 rounded-xl border border-transparent hover:border-primary/30 transition-all h-full">
                      <span className="text-xs font-bold uppercase tracking-wider text-primary mb-4 block">
                        {caseStudy.industry}
                      </span>
                      <h3 className="text-lg font-serif font-bold text-charcoal mb-3 group-hover:text-primary transition-colors">
                        {caseStudy.title}
                      </h3>
                      <p className="text-charcoal/60 text-sm leading-relaxed mb-4">
                        {caseStudy.description}
                      </p>
                      <div className="flex items-center text-primary text-sm font-semibold group-hover:translate-x-2 transition-transform">
                        Read case study <ArrowRight className="ml-2 w-4 h-4" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-base">
        <div className="container px-4 md:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
                Ready to unlock the power of localized demand intelligence?
              </h2>
              <p className="text-xl text-white/60 mb-10 max-w-2xl mx-auto">
                Let's discuss how geolocational analytics and machine learning can transform your assortment strategy and drive measurable sales growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-base font-semibold">
                    Schedule a Consultation
                  </Button>
                </Link>
                <Link href="/industries/retail">
                  <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-base font-semibold bg-transparent">
                    Explore Retail Solutions
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
