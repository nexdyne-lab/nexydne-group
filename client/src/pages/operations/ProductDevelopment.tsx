import { motion } from "framer-motion";
import { ArrowRight, Layers, BarChart3, Cog, Users, Lightbulb, Rocket } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";

export default function ProductDevelopment() {
  return (
    <div className="min-h-screen bg-white text-[#051C2C] selection:bg-[#0077B5] selection:text-white">
      <SEO 
        title="Product Development" 
        description="Accelerate innovation and time-to-market. Transform your product development process to deliver winning products faster and more efficiently."
        canonical="/capabilities/operations/product-development"
      />
      <Navbar />
      
      {/* Hero Section - Dark Background */}
      <section className="relative min-h-[70vh] flex items-center pt-20 bg-black">
        <div className="container px-4 md:px-12 grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link href="/capabilities/operations" className="inline-flex items-center text-white/60 hover:text-white mb-6 text-sm transition-colors">
              <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
              Operations
            </Link>
            
            <h1 className="text-5xl md:text-7xl eb-garamond font-bold tracking-tight text-white leading-[1.05] mb-4">
              Product Development
            </h1>
            
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-2xl mb-10">
              Accelerate innovation and time-to-market. Transform your product development process to deliver winning products faster and more efficiently.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button className="bg-white hover:bg-gray-200 text-black px-8 py-6 text-base font-semibold transition-all">
                  Discuss Your Product Strategy
                </Button>
              </Link>
              <Link href="/capabilities/operations/case-studies">
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
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80" 
              alt="Product Development" 
              className="w-full h-auto rounded-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Our Experience & Impact - Bain Style */}
      <section className="py-20 bg-white border-b border-gray-200">
        <div className="container px-4 md:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl eb-garamond font-bold text-[#051C2C] mb-12"
          >
            Our Experience & Impact
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { metric: "80+", label: "product development transformations for midmarket companies" },
              { metric: "30-50%", label: "typical reduction in time-to-market" },
              { metric: "25-40%", label: "improvement in new product success rates" }
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

      {/* Thought Leadership Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-12">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xl md:text-2xl text-[#051C2C] leading-relaxed mb-8">
                For midmarket manufacturers and product companies, the ability to bring innovative products to market quickly is often the difference between market leadership and playing catch-up. Yet many growing companies struggle with product development processes that were designed for a smaller scale—leading to delays, cost overruns, and missed market opportunities.
              </p>
              <p className="text-lg text-[#051C2C]/70 leading-relaxed mb-8">
                We help midmarket companies build product development capabilities that compete with larger players. Our approach combines lean product development principles with practical process design, enabling you to accelerate innovation without the overhead of enterprise-scale systems.
              </p>
              <p className="text-lg text-[#051C2C]/70 leading-relaxed mb-8">
                In today's fast-moving markets, speed matters—but so does getting it right. We help you build development processes that balance agility with rigor, ensuring you launch products that meet customer needs and deliver on your business case.
              </p>
              <p className="text-lg text-[#051C2C]/70 leading-relaxed">
                Our team brings deep experience across product development disciplines, from stage-gate processes to agile methodologies to design thinking. We understand the unique challenges of midmarket product organizations and design solutions that fit your scale and culture.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Approach Section - Dark Background */}
      <section className="py-24 bg-[#0a1628]">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0077B5] mb-6 block">
              Our Approach
            </span>
            <h2 className="text-4xl md:text-5xl eb-garamond font-bold text-white mb-6">
              How we accelerate product development
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Process Assessment & Optimization",
                description: "We analyze your current development process to identify bottlenecks, waste, and opportunities—then design streamlined workflows that accelerate time-to-market."
              },
              {
                title: "Portfolio & Pipeline Management",
                description: "We help you build portfolio management capabilities that ensure you're investing in the right products and managing your development pipeline effectively."
              },
              {
                title: "Cross-Functional Collaboration",
                description: "We design organizational structures and collaboration mechanisms that break down silos and enable faster, more effective product development."
              }
            ].map((approach, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border-t border-white/20 pt-8"
              >
                <h3 className="text-xl font-bold text-white mb-4">{approach.title}</h3>
                <p className="text-white/60 leading-relaxed">{approach.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Can Help Section - H100 Hover Effect */}
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
            <h2 className="text-4xl md:text-5xl eb-garamond font-bold text-[#051C2C] mb-6">
              Our Product Development Capabilities
            </h2>
            <p className="text-xl text-[#051C2C]/60 max-w-3xl">
              We help you build product development capabilities that drive innovation, speed, and market success.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "NPD Process Design",
                description: "Design and implement new product development processes that balance speed with rigor, from ideation through launch.",
                link: "/contact"
              },
              {
                title: "Stage-Gate Optimization",
                description: "Streamline your stage-gate process to accelerate decision-making while maintaining appropriate governance and risk management.",
                link: "/contact"
              },
              {
                title: "Agile Product Development",
                description: "Implement agile methodologies adapted for physical product development, enabling faster iteration and customer feedback.",
                link: "/contact"
              },
              {
                title: "Portfolio Management",
                description: "Build portfolio management capabilities that optimize resource allocation and ensure strategic alignment across your product pipeline.",
                link: "/contact"
              },
              {
                title: "Design for Manufacturing",
                description: "Integrate manufacturing considerations early in development to reduce costs, improve quality, and accelerate production ramp-up.",
                link: "/contact"
              },
              {
                title: "Innovation Management",
                description: "Develop innovation processes and culture that generate a steady stream of new product ideas aligned with market opportunities.",
                link: "/contact"
              }
            ].map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Link href={capability.link} className="block h-full">
                  <div className="h-full min-h-[200px] p-8 bg-white border-l-4 border-l-transparent group-hover:border-l-[#CC0000] border border-gray-200 transition-all duration-300 flex flex-col">
                    <div className="flex-1">
                      <h3 className="text-2xl eb-garamond font-bold text-[#051C2C] leading-tight origin-top-left transition-all duration-300 group-hover:text-base group-hover:mb-2">
                        {capability.title}
                      </h3>
                      
                      <p className="text-[#051C2C]/70 leading-relaxed text-sm max-h-0 overflow-hidden opacity-0 group-hover:max-h-[120px] group-hover:opacity-100 group-hover:mt-3 transition-all duration-300 ease-in-out">
                        {capability.description}
                      </p>
                    </div>
                    
                    <div className="flex items-center text-[#CC0000] text-sm font-semibold mt-auto pt-4">
                      Read More <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
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
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0077B5] mb-6 block">
              Client Results
            </span>
            <h2 className="text-4xl md:text-5xl eb-garamond font-bold text-[#051C2C] mb-6">
              Product development transformations that deliver
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80",
                category: "Industrial Manufacturing",
                title: "Industrial equipment manufacturer cuts development time by 40%",
                description: "A 250-employee industrial equipment manufacturer struggled with lengthy development cycles. We redesigned their NPD process, implemented cross-functional teams, and introduced agile practices—reducing average time-to-market from 18 months to 11 months.",
                link: "/case-studies/industrial-product-development"
              },
              {
                image: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&q=80",
                category: "Consumer Products",
                title: "Consumer products company doubles new product success rate",
                description: "A growing consumer products company had a poor track record with new launches. We helped them implement voice-of-customer processes, portfolio prioritization, and stage-gate discipline—improving new product success rates from 30% to 65%.",
                link: "/case-studies/consumer-product-development"
              }
            ].map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={result.link} className="group block">
                  <div className="relative overflow-hidden aspect-[16/10] mb-6">
                    <img 
                      src={result.image} 
                      alt={result.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <span className="text-[#0077B5] text-xs font-bold uppercase tracking-wider mb-3 block">{result.category}</span>
                  <h3 className="text-2xl eb-garamond font-bold text-[#051C2C] mb-4 group-hover:text-[#0077B5] transition-colors leading-tight">
                    {result.title}
                  </h3>
                  <p className="text-[#051C2C]/60 leading-relaxed mb-4">
                    {result.description}
                  </p>
                  <div className="flex items-center text-[#0077B5] text-sm font-semibold group-hover:translate-x-2 transition-transform duration-300">
                    Read full case study <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Insights Section */}
      <section className="py-24 bg-[#f8f8f7]">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6"
          >
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0077B5] mb-6 block">
                Latest Insights
              </span>
              <h2 className="text-4xl md:text-5xl eb-garamond font-bold text-[#051C2C]">
                Product development perspectives
              </h2>
            </div>
            <Link href="/insights" className="group flex items-center text-[#051C2C] font-semibold hover:text-[#0077B5] transition-colors">
              View all insights <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                category: "Innovation",
                readTime: "6 min read",
                title: "Building Innovation Capability in Midmarket Companies",
                description: "How growing companies can develop systematic innovation processes without enterprise-level resources.",
                link: "/insights/midmarket-innovation"
              },
              {
                category: "Process Excellence",
                readTime: "5 min read",
                title: "Agile for Physical Products: Adapting Software Methods",
                description: "Practical approaches to applying agile principles in hardware and physical product development.",
                link: "/insights/agile-physical-products"
              },
              {
                category: "Strategy",
                readTime: "7 min read",
                title: "Portfolio Management for Growing Product Companies",
                description: "How to prioritize and manage your product portfolio when resources are constrained and opportunities abound.",
                link: "/insights/portfolio-management"
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
                  <div className="h-full p-8 rounded-xl bg-white border border-gray-200 hover:border-[#0077B5]/50 transition-all duration-300 hover:shadow-lg">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-[#0077B5] text-xs font-bold uppercase tracking-wider">{insight.category}</span>
                      <span className="text-[#051C2C]/40">•</span>
                      <span className="text-[#051C2C]/60 text-sm">{insight.readTime}</span>
                    </div>
                    <h3 className="text-xl eb-garamond font-bold text-[#051C2C] mb-4 group-hover:text-[#0077B5] transition-colors leading-tight">
                      {insight.title}
                    </h3>
                    <p className="text-[#051C2C]/60 text-sm leading-relaxed mb-6">
                      {insight.description}
                    </p>
                    <div className="flex items-center text-[#0077B5] text-sm font-semibold group-hover:translate-x-2 transition-transform duration-300">
                      Read article <ArrowRight className="ml-2 w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Capabilities Section - H100 Hover Effect */}
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
              Related Capabilities
            </span>
            <h2 className="text-4xl md:text-5xl eb-garamond font-bold text-[#051C2C] mb-6">
              Explore related capabilities
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Production & Asset Optimization",
                description: "Maximize throughput and equipment effectiveness. Deploy predictive maintenance, production scheduling, and lean manufacturing principles.",
                link: "/capabilities/operations/production-optimization"
              },
              {
                title: "Quality Management Systems",
                description: "Build a culture of quality that exceeds customer expectations. Implement systematic quality controls and continuous improvement methodologies.",
                link: "/capabilities/operations/quality-management"
              },
              {
                title: "Supply Chain Optimization",
                description: "Build resilient, cost-effective supply chains that adapt to disruption. Optimize inventory management, supplier relationships, and logistics networks.",
                link: "/capabilities/operations/supply-chain"
              }
            ].map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Link href={capability.link} className="block h-full">
                  <div className="h-full min-h-[200px] p-8 bg-white border-l-4 border-l-transparent group-hover:border-l-[#CC0000] border border-gray-200 transition-all duration-300 flex flex-col">
                    <div className="flex-1">
                      <h3 className="text-2xl eb-garamond font-bold text-[#051C2C] leading-tight origin-top-left transition-all duration-300 group-hover:text-base group-hover:mb-2">
                        {capability.title}
                      </h3>
                      
                      <p className="text-[#051C2C]/70 leading-relaxed text-sm max-h-0 overflow-hidden opacity-0 group-hover:max-h-[120px] group-hover:opacity-100 group-hover:mt-3 transition-all duration-300 ease-in-out">
                        {capability.description}
                      </p>
                    </div>
                    
                    <div className="flex items-center text-[#CC0000] text-sm font-semibold mt-auto pt-4">
                      Read More <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Blue Background */}
      <section className="py-24 bg-[#0077B5]">
        <div className="container px-4 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl eb-garamond font-bold text-white mb-6">
              Ready to accelerate your product development?
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
              Let's discuss how we can help you bring winning products to market faster.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button className="bg-white hover:bg-gray-100 text-[#0077B5] px-8 py-6 text-base font-semibold transition-all">
                  Schedule a Consultation
                </Button>
              </Link>
              <Link href="/capabilities/operations">
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-base font-semibold transition-all bg-transparent">
                  Explore All Operations Services
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
