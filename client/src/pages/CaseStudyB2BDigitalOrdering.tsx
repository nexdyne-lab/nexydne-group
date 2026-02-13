import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, Building2, TrendingUp, Users, ShoppingCart, CheckCircle, Truck, BarChart3, Clock, Settings, Download } from "lucide-react";
import { CaseStudyPDFButton } from "@/components/CaseStudyPDFButton";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";

export default function CaseStudyB2BDigitalOrdering() {
  return (
    <div className="min-h-screen bg-[#051C2C] font-sans text-white selection:bg-[#0077B5] selection:text-white">
      <SEO 
        title="Case Study: Industrial Supplier B2B Digital Ordering" 
        description="How a 220-employee industrial supplier added $4.5M in revenue through a digital ordering platform with 58% self-service adoption."
        canonical="/cases/b2b-digital-ordering"
      />
      <Navigation />
      
      {/* DZ10 Hero Section */}
      <section className="relative min-h-[55vh] sm:min-h-[65vh] md:min-h-[55vh] sm:min-h-[65vh] md:min-h-[70vh] flex items-center pt-16 sm:pt-16 sm:pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=2000&q=80" 
            alt="Industrial Warehouse" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#051C2C] via-[#051C2C]/85 to-[#051C2C]/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#051C2C] via-transparent to-transparent" />
        </div>
        
        <div className="container px-4 sm:px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <Link href="/solutions/accelerating-business-growth">
              <span className="inline-flex items-center text-sm text-white/60 hover:text-[#0077B5] transition-colors mb-6 cursor-pointer">
                <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                Back to Accelerating Business Growth
              </span>
            </Link>
            
            <span className="text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[#00A3E0] mb-4 sm:mb-6 block">
              B2B Manufacturing • Digital Commerce
            </span>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight text-white leading-[1.1] mb-5 sm:mb-3 md:mb-4">
              Industrial supplier adds $4.5M revenue through digital ordering
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 leading-relaxed max-w-2xl mb-10">
              220-employee industrial supplier launched B2B e-commerce platform with customer-specific pricing, inventory visibility, and self-service reordering.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-10">
              <div>
                <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#00A3E0]">$4.5M</p>
                <p className="text-white/60 text-sm">New Revenue</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#00A3E0]">58%</p>
                <p className="text-white/60 text-sm">Self-Service Orders</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#00A3E0]">35%</p>
                <p className="text-white/60 text-sm">Order Processing Cost Reduction</p>
              </div>
            </div>
            
            {/* PDF Download Button */}
            <CaseStudyPDFButton
              title="Industrial supplier adds $4.5M revenue through digital ordering"
              industry="B2B Manufacturing"
              capability="Digital Commerce"
              summary="220-employee industrial supplier launched B2B e-commerce platform with customer-specific pricing, inventory visibility, and self-service reordering."
              challenge="Traditional phone and fax ordering was limiting growth and creating operational bottlenecks."
              solution="Implemented a B2B e-commerce platform with customer-specific pricing, inventory visibility, and self-service reordering capabilities."
              results={[
                "$4.5M in new revenue",
                "58% self-service order adoption",
                "35% reduction in order processing costs"
              ]}
              metrics={[
                { value: "$4.5M", label: "New Revenue" },
                { value: "58%", label: "Self-Service Orders" },
                { value: "35%", label: "Cost Reduction" }
              ]}
              variant="hero"
            />
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-white text-[#051C2C]">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-8 sm:gap-6 lg:gap-8 sm:gap-6 lg:gap-24 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[#0077B5] mb-4 sm:mb-6 block">
                Company Overview
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold leading-tight mb-5 sm:mb-6 md:mb-8">
                A traditional distributor embracing digital
              </h2>
              
              <div className="space-y-6 text-lg text-[#051C2C]/70 leading-relaxed">
                <p>
                  This industrial supplier had been in business for 40 years, serving manufacturing and construction companies across the Midwest. With 220 employees, 3 distribution centers, and $85M in annual revenue, they were a trusted partner for MRO supplies, safety equipment, and industrial consumables.
                </p>
                <p>
                  However, the ordering process was stuck in the past. Customers placed orders via phone, fax, or email to sales reps who manually entered them into the ERP system. This created bottlenecks, errors, and limited the company's ability to scale without adding headcount.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[#F8F9FA] p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl"
            >
              <h3 className="text-xl font-serif font-bold mb-6">Company Profile</h3>
              <div className="space-y-4">
                <div className="flex justify-between py-3 border-b border-[#051C2C]/10">
                  <span className="text-[#051C2C]/60">Industry</span>
                  <span className="font-semibold">Industrial Distribution</span>
                </div>
                <div className="flex justify-between py-3 border-b border-[#051C2C]/10">
                  <span className="text-[#051C2C]/60">Employees</span>
                  <span className="font-semibold">220</span>
                </div>
                <div className="flex justify-between py-3 border-b border-[#051C2C]/10">
                  <span className="text-[#051C2C]/60">Annual Revenue</span>
                  <span className="font-semibold">$85M (pre-project)</span>
                </div>
                <div className="flex justify-between py-3 border-b border-[#051C2C]/10">
                  <span className="text-[#051C2C]/60">Distribution Centers</span>
                  <span className="font-semibold">3 locations</span>
                </div>
                <div className="flex justify-between py-3">
                  <span className="text-[#051C2C]/60">Project Duration</span>
                  <span className="font-semibold">14 months</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-[#051C2C]">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <span className="text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white/60 mb-4 sm:mb-6 block">
              The Challenge
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-5 sm:mb-6 md:mb-8">
              Manual processes limiting growth and efficiency
            </h2>
            
            <div className="space-y-6 text-lg text-white/70 leading-relaxed mb-6 sm:mb-8 md:mb-12">
              <p>
                The VP of Sales estimated that 40% of their inside sales team's time was spent on order entry and status inquiries—tasks that added no value and frustrated both employees and customers. Meanwhile, competitors were offering 24/7 online ordering with real-time inventory and pricing.
              </p>
              <p>
                Customer feedback was clear: procurement teams wanted self-service capabilities. They needed to check inventory, see their negotiated pricing, place orders after hours, and track shipments without calling a rep. The company was losing business to competitors who offered these capabilities.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                "40% of sales time spent on manual order entry",
                "No self-service ordering capability for customers",
                "Complex pricing (customer-specific, volume tiers)",
                "Inventory visibility limited to phone inquiries",
                "Order errors from manual data entry",
                "Losing customers to digitally-enabled competitors"
              ].map((challenge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3 bg-white/5 p-4 rounded-lg"
                >
                  <div className="w-2 h-2 bg-[#00A3E0] rounded-full mt-2 flex-shrink-0" />
                  <span className="text-white/80">{challenge}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-white text-[#051C2C]">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[#0077B5] mb-4 sm:mb-6 block">
              The Solution
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
              A B2B commerce platform built for industrial distribution
            </h2>
            <p className="text-xl text-[#051C2C]/60 max-w-3xl mx-auto">
              NEXDYNE designed and implemented a comprehensive B2B e-commerce solution that handled the complexity of industrial distribution.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {[
              {
                icon: <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6" />,
                title: "Self-Service Portal",
                description: "Customer-facing portal with product search, filtering, and ordering capabilities available 24/7 with mobile-responsive design.",
                color: "from-[#0077B5] to-[#00A3E0]"
              },
              {
                icon: <Settings className="w-5 h-5 sm:w-6 sm:h-6" />,
                title: "Complex Pricing Engine",
                description: "Customer-specific pricing, volume discounts, contract pricing, and promotional rules integrated with ERP master data.",
                color: "from-amber-500 to-orange-600"
              },
              {
                icon: <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6" />,
                title: "Real-Time Inventory",
                description: "Live inventory visibility across all 3 distribution centers with ATP (available-to-promise) calculations and backorder handling.",
                color: "from-violet-500 to-purple-600"
              },
              {
                icon: <Clock className="w-5 h-5 sm:w-6 sm:h-6" />,
                title: "Quick Reorder",
                description: "One-click reordering from purchase history, saved order templates, and scheduled recurring orders for consumables.",
                color: "from-emerald-500 to-teal-600"
              },
              {
                icon: <Truck className="w-5 h-5 sm:w-6 sm:h-6" />,
                title: "Order Tracking",
                description: "Real-time shipment tracking, delivery notifications, and proof-of-delivery documentation accessible in the portal.",
                color: "from-rose-500 to-pink-600"
              },
              {
                icon: <Building2 className="w-5 h-5 sm:w-6 sm:h-6" />,
                title: "ERP Integration",
                description: "Bi-directional integration with Epicor ERP for orders, inventory, pricing, and customer data synchronization.",
                color: "from-[#005a8c] to-[#0077B5]"
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
                <div className="h-full bg-[#F8F9FA] p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl hover:shadow-xl transition-all duration-300">
                  <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center mb-6 text-white`}>
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-serif font-bold mb-4 group-hover:text-[#0077B5] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[#051C2C]/60 leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Timeline */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-[#F8F9FA] text-[#051C2C]">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[#0077B5] mb-4 sm:mb-6 block">
              Implementation
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
              Phased rollout over 14 months
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {[
              {
                phase: "Month 1-3",
                title: "Discovery & Architecture",
                items: ["ERP data analysis", "Pricing logic mapping", "Integration architecture", "Customer journey design"]
              },
              {
                phase: "Month 4-7",
                title: "Core Platform Build",
                items: ["Commerce platform setup", "ERP integration development", "Pricing engine build", "Product catalog migration"]
              },
              {
                phase: "Month 8-10",
                title: "Beta & Iteration",
                items: ["Pilot with 50 customers", "Feedback collection", "Performance optimization", "Feature refinements"]
              },
              {
                phase: "Month 11-14",
                title: "Full Rollout",
                items: ["Customer onboarding (500+)", "Sales team training", "Marketing campaigns", "Adoption optimization"]
              }
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl shadow-sm"
              >
                <span className="text-xs font-bold uppercase tracking-wider text-[#0077B5] mb-2 block">{phase.phase}</span>
                <h3 className="text-lg font-serif font-bold mb-4">{phase.title}</h3>
                <ul className="space-y-2">
                  {phase.items.map((item, i) => (
                    <li key={i} className="flex items-start text-sm text-[#051C2C]/70">
                      <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-[#0077B5] mr-2 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-[#051C2C]">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white/60 mb-4 sm:mb-6 block">
              Results
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
              Digital transformation delivering measurable ROI
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Within 14 months, the B2B platform became a competitive advantage and significantly improved operational efficiency.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto mb-8 sm:mb-12 md:mb-16">
            {[
              { stat: "$4.5M", label: "New revenue", description: "Incremental sales through digital channel" },
              { stat: "58%", label: "Self-service orders", description: "Orders placed without sales rep involvement" },
              { stat: "35%", label: "Cost reduction", description: "Order processing cost savings" },
              { stat: "24/7", label: "Ordering availability", description: "Customers can order anytime" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl sm:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-[#00A3E0] mb-2">
                  {item.stat}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.label}</h3>
                <p className="text-white/60 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto bg-white/5 p-6 sm:p-8 md:p-12 rounded-lg sm:rounded-xl"
          >
            <div className="text-[#00A3E0] mb-6">
              <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
            </div>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed mb-5 sm:mb-6 md:mb-8 italic">
              "We had tried to build a marketplace internally for 2 years with no success. NEXDYNE validated the opportunity, built the MVP in 8 weeks, and helped us reach product-market fit in 4 months. We're now processing $500K monthly GMV."
            </p>
            <div>
              <p className="font-serif font-bold text-white text-lg">Priya Sharma</p>
              <p className="text-white/60">Chief Operating Officer</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Case Studies */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-[#F8F9FA] text-[#051C2C]">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[#0077B5] mb-4 sm:mb-6 block">
              Related Case Studies
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold">
              More digital growth success stories
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {[
              {
                category: "Specialty Retail",
                title: "Outdoor gear retailer grows online revenue 180% in 18 months",
                stats: [{ value: "180%", label: "Revenue growth" }, { value: "$3.2M", label: "New revenue" }],
                color: "from-amber-500 to-orange-600",
                link: "/cases/retail-ecommerce-growth"
              },
              {
                category: "Professional Services",
                title: "Training company launches subscription platform with 2,400 members",
                stats: [{ value: "2,400", label: "Active members" }, { value: "$1.8M", label: "Annual MRR" }],
                color: "from-violet-500 to-purple-600",
                link: "/cases/training-subscription-platform"
              }
            ].map((caseStudy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Link href={caseStudy.link}>
                  <div className="bg-white rounded-lg sm:rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer h-full flex flex-col">
                    <div className={`h-40 bg-gradient-to-br ${caseStudy.color}`} />
                    <div className="p-4 sm:p-5 md:p-6 flex-grow flex flex-col">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#0077B5] mb-2">
                        {caseStudy.category}
                      </span>
                      <h3 className="text-xl font-serif font-bold mb-4 group-hover:text-[#0077B5] transition-colors">
                        {caseStudy.title}
                      </h3>
                      <div className="grid grid-cols-2 gap-4 mb-6 mt-auto">
                        {caseStudy.stats.map((stat, i) => (
                          <div key={i}>
                            <p className="text-2xl font-serif font-bold text-[#0077B5]">{stat.value}</p>
                            <p className="text-xs text-[#051C2C]/60">{stat.label}</p>
                          </div>
                        ))}
                      </div>
                      <div className="flex items-center text-[#0077B5] font-semibold text-sm group-hover:gap-3 gap-2 transition-all">
                        Read case study
                        <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-[#051C2C]">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
              Ready to digitize your B2B sales channel?
            </h2>
            <p className="text-xl text-white/70 leading-relaxed mb-10">
              Let's discuss how we can help you build a digital ordering platform that drives efficiency and growth.
            </p>
            <Link href="/contact">
              <Button className="bg-[#0077B5] hover:bg-[#005a8c] text-white px-10 py-6 text-lg font-semibold transition-all">
                Schedule a Consultation
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
