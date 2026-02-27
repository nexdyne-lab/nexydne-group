import React from 'react';
import { Link } from 'wouter';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { RelatedContent } from "@/components/RelatedContent";
import { strategyRelatedItems } from "@/data/related-content";

export default function GoToMarket() {
  return (
    <div className="min-h-screen bg-white text-charcoal font-sans selection:bg-blue-100">
      <Navigation />

      <header className="pt-16 sm:pt-20 pb-16 border-b border-slate-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="text-sm font-medium text-muted-foreground mb-6 uppercase tracking-wider">
              <Link href="/capabilities/growth-marketing-sales/sales-excellence" className="hover:text-blue-900 transition-colors">
                Sales Excellence
              </Link>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-charcoal mb-2 sm:mb-3 md:mb-4 leading-[1.1] eb-garamond">
              Go-to-Market Strategy
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-charcoal leading-relaxed max-w-3xl font-light font-serif">
              Defining the "deployment plan" for your products. We align product, marketing, and sales to execute a coordinated market attack.
            </p>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16">
          <div className="lg:col-span-8 space-y-12">
            <section className="prose prose-lg prose-slate max-w-none">
              <p className="text-lg leading-relaxed text-muted-foreground">
                A successful product launch is an orchestration challenge. It requires the synchronization of product readiness, marketing air cover, and sales capacity. We help you build a "GTM Operating System"—a repeatable framework for bringing new products to market with velocity and precision.
              </p>
            </section>

            <div className="grid md:grid-cols-2 gap-4 sm:p-6 md:p-8">
              <div className="bg-slate-50 p-4 sm:p-6 md:p-8 rounded-sm border border-slate-100">
                <h3 className="text-xl font-bold text-charcoal mb-4">High-Resolution Market Mapping</h3>
                <p className="text-muted-foreground mb-6">
                  Finding "granular growth." We move beyond broad demographics to identify micro-segments by geography, industry, and behavior that offer the highest yield.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-charcoal/80">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Micro-segmentation architecture</span>
                  </li>
                  <li className="flex items-start gap-3 text-charcoal/80">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Propensity-to-buy modeling</span>
                  </li>
                  <li className="flex items-start gap-3 text-charcoal/80">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Underserved SME targeting</span>
                  </li>
                </ul>
              </div>

              <div className="bg-slate-50 p-4 sm:p-6 md:p-8 rounded-sm border border-slate-100">
                <h3 className="text-xl font-bold text-charcoal mb-4">Product-Led Growth (PLG)</h3>
                <p className="text-muted-foreground mb-6">
                  Architecting the "try-before-you-buy" motion. We help you define PQL (Product Qualified Lead) logic and automate the handoff to sales.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-charcoal/80">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>PQL scoring logic</span>
                  </li>
                  <li className="flex items-start gap-3 text-charcoal/80">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>In-app engagement triggers</span>
                  </li>
                  <li className="flex items-start gap-3 text-charcoal/80">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Self-serve to enterprise bridges</span>
                  </li>
                </ul>
              </div>
            </div>

            <section>
              <h2 className="text-3xl font-bold text-charcoal mb-6 eb-garamond">The "Full-Stack" GTM Team</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Silos kill velocity. We help you organize cross-functional "pods" that include product, marketing, and sales representation. These pods operate like agile squads, iterating on messaging, pricing, and feature sets in real-time based on market feedback. This "DevOps for Sales" approach ensures that your GTM strategy is always in sync with market reality.
              </p>
            </section>
          </div>

          <div className="lg:col-span-4 space-y-8">
            <div className="bg-slate-900 text-white p-4 sm:p-6 md:p-8 rounded-sm">
              <h3 className="text-xl font-bold mb-4">GTM Readiness Check</h3>
              <p className="text-muted-foreground/50 mb-6">
                Are you ready to launch? Validate your value prop, pricing model, and sales readiness before you press "deploy."
              </p>
              <Button className="w-full bg-white text-charcoal hover:bg-slate-100">
                Download Checklist
              </Button>
            </div>
          </div>
        </div>
      </main>
      <RelatedContent items={strategyRelatedItems} />
      <Footer />
    </div>
  );
}
