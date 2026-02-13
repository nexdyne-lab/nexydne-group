import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, ArrowLeft, Briefcase, Target, BarChart3, Layers, CheckCircle2, Clock } from 'lucide-react';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { BackToTop } from "@/components/BackToTop";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";

export default function PortfolioManagement() {
  return (
    <div className="min-h-screen bg-[#051C2C] text-white selection:bg-[#0077B5] selection:text-white">
      <SEO 
        title="Portfolio Management Excellence | NexDyne Technologies" 
        description="Learn how to manage your portfolio of strategic initiatives for maximum impact. A framework for prioritization, resource allocation, and governance."
        canonical="/insights/portfolio-management"
      />
      <Navigation />
      
      {/* DZ10 Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#051C2C] via-[#051C2C]/70 to-[#051C2C]"></div>
        
        <div className="container relative z-10 px-4 md:px-12">
          <Breadcrumbs />
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0077B5] mb-6 block">Insight · Business Strategy</span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight leading-[1.1] mb-4">
              <span className="text-[#0077B5]">Portfolio Management</span> Excellence
            </h1>
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-3xl">
              How to manage your portfolio of strategic initiatives for maximum impact. A framework for prioritization, resource allocation, and governance.
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
            
            <h2 className="text-3xl font-serif font-bold text-[#051C2C] mb-6">The Portfolio Challenge</h2>
            <p className="text-[#051C2C]/80 leading-relaxed mb-6">
              Most organizations have more good ideas than resources to pursue them. The challenge isn't generating initiatives—it's choosing which ones to fund, ensuring they get the resources they need, and killing those that aren't working. This is the essence of portfolio management.
            </p>
            <p className="text-[#051C2C]/70 leading-relaxed mb-8">
              Effective portfolio management ensures that limited resources flow to the highest-value opportunities while maintaining balance across time horizons, risk levels, and strategic themes.
            </p>

            <h2 className="text-3xl font-serif font-bold text-[#051C2C] mb-6">The Portfolio Management Framework</h2>
            
            <div className="space-y-8 mb-12">
              <div className="flex gap-6">
                <div className="flex-shrink-0"><div className="w-12 h-12 bg-[#0077B5] text-white rounded-full flex items-center justify-center"><Target className="w-6 h-6" /></div></div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-2">Strategic Alignment</h3>
                  <p className="text-[#051C2C]/70 leading-relaxed">Every initiative should connect clearly to strategic priorities. If it doesn't support strategy, why are you doing it? Use strategic alignment as the first filter for portfolio decisions.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0"><div className="w-12 h-12 bg-[#0077B5] text-white rounded-full flex items-center justify-center"><BarChart3 className="w-6 h-6" /></div></div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-2">Value Assessment</h3>
                  <p className="text-[#051C2C]/70 leading-relaxed">Quantify the expected value of each initiative—revenue impact, cost savings, risk reduction, or strategic positioning. Use consistent methodologies to enable comparison.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0"><div className="w-12 h-12 bg-[#0077B5] text-white rounded-full flex items-center justify-center"><Layers className="w-6 h-6" /></div></div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-2">Resource Capacity</h3>
                  <p className="text-[#051C2C]/70 leading-relaxed">Understand your organization's capacity to execute. The best portfolio is one you can actually deliver. Be realistic about constraints—money, people, management attention.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0"><div className="w-12 h-12 bg-[#0077B5] text-white rounded-full flex items-center justify-center"><Briefcase className="w-6 h-6" /></div></div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-2">Portfolio Balance</h3>
                  <p className="text-[#051C2C]/70 leading-relaxed">Balance the portfolio across dimensions: short-term vs. long-term, high-risk vs. low-risk, growth vs. efficiency. Avoid over-concentration in any single area.</p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-[#051C2C]/5 rounded-xl mb-12">
              <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4 flex items-center gap-3"><Briefcase className="w-6 h-6 text-[#0077B5]" />The Three Horizons Model</h3>
              <p className="text-[#051C2C]/70 mb-4">A useful framework for balancing time horizons:</p>
              <ul className="space-y-3 text-[#051C2C]/70">
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-[#0077B5] flex-shrink-0 mt-0.5" /><span><strong className="text-[#051C2C]">Horizon 1 (70%):</strong> Core business improvements with near-term payback</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-[#0077B5] flex-shrink-0 mt-0.5" /><span><strong className="text-[#051C2C]">Horizon 2 (20%):</strong> Emerging opportunities with medium-term potential</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-[#0077B5] flex-shrink-0 mt-0.5" /><span><strong className="text-[#051C2C]">Horizon 3 (10%):</strong> Transformational bets with long-term upside</span></li>
              </ul>
            </div>

            <h2 className="text-3xl font-serif font-bold text-[#051C2C] mb-6">Portfolio Governance</h2>
            <p className="text-[#051C2C]/80 leading-relaxed mb-6">
              Effective portfolio management requires robust governance—the processes and forums for making portfolio decisions and tracking execution.
            </p>
            <div className="space-y-6 mb-12">
              <div className="p-6 bg-[#051C2C]/5 rounded-xl">
                <h4 className="text-lg font-serif font-bold text-[#051C2C] mb-2">Portfolio Review Board</h4>
                <p className="text-[#051C2C]/70">Senior leadership forum that meets quarterly to review portfolio performance, make prioritization decisions, and allocate resources.</p>
              </div>
              <div className="p-6 bg-[#051C2C]/5 rounded-xl">
                <h4 className="text-lg font-serif font-bold text-[#051C2C] mb-2">Stage-Gate Process</h4>
                <p className="text-[#051C2C]/70">Structured checkpoints where initiatives must demonstrate progress to continue receiving funding. Enables early termination of underperforming initiatives.</p>
              </div>
              <div className="p-6 bg-[#051C2C]/5 rounded-xl">
                <h4 className="text-lg font-serif font-bold text-[#051C2C] mb-2">Portfolio Dashboard</h4>
                <p className="text-[#051C2C]/70">Real-time visibility into portfolio health—initiative status, resource utilization, value delivery, and risk exposure.</p>
              </div>
            </div>

            <h2 className="text-3xl font-serif font-bold text-[#051C2C] mb-6">Common Portfolio Mistakes</h2>
            <ul className="space-y-4 text-[#051C2C]/70 mb-8">
              <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-[#0077B5] flex-shrink-0 mt-0.5" /><span><strong className="text-[#051C2C]">Too many initiatives:</strong> Spreading resources too thin means nothing gets done well. Focus on fewer, bigger bets.</span></li>
              <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-[#0077B5] flex-shrink-0 mt-0.5" /><span><strong className="text-[#051C2C]">Failure to kill:</strong> Continuing to fund underperforming initiatives because of sunk costs or politics. Be willing to cut losses.</span></li>
              <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-[#0077B5] flex-shrink-0 mt-0.5" /><span><strong className="text-[#051C2C]">Short-term bias:</strong> Over-investing in quick wins at the expense of longer-term transformation.</span></li>
              <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-[#0077B5] flex-shrink-0 mt-0.5" /><span><strong className="text-[#051C2C]">Ignoring interdependencies:</strong> Initiatives often depend on each other. Failing to manage dependencies leads to delays and waste.</span></li>
            </ul>

            <div className="p-8 bg-[#0077B5] text-white rounded-xl mb-12">
              <h3 className="text-xl font-serif font-bold mb-4">The Bottom Line</h3>
              <p className="text-white/90 leading-relaxed">
                Portfolio management is how strategy becomes reality. By rigorously prioritizing initiatives, allocating resources to the highest-value opportunities, and maintaining governance discipline, organizations can dramatically improve their return on strategic investment. The key is treating the portfolio as a whole, not just a collection of independent projects.
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
              { title: "Why Strategic Plans Fail", category: "Business Strategy", description: "Building strategies that get executed", link: "/insights/strategic-plans-success" },
              { title: "Operating Model Redesign", category: "Business Strategy", description: "Aligning structure with strategy", link: "/insights/operating-model-redesign" }
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
