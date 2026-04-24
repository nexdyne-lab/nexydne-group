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

export default function RetailMarketExpansion() {
  return (
    <div className="min-h-screen bg-white text-white selection:bg-primary selection:text-white">
      <SEO
        title="Market Analysis and Strategic Expansion | Case Study | NexDyne Technologies"
        description="How detailed data analysis and geographic forecasting helped a regional consumer electronics retailer double market share and move from fifth to second in the market."
        canonical="/case-studies/retail-market-expansion"
      />
      <Navigation />

      {/* DZ10 Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-30"></div>
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
              Case Study · Retail
            </span>
            <h1 className="text-5xl md:text-7xl tracking-tight leading-[1.05] mb-4">
              Market Analysis and <span className="text-primary">Strategic Expansion</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-3xl mb-8">
              How detailed data analysis and geographic forecasting helped a regional consumer electronics retailer double market share and move from fifth to second in the market.
            </p>

            {/* PDF Download Button */}
            <CaseStudyPDFButton
              title="Market Analysis and Strategic Expansion"
              industry="Retail"
              summary="How detailed data analysis and geographic forecasting helped a regional consumer electronics retailer double market share and move from fifth to second in the market."
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
              { metric: "2x", label: "Market Share Growth" },
              { metric: "5th → 2nd", label: "Market Position" },
              { metric: "24 months", label: "Time to Achievement" }
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
                A regional consumer electronics retailer with 35 stores across multiple markets had achieved moderate success but struggled to break through to the next level of market leadership. Despite having strong customer satisfaction scores and competitive pricing, the company was stuck in fifth place in their regional market, watching larger competitors dominate the most lucrative territories.
              </p>
              <p className="text-charcoal/70 leading-relaxed">
                The company's finance function provided basic store-level P&L reporting but lacked the analytical sophistication to identify geographic expansion opportunities or optimize capital allocation across markets. Leadership made expansion decisions based primarily on intuition and availability of real estate, rather than data-driven market analysis.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-12 p-8 bg-white/5">
              <div>
                <div className="text-sm font-semibold text-primary mb-2">Industry</div>
                <div className="text-charcoal font-medium">Consumer Electronics Retail</div>
              </div>
              <div>
                <div className="text-sm font-semibold text-primary mb-2">Company Size</div>
                <div className="text-charcoal font-medium">35 stores</div>
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
              Unfocused Expansion Strategy
            </h2>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white text-charcoal">
        <div className="container px-4 md:px-12 max-w-4xl">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl text-charcoal mb-4">Lack of Market Intelligence</h3>
              <p className="text-charcoal/70 leading-relaxed">
                The company had limited visibility into market demographics, competitive density, and growth potential across different geographic regions. Expansion decisions were made opportunistically rather than strategically.
              </p>
            </div>

            <div>
              <h3 className="text-xl text-charcoal mb-4">Inconsistent Store Performance</h3>
              <p className="text-charcoal/70 leading-relaxed">
                While aggregate financial performance was acceptable, there was significant variation in store-level profitability. The company lacked a systematic framework for understanding what drove success in high-performing locations.
              </p>
            </div>

            <div>
              <h3 className="text-xl text-charcoal mb-4">Inefficient Capital Allocation</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Capital resources were spread thinly across all markets rather than concentrated in areas with the highest growth potential. This prevented the company from achieving market dominance in any specific region.
              </p>
            </div>

            <div>
              <h3 className="text-xl text-charcoal mb-4">Competitive Disadvantage</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Larger competitors were systematically identifying and entering high-potential markets before the company could establish a presence, creating a first-mover advantage that was difficult to overcome.
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
              "We were opening stores wherever we could find good real estate, but we had no strategic framework for deciding where to invest. Our competitors were eating our lunch in the best markets."
            </blockquote>
            <div className="text-base text-white">
              <div className="font-semibold">— Chief Operating Officer</div>
              <div className="text-white/60">Regional Consumer Electronics Retailer</div>
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
              Data-Driven Geographic Clustering
            </h2>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white text-charcoal">
        <div className="container px-4 md:px-12 max-w-4xl">
          <p className="text-xl text-charcoal/80 leading-relaxed mb-12">
            NexDyne's Fractional CFO team implemented a comprehensive market analysis and capital reallocation strategy that transformed the company's approach to expansion.
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

                  Store Performance Analysis
                </h3>
                <p className="text-charcoal/70 leading-relaxed mb-4">
                  We conducted a detailed analysis of individual store performance across all 35 locations, examining revenue, profitability, customer demographics, competitive environment, and market characteristics. This analysis revealed significant performance variation that correlated with specific market attributes.
                </p>
                <ul className="space-y-2 text-charcoal/70">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Developed performance attribution model identifying key success drivers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Analyzed population density, median income, and competitive density</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Created foundation for geographic expansion strategy</span>
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

                  Geographic Forecasting & Clustering
                </h3>
                <p className="text-charcoal/70 leading-relaxed mb-4">
                  Using external market data, demographic information, and competitive intelligence, we created detailed forecasts for over 150 potential expansion markets across the region. Each market was scored based on growth potential, competitive intensity, capital requirements, and strategic fit.
                </p>
                <ul className="space-y-2 text-charcoal/70">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Applied clustering analysis to identify regional groupings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Created "beachhead" strategies for market dominance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Prioritized expansion to adjacent high-potential territories</span>
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

                  Capital Reallocation Strategy
                </h3>
                <p className="text-charcoal/70 leading-relaxed mb-4">
                  Based on our analysis, we recommended a significant reallocation of capital resources. Rather than maintaining a presence in all current markets, we identified underperforming locations that should be closed or downsized, freeing up capital for aggressive expansion in high-potential clusters.
                </p>
                <ul className="space-y-2 text-charcoal/70">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Developed detailed financial models for each priority cluster</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Created clear roadmap with store count targets and revenue projections</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Established market share objectives for each geographic region</span>
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

                  Implementation & Monitoring
                </h3>
                <p className="text-charcoal/70 leading-relaxed mb-4">
                  We worked with leadership to implement the expansion strategy, establishing key performance indicators (KPIs) and monitoring dashboards to track progress. We created a disciplined capital allocation process that ensured resources were deployed according to the strategic plan.
                </p>
                <ul className="space-y-2 text-charcoal/70">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Established KPIs and monitoring dashboards</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Created disciplined capital allocation process</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Implemented quarterly performance reviews against strategic plan</span>
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
              Market Leadership Achieved
            </h2>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white text-charcoal">
        <div className="container px-4 md:px-12 max-w-4xl">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl text-charcoal mb-4 flex items-center gap-3">

                Market Share Doubled
              </h3>
              <p className="text-charcoal/70 leading-relaxed mb-4">
                The company doubled its regional market share from 8% to 16%, moving from fifth place to second place in the competitive landscape.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-6 bg-white/5">
                  <div className="text-3xl text-charcoal mb-2">8% → 16%</div>
                  <div className="text-sm text-charcoal/60">Regional market share growth</div>
                </div>
                <div className="p-6 bg-white/5">
                  <div className="text-3xl text-charcoal mb-2">5th → 2nd</div>
                  <div className="text-sm text-charcoal/60">Market position improvement</div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl text-charcoal mb-4 flex items-center gap-3">

                Strategic Footprint
              </h3>
              <p className="text-charcoal/70 leading-relaxed mb-4">
                Expanded from 35 to 52 stores, with new locations concentrated in high-potential clusters where the company achieved market leadership.
              </p>
              <div className="p-6 bg-white/5">
                <div className="text-3xl text-charcoal mb-2">35 → 52</div>
                <div className="text-sm text-charcoal/60">Store count growth in strategic clusters</div>
              </div>
            </div>

            <div>
              <h3 className="text-xl text-charcoal mb-4 flex items-center gap-3">

                Improved Profitability
              </h3>
              <p className="text-charcoal/70 leading-relaxed mb-4">
                Average store-level EBITDA margins improved by 4.2 percentage points through better site selection and market positioning.
              </p>
              <div className="p-6 bg-white/5">
                <div className="text-3xl text-charcoal mb-2">+4.2%</div>
                <div className="text-sm text-charcoal/60">Store-level EBITDA margin improvement</div>
              </div>
            </div>

            <div>
              <h3 className="text-xl text-charcoal mb-4 flex items-center gap-3">

                Capital Efficiency
              </h3>
              <p className="text-charcoal/70 leading-relaxed mb-4">
                Return on invested capital (ROIC) for new stores exceeded company average by 35%, demonstrating superior site selection.
              </p>
              <div className="p-6 bg-white/5">
                <div className="text-3xl text-charcoal mb-2">+35%</div>
                <div className="text-sm text-charcoal/60">ROIC improvement for new stores vs. company average</div>
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
              "NexDyne's geographic clustering approach completely changed our expansion strategy. Instead of spreading ourselves thin, we focused on dominating specific markets. The results speak for themselves—we went from fifth to second in the market in just two years."
            </blockquote>
            <div className="text-base text-white">
              <div className="font-semibold">— Chief Operating Officer</div>
              <div className="text-white/60">Regional Consumer Electronics Retailer</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* DZ10 Contact Form Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container px-4 md:px-12">
          <CaseStudyContactForm caseStudyTitle="Retail Market Expansion Strategy" />
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
                    Read case study <ArrowRight className="w-3 h-3" />
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
