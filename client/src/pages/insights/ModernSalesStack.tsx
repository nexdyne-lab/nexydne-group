import React from 'react';
import ReadingProgress from '@/components/ReadingProgress';
import InlineTableOfContents from '@/components/InlineTableOfContents';
import { Link } from 'wouter';
import { ArrowLeft, Clock, Calendar, Tag, ArrowRight } from 'lucide-react';
import NewsletterSubscribe from '@/components/NewsletterSubscribe';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function ModernSalesStack() {
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
              Sales Technology
            </span>
            <span className="inline-flex items-center gap-2 text-sm text-muted-foreground/50">
              <Calendar className="w-4 h-4" />
              February 21, 2025
            </span>
            <span className="inline-flex items-center gap-2 text-sm text-muted-foreground/50">
              <Clock className="w-4 h-4" />
              6 min read
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-3 leading-tight">
            Architecting the Modern Sales Stack: Consolidation is the New Innovation
          </h1>
          
          <p className="text-xl text-muted-foreground/50 font-light leading-relaxed">
            The average sales organization uses 14 different tools. The result? Data silos, context switching, and "swivel chair" inefficiency. It's time to refactor the stack.
          </p>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16">
        <div className="container max-w-3xl mx-auto px-4">
          {/* Featured Image */}
          <div className="aspect-video bg-slate-100 rounded-lg mb-12 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop" 
              alt="Modern Sales Stack Architecture" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <InlineTableOfContents />
            <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
              For the past decade, the philosophy of sales technology was "best of breed." You bought the best dialer, the best email sequencer, the best conversation intelligence tool, and the best CPQ. Then you spent millions trying to glue them all together.
            </p>
            <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
              The result is a fragmented "Franken-stack" where data goes to die. Reps spend 20% of their time just navigating between tabs. Data doesn't sync correctly, leading to conflicting reports. And the "single source of truth" becomes a myth.
            </p>

            <h2 className="text-3xl font-bold text-charcoal mt-12 mb-6">
              The Platform Era
            </h2>
            
            <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
              We are entering the era of platform consolidation. The leading players (Salesforce, HubSpot, Microsoft) are absorbing point solutions into unified suites. But simply buying a suite isn't enough. You need to architect it correctly.
            </p>
            <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
              A modern sales stack should be designed around a <strong>Unified Data Model</strong>. Every interaction—whether it's a phone call, an email, a LinkedIn message, or a contract view—should write to a common object model. This allows for:
            </p>

            <div className="bg-slate-50 border-l-4 border-blue-500 p-6 my-8">
              <h3 className="text-xl font-bold text-charcoal mb-4">Benefits of Unified Architecture</h3>
              <ul className="space-y-3 text-charcoal/80">
                <li><strong>Holistic Attribution:</strong> Understanding the true influence of every touchpoint.</li>
                <li><strong>Seamless Automation:</strong> Triggering workflows across channels without API friction.</li>
                <li><strong>AI Readiness:</strong> You can't train models on fragmented data. A unified layer is a prerequisite for AI.</li>
                <li><strong>Reduced TCO:</strong> Eliminating redundant licenses and maintenance overhead.</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-charcoal mt-12 mb-6">
              The "Zero-Entry" CRM
            </h2>
            
            <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
              The ultimate goal of stack architecture is the "Zero-Entry" CRM. In this model, the CRM is no longer a data entry form for reps; it is a passive listener.
            </p>
            
            <ul className="list-disc pl-6 space-y-2 text-lg text-charcoal/80 mb-6">
              <li><strong>Email/Calendar:</strong> Automatically synced.</li>
              <li><strong>Calls:</strong> Automatically transcribed and logged.</li>
              <li><strong>Contacts:</strong> Automatically enriched and updated.</li>
            </ul>
            
            <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
              When the CRM becomes a system of record that populates itself, rep adoption ceases to be an issue. The tool becomes a utility, not a burden.
            </p>

            <h2 className="text-3xl font-bold text-charcoal mt-12 mb-6">
              Technical Debt in the Sales Org
            </h2>
            
            <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
              Just like engineering teams, sales ops teams accumulate technical debt. Custom fields that no one uses. Workflow rules that fire incorrectly. Legacy integrations that break silently.
            </p>
            <p className="text-lg text-charcoal/80 leading-relaxed mb-8">
              We recommend a quarterly "Stack Refactor." Audit your usage logs. Deprecate unused features. Simplify your schema. A lean stack is a fast stack. And in sales, speed is everything.
            </p>
          </div>

          {/* CTA Section */}
          <div className="mt-16 p-8 bg-slate-900 rounded-lg text-white">
            <h3 className="text-2xl font-bold mb-4">Is your sales stack slowing you down?</h3>
            <p className="text-muted-foreground/50 mb-6">
              NexDyne's RevOps architects can audit your current technology and design a unified, high-velocity sales engine.
            </p>
            <Link href="/contact">
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors">
                Request a Stack Audit
              </button>
            </Link>
          </div>

          {/* Author Info */}
          <div className="mt-12 pt-8 border-t border-slate-200">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-slate-200 rounded-full flex-shrink-0 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop" 
                  alt="Elena Rodriguez" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-bold text-charcoal text-lg">Elena Rodriguez</h4>
                <p className="text-primary font-medium text-sm mb-2">Associate Partner, RevOps</p>
                <p className="text-muted-foreground text-sm">
                  Elena leads the Revenue Operations practice at NexDyne. She specializes in CRM architecture and has overseen stack migrations for 50+ enterprise clients.
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
              <Link href="/insights/algorithmic-territory-planning">
                <div className="group cursor-pointer">
                  <div className="aspect-video bg-slate-200 rounded-lg mb-4 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop" 
                      alt="Algorithmic Territory Planning" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h4 className="font-bold text-lg group-hover:text-primary transition-colors">
                    Algorithmic Territory Planning
                  </h4>
                  <p className="text-muted-foreground text-sm mt-2">
                    Using geospatial data and propensity modeling to optimize sales coverage.
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
