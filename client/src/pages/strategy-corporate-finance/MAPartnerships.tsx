import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import BainHoverCard from "@/components/BainHoverCard";
import Navbar from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";

export default function MAPartnerships() {
  // Capabilities data for How We Can Help section
  const capabilities = [
    {
      title: "M&A Strategy",
      description: "Define your acquisition strategy aligned with corporate objectives. Identify target profiles, set valuation parameters, and develop integration playbooks."
    },
    {
      title: "Target Identification",
      description: "Systematic search for acquisition targets that fit your strategic criteria. Market mapping, competitor analysis, and opportunity screening."
    },
    {
      title: "Due Diligence",
      description: "Comprehensive financial, operational, and commercial due diligence. Identify risks, validate assumptions, and uncover hidden value."
    },
    {
      title: "Deal Structuring",
      description: "Structure transactions that protect your interests and optimize outcomes. Negotiate terms, manage contingencies, and close successfully."
    },
    {
      title: "Post-Merger Integration",
      description: "Capture the value you paid for. Integration planning, synergy realization, and change management to ensure successful combinations."
    },
    {
      title: "Strategic Partnerships",
      description: "Build alliances that accelerate growth. Joint ventures, licensing agreements, and strategic partnerships structured for mutual success."
    }
  ];

  // Related capabilities data
  const relatedCapabilities = [
    {
      title: "Capital Raising & Investment",
      description: "Secure the funding you need to grow. Access debt, equity, and alternative financing sources on optimal terms.",
      link: "/capabilities/strategy-corporate-finance/capital-raising"
    },
    {
      title: "Business Strategy & Transformation",
      description: "Define your path to victory. Clarify your vision, identify growth engines, and restructure for scalability.",
      link: "/capabilities/strategy-corporate-finance/business-strategy"
    },
    {
      title: "Fractional CFO Services",
      description: "Access high-level financial leadership without the full-time cost. Strategic financial planning and board-level reporting.",
      link: "/capabilities/strategy-corporate-finance/cfo-services"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-[#051C2C] selection:bg-[#0077B5] selection:text-white">
      <SEO 
        title="M&A & Strategic Partnerships" 
        description="Navigate complex transactions with confidence. From target identification to post-merger integration, we guide you through every step."
        canonical="/capabilities/strategy-corporate-finance/ma-partnerships"
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
              Navigate complex transactions with confidence. From target identification to post-merger integration, we guide you through every step of your M&A journey.
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
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80" 
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
              { metric: "50+", label: "M&A transactions completed for mid-market companies across diverse industries" },
              { metric: "$750M+", label: "total transaction value advised on buy-side and sell-side engagements" },
              { metric: "85%", label: "of our acquisitions achieve or exceed projected synergy targets within 24 months" }
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
              Mergers and acquisitions can be transformative—accelerating growth, expanding capabilities, and creating competitive advantages that would take years to build organically. But they're also complex, risky, and often fail to deliver expected value.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              The statistics are sobering: studies consistently show that 50-70% of M&A transactions fail to create the anticipated value. The reasons vary—overpaying, cultural clashes, integration failures, or simply acquiring the wrong target—but the result is the same: destroyed value and distracted management.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              We help you beat those odds. Our approach combines rigorous strategic analysis with practical transaction experience. We help you define what you're looking for, find the right targets, conduct thorough due diligence, negotiate favorable terms, and—critically—integrate successfully.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Whether you're a first-time acquirer or a seasoned dealmaker, we provide the expertise and support you need to execute transactions that create lasting value.
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
              Executing successful transactions
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Strategy and targeting",
                description: "We define your M&A strategy, develop target criteria, and systematically identify opportunities that align with your strategic objectives and value creation thesis."
              },
              {
                title: "Diligence and valuation",
                description: "We conduct comprehensive due diligence across financial, operational, and commercial dimensions. We build robust valuation models and identify deal-breakers early."
              },
              {
                title: "Execution and integration",
                description: "We support negotiations, manage the transaction process, and develop integration plans that capture synergies and minimize disruption to ongoing operations."
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
              End-to-end M&A support from strategy through integration, tailored for mid-market transactions.
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
                className="h-full"
              >
                <BainHoverCard title={item.title} description={item.description} link="#" />
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
                category: "ACQUISITION",
                title: "Strategic acquisition doubles market share for regional distributor",
                description: "A regional distributor sought to expand geographically through acquisition. We identified targets, led due diligence, and negotiated a successful acquisition. Result: Market share doubled, $5M in annual synergies realized within 18 months.",
                image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80"
              },
              {
                category: "PARTNERSHIP",
                title: "Strategic partnership accelerates technology company's growth",
                description: "A technology company needed access to enterprise sales channels. We structured a strategic partnership with a larger player that provided distribution while preserving independence. Result: Enterprise revenue grew 300% in two years.",
                image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
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
                <Link href="/capabilities/strategy-corporate-finance/case-studies" className="block">
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
                  <h3 className="text-xl font-['EB_Garamond'] font-bold text-[#051C2C] mb-4 group-hover:text-[#0077B5] transition-colors leading-tight">
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

      {/* Latest Insights Section (F100) */}
      <section className="py-24 bg-[#f8f8f7]">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-end md:justify-between mb-16"
          >
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0077B5] mb-6 block">
                Insights
              </span>
              <h2 className="text-4xl md:text-5xl font-['EB_Garamond'] font-bold text-[#051C2C]">
                Latest Insights
              </h2>
            </div>
            <Link href="/insights">
              <Button variant="outline" className="mt-6 md:mt-0 border-[#051C2C]/20 text-[#051C2C] hover:bg-[#051C2C]/5">
                View all insights
              </Button>
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                category: "M&A",
                readTime: "7 min read",
                title: "The mid-market M&A playbook: Lessons from successful acquirers",
                description: "What separates successful acquirers from the rest? Key practices that drive M&A success in the mid-market."
              },
              {
                category: "INTEGRATION",
                readTime: "6 min read",
                title: "Post-merger integration: The first 100 days",
                description: "A practical guide to the critical early phase of integration that determines long-term success."
              },
              {
                category: "STRATEGY",
                readTime: "5 min read",
                title: "Build vs. buy vs. partner: A framework for growth decisions",
                description: "How to evaluate organic growth, acquisitions, and partnerships as paths to strategic objectives."
              }
            ].map((insight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Link href="/insights" className="block">
                  <div className="bg-white p-8 rounded-xl h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs font-bold text-[#0077B5] uppercase tracking-wider">{insight.category}</span>
                      <span className="text-xs text-[#051C2C]/40">•</span>
                      <span className="text-xs text-[#051C2C]/40">{insight.readTime}</span>
                    </div>
                    <h3 className="text-xl font-['EB_Garamond'] font-bold text-[#051C2C] mb-4 group-hover:text-[#0077B5] transition-colors leading-tight">
                      {insight.title}
                    </h3>
                    <p className="text-[#051C2C]/60 text-sm leading-relaxed mb-6">
                      {insight.description}
                    </p>
                    <div className="flex items-center text-[#0077B5] text-sm font-semibold group-hover:translate-x-2 transition-transform duration-300">
                      Read article <ArrowRight className="ml-2 w-4 h-4" />
                    </div>
                  </div>
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
            <h2 className="text-4xl md:text-5xl font-['EB_Garamond'] font-bold text-[#051C2C] mb-6">
              Explore related capabilities
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {relatedCapabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                <BainHoverCard title={capability.title} description={capability.description} link={capability.link} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Blue Background (F100) */}
      <section className="py-24 bg-[#0077B5]">
        <div className="container px-4 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-['EB_Garamond'] font-bold text-white mb-6">
              Ready to explore M&A opportunities?
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
              Let's discuss how acquisitions or partnerships can accelerate your strategic objectives.
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
