import React from 'react';
import { Link } from 'wouter';
import { ArrowLeft, TrendingUp, DollarSign, Target, PieChart, BarChart3, Calculator } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { RelatedContent } from "@/components/RelatedContent";
import { dataRelatedItems } from "@/data/related-content";

export default function MarketingROI() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-base text-white pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20">
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-purple-900 to-transparent"></div>
          <div className="absolute top-20 left-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        </div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="mb-5 sm:mb-6 md:mb-8">
            <Link href="/capabilities/growth-marketing-sales/marketing-operations" className="inline-flex items-center text-purple-300 hover:text-white transition-colors mb-6">
              <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
              Back to Marketing Operations
            </Link>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 leading-tight eb-garamond">
              Marketing Return on Investment (MROI)
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-purple-100 max-w-3xl font-light leading-relaxed">
              Quantify your impact. We implement advanced attribution models and financial frameworks that demonstrate the true economic value of every marketing dollar.
            </p>
          </div>
        </div>
      </section>

      {/* The Challenge Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <h2 className="text-3xl font-bold text-base mb-6 eb-garamond">
              Precision in Performance Measurement
            </h2>
            <p className="mb-6 text-xl font-light text-charcoal">
              In a complex digital ecosystem, the path to purchase is rarely linear. Understanding the contribution of each touchpoint—from the first impression to the final conversion—is critical for strategic resource allocation.
            </p>
            <p className="mb-5 sm:mb-6 md:mb-8">
              We bring financial rigor to marketing measurement. By deploying sophisticated attribution models and connecting media spend directly to revenue outcomes, we provide the clarity needed to scale high-performing channels and optimize your investment portfolio.
            </p>
          </div>

          {/* Key Metrics Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:p-5 md:p-6 mt-12">
            <div className="bg-purple-50 p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl border border-purple-100">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <DollarSign className="w-4 h-4 sm:w-5 sm:h-5 text-purple-700" />
              </div>
              <h3 className="font-bold text-base mb-2">Customer Acquisition Cost (CAC)</h3>
              <p className="text-sm text-muted-foreground">Granular tracking of acquisition costs by channel, campaign, and segment to ensure efficient growth.</p>
            </div>
            <div className="bg-purple-50 p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl border border-purple-100">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-purple-700" />
              </div>
              <h3 className="font-bold text-base mb-2">Customer Lifetime Value (CLV)</h3>
              <p className="text-sm text-muted-foreground">Modeling long-term customer value to inform strategic decisions on acquisition spend and retention.</p>
            </div>
            <div className="bg-purple-50 p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl border border-purple-100">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <Target className="w-4 h-4 sm:w-5 sm:h-5 text-purple-700" />
              </div>
              <h3 className="font-bold text-base mb-2">Return on Ad Spend (ROAS)</h3>
              <p className="text-sm text-muted-foreground">Real-time measurement of direct revenue impact from paid media to maximize campaign efficiency.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl sm:rounded-2xl transform -rotate-3 opacity-20"></div>
                <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-xl relative z-10 border border-slate-100">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg border border-slate-100">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <PieChart className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-charcoal">Multi-Touch Attribution</h4>
                        <p className="text-xs text-muted-foreground">Linear, Time Decay, U-Shaped Models</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg border border-slate-100">
                      <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Calculator className="w-4 h-4 sm:w-5 sm:h-5 text-secondary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-charcoal">Media Mix Modeling (MMM)</h4>
                        <p className="text-xs text-muted-foreground">Statistical analysis for offline & online impact</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg border border-slate-100">
                      <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-charcoal">Forecasting & Budgeting</h4>
                        <p className="text-xs text-muted-foreground">Predictive analytics for future spend allocation</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold text-base mb-6 eb-garamond">
                Strategic Financial Frameworks
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                We go beyond reporting numbers to provide the financial context necessary for executive decision-making.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-base">Advanced Attribution Modeling</h4>
                    <p className="text-muted-foreground text-sm">Moving beyond "last-click" to understand the full influence of your marketing mix across the entire journey.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-base">Dynamic Budget Optimization</h4>
                    <p className="text-muted-foreground text-sm">Agile allocation of spend to the highest-performing channels and campaigns to maximize returns.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-base">Predictive Performance Forecasting</h4>
                    <p className="text-muted-foreground text-sm">Leveraging historical data to model future outcomes and set ambitious, achievable targets.</p>
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
          <h2 className="text-3xl font-bold text-base mb-6 eb-garamond">
            Maximize Your Marketing Impact
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-5 sm:mb-6 md:mb-8">
            Gain the clarity to invest with confidence and drive measurable growth.
          </p>
          <Link href="/contact">
            <button className="px-8 py-4 bg-purple-600 text-white rounded-lg font-bold text-lg hover:bg-purple-700 transition-colors shadow-lg">
              Start Measuring ROI
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
