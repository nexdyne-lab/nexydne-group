import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, ArrowLeft, TrendingUp, Target, Shield, BarChart3, CheckCircle2, Clock } from 'lucide-react';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { BackToTop } from "@/components/BackToTop";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";

export default function FinancialDisciplineGrowth() {
  return (
    <div className="min-h-screen bg-base text-white selection:bg-primary selection:text-white">
      <SEO 
        title="Financial Discipline as a Growth Enabler | NexDyne Technologies" 
        description="Learn how financial discipline accelerates growth rather than constraining it. A framework for building financial foundations that scale."
        canonical="/insights/financial-discipline-growth"
      />
      <Navigation />
      
      {/* DZ10 Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-base via-base/70 to-base"></div>
        
        <div className="container relative z-10 px-4 md:px-12">
          <Breadcrumbs />
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6 block">Insight · Fractional CFO Services</span>
            <h1 className="text-4xl md:text-6xl eb-garamond font-bold tracking-tight leading-[1.1] mb-4">
              Financial Discipline as a <span className="text-primary">Growth Enabler</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-3xl">
              How financial discipline accelerates growth rather than constraining it. Building the financial foundations that enable sustainable scaling.
            </p>
            <div className="flex items-center gap-6 mt-8 text-sm text-white/60">
              <span className="flex items-center gap-2"><Clock className="w-4 h-4" />8 min read</span>
              <span>December 2024</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 bg-white text-charcoal">
        <div className="container px-4 md:px-12 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="prose prose-lg max-w-none">
            
            <h2 className="text-3xl font-bold text-charcoal mb-6">The Discipline-Growth Paradox</h2>
            <p className="text-charcoal/80 leading-relaxed mb-6">
              Many entrepreneurs view financial discipline as a constraint on growth—a necessary evil that slows down the business. This couldn't be further from the truth. The fastest-growing companies are often the most financially disciplined, not despite their growth but because of it.
            </p>
            <p className="text-charcoal/70 leading-relaxed mb-8">
              Financial discipline isn't about saying no to everything. It's about saying yes to the right things—the investments that drive growth—while avoiding the distractions and waste that consume resources without creating value.
            </p>

            <h2 className="text-3xl font-bold text-charcoal mb-6">The Foundations of Financial Discipline</h2>
            
            <div className="space-y-8 mb-12">
              <div className="flex gap-6">
                <div className="flex-shrink-0"><div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center"><Target className="w-6 h-6" /></div></div>
                <div>
                  <h3 className="text-xl font-bold text-charcoal mb-2">Clear Financial Visibility</h3>
                  <p className="text-charcoal/70 leading-relaxed">You can't manage what you can't see. Financial discipline starts with accurate, timely financial reporting that gives leaders the information they need to make good decisions.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0"><div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center"><BarChart3 className="w-6 h-6" /></div></div>
                <div>
                  <h3 className="text-xl font-bold text-charcoal mb-2">Unit Economics Understanding</h3>
                  <p className="text-charcoal/70 leading-relaxed">Know your unit economics cold. What does it cost to acquire a customer? What's the lifetime value? What's the payback period? These metrics should guide every growth investment.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0"><div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center"><Shield className="w-6 h-6" /></div></div>
                <div>
                  <h3 className="text-xl font-bold text-charcoal mb-2">Cash Flow Management</h3>
                  <p className="text-charcoal/70 leading-relaxed">Cash is oxygen. Companies don't die from lack of profit—they die from lack of cash. Disciplined cash flow management ensures you can fund growth without running out of runway.</p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-base/5 rounded-xl mb-12">
              <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center gap-3"><TrendingUp className="w-6 h-6 text-primary" />The Rule of 40</h3>
              <p className="text-charcoal/70 mb-4">A useful benchmark for balancing growth and profitability:</p>
              <div className="p-4 bg-white rounded-lg text-center font-mono text-charcoal">
                Revenue Growth Rate + Profit Margin ≥ 40%
              </div>
              <p className="text-charcoal/70 mt-4">This framework acknowledges that high-growth companies may sacrifice profitability, but there should be limits. A company growing 50% can afford to lose 10%, but a company growing 10% should be profitable.</p>
            </div>

            <h2 className="text-3xl font-bold text-charcoal mb-6">How Discipline Enables Growth</h2>
            
            <div className="space-y-6 mb-12">
              <div className="p-6 bg-base/5 rounded-xl">
                <h4 className="text-lg font-bold text-charcoal mb-2">Better Resource Allocation</h4>
                <p className="text-charcoal/70">Financial discipline forces hard choices about where to invest. This focus means resources go to the highest-impact opportunities rather than being spread thin across too many initiatives.</p>
              </div>
              <div className="p-6 bg-base/5 rounded-xl">
                <h4 className="text-lg font-bold text-charcoal mb-2">Investor Confidence</h4>
                <p className="text-charcoal/70">Investors fund companies they trust. Financial discipline—demonstrated through accurate forecasting, clean books, and thoughtful capital allocation—builds the credibility that attracts capital.</p>
              </div>
              <div className="p-6 bg-base/5 rounded-xl">
                <h4 className="text-lg font-bold text-charcoal mb-2">Sustainable Scaling</h4>
                <p className="text-charcoal/70">Growth without discipline often leads to chaos—processes break, quality suffers, and culture erodes. Financial discipline provides the guardrails that enable sustainable scaling.</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-charcoal mb-6">Building Financial Discipline</h2>
            <ul className="space-y-4 text-charcoal/70 mb-8">
              <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span><strong className="text-charcoal">Implement monthly closes:</strong> Close your books within 10 days of month-end. This creates the rhythm and visibility needed for disciplined management.</span></li>
              <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span><strong className="text-charcoal">Build a rolling forecast:</strong> Replace annual budgets with rolling forecasts that adapt to changing conditions while maintaining accountability.</span></li>
              <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span><strong className="text-charcoal">Track leading indicators:</strong> Don't just measure results—track the leading indicators that predict future performance.</span></li>
              <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span><strong className="text-charcoal">Create spending guardrails:</strong> Establish clear approval thresholds and spending policies that empower teams while maintaining control.</span></li>
            </ul>

            <div className="p-8 bg-primary text-white rounded-xl mb-12">
              <h3 className="text-xl font-bold mb-4">The Bottom Line</h3>
              <p className="text-white/90 leading-relaxed">
                Financial discipline isn't the enemy of growth—it's the enabler. Companies that build strong financial foundations can grow faster and more sustainably than those that don't. The key is viewing discipline not as a constraint but as a competitive advantage that enables better decisions, attracts capital, and supports sustainable scaling.
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
              { title: "The CFO's Guide to Cash Flow", category: "Fractional CFO Services", description: "Mastering cash flow management for growth", link: "/insights/cfo-cash-flow-guide" },
              { title: "Investor-Ready Board Decks", category: "Fractional CFO Services", description: "Building board materials that impress", link: "/insights/investor-ready-board-decks" }
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
