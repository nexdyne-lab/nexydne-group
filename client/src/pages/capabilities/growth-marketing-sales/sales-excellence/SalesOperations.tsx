import React from 'react';
import { Link } from 'wouter';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { RelatedContent } from "@/components/RelatedContent";
import { dataRelatedItems } from "@/data/related-content";

export default function SalesOperations() {
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
              Sales Operations & Enablement
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-charcoal leading-relaxed max-w-3xl font-light ">
              Optimizing the technical backbone of your sales organization. We streamline CRM workflows, automate reporting, and ensure data hygiene.
            </p>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16">
          <div className="lg:col-span-8 space-y-12">
            <section className="prose prose-lg prose-slate max-w-none">
              <p className="text-lg leading-relaxed text-muted-foreground">
                A high-performing sales team requires a high-performance environment. We treat Sales Operations as a product management discipline, where the "users" are your sales reps and the "product" is the sales process itself. Our goal is to minimize friction and maximize "selling time" through rigorous process engineering and tool optimization.
              </p>
            </section>

            <div className="grid md:grid-cols-2 gap-4 sm:p-6 md:p-8">
              <div className="bg-slate-50 p-4 sm:p-6 md:p-8 rounded-sm border border-slate-100">
                <h3 className="text-xl font-bold text-charcoal mb-4">Sales Efficiency Engineering</h3>
                <p className="text-muted-foreground mb-6">
                  Optimizing Return on Sales Investment (ROSI). We analyze your cost-of-sale metrics to identify "energy leaks" in the funnel, automating low-value tasks to free up capacity.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-charcoal/80">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>CAC optimization algorithms</span>
                  </li>
                  <li className="flex items-start gap-3 text-charcoal/80">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Lean back-office operations</span>
                  </li>
                  <li className="flex items-start gap-3 text-charcoal/80">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Automated quote-to-cash</span>
                  </li>
                </ul>
              </div>

              <div className="bg-slate-50 p-4 sm:p-6 md:p-8 rounded-sm border border-slate-100">
                <h3 className="text-xl font-bold text-charcoal mb-4">Continuous Integration for Talent</h3>
                <p className="text-muted-foreground mb-6">
                  We build "just-in-time" learning systems that deliver content and coaching within the rep's workflow, creating a continuous feedback loop for skill development.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-charcoal/80">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Contextual content delivery</span>
                  </li>
                  <li className="flex items-start gap-3 text-charcoal/80">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>"Field and Forum" training</span>
                  </li>
                  <li className="flex items-start gap-3 text-charcoal/80">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Competency modeling</span>
                  </li>
                </ul>
              </div>
            </div>

            <section>
              <h2 className="text-3xl font-bold text-charcoal mb-6 eb-garamond">The "Clean Core" Approach</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Just as modern ERPs strive for a "clean core," we advocate for a lean, standardized sales stack. We help you audit your current tool inventory, identifying redundancies and integration gaps. We then architect a streamlined stack where data flows seamlessly from lead capture to revenue recognition, providing a single source of truth for forecasting.
              </p>
            </section>
          </div>

          <div className="lg:col-span-4 space-y-8">
            <div className="bg-slate-900 text-white p-4 sm:p-6 md:p-8 rounded-sm">
              <h3 className="text-xl font-bold mb-4">RevOps Diagnostic</h3>
              <p className="text-muted-foreground/50 mb-6">
                Assess the maturity of your revenue operations across 5 key dimensions: Data, Process, Tech Stack, Enablement, and Analytics.
              </p>
              <Button className="w-full bg-white text-charcoal hover:bg-slate-100">
                Start Assessment
              </Button>
            </div>
          </div>
        </div>
      </main>
      <RelatedContent items={dataRelatedItems} />
      <Footer />
    </div>
  );
}
