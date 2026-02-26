import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { BainHero } from "@/components/BainHero";
import { CapabilitiesExplorer } from "@/components/CapabilitiesExplorer";
import { USOfficeMap } from "@/components/USOfficeMap";
import { ArrowUpRight, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#1A1A1A]">
      <SEO 
        title="Home" 
        description="NexDyne Technologies delivers intelligent automation and data-driven solutions to transform your business. Unlock new growth with our AI and strategy expertise."
        canonical="/"
      />

      {/* Navigation */}
      <Navigation />

      {/* Bain-Style Full-Screen Hero Carousel */}
      <BainHero />

      {/* Welcome Section - Compact Professional Layout */}
      <section className="py-10 sm:py-12 md:py-16 bg-white">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="max-w-5xl mx-auto">
            {/* Welcome Header - animate on mount for reliable initial load (whileInView can miss on cold load) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] text-[#1A1A1A] leading-[1.2]">
              Governing Intelligence. Scaling Judgment. Leading in the Age of Intelligent Machines.

              </h2>
              <p className="mt-4 md:mt-6 text-sm sm:text-base md:text-[17px] text-[#4a4a4a] leading-relaxed">
              The organizations that will define the next decade will be the ones that govern intelligence as deliberately as they deploy it. NexDyne combines deep industry expertise with structured intelligence governance to help ambitious leaders harness AI, data, and operational power — while strengthening the human judgment, accountability, and trust that no machine can provide. From modernizing legacy systems to designing AI-enabled operating models, we build transformations that perform, endure, and scale. NexDyne is where governance meets growth.

              </p>
            </motion.div>

            {/* NexDyne Spotlight - Compact Horizontal Bar */}
            <div className="mt-8 md:mt-10">
              <div className="border-t border-b border-gray-200 px-4 sm:px-6 py-4">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-8 md:gap-10">
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#1A1A1A]/40 shrink-0">
                    NexDyne Spotlight
                  </span>
                  <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 md:gap-10">
                    <Link href="/capabilities/artificial-intelligence">
                      <span className="text-[12px] sm:text-[13px] font-bold uppercase tracking-[0.15em] text-[#1A1A1A] underline underline-offset-4 decoration-1 hover:text-[#00d4ff] hover:decoration-[#00d4ff] transition-colors cursor-pointer">
                        Artificial Intelligence
                      </span>
                    </Link>
                    <Link href="/capabilities/technology">
                      <span className="text-[12px] sm:text-[13px] font-bold uppercase tracking-[0.15em] text-[#1A1A1A] underline underline-offset-4 decoration-1 hover:text-[#00d4ff] hover:decoration-[#00d4ff] transition-colors cursor-pointer">
                        Technology
                      </span>
                    </Link>
                    <Link href="/capabilities/growth-marketing-sales">
                      <span className="text-[12px] sm:text-[13px] font-bold uppercase tracking-[0.15em] text-[#1A1A1A] underline underline-offset-4 decoration-1 hover:text-[#00d4ff] hover:decoration-[#00d4ff] transition-colors cursor-pointer">
                        Growth & Marketing
                      </span>
                    </Link>
                    <Link href="/insights/ceo-guide-data-modernization">
                      <span className="text-[12px] sm:text-[13px] font-bold uppercase tracking-[0.15em] text-[#1A1A1A] underline underline-offset-4 decoration-1 hover:text-[#00d4ff] hover:decoration-[#00d4ff] transition-colors cursor-pointer">
                        CEO Agenda
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI and Technology Consulting Section - Edge-to-edge layout */}
      <section className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[400px] md:min-h-[520px]">
          {/* Left - Image bleeding to left edge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative min-h-[350px] lg:min-h-0 overflow-hidden"
          >
            <img 
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663032212491/URgwZkCckpcISJKD.jpg" 
              alt="AI and Technology Consulting" 
              className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/10" />
          </motion.div>

          {/* Right - Text content - animate on mount for reliable initial load */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white flex flex-col justify-center px-8 sm:px-12 md:px-16 lg:px-20 py-16 md:py-20"
          >
            <span className="text-[11px] font-bold text-[#1A1A1A] uppercase tracking-[0.2em] mb-5 block">AI & Technology</span>
            <h2 className="text-3xl sm:text-4xl md:text-[42px] text-[#1A1A1A] leading-[1.15] mb-6">
              AI and Technology Consulting
            </h2>
            <p className="text-base sm:text-lg text-[#4a4a4a] leading-relaxed mb-10">
              Learn how our AI and Technology consulting is helping clients to outcompete and deliver value at scale through the latest trends in tech. From intelligent automation and machine learning to cloud-native architecture and data strategy, we partner with organizations to build resilient, future-ready technology foundations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/capabilities/ai-technology-consulting">
                <span className="inline-flex items-center gap-3 px-7 py-3 border border-[#1A1A1A] text-[#1A1A1A] font-semibold text-[13px] tracking-wide hover:bg-[#1A1A1A] hover:text-white transition-colors cursor-pointer">
                  EXPLORE OUR AI SOLUTIONS
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </Link>
              <Link href="/capabilities">
                <span className="inline-flex items-center gap-3 px-7 py-3 border border-[#1A1A1A] text-[#1A1A1A] font-semibold text-[13px] tracking-wide hover:bg-[#1A1A1A] hover:text-white transition-colors cursor-pointer">
                  OUR CAPABILITIES
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Capabilities Explorer - BCG-Inspired Interactive Section */}
      <CapabilitiesExplorer />

      {/* Solutions Section - BCG-Style Cards with Image Hover */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-28 bg-white relative">
        <div className="px-6 sm:px-8 md:px-12 lg:px-16">
          {/* Section Header - Left aligned */}
          <div className="max-w-4xl mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] text-[#1A1A1A] leading-tight mb-4 sm:mb-6">
              Our Operational Excellence Services and Tools
            </h2>
            <p className="text-base sm:text-lg text-[#1A1A1A]/70 leading-relaxed max-w-3xl">
              The following services and tools provide a glimpse into the level of sophistication and rigor our operational excellence consulting experts bring to every client engagement:
            </p>
          </div>

          {/* BCG-Style Solutions Grid - 2x2 on desktop for bold consulting look */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 md:gap-8">
            {[
              {
                title: "Intelligent Process Optimization",
                description: "We help organizations transform manual operations into autonomous systems, eliminating bottlenecks and accelerating execution.",
                link: "/solutions/intelligent-process-optimization",
                image: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032212491/aPMHiULHxWrZFekS.png"
              },
              {
                title: "Data-Driven Customer Intelligence",
                description: "We help organizations unlock deep customer insights through advanced analytics, predicting behavior and driving loyalty at scale.",
                link: "/solutions/data-driven-customer-intelligence",
                image: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032212491/TZWlVXiZjPvjowkn.png"
              },
              {
                title: "Scalable Enterprise Transformation",
                description: "We help organizations modernize their core technology stack, building cloud-native infrastructure that scales with ambition.",
                link: "/solutions/scalable-enterprise-transformation",
               image: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032212491/bHjSZiUFqOwbpAdw.png"           },
              {
                title: "Accelerating Business Growth",
                description: "We help organizations launch new digital products and channels, driving revenue through e-commerce and digital innovation.",
                link: "/solutions/accelerating-business-growth",
                image: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032212491/sgqzveAkMmuHhDhb.png"
              }
            ].map((solution, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.01, margin: "0px 0px 80px 0px" }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <Link href={solution.link}>
                  <div className="cursor-pointer bg-white border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-500 h-full">
                    {/* Card content container */}
                    <div className="relative aspect-[16/10] overflow-hidden">
                      {/* Image - visible by default, hidden on hover */}
                      <div className="absolute inset-0 transition-opacity duration-500 ease-in-out group-hover:opacity-0">
                        <img 
                          src={solution.image} 
                          alt={solution.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      {/* Description overlay - hidden by default, visible on hover */}
                      <div className="absolute inset-0 bg-white p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                        <div>
                          <h2 className="text-2xl sm:text-3xl md:text-[2rem] font-semibold eb-garamond text-[#1A1A1A] mb-3 leading-tight">
                            {solution.title}
                          </h2>
                          <p className="text-sm text-gray-600 leading-relaxed text-left">
                            {solution.description}
                          </p>
                        </div>
                        <div className="mt-4">
                          {/* <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#1A1A1A] text-white text-sm font-medium rounded hover:bg-[#333] transition-colors">
                            LEARN MORE
                            <ArrowRight className="w-4 h-4" />
                          </span> */}
                        </div>
                      </div>
                    </div>
                    {/* Title - always visible below */}
                    <div className="p-4 sm:p-5 bg-white border-t border-gray-100 group-hover:bg-gray-50 transition-colors duration-300">
                      <h2 className="text-2xl sm:text-3xl md:text-[2rem] font-semibold leading-tight text-[#1A1A1A] eb-garamond">
                        {solution.title}
                      </h2>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Insights Section - BCG/McKinsey Style */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-28 bg-[#f8f8f8]">
        <div className="px-6 sm:px-8 md:px-12 lg:px-16">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-8 sm:mb-12 md:mb-16 gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] text-[#1A1A1A] leading-tight eb-garamond">
                Latest Insights
              </h2>
              <p className="text-base sm:text-lg text-[#1A1A1A]/70 mt-3 max-w-2xl">
                Practical perspectives for mid-market leaders navigating growth and transformation.
              </p>
            </div>
            <Link href="/insights">
              <span className="inline-flex items-center gap-2 text-[#1a3d2e] font-semibold hover:text-[#0d2318] transition-colors group">
                View all insights
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>

          {/* BCG-Style Grid: Large featured + 3 smaller */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {/* Featured Article - Large */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.01, margin: "0px 0px 80px 0px" }}
              transition={{ duration: 0.5 }}
              className="group"
            >
              <Link href="/insights/mid-market-ai-guide">
                <div className="relative bg-white overflow-hidden cursor-pointer h-full">
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <img 
                      src="/images/insight-ai-midmarket.jpg" 
                      alt="How Mid-Market Companies Are Winning with AI"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/10" />
                  </div>
                  <div className="p-6 md:p-8">
                    <span className="text-xs font-semibold text-[#1a3d2e] uppercase tracking-wider">Featured</span>
                    <h3 className="text-xl sm:text-2xl md:text-[1.75rem] text-[#1A1A1A] leading-tight mt-3 mb-4 group-hover:text-[#1a3d2e] transition-colors">
                      How Mid-Market Companies Are Winning with AI: A Practical Guide
                    </h3>
                    <p className="text-[#1A1A1A]/70 leading-relaxed mb-4">
                      Discover how growing businesses are leveraging artificial intelligence to compete with larger enterprises—without the enterprise budget.
                    </p>
                    <span className="inline-flex items-center gap-2 text-[#1a3d2e] font-semibold text-sm group-hover:gap-3 transition-all">
                      Read article <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Secondary Articles - Stacked */}
            <div className="flex flex-col gap-6 md:gap-8">
              {[
                {
                  title: "5 Signs Your Business Is Ready for Digital Transformation",
                  description: "Key indicators that signal it's time to modernize your operations and technology stack.",
                  category: "Digital Strategy",
                  link: "/insights/digital-transformation-readiness",
                  image: "/images/insight-digital-transform.jpg"
                },
                {
                  title: "Scaling Operations Without Breaking the Bank",
                  description: "Cost-effective strategies for mid-market companies looking to grow efficiently.",
                  category: "Operations",
                  link: "/insights/scaling-operations",
                  image: "/images/insight-scaling-ops.jpg",
                  imagePosition: "object-right"
                },
                {
                  title: "Customer Intelligence for Growing Businesses",
                  description: "How to build data-driven customer insights that drive retention and revenue.",
                  category: "Customer Strategy",
                  link: "/insights/customer-intelligence",
                  image: "/images/insight-customer-intel.jpg"
                }
              ].map((article, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.01, margin: "0px 0px 80px 0px" }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="group"
                >
                  <Link href={article.link}>
                    <div className="flex bg-white overflow-hidden cursor-pointer h-full">
                      <div className="w-1/3 sm:w-2/5 aspect-[4/3] overflow-hidden flex-shrink-0 relative">
                        <img 
                          src={article.image} 
                          alt={article.title}
                          className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ${(article as any).imagePosition || ''}`}
                        />
                        <div className="absolute inset-0 bg-black/10" />
                      </div>
                      <div className="flex-1 p-4 sm:p-5 md:p-6 flex flex-col justify-center">
                        <span className="text-xs font-semibold text-[#1a3d2e] uppercase tracking-wider">{article.category}</span>
                        <h3 className="text-base sm:text-lg md:text-xl text-[#1A1A1A] leading-tight mt-2 mb-2 group-hover:text-[#1a3d2e] transition-colors">
                          {article.title}
                        </h3>
                        <p className="text-sm text-[#1A1A1A]/70 leading-relaxed hidden sm:block">
                          {article.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Bain-Inspired Interactive Design */}
      <section className="py-16 sm:py-20 md:py-28 bg-white border-t border-gray-200">
        <div className="container px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left Column - Interactive Selector */}
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#1A1A1A] leading-tight mb-8 eb-garamond">
              Start the Conversation.

              </h2>
              
              <div className="space-y-4">
                <p className="text-lg sm:text-xl text-gray-600">
                I would like to speak with your team about:

                </p>
                
                {/* Dropdown Selector */}
                <div className="relative">
                  <select 
                    className="w-full appearance-none bg-white border-b-2 border-[#CC0000] text-2xl sm:text-3xl font-semibold text-[#1A1A1A] py-3 pr-10 focus:outline-none cursor-pointer"
                    defaultValue="ai-intelligent-systems"
                  >
                    <option value="ai-intelligent-systems">AI & Intelligent Systems</option>
                    <option value="strategy-corporate-finance">Strategy & Corporate Finance</option>
                    <option value="operations-transformation">Operations Transformation</option>
                    <option value="growth-marketing-sales">Growth, Marketing & Sales</option>
                    <option value="data-transformation">Data Transformation</option>
                    <option value="business-building-ventures">Business Building & Ventures</option>
                    <option value="technology-infrastructure">Technology & Infrastructure</option>
                    <option value="risk-resilience">Risk & Resilience</option>
                    <option value="digital-twins-iot">Digital Twins & IoT</option>
                  </select>
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg className="w-6 h-6 text-[#CC0000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Column - Contact Form */}
            <div>
              <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
              We work with leaders who believe governance comes before automation — and that the organizations built to last will be the ones where human judgment scales with the technology around it.

              </p>
              
              {/* Email Input */}
              <div className="mb-6">
                <input 
                  type="email" 
                  placeholder="Your email"
                  className="w-full px-0 py-4 text-lg border-b border-gray-300 focus:border-[#CC0000] focus:outline-none transition-colors bg-transparent placeholder:text-gray-400"
                />
              </div>
              
              {/* CTA Button */}
              <Link href="/contact">
                <button className="px-10 py-4 bg-[#CC0000] text-white font-bold text-lg hover:bg-[#a30000] transition-colors">
                  CONTACT US
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Careers Section - BCG Layout */}
      <section className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[400px] md:min-h-[480px]">
          {/* Left - Text Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.01, margin: "0px 0px 80px 0px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="bg-[#f1f1f1] flex flex-col justify-center px-8 sm:px-12 md:px-16 lg:px-20 py-16 md:py-20"
          >
            <span className="text-[11px] font-bold text-[#1A1A1A] uppercase tracking-[0.2em] mb-5 block">NexDyne Careers</span>
            <h2 className="text-3xl sm:text-4xl md:text-[42px] text-[#1A1A1A] leading-[1.15] mb-6 eb-garamond">
            Where Human Intelligence Leads

            </h2>
            <p className="text-base sm:text-lg text-[#4a4a4a] leading-relaxed mb-10 max-w-lg">
            We help organizations govern intelligence and lead with judgment in the age of AI. If you bring ambition, clarity, and the will to shape what comes next — this is where you belong.

            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/careers">
                <span className="inline-flex items-center gap-3 px-7 py-3 border border-[#1A1A1A] text-[#1A1A1A] font-semibold text-[13px] tracking-wide hover:bg-[#1A1A1A] hover:text-white transition-colors cursor-pointer">
                  EXPLORE NEXDYNE CAREERS
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </Link>
              <Link href="/careers">
                <span className="inline-flex items-center gap-3 px-7 py-3 border border-[#1A1A1A] text-[#1A1A1A] font-semibold text-[13px] tracking-wide hover:bg-[#1A1A1A] hover:text-white transition-colors cursor-pointer">
                  APPLY TODAY
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </Link>
            </div>
          </motion.div>

          {/* Right - Full Image */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.01, margin: "0px 0px 80px 0px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative min-h-[300px] lg:min-h-0"
          >
            <img 
              src="/images/hero-team.jpg" 
              alt="NexDyne team collaborating" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/10" />
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
