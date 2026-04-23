import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, ArrowLeft, Presentation, Target, BarChart3, Users, CheckCircle2, Clock } from 'lucide-react';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { BackToTop } from "@/components/BackToTop";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";

export default function InvestorReadyBoardDecks() {
  return (
    <div className="min-h-screen bg-base text-white selection:bg-primary selection:text-white">
      <SEO 
        title="Building Investor-Ready Board Decks | NexDyne Technologies" 
        description="Learn how to create board materials that impress investors and drive productive board meetings. A comprehensive guide to board deck best practices."
        canonical="/insights/investor-ready-board-decks"
      />
      <Navigation />
      
      {/* DZ10 Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-base via-base/70 to-base"></div>
        
        <div className="container relative z-10 px-4 md:px-12">
          <Breadcrumbs />
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6 block">Insight · Fractional CFO Services</span>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-4">
              Building <span className="text-primary">Investor-Ready</span> Board Decks
            </h1>
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-3xl">
              How to create board materials that impress investors, drive productive discussions, and demonstrate financial sophistication.
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
            
            <h2 className="text-3xl font-bold text-charcoal mb-6">The Board Deck as a Signal</h2>
            <p className="text-charcoal/80 leading-relaxed mb-6">
              Your board deck is more than a meeting document—it's a signal of your company's operational maturity. Sophisticated investors can tell within minutes whether a company has its act together based on the quality of its board materials.
            </p>
            <p className="text-charcoal/70 leading-relaxed mb-8">
              Great board decks don't just report what happened. They tell a story, highlight what matters, surface issues proactively, and enable productive discussion. This guide provides a framework for building board materials that impress.
            </p>

            <h2 className="text-3xl font-bold text-charcoal mb-6">The Essential Board Deck Structure</h2>
            
            <div className="p-8 bg-base/5 rounded-xl mb-12">
              <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center gap-3"><Presentation className="w-6 h-6 text-primary" />Core Sections</h3>
              <div className="space-y-4 text-charcoal/70">
                <p><strong className="text-charcoal">1. Executive Summary (1-2 slides):</strong> Key highlights, critical issues, and decisions needed. Board members should understand the state of the business in 2 minutes.</p>
                <p><strong className="text-charcoal">2. Financial Performance (3-5 slides):</strong> P&L, cash flow, key metrics vs. plan and prior year. Focus on trends and drivers, not just numbers.</p>
                <p><strong className="text-charcoal">3. Operational Highlights (2-3 slides):</strong> Product, sales, marketing, and team updates. Focus on what moved the needle.</p>
                <p><strong className="text-charcoal">4. Strategic Initiatives (2-3 slides):</strong> Progress on key initiatives, milestones achieved, and roadblocks encountered.</p>
                <p><strong className="text-charcoal">5. Discussion Topics (1-2 slides):</strong> Specific questions or decisions requiring board input.</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-charcoal mb-6">Financial Reporting Best Practices</h2>
            
            <div className="space-y-8 mb-12">
              <div className="flex gap-6">
                <div className="flex-shrink-0"><div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center"><BarChart3 className="w-6 h-6" /></div></div>
                <div>
                  <h3 className="text-xl font-bold text-charcoal mb-2">Show Trends, Not Just Numbers</h3>
                  <p className="text-charcoal/70 leading-relaxed">A single month's numbers mean little without context. Show 12-month trends, year-over-year comparisons, and performance vs. plan. Make it easy to see whether things are getting better or worse.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0"><div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center"><Target className="w-6 h-6" /></div></div>
                <div>
                  <h3 className="text-xl font-bold text-charcoal mb-2">Explain the Drivers</h3>
                  <p className="text-charcoal/70 leading-relaxed">Don't just report that revenue was up 15%—explain why. Was it new customers, expansion, pricing, or mix? Understanding drivers enables better discussion and decision-making.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0"><div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center"><Users className="w-6 h-6" /></div></div>
                <div>
                  <h3 className="text-xl font-bold text-charcoal mb-2">Surface Issues Proactively</h3>
                  <p className="text-charcoal/70 leading-relaxed">Nothing erodes board trust faster than surprises. If something is going wrong, surface it early with a clear explanation of what happened, what you're doing about it, and what help you need.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-charcoal mb-6">Key Metrics to Include</h2>
            <ul className="space-y-4 text-charcoal/70 mb-8">
              <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span><strong className="text-charcoal">Revenue metrics:</strong> ARR/MRR, growth rate, net revenue retention, new vs. expansion revenue</span></li>
              <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span><strong className="text-charcoal">Unit economics:</strong> CAC, LTV, LTV/CAC ratio, payback period</span></li>
              <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span><strong className="text-charcoal">Cash metrics:</strong> Cash balance, burn rate, runway, cash flow from operations</span></li>
              <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span><strong className="text-charcoal">Operational metrics:</strong> Customer count, churn rate, NPS, employee headcount</span></li>
            </ul>

            <h2 className="text-3xl font-bold text-charcoal mb-6">Common Mistakes to Avoid</h2>
            <div className="space-y-6 mb-12">
              <div className="p-6 bg-base/5 rounded-xl">
                <h4 className="text-lg font-bold text-charcoal mb-2">Too Much Detail</h4>
                <p className="text-charcoal/70">Board decks should be strategic, not operational. Resist the urge to include every metric and update. Focus on what matters most and put details in an appendix.</p>
              </div>
              <div className="p-6 bg-base/5 rounded-xl">
                <h4 className="text-lg font-bold text-charcoal mb-2">No Clear Narrative</h4>
                <p className="text-charcoal/70">Data without narrative is confusing. Your deck should tell a coherent story about where the business is, where it's going, and what's needed to get there.</p>
              </div>
              <div className="p-6 bg-base/5 rounded-xl">
                <h4 className="text-lg font-bold text-charcoal mb-2">Late Distribution</h4>
                <p className="text-charcoal/70">Send materials at least 3-5 days before the meeting. Board members need time to review and come prepared with thoughtful questions.</p>
              </div>
            </div>

            <div className="p-8 bg-primary text-white rounded-xl mb-12">
              <h3 className="text-xl font-bold mb-4">The Bottom Line</h3>
              <p className="text-white/90 leading-relaxed">
                Great board decks are a competitive advantage. They build trust with investors, enable productive discussions, and demonstrate operational maturity. Invest the time to get them right—the payoff in board effectiveness and investor confidence is substantial.
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
              { title: "The CFO's Guide to Cash Flow", category: "Fractional CFO Services", description: "Mastering cash flow management", link: "/insights/cfo-cash-flow-guide" }
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
