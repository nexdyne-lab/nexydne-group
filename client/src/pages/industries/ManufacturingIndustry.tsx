import { motion } from "framer-motion";
import { ArrowRight, Factory, Cog, TrendingUp, Zap, Shield, BarChart3, ChevronRight, Globe, Cpu, Wrench, Gauge, Mail } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function ManufacturingIndustry() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#051C2C] selection:bg-[#0077B5] selection:text-white">
      <SEO 
        title="Industrial Manufacturing" 
        description="Digital transformation for manufacturing. NexDyne helps industrial companies build smart factories, optimize supply chains, and create new digital business models."
        canonical="/industries/manufacturing"
      />
      <Navigation />
      
      {/* Hero Section - Consulting standard: hierarchy, CTA, split with image */}
      <section className="relative min-h-0 flex flex-col lg:flex-row lg:min-h-[68vh] lg:items-center overflow-hidden bg-[#E8EEF4] border-b border-[#051C2C]/10 pt-8">
        <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[50%] pointer-events-none">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <img
              src="https://images.unsplash.com/photo-1565043666747-69f6646db940?w=1920&q=80"
              alt="Industrial manufacturing"
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
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#0077B5]" aria-hidden>
                Industries
              </p>
              <h1 className="eb-garamond font-bold text-[#051C2C] text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] xl:text-6xl tracking-tight leading-[1.12]">
                Industrial Manufacturing
              </h1>
              <p className="text-base md:text-lg text-[#051C2C]/75 leading-relaxed max-w-lg">
                Build smart factories. Capture the opportunity.
              </p>
            </motion.div>
          </div>
        </div>
        <div className="lg:hidden relative w-full aspect-[16/10] min-h-[200px] flex-shrink-0">
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            src="https://images.unsplash.com/photo-1565043666747-69f6646db940?w=1920&q=80"
            alt="Industrial manufacturing"
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
              <p className="text-lg sm:text-xl md:text-2xl text-[#051C2C]/80 leading-relaxed mb-8 first-letter:text-6xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-[#0077B5]">
                The manufacturing sector stands at a pivotal moment. Global supply chain disruptions, labor shortages, and sustainability pressures are forcing companies to rethink how they design, produce, and deliver products. At the same time, advances in automation, AI, and digital twins are making it possible to build factories that are more flexible, efficient, and resilient than ever before.
              </p>
              
              <p className="text-lg text-[#051C2C]/70 leading-relaxed mb-8">
                We partner with manufacturers to navigate this transformation—from discrete manufacturing to process industries, from heavy equipment to high-tech. Our approach combines deep operational expertise with cutting-edge technology capabilities, helping companies build the smart factories and digital supply chains that will define the future of manufacturing.
              </p>
              
              <p className="text-lg text-[#051C2C]/70 leading-relaxed">
                Beyond operational improvements, we help manufacturers create new sources of value. Connected products, predictive services, and data-driven business models are transforming how manufacturers engage with customers and compete in the market. We help companies identify and capture these opportunities.
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
            className="eb-garamond font-bold text-[#0B2B40] text-2xl md:text-3xl mb-12 md:mb-16"
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
                <div className="text-4xl md:text-5xl font-serif font-bold text-[#0B2B40] mb-2">
                  {stat.value}
                </div>
                <div className="text-base text-[#6C757D] leading-snug">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Help - Grid style with header and separators */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-xs font-semibold uppercase tracking-[0.15em] text-[#6B7280] mb-4">
              How We Help Clients
            </h2>
            <div className="border-t border-[#E5E7EB]" aria-hidden />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 md:gap-y-12 mt-8">
            {[
              { title: "Smart Factory & Industry 4.0", desc: "Deploy IoT sensors, edge computing, and AI analytics to create connected, intelligent factories. Our solutions provide real-time visibility into operations, enable predictive maintenance, and optimize production in real time—improving OEE while reducing costs." },
              { title: "Digital Twin & Simulation", desc: "Create digital replicas of your physical assets, processes, and products. Our digital twin solutions enable virtual commissioning, process optimization, and predictive analytics—reducing time-to-market and improving operational performance." },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-lg font-bold text-[#051C2C] mb-2 flex items-center gap-2">
                  {item.title}
                  <ChevronRight className="w-4 h-4 text-[#94A3B8] shrink-0" aria-hidden />
                </h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="border-t border-[#E5E7EB] my-10 md:my-12" aria-hidden />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 md:gap-y-12">
            {[
              { title: "Supply Chain Resilience", desc: "Build supply chains that can withstand disruption. Our solutions provide end-to-end visibility, enable scenario planning, and optimize inventory placement—helping manufacturers balance efficiency with resilience." },
              { title: "Sustainable Manufacturing", desc: "Reduce environmental impact while improving profitability. Our solutions help manufacturers optimize energy consumption, reduce waste, and track carbon emissions across the value chain—meeting sustainability goals while cutting costs." },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-lg font-bold text-[#051C2C] mb-2 flex items-center gap-2">
                  {item.title}
                  <ChevronRight className="w-4 h-4 text-[#94A3B8] shrink-0" aria-hidden />
                </h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Study - Full Width */}
      <section className="py-20 md:py-28 bg-[#f8f9fa]">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0077B5] mb-4 block">
              Featured Case Study
            </span>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80" 
                alt="Smart Factory Implementation" 
                className="w-full rounded-lg shadow-lg"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-3"
            >
              <div className="text-6xl md:text-7xl eb-garamond font-bold text-[#0077B5] mb-4">
                45%
              </div>
              <div className="text-xl font-medium text-[#051C2C] mb-6">
                reduction in unplanned downtime
              </div>
              <p className="text-lg text-[#051C2C]/70 leading-relaxed mb-6">
                A global automotive supplier partnered with us to transform their manufacturing operations across 15 plants. We deployed IoT sensors on critical equipment, built predictive maintenance models using machine learning, and created a centralized operations center for real-time monitoring. The result: 45% reduction in unplanned downtime, 20% improvement in OEE, and $30M in annual savings.
              </p>
              <p className="text-[#051C2C]/70 leading-relaxed mb-8">
                Beyond the immediate operational improvements, the transformation created a foundation for continuous innovation. The data infrastructure now powers quality prediction, energy optimization, and production scheduling—with new use cases being deployed quarterly.
              </p>
              <Link href="/cases/automotive-smart-factory" className="inline-flex items-center text-[#0077B5] font-semibold hover:underline">
                Read the full case study <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>
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
            className="text-xs font-bold uppercase tracking-[0.2em] text-[#051C2C] mb-10 md:mb-12"
          >
            Featured Insights
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-0 border border-[#E5E7EB] mb-10 md:mb-12 overflow-hidden"
          >
            <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[320px]">
              <img src="https://images.unsplash.com/photo-1565043666747-69f6646db940?w=800&q=80" alt="" className="absolute inset-0 w-full h-full object-cover" aria-hidden />
            </div>
            <div className="flex flex-col justify-center p-8 md:p-10 lg:p-12 bg-white">
              <span className="text-xs font-medium uppercase tracking-wider text-[#6B7280] mb-2">Collection</span>
              <Link href="/insights/manufacturing-future" className="group inline-flex items-start gap-2 text-left mb-3">
                <h3 className="text-xl md:text-2xl lg:text-3xl eb-garamond font-bold text-[#051C2C] leading-tight group-hover:text-[#0077B5] transition-colors">
                  The Next Normal – The future of manufacturing: Smart, connected, and sustainable
                </h3>
                <span className="text-[#0077B5] shrink-0 mt-1 group-hover:translate-x-1 transition-transform" aria-hidden>&gt;</span>
              </Link>
              <span className="text-sm text-[#6B7280] mb-4">November 3, 2025 —</span>
              <p className="text-[#051C2C]/70 text-base leading-relaxed">
                Manufacturing is being redefined by Industry 4.0, digital twins, and resilient supply chains. This collection explores how manufacturers can build smart factories, deploy predictive maintenance, and create the agility needed to thrive in a volatile, sustainability-focused world.
              </p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              { category: "Article", title: "The case for a clear ROI framework for smart factory investments", link: "/insights/smart-factory-roi", image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&q=80", alt: "Smart factory" },
              { category: "Article", title: "Finding a route to resilient manufacturing supply chains", link: "/insights/manufacturing-supply-chain", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80", alt: "Supply chain" },
              { category: "Article", title: "The journey toward AI-enabled predictive maintenance", link: "/insights/ai-predictive-maintenance", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80", alt: "Predictive maintenance" },
            ].map((item, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}>
                <Link href={item.link} className="group block">
                  <div className="overflow-hidden mb-4">
                    <img src={item.image} alt={item.alt} className="w-full aspect-[16/10] object-cover transition-transform duration-300 group-hover:scale-[1.02]" />
                  </div>
                  <span className="text-xs font-medium uppercase tracking-wider text-[#6B7280] block mb-2">{item.category}</span>
                  <h3 className="text-lg font-bold text-[#051C2C] leading-snug group-hover:text-[#0077B5] transition-colors flex items-start gap-2">
                    <span>{item.title}</span>
                    <span className="text-[#0077B5] shrink-0 group-hover:translate-x-1 transition-transform" aria-hidden>&gt;</span>
                  </h3>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Manufacturing Capabilities - Editorial Grid */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl eb-garamond font-bold text-[#051C2C] mb-6">
              Our Manufacturing Capabilities
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
            {/* Predictive Maintenance */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="border-t-2 border-[#051C2C]/10 pt-8"
            >
              <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4  decoration-[#0077B5] decoration-2 underline-offset-4">
                Predictive Maintenance
              </h3>
              <p className="text-[#051C2C]/70 leading-relaxed">
                Predict equipment failures before they happen. Our AI-powered solutions analyze sensor data, maintenance history, and operating conditions to identify potential failures—enabling proactive maintenance that reduces downtime and extends asset life.
              </p>
            </motion.div>

            {/* Quality Management */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="border-t-2 border-[#051C2C]/10 pt-8"
            >
              <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4  decoration-[#0077B5] decoration-2 underline-offset-4">
                Quality Management & Prediction
              </h3>
              <p className="text-[#051C2C]/70 leading-relaxed">
                Improve quality while reducing inspection costs. Our computer vision and machine learning solutions detect defects in real time, predict quality issues before they occur, and identify root causes—enabling continuous quality improvement.
              </p>
            </motion.div>

            {/* Production Optimization */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="border-t-2 border-[#051C2C]/10 pt-8"
            >
              <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4  decoration-[#0077B5] decoration-2 underline-offset-4">
                Production Optimization
              </h3>
              <p className="text-[#051C2C]/70 leading-relaxed">
                Optimize production in real time. Our solutions use AI and operations research to schedule production, balance lines, and allocate resources—maximizing throughput while minimizing changeovers and inventory.
              </p>
            </motion.div>

            {/* Connected Products */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="border-t-2 border-[#051C2C]/10 pt-8"
            >
              <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4  decoration-[#0077B5] decoration-2 underline-offset-4">
                Connected Products & Services
              </h3>
              <p className="text-[#051C2C]/70 leading-relaxed">
                Create new revenue streams from connected products. Our solutions help manufacturers embed sensors, build IoT platforms, and create data-driven services—transforming products into platforms for ongoing customer engagement.
              </p>
            </motion.div>

            {/* Workforce Enablement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="border-t-2 border-[#051C2C]/10 pt-8"
            >
              <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4  decoration-[#0077B5] decoration-2 underline-offset-4">
                Workforce Enablement
              </h3>
              <p className="text-[#051C2C]/70 leading-relaxed">
                Empower workers with digital tools. From augmented reality work instructions to AI-powered decision support, we help manufacturers enhance worker productivity and safety while addressing skills gaps.
              </p>
            </motion.div>

            {/* Energy & Sustainability */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="border-t-2 border-[#051C2C]/10 pt-8"
            >
              <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4  decoration-[#0077B5] decoration-2 underline-offset-4">
                Energy & Sustainability Management
              </h3>
              <p className="text-[#051C2C]/70 leading-relaxed">
                Optimize energy consumption and reduce environmental impact. Our solutions provide real-time visibility into energy usage, identify optimization opportunities, and track emissions—helping manufacturers meet sustainability goals.
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
            className="text-center text-xl md:text-2xl font-semibold uppercase tracking-wide text-[#051C2C] mb-10 md:mb-14"
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
              src="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=1920&q=80"
              alt=""
              className="w-full h-full object-cover grayscale"
              aria-hidden
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            {[
              { title: "Improving first-pass yield", body: "A semiconductor manufacturer deployed our AI-powered quality prediction system across their fabrication facilities. The system analyzes thousands of process parameters in real time to predict defects before they occur, enabling proactive adjustments that dramatically improved yield." },
              { title: "Creating new service revenue", body: "An industrial equipment manufacturer transformed their business model with connected products. We helped them embed IoT sensors in their equipment, build a cloud platform for data analytics, and launch predictive maintenance services—creating a new recurring revenue stream." },
              { title: "Optimizing production scheduling", body: "A discrete manufacturer implemented our advanced planning and scheduling solution. The system balances demand, capacity, and constraints in real time, reducing changeovers and improving on-time delivery while cutting work-in-progress." },
              { title: "Building digital factories", body: "We helped a global manufacturer deploy a digital twin of their production network. Real-time visibility into equipment, quality, and throughput enabled faster root-cause analysis and continuous improvement across sites." },
            ].map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-base md:text-lg font-bold text-[#051C2C] mb-3">
                  {story.title}
                </h3>
                <p className="text-sm md:text-base text-[#051C2C]/80 leading-relaxed">
                  {story.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured experts */}
      <section className="py-20 md:py-28 bg-[#f8f9fa]">
        <div className="container px-4 md:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="eb-garamond font-bold text-[#051C2C] text-3xl md:text-4xl lg:text-5xl text-center mb-12 md:mb-16"
          >
            Featured experts
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 max-w-5xl mx-auto">
            {[
              { name: "Alastair Green", title: "Senior Partner, Washington DC", description: "Leads our manufacturing practice with expertise in smart factory, supply chain, and operational excellence.", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80" },
              { name: "Ishaan Nangia", title: "Senior Partner, Melbourne", description: "Specializes in industrial IoT, predictive maintenance, and digital transformation for discrete and process manufacturing.", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80" },
              { name: "Nicola Sandri", title: "Senior Partner, Milan", description: "Focuses on manufacturing strategy, M&A integration, and international operations for industrial and automotive clients.", image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&q=80" }
            ].map((expert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-sm border border-[#E5E7EB] p-6 md:p-8 flex flex-col items-center text-center"
              >
                <img src={expert.image} alt={expert.name} className="w-28 h-28 rounded-full object-cover mx-auto mb-4" />
                <h3 className="eb-garamond font-bold text-[#051C2C] text-xl md:text-2xl mb-1">{expert.name}</h3>
                <p className="text-sm text-[#6B7280] mb-4">{expert.title}</p>
                <p className="text-sm text-[#6B7280] leading-relaxed mb-6 line-clamp-4">{expert.description}</p>
                <a href={`mailto:contact@nexdyne.com?subject=Contact ${expert.name}`} className="inline-flex items-center justify-center w-10 h-10 bg-[#051C2C] text-white rounded-md hover:bg-[#051C2C]/90 transition-colors" aria-label={`Email ${expert.name}`}>
                  <Mail className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="flex justify-center mt-12 md:mt-16">
            <Link href="/our-people">
              <button type="button" className="px-6 py-3 bg-white border border-[#0077B5] text-[#0077B5] font-semibold rounded-md hover:bg-[#0077B5]/5 transition-colors">
                More experts
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl eb-garamond font-bold text-[#051C2C] mb-6">
              Related Services
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {[
              {
                title: "Automotive Manufacturing",
                description: "Transform automotive production with smart factory technologies, quality prediction, and supply chain optimization.",
                link: "/cases/automotive-smart-factory",
                image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=600&q=80"
              },
              {
                title: "Process Industries",
                description: "Optimize continuous manufacturing with advanced process control, predictive analytics, and energy management.",
                link: "/industries/energy-utilities",
                image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&q=80"
              },
              {
                title: "High-Tech Manufacturing",
                description: "Build agile manufacturing operations for electronics and high-tech products with AI-powered quality and yield optimization.",
                link: "/cases/semiconductor-quality-prediction",
                image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80"
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
                  <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-2 group-hover:text-[#0077B5] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-[#051C2C]/60 text-sm leading-relaxed mb-3">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center text-[#0077B5] text-sm font-semibold">
                    Learn more <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Industries */}
      <section className="py-20 md:py-28 bg-[#f8f9fa]">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl eb-garamond font-bold text-[#051C2C] mb-6">
              Related Industries
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Automotive",
                link: "/industries/automotive"
              },
              {
                title: "Energy & Utilities",
                link: "/industries/energy-utilities"
              },
              {
                title: "Aerospace & Defense",
                link: "/industries/aerospace-defense"
              }
            ].map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={industry.link} className="group block bg-white p-6 hover:bg-[#051C2C] transition-colors duration-300">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#0077B5] group-hover:text-white/60 transition-colors">
                        Industry
                      </span>
                      <h3 className="text-lg font-serif font-bold text-[#051C2C] group-hover:text-white transition-colors mt-1">
                        {industry.title}
                      </h3>
                    </div>
                    <ChevronRight className="w-5 h-5 text-[#051C2C]/30 group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-[#051C2C]">
        <div className="container px-4 md:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl eb-garamond font-bold text-white mb-6">
                Ready to build the factory of the future?
              </h2>
              <p className="text-lg text-white/70 mb-10">
                Let's discuss how we can help you deploy Industry 4.0 technologies, optimize operations, and create new digital business models.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button className="bg-[#0077B5] hover:bg-[#005a8c] text-white px-8 py-6 text-base font-semibold">
                    Contact Us
                  </Button>
                </Link>
                <Link href="/cases">
                  <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-base font-semibold bg-transparent">
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
