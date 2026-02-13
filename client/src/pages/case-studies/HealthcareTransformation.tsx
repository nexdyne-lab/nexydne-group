import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, ArrowLeft, TrendingUp, Target, Heart, Users, BarChart3, CheckCircle2, Download } from 'lucide-react';
import { CaseStudyPDFButton } from "@/components/CaseStudyPDFButton";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import CaseStudyContactForm from "@/components/CaseStudyContactForm";
import { BackToTop } from "@/components/BackToTop";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";

export default function HealthcareTransformation() {
  return (
    <div className="min-h-screen bg-[#051C2C] text-white selection:bg-[#0077B5] selection:text-white">
      <SEO 
        title="Healthcare Transformation | Case Study | NexDyne Technologies" 
        description="How we helped a healthcare organization transform operations, improving patient outcomes while reducing costs by 22%."
        canonical="/case-studies/healthcare-transformation"
      />
      <Navigation />
      
      {/* DZ10 Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#051C2C] via-[#051C2C]/60 to-[#051C2C]"></div>
        
        <div className="container relative z-10 px-4 md:px-12">
          <Breadcrumbs />
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0077B5] mb-6 block">Case Study · Healthcare</span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight leading-[1.05] mb-4">
              <span className="text-[#0077B5]">22%</span> cost reduction while improving outcomes
            </h1>
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-3xl mb-8">
              How we helped a healthcare organization transform operations to improve patient outcomes, enhance staff satisfaction, and reduce costs through strategic redesign.
            </p>
            
            {/* PDF Download Button */}
            <CaseStudyPDFButton
              title="22% cost reduction while improving outcomes"
              industry="Healthcare"
              summary="How we helped a healthcare organization transform operations to improve patient outcomes, enhance staff satisfaction, and reduce costs through strategic redesign."
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
      <section className="py-16 bg-[#051C2C] border-t border-white/10">
        <div className="container px-4 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {[
              { metric: "22%", label: "Cost reduction achieved" },
              { metric: "35%", label: "Improvement in patient satisfaction" },
              { metric: "28%", label: "Reduction in wait times" },
              { metric: "18pts", label: "Staff engagement increase" }
            ].map((stat, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="border-l-2 border-[#0077B5]/50 pl-8">
                <div className="text-5xl font-serif font-bold text-[#0077B5] mb-2">{stat.metric}</div>
                <div className="text-base text-white/70">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sticky Navigation */}
      <nav className="sticky top-20 bg-[#051C2C] text-white z-40 border-y border-white/10">
        <div className="container px-4 md:px-12">
          <div className="flex items-center gap-1">
            <a href="#challenge" className="px-6 py-4 text-sm font-medium hover:bg-white/5 transition-colors hover:text-[#0077B5]">THE CHALLENGE</a>
            <a href="#solution" className="px-6 py-4 text-sm font-medium hover:bg-white/5 transition-colors hover:text-[#0077B5]">THE SOLUTION</a>
            <a href="#impact" className="px-6 py-4 text-sm font-medium hover:bg-white/5 transition-colors hover:text-[#0077B5]">THE IMPACT</a>
          </div>
        </div>
      </nav>

      {/* Company Overview */}
      <section className="py-16 bg-white text-[#051C2C]">
        <div className="container px-4 md:px-12 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl font-serif font-bold text-[#051C2C] mb-6">Company Overview</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-[#051C2C]/80 leading-relaxed mb-4">
                Our client is a regional healthcare system with three hospitals and 25 outpatient facilities serving a population of 1.2 million. With $850M in annual revenue and 6,500 employees, they are a major employer and healthcare provider in their region.
              </p>
              <p className="text-[#051C2C]/70 leading-relaxed">
                Facing pressure from value-based care models and increasing competition, the organization needed to transform operations to improve quality while reducing costs—a challenge that required fundamental changes to how care was delivered.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mt-12 p-8 bg-[#051C2C]/5 rounded-xl">
              <div><div className="text-sm font-semibold text-[#0077B5] mb-2">Industry</div><div className="text-[#051C2C] font-medium">Healthcare System</div></div>
              <div><div className="text-sm font-semibold text-[#0077B5] mb-2">Employees</div><div className="text-[#051C2C] font-medium">6,500</div></div>
              <div><div className="text-sm font-semibold text-[#0077B5] mb-2">Annual Revenue</div><div className="text-[#051C2C] font-medium">$850M</div></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Challenge Section */}
      <section id="challenge" className="py-24 md:py-32 bg-[#0077B5]">
        <div className="container px-4 md:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/80 mb-6 block">The Challenge</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white max-w-4xl leading-tight">Transforming care delivery in a changing landscape</h2>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white text-[#051C2C]">
        <div className="container px-4 md:px-12 max-w-4xl">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4">Shift to value-based care</h3>
              <p className="text-[#051C2C]/70 leading-relaxed">Reimbursement was increasingly tied to outcomes rather than volume. The organization needed to redesign care delivery to improve quality metrics while managing costs—a fundamental shift from traditional fee-for-service models.</p>
            </div>
            <div>
              <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4">Fragmented care delivery</h3>
              <p className="text-[#051C2C]/70 leading-relaxed">Care was delivered in silos with limited coordination between hospitals, outpatient facilities, and community providers. Patients experienced gaps in care, redundant testing, and poor transitions between settings.</p>
            </div>
            <div>
              <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4">Staff burnout and turnover</h3>
              <p className="text-[#051C2C]/70 leading-relaxed">Clinical staff were overwhelmed with administrative burden and inefficient workflows. Turnover was high, particularly among nurses, creating quality and cost challenges.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 md:py-32 bg-[#051C2C]">
        <div className="container px-4 md:px-12 max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <blockquote className="text-3xl md:text-4xl font-serif text-[#0077B5] leading-tight mb-8">
              "We knew we needed to transform, but the challenge felt overwhelming. We needed a partner who understood healthcare and could help us redesign care delivery without disrupting patient care."
            </blockquote>
            <div className="text-base text-white"><div className="font-semibold">— Dr. Elizabeth Martinez</div><div className="text-white/60">CEO, Client Healthcare System</div></div>
          </motion.div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-24 md:py-32 bg-[#0077B5]">
        <div className="container px-4 md:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/80 mb-6 block">The Solution</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white max-w-4xl leading-tight">Comprehensive care delivery transformation</h2>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white text-[#051C2C]">
        <div className="container px-4 md:px-12 max-w-4xl">
          <p className="text-xl text-[#051C2C]/80 leading-relaxed mb-12">We partnered with the organization on a multi-year transformation that redesigned care delivery, improved operations, and enhanced the employee experience.</p>
          <div className="space-y-12">
            <div className="flex gap-8">
              <div className="flex-shrink-0"><div className="w-12 h-12 bg-[#0077B5] text-white rounded-full flex items-center justify-center font-bold text-lg">1</div></div>
              <div>
                <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4 flex items-center gap-3"><Heart className="w-6 h-6 text-[#0077B5]" />Care model redesign</h3>
                <p className="text-[#051C2C]/70 leading-relaxed mb-4">We redesigned care delivery around patient needs, creating integrated care teams and standardized pathways for high-volume conditions.</p>
                <ul className="space-y-2 text-[#051C2C]/70">
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-[#0077B5] flex-shrink-0 mt-0.5" /><span>Integrated care team model development</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-[#0077B5] flex-shrink-0 mt-0.5" /><span>Clinical pathway standardization</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-[#0077B5] flex-shrink-0 mt-0.5" /><span>Care coordination infrastructure</span></li>
                </ul>
              </div>
            </div>
            <div className="flex gap-8">
              <div className="flex-shrink-0"><div className="w-12 h-12 bg-[#0077B5] text-white rounded-full flex items-center justify-center font-bold text-lg">2</div></div>
              <div>
                <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4 flex items-center gap-3"><BarChart3 className="w-6 h-6 text-[#0077B5]" />Operational excellence</h3>
                <p className="text-[#051C2C]/70 leading-relaxed mb-4">We implemented lean principles across the organization to eliminate waste, reduce variation, and improve efficiency.</p>
                <ul className="space-y-2 text-[#051C2C]/70">
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-[#0077B5] flex-shrink-0 mt-0.5" /><span>Lean transformation and waste elimination</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-[#0077B5] flex-shrink-0 mt-0.5" /><span>Workflow redesign and automation</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-[#0077B5] flex-shrink-0 mt-0.5" /><span>Performance management systems</span></li>
                </ul>
              </div>
            </div>
            <div className="flex gap-8">
              <div className="flex-shrink-0"><div className="w-12 h-12 bg-[#0077B5] text-white rounded-full flex items-center justify-center font-bold text-lg">3</div></div>
              <div>
                <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4 flex items-center gap-3"><Users className="w-6 h-6 text-[#0077B5]" />Workforce transformation</h3>
                <p className="text-[#051C2C]/70 leading-relaxed mb-4">We redesigned roles and workflows to reduce administrative burden and improve the employee experience.</p>
                <ul className="space-y-2 text-[#051C2C]/70">
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-[#0077B5] flex-shrink-0 mt-0.5" /><span>Role redesign and task optimization</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-[#0077B5] flex-shrink-0 mt-0.5" /><span>Administrative burden reduction</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-[#0077B5] flex-shrink-0 mt-0.5" /><span>Leadership development and change management</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="py-24 md:py-32 bg-[#0077B5]">
        <div className="container px-4 md:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/80 mb-6 block">The Impact</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white max-w-4xl leading-tight">Results & Impact</h2>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white text-[#051C2C]">
        <div className="container px-4 md:px-12 max-w-4xl">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4 flex items-center gap-3"><TrendingUp className="w-6 h-6 text-[#0077B5]" />Significant cost reduction</h3>
              <p className="text-[#051C2C]/70 leading-relaxed mb-4">Operating costs decreased by 22% through improved efficiency, reduced waste, and optimized care delivery—generating $187M in annual savings.</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-6 bg-[#051C2C]/5 rounded-xl"><div className="text-3xl font-serif font-bold text-[#051C2C] mb-2">22%</div><div className="text-sm text-[#051C2C]/60">Cost reduction achieved</div></div>
                <div className="p-6 bg-[#051C2C]/5 rounded-xl"><div className="text-3xl font-serif font-bold text-[#051C2C] mb-2">$187M</div><div className="text-sm text-[#051C2C]/60">Annual savings</div></div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4 flex items-center gap-3"><Heart className="w-6 h-6 text-[#0077B5]" />Improved patient experience</h3>
              <p className="text-[#051C2C]/70 leading-relaxed mb-4">Patient satisfaction improved by 35% as care became more coordinated, wait times decreased, and outcomes improved.</p>
              <div className="p-6 bg-[#051C2C]/5 rounded-xl"><div className="text-3xl font-serif font-bold text-[#051C2C] mb-2">35%</div><div className="text-sm text-[#051C2C]/60">Improvement in patient satisfaction</div></div>
            </div>
            <div>
              <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4 flex items-center gap-3"><Users className="w-6 h-6 text-[#0077B5]" />Enhanced staff engagement</h3>
              <p className="text-[#051C2C]/70 leading-relaxed mb-4">Staff engagement scores increased 18 points as administrative burden decreased and clinicians could focus on patient care.</p>
              <div className="p-6 bg-[#051C2C]/5 rounded-xl"><div className="text-3xl font-serif font-bold text-[#051C2C] mb-2">+18pts</div><div className="text-sm text-[#051C2C]/60">Staff engagement increase</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section 2 */}
      <section className="py-24 md:py-32 bg-[#051C2C]">
        <div className="container px-4 md:px-12 max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <blockquote className="text-3xl md:text-4xl font-serif text-[#0077B5] leading-tight mb-8">
              "The transformation exceeded our expectations on every dimension. We're delivering better care at lower cost, and our staff are more engaged than ever. NexDyne helped us achieve what seemed impossible."
            </blockquote>
            <div className="text-base text-white"><div className="font-semibold">— Dr. Elizabeth Martinez</div><div className="text-white/60">CEO, Client Healthcare System</div></div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container px-4 md:px-12">
          <CaseStudyContactForm caseStudyTitle="Healthcare Transformation" />
        </div>
      </section>

      {/* Related Cases */}
      <section className="py-24 md:py-32 bg-[#051C2C]">
        <div className="container px-4 md:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/60 mb-6 block">Related Case Studies</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">More success stories</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
            {[
              { title: "Professional services growth transformation", industry: "Professional Services", description: "How we helped achieve 85% revenue growth", link: "/case-studies/professional-services-growth" },
              { title: "Distribution restructuring", industry: "Distribution", description: "How we helped improve operating margins by 40%", link: "/case-studies/distribution-restructuring" }
            ].map((item, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}>
                <Link href={item.link} className="group block h-full p-8 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                  <span className="text-xs font-bold text-[#0077B5] uppercase tracking-wider">{item.industry}</span>
                  <h3 className="text-xl font-serif font-bold text-white mt-2 group-hover:text-[#0077B5] transition-colors">{item.title}</h3>
                  <p className="text-white/60 mt-2">{item.description}</p>
                  <span className="text-[#0077B5] text-sm font-semibold flex items-center gap-1 mt-4 group-hover:gap-2 transition-all">Read case study <ArrowRight className="w-3 h-3" /></span>
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
