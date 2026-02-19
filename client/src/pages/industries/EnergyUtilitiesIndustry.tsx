import { motion } from "framer-motion";
import { ArrowRight, Zap, Sun, Wind, Droplets, Leaf, BarChart3, ChevronRight, Globe, Shield, Gauge, Battery, Mail } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function EnergyUtilitiesIndustry() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#051C2C] selection:bg-[#0077B5] selection:text-white">
      <SEO 
        title="Energy & Utilities Industry" 
        description="Digital transformation for energy and utilities. NexDyne helps power companies, utilities, and renewable energy firms navigate the energy transition with smart grid technology, asset optimization, and customer engagement."
        canonical="/industries/energy-utilities"
      />
      <Navigation />
      
      {/* Hero Section - Deep blue with left copy and right visual */}
      <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center overflow-hidden pt-32">
        <div className="absolute inset-0 bg-[#0A235B]" />
        <div className="absolute inset-0 flex justify-end pointer-events-none">
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[75%] max-w-[900px] h-[140%] min-h-[600px] opacity-25">
            <img src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1920&q=80" alt="" className="w-full h-full object-cover object-left" aria-hidden />
          </div>
          <svg className="absolute right-0 top-0 bottom-0 w-[72%] max-w-[820px] h-full opacity-70" viewBox="0 0 400 300" preserveAspectRatio="xMaxYMid meet" aria-hidden>
            <defs>
              <pattern id="dish-grid-energy" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(0, 212, 255, 0.4)" strokeWidth="0.4" />
              </pattern>
              <radialGradient id="dish-fade-energy" cx="0.6" cy="0.5" r="0.9">
                <stop offset="0%" stopColor="rgba(0, 180, 216, 0.5)" />
                <stop offset="100%" stopColor="transparent" />
              </radialGradient>
            </defs>
            <ellipse cx="320" cy="150" rx="220" ry="180" fill="url(#dish-fade-energy)" />
            <ellipse cx="320" cy="150" rx="220" ry="180" fill="url(#dish-grid-energy)" />
            {[0.35, 0.5, 0.65, 0.8, 0.95].map((r, i) => (
              <ellipse key={i} cx="320" cy="150" rx={220 * r} ry={180 * r} fill="none" stroke="rgba(0, 212, 255, 0.35)" strokeWidth="0.5" />
            ))}
          </svg>
        </div>
        <div className="container relative z-10 px-4 md:px-12 py-24 md:py-32">
          <div className="max-w-xl">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl eb-garamond font-bold tracking-tight text-white leading-[1.1] mb-6">
                Energy & Utilities Industry
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-[#E0E0E0] leading-relaxed font-sans max-w-lg">
                The energy sector is undergoing its most significant transformation in a century. Decarbonization, decentralization, and digitalization are reshaping how energy is generated, distributed, and consumed. NexDyne helps energy companies and utilities navigate this transition—building the capabilities needed to thrive in the new energy landscape.
              </p>
            </motion.div>
          </div>
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
                The energy transition is accelerating. Renewable energy costs have plummeted, electric vehicles are reaching mass adoption, and customers are demanding cleaner, more reliable power. At the same time, aging infrastructure, regulatory pressures, and cybersecurity threats create unprecedented challenges. Companies that can navigate these forces will lead the industry; those that can't will be left behind.
              </p>
              
              <p className="text-lg text-[#051C2C]/70 leading-relaxed mb-8">
                We partner with energy companies and utilities to build the digital capabilities that enable this transformation. From smart grid technologies that optimize distributed energy resources to AI-powered asset management that extends equipment life, our solutions help organizations improve reliability, reduce costs, and accelerate the transition to clean energy.
              </p>
              
              <p className="text-lg text-[#051C2C]/70 leading-relaxed">
                Beyond operational improvements, we help energy companies reimagine their business models. New revenue streams from energy services, customer engagement platforms that drive loyalty, and data monetization strategies are creating opportunities for growth in a rapidly evolving market.
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
              { title: "Grid Modernization & Smart Grid", desc: "Deploy intelligent grid technologies that enable the integration of distributed energy resources, improve reliability, and optimize operations. Our solutions provide real-time visibility, automated fault detection, and predictive analytics that transform grid management." },
              { title: "Asset Performance Management", desc: "Maximize asset life and performance with AI-powered predictive maintenance. Our solutions analyze sensor data, maintenance history, and operating conditions to predict failures, optimize maintenance schedules, and extend equipment life." },
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
              { title: "Customer Engagement & Experience", desc: "Build digital platforms that transform customer relationships. From self-service portals to personalized energy insights, our solutions help utilities engage customers, drive energy efficiency, and create new revenue streams from energy services." },
              { title: "Renewable Energy Integration", desc: "Accelerate the integration of renewable energy with advanced forecasting, storage optimization, and grid balancing solutions. Our platforms help utilities manage the variability of wind and solar while maintaining reliability and reducing costs." },
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
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80" 
                alt="Smart Grid Implementation" 
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
                35%
              </div>
              <div className="text-xl font-medium text-[#051C2C] mb-6">
                reduction in outage minutes
              </div>
              <p className="text-lg text-[#051C2C]/70 leading-relaxed mb-6">
                A major electric utility partnered with us to modernize their distribution grid. We deployed advanced sensors across 10,000 miles of distribution lines, built a real-time analytics platform for fault detection and location, and implemented automated switching that isolates faults and restores power automatically. The result: 35% reduction in outage minutes, 50% faster restoration times, and $40M in annual operational savings.
              </p>
              <p className="text-[#051C2C]/70 leading-relaxed mb-8">
                The platform also enables the integration of distributed energy resources—solar, storage, and electric vehicles—creating a foundation for the utility's clean energy future.
              </p>
              <Link href="/cases/utility-grid-modernization" className="inline-flex items-center text-[#0077B5] font-semibold hover:underline">
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

          {/* Large featured insight - two columns: image left, content right */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-0 border border-[#E5E7EB] mb-10 md:mb-12 overflow-hidden"
          >
            <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[320px]">
              <img
                src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80"
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
                aria-hidden
              />
            </div>
            <div className="flex flex-col justify-center p-8 md:p-10 lg:p-12 bg-white">
              <span className="text-xs font-medium uppercase tracking-wider text-[#6B7280] mb-2">
                Collection
              </span>
              <Link
                href="/insights/energy-transition"
                className="group inline-flex items-start gap-2 text-left mb-3"
              >
                <h3 className="text-xl md:text-2xl lg:text-3xl eb-garamond font-bold text-[#051C2C] leading-tight group-hover:text-[#0077B5] transition-colors">
                  The Next Normal – The future of the grid: Decarbonized, decentralized, and personalized
                </h3>
                <span className="text-[#0077B5] shrink-0 mt-1 group-hover:translate-x-1 transition-transform" aria-hidden>&gt;</span>
              </Link>
              <span className="text-sm text-[#6B7280] mb-4">
                November 3, 2025 —
              </span>
              <p className="text-[#051C2C]/70 text-base leading-relaxed">
                The energy sector is undergoing its most significant transformation in a century. This collection explores how utilities and energy companies can build seamless, automated, and customer-centric operations—from smart grid modernization to AI-enabled asset management and the path to net zero.
              </p>
            </div>
          </motion.div>

          {/* Three smaller insight cards */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                category: "Article",
                title: "The case for a clear ROI framework for grid modernization projects",
                link: "/insights/grid-roi-framework",
                image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80",
                alt: "Grid infrastructure",
              },
              {
                category: "Article",
                title: "Finding a route to fiscal stability for US utilities",
                link: "/insights/utilities-fiscal-stability",
                image: "https://images.unsplash.com/photo-1559302504-64aae0ca2a3d?w=600&q=80",
                alt: "Utility operations",
              },
              {
                category: "Article",
                title: "The journey toward AI-enabled grid companies",
                link: "/insights/ai-enabled-grid",
                image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&q=80",
                alt: "Smart grid technology",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={item.link} className="group block">
                  <div className="overflow-hidden mb-4">
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="w-full aspect-[16/10] object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </div>
                  <span className="text-xs font-medium uppercase tracking-wider text-[#6B7280] block mb-2">
                    {item.category}
                  </span>
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

      {/* Our Energy Capabilities - Editorial Grid */}
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
              Our Energy & Utilities Capabilities
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
                Predictive Asset Management
              </h3>
              <p className="text-[#051C2C]/70 leading-relaxed">
                Predict equipment failures before they happen. Our AI-powered solutions analyze sensor data, maintenance history, and environmental conditions to identify potential failures—enabling proactive maintenance that reduces outages and extends asset life.
              </p>
            </motion.div>

            {/* Grid Analytics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="border-t-2 border-[#051C2C]/10 pt-8"
            >
              <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4  decoration-[#0077B5] decoration-2 underline-offset-4">
                Grid Analytics & Optimization
              </h3>
              <p className="text-[#051C2C]/70 leading-relaxed">
                Optimize grid operations with real-time analytics. Our solutions provide visibility into grid conditions, enable automated fault detection and restoration, and optimize power flow—improving reliability while reducing operational costs.
              </p>
            </motion.div>

            {/* DER Management */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="border-t-2 border-[#051C2C]/10 pt-8"
            >
              <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4  decoration-[#0077B5] decoration-2 underline-offset-4">
                Distributed Energy Resource Management
              </h3>
              <p className="text-[#051C2C]/70 leading-relaxed">
                Manage the complexity of distributed energy resources. Our DERMS platforms enable utilities to forecast, dispatch, and optimize solar, storage, and demand response—turning grid challenges into grid assets.
              </p>
            </motion.div>

            {/* Energy Trading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="border-t-2 border-[#051C2C]/10 pt-8"
            >
              <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4  decoration-[#0077B5] decoration-2 underline-offset-4">
                Energy Trading & Risk Management
              </h3>
              <p className="text-[#051C2C]/70 leading-relaxed">
                Optimize energy trading and manage market risk. Our solutions provide advanced analytics for price forecasting, portfolio optimization, and risk management—helping energy companies maximize value in wholesale markets.
              </p>
            </motion.div>

            {/* Customer Analytics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="border-t-2 border-[#051C2C]/10 pt-8"
            >
              <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4  decoration-[#0077B5] decoration-2 underline-offset-4">
                Customer Analytics & Engagement
              </h3>
              <p className="text-[#051C2C]/70 leading-relaxed">
                Build deeper customer relationships with data-driven insights. Our platforms analyze usage patterns, predict customer needs, and enable personalized engagement—driving satisfaction, efficiency, and new revenue opportunities.
              </p>
            </motion.div>

            {/* Sustainability */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="border-t-2 border-[#051C2C]/10 pt-8"
            >
              <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4  decoration-[#0077B5] decoration-2 underline-offset-4">
                Sustainability & Carbon Management
              </h3>
              <p className="text-[#051C2C]/70 leading-relaxed">
                Track and reduce carbon emissions across the value chain. Our solutions help energy companies measure emissions, identify reduction opportunities, and report progress—meeting regulatory requirements and stakeholder expectations.
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
              src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1920&q=80"
              alt=""
              className="w-full h-full object-cover grayscale"
              aria-hidden
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            {[
              {
                title: "Driving operational savings",
                body: "A power generation company deployed our AI-powered predictive maintenance solution across their fleet of gas turbines. The system predicts component failures weeks in advance, enabling planned maintenance that avoids costly unplanned outages.",
              },
              {
                title: "Improving grid reliability",
                body: "A major electric utility partnered with us to modernize their distribution grid. We deployed advanced sensors, built a real-time analytics platform for fault detection, and implemented automated switching that isolates faults and restores power automatically.",
              },
              {
                title: "Boosting forecast accuracy",
                body: "A renewable energy developer implemented our AI-powered forecasting platform for their wind and solar portfolio. The system combines weather data, satellite imagery, and machine learning to predict generation with unprecedented accuracy.",
              },
              {
                title: "Accelerating the energy transition",
                body: "Our platforms enable the integration of distributed energy resources—solar, storage, and electric vehicles—creating a foundation for utilities' clean energy future while reducing imbalance costs and improving market revenues.",
              },
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
              { name: "Alastair Green", title: "Senior Partner, Washington DC", description: "Leads our energy and utilities practice with expertise in grid modernization, decarbonization, and digital operations.", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80" },
              { name: "Ishaan Nangia", title: "Senior Partner, Melbourne", description: "Specializes in renewable energy strategy, asset performance, and customer engagement for utilities and energy companies.", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80" },
              { name: "Nicola Sandri", title: "Senior Partner, Milan", description: "Focuses on energy transition, regulatory strategy, and international expansion for power and gas sectors.", image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&q=80" }
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
                title: "Electric Utilities",
                description: "Transform utility operations with smart grid technology, predictive maintenance, and customer engagement platforms.",
                link: "/cases/utility-grid-modernization",
                image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=80"
              },
              {
                title: "Renewable Energy",
                description: "Optimize renewable energy operations with advanced forecasting, asset management, and grid integration solutions.",
                link: "/cases/renewable-energy-forecasting",
                image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80"
              },
              {
                title: "Oil & Gas",
                description: "Drive operational excellence with predictive analytics, digital twins, and supply chain optimization.",
                link: "/cases/oil-gas-digital-transformation",
                image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&q=80"
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
                title: "Manufacturing",
                link: "/industries/manufacturing"
              },
              {
                title: "Public Sector",
                link: "/industries/public-sector"
              },
              {
                title: "Urban Development",
                link: "/industries/urban-development"
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
                Ready to navigate the energy transition?
              </h2>
              <p className="text-lg text-white/70 mb-10">
                Let's discuss how we can help you modernize your grid, optimize your assets, and build the capabilities needed for a clean energy future.
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
