import React from 'react';
import ReadingProgress from '@/components/ReadingProgress';
import InlineTableOfContents from '@/components/InlineTableOfContents';
import { Link } from 'wouter';
import { ArrowLeft, Clock, Calendar, Tag, ArrowRight } from 'lucide-react';
import NewsletterSubscribe from '@/components/NewsletterSubscribe';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function PsychologyOfValue() {
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
            <span className="inline-flex items-center gap-2 text-sm text-muted-foreground/50">
              <Tag className="w-4 h-4" />
              Pricing Strategy
            </span>
            <span className="inline-flex items-center gap-2 text-sm text-muted-foreground/50">
              <Calendar className="w-4 h-4" />
              October 12, 2024
            </span>
            <span className="inline-flex items-center gap-2 text-sm text-muted-foreground/50">
              <Clock className="w-4 h-4" />
              8 min read
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-3 leading-tight">
            The Psychology of Value: Why "Cost-Plus" Fails in the Digital Age
          </h1>
          
          <p className="text-xl text-muted-foreground/50 font-light leading-relaxed">
            Customers don't care about your margins; they care about their own utility. To win in a crowded market, companies must shift their pricing paradigm from internal costs to external willingness-to-pay.
          </p>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16">
        <div className="container max-w-3xl mx-auto px-4">
          {/* Featured Image */}
          <div className="aspect-video bg-slate-100 rounded-lg mb-12 overflow-hidden">
            <img 
              src="/images/insight-pricing-psychology.jpg" 
              alt="Psychology of Value" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <InlineTableOfContents />
            <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
              For decades, the dominant logic in pricing was simple arithmetic: calculate the cost of goods sold (COGS), add a healthy margin, and present the final number to the customer. This "cost-plus" model is comfortable. It's safe. It guarantees—on paper, at least—that every sale is profitable.
            </p>
            <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
              It is also fundamentally flawed.
            </p>
            <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
              Cost-plus pricing ignores the single most important variable in the economic equation: the customer. Specifically, it ignores the customer's perception of value. In the digital age, where competitors are a click away and product comparisons are instantaneous, pricing is not just a financial decision; it is a psychological signal.
            </p>

            <h2 className="text-3xl font-bold text-charcoal mt-12 mb-6">The Anchor and the Frame</h2>
            <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
              Behavioral economics teaches us that price is never evaluated in a vacuum. It is always relative. A $50 bottle of wine feels expensive at a casual diner but like a bargain at a Michelin-starred restaurant. The liquid hasn't changed; the context has.
            </p>
            <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
              This is the power of <strong>anchoring</strong>. When you present a "Premium" option alongside a "Standard" one, the higher price serves as an anchor, making the standard option feel more affordable. Smart companies use this to their advantage. They don't just sell a product; they design a choice architecture that guides the customer toward the optimal purchase.
            </p>

            <h2 className="text-3xl font-bold text-charcoal mt-12 mb-6">The Decoy Effect</h2>
            <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
              Consider the classic example of the movie theater popcorn. You have a Small for $4 and a Large for $8. Most people choose the Small. But introduce a Medium for $7.50, and suddenly the Large looks like an incredible deal—only 50 cents more for a lot more product! The Medium is a "decoy"—it exists not to be sold, but to make the Large look attractive.
            </p>
            <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
              In B2B software, we see this in "Enterprise" tiers that include features most mid-sized companies don't need, priced high enough to make the "Pro" tier seem like a no-brainer. The goal isn't always to sell the most expensive option; it's to increase the average order value (AOV) by framing the middle option as the "smart" choice.
            </p>

            <h2 className="text-3xl font-bold text-charcoal mt-12 mb-6">Willingness-to-Pay (WTP) is Not Fixed</h2>
            <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
              Perhaps the biggest myth in pricing is that a customer has a fixed price they are willing to pay. In reality, WTP is highly malleable. It can be influenced by:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-charcoal/80 mb-6">
              <li><strong>Scarcity:</strong> "Only 2 seats left at this price."</li>
              <li><strong>Urgency:</strong> "Offer expires in 24 hours."</li>
              <li><strong>Social Proof:</strong> "Trusted by 500+ enterprises."</li>
              <li><strong>Risk Reversal:</strong> "30-day money-back guarantee."</li>
            </ul>
            <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
              By pulling these levers, companies can expand the customer's WTP, capturing value that a static cost-plus model would have left on the table.
            </p>

            <h2 className="text-3xl font-bold text-charcoal mt-12 mb-6">Moving to Value-Based Pricing</h2>
            <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
              So, how do you break the cost-plus addiction? The transition requires a fundamental shift in mindset:
            </p>
            <ol className="list-decimal pl-6 space-y-4 text-charcoal/80 mb-6">
              <li><strong>Segment by Need, Not Demographics:</strong> Don't just price for "small businesses" vs. "enterprises." Price for "speed-conscious" vs. "budget-conscious" customers.</li>
              <li><strong>Quantify Your Value:</strong> If your software saves a customer 10 hours a week, calculate the dollar value of that time. Price against that ROI, not your server costs.</li>
              <li><strong>Test and Iterate:</strong> Pricing should be dynamic. Use A/B testing to find the elasticity of your demand curve. You might find that raising prices actually <em>increases</em> conversion by signaling higher quality.</li>
            </ol>
            <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
              In the end, price is the ultimate marketing tool. It tells a story about who you are, who your product is for, and what it's worth. Don't let your accountants write that story alone.
            </p>
          </div>

          {/* CTA Section */}
          <div className="mt-16 p-8 bg-slate-900 rounded-lg text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to rethink your pricing?</h3>
            <p className="text-muted-foreground/50 mb-6">
              Our pricing strategy experts can help you conduct a willingness-to-pay analysis and design a value-based pricing model.
            </p>
            <Link href="/contact">
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors">
                Schedule a Consultation
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
                <h4 className="font-bold text-charcoal text-lg">Elena Rossi</h4>
                <p className="text-primary font-medium text-sm mb-2">Partner, Pricing Strategy</p>
                <p className="text-muted-foreground text-sm">
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
            <h3 className="text-2xl font-bold text-charcoal mb-8">Related Insights</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <Link href="/insights/algorithmic-pricing-smes">
                <div className="group cursor-pointer">
                  <div className="aspect-video bg-slate-200 rounded-lg mb-4 overflow-hidden">
                    <img 
                      src="/images/insight-algo-pricing.jpg" 
                      alt="Algorithmic Pricing" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h4 className="font-bold text-lg group-hover:text-primary transition-colors">
                    Algorithmic Pricing for SMEs
                  </h4>
                  <p className="text-muted-foreground text-sm mt-2">
                    Dynamic pricing technology is now accessible to mid-market companies.
                  </p>
                  <div className="flex items-center text-primary font-medium text-sm mt-3 group-hover:translate-x-1 transition-transform">
                    Read Article <ArrowRight className="ml-1 w-3 h-3" />
                  </div>
                </div>
              </Link>
              <Link href="/insights/subscription-pricing-models">
                <div className="group cursor-pointer">
                  <div className="aspect-video bg-slate-200 rounded-lg mb-4 overflow-hidden">
                    <img 
                      src="/images/insight-subscription-models.jpg" 
                      alt="Subscription Models" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h4 className="font-bold text-lg group-hover:text-primary transition-colors">
                    Optimizing Subscription Models
                  </h4>
                  <p className="text-muted-foreground text-sm mt-2">
                    Explore usage-based, tiered, and hybrid models that align revenue with success.
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
