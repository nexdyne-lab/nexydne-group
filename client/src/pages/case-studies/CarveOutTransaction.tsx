import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, ArrowLeft, TrendingUp, Target, Scissors, Building, Users, CheckCircle2, Download } from 'lucide-react';
import { CaseStudyPDFButton } from "@/components/CaseStudyPDFButton";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import CaseStudyContactForm from "@/components/CaseStudyContactForm";
import { BackToTop } from "@/components/BackToTop";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";

export default function CarveOutTransaction() {
  return (
    <div className="min-h-screen bg-base text-white selection:bg-primary selection:text-white">
      <SEO 
        title="Carve-Out Transaction Success | Case Study | NexDyne Technologies" 
        description="How we helped an industrial division successfully separate from its parent company and establish standalone operations."
        canonical="/case-studies/carve-out-transaction"
      />
      <Navigation />
      
      {/* DZ10 Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-base via-base/60 to-base"></div>
        
        <div className="container relative z-10 px-4 md:px-12">
          <Breadcrumbs />
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6 block">Case Study · Industrial</span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight leading-[1.05] mb-4">
              <span className="text-primary">$220M</span> carve-out creates standalone success
            </h1>
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-3xl mb-8">
              How we helped an industrial division successfully separate from its parent company, establish standalone operations, and position for accelerated growth under new ownership.
            </p>
            
            {/* PDF Download Button */}
            <CaseStudyPDFButton
              title="$220M carve-out creates standalone success"
              industry="Industrial"
              summary="How we helped an industrial division successfully separate from its parent company, establish standalone operations, and position for accelerated growth under new ownership."
              challenge="See full case study for detailed challenge description."
              solution="See full case study for detailed solution description."
              results={[
                "Significant business impact achieved",
                "Measurable improvements delivered",
                "Client objectives exceeded"
              ]}
              variant="hero"
            />
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-base border-t border-white/10">
        <div className="container px-4 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {[
              { metric: "$220M", label: "Transaction value" },
              { metric: "Day 1", label: "Standalone operations ready" },
              { metric: "100%", label: "TSA exit within 12 months" },
              { metric: "35%", label: "EBITDA improvement Year 2" }
            ].map((stat, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="border-l-2 border-primary/50 pl-8">
                <div className="text-5xl font-serif font-bold text-primary mb-2">{stat.metric}</div>
                <div className="text-base text-white/70">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sticky Navigation */}
      <nav className="sticky top-20 bg-base text-white z-40 border-y border-white/10">
        <div className="container px-4 md:px-12">
          <div className="flex items-center gap-1">
            <a href="#challenge" className="px-6 py-4 text-sm font-medium hover:bg-white/5 transition-colors hover:text-primary">THE CHALLENGE</a>
            <a href="#solution" className="px-6 py-4 text-sm font-medium hover:bg-white/5 transition-colors hover:text-primary">THE SOLUTION</a>
            <a href="#impact" className="px-6 py-4 text-sm font-medium hover:bg-white/5 transition-colors hover:text-primary">THE IMPACT</a>
          </div>
        </div>
      </nav>

      {/* Company Overview */}
      <section className="py-16 bg-white text-charcoal">
        <div className="container px-4 md:px-12 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl font-serif font-bold text-charcoal mb-6">Company Overview</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-charcoal/80 leading-relaxed mb-4">
                Our client was an industrial components division of a large conglomerate with $180M in revenue and 850 employees. The parent company had decided to divest non-core assets, and the division was being sold to a private equity firm.
              </p>
              <p className="text-charcoal/70 leading-relaxed">
                The division had operated as part of the larger organization for decades and relied heavily on shared services for IT, HR, finance, and other functions. Creating a standalone company capable of operating independently was a complex undertaking.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mt-12 p-8 bg-base/5 rounded-xl">
              <div><div className="text-sm font-semibold text-primary mb-2">Industry</div><div className="text-charcoal font-medium">Industrial Components</div></div>
              <div><div className="text-sm font-semibold text-primary mb-2">Employees</div><div className="text-charcoal font-medium">850</div></div>
              <div><div className="text-sm font-semibold text-primary mb-2">Annual Revenue</div><div className="text-charcoal font-medium">$180M</div></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Challenge Section */}
      <section id="challenge" className="py-24 md:py-32 bg-primary">
        <div className="container px-4 md:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/80 mb-6 block">The Challenge</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white max-w-4xl leading-tight">Creating a standalone company from an integrated division</h2>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white text-charcoal">
        <div className="container px-4 md:px-12 max-w-4xl">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-serif font-bold text-charcoal mb-4">Deep integration with parent systems</h3>
              <p className="text-charcoal/70 leading-relaxed">The division relied on the parent company's ERP system, HR platform, financial reporting, and IT infrastructure. Separating these systems while maintaining business continuity was a significant technical challenge.</p>
            </div>
            <div>
              <h3 className="text-xl font-serif font-bold text-charcoal mb-4">Shared services dependencies</h3>
              <p className="text-charcoal/70 leading-relaxed">Many corporate functions—finance, HR, legal, IT—were provided by the parent company. The division needed to either build these capabilities internally or find alternative providers, all while maintaining operations.</p>
            </div>
            <div>
              <h3 className="text-xl font-serif font-bold text-charcoal mb-4">Tight timeline to close</h3>
              <p className="text-charcoal/70 leading-relaxed">The transaction had a fixed close date, and the division needed to be ready to operate independently on Day 1. There was no room for delays or operational disruptions that could impact customers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 md:py-32 bg-base">
        <div className="container px-4 md:px-12 max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <blockquote className="text-3xl md:text-4xl font-serif text-primary leading-tight mb-8">
              "We had been part of a larger organization for so long that we didn't even know all the ways we depended on parent company resources. We needed help identifying all the dependencies and building a plan to stand on our own."
            </blockquote>
            <div className="text-base text-white"><div className="font-semibold">— Michael Torres</div><div className="text-white/60">Division President, Client Company</div></div>
          </motion.div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-24 md:py-32 bg-primary">
        <div className="container px-4 md:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/80 mb-6 block">The Solution</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white max-w-4xl leading-tight">Comprehensive separation and standup program</h2>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white text-charcoal">
        <div className="container px-4 md:px-12 max-w-4xl">
          <p className="text-xl text-charcoal/80 leading-relaxed mb-12">We led a comprehensive separation program that identified all dependencies, developed standalone capabilities, and ensured Day 1 readiness.</p>
          <div className="space-y-12">
            <div className="flex gap-8">
              <div className="flex-shrink-0"><div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">1</div></div>
              <div>
                <h3 className="text-xl font-serif font-bold text-charcoal mb-4 flex items-center gap-3"><Scissors className="w-6 h-6 text-primary" />Dependency mapping and separation planning</h3>
                <p className="text-charcoal/70 leading-relaxed mb-4">We conducted a comprehensive assessment of all dependencies on the parent company and developed a detailed separation plan.</p>
                <ul className="space-y-2 text-charcoal/70">
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span>Identified 150+ dependencies across all functions</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span>Categorized by criticality and separation approach</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span>Developed detailed workplans for each workstream</span></li>
                </ul>
              </div>
            </div>
            <div className="flex gap-8">
              <div className="flex-shrink-0"><div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">2</div></div>
              <div>
                <h3 className="text-xl font-serif font-bold text-charcoal mb-4 flex items-center gap-3"><Building className="w-6 h-6 text-primary" />Standalone capability development</h3>
                <p className="text-charcoal/70 leading-relaxed mb-4">We helped build or source all capabilities needed to operate as a standalone company, from IT systems to corporate functions.</p>
                <ul className="space-y-2 text-charcoal/70">
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span>Implemented new ERP and core business systems</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span>Established finance, HR, and IT functions</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span>Negotiated and managed TSA with parent company</span></li>
                </ul>
              </div>
            </div>
            <div className="flex gap-8">
              <div className="flex-shrink-0"><div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">3</div></div>
              <div>
                <h3 className="text-xl font-serif font-bold text-charcoal mb-4 flex items-center gap-3"><Users className="w-6 h-6 text-primary" />Day 1 readiness and TSA exit</h3>
                <p className="text-charcoal/70 leading-relaxed mb-4">We ensured the company was ready to operate independently on Day 1 and managed the transition off transitional service agreements.</p>
                <ul className="space-y-2 text-charcoal/70">
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span>Day 1 readiness testing and cutover planning</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span>TSA management and exit planning</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span>Post-close stabilization and optimization</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="py-24 md:py-32 bg-primary">
        <div className="container px-4 md:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/80 mb-6 block">The Impact</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white max-w-4xl leading-tight">Results & Impact</h2>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white text-charcoal">
        <div className="container px-4 md:px-12 max-w-4xl">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-serif font-bold text-charcoal mb-4 flex items-center gap-3"><Target className="w-6 h-6 text-primary" />Successful transaction close</h3>
              <p className="text-charcoal/70 leading-relaxed mb-4">The $220M transaction closed on schedule with the company fully ready to operate independently on Day 1, with no disruption to customers or operations.</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-6 bg-base/5 rounded-xl"><div className="text-3xl font-serif font-bold text-charcoal mb-2">$220M</div><div className="text-sm text-charcoal/60">Transaction value</div></div>
                <div className="p-6 bg-base/5 rounded-xl"><div className="text-3xl font-serif font-bold text-charcoal mb-2">Day 1</div><div className="text-sm text-charcoal/60">Standalone operations ready</div></div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-serif font-bold text-charcoal mb-4 flex items-center gap-3"><Scissors className="w-6 h-6 text-primary" />Clean TSA exit</h3>
              <p className="text-charcoal/70 leading-relaxed mb-4">All transitional service agreements were exited within 12 months, ahead of schedule and under budget, eliminating ongoing dependencies on the former parent.</p>
              <div className="p-6 bg-base/5 rounded-xl"><div className="text-3xl font-serif font-bold text-charcoal mb-2">100%</div><div className="text-sm text-charcoal/60">TSA exit within 12 months</div></div>
            </div>
            <div>
              <h3 className="text-xl font-serif font-bold text-charcoal mb-4 flex items-center gap-3"><TrendingUp className="w-6 h-6 text-primary" />Improved standalone performance</h3>
              <p className="text-charcoal/70 leading-relaxed mb-4">Free from conglomerate constraints, the company optimized operations and improved EBITDA margins by 35% in Year 2, exceeding the PE firm's investment thesis.</p>
              <div className="p-6 bg-base/5 rounded-xl"><div className="text-3xl font-serif font-bold text-charcoal mb-2">35%</div><div className="text-sm text-charcoal/60">EBITDA improvement in Year 2</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section 2 */}
      <section className="py-24 md:py-32 bg-base">
        <div className="container px-4 md:px-12 max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <blockquote className="text-3xl md:text-4xl font-serif text-primary leading-tight mb-8">
              "The separation was the most complex project we'd ever undertaken, and NexDyne made it manageable. We closed on time, operated seamlessly from Day 1, and are now performing better than ever as a standalone company."
            </blockquote>
            <div className="text-base text-white"><div className="font-semibold">— Michael Torres</div><div className="text-white/60">CEO, Client Company (post-transaction)</div></div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container px-4 md:px-12">
          <CaseStudyContactForm caseStudyTitle="Carve-Out Transaction" />
        </div>
      </section>

      {/* Related Cases */}
      <section className="py-24 md:py-32 bg-base">
        <div className="container px-4 md:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/60 mb-6 block">Related Case Studies</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">More success stories</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
            {[
              { title: "Post-merger integration success", industry: "Professional Services", description: "How we helped capture 120% of projected synergies", link: "/case-studies/post-merger-integration" },
              { title: "Strategic acquisition for market expansion", industry: "Technology", description: "How we helped identify and execute a transformational acquisition", link: "/case-studies/strategic-acquisition" }
            ].map((item, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}>
                <Link href={item.link} className="group block h-full p-8 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                  <span className="text-xs font-bold text-primary uppercase tracking-wider">{item.industry}</span>
                  <h3 className="text-xl font-serif font-bold text-white mt-2 group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-white/60 mt-2">{item.description}</p>
                  <span className="text-primary text-sm font-semibold flex items-center gap-1 mt-4 group-hover:gap-2 transition-all">Read case study <ArrowRight className="w-3 h-3" /></span>
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-16">
            <Link href="/case-studies"><Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-base font-semibold transition-all bg-transparent"><ArrowLeft className="w-4 h-4 mr-2" />Back to all case studies</Button></Link>
          </div>
        </div>
      </section>

      <BackToTop />
      <Footer />
    </div>
  );
}
