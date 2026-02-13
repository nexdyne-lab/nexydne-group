import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, ArrowLeft, DollarSign, Package, Clock, TrendingUp, CheckCircle2 } from 'lucide-react';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { BackToTop } from "@/components/BackToTop";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";

export default function WorkingCapitalOptimization() {
  return (
    <div className="min-h-screen bg-[#051C2C] text-white selection:bg-[#0077B5] selection:text-white">
      <SEO 
        title="Working Capital Optimization | NexDyne Technologies" 
        description="Learn how to unlock cash trapped in your balance sheet through strategic working capital management."
        canonical="/insights/working-capital-optimization"
      />
      <Navigation />
      
      {/* DZ10 Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#051C2C] via-[#051C2C]/70 to-[#051C2C]"></div>
        
        <div className="container relative z-10 px-4 md:px-12">
          <Breadcrumbs />
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0077B5] mb-6 block">Insight · Performance Improvement</span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight leading-[1.1] mb-4">
              <span className="text-[#0077B5]">Working Capital</span> Optimization
            </h1>
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-3xl">
              How to unlock cash trapped in your balance sheet through strategic working capital management and process improvement.
            </p>
            <div className="flex items-center gap-6 mt-8 text-sm text-white/60">
              <span className="flex items-center gap-2"><Clock className="w-4 h-4" />9 min read</span>
              <span>December 2024</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 bg-white text-[#051C2C]">
        <div className="container px-4 md:px-12 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="prose prose-lg max-w-none">
            
            <h2 className="text-3xl font-serif font-bold text-[#051C2C] mb-6">The Hidden Source of Cash</h2>
            <p className="text-[#051C2C]/80 leading-relaxed mb-6">
              Many organizations overlook one of the largest sources of internal cash: working capital. The cash tied up in inventory, receivables, and payables often represents 15-25% of revenue—a significant amount that could be funding growth, reducing debt, or returning value to shareholders.
            </p>
            <p className="text-[#051C2C]/70 leading-relaxed mb-8">
              Working capital optimization isn't about squeezing suppliers or neglecting customers. It's about eliminating inefficiency and aligning working capital levels with actual business needs. Done right, it releases cash while improving operations.
            </p>

            <h2 className="text-3xl font-serif font-bold text-[#051C2C] mb-6">The Three Levers of Working Capital</h2>
            
            <div className="space-y-8 mb-12">
              <div className="flex gap-6">
                <div className="flex-shrink-0"><div className="w-12 h-12 bg-[#0077B5] text-white rounded-full flex items-center justify-center"><Package className="w-6 h-6" /></div></div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-2">Inventory (Days Inventory Outstanding)</h3>
                  <p className="text-[#051C2C]/70 leading-relaxed">Inventory is often the largest working capital component and the one with the most opportunity. Excess inventory ties up cash, increases carrying costs, and creates obsolescence risk.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0"><div className="w-12 h-12 bg-[#0077B5] text-white rounded-full flex items-center justify-center"><DollarSign className="w-6 h-6" /></div></div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-2">Receivables (Days Sales Outstanding)</h3>
                  <p className="text-[#051C2C]/70 leading-relaxed">Every day of DSO represents cash that could be in your bank account. Improving collections and credit management accelerates cash flow without impacting customer relationships.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0"><div className="w-12 h-12 bg-[#0077B5] text-white rounded-full flex items-center justify-center"><Clock className="w-6 h-6" /></div></div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-2">Payables (Days Payables Outstanding)</h3>
                  <p className="text-[#051C2C]/70 leading-relaxed">Optimizing payment timing—not stretching suppliers unfairly—can improve cash position. The goal is to pay on time, not early, and to capture early payment discounts when economically attractive.</p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-[#051C2C]/5 rounded-xl mb-12">
              <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4 flex items-center gap-3"><TrendingUp className="w-6 h-6 text-[#0077B5]" />The Cash Conversion Cycle</h3>
              <p className="text-[#051C2C]/70 mb-4">The Cash Conversion Cycle (CCC) measures how long cash is tied up in working capital:</p>
              <div className="p-4 bg-white rounded-lg text-center font-mono text-[#051C2C]">
                CCC = DIO + DSO - DPO
              </div>
              <p className="text-[#051C2C]/70 mt-4">A lower CCC means faster cash conversion and less working capital required to operate the business.</p>
            </div>

            <h2 className="text-3xl font-serif font-bold text-[#051C2C] mb-6">Inventory Optimization Strategies</h2>
            <ul className="space-y-4 text-[#051C2C]/70 mb-8">
              <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-[#0077B5] flex-shrink-0 mt-0.5" /><span><strong className="text-[#051C2C]">SKU segmentation:</strong> Not all inventory is equal. Segment by velocity, variability, and value to set appropriate stocking levels.</span></li>
              <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-[#0077B5] flex-shrink-0 mt-0.5" /><span><strong className="text-[#051C2C]">Safety stock optimization:</strong> Right-size safety stock based on actual demand variability and service level requirements.</span></li>
              <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-[#0077B5] flex-shrink-0 mt-0.5" /><span><strong className="text-[#051C2C]">Demand planning:</strong> Improve forecast accuracy to reduce the need for buffer stock.</span></li>
              <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-[#0077B5] flex-shrink-0 mt-0.5" /><span><strong className="text-[#051C2C]">Lead time reduction:</strong> Work with suppliers to reduce lead times, enabling leaner inventory.</span></li>
            </ul>

            <h2 className="text-3xl font-serif font-bold text-[#051C2C] mb-6">Receivables Improvement Strategies</h2>
            <ul className="space-y-4 text-[#051C2C]/70 mb-8">
              <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-[#0077B5] flex-shrink-0 mt-0.5" /><span><strong className="text-[#051C2C]">Credit policy optimization:</strong> Set appropriate credit terms based on customer risk and relationship value.</span></li>
              <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-[#0077B5] flex-shrink-0 mt-0.5" /><span><strong className="text-[#051C2C]">Invoice accuracy:</strong> Reduce disputes by ensuring invoices are accurate and complete.</span></li>
              <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-[#0077B5] flex-shrink-0 mt-0.5" /><span><strong className="text-[#051C2C]">Collections process:</strong> Implement systematic dunning and escalation processes.</span></li>
              <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-[#0077B5] flex-shrink-0 mt-0.5" /><span><strong className="text-[#051C2C]">Electronic payments:</strong> Encourage customers to pay electronically to accelerate receipt.</span></li>
            </ul>

            <h2 className="text-3xl font-serif font-bold text-[#051C2C] mb-6">Implementation Considerations</h2>
            <div className="space-y-6 mb-12">
              <div className="p-6 bg-[#051C2C]/5 rounded-xl">
                <h4 className="text-lg font-serif font-bold text-[#051C2C] mb-2">Baseline and Target Setting</h4>
                <p className="text-[#051C2C]/70">Establish clear baselines and targets for each working capital component. Benchmark against industry peers to identify opportunity.</p>
              </div>
              <div className="p-6 bg-[#051C2C]/5 rounded-xl">
                <h4 className="text-lg font-serif font-bold text-[#051C2C] mb-2">Cross-Functional Alignment</h4>
                <p className="text-[#051C2C]/70">Working capital spans finance, operations, sales, and procurement. Success requires alignment across functions with shared metrics and incentives.</p>
              </div>
              <div className="p-6 bg-[#051C2C]/5 rounded-xl">
                <h4 className="text-lg font-serif font-bold text-[#051C2C] mb-2">Sustainability</h4>
                <p className="text-[#051C2C]/70">One-time improvements are easy; sustaining them is hard. Build working capital management into ongoing processes and performance management.</p>
              </div>
            </div>

            <div className="p-8 bg-[#0077B5] text-white rounded-xl mb-12">
              <h3 className="text-xl font-serif font-bold mb-4">The Bottom Line</h3>
              <p className="text-white/90 leading-relaxed">
                Working capital optimization is one of the highest-ROI initiatives available to most organizations. It releases cash without requiring revenue growth or cost cutting, and the improvements are often sustainable with proper process and governance. For organizations looking to fund growth, reduce debt, or improve returns, working capital should be a priority.
              </p>
            </div>

          </motion.div>
        </div>
      </article>

      {/* Related Insights */}
      <section className="py-24 md:py-32 bg-[#051C2C]">
        <div className="container px-4 md:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/60 mb-6 block">Related Insights</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">Continue reading</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
            {[
              { title: "Smart Cost Reduction", category: "Performance Improvement", description: "Strategic cost optimization that preserves value", link: "/insights/smart-cost-reduction" },
              { title: "Lean Operations at Scale", category: "Performance Improvement", description: "Applying lean principles to complex organizations", link: "/insights/lean-operations-scale" }
            ].map((item, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}>
                <Link href={item.link} className="group block h-full p-8 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                  <span className="text-xs font-bold text-[#0077B5] uppercase tracking-wider">{item.category}</span>
                  <h3 className="text-xl font-serif font-bold text-white mt-2 group-hover:text-[#0077B5] transition-colors">{item.title}</h3>
                  <p className="text-white/60 mt-2">{item.description}</p>
                  <span className="text-[#0077B5] text-sm font-semibold flex items-center gap-1 mt-4 group-hover:gap-2 transition-all">Read insight <ArrowRight className="w-3 h-3" /></span>
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
