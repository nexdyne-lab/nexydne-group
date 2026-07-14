import React from 'react';
import { Link } from 'wouter';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { RelatedContent } from "@/components/RelatedContent";
import { strategyRelatedItems } from "@/data/related-content";

export default function DiscountOptimization() {
  return (
    <div className="min-h-screen bg-white text-charcoal font-sans selection:bg-primary/10">
      <Navigation />

      {/* Hero Section */}
      <header className="pt-16 sm:pt-20 pb-16 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="text-sm font-medium text-muted-foreground mb-6 uppercase tracking-wider">
              <Link href="/capabilities/growth-marketing-sales/pricing-monetization" className="hover:text-primary transition-colors">
                Pricing & Monetization
              </Link>
              <span className="mx-2">/</span>
              <span className="text-primary">Discount & Promo Optimization</span>
            </div>
            <h1 className="nx-h1 text-charcoal mb-2 sm:mb-3 md:mb-4">
              Discount & Promo Optimization
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-charcoal leading-relaxed max-w-3xl font-light">
              Stop giving away margin. We use advanced analytics to identify unnecessary discounts and design promotion strategies that drive incremental volume without eroding value.
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
                Discounts are a drug. They provide a short-term revenue high but can create long-term dependency, training customers to wait for the next sale and eroding your brand's pricing power. Many companies lack the visibility to know which promotions are actually profitable and which are simply subsidizing purchases that would have happened anyway.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground mt-6">
                NexDyne brings discipline to discounting. We analyze your transaction history to pinpoint "margin leakage"—instances where sales reps or automated systems grant discounts unnecessarily. We then help you design a structured discount framework that rewards specific behaviors (e.g., volume, prepayment, multi-year terms) rather than just asking for the sale.
              </p>
            </section>

            <Separator className="bg-grey" />

            {/* Key Strategies */}
            <section>
              <h2 className="nx-h2 text-charcoal mb-5 sm:mb-6 md:mb-8">Plugging the Leaks</h2>
              <div className="grid md:grid-cols-2 gap-4 sm:p-6 md:p-8">
                <div className="bg-off-white p-4 sm:p-6 md:p-8 rounded-sm border border-border">
                  <h3 className="text-xl font-bold text-charcoal mb-4">Discount Governance</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Establish clear approval workflows and "give-get" frameworks where every discount must be exchanged for something of value (e.g., longer contract, case study).
                  </p>
                </div>
                <div className="bg-off-white p-4 sm:p-6 md:p-8 rounded-sm border border-border">
                  <h3 className="text-xl font-bold text-charcoal mb-4">Promotion ROI Analysis</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Measure the true incremental lift of marketing promotions, separating baseline sales from promo-driven volume to calculate actual ROI.
                  </p>
                </div>
                <div className="bg-off-white p-4 sm:p-6 md:p-8 rounded-sm border border-border">
                  <h3 className="text-xl font-bold text-charcoal mb-4">Sales Rep Analytics</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Identify outliers in your sales team—reps who consistently discount more than their peers—and provide targeted coaching and guardrails.
                  </p>
                </div>
                <div className="bg-off-white p-4 sm:p-6 md:p-8 rounded-sm border border-border">
                  <h3 className="text-xl font-bold text-charcoal mb-4">Lifecycle Pricing</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Optimize pricing across the customer lifecycle, ensuring that renewal and expansion pricing reflects the value delivered, not just the initial acquisition price.
                  </p>
                </div>
              </div>
            </section>

            <Separator className="bg-grey" />

            {/* Methodology */}
            <section>
              <h2 className="nx-h2 text-charcoal mb-5 sm:mb-6 md:mb-8">Our Methodology</h2>
              <div className="space-y-8">
                <div className="flex gap-4 sm:p-5 md:p-6">
                  <div className="w-12 h-12 bg-primary/5 flex items-center justify-center rounded-full flex-shrink-0 text-primary font-bold text-xl">1</div>
                  <div>
                    <h3 className="text-xl font-bold text-charcoal mb-2">Transaction Waterfall Analysis</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We visualize your "pocket price"—the actual revenue retained after all discounts, rebates, and allowances—to identify where margin is leaking.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 sm:p-5 md:p-6">
                  <div className="w-12 h-12 bg-primary/5 flex items-center justify-center rounded-full flex-shrink-0 text-primary font-bold text-xl">2</div>
                  <div>
                    <h3 className="text-xl font-bold text-charcoal mb-2">Elasticity Modeling</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We model how volume responds to price changes for different products and segments, identifying where you can reduce discounts with minimal volume risk.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 sm:p-5 md:p-6">
                  <div className="w-12 h-12 bg-primary/5 flex items-center justify-center rounded-full flex-shrink-0 text-primary font-bold text-xl">3</div>
                  <div>
                    <h3 className="text-xl font-bold text-charcoal mb-2">Framework Design</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We build a standardized discount matrix that guides sales reps on acceptable discount levels based on deal size, strategic value, and competition.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 sm:p-5 md:p-6">
                  <div className="w-12 h-12 bg-primary/5 flex items-center justify-center rounded-full flex-shrink-0 text-primary font-bold text-xl">4</div>
                  <div>
                    <h3 className="text-xl font-bold text-charcoal mb-2">Change Management</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We train your team on value selling—teaching them to defend the price by articulating ROI rather than caving to pressure.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <Separator className="bg-grey" />

            {/* Case Study */}
            <section className="bg-charcoal text-white p-10 rounded-sm">
              <div className="flex flex-col md:flex-row gap-4 sm:p-6 md:p-8 items-start">
                <div className="flex-1">
                  <div className="text-primary font-bold tracking-wider text-xs uppercase mb-4">Case Study</div>
                  <h3 className="text-2xl font-bold mb-4">Retailer Recovers Lost Margin</h3>
                  <p className="text-muted-foreground/50 leading-relaxed mb-6">
                    A fashion retailer was running sitewide 20% off sales almost every month. We shifted them to targeted, personalized offers based on customer loyalty tiers and purchase history.
                  </p>
                  <div className="grid grid-cols-2 gap-4 sm:p-5 md:p-6 border-t border-white/10 pt-6">
                    <div>
                      <div className="text-3xl font-bold text-white mb-1">8%</div>
                      <div className="text-sm text-muted-foreground/70">Margin Expansion</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-white mb-1">Flat</div>
                      <div className="text-sm text-muted-foreground/70">Revenue Impact</div>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/3">
                  <img 
                    src="/images/case-study-retail.8af31c13.jpg" 
                    alt="Retail Case Study" 
                    className="w-full h-auto rounded-sm grayscale hover:grayscale-0 transition duration-500"
                  />
                </div>
              </div>
            </section>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-12">
            
            {/* Contact Card */}
            <div className="bg-primary/5 p-4 sm:p-6 md:p-8 border border-primary">
              <h3 className="text-lg font-bold text-charcoal mb-4">Stop the leakage?</h3>
              <p className="text-charcoal mb-6 leading-relaxed">
                Our discount audit can identify exactly how much margin you're giving away unnecessarily.
              </p>
              <Button className="w-full bg-primary hover:bg-primary-hover text-white">
                Contact Us
              </Button>
            </div>

            {/* Related Services */}
            <div className="bg-white border border-border p-4 sm:p-6 md:p-8">
              <h3 className="text-sm font-bold text-charcoal uppercase tracking-wider mb-6">Related Services</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="/capabilities/growth-marketing-sales/pricing-monetization/dynamic-pricing" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                    Dynamic Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/capabilities/growth-marketing-sales/pricing-monetization/packaging-bundling" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                    Packaging & Bundling
                  </Link>
                </li>
              </ul>
            </div>

            {/* Latest Insights Sidebar */}
            <div>
              <h3 className="text-sm font-bold text-charcoal uppercase tracking-wider mb-6">Related Insights</h3>
              <div className="space-y-6">
                <Link href="/insights/psychology-of-value">
                  <div className="group cursor-pointer">
                    <h4 className="text-lg font-bold text-charcoal mb-2 group-hover:text-primary transition-colors">
                      The Psychology of Value
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                      Why customers buy (and why they don't).
                    </p>
                    <div className="text-primary text-sm font-medium flex items-center">
                      Read more <ArrowRight className="w-3 h-3 ml-1" />
                    </div>
                  </div>
                </Link>
                <Separator className="bg-subtle" />
                <Link href="/insights/algorithmic-pricing-smes">
                  <div className="group cursor-pointer">
                    <h4 className="text-lg font-bold text-charcoal mb-2 group-hover:text-primary transition-colors">
                      Algorithmic Pricing for Growing Companies
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                      Implementing dynamic pricing without the complexity.
                    </p>
                    <div className="text-primary text-sm font-medium flex items-center">
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
