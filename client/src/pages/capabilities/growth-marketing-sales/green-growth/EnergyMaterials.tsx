import React from 'react';
import { Link } from 'wouter';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { RelatedContent } from "@/components/RelatedContent";
import { dataRelatedItems } from "@/data/related-content";

export default function EnergyMaterials() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100">
      <Navigation />

      {/* Hero Section */}
      <header className="pt-16 sm:pt-20 pb-16 border-b border-slate-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="text-sm font-medium text-slate-500 mb-6 uppercase tracking-wider">
              <Link href="/capabilities/growth-marketing-sales/green-growth" className="hover:text-blue-900 transition-colors">
                Green Growth
              </Link>
              <span className="mx-2">/</span>
              <span className="text-blue-900">Energy & Materials</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-slate-900 mb-2 sm:mb-3 md:mb-4 leading-[1.1] eb-garamond">
              Decarbonizing the Industrial Core
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-800 leading-relaxed max-w-3xl font-light font-serif">
              For energy and materials companies, the net-zero transition is not just an environmental imperative—it is a fundamental re-engineering of the business model.
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
              <p className="text-lg leading-relaxed text-slate-600">
                The energy and materials sectors face a dual challenge: meeting the world's growing demand for resources while dramatically reducing emissions. This requires a simultaneous focus on operational efficiency today and strategic reinvention for tomorrow.
              </p>
              <p className="text-lg leading-relaxed text-slate-600 mt-6">
                NexDyne helps industrial leaders navigate this transition by treating decarbonization as an efficiency problem. We deploy digital twins, predictive analytics, and autonomous systems to optimize energy consumption, reduce waste, and accelerate the deployment of new, low-carbon technologies.
              </p>
            </section>

            <Separator className="bg-slate-200" />

            {/* Key Challenges & Solutions */}
            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-5 sm:mb-6 md:mb-8 eb-garamond">Strategic Priorities</h2>
              
              <div className="space-y-10">
                <div className="bg-slate-50 p-4 sm:p-6 md:p-8 rounded-sm border border-slate-100">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Asset Decarbonization</h3>
                  <p className="text-slate-600 mb-6">
                    Existing assets must operate cleaner and longer. We implement AI-driven process control to minimize energy intensity and fugitive emissions in real-time.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-slate-700">
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Real-time energy optimization using ML models</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-700">
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Predictive maintenance to prevent efficiency drift</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-50 p-4 sm:p-6 md:p-8 rounded-sm border border-slate-100">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Green Hydrogen & Renewables Integration</h3>
                  <p className="text-slate-600 mb-6">
                    Scaling new energy vectors requires complex systems integration. We help design the digital backbone for hydrogen hubs and renewable power integration.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-slate-700">
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Techno-economic modeling for capital allocation</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-700">
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Grid integration and load balancing algorithms</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-50 p-4 sm:p-6 md:p-8 rounded-sm border border-slate-100">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Circular Value Chains</h3>
                  <p className="text-slate-600 mb-6">
                    Closing the loop on materials is essential for scope 3 reduction. We build the data infrastructure to track materials from extraction to recovery.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-slate-700">
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Digital product passports for material traceability</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-700">
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Reverse logistics optimization</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <Separator className="bg-slate-200" />

            {/* Case Study */}
            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-5 sm:mb-6 md:mb-8 eb-garamond">Impact in Action</h2>
              <div className="bg-slate-900 text-white p-8 md:p-12 rounded-sm relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 sm:p-6 md:p-8 opacity-10">
                  <svg width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                  </svg>
                </div>
                
                <div className="relative z-10">
                  <div className="text-blue-400 font-bold tracking-wider uppercase text-sm mb-4">Case Study</div>
                  <h3 className="text-2xl md:text-3xl font-serif font-bold mb-6">
                    Optimizing a Global Refinery Network
                  </h3>
                  <p className="text-slate-300 text-lg mb-5 sm:mb-6 md:mb-8 max-w-2xl">
                    A major energy company used NexDyne's digital twin technology to optimize energy use across 5 refineries, reducing carbon emissions by 12% and saving $45M annually.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 sm:p-6 md:p-8 mb-5 sm:mb-6 md:mb-8 border-t border-white/10 pt-8">
                    <div>
                      <div className="text-3xl font-bold text-white mb-1">12%</div>
                      <div className="text-sm text-slate-400">Reduction in CO2e</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-white mb-1">$45M</div>
                      <div className="text-sm text-slate-400">Annual Savings</div>
                    </div>
                  </div>

                  <Button className="bg-white text-slate-900 hover:bg-blue-50 border-none">
                    Read full case study <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </section>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-slate-50 p-4 sm:p-6 md:p-8 rounded-sm border border-slate-100 sticky top-24">
              <h3 className="text-xl font-serif font-bold text-slate-900 mb-4">Get in Touch</h3>
              <p className="text-slate-600 mb-6 text-sm">
                Discuss your decarbonization strategy with our Energy & Materials practice leaders.
              </p>
              <Button className="w-full bg-blue-900 hover:bg-blue-800 text-white">
                Contact our experts
              </Button>

              <div className="mt-8 pt-8 border-t border-slate-200">
                <h4 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wide">Related Insights</h4>
                <ul className="space-y-4">
                  <li>
                    <Link href="/insights/net-zero-transition" className="group block">
                      <h5 className="text-slate-900 font-medium group-hover:text-blue-700 transition-colors mb-1">
                        The Net Zero Transition
                      </h5>
                      <span className="text-xs text-slate-500 flex items-center">
                        Report <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/insights/carbon-markets" className="group block">
                      <h5 className="text-slate-900 font-medium group-hover:text-blue-700 transition-colors mb-1">
                        Carbon Markets 2025
                      </h5>
                      <span className="text-xs text-slate-500 flex items-center">
                        Article <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
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
