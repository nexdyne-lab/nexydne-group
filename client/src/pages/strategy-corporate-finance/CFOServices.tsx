import { motion } from "framer-motion";
import { ArrowRight, Layers, BarChart3, Cog } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import BainHoverCard from "@/components/BainHoverCard";
import Navbar from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";

export default function CFOServices() {
  // Capabilities data for How We Can Help section
  const capabilities = [
    {
      title: "Strategic Financial Planning",
      description: "Long-term financial roadmaps aligned with your business strategy. Scenario planning, goal setting, and resource allocation."
    },
    {
      title: "Cash Flow Management",
      description: "Optimize working capital, improve collections, and ensure you always have runway. Real-time visibility into cash position."
    },
    {
      title: "Board & Investor Relations",
      description: "Professional board presentations, investor updates, and stakeholder communication that builds confidence."
    },
    {
      title: "Financial Reporting & KPIs",
      description: "Clear, actionable financial reports and dashboards. Track the metrics that matter for your business."
    },
    {
      title: "Fundraising Support",
      description: "Prepare for funding rounds with financial models, due diligence packages, and investor pitch support."
    },
    {
      title: "Financial Systems & Processes",
      description: "Build scalable financial infrastructure. Implement controls, policies, and systems that grow with you."
    }
  ];

  // Related capabilities data
  const relatedCapabilities = [
    {
      title: "Financial Planning & Analysis",
      description: "Turn data into decisions. Robust budgeting, forecasting, and variance analysis processes that give you clear visibility into performance.",
      link: "/capabilities/strategy-corporate-finance/fpa"
    },
    {
      title: "Capital Raising & Investment",
      description: "Prepare for your next funding round with confidence. Valuation, pitch deck creation, and due diligence preparation.",
      link: "/capabilities/strategy-corporate-finance/capital-raising"
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
        title="Fractional CFO Services" 
        description="Access high-level financial leadership without the full-time cost. Strategic financial planning, cash flow management, and board-level reporting for growing SMEs."
        canonical="/capabilities/strategy-corporate-finance/cfo-services"
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
              Fractional CFO Services
            </h1>
            
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-2xl mb-10">
              Access high-level financial leadership without the full-time cost. Strategic financial planning, cash flow management, and board-level reporting tailored for growing SMEs.
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
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80" 
              alt="Fractional CFO Services" 
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
            className="text-2xl font-bold text-[#051C2C] mb-12"
          >
            Our Experience & Impact
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { metric: "60%", label: "cost savings vs full-time CFO while maintaining executive-level expertise" },
              { metric: "100+", label: "SMEs supported with fractional CFO services across diverse industries" },
              { metric: "30%", label: "average improvement in cash flow management and working capital" }
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
              As your business scales, the financial complexity grows exponentially. You need sophisticated financial planning, investor relations, cash flow management, and strategic guidance—but hiring a full-time CFO may not be feasible or necessary at your current stage.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Our Fractional CFO service bridges this gap, providing you with experienced financial leadership on a flexible, part-time basis. You get the strategic insight and operational support of a seasoned CFO, tailored to your specific needs and budget.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Whether you're preparing for a funding round, navigating a growth phase, or building financial infrastructure, our fractional CFOs become an extension of your leadership team. We bring the same rigor and expertise as a full-time executive, with the flexibility to scale engagement as your needs evolve.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              The most successful growing companies share a common trait: they invest in financial leadership before they think they need it. This proactive approach ensures they have the systems, controls, and strategic clarity to capitalize on opportunities when they arise.
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
              Flexible financial leadership
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Advisory Model",
                description: "8-16 hours/month of strategic guidance and oversight. Ideal for businesses with capable finance teams needing senior leadership for key decisions and board support."
              },
              {
                title: "Operational Model",
                description: "20-40 hours/month of hands-on financial leadership. Perfect for businesses building or strengthening their finance function with active management oversight."
              },
              {
                title: "Interim Model",
                description: "Full-time coverage for 3-6 months. For transitions, special projects, or critical periods requiring dedicated executive presence and change management."
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
              Our CFO Service Capabilities
            </h2>
            <p className="text-xl text-[#051C2C]/60 max-w-2xl">
              Comprehensive CFO services that scale with your business needs.
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
              Driving financial transformation
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                category: "TECHNOLOGY",
                title: "Fractional CFO helps SaaS startup secure $5M Series A",
                description: "A fast-growing SaaS company needed CFO-level expertise to prepare for their Series A. Our fractional CFO built the financial model, prepared due diligence materials, and supported investor negotiations. Result: $5M raised at a 40% higher valuation than initial estimates.",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
              },
              {
                category: "MANUFACTURING",
                title: "Cash flow transformation saves family business from crisis",
                description: "A third-generation manufacturer was facing cash flow challenges that threatened operations. Our fractional CFO implemented working capital improvements, renegotiated supplier terms, and established cash forecasting. Result: 45% improvement in cash position within 6 months.",
                image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80"
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
                category: "FINANCIAL LEADERSHIP",
                readTime: "5 min read",
                title: "When to hire a fractional CFO: 7 signs your business is ready",
                description: "Discover the key indicators that suggest your growing business would benefit from fractional CFO services."
              },
              {
                category: "CASH MANAGEMENT",
                readTime: "4 min read",
                title: "Cash flow forecasting: A practical guide for SMEs",
                description: "Learn how to build a 13-week cash flow forecast that gives you visibility and control over your financial runway."
              },
              {
                category: "FUNDRAISING",
                readTime: "6 min read",
                title: "Preparing for due diligence: What investors really want to see",
                description: "A comprehensive checklist of financial documents and metrics that investors expect during the due diligence process."
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
              Ready for CFO-level financial leadership?
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
              Let's discuss how our fractional CFO services can accelerate your growth and strengthen your financial foundation.
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
