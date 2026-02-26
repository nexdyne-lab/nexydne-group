import { motion } from "framer-motion";
import { ArrowRight, Car, Zap, Cpu, Factory, BarChart3, ChevronRight, Globe, Battery, Gauge, Settings, Mail } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function AutomotiveIndustry() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#051C2C] selection:bg-[#0077B5] selection:text-white">
      <SEO 
        title="Automotive" 
        description="Digital transformation for automotive. NexDyne helps OEMs, suppliers, and mobility companies navigate the transition to electric, autonomous, and connected vehicles while optimizing operations."
        canonical="/industries/automotive"
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
              src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&q=80"
              alt="Automotive industry"
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
                Automotive
              </h1>
              <p className="text-base md:text-lg text-[#051C2C]/75 leading-relaxed max-w-lg">
                Lead in the new automotive era.
              </p>
            </motion.div>
          </div>
        </div>
        <div className="lg:hidden relative w-full aspect-[16/10] min-h-[200px] flex-shrink-0">
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&q=80"
            alt="Automotive industry"
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
                The automotive industry is being transformed by four converging forces: electrification, autonomous driving, connectivity, and shared mobility. These CASE trends are reshaping competitive dynamics, creating new business models, and demanding new capabilities. Companies that can master this transformation will define the future of mobility; those that can't will be disrupted.
              </p>
              
              <p className="text-lg text-[#051C2C]/70 leading-relaxed mb-8">
                We partner with automotive companies to build the digital capabilities that enable success in this new environment. From software-defined vehicles and EV platforms to smart factories and new mobility services, our solutions help companies innovate faster while optimizing operations and building direct customer relationships.
              </p>
              
              <p className="text-lg text-[#051C2C]/70 leading-relaxed">
                Our teams bring deep automotive expertise combined with cutting-edge technical capabilities. We understand the unique challenges of the industry—from complex supply chains to safety-critical systems—and we bring the skills needed to help clients navigate the transformation.
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
              { title: "Software-Defined Vehicles", desc: "Build the software capabilities that define modern vehicles. Our solutions help OEMs develop software platforms, implement over-the-air updates, and create the development infrastructure needed for software-defined vehicles." },
              { title: "Electrification & EV Platforms", desc: "Accelerate the transition to electric vehicles. We help companies develop EV platforms, optimize battery systems, and build the charging infrastructure and services that enable EV adoption." },
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
              { title: "Smart Manufacturing", desc: "Transform manufacturing with Industry 4.0 capabilities. Our solutions help companies build smart factories with connected equipment, predictive maintenance, and flexible production systems that improve quality and reduce costs." },
              { title: "Connected Services & Customer Experience", desc: "Build direct customer relationships through connected services. Our platforms enable personalized experiences, subscription services, and data-driven engagement that increase customer lifetime value." },
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

      {/* Featured Case Study */}
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
                src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80" 
                alt="Automotive EV Transformation" 
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
              <div className="text-6xl md:text-7xl font-serif font-bold text-[#0077B5] mb-4">
                60%
              </div>
              <div className="text-xl font-medium text-[#051C2C] mb-6">
                faster EV platform development
              </div>
              <p className="text-lg text-[#051C2C]/70 leading-relaxed mb-6">
                A global OEM partnered with us to accelerate their EV platform development. We implemented a comprehensive digital engineering environment, built a software development platform, and established agile development practices. The result: 60% faster platform development and 40% reduction in validation costs.
              </p>
              <Link href="/cases/automotive-ev-platform" className="inline-flex items-center text-[#0077B5] font-semibold hover:underline">
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
              <img
                src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80"
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
                aria-hidden
              />
            </div>
            <div className="flex flex-col justify-center p-8 md:p-10 lg:p-12 bg-white">
              <span className="text-xs font-medium uppercase tracking-wider text-[#6B7280] mb-2">Collection</span>
              <Link href="/insights/automotive-future" className="group inline-flex items-start gap-2 text-left mb-3">
                <h3 className="text-xl md:text-2xl lg:text-3xl eb-garamond font-bold text-[#051C2C] leading-tight group-hover:text-[#0077B5] transition-colors">
                  The Next Normal – The future of mobility: Software-defined, electric, and autonomous
                </h3>
                <span className="text-[#0077B5] shrink-0 mt-1 group-hover:translate-x-1 transition-transform" aria-hidden>&gt;</span>
              </Link>
              <span className="text-sm text-[#6B7280] mb-4">November 3, 2025 —</span>
              <p className="text-[#051C2C]/70 text-base leading-relaxed">
                The automotive industry is being redefined by software-defined vehicles, electrification, and autonomy. This collection explores how OEMs and suppliers can accelerate development, build connected services, and create the resilient supply chains needed for the next era of mobility.
              </p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              { category: "Article", title: "The case for a clear ROI framework for EV infrastructure investments", link: "/insights/ev-infrastructure-roi", image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=600&q=80", alt: "EV charging" },
              { category: "Article", title: "Finding a route to software-defined vehicle platforms", link: "/insights/software-defined-vehicles", image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&q=80", alt: "Connected vehicle" },
              { category: "Article", title: "The journey toward AI-enabled autonomous development", link: "/insights/ai-autonomous", image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600&q=80", alt: "Autonomous driving" },
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

      {/* Capabilities Grid */}
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
              Our Automotive Capabilities
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
            {[
              { title: "Software & Digital Platforms", desc: "Build software-defined vehicle capabilities including software platforms, OTA updates, and development infrastructure that enable continuous innovation." },
              { title: "Electrification & Battery Systems", desc: "Accelerate EV development with platform engineering, battery management systems, and charging infrastructure solutions." },
              { title: "Autonomous & ADAS", desc: "Develop autonomous driving and advanced driver assistance capabilities with simulation, validation, and safety-critical software development." },
              { title: "Smart Manufacturing", desc: "Transform production with Industry 4.0 capabilities including digital twins, predictive maintenance, and flexible manufacturing systems." },
              { title: "Supply Chain & Logistics", desc: "Build resilient supply chains with visibility, risk management, and optimization capabilities that ensure production continuity." },
              { title: "Connected Services & Mobility", desc: "Create new revenue streams with connected vehicle services, subscription models, and mobility platforms that build customer relationships." }
            ].map((cap, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border-t-2 border-[#051C2C]/10 pt-8"
              >
                <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4  decoration-[#0077B5] decoration-2 underline-offset-4">
                  {cap.title}
                </h3>
                <p className="text-[#051C2C]/70 leading-relaxed">{cap.desc}</p>
              </motion.div>
            ))}
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
              src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&q=80"
              alt=""
              className="w-full h-full object-cover grayscale"
              aria-hidden
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            {[
              { title: "Accelerating electric vehicle programs", body: "We helped an OEM define the digital backbone for their EV platform—battery management, charging, and vehicle software. The work included architecture, vendor selection, and integration strategy to support launch and scale." },
              { title: "Optimizing manufacturing quality", body: "An automotive supplier deployed our computer vision and analytics solution for inline quality inspection. Defect detection improved while false rejects dropped, and root-cause analysis became faster and data-driven." },
              { title: "Enabling connected services", body: "A mobility provider launched connected services with our support. We designed the telematics and cloud platform, OTA update capability, and customer-facing apps—enabling new revenue and loyalty." },
              { title: "Transforming supply chain planning", body: "An OEM implemented our demand and supply planning platform to better handle volatility and part shortages. Scenario planning and visibility across the tier network improved service levels and reduced excess inventory." },
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
              { name: "Alastair Green", title: "Senior Partner, Washington DC", description: "Leads our automotive practice with deep expertise in electrification, connected vehicles, and mobility strategy.", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80" },
              { name: "Ishaan Nangia", title: "Senior Partner, Melbourne", description: "Specializes in automotive supply chain, manufacturing excellence, and digital transformation for OEMs and suppliers.", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80" },
              { name: "Nicola Sandri", title: "Senior Partner, Milan", description: "Focuses on EV strategy, software-defined vehicles, and international expansion for automotive and mobility clients.", image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&q=80" }
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
              { title: "Manufacturing", link: "/industries/manufacturing" },
              { title: "Transportation & Logistics", link: "/industries/transportation-logistics" },
              { title: "Energy & Utilities", link: "/industries/energy-utilities" }
            ].map((industry, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}>
                <Link href={industry.link} className="group block bg-white p-6 hover:bg-[#051C2C] transition-colors duration-300">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#0077B5] group-hover:text-white/60 transition-colors">Industry</span>
                      <h3 className="text-lg font-serif font-bold text-[#051C2C] group-hover:text-white transition-colors mt-1">{industry.title}</h3>
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
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="text-3xl md:text-4xl eb-garamond font-bold text-white mb-6">Ready to lead the automotive transformation?</h2>
              <p className="text-lg text-white/70 mb-10">Let's discuss how we can help you build the capabilities needed to compete and win in the new era of mobility.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact"><Button className="bg-[#0077B5] hover:bg-[#005a8c] text-white px-8 py-6 text-base font-semibold">Contact Us</Button></Link>
                <Link href="/cases"><Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-base font-semibold bg-transparent">View All Case Studies</Button></Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
