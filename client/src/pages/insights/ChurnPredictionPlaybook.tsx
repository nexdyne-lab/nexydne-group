import React from 'react';
import ReadingProgress from '@/components/ReadingProgress';
import InlineTableOfContents from '@/components/InlineTableOfContents';
import { Link } from 'wouter';
import { ArrowLeft, Clock, Calendar, Tag, ArrowRight, Code, Database, Server, Cpu } from 'lucide-react';
import NewsletterSubscribe from '@/components/NewsletterSubscribe';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import SocialShare from '@/components/SocialShare';

export default function ChurnPredictionPlaybook() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-[#00d4ff] selection:text-[#0a0e3d]">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-[#0a0e3d] text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a0e3d]/50 z-10" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2670&auto=format&fit=crop')] opacity-10 bg-cover bg-center" />
        
        <div className="container max-w-4xl mx-auto px-4 relative z-20">
          <div className="mb-8">
            <Breadcrumbs variant="light" />
          </div>
          
          <div className="flex flex-wrap gap-4 mb-6">
            <span className="inline-flex items-center gap-2 text-sm text-blue-300 font-medium px-3 py-1 rounded-full bg-blue-900/30 border border-blue-800">
              <Code className="w-4 h-4" />
              Technical Guide
            </span>
            <span className="inline-flex items-center gap-2 text-sm text-gray-300">
              <Calendar className="w-4 h-4" />
              March 5, 2025
            </span>
            <span className="inline-flex items-center gap-2 text-sm text-gray-300">
              <Clock className="w-4 h-4" />
              12 min read
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-3 leading-tight tracking-tight">
            The Churn Prediction Playbook: <span className="text-[#00d4ff]">From Random Forest to Production</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed max-w-3xl">
            A technical walkthrough of building, training, and deploying a churn prediction model that actually integrates with your CRM.
          </p>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 md:py-24">
        <div className="container max-w-3xl mx-auto px-4">
          {/* Featured Image */}
          <div className="aspect-video bg-gray-100 rounded-2xl mb-12 overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2670&auto=format&fit=crop" 
              alt="Code on screen" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex justify-between items-center mb-12 border-b border-gray-200 pb-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop" 
                  alt="Sarah Jenkins" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Sarah Jenkins</h4>
                <p className="text-sm text-gray-500">Lead ML Engineer</p>
              </div>
            </div>
            <SocialShare title="The Churn Prediction Playbook" />
          </div>

          <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-[#0a0e3d] prose-a:text-[#00d4ff] prose-img:rounded-xl prose-pre:bg-[#0a0e3d] prose-pre:text-gray-100">
            <p className="lead text-xl text-gray-600 mb-8">
              Most churn prediction models fail not because the math is wrong, but because the engineering is disconnected from the business process. A model that lives in a Jupyter notebook is useless. A model that pushes probability scores into Salesforce is a revenue engine.
            </p>

            <p>
              In this guide, we'll walk through the end-to-end architecture of a production-grade churn prediction system. We'll cover feature engineering, model selection, and the critical "last mile" of integration.
            </p>

            <h2>1. The Data Pipeline</h2>
            <p>
              Garbage in, garbage out. The foundation of any churn model is a robust ETL pipeline that aggregates data from three primary sources:
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 my-8 not-prose">
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <Database className="w-8 h-8 text-[#00d4ff] mb-4" />
                <h4 className="font-bold text-[#0a0e3d] mb-2">Product Analytics</h4>
                <p className="text-sm text-gray-600">Login frequency, feature usage, session duration (Segment, Mixpanel).</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <Server className="w-8 h-8 text-[#00d4ff] mb-4" />
                <h4 className="font-bold text-[#0a0e3d] mb-2">CRM & Billing</h4>
                <p className="text-sm text-gray-600">Contract value, tenure, payment history, support tickets (Salesforce, Stripe).</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <Cpu className="w-8 h-8 text-[#00d4ff] mb-4" />
                <h4 className="font-bold text-[#0a0e3d] mb-2">Interaction Data</h4>
                <p className="text-sm text-gray-600">Email sentiment, call transcripts, meeting frequency (Gong, Outreach).</p>
              </div>
            </div>

            <h2>2. Feature Engineering</h2>
            <p>
              Raw data is rarely predictive. We need to transform it into features that capture <em>change</em>. Static features (like "Industry") are less valuable than dynamic features (like "Change in Weekly Active Users").
            </p>
            <p>
              Key features we engineer for B2B SaaS:
            </p>
            <ul>
              <li><strong>Usage Velocity:</strong> (Current Week Logins - Last Week Logins) / Last Week Logins</li>
              <li><strong>Ticket Sentiment Score:</strong> NLP analysis of support ticket text</li>
              <li><strong>Champion Activity:</strong> Activity level of the primary account admin</li>
              <li><strong>Invoice Latency:</strong> Average days to pay invoice (increasing latency is a major red flag)</li>
            </ul>

            <h2>3. Model Selection: Why Random Forest?</h2>
            <p>
              While deep learning gets all the hype, for tabular churn data, ensemble methods like Random Forest or XGBoost often outperform neural networks. They handle non-linear relationships well, are robust to outliers, and most importantly, provide <strong>feature importance</strong>.
            </p>
            <p>
              Explainability is critical. When a CSM asks "Why is this account at risk?", you need to be able to say "Because their usage dropped 40% and they have an open critical ticket," not "Because the neural net said so."
            </p>

            <pre className="language-python">
{`# Example: Training a Random Forest Classifier
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split

X_train, X_test, y_train, y_test = train_test_split(features, target, test_size=0.2)

rf = RandomForestClassifier(n_estimators=100, max_depth=10, random_state=42)
rf.fit(X_train, y_train)

# Get feature importance
importances = rf.feature_importances_`}
            </pre>

            <h2>4. The "Last Mile": Reverse ETL</h2>
            <p>
              This is where most projects die. A CSV of churn probabilities sent to the VP of Success is not operational. We use Reverse ETL tools (like Hightouch or Census) to push the model's output directly into the fields where CSMs live.
            </p>
            <p>
              We create two fields in Salesforce:
            </p>
            <ul>
              <li><strong>Churn Probability Score:</strong> 0-100%</li>
              <li><strong>Risk Factors:</strong> Top 3 features contributing to the score (e.g., "Low Usage", "Late Payment")</li>
            </ul>

            <h2>5. Automating the Intervention</h2>
            <p>
              The final step is automation. We set up triggers in the CRM:
            </p>
            <div className="bg-blue-50 border-l-4 border-[#00d4ff] p-6 my-8 rounded-r-lg">
              <ul className="mb-0 text-gray-700 list-none pl-0 space-y-2">
                <li><strong>Score &gt; 70%:</strong> Alert CSM Manager, create "At Risk" opportunity.</li>
                <li><strong>Score 50-70%:</strong> Trigger automated email sequence from CSM.</li>
                <li><strong>Score &lt; 20%:</strong> Trigger upsell campaign.</li>
              </ul>
            </div>

            <h2>Conclusion</h2>
            <p>
              Building a churn prediction model is an engineering challenge, but deploying it is a product challenge. Success comes from treating the internal sales/success team as your users and building a tool that makes their lives easier, not just one that generates math.
            </p>
          </div>

          {/* CTA Section */}
          <div className="mt-16 p-8 md:p-12 bg-[#0a0e3d] rounded-2xl text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#00d4ff]/10 rounded-full blur-3xl -mr-32 -mt-32" />
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Don't build this from scratch.</h3>
              <p className="text-gray-300 mb-8 max-w-xl text-lg">
                NexDyne's Data Engineering team can deploy a production-ready churn prediction pipeline in your infrastructure in under 4 weeks.
              </p>
              <Link href="/contact">
                <button className="px-8 py-4 bg-[#00d4ff] hover:bg-[#00bce3] text-[#0a0e3d] rounded-full font-bold transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(0,212,255,0.3)]">
                  Get the Technical Specs
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
              <Link href="/insights/economics-of-loyalty">
                <div className="group cursor-pointer">
                  <div className="aspect-video bg-gray-100 rounded-xl mb-4 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2672&auto=format&fit=crop" 
                      alt="Financial chart" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[#00d4ff] font-medium mb-2">
                    <Tag className="w-3 h-3" /> Unit Economics
                  </div>
                  <h4 className="font-bold text-xl text-[#0a0e3d] group-hover:text-[#00d4ff] transition-colors mb-2">
                    The Economics of Loyalty
                  </h4>
                  <p className="text-gray-600 text-sm line-clamp-2">
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
