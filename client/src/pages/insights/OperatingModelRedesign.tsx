import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, ArrowLeft, Layers, Target, Cog, Users, CheckCircle2, Clock } from 'lucide-react';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { BackToTop } from "@/components/BackToTop";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";

export default function OperatingModelRedesign() {
  return (
    <div className="min-h-screen bg-[#051C2C] text-white selection:bg-[#0077B5] selection:text-white">
      <SEO 
        title="Operating Model Redesign: Aligning Structure with Strategy | NexDyne Technologies" 
        description="Learn how to redesign your operating model to enable strategy execution. A framework for aligning structure, processes, and capabilities."
        canonical="/insights/operating-model-redesign"
      />
      <Navigation />
      
      {/* DZ10 Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#051C2C] via-[#051C2C]/70 to-[#051C2C]"></div>
        
        <div className="container relative z-10 px-4 md:px-12">
          <Breadcrumbs />
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0077B5] mb-6 block">Insight · Business Strategy</span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight leading-[1.1] mb-4">
              <span className="text-[#0077B5]">Operating Model</span> Redesign
            </h1>
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-3xl">
              How to redesign your operating model to enable strategy execution. Aligning structure, processes, and capabilities with strategic intent.
            </p>
            <div className="flex items-center gap-6 mt-8 text-sm text-white/60">
              <span className="flex items-center gap-2"><Clock className="w-4 h-4" />10 min read</span>
              <span>December 2024</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 bg-white text-[#051C2C]">
        <div className="container px-4 md:px-12 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="prose prose-lg max-w-none">
            
            <h2 className="text-3xl font-serif font-bold text-[#051C2C] mb-6">Structure Follows Strategy</h2>
            <p className="text-[#051C2C]/80 leading-relaxed mb-6">
              Alfred Chandler's famous dictum—"structure follows strategy"—remains as relevant today as when he wrote it in 1962. Yet many organizations try to execute new strategies through old operating models, wondering why results don't follow.
            </p>
            <p className="text-[#051C2C]/70 leading-relaxed mb-8">
              An operating model defines how an organization creates and delivers value. It encompasses structure, processes, technology, and governance. When strategy changes, the operating model must evolve to enable it.
            </p>

            <h2 className="text-3xl font-serif font-bold text-[#051C2C] mb-6">The Operating Model Canvas</h2>
            
            <div className="p-8 bg-[#051C2C]/5 rounded-xl mb-12">
              <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4 flex items-center gap-3"><Layers className="w-6 h-6 text-[#0077B5]" />Six Dimensions of Operating Model</h3>
              <div className="grid md:grid-cols-2 gap-4 text-[#051C2C]/70">
                <div><strong className="text-[#051C2C]">Structure:</strong> How the organization is organized and how work is divided</div>
                <div><strong className="text-[#051C2C]">Processes:</strong> How work flows through the organization</div>
                <div><strong className="text-[#051C2C]">Technology:</strong> Systems and tools that enable operations</div>
                <div><strong className="text-[#051C2C]">Governance:</strong> How decisions are made and performance managed</div>
                <div><strong className="text-[#051C2C]">People:</strong> Capabilities, culture, and talent management</div>
                <div><strong className="text-[#051C2C]">Metrics:</strong> How performance is measured and rewarded</div>
              </div>
            </div>

            <h2 className="text-3xl font-serif font-bold text-[#051C2C] mb-6">Common Operating Model Archetypes</h2>
            
            <div className="space-y-8 mb-12">
              <div className="flex gap-6">
                <div className="flex-shrink-0"><div className="w-12 h-12 bg-[#0077B5] text-white rounded-full flex items-center justify-center"><Target className="w-6 h-6" /></div></div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-2">Centralized Model</h3>
                  <p className="text-[#051C2C]/70 leading-relaxed">Decision-making concentrated at the center. Best for organizations requiring tight control, consistency, and efficiency. Trade-off: slower response to local conditions.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0"><div className="w-12 h-12 bg-[#0077B5] text-white rounded-full flex items-center justify-center"><Users className="w-6 h-6" /></div></div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-2">Decentralized Model</h3>
                  <p className="text-[#051C2C]/70 leading-relaxed">Decision-making pushed to business units or regions. Best for diverse businesses requiring local responsiveness. Trade-off: potential duplication and inconsistency.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0"><div className="w-12 h-12 bg-[#0077B5] text-white rounded-full flex items-center justify-center"><Cog className="w-6 h-6" /></div></div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-2">Federated Model</h3>
                  <p className="text-[#051C2C]/70 leading-relaxed">Hybrid approach with some functions centralized and others decentralized. Best for balancing efficiency with responsiveness. Trade-off: complexity in defining boundaries.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-serif font-bold text-[#051C2C] mb-6">Redesign Principles</h2>
            <ul className="space-y-4 text-[#051C2C]/70 mb-8">
              <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-[#0077B5] flex-shrink-0 mt-0.5" /><span><strong className="text-[#051C2C]">Start with strategy:</strong> The operating model should enable strategic priorities. Define what the organization needs to do well, then design the model to deliver it.</span></li>
              <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-[#0077B5] flex-shrink-0 mt-0.5" /><span><strong className="text-[#051C2C]">Design for the future:</strong> Don't just fix today's problems—design for where the business is going. Build in flexibility for evolution.</span></li>
              <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-[#0077B5] flex-shrink-0 mt-0.5" /><span><strong className="text-[#051C2C]">Simplify ruthlessly:</strong> Complexity is the enemy of execution. Remove unnecessary layers, streamline processes, and clarify decision rights.</span></li>
              <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-[#0077B5] flex-shrink-0 mt-0.5" /><span><strong className="text-[#051C2C]">Align all dimensions:</strong> Structure alone isn't enough. Processes, technology, governance, and metrics must all align with the new model.</span></li>
            </ul>

            <h2 className="text-3xl font-serif font-bold text-[#051C2C] mb-6">Implementation Approach</h2>
            <div className="space-y-6 mb-12">
              <div className="p-6 bg-[#051C2C]/5 rounded-xl">
                <h4 className="text-lg font-serif font-bold text-[#051C2C] mb-2">Phase 1: Design</h4>
                <p className="text-[#051C2C]/70">Define the target operating model based on strategic requirements. Engage stakeholders to build buy-in and identify implementation challenges.</p>
              </div>
              <div className="p-6 bg-[#051C2C]/5 rounded-xl">
                <h4 className="text-lg font-serif font-bold text-[#051C2C] mb-2">Phase 2: Pilot</h4>
                <p className="text-[#051C2C]/70">Test the new model in a limited scope to identify issues and refine the design before full rollout.</p>
              </div>
              <div className="p-6 bg-[#051C2C]/5 rounded-xl">
                <h4 className="text-lg font-serif font-bold text-[#051C2C] mb-2">Phase 3: Rollout</h4>
                <p className="text-[#051C2C]/70">Implement the new model across the organization with clear communication, training, and change management support.</p>
              </div>
              <div className="p-6 bg-[#051C2C]/5 rounded-xl">
                <h4 className="text-lg font-serif font-bold text-[#051C2C] mb-2">Phase 4: Stabilize</h4>
                <p className="text-[#051C2C]/70">Monitor performance, address issues, and make adjustments. Operating model changes take time to embed—plan for a 12-18 month stabilization period.</p>
              </div>
            </div>

            <div className="p-8 bg-[#0077B5] text-white rounded-xl mb-12">
              <h3 className="text-xl font-serif font-bold mb-4">The Bottom Line</h3>
              <p className="text-white/90 leading-relaxed">
                Operating model redesign is one of the most powerful levers for improving organizational performance. By aligning structure, processes, and capabilities with strategic intent, organizations can unlock significant value. The key is to approach it holistically—changing structure without changing processes and governance rarely delivers lasting results.
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
              { title: "Portfolio Management Excellence", category: "Business Strategy", description: "Managing strategic initiatives", link: "/insights/portfolio-management" }
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
