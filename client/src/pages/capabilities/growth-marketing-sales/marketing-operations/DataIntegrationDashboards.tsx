import React from 'react';
import { Link } from 'wouter';
import { ArrowLeft, BarChart3, PieChart, LineChart, TrendingUp, DollarSign, Layers } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { RelatedContent } from "@/components/RelatedContent";
import { dataRelatedItems } from "@/data/related-content";

export default function DataIntegrationDashboards() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-[#0a0e3d] text-white pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20">
          <div className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-emerald-900 to-transparent"></div>
          <div className="absolute top-20 right-1/4 w-64 h-64 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        </div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="mb-5 sm:mb-6 md:mb-8">
            <Link href="/capabilities/growth-marketing-sales/marketing-operations" className="inline-flex items-center text-emerald-300 hover:text-white transition-colors mb-6">
              <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
              Back to Marketing Operations
            </Link>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 leading-tight eb-garamond">
              Data Integration & Intelligence
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-emerald-100 max-w-3xl font-light leading-relaxed">
              Unify your data ecosystem. We engineer robust pipelines and centralized warehouses that transform fragmented signals into a single source of truth for strategic decision-making.
            </p>
          </div>
        </div>
      </section>

      {/* The Data Challenge Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="prose prose-lg max-w-none text-slate-600">
            <h2 className="text-3xl font-bold text-[#0a0e3d] mb-6 eb-garamond">
              The Power of Unified Intelligence
            </h2>
            <p className="mb-6 text-xl font-light text-slate-800">
              Modern marketing relies on a complex stack of tools—from ad platforms to CRMs. The key to competitive advantage lies in unifying these disparate data streams into a coherent, actionable picture of performance.
            </p>
            <p className="mb-5 sm:mb-6 md:mb-8">
              We architect comprehensive data solutions that bridge the gap between platforms. By building robust ETL pipelines and a centralized data warehouse, we enable advanced analytics, cross-channel attribution, and real-time reporting that empowers your team to move with confidence and speed.
            </p>
          </div>

          {/* Key Capabilities Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:p-5 md:p-6 mt-12">
            <div className="bg-emerald-50 p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl border border-emerald-100">
              <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <Layers className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-700" />
              </div>
              <h3 className="font-bold text-[#0a0e3d] mb-2">Enterprise Data Warehousing</h3>
              <p className="text-sm text-slate-600">Centralize all your marketing data in scalable environments like Snowflake, BigQuery, or Redshift for unified analysis.</p>
            </div>
            <div className="bg-emerald-50 p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl border border-emerald-100">
              <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <LineChart className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-700" />
              </div>
              <h3 className="font-bold text-[#0a0e3d] mb-2">Real-Time Visualization</h3>
              <p className="text-sm text-slate-600">Monitor performance instantly with custom, interactive dashboards in Tableau, PowerBI, or Looker.</p>
            </div>
            <div className="bg-emerald-50 p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl border border-emerald-100">
              <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <PieChart className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-700" />
              </div>
              <h3 className="font-bold text-[#0a0e3d] mb-2">Automated Insights</h3>
              <p className="text-sm text-slate-600">Streamline reporting workflows with automated delivery of key metrics, freeing your team to focus on strategy.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Tech Stack Integration */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-xl sm:rounded-2xl transform rotate-3 opacity-20"></div>
                <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-xl relative z-10 border border-slate-100">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        <span className="font-medium text-slate-700">Google Ads</span>
                      </div>
                      <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4 text-slate-400 rotate-180" />
                    </div>
                    <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                        <span className="font-medium text-slate-700">LinkedIn Ads</span>
                      </div>
                      <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4 text-slate-400 rotate-180" />
                    </div>
                    <div className="flex items-center justify-center py-2">
                      <Layers className="w-6 h-6 text-slate-400" />
                    </div>
                    <div className="p-4 sm:p-5 md:p-6 bg-[#0a0e3d] rounded-lg text-white text-center">
                      <h4 className="font-bold text-lg mb-1">Unified Data Warehouse</h4>
                      <p className="text-xs text-blue-200">Snowflake / BigQuery / Redshift</p>
                    </div>
                    <div className="flex items-center justify-center py-2">
                      <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4 text-slate-400 -rotate-90" />
                    </div>
                    <div className="p-4 bg-emerald-600 rounded-lg text-white text-center shadow-lg">
                      <h4 className="font-bold">Executive Dashboard</h4>
                      <p className="text-xs opacity-90">Real-time ROI Visualization</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold text-[#0a0e3d] mb-6 eb-garamond">
                From Raw Data to Strategic Clarity
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                Effective dashboards are built on a foundation of rigorous data engineering. We handle the complexity of integration so you can focus on the insights:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-[#0a0e3d]">Advanced ETL & Pipelines</h4>
                    <p className="text-slate-600 text-sm">Automated, reliable extraction from 50+ marketing sources into a central warehouse.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-[#0a0e3d]">Data Blending & Modeling</h4>
                    <p className="text-slate-600 text-sm">Merging ad spend with CRM revenue data to calculate true ROAS and lifetime value.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-[#0a0e3d]">Strategic Visualization</h4>
                    <p className="text-slate-600 text-sm">Designing intuitive, executive-ready dashboards that communicate performance clearly and drive action.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl font-bold text-[#0a0e3d] mb-6 eb-garamond">
            Unlock Your Data's Potential
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 mb-5 sm:mb-6 md:mb-8">
            Transform your marketing data into a strategic asset for growth.
          </p>
          <Link href="/contact">
            <button className="px-8 py-4 bg-emerald-600 text-white rounded-lg font-bold text-lg hover:bg-emerald-700 transition-colors shadow-lg">
              Build Your Intelligence Platform
            </button>
          </Link>
        </div>
      </section>

      <RelatedContent items={dataRelatedItems} />
      <Footer />
    </div>
  );
}

function CheckCircleIcon({ className }: { className?: string }) {
  return (
    <svg 
      className={className} 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}
