import React from 'react';
import { Link } from 'wouter';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { RelatedContent } from "@/components/RelatedContent";
import { dataRelatedItems } from "@/data/related-content";

export default function AdvancedManufacturing() {
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
              <span className="text-blue-900">Advanced Manufacturing</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-slate-900 mb-2 sm:mb-3 md:mb-4 leading-[1.1] eb-garamond">
              The Factory of the Future is Green
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-800 leading-relaxed max-w-3xl font-light font-serif">
              Advanced manufacturing is at the heart of the green transition. By embracing Industry 4.0 technologies, manufacturers can drive efficiency, reduce waste, and build resilient, circular supply chains.
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
                The manufacturing sector is undergoing a profound transformation. The convergence of digital technologies and sustainability goals is creating new opportunities for value creation.
              </p>
              <p className="text-lg leading-relaxed text-slate-600 mt-6">
                NexDyne helps manufacturers leverage the power of data, AI, and automation to build smarter, cleaner, and more efficient production systems. From predictive maintenance to energy management, we provide the tools and expertise to drive continuous improvement.
              </p>
            </section>

            <Separator className="bg-slate-200" />

            {/* Key Challenges & Solutions */}
            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-5 sm:mb-6 md:mb-8 eb-garamond">Strategic Priorities</h2>
              
              <div className="space-y-10">
                <div className="bg-slate-50 p-4 sm:p-6 md:p-8 rounded-sm border border-slate-100">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Energy Efficiency & Optimization</h3>
                  <p className="text-slate-600 mb-6">
                    Energy is a major cost driver and a significant source of emissions. We use IoT sensors and AI analytics to monitor and optimize energy consumption in real-time.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-slate-700">
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Smart metering and sub-metering</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-700">
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>AI-driven HVAC and lighting control</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-50 p-4 sm:p-6 md:p-8 rounded-sm border border-slate-100">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Waste Reduction & Circularity</h3>
                  <p className="text-slate-600 mb-6">
                    Minimizing waste is key to both sustainability and profitability. We implement closed-loop systems and process optimization to reduce scrap and rework.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-slate-700">
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Computer vision for quality control</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-700">
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Material flow analysis and optimization</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-50 p-4 sm:p-6 md:p-8 rounded-sm border border-slate-100">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Resilient Supply Chains</h3>
                  <p className="text-slate-600 mb-6">
                    Disruptions are the new normal. We help build agile, resilient supply chains that can adapt to changing market conditions and mitigate risks.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-slate-700">
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Digital supply chain twins</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-700">
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Supplier risk management and diversification</span>
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
                    <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                
                <div className="relative z-10">
                  <div className="text-blue-400 font-bold tracking-wider uppercase text-sm mb-4">Case Study</div>
                  <h3 className="text-2xl md:text-3xl font-serif font-bold mb-6">
                    Digital Transformation of an Automotive Plant
                  </h3>
                  <p className="text-slate-300 text-lg mb-5 sm:mb-6 md:mb-8 max-w-2xl">
                    We partnered with a leading automotive manufacturer to digitize their production line, resulting in a 15% increase in throughput and a 20% reduction in energy consumption.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 sm:p-6 md:p-8 mb-5 sm:mb-6 md:mb-8 border-t border-white/10 pt-8">
                    <div>
                      <div className="text-3xl font-bold text-white mb-1">15%</div>
                      <div className="text-sm text-slate-400">Throughput Increase</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-white mb-1">20%</div>
                      <div className="text-sm text-slate-400">Energy Reduction</div>
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
                Transform your manufacturing operations with NexDyne.
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
