import React from 'react';
import { ArrowRight, Database, FileCode, GitBranch, Lock } from 'lucide-react';
import { Link } from 'wouter';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { RelatedContent } from "@/components/RelatedContent";
import { dataRelatedItems } from "@/data/related-content";

const SemanticInfrastructure = () => {
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
              <Database className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>MarTech & Stack Architecture</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-3 leading-tight eb-garamond">
              Semantic Infrastructure & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">
                Data Governance
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground/50 max-w-2xl mb-10 leading-relaxed">
              We treat "meaning" as infrastructure. We design the semantic layer—naming conventions, 
              tagging schemas, and taxonomies—that ensures data integrity across your entire ecosystem.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <a className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-secondary text-base font-bold text-lg hover:bg-primary hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(0,212,255,0.3)]">
                  Standardize Your Data
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
                Data Integrity Requires <span className="text-blue-600">Strict Governance</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Without a semantic layer, your data is just noise. Different teams use different 
                naming conventions, creating "data dialects" that make cross-platform analysis impossible.
              </p>
              <p className="text-lg text-muted-foreground mb-5 sm:mb-6 md:mb-8 leading-relaxed">
                We implement Semantic Infrastructure as Code. We define your taxonomy, 
                enforce it through validation rules, and version control your data schemas. 
                This ensures that a "Lead" in your CRM means exactly the same thing as a "Lead" 
                in your analytics platform.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-blue-50 text-blue-600 mt-1">
                    <FileCode className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-charcoal">Taxonomy Governance</h3>
                    <p className="text-muted-foreground">Standardized naming conventions for campaigns, events, and user properties.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-blue-50 text-blue-600 mt-1">
                    <GitBranch className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-charcoal">Schema Versioning</h3>
                    <p className="text-muted-foreground">Managing changes to data structures over time to prevent breaking changes.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-blue-50 text-blue-600 mt-1">
                    <Lock className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-charcoal">Data Validation</h3>
                    <p className="text-muted-foreground">Automated checks to ensure incoming data adheres to defined schemas.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-slate-50 rounded-3xl transform -rotate-3"></div>
              <div className="relative bg-white p-4 sm:p-6 md:p-8 rounded-3xl shadow-xl border border-slate-100">
                <div className="space-y-8">
                  <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                    <h3 className="font-bold text-charcoal">Data Quality Monitor</h3>
                    <span className="px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-bold">ACTIVE</span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 sm:p-5 md:p-6">
                    <div className="p-4 bg-slate-50 rounded-lg sm:rounded-xl border border-slate-100">
                      <div className="text-sm text-muted-foreground mb-1">Schema Compliance</div>
                      <div className="text-2xl font-bold text-charcoal">99.8%</div>
                      <div className="text-xs text-secondary mt-1">↑ 12% vs last month</div>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-lg sm:rounded-xl border border-slate-100">
                      <div className="text-sm text-muted-foreground mb-1">Unmapped Events</div>
                      <div className="text-2xl font-bold text-charcoal">0.02%</div>
                      <div className="text-xs text-secondary mt-1">↓ 5% vs last month</div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm p-3 bg-secondary/10 rounded-lg border border-green-100">
                      <span className="font-medium text-charcoal">Event: user_signup</span>
                      <span className="text-secondary">Valid</span>
                    </div>
                    <div className="flex items-center justify-between text-sm p-3 bg-secondary/10 rounded-lg border border-green-100">
                      <span className="font-medium text-charcoal">Prop: plan_tier</span>
                      <span className="text-secondary">Valid</span>
                    </div>
                    <div className="flex items-center justify-between text-sm p-3 bg-secondary/10 rounded-lg border border-green-100">
                      <span className="font-medium text-charcoal">Prop: revenue_amt</span>
                      <span className="text-secondary">Valid</span>
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
                See how we've helped organizations transform their data quality through rigorous semantic governance.
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
                title: "Healthcare Data Standardization",
                category: "Healthcare",
                stat: "100%",
                statLabel: "HIPAA Compliance",
                desc: "Implemented strict data governance and semantic layer for patient data across systems.",
                link: "/cases/healthcare-data-platform"
              },
              {
                title: "Media Content Taxonomy",
                category: "Media",
                stat: "5x",
                statLabel: "Search Efficiency",
                desc: "Designed a unified content taxonomy to improve asset discoverability and reuse.",
                link: "/cases/media-company-dam"
              },
              {
                title: "Financial Data Quality",
                category: "Finance",
                stat: "99.9%",
                statLabel: "Data Accuracy",
                desc: "Established automated validation rules to eliminate data errors in reporting.",
                link: "/cases/financial-data-quality"
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
              Semantic Layer Implementation
            </h2>
            <p className="text-lg text-muted-foreground">
              We build a shared language for your data, ensuring consistency from ingestion to insight.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:p-6 md:p-8">
            {[
              {
                title: "Define",
                desc: "We collaborate with stakeholders to create a unified data dictionary and tracking plan."
              },
              {
                title: "Instrument",
                desc: "We implement tracking code and validation logic that enforces the defined schema at the source."
              },
              {
                title: "Govern",
                desc: "We establish automated monitoring and alerting to detect and block schema violations in real-time."
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
            Stop guessing what your data means.
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-blue-200 mb-10 max-w-2xl mx-auto">
            Build a semantic foundation that makes your data trustworthy, actionable, and clear.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact">
              <a className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-secondary text-base font-bold text-lg hover:bg-primary hover:text-white transition-all duration-300">
                Design Your Schema
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

export default SemanticInfrastructure;
