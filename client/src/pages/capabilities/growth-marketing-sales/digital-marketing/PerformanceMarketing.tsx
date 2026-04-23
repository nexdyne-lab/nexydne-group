import React from 'react';
import { Link } from 'wouter';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2, TrendingUp, Target, Zap } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { RelatedContent } from "@/components/RelatedContent";
import { dataRelatedItems } from "@/data/related-content";

export default function PerformanceMarketing() {
  return (
    <div className="min-h-screen bg-white text-charcoal font-sans selection:bg-blue-100">
      <Navigation />

      {/* Hero Section */}
      <header className="pt-16 sm:pt-20 pb-16 border-b border-slate-100 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="text-sm font-medium text-muted-foreground mb-6 uppercase tracking-wider">
              <Link href="/capabilities/growth-marketing-sales" className="hover:text-blue-900 transition-colors">
                Growth, Marketing & Sales
              </Link>
              <span className="mx-2">/</span>
              <Link href="/capabilities/growth-marketing-sales/digital-marketing" className="hover:text-blue-900 transition-colors">
                Digital Marketing
              </Link>
              <span className="mx-2">/</span>
              <span className="text-blue-900">Performance Marketing</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-charcoal mb-3 leading-[1.1] eb-garamond">
              Performance Marketing
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-charcoal leading-relaxed max-w-3xl font-light ">
              Drive measurable growth through data-driven channel optimization, precision targeting, and rigorous testing frameworks.
            </p>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16">
          
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-12">
            
            <section className="prose prose-lg prose-slate max-w-none">
              <p className="text-lg leading-relaxed text-muted-foreground">
                In today's crowded digital landscape, performance marketing is the engine of growth. We help clients move beyond vanity metrics to focus on what truly matters: customer acquisition cost (CAC), lifetime value (LTV), and return on ad spend (ROAS).
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground mt-6">
                Our approach combines advanced analytics with creative excellence. We don't just manage campaigns; we build comprehensive performance ecosystems that continuously learn and optimize. By integrating data across channels, we ensure every dollar spent contributes to tangible business outcomes.
              </p>
            </section>

            {/* Key Focus Areas */}
            <section>
              <h2 className="text-2xl font-bold text-charcoal mb-5 sm:mb-6 md:mb-8 eb-garamond">How We Drive Performance</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:p-6 md:p-8">
                <div className="bg-white p-4 sm:p-5 md:p-6 rounded-sm border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <Target className="w-8 h-8 text-blue-900 mb-4" />
                  <h3 className="text-lg font-bold text-charcoal mb-3">Precision Targeting</h3>
                  <p className="text-muted-foreground">
                    Leveraging first-party data and AI modeling to identify high-value audiences with pinpoint accuracy, reducing waste and increasing conversion rates.
                  </p>
                </div>
                <div className="bg-white p-4 sm:p-5 md:p-6 rounded-sm border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <TrendingUp className="w-8 h-8 text-blue-900 mb-4" />
                  <h3 className="text-lg font-bold text-charcoal mb-3">Channel Optimization</h3>
                  <p className="text-muted-foreground">
                    Dynamic allocation of budget across search, social, display, and programmatic channels based on real-time performance data and attribution modeling.
                  </p>
                </div>
                <div className="bg-white p-4 sm:p-5 md:p-6 rounded-sm border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <Zap className="w-8 h-8 text-blue-900 mb-4" />
                  <h3 className="text-lg font-bold text-charcoal mb-3">Creative Testing</h3>
                  <p className="text-muted-foreground">
                    Systematic A/B and multivariate testing of creative assets to identify high-performing messaging and visuals that resonate with specific segments.
                  </p>
                </div>
                <div className="bg-white p-4 sm:p-5 md:p-6 rounded-sm border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <CheckCircle2 className="w-8 h-8 text-blue-900 mb-4" />
                  <h3 className="text-lg font-bold text-charcoal mb-3">Conversion Rate Optimization (CRO)</h3>
                  <p className="text-muted-foreground">
                    Optimizing landing pages and user journeys to remove friction and maximize the percentage of visitors who take desired actions.
                  </p>
                </div>
              </div>
            </section>

            <Separator className="bg-slate-200" />

            {/* Impact Section */}
            <section>
              <h2 className="text-2xl font-bold text-charcoal mb-6 eb-garamond">Client Impact</h2>
              <div className="bg-slate-50 p-4 sm:p-6 md:p-8 rounded-sm">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:p-6 md:p-8 text-center">
                  <div>
                    <div className="text-4xl font-bold text-blue-900 mb-2">30%</div>
                    <div className="text-sm text-muted-foreground uppercase tracking-wide">Reduction in CAC</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-blue-900 mb-2">2.5x</div>
                    <div className="text-sm text-muted-foreground uppercase tracking-wide">Increase in ROAS</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-blue-900 mb-2">45%</div>
                    <div className="text-sm text-muted-foreground uppercase tracking-wide">Growth in Online Revenue</div>
                  </div>
                </div>
              </div>
            </section>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-slate-50 p-4 sm:p-6 md:p-8 border-t-4 border-blue-900">
              <h3 className="text-lg font-bold text-charcoal mb-4">Related Capabilities</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/capabilities/growth-marketing-sales/digital-marketing/analytics-attribution" className="text-muted-foreground hover:text-blue-900 hover:underline flex items-center">
                    <ArrowRight className="w-3 h-3 mr-2 text-blue-500" />
                    Analytics & Attribution
                  </Link>
                </li>
                <li>
                  <Link href="/capabilities/growth-marketing-sales/digital-marketing/brand-strategy" className="text-muted-foreground hover:text-blue-900 hover:underline flex items-center">
                    <ArrowRight className="w-3 h-3 mr-2 text-blue-500" />
                    Brand Strategy
                  </Link>
                </li>
                <li>
                  <Link href="/capabilities/growth-marketing-sales/pricing" className="text-muted-foreground hover:text-blue-900 hover:underline flex items-center">
                    <ArrowRight className="w-3 h-3 mr-2 text-blue-500" />
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>

            <div className="bg-blue-900 text-white p-4 sm:p-6 md:p-8 rounded-sm">
              <h3 className="text-xl font-bold mb-4">Get in touch</h3>
              <p className="text-blue-100 mb-6">
                Ready to optimize your marketing performance? Let's discuss your goals.
              </p>
              <Link href="/contact">
                <Button className="w-full bg-white text-blue-900 hover:bg-blue-50">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>

        </div>
      </main>

      <RelatedContent items={dataRelatedItems} />
      <Footer />
    </div>
  );
}
