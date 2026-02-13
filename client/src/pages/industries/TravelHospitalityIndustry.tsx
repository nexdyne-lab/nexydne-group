import { motion } from "framer-motion";
import { ArrowRight, Plane, Hotel, Utensils, Map, BarChart3, ChevronRight, Globe, Users, Star, Calendar } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function TravelHospitalityIndustry() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#051C2C] selection:bg-[#0077B5] selection:text-white">
      <SEO 
        title="Travel & Hospitality" 
        description="Digital transformation for travel and hospitality. NexDyne helps airlines, hotels, and travel companies create exceptional guest experiences, optimize operations, and build resilient businesses."
        canonical="/industries/travel-hospitality"
      />
      <Navigation />
      
      {/* Editorial Hero Section */}
      <section className="relative pt-32 pb-20 bg-white">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0077B5] mb-8 block">
              Travel & Hospitality
            </span>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl eb-garamond font-bold tracking-tight text-[#051C2C] leading-[1.1] mb-5">
              Travel & Hospitality
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-[#051C2C]/70 leading-relaxed max-w-4xl">
              Travel and hospitality are being transformed by changing consumer expectations, new distribution models, and the imperative for operational resilience. NexDyne helps airlines, hotels, and travel companies navigate this transformation—building the capabilities needed to deliver exceptional experiences while optimizing performance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Full-Width Hero Image */}
      <section className="relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="w-full h-[50vh] md:h-[60vh] relative overflow-hidden"
        >
          <img 
            src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&q=80" 
            alt="Travel & Hospitality Digital Transformation" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
        </motion.div>
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
                The travel industry has emerged from unprecedented disruption with a renewed focus on resilience, efficiency, and customer experience. Travelers expect seamless digital journeys, personalized service, and flexible options. Companies that can deliver on these expectations while managing costs will thrive; those that can't will struggle to compete.
              </p>
              
              <p className="text-lg text-[#051C2C]/70 leading-relaxed mb-8">
                We partner with travel and hospitality companies to build the digital capabilities that enable success in this new environment. From AI-powered revenue management to contactless guest experiences, our solutions help companies improve performance while creating memorable experiences that drive loyalty.
              </p>
              
              <p className="text-lg text-[#051C2C]/70 leading-relaxed">
                Beyond technology implementation, we help companies reimagine their operating models. Labor optimization, supply chain resilience, and sustainability initiatives are creating new imperatives that require integrated solutions across the enterprise.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Statistics Strip */}
      <section className="py-16 bg-[#051C2C]">
        <div className="container px-4 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { value: "15%", label: "Increase in RevPAR" },
              { value: "25%", label: "Improvement in guest satisfaction" },
              { value: "30%", label: "Reduction in operational costs" },
              { value: "40%", label: "Increase in direct bookings" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-serif font-bold text-[#0077B5] mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-white/60">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Help - Editorial Two-Column */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container px-4 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl eb-garamond font-bold text-[#051C2C] mb-8 leading-tight">
                How We Help Travel & Hospitality Companies Excel
              </h2>
              <p className="text-lg text-[#051C2C]/70 leading-relaxed">
                Success in travel and hospitality requires excellence across the guest journey—from inspiration and booking to on-property experience and post-stay engagement. We help companies build capabilities in each area, creating integrated solutions that drive revenue while delighting guests.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="border-l-4 border-[#0077B5] pl-6">
                <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-3">
                  Revenue Management & Pricing
                </h3>
                <p className="text-[#051C2C]/70 leading-relaxed">
                  Optimize revenue with AI-powered pricing and demand forecasting. Our solutions help companies maximize yield while maintaining competitive positioning across channels and market segments.
                </p>
              </div>

              <div className="border-l-4 border-[#0077B5] pl-6">
                <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-3">
                  Guest Experience & Personalization
                </h3>
                <p className="text-[#051C2C]/70 leading-relaxed">
                  Create memorable experiences with personalized service at scale. Our platforms enable companies to understand guest preferences, anticipate needs, and deliver tailored experiences that drive loyalty.
                </p>
              </div>

              <div className="border-l-4 border-[#0077B5] pl-6">
                <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-3">
                  Digital Distribution & Direct Booking
                </h3>
                <p className="text-[#051C2C]/70 leading-relaxed">
                  Build direct relationships with travelers through compelling digital experiences. Our solutions help companies increase direct bookings, reduce distribution costs, and own the customer relationship.
                </p>
              </div>

              <div className="border-l-4 border-[#0077B5] pl-6">
                <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-3">
                  Operations Optimization
                </h3>
                <p className="text-[#051C2C]/70 leading-relaxed">
                  Improve operational efficiency with intelligent automation and analytics. From labor scheduling to inventory management, we help companies reduce costs while maintaining service excellence.
                </p>
              </div>
            </motion.div>
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
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80" 
                alt="Hotel Digital Transformation" 
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
                22%
              </div>
              <div className="text-xl font-medium text-[#051C2C] mb-6">
                increase in RevPAR
              </div>
              <p className="text-lg text-[#051C2C]/70 leading-relaxed mb-6">
                A global hotel chain partnered with us to transform their revenue management capabilities. We deployed an AI-powered pricing platform that optimizes rates in real time across 500+ properties, implemented dynamic packaging, and built a guest intelligence system that enables personalized offers. The result: 22% increase in RevPAR and 35% growth in direct bookings.
              </p>
              <Link href="/cases/hotel-revenue-transformation" className="inline-flex items-center text-[#0077B5] font-semibold hover:underline">
                Read the full case study <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>
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
              Our Travel & Hospitality Capabilities
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
            {[
              { title: "Revenue Management & Pricing", desc: "Optimize pricing with AI-powered demand forecasting and dynamic rate management that maximizes revenue across channels and segments." },
              { title: "Guest Intelligence & Personalization", desc: "Build 360-degree guest profiles that enable personalized experiences, targeted marketing, and proactive service delivery." },
              { title: "Digital Booking & Commerce", desc: "Create compelling digital experiences that drive direct bookings, reduce distribution costs, and build lasting guest relationships." },
              { title: "Operations & Labor Optimization", desc: "Improve efficiency with intelligent scheduling, workflow automation, and analytics that reduce costs while maintaining service quality." },
              { title: "Loyalty & Customer Engagement", desc: "Build loyalty programs that drive repeat business and create emotional connections with guests across their travel journey." },
              { title: "Sustainability & ESG", desc: "Implement sustainability initiatives that reduce environmental impact, meet stakeholder expectations, and create competitive advantage." }
            ].map((cap, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border-t-2 border-[#051C2C]/10 pt-8"
              >
                <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4 underline decoration-[#0077B5] decoration-2 underline-offset-4">
                  {cap.title}
                </h3>
                <p className="text-[#051C2C]/70 leading-relaxed">{cap.desc}</p>
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
              { title: "Retail & E-commerce", link: "/industries/retail" },
              { title: "Consumer Products", link: "/industries/consumer-products" },
              { title: "Transportation & Logistics", link: "/industries/transportation-logistics" }
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
              <h2 className="text-3xl md:text-4xl eb-garamond font-bold text-white mb-6">Ready to transform your guest experience?</h2>
              <p className="text-lg text-white/70 mb-10">Let's discuss how we can help you create exceptional experiences, optimize operations, and build a resilient business for the future of travel.</p>
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
