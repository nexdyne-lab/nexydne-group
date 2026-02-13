import React from 'react';
import { ArrowRight, Layers, Activity, ShieldCheck, Cpu } from 'lucide-react';
import { Link } from 'wouter';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { RelatedContent } from "@/components/RelatedContent";
import { dataRelatedItems } from "@/data/related-content";

const StackOrchestration = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-[#0a0e3d]">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0e3d] via-[#1a2b5c] to-[#0a0e3d]"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/50 border border-blue-700/50 text-blue-300 text-sm font-medium mb-6">
              <Layers className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>MarTech & Stack Architecture</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-3 leading-tight eb-garamond">
              Stack Orchestration & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#3385ff]">
                Ecosystem Design
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mb-10 leading-relaxed">
              We move beyond simple "tool selection" to architect a cohesive data topology. 
              We audit for redundancy, eliminate latency, and design a streamlined stack 
              where every component has a distinct, non-overlapping role in your growth engine.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <a className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#00d4ff] text-[#0a0e3d] font-bold text-lg hover:bg-[#3385ff] hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(0,212,255,0.3)]">
                  Request Stack Audit
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The Engineering Approach */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-6 eb-garamond">
                Architecting for <span className="text-blue-600">Data Fluidity</span>
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                A marketing stack is not a collection of tools; it is a distributed system. 
                When tools are added ad-hoc, the result is "Shadow IT," data silos, and 
                fragile integrations.
              </p>
              <p className="text-lg text-slate-600 mb-5 sm:mb-6 md:mb-8 leading-relaxed">
                Our approach applies systems engineering principles to your MarTech stack. 
                We map the data topology, define the system of record for each data object, 
                and ensure interoperability through rigorous API assessment. The result is 
                a stack that scales linearly with your business, not exponentially in complexity.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-blue-50 text-blue-600 mt-1">
                    <Activity className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">Latency Reduction</h3>
                    <p className="text-slate-600">Optimizing data transit times between systems to enable real-time personalization.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-blue-50 text-blue-600 mt-1">
                    <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">Governance by Design</h3>
                    <p className="text-slate-600">Embedding compliance and security protocols directly into the architecture.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-blue-50 text-blue-600 mt-1">
                    <Cpu className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">Vendor Interoperability</h3>
                    <p className="text-slate-600">Selecting best-of-breed tools that adhere to open standards and API-first principles.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-slate-50 rounded-3xl transform rotate-3"></div>
              <div className="relative bg-white p-4 sm:p-6 md:p-8 rounded-3xl shadow-xl border border-slate-100">
                <div className="space-y-8">
                  <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                    <h3 className="font-bold text-slate-900">Stack Health Assessment</h3>
                    <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold">OPTIMIZED</span>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between text-sm font-medium mb-2">
                        <span className="text-slate-600">Data Fluidity Score</span>
                        <span className="text-blue-600">94/100</span>
                      </div>
                      <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-600 w-[94%] rounded-full"></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm font-medium mb-2">
                        <span className="text-slate-600">Redundancy Elimination</span>
                        <span className="text-blue-600">100%</span>
                      </div>
                      <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-600 w-full rounded-full"></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm font-medium mb-2">
                        <span className="text-slate-600">API Coverage</span>
                        <span className="text-blue-600">98%</span>
                      </div>
                      <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-600 w-[98%] rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-6 border-t border-slate-100">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 rounded-lg sm:rounded-xl bg-slate-50 border border-slate-100 text-center">
                        <div className="text-2xl font-bold text-slate-900 mb-1">35%</div>
                        <div className="text-xs text-slate-500 uppercase tracking-wider">Cost Savings</div>
                      </div>
                      <div className="p-4 rounded-lg sm:rounded-xl bg-slate-50 border border-slate-100 text-center">
                        <div className="text-2xl font-bold text-slate-900 mb-1">3x</div>
                        <div className="text-xs text-slate-500 uppercase tracking-wider">Deployment Speed</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-8 md:mb-12 gap-4 sm:p-5 md:p-6">
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-4 eb-garamond">
                Impact Stories
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl">
                See how we've helped organizations transform their MarTech stacks into scalable growth engines.
              </p>
            </div>
            <Link href="/cases">
              <a className="inline-flex items-center font-bold text-blue-600 hover:text-blue-700 transition-colors">
                View all cases <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:p-6 md:p-8">
            {[
              {
                title: "Global Retailer Data Unification",
                category: "Retail",
                stat: "360°",
                statLabel: "Customer View",
                desc: "Unified customer data across 50+ touchpoints into a single source of truth.",
                link: "/cases/retail-omnichannel"
              },
              {
                title: "Fintech Stack Modernization",
                category: "Fintech",
                stat: "40%",
                statLabel: "Cost Reduction",
                desc: "Consolidated redundant marketing tools and streamlined data flows.",
                link: "/cases/fintech-data-pipeline"
              },
              {
                title: "SaaS Analytics Architecture",
                category: "SaaS",
                stat: "Real-time",
                statLabel: "Data Availability",
                desc: "Re-architected data stack to enable real-time product usage analytics.",
                link: "/cases/saas-product-analytics"
              }
            ].map((story, index) => (
              <Link key={index} href={story.link}>
                <a className="group block h-full bg-slate-50 rounded-xl sm:rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 border border-slate-100">
                  <div className="p-4 sm:p-6 md:p-8 h-full flex flex-col">
                    <div className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-4">
                      {story.category}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {story.title}
                    </h3>
                    <p className="text-slate-600 mb-5 sm:mb-6 md:mb-8 flex-grow">
                      {story.desc}
                    </p>
                    <div className="pt-6 border-t border-slate-200">
                      <div className="text-3xl font-bold text-slate-900 mb-1">
                        {story.stat}
                      </div>
                      <div className="text-sm text-slate-500">
                        {story.statLabel}
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-6 eb-garamond">
              Our Orchestration Methodology
            </h2>
            <p className="text-lg text-slate-600">
              A rigorous, four-phase process to transform your technology stack from a liability into a competitive asset.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-4 sm:p-6 md:p-8">
            {[
              {
                step: "01",
                title: "Audit & Map",
                desc: "We visualize your current data topology, identifying silos, redundancy, and integration break points."
              },
              {
                step: "02",
                title: "Rationalize",
                desc: "We retire redundant tools and consolidate functions, reducing TCO while simplifying the architecture."
              },
              {
                step: "03",
                title: "Architect",
                desc: "We design the ideal state, selecting best-of-breed tools that support API-first integration."
              },
              {
                step: "04",
                title: "Integrate",
                desc: "We deploy robust middleware and event-driven workflows to ensure seamless data fluidity."
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all">
                <div className="text-4xl font-bold text-blue-100 mb-4">{item.step}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#0a0e3d] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-5 sm:mb-6 md:mb-8 eb-garamond">
            Ready to orchestrate your growth engine?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-blue-200 mb-10 max-w-2xl mx-auto">
            Stop paying for shelfware and broken integrations. Let's build a stack that actually works.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact">
              <a className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#00d4ff] text-[#0a0e3d] font-bold text-lg hover:bg-[#3385ff] hover:text-white transition-all duration-300">
                Start Your Audit
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </Link>
          </div>
        </div>
      </section>

      <RelatedContent items={dataRelatedItems} />
      <Footer />
    </div>
  );
};

export default StackOrchestration;
