import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, ArrowLeft, TrendingUp, Target, Users, Puzzle, Clock, CheckCircle2, Download } from 'lucide-react';
import { CaseStudyPDFButton } from "@/components/CaseStudyPDFButton";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import CaseStudyContactForm from "@/components/CaseStudyContactForm";
import { BackToTop } from "@/components/BackToTop";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";

export default function PostMergerIntegration() {
  return (
    <div className="min-h-screen bg-[#051C2C] text-white selection:bg-[#0077B5] selection:text-white">
      <SEO 
        title="Post-Merger Integration Success | Case Study | NexDyne Technologies" 
        description="How we helped a professional services firm successfully integrate an acquisition, capturing 120% of projected synergies within 18 months."
        canonical="/case-studies/post-merger-integration"
      />
      <Navigation />
      
      {/* DZ10 Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#051C2C] via-[#051C2C]/60 to-[#051C2C]"></div>
        
        <div className="container relative z-10 px-4 md:px-12">
          <Breadcrumbs />
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0077B5] mb-6 block">Case Study · Professional Services</span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight leading-[1.05] mb-4">
              <span className="text-[#0077B5]">120%</span> synergy capture through disciplined integration
            </h1>
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-3xl mb-8">
              How we helped a professional services firm successfully integrate a transformational acquisition, exceeding synergy targets while retaining key talent and maintaining client relationships.
            </p>
            
            {/* PDF Download Button */}
            <CaseStudyPDFButton
              title="120% synergy capture through disciplined integration"
              industry="Professional Services"
              summary="How we helped a professional services firm successfully integrate a transformational acquisition, exceeding synergy targets while retaining key talent and maintaining client relationships."
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
              { metric: "120%", label: "Synergy target achieved" },
              { metric: "95%", label: "Key talent retention" },
              { metric: "98%", label: "Client retention rate" },
              { metric: "18 mo", label: "Full integration timeline" }
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
                Our client is a mid-market professional services firm with $120M in revenue and 450 employees. They had recently completed the acquisition of a complementary firm with $45M in revenue and 180 employees, creating a combined entity with enhanced capabilities and geographic reach.
              </p>
              <p className="text-[#051C2C]/70 leading-relaxed">
                The acquisition thesis was compelling, but the real work was just beginning. The two firms had different cultures, systems, and ways of working. Without careful integration, the expected synergies would never materialize and key talent would depart.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mt-12 p-8 bg-[#051C2C]/5 rounded-xl">
              <div><div className="text-sm font-semibold text-[#0077B5] mb-2">Industry</div><div className="text-[#051C2C] font-medium">Professional Services</div></div>
              <div><div className="text-sm font-semibold text-[#0077B5] mb-2">Combined Employees</div><div className="text-[#051C2C] font-medium">630</div></div>
              <div><div className="text-sm font-semibold text-[#0077B5] mb-2">Combined Revenue</div><div className="text-[#051C2C] font-medium">$165M</div></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Challenge Section */}
      <section id="challenge" className="py-24 md:py-32 bg-[#0077B5]">
        <div className="container px-4 md:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/80 mb-6 block">The Challenge</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white max-w-4xl leading-tight">Integrating two distinct cultures and operating models</h2>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white text-[#051C2C]">
        <div className="container px-4 md:px-12 max-w-4xl">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4">Different cultures and ways of working</h3>
              <p className="text-[#051C2C]/70 leading-relaxed">The acquiring firm had a structured, process-driven culture while the target was more entrepreneurial and relationship-focused. Without careful management, these differences could create friction and drive talent departure.</p>
            </div>
            <div>
              <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4">Complex system and process integration</h3>
              <p className="text-[#051C2C]/70 leading-relaxed">The two firms operated on different technology platforms, used different methodologies, and had different client engagement models. Harmonizing these while maintaining service continuity was a significant undertaking.</p>
            </div>
            <div>
              <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4">High-stakes talent retention</h3>
              <p className="text-[#051C2C]/70 leading-relaxed">In professional services, the value walks out the door every night. Key client relationships and institutional knowledge resided with individuals who could easily find opportunities elsewhere if they felt uncertain about their future.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 md:py-32 bg-[#051C2C]">
        <div className="container px-4 md:px-12 max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <blockquote className="text-3xl md:text-4xl font-serif text-[#0077B5] leading-tight mb-8">
              "We knew the acquisition made strategic sense, but we also knew that most integrations fail. We needed experienced help to ensure we captured the value we paid for without destroying what made both firms successful."
            </blockquote>
            <div className="text-base text-white"><div className="font-semibold">— Patricia Williams</div><div className="text-white/60">CEO, Client Company</div></div>
          </motion.div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-24 md:py-32 bg-[#0077B5]">
        <div className="container px-4 md:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/80 mb-6 block">The Solution</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white max-w-4xl leading-tight">Structured integration with cultural sensitivity</h2>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white text-[#051C2C]">
        <div className="container px-4 md:px-12 max-w-4xl">
          <p className="text-xl text-[#051C2C]/80 leading-relaxed mb-12">We established an integration management office and led a comprehensive integration program that balanced speed with cultural sensitivity.</p>
          <div className="space-y-12">
            <div className="flex gap-8">
              <div className="flex-shrink-0"><div className="w-12 h-12 bg-[#0077B5] text-white rounded-full flex items-center justify-center font-bold text-lg">1</div></div>
              <div>
                <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4 flex items-center gap-3"><Puzzle className="w-6 h-6 text-[#0077B5]" />Integration management office</h3>
                <p className="text-[#051C2C]/70 leading-relaxed mb-4">We established a dedicated IMO with full-time leadership and clear governance to coordinate all integration activities across functional workstreams.</p>
                <ul className="space-y-2 text-[#051C2C]/70">
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-[#0077B5] flex-shrink-0 mt-0.5" /><span>Full-time integration director with CEO reporting</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-[#0077B5] flex-shrink-0 mt-0.5" /><span>Eight functional workstreams with dedicated owners</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-[#0077B5] flex-shrink-0 mt-0.5" /><span>Weekly steering committee with executive oversight</span></li>
                </ul>
              </div>
            </div>
            <div className="flex gap-8">
              <div className="flex-shrink-0"><div className="w-12 h-12 bg-[#0077B5] text-white rounded-full flex items-center justify-center font-bold text-lg">2</div></div>
              <div>
                <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4 flex items-center gap-3"><Users className="w-6 h-6 text-[#0077B5]" />Cultural integration program</h3>
                <p className="text-[#051C2C]/70 leading-relaxed mb-4">We conducted cultural assessments and designed integration activities that preserved the best of both cultures while creating a unified identity.</p>
                <ul className="space-y-2 text-[#051C2C]/70">
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-[#0077B5] flex-shrink-0 mt-0.5" /><span>Cultural assessment and gap analysis</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-[#0077B5] flex-shrink-0 mt-0.5" /><span>Cross-company team building and collaboration</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-[#0077B5] flex-shrink-0 mt-0.5" /><span>Unified values and operating principles development</span></li>
                </ul>
              </div>
            </div>
            <div className="flex gap-8">
              <div className="flex-shrink-0"><div className="w-12 h-12 bg-[#0077B5] text-white rounded-full flex items-center justify-center font-bold text-lg">3</div></div>
              <div>
                <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4 flex items-center gap-3"><Target className="w-6 h-6 text-[#0077B5]" />Synergy tracking and accountability</h3>
                <p className="text-[#051C2C]/70 leading-relaxed mb-4">We implemented rigorous synergy tracking with clear ownership and accountability to ensure projected value was actually captured.</p>
                <ul className="space-y-2 text-[#051C2C]/70">
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-[#0077B5] flex-shrink-0 mt-0.5" /><span>Detailed synergy model with initiative-level tracking</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-[#0077B5] flex-shrink-0 mt-0.5" /><span>Monthly synergy review with executive team</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-[#0077B5] flex-shrink-0 mt-0.5" /><span>Incentive alignment for synergy delivery</span></li>
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
              <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4 flex items-center gap-3"><TrendingUp className="w-6 h-6 text-[#0077B5]" />Synergies exceeded expectations</h3>
              <p className="text-[#051C2C]/70 leading-relaxed mb-4">The integration captured 120% of projected synergies within 18 months, driven by both cost savings and revenue synergies from cross-selling and combined capabilities.</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-6 bg-[#051C2C]/5 rounded-xl"><div className="text-3xl font-serif font-bold text-[#051C2C] mb-2">120%</div><div className="text-sm text-[#051C2C]/60">Synergy target achieved</div></div>
                <div className="p-6 bg-[#051C2C]/5 rounded-xl"><div className="text-3xl font-serif font-bold text-[#051C2C] mb-2">$12M</div><div className="text-sm text-[#051C2C]/60">Annual run-rate synergies</div></div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4 flex items-center gap-3"><Users className="w-6 h-6 text-[#0077B5]" />Exceptional talent retention</h3>
              <p className="text-[#051C2C]/70 leading-relaxed mb-4">95% of identified key talent was retained through the integration period, significantly above industry benchmarks for professional services M&A.</p>
              <div className="p-6 bg-[#051C2C]/5 rounded-xl"><div className="text-3xl font-serif font-bold text-[#051C2C] mb-2">95%</div><div className="text-sm text-[#051C2C]/60">Key talent retention rate</div></div>
            </div>
            <div>
              <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4 flex items-center gap-3"><Clock className="w-6 h-6 text-[#0077B5]" />Client relationships preserved</h3>
              <p className="text-[#051C2C]/70 leading-relaxed mb-4">98% of clients were retained through the integration, with several expanding relationships as a result of the combined firm's enhanced capabilities.</p>
              <div className="p-6 bg-[#051C2C]/5 rounded-xl"><div className="text-3xl font-serif font-bold text-[#051C2C] mb-2">98%</div><div className="text-sm text-[#051C2C]/60">Client retention rate</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section 2 */}
      <section className="py-24 md:py-32 bg-[#051C2C]">
        <div className="container px-4 md:px-12 max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <blockquote className="text-3xl md:text-4xl font-serif text-[#0077B5] leading-tight mb-8">
              "The integration exceeded our expectations in every dimension. We captured more value than projected, retained our best people, and kept our clients happy. NexDyne's disciplined approach made all the difference."
            </blockquote>
            <div className="text-base text-white"><div className="font-semibold">— Patricia Williams</div><div className="text-white/60">CEO, Client Company</div></div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container px-4 md:px-12">
          <CaseStudyContactForm caseStudyTitle="Post-Merger Integration" />
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
              { title: "Strategic acquisition for market expansion", industry: "Technology", description: "How we helped identify and execute a transformational acquisition", link: "/case-studies/strategic-acquisition" },
              { title: "Carve-out transaction success", industry: "Industrial", description: "How we supported a complex carve-out from a larger conglomerate", link: "/case-studies/carve-out-transaction" }
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
