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

export default function SeriesBFunding() {
  return (
    <div className="min-h-screen bg-white text-white selection:bg-primary selection:text-white">
      <SEO
        title="Series B Funding Success | Case Study | NexDyne Technologies"
        description="How we helped a healthtech startup secure $45M Series B funding at a 3x valuation premium through strategic positioning and investor preparation."
        canonical="/case-studies/series-b-funding"
      />
      <Navigation />

      {/* DZ10 Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0"></div>

        <div className="container relative z-10 px-4 md:px-12">
          <Breadcrumbs />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="text-xs uppercase tracking-[0.2em] text-primary mb-6 block">
              Case Study · HealthTech
            </span>
            <h1 className="text-5xl md:text-7xl tracking-tight leading-[1.05] mb-4">
              <span className="text-primary">$45M</span> Series B at 3x valuation premium
            </h1>
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-3xl mb-8">
              How we helped a healthtech startup secure Series B funding at a significant valuation premium through strategic positioning, financial modeling, and comprehensive investor preparation.
            </p>

            {/* PDF Download Button */}
            <CaseStudyPDFButton
              title="$45M Series B at 3x valuation premium"
              industry="HealthTech"
              summary="How we helped a healthtech startup secure Series B funding at a significant valuation premium through strategic positioning, financial modeling, and comprehensive investor preparation."
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
      <section className="py-16 bg-white border-t border-white/10">
        <div className="container px-4 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {[
              { metric: "$45M", label: "Series B raised" },
              { metric: "3x", label: "Valuation premium vs. initial target" },
              { metric: "12", label: "Term sheets received" },
              { metric: "8 weeks", label: "From launch to close" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border-l-2 border-primary/50 pl-8"
              >
                <div className="text-5xl text-primary mb-2">{stat.metric}</div>
                <div className="text-base text-white/70">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DZ10 Sticky Navigation */}
      <nav className="sticky top-20 bg-white text-white z-40 border-y border-white/10">
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
            <h2 className="text-3xl text-charcoal mb-6">Company Overview</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-charcoal/80 leading-relaxed mb-4">
                Our client is a healthtech company that developed an AI-powered platform for chronic disease management. With $8M in ARR and 150% year-over-year growth, they had proven product-market fit and were ready to scale. The company had raised a $12M Series A two years prior and was seeking Series B funding to accelerate growth.
              </p>
              <p className="text-charcoal/70 leading-relaxed">
                The founding team had deep domain expertise in healthcare but limited experience with institutional fundraising at the growth stage. They needed help positioning the company, building investor materials, and navigating the fundraising process.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-12 p-8 bg-white/5">
              <div>
                <div className="text-sm font-semibold text-primary mb-2">Industry</div>
                <div className="text-charcoal font-medium">HealthTech / Digital Health</div>
              </div>
              <div>
                <div className="text-sm font-semibold text-primary mb-2">Stage</div>
                <div className="text-charcoal font-medium">Series B</div>
              </div>
              <div>
                <div className="text-sm font-semibold text-primary mb-2">Annual Revenue</div>
                <div className="text-charcoal font-medium">$8M ARR</div>
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
            <span className="text-xs uppercase tracking-[0.2em] text-white/80 mb-6 block">
              The Challenge
            </span>
            <h2 className="text-4xl md:text-5xl text-white max-w-4xl leading-tight">
              Positioning for premium valuation in a competitive market
            </h2>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white text-charcoal">
        <div className="container px-4 md:px-12 max-w-4xl">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl text-charcoal mb-4">Crowded market with multiple well-funded competitors</h3>
              <p className="text-charcoal/70 leading-relaxed">
                The digital health space had seen significant investment, with several competitors having raised larger rounds. Investors were becoming more selective, and the company needed to clearly differentiate its approach and demonstrate why it would win in a competitive market.
              </p>
            </div>

            <div>
              <h3 className="text-xl text-charcoal mb-4">Complex business model requiring clear articulation</h3>
              <p className="text-charcoal/70 leading-relaxed">
                The company's revenue model involved multiple stakeholders—health systems, payers, and employers—each with different value propositions and sales cycles. Investors needed to understand how these pieces fit together and why the multi-stakeholder approach created defensibility rather than complexity.
              </p>
            </div>

            <div>
              <h3 className="text-xl text-charcoal mb-4">Limited bandwidth for fundraising while running the business</h3>
              <p className="text-charcoal/70 leading-relaxed">
                The CEO and CFO were already stretched thin managing rapid growth. They couldn't afford to spend months on fundraising while neglecting customers and operations. They needed a process that was efficient and well-orchestrated to minimize distraction from the core business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DZ10 Quote Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container px-4 md:px-12 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <blockquote className="text-3xl md:text-4xl text-primary leading-tight mb-8">
              "We knew we had a great company, but we weren't sure how to tell our story in a way that would resonate with growth investors. We needed help translating our clinical outcomes into a compelling investment thesis."
            </blockquote>
            <div className="text-base text-white">
              <div className="font-semibold">— Dr. Jennifer Park</div>
              <div className="text-white/60">CEO & Co-founder, Client Company</div>
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
            <span className="text-xs uppercase tracking-[0.2em] text-white/80 mb-6 block">
              The Solution
            </span>
            <h2 className="text-4xl md:text-5xl text-white max-w-4xl leading-tight">
              Comprehensive fundraising preparation and execution
            </h2>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white text-charcoal">
        <div className="container px-4 md:px-12 max-w-4xl">
          <p className="text-xl text-charcoal/80 leading-relaxed mb-12">
            We partnered with the leadership team on a comprehensive fundraising engagement that covered positioning, materials development, investor targeting, and process management.
          </p>

          <div className="space-y-12">
            {/* Phase 1 */}
            <div className="flex gap-8">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary text-white flex items-center justify-center text-lg">
                  1
                </div>
              </div>
              <div>
                <h3 className="text-xl text-charcoal mb-4 flex items-center gap-3">

                  Strategic positioning and narrative development
                </h3>
                <p className="text-charcoal/70 leading-relaxed mb-4">
                  We worked with the team to develop a compelling investment narrative that positioned the company as the category leader in AI-powered chronic disease management. We articulated the market opportunity, competitive differentiation, and path to market leadership in terms that would resonate with growth investors.
                </p>
                <ul className="space-y-2 text-charcoal/70">
                  <li className="flex items-start gap-2">

                    <span>Market sizing and TAM/SAM/SOM analysis</span>
                  </li>
                  <li className="flex items-start gap-2">

                    <span>Competitive positioning framework</span>
                  </li>
                  <li className="flex items-start gap-2">

                    <span>Investment thesis and key proof points</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="flex gap-8">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary text-white flex items-center justify-center text-lg">
                  2
                </div>
              </div>
              <div>
                <h3 className="text-xl text-charcoal mb-4 flex items-center gap-3">

                  Financial modeling and materials development
                </h3>
                <p className="text-charcoal/70 leading-relaxed mb-4">
                  We built a comprehensive financial model that demonstrated the path to profitability and the capital efficiency of the business model. We also developed a pitch deck, data room, and supporting materials that told a cohesive story and anticipated investor questions.
                </p>
                <ul className="space-y-2 text-charcoal/70">
                  <li className="flex items-start gap-2">

                    <span>5-year financial model with scenario analysis</span>
                  </li>
                  <li className="flex items-start gap-2">

                    <span>Investor pitch deck with compelling visuals</span>
                  </li>
                  <li className="flex items-start gap-2">

                    <span>Comprehensive data room with due diligence materials</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="flex gap-8">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary text-white flex items-center justify-center text-lg">
                  3
                </div>
              </div>
              <div>
                <h3 className="text-xl text-charcoal mb-4 flex items-center gap-3">

                  Investor targeting and outreach
                </h3>
                <p className="text-charcoal/70 leading-relaxed mb-4">
                  We identified and prioritized 50 growth-stage investors with relevant healthcare and SaaS experience. We crafted personalized outreach for each tier and managed the scheduling and follow-up process to ensure consistent momentum.
                </p>
                <ul className="space-y-2 text-charcoal/70">
                  <li className="flex items-start gap-2">

                    <span>Tiered investor target list with 50 firms</span>
                  </li>
                  <li className="flex items-start gap-2">

                    <span>Personalized outreach strategy by investor</span>
                  </li>
                  <li className="flex items-start gap-2">

                    <span>Meeting preparation and follow-up management</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Phase 4 */}
            <div className="flex gap-8">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary text-white flex items-center justify-center text-lg">
                  4
                </div>
              </div>
              <div>
                <h3 className="text-xl text-charcoal mb-4 flex items-center gap-3">

                  Process management and negotiation support
                </h3>
                <p className="text-charcoal/70 leading-relaxed mb-4">
                  We managed the fundraising process from initial meetings through term sheet negotiation and close. We created competitive dynamics among interested investors and helped the team evaluate and negotiate term sheets to achieve optimal terms.
                </p>
                <ul className="space-y-2 text-charcoal/70">
                  <li className="flex items-start gap-2">

                    <span>Process timeline and milestone management</span>
                  </li>
                  <li className="flex items-start gap-2">

                    <span>Term sheet comparison and negotiation support</span>
                  </li>
                  <li className="flex items-start gap-2">

                    <span>Due diligence coordination and response</span>
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
            <span className="text-xs uppercase tracking-[0.2em] text-white/80 mb-6 block">
              The Impact
            </span>
            <h2 className="text-4xl md:text-5xl text-white max-w-4xl leading-tight">
              Results & Impact
            </h2>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white text-charcoal">
        <div className="container px-4 md:px-12 max-w-4xl">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl text-charcoal mb-4 flex items-center gap-3">

                Oversubscribed round at premium valuation
              </h3>
              <p className="text-charcoal/70 leading-relaxed mb-4">
                The company received 12 term sheets and ultimately raised $45M at a valuation 3x higher than their initial target. The round was led by a top-tier healthcare-focused growth fund with participation from strategic investors.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-6 bg-white/5">
                  <div className="text-3xl text-charcoal mb-2">$45M</div>
                  <div className="text-sm text-charcoal/60">Series B raised (vs. $25M target)</div>
                </div>
                <div className="p-6 bg-white/5">
                  <div className="text-3xl text-charcoal mb-2">12</div>
                  <div className="text-sm text-charcoal/60">Term sheets received</div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl text-charcoal mb-4 flex items-center gap-3">

                Efficient process with minimal business disruption
              </h3>
              <p className="text-charcoal/70 leading-relaxed mb-4">
                The entire process from launch to close took just 8 weeks, allowing the leadership team to maintain focus on the business. The CEO spent less than 20% of her time on fundraising activities during the process.
              </p>
              <div className="p-6 bg-white/5">
                <div className="text-3xl text-charcoal mb-2">8 weeks</div>
                <div className="text-sm text-charcoal/60">From process launch to close</div>
              </div>
            </div>

            <div>
              <h3 className="text-xl text-charcoal mb-4 flex items-center gap-3">

                Strategic investor adds value beyond capital
              </h3>
              <p className="text-charcoal/70 leading-relaxed mb-4">
                The lead investor brought deep healthcare expertise and a network of health system relationships that accelerated the company's enterprise sales efforts. Within six months of close, the company had signed three major health system partnerships facilitated by investor introductions.
              </p>
              <div className="p-6 bg-white/5">
                <div className="text-3xl text-charcoal mb-2">3</div>
                <div className="text-sm text-charcoal/60">Major partnerships facilitated by investor network</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DZ10 Quote Section 2 */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container px-4 md:px-12 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <blockquote className="text-3xl md:text-4xl text-primary leading-tight mb-8">
              "The NexDyne team transformed our fundraising process. They helped us tell our story in a way that resonated with investors and created competitive dynamics that resulted in terms we never thought possible. The investment in their support paid for itself many times over."
            </blockquote>
            <div className="text-base text-white">
              <div className="font-semibold">— Dr. Jennifer Park</div>
              <div className="text-white/60">CEO & Co-founder, Client Company</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* DZ10 Contact Form Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container px-4 md:px-12">
          <CaseStudyContactForm caseStudyTitle="Series B Funding Success" />
        </div>
      </section>

      {/* DZ10 Related Cases Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="text-xs uppercase tracking-[0.2em] text-white/60 mb-6 block">
              Related Case Studies
            </span>
            <h2 className="text-4xl md:text-5xl text-white">More success stories</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
            {[
              {
                title: "Healthcare startup secures strategic funding",
                industry: "Healthcare",
                description: "How we helped a medical device company raise growth capital",
                link: "/case-studies/healthcare-funding"
              },
              {
                title: "Manufacturing growth equity transaction",
                industry: "Manufacturing",
                description: "How we positioned a manufacturer for successful growth equity raise",
                link: "/case-studies/manufacturing-growth-equity"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={item.link} className="group block h-full p-8 bg-white/5 hover:bg-white/10 transition-colors">
                  <span className="text-xs text-primary uppercase tracking-wider">{item.industry}</span>
                  <h3 className="text-xl text-white mt-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-white/60 mt-2">{item.description}</p>
                  <span className="text-primary text-sm font-semibold flex items-center gap-1 mt-4 group-hover:gap-2 transition-all">
                    Read case study 
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link href="/case-studies">
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-base font-semibold transition-all bg-transparent">

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
