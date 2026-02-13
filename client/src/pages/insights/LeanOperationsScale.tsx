import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, ArrowLeft, Cog, Target, Users, TrendingUp, CheckCircle2, Clock } from 'lucide-react';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { BackToTop } from "@/components/BackToTop";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";

export default function LeanOperationsScale() {
  return (
    <div className="min-h-screen bg-[#051C2C] text-white selection:bg-[#0077B5] selection:text-white">
      <SEO 
        title="Lean Operations at Scale | NexDyne Technologies" 
        description="Learn how to apply lean principles to complex organizations for sustainable operational excellence."
        canonical="/insights/lean-operations-scale"
      />
      <Navigation />
      
      {/* DZ10 Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#051C2C] via-[#051C2C]/70 to-[#051C2C]"></div>
        
        <div className="container relative z-10 px-4 md:px-12">
          <Breadcrumbs />
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0077B5] mb-6 block">Insight · Performance Improvement</span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight leading-[1.1] mb-4">
              <span className="text-[#0077B5]">Lean Operations</span> at Scale
            </h1>
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-3xl">
              How to apply lean principles to complex organizations for sustainable operational excellence and continuous improvement.
            </p>
            <div className="flex items-center gap-6 mt-8 text-sm text-white/60">
              <span className="flex items-center gap-2"><Clock className="w-4 h-4" />11 min read</span>
              <span>December 2024</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 bg-white text-[#051C2C]">
        <div className="container px-4 md:px-12 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="prose prose-lg max-w-none">
            
            <h2 className="text-3xl font-serif font-bold text-[#051C2C] mb-6">Beyond the Factory Floor</h2>
            <p className="text-[#051C2C]/80 leading-relaxed mb-6">
              Lean principles were developed in manufacturing but apply far more broadly. The core concepts—eliminating waste, reducing variation, and continuously improving—are relevant to any organization that wants to deliver more value with fewer resources.
            </p>
            <p className="text-[#051C2C]/70 leading-relaxed mb-8">
              Yet many organizations struggle to scale lean beyond pilot projects. They achieve impressive results in one area, then fail to replicate success across the enterprise. This article explores how to build lean capabilities that scale.
            </p>

            <h2 className="text-3xl font-serif font-bold text-[#051C2C] mb-6">The Eight Wastes</h2>
            
            <div className="p-8 bg-[#051C2C]/5 rounded-xl mb-12">
              <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4 flex items-center gap-3"><Target className="w-6 h-6 text-[#0077B5]" />DOWNTIME Framework</h3>
              <div className="grid md:grid-cols-2 gap-4 text-[#051C2C]/70">
                <div><strong className="text-[#051C2C]">D</strong>efects - Errors requiring rework</div>
                <div><strong className="text-[#051C2C]">O</strong>verproduction - Making more than needed</div>
                <div><strong className="text-[#051C2C]">W</strong>aiting - Idle time between steps</div>
                <div><strong className="text-[#051C2C]">N</strong>on-utilized talent - Underusing people</div>
                <div><strong className="text-[#051C2C]">T</strong>ransportation - Unnecessary movement</div>
                <div><strong className="text-[#051C2C]">I</strong>nventory - Excess stock or WIP</div>
                <div><strong className="text-[#051C2C]">M</strong>otion - Unnecessary physical movement</div>
                <div><strong className="text-[#051C2C]">E</strong>xtra processing - More work than required</div>
              </div>
            </div>

            <h2 className="text-3xl font-serif font-bold text-[#051C2C] mb-6">Scaling Lean: Key Success Factors</h2>
            
            <div className="space-y-8 mb-12">
              <div className="flex gap-6">
                <div className="flex-shrink-0"><div className="w-12 h-12 bg-[#0077B5] text-white rounded-full flex items-center justify-center"><Users className="w-6 h-6" /></div></div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-2">Leadership Commitment</h3>
                  <p className="text-[#051C2C]/70 leading-relaxed">Lean transformation requires sustained leadership commitment. Leaders must model lean behaviors, allocate resources, and hold the organization accountable for results.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0"><div className="w-12 h-12 bg-[#0077B5] text-white rounded-full flex items-center justify-center"><Cog className="w-6 h-6" /></div></div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-2">Management System</h3>
                  <p className="text-[#051C2C]/70 leading-relaxed">Tools and events don't sustain themselves. A lean management system—including daily management, visual controls, and problem-solving routines—is essential for sustainability.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0"><div className="w-12 h-12 bg-[#0077B5] text-white rounded-full flex items-center justify-center"><TrendingUp className="w-6 h-6" /></div></div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-2">Capability Building</h3>
                  <p className="text-[#051C2C]/70 leading-relaxed">Lean at scale requires broad capability. Invest in training and coaching to build problem-solving skills throughout the organization, not just in a central lean team.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-serif font-bold text-[#051C2C] mb-6">The Lean Management System</h2>
            
            <div className="space-y-6 mb-12">
              <div className="p-6 bg-[#051C2C]/5 rounded-xl">
                <h4 className="text-lg font-serif font-bold text-[#051C2C] mb-2">Daily Management</h4>
                <p className="text-[#051C2C]/70">Short, focused meetings at the start of each day to review performance, identify issues, and assign countermeasures. The foundation of operational discipline.</p>
              </div>
              <div className="p-6 bg-[#051C2C]/5 rounded-xl">
                <h4 className="text-lg font-serif font-bold text-[#051C2C] mb-2">Visual Management</h4>
                <p className="text-[#051C2C]/70">Make performance visible so problems are immediately apparent. Visual boards, status indicators, and real-time metrics enable rapid response.</p>
              </div>
              <div className="p-6 bg-[#051C2C]/5 rounded-xl">
                <h4 className="text-lg font-serif font-bold text-[#051C2C] mb-2">Standard Work</h4>
                <p className="text-[#051C2C]/70">Document the current best way to perform each process. Standard work is the baseline for improvement—you can't improve what isn't standardized.</p>
              </div>
              <div className="p-6 bg-[#051C2C]/5 rounded-xl">
                <h4 className="text-lg font-serif font-bold text-[#051C2C] mb-2">Problem Solving</h4>
                <p className="text-[#051C2C]/70">Structured approach to identifying root causes and implementing countermeasures. A3 thinking and PDCA cycles build problem-solving capability.</p>
              </div>
            </div>

            <h2 className="text-3xl font-serif font-bold text-[#051C2C] mb-6">Common Scaling Challenges</h2>
            <ul className="space-y-4 text-[#051C2C]/70 mb-8">
              <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-[#0077B5] flex-shrink-0 mt-0.5" /><span><strong className="text-[#051C2C]">Tool focus:</strong> Implementing lean tools without the underlying management system and culture change.</span></li>
              <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-[#0077B5] flex-shrink-0 mt-0.5" /><span><strong className="text-[#051C2C]">Expert dependency:</strong> Relying on a central lean team rather than building capability throughout the organization.</span></li>
              <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-[#0077B5] flex-shrink-0 mt-0.5" /><span><strong className="text-[#051C2C]">Event-driven improvement:</strong> Focusing on kaizen events without daily management to sustain gains.</span></li>
              <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-[#0077B5] flex-shrink-0 mt-0.5" /><span><strong className="text-[#051C2C]">Insufficient leadership engagement:</strong> Leaders who delegate lean rather than actively participating.</span></li>
            </ul>

            <h2 className="text-3xl font-serif font-bold text-[#051C2C] mb-6">Building a Lean Culture</h2>
            <p className="text-[#051C2C]/80 leading-relaxed mb-6">
              Ultimately, lean at scale is about culture. It's about creating an organization where everyone—from the front line to the C-suite—is engaged in identifying and solving problems, eliminating waste, and continuously improving.
            </p>
            <p className="text-[#051C2C]/70 leading-relaxed mb-8">
              This culture doesn't happen overnight. It requires years of consistent effort, leadership modeling, and reinforcement. But organizations that achieve it gain a sustainable competitive advantage that's difficult for competitors to replicate.
            </p>

            <div className="p-8 bg-[#0077B5] text-white rounded-xl mb-12">
              <h3 className="text-xl font-serif font-bold mb-4">The Bottom Line</h3>
              <p className="text-white/90 leading-relaxed">
                Lean at scale is achievable, but it requires more than tools and training. It requires a management system that sustains improvement, leadership commitment that persists through challenges, and a culture that embraces continuous improvement as a way of working. Organizations that get this right achieve operational excellence that compounds over time.
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
              { title: "Working Capital Optimization", category: "Performance Improvement", description: "Unlock cash trapped in your balance sheet", link: "/insights/working-capital-optimization" }
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
