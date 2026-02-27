import React from 'react';
import ReadingProgress from '@/components/ReadingProgress';
import InlineTableOfContents from '@/components/InlineTableOfContents';
import { Link } from 'wouter';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { ArrowRight, Share2 } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function GreenMaterials() {
  return (
    <div className="min-h-screen bg-white text-charcoal font-sans selection:bg-blue-100">
      <Navigation />

      {/* Hero Section */}
      <header className="pt-20 pb-16 border-b border-slate-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="text-sm font-medium text-muted-foreground mb-6 uppercase tracking-wider">
              <Link href="/insights" className="hover:text-blue-900 transition-colors">
                Insights
              </Link>
              <span className="mx-2">/</span>
              <span className="text-blue-900">Perspective</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold tracking-tight text-charcoal mb-4 leading-[1.1]">
              The Green Materials Revolution
            </h1>
            <p className="text-xl md:text-2xl text-charcoal leading-relaxed max-w-3xl font-light font-serif">
              From green steel to bio-based plastics, a wave of material innovation is reshaping industrial supply chains.
            </p>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Article Body */}
            <section className="prose prose-lg prose-slate max-w-none">
              <p className="text-lg leading-relaxed text-muted-foreground font-medium">
                Materials account for a significant portion of global greenhouse gas emissions. Steel, cement, aluminum, and chemicals alone are responsible for nearly 30% of the total. Decarbonizing these sectors is not just an environmental necessity; it is a massive commercial opportunity.
              </p>
              
              <h3 className="text-2xl font-serif font-bold text-charcoal mt-12 mb-6">The Premium for Green</h3>
              <p className="text-muted-foreground">
                Early movers are already securing premiums for low-carbon materials. Automakers are signing long-term contracts for green steel to meet their scope 3 targets. Consumer goods companies are racing to secure supplies of recycled plastics and bio-based alternatives.
              </p>

              <h3 className="text-2xl font-serif font-bold text-charcoal mt-12 mb-6">Technology Breakthroughs</h3>
              <p className="text-muted-foreground">
                Several technologies are reaching maturity simultaneously:
              </p>
              <ul className="list-disc pl-6 space-y-4 text-muted-foreground">
                <li><strong>Hydrogen-based steelmaking (DRI):</strong> Replacing coal with green hydrogen to produce near-zero emission steel.</li>
                <li><strong>Carbon capture, utilization, and storage (CCUS):</strong> Essential for decarbonizing cement and chemicals.</li>
                <li><strong>Bio-feedstocks:</strong> Using agricultural waste and biomass to replace fossil fuels in chemical production.</li>
              </ul>
              
              <h3 className="text-2xl font-serif font-bold text-charcoal mt-12 mb-6">The Supply Gap</h3>
              <p className="text-muted-foreground">
                Despite the excitement, supply is lagging behind demand. Scaling these technologies requires massive capital investment and cheap, abundant renewable energy. We estimate a supply gap of 20-30% for green steel and recycled plastics by 2030 unless investment accelerates significantly.
              </p>

              <h3 className="text-2xl font-serif font-bold text-charcoal mt-12 mb-6">What Leaders Should Do</h3>
              <p className="text-muted-foreground">
                <strong>For buyers:</strong> Send clear demand signals through advance market commitments and long-term offtake agreements.
                <br /><br />
                <strong>For producers:</strong> Focus on securing low-cost renewable energy and building partnerships across the value chain to share risk and capital.
              </p>
            </section>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-slate-50 p-8 rounded-sm border border-slate-100 sticky top-24">
              <div className="flex flex-col gap-4 mb-8">
                <Button variant="outline" className="w-full border-slate-300 text-charcoal/80 hover:bg-slate-50 flex items-center justify-center gap-2">
                  <Share2 className="w-4 h-4" /> Share Perspective
                </Button>
              </div>

              <h3 className="text-lg font-bold text-charcoal mb-4">Authors</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-slate-200 rounded-full"></div>
                  <div>
                    <div className="font-medium text-charcoal">David Kim</div>
                    <div className="text-xs text-muted-foreground">Partner, Seoul</div>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-slate-200 rounded-full"></div>
                  <div>
                    <div className="font-medium text-charcoal">Dr. Anna Weber</div>
                    <div className="text-xs text-muted-foreground">Expert Associate Partner, Munich</div>
                  </div>
                </li>
              </ul>

              <div className="pt-8 border-t border-slate-200">
                <h4 className="font-bold text-charcoal mb-4 text-sm uppercase tracking-wide">Related Capabilities</h4>
                <ul className="space-y-3">
                  <li>
                    <Link href="/capabilities/growth-marketing-sales/green-growth" className="text-muted-foreground hover:text-blue-700 transition-colors text-sm block">
                      Green Growth
                    </Link>
                  </li>
                  <li>
                    <Link href="/capabilities/growth-marketing-sales/green-growth/consumer-goods" className="text-muted-foreground hover:text-blue-700 transition-colors text-sm block">
                      Consumer Goods
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
