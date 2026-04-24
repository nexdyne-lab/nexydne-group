import { CaseStudyPDFButton } from "@/components/CaseStudyPDFButton";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import CaseStudyContactForm from "@/components/CaseStudyContactForm";
import { BackToTop } from "@/components/BackToTop";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";

export default function StrategicAcquisition() {
  return (
    <div className="min-h-screen bg-white text-white selection:bg-primary selection:text-white">
      <SEO
        title="Strategic Acquisition Success | Case Study | NexDyne Technologies"
        description="How we helped a technology company identify and execute a strategic acquisition that expanded capabilities and accelerated market entry."
        canonical="/case-studies/strategic-acquisition"
      />
      <Navigation />

      {/* DZ10 Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0"></div>

        <div className="container relative z-10 px-4 md:px-12">
          <Breadcrumbs />
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl">
            <span className="text-xs uppercase tracking-[0.2em] text-primary mb-6 block">Case Study · Technology</span>
            <h1 className="text-5xl md:text-7xl tracking-tight leading-[1.05] mb-4">
              Strategic acquisition <span className="text-primary">accelerates market entry by 3 years</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-3xl mb-8">
              How we helped a technology company identify, evaluate, and execute a strategic acquisition that expanded capabilities and accelerated entry into a high-growth market segment.
            </p>

            {/* PDF Download Button */}
            <CaseStudyPDFButton
              title="Strategic acquisition accelerates market entry by 3 years"
              industry="Technology"
              summary="How we helped a technology company identify, evaluate, and execute a strategic acquisition that expanded capabilities and accelerated entry into a high-growth market segment."
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
              { metric: "3 years", label: "Market entry acceleration" },
              { metric: "200+", label: "Targets screened" },
              { metric: "$85M", label: "Transaction value" },
              { metric: "65%", label: "Revenue growth Year 1" }
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
                Our client is a B2B software company with $150M in revenue, providing enterprise solutions to the financial services industry. They had built a strong position in their core market but recognized that adjacent markets represented significant growth opportunities.
              </p>
              <p className="text-charcoal/70 leading-relaxed">
                The leadership team had identified the insurance technology sector as a strategic priority but lacked the domain expertise and customer relationships to enter organically. They engaged us to help evaluate build vs. buy options and, if appropriate, identify and execute an acquisition.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mt-12 p-8 bg-white/5">
              <div><div className="text-sm font-semibold text-primary mb-2">Industry</div><div className="text-charcoal font-medium">Enterprise Software</div></div>
              <div><div className="text-sm font-semibold text-primary mb-2">Employees</div><div className="text-charcoal font-medium">650</div></div>
              <div><div className="text-sm font-semibold text-primary mb-2">Annual Revenue</div><div className="text-charcoal font-medium">$150M</div></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Challenge Section */}
      <section id="challenge" className="py-24 md:py-32 bg-primary">
        <div className="container px-4 md:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="text-xs uppercase tracking-[0.2em] text-white/80 mb-6 block">The Challenge</span>
            <h2 className="text-4xl md:text-5xl text-white max-w-4xl leading-tight">Entering a new market without domain expertise</h2>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white text-charcoal">
        <div className="container px-4 md:px-12 max-w-4xl">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl text-charcoal mb-4">Organic entry would take years</h3>
              <p className="text-charcoal/70 leading-relaxed">Building insurance-specific capabilities from scratch would require 3-5 years and significant investment with uncertain outcomes. The market was evolving quickly, and competitors were already establishing positions.</p>
            </div>
            <div>
              <h3 className="text-xl text-charcoal mb-4">Limited visibility into target landscape</h3>
              <p className="text-charcoal/70 leading-relaxed">The insurance technology market was fragmented with hundreds of potential targets. The client lacked the market knowledge to identify which companies would be the best strategic fit and which were actually acquirable.</p>
            </div>
            <div>
              <h3 className="text-xl text-charcoal mb-4">No M&A experience or infrastructure</h3>
              <p className="text-charcoal/70 leading-relaxed">The company had never completed an acquisition and lacked the internal capabilities to run a professional M&A process. They needed help with everything from target identification through integration planning.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container px-4 md:px-12 max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <blockquote className="text-3xl md:text-4xl text-primary leading-tight mb-8">
              "We knew insurance tech was a huge opportunity, but we didn't know the players or have relationships in the space. We needed a partner who could help us navigate an unfamiliar market and find the right acquisition target."
            </blockquote>
            <div className="text-base text-white"><div className="font-semibold">— David Chen</div><div className="text-white/60">CEO, Client Company</div></div>
          </motion.div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-24 md:py-32 bg-primary">
        <div className="container px-4 md:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="text-xs uppercase tracking-[0.2em] text-white/80 mb-6 block">The Solution</span>
            <h2 className="text-4xl md:text-5xl text-white max-w-4xl leading-tight">Comprehensive acquisition search and execution</h2>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white text-charcoal">
        <div className="container px-4 md:px-12 max-w-4xl">
          <p className="text-xl text-charcoal/80 leading-relaxed mb-12">We led a comprehensive acquisition process from market mapping through transaction close and integration planning.</p>
          <div className="space-y-12">
            <div className="flex gap-8">
              <div className="flex-shrink-0"><div className="w-12 h-12 bg-primary text-white flex items-center justify-center text-lg">1</div></div>
              <div>
                <h3 className="text-xl text-charcoal mb-4 flex items-center gap-3">Market mapping and target identification</h3>
                <p className="text-charcoal/70 leading-relaxed mb-4">We conducted comprehensive market research to understand the insurance technology landscape and identify potential acquisition targets that aligned with strategic priorities.</p>
                <ul className="space-y-2 text-charcoal/70">
                  <li className="flex items-start gap-2"><span>Screened 200+ companies in the insurance tech ecosystem</span></li>
                  <li className="flex items-start gap-2"><span>Developed detailed profiles on 25 priority targets</span></li>
                  <li className="flex items-start gap-2"><span>Assessed strategic fit, financial profile, and acquirability</span></li>
                </ul>
              </div>
            </div>
            <div className="flex gap-8">
              <div className="flex-shrink-0"><div className="w-12 h-12 bg-primary text-white flex items-center justify-center text-lg">2</div></div>
              <div>
                <h3 className="text-xl text-charcoal mb-4 flex items-center gap-3">Target outreach and relationship building</h3>
                <p className="text-charcoal/70 leading-relaxed mb-4">We conducted confidential outreach to priority targets, building relationships and assessing interest in a potential transaction.</p>
                <ul className="space-y-2 text-charcoal/70">
                  <li className="flex items-start gap-2"><span>Confidential outreach to 15 priority targets</span></li>
                  <li className="flex items-start gap-2"><span>Management meetings with 8 interested parties</span></li>
                  <li className="flex items-start gap-2"><span>Deep-dive sessions with 3 finalists</span></li>
                </ul>
              </div>
            </div>
            <div className="flex gap-8">
              <div className="flex-shrink-0"><div className="w-12 h-12 bg-primary text-white flex items-center justify-center text-lg">3</div></div>
              <div>
                <h3 className="text-xl text-charcoal mb-4 flex items-center gap-3">Due diligence and transaction execution</h3>
                <p className="text-charcoal/70 leading-relaxed mb-4">We led comprehensive due diligence and supported negotiation and transaction execution through close.</p>
                <ul className="space-y-2 text-charcoal/70">
                  <li className="flex items-start gap-2"><span>Commercial, financial, and technical due diligence</span></li>
                  <li className="flex items-start gap-2"><span>Valuation analysis and negotiation support</span></li>
                  <li className="flex items-start gap-2"><span>Integration planning and Day 1 readiness</span></li>
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
              <h3 className="text-xl text-charcoal mb-4 flex items-center gap-3">Successful acquisition completed</h3>
              <p className="text-charcoal/70 leading-relaxed mb-4">The company completed an $85M acquisition of a leading insurance technology provider with strong customer relationships and complementary capabilities.</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-6 bg-white/5"><div className="text-3xl text-charcoal mb-2">$85M</div><div className="text-sm text-charcoal/60">Transaction value</div></div>
                <div className="p-6 bg-white/5"><div className="text-3xl text-charcoal mb-2">$35M</div><div className="text-sm text-charcoal/60">Target ARR</div></div>
              </div>
            </div>
            <div>
              <h3 className="text-xl text-charcoal mb-4 flex items-center gap-3">Accelerated market entry</h3>
              <p className="text-charcoal/70 leading-relaxed mb-4">The acquisition provided immediate access to the insurance market with established customer relationships and domain expertise, accelerating market entry by an estimated 3 years.</p>
              <div className="p-6 bg-white/5"><div className="text-3xl text-charcoal mb-2">3 years</div><div className="text-sm text-charcoal/60">Market entry acceleration vs. organic build</div></div>
            </div>
            <div>
              <h3 className="text-xl text-charcoal mb-4 flex items-center gap-3">Strong post-acquisition performance</h3>
              <p className="text-charcoal/70 leading-relaxed mb-4">The combined company grew revenue 65% in the first year post-acquisition, driven by cross-selling to existing customers and new wins from enhanced capabilities.</p>
              <div className="p-6 bg-white/5"><div className="text-3xl text-charcoal mb-2">65%</div><div className="text-sm text-charcoal/60">Revenue growth in Year 1</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section 2 */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container px-4 md:px-12 max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <blockquote className="text-3xl md:text-4xl text-primary leading-tight mb-8">
              "NexDyne helped us navigate an unfamiliar market and find exactly the right target. The acquisition transformed our business and positioned us for the next phase of growth. We couldn't have done it without their expertise."
            </blockquote>
            <div className="text-base text-white"><div className="font-semibold">— David Chen</div><div className="text-white/60">CEO, Client Company</div></div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container px-4 md:px-12">
          <CaseStudyContactForm caseStudyTitle="Strategic Acquisition" />
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
              { title: "Post-merger integration success", industry: "Professional Services", description: "How we helped capture 120% of projected synergies", link: "/case-studies/post-merger-integration" },
              { title: "Carve-out transaction success", industry: "Industrial", description: "How we supported a complex carve-out from a larger conglomerate", link: "/case-studies/carve-out-transaction" }
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
