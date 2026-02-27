import React from 'react';
import ReadingProgress from '@/components/ReadingProgress';
import InlineTableOfContents from '@/components/InlineTableOfContents';
import { Link } from 'wouter';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { ArrowRight, Share2 } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function CarbonMarkets() {
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
              <span className="text-blue-900">Article</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold tracking-tight text-charcoal mb-4 leading-[1.1]">
              Carbon Markets 2025: From Voluntary to Compliance
            </h1>
            <p className="text-xl md:text-2xl text-charcoal leading-relaxed max-w-3xl font-light font-serif">
              As regulatory frameworks tighten, the distinction between voluntary and compliance carbon markets is blurring. Here is what business leaders need to know.
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
                The voluntary carbon market (VCM) has grown rapidly in recent years, driven by corporate net-zero commitments. However, concerns about credit quality and a lack of standardization have held it back. Now, as we approach 2025, a new era is emerging—one defined by convergence with compliance markets and rigorous integrity standards.
              </p>
              
              <h3 className="text-2xl font-serif font-bold text-charcoal mt-12 mb-6">The Integrity Turn</h3>
              <p className="text-muted-foreground">
                The "wild west" days of carbon offsetting are ending. New guidance from the Integrity Council for the Voluntary Carbon Market (ICVCM) and the Voluntary Carbon Markets Integrity Initiative (VCMI) is setting a high bar for what counts as a high-quality credit. Buyers are increasingly demanding removal credits over avoidance credits, and they are willing to pay a premium for them.
              </p>

              <h3 className="text-2xl font-serif font-bold text-charcoal mt-12 mb-6">Regulatory Convergence</h3>
              <p className="text-muted-foreground">
                Governments are stepping in. Article 6 of the Paris Agreement is creating a framework for international carbon trading, and jurisdictions like the EU and California are exploring ways to integrate high-quality voluntary credits into their compliance schemes. This convergence will likely drive up prices and liquidity.
              </p>
              
              <blockquote className="border-l-4 border-blue-900 pl-6 italic text-xl text-charcoal my-12">
                "The future of carbon markets lies in high-integrity, transparent, and regulated trading systems that can unlock the trillions needed for climate action."
              </blockquote>

              <h3 className="text-2xl font-serif font-bold text-charcoal mt-12 mb-6">Strategic Implications</h3>
              <p className="text-muted-foreground">
                For companies, this means that carbon credits can no longer be a "check-the-box" exercise. They must be part of a comprehensive decarbonization strategy that prioritizes internal abatement. When credits are used, they must be high-quality and verified.
              </p>
              <p className="text-muted-foreground mt-4">
                We recommend three actions for business leaders:
              </p>
              <ol className="list-decimal pl-6 space-y-4 text-muted-foreground">
                <li><strong>Audit your portfolio:</strong> Review existing carbon credit purchases against the new integrity standards.</li>
                <li><strong>Secure supply:</strong> Long-term offtake agreements for high-quality removal credits (e.g., direct air capture, biochar) are becoming essential as demand outstrips supply.</li>
                <li><strong>Prepare for regulation:</strong> Anticipate stricter reporting requirements and potential carbon border taxes.</li>
              </ol>
            </section>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-slate-50 p-8 rounded-sm border border-slate-100 sticky top-24">
              <div className="flex flex-col gap-4 mb-8">
                <Button variant="outline" className="w-full border-slate-300 text-charcoal/80 hover:bg-slate-50 flex items-center justify-center gap-2">
                  <Share2 className="w-4 h-4" /> Share Article
                </Button>
              </div>

              <h3 className="text-lg font-bold text-charcoal mb-4">Authors</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-slate-200 rounded-full"></div>
                  <div>
                    <div className="font-medium text-charcoal">Elena Rodriguez</div>
                    <div className="text-xs text-muted-foreground">Associate Partner, New York</div>
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
