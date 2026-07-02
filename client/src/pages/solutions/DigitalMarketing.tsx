import React, { useEffect } from "react";
import { useLocation } from "wouter";
import Navbar from "@/components/Navigation";
import Footer from "@/components/Footer";
import { 
  Megaphone, 
  BarChart3, 
  MousePointerClick, 
  Users,
  Smartphone,
  CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { RelatedContent } from "@/components/RelatedContent";
import { dataRelatedItems } from "@/data/related-content";

export default function DigitalMarketing() {
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
              <span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Performance Engine</span>
            </div>

            <h1 className="text-charcoal tracking-[-0.035em] leading-[1.0] text-[clamp(2.4rem,5.4vw,4.2rem)] mb-7">
              Digital Marketing
            </h1>
            <p className="text-[1.1rem] md:text-[1.2rem] text-muted-foreground max-w-2xl leading-[1.55]">
              Transform clicks into customers. We combine creative storytelling with data science to deliver personalized experiences that drive conversion and loyalty.
            </p>
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-[2rem] font-bold text-charcoal mb-6">
                Precision at Scale
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                The digital landscape is crowded. To stand out, brands must move beyond generic broadcasting to hyper-personalized engagement. It's not just about reaching more people; it's about reaching the *right* people with the *right* message at the *right* time.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                NexDyne's Digital Marketing practice empowers you to take control of your customer data. We build full-funnel strategies that optimize every touchpoint, ensuring your marketing spend delivers measurable ROI.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 bg-white border border-border rounded-xl">
                <BarChart3 className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-lg font-bold text-charcoal mb-2">Data-Driven</h3>
                <p className="text-sm text-muted-foreground">Decisions based on analytics, not guesswork.</p>
              </div>
              <div className="p-6 bg-white border border-border rounded-xl">
                <Users className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-lg font-bold text-charcoal mb-2">Customer-Centric</h3>
                <p className="text-sm text-muted-foreground">Strategies built around the user journey.</p>
              </div>
              <div className="p-6 bg-white border border-border rounded-xl">
                <MousePointerClick className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-lg font-bold text-charcoal mb-2">Performance-First</h3>
                <p className="text-sm text-muted-foreground">Focus on conversion, retention, and LTV.</p>
              </div>
              <div className="p-6 bg-white border border-border rounded-xl">
                <Smartphone className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-lg font-bold text-charcoal mb-2">Omnichannel</h3>
                <p className="text-sm text-muted-foreground">Seamless experiences across all devices.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-white border-y border-border">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl md:text-[2rem] font-bold text-charcoal mb-6">Marketing Capabilities</h2>
            <div className="w-20 h-1 bg-primary" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group p-8 bg-background border border-border rounded-2xl hover:bg-charcoal transition duration-300">
              <h3 className="text-2xl font-bold text-charcoal group-hover:text-white mb-4 transition-colors">
                Performance Marketing
              </h3>
              <p className="text-muted-foreground group-hover:text-white/70 mb-6 transition-colors">
                Optimize your paid media mix across search, social, and display. We use algorithmic bidding and dynamic creative to lower CAC and increase ROAS.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-white/70">
                  <CheckCircle2 className="w-4 h-4 text-primary" /> Paid Search (SEM) & SEO
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-white/70">
                  <CheckCircle2 className="w-4 h-4 text-primary" /> Programmatic Display
                </li>
              </ul>
            </div>

            <div className="group p-8 bg-background border border-border rounded-2xl hover:bg-charcoal transition duration-300">
              <h3 className="text-2xl font-bold text-charcoal group-hover:text-white mb-4 transition-colors">
                Marketing Technology (MarTech)
              </h3>
              <p className="text-muted-foreground group-hover:text-white/70 mb-6 transition-colors">
                Build a robust tech stack that integrates data, automates workflows, and enables real-time personalization at scale.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-white/70">
                  <CheckCircle2 className="w-4 h-4 text-primary" /> CRM & CDP Implementation
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-white/70">
                  <CheckCircle2 className="w-4 h-4 text-primary" /> Marketing Automation
                </li>
              </ul>
            </div>

            <div className="group p-8 bg-background border border-border rounded-2xl hover:bg-charcoal transition duration-300">
              <h3 className="text-2xl font-bold text-charcoal group-hover:text-white mb-4 transition-colors">
                Content & Brand Strategy
              </h3>
              <p className="text-muted-foreground group-hover:text-white/70 mb-6 transition-colors">
                Develop a compelling brand voice and content ecosystem that educates, engages, and inspires your target audience.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-white/70">
                  <CheckCircle2 className="w-4 h-4 text-primary" /> Brand Positioning
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-white/70">
                  <CheckCircle2 className="w-4 h-4 text-primary" /> Content Marketing Engines
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
            Performance Engine
          </span>
          <h2 className="text-[2rem] md:text-[2.75rem] font-bold mb-8">
            Amplify your brand.
          </h2>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
            Ready to take your digital presence to the next level? Let's build a marketing engine that drives real growth.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button className="bg-primary text-primary-foreground hover:bg-primary-hover rounded-full px-10 py-6 text-lg font-bold shadow-xl transition hover:scale-105">
              Get a Marketing Audit
            </Button>
          </div>
        </div>
      </section>

      <RelatedContent items={dataRelatedItems} />
      <Footer />
    </div>
  );
}
