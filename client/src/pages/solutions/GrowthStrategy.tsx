import React, { useEffect } from "react";
import { useLocation } from "wouter";
import Navbar from "@/components/Navigation";
import Footer from "@/components/Footer";
import { 
  TrendingUp, 
  Globe, 
  Target, 
  Compass,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { RelatedContent } from "@/components/RelatedContent";
import { dataRelatedItems } from "@/data/related-content";

export default function GrowthStrategy() {
  const [location, setLocation] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-charcoal font-sans selection:bg-primary selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full bg-background overflow-hidden pt-32 pb-20">
        <div aria-hidden className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(70% 60% at 82% 14%, rgba(224,76,44,0.05) 0%, transparent 55%), radial-gradient(55% 55% at 6% 95%, rgba(111,68,163,0.045) 0%, transparent 55%)" }} />

        <div className="container mx-auto px-6 relative z-20">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="block h-[3px] w-9 bg-primary" />
              <span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Strategic Advisory</span>
            </div>

            <h1 className="text-charcoal tracking-[-0.035em] leading-[1.0] text-[clamp(2.4rem,5.4vw,4.2rem)] mb-7 eb-garamond">
              Growth Strategy
            </h1>
            <p className="text-[1.1rem] md:text-[1.2rem] text-muted-foreground max-w-2xl leading-[1.55]">
              Define your path to market leadership. We help you identify high-potential opportunities, enter new markets, and build a portfolio for sustainable expansion.
            </p>
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
                Where to Play, How to Win
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Growth is rarely linear. It requires making hard choices about where to invest resources and which markets to prioritize. Many organizations struggle with stagnation not because of a lack of effort, but because of a lack of focus.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                NexDyne's Growth Strategy practice brings clarity to complexity. We combine rigorous market analysis with creative foresight to build actionable roadmaps that align your organization around a shared vision for the future.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-amber rounded-2xl opacity-10 blur-xl" />
              <div className="relative bg-white border border-border rounded-2xl p-8 shadow-[0_20px_50px_-20px_rgba(36,36,36,0.18)]">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Compass className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-charcoal mb-2">Market Intelligence</h3>
                      <p className="text-muted-foreground">Deep dive analysis into market dynamics, competitor moves, and emerging trends.</p>
                    </div>
                  </div>
                  <div className="w-full h-px bg-border" />
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Target className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-charcoal mb-2">Value Proposition</h3>
                      <p className="text-muted-foreground">Crafting compelling offers that resonate with customer needs and differentiate you from the pack.</p>
                    </div>
                  </div>
                  <div className="w-full h-px bg-border" />
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <TrendingUp className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-charcoal mb-2">Scale-Up Roadmap</h3>
                      <p className="text-muted-foreground">Step-by-step execution plans to take new ventures from pilot to profitability.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-24 bg-white border-y border-border">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">Our Strategic Framework</h2>
            <p className="text-muted-foreground text-lg">
              We don't just deliver reports; we deliver results. Our approach is grounded in data, tested in the real world, and designed for execution.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-background border border-border rounded-2xl hover:border-primary/50 transition-colors">
              <div className="text-6xl font-bold text-charcoal/10 mb-6">01</div>
              <h3 className="text-2xl font-bold text-charcoal mb-4">Diagnose & Discover</h3>
              <p className="text-muted-foreground mb-6">
                We start by understanding your core strengths and the external environment. We use advanced analytics to uncover hidden opportunities and threats.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-primary" /> Internal Capability Audit
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-primary" /> Market Sizing & Segmentation
                </li>
              </ul>
            </div>

            <div className="p-8 bg-background border border-border rounded-2xl hover:border-primary/50 transition-colors">
              <div className="text-6xl font-bold text-charcoal/10 mb-6">02</div>
              <h3 className="text-2xl font-bold text-charcoal mb-4">Design & Define</h3>
              <p className="text-muted-foreground mb-6">
                We co-create the strategy with your leadership team. We define the "North Star" and the specific initiatives required to get there.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-primary" /> Business Model Innovation
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-primary" /> Go-to-Market Architecture
                </li>
              </ul>
            </div>

            <div className="p-8 bg-background border border-border rounded-2xl hover:border-primary/50 transition-colors">
              <div className="text-6xl font-bold text-charcoal/10 mb-6">03</div>
              <h3 className="text-2xl font-bold text-charcoal mb-4">Deliver & Drive</h3>
              <p className="text-muted-foreground mb-6">
                Strategy is nothing without execution. We stay with you to pilot, refine, and scale the initiatives, ensuring value realization.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-primary" /> Pilot Launch & Management
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-primary" /> KPI Tracking & Governance
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-charcoal text-white border-t-2 border-primary">
        <div className="container mx-auto px-6 text-center">
          <span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-amber mb-6 block">
            Strategic Advisory
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Define your future.
          </h2>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
            The market waits for no one. Let's build a growth strategy that positions you for long-term success.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button className="bg-primary text-primary-foreground hover:bg-primary-hover rounded-full px-10 py-6 text-lg font-bold shadow-xl transition-all duration-200 ease-in-out hover:scale-105">
              Schedule a Strategy Session
            </Button>
          </div>
        </div>
      </section>

      <RelatedContent items={dataRelatedItems} />
      <Footer />
    </div>
  );
}
