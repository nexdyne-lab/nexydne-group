import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, ArrowLeft, BarChart3, Target, Eye, Layers, CheckCircle2, Clock } from 'lucide-react';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { BackToTop } from "@/components/BackToTop";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";

export default function KPIDashboards() {
  return (
    <div className="min-h-screen bg-base text-white selection:bg-primary selection:text-white">
      <SEO 
        title="Building Effective KPI Dashboards | NexDyne Technologies" 
        description="Learn how to design KPI dashboards that drive action and improve decision-making across your organization."
        canonical="/insights/kpi-dashboards"
      />
      <Navigation />
      
      {/* DZ10 Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-base via-base/70 to-base"></div>
        
        <div className="container relative z-10 px-4 md:px-12">
          <Breadcrumbs />
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6 block">Insight · Financial Planning & Analysis</span>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-4">
              Building Effective <span className="text-primary">KPI Dashboards</span> That Drive Action
            </h1>
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-3xl">
              How to design dashboards that move beyond vanity metrics to provide actionable insights that improve decision-making across your organization.
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
            
            <h2 className="text-3xl font-bold text-charcoal mb-6">The Dashboard Paradox</h2>
            <p className="text-charcoal/80 leading-relaxed mb-6">
              Most organizations have dashboards. Few have dashboards that actually drive better decisions. The proliferation of business intelligence tools has made it easy to create dashboards, but the ease of creation has often led to dashboard sprawl—dozens or hundreds of dashboards that no one uses or trusts.
            </p>
            <p className="text-charcoal/70 leading-relaxed mb-8">
              The problem isn't technology—it's design. Effective dashboards require careful thought about what to measure, how to present information, and how to connect metrics to action. This article provides a framework for building dashboards that actually drive results.
            </p>

            <h2 className="text-3xl font-bold text-charcoal mb-6">Principles of Effective Dashboard Design</h2>
            
            <div className="space-y-8 mb-12">
              <div className="flex gap-6">
                <div className="flex-shrink-0"><div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center"><Target className="w-6 h-6" /></div></div>
                <div>
                  <h3 className="text-xl font-bold text-charcoal mb-2">Start with Decisions, Not Data</h3>
                  <p className="text-charcoal/70 leading-relaxed">The most common mistake in dashboard design is starting with available data rather than the decisions the dashboard should support. Begin by identifying the key decisions users need to make and work backward to determine what information they need.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0"><div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center"><Layers className="w-6 h-6" /></div></div>
                <div>
                  <h3 className="text-xl font-bold text-charcoal mb-2">Less Is More</h3>
                  <p className="text-charcoal/70 leading-relaxed">Effective dashboards are ruthlessly focused. Research shows that users can only effectively monitor 5-7 metrics at a time. Resist the temptation to add "just one more" metric. Every addition dilutes attention from what matters most.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0"><div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center"><Eye className="w-6 h-6" /></div></div>
                <div>
                  <h3 className="text-xl font-bold text-charcoal mb-2">Design for Glanceability</h3>
                  <p className="text-charcoal/70 leading-relaxed">Users should be able to assess the current state in seconds. Use visual hierarchy, color coding, and clear status indicators to enable rapid comprehension. Save detailed analysis for drill-down views.</p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-base/5 rounded-xl mb-12">
              <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center gap-3"><BarChart3 className="w-6 h-6 text-primary" />The SMART KPI Framework</h3>
              <p className="text-charcoal/70 mb-4">Effective KPIs share common characteristics:</p>
              <ul className="space-y-3 text-charcoal/70">
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span><strong className="text-charcoal">Specific:</strong> Clearly defined with no ambiguity about what's being measured</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span><strong className="text-charcoal">Measurable:</strong> Quantifiable with reliable data sources</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span><strong className="text-charcoal">Actionable:</strong> Connected to levers the user can influence</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span><strong className="text-charcoal">Relevant:</strong> Aligned with strategic objectives</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span><strong className="text-charcoal">Timely:</strong> Updated frequently enough to enable action</span></li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-charcoal mb-6">Dashboard Architecture</h2>
            <p className="text-charcoal/80 leading-relaxed mb-6">
              Effective dashboard systems typically have three layers, each serving a different purpose and audience.
            </p>

            <div className="space-y-6 mb-12">
              <div className="p-6 bg-base/5 rounded-xl">
                <h4 className="text-lg font-bold text-charcoal mb-2">Executive Dashboard</h4>
                <p className="text-charcoal/70">High-level view of organizational health with 5-7 key metrics. Designed for executives who need to quickly assess overall performance and identify areas requiring attention.</p>
              </div>
              <div className="p-6 bg-base/5 rounded-xl">
                <h4 className="text-lg font-bold text-charcoal mb-2">Operational Dashboard</h4>
                <p className="text-charcoal/70">Detailed view of functional performance with 10-15 metrics. Designed for managers who need to monitor and optimize their area of responsibility.</p>
              </div>
              <div className="p-6 bg-base/5 rounded-xl">
                <h4 className="text-lg font-bold text-charcoal mb-2">Analytical Dashboard</h4>
                <p className="text-charcoal/70">Deep-dive capability with flexible filtering and drill-down. Designed for analysts who need to investigate issues and identify root causes.</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-charcoal mb-6">Common Dashboard Mistakes</h2>
            <ul className="space-y-4 text-charcoal/70 mb-8">
              <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span><strong className="text-charcoal">Vanity metrics:</strong> Metrics that look good but don't connect to business outcomes. Focus on metrics that drive action.</span></li>
              <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span><strong className="text-charcoal">Missing context:</strong> Numbers without benchmarks, targets, or trends are hard to interpret. Always provide context.</span></li>
              <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span><strong className="text-charcoal">Stale data:</strong> Dashboards with outdated data lose credibility. Ensure data freshness matches decision-making cadence.</span></li>
              <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span><strong className="text-charcoal">One-size-fits-all:</strong> Different users have different needs. Design dashboards for specific audiences and use cases.</span></li>
            </ul>

            <div className="p-8 bg-primary text-white rounded-xl mb-12">
              <h3 className="text-xl font-bold mb-4">The Bottom Line</h3>
              <p className="text-white/90 leading-relaxed">
                Effective dashboards are designed with purpose, focused on decisions rather than data. By following these principles—starting with decisions, maintaining focus, designing for glanceability, and creating appropriate architecture—organizations can build dashboards that actually drive better decisions and improved performance.
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
              { title: "Rolling Forecasts: A Modern Approach", category: "Financial Planning & Analysis", description: "Transform your planning process with rolling forecasts", link: "/insights/rolling-forecasts" },
              { title: "CFO Data Integration Strategies", category: "Financial Planning & Analysis", description: "Connecting financial and operational data", link: "/insights/cfo-data-integration" }
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
