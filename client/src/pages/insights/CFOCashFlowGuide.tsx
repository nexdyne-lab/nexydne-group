import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, ArrowLeft, DollarSign, TrendingUp, AlertTriangle, BarChart3, CheckCircle2, Clock } from 'lucide-react';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { BackToTop } from "@/components/BackToTop";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";

export default function CFOCashFlowGuide() {
  return (
    <div className="min-h-screen bg-base text-white selection:bg-primary selection:text-white">
      <SEO 
        title="The CFO's Guide to Cash Flow Management | NexDyne Technologies" 
        description="Master cash flow management with this comprehensive guide. Learn forecasting techniques, working capital optimization, and crisis management strategies."
        canonical="/insights/cfo-cash-flow-guide"
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
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-4">
              The CFO's Guide to <span className="text-primary">Cash Flow</span> Management
            </h1>
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-3xl">
              Master cash flow management with proven techniques for forecasting, working capital optimization, and navigating cash crunches.
            </p>
            <div className="flex items-center gap-6 mt-8 text-sm text-white/60">
              <span className="flex items-center gap-2"><Clock className="w-4 h-4" />12 min read</span>
              <span>December 2024</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 bg-white text-charcoal">
        <div className="container px-4 md:px-12 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="prose prose-lg max-w-none">
            
            <h2 className="text-3xl font-bold text-charcoal mb-6">Cash Is King—And Queen</h2>
            <p className="text-charcoal/80 leading-relaxed mb-6">
              Profitable companies go bankrupt every year. Not because they lack customers or revenue, but because they run out of cash. Cash flow management is perhaps the most critical responsibility of any CFO, yet it's often underappreciated until a crisis hits.
            </p>
            <p className="text-charcoal/70 leading-relaxed mb-8">
              This guide provides a comprehensive framework for managing cash flow—from building accurate forecasts to optimizing working capital to navigating cash crunches when they occur.
            </p>

            <h2 className="text-3xl font-bold text-charcoal mb-6">Building a Cash Flow Forecast</h2>
            
            <div className="p-8 bg-base/5 rounded-xl mb-12">
              <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center gap-3"><BarChart3 className="w-6 h-6 text-primary" />The 13-Week Cash Flow Model</h3>
              <p className="text-charcoal/70 mb-4">The gold standard for cash flow forecasting is the 13-week rolling forecast. This provides enough visibility to manage short-term liquidity while being detailed enough to be accurate.</p>
              <ul className="space-y-3 text-charcoal/70">
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span><strong className="text-charcoal">Week 1-4:</strong> Detailed, transaction-level forecast based on known commitments</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span><strong className="text-charcoal">Week 5-8:</strong> Category-level forecast based on patterns and expectations</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span><strong className="text-charcoal">Week 9-13:</strong> High-level forecast based on business drivers</span></li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-charcoal mb-6">Cash Flow Optimization Levers</h2>
            
            <div className="space-y-8 mb-12">
              <div className="flex gap-6">
                <div className="flex-shrink-0"><div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center"><DollarSign className="w-6 h-6" /></div></div>
                <div>
                  <h3 className="text-xl font-bold text-charcoal mb-2">Accelerate Receivables</h3>
                  <p className="text-charcoal/70 leading-relaxed">Every day of DSO is cash you're lending to customers. Tighten credit terms, invoice promptly, follow up aggressively, and consider early payment discounts or factoring for large receivables.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0"><div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center"><TrendingUp className="w-6 h-6" /></div></div>
                <div>
                  <h3 className="text-xl font-bold text-charcoal mb-2">Optimize Inventory</h3>
                  <p className="text-charcoal/70 leading-relaxed">Inventory is cash sitting on shelves. Right-size safety stock, improve demand forecasting, and work with suppliers to reduce lead times. Consider consignment or vendor-managed inventory.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0"><div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center"><AlertTriangle className="w-6 h-6" /></div></div>
                <div>
                  <h3 className="text-xl font-bold text-charcoal mb-2">Manage Payables Strategically</h3>
                  <p className="text-charcoal/70 leading-relaxed">Pay on time, not early—unless early payment discounts make economic sense. Negotiate extended terms with strategic suppliers, but never damage relationships by stretching payments unfairly.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-charcoal mb-6">Cash Flow Warning Signs</h2>
            <ul className="space-y-4 text-charcoal/70 mb-8">
              <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span><strong className="text-charcoal">Growing receivables:</strong> DSO increasing faster than revenue growth signals collection problems.</span></li>
              <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span><strong className="text-charcoal">Inventory buildup:</strong> Rising inventory without corresponding sales growth ties up cash.</span></li>
              <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span><strong className="text-charcoal">Declining margins:</strong> Shrinking gross margins mean less cash generated from operations.</span></li>
              <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span><strong className="text-charcoal">Customer concentration:</strong> Heavy reliance on a few customers creates cash flow risk.</span></li>
            </ul>

            <h2 className="text-3xl font-bold text-charcoal mb-6">Navigating a Cash Crunch</h2>
            <div className="space-y-6 mb-12">
              <div className="p-6 bg-base/5 rounded-xl">
                <h4 className="text-lg font-bold text-charcoal mb-2">Immediate Actions (Days 1-7)</h4>
                <p className="text-charcoal/70">Freeze discretionary spending, accelerate collections, delay non-critical payables, and assess available credit lines. Get accurate visibility into your cash position.</p>
              </div>
              <div className="p-6 bg-base/5 rounded-xl">
                <h4 className="text-lg font-bold text-charcoal mb-2">Short-Term Actions (Weeks 2-4)</h4>
                <p className="text-charcoal/70">Negotiate payment terms with key suppliers, explore factoring or asset-based lending, consider sale-leaseback of equipment, and communicate proactively with stakeholders.</p>
              </div>
              <div className="p-6 bg-base/5 rounded-xl">
                <h4 className="text-lg font-bold text-charcoal mb-2">Medium-Term Actions (Month 2+)</h4>
                <p className="text-charcoal/70">Restructure operations to reduce cash burn, explore equity or debt financing, consider strategic alternatives, and build systems to prevent future crunches.</p>
              </div>
            </div>

            <div className="p-8 bg-primary text-white rounded-xl mb-12">
              <h3 className="text-xl font-bold mb-4">The Bottom Line</h3>
              <p className="text-white/90 leading-relaxed">
                Cash flow management is a discipline, not a crisis response. The best CFOs build robust forecasting capabilities, optimize working capital continuously, and maintain the liquidity buffers needed to weather unexpected storms. Start building these capabilities before you need them—because by the time you need them, it may be too late.
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
              { title: "Financial Discipline as a Growth Enabler", category: "Fractional CFO Services", description: "How discipline accelerates growth", link: "/insights/financial-discipline-growth" },
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
