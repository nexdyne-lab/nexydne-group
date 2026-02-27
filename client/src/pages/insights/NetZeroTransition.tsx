import React from 'react';
import ReadingProgress from '@/components/ReadingProgress';
import InlineTableOfContents from '@/components/InlineTableOfContents';
import { Link } from 'wouter';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { ArrowRight, Download, Share2 } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function NetZeroTransition() {
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
              <span className="text-blue-900">Report</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold tracking-tight text-charcoal mb-4 leading-[1.1]">
              The Net Zero Transition: What it would cost, what it could bring
            </h1>
            <p className="text-xl md:text-2xl text-charcoal leading-relaxed max-w-3xl font-light font-serif">
              A comprehensive analysis of the economic transformation required to achieve net-zero emissions by 2050.
            </p>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Executive Summary */}
            <section className="prose prose-lg prose-slate max-w-none">
              <p className="text-lg leading-relaxed text-muted-foreground font-medium">
                The transition to net-zero emissions will entail a massive economic transformation. Our research suggests that capital spending on physical assets for energy and land-use systems in the net-zero transition between 2021 and 2050 would amount to about $275 trillion, or $9.2 trillion per year on average, an annual increase of as much as $3.5 trillion from today.
              </p>
              
              <h3 className="text-2xl font-serif font-bold text-charcoal mt-12 mb-6">Key Findings</h3>
              <ul className="list-disc pl-6 space-y-4 text-muted-foreground">
                <li>
                  <strong>Universal transformation:</strong> The transition will affect every country and every sector of the economy, with the most significant effects in developing countries and fossil fuel-dependent regions.
                </li>
                <li>
                  <strong>Front-loaded investment:</strong> Spending needs to rise to 8.8% of GDP between 2026 and 2030 before falling.
                </li>
                <li>
                  <strong>Uneven impact:</strong> Sectors accounting for 20% of GDP face the highest exposure, but supply chain effects will ripple through the entire economy.
                </li>
                <li>
                  <strong>Opportunity for growth:</strong> The transition could create opportunities for new products, services, and markets, potentially boosting global GDP.
                </li>
              </ul>

              <h3 className="text-2xl font-serif font-bold text-charcoal mt-12 mb-6">The Economic Case</h3>
              <p className="text-muted-foreground">
                While the costs are significant, the cost of inaction is far higher. Physical risks from climate change are already manifesting and will intensify. Moreover, the transition offers a unique opportunity to modernize the global capital stock, improve energy efficiency, and drive innovation.
              </p>
              
              <figure className="my-12 bg-slate-50 p-8 rounded-sm border border-slate-100">
                <div className="aspect-video bg-slate-200 rounded-sm flex items-center justify-center text-muted-foreground/70 mb-4">
                  [Chart: Global Capital Spending on Physical Assets for Energy and Land-Use Systems]
                </div>
                <figcaption className="text-sm text-muted-foreground text-center">
                  Exhibit 1: Capital spending on physical assets for energy and land-use systems in the net-zero transition.
                </figcaption>
              </figure>

              <h3 className="text-2xl font-serif font-bold text-charcoal mt-12 mb-6">Managing the Transition</h3>
              <p className="text-muted-foreground">
                Governments and businesses must work together to manage the transition. Key priorities include:
              </p>
              <ul className="list-disc pl-6 space-y-4 text-muted-foreground">
                <li>Compensating for the early retirement of high-carbon assets.</li>
                <li>Reskilling workers in affected industries.</li>
                <li>Ensuring a just transition for vulnerable communities.</li>
                <li>Mobilizing private capital through policy incentives and risk-sharing mechanisms.</li>
              </ul>
            </section>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-slate-50 p-8 rounded-sm border border-slate-100 sticky top-24">
              <div className="flex flex-col gap-4 mb-8">
                <Button className="w-full bg-blue-900 hover:bg-blue-800 text-white flex items-center justify-center gap-2">
                  <Download className="w-4 h-4" /> Download Full Report
                </Button>
                <Button variant="outline" className="w-full border-slate-300 text-charcoal/80 hover:bg-slate-50 flex items-center justify-center gap-2">
                  <Share2 className="w-4 h-4" /> Share
                </Button>
              </div>

              <h3 className="text-lg font-bold text-charcoal mb-4">Authors</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-slate-200 rounded-full"></div>
                  <div>
                    <div className="font-medium text-charcoal">Sarah Jenkins</div>
                    <div className="text-xs text-muted-foreground">Partner, London</div>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-slate-200 rounded-full"></div>
                  <div>
                    <div className="font-medium text-charcoal">Michael Chen</div>
                    <div className="text-xs text-muted-foreground">Senior Partner, Singapore</div>
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
                    <Link href="/capabilities/growth-marketing-sales/green-growth/energy-materials" className="text-muted-foreground hover:text-blue-700 transition-colors text-sm block">
                      Energy & Materials
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
