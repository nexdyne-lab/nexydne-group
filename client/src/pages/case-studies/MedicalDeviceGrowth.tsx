import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, ArrowLeft, Target, TrendingUp, Users, Lightbulb, BarChart3, Download } from 'lucide-react';
import { CaseStudyPDFButton } from "@/components/CaseStudyPDFButton";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import CaseStudyContactForm from "@/components/CaseStudyContactForm";
import { BackToTop } from "@/components/BackToTop";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";

export default function MedicalDeviceGrowth() {
  return (
    <div className="min-h-screen bg-base text-white selection:bg-primary selection:text-white">
      <SEO 
        title="Identifying and Capturing Growth Opportunities | Case Study | NexDyne Technologies" 
        description="How NexDyne's proprietary financial modeling framework helped a mid-market medical device manufacturer identify strategic growth themes and prioritize investment channels."
        canonical="/case-studies/medical-device-growth"
      />
      <Navigation />
      
      {/* DZ10 Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-base via-base/60 to-base"></div>
        
        <div className="container relative z-10 px-4 md:px-12">
          <Breadcrumbs />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6 block">
              Case Study · Healthcare Manufacturing
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-4">
              Identifying and Capturing <span className="text-primary">Growth Opportunities</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-3xl mb-8">
              How NexDyne's proprietary financial modeling framework helped a mid-market medical device manufacturer identify strategic growth themes and prioritize investment channels.
            </p>
            
            {/* PDF Download Button */}
            <CaseStudyPDFButton
              title="Identifying and Capturing Growth Opportunities"
              industry="Healthcare Manufacturing"
              summary="How NexDyne's proprietary financial modeling framework helped a mid-market medical device manufacturer identify strategic growth themes and prioritize investment channels."
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
      <section className="py-16 bg-base border-t border-white/10">
        <div className="container px-4 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { metric: "12+", label: "Growth Themes Identified" },
              { metric: "25+", label: "Strategic Partners Evaluated" },
              { metric: "5", label: "Investment Channels Prioritized" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border-l-2 border-primary/50 pl-8"
              >
                <div className="text-5xl font-bold text-primary mb-2">{stat.metric}</div>
                <div className="text-base text-white/70">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DZ10 Sticky Navigation */}
      <nav className="sticky top-20 bg-base text-white z-40 border-y border-white/10">
        <div className="container px-4 md:px-12">
          <div className="flex items-center gap-1">
            <a href="#challenge" className="px-6 py-4 text-sm font-medium hover:bg-white/5 transition-colors hover:text-primary">
              THE CHALLENGE
            </a>
            <a href="#solution" className="px-6 py-4 text-sm font-medium hover:bg-white/5 transition-colors hover:text-primary">
              THE SOLUTION
            </a>
            <a href="#impact" className="px-6 py-4 text-sm font-medium hover:bg-white/5 transition-colors hover:text-primary">
              THE IMPACT
            </a>
          </div>
        </div>
      </nav>

      {/* Company Overview */}
      <section className="py-16 bg-white text-charcoal">
        <div className="container px-4 md:px-12 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-charcoal mb-6">Company Overview</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-charcoal/80 leading-relaxed mb-4">
                A mid-market medical device manufacturer with a strong product portfolio and established market presence faced a critical strategic challenge. While the company had achieved stable revenue growth, leadership recognized they were operating reactively rather than strategically. They lacked a systematic framework for evaluating growth opportunities and prioritizing capital allocation across potential investment channels.
              </p>
              <p className="text-charcoal/70 leading-relaxed">
                The company's existing finance function was capable of historical reporting and budgeting but lacked the forward-looking analytical capabilities needed to support strategic decision-making. This gap became increasingly problematic as the medical device market evolved rapidly, with new technologies, regulatory changes, and competitive dynamics creating both opportunities and risks.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-12 p-8 bg-base/5 rounded-xl">
              <div>
                <div className="text-sm font-semibold text-primary mb-2">Industry</div>
                <div className="text-charcoal font-medium">Healthcare Manufacturing</div>
              </div>
              <div>
                <div className="text-sm font-semibold text-primary mb-2">Company Size</div>
                <div className="text-charcoal font-medium">Mid-Market</div>
              </div>
              <div>
                <div className="text-sm font-semibold text-primary mb-2">Service</div>
                <div className="text-charcoal font-medium">Fractional CFO</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* DZ10 Challenge Section */}
      <section id="challenge" className="py-24 md:py-32 bg-primary">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/80 mb-6 block">
              The Challenge
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white max-w-4xl leading-tight">
              Strategic Void in Growth Planning
            </h2>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white text-charcoal">
        <div className="container px-4 md:px-12 max-w-4xl">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-charcoal mb-4">Lack of Strategic Framework</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Without a systematic approach to evaluating growth opportunities, decisions were made based on intuition and anecdotal evidence rather than rigorous financial analysis. This led to inconsistent capital allocation and missed opportunities.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-charcoal mb-4">Limited Market Intelligence</h3>
              <p className="text-charcoal/70 leading-relaxed">
                The finance team lacked access to external market data and competitive intelligence that could inform strategic decisions. They operated with an internal view of performance without understanding broader market dynamics.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-charcoal mb-4">Reactive Rather Than Proactive</h3>
              <p className="text-charcoal/70 leading-relaxed">
                The company responded to opportunities as they arose rather than actively identifying and pursuing strategic growth themes. This reactive posture meant they were often late to market with new initiatives.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-charcoal mb-4">Unclear Partnership Strategy</h3>
              <p className="text-charcoal/70 leading-relaxed">
                While leadership recognized that strategic partnerships and potential acquisitions could accelerate growth, they had no structured process for identifying, evaluating, and prioritizing potential partners in their ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DZ10 Quote Section */}
      <section className="py-24 md:py-32 bg-base">
        <div className="container px-4 md:px-12 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <blockquote className="text-3xl md:text-4xl text-primary leading-tight mb-8">
              "We knew we had growth potential, but we were flying blind. Every strategic decision felt like a gamble because we lacked the analytical framework to evaluate opportunities systematically."
            </blockquote>
            <div className="text-base text-white">
              <div className="font-semibold">— Chief Executive Officer</div>
              <div className="text-white/60">Mid-Market Medical Device Manufacturer</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* DZ10 Solution Section */}
      <section id="solution" className="py-24 md:py-32 bg-primary">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/80 mb-6 block">
              The Solution
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white max-w-4xl leading-tight">
              Proprietary Financial Modeling Framework
            </h2>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white text-charcoal">
        <div className="container px-4 md:px-12 max-w-4xl">
          <p className="text-xl text-charcoal/80 leading-relaxed mb-12">
            NexDyne deployed our Fractional CFO services to provide the strategic financial leadership the company needed. Our approach combined rigorous financial modeling, external market analysis, and scenario planning to create a comprehensive growth strategy framework.
          </p>

          <div className="space-y-12">
            {/* Phase 1 */}
            <div className="flex gap-8">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                  1
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center gap-3">
                  <Target className="w-6 h-6 text-primary" />
                  Strategic Assessment & Framework Development
                </h3>
                <p className="text-charcoal/70 leading-relaxed mb-4">
                  We began by conducting a comprehensive assessment of the company's current strategic position, financial capabilities, and market environment. Working closely with the executive team, we developed a proprietary financial modeling framework tailored to the medical device industry. This framework integrated internal financial data with external market intelligence, competitive analysis, and regulatory trends.
                </p>
                <ul className="space-y-2 text-charcoal/70">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Established clear evaluation criteria for growth opportunities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Integrated market size, growth rate, and competitive intensity metrics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Created accessible framework for non-financial stakeholders</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="flex gap-8">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                  2
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center gap-3">
                  <TrendingUp className="w-6 h-6 text-primary" />
                  Growth Theme Identification
                </h3>
                <p className="text-charcoal/70 leading-relaxed mb-4">
                  Using our framework, we identified and evaluated over 12 potential growth themes across product categories, geographic markets, customer segments, and business models. Each theme was assessed using scenario analysis that modeled best-case, base-case, and worst-case outcomes under different market conditions.
                </p>
                <ul className="space-y-2 text-charcoal/70">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Pulled external market data from industry reports and regulatory filings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Validated assumptions through competitive intelligence sources</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Revealed high-potential opportunities previously overlooked</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="flex gap-8">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                  3
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center gap-3">
                  <BarChart3 className="w-6 h-6 text-primary" />
                  Investment Channel Prioritization
                </h3>
                <p className="text-charcoal/70 leading-relaxed mb-4">
                  From the 12 growth themes identified, we applied rigorous financial analysis to prioritize the top 5 investment channels that offered the highest risk-adjusted returns aligned with the company's strategic objectives. For each priority channel, we developed detailed financial projections, capital requirements, and implementation roadmaps.
                </p>
                <ul className="space-y-2 text-charcoal/70">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Conducted sensitivity analysis on key assumptions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Developed detailed implementation roadmaps</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Created risk management frameworks for each channel</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Phase 4 */}
            <div className="flex gap-8">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                  4
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center gap-3">
                  <Users className="w-6 h-6 text-primary" />
                  Strategic Partnership Evaluation
                </h3>
                <p className="text-charcoal/70 leading-relaxed mb-4">
                  We identified and evaluated over 25 potential strategic partners in the medical device ecosystem, including technology providers, distribution partners, and potential acquisition targets. Each partner was assessed based on strategic fit, financial health, cultural alignment, and potential synergies.
                </p>
                <ul className="space-y-2 text-charcoal/70">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Developed partnership prioritization matrix</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Modeled potential partnership structures from licensing to acquisition</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Focused business development on highest-value opportunities</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DZ10 Impact Section */}
      <section id="impact" className="py-24 md:py-32 bg-primary">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/80 mb-6 block">
              The Impact
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white max-w-4xl leading-tight">
              Strategic Clarity and Actionable Roadmap
            </h2>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white text-charcoal">
        <div className="container px-4 md:px-12 max-w-4xl">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center gap-3">
                <Target className="w-6 h-6 text-primary" />
                Clear Strategic Direction
              </h3>
              <p className="text-charcoal/70 leading-relaxed mb-4">
                Leadership gained a clear, data-driven understanding of where to focus growth investments. The prioritized investment channels provided a strategic roadmap that aligned the entire organization around common objectives.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-6 bg-base/5 rounded-xl">
                  <div className="text-3xl font-bold text-charcoal mb-2">12+</div>
                  <div className="text-sm text-charcoal/60">Growth themes systematically evaluated</div>
                </div>
                <div className="p-6 bg-base/5 rounded-xl">
                  <div className="text-3xl font-bold text-charcoal mb-2">5</div>
                  <div className="text-sm text-charcoal/60">Priority investment channels identified</div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center gap-3">
                <Users className="w-6 h-6 text-primary" />
                Partnership Pipeline
              </h3>
              <p className="text-charcoal/70 leading-relaxed mb-4">
                The company established a robust pipeline of strategic partnership opportunities, with clear prioritization and financial models for each potential collaboration or acquisition.
              </p>
              <div className="p-6 bg-base/5 rounded-xl">
                <div className="text-3xl font-bold text-charcoal mb-2">25+</div>
                <div className="text-sm text-charcoal/60">Strategic partners evaluated and prioritized</div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center gap-3">
                <Lightbulb className="w-6 h-6 text-primary" />
                Enhanced Capabilities
              </h3>
              <p className="text-charcoal/70 leading-relaxed mb-4">
                The finance team developed new analytical capabilities and frameworks that could be applied to future strategic decisions, reducing dependence on external consultants.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center gap-3">
                <TrendingUp className="w-6 h-6 text-primary" />
                Board Confidence
              </h3>
              <p className="text-charcoal/70 leading-relaxed mb-4">
                The board of directors gained confidence in management's strategic planning process, supported by rigorous financial analysis and scenario modeling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DZ10 Quote Section 2 */}
      <section className="py-24 md:py-32 bg-base">
        <div className="container px-4 md:px-12 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <blockquote className="text-3xl md:text-4xl text-primary leading-tight mb-8">
              "NexDyne didn't just give us a report—they gave us a strategic framework that fundamentally changed how we think about growth. For the first time, we have a systematic, data-driven approach to evaluating opportunities and allocating capital. This has been transformational for our business."
            </blockquote>
            <div className="text-base text-white">
              <div className="font-semibold">— Chief Executive Officer</div>
              <div className="text-white/60">Mid-Market Medical Device Manufacturer</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* DZ10 Contact Form Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container px-4 md:px-12">
          <CaseStudyContactForm caseStudyTitle="Medical Device Growth Strategy" />
        </div>
      </section>

      {/* DZ10 Related Cases Section */}
      <section className="py-24 md:py-32 bg-base">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/60 mb-6 block">
              Related Case Studies
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white">More success stories</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
            {[
              {
                title: "Market Analysis and Strategic Expansion",
                industry: "Retail",
                description: "How a regional retailer doubled market share in two years",
                image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80",
                link: "/case-studies/retail-market-expansion"
              },
              {
                title: "Shifting Mindsets to Drive Performance",
                industry: "B2B SaaS",
                description: "How a B2B SaaS platform transitioned from follower to leader",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
                link: "/case-studies/saas-category-leadership"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={item.link} className="group block h-full">
                  <div className="aspect-[16/9] overflow-hidden mb-6 rounded-xl relative bg-white/5">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <span className="text-xs font-bold text-primary uppercase tracking-wider">{item.industry}</span>
                  <h3 className="text-xl font-bold text-white mt-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-white/60 mt-2">{item.description}</p>
                  <span className="text-primary text-sm font-semibold flex items-center gap-1 mt-4 group-hover:gap-2 transition-all">
                    Read case study <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link href="/cases">
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-base font-semibold transition-all bg-transparent">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to all case studies
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <BackToTop />
      <Footer />
    </div>
  );
}
