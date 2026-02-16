import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import BainHoverCard from "@/components/BainHoverCard";
import Navbar from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";

export default function CapitalRaising() {
  // Capabilities data for How We Can Help section
  const capabilities = [
    {
      title: "Equity Financing",
      description: "Raise growth capital through private equity, venture capital, or strategic investors. We help you find the right partners and structure optimal deals."
    },
    {
      title: "Debt Financing",
      description: "Access bank loans, asset-based lending, and alternative debt structures. We negotiate terms that preserve flexibility and minimize cost of capital."
    },
    {
      title: "Investment Readiness",
      description: "Prepare your business for investor scrutiny. Financial clean-up, business plan development, and pitch deck creation that resonates."
    },
    {
      title: "Investor Relations",
      description: "Build and maintain relationships with current and prospective investors. Regular reporting, communication strategies, and stakeholder management."
    },
    {
      title: "Working Capital Optimization",
      description: "Unlock cash trapped in your business. Improve receivables, manage payables, and optimize inventory to reduce external funding needs."
    },
    {
      title: "Grant & Incentive Programs",
      description: "Access non-dilutive funding through government grants, tax incentives, and development programs. We identify and help you secure available opportunities."
    }
  ];

  // Related capabilities data
  const relatedCapabilities = [
    {
      title: "M&A & Strategic Partnerships",
      description: "Navigate complex transactions with confidence. From target identification to post-merger integration, we guide you through every step.",
      link: "/capabilities/strategy-corporate-finance/ma-partnerships"
    },
    {
      title: "Fractional CFO Services",
      description: "Access high-level financial leadership without the full-time cost. Strategic financial planning and board-level reporting.",
      link: "/capabilities/strategy-corporate-finance/cfo-services"
    },
    {
      title: "Business Strategy & Transformation",
      description: "Define your path to victory. Clarify your vision, identify growth engines, and restructure for scalability.",
      link: "/capabilities/strategy-corporate-finance/business-strategy"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-[#051C2C] selection:bg-[#0077B5] selection:text-white">
      <SEO 
        title="Capital Raising & Investment" 
        description="Secure the funding you need to grow. We help you access debt, equity, and alternative financing sources on optimal terms."
        canonical="/capabilities/strategy-corporate-finance/capital-raising"
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
              Capital Raising & Investment
            </h1>
            
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-2xl mb-10">
              Secure the funding you need to grow. We help you access debt, equity, and alternative financing sources on optimal terms that align with your strategic objectives.
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
              src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&q=80" 
              alt="Capital Raising & Investment" 
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
              { metric: "$500M+", label: "capital raised for clients across equity, debt, and alternative financing structures" },
              { metric: "75+", label: "successful fundraising transactions completed for mid-market companies" },
              { metric: "30%", label: "average improvement in terms achieved versus initial offers through our negotiation" }
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
              Access to capital is the fuel that powers growth. Whether you're expanding into new markets, acquiring competitors, investing in technology, or simply strengthening your balance sheet, the right financing structure can make the difference between success and stagnation.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Yet raising capital is complex. The landscape of funding options has never been more diverse—from traditional bank loans to private equity, venture debt to revenue-based financing. Each option comes with its own trade-offs in terms of cost, control, and flexibility.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              We help you navigate this complexity. Our approach starts with understanding your strategic objectives, then identifying the funding sources and structures that best align with your goals. We prepare you for investor scrutiny, manage the process, and negotiate terms that protect your interests.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              The goal isn't just to raise capital—it's to raise the right capital on the right terms. Capital that enables your strategy without compromising your flexibility or diluting your ownership more than necessary.
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
              Securing optimal financing
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Assess and strategize",
                description: "We evaluate your capital needs, assess your investment readiness, and develop a financing strategy that aligns with your business objectives and risk tolerance."
              },
              {
                title: "Prepare and position",
                description: "We prepare compelling investment materials, clean up financials, and position your business to attract the right investors and lenders on favorable terms."
              },
              {
                title: "Execute and close",
                description: "We manage the fundraising process, facilitate due diligence, negotiate terms, and guide you through closing to ensure a successful transaction."
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
              Our Capital Raising Capabilities
            </h2>
            <p className="text-xl text-[#051C2C]/60 max-w-2xl">
              Comprehensive capital raising services that help you access the funding you need on optimal terms.
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
              Successful capital raises
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                category: "MANUFACTURING",
                title: "Growth equity raise enables manufacturer to expand capacity",
                description: "A mid-market manufacturer needed capital to build a new production facility. We positioned the company for growth equity, ran a competitive process, and secured $25M at favorable terms. Result: New facility operational within 18 months, revenue doubled within 3 years.",
                image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"
              },
              {
                category: "TECHNOLOGY",
                title: "Debt refinancing reduces cost of capital for SaaS company",
                description: "A growing SaaS company was over-reliant on expensive venture debt. We restructured their capital stack, securing a senior credit facility at significantly lower rates. Result: $2M annual interest savings, improved cash flow for product investment.",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
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
                category: "CAPITAL RAISING",
                readTime: "6 min read",
                title: "Equity vs. debt: Choosing the right capital structure for growth",
                description: "A framework for evaluating financing options based on your growth stage, risk profile, and strategic objectives."
              },
              {
                category: "INVESTMENT",
                readTime: "5 min read",
                title: "What investors look for: Preparing for due diligence",
                description: "Key areas investors scrutinize and how to prepare your business for a successful fundraising process."
              },
              {
                category: "FINANCING",
                readTime: "4 min read",
                title: "Alternative financing options for mid-market companies",
                description: "Beyond banks and PE: exploring revenue-based financing, asset-based lending, and other creative structures."
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
              Ready to raise capital for growth?
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
              Let's discuss how we can help you access the funding you need on optimal terms.
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
