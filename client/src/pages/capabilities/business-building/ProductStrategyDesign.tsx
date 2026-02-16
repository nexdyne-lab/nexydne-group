import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import BainHoverCard from "@/components/BainHoverCard";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";

export default function ProductStrategyDesign() {
  // Capabilities data for How We Can Help section
  const capabilities = [
    {
      title: "Product Vision & Roadmap",
      description: "Define where your product is going and how it will get there. We create product strategies that align with business goals and market opportunities."
    },
    {
      title: "User Research & Insights",
      description: "Understand what your customers actually need—not what they say they want. Deep qualitative and quantitative research that reveals unmet needs and opportunities."
    },
    {
      title: "UX/UI Design",
      description: "Design experiences that users love and that drive business results. From wireframes to high-fidelity prototypes, we create interfaces that convert."
    },
    {
      title: "Product-Market Fit Analysis",
      description: "Know whether your product truly fits the market before scaling. We assess fit across value proposition, target segment, and competitive positioning."
    },
    {
      title: "Feature Prioritization",
      description: "Build the right things in the right order. Our prioritization frameworks balance customer value, business impact, and development effort."
    },
    {
      title: "Design System Development",
      description: "Create consistent, scalable design foundations. Component libraries and design tokens that accelerate development and ensure brand consistency."
    }
  ];

  // Related capabilities data
  const relatedCapabilities = [
    {
      title: "Digital Venture Launch",
      description: "Turn validated product concepts into market-ready digital businesses with our end-to-end venture building methodology.",
      link: "/capabilities/business-building/digital-venture-launch"
    },
    {
      title: "Growth & Scaling",
      description: "Scale your product once you've found fit. Growth strategies, operational excellence, and team building for the next phase.",
      link: "/capabilities/business-building/growth-scaling"
    },
    {
      title: "Go-to-Market at Scale",
      description: "Launch your product into new markets with strategies that drive adoption and revenue growth.",
      link: "/capabilities/business-building/go-to-market-scale"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-[#051C2C] selection:bg-[#0077B5] selection:text-white">
      <SEO 
        title="Product Strategy & Design" 
        description="Define winning product strategies and design experiences that capture market share. From vision to execution, we help you build products users love."
        canonical="/capabilities/business-building/product-strategy-design"
      />
      <Navigation />
      
      {/* Hero Section - Dark Background (F100) */}
      <section className="relative min-h-[70vh] flex items-center pt-20 bg-black">
        <div className="container px-4 md:px-12 grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link href="/capabilities/business-building" className="inline-flex items-center text-white/60 hover:text-white mb-6 text-sm transition-colors">
              <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
              Business Building
            </Link>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.05] mb-4 eb-garamond">
              Product Strategy & Design
            </h1>
            
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-2xl mb-10">
              Build products users love. We combine strategic thinking with human-centered design to create experiences that win in the market.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button className="bg-white hover:bg-gray-200 text-black px-8 py-6 text-base font-semibold transition-all">
                  Schedule a Consultation
                </Button>
              </Link>
              <Link href="/capabilities/business-building/case-studies">
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-base font-semibold transition-all bg-transparent">
                  View Case Studies
                </Button>
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:block"
          >
            <img 
              src="https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&q=80" 
              alt="Product Strategy & Design" 
              className="w-full h-auto rounded-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Our Experience & Impact (F100) */}
      <section className="py-20 bg-white border-b border-gray-200">
        <div className="container px-4 md:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-[#051C2C] mb-12 eb-garamond"
          >
            Our Experience & Impact
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { metric: "85+", label: "products designed and launched across B2B, B2C, and marketplace models" },
              { metric: "3.2x", label: "average improvement in user engagement after redesign projects" },
              { metric: "92%", label: "of our product strategies achieve product-market fit within 12 months" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`${index > 0 ? 'border-l border-gray-200 pl-8' : ''}`}
              >
                <div className="text-5xl md:text-6xl font-bold text-[#051C2C] mb-4">{item.metric}</div>
                <p className="text-lg text-[#051C2C]/60">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Thought Leadership Paragraphs (F100) */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-12">
          <div className="max-w-4xl mx-auto space-y-8 text-xl text-[#051C2C]/80 leading-relaxed">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Great products don't happen by accident. They're the result of deep customer understanding, strategic clarity, and disciplined execution. Too many companies skip the strategy work and jump straight to building—then wonder why their product doesn't resonate with the market.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              We believe product strategy and design are inseparable. Strategy without design is just a document. Design without strategy is just decoration. Our approach integrates both—starting with the business problem and customer need, then working through to the pixel-perfect interface.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Our team combines strategists who've built product roadmaps for Fortune 500 companies with designers who've shipped products used by millions. We bring enterprise rigor to mid-market speed—helping you make better decisions faster.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Whether you're launching a new product, redesigning an existing one, or trying to find product-market fit, we help you cut through the noise and focus on what matters: building something customers will actually pay for.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Our Approach Section - 3 Column Layout (F100) */}
      <section className="py-24 bg-[#0a1628] text-white">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0077B5] mb-4 block">
              Our Approach
            </span>
            <h2 className="text-4xl md:text-5xl font-bold eb-garamond">
              Strategy-led design
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Discover & define",
                description: "We start by understanding your business, your customers, and your market. Research, interviews, and analysis that reveal the real opportunities and constraints."
              },
              {
                title: "Design & validate",
                description: "We create concepts, prototypes, and designs—then test them with real users before you invest in development. Fail fast, learn faster."
              },
              {
                title: "Deliver & iterate",
                description: "We work with your team to ship the product, then help you establish the processes for continuous improvement based on real user feedback."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-white/70 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link href="/contact">
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-4 bg-transparent">
                Get in touch
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* How We Can Help - Capability Cards with H100 */}
      <section className="py-24 bg-[#f8f8f7]">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0077B5] mb-6 block">
              How We Can Help
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#051C2C] mb-6 eb-garamond">
              Our Product Capabilities
            </h2>
            <p className="text-xl text-[#051C2C]/60 max-w-2xl">
              End-to-end product strategy and design services that drive business results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <BainHoverCard
                  title={item.title}
                  description={item.description}
                  link="#"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Results Section (F100) */}
      <section className="py-24 bg-white">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0077B5] mb-6 block">
              Client Results
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#051C2C] eb-garamond">
              Products we've designed
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                category: "B2B SAAS",
                title: "Enterprise platform redesign increases conversion 47%",
                description: "A B2B software company struggled with low trial-to-paid conversion. We redesigned the onboarding experience and core workflows. Result: 47% increase in conversion and 28% reduction in support tickets.",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
              },
              {
                category: "E-COMMERCE",
                title: "Mobile app design drives 3x engagement",
                description: "A retail brand needed a mobile app to compete with digital-native competitors. We designed and launched an app that became their highest-converting channel. Result: 3x engagement vs. mobile web.",
                image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80"
              }
            ].map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Link href="/capabilities/business-building/case-studies" className="block">
                  <div className="relative overflow-hidden rounded-xl aspect-[16/10] mb-6">
                    <img 
                      src={study.image} 
                      alt={study.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-[#0077B5] text-white text-xs font-bold uppercase tracking-wider rounded">
                        {study.category}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4 group-hover:text-[#0077B5] transition-colors leading-tight">
                    {study.title}
                  </h3>
                  <p className="text-[#051C2C]/60 text-sm leading-relaxed mb-4">
                    {study.description}
                  </p>
                  <div className="flex items-center text-[#0077B5] text-sm font-semibold group-hover:translate-x-2 transition-transform duration-300">
                    Read case study <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Capabilities - H100 Hover Cards */}
      <section className="py-24 bg-[#f8f8f7]">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0077B5] mb-6 block">
              Related Capabilities
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#051C2C] eb-garamond">
              Explore more ways we can help
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {relatedCapabilities.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <BainHoverCard
                  title={item.title}
                  description={item.description}
                  link={item.link}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#051C2C]">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 eb-garamond">
              Ready to build a better product?
            </h2>
            <p className="text-xl text-white/70 mb-8 leading-relaxed">
              Let's talk about your product challenges and how we can help you create something users will love.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button className="bg-white hover:bg-gray-200 text-black px-8 py-6 text-base font-semibold">
                  Contact Us
                </Button>
              </Link>
              <Link href="/capabilities/business-building">
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-base font-semibold bg-transparent">
                  Back to Business Building
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
