import React from 'react';
import { Link } from 'wouter';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { RelatedContent } from "@/components/RelatedContent";
import { strategyRelatedItems } from "@/data/related-content";

export default function PackagingBundling() {
  return (
    <div className="min-h-screen bg-white text-charcoal font-sans selection:bg-blue-100">
      <Navigation />

      {/* Hero Section */}
      <header className="pt-16 sm:pt-20 pb-16 border-b border-slate-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="text-sm font-medium text-muted-foreground mb-6 uppercase tracking-wider">
              <Link href="/capabilities/growth-marketing-sales/pricing-monetization" className="hover:text-blue-900 transition-colors">
                Pricing & Monetization
              </Link>
              <span className="mx-2">/</span>
              <span className="text-blue-600">Packaging & Bundling Strategy</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-charcoal mb-2 sm:mb-3 md:mb-4 leading-[1.1] eb-garamond">
              Packaging & Bundling Strategy
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-charcoal leading-relaxed max-w-3xl font-light font-serif">
              Design the offer. We use behavioral science and conjoint analysis to create product packages and bundles that maximize perceived value and drive upsell.
            </p>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 pt-16 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16">
          
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-16">
            
            {/* Introduction */}
            <section className="prose prose-lg prose-slate max-w-none">
              <p className="text-lg leading-relaxed text-muted-foreground">
                How you package your product is just as important as the product itself. A well-structured "Good/Better/Best" tiering strategy can guide customers toward higher-margin options, while strategic bundling can increase average order value (AOV) without eroding brand equity.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground mt-6">
                NexDyne applies rigorous consumer research to the art of packaging. We don't guess what features belong in the "Pro" tier; we measure it. By analyzing feature preferences and willingness-to-pay across segments, we help you design packages that unlock the full revenue potential of your customer base.
              </p>
            </section>

            <Separator className="bg-slate-200" />

            {/* Key Strategies */}
            <section>
              <h2 className="text-3xl font-bold text-charcoal mb-5 sm:mb-6 md:mb-8 eb-garamond">Strategic Levers</h2>
              <div className="grid md:grid-cols-2 gap-4 sm:p-6 md:p-8">
                <div className="bg-slate-50 p-4 sm:p-6 md:p-8 rounded-sm border border-slate-100">
                  <h3 className="text-xl font-bold text-charcoal mb-4">Tiered Architecture</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Create clear differentiation between entry-level, core, and premium offerings to capture value from different budget segments.
                  </p>
                </div>
                <div className="bg-slate-50 p-4 sm:p-6 md:p-8 rounded-sm border border-slate-100">
                  <h3 className="text-xl font-bold text-charcoal mb-4">Feature Fencing</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Identify the "killer features" that drive upgrades and lock them behind premium tiers to incentivize migration.
                  </p>
                </div>
                <div className="bg-slate-50 p-4 sm:p-6 md:p-8 rounded-sm border border-slate-100">
                  <h3 className="text-xl font-bold text-charcoal mb-4">Cross-Sell Bundling</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Combine complementary products into a single SKU to increase basket size and introduce customers to new product lines.
                  </p>
                </div>
                <div className="bg-slate-50 p-4 sm:p-6 md:p-8 rounded-sm border border-slate-100">
                  <h3 className="text-xl font-bold text-charcoal mb-4">Add-On Strategy</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Unbundle low-value features or services to lower the entry price, then offer them as high-margin add-ons.
                  </p>
                </div>
              </div>
            </section>

            <Separator className="bg-slate-200" />

            {/* Methodology */}
            <section>
              <h2 className="text-3xl font-bold text-charcoal mb-5 sm:mb-6 md:mb-8 eb-garamond">Our Methodology</h2>
              <div className="space-y-8">
                <div className="flex gap-4 sm:p-5 md:p-6">
                  <div className="w-12 h-12 bg-blue-50 flex items-center justify-center rounded-full flex-shrink-0 text-blue-600 font-bold text-xl font-serif">1</div>
                  <div>
                    <h3 className="text-xl font-bold text-charcoal mb-2">Feature Valuation</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We use MaxDiff and conjoint analysis surveys to quantify exactly how much customers value specific features and attributes.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 sm:p-5 md:p-6">
                  <div className="w-12 h-12 bg-blue-50 flex items-center justify-center rounded-full flex-shrink-0 text-blue-600 font-bold text-xl font-serif">2</div>
                  <div>
                    <h3 className="text-xl font-bold text-charcoal mb-2">Segmentation Analysis</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We cluster customers based on their needs and willingness-to-pay, identifying distinct personas (e.g., "Price Sensitive," "Power User").
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 sm:p-5 md:p-6">
                  <div className="w-12 h-12 bg-blue-50 flex items-center justify-center rounded-full flex-shrink-0 text-blue-600 font-bold text-xl font-serif">3</div>
                  <div>
                    <h3 className="text-xl font-bold text-charcoal mb-2">Package Design</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We construct hypothetical packages and simulate market share and revenue outcomes to find the optimal configuration.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 sm:p-5 md:p-6">
                  <div className="w-12 h-12 bg-blue-50 flex items-center justify-center rounded-full flex-shrink-0 text-blue-600 font-bold text-xl font-serif">4</div>
                  <div>
                    <h3 className="text-xl font-bold text-charcoal mb-2">Go-to-Market Alignment</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We equip your sales team with the battlecards and value messaging needed to sell the new packages effectively.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <Separator className="bg-slate-200" />

            {/* Case Study */}
            <section className="bg-slate-900 text-white p-10 rounded-sm">
              <div className="flex flex-col md:flex-row gap-4 sm:p-6 md:p-8 items-start">
                <div className="flex-1">
                  <div className="text-blue-400 font-bold tracking-wider text-xs uppercase mb-4">Case Study</div>
                  <h3 className="text-2xl font-serif font-bold mb-4">SaaS Platform Increases ARPU</h3>
                  <p className="text-muted-foreground/50 leading-relaxed mb-6">
                    A project management software company was giving away its most valuable features in the "Basic" plan. We restructured the tiers, moving advanced reporting and integrations to the "Pro" plan.
                  </p>
                  <div className="grid grid-cols-2 gap-4 sm:p-5 md:p-6 border-t border-slate-800 pt-6">
                    <div>
                      <div className="text-3xl font-bold text-white mb-1">22%</div>
                      <div className="text-sm text-muted-foreground/70">Increase in ARPU</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-white mb-1">15%</div>
                      <div className="text-sm text-muted-foreground/70">Upgrade Rate</div>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/3">
                  <img 
                    src="/images/case-study-saas.jpg" 
                    alt="SaaS Case Study" 
                    className="w-full h-auto rounded-sm grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>
            </section>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-12">
            
            {/* Contact Card */}
            <div className="bg-blue-50 p-4 sm:p-6 md:p-8 border border-blue-100">
              <h3 className="text-lg font-bold text-blue-900 mb-4">Rethink your packaging?</h3>
              <p className="text-blue-800 mb-6 leading-relaxed">
                Let's analyze your feature usage and design a packaging strategy that drives growth.
              </p>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                Contact Us
              </Button>
            </div>

            {/* Related Services */}
            <div className="bg-white border border-slate-200 p-4 sm:p-6 md:p-8">
              <h3 className="text-sm font-bold text-charcoal uppercase tracking-wider mb-6">Related Services</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="/capabilities/growth-marketing-sales/pricing-monetization/dynamic-pricing" className="text-muted-foreground hover:text-blue-700 transition-colors flex items-center gap-2">
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-blue-500" />
                    Dynamic Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/capabilities/growth-marketing-sales/pricing-monetization/discount-optimization" className="text-muted-foreground hover:text-blue-700 transition-colors flex items-center gap-2">
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-blue-500" />
                    Discount Optimization
                  </Link>
                </li>
              </ul>
            </div>

            {/* Latest Insights Sidebar */}
            <div>
              <h3 className="text-sm font-bold text-charcoal uppercase tracking-wider mb-6">Related Insights</h3>
              <div className="space-y-6">
                <Link href="/insights/subscription-pricing-models">
                  <div className="group cursor-pointer">
                    <h4 className="text-lg font-bold text-charcoal mb-2 group-hover:text-blue-700 transition-colors">
                      Optimizing Subscription Models
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                      Moving beyond flat-rate pricing to capture more value.
                    </p>
                    <div className="text-blue-600 text-sm font-medium flex items-center">
                      Read more <ArrowRight className="w-3 h-3 ml-1" />
                    </div>
                  </div>
                </Link>
                <Separator className="bg-slate-100" />
                <Link href="/insights/psychology-of-value">
                  <div className="group cursor-pointer">
                    <h4 className="text-lg font-bold text-charcoal mb-2 group-hover:text-blue-700 transition-colors">
                      The Psychology of Value
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                      Understanding how customers perceive price and value.
                    </p>
                    <div className="text-blue-600 text-sm font-medium flex items-center">
                      Read more <ArrowRight className="w-3 h-3 ml-1" />
                    </div>
                  </div>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </main>

      <RelatedContent items={strategyRelatedItems} />
      <Footer />
    </div>
  );
}
