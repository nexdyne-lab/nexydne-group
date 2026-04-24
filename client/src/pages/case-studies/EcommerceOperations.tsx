import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, ArrowLeft, TrendingUp, Target, ShoppingCart, Truck, BarChart3, CheckCircle2, Download } from 'lucide-react';
import { CaseStudyPDFButton } from "@/components/CaseStudyPDFButton";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import CaseStudyContactForm from "@/components/CaseStudyContactForm";
import { BackToTop } from "@/components/BackToTop";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";

export default function EcommerceOperations() {
  return (
    <div className="min-h-screen bg-base text-white selection:bg-primary selection:text-white">
      <SEO 
        title="E-commerce Operations Transformation | Case Study | NexDyne Technologies" 
        description="How we helped an e-commerce company scale operations 3x while reducing cost per order by 28%."
        canonical="/case-studies/ecommerce-operations"
      />
      <Navigation />
      
      {/* DZ10 Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-base via-base/60 to-base"></div>
        
        <div className="container relative z-10 px-4 md:px-12">
          <Breadcrumbs />
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6 block">Case Study · E-commerce</span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-4">
              <span className="text-primary">3x</span> scale with 28% lower cost per order
            </h1>
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-3xl mb-8">
              How we helped a fast-growing e-commerce company build scalable operations that could handle rapid growth while improving unit economics.
            </p>
            
            {/* PDF Download Button */}
            <CaseStudyPDFButton
              title="3x scale with 28% lower cost per order"
              industry="E-commerce"
              summary="How we helped a fast-growing e-commerce company build scalable operations that could handle rapid growth while improving unit economics."
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
              { metric: "3x", label: "Order volume scaled" },
              { metric: "28%", label: "Reduction in cost per order" },
              { metric: "99.8%", label: "Order accuracy achieved" },
              { metric: "1.2 days", label: "Average ship time" }
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
                Our client is a direct-to-consumer e-commerce company with $65M in revenue, selling specialty consumer products through their website and marketplace channels. The company had experienced rapid growth but operations were struggling to keep pace.
              </p>
              <p className="text-charcoal/70 leading-relaxed">
                With plans to triple order volume over the next two years, the company needed to fundamentally transform operations to handle growth while improving unit economics. The existing operation was already at capacity and costs were rising.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mt-12 p-8 bg-base/5 rounded-xl">
              <div><div className="text-sm font-semibold text-primary mb-2">Industry</div><div className="text-charcoal font-medium">E-commerce / DTC</div></div>
              <div><div className="text-sm font-semibold text-primary mb-2">Daily Orders</div><div className="text-charcoal font-medium">5,000+</div></div>
              <div><div className="text-sm font-semibold text-primary mb-2">Annual Revenue</div><div className="text-charcoal font-medium">$65M</div></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Challenge Section */}
      <section id="challenge" className="py-24 md:py-32 bg-primary">
        <div className="container px-4 md:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/80 mb-6 block">The Challenge</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white max-w-4xl leading-tight">Operations at breaking point</h2>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white text-charcoal">
        <div className="container px-4 md:px-12 max-w-4xl">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-charcoal mb-4">Capacity constraints</h3>
              <p className="text-charcoal/70 leading-relaxed">The fulfillment operation was at capacity during peak periods, resulting in delayed shipments and overtime costs. The facility layout and processes couldn't handle projected growth without major changes.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-charcoal mb-4">Rising costs per order</h3>
              <p className="text-charcoal/70 leading-relaxed">Cost per order had increased 15% over the past year as the operation struggled with growth. Labor productivity was declining, and error rates were increasing, driving up costs.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-charcoal mb-4">Customer experience issues</h3>
              <p className="text-charcoal/70 leading-relaxed">Ship times had increased and order accuracy had declined, resulting in customer complaints and returns. The company was at risk of losing marketplace seller ratings and customer loyalty.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 md:py-32 bg-base">
        <div className="container px-4 md:px-12 max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <blockquote className="text-3xl md:text-4xl text-primary leading-tight mb-8">
              "We were growing fast but our operations couldn't keep up. We were spending more per order, shipping slower, and making more mistakes. We needed to completely rethink how we fulfilled orders."
            </blockquote>
            <div className="text-base text-white"><div className="font-semibold">— Amanda Chen</div><div className="text-white/60">COO, Client Company</div></div>
          </motion.div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-24 md:py-32 bg-primary">
        <div className="container px-4 md:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/80 mb-6 block">The Solution</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white max-w-4xl leading-tight">Scalable fulfillment transformation</h2>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white text-charcoal">
        <div className="container px-4 md:px-12 max-w-4xl">
          <p className="text-xl text-charcoal/80 leading-relaxed mb-12">We designed and implemented a scalable fulfillment operation that could handle 3x growth while reducing cost per order and improving customer experience.</p>
          <div className="space-y-12">
            <div className="flex gap-8">
              <div className="flex-shrink-0"><div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">1</div></div>
              <div>
                <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center gap-3"><ShoppingCart className="w-6 h-6 text-primary" />Fulfillment redesign</h3>
                <p className="text-charcoal/70 leading-relaxed mb-4">We redesigned the fulfillment operation with optimized layout, processes, and automation to dramatically increase throughput and reduce costs.</p>
                <ul className="space-y-2 text-charcoal/70">
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span>Facility layout optimization</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span>Pick/pack process redesign</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span>Automation implementation</span></li>
                </ul>
              </div>
            </div>
            <div className="flex gap-8">
              <div className="flex-shrink-0"><div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">2</div></div>
              <div>
                <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center gap-3"><Truck className="w-6 h-6 text-primary" />Shipping optimization</h3>
                <p className="text-charcoal/70 leading-relaxed mb-4">We optimized carrier selection, packaging, and shipping processes to reduce costs and improve delivery speed.</p>
                <ul className="space-y-2 text-charcoal/70">
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span>Multi-carrier strategy and rate optimization</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span>Packaging right-sizing and standardization</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span>Zone-skipping and consolidation programs</span></li>
                </ul>
              </div>
            </div>
            <div className="flex gap-8">
              <div className="flex-shrink-0"><div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">3</div></div>
              <div>
                <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center gap-3"><BarChart3 className="w-6 h-6 text-primary" />Quality and performance management</h3>
                <p className="text-charcoal/70 leading-relaxed mb-4">We implemented quality controls and performance management systems to ensure accuracy and enable continuous improvement.</p>
                <ul className="space-y-2 text-charcoal/70">
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span>Quality control checkpoints</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span>Real-time performance dashboards</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span>Continuous improvement program</span></li>
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
              <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center gap-3"><TrendingUp className="w-6 h-6 text-primary" />Scalable capacity</h3>
              <p className="text-charcoal/70 leading-relaxed mb-4">The redesigned operation successfully scaled to handle 3x order volume, supporting the company's rapid growth without capacity constraints.</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-6 bg-base/5 rounded-xl"><div className="text-3xl font-bold text-charcoal mb-2">3x</div><div className="text-sm text-charcoal/60">Order volume scaled</div></div>
                <div className="p-6 bg-base/5 rounded-xl"><div className="text-3xl font-bold text-charcoal mb-2">15,000+</div><div className="text-sm text-charcoal/60">Daily orders at peak</div></div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center gap-3"><Target className="w-6 h-6 text-primary" />Improved unit economics</h3>
              <p className="text-charcoal/70 leading-relaxed mb-4">Cost per order decreased by 28% through process optimization, automation, and shipping improvements—improving profitability as the company scaled.</p>
              <div className="p-6 bg-base/5 rounded-xl"><div className="text-3xl font-bold text-charcoal mb-2">28%</div><div className="text-sm text-charcoal/60">Reduction in cost per order</div></div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center gap-3"><ShoppingCart className="w-6 h-6 text-primary" />Enhanced customer experience</h3>
              <p className="text-charcoal/70 leading-relaxed mb-4">Order accuracy improved to 99.8% and average ship time decreased to 1.2 days, dramatically improving customer satisfaction and marketplace ratings.</p>
              <div className="p-6 bg-base/5 rounded-xl"><div className="text-3xl font-bold text-charcoal mb-2">99.8%</div><div className="text-sm text-charcoal/60">Order accuracy achieved</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section 2 */}
      <section className="py-24 md:py-32 bg-base">
        <div className="container px-4 md:px-12 max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <blockquote className="text-3xl md:text-4xl text-primary leading-tight mb-8">
              "The transformation was remarkable. We tripled our volume while cutting cost per order by 28% and improving customer experience. NexDyne helped us build an operation that can scale with our growth."
            </blockquote>
            <div className="text-base text-white"><div className="font-semibold">— Amanda Chen</div><div className="text-white/60">COO, Client Company</div></div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container px-4 md:px-12">
          <CaseStudyContactForm caseStudyTitle="E-commerce Operations Transformation" />
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
              { title: "Manufacturing cost reduction", industry: "Manufacturing", description: "How we helped achieve $18M in annual savings", link: "/case-studies/manufacturing-cost-reduction" },
              { title: "Distribution working capital optimization", industry: "Distribution", description: "How we helped free up $12M in working capital", link: "/case-studies/distribution-working-capital" }
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
