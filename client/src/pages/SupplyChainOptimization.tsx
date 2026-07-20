import { motion } from "framer-motion";
import { ArrowRight, TrendingDown, Network, Package, Truck, BarChart3, Shield, Globe, Layers, Target } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { RelatedContent } from "@/components/RelatedContent";

export default function SupplyChainOptimization() {
  return (
    <div className="min-h-screen bg-background font-sans text-charcoal selection:bg-primary selection:text-white">
      <SEO 
        title="Supply Chain Optimization" 
        description="Build resilient, cost-effective supply chains that adapt to disruption. Optimize inventory management, supplier relationships, and logistics."
        canonical="/capabilities/operations/supply-chain"
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative w-full bg-background overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(70% 60% at 82% 14%, rgba(224,76,44,0.05) 0%, transparent 55%), radial-gradient(55% 55% at 6% 95%, rgba(111,68,163,0.045) 0%, transparent 55%)" }} />
        <div className="relative mx-auto max-w-[1400px] px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          <div className="flex flex-col justify-center min-h-[56vh] py-24 lg:py-28">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-[920px]"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="block h-[3px] w-9 bg-primary" />
                <span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Operations / Supply Chain</span>
              </div>

              <h1 className="text-charcoal font-bold tracking-[-0.035em] leading-[1.0] text-[clamp(2.4rem,5.4vw,4.2rem)]">
                Supply Chain Optimization
              </h1>

              <p className="mt-7 text-[1.1rem] md:text-[1.2rem] leading-[1.55] text-muted-foreground max-w-[60ch]">
                Build resilient, cost-effective supply chains that adapt to disruption. We optimize inventory management, supplier relationships, and logistics to reduce costs by 20-35% while improving reliability.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <Link href="/contact">
                  <Button className="bg-primary text-primary-foreground px-7 py-4 text-[13px] font-semibold uppercase tracking-[0.1em] hover:bg-primary-hover h-auto">
                    Discuss Your Supply Chain
                  </Button>
                </Link>
                <Link href="/cases" className="text-charcoal border-b-2 border-charcoal/25 hover:border-primary pb-1 text-[13px] font-semibold uppercase tracking-[0.1em] transition-colors">
                  View Case Studies
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* DZ10 Philosophy Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-white text-charcoal">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-8 sm:gap-6 sm:p-6 sm:p-8 md:p-12 lg:gap-8 sm:gap-6 sm:p-8 md:p-12 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-primary mb-4 sm:mb-6 block">
                The Challenge
              </span>
              <h2 className="nx-h2 mb-5 sm:mb-6 md:mb-8">
                Transform your supply chain <br />
                <span className="text-primary">performance.</span>
              </h2>
              
              <div className="space-y-6 text-lg text-charcoal/70 leading-relaxed">
                <p>
                  Global supply chains face unprecedented complexity—geopolitical disruptions, demand volatility, sustainability pressures, and rising costs. Traditional approaches can't keep pace with the speed of change.
                </p>
                <p>
                  NexDyne brings <strong className="text-charcoal font-semibold">end-to-end supply chain expertise</strong> that transforms complexity into competitive advantage. We combine strategic thinking with operational excellence to build supply chains that are resilient, efficient, and responsive.
                </p>
              </div>

              <div className="pt-8 grid grid-cols-2 gap-4 sm:p-5 md:p-6">
                <div className="p-4 sm:p-5 md:p-6 bg-charcoal/5 rounded-lg sm:rounded-xl">
                  <div className="text-4xl font-bold text-primary mb-2">20-35%</div>
                  <p className="text-sm text-charcoal/60 uppercase tracking-wider">Cost Reduction</p>
                </div>
                <div className="p-4 sm:p-5 md:p-6 bg-charcoal/5 rounded-lg sm:rounded-xl">
                  <div className="text-4xl font-bold text-primary mb-2">40-60%</div>
                  <p className="text-sm text-charcoal/60 uppercase tracking-wider">Inventory Optimization</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="p-4 sm:p-6 md:p-8 bg-charcoal/5 rounded-lg sm:rounded-xl">
                <div className="text-4xl font-bold text-primary mb-2">25-45%</div>
                <div className="text-sm text-charcoal/60">Lead time reduction</div>
              </div>
              <div className="p-4 sm:p-6 md:p-8 bg-charcoal/5 rounded-lg sm:rounded-xl">
                <div className="text-4xl font-bold text-primary mb-2">30-50%</div>
                <div className="text-sm text-charcoal/60">Supplier performance improvement</div>
              </div>
              <div className="col-span-2 relative rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-xl sm:shadow-2xl">
                <img 
                  src="/images/industries/retail-warehouse.jpg" 
                  alt="Supply Chain Excellence" 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* DZ10 Offerings Grid */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 sm:mb-12 md:mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-primary mb-4 sm:mb-6 block">
              Our Capabilities
            </span>
            <h2 className="nx-h2 text-charcoal mb-6">
              End-to-end supply chain solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Comprehensive capabilities to transform every aspect of your supply chain operations.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-4 sm:p-6 md:p-8 lg:gap-5 sm:p-7 md:p-5 sm:p-7 md:p-10">
            {[
              {
                icon: <Network className="w-7 h-7" />,
                title: "Supplier Network Optimization",
                description: "Evaluate and optimize your supplier portfolio, negotiate better terms, and establish strategic partnerships that reduce risk and improve quality."
              },
              {
                icon: <Package className="w-7 h-7" />,
                title: "Inventory Management",
                description: "Implement demand forecasting, safety stock optimization, and inventory policies that balance service levels with working capital efficiency."
              },
              {
                icon: <Truck className="w-7 h-7" />,
                title: "Logistics & Distribution",
                description: "Optimize transportation routes, warehouse operations, and distribution networks to reduce lead times and transportation costs."
              },
              {
                icon: <Globe className="w-7 h-7" />,
                title: "Global Sourcing Strategy",
                description: "Develop sourcing strategies that balance cost, quality, risk, and sustainability across global supplier networks."
              },
              {
                icon: <Shield className="w-7 h-7" />,
                title: "Risk & Resilience",
                description: "Build supply chain resilience with diversified suppliers, scenario planning, and real-time visibility into potential disruptions."
              },
              {
                icon: <BarChart3 className="w-7 h-7" />,
                title: "Performance Analytics",
                description: "Deploy dashboards and KPIs that provide real-time visibility into supply chain performance and enable data-driven decisions."
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
                <div className="h-full flex flex-col bg-white border border-border p-6 rounded-lg sm:rounded-xl">
                  <div className="mb-6 p-3 bg-primary/10 w-fit rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition duration-300">
                    {item.icon}
                  </div>

                  <h3 className="text-xl font-bold text-charcoal mb-4 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed text-sm flex-grow">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DZ10 Methodology Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-white text-charcoal">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 sm:gap-6 sm:p-6 sm:p-8 md:p-12 lg:gap-8 sm:gap-6 sm:p-8 md:p-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-primary mb-4 sm:mb-6 block">
                Our Approach
              </span>
              <h2 className="nx-h2 mb-6">
                The NexDyne <span className="text-primary">Methodology</span>
              </h2>
              <p className="text-lg text-charcoal/70 leading-relaxed mb-5 sm:mb-6 md:mb-8">
                We take a holistic view of your supply chain, identifying bottlenecks, inefficiencies, and risks across procurement, inventory, logistics, and supplier management.
              </p>
              
              <div className="space-y-6">
                {[
                  { num: "01", title: "Assess", desc: "Map your end-to-end supply chain, identify pain points, and benchmark against best practices." },
                  { num: "02", title: "Design", desc: "Develop tailored strategies for network optimization, inventory management, and supplier relationships." },
                  { num: "03", title: "Implement", desc: "Execute improvements with change management support and technology enablement." },
                  { num: "04", title: "Sustain", desc: "Build capabilities and governance to maintain gains and drive continuous improvement." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="text-2xl font-bold text-primary">{item.num}</div>
                    <div>
                      <h3 className="text-lg font-bold text-charcoal mb-1">{item.title}</h3>
                      <p className="text-charcoal/60 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-xl sm:shadow-2xl">
                <img 
                  src="/images/capabilities/cap-warehouse-robot.jpg" 
                  alt="Supply Chain Methodology" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* DZ10 Case Studies Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 sm:mb-12 md:mb-16 gap-4 sm:p-5 md:p-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-primary mb-4 sm:mb-6 block">
                Our Impact
              </span>
              <h2 className="nx-h2 text-charcoal">
                Supply chain transformations
              </h2>
            </motion.div>
            <Link href="/cases">
              <Button variant="outline" className="border-border text-charcoal hover:bg-background bg-transparent transition duration-300 hover:scale-[1.02]">
                View all case studies
              </Button>
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-4 sm:p-6 md:p-8 lg:gap-5 sm:p-7 md:p-5 sm:p-7 md:p-10">
            {[
              {
                title: "Regional distributor reduces inventory costs by 35%",
                category: "Inventory Optimization",
                image: "/images/industries/transport-bridge.jpg"
              },
              {
                title: "Manufacturer builds resilient multi-source supplier network",
                category: "Supplier Management",
                image: "/images/industries/transport-traffic.jpg"
              },
              {
                title: "E-commerce company cuts fulfillment time by 40%",
                category: "Logistics",
                image: "/images/industries/retail-warehouse.jpg"
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
                <div className="relative overflow-hidden rounded-lg sm:rounded-xl aspect-[4/3] mb-6">
                  <img 
                    src={study.image} 
                    alt={study.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                <div className="text-primary text-xs font-bold uppercase tracking-[0.15em] mb-3">{study.category}</div>
                <h3 className="text-xl font-bold text-charcoal mb-4 group-hover:text-primary transition-colors leading-tight">
                  {study.title}
                </h3>
                <div className="flex items-center text-charcoal text-sm font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  Read case study <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DZ10 Why NexDyne Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-white text-charcoal">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-primary mb-4 sm:mb-6 block">
              Why NexDyne
            </span>
            <h2 className="nx-h2 text-charcoal mb-6">
              The supply chain partner <br />you've been looking for
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:p-6 md:p-8">
            {[
              { metric: "50+", label: "Supply Chain Projects" },
              { metric: "<1 yr", label: "Typical Program Payback" },
              { metric: "25%", label: "Average Cost Reduction" },
              { metric: "15+", label: "Industries Served" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-4 sm:p-6 md:p-8 bg-charcoal/5 rounded-lg sm:rounded-xl"
              >
                <div className="text-5xl font-bold text-primary mb-2">{item.metric}</div>
                <p className="text-sm text-charcoal/60 uppercase tracking-wider">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <RelatedContent 
        items={[
          {
            title: "Generative AI in Supply Chain",
            category: "Technology",
            link: "/insights/generative-supply-chain",
            image: "/images/insights/generative-supply-chain-hero.jpg"
          },
          {
            title: "IoT for Resilient Supply Chains",
            category: "Innovation",
            link: "/insights/iot-resilient-supply-chain",
            image: "/images/insights/iot-resilient-supply-chain-hero.jpg"
          },
          {
            title: "The Complete Guide to Process Mining",
            category: "Operations",
            link: "/insights/complete-guide-process-mining",
            image: "/images/insights/complete-guide-process-mining-hero.jpg"
          }
        ]}
      />

      <Footer />
    </div>
  );
}
