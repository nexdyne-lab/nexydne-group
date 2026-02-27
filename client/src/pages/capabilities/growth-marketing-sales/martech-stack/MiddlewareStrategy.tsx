import React from 'react';
import { ArrowRight, Network, Server, Zap, RefreshCw } from 'lucide-react';
import { Link } from 'wouter';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { RelatedContent } from "@/components/RelatedContent";
import { dataRelatedItems } from "@/data/related-content";

const MiddlewareStrategy = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-charcoal">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-base">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-base via-base to-base"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/50 border border-blue-700/50 text-blue-300 text-sm font-medium mb-6">
              <Network className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>MarTech & Stack Architecture</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-3 leading-tight eb-garamond">
              Middleware Strategy & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">
                Integration Patterns
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground/50 max-w-2xl mb-10 leading-relaxed">
              We eliminate fragile point-to-point integrations that cause Lead Routing Conflicts. 
              We implement robust middleware solutions with Idempotency Keys to prevent duplicate 
              data and ensure system resilience.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <a className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-secondary text-base font-bold text-lg hover:bg-primary hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(0,212,255,0.3)]">
                  Architect Your Integration
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
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-charcoal mb-6 eb-garamond">
                Decoupling for <span className="text-blue-600">Resilience</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Directly connecting your CRM to your Marketing Automation Platform creates a 
                tightly coupled system where a failure in one tool cascades to others. 
                It also creates "spaghetti code" integrations that are impossible to debug.
              </p>
              <p className="text-lg text-muted-foreground mb-5 sm:mb-6 md:mb-8 leading-relaxed">
                We advocate for a middleware-centric architecture. By using an integration layer 
                (iPaaS, CDP, or custom middleware), we decouple your systems. This allows for 
                data transformation, error handling, and queuing, ensuring that your stack 
                remains stable even when individual components fail.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-blue-50 text-blue-600 mt-1">
                    <Server className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-charcoal">API-First Architecture</h3>
                    <p className="text-muted-foreground">Designing systems where every function is accessible via robust, documented APIs.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-blue-50 text-blue-600 mt-1">
                    <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-charcoal">Event-Driven Workflows</h3>
                    <p className="text-muted-foreground">Triggering actions based on real-time events rather than batch processing.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-blue-50 text-blue-600 mt-1">
                    <RefreshCw className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-charcoal">Idempotency & Deduplication</h3>
                    <p className="text-muted-foreground">Ensuring that retrying a failed operation doesn't result in duplicate records.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-slate-50 rounded-3xl transform rotate-3"></div>
              <div className="relative bg-white p-4 sm:p-6 md:p-8 rounded-3xl shadow-xl border border-slate-100">
                <div className="space-y-8">
                  <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                    <h3 className="font-bold text-charcoal">Integration Health</h3>
                    <span className="px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-bold">HEALTHY</span>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-slate-50 rounded-lg sm:rounded-xl border border-slate-100 flex justify-between items-center">
                      <div>
                        <div className="text-sm font-bold text-charcoal">API Uptime</div>
                        <div className="text-xs text-muted-foreground">Last 30 days</div>
                      </div>
                      <div className="text-xl font-bold text-secondary">99.99%</div>
                    </div>
                    
                    <div className="p-4 bg-slate-50 rounded-lg sm:rounded-xl border border-slate-100 flex justify-between items-center">
                      <div>
                        <div className="text-sm font-bold text-charcoal">Sync Latency</div>
                        <div className="text-xs text-muted-foreground">Average</div>
                      </div>
                      <div className="text-xl font-bold text-blue-600">120ms</div>
                    </div>
                    
                    <div className="p-4 bg-slate-50 rounded-lg sm:rounded-xl border border-slate-100 flex justify-between items-center">
                      <div>
                        <div className="text-sm font-bold text-charcoal">Error Rate</div>
                        <div className="text-xs text-muted-foreground">Failed requests</div>
                      </div>
                      <div className="text-xl font-bold text-secondary">0.01%</div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <div className="text-xs font-medium text-muted-foreground mb-2">RECENT EVENTS</div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <div className="w-2 h-2 rounded-full bg-secondary/100"></div>
                        <span>Lead sync to CRM successful (240ms)</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <div className="w-2 h-2 rounded-full bg-secondary/100"></div>
                        <span>Order data pushed to Warehouse (180ms)</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <div className="w-2 h-2 rounded-full bg-secondary/100"></div>
                        <span>Email event processed (95ms)</span>
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
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-charcoal mb-4 eb-garamond">
                Impact Stories
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                See how we've helped organizations build resilient, event-driven architectures that scale.
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
                title: "Logistics API Integration",
                category: "Logistics",
                stat: "200ms",
                statLabel: "Sync Latency",
                desc: "Built a custom middleware layer to sync inventory data across 3 global warehouses in real-time.",
                link: "/cases/logistics-tracking-app"
              },
              {
                title: "Banking Core Modernization",
                category: "Banking",
                stat: "Zero",
                statLabel: "Downtime",
                desc: "Decoupled legacy core banking systems from digital channels using an event-driven architecture.",
                link: "/cases/bank-core-modernization"
              },
              {
                title: "Insurance Claims Automation",
                category: "Insurance",
                stat: "85%",
                statLabel: "Faster Processing",
                desc: "Automated claims routing between CRM and policy systems using robust API integrations.",
                link: "/cases/insurance-claims-portal"
              }
            ].map((story, index) => (
              <Link key={index} href={story.link}>
                <a className="group block h-full bg-slate-50 rounded-xl sm:rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 border border-slate-100">
                  <div className="p-4 sm:p-6 md:p-8 h-full flex flex-col">
                    <div className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-4">
                      {story.category}
                    </div>
                    <h3 className="text-xl font-bold text-charcoal mb-3 group-hover:text-blue-600 transition-colors">
                      {story.title}
                    </h3>
                    <p className="text-muted-foreground mb-5 sm:mb-6 md:mb-8 flex-grow">
                      {story.desc}
                    </p>
                    <div className="pt-6 border-t border-slate-200">
                      <div className="text-3xl font-bold text-charcoal mb-1">
                        {story.stat}
                      </div>
                      <div className="text-sm text-muted-foreground">
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
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-charcoal mb-6 eb-garamond">
              Integration Patterns We Deploy
            </h2>
            <p className="text-lg text-muted-foreground">
              We select the right architectural pattern for the specific data requirement, avoiding "one size fits all" solutions.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:p-6 md:p-8">
            {[
              {
                title: "Real-Time Event Streaming",
                desc: "For high-volume, time-sensitive data like user behavior and website interactions."
              },
              {
                title: "Batch ETL/ELT",
                desc: "For heavy data lifting, historical analysis, and warehouse loading where immediacy is less critical."
              },
              {
                title: "Request-Response APIs",
                desc: "For synchronous operations where immediate confirmation is required, such as user authentication."
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-blue-50 rounded-lg sm:rounded-xl flex items-center justify-center text-blue-600 mb-6 font-bold text-base sm:text-lg md:text-xl">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-base relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-5 sm:mb-6 md:mb-8 eb-garamond">
            Build a resilient data backbone.
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-blue-200 mb-10 max-w-2xl mx-auto">
            Connect your tools with engineering rigor. Ensure data flows reliably, securely, and instantly.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact">
              <a className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-secondary text-base font-bold text-lg hover:bg-primary hover:text-white transition-all duration-300">
                Discuss Your Integration Strategy
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

export default MiddlewareStrategy;
