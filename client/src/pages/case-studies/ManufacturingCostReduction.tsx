import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, ArrowLeft, TrendingUp, Target, Factory, Cog, BarChart3, CheckCircle2, Download } from 'lucide-react';
import { CaseStudyPDFButton } from "@/components/CaseStudyPDFButton";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import CaseStudyContactForm from "@/components/CaseStudyContactForm";
import { BackToTop } from "@/components/BackToTop";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";

export default function ManufacturingCostReduction() {
  return (
    <div className="min-h-screen bg-base text-white selection:bg-primary selection:text-white">
      <SEO 
        title="Manufacturing Cost Reduction | Case Study | NexDyne Technologies" 
        description="How we helped a manufacturer achieve $18M in annual cost savings through operational excellence and lean transformation."
        canonical="/case-studies/manufacturing-cost-reduction"
      />
      <Navigation />
      
      {/* DZ10 Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-base via-base/60 to-base"></div>
        
        <div className="container relative z-10 px-4 md:px-12">
          <Breadcrumbs />
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6 block">Case Study · Manufacturing</span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-4">
              <span className="text-primary">$18M</span> annual savings through operational excellence
            </h1>
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-3xl mb-8">
              How we helped a mid-market manufacturer achieve significant cost reductions through lean transformation, process optimization, and strategic sourcing.
            </p>
            
            {/* PDF Download Button */}
            <CaseStudyPDFButton
              title="$18M annual savings through operational excellence"
              industry="Manufacturing"
              summary="How we helped a mid-market manufacturer achieve significant cost reductions through lean transformation, process optimization, and strategic sourcing."
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
              { metric: "$18M", label: "Annual cost savings" },
              { metric: "15%", label: "Reduction in COGS" },
              { metric: "40%", label: "Improvement in OEE" },
              { metric: "65%", label: "Reduction in defect rate" }
            ].map((stat, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="border-l-2 border-primary/50 pl-8">
                <div className="text-5xl font-bold text-primary mb-2">{stat.metric}</div>
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
            <h2 className="text-3xl font-bold text-charcoal mb-6">Company Overview</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-charcoal/80 leading-relaxed mb-4">
                Our client is a mid-market manufacturer of industrial components with $120M in revenue and 450 employees across three production facilities. They serve automotive, aerospace, and industrial equipment OEMs with precision-machined parts.
              </p>
              <p className="text-charcoal/70 leading-relaxed">
                Facing margin pressure from customers and rising input costs, the company needed to significantly reduce costs while maintaining quality standards. Previous cost reduction efforts had delivered incremental improvements but hadn't addressed fundamental operational issues.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mt-12 p-8 bg-base/5 rounded-xl">
              <div><div className="text-sm font-semibold text-primary mb-2">Industry</div><div className="text-charcoal font-medium">Industrial Manufacturing</div></div>
              <div><div className="text-sm font-semibold text-primary mb-2">Employees</div><div className="text-charcoal font-medium">450</div></div>
              <div><div className="text-sm font-semibold text-primary mb-2">Annual Revenue</div><div className="text-charcoal font-medium">$120M</div></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Challenge Section */}
      <section id="challenge" className="py-24 md:py-32 bg-primary">
        <div className="container px-4 md:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/80 mb-6 block">The Challenge</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white max-w-4xl leading-tight">Margin erosion threatening competitiveness</h2>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white text-charcoal">
        <div className="container px-4 md:px-12 max-w-4xl">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-charcoal mb-4">Declining gross margins</h3>
              <p className="text-charcoal/70 leading-relaxed">Gross margins had declined from 28% to 22% over three years due to customer price pressure and rising material and labor costs. Without significant cost reduction, the company would become uncompetitive.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-charcoal mb-4">Low equipment effectiveness</h3>
              <p className="text-charcoal/70 leading-relaxed">Overall Equipment Effectiveness (OEE) averaged only 55% across the three facilities, well below industry benchmarks. Unplanned downtime, changeover time, and quality issues were consuming capacity.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-charcoal mb-4">Quality and scrap issues</h3>
              <p className="text-charcoal/70 leading-relaxed">Defect rates were high, resulting in significant scrap costs and customer quality complaints. The company was at risk of losing key customer certifications if quality didn't improve.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 md:py-32 bg-base">
        <div className="container px-4 md:px-12 max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <blockquote className="text-3xl md:text-4xl text-primary leading-tight mb-8">
              "We had tried to cut costs before, but it was always around the edges. We needed a fundamental transformation of how we operated—and we needed help to see what was possible and make it happen."
            </blockquote>
            <div className="text-base text-white"><div className="font-semibold">— Thomas Wright</div><div className="text-white/60">CEO, Client Company</div></div>
          </motion.div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-24 md:py-32 bg-primary">
        <div className="container px-4 md:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/80 mb-6 block">The Solution</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white max-w-4xl leading-tight">Comprehensive operational excellence program</h2>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white text-charcoal">
        <div className="container px-4 md:px-12 max-w-4xl">
          <p className="text-xl text-charcoal/80 leading-relaxed mb-12">We implemented a comprehensive operational excellence program covering lean manufacturing, quality improvement, and strategic sourcing.</p>
          <div className="space-y-12">
            <div className="flex gap-8">
              <div className="flex-shrink-0"><div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">1</div></div>
              <div>
                <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center gap-3"><Factory className="w-6 h-6 text-primary" />Lean manufacturing transformation</h3>
                <p className="text-charcoal/70 leading-relaxed mb-4">We implemented lean principles across all facilities, focusing on waste elimination, flow optimization, and continuous improvement.</p>
                <ul className="space-y-2 text-charcoal/70">
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span>Value stream mapping and waste identification</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span>Cellular manufacturing and flow optimization</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span>SMED for changeover reduction</span></li>
                </ul>
              </div>
            </div>
            <div className="flex gap-8">
              <div className="flex-shrink-0"><div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">2</div></div>
              <div>
                <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center gap-3"><Cog className="w-6 h-6 text-primary" />Equipment effectiveness improvement</h3>
                <p className="text-charcoal/70 leading-relaxed mb-4">We implemented TPM and addressed root causes of downtime, quality losses, and speed losses to dramatically improve OEE.</p>
                <ul className="space-y-2 text-charcoal/70">
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span>Total Productive Maintenance implementation</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span>Root cause analysis and corrective action</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span>Real-time OEE monitoring and management</span></li>
                </ul>
              </div>
            </div>
            <div className="flex gap-8">
              <div className="flex-shrink-0"><div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">3</div></div>
              <div>
                <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center gap-3"><BarChart3 className="w-6 h-6 text-primary" />Strategic sourcing</h3>
                <p className="text-charcoal/70 leading-relaxed mb-4">We optimized the supply base and negotiated improved terms with key suppliers to reduce material costs.</p>
                <ul className="space-y-2 text-charcoal/70">
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span>Spend analysis and category strategy</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span>Supplier consolidation and negotiation</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span>Make vs. buy optimization</span></li>
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
            <h2 className="text-4xl md:text-5xl font-bold text-white max-w-4xl leading-tight">Results & Impact</h2>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white text-charcoal">
        <div className="container px-4 md:px-12 max-w-4xl">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center gap-3"><TrendingUp className="w-6 h-6 text-primary" />Significant cost reduction</h3>
              <p className="text-charcoal/70 leading-relaxed mb-4">The program delivered $18M in annual cost savings, reducing COGS by 15% and restoring gross margins to 30%.</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-6 bg-base/5 rounded-xl"><div className="text-3xl font-bold text-charcoal mb-2">$18M</div><div className="text-sm text-charcoal/60">Annual cost savings</div></div>
                <div className="p-6 bg-base/5 rounded-xl"><div className="text-3xl font-bold text-charcoal mb-2">15%</div><div className="text-sm text-charcoal/60">Reduction in COGS</div></div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center gap-3"><Cog className="w-6 h-6 text-primary" />Improved equipment effectiveness</h3>
              <p className="text-charcoal/70 leading-relaxed mb-4">OEE improved from 55% to 77%, unlocking significant capacity without capital investment and enabling the company to take on new business.</p>
              <div className="p-6 bg-base/5 rounded-xl"><div className="text-3xl font-bold text-charcoal mb-2">40%</div><div className="text-sm text-charcoal/60">Improvement in OEE</div></div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center gap-3"><Target className="w-6 h-6 text-primary" />Quality improvement</h3>
              <p className="text-charcoal/70 leading-relaxed mb-4">Defect rates decreased by 65%, reducing scrap costs and improving customer satisfaction. The company successfully renewed all customer certifications.</p>
              <div className="p-6 bg-base/5 rounded-xl"><div className="text-3xl font-bold text-charcoal mb-2">65%</div><div className="text-sm text-charcoal/60">Reduction in defect rate</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section 2 */}
      <section className="py-24 md:py-32 bg-base">
        <div className="container px-4 md:px-12 max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <blockquote className="text-3xl md:text-4xl text-primary leading-tight mb-8">
              "The transformation exceeded our expectations. We're not just more competitive—we're a fundamentally better company. NexDyne helped us build capabilities that will continue to drive improvement for years to come."
            </blockquote>
            <div className="text-base text-white"><div className="font-semibold">— Thomas Wright</div><div className="text-white/60">CEO, Client Company</div></div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container px-4 md:px-12">
          <CaseStudyContactForm caseStudyTitle="Manufacturing Cost Reduction" />
        </div>
      </section>

      {/* Related Cases */}
      <section className="py-24 md:py-32 bg-base">
        <div className="container px-4 md:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/60 mb-6 block">Related Case Studies</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white">More success stories</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
            {[
              { title: "Distribution working capital optimization", industry: "Distribution", description: "How we helped free up $12M in working capital", link: "/case-studies/distribution-working-capital" },
              { title: "E-commerce operations transformation", industry: "E-commerce", description: "How we helped scale operations 3x", link: "/case-studies/ecommerce-operations" }
            ].map((item, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}>
                <Link href={item.link} className="group block h-full p-8 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                  <span className="text-xs font-bold text-primary uppercase tracking-wider">{item.industry}</span>
                  <h3 className="text-xl font-bold text-white mt-2 group-hover:text-primary transition-colors">{item.title}</h3>
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
