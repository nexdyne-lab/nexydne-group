import { Link } from "wouter";
import { motion } from "framer-motion";
import { CaseStudyPDFButton } from "@/components/CaseStudyPDFButton";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import CaseStudyContactForm from "@/components/CaseStudyContactForm";
import { BackToTop } from "@/components/BackToTop";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";

export default function DistributionWorkingCapital() {
  return (
    <div className="min-h-screen bg-white text-white selection:bg-primary selection:text-white">
      <SEO
        title="Working Capital Optimization | Case Study | NexDyne Technologies"
        description="How we helped a distribution company free up $12M in working capital through inventory optimization and process improvement."
        canonical="/case-studies/distribution-working-capital"
      />
      <Navigation />

      {/* DZ10 Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0"></div>

        <div className="container relative z-10 px-4 md:px-12">
          <Breadcrumbs />
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl">
            <span className="text-xs uppercase tracking-[0.2em] text-primary mb-6 block">Case Study · Distribution</span>
            <h1 className="text-5xl md:text-7xl tracking-tight leading-[1.05] mb-4">
              <span className="text-primary">$12M</span> freed through working capital optimization
            </h1>
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-3xl mb-8">
              How we helped a distribution company unlock significant cash through inventory optimization, receivables management, and process improvement.
            </p>

            {/* PDF Download Button */}
            <CaseStudyPDFButton
              title="$12M freed through working capital optimization"
              industry="Distribution"
              summary="How we helped a distribution company unlock significant cash through inventory optimization, receivables management, and process improvement."
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
      <section className="py-16 bg-white border-t border-white/10">
        <div className="container px-4 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {[
              { metric: "$12M", label: "Working capital freed" },
              { metric: "35%", label: "Inventory reduction" },
              { metric: "12 days", label: "DSO improvement" },
              { metric: "99.5%", label: "Service level maintained" }
            ].map((stat, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="border-l-2 border-primary/50 pl-8">
                <div className="text-5xl text-primary mb-2">{stat.metric}</div>
                <div className="text-base text-white/70">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sticky Navigation */}
      <nav className="sticky top-20 bg-white text-white z-40 border-y border-white/10">
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
            <h2 className="text-3xl text-charcoal mb-6">Company Overview</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-charcoal/80 leading-relaxed mb-4">
                Our client is a specialty distribution company with $180M in revenue, serving industrial and commercial customers with a catalog of over 50,000 SKUs. The company had grown rapidly through acquisition but hadn't optimized working capital management.
              </p>
              <p className="text-charcoal/70 leading-relaxed">
                With significant debt from recent acquisitions, the company needed to free up cash to fund growth initiatives and reduce leverage. Working capital optimization represented the largest opportunity to generate cash without impacting operations.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mt-12 p-8 bg-white/5">
              <div><div className="text-sm font-semibold text-primary mb-2">Industry</div><div className="text-charcoal font-medium">Specialty Distribution</div></div>
              <div><div className="text-sm font-semibold text-primary mb-2">SKUs</div><div className="text-charcoal font-medium">50,000+</div></div>
              <div><div className="text-sm font-semibold text-primary mb-2">Annual Revenue</div><div className="text-charcoal font-medium">$180M</div></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Challenge Section */}
      <section id="challenge" className="py-24 md:py-32 bg-primary">
        <div className="container px-4 md:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="text-xs uppercase tracking-[0.2em] text-white/80 mb-6 block">The Challenge</span>
            <h2 className="text-4xl md:text-5xl text-white max-w-4xl leading-tight">Cash trapped in working capital</h2>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white text-charcoal">
        <div className="container px-4 md:px-12 max-w-4xl">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl text-charcoal mb-4">Excess inventory across the network</h3>
              <p className="text-charcoal/70 leading-relaxed">Inventory had grown faster than sales, with significant excess and obsolete stock. Multiple acquired companies had brought their own inventory policies, resulting in inconsistent practices and excess safety stock.</p>
            </div>
            <div>
              <h3 className="text-xl text-charcoal mb-4">Slow receivables collection</h3>
              <p className="text-charcoal/70 leading-relaxed">Days Sales Outstanding (DSO) had crept up to 52 days, well above industry benchmarks. Collection processes were manual and inconsistent, and credit policies varied across acquired businesses.</p>
            </div>
            <div>
              <h3 className="text-xl text-charcoal mb-4">Fear of service level impact</h3>
              <p className="text-charcoal/70 leading-relaxed">Previous inventory reduction efforts had resulted in stockouts and customer complaints. The organization was hesitant to reduce inventory without confidence that service levels could be maintained.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container px-4 md:px-12 max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <blockquote className="text-3xl md:text-4xl text-primary leading-tight mb-8">
              "We knew we had too much cash tied up in working capital, but we were afraid to make changes that might hurt customer service. We needed a data-driven approach that would give us confidence we could reduce inventory without impacting fill rates."
            </blockquote>
            <div className="text-base text-white"><div className="font-semibold">— Jennifer Davis</div><div className="text-white/60">CFO, Client Company</div></div>
          </motion.div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-24 md:py-32 bg-primary">
        <div className="container px-4 md:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="text-xs uppercase tracking-[0.2em] text-white/80 mb-6 block">The Solution</span>
            <h2 className="text-4xl md:text-5xl text-white max-w-4xl leading-tight">Data-driven working capital optimization</h2>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white text-charcoal">
        <div className="container px-4 md:px-12 max-w-4xl">
          <p className="text-xl text-charcoal/80 leading-relaxed mb-12">We implemented a comprehensive working capital optimization program using advanced analytics to right-size inventory while improving service levels.</p>
          <div className="space-y-12">
            <div className="flex gap-8">
              <div className="flex-shrink-0"><div className="w-12 h-12 bg-primary text-white flex items-center justify-center text-lg">1</div></div>
              <div>
                <h3 className="text-xl text-charcoal mb-4 flex items-center gap-3">Inventory optimization</h3>
                <p className="text-charcoal/70 leading-relaxed mb-4">We used advanced analytics to segment SKUs and optimize inventory levels based on demand patterns, lead times, and service level requirements.</p>
                <ul className="space-y-2 text-charcoal/70">
                  <li className="flex items-start gap-2"><span>SKU segmentation and demand analysis</span></li>
                  <li className="flex items-start gap-2"><span>Safety stock optimization by segment</span></li>
                  <li className="flex items-start gap-2"><span>Excess and obsolete inventory disposition</span></li>
                </ul>
              </div>
            </div>
            <div className="flex gap-8">
              <div className="flex-shrink-0"><div className="w-12 h-12 bg-primary text-white flex items-center justify-center text-lg">2</div></div>
              <div>
                <h3 className="text-xl text-charcoal mb-4 flex items-center gap-3">Receivables improvement</h3>
                <p className="text-charcoal/70 leading-relaxed mb-4">We standardized credit policies and implemented systematic collection processes to accelerate cash collection.</p>
                <ul className="space-y-2 text-charcoal/70">
                  <li className="flex items-start gap-2"><span>Credit policy standardization</span></li>
                  <li className="flex items-start gap-2"><span>Collections process redesign</span></li>
                  <li className="flex items-start gap-2"><span>Automated dunning and escalation</span></li>
                </ul>
              </div>
            </div>
            <div className="flex gap-8">
              <div className="flex-shrink-0"><div className="w-12 h-12 bg-primary text-white flex items-center justify-center text-lg">3</div></div>
              <div>
                <h3 className="text-xl text-charcoal mb-4 flex items-center gap-3">Demand planning improvement</h3>
                <p className="text-charcoal/70 leading-relaxed mb-4">We implemented improved demand forecasting and planning processes to reduce forecast error and enable leaner inventory.</p>
                <ul className="space-y-2 text-charcoal/70">
                  <li className="flex items-start gap-2"><span>Statistical forecasting implementation</span></li>
                  <li className="flex items-start gap-2"><span>S&OP process establishment</span></li>
                  <li className="flex items-start gap-2"><span>Supplier collaboration for lead time reduction</span></li>
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
            <span className="text-xs uppercase tracking-[0.2em] text-white/80 mb-6 block">The Impact</span>
            <h2 className="text-4xl md:text-5xl text-white max-w-4xl leading-tight">Results & Impact</h2>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white text-charcoal">
        <div className="container px-4 md:px-12 max-w-4xl">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl text-charcoal mb-4 flex items-center gap-3">Significant cash release</h3>
              <p className="text-charcoal/70 leading-relaxed mb-4">The program freed up $12M in working capital, enabling the company to pay down debt and fund growth initiatives without external financing.</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-6 bg-white/5"><div className="text-3xl text-charcoal mb-2">$12M</div><div className="text-sm text-charcoal/60">Working capital freed</div></div>
                <div className="p-6 bg-white/5"><div className="text-3xl text-charcoal mb-2">35%</div><div className="text-sm text-charcoal/60">Inventory reduction</div></div>
              </div>
            </div>
            <div>
              <h3 className="text-xl text-charcoal mb-4 flex items-center gap-3">Improved cash conversion</h3>
              <p className="text-charcoal/70 leading-relaxed mb-4">DSO improved by 12 days through standardized credit policies and systematic collection processes, accelerating cash flow.</p>
              <div className="p-6 bg-white/5"><div className="text-3xl text-charcoal mb-2">12 days</div><div className="text-sm text-charcoal/60">DSO improvement</div></div>
            </div>
            <div>
              <h3 className="text-xl text-charcoal mb-4 flex items-center gap-3">Service levels maintained</h3>
              <p className="text-charcoal/70 leading-relaxed mb-4">Despite significant inventory reduction, service levels actually improved to 99.5% fill rate through better demand planning and inventory positioning.</p>
              <div className="p-6 bg-white/5"><div className="text-3xl text-charcoal mb-2">99.5%</div><div className="text-sm text-charcoal/60">Service level achieved</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section 2 */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container px-4 md:px-12 max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <blockquote className="text-3xl md:text-4xl text-primary leading-tight mb-8">
              "The results exceeded our expectations. We freed up $12M in cash while actually improving service levels. NexDyne's data-driven approach gave us confidence to make changes we wouldn't have made on our own."
            </blockquote>
            <div className="text-base text-white"><div className="font-semibold">— Jennifer Davis</div><div className="text-white/60">CFO, Client Company</div></div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container px-4 md:px-12">
          <CaseStudyContactForm caseStudyTitle="Working Capital Optimization" />
        </div>
      </section>

      {/* Related Cases */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container px-4 md:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-16">
            <span className="text-xs uppercase tracking-[0.2em] text-white/60 mb-6 block">Related Case Studies</span>
            <h2 className="text-4xl md:text-5xl text-white">More success stories</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
            {[
              { title: "Manufacturing cost reduction", industry: "Manufacturing", description: "How we helped achieve $18M in annual savings", link: "/case-studies/manufacturing-cost-reduction" },
              { title: "E-commerce operations transformation", industry: "E-commerce", description: "How we helped scale operations 3x", link: "/case-studies/ecommerce-operations" }
            ].map((item, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}>
                <Link href={item.link} className="group block h-full p-8 bg-white/5 hover:bg-white/10 transition-colors">
                  <span className="text-xs text-primary uppercase tracking-wider">{item.industry}</span>
                  <h3 className="text-xl text-white mt-2 group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-white/60 mt-2">{item.description}</p>
                  <span className="text-primary text-sm font-semibold flex items-center gap-1 mt-4 group-hover:gap-2 transition-all">Read case study <ArrowRight className="w-3 h-3" /></span>
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-16">
            <Link href="/case-studies"><Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-base font-semibold transition-all bg-transparent">Back to all case studies</Button></Link>
          </div>
        </div>
      </section>

      <BackToTop />
      <Footer />
    </div>
  );
}
