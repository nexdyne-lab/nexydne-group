import React from 'react';
import { Link } from 'wouter';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { RelatedContent } from "@/components/RelatedContent";
import { dataRelatedItems } from "@/data/related-content";

export default function ChannelPartners() {
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
              Channel Partner Management
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-charcoal leading-relaxed max-w-3xl font-light ">
              Scaling through ecosystems. We build the infrastructure for partner success, from portals to programmatic incentives.
            </p>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16">
          <div className="lg:col-span-8 space-y-12">
            <section className="prose prose-lg prose-slate max-w-none">
              <p className="text-lg leading-relaxed text-muted-foreground">
                In a networked economy, your partner ecosystem is your most powerful leverage point. But managing partners via email and spreadsheets is a recipe for stagnation. We help you treat your partner program as a platform—building the APIs, portals, and data pipes necessary to enable friction-free collaboration at scale.
              </p>
            </section>

            <div className="grid md:grid-cols-2 gap-4 sm:p-6 md:p-8">
              <div className="bg-slate-50 p-4 sm:p-6 md:p-8 rounded-sm border border-slate-100">
                <h3 className="text-xl font-bold text-charcoal mb-4">Omnichannel Orchestration</h3>
                <p className="text-muted-foreground mb-6">
                  Aligning your channel mix with customer preference. We help you decouple your sales motion from the channel, allowing customers to switch seamlessly between direct, digital, and partner interactions.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-charcoal/80">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Headless commerce architecture</span>
                  </li>
                  <li className="flex items-start gap-3 text-charcoal/80">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Channel conflict resolution rules</span>
                  </li>
                  <li className="flex items-start gap-3 text-charcoal/80">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Unified customer view</span>
                  </li>
                </ul>
              </div>

              <div className="bg-slate-50 p-4 sm:p-6 md:p-8 rounded-sm border border-slate-100">
                <h3 className="text-xl font-bold text-charcoal mb-4">Ecosystem Data Integration</h3>
                <p className="text-muted-foreground mb-6">
                  Connecting your systems with your partners'. We design secure API strategies for sharing lead data, inventory status, and pricing in real-time.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-charcoal/80">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Secure API gateways</span>
                  </li>
                  <li className="flex items-start gap-3 text-charcoal/80">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Multi-tier data governance</span>
                  </li>
                  <li className="flex items-start gap-3 text-charcoal/80">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Cross-company attribution</span>
                  </li>
                </ul>
              </div>
            </div>

            <section>
              <h2 className="text-3xl font-bold text-charcoal mb-6 eb-garamond">Programmatic Incentives</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Partners respond to incentives, but manual rebate processing is slow and error-prone. We help you implement "smart contracts" for partner incentives—automating payouts based on verified performance data. This builds trust and accelerates the feedback loop, encouraging partners to invest more in your solution.
              </p>
            </section>
          </div>

          <div className="lg:col-span-4 space-y-8">
            <div className="bg-slate-900 text-white p-4 sm:p-6 md:p-8 rounded-sm">
              <h3 className="text-xl font-bold mb-4">Partner Program Audit</h3>
              <p className="text-muted-foreground/50 mb-6">
                Is your partner program "partner-friendly"? We evaluate your ease of doing business across onboarding, enablement, and operations.
              </p>
              <Button className="w-full bg-white text-charcoal hover:bg-slate-100">
                Request Audit
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
