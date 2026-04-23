import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, ArrowLeft, TrendingDown, Target, Scissors, Shield, CheckCircle2, Clock } from 'lucide-react';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { BackToTop } from "@/components/BackToTop";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";

export default function SmartCostReduction() {
  return (
    <div className="min-h-screen bg-base text-white selection:bg-primary selection:text-white">
      <SEO 
        title="Smart Cost Reduction: Beyond the Cuts | NexDyne Technologies" 
        description="Learn how to reduce costs strategically without damaging your business. A framework for sustainable cost optimization."
        canonical="/insights/smart-cost-reduction"
      />
      <Navigation />
      
      {/* DZ10 Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-base via-base/70 to-base"></div>
        
        <div className="container relative z-10 px-4 md:px-12">
          <Breadcrumbs />
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6 block">Insight · Performance Improvement</span>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-4">
              Smart Cost Reduction: <span className="text-primary">Beyond the Cuts</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-3xl">
              How to reduce costs strategically without damaging your business. A framework for sustainable cost optimization that preserves competitive advantage.
            </p>
            <div className="flex items-center gap-6 mt-8 text-sm text-white/60">
              <span className="flex items-center gap-2"><Clock className="w-4 h-4" />10 min read</span>
              <span>December 2024</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 bg-white text-charcoal">
        <div className="container px-4 md:px-12 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="prose prose-lg max-w-none">
            
            <h2 className="text-3xl font-bold text-charcoal mb-6">The Cost Reduction Paradox</h2>
            <p className="text-charcoal/80 leading-relaxed mb-6">
              Most cost reduction efforts fail. Not because they don't cut costs—they often do—but because the cuts damage the business in ways that ultimately cost more than they save. Revenue declines, quality suffers, key talent leaves, and the organization ends up worse off than before.
            </p>
            <p className="text-charcoal/70 leading-relaxed mb-8">
              Smart cost reduction is different. It focuses on eliminating waste and inefficiency while preserving—or even enhancing—the capabilities that drive competitive advantage. This article provides a framework for cost reduction that creates sustainable value.
            </p>

            <h2 className="text-3xl font-bold text-charcoal mb-6">The Strategic Cost Framework</h2>
            
            <div className="p-8 bg-base/5 rounded-xl mb-12">
              <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center gap-3"><Target className="w-6 h-6 text-primary" />Four Categories of Costs</h3>
              <div className="space-y-4 text-charcoal/70">
                <p><strong className="text-charcoal">Strategic costs:</strong> Investments that create competitive advantage. Protect and potentially increase these.</p>
                <p><strong className="text-charcoal">Essential costs:</strong> Required to operate the business but don't differentiate. Optimize for efficiency.</p>
                <p><strong className="text-charcoal">Discretionary costs:</strong> Nice-to-have but not essential. Evaluate ROI and reduce where appropriate.</p>
                <p><strong className="text-charcoal">Waste:</strong> Costs that add no value. Eliminate aggressively.</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-charcoal mb-6">Principles of Smart Cost Reduction</h2>
            
            <div className="space-y-8 mb-12">
              <div className="flex gap-6">
                <div className="flex-shrink-0"><div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center"><Target className="w-6 h-6" /></div></div>
                <div>
                  <h3 className="text-xl font-bold text-charcoal mb-2">Start with Strategy</h3>
                  <p className="text-charcoal/70 leading-relaxed">Before cutting costs, clarify what capabilities are essential to your competitive advantage. Cost reduction should reinforce strategy, not undermine it.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0"><div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center"><TrendingDown className="w-6 h-6" /></div></div>
                <div>
                  <h3 className="text-xl font-bold text-charcoal mb-2">Focus on Root Causes</h3>
                  <p className="text-charcoal/70 leading-relaxed">Symptoms are easy to cut; root causes are hard to address. Sustainable cost reduction requires understanding why costs exist and addressing underlying drivers.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0"><div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center"><Shield className="w-6 h-6" /></div></div>
                <div>
                  <h3 className="text-xl font-bold text-charcoal mb-2">Protect Revenue</h3>
                  <p className="text-charcoal/70 leading-relaxed">The fastest way to destroy value is to cut costs that drive revenue. Ensure cost reduction efforts don't damage customer relationships, product quality, or sales effectiveness.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-charcoal mb-6">High-Impact Cost Reduction Levers</h2>
            
            <div className="space-y-6 mb-12">
              <div className="p-6 bg-base/5 rounded-xl">
                <h4 className="text-lg font-bold text-charcoal mb-2 flex items-center gap-2"><Scissors className="w-5 h-5 text-primary" />Process Optimization</h4>
                <p className="text-charcoal/70">Eliminate waste, reduce variation, and automate repetitive tasks. Often delivers 15-30% cost reduction in targeted processes without reducing capability.</p>
              </div>
              <div className="p-6 bg-base/5 rounded-xl">
                <h4 className="text-lg font-bold text-charcoal mb-2">Strategic Sourcing</h4>
                <p className="text-charcoal/70">Consolidate spend, negotiate better terms, and optimize the supplier base. Typically delivers 10-20% savings on addressable spend categories.</p>
              </div>
              <div className="p-6 bg-base/5 rounded-xl">
                <h4 className="text-lg font-bold text-charcoal mb-2">Organizational Simplification</h4>
                <p className="text-charcoal/70">Reduce layers, eliminate redundancy, and clarify decision rights. Can reduce overhead costs by 20-40% while improving agility.</p>
              </div>
              <div className="p-6 bg-base/5 rounded-xl">
                <h4 className="text-lg font-bold text-charcoal mb-2">Portfolio Rationalization</h4>
                <p className="text-charcoal/70">Exit unprofitable products, customers, or markets. Frees resources for higher-value activities and simplifies operations.</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-charcoal mb-6">Common Mistakes to Avoid</h2>
            <ul className="space-y-4 text-charcoal/70 mb-8">
              <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span><strong className="text-charcoal">Across-the-board cuts:</strong> Treating all costs equally ignores strategic importance and often damages high-value activities.</span></li>
              <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span><strong className="text-charcoal">Cutting too deep:</strong> Aggressive cuts that damage capability often cost more to repair than they save.</span></li>
              <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span><strong className="text-charcoal">Ignoring implementation:</strong> Announcing cuts is easy; actually capturing savings requires sustained effort and tracking.</span></li>
              <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span><strong className="text-charcoal">Neglecting culture:</strong> Cost reduction done poorly damages morale and trust. Communication and change management matter.</span></li>
            </ul>

            <div className="p-8 bg-primary text-white rounded-xl mb-12">
              <h3 className="text-xl font-bold mb-4">The Bottom Line</h3>
              <p className="text-white/90 leading-relaxed">
                Smart cost reduction is strategic, not tactical. It requires understanding which costs create value and which don't, then systematically eliminating waste while protecting competitive advantage. Done right, cost reduction strengthens the business; done wrong, it destroys value. The difference is in the approach.
              </p>
            </div>

          </motion.div>
        </div>
      </article>

      {/* Related Insights */}
      <section className="py-24 md:py-32 bg-base">
        <div className="container px-4 md:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/60 mb-6 block">Related Insights</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white">Continue reading</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
            {[
              { title: "Working Capital Optimization", category: "Performance Improvement", description: "Unlock cash trapped in your balance sheet", link: "/insights/working-capital-optimization" },
              { title: "Lean Operations at Scale", category: "Performance Improvement", description: "Applying lean principles to complex organizations", link: "/insights/lean-operations-scale" }
            ].map((item, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}>
                <Link href={item.link} className="group block h-full p-8 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                  <span className="text-xs font-bold text-primary uppercase tracking-wider">{item.category}</span>
                  <h3 className="text-xl font-bold text-white mt-2 group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-white/60 mt-2">{item.description}</p>
                  <span className="text-primary text-sm font-semibold flex items-center gap-1 mt-4 group-hover:gap-2 transition-all">Read insight <ArrowRight className="w-3 h-3" /></span>
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-16">
            <Link href="/insights"><Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-base font-semibold transition-all bg-transparent"><ArrowLeft className="w-4 h-4 mr-2" />Back to all insights</Button></Link>
          </div>
        </div>
      </section>

      <BackToTop />
      <Footer />
    </div>
  );
}
