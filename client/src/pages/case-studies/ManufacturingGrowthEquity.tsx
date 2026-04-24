import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, ArrowLeft, TrendingUp, Target, DollarSign, Factory, Users, CheckCircle2, Download } from 'lucide-react';
import { CaseStudyPDFButton } from "@/components/CaseStudyPDFButton";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import CaseStudyContactForm from "@/components/CaseStudyContactForm";
import { BackToTop } from "@/components/BackToTop";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";

export default function ManufacturingGrowthEquity() {
  return (
    <div className="min-h-screen bg-base text-white selection:bg-primary selection:text-white">
      <SEO 
        title="Manufacturing Growth Equity | Case Study | NexDyne Technologies" 
        description="How we helped a precision manufacturing company secure $35M growth equity to fund capacity expansion and geographic diversification."
        canonical="/case-studies/manufacturing-growth-equity"
      />
      <Navigation />
      
      {/* DZ10 Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-base via-base/60 to-base"></div>
        
        <div className="container relative z-10 px-4 md:px-12">
          <Breadcrumbs />
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6 block">Case Study · Precision Manufacturing</span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-4">
              <span className="text-primary">$35M</span> growth equity for capacity expansion
            </h1>
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-3xl mb-8">
              How we helped a precision manufacturing company secure growth equity funding to expand production capacity, diversify geographically, and capture market share in aerospace and defense.
            </p>
            
            {/* PDF Download Button */}
            <CaseStudyPDFButton
              title="$35M growth equity for capacity expansion"
              industry="Precision Manufacturing"
              summary="How we helped a precision manufacturing company secure growth equity funding to expand production capacity, diversify geographically, and capture market share in aerospace and defense."
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
              { metric: "$35M", label: "Growth equity secured" },
              { metric: "2x", label: "Production capacity increase" },
              { metric: "3", label: "New facility locations" },
              { metric: "45%", label: "Revenue growth in Year 1" }
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
                Our client is a precision manufacturing company specializing in complex machined components for aerospace and defense applications. With $42M in revenue and a reputation for exceptional quality, they had built strong relationships with major OEMs but were capacity-constrained and unable to take on new business.
              </p>
              <p className="text-charcoal/70 leading-relaxed">
                The founders, both engineers with deep technical expertise, recognized the need for growth capital to expand capacity and diversify their geographic footprint. They wanted a partner who understood manufacturing and could support operational improvements alongside growth.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mt-12 p-8 bg-base/5 rounded-xl">
              <div><div className="text-sm font-semibold text-primary mb-2">Industry</div><div className="text-charcoal font-medium">Precision Manufacturing</div></div>
              <div><div className="text-sm font-semibold text-primary mb-2">Employees</div><div className="text-charcoal font-medium">185</div></div>
              <div><div className="text-sm font-semibold text-primary mb-2">Annual Revenue</div><div className="text-charcoal font-medium">$42M</div></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Challenge Section */}
      <section id="challenge" className="py-24 md:py-32 bg-primary">
        <div className="container px-4 md:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/80 mb-6 block">The Challenge</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white max-w-4xl leading-tight">Capacity constraints limiting growth potential</h2>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white text-charcoal">
        <div className="container px-4 md:px-12 max-w-4xl">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-charcoal mb-4">Turning away business due to capacity limits</h3>
              <p className="text-charcoal/70 leading-relaxed">The company was operating at 95% capacity utilization and had been forced to decline several significant opportunities from existing customers. Without expansion, they risked losing market share to competitors who could meet growing demand.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-charcoal mb-4">Geographic concentration creating risk</h3>
              <p className="text-charcoal/70 leading-relaxed">All production was concentrated in a single facility, creating supply chain risk for customers who increasingly required geographic diversification. Several major customers had indicated this was becoming a barrier to expanding the relationship.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-charcoal mb-4">Capital requirements beyond internal resources</h3>
              <p className="text-charcoal/70 leading-relaxed">The expansion plan required $35M in capital for new facilities, equipment, and working capital—far beyond what the company could fund through operations or traditional bank financing. They needed an equity partner.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 md:py-32 bg-base">
        <div className="container px-4 md:px-12 max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <blockquote className="text-3xl md:text-4xl text-primary leading-tight mb-8">
              "We had more demand than we could handle, but expanding required capital we didn't have. We needed a partner who understood manufacturing and could help us execute a complex expansion without disrupting our existing operations."
            </blockquote>
            <div className="text-base text-white"><div className="font-semibold">— James Mitchell</div><div className="text-white/60">CEO & Co-founder, Client Company</div></div>
          </motion.div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-24 md:py-32 bg-primary">
        <div className="container px-4 md:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/80 mb-6 block">The Solution</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white max-w-4xl leading-tight">Growth equity with operational support</h2>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white text-charcoal">
        <div className="container px-4 md:px-12 max-w-4xl">
          <p className="text-xl text-charcoal/80 leading-relaxed mb-12">We identified and secured a growth equity partner with deep manufacturing expertise and supported the expansion execution.</p>
          <div className="space-y-12">
            <div className="flex gap-8">
              <div className="flex-shrink-0"><div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">1</div></div>
              <div>
                <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center gap-3"><Target className="w-6 h-6 text-primary" />Investment thesis development</h3>
                <p className="text-charcoal/70 leading-relaxed mb-4">We developed a compelling investment thesis highlighting the company's quality reputation, customer relationships, and growth potential with expanded capacity.</p>
                <ul className="space-y-2 text-charcoal/70">
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span>Market analysis and competitive positioning</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span>Customer reference program and demand validation</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span>Detailed expansion plan with ROI analysis</span></li>
                </ul>
              </div>
            </div>
            <div className="flex gap-8">
              <div className="flex-shrink-0"><div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">2</div></div>
              <div>
                <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center gap-3"><Users className="w-6 h-6 text-primary" />Investor targeting and process</h3>
                <p className="text-charcoal/70 leading-relaxed mb-4">We targeted growth equity firms with manufacturing portfolio experience and ran a competitive process that generated multiple term sheets.</p>
                <ul className="space-y-2 text-charcoal/70">
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span>Targeted 20 manufacturing-focused growth equity firms</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span>Managed competitive process with 6 term sheets</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span>Negotiated optimal terms with preferred partner</span></li>
                </ul>
              </div>
            </div>
            <div className="flex gap-8">
              <div className="flex-shrink-0"><div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">3</div></div>
              <div>
                <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center gap-3"><Factory className="w-6 h-6 text-primary" />Expansion execution support</h3>
                <p className="text-charcoal/70 leading-relaxed mb-4">Post-close, we supported the expansion execution including site selection, equipment procurement, and operational ramp-up.</p>
                <ul className="space-y-2 text-charcoal/70">
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span>Site selection analysis for three new facilities</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span>Equipment procurement and installation planning</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span>Workforce development and training programs</span></li>
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
              <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center gap-3"><DollarSign className="w-6 h-6 text-primary" />Growth equity secured at attractive terms</h3>
              <p className="text-charcoal/70 leading-relaxed mb-4">The company secured $35M in growth equity from a manufacturing-focused fund with deep operational expertise and a track record of supporting similar expansions.</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-6 bg-base/5 rounded-xl"><div className="text-3xl font-bold text-charcoal mb-2">$35M</div><div className="text-sm text-charcoal/60">Growth equity secured</div></div>
                <div className="p-6 bg-base/5 rounded-xl"><div className="text-3xl font-bold text-charcoal mb-2">6</div><div className="text-sm text-charcoal/60">Term sheets received</div></div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center gap-3"><Factory className="w-6 h-6 text-primary" />Successful capacity expansion</h3>
              <p className="text-charcoal/70 leading-relaxed mb-4">Within 18 months, the company had opened three new facilities, doubling production capacity and establishing geographic diversification that satisfied customer requirements.</p>
              <div className="p-6 bg-base/5 rounded-xl"><div className="text-3xl font-bold text-charcoal mb-2">2x</div><div className="text-sm text-charcoal/60">Production capacity increase</div></div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center gap-3"><TrendingUp className="w-6 h-6 text-primary" />Accelerated revenue growth</h3>
              <p className="text-charcoal/70 leading-relaxed mb-4">With expanded capacity, the company was able to capture previously declined opportunities and win new business, driving 45% revenue growth in the first year post-investment.</p>
              <div className="p-6 bg-base/5 rounded-xl"><div className="text-3xl font-bold text-charcoal mb-2">45%</div><div className="text-sm text-charcoal/60">Revenue growth in Year 1</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section 2 */}
      <section className="py-24 md:py-32 bg-base">
        <div className="container px-4 md:px-12 max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <blockquote className="text-3xl md:text-4xl text-primary leading-tight mb-8">
              "The NexDyne team found us exactly the right partner—someone who understood our business and could help us execute a complex expansion. The results have exceeded our expectations, and we're now positioned for the next phase of growth."
            </blockquote>
            <div className="text-base text-white"><div className="font-semibold">— James Mitchell</div><div className="text-white/60">CEO & Co-founder, Client Company</div></div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container px-4 md:px-12">
          <CaseStudyContactForm caseStudyTitle="Manufacturing Growth Equity" />
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
              { title: "$45M Series B at 3x valuation premium", industry: "HealthTech", description: "How we helped a healthtech startup secure Series B funding", link: "/case-studies/series-b-funding" },
              { title: "Healthcare strategic funding", industry: "Medical Devices", description: "How we helped a medical device company secure strategic investment", link: "/case-studies/healthcare-funding" }
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
