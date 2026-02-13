import React from 'react';
import { 
  Globe, 
  ArrowRight, 
  CheckCircle2, 
  ShoppingBag, 
  RefreshCw, 
  BarChart4,
  Truck,
  Layers
} from 'lucide-react';
import { Link } from 'wouter';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import { RelatedContent } from "@/components/RelatedContent";
import { dataRelatedItems } from "@/data/related-content";

export function MarketplaceManagement() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-[#0a0e3d]">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1586880244406-556ebe35f282?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e3d]/90 via-[#0a0e3d]/80 to-[#0a0e3d]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <Breadcrumbs className="mb-5 sm:mb-6 md:mb-8" />
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-2 sm:mb-3 md:mb-4 leading-tight eb-garamond">
              Marketplace <br/>
              <span className="text-[#00d4ff]">Management & Strategy</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
              Scale beyond your storefront. We help brands dominate global marketplaces like Amazon, Walmart, and Alibaba through algorithmic advertising, content optimization, and automated fulfillment.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-24">
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-6 eb-garamond">
                Winning the Platform Economy
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Marketplaces are the new search engines for products. Success requires more than just listing items; it demands a sophisticated strategy to win the "Buy Box," rank for high-intent keywords, and protect your brand equity.
              </p>
              <p className="text-lg text-slate-600 mb-5 sm:mb-6 md:mb-8 leading-relaxed">
                We act as your marketplace operating system. From feed management to retail media buying, we engineer your presence to maximize visibility and profitability while minimizing channel conflict with your D2C site.
              </p>
              
              <div className="grid grid-cols-1 gap-4">
                {[
                  "Amazon & Walmart Marketplace Strategy",
                  "Algorithmic PPC & Retail Media Management",
                  "Product Listing Optimization (SEO)",
                  "Inventory Synchronization & 3P Fulfillment"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#00d4ff]" />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-50 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Marketplace Capabilities</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="p-3 bg-blue-100 rounded-lg h-fit">
                    <ShoppingBag className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">Content Syndication</h4>
                    <p className="text-slate-600 text-sm">Centralized PIM (Product Information Management) to push consistent, high-quality product data to 100+ channels.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="p-3 bg-blue-100 rounded-lg h-fit">
                    <BarChart4 className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">Retail Media Buying</h4>
                    <p className="text-slate-600 text-sm">Programmatic management of Amazon Advertising (Sponsored Products, Brands, Display) to drive ROAS.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="p-3 bg-blue-100 rounded-lg h-fit">
                    <RefreshCw className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">Brand Protection</h4>
                    <p className="text-slate-600 text-sm">Monitoring for unauthorized sellers, MAP violations, and counterfeit products to safeguard your brand.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Strategy Grid */}
          <div className="mb-24">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-6 sm:mb-8 md:mb-12 text-center eb-garamond">
              Ecosystem Integration
            </h2>
            <div className="grid md:grid-cols-4 gap-4 sm:p-6 md:p-8">
              {[
                {
                  icon: <Globe className="w-8 h-8 text-blue-600" />,
                  title: "Global Reach",
                  desc: "Launch into new international markets (Europe, APAC) leveraging existing marketplace infrastructure."
                },
                {
                  icon: <Truck className="w-8 h-8 text-blue-600" />,
                  title: "Fulfillment Logic",
                  desc: "Smart routing between FBA, FBM, and 3PLs to optimize shipping costs and delivery speed."
                },
                {
                  icon: <Layers className="w-8 h-8 text-blue-600" />,
                  title: "Tech Stack",
                  desc: "Integration with ChannelAdvisor, Feedonomics, and ERPs for real-time data flow."
                },
                {
                  icon: <CheckCircle2 className="w-8 h-8 text-blue-600" />,
                  title: "Profitability",
                  desc: "SKU-level P&L analysis to ensure marketplace fees and ads don't erode margins."
                }
              ].map((step, index) => (
                <div key={index} className="bg-slate-50 p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl border border-slate-100 hover:shadow-md transition-shadow">
                  <div className="mb-4 p-3 bg-white rounded-lg w-fit shadow-sm">
                    {step.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">{step.title}</h3>
                  <p className="text-slate-600 text-sm">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 eb-garamond">
            Expand Your Digital Footprint
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Tap into millions of new customers. Let's build a marketplace strategy that complements your direct channels.
          </p>
          <Link href="/contact">
            <button className="px-8 py-4 bg-[#00d4ff] text-[#0a0e3d] font-bold rounded-full hover:bg-white transition-all duration-300">
              Discuss Marketplace Strategy
            </button>
          </Link>
        </div>
      </section>

      <RelatedContent items={dataRelatedItems} />
      <Footer />
    </div>
  );
}
