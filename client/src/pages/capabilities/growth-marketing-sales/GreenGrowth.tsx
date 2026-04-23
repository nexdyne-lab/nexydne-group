import { motion } from "framer-motion";
import { ArrowRight, Leaf, Globe, TrendingUp, Recycle, BarChart3, Target } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import BainHoverCard from "@/components/BainHoverCard";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";

export default function GreenGrowth() {
  return (
    <div className="min-h-screen bg-white font-sans text-charcoal selection:bg-primary selection:text-white">
      <SEO 
        title="Green Growth" 
        description="Sustainable growth strategy, ESG marketing, and green brand positioning. We help you build brands and businesses that thrive while protecting the planet."
        canonical="/capabilities/growth-marketing-sales/green-growth"
      />
      <Navigation />
      
      {/* Hero Section - Dark Background */}
      <section className="relative min-h-[70vh] flex items-center pt-20 bg-charcoal">
        <div className="container px-4 md:px-12 grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link href="/capabilities/growth-marketing-sales" className="inline-flex items-center text-white/60 hover:text-white mb-6 text-sm transition-colors">
              <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
              Growth, Marketing & Sales
            </Link>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.05] mb-4 eb-garamond">
              Green Growth
            </h1>
            
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-2xl mb-10">
              Sustainable growth strategy, ESG marketing, and green brand positioning. We help you build brands and businesses that thrive while protecting the planet.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button className="bg-white hover:bg-muted text-charcoal px-8 py-6 text-base font-semibold transition-all">
                  Drive Sustainable Growth
                </Button>
              </Link>
              <Link href="/cases">
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-base font-semibold transition-all bg-transparent">
                  View Case Studies
                </Button>
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:block"
          >
            <img 
              src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80" 
              alt="Sustainable Growth" 
              className="w-full h-auto rounded-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Our Experience & Impact - Bain Style with Border-Left Accent */}
      <section className="py-20 bg-white border-b border-border">
        <div className="container px-4 md:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-charcoal mb-12 eb-garamond"
          >
            Our Experience & Impact
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { metric: "100+", label: "sustainable growth strategies developed for clients" },
              { metric: "30%", label: "average revenue growth from green product lines" },
              { metric: "45%", label: "improvement in brand perception for sustainability leaders" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`${index > 0 ? 'border-l border-border pl-8' : ''}`}
              >
                <div>
                  <div className="text-5xl md:text-6xl font-bold text-charcoal mb-4">{item.metric}</div>
                  <p className="text-lg text-charcoal/60">{item.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Thought Leadership - 2-Column Layout */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-charcoal leading-tight eb-garamond">
                Sustainability is no longer a nice-to-have. It's a growth imperative.
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
                Consumer demand for sustainable products is growing 5x faster than conventional alternatives. Investors are redirecting trillions toward ESG-compliant companies. Regulations are tightening globally. The question is no longer whether to embrace sustainability—it's how to do it profitably.
              </p>
              <p>
                The most successful companies have discovered that sustainability and growth are not trade-offs. They've found ways to reduce environmental impact while creating new revenue streams, building brand equity, and attracting top talent.
              </p>
              <p>
                We help companies navigate this transition—developing strategies that deliver both environmental impact and business results.
              </p>
              <ul className="space-y-3 mt-6">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0"></span>
                  <span>Sustainable growth strategy and business model innovation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0"></span>
                  <span>Green brand positioning and ESG communications</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0"></span>
                  <span>Sustainable product development and go-to-market</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Approach Section - 3 Column Layout */}
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
              Building sustainable competitive advantage
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Assess opportunity",
                description: "We analyze your market, customers, and operations to identify sustainability opportunities. We quantify the business case for green initiatives and prioritize investments."
              },
              {
                title: "Develop strategy",
                description: "We create sustainability strategies that align with your business objectives. We design green products, services, and business models that drive growth."
              },
              {
                title: "Execute and communicate",
                description: "We help you implement sustainability initiatives and communicate your progress authentically. We build brand equity through credible, compelling ESG storytelling."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-white/70 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
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

      {/* How We Can Help - H100 Capability Cards */}
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
              How We Can Help
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 eb-garamond">
              Our Green Growth Capabilities
            </h2>
            <p className="text-xl text-charcoal/60 max-w-2xl">
              Comprehensive sustainability services from strategy to execution.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Leaf,
                title: "Sustainable Growth Strategy",
                description: "Develop growth strategies that integrate sustainability into your core business. Identify green market opportunities and build sustainable competitive advantage."
              },
              {
                icon: Globe,
                title: "ESG Brand Positioning",
                description: "Build authentic sustainability narratives that resonate with stakeholders. Develop ESG communications that build trust and differentiate your brand."
              },
              {
                icon: TrendingUp,
                title: "Green Product Innovation",
                description: "Design sustainable products and services that meet customer needs. Develop go-to-market strategies for green offerings."
              },
              {
                icon: Recycle,
                title: "Circular Economy Models",
                description: "Design business models that eliminate waste and create value from sustainability. Implement circular strategies that drive both impact and profit."
              },
              {
                icon: BarChart3,
                title: "Sustainability Measurement",
                description: "Build measurement frameworks that track environmental and business impact. Report progress credibly to stakeholders and regulators."
              },
              {
                icon: Target,
                title: "Green Marketing",
                description: "Develop marketing strategies that communicate sustainability authentically. Avoid greenwashing while building brand equity through ESG leadership."
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
                  link="#"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Results Section */}
      <section className="py-24 bg-white">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6 block">
              Client Results
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal eb-garamond">
              Driving sustainable growth
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                category: "CONSUMER GOODS",
                title: "Sustainable product line generates $50M in new revenue while reducing carbon footprint 40%",
                description: "A consumer goods company wanted to enter the sustainable products market but didn't know where to start. We identified high-potential categories, developed product concepts, and created go-to-market strategy. The new line generated $50M in year one while reducing carbon footprint by 40%.",
                image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80"
              },
              {
                category: "MANUFACTURING",
                title: "Circular economy model creates $25M in new revenue from waste streams",
                description: "A manufacturer was spending millions on waste disposal while missing sustainability targets. We designed a circular economy model that turned waste into revenue. The program now generates $25M annually while achieving zero-waste-to-landfill certification.",
                image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80"
              }
            ].map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Link href="/cases" className="block">
                  <div className="relative overflow-hidden rounded-xl aspect-[16/10] mb-6">
                    <img 
                      src={study.image} 
                      alt={study.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-primary text-white text-xs font-bold uppercase tracking-wider rounded">
                        {study.category}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-charcoal mb-4 group-hover:text-primary transition-colors leading-tight">
                    {study.title}
                  </h3>
                  <p className="text-charcoal/60 text-sm leading-relaxed mb-4">
                    {study.description}
                  </p>
                  <div className="flex items-center text-primary text-sm font-semibold group-hover:translate-x-2 transition-transform duration-300">
                    Read case study <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Insights Section */}
      <section className="py-24 bg-subtle">
        <div className="container px-4 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6 block">
                Insights
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-charcoal eb-garamond">
                Latest Insights
              </h2>
              <p className="text-xl text-charcoal/60 mt-4">
                Expert perspectives on sustainable growth and ESG strategy.
              </p>
            </motion.div>
            <Link href="/insights">
              <Button variant="outline" className="border-base/20 text-charcoal hover:bg-base/5 bg-transparent transition-all duration-300">
                View all insights
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                category: "Sustainability",
                readTime: "7 min read",
                title: "The Green Premium: Why Consumers Pay More for Sustainable Products",
                description: "New research reveals the segments willing to pay premium prices for sustainability—and how to reach them.",
                link: "/insights/green-premium"
              },
              {
                category: "ESG",
                readTime: "6 min read",
                title: "Beyond Greenwashing: Building Authentic Sustainability Brands",
                description: "How leading companies are building credible sustainability narratives that drive both impact and growth.",
                link: "/insights/authentic-sustainability"
              },
              {
                category: "Strategy",
                readTime: "5 min read",
                title: "Circular Economy: From Waste to Competitive Advantage",
                description: "How circular business models are creating new revenue streams while reducing environmental impact.",
                link: "/insights/circular-economy"
              }
            ].map((insight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={insight.link} className="group block h-full">
                  <div className="h-full p-8 rounded-xl bg-white border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-primary text-xs font-bold uppercase tracking-wider">{insight.category}</span>
                      <span className="text-charcoal/40">•</span>
                      <span className="text-charcoal/60 text-sm">{insight.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-charcoal mb-4 group-hover:text-primary transition-colors leading-tight">
                      {insight.title}
                    </h3>
                    <p className="text-charcoal/60 text-sm leading-relaxed mb-6">
                      {insight.description}
                    </p>
                    <div className="flex items-center text-primary text-sm font-semibold group-hover:translate-x-2 transition-transform duration-300">
                      Read article <ArrowRight className="ml-2 w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Capabilities Section */}
      <section className="py-24 bg-white">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6 block">
              Related Capabilities
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 eb-garamond">
              Explore related capabilities
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                title: "Growth Strategy",
                description: "Develop comprehensive growth strategies that drive sustainable, profitable expansion.",
                link: "/capabilities/growth-marketing-sales/growth-strategy"
              },
              {
                title: "Brand Strategy",
                description: "Build distinctive brands that resonate with customers and command premium positioning.",
                link: "/capabilities/growth-marketing-sales/brand-strategy"
              },
              {
                title: "Consumer & Shopper Insights",
                description: "Understand evolving consumer preferences and behaviors around sustainability.",
                link: "/capabilities/growth-marketing-sales/consumer-shopper-insights"
              }
            ].map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <BainHoverCard
                  title={capability.title}
                  description={capability.description}
                  link={capability.link}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Blue Background */}
      <section className="py-24 bg-primary">
        <div className="container px-4 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 eb-garamond">
              Ready to drive sustainable growth?
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
              Let's discuss how sustainability can become your competitive advantage and growth driver.
            </p>
            <Link href="/contact">
              <Button className="bg-white hover:bg-subtle text-charcoal px-10 py-6 text-lg font-semibold transition-all">
                Start Your Green Growth Journey
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
