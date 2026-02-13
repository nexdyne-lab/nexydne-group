import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";

export default function MergersAcquisitions() {
  // Capabilities data for How We Can Help section
  const capabilities = [
    {
      title: "M&A Strategy",
      description: "Define your acquisition strategy aligned with corporate objectives. Identify the right targets and optimal deal structures."
    },
    {
      title: "Target Identification",
      description: "Systematic screening and evaluation of potential targets. Market mapping, competitor analysis, and opportunity assessment."
    },
    {
      title: "Commercial Due Diligence",
      description: "Deep-dive analysis of target's market position, customers, and growth potential. Validate the investment thesis."
    },
    {
      title: "Financial Due Diligence",
      description: "Rigorous examination of financial statements, quality of earnings, and working capital. Identify risks and opportunities."
    },
    {
      title: "Valuation & Deal Structuring",
      description: "Determine fair value and optimal deal structure. Model synergies and negotiate terms that protect your interests."
    },
    {
      title: "Post-Merger Integration",
      description: "Plan and execute integration to capture synergies. Manage cultural integration and operational alignment."
    }
  ];

  // Related capabilities data
  const relatedCapabilities = [
    {
      title: "Capital Raising & Investment",
      description: "Secure the funding you need to grow. We help you access debt, equity, and alternative financing sources on optimal terms.",
      link: "/capabilities/strategy-corporate-finance/capital-raising"
    },
    {
      title: "Business Strategy & Transformation",
      description: "Define your path to victory. Clarify your vision, identify growth engines, and restructure for scalability.",
      link: "/capabilities/strategy-corporate-finance/business-strategy"
    },
    {
      title: "Performance Improvement",
      description: "Unlock hidden value in your operations. Cost-saving opportunities, working capital optimization, and process streamlining.",
      link: "/capabilities/strategy-corporate-finance/performance-improvement"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-[#051C2C] selection:bg-[#0077B5] selection:text-white">
      <SEO 
        title="M&A & Strategic Partnerships" 
        description="Navigate complex transactions with expert guidance. From target identification and valuation to negotiation and post-merger integration."
        canonical="/capabilities/strategy-corporate-finance/mergers-acquisitions"
      />
      <Navbar />
      
      {/* Hero Section - Dark Background (F100) */}
      <section className="relative min-h-[70vh] flex items-center pt-20 bg-black">
        <div className="container px-4 md:px-12 grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link href="/capabilities/strategy-corporate-finance" className="inline-flex items-center text-white/60 hover:text-white mb-6 text-sm transition-colors">
              <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
              Strategy & Corporate Finance
            </Link>
            
            <h1 className="text-5xl md:text-7xl font-['EB_Garamond'] font-bold tracking-tight text-white leading-[1.05] mb-4">
              M&A & Strategic Partnerships
            </h1>
            
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-2xl mb-10">
              Navigate complex transactions with expert guidance. From target identification and valuation to negotiation and post-merger integration.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button className="bg-white hover:bg-gray-200 text-black px-8 py-6 text-base font-semibold transition-all">
                  Schedule a Consultation
                </Button>
              </Link>
              <Link href="/capabilities/strategy-corporate-finance/case-studies">
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
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80" 
              alt="M&A & Strategic Partnerships" 
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
            className="text-2xl font-['EB_Garamond'] font-bold text-[#051C2C] mb-12"
          >
            Our Experience & Impact
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { metric: "$500M+", label: "transaction value advised across equity, debt, and strategic deals" },
              { metric: "30+", label: "M&A transactions completed for mid-market companies" },
              { metric: "90%", label: "synergy capture rate through disciplined integration planning" }
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
              Studies consistently show that 60-70% of mergers and acquisitions fail to create the value they promised. The reasons vary—overpaying, cultural clashes, integration failures, or simply pursuing the wrong deal in the first place.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              We help you beat those odds. Our M&A advisory services span the entire transaction lifecycle, from strategic rationale and target identification through due diligence, negotiation, and post-merger integration.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Whether you're looking to acquire, be acquired, or form strategic partnerships, we provide the expertise and hands-on support to maximize value and minimize risk. Our approach combines rigorous analysis with practical execution.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              The goal isn't just to close deals—it's to create lasting value. We focus on the strategic fit, cultural alignment, and integration planning that determine whether a transaction delivers on its promise.
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
            <h2 className="text-4xl md:text-5xl font-['EB_Garamond'] font-bold">
              Maximizing transaction value
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Strategize and screen",
                description: "We help you define your M&A strategy, identify potential targets, and evaluate opportunities against your strategic objectives and risk tolerance."
              },
              {
                title: "Diligence and negotiate",
                description: "We conduct thorough due diligence, build valuation models, and support negotiations to ensure you get the right deal on the right terms."
              },
              {
                title: "Integrate and capture",
                description: "We plan and execute post-merger integration to capture synergies, align cultures, and realize the full value of the transaction."
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
            <h2 className="text-4xl md:text-5xl font-['EB_Garamond'] font-bold text-[#051C2C] mb-6">
              Our M&A Capabilities
            </h2>
            <p className="text-xl text-[#051C2C]/60 max-w-2xl">
              Full-spectrum M&A support from strategy through integration.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group"
              >
                <div className="h-full min-h-[200px] p-8 bg-white border-l-4 border-l-transparent group-hover:border-l-[#CC0000] border border-gray-200 transition-all duration-300 flex flex-col">
                  <div className="flex-1">
                    <h3 className="text-2xl font-['EB_Garamond'] font-bold text-[#051C2C] leading-tight origin-top-left transition-all duration-300 group-hover:text-base group-hover:mb-2">
                      {item.title}
                    </h3>
                    
                    <p className="text-[#051C2C]/70 leading-relaxed text-sm max-h-0 overflow-hidden opacity-0 group-hover:max-h-[120px] group-hover:opacity-100 group-hover:mt-3 transition-all duration-300 ease-in-out">
                      {item.description}
                    </p>
                  </div>
                  
                  <div className="flex items-center text-[#CC0000] text-sm font-semibold mt-auto pt-4">
                    Read More <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
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
            <h2 className="text-4xl md:text-5xl font-['EB_Garamond'] font-bold text-[#051C2C]">
              Successful transactions
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                category: "MANUFACTURING",
                title: "Strategic acquisition expands manufacturer's capabilities",
                description: "A mid-market manufacturer identified a competitor with complementary capabilities. We supported the entire transaction—from valuation through integration—helping capture 95% of projected synergies within 18 months.",
                image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&q=80"
              },
              {
                category: "TECHNOLOGY",
                title: "Successful exit for SaaS founder",
                description: "A SaaS company founder was ready to exit. We prepared the company for sale, identified strategic buyers, and negotiated a transaction at 2x the initial offer—while ensuring the founder's team was protected.",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href="#" className="group block">
                  <div className="relative overflow-hidden rounded-lg mb-6">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0077B5] mb-3 block">
                    {item.category}
                  </span>
                  <h3 className="text-2xl font-['EB_Garamond'] font-bold text-[#051C2C] mb-4 group-hover:text-[#0077B5] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[#051C2C]/60 leading-relaxed">
                    {item.description}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Insights Section (F100) */}
      <section className="py-24 bg-[#f8f8f7]">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-between items-end mb-16"
          >
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0077B5] mb-6 block">
                Latest Insights
              </span>
              <h2 className="text-4xl md:text-5xl font-['EB_Garamond'] font-bold text-[#051C2C]">
                M&A thought leadership
              </h2>
            </div>
            <Link href="/insights">
              <Button variant="outline" className="border-[#051C2C]/20 text-[#051C2C] hover:bg-[#051C2C]/5 px-6 py-3">
                View all insights
              </Button>
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                category: "M&A",
                readTime: "6 min read",
                title: "The M&A playbook for mid-market companies",
                description: "A practical guide to navigating acquisitions when you don't have a dedicated corporate development team."
              },
              {
                category: "INTEGRATION",
                readTime: "5 min read",
                title: "Why most post-merger integrations fail",
                description: "Common pitfalls in PMI and how to avoid them through disciplined planning and execution."
              },
              {
                category: "VALUATION",
                readTime: "4 min read",
                title: "Beyond multiples: Valuing growth companies",
                description: "How to think about valuation when traditional metrics don't capture the full picture."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href="#" className="group block">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#0077B5]">{item.category}</span>
                    <span className="text-xs text-[#051C2C]/40">•</span>
                    <span className="text-xs text-[#051C2C]/40">{item.readTime}</span>
                  </div>
                  <h3 className="text-xl font-['EB_Garamond'] font-bold text-[#051C2C] mb-3 group-hover:text-[#0077B5] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[#051C2C]/60 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Capabilities Section with H100 */}
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
              Related Capabilities
            </span>
            <h2 className="text-4xl md:text-5xl font-['EB_Garamond'] font-bold text-[#051C2C]">
              Explore related capabilities
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {relatedCapabilities.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Link href={item.link}>
                  <div className="h-full min-h-[200px] p-8 bg-[#f8f8f7] border-l-4 border-l-transparent group-hover:border-l-[#CC0000] border border-gray-200 transition-all duration-300 flex flex-col">
                    <div className="flex-1">
                      <h3 className="text-2xl font-['EB_Garamond'] font-bold text-[#051C2C] leading-tight origin-top-left transition-all duration-300 group-hover:text-base group-hover:mb-2">
                        {item.title}
                      </h3>
                      
                      <p className="text-[#051C2C]/70 leading-relaxed text-sm max-h-0 overflow-hidden opacity-0 group-hover:max-h-[120px] group-hover:opacity-100 group-hover:mt-3 transition-all duration-300 ease-in-out">
                        {item.description}
                      </p>
                    </div>
                    
                    <div className="flex items-center text-[#CC0000] text-sm font-semibold mt-auto pt-4">
                      Learn More <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section (F100) */}
      <section className="py-24 bg-[#0077B5]">
        <div className="container px-4 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-['EB_Garamond'] font-bold text-white mb-6">
              Considering an M&A transaction?
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
              Let's discuss how we can help you navigate the complexities and maximize value.
            </p>
            <Link href="/contact">
              <Button className="bg-white hover:bg-gray-100 text-[#051C2C] px-10 py-6 text-lg font-semibold transition-all">
                Schedule a Consultation
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
