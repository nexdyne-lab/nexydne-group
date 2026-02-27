import React from 'react';
import { Link } from 'wouter';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { ArrowRight, PieChart, Network, Microscope, BarChart4 } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { RelatedContent } from "@/components/RelatedContent";
import { dataRelatedItems } from "@/data/related-content";

export default function AnalyticsAttribution() {
  return (
    <div className="min-h-screen bg-white text-charcoal font-sans selection:bg-blue-100">
      <Navigation />

      {/* Hero Section */}
      <header className="pt-16 sm:pt-20 pb-16 border-b border-slate-100 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="text-sm font-medium text-muted-foreground mb-6 uppercase tracking-wider">
              <Link href="/capabilities/growth-marketing-sales" className="hover:text-blue-900 transition-colors">
                Growth, Marketing & Sales
              </Link>
              <span className="mx-2">/</span>
              <Link href="/capabilities/growth-marketing-sales/digital-marketing" className="hover:text-blue-900 transition-colors">
                Digital Marketing
              </Link>
              <span className="mx-2">/</span>
              <span className="text-blue-900">Analytics & Attribution</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-charcoal mb-3 leading-[1.1] eb-garamond">
              Marketing Analytics & Attribution
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-charcoal leading-relaxed max-w-3xl font-light font-serif">
              Decode the customer journey with advanced analytics. We help you understand what works, why it works, and where to invest next.
            </p>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16">
          
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-12">
            
            <section className="prose prose-lg prose-slate max-w-none">
              <p className="text-lg leading-relaxed text-muted-foreground">
                In an omnichannel world, understanding the true impact of your marketing efforts is complex. Last-click attribution is no longer enough. We provide a holistic view of marketing performance, using advanced data science to untangle the web of touchpoints that lead to conversion.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground mt-6">
                Our analytics solutions go beyond reporting to provide predictive insights. We help you anticipate customer needs, forecast trends, and make data-backed decisions that drive sustainable growth. From setting up robust data infrastructure to deploying sophisticated attribution models, we turn data into your competitive advantage.
              </p>
            </section>

            {/* Key Focus Areas */}
            <section>
              <h2 className="text-2xl font-bold text-charcoal mb-5 sm:mb-6 md:mb-8 eb-garamond">Our Analytics Capabilities</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:p-6 md:p-8">
                <div className="bg-white p-4 sm:p-5 md:p-6 rounded-sm border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <Network className="w-8 h-8 text-blue-900 mb-4" />
                  <h3 className="text-lg font-bold text-charcoal mb-3">Multi-Touch Attribution</h3>
                  <p className="text-muted-foreground">
                    Moving beyond single-touch models to assign accurate value to every interaction in the customer journey, revealing the true ROI of each channel.
                  </p>
                </div>
                <div className="bg-white p-4 sm:p-5 md:p-6 rounded-sm border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <PieChart className="w-8 h-8 text-blue-900 mb-4" />
                  <h3 className="text-lg font-bold text-charcoal mb-3">Marketing Mix Modeling (MMM)</h3>
                  <p className="text-muted-foreground">
                    Statistical analysis to quantify the impact of various marketing tactics and external factors on sales, optimizing budget allocation for maximum efficiency.
                  </p>
                </div>
                <div className="bg-white p-4 sm:p-5 md:p-6 rounded-sm border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <Microscope className="w-8 h-8 text-blue-900 mb-4" />
                  <h3 className="text-lg font-bold text-charcoal mb-3">Customer Lifetime Value (CLV)</h3>
                  <p className="text-muted-foreground">
                    Predictive modeling to identify high-value customer segments and tailor acquisition and retention strategies to maximize long-term profitability.
                  </p>
                </div>
                <div className="bg-white p-4 sm:p-5 md:p-6 rounded-sm border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <BarChart4 className="w-8 h-8 text-blue-900 mb-4" />
                  <h3 className="text-lg font-bold text-charcoal mb-3">Real-time Dashboards</h3>
                  <p className="text-muted-foreground">
                    Custom-built visualization tools that provide stakeholders with instant access to key performance indicators and actionable insights.
                  </p>
                </div>
              </div>
            </section>

            <Separator className="bg-slate-200" />

            {/* Quote Section */}
            <section className="bg-slate-50 p-10 border-l-4 border-blue-900 italic text-charcoal/80 text-xl font-serif leading-relaxed">
              "Data without context is noise. We help clients filter the signal from the noise to make decisions that move the needle."
            </section>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-slate-50 p-4 sm:p-6 md:p-8 border-t-4 border-blue-900">
              <h3 className="text-lg font-bold text-charcoal mb-4">Related Capabilities</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/capabilities/growth-marketing-sales/digital-marketing/performance-marketing" className="text-muted-foreground hover:text-blue-900 hover:underline flex items-center">
                    <ArrowRight className="w-3 h-3 mr-2 text-blue-500" />
                    Performance Marketing
                  </Link>
                </li>
                <li>
                  <Link href="/capabilities/growth-marketing-sales/digital-marketing/brand-strategy" className="text-muted-foreground hover:text-blue-900 hover:underline flex items-center">
                    <ArrowRight className="w-3 h-3 mr-2 text-blue-500" />
                    Brand Strategy
                  </Link>
                </li>
                <li>
                  <Link href="/capabilities/mckinsey-digital" className="text-muted-foreground hover:text-blue-900 hover:underline flex items-center">
                    <ArrowRight className="w-3 h-3 mr-2 text-blue-500" />
                    NexDyne Digital
                  </Link>
                </li>
              </ul>
            </div>

            <div className="bg-blue-900 text-white p-4 sm:p-6 md:p-8 rounded-sm">
              <h3 className="text-xl font-serif font-bold mb-4">Unlock your data</h3>
              <p className="text-blue-100 mb-6">
                Discover how advanced analytics can transform your marketing ROI.
              </p>
              <Link href="/contact">
                <Button className="w-full bg-white text-blue-900 hover:bg-blue-50">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>

        </div>
      </main>

      <RelatedContent items={dataRelatedItems} />
      <Footer />
    </div>
  );
}
