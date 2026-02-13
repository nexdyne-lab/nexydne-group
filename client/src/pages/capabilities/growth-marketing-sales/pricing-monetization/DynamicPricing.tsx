import React from 'react';
import { Link } from 'wouter';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { RelatedContent } from "@/components/RelatedContent";
import { dataRelatedItems } from "@/data/related-content";

export default function DynamicPricing() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100">
      <Navigation />

      {/* Hero Section */}
      <header className="pt-16 sm:pt-20 pb-16 border-b border-slate-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="text-sm font-medium text-slate-500 mb-6 uppercase tracking-wider">
              <Link href="/capabilities/growth-marketing-sales/pricing-monetization" className="hover:text-blue-900 transition-colors">
                Pricing & Monetization
              </Link>
              <span className="mx-2">/</span>
              <span className="text-blue-600">Dynamic Pricing Models</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-slate-900 mb-2 sm:mb-3 md:mb-4 leading-[1.1] eb-garamond">
              Dynamic Pricing Models
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-slate-800 leading-relaxed max-w-3xl font-light font-serif">
              Move beyond static price lists. We implement algorithmic pricing engines that adapt to market conditions in real-time, maximizing yield for every transaction.
            </p>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 pt-16 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16">
          
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-16">
            
            {/* Introduction */}
            <section className="prose prose-lg prose-slate max-w-none">
              <p className="text-lg leading-relaxed text-slate-600">
                In a digital economy, the "right" price is a moving target. Supply fluctuates, demand spikes, and competitors adjust their strategies daily. Static pricing models simply cannot keep pace, resulting in lost margin during peak demand and lost volume during lulls.
              </p>
              <p className="text-lg leading-relaxed text-slate-600 mt-6">
                NexDyne helps you implement dynamic pricing strategies that are both profitable and fair. We build transparent, rule-based algorithms that respond to specific market signals—inventory levels, time of day, customer segment, and competitor pricing—ensuring you capture optimal value without alienating your customers.
              </p>
            </section>

            <Separator className="bg-slate-200" />

            {/* Key Benefits */}
            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-5 sm:mb-6 md:mb-8 eb-garamond">The Value of Agility</h2>
              <div className="grid md:grid-cols-2 gap-4 sm:p-6 md:p-8">
                <div className="bg-slate-50 p-4 sm:p-6 md:p-8 rounded-sm border border-slate-100">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Maximize Yield</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Capture the surplus value during high-demand periods by automatically adjusting prices upward when willingness-to-pay is highest.
                  </p>
                </div>
                <div className="bg-slate-50 p-4 sm:p-6 md:p-8 rounded-sm border border-slate-100">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Inventory Management</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Use price as a lever to clear excess stock or ration scarce inventory, optimizing your working capital and storage costs.
                  </p>
                </div>
                <div className="bg-slate-50 p-4 sm:p-6 md:p-8 rounded-sm border border-slate-100">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Competitive Response</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Automatically react to competitor price moves within defined guardrails, ensuring you never lose a sale due to a minor price difference.
                  </p>
                </div>
                <div className="bg-slate-50 p-4 sm:p-6 md:p-8 rounded-sm border border-slate-100">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Operational Efficiency</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Eliminate the manual effort of updating price lists. Our systems integrate directly with your ERP and e-commerce platforms for seamless execution.
                  </p>
                </div>
              </div>
            </section>

            <Separator className="bg-slate-200" />

            {/* Methodology */}
            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-5 sm:mb-6 md:mb-8 eb-garamond">Our Approach</h2>
              <div className="space-y-8">
                <div className="flex gap-4 sm:p-5 md:p-6">
                  <div className="w-12 h-12 bg-blue-50 flex items-center justify-center rounded-full flex-shrink-0 text-blue-600 font-bold text-xl font-serif">1</div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Data Ingestion & Analysis</h3>
                    <p className="text-slate-600 leading-relaxed">
                      We aggregate historical transaction data, competitor pricing, and external market signals to build a baseline model of price elasticity for your products.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 sm:p-5 md:p-6">
                  <div className="w-12 h-12 bg-blue-50 flex items-center justify-center rounded-full flex-shrink-0 text-blue-600 font-bold text-xl font-serif">2</div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Algorithm Design & Guardrails</h3>
                    <p className="text-slate-600 leading-relaxed">
                      We design the pricing logic, setting strict floor and ceiling prices to protect your brand. We define the specific triggers (e.g., "inventory &lt; 10 units") that initiate price changes.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 sm:p-5 md:p-6">
                  <div className="w-12 h-12 bg-blue-50 flex items-center justify-center rounded-full flex-shrink-0 text-blue-600 font-bold text-xl font-serif">3</div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Pilot & A/B Testing</h3>
                    <p className="text-slate-600 leading-relaxed">
                      We deploy the model on a subset of products or regions. We rigorously test the impact on conversion rates and margin before a full rollout.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 sm:p-5 md:p-6">
                  <div className="w-12 h-12 bg-blue-50 flex items-center justify-center rounded-full flex-shrink-0 text-blue-600 font-bold text-xl font-serif">4</div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Full Integration & Monitoring</h3>
                    <p className="text-slate-600 leading-relaxed">
                      We integrate the engine with your sales channels. Our dashboards provide real-time visibility into pricing actions and their financial impact.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <Separator className="bg-slate-200" />

            {/* Case Study */}
            <section className="bg-slate-900 text-white p-10 rounded-sm">
              <div className="flex flex-col md:flex-row gap-4 sm:p-6 md:p-8 items-start">
                <div className="flex-1">
                  <div className="text-blue-400 font-bold tracking-wider text-xs uppercase mb-4">Case Study</div>
                  <h3 className="text-2xl font-serif font-bold mb-4">Logistics Provider Optimizes Margins</h3>
                  <p className="text-slate-300 leading-relaxed mb-6">
                    A regional freight carrier was struggling with volatile fuel costs and inconsistent demand. We implemented a dynamic surcharge model that updated pricing daily based on fuel indices and route capacity.
                  </p>
                  <div className="grid grid-cols-2 gap-4 sm:p-5 md:p-6 border-t border-slate-800 pt-6">
                    <div>
                      <div className="text-3xl font-bold text-white mb-1">12%</div>
                      <div className="text-sm text-slate-400">Margin Improvement</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-white mb-1">98%</div>
                      <div className="text-sm text-slate-400">Fleet Utilization</div>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/3">
                  <img 
                    src="/images/case-study-logistics.jpg" 
                    alt="Logistics Case Study" 
                    className="w-full h-auto rounded-sm grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>
            </section>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-12">
            
            {/* Contact Card */}
            <div className="bg-blue-50 p-4 sm:p-6 md:p-8 border border-blue-100">
              <h3 className="text-lg font-bold text-blue-900 mb-4">Ready to optimize your pricing?</h3>
              <p className="text-blue-800 mb-6 leading-relaxed">
                Schedule a consultation with our pricing strategy team to discuss your specific challenges.
              </p>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                Contact Us
              </Button>
            </div>

            {/* Related Services */}
            <div className="bg-white border border-slate-200 p-4 sm:p-6 md:p-8">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-6">Related Services</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="/capabilities/growth-marketing-sales/pricing-monetization/packaging-bundling" className="text-slate-600 hover:text-blue-700 transition-colors flex items-center gap-2">
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-blue-500" />
                    Packaging & Bundling
                  </Link>
                </li>
                <li>
                  <Link href="/capabilities/growth-marketing-sales/pricing-monetization/discount-optimization" className="text-slate-600 hover:text-blue-700 transition-colors flex items-center gap-2">
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-blue-500" />
                    Discount Optimization
                  </Link>
                </li>
              </ul>
            </div>

            {/* Latest Insights Sidebar */}
            <div>
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-6">Related Insights</h3>
              <div className="space-y-6">
                <Link href="/insights/algorithmic-pricing-smes">
                  <div className="group cursor-pointer">
                    <h4 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">
                      Algorithmic Pricing for SMEs
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed mb-2">
                      How mid-market companies can leverage dynamic pricing tech.
                    </p>
                    <div className="text-blue-600 text-sm font-medium flex items-center">
                      Read more <ArrowRight className="w-3 h-3 ml-1" />
                    </div>
                  </div>
                </Link>
                <Separator className="bg-slate-100" />
                <Link href="/insights/psychology-of-value">
                  <div className="group cursor-pointer">
                    <h4 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">
                      The Psychology of Value
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed mb-2">
                      Shifting from cost-plus to value-based pricing models.
                    </p>
                    <div className="text-blue-600 text-sm font-medium flex items-center">
                      Read more <ArrowRight className="w-3 h-3 ml-1" />
                    </div>
                  </div>
                </Link>
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
