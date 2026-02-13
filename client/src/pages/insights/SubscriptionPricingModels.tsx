import React from 'react';
import ReadingProgress from '@/components/ReadingProgress';
import InlineTableOfContents from '@/components/InlineTableOfContents';
import { Link } from 'wouter';
import { ArrowLeft, Clock, Calendar, Tag, ArrowRight } from 'lucide-react';
import NewsletterSubscribe from '@/components/NewsletterSubscribe';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function SubscriptionPricingModels() {
  return (
    <div className="min-h-screen bg-white">
      <ReadingProgress />
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-16 md:py-24">
        <div className="container max-w-4xl mx-auto px-4">
          <Link href="/capabilities/growth-marketing-sales/pricing-monetization" className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-400 mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Pricing & Monetization
          </Link>
          
          <div className="flex flex-wrap gap-4 mb-6">
            <span className="inline-flex items-center gap-2 text-sm text-slate-300">
              <Tag className="w-4 h-4" />
              Business Models
            </span>
            <span className="inline-flex items-center gap-2 text-sm text-slate-300">
              <Calendar className="w-4 h-4" />
              September 18, 2024
            </span>
            <span className="inline-flex items-center gap-2 text-sm text-slate-300">
              <Clock className="w-4 h-4" />
              7 min read
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-3 leading-tight">
            Beyond the Flat Rate: Optimizing Subscription Models for Growth
          </h1>
          
          <p className="text-xl text-slate-300 font-light leading-relaxed">
            The "all-you-can-eat" subscription model is simple, but it often leaves money on the table. Advanced recurring revenue models align pricing with customer success.
          </p>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16">
        <div className="container max-w-3xl mx-auto px-4">
          {/* Featured Image */}
          <div className="aspect-video bg-slate-100 rounded-lg mb-12 overflow-hidden">
            <img 
              src="/images/insight-subscription-models.jpg" 
              alt="Subscription Pricing Models" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <InlineTableOfContents />
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              The subscription economy has revolutionized business. From software to socks, recurring revenue provides predictability and high valuations. But many companies get stuck in the "Netflix trap"—a single, flat monthly fee for unlimited access.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              While simple, flat-rate pricing has two major flaws:
            </p>
            <ol className="list-decimal pl-6 space-y-4 text-slate-700 mb-6">
              <li><strong>It undercharges power users:</strong> Customers who derive massive value from your product pay the same as casual users.</li>
              <li><strong>It creates a barrier for light users:</strong> Small customers who only need a fraction of the value are priced out by the "average" fee.</li>
            </ol>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              To maximize Net Dollar Retention (NDR) and Lifetime Value (LTV), companies must evolve their pricing architecture.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">The Rise of Usage-Based Pricing (UBP)</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Companies like Snowflake and Twilio have popularized usage-based pricing (also known as consumption-based pricing). You pay for what you use—gigabytes stored, messages sent, API calls made.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              This model aligns the vendor's incentives with the customer's success. If the customer grows, they use more, and they pay more. It removes the friction of "upselling" because the upsell happens automatically as usage scales.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              However, UBP introduces unpredictability. Customers hate surprise bills. The solution? The <strong>Hybrid Model</strong>.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">The Hybrid Model: Best of Both Worlds</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              The most robust pricing model today combines a recurring platform fee with a usage-based component.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-6">
              <li><strong>Platform Fee:</strong> Covers fixed costs and grants access to core features. This provides revenue predictability for the vendor.</li>
              <li><strong>Usage Fees:</strong> Charge for the metric that correlates with value (e.g., active users, transactions processed). This captures the upside of customer growth.</li>
            </ul>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              HubSpot is a classic example: you pay a base subscription fee for the Marketing Hub, but the price scales based on the number of "Marketing Contacts" you have. As your database grows, HubSpot grows with you.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Good/Better/Best Tiering</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Even within subscription models, tiering is critical. But the mistake most companies make is tiering based on <em>features</em> that don't matter.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Effective tiering requires identifying "fence" features—capabilities that are critical for a specific segment of customers. For example, Single Sign-On (SSO) is often a "fence" for the Enterprise tier. A small startup doesn't care about SSO, but a Fortune 500 company <em>requires</em> it for compliance. By locking SSO behind the Enterprise plan, you force large companies to self-select into the higher price point.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">The Psychology of the "Per User" Seat</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              "Per seat" pricing is the standard in SaaS, but it's under attack. Why? Because it discourages adoption. If a company has to pay $20 for every new user, they will share logins or restrict access. This limits the product's "stickiness" within the organization.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Forward-thinking companies are moving to "active user" pricing (Slack) or flat organizational pricing with usage caps. The goal is to get as many people using the product as possible, because widespread adoption is the best defense against churn.
            </p>
          </div>

          {/* CTA Section */}
          <div className="mt-16 p-8 bg-slate-900 rounded-lg text-white">
            <h3 className="text-2xl font-bold mb-4">Audit your subscription model</h3>
            <p className="text-slate-300 mb-6">
              Are you maximizing LTV? We help subscription businesses design pricing architectures that scale.
            </p>
            <Link href="/contact">
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors">
                Request a Pricing Audit
              </button>
            </Link>
          </div>

          {/* Author Info */}
          <div className="mt-12 pt-8 border-t border-slate-200">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-slate-200 rounded-full flex-shrink-0 overflow-hidden">
                <img 
                  src="/images/portrait_pricing_expert.jpg" 
                  alt="Elena Rossi" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-lg">Elena Rossi</h4>
                <p className="text-blue-600 font-medium text-sm mb-2">Partner, Pricing Strategy</p>
                <p className="text-slate-600 text-sm">
                  Elena is an economist and data scientist specializing in behavioral pricing and conjoint analysis. She helps clients unlock hidden margin through value-based pricing architectures.
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
            <h3 className="text-2xl font-bold text-slate-900 mb-8">Related Insights</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <Link href="/insights/psychology-of-value">
                <div className="group cursor-pointer">
                  <div className="aspect-video bg-slate-200 rounded-lg mb-4 overflow-hidden">
                    <img 
                      src="/images/insight-pricing-psychology.jpg" 
                      alt="Psychology of Value" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h4 className="font-bold text-lg group-hover:text-blue-600 transition-colors">
                    The Psychology of Value
                  </h4>
                  <p className="text-slate-600 text-sm mt-2">
                    Why "Cost-Plus" fails in the digital age and how to shift to value-based pricing.
                  </p>
                  <div className="flex items-center text-blue-600 font-medium text-sm mt-3 group-hover:translate-x-1 transition-transform">
                    Read Article <ArrowRight className="ml-1 w-3 h-3" />
                  </div>
                </div>
              </Link>
              <Link href="/insights/algorithmic-pricing-smes">
                <div className="group cursor-pointer">
                  <div className="aspect-video bg-slate-200 rounded-lg mb-4 overflow-hidden">
                    <img 
                      src="/images/insight-algo-pricing.jpg" 
                      alt="Algorithmic Pricing" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h4 className="font-bold text-lg group-hover:text-blue-600 transition-colors">
                    Algorithmic Pricing for SMEs
                  </h4>
                  <p className="text-slate-600 text-sm mt-2">
                    Dynamic pricing technology is now accessible to mid-market companies.
                  </p>
                  <div className="flex items-center text-blue-600 font-medium text-sm mt-3 group-hover:translate-x-1 transition-transform">
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
