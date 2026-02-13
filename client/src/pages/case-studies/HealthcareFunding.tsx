import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, ArrowLeft, TrendingUp, Target, DollarSign, Heart, FileText, CheckCircle2, Download } from 'lucide-react';
import { CaseStudyPDFButton } from "@/components/CaseStudyPDFButton";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import CaseStudyContactForm from "@/components/CaseStudyContactForm";
import { BackToTop } from "@/components/BackToTop";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";

export default function HealthcareFunding() {
  return (
    <div className="min-h-screen bg-[#051C2C] text-white selection:bg-[#0077B5] selection:text-white">
      <SEO 
        title="Healthcare Strategic Funding | Case Study | NexDyne Technologies" 
        description="How we helped a medical device company secure $28M in strategic funding from a healthcare-focused investor, accelerating market expansion."
        canonical="/case-studies/healthcare-funding"
      />
      <Navigation />
      
      {/* DZ10 Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#051C2C] via-[#051C2C]/60 to-[#051C2C]"></div>
        
        <div className="container relative z-10 px-4 md:px-12">
          <Breadcrumbs />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0077B5] mb-6 block">
              Case Study · Medical Devices
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight leading-[1.05] mb-4">
              <span className="text-[#0077B5]">$28M</span> strategic healthcare investment
            </h1>
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-3xl mb-8">
              How we helped a medical device company secure strategic funding from a healthcare-focused investor, providing capital and partnership opportunities to accelerate market expansion.
            </p>
            
            {/* PDF Download Button */}
            <CaseStudyPDFButton
              title="$28M strategic healthcare investment"
              industry="Medical Devices"
              summary="How we helped a medical device company secure strategic funding from a healthcare-focused investor, providing capital and partnership opportunities to accelerate market expansion."
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

      {/* DZ10 Stats Section */}
      <section className="py-16 bg-[#051C2C] border-t border-white/10">
        <div className="container px-4 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {[
              { metric: "$28M", label: "Strategic investment secured" },
              { metric: "4", label: "Hospital system partnerships" },
              { metric: "2.5x", label: "Revenue growth in 18 months" },
              { metric: "10 weeks", label: "Time to close" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border-l-2 border-[#0077B5]/50 pl-8"
              >
                <div className="text-5xl font-serif font-bold text-[#0077B5] mb-2">{stat.metric}</div>
                <div className="text-base text-white/70">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DZ10 Sticky Navigation */}
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
                Our client is a medical device company specializing in minimally invasive surgical instruments. With $15M in annual revenue and FDA clearance for their flagship product line, they had established strong clinical evidence and a growing customer base among ambulatory surgery centers.
              </p>
              <p className="text-[#051C2C]/70 leading-relaxed">
                The company was seeking growth capital to expand their sales force, pursue additional FDA clearances, and enter the hospital market. They wanted a strategic investor who could provide more than just capital—they needed access to healthcare networks and industry expertise.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mt-12 p-8 bg-[#051C2C]/5 rounded-xl">
              <div><div className="text-sm font-semibold text-[#0077B5] mb-2">Industry</div><div className="text-[#051C2C] font-medium">Medical Devices</div></div>
              <div><div className="text-sm font-semibold text-[#0077B5] mb-2">Stage</div><div className="text-[#051C2C] font-medium">Growth Equity</div></div>
              <div><div className="text-sm font-semibold text-[#0077B5] mb-2">Annual Revenue</div><div className="text-[#051C2C] font-medium">$15M</div></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Challenge Section */}
      <section id="challenge" className="py-24 md:py-32 bg-[#0077B5]">
        <div className="container px-4 md:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/80 mb-6 block">The Challenge</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white max-w-4xl leading-tight">Finding the right strategic partner</h2>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white text-[#051C2C]">
        <div className="container px-4 md:px-12 max-w-4xl">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4">Capital alone wasn't enough</h3>
              <p className="text-[#051C2C]/70 leading-relaxed">The company had received interest from several financial investors, but the founders recognized that entering the hospital market required more than capital. They needed a partner with deep healthcare relationships and operational expertise in medical device commercialization.</p>
            </div>
            <div>
              <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4">Complex regulatory and reimbursement landscape</h3>
              <p className="text-[#051C2C]/70 leading-relaxed">Hospital adoption required navigating complex value analysis committees, GPO contracts, and reimbursement pathways. The company needed a partner who understood these dynamics and could help accelerate market access.</p>
            </div>
            <div>
              <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4">Balancing growth with founder control</h3>
              <p className="text-[#051C2C]/70 leading-relaxed">The founders wanted to maintain operational control while bringing on a strategic partner. They needed to find an investor aligned with their long-term vision who would add value without micromanaging.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 md:py-32 bg-[#051C2C]">
        <div className="container px-4 md:px-12 max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <blockquote className="text-3xl md:text-4xl font-serif text-[#0077B5] leading-tight mb-8">
              "We knew we needed a partner who understood healthcare, not just a check. The right investor would open doors that would take us years to open on our own."
            </blockquote>
            <div className="text-base text-white">
              <div className="font-semibold">— Dr. Robert Kim</div>
              <div className="text-white/60">CEO & Co-founder, Client Company</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-24 md:py-32 bg-[#0077B5]">
        <div className="container px-4 md:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/80 mb-6 block">The Solution</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white max-w-4xl leading-tight">Strategic investor identification and partnership structuring</h2>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white text-[#051C2C]">
        <div className="container px-4 md:px-12 max-w-4xl">
          <p className="text-xl text-[#051C2C]/80 leading-relaxed mb-12">We conducted a targeted search for strategic investors and structured a partnership that provided capital, market access, and operational support.</p>
          <div className="space-y-12">
            <div className="flex gap-8">
              <div className="flex-shrink-0"><div className="w-12 h-12 bg-[#0077B5] text-white rounded-full flex items-center justify-center font-bold text-lg">1</div></div>
              <div>
                <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4 flex items-center gap-3"><Target className="w-6 h-6 text-[#0077B5]" />Strategic investor mapping</h3>
                <p className="text-[#051C2C]/70 leading-relaxed mb-4">We identified healthcare-focused investors with relevant portfolio companies, hospital system relationships, and track records of supporting medical device commercialization.</p>
                <ul className="space-y-2 text-[#051C2C]/70">
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-[#0077B5] flex-shrink-0 mt-0.5" /><span>Mapped 25 strategic investors with healthcare focus</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-[#0077B5] flex-shrink-0 mt-0.5" /><span>Analyzed portfolio synergies and partnership potential</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-[#0077B5] flex-shrink-0 mt-0.5" /><span>Prioritized based on strategic fit and value-add potential</span></li>
                </ul>
              </div>
            </div>
            <div className="flex gap-8">
              <div className="flex-shrink-0"><div className="w-12 h-12 bg-[#0077B5] text-white rounded-full flex items-center justify-center font-bold text-lg">2</div></div>
              <div>
                <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4 flex items-center gap-3"><FileText className="w-6 h-6 text-[#0077B5]" />Clinical and commercial positioning</h3>
                <p className="text-[#051C2C]/70 leading-relaxed mb-4">We developed materials that highlighted clinical evidence, market opportunity, and the strategic rationale for partnership.</p>
                <ul className="space-y-2 text-[#051C2C]/70">
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-[#0077B5] flex-shrink-0 mt-0.5" /><span>Clinical evidence summary and KOL references</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-[#0077B5] flex-shrink-0 mt-0.5" /><span>Market access strategy and reimbursement roadmap</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-[#0077B5] flex-shrink-0 mt-0.5" /><span>Partnership value proposition by investor type</span></li>
                </ul>
              </div>
            </div>
            <div className="flex gap-8">
              <div className="flex-shrink-0"><div className="w-12 h-12 bg-[#0077B5] text-white rounded-full flex items-center justify-center font-bold text-lg">3</div></div>
              <div>
                <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4 flex items-center gap-3"><Heart className="w-6 h-6 text-[#0077B5]" />Partnership structuring</h3>
                <p className="text-[#051C2C]/70 leading-relaxed mb-4">We structured the investment to include commercial partnership elements that would accelerate market access.</p>
                <ul className="space-y-2 text-[#051C2C]/70">
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-[#0077B5] flex-shrink-0 mt-0.5" /><span>Equity investment with board representation</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-[#0077B5] flex-shrink-0 mt-0.5" /><span>Pilot program commitments from portfolio health systems</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-[#0077B5] flex-shrink-0 mt-0.5" /><span>Operational support for regulatory and market access</span></li>
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
              <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4 flex items-center gap-3"><DollarSign className="w-6 h-6 text-[#0077B5]" />Strategic investment secured</h3>
              <p className="text-[#051C2C]/70 leading-relaxed mb-4">The company secured $28M from a healthcare-focused growth equity fund with deep hospital system relationships and medical device expertise.</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-6 bg-[#051C2C]/5 rounded-xl"><div className="text-3xl font-serif font-bold text-[#051C2C] mb-2">$28M</div><div className="text-sm text-[#051C2C]/60">Strategic investment secured</div></div>
                <div className="p-6 bg-[#051C2C]/5 rounded-xl"><div className="text-3xl font-serif font-bold text-[#051C2C] mb-2">10 weeks</div><div className="text-sm text-[#051C2C]/60">Time from launch to close</div></div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4 flex items-center gap-3"><Heart className="w-6 h-6 text-[#0077B5]" />Accelerated hospital market entry</h3>
              <p className="text-[#051C2C]/70 leading-relaxed mb-4">Within 18 months, the company had secured contracts with four major hospital systems through investor introductions, generating 2.5x revenue growth.</p>
              <div className="p-6 bg-[#051C2C]/5 rounded-xl"><div className="text-3xl font-serif font-bold text-[#051C2C] mb-2">4</div><div className="text-sm text-[#051C2C]/60">Hospital system partnerships secured</div></div>
            </div>
            <div>
              <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4 flex items-center gap-3"><TrendingUp className="w-6 h-6 text-[#0077B5]" />Operational support accelerates growth</h3>
              <p className="text-[#051C2C]/70 leading-relaxed mb-4">The investor's operational team provided support on regulatory strategy, reimbursement, and sales force development that would have taken years to build internally.</p>
              <div className="p-6 bg-[#051C2C]/5 rounded-xl"><div className="text-3xl font-serif font-bold text-[#051C2C] mb-2">2.5x</div><div className="text-sm text-[#051C2C]/60">Revenue growth in 18 months</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section 2 */}
      <section className="py-24 md:py-32 bg-[#051C2C]">
        <div className="container px-4 md:px-12 max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <blockquote className="text-3xl md:text-4xl font-serif text-[#0077B5] leading-tight mb-8">
              "NexDyne helped us find exactly the right partner. The strategic value has far exceeded the capital—we've accelerated our market entry by at least two years through the relationships and expertise our investor brought to the table."
            </blockquote>
            <div className="text-base text-white"><div className="font-semibold">— Dr. Robert Kim</div><div className="text-white/60">CEO & Co-founder, Client Company</div></div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container px-4 md:px-12">
          <CaseStudyContactForm caseStudyTitle="Healthcare Strategic Funding" />
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
              { title: "$45M Series B at 3x valuation premium", industry: "HealthTech", description: "How we helped a healthtech startup secure Series B funding", link: "/case-studies/series-b-funding" },
              { title: "Manufacturing growth equity transaction", industry: "Manufacturing", description: "How we positioned a manufacturer for successful growth equity raise", link: "/case-studies/manufacturing-growth-equity" }
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
