import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, ArrowLeft, Target, Compass, Users, TrendingUp, CheckCircle2, Clock } from 'lucide-react';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { BackToTop } from "@/components/BackToTop";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";

export default function StrategicPlansSuccess() {
  return (
    <div className="min-h-screen bg-base text-white selection:bg-primary selection:text-white">
      <SEO 
        title="Why Strategic Plans Fail—And How to Succeed | NexDyne Technologies" 
        description="Learn why most strategic plans fail to deliver results and discover a framework for building strategies that actually get executed."
        canonical="/insights/strategic-plans-success"
      />
      <Navigation />
      
      {/* DZ10 Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-base via-base/70 to-base"></div>
        
        <div className="container relative z-10 px-4 md:px-12">
          <Breadcrumbs />
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6 block">Insight · Business Strategy</span>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-4">
              Why Strategic Plans <span className="text-primary">Fail</span>—And How to Succeed
            </h1>
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-3xl">
              Most strategic plans gather dust on shelves. Learn why strategies fail to deliver and discover a framework for building plans that actually get executed.
            </p>
            <div className="flex items-center gap-6 mt-8 text-sm text-white/60">
              <span className="flex items-center gap-2"><Clock className="w-4 h-4" />11 min read</span>
              <span>December 2024</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 bg-white text-charcoal">
        <div className="container px-4 md:px-12 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="prose prose-lg max-w-none">
            
            <h2 className="text-3xl font-bold text-charcoal mb-6">The Strategy-Execution Gap</h2>
            <p className="text-charcoal/80 leading-relaxed mb-6">
              Studies consistently show that 60-90% of strategic plans fail to achieve their objectives. Not because the strategies were wrong, but because they were never effectively executed. The gap between strategy formulation and strategy execution is where most organizations stumble.
            </p>
            <p className="text-charcoal/70 leading-relaxed mb-8">
              This article examines why strategic plans fail and provides a framework for building strategies that actually get implemented and deliver results.
            </p>

            <h2 className="text-3xl font-bold text-charcoal mb-6">Why Strategies Fail</h2>
            
            <div className="p-8 bg-base/5 rounded-xl mb-12">
              <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center gap-3"><Target className="w-6 h-6 text-primary" />Common Failure Modes</h3>
              <ul className="space-y-3 text-charcoal/70">
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span><strong className="text-charcoal">Lack of clarity:</strong> Vague aspirations rather than specific, measurable objectives</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span><strong className="text-charcoal">Too many priorities:</strong> Trying to do everything means doing nothing well</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span><strong className="text-charcoal">Poor communication:</strong> Strategy stays in the boardroom, never reaching the front line</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span><strong className="text-charcoal">No accountability:</strong> No clear ownership or consequences for non-delivery</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span><strong className="text-charcoal">Resource mismatch:</strong> Ambitious plans without the resources to execute</span></li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-charcoal mb-6">A Framework for Executable Strategy</h2>
            
            <div className="space-y-8 mb-12">
              <div className="flex gap-6">
                <div className="flex-shrink-0"><div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center"><Compass className="w-6 h-6" /></div></div>
                <div>
                  <h3 className="text-xl font-bold text-charcoal mb-2">1. Make Hard Choices</h3>
                  <p className="text-charcoal/70 leading-relaxed">Strategy is about choosing what to do and, more importantly, what not to do. A strategy that tries to be everything to everyone is no strategy at all. Focus on a few big bets that can make a real difference.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0"><div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center"><Target className="w-6 h-6" /></div></div>
                <div>
                  <h3 className="text-xl font-bold text-charcoal mb-2">2. Define Clear Outcomes</h3>
                  <p className="text-charcoal/70 leading-relaxed">Every strategic initiative should have specific, measurable outcomes with clear timelines. "Improve customer satisfaction" is not a strategy—"Increase NPS from 30 to 50 by Q4" is.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0"><div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center"><Users className="w-6 h-6" /></div></div>
                <div>
                  <h3 className="text-xl font-bold text-charcoal mb-2">3. Assign Clear Ownership</h3>
                  <p className="text-charcoal/70 leading-relaxed">Every initiative needs a single accountable owner with the authority and resources to deliver. Shared ownership is no ownership. Make it clear who is responsible for what.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0"><div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center"><TrendingUp className="w-6 h-6" /></div></div>
                <div>
                  <h3 className="text-xl font-bold text-charcoal mb-2">4. Build Execution Rhythms</h3>
                  <p className="text-charcoal/70 leading-relaxed">Strategy execution requires regular review and adjustment. Build monthly or quarterly review rhythms that track progress, surface issues, and enable course correction.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-charcoal mb-6">Cascading Strategy Through the Organization</h2>
            <p className="text-charcoal/80 leading-relaxed mb-6">
              Strategy can't stay in the boardroom. For execution to happen, strategy must cascade through the organization so every team and individual understands how their work connects to strategic objectives.
            </p>
            <div className="space-y-6 mb-12">
              <div className="p-6 bg-base/5 rounded-xl">
                <h4 className="text-lg font-bold text-charcoal mb-2">Corporate Level</h4>
                <p className="text-charcoal/70">3-5 strategic priorities with clear outcomes and timelines</p>
              </div>
              <div className="p-6 bg-base/5 rounded-xl">
                <h4 className="text-lg font-bold text-charcoal mb-2">Business Unit Level</h4>
                <p className="text-charcoal/70">Specific initiatives that support corporate priorities, with BU-level metrics</p>
              </div>
              <div className="p-6 bg-base/5 rounded-xl">
                <h4 className="text-lg font-bold text-charcoal mb-2">Team Level</h4>
                <p className="text-charcoal/70">Quarterly objectives and key results (OKRs) aligned to BU initiatives</p>
              </div>
              <div className="p-6 bg-base/5 rounded-xl">
                <h4 className="text-lg font-bold text-charcoal mb-2">Individual Level</h4>
                <p className="text-charcoal/70">Personal goals and development plans connected to team OKRs</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-charcoal mb-6">The Role of Leadership</h2>
            <p className="text-charcoal/80 leading-relaxed mb-6">
              Strategy execution is ultimately a leadership challenge. Leaders must model commitment to strategic priorities, make tough trade-off decisions, and hold the organization accountable for results.
            </p>
            <ul className="space-y-4 text-charcoal/70 mb-8">
              <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span><strong className="text-charcoal">Communicate relentlessly:</strong> Strategy should be repeated until leaders are tired of saying it—that's when the organization is starting to hear it.</span></li>
              <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span><strong className="text-charcoal">Allocate resources:</strong> Strategy without resource allocation is just wishful thinking. Put money and people behind priorities.</span></li>
              <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span><strong className="text-charcoal">Remove obstacles:</strong> Leaders must actively clear roadblocks that prevent execution.</span></li>
              <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span><strong className="text-charcoal">Celebrate progress:</strong> Recognize and reward progress toward strategic objectives.</span></li>
            </ul>

            <div className="p-8 bg-primary text-white rounded-xl mb-12">
              <h3 className="text-xl font-bold mb-4">The Bottom Line</h3>
              <p className="text-white/90 leading-relaxed">
                Strategy execution is harder than strategy formulation—but it's where value is created. By making hard choices, defining clear outcomes, assigning ownership, and building execution rhythms, organizations can close the strategy-execution gap and turn plans into results.
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
              { title: "Operating Model Redesign", category: "Business Strategy", description: "Aligning structure with strategy", link: "/insights/operating-model-redesign" },
              { title: "Portfolio Management Excellence", category: "Business Strategy", description: "Managing strategic initiatives", link: "/insights/portfolio-management" }
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
