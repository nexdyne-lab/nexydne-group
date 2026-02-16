import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import BainHoverCard from "@/components/BainHoverCard";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";

export default function GrowthScaling() {
  // Capabilities data for How We Can Help section
  const capabilities = [
    {
      title: "Customer Acquisition",
      description: "Build scalable acquisition engines across paid, organic, and partnership channels. We optimize CAC while maintaining quality at scale."
    },
    {
      title: "Retention & Engagement",
      description: "Keep customers coming back. We design retention programs, engagement loops, and loyalty systems that maximize lifetime value."
    },
    {
      title: "Revenue Optimization",
      description: "Unlock hidden revenue in your existing customer base. Pricing strategy, upsell/cross-sell programs, and monetization optimization."
    },
    {
      title: "Operational Scaling",
      description: "Build the infrastructure to support 10x growth. Processes, systems, and team structures that scale without breaking."
    },
    {
      title: "International Expansion",
      description: "Take your business global. Market entry strategy, localization, regulatory navigation, and local team building."
    },
    {
      title: "Growth Analytics",
      description: "Make data-driven growth decisions. We build analytics infrastructure and dashboards that reveal what's actually driving growth."
    }
  ];

  // Related capabilities data
  const relatedCapabilities = [
    {
      title: "Digital Venture Launch",
      description: "Launch new digital products and businesses with our proven venture building methodology.",
      link: "/capabilities/business-building/digital-venture-launch"
    },
    {
      title: "Product Strategy & Design",
      description: "Build products that users love and that drive sustainable growth.",
      link: "/capabilities/business-building/product-strategy-design"
    },
    {
      title: "Go-to-Market at Scale",
      description: "Launch into new markets with strategies that drive adoption and revenue.",
      link: "/capabilities/business-building/go-to-market-scale"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-[#051C2C] selection:bg-[#0077B5] selection:text-white">
      <SEO 
        title="Growth & Scaling" 
        description="Scale your business from early traction to market leadership. Data-driven growth strategies, operational excellence, and international expansion."
        canonical="/capabilities/business-building/growth-scaling"
      />
      <Navigation />
      
      {/* Hero Section - Dark Background (F100) */}
      <section className="relative min-h-[70vh] flex items-center pt-20 bg-black">
        <div className="container px-4 md:px-12 grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link href="/capabilities/business-building" className="inline-flex items-center text-white/60 hover:text-white mb-6 text-sm transition-colors">
              <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
              Business Building
            </Link>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.05] mb-4 eb-garamond">
              Growth & Scaling
            </h1>
            
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-2xl mb-10">
              Cross the chasm from early traction to market leadership. We help mid-market companies scale revenue, operations, and teams without losing what made them successful.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button className="bg-white hover:bg-gray-200 text-black px-8 py-6 text-base font-semibold transition-all">
                  Schedule a Consultation
                </Button>
              </Link>
              <Link href="/capabilities/business-building/case-studies">
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
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80" 
              alt="Growth & Scaling" 
              className="w-full h-auto rounded-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Our Experience & Impact (F100) */}
      <section className="py-20 bg-white border-b border-gray-200">
        <div className="container px-4 md:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-[#051C2C] mb-12 eb-garamond"
          >
            Our Experience & Impact
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { metric: "4.2x", label: "average revenue growth achieved for clients over 24-month engagements" },
              { metric: "35+", label: "companies scaled from $5M to $50M+ ARR with our growth frameworks" },
              { metric: "12", label: "international market expansions successfully executed across 4 continents" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`${index > 0 ? 'border-l border-gray-200 pl-8' : ''}`}
              >
                <div className="text-5xl md:text-6xl font-bold text-[#051C2C] mb-4">{item.metric}</div>
                <p className="text-lg text-[#051C2C]/60">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Thought Leadership Paragraphs (F100) */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-12">
          <div className="max-w-4xl mx-auto space-y-8 text-xl text-[#051C2C]/80 leading-relaxed">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              The hardest part of building a business isn't getting started—it's scaling. The strategies that got you to $5M won't get you to $50M. The team that built the MVP can't always build the enterprise. Growth requires intentional transformation at every level.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              We've seen too many promising companies plateau because they couldn't make the transition from founder-led sales to scalable go-to-market, or from scrappy operations to systematic execution. Growth isn't just about doing more—it's about doing different.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Our growth team includes operators who've scaled companies from Series A to IPO, marketers who've built acquisition engines processing millions of customers, and strategists who've led international expansions across emerging markets. We bring pattern recognition from dozens of scaling journeys.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Whether you're trying to 10x your customer base, expand into new markets, or build the operational foundation for sustainable growth, we help you navigate the scaling journey without losing what made you successful in the first place.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Our Approach Section - 3 Column Layout (F100) */}
      <section className="py-24 bg-[#0a1628] text-white">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0077B5] mb-4 block">
              Our Approach
            </span>
            <h2 className="text-4xl md:text-5xl font-bold eb-garamond">
              Systematic scaling
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Diagnose",
                description: "We assess your current growth engine—what's working, what's not, and what's blocking scale. Honest analysis of unit economics, channel efficiency, and operational capacity."
              },
              {
                title: "Design",
                description: "We build a growth roadmap tailored to your stage and ambition. Clear priorities, realistic timelines, and the right sequence of investments to unlock the next level."
              },
              {
                title: "Execute",
                description: "We work alongside your team to implement the plan. Hands-on support for the hardest parts—building teams, launching channels, and establishing the systems for scale."
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

      {/* How We Can Help - Capability Cards with H100 */}
      <section className="py-24 bg-[#f8f8f7]">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0077B5] mb-6 block">
              How We Can Help
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#051C2C] mb-6 eb-garamond">
              Our Growth Capabilities
            </h2>
            <p className="text-xl text-[#051C2C]/60 max-w-2xl">
              Comprehensive growth services to scale every dimension of your business.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((item, index) => (
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

      {/* Client Results Section (F100) */}
      <section className="py-24 bg-white">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0077B5] mb-6 block">
              Client Results
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#051C2C] eb-garamond">
              Growth stories
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                category: "SAAS SCALING",
                title: "B2B platform scales from $3M to $28M ARR in 18 months",
                description: "A B2B SaaS company had strong product-market fit but couldn't scale beyond founder-led sales. We built their first sales team, implemented a demand generation engine, and established the operational infrastructure for growth.",
                image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80"
              },
              {
                category: "INTERNATIONAL EXPANSION",
                title: "Fintech expands to 5 African markets in 12 months",
                description: "A fintech company wanted to expand beyond their home market but lacked the playbook for international growth. We developed the market entry strategy, navigated regulatory requirements, and built local teams across 5 markets.",
                image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80"
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
                <Link href="/capabilities/business-building/case-studies" className="block">
                  <div className="relative overflow-hidden rounded-xl aspect-[16/10] mb-6">
                    <img 
                      src={study.image} 
                      alt={study.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-[#0077B5] text-white text-xs font-bold uppercase tracking-wider rounded">
                        {study.category}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4 group-hover:text-[#0077B5] transition-colors leading-tight">
                    {study.title}
                  </h3>
                  <p className="text-[#051C2C]/60 text-sm leading-relaxed mb-4">
                    {study.description}
                  </p>
                  <div className="flex items-center text-[#0077B5] text-sm font-semibold group-hover:translate-x-2 transition-transform duration-300">
                    Read case study <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Capabilities - H100 Hover Cards */}
      <section className="py-24 bg-[#f8f8f7]">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0077B5] mb-6 block">
              Related Capabilities
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#051C2C] eb-garamond">
              Explore more ways we can help
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {relatedCapabilities.map((item, index) => (
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

      {/* CTA Section */}
      <section className="py-24 bg-[#051C2C]">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 eb-garamond">
              Ready to scale your business?
            </h2>
            <p className="text-xl text-white/70 mb-8 leading-relaxed">
              Let's talk about your growth ambitions and how we can help you reach the next level.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button className="bg-white hover:bg-gray-200 text-black px-8 py-6 text-base font-semibold">
                  Contact Us
                </Button>
              </Link>
              <Link href="/capabilities/business-building">
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-base font-semibold bg-transparent">
                  Back to Business Building
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
