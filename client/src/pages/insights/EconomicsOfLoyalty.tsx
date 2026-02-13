import React from 'react';
import ReadingProgress from '@/components/ReadingProgress';
import InlineTableOfContents from '@/components/InlineTableOfContents';
import { Link } from 'wouter';
import { ArrowLeft, Clock, Calendar, Tag, ArrowRight, TrendingUp, DollarSign, Percent } from 'lucide-react';
import NewsletterSubscribe from '@/components/NewsletterSubscribe';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import SocialShare from '@/components/SocialShare';

export default function EconomicsOfLoyalty() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-[#00d4ff] selection:text-[#0a0e3d]">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-[#0a0e3d] text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a0e3d]/50 z-10" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2672&auto=format&fit=crop')] opacity-10 bg-cover bg-center" />
        
        <div className="container max-w-4xl mx-auto px-4 relative z-20">
          <div className="mb-8">
            <Breadcrumbs variant="light" />
          </div>
          
          <div className="flex flex-wrap gap-4 mb-6">
            <span className="inline-flex items-center gap-2 text-sm text-blue-300 font-medium px-3 py-1 rounded-full bg-blue-900/30 border border-blue-800">
              <TrendingUp className="w-4 h-4" />
              Unit Economics
            </span>
            <span className="inline-flex items-center gap-2 text-sm text-gray-300">
              <Calendar className="w-4 h-4" />
              March 12, 2025
            </span>
            <span className="inline-flex items-center gap-2 text-sm text-gray-300">
              <Clock className="w-4 h-4" />
              8 min read
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-3 leading-tight tracking-tight">
            The Economics of Loyalty: <span className="text-[#00d4ff]">Why Points Programs Fail</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed max-w-3xl">
            Most loyalty programs are just disguised price cuts. We analyze the math behind successful behavioral rewards vs. margin-killing discounts.
          </p>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 md:py-24">
        <div className="container max-w-3xl mx-auto px-4">
          {/* Featured Image */}
          <div className="aspect-video bg-gray-100 rounded-2xl mb-12 overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2672&auto=format&fit=crop" 
              alt="Financial chart" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex justify-between items-center mb-12 border-b border-gray-200 pb-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop" 
                  alt="James Wilson" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-bold text-gray-900">James Wilson</h4>
                <p className="text-sm text-gray-500">Principal Economist</p>
              </div>
            </div>
            <SocialShare title="The Economics of Loyalty" />
          </div>

          <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-[#0a0e3d] prose-a:text-[#00d4ff] prose-img:rounded-xl">
            <p className="lead text-xl text-gray-600 mb-8">
              "Buy 10, get 1 free." It's the oldest trick in the book. But in the digital economy, this model is fundamentally broken. Traditional points-based loyalty programs are often just a tax on your own margin—giving discounts to customers who would have bought anyway.
            </p>

            <p>
              True loyalty isn't about bribery; it's about habit formation. The most successful retention strategies today don't rely on financial incentives, but on <strong>structural lock-in</strong> and <strong>behavioral reinforcement</strong>.
            </p>

            <h2>The "Discount Trap"</h2>
            <p>
              Let's look at the unit economics. If you have a 30% gross margin and you offer a 10% loyalty discount, you aren't giving away 10% of your revenue; you are giving away <strong>33% of your profit</strong>.
            </p>
            <p>
              Unless that discount drives a commensurate increase in Lifetime Value (LTV) or a decrease in Customer Acquisition Cost (CAC) via referrals, you are simply eroding your own profitability.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8 not-prose">
              <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                <h4 className="font-bold text-red-800 mb-2">Transactional Loyalty</h4>
                <ul className="text-sm text-red-700 space-y-2">
                  <li>• Based on discounts</li>
                  <li>• Easy to copy by competitors</li>
                  <li>• Attracts price-sensitive customers</li>
                  <li>• Erodes margin</li>
                </ul>
              </div>
              <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                <h4 className="font-bold text-green-800 mb-2">Emotional/Structural Loyalty</h4>
                <ul className="text-sm text-green-700 space-y-2">
                  <li>• Based on experience/utility</li>
                  <li>• Hard to replicate</li>
                  <li>• Attracts value-sensitive customers</li>
                  <li>• Preserves margin</li>
                </ul>
              </div>
            </div>

            <h2>The Amazon Prime Model</h2>
            <p>
              Amazon Prime is the gold standard of structural loyalty. It's not a discount program; it's a <strong>paid subscription</strong> that changes behavior. By paying upfront for shipping, customers feel "invested" in the platform. They stop price-shopping because they want to "get their money's worth" from their Prime membership.
            </p>
            <p>
              This is the key shift: <strong>Don't pay customers to stay. Make them pay to belong.</strong>
            </p>

            <h2>Behavioral Economics of Rewards</h2>
            <p>
              If you must use rewards, use them to drive specific behaviors, not just spend.
            </p>
            <ul>
              <li><strong>Variable Rewards:</strong> The "surprise and delight" model (like a random upgrade) is more addictive than a predictable "buy X get Y" model.</li>
              <li><strong>Goal Gradient Effect:</strong> People work harder to achieve a goal as they get closer to it. Visualizing progress (e.g., "You are 80% of the way to VIP status") drives incremental activity.</li>
              <li><strong>Sunk Cost Fallacy:</strong> Charging a small membership fee (like Costco) makes customers more loyal because they want to justify the expense.</li>
            </ul>

            <h2>Designing a Margin-Positive Program</h2>
            <p>
              We advise clients to audit their loyalty programs with three questions:
            </p>
            <ol>
              <li>Does this program change behavior, or just reward existing behavior?</li>
              <li>Is the reward a discount (margin negative) or a value-add service (margin neutral)?</li>
              <li>Does the program create a barrier to exit?</li>
            </ol>
            <p>
              The future of loyalty is not points. It's integration. It's becoming so embedded in your customer's workflow or life that leaving becomes inconceivable.
            </p>
          </div>

          {/* CTA Section */}
          <div className="mt-16 p-8 md:p-12 bg-[#0a0e3d] rounded-2xl text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#00d4ff]/10 rounded-full blur-3xl -mr-32 -mt-32" />
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Stop eroding your margins.</h3>
              <p className="text-gray-300 mb-8 max-w-xl text-lg">
                NexDyne helps companies restructure loyalty programs to drive true LTV without sacrificing profitability.
              </p>
              <Link href="/contact">
                <button className="px-8 py-4 bg-[#00d4ff] hover:bg-[#00bce3] text-[#0a0e3d] rounded-full font-bold transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(0,212,255,0.3)]">
                  Analyze Your Unit Economics
                </button>
              </Link>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div className="mt-16">
            <NewsletterSubscribe />
          </div>

          {/* Related Posts */}
          <div className="mt-16 pt-16 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-[#0a0e3d] mb-8">Related Engineering Insights</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <Link href="/insights/why-nps-is-a-vanity-metric">
                <div className="group cursor-pointer">
                  <div className="aspect-video bg-gray-100 rounded-xl mb-4 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop" 
                      alt="Data dashboard" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[#00d4ff] font-medium mb-2">
                    <Tag className="w-3 h-3" /> Data Science
                  </div>
                  <h4 className="font-bold text-xl text-[#0a0e3d] group-hover:text-[#00d4ff] transition-colors mb-2">
                    Why NPS is a Vanity Metric
                  </h4>
                  <p className="text-gray-600 text-sm line-clamp-2">
                    Net Promoter Score tells you how customers felt yesterday. It doesn't tell you who will leave tomorrow.
                  </p>
                </div>
              </Link>
              <Link href="/insights/churn-prediction-playbook">
                <div className="group cursor-pointer">
                  <div className="aspect-video bg-gray-100 rounded-xl mb-4 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2670&auto=format&fit=crop" 
                      alt="Code on screen" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[#00d4ff] font-medium mb-2">
                    <Tag className="w-3 h-3" /> Technical Guide
                  </div>
                  <h4 className="font-bold text-xl text-[#0a0e3d] group-hover:text-[#00d4ff] transition-colors mb-2">
                    The Churn Prediction Playbook
                  </h4>
                  <p className="text-gray-600 text-sm line-clamp-2">
                    A technical walkthrough of building, training, and deploying a churn prediction model.
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
