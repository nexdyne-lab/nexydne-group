import { motion } from "framer-motion";
import { ArrowRight, Target, TrendingUp, Layers, Compass, Lightbulb, BarChart3, Building2, Rocket } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { RelatedContent } from "@/components/RelatedContent";

export default function BusinessStrategy() {
  return (
    <div className="min-h-screen bg-base font-sans text-white selection:bg-primary selection:text-white">
      <SEO 
        title="Business Strategy & Transformation" 
        description="Define your path to victory. We help you clarify your vision, identify growth engines, and restructure operations for scalability and efficiency."
        canonical="/capabilities/strategy-corporate-finance/business-strategy"
      />
      <Navbar />
      
      {/* DZ10 Hero Section */}
      <section className="relative min-h-[440px] md:min-h-[560px] flex items-center pt-16 sm:pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80" 
            alt="Business Strategy & Transformation" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-base via-base/80 to-base/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-base via-transparent to-transparent" />
        </div>
        
        <div className="container px-4 sm:px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <Link href="/capabilities/strategy-corporate-finance" className="inline-flex items-center text-white/60 hover:text-white text-sm mb-6 transition-colors">
              <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 mr-2 rotate-180" />
              Strategy & Business Finance
            </Link>
            
            <span className="text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white/60 mb-4 sm:mb-6 block">
              Strategic Transformation
            </span>
            
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tight text-white leading-[1.05] mb-5 sm:mb-3 md:mb-4 eb-garamond">
              Business Strategy <br />
              <span className="text-primary">& Transformation</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 leading-relaxed max-w-2xl mb-10">
              Define your path to victory. We help you clarify your vision, identify growth engines, and restructure operations for scalability and efficiency.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link href="/contact">
                <Button className="bg-primary hover:bg-primary/90 text-white px-5 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 text-base font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/20">
                  Start Your Transformation
                </Button>
              </Link>
              <Link href="/cases">
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-5 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 text-base font-semibold transition-all duration-300 bg-transparent hover:scale-[1.02]">
                  View Case Studies
                </Button>
              </Link>
            </div>
          </motion.div>
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
                Our Philosophy
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-5 sm:mb-6 md:mb-8">
                Bridge vision <br />
                <span className="text-primary">to operational reality.</span>
              </h2>
              
              <div className="space-y-6 text-lg text-charcoal/70 leading-relaxed">
                <p>
                  Most strategic plans fail not because of poor thinking, but because of weak execution. Companies invest months crafting compelling strategies, only to watch them gather dust as operational realities overwhelm good intentions.
                </p>
                <p>
                  NexDyne delivers the <strong className="text-charcoal font-semibold">Strategy Execution Framework</strong> that transforms strategic ambition into operational momentum. We don't just help you craft compelling strategies—we build the organizational capabilities, resource allocation models, and governance structures that ensure your strategy drives measurable business results.
                </p>
              </div>

              <div className="pt-8">
                <Link href="/contact" className="inline-flex items-center text-primary hover:text-primary/90 font-semibold text-base group transition-colors">
                  Discuss your transformation 
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
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
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80" 
                  alt="Strategic Planning" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-base via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-0 left-0 p-4 sm:p-6 md:p-8">
                  <div className="text-white">
                    <div className="font-bold text-2xl mb-2">Strategy Execution</div>
                    <div className="text-white/80">Strategy without execution is hallucination.</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* DZ10 Offerings Grid */}
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
              Core Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Comprehensive strategy services
            </h2>
            <p className="text-xl text-white/60 max-w-2xl">
              From vision development to operational transformation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-4 sm:p-6 md:p-8 lg:gap-5 sm:p-7 md:p-5 sm:p-7 md:p-10">
            {[
              {
                icon: <Compass className="w-7 h-7" />,
                title: "Strategic Planning & Vision Development",
                description: "We facilitate strategic planning processes that move beyond generic frameworks to capture your unique competitive position. Through market analysis, competitive intelligence, and scenario planning, we help leadership teams articulate clear strategic priorities grounded in market realities."
              },
              {
                icon: <Rocket className="w-7 h-7" />,
                title: "Growth Strategy & Market Entry",
                description: "We design growth strategies that identify and prioritize the highest-value expansion opportunities. Whether pursuing new customer segments, geographic markets, or product categories, we assess market attractiveness, competitive dynamics, and required capabilities."
              },
              {
                icon: <Building2 className="w-7 h-7" />,
                title: "Operating Model Design & Restructuring",
                description: "We redesign operating models to align organizational structure with strategic priorities. Through process mapping, capability assessment, and organizational design, we identify structural inefficiencies and misaligned incentives."
              },
              {
                icon: <Target className="w-7 h-7" />,
                title: "Strategic Initiative Management",
                description: "We establish portfolio management disciplines that translate strategy into prioritized initiatives with clear ownership and milestones. By implementing stage-gate processes and performance tracking systems, we ensure strategic initiatives receive appropriate investment."
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
                <div className="h-full flex flex-col p-4 sm:p-6 md:p-8 bg-white/5 rounded-lg sm:rounded-xl border border-white/10 hover:border-primary/50 transition-all duration-300">
                  <div className="mb-6 p-3 bg-white/5 w-fit rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-white/60 leading-relaxed text-sm flex-grow">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DZ10 Results Section */}
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
                Proven Results
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Measurable <span className="text-primary">impact</span>
              </h2>
              <p className="text-lg text-charcoal/70 leading-relaxed mb-5 sm:mb-6 md:mb-8">
                Our strategy engagements deliver tangible business outcomes through disciplined execution and rigorous tracking.
              </p>
              
              <div className="space-y-6">
                {[
                  "45% average revenue growth over 3-year strategic plans",
                  "22% operating cost reduction through restructuring",
                  "80% of strategic initiative benefits delivered within timeline",
                  "35% improvement in decision-making speed"
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <p className="text-charcoal/70">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { metric: "45%", label: "Revenue Growth" },
                { metric: "22%", label: "Cost Reduction" },
                { metric: "80%", label: "Benefits Delivered" },
                { metric: "100+", label: "Transformations" }
              ].map((item, index) => (
                <motion.div 
                  key={item.label} 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="p-4 sm:p-5 md:p-6 bg-base/5 rounded-lg sm:rounded-xl"
                >
                  <div className="text-3xl font-bold text-primary mb-2">{item.metric}</div>
                  <p className="text-sm text-charcoal/60 uppercase tracking-wider">{item.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* DZ10 Case Studies Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-base">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 sm:mb-12 md:mb-16 gap-4 sm:p-5 md:p-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white/60 mb-4 sm:mb-6 block">
                Our Impact
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                Transformation success stories
              </h2>
            </motion.div>
            <Link href="/cases">
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 bg-transparent transition-all duration-300 hover:scale-[1.02]">
                View all case studies
              </Button>
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-4 sm:p-6 md:p-8 lg:gap-5 sm:p-7 md:p-5 sm:p-7 md:p-10">
            {[
              {
                title: "Professional services firm achieves 45% revenue growth",
                category: "Growth Strategy",
                image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80",
                link: "/case-studies/professional-services-growth"
              },
              {
                title: "Distribution company reduces operating costs by 22%",
                category: "Restructuring",
                image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80",
                link: "/case-studies/distribution-restructuring"
              },
              {
                title: "Healthcare company delivers digital transformation in 18 months",
                category: "Transformation",
                image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80",
                link: "/case-studies/healthcare-transformation"
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
                <Link href={study.link}>
                  <div className="relative overflow-hidden rounded-lg sm:rounded-xl aspect-[4/3] mb-6">
                    <img 
                      src={study.image} 
                      alt={study.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                  <div className="text-primary text-xs font-bold uppercase tracking-[0.15em] mb-3">{study.category}</div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors leading-tight">
                    {study.title}
                  </h3>
                  <div className="flex items-center text-white text-sm font-semibold group-hover:translate-x-2 transition-transform duration-300">
                    Read case study <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services Section */}
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
              Related Services
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-6">
              Complementary capabilities
            </h2>
            <p className="text-xl text-charcoal/60 max-w-2xl mx-auto">
              Explore other services that support your strategic transformation.
            </p>
          </motion.div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:p-6 md:p-8">
            {[
              {
                title: "Fractional CFO Services",
                description: "Access high-level financial leadership without the full-time cost.",
                link: "/capabilities/strategy-corporate-finance/cfo-services"
              },
              {
                title: "M&A & Strategic Partnerships",
                description: "Navigate complex transactions with expert guidance.",
                link: "/capabilities/strategy-corporate-finance/mergers-acquisitions"
              },
              {
                title: "Performance Improvement",
                description: "Unlock hidden value through cost optimization and process streamlining.",
                link: "/capabilities/strategy-corporate-finance/performance-improvement"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={service.link} className="group block h-full">
                  <div className="h-full p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl bg-base/5 hover:bg-base transition-all duration-500 hover:scale-[1.02] hover:shadow-xl">
                    <h3 className="text-xl font-bold text-charcoal mb-4 group-hover:text-white transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-charcoal/60 leading-relaxed text-sm mb-6 group-hover:text-white/70 transition-colors">
                      {service.description}
                    </p>
                    <div className="flex items-center text-primary text-sm font-semibold group-hover:text-white group-hover:translate-x-2 transition-all duration-300">
                      Learn more <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <RelatedContent 
        items={[
          {
            title: "Why Strategic Plans Fail and How to Ensure Yours Succeeds",
            category: "Strategy",
            link: "/insights/strategic-plans-success",
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
          },
          {
            title: "The Operating Model Redesign Playbook",
            category: "Transformation",
            link: "/insights/operating-model-redesign",
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80"
          },
          {
            title: "Portfolio Management for Strategic Initiatives",
            category: "Execution",
            link: "/insights/portfolio-management",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
          }
        ]}
      />

      <Footer />
    </div>
  );
}
