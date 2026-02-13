import { motion } from "framer-motion";
import { ArrowRight, Building2, TreePine, Train, Lightbulb, BarChart3, ChevronRight, Globe, Users, Leaf, MapPin } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function UrbanDevelopmentIndustry() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#051C2C] selection:bg-[#0077B5] selection:text-white">
      <SEO 
        title="Urban Development" 
        description="Smart city solutions and urban transformation. NexDyne helps cities and developers create sustainable, livable communities through digital infrastructure, data-driven planning, and innovative urban services."
        canonical="/industries/urban-development"
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
              Urban Development
            </span>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl eb-garamond font-bold tracking-tight text-[#051C2C] leading-[1.1] mb-5">
              Urban Development
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-[#051C2C]/70 leading-relaxed max-w-4xl">
              Cities face unprecedented challenges: rapid urbanization, climate change, aging infrastructure, and rising citizen expectations. Meeting these challenges requires new approaches to planning, development, and service delivery. NexDyne helps cities and developers build smarter, more sustainable, and more livable communities.
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
            src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1920&q=80" 
            alt="Urban Development Smart Cities" 
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
                By 2050, nearly 70% of the world's population will live in cities. This urban transformation creates both challenges and opportunities. Cities that can harness technology, data, and innovative governance will create thriving communities. Those that can't will struggle with congestion, pollution, inequality, and declining quality of life.
              </p>
              
              <p className="text-lg text-[#051C2C]/70 leading-relaxed mb-8">
                We partner with cities, developers, and infrastructure providers to build the capabilities that enable urban transformation. From smart city platforms and digital infrastructure to sustainable development and citizen engagement, our solutions help create communities where people want to live, work, and invest.
              </p>
              
              <p className="text-lg text-[#051C2C]/70 leading-relaxed">
                Our approach integrates technology with urban planning, governance, and community engagement. We understand that successful urban development requires more than technology—it requires a holistic vision that balances economic development, environmental sustainability, and social equity.
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
              { value: "30%", label: "Reduction in energy consumption" },
              { value: "25%", label: "Improvement in traffic flow" },
              { value: "40%", label: "Increase in citizen engagement" },
              { value: "20%", label: "Reduction in carbon emissions" }
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
                How We Help Cities and Developers Build Better Communities
              </h2>
              <p className="text-lg text-[#051C2C]/70 leading-relaxed">
                Successful urban development requires integrated solutions that address mobility, sustainability, livability, and economic vitality. We help cities and developers build capabilities across these dimensions—creating communities that are resilient, inclusive, and positioned for long-term success.
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
                  Smart City Platforms
                </h3>
                <p className="text-[#051C2C]/70 leading-relaxed">
                  Build integrated platforms that connect city systems and enable data-driven decision making. Our solutions help cities optimize operations, improve services, and engage citizens through unified digital infrastructure.
                </p>
              </div>

              <div className="border-l-4 border-[#0077B5] pl-6">
                <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-3">
                  Sustainable Development
                </h3>
                <p className="text-[#051C2C]/70 leading-relaxed">
                  Create developments that minimize environmental impact while maximizing livability. Our solutions help developers and cities implement green building practices, renewable energy, and sustainable infrastructure.
                </p>
              </div>

              <div className="border-l-4 border-[#0077B5] pl-6">
                <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-3">
                  Mobility & Transportation
                </h3>
                <p className="text-[#051C2C]/70 leading-relaxed">
                  Transform urban mobility with integrated transportation solutions. From traffic management and public transit optimization to micro-mobility and autonomous vehicles, we help cities move people efficiently.
                </p>
              </div>

              <div className="border-l-4 border-[#0077B5] pl-6">
                <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-3">
                  Citizen Engagement & Services
                </h3>
                <p className="text-[#051C2C]/70 leading-relaxed">
                  Build digital services that improve quality of life and enable citizen participation. Our platforms help cities deliver services efficiently while creating channels for community input and engagement.
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
                src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&q=80" 
                alt="Smart City Platform" 
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
                reduction in city operating costs
              </div>
              <p className="text-lg text-[#051C2C]/70 leading-relaxed mb-6">
                A major metropolitan area partnered with us to build a comprehensive smart city platform. We integrated systems across transportation, utilities, public safety, and citizen services—creating a unified operations center that enables real-time monitoring and data-driven decision making. The result: 35% reduction in operating costs and significant improvements in service delivery.
              </p>
              <Link href="/cases/smart-city-platform" className="inline-flex items-center text-[#0077B5] font-semibold hover:underline">
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
              Our Urban Development Capabilities
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
            {[
              { title: "Smart City Strategy & Planning", desc: "Develop comprehensive smart city strategies that align technology investments with urban development goals and citizen needs." },
              { title: "Digital Infrastructure", desc: "Build the connectivity and data infrastructure that enables smart city applications—from IoT networks to city data platforms." },
              { title: "Intelligent Transportation", desc: "Optimize urban mobility with traffic management, public transit optimization, and integrated mobility platforms." },
              { title: "Energy & Sustainability", desc: "Implement smart grid solutions, renewable energy integration, and building automation that reduce environmental impact." },
              { title: "Public Safety & Security", desc: "Enhance public safety with integrated command centers, predictive analytics, and emergency response optimization." },
              { title: "Citizen Services & Engagement", desc: "Build digital platforms that improve service delivery and enable meaningful citizen participation in urban governance." }
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
              { title: "Public Sector", link: "/industries/public-sector" },
              { title: "Energy & Utilities", link: "/industries/energy-utilities" },
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
              <h2 className="text-3xl md:text-4xl eb-garamond font-bold text-white mb-6">Ready to build smarter cities?</h2>
              <p className="text-lg text-white/70 mb-10">Let's discuss how we can help you create sustainable, livable communities through digital infrastructure and innovative urban solutions.</p>
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
