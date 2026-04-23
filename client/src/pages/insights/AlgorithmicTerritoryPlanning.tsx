import React from 'react';
import ReadingProgress from '@/components/ReadingProgress';
import InlineTableOfContents from '@/components/InlineTableOfContents';
import { Link } from 'wouter';
import { ArrowLeft, Clock, Calendar, Tag, ArrowRight } from 'lucide-react';
import NewsletterSubscribe from '@/components/NewsletterSubscribe';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function AlgorithmicTerritoryPlanning() {
  return (
    <div className="min-h-screen bg-white">
      <ReadingProgress />
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-16 md:py-24">
        <div className="container max-w-4xl mx-auto px-4">
          <Link href="/capabilities/growth-marketing-sales/sales-excellence" className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-400 mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Sales Excellence
          </Link>
          
          <div className="flex flex-wrap gap-4 mb-6">
            <span className="inline-flex items-center gap-2 text-sm text-muted-foreground/50">
              <Tag className="w-4 h-4" />
              Sales Strategy
            </span>
            <span className="inline-flex items-center gap-2 text-sm text-muted-foreground/50">
              <Calendar className="w-4 h-4" />
              February 28, 2025
            </span>
            <span className="inline-flex items-center gap-2 text-sm text-muted-foreground/50">
              <Clock className="w-4 h-4" />
              7 min read
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-3 leading-tight">
            Algorithmic Territory Planning: Optimizing Coverage with Geospatial Data
          </h1>
          
          <p className="text-xl text-muted-foreground/50 font-light leading-relaxed">
            Territory planning is often an annual exercise in spreadsheet wrestling and political infighting. By applying geospatial algorithms and propensity modeling, we can turn it into a continuous optimization process.
          </p>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16">
        <div className="container max-w-3xl mx-auto px-4">
          {/* Featured Image */}
          <div className="aspect-video bg-slate-100 rounded-lg mb-12 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop" 
              alt="Geospatial Data Visualization" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <InlineTableOfContents />
            <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
              The goal of territory planning is simple: Equal Opportunity. Every rep should have a roughly equal shot at making their number. If territories are unbalanced, you get two bad outcomes: "Starvation" (reps quit because they can't hit quota) and "Gluttony" (reps hit quota easily and stop working).
            </p>
            <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
              Traditionally, territories were carved up by geography or simple firmographics (e.g., "Companies over $100M revenue in Texas"). This is a blunt instrument. It ignores the actual <em>propensity to buy</em> of the accounts in those patches.
            </p>

            <h2 className="text-3xl font-bold text-charcoal mt-12 mb-6">
              The Total Addressable Market (TAM) Graph
            </h2>
            
            <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
              We approach territory design by building a "TAM Graph." This is a comprehensive map of every potential buyer in your market, enriched with signals that indicate purchase intent.
            </p>

            <div className="bg-slate-50 border-l-4 border-blue-500 p-6 my-8">
              <h3 className="text-xl font-bold text-charcoal mb-4">Enrichment Signals</h3>
              <ul className="space-y-3 text-charcoal/80">
                <li><strong>Technographics:</strong> Do they use a competitor's product? Is that contract expiring soon?</li>
                <li><strong>Hiring Trends:</strong> Are they hiring for roles that use your product?</li>
                <li><strong>Funding Events:</strong> Did they just raise capital?</li>
                <li><strong>Intent Data:</strong> Are they researching your category on G2 or Capterra?</li>
              </ul>
            </div>

            <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
              By weighting these factors, we calculate a "TAM Score" for every account. We then use clustering algorithms to group these accounts into balanced territories that optimize for travel time (for field reps) or time zone (for inside reps).
            </p>

            <h2 className="text-3xl font-bold text-charcoal mt-12 mb-6">
              Dynamic Rebalancing
            </h2>
            
            <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
              The market doesn't stand still for 12 months, so why should your territories? Algorithmic planning allows for <strong>Dynamic Rebalancing</strong>.
            </p>
            <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
              If a rep leaves, or if a new vertical explodes, the algorithm can suggest a redistribution of accounts to maintain balance. This prevents "orphaned accounts" from going cold and ensures that your best leads are always being worked by someone.
            </p>

            <h2 className="text-3xl font-bold text-charcoal mt-12 mb-6">
              The Human Element
            </h2>
            
            <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
              Algorithms are great at optimization, but they don't understand relationships. A purely algorithmic approach might suggest moving a key account from Rep A to Rep B because it "fits the model," ignoring the fact that Rep A has a 5-year relationship with the CIO.
            </p>
            <p className="text-lg text-charcoal/80 leading-relaxed mb-8">
              That's why we advocate for a "Human-in-the-Loop" approach. The algorithm generates the <em>proposal</em>, but sales leadership makes the final <em>decision</em>. This combines the efficiency of machine learning with the nuance of human judgment.
            </p>
          </div>

          {/* CTA Section */}
          <div className="mt-16 p-8 bg-slate-900 rounded-lg text-white">
            <h3 className="text-2xl font-bold mb-4">Optimize your sales coverage</h3>
            <p className="text-muted-foreground/50 mb-6">
              NexDyne helps sales organizations build balanced, high-performance territories using advanced geospatial analytics.
            </p>
            <Link href="/contact">
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors">
                Start Planning
              </button>
            </Link>
          </div>

          {/* Author Info */}
          <div className="mt-12 pt-8 border-t border-slate-200">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-slate-200 rounded-full flex-shrink-0 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop" 
                  alt="Marcus Thorne" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-bold text-charcoal text-lg">Marcus Thorne</h4>
                <p className="text-primary font-medium text-sm mb-2">Partner, Sales Transformation</p>
                <p className="text-muted-foreground text-sm">
                  Marcus advises Fortune 500 technology companies on revenue architecture and sales engineering. He previously served as CRO for a $2B SaaS platform.
                </p>
              </div>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div className="mt-16">
            <NewsletterSubscribe />
          </div>

          {/* Related Posts */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-charcoal mb-8">Related Insights</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <Link href="/insights/ai-sales-forecasting">
                <div className="group cursor-pointer">
                  <div className="aspect-video bg-slate-200 rounded-lg mb-4 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop" 
                      alt="AI Sales Forecasting" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h4 className="font-bold text-lg group-hover:text-primary transition-colors">
                    The End of "Gut Feel" Forecasting
                  </h4>
                  <p className="text-muted-foreground text-sm mt-2">
                    How predictive AI is replacing manual commits and increasing forecast accuracy.
                  </p>
                  <div className="flex items-center text-primary font-medium text-sm mt-3 group-hover:translate-x-1 transition-transform">
                    Read Article <ArrowRight className="ml-1 w-3 h-3" />
                  </div>
                </div>
              </Link>
              <Link href="/insights/modern-sales-stack">
                <div className="group cursor-pointer">
                  <div className="aspect-video bg-slate-200 rounded-lg mb-4 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop" 
                      alt="Modern Sales Stack" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h4 className="font-bold text-lg group-hover:text-primary transition-colors">
                    Architecting the Modern Sales Stack
                  </h4>
                  <p className="text-muted-foreground text-sm mt-2">
                    Why tool consolidation is the new efficiency frontier for revenue leaders.
                  </p>
                  <div className="flex items-center text-primary font-medium text-sm mt-3 group-hover:translate-x-1 transition-transform">
                    Read Article <ArrowRight className="ml-1 w-3 h-3" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
}
