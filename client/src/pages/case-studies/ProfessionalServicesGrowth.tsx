import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, ArrowLeft, TrendingUp, Target, Users, Briefcase, BarChart3, CheckCircle2, Download } from 'lucide-react';
import { CaseStudyPDFButton } from "@/components/CaseStudyPDFButton";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import CaseStudyContactForm from "@/components/CaseStudyContactForm";
import { BackToTop } from "@/components/BackToTop";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";

export default function ProfessionalServicesGrowth() {
  return (
    <div className="min-h-screen bg-[#051C2C] text-white selection:bg-[#0077B5] selection:text-white">
      <SEO 
        title="Professional Services Growth | Case Study | NexDyne Technologies" 
        description="How we helped a professional services firm achieve 85% revenue growth through strategic repositioning and go-to-market transformation."
        canonical="/case-studies/professional-services-growth"
      />
      <Navigation />
      
      {/* DZ10 Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#051C2C] via-[#051C2C]/60 to-[#051C2C]"></div>
        
        <div className="container relative z-10 px-4 md:px-12">
          <Breadcrumbs />
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0077B5] mb-6 block">Case Study · Professional Services</span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight leading-[1.05] mb-4">
              <span className="text-[#0077B5]">85%</span> revenue growth through strategic repositioning
            </h1>
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-3xl mb-8">
              How we helped a professional services firm transform its market positioning, service portfolio, and go-to-market approach to achieve breakthrough growth.
            </p>
            
            {/* PDF Download Button */}
            <CaseStudyPDFButton
              title="85% revenue growth through strategic repositioning"
              industry="Professional Services"
              summary="How we helped a professional services firm transform its market positioning, service portfolio, and go-to-market approach to achieve breakthrough growth."
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
              { metric: "85%", label: "Revenue growth over 3 years" },
              { metric: "2.5x", label: "Average deal size increase" },
              { metric: "40%", label: "Improvement in win rates" },
              { metric: "15pts", label: "NPS improvement" }
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
                Our client is a mid-market professional services firm with $45M in revenue and 200 employees. They had built a solid reputation for technical excellence but were struggling to grow in an increasingly competitive market.
              </p>
              <p className="text-[#051C2C]/70 leading-relaxed">
                The firm's partners recognized that their traditional approach—competing on technical expertise and relationships—was no longer sufficient. They needed to transform their market positioning and go-to-market approach to drive growth.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mt-12 p-8 bg-[#051C2C]/5 rounded-xl">
              <div><div className="text-sm font-semibold text-[#0077B5] mb-2">Industry</div><div className="text-[#051C2C] font-medium">Professional Services</div></div>
              <div><div className="text-sm font-semibold text-[#0077B5] mb-2">Employees</div><div className="text-[#051C2C] font-medium">200</div></div>
              <div><div className="text-sm font-semibold text-[#0077B5] mb-2">Annual Revenue</div><div className="text-[#051C2C] font-medium">$45M</div></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Challenge Section */}
      <section id="challenge" className="py-24 md:py-32 bg-[#0077B5]">
        <div className="container px-4 md:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/80 mb-6 block">The Challenge</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white max-w-4xl leading-tight">Stagnant growth in an evolving market</h2>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white text-[#051C2C]">
        <div className="container px-4 md:px-12 max-w-4xl">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4">Undifferentiated market position</h3>
              <p className="text-[#051C2C]/70 leading-relaxed">The firm competed primarily on reputation and relationships, but so did every other firm in their market. They lacked a clear differentiation that would help them stand out and command premium pricing.</p>
            </div>
            <div>
              <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4">Reactive sales approach</h3>
              <p className="text-[#051C2C]/70 leading-relaxed">Business development was primarily reactive, relying on inbound referrals and RFP responses. The firm had no systematic approach to proactive market development or account expansion.</p>
            </div>
            <div>
              <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4">Service portfolio misaligned with market needs</h3>
              <p className="text-[#051C2C]/70 leading-relaxed">The firm's service offerings had evolved organically over time and no longer aligned with where the market was heading. They were over-indexed on declining service areas and under-invested in growth areas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 md:py-32 bg-[#051C2C]">
        <div className="container px-4 md:px-12 max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <blockquote className="text-3xl md:text-4xl font-serif text-[#0077B5] leading-tight mb-8">
              "We had great people and great client relationships, but we weren't growing. We knew we needed to change something fundamental about how we positioned ourselves and went to market."
            </blockquote>
            <div className="text-base text-white"><div className="font-semibold">— Sarah Johnson</div><div className="text-white/60">Managing Partner, Client Company</div></div>
          </motion.div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-24 md:py-32 bg-[#0077B5]">
        <div className="container px-4 md:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/80 mb-6 block">The Solution</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white max-w-4xl leading-tight">Comprehensive growth transformation</h2>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white text-[#051C2C]">
        <div className="container px-4 md:px-12 max-w-4xl">
          <p className="text-xl text-[#051C2C]/80 leading-relaxed mb-12">We partnered with the firm on a comprehensive transformation covering positioning, service portfolio, and go-to-market approach.</p>
          <div className="space-y-12">
            <div className="flex gap-8">
              <div className="flex-shrink-0"><div className="w-12 h-12 bg-[#0077B5] text-white rounded-full flex items-center justify-center font-bold text-lg">1</div></div>
              <div>
                <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4 flex items-center gap-3"><Target className="w-6 h-6 text-[#0077B5]" />Strategic repositioning</h3>
                <p className="text-[#051C2C]/70 leading-relaxed mb-4">We developed a differentiated market position focused on specific industry verticals and outcome-based value propositions.</p>
                <ul className="space-y-2 text-[#051C2C]/70">
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-[#0077B5] flex-shrink-0 mt-0.5" /><span>Market and competitive analysis</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-[#0077B5] flex-shrink-0 mt-0.5" /><span>Differentiated positioning development</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-[#0077B5] flex-shrink-0 mt-0.5" /><span>Brand and messaging refresh</span></li>
                </ul>
              </div>
            </div>
            <div className="flex gap-8">
              <div className="flex-shrink-0"><div className="w-12 h-12 bg-[#0077B5] text-white rounded-full flex items-center justify-center font-bold text-lg">2</div></div>
              <div>
                <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4 flex items-center gap-3"><Briefcase className="w-6 h-6 text-[#0077B5]" />Service portfolio optimization</h3>
                <p className="text-[#051C2C]/70 leading-relaxed mb-4">We rationalized the service portfolio, investing in high-growth areas and developing new offerings aligned with market demand.</p>
                <ul className="space-y-2 text-[#051C2C]/70">
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-[#0077B5] flex-shrink-0 mt-0.5" /><span>Service portfolio assessment and rationalization</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-[#0077B5] flex-shrink-0 mt-0.5" /><span>New service development for growth areas</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-[#0077B5] flex-shrink-0 mt-0.5" /><span>Pricing strategy optimization</span></li>
                </ul>
              </div>
            </div>
            <div className="flex gap-8">
              <div className="flex-shrink-0"><div className="w-12 h-12 bg-[#0077B5] text-white rounded-full flex items-center justify-center font-bold text-lg">3</div></div>
              <div>
                <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4 flex items-center gap-3"><BarChart3 className="w-6 h-6 text-[#0077B5]" />Go-to-market transformation</h3>
                <p className="text-[#051C2C]/70 leading-relaxed mb-4">We built a proactive business development engine with systematic processes for market development and account expansion.</p>
                <ul className="space-y-2 text-[#051C2C]/70">
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-[#0077B5] flex-shrink-0 mt-0.5" /><span>Business development process and playbooks</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-[#0077B5] flex-shrink-0 mt-0.5" /><span>Key account management program</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-[#0077B5] flex-shrink-0 mt-0.5" /><span>Marketing and thought leadership strategy</span></li>
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
              <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4 flex items-center gap-3"><TrendingUp className="w-6 h-6 text-[#0077B5]" />Breakthrough revenue growth</h3>
              <p className="text-[#051C2C]/70 leading-relaxed mb-4">The firm achieved 85% revenue growth over three years, significantly outpacing market growth and peer firms.</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-6 bg-[#051C2C]/5 rounded-xl"><div className="text-3xl font-serif font-bold text-[#051C2C] mb-2">85%</div><div className="text-sm text-[#051C2C]/60">Revenue growth over 3 years</div></div>
                <div className="p-6 bg-[#051C2C]/5 rounded-xl"><div className="text-3xl font-serif font-bold text-[#051C2C] mb-2">$83M</div><div className="text-sm text-[#051C2C]/60">Revenue in Year 3</div></div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4 flex items-center gap-3"><Target className="w-6 h-6 text-[#0077B5]" />Improved sales effectiveness</h3>
              <p className="text-[#051C2C]/70 leading-relaxed mb-4">Win rates improved by 40% and average deal size increased 2.5x as the firm successfully moved upmarket and commanded premium pricing.</p>
              <div className="p-6 bg-[#051C2C]/5 rounded-xl"><div className="text-3xl font-serif font-bold text-[#051C2C] mb-2">2.5x</div><div className="text-sm text-[#051C2C]/60">Average deal size increase</div></div>
            </div>
            <div>
              <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4 flex items-center gap-3"><Users className="w-6 h-6 text-[#0077B5]" />Enhanced client relationships</h3>
              <p className="text-[#051C2C]/70 leading-relaxed mb-4">Client satisfaction improved significantly, with NPS increasing 15 points as the firm delivered more strategic, outcome-focused engagements.</p>
              <div className="p-6 bg-[#051C2C]/5 rounded-xl"><div className="text-3xl font-serif font-bold text-[#051C2C] mb-2">+15pts</div><div className="text-sm text-[#051C2C]/60">NPS improvement</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section 2 */}
      <section className="py-24 md:py-32 bg-[#051C2C]">
        <div className="container px-4 md:px-12 max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <blockquote className="text-3xl md:text-4xl font-serif text-[#0077B5] leading-tight mb-8">
              "The transformation has been remarkable. We're winning bigger deals, working with better clients, and our people are more engaged than ever. NexDyne helped us see what was possible and gave us the roadmap to get there."
            </blockquote>
            <div className="text-base text-white"><div className="font-semibold">— Sarah Johnson</div><div className="text-white/60">Managing Partner, Client Company</div></div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container px-4 md:px-12">
          <CaseStudyContactForm caseStudyTitle="Professional Services Growth" />
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
              { title: "Distribution restructuring for growth", industry: "Distribution", description: "How we helped restructure operations for scalability", link: "/case-studies/distribution-restructuring" },
              { title: "Healthcare transformation", industry: "Healthcare", description: "How we helped transform a healthcare organization", link: "/case-studies/healthcare-transformation" }
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
