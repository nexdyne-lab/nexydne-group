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

export default function SaasCategoryLeadership() {
  return (
    <div className="min-h-screen bg-white text-white selection:bg-primary selection:text-white">
      <SEO
        title="Shifting Mindsets to Drive Performance | Case Study | NexDyne Technologies"
        description="How an 'insights to action' financial approach helped a B2B SaaS platform transition from fast follower to category leader with $50M+ in new ARR potential."
        canonical="/case-studies/saas-category-leadership"
      />
      <Navigation />

      {/* DZ10 Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-30"></div>
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
              Case Study · Software & Technology
            </span>
            <h1 className="text-5xl md:text-7xl tracking-tight leading-[1.05] mb-4">
              Shifting Mindsets to <span className="text-primary">Drive Performance</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-3xl mb-8">
              How an "insights to action" financial approach helped a B2B SaaS platform transition from fast follower to category leader with $50M+ in new ARR potential.
            </p>

            {/* PDF Download Button */}
            <CaseStudyPDFButton
              title="Shifting Mindsets to Drive Performance"
              industry="Software & Technology"
              summary="How an insights to action financial approach helped a B2B SaaS platform transition from fast follower to category leader with $50M+ in new ARR potential."
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { metric: "5+", label: "New Revenue Streams" },
              { metric: "$50M+", label: "Potential ARR" },
              { metric: "Follower → Leader", label: "Strategic Shift" }
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
                A B2B SaaS platform serving mid-market companies had built a successful business by being a fast follower in their category. They watched competitors introduce new features and capabilities, then quickly replicated them with competitive pricing. This strategy had generated steady growth and profitability, but leadership recognized they had hit a ceiling.
              </p>
              <p className="text-charcoal/70 leading-relaxed">
                The company's finance function was competent at tracking SaaS metrics like MRR, churn, and CAC, but lacked the strategic orientation to drive innovation and category leadership. Financial planning was reactive, focused on supporting the sales organization rather than enabling breakthrough product development.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-12 p-8 bg-white/5">
              <div>
                <div className="text-sm font-semibold text-primary mb-2">Industry</div>
                <div className="text-charcoal font-medium">B2B SaaS</div>
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
            <span className="text-xs uppercase tracking-[0.2em] text-white/80 mb-6 block">
              The Challenge
            </span>
            <h2 className="text-4xl md:text-5xl text-white max-w-4xl leading-tight">
              Breaking the Fast Follower Trap
            </h2>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white text-charcoal">
        <div className="container px-4 md:px-12 max-w-4xl">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl text-charcoal mb-4">Reactive Product Strategy</h3>
              <p className="text-charcoal/70 leading-relaxed">
                The company's product roadmap was driven by competitive response rather than customer insight or market opportunity. This meant they were always playing catch-up, never setting the agenda for the category.
              </p>
            </div>

            <div>
              <h3 className="text-xl text-charcoal mb-4">Conservative Financial Culture</h3>
              <p className="text-charcoal/70 leading-relaxed">
                The finance team prioritized profitability and efficiency over growth and innovation. R&D investment was constrained by short-term financial targets, preventing the company from making the bold bets required for breakthrough innovation.
              </p>
            </div>

            <div>
              <h3 className="text-xl text-charcoal mb-4">Limited Revenue Diversification</h3>
              <p className="text-charcoal/70 leading-relaxed">
                The company relied heavily on a single core product, creating vulnerability to competitive disruption and limiting growth potential. Leadership recognized the need for new revenue streams but lacked a framework for identifying and funding them.
              </p>
            </div>

            <div>
              <h3 className="text-xl text-charcoal mb-4">Misaligned Incentives</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Financial metrics and incentive structures rewarded short-term performance rather than strategic innovation. This created organizational resistance to the long-term investments required for category leadership.
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
              "We had built a successful business by being fast followers, but we knew we couldn't keep playing catch-up forever. We needed to become the company that others followed, but our financial culture was holding us back."
            </blockquote>
            <div className="text-base text-white">
              <div className="font-semibold">— Chief Executive Officer</div>
              <div className="text-white/60">B2B SaaS Platform</div>
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
              "Insights to Action" Financial Framework
            </h2>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white text-charcoal">
        <div className="container px-4 md:px-12 max-w-4xl">
          <p className="text-xl text-charcoal/80 leading-relaxed mb-12">
            NexDyne's Fractional CFO team implemented a transformational approach that shifted the company's financial function from a control-oriented cost center to a strategic enabler of innovation.
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

                  Strategic Financial Repositioning
                </h3>
                <p className="text-charcoal/70 leading-relaxed mb-4">
                  We began by fundamentally reframing the role of finance within the organization. Rather than simply tracking historical performance, we positioned finance as the strategic partner that would enable the company's transition to category leadership.
                </p>
                <ul className="space-y-2 text-charcoal/70">
                  <li className="flex items-start gap-2">
                    
                    <span>Established new financial framework balancing short-term profitability with strategic investment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    
                    <span>Created separate financial targets for core operations and innovation initiatives</span>
                  </li>
                  <li className="flex items-start gap-2">
                    
                    <span>Protected innovation investments from quarterly earnings pressure</span>
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

                  Innovation Portfolio Development
                </h3>
                <p className="text-charcoal/70 leading-relaxed mb-4">
                  We implemented a rigorous innovation portfolio management process that identified, evaluated, and prioritized potential new revenue streams. This process combined customer research, market analysis, competitive intelligence, and financial modeling to create a pipeline of breakthrough product opportunities.
                </p>
                <ul className="space-y-2 text-charcoal/70">
                  <li className="flex items-start gap-2">
                    
                    <span>Established clear investment criteria and stage-gate processes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    
                    <span>Evaluated opportunities based on market size, competitive positioning, and strategic fit</span>
                  </li>
                  <li className="flex items-start gap-2">
                    
                    <span>Ensured innovation investments were strategic rather than speculative</span>
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

                  Capital Allocation & Funding
                </h3>
                <p className="text-charcoal/70 leading-relaxed mb-4">
                  Based on our portfolio analysis, we identified five high-potential new revenue streams that collectively represented over $50 million in potential annual recurring revenue. We developed detailed financial models for each opportunity, including development costs, go-to-market expenses, revenue ramps, and profitability trajectories.
                </p>
                <ul className="space-y-2 text-charcoal/70">
                  <li className="flex items-start gap-2">
                    
                    <span>Reallocated resources from lower-priority initiatives</span>
                  </li>
                  <li className="flex items-start gap-2">
                    
                    <span>Developed compelling investment thesis for the board</span>
                  </li>
                  <li className="flex items-start gap-2">
                    
                    <span>Created multi-year financial plan demonstrating long-term value creation</span>
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

                  Performance Management & Governance
                </h3>
                <p className="text-charcoal/70 leading-relaxed mb-4">
                  We established new performance management frameworks that tracked both core business metrics and innovation KPIs. This included leading indicators of product-market fit, customer adoption, competitive differentiation, and revenue potential.
                </p>
                <ul className="space-y-2 text-charcoal/70">
                  <li className="flex items-start gap-2">
                    
                    <span>Implemented quarterly innovation reviews with executive team and board</span>
                  </li>
                  <li className="flex items-start gap-2">
                    
                    <span>Focused on learning and adaptation, not just financial performance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    
                    <span>Fostered culture of strategic experimentation</span>
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
              Category Leadership Achieved
            </h2>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white text-charcoal">
        <div className="container px-4 md:px-12 max-w-4xl">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl text-charcoal mb-4 flex items-center gap-3">

                Breakthrough Product Pipeline
              </h3>
              <p className="text-charcoal/70 leading-relaxed mb-4">
                Funded development of five new revenue streams with potential to generate over $50 million in annual recurring revenue, diversifying the company's product portfolio.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-6 bg-white/5">
                  <div className="text-3xl text-charcoal mb-2">5+</div>
                  <div className="text-sm text-charcoal/60">New revenue streams funded</div>
                </div>
                <div className="p-6 bg-white/5">
                  <div className="text-3xl text-charcoal mb-2">$50M+</div>
                  <div className="text-sm text-charcoal/60">Potential ARR from new products</div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl text-charcoal mb-4 flex items-center gap-3">

                Strategic Repositioning
              </h3>
              <p className="text-charcoal/70 leading-relaxed mb-4">
                Successfully transitioned from fast follower to category leader, with analysts and customers recognizing the company as an innovation leader rather than a me-too competitor.
              </p>
            </div>

            <div>
              <h3 className="text-xl text-charcoal mb-4 flex items-center gap-3">

                Accelerated Growth
              </h3>
              <p className="text-charcoal/70 leading-relaxed mb-4">
                Year-over-year revenue growth accelerated from 18% to 42% as new products gained market traction, while maintaining healthy unit economics.
              </p>
              <div className="p-6 bg-white/5">
                <div className="text-3xl text-charcoal mb-2">18% → 42%</div>
                <div className="text-sm text-charcoal/60">Year-over-year revenue growth acceleration</div>
              </div>
            </div>

            <div>
              <h3 className="text-xl text-charcoal mb-4 flex items-center gap-3">

                Cultural Transformation
              </h3>
              <p className="text-charcoal/70 leading-relaxed mb-4">
                Finance became a strategic partner to product and engineering, with cross-functional collaboration driving innovation rather than constraining it.
              </p>
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
              "NexDyne didn't just help us create a financial plan—they helped us fundamentally rethink our relationship with innovation. By shifting finance from a control function to a strategic enabler, we were able to make the bold investments required to become a category leader. The impact on our business has been profound."
            </blockquote>
            <div className="text-base text-white">
              <div className="font-semibold">— Chief Executive Officer</div>
              <div className="text-white/60">B2B SaaS Platform</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* DZ10 Contact Form Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container px-4 md:px-12">
          <CaseStudyContactForm caseStudyTitle="SaaS Category Leadership" />
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
                title: "Identifying and Capturing Growth Opportunities",
                industry: "Healthcare Manufacturing",
                description: "How a medical device manufacturer identified strategic growth themes",
                image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&q=80",
                link: "/case-studies/medical-device-growth"
              },
              {
                title: "Market Analysis and Strategic Expansion",
                industry: "Retail",
                description: "How a regional retailer doubled market share in two years",
                image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80",
                link: "/case-studies/retail-market-expansion"
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
                  <div className="aspect-[16/9] overflow-hidden mb-6 relative bg-white/5">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
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
            <Link href="/cases">
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
