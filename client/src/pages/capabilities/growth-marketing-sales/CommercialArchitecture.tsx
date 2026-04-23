import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Database, Workflow, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { RelatedContent } from "@/components/RelatedContent";
import { SEO } from "@/components/SEO";

export default function CommercialArchitecture() {
  return (
    <div className="min-h-screen bg-base text-white selection:bg-primary selection:text-white">
      <SEO 
        title="Commercial Architecture | NexDyne Technologies" 
        description="Designing the blueprints for scalable revenue generation. We align your sales, marketing, and product teams around a unified commercial stack."
        canonical="/capabilities/growth-marketing-sales/commercial-architecture"
      />
      <Navigation />
      
      {/* DZ10 Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-base via-base/60 to-base"></div>
        
        <div className="container relative z-10 px-4 md:px-12">
          <Breadcrumbs />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <Link href="/capabilities/growth-marketing-sales">
              <span className="text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-primary mb-4 sm:mb-6 block hover:text-white transition-colors cursor-pointer">
                Growth, Marketing & Sales
              </span>
            </Link>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-2 sm:mb-3 md:mb-4 eb-garamond">
              Commercial <br />
              <span className="text-primary">Architecture</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 leading-relaxed max-w-2xl mb-10">
              Designing the blueprints for scalable revenue generation. We align your sales, marketing, and product teams around a unified "commercial stack" that maximizes throughput and minimizes friction.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button className="bg-primary hover:bg-primary/90 text-white px-5 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 text-base font-semibold transition-all">
                  Contact Our Architects
                </Button>
              </Link>
              <Link href="/cases">
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-5 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 text-base font-semibold transition-all bg-transparent">
                  View Case Studies
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* DZ10 Introduction Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-white text-charcoal">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-primary mb-4 sm:mb-6 block">
                Our Approach
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-5 sm:mb-6 md:mb-8 eb-garamond">
                Building a unified <br />
                <span className="text-primary">commercial system.</span>
              </h2>
              
              <div className="space-y-6 text-lg text-charcoal/70 leading-relaxed">
                <p>
                  In many organizations, the commercial function is a collection of siloed efforts: marketing generates leads, sales closes deals, and product ships features. But without a unified architecture, these components often operate at cross-purposes, creating <strong className="text-charcoal font-semibold">"revenue leaks"</strong> and systemic inefficiencies.
                </p>
                <p>
                  At NexDyne, we view your commercial organization as a distributed system. Our Commercial Architecture practice focuses on designing the interfaces, data flows, and feedback loops that connect your go-to-market functions. We help you build a <strong className="text-charcoal font-semibold">"commercial stack"</strong> where every component—from lead acquisition to customer success—is integrated, measurable, and scalable.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop" 
                  alt="Commercial Architecture" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* DZ10 Commercial Stack Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-base">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mb-8 sm:mb-12 md:mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white/60 mb-4 sm:mb-6 block">
              The Commercial Stack
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 eb-garamond">The Commercial Stack</h2>
            <p className="text-base sm:text-lg md:text-xl text-white/60 leading-relaxed">
              We help you re-architect your revenue engine across three critical layers.
            </p>
          </motion.div>

          <div className="space-y-8">
            {[
              {
                icon: <Database className="w-7 h-7" />,
                number: "1",
                title: "Data Layer: The Single Source of Truth",
                description: "Just as a software application relies on a consistent database, your commercial organization needs a unified data model. We help you define shared definitions for key metrics (MQLs, SQLs, ARR) and implement the infrastructure to track them across the customer lifecycle. This eliminates \"data drift\" between departments and ensures every decision is based on the same reality."
              },
              {
                icon: <Workflow className="w-7 h-7" />,
                number: "2",
                title: "Process Layer: Frictionless Workflows",
                description: "We analyze the \"handoffs\" between teams—marketing to sales, sales to success—as API calls. Where is information lost? Where is latency introduced? We redesign these workflows to minimize friction, automating routine tasks and ensuring that high-value human capital is focused on high-leverage activities."
              },
              {
                icon: <Users className="w-7 h-7" />,
                number: "3",
                title: "Incentive Layer: Aligned Motivations",
                description: "In a distributed system, individual nodes must optimize for the system's health. We help you design compensation and incentive structures that align individual behaviors with organizational goals. Whether it's shifting sales comp to focus on retention or aligning marketing KPIs with revenue quality, we ensure your \"human stack\" is programmed for growth."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all duration-300 hover:bg-white/10">
                  <div className="flex gap-4 sm:p-5 md:p-6">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center text-primary font-bold text-2xl group-hover:bg-primary group-hover:text-white transition-all duration-300">
                        {item.number}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-white/60 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DZ10 Impact Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-white text-charcoal">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 sm:mb-12 md:mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-primary mb-4 sm:mb-6 block">
              Impact Delivered
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-6 eb-garamond">Impact Delivered</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-4 sm:p-6 md:p-8 lg:gap-10">
            {[
              {
                metric: "35%",
                metricLabel: "Increase in Sales Velocity",
                description: "For a B2B SaaS unicorn, we redesigned the lead-to-close workflow, automating 60% of manual data entry and reducing deal cycle time by over a third."
              },
              {
                metric: "$24M",
                metricLabel: "Revenue Recovered",
                description: "By unifying customer data across sales and success teams for an enterprise software firm, we identified and captured $24M in at-risk renewal revenue."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="h-full p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl bg-base/5 hover:bg-base transition-all duration-500 hover:scale-[1.02]">
                  <div className="text-5xl font-bold text-primary mb-2 group-hover:text-white transition-colors">
                    {item.metric}
                  </div>
                  <div className="text-sm font-bold text-charcoal/60 uppercase tracking-wider mb-6 group-hover:text-white/60 transition-colors">
                    {item.metricLabel}
                  </div>
                  <p className="text-charcoal/70 leading-relaxed group-hover:text-white/70 transition-colors">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DZ10 Related Capabilities Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-base">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 sm:mb-12 md:mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white/60 mb-4 sm:mb-6 block">
              Related Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 eb-garamond">Related capabilities</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-4 sm:p-6 md:p-8 lg:gap-10">
            {[
              {
                title: "Portfolio Optimization",
                description: "Managing your product portfolio like a codebase.",
                link: "/capabilities/growth-marketing-sales/portfolio-optimization"
              },
              {
                title: "Green Growth",
                description: "Sustainable growth as efficient code.",
                link: "/capabilities/growth-marketing-sales/green-growth"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={item.link} className="group block h-full">
                  <div className="h-full p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all duration-300 hover:bg-white/10">
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors flex items-center gap-2">
                      {item.title}
                      <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </h3>
                    <p className="text-white/60 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-primary">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 eb-garamond">
              Blueprint your growth
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/80 mb-10">
              Is your commercial organization built for scale? Let's assess your architecture and identify opportunities for optimization.
            </p>
            <Link href="/contact">
              <Button className="bg-white text-primary hover:bg-white/90 px-10 py-6 text-lg font-semibold transition-all hover:scale-[1.02] hover:shadow-lg">
                Contact Our Architects
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <RelatedContent 
        items={[
          {
            title: "The CEO's Guide to Data Modernization",
            category: "Strategy",
            link: "/insights/ceo-guide-data-modernization",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
          },
          {
            title: "Building a Data-First Culture",
            category: "Culture",
            link: "/insights/building-data-first-culture",
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
          },
          {
            title: "From Data Lake to Value Stream",
            category: "Technology",
            link: "/insights/data-lake-value-stream",
            image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80"
          }
        ]}
      />

      <Footer />
    </div>
  );
}
