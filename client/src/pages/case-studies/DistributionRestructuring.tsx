import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, ArrowLeft, TrendingUp, Target, Truck, Building, BarChart3, CheckCircle2, Download } from 'lucide-react';
import { CaseStudyPDFButton } from "@/components/CaseStudyPDFButton";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import CaseStudyContactForm from "@/components/CaseStudyContactForm";
import { BackToTop } from "@/components/BackToTop";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";

export default function DistributionRestructuring() {
  return (
    <div className="min-h-screen bg-base text-white selection:bg-primary selection:text-white">
      <SEO 
        title="Distribution Restructuring | Case Study | NexDyne Technologies" 
        description="How we helped a distribution company restructure operations for scalability, achieving 40% improvement in operating margins."
        canonical="/case-studies/distribution-restructuring"
      />
      <Navigation />
      
      {/* DZ10 Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-base via-base/60 to-base"></div>
        
        <div className="container relative z-10 px-4 md:px-12">
          <Breadcrumbs />
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6 block">Case Study · Distribution</span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-4">
              <span className="text-primary">40%</span> margin improvement through restructuring
            </h1>
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-3xl mb-8">
              How we helped a regional distribution company restructure operations for scalability, improving operating margins and positioning for growth.
            </p>
            
            {/* PDF Download Button */}
            <CaseStudyPDFButton
              title="40% margin improvement through restructuring"
              industry="Distribution"
              summary="How we helped a regional distribution company restructure operations for scalability, improving operating margins and positioning for growth."
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
              { metric: "40%", label: "Operating margin improvement" },
              { metric: "25%", label: "Reduction in logistics costs" },
              { metric: "3", label: "Facilities consolidated" },
              { metric: "99.2%", label: "Order accuracy achieved" }
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
                Our client is a regional distribution company with $95M in revenue, serving industrial customers across the Midwest. The company had grown through acquisition over the past decade, resulting in a fragmented operational footprint.
              </p>
              <p className="text-charcoal/70 leading-relaxed">
                Despite strong revenue, profitability had declined as operational complexity increased. The leadership team recognized the need for fundamental restructuring to improve margins and create a platform for future growth.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mt-12 p-8 bg-base/5 rounded-xl">
              <div><div className="text-sm font-semibold text-primary mb-2">Industry</div><div className="text-charcoal font-medium">Industrial Distribution</div></div>
              <div><div className="text-sm font-semibold text-primary mb-2">Employees</div><div className="text-charcoal font-medium">320</div></div>
              <div><div className="text-sm font-semibold text-primary mb-2">Annual Revenue</div><div className="text-charcoal font-medium">$95M</div></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Challenge Section */}
      <section id="challenge" className="py-24 md:py-32 bg-primary">
        <div className="container px-4 md:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/80 mb-6 block">The Challenge</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white max-w-4xl leading-tight">Fragmented operations eroding profitability</h2>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white text-charcoal">
        <div className="container px-4 md:px-12 max-w-4xl">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-charcoal mb-4">Redundant facilities and infrastructure</h3>
              <p className="text-charcoal/70 leading-relaxed">Multiple acquisitions had left the company with seven distribution facilities, many with overlapping service areas. Fixed costs were high and capacity utilization was low across the network.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-charcoal mb-4">Inconsistent processes and systems</h3>
              <p className="text-charcoal/70 leading-relaxed">Each acquired company had brought its own systems and processes. The resulting complexity made it difficult to manage operations efficiently and provide consistent customer service.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-charcoal mb-4">Rising logistics costs</h3>
              <p className="text-charcoal/70 leading-relaxed">The fragmented network resulted in inefficient routing and high transportation costs. Logistics expenses had grown faster than revenue for three consecutive years.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 md:py-32 bg-base">
        <div className="container px-4 md:px-12 max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <blockquote className="text-3xl md:text-4xl text-primary leading-tight mb-8">
              "We had grown through acquisition but never really integrated. We were running seven different companies under one roof, and it was killing our margins. We needed to become one company."
            </blockquote>
            <div className="text-base text-white"><div className="font-semibold">— Robert Anderson</div><div className="text-white/60">CEO, Client Company</div></div>
          </motion.div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-24 md:py-32 bg-primary">
        <div className="container px-4 md:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/80 mb-6 block">The Solution</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white max-w-4xl leading-tight">Network optimization and operational integration</h2>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white text-charcoal">
        <div className="container px-4 md:px-12 max-w-4xl">
          <p className="text-xl text-charcoal/80 leading-relaxed mb-12">We led a comprehensive restructuring program that optimized the distribution network, standardized operations, and built a scalable platform for growth.</p>
          <div className="space-y-12">
            <div className="flex gap-8">
              <div className="flex-shrink-0"><div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">1</div></div>
              <div>
                <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center gap-3"><Building className="w-6 h-6 text-primary" />Network optimization</h3>
                <p className="text-charcoal/70 leading-relaxed mb-4">We analyzed the distribution network and developed an optimized footprint that reduced facilities while improving service levels.</p>
                <ul className="space-y-2 text-charcoal/70">
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span>Network modeling and optimization analysis</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span>Facility consolidation from 7 to 4 locations</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span>Strategic facility upgrades and automation</span></li>
                </ul>
              </div>
            </div>
            <div className="flex gap-8">
              <div className="flex-shrink-0"><div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">2</div></div>
              <div>
                <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center gap-3"><Truck className="w-6 h-6 text-primary" />Logistics optimization</h3>
                <p className="text-charcoal/70 leading-relaxed mb-4">We redesigned routing and transportation to reduce costs while improving delivery performance.</p>
                <ul className="space-y-2 text-charcoal/70">
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span>Route optimization and fleet right-sizing</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span>Carrier management and rate negotiation</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span>Transportation management system implementation</span></li>
                </ul>
              </div>
            </div>
            <div className="flex gap-8">
              <div className="flex-shrink-0"><div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">3</div></div>
              <div>
                <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center gap-3"><BarChart3 className="w-6 h-6 text-primary" />Process standardization</h3>
                <p className="text-charcoal/70 leading-relaxed mb-4">We standardized operations across all facilities with common processes, systems, and performance metrics.</p>
                <ul className="space-y-2 text-charcoal/70">
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span>Standard operating procedures development</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span>WMS consolidation and upgrade</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span>Performance management and KPI dashboards</span></li>
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
              <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center gap-3"><TrendingUp className="w-6 h-6 text-primary" />Significant margin improvement</h3>
              <p className="text-charcoal/70 leading-relaxed mb-4">Operating margins improved by 40% through reduced fixed costs, lower logistics expenses, and improved operational efficiency.</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-6 bg-base/5 rounded-xl"><div className="text-3xl font-bold text-charcoal mb-2">40%</div><div className="text-sm text-charcoal/60">Operating margin improvement</div></div>
                <div className="p-6 bg-base/5 rounded-xl"><div className="text-3xl font-bold text-charcoal mb-2">$8M</div><div className="text-sm text-charcoal/60">Annual cost savings</div></div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center gap-3"><Truck className="w-6 h-6 text-primary" />Reduced logistics costs</h3>
              <p className="text-charcoal/70 leading-relaxed mb-4">Transportation and logistics costs decreased by 25% through network optimization, route efficiency, and improved carrier management.</p>
              <div className="p-6 bg-base/5 rounded-xl"><div className="text-3xl font-bold text-charcoal mb-2">25%</div><div className="text-sm text-charcoal/60">Reduction in logistics costs</div></div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center gap-3"><Target className="w-6 h-6 text-primary" />Improved service levels</h3>
              <p className="text-charcoal/70 leading-relaxed mb-4">Despite facility consolidation, service levels improved with order accuracy reaching 99.2% and on-time delivery improving to 97%.</p>
              <div className="p-6 bg-base/5 rounded-xl"><div className="text-3xl font-bold text-charcoal mb-2">99.2%</div><div className="text-sm text-charcoal/60">Order accuracy achieved</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section 2 */}
      <section className="py-24 md:py-32 bg-base">
        <div className="container px-4 md:px-12 max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <blockquote className="text-3xl md:text-4xl text-primary leading-tight mb-8">
              "The restructuring transformed our business. We're more profitable, more efficient, and better positioned for growth. NexDyne helped us see what was possible and execute a complex transformation without disrupting our customers."
            </blockquote>
            <div className="text-base text-white"><div className="font-semibold">— Robert Anderson</div><div className="text-white/60">CEO, Client Company</div></div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container px-4 md:px-12">
          <CaseStudyContactForm caseStudyTitle="Distribution Restructuring" />
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
              { title: "Professional services growth transformation", industry: "Professional Services", description: "How we helped achieve 85% revenue growth", link: "/case-studies/professional-services-growth" },
              { title: "Healthcare transformation", industry: "Healthcare", description: "How we helped transform a healthcare organization", link: "/case-studies/healthcare-transformation" }
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
