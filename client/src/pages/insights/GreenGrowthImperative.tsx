import { Link } from "wouter";
import ReadingProgress from "@/components/ReadingProgress";
import InlineTableOfContents from "@/components/InlineTableOfContents";
import { ArrowLeft, ArrowRight, Leaf, BarChart3, Globe, Zap } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function GreenGrowthImperative() {
  return (
    <div className="min-h-screen bg-white font-sans text-charcoal">
      <Navigation />
      
      {/* Hero Section - Immersive Nature Background */}
      <section className="relative h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/green-growth-hero.jpg" 
            alt="Green Growth Landscape" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/30 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>

        <div className="container relative z-10 pt-20">
          <div className="max-w-3xl">
            <Link href="/capabilities/growth-marketing-sales/growth-strategy" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors text-sm tracking-wide uppercase font-medium">
              <ArrowLeft className="w-4 h-4" />
              Back to Growth Strategy
            </Link>
            
            <h1 className="text-5xl md:text-7xl font-serif font-medium text-white mb-4 leading-tight">
              Green Growth
            </h1>
            
            <p className="text-2xl md:text-3xl text-white/90 font-light leading-relaxed max-w-2xl">
              Companies don't have to choose between sustainability and growth—they can have both.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section - Asymmetric Layout */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-4">
              <h2 className="text-4xl md:text-5xl font-serif text-charcoal leading-tight sticky top-24">
                Sustainability as a <span className="text-emerald-700 italic">competitive advantage</span>
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-8">
              <p className="text-xl text-muted-foreground leading-relaxed font-light">
                We consider green growth to be sustainable growth that can be generated with the power of the ESG levers that companies are already implementing. The journey to net zero will create opportunities—and challenges—for B2B and B2C companies in many industries.
              </p>
              <p className="text-xl text-muted-foreground leading-relaxed font-light">
                Companies need to play offense, however, on this journey—not just to protect their core business, but also to capture the full value from sustainability. It's undeniable that the transition to net zero requires significant investment. We're here to help companies to achieve strong returns on these investments.
              </p>
              
              <div className="pt-8">
                <Link href="/contact">
                  <button className="group inline-flex items-center gap-3 px-8 py-4 bg-emerald-700 text-white rounded-full hover:bg-emerald-800 transition-all duration-300 text-lg font-medium">
                    Start Your Transformation
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do - Floating Cards / Split Layout */}
      <section className="py-24 bg-slate-50 overflow-hidden">
        <div className="container mb-20">
          <h2 className="text-4xl md:text-6xl font-serif text-center text-charcoal mb-4">What we do</h2>
          <p className="text-xl text-muted-foreground text-center max-w-2xl mx-auto font-light">
            Commercializing green opportunities along the full value chain.
          </p>
        </div>

        <div className="space-y-32">
          {/* Strategy Pillar */}
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative order-2 lg:order-1">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl relative z-10">
                  <img 
                    src="/images/green-strategy.jpg" 
                    alt="Green Strategy" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                {/* Decorative element */}
                <div className="absolute -bottom-12 -left-12 w-full h-full border-2 border-emerald-200 rounded-2xl -z-0 hidden lg:block" />
              </div>
              <div className="order-1 lg:order-2 lg:pl-12">
                <h3 className="text-3xl md:text-4xl font-serif mb-6 text-charcoal">Green revenue growth management</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8 font-light">
                  We help to investigate what the most attractive value pools are based on, where you can have sustainability impact, and if there is a willingness to pay. Organizations need to look at their ESG operations through the eyes of their customers to understand where they could create additional value.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 p-1 bg-emerald-100 rounded-full text-emerald-700">
                      <Leaf className="w-4 h-4" />
                    </div>
                    <span className="text-charcoal/80">Identify high-impact sustainability value pools</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 p-1 bg-emerald-100 rounded-full text-emerald-700">
                      <BarChart3 className="w-4 h-4" />
                    </div>
                    <span className="text-charcoal/80">Quantify customer willingness to pay for green attributes</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Finance Pillar */}
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="lg:pr-12">
                <h3 className="text-3xl md:text-4xl font-serif mb-6 text-charcoal">Pricing and margin management</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8 font-light">
                  Companies can achieve premiums, but customers' willingness to pay varies by segment and changes constantly. To succeed in the long term, companies must understand how demand-supply scenarios and regulations may affect prices.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 p-1 bg-emerald-100 rounded-full text-emerald-700">
                      <Globe className="w-4 h-4" />
                    </div>
                    <span className="text-charcoal/80">Dynamic pricing strategies for sustainable products</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 p-1 bg-emerald-100 rounded-full text-emerald-700">
                      <Zap className="w-4 h-4" />
                    </div>
                    <span className="text-charcoal/80">Commercial models that capture full ESG value</span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl relative z-10">
                  <img 
                    src="/images/green-finance.jpg" 
                    alt="Green Finance" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                {/* Decorative element */}
                <div className="absolute -top-12 -right-12 w-full h-full border-2 border-emerald-200 rounded-2xl -z-0 hidden lg:block" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sectors in Transition - Visual Grid */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-charcoal mb-6">Sectors in transition</h2>
            <p className="text-xl text-muted-foreground font-light max-w-3xl">
              The path to net zero looks different for every industry. We help organizations navigate their specific challenges and opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Energy Sector */}
            <div className="group relative h-[400px] overflow-hidden rounded-xl cursor-pointer">
              <img 
                src="/images/sector-energy.jpg" 
                alt="Energy & Materials" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-2xl font-serif text-white mb-2">Energy & Materials</h3>
                <p className="text-white/80 font-light transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  Decarbonizing heavy industry while maintaining competitiveness.
                </p>
              </div>
            </div>

            {/* Consumer Sector */}
            <div className="group relative h-[400px] overflow-hidden rounded-xl cursor-pointer">
              <img 
                src="/images/sector-consumer.jpg" 
                alt="Consumer Goods" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-2xl font-serif text-white mb-2">Consumer Goods</h3>
                <p className="text-white/80 font-light transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  Meeting the rising demand for sustainable products and packaging.
                </p>
              </div>
            </div>

            {/* Manufacturing Sector */}
            <div className="group relative h-[400px] overflow-hidden rounded-xl cursor-pointer">
              <img 
                src="/images/sector-manufacturing.jpg" 
                alt="Advanced Manufacturing" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-2xl font-serif text-white mb-2">Advanced Manufacturing</h3>
                <p className="text-white/80 font-light transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  Building circular supply chains and efficient production systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section - Dark Mode with Metrics */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
           <img 
            src="/images/green-impact-bg.jpg" 
            alt="Texture" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Impact by the numbers</h2>
            <p className="text-xl text-muted-foreground/50 font-light">Real results from our green growth transformations.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            <div className="space-y-4">
              <div className="text-6xl font-serif text-emerald-400">10%+</div>
              <div className="h-px w-12 bg-emerald-500/50 mx-auto" />
              <h4 className="text-lg font-medium">Green Willingness to Pay</h4>
              <p className="text-sm text-muted-foreground/70 leading-relaxed">
                Identified in selected customer segments and regions for B2B corporations.
              </p>
            </div>

            <div className="space-y-4">
              <div className="text-6xl font-serif text-emerald-400">$50bn</div>
              <div className="h-px w-12 bg-emerald-500/50 mx-auto" />
              <h4 className="text-lg font-medium">Risk Assessment</h4>
              <p className="text-sm text-muted-foreground/70 leading-relaxed">
                Potential green value pools identified through TCFD assessment.
              </p>
            </div>

            <div className="space-y-4">
              <div className="text-6xl font-serif text-emerald-400">$3bn</div>
              <div className="h-px w-12 bg-emerald-500/50 mx-auto" />
              <h4 className="text-lg font-medium">Decarbonization</h4>
              <p className="text-sm text-muted-foreground/70 leading-relaxed">
                Potential value found for a client in Asia accelerating their net-zero race.
              </p>
            </div>

            <div className="space-y-4">
              <div className="text-6xl font-serif text-emerald-400">30-50%</div>
              <div className="h-px w-12 bg-emerald-500/50 mx-auto" />
              <h4 className="text-lg font-medium">Sustainable Materials</h4>
              <p className="text-sm text-muted-foreground/70 leading-relaxed">
                Potential premium compared to conventional incumbent products.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Insights - The Library */}
      <section className="py-24 bg-slate-50">
        <div className="container">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif text-charcoal mb-4">Featured insights</h2>
              <p className="text-xl text-muted-foreground font-light">Our latest thinking on sustainability and growth.</p>
            </div>
            <Link href="/insights">
              <button className="hidden md:flex items-center gap-2 text-emerald-700 font-medium hover:gap-3 transition-all">
                View all insights <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Insight 1 */}
            <div className="group cursor-pointer">
              <div className="aspect-[4/3] overflow-hidden rounded-lg mb-6">
                <img 
                  src="/images/insight-net-zero.jpg" 
                  alt="Net Zero Transition" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="space-y-3">
                <span className="text-xs font-bold tracking-widest text-emerald-700 uppercase">Report</span>
                <h3 className="text-xl font-serif text-charcoal group-hover:text-emerald-700 transition-colors">
                  The Net Zero Transition: What it would cost, what it could bring
                </h3>
                <p className="text-muted-foreground font-light line-clamp-2">
                  A detailed analysis of the economic transformation required to achieve net-zero emissions by 2050.
                </p>
                <span className="inline-flex items-center gap-2 text-sm text-muted-foreground/70 mt-2">
                  <ArrowRight className="w-4 h-4" /> Read the report
                </span>
              </div>
            </div>

            {/* Insight 2 */}
            <div className="group cursor-pointer">
              <div className="aspect-[4/3] overflow-hidden rounded-lg mb-6">
                <img 
                  src="/images/insight-carbon-markets.jpg" 
                  alt="Carbon Markets" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="space-y-3">
                <span className="text-xs font-bold tracking-widest text-emerald-700 uppercase">Article</span>
                <h3 className="text-xl font-serif text-charcoal group-hover:text-emerald-700 transition-colors">
                  Carbon Markets 2025: From voluntary to compliance
                </h3>
                <p className="text-muted-foreground font-light line-clamp-2">
                  How evolving regulations are reshaping the landscape for carbon credits and trading.
                </p>
                <span className="inline-flex items-center gap-2 text-sm text-muted-foreground/70 mt-2">
                  <ArrowRight className="w-4 h-4" /> Read the article
                </span>
              </div>
            </div>

            {/* Insight 3 */}
            <div className="group cursor-pointer">
              <div className="aspect-[4/3] overflow-hidden rounded-lg mb-6">
                <img 
                  src="/images/insight-green-materials.jpg" 
                  alt="Green Materials" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="space-y-3">
                <span className="text-xs font-bold tracking-widest text-emerald-700 uppercase">Perspective</span>
                <h3 className="text-xl font-serif text-charcoal group-hover:text-emerald-700 transition-colors">
                  The Green Materials Revolution
                </h3>
                <p className="text-muted-foreground font-light line-clamp-2">
                  Why sustainable materials are becoming a primary driver of product innovation and value.
                </p>
                <span className="inline-flex items-center gap-2 text-sm text-muted-foreground/70 mt-2">
                  <ArrowRight className="w-4 h-4" /> Read the perspective
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-emerald-900 text-white">
        <div className="container max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-serif mb-8">Ready to grow sustainably?</h2>
          <p className="text-xl text-emerald-100 mb-12 font-light leading-relaxed">
            Let's discuss how NewCo can help you identify value pools, optimize pricing, and build the capabilities needed for a green future.
          </p>
          <Link href="/contact">
            <button className="px-10 py-5 bg-white text-emerald-900 rounded-full hover:bg-emerald-50 transition-colors text-lg font-bold tracking-wide shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all">
              Contact our Green Growth Team
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
