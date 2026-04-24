import { Link } from "wouter";
import { motion } from "framer-motion";
import { CaseStudyPDFButton } from "@/components/CaseStudyPDFButton";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { RelatedContent } from "@/components/RelatedContent";

export default function CaseStudyRetailEcommerce() {
  return (
    <div className="min-h-screen bg-white font-sans text-white selection:bg-primary selection:text-white">
      <SEO
        title="Case Study: Outdoor Gear Retailer E-commerce Growth"
        description="How a 135-employee specialty retailer launched an e-commerce platform and grew online revenue 180% in 18 months."
        canonical="/cases/retail-ecommerce-growth"
      />
      <Navigation />

      {/* DZ10 Hero Section */}
      <section className="relative min-h-[55vh] sm:min-h-[65vh] md:min-h-[55vh] sm:min-h-[65vh] md:min-h-[70vh] flex items-center pt-16 sm:pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=2000&q=80"
            alt="Retail Store Interior"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0" />
          <div className="absolute inset-0" />
        </div>

        <div className="container px-4 sm:px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <Link href="/solutions/accelerating-business-growth">
              <span className="inline-flex items-center text-sm text-white/60 hover:text-primary transition-colors mb-6 cursor-pointer">

                Back to Accelerating Business Growth
              </span>
            </Link>

            <span className="text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] text-amber-400 mb-4 sm:mb-6 block">
              Specialty Retail • E-Commerce
            </span>

            <h1 className="text-4xl md:text-6xl lg:text-7xl tracking-tight text-white leading-[1.1] mb-5 sm:mb-3 md:mb-4">
              Outdoor gear retailer grows online revenue 180% in 18 months
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 leading-relaxed max-w-2xl mb-10">
              135-employee specialty retailer launched e-commerce platform with personalized recommendations and omnichannel fulfillment.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <div>
                <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-amber-400">180%</p>
                <p className="text-white/60 text-sm">Revenue Growth</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-amber-400">$3.2M</p>
                <p className="text-white/60 text-sm">New Digital Revenue</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-amber-400">10 Weeks</p>
                <p className="text-white/60 text-sm">Time to Launch</p>
              </div>
            </div>

            {/* PDF Download Button */}
            <CaseStudyPDFButton
              title="Outdoor gear retailer grows online revenue 180% in 18 months"
              industry="Specialty Retail"
              capability="E-Commerce"
              summary="135-employee specialty retailer launched e-commerce platform with personalized recommendations and omnichannel fulfillment."
              challenge="Traditional brick-and-mortar retailer needed to expand into digital channels to compete with online-first competitors."
              solution="Launched a comprehensive e-commerce platform with personalized recommendations, omnichannel fulfillment, and seamless integration with existing store operations."
              results={[
                "180% revenue growth",
                "$3.2M in new digital revenue",
                "10 weeks to launch"
              ]}
              metrics={[
                { value: "180%", label: "Revenue Growth" },
                { value: "$3.2M", label: "New Digital Revenue" },
                { value: "10 Weeks", label: "Time to Launch" }
              ]}
              variant="hero"
            />
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-white text-charcoal">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-8 sm:gap-6 lg:gap-8 sm:gap-6 lg:gap-24 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] text-primary mb-4 sm:mb-6 block">
                Company Overview
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight mb-5 sm:mb-6 md:mb-8">
                A specialty retailer ready for digital transformation
              </h2>

              <div className="space-y-6 text-lg text-charcoal/70 leading-relaxed">
                <p>
                  Founded in 1998, this specialty outdoor gear retailer had built a loyal customer base across 12 physical locations in the Pacific Northwest. With 135 employees and $28M in annual revenue, the company was known for expert staff, curated product selection, and exceptional in-store experiences.
                </p>
                <p>
                  However, the retail landscape was shifting. Customers increasingly researched products online before visiting stores, and competitors were capturing sales through digital channels. The company's website was purely informational—no e-commerce capability, no inventory visibility, and no way to serve customers beyond their geographic footprint.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-subtle p-4 sm:p-6 md:p-8 rounded-lg sm:"
            >
              <h3 className="text-xl mb-6">Company Profile</h3>
              <div className="space-y-4">
                <div className="flex justify-between py-3 border-b border-base/10">
                  <span className="text-charcoal/60">Industry</span>
                  <span className="font-semibold">Specialty Retail</span>
                </div>
                <div className="flex justify-between py-3 border-b border-base/10">
                  <span className="text-charcoal/60">Employees</span>
                  <span className="font-semibold">135</span>
                </div>
                <div className="flex justify-between py-3 border-b border-base/10">
                  <span className="text-charcoal/60">Annual Revenue</span>
                  <span className="font-semibold">$28M (pre-project)</span>
                </div>
                <div className="flex justify-between py-3 border-b border-base/10">
                  <span className="text-charcoal/60">Locations</span>
                  <span className="font-semibold">12 retail stores</span>
                </div>
                <div className="flex justify-between py-3">
                  <span className="text-charcoal/60">Project Duration</span>
                  <span className="font-semibold">18 months</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <span className="text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white/60 mb-4 sm:mb-6 block">
              The Challenge
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-5 sm:mb-6 md:mb-8">
              Competing in a digital-first retail landscape
            </h2>

            <div className="space-y-6 text-lg text-white/70 leading-relaxed mb-6 sm:mb-8 md:mb-12">
              <p>
                The CEO recognized that the company was leaving significant revenue on the table. Customers were asking for online purchasing options, and the company was losing sales to competitors who offered e-commerce. Market research showed that 68% of their target customers researched products online before purchasing—but only 12% of those researchers ended up in their stores.
              </p>
              <p>
                Previous attempts to launch e-commerce had stalled. An internal IT project had consumed 18 months and $400K without delivering a working platform. The company needed a partner who could execute quickly while integrating with their existing POS system, inventory management, and fulfillment operations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                "No e-commerce capability despite customer demand",
                "Losing market share to digitally-native competitors",
                "Failed 18-month internal IT project",
                "Limited geographic reach (12 stores only)",
                "No visibility into online customer behavior",
                "Inventory siloed across locations"
              ].map((challenge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3 bg-white/5 p-4 rounded-lg"
                >
                  <div className="w-2 h-2 bg-amber-400 mt-2 flex-shrink-0" />
                  <span className="text-white/80">{challenge}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-white text-charcoal">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <span className="text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] text-primary mb-4 sm:mb-6 block">
              The Solution
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-6">
              A comprehensive digital commerce platform
            </h2>
            <p className="text-xl text-charcoal/60 max-w-3xl mx-auto">
              NEXDYNE designed and implemented an end-to-end e-commerce solution that integrated with existing systems while enabling new capabilities.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {[
              {
                icon: null,
                title: "Shopify Plus Platform",
                description: "Enterprise e-commerce platform with custom theme, product configurators, and seamless checkout experience optimized for outdoor gear shoppers.",
                color: "from-amber-500 to-orange-600"
              },
              {
                icon: null,
                title: "Omnichannel Fulfillment",
                description: "Ship-from-store, buy-online-pickup-in-store (BOPIS), and real-time inventory visibility across all 12 locations.",
                color: "from-[#0077B5] to-secondary"
              },
              {
                icon: null,
                title: "Personalization Engine",
                description: "AI-powered product recommendations based on browsing behavior, purchase history, and activity preferences.",
                color: "from-violet-500 to-purple-600"
              },
              {
                icon: null,
                title: "Analytics & Attribution",
                description: "Customer journey tracking, conversion optimization, and marketing attribution to measure ROI across channels.",
                color: "from-emerald-500 to-teal-600"
              },
              {
                icon: null,
                title: "Performance Marketing",
                description: "Google Ads, Meta campaigns, and SEO strategy to drive qualified traffic and acquire customers cost-effectively.",
                color: "from-rose-500 to-pink-600"
              },
              {
                icon: null,
                title: "POS Integration",
                description: "Real-time sync with existing Lightspeed POS for unified inventory, customer data, and order management.",
                color: "from-base to-[#0077B5]"
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
                <div className="h-full bg-subtle p-4 sm:p-6 md:p-8 rounded-lg sm: hover: transition-all duration-300">
                  <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center mb-6 text-white`}>
                    {item.icon}
                  </div>
                  <h3 className="text-xl mb-4 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-charcoal/60 leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Timeline */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-subtle text-charcoal">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <span className="text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] text-primary mb-4 sm:mb-6 block">
              Implementation
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-6">
              From kickoff to launch in 10 weeks
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {[
              {
                phase: "Week 1-2",
                title: "Discovery & Planning",
                items: ["Requirements gathering", "System audit", "Integration architecture", "Project roadmap"]
              },
              {
                phase: "Week 3-5",
                title: "Platform Build",
                items: ["Shopify Plus setup", "Custom theme development", "Product catalog migration", "POS integration"]
              },
              {
                phase: "Week 6-8",
                title: "Fulfillment & Testing",
                items: ["Omnichannel fulfillment setup", "BOPIS configuration", "UAT testing", "Staff training"]
              },
              {
                phase: "Week 9-10",
                title: "Launch & Optimize",
                items: ["Soft launch", "Marketing activation", "Performance monitoring", "Conversion optimization"]
              }
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-4 sm:p-5 md:p-6 rounded-lg sm: shadow-sm"
              >
                <span className="text-xs uppercase tracking-wider text-primary mb-2 block">{phase.phase}</span>
                <h3 className="text-lg mb-4">{phase.title}</h3>
                <ul className="space-y-2">
                  {phase.items.map((item, i) => (
                    <li key={i} className="flex items-start text-sm text-charcoal/70">

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
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <span className="text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white/60 mb-4 sm:mb-6 block">
              Results
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-6">
              Transformative business outcomes
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Within 18 months of launch, the e-commerce platform became a significant revenue driver and transformed how the company serves customers.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto mb-8 sm:mb-12 md:mb-16">
            {[
              { stat: "180%", label: "Online revenue growth", description: "Year-over-year increase in digital sales" },
              { stat: "$3.2M", label: "New digital revenue", description: "Incremental revenue from e-commerce channel" },
              { stat: "42%", label: "BOPIS adoption", description: "Of online orders picked up in-store" },
              { stat: "28%", label: "New customer acquisition", description: "Customers outside traditional geography" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl sm:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-amber-400 mb-2">
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
            className="max-w-4xl mx-auto bg-white/5 p-6 sm:p-8 md:p-12 rounded-lg sm:"
          >
            <div className="text-amber-400 mb-6">
              <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
            </div>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed mb-5 sm:mb-6 md:mb-8 italic">
              "NEXDYNE's Growth Acceleration Framework helped us launch our e-commerce platform in 10 weeks and grow online revenue 180% in 18 months. The ROI was clear from day one, and we now have a scalable digital channel that's become essential to our business."
            </p>
            <div>
              <p className="text-white text-lg">Tom Anderson</p>
              <p className="text-white/60">Chief Executive Officer</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Case Studies */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-subtle text-charcoal">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <span className="text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] text-primary mb-4 sm:mb-6 block">
              Related Case Studies
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              More digital growth success stories
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {[
              {
                category: "Professional Services",
                title: "Training company launches subscription platform with 2,400 members",
                stats: [{ value: "2,400", label: "Active members" }, { value: "$1.8M", label: "Annual MRR" }],
                color: "from-violet-500 to-purple-600",
                link: "/cases/training-subscription-platform"
              },
              {
                category: "B2B Manufacturing",
                title: "Industrial supplier adds $4.5M revenue through digital ordering",
                stats: [{ value: "$4.5M", label: "New revenue" }, { value: "58%", label: "Self-service orders" }],
                color: "from-[#0077B5] to-secondary",
                link: "/cases/b2b-digital-ordering"
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
                  <div className="bg-white rounded-lg sm: overflow-hidden shadow-sm hover: transition-all duration-300 cursor-pointer h-full flex flex-col">
                    <div className={`h-40 bg-gradient-to-br ${caseStudy.color}`} />
                    <div className="p-4 sm:p-5 md:p-6 flex-grow flex flex-col">
                      <span className="text-xs uppercase tracking-wider text-primary mb-2">
                        {caseStudy.category}
                      </span>
                      <h3 className="text-xl mb-4 group-hover:text-primary transition-colors">
                        {caseStudy.title}
                      </h3>
                      <div className="grid grid-cols-2 gap-4 mb-6 mt-auto">
                        {caseStudy.stats.map((stat, i) => (
                          <div key={i}>
                            <p className="text-2xl text-primary">{stat.value}</p>
                            <p className="text-xs text-charcoal/60">{stat.label}</p>
                          </div>
                        ))}
                      </div>
                      <div className="flex items-center text-primary font-semibold text-sm group-hover:gap-3 gap-2 transition-all">
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
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-6">
              Ready to launch your digital growth initiative?
            </h2>
            <p className="text-xl text-white/70 leading-relaxed mb-10">
              Let's discuss how we can help you build digital channels that drive revenue and scale your business.
            </p>
            <Link href="/contact">
              <Button className="bg-primary hover:bg-primary/90 text-white px-10 py-6 text-lg font-semibold transition-all">
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
