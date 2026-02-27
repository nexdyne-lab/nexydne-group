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
    <div className="min-h-screen bg-base text-white font-sans selection:bg-secondary selection:text-base">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-base via-base/80 to-base z-10" />
          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop" 
            alt="Growth Strategy" 
            className="w-full h-full object-cover opacity-50"
          />
        </div>

        <div className="container mx-auto px-6 relative z-20">
          <div className="max-w-4xl">
            <div className="inline-flex items-center space-x-2 bg-secondary/10 backdrop-blur-md border border-secondary/20 rounded-full px-4 py-1.5 mb-8">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse shadow-[0_0_10px_rgba(0,212,255,0.5)]" />
              <span className="text-sm font-medium text-secondary tracking-widest uppercase">Strategic Advisory</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-4 leading-tight eb-garamond">
              Growth <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary-hover">
                Strategy
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground/50 max-w-2xl leading-relaxed font-light">
              Define your path to market leadership. We help you identify high-potential opportunities, enter new markets, and build a portfolio for sustainable expansion.
            </p>
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-24 bg-base">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Where to Play, How to Win
              </h2>
              <p className="text-lg text-muted-foreground/70 leading-relaxed mb-6">
                Growth is rarely linear. It requires making hard choices about where to invest resources and which markets to prioritize. Many organizations struggle with stagnation not because of a lack of effort, but because of a lack of focus.
              </p>
              <p className="text-lg text-muted-foreground/70 leading-relaxed">
                NexDyne's Growth Strategy practice brings clarity to complexity. We combine rigorous market analysis with creative foresight to build actionable roadmaps that align your organization around a shared vision for the future.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-secondary to-primary rounded-2xl opacity-20 blur-xl" />
              <div className="relative bg-base border border-white/10 rounded-2xl p-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-secondary/10 rounded-lg">
                      <Compass className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Market Intelligence</h3>
                      <p className="text-muted-foreground/70">Deep dive analysis into market dynamics, competitor moves, and emerging trends.</p>
                    </div>
                  </div>
                  <div className="w-full h-px bg-white/5" />
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-secondary/10 rounded-lg">
                      <Target className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Value Proposition</h3>
                      <p className="text-muted-foreground/70">Crafting compelling offers that resonate with customer needs and differentiate you from the pack.</p>
                    </div>
                  </div>
                  <div className="w-full h-px bg-white/5" />
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-secondary/10 rounded-lg">
                      <TrendingUp className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Scale-Up Roadmap</h3>
                      <p className="text-muted-foreground/70">Step-by-step execution plans to take new ventures from pilot to profitability.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-24 bg-base border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Strategic Framework</h2>
            <p className="text-muted-foreground/70 text-lg">
              We don't just deliver reports; we deliver results. Our approach is grounded in data, tested in the real world, and designed for execution.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-base border border-white/10 rounded-2xl hover:border-secondary/50 transition-colors">
              <div className="text-6xl font-bold text-white/5 mb-6">01</div>
              <h3 className="text-2xl font-bold text-white mb-4">Diagnose & Discover</h3>
              <p className="text-muted-foreground/70 mb-6">
                We start by understanding your core strengths and the external environment. We use advanced analytics to uncover hidden opportunities and threats.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-secondary" /> Internal Capability Audit
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-secondary" /> Market Sizing & Segmentation
                </li>
              </ul>
            </div>

            <div className="p-8 bg-base border border-white/10 rounded-2xl hover:border-secondary/50 transition-colors">
              <div className="text-6xl font-bold text-white/5 mb-6">02</div>
              <h3 className="text-2xl font-bold text-white mb-4">Design & Define</h3>
              <p className="text-muted-foreground/70 mb-6">
                We co-create the strategy with your leadership team. We define the "North Star" and the specific initiatives required to get there.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-secondary" /> Business Model Innovation
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-secondary" /> Go-to-Market Architecture
                </li>
              </ul>
            </div>

            <div className="p-8 bg-base border border-white/10 rounded-2xl hover:border-secondary/50 transition-colors">
              <div className="text-6xl font-bold text-white/5 mb-6">03</div>
              <h3 className="text-2xl font-bold text-white mb-4">Deliver & Drive</h3>
              <p className="text-muted-foreground/70 mb-6">
                Strategy is nothing without execution. We stay with you to pilot, refine, and scale the initiatives, ensuring value realization.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-secondary" /> Pilot Launch & Management
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-secondary" /> KPI Tracking & Governance
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-primary text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Define your future.
          </h2>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
            The market waits for no one. Let's build a growth strategy that positions you for long-term success.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button className="bg-white text-primary hover:bg-white/90 rounded-full px-10 py-6 text-lg font-bold shadow-xl transition-all duration-200 ease-in-out hover:scale-105">
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
