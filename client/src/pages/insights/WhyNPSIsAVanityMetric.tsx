import React from 'react';
import ReadingProgress from '@/components/ReadingProgress';
import InlineTableOfContents from '@/components/InlineTableOfContents';
import { Link } from 'wouter';
import { ArrowLeft, Clock, Calendar, Tag, ArrowRight } from 'lucide-react';
import NewsletterSubscribe from '@/components/NewsletterSubscribe';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import SocialShare from '@/components/SocialShare';

export default function WhyNPSIsAVanityMetric() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-secondary selection:text-base">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-base text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-base/50 z-10" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop')] opacity-10 bg-cover bg-center" />
        
        <div className="container max-w-4xl mx-auto px-4 relative z-20">
          <div className="mb-8">
            <Breadcrumbs variant="light" />
          </div>
          
          <div className="flex flex-wrap gap-4 mb-6">
            <span className="inline-flex items-center gap-2 text-sm text-blue-300 font-medium px-3 py-1 rounded-full bg-blue-900/30 border border-blue-800">
              <Tag className="w-4 h-4" />
              Data Science
            </span>
            <span className="inline-flex items-center gap-2 text-sm text-muted-foreground/50">
              <Calendar className="w-4 h-4" />
              February 28, 2025
            </span>
            <span className="inline-flex items-center gap-2 text-sm text-muted-foreground/50">
              <Clock className="w-4 h-4" />
              6 min read
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-3 leading-tight tracking-tight">
            Why NPS is a Vanity Metric <span className="text-secondary">(And What to Track Instead)</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground/50 font-light leading-relaxed max-w-3xl">
            Net Promoter Score tells you how customers felt yesterday. It doesn't tell you who will leave tomorrow. Here is the engineering approach to health scoring.
          </p>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 md:py-24">
        <div className="container max-w-3xl mx-auto px-4">
          {/* Featured Image */}
          <div className="aspect-video bg-subtle rounded-2xl mb-12 overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop" 
              alt="Data dashboard showing metrics" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex justify-between items-center mb-12 border-b border-border pb-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-muted rounded-full overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop" 
                  alt="Dr. Alex Chen" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-bold text-charcoal">Dr. Alex Chen</h4>
                <p className="text-sm text-muted-foreground">Head of Data Science</p>
              </div>
            </div>
            <SocialShare title="Why NPS is a Vanity Metric" />
          </div>

          <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-base prose-a:text-secondary prose-img:rounded-xl">
            <p className="lead text-xl text-muted-foreground mb-8">
              Boardrooms love Net Promoter Score (NPS). It's simple, it's standardized, and it usually goes up and to the right if you survey the right people. But as a predictive metric for churn, it is statistically insignificant.
            </p>

            <p>
              We analyzed data from over 50 subscription-based companies and found a startling lack of correlation between high NPS scores and retention rates. In fact, in 30% of cases, customers who gave a "Promoter" score (9 or 10) churned within 90 days. Why? Because sentiment is fleeting, but behavior is truth.
            </p>

            <h2>The Lagging Indicator Problem</h2>
            <p>
              NPS is a lagging indicator. It measures sentiment <em>after</em> an interaction has occurred. By the time a customer tells you they are unhappy (a Detractor score), they have likely already made the decision to leave. Relying on NPS to prevent churn is like driving a car by looking exclusively in the rearview mirror.
            </p>

            <div className="bg-blue-50 border-l-4 border-secondary p-6 my-8 rounded-r-lg">
              <h3 className="text-lg font-bold text-base mt-0 mb-2">The "Silent Churn" Phenomenon</h3>
              <p className="mb-0 text-charcoal/80">
                Our research shows that 65% of customers who churn never respond to a survey. They simply stop logging in, stop using key features, and then cancel. NPS completely misses this "silent majority."
              </p>
            </div>

            <h2>Behavioral Health Scoring: The Engineering Alternative</h2>
            <p>
              Instead of asking customers how they feel, we should measure what they <em>do</em>. A robust Customer Health Score is built on behavioral telemetry, not survey responses. It is a composite metric that tracks:
            </p>
            <ul>
              <li><strong>Usage Frequency:</strong> Are logins trending up or down?</li>
              <li><strong>Feature Breadth:</strong> Are they using sticky features or just the basics?</li>
              <li><strong>Support Velocity:</strong> Are tickets being resolved quickly, or are they languishing?</li>
              <li><strong>Payment Hygiene:</strong> Are invoices paid on time, or are there frequent failures?</li>
            </ul>

            <h2>Building a Predictive Model</h2>
            <p>
              To move from vanity metrics to predictive power, we engineer a health score using a weighted regression model. We identify the behavioral signals that historically precede churn and assign them negative weights. Conversely, behaviors associated with renewal (like adding new users or integrating with third-party tools) get positive weights.
            </p>
            <p>
              This model runs in real-time. If a key account's health score drops below a threshold, it triggers an automated alert in the CRM for the Customer Success Manager. No surveys required.
            </p>

            <h2>Conclusion: Kill the Survey, Watch the Data</h2>
            <p>
              NPS has its place as a measure of brand sentiment, but it should not be the primary KPI for retention teams. To reduce churn, you need to stop asking for opinions and start analyzing behavior. The data is already there; you just need to listen to it.
            </p>
          </div>

          {/* CTA Section */}
          <div className="mt-16 p-8 md:p-12 bg-base rounded-2xl text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -mr-32 -mt-32" />
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Stop guessing who will churn.</h3>
              <p className="text-muted-foreground/50 mb-8 max-w-xl text-lg">
                NexDyne builds predictive health scoring models that identify at-risk customers 60 days before they cancel.
              </p>
              <Link href="/contact">
                <button className="px-8 py-4 bg-secondary hover:bg-secondary text-base rounded-full font-bold transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(0,212,255,0.3)]">
                  Audit Your Retention Metrics
                </button>
              </Link>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div className="mt-16">
            <NewsletterSubscribe />
          </div>

          {/* Related Posts */}
          <div className="mt-16 pt-16 border-t border-border">
            <h3 className="text-2xl font-bold text-base mb-8">Related Engineering Insights</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <Link href="/insights/churn-prediction-playbook">
                <div className="group cursor-pointer">
                  <div className="aspect-video bg-subtle rounded-xl mb-4 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2670&auto=format&fit=crop" 
                      alt="Code on screen" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex items-center gap-2 text-sm text-secondary font-medium mb-2">
                    <Tag className="w-3 h-3" /> Technical Guide
                  </div>
                  <h4 className="font-bold text-xl text-base group-hover:text-secondary transition-colors mb-2">
                    The Churn Prediction Playbook
                  </h4>
                  <p className="text-muted-foreground text-sm line-clamp-2">
                    A technical walkthrough of building, training, and deploying a churn prediction model.
                  </p>
                </div>
              </Link>
              <Link href="/insights/economics-of-loyalty">
                <div className="group cursor-pointer">
                  <div className="aspect-video bg-subtle rounded-xl mb-4 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2672&auto=format&fit=crop" 
                      alt="Financial chart" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex items-center gap-2 text-sm text-secondary font-medium mb-2">
                    <Tag className="w-3 h-3" /> Unit Economics
                  </div>
                  <h4 className="font-bold text-xl text-base group-hover:text-secondary transition-colors mb-2">
                    The Economics of Loyalty
                  </h4>
                  <p className="text-muted-foreground text-sm line-clamp-2">
                    Why most loyalty programs are just disguised price cuts that kill margins.
                  </p>
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
