import React, { useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { 
  ArrowRight, 
  ArrowLeft,
  TrendingDown,
  DollarSign,
  PieChart,
  Search,
  CheckCircle2,
  Scissors,
  BarChart3,
  RefreshCw
} from "lucide-react";
import { SEO } from "@/components/SEO";
import BainHoverCard from "@/components/BainHoverCard";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";

export default function CostOptimization() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <SEO 
        title="Technology Cost Optimization" 
        description="Right-size your tech spending. We identify waste, renegotiate contracts, and help you get more value from your existing investments."
        canonical="/solutions/enterprise-transformation/cost-optimization"
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
            <Link href="/solutions/enterprise-transformation" className="inline-flex items-center text-white/60 hover:text-white text-sm mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Technology
            </Link>
            
            <h1 className="text-5xl md:text-7xl eb-garamond font-bold tracking-tight text-white leading-[1.05] mb-4">
              Cost<br />
              <span className="text-[#0077B5]">Optimization</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-2xl mb-10">
              Right-size your tech spending. We identify waste, renegotiate contracts, and help you get more value from your existing investments.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button className="bg-white hover:bg-gray-200 text-black px-8 py-6 text-base font-semibold transition-all">
                  Schedule a Cost Review
                </Button>
              </Link>
              <Link href="/case-studies">
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
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2011&auto=format&fit=crop" 
              alt="Cost Optimization Analysis" 
              className="w-full h-auto rounded-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* At a Glance Section */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "25-40%", label: "typical cost reduction" },
              { value: "$2M+", label: "average savings found" },
              { value: "90 days", label: "to first savings" },
              { value: "50+", label: "optimizations delivered" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center md:text-left"
              >
                <div className="text-4xl md:text-5xl font-bold text-[#051C2C] mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8">
                Most growing companies are spending more on technology than they need to. Unused licenses, oversized infrastructure, duplicate tools, and unfavorable contracts quietly drain budgets—often without anyone noticing until cash gets tight.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                We help you find and eliminate technology waste without sacrificing capability. This isn't about cutting corners—it's about getting the same (or better) results for less money:
              </p>
              
              <div className="space-y-6 text-gray-700">
                <p>
                  <strong className="text-[#051C2C]">Visibility comes first:</strong> You can't optimize what you can't see. We start by mapping every technology expense—subscriptions, licenses, infrastructure, services—so you know exactly where your money goes.
                </p>
                <p>
                  <strong className="text-[#051C2C]">Right-size everything:</strong> Most companies over-provision. We analyze actual usage patterns and resize infrastructure, licenses, and subscriptions to match what you actually need.
                </p>
                <p>
                  <strong className="text-[#051C2C]">Negotiate smarter:</strong> Vendors expect you to accept their first offer. We bring market intelligence and negotiation expertise to get you better terms on renewals and new contracts.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How We Can Help - H100 Capability Cards */}
      <section className="py-24 bg-[#f8f8f7]">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0077B5] mb-6 block">
              How We Can Help
            </span>
            <h2 className="text-4xl md:text-5xl eb-garamond font-bold text-[#051C2C] mb-6">
              Our Cost Optimization Capabilities
            </h2>
            <p className="text-xl text-[#051C2C]/60 max-w-2xl">
              End-to-end cost optimization services from assessment to implementation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "SaaS Spend Management",
                description: "Unused seats, duplicate tools, and auto-renewed contracts you forgot about. We find and eliminate the waste across your entire SaaS portfolio."
              },
              {
                title: "Cloud Cost Optimization",
                description: "Oversized instances, idle resources, and missing reserved capacity discounts. We right-size your cloud spend across AWS, Azure, and GCP."
              },
              {
                title: "License Rationalization",
                description: "Software licenses you're paying for but not using. We audit, consolidate, and optimize your license portfolio for maximum value."
              },
              {
                title: "Vendor Contract Negotiation",
                description: "Unfavorable terms accepted without negotiation. We renegotiate renewals and benchmark against market rates to secure better deals."
              },
              {
                title: "FinOps Implementation",
                description: "Build sustainable cost governance with FinOps practices. We implement visibility tools, allocation models, and optimization workflows."
              },
              {
                title: "Technology Portfolio Review",
                description: "Identify redundant systems and consolidation opportunities. We help you rationalize your technology landscape for efficiency and cost savings."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <BainHoverCard title={item.title} description={item.description} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach Section (3-Column Consulting Format) */}
      <section id="process" className="py-20 bg-[#051C2C]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#00d4ff] mb-4 block">
              Our Approach
            </span>
            <h2 className="text-3xl md:text-5xl eb-garamond font-light text-white">
              Stop the bleeding, then build sustainable practices
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Find the hidden waste",
                description: "Most organizations don't know what they're spending on technology. We map every expense—subscriptions, licenses, infrastructure—and compare it against actual usage to find the waste."
              },
              {
                title: "Capture savings without pain",
                description: "We focus on optimizations that don't disrupt operations. Right-sizing, license consolidation, and contract renegotiation deliver real savings without touching critical systems."
              },
              {
                title: "Make savings stick",
                description: "One-time cleanups don't last. We implement governance frameworks, approval workflows, and monitoring dashboards that prevent waste from creeping back in."
              }
            ].map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <h3 className="text-xl font-bold text-white mb-4">{pillar.title}</h3>
                <p className="text-gray-300 leading-relaxed">{pillar.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/contact">
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-4 bg-transparent">
                Get in touch
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Wins Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0077B5] mb-4 block">
              Quick Wins
            </span>
            <h2 className="text-3xl md:text-4xl eb-garamond font-bold text-[#051C2C] mb-6">
              Savings you can capture in the first 90 days.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Unused License Cleanup",
                description: "Identify and eliminate licenses for employees who've left or tools that aren't being used.",
                savings: "10-20% of license spend"
              },
              {
                title: "Cloud Right-Sizing",
                description: "Downsize oversized instances and shut down idle resources that are running 24/7 for no reason.",
                savings: "20-35% of cloud spend"
              },
              {
                title: "Contract Renegotiation",
                description: "Renegotiate upcoming renewals with market benchmarks and competitive alternatives.",
                savings: "15-30% on renewals"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 border border-gray-200 hover:border-[#0077B5] transition-colors"
              >
                <h3 className="text-xl font-bold text-[#051C2C] mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{item.description}</p>
                <p className="text-[#0077B5] font-semibold">Typical savings: {item.savings}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl eb-garamond font-bold text-[#051C2C] mb-6">
              Ready to find hidden savings in your tech spend?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's start with a free assessment to identify your biggest optimization opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="px-8 py-4 bg-[#0077B5] text-white font-semibold rounded hover:bg-[#005a8c] transition-colors">
                  Get a Free Assessment
                </button>
              </Link>
              <Link href="/solutions/enterprise-transformation">
                <button className="px-8 py-4 border border-gray-300 text-[#051C2C] font-semibold rounded hover:bg-gray-100 transition-colors">
                  Explore All Technology Services
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
