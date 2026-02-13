import { motion } from "framer-motion";
import { ArrowRight, Plane, Shield, Rocket, Target, BarChart3, ChevronRight, Globe, Cpu, Radio, Satellite } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function AerospaceDefenseIndustry() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#051C2C] selection:bg-[#0077B5] selection:text-white">
      <SEO 
        title="Aerospace & Defense" 
        description="Digital transformation for aerospace and defense. NexDyne helps A&D companies modernize operations, accelerate innovation, and build next-generation capabilities while meeting stringent security requirements."
        canonical="/industries/aerospace-defense"
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
              Aerospace & Defense
            </span>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl eb-garamond font-bold tracking-tight text-[#051C2C] leading-[1.1] mb-5">
              Aerospace & Defense
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-[#051C2C]/70 leading-relaxed max-w-4xl">
              The aerospace and defense industry faces a pivotal moment. Emerging technologies, evolving threats, and new market entrants are reshaping competitive dynamics. NexDyne helps A&D companies navigate this transformation—building the digital capabilities needed to innovate faster, operate more efficiently, and maintain technological superiority.
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
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=80" 
            alt="Aerospace & Defense Digital Transformation" 
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
                Aerospace and defense companies are under pressure to deliver more capability, faster, and at lower cost. Traditional development approaches that took decades are being compressed to years. New technologies—AI, autonomous systems, advanced manufacturing—are creating both opportunities and threats. Companies that can harness these forces will define the future of the industry.
              </p>
              
              <p className="text-lg text-[#051C2C]/70 leading-relaxed mb-8">
                We partner with A&D companies to build the digital capabilities that enable success in this environment. From digital engineering and model-based systems engineering to AI-powered operations and supply chain resilience, our solutions help companies innovate faster while maintaining the quality and security that the industry demands.
              </p>
              
              <p className="text-lg text-[#051C2C]/70 leading-relaxed">
                Our teams bring deep industry expertise combined with cutting-edge technical capabilities. We understand the unique challenges of A&D—from complex program management to stringent security requirements—and we bring the skills needed to help clients succeed.
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
              { value: "40%", label: "Reduction in development time" },
              { value: "25%", label: "Improvement in first-pass yield" },
              { value: "30%", label: "Reduction in program costs" },
              { value: "50%", label: "Faster time to certification" }
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
                How We Help A&D Companies Build Next-Generation Capabilities
              </h2>
              <p className="text-lg text-[#051C2C]/70 leading-relaxed">
                Success in aerospace and defense requires excellence across the product lifecycle—from concept and design through production, sustainment, and modernization. We help companies build capabilities in each area, creating integrated solutions that accelerate innovation while managing risk and maintaining security.
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
                  Digital Engineering & MBSE
                </h3>
                <p className="text-[#051C2C]/70 leading-relaxed">
                  Transform product development with digital engineering and model-based systems engineering. Our solutions help companies create digital twins, enable virtual testing, and accelerate development while improving quality.
                </p>
              </div>

              <div className="border-l-4 border-[#0077B5] pl-6">
                <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-3">
                  AI & Autonomous Systems
                </h3>
                <p className="text-[#051C2C]/70 leading-relaxed">
                  Build AI capabilities that create competitive advantage. From autonomous systems and predictive maintenance to intelligent decision support, we help companies harness AI while meeting safety and certification requirements.
                </p>
              </div>

              <div className="border-l-4 border-[#0077B5] pl-6">
                <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-3">
                  Supply Chain Resilience
                </h3>
                <p className="text-[#051C2C]/70 leading-relaxed">
                  Build resilient supply chains that ensure mission readiness. Our solutions help companies gain visibility, manage risk, and optimize performance across complex, global supply networks.
                </p>
              </div>

              <div className="border-l-4 border-[#0077B5] pl-6">
                <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-3">
                  Cybersecurity & Zero Trust
                </h3>
                <p className="text-[#051C2C]/70 leading-relaxed">
                  Protect critical systems and data with comprehensive cybersecurity. Our solutions help companies implement zero trust architectures, secure supply chains, and meet evolving compliance requirements.
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
                src="https://images.unsplash.com/photo-1517976487492-5750f3195933?w=800&q=80" 
                alt="Aerospace Digital Engineering" 
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
                45%
              </div>
              <div className="text-xl font-medium text-[#051C2C] mb-6">
                reduction in development cycle time
              </div>
              <p className="text-lg text-[#051C2C]/70 leading-relaxed mb-6">
                A major aerospace company partnered with us to transform their product development process. We implemented a comprehensive digital engineering environment including digital twins, virtual testing, and model-based systems engineering. The result: 45% reduction in development cycle time and 30% improvement in first-pass yield.
              </p>
              <Link href="/cases/aerospace-digital-engineering" className="inline-flex items-center text-[#0077B5] font-semibold hover:underline">
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
              Our Aerospace & Defense Capabilities
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
            {[
              { title: "Digital Engineering & PLM", desc: "Transform product development with digital engineering, model-based systems engineering, and integrated PLM platforms that accelerate innovation." },
              { title: "AI & Machine Learning", desc: "Build AI capabilities for autonomous systems, predictive maintenance, and intelligent decision support while meeting safety and certification requirements." },
              { title: "Advanced Manufacturing", desc: "Implement Industry 4.0 capabilities including additive manufacturing, digital factories, and intelligent automation that improve quality and reduce costs." },
              { title: "Supply Chain & Logistics", desc: "Build resilient supply chains with visibility, risk management, and optimization capabilities that ensure mission readiness." },
              { title: "Sustainment & MRO", desc: "Optimize sustainment operations with predictive maintenance, digital work instructions, and analytics that improve availability and reduce costs." },
              { title: "Cybersecurity & Compliance", desc: "Protect critical systems with zero trust architectures, secure development practices, and compliance solutions for CMMC and other requirements." }
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
              { title: "Manufacturing", link: "/industries/manufacturing" },
              { title: "Public Sector", link: "/industries/public-sector" },
              { title: "Technology, Media & Telecom", link: "/industries/technology-media-telecom" }
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
              <h2 className="text-3xl md:text-4xl eb-garamond font-bold text-white mb-6">Ready to build next-generation capabilities?</h2>
              <p className="text-lg text-white/70 mb-10">Let's discuss how we can help you accelerate innovation, improve operations, and maintain technological superiority in aerospace and defense.</p>
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
