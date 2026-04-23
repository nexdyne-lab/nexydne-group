import React from 'react';
import { Link } from 'wouter';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { RelatedContent } from "@/components/RelatedContent";
import { dataRelatedItems } from "@/data/related-content";

export default function ConsumerGoods() {
  return (
    <div className="min-h-screen bg-white text-charcoal font-sans selection:bg-blue-100">
      <Navigation />

      {/* Hero Section */}
      <header className="pt-16 sm:pt-20 pb-16 border-b border-slate-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="text-sm font-medium text-muted-foreground mb-6 uppercase tracking-wider">
              <Link href="/capabilities/growth-marketing-sales/green-growth" className="hover:text-blue-900 transition-colors">
                Green Growth
              </Link>
              <span className="mx-2">/</span>
              <span className="text-blue-900">Consumer Goods</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-charcoal mb-2 sm:mb-3 md:mb-4 leading-[1.1] eb-garamond">
              The Sustainable Consumer
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-charcoal leading-relaxed max-w-3xl font-light ">
              Meeting the rising demand for sustainable products requires a fundamental rethink of product design, sourcing, and supply chain transparency.
            </p>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16">
          
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-16">
            
            {/* Introduction */}
            <section className="prose prose-lg prose-slate max-w-none">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Consumers are voting with their wallets, and regulators are raising the bar on transparency. For consumer goods companies, sustainability is no longer a niche differentiator—it is a license to operate.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground mt-6">
                NexDyne partners with leading brands to embed sustainability into the core of their value proposition. From sustainable packaging innovation to scope 3 supply chain visibility, we help you build brands that people love and trust.
              </p>
            </section>

            <Separator className="bg-slate-200" />

            {/* Key Challenges & Solutions */}
            <section>
              <h2 className="text-3xl font-bold text-charcoal mb-5 sm:mb-6 md:mb-8 eb-garamond">Strategic Priorities</h2>
              
              <div className="space-y-10">
                <div className="bg-slate-50 p-4 sm:p-6 md:p-8 rounded-sm border border-slate-100">
                  <h3 className="text-xl font-bold text-charcoal mb-4">Sustainable Packaging</h3>
                  <p className="text-muted-foreground mb-6">
                    Reducing plastic waste is a top priority. We help optimize packaging design for recyclability and reduced material usage without compromising product integrity.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-charcoal/80">
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Material substitution analysis</span>
                    </li>
                    <li className="flex items-start gap-3 text-charcoal/80">
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Lifecycle assessment (LCA) modeling</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-50 p-4 sm:p-6 md:p-8 rounded-sm border border-slate-100">
                  <h3 className="text-xl font-bold text-charcoal mb-4">Supply Chain Transparency</h3>
                  <p className="text-muted-foreground mb-6">
                    You can't manage what you can't see. We build data platforms that provide end-to-end visibility into your upstream supply chain emissions and labor practices.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-charcoal/80">
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Supplier data integration and scoring</span>
                    </li>
                    <li className="flex items-start gap-3 text-charcoal/80">
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Blockchain-enabled traceability</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-50 p-4 sm:p-6 md:p-8 rounded-sm border border-slate-100">
                  <h3 className="text-xl font-bold text-charcoal mb-4">Green Product Design</h3>
                  <p className="text-muted-foreground mb-6">
                    Sustainability starts at the drawing board. We help R&D teams use generative design to create products with lower carbon footprints and higher durability.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-charcoal/80">
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Generative design for material efficiency</span>
                    </li>
                    <li className="flex items-start gap-3 text-charcoal/80">
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Design for disassembly and repair</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <Separator className="bg-slate-200" />

            {/* Case Study */}
            <section>
              <h2 className="text-3xl font-bold text-charcoal mb-5 sm:mb-6 md:mb-8 eb-garamond">Impact in Action</h2>
              <div className="bg-slate-900 text-white p-8 md:p-12 rounded-sm relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 sm:p-6 md:p-8 opacity-10">
                  <svg width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                    <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                
                <div className="relative z-10">
                  <div className="text-blue-400 font-bold tracking-wider uppercase text-sm mb-4">Case Study</div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-6">
                    Reinventing Packaging for a Global FMCG Giant
                  </h3>
                  <p className="text-muted-foreground/50 text-lg mb-5 sm:mb-6 md:mb-8 max-w-2xl">
                    We helped a multinational consumer goods company redesign its packaging portfolio, reducing plastic usage by 25% and saving $12M in material costs annually.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 sm:p-6 md:p-8 mb-5 sm:mb-6 md:mb-8 border-t border-white/10 pt-8">
                    <div>
                      <div className="text-3xl font-bold text-white mb-1">25%</div>
                      <div className="text-sm text-muted-foreground/70">Less Plastic</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-white mb-1">$12M</div>
                      <div className="text-sm text-muted-foreground/70">Annual Savings</div>
                    </div>
                  </div>

                  <Button className="bg-white text-charcoal hover:bg-blue-50 border-none">
                    Read full case study <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </section>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-slate-50 p-4 sm:p-6 md:p-8 rounded-sm border border-slate-100 sticky top-24">
              <h3 className="text-xl font-bold text-charcoal mb-4">Get in Touch</h3>
              <p className="text-muted-foreground mb-6 text-sm">
                Ready to build a sustainable brand? Connect with our Consumer Goods experts.
              </p>
              <Button className="w-full bg-blue-900 hover:bg-blue-800 text-white">
                Contact our experts
              </Button>

              <div className="mt-8 pt-8 border-t border-slate-200">
                <h4 className="font-bold text-charcoal mb-4 text-sm uppercase tracking-wide">Related Insights</h4>
                <ul className="space-y-4">
                  <li>
                    <Link href="/insights/green-materials" className="group block">
                      <h5 className="text-charcoal font-medium group-hover:text-blue-700 transition-colors mb-1">
                        The Green Materials Revolution
                      </h5>
                      <span className="text-xs text-muted-foreground flex items-center">
                        Perspective <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </main>

      <RelatedContent items={dataRelatedItems} />
      <Footer />
    </div>
  );
}
