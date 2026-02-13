import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, ArrowLeft, Clock, Share2, Linkedin, Twitter, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { RelatedContent } from "@/components/RelatedContent";

export default function ChurnPredictionPlaybook() {
  return (
    <div className="min-h-screen bg-[#051C2C] font-sans text-white selection:bg-[#0077B5] selection:text-white">
      <SEO 
        title="The Churn Prediction Playbook for Mid-Market SaaS" 
        description="A practical guide to building and deploying churn prediction models that actually drive retention—from feature engineering to intervention automation."
        canonical="/solutions/data-driven-customer-intelligence/insights/churn-prediction-playbook"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2000&q=80" 
            alt="SaaS Analytics" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#051C2C] via-[#051C2C]/95 to-[#051C2C]" />
        </div>
        
        <div className="container px-4 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <Link href="/solutions/data-driven-customer-intelligence/insights" className="inline-flex items-center text-white/60 hover:text-[#0077B5] mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Insights
            </Link>
            
            <div className="flex items-center gap-4 mb-6">
              <span className="text-[#0077B5] text-xs font-bold uppercase tracking-[0.2em]">Technology</span>
              <span className="flex items-center text-white/40 text-sm">
                <Clock className="w-4 h-4 mr-1" />
                15 min read
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl eb-garamond font-bold tracking-tight text-white leading-[1.1] mb-4">
              The Churn Prediction Playbook for Mid-Market SaaS
            </h1>
            
            <p className="text-xl text-white/70 leading-relaxed mb-8">
              A practical guide to building and deploying churn prediction models that actually drive retention—from feature engineering to intervention automation.
            </p>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#0077B5] rounded-full flex items-center justify-center text-white font-bold">
                  NX
                </div>
                <div>
                  <div className="font-semibold text-white">NEXDYNE Research</div>
                  <div className="text-white/50 text-sm">November 2024</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-white text-[#051C2C]">
        <div className="container px-4 md:px-12">
          <div className="grid lg:grid-cols-12 gap-16">
            {/* Main Content */}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-8 prose prose-lg max-w-none"
            >
              <p className="text-xl text-[#051C2C]/80 leading-relaxed">
                Churn is the silent killer of SaaS businesses. While companies obsess over acquisition, the customers quietly walking out the back door often represent a larger drag on growth than insufficient new customer volume. For mid-market SaaS companies with annual churn rates of 15-20%, reducing churn by even a few percentage points can add millions to the bottom line.
              </p>

              <p>
                The good news: churn is predictable. Customers don't wake up one day and decide to cancel—they exhibit warning signs weeks or months in advance. The challenge is detecting those signals early enough to intervene effectively.
              </p>

              <p>
                This playbook walks through the practical steps to build and deploy a churn prediction system that actually drives retention outcomes.
              </p>

              <h2 className="text-3xl eb-garamond font-bold mt-12 mb-6">Step 1: Define Your Churn Events</h2>

              <p>
                Before building any models, you need a clear definition of what constitutes "churn" for your business. This sounds obvious, but it's where many projects go wrong.
              </p>

              <p>
                Common churn definitions:
              </p>

              <ul>
                <li><strong>Contract cancellation:</strong> Customer explicitly cancels their subscription</li>
                <li><strong>Non-renewal:</strong> Customer doesn't renew at contract end</li>
                <li><strong>Downgrade:</strong> Customer moves to a lower tier (partial churn)</li>
                <li><strong>Inactivity:</strong> Customer stops using the product but hasn't cancelled</li>
              </ul>

              <p>
                For most SaaS companies, we recommend starting with explicit cancellation as your primary churn event. It's unambiguous and gives you a clear target to predict. You can add nuance (downgrades, inactivity) later.
              </p>

              <h2 className="text-3xl eb-garamond font-bold mt-12 mb-6">Step 2: Assemble Your Feature Set</h2>

              <p>
                The features you use to predict churn are more important than the algorithm you choose. Based on our experience across 50+ SaaS churn projects, here are the feature categories that consistently drive predictive power:
              </p>

              <h3 className="text-2xl font-serif font-bold mt-8 mb-4">Product Usage Features</h3>

              <p>
                These are typically your strongest predictors. Key metrics include:
              </p>

              <div className="bg-[#F8F9FA] p-6 rounded-xl my-6">
                <ul className="space-y-2 text-[#051C2C]/70">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#0077B5] flex-shrink-0 mt-0.5" />
                    <span>Login frequency and recency (days since last login)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#0077B5] flex-shrink-0 mt-0.5" />
                    <span>Feature adoption breadth (% of features used)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#0077B5] flex-shrink-0 mt-0.5" />
                    <span>Core feature engagement (usage of "sticky" features)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#0077B5] flex-shrink-0 mt-0.5" />
                    <span>Usage trends (increasing, stable, declining)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#0077B5] flex-shrink-0 mt-0.5" />
                    <span>Time-to-value metrics (how quickly they activated)</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-2xl font-serif font-bold mt-8 mb-4">Support & Sentiment Features</h3>

              <p>
                Customer support interactions often signal dissatisfaction before it manifests in usage decline:
              </p>

              <div className="bg-[#F8F9FA] p-6 rounded-xl my-6">
                <ul className="space-y-2 text-[#051C2C]/70">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#0077B5] flex-shrink-0 mt-0.5" />
                    <span>Support ticket volume and trend</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#0077B5] flex-shrink-0 mt-0.5" />
                    <span>Ticket severity distribution</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#0077B5] flex-shrink-0 mt-0.5" />
                    <span>Time to resolution</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#0077B5] flex-shrink-0 mt-0.5" />
                    <span>NPS/CSAT scores and trends</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#0077B5] flex-shrink-0 mt-0.5" />
                    <span>Sentiment from support conversations</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-2xl font-serif font-bold mt-8 mb-4">Commercial Features</h3>

              <p>
                Contract and billing data provide important context:
              </p>

              <div className="bg-[#F8F9FA] p-6 rounded-xl my-6">
                <ul className="space-y-2 text-[#051C2C]/70">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#0077B5] flex-shrink-0 mt-0.5" />
                    <span>Contract value and term</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#0077B5] flex-shrink-0 mt-0.5" />
                    <span>Days until renewal</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#0077B5] flex-shrink-0 mt-0.5" />
                    <span>Payment history (late payments, failed charges)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#0077B5] flex-shrink-0 mt-0.5" />
                    <span>Expansion/contraction history</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#0077B5] flex-shrink-0 mt-0.5" />
                    <span>Discount level</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-3xl eb-garamond font-bold mt-12 mb-6">Step 3: Choose Your Prediction Horizon</h2>

              <p>
                How far in advance do you want to predict churn? This decision involves a trade-off:
              </p>

              <ul>
                <li><strong>Longer horizons (90+ days):</strong> More time to intervene, but lower accuracy and more false positives</li>
                <li><strong>Shorter horizons (30 days):</strong> Higher accuracy, but less time to save the customer</li>
              </ul>

              <p>
                For most mid-market SaaS companies, we recommend a <strong>60-day prediction horizon</strong>. This provides enough lead time for meaningful intervention while maintaining reasonable accuracy.
              </p>

              <h2 className="text-3xl eb-garamond font-bold mt-12 mb-6">Step 4: Build and Validate Your Model</h2>

              <p>
                With your features assembled and horizon defined, it's time to build the model. A few practical recommendations:
              </p>

              <h3 className="text-2xl font-serif font-bold mt-8 mb-4">Algorithm Selection</h3>

              <p>
                For churn prediction, gradient boosting models (XGBoost, LightGBM) typically outperform other approaches. They handle mixed feature types well, are robust to outliers, and provide feature importance insights that help with explainability.
              </p>

              <h3 className="text-2xl font-serif font-bold mt-8 mb-4">Handling Class Imbalance</h3>

              <p>
                Churn is typically a rare event (5-15% of customers), creating class imbalance. Techniques to address this:
              </p>

              <ul>
                <li>Oversample the minority class (SMOTE)</li>
                <li>Undersample the majority class</li>
                <li>Use class weights in your loss function</li>
                <li>Optimize for precision-recall rather than accuracy</li>
              </ul>

              <h3 className="text-2xl font-serif font-bold mt-8 mb-4">Validation Strategy</h3>

              <p>
                Use time-based cross-validation to simulate real-world deployment. Train on historical data, validate on future data. This prevents data leakage and gives you realistic performance estimates.
              </p>

              <h2 className="text-3xl eb-garamond font-bold mt-12 mb-6">Step 5: Make It Actionable</h2>

              <p>
                A churn prediction model is worthless if it doesn't drive action. The final step is connecting predictions to interventions.
              </p>

              <h3 className="text-2xl font-serif font-bold mt-8 mb-4">Risk Stratification</h3>

              <p>
                Convert continuous probability scores into actionable risk tiers:
              </p>

              <div className="bg-[#F8F9FA] p-6 rounded-xl my-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                    <div>
                      <span className="font-bold">High Risk (70%+):</span>
                      <span className="text-[#051C2C]/70 ml-2">Immediate CSM outreach, executive escalation</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                    <div>
                      <span className="font-bold">Medium Risk (40-70%):</span>
                      <span className="text-[#051C2C]/70 ml-2">Proactive check-in, value reinforcement</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                    <div>
                      <span className="font-bold">Low Risk (&lt;40%):</span>
                      <span className="text-[#051C2C]/70 ml-2">Standard engagement, expansion opportunities</span>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-serif font-bold mt-8 mb-4">Intervention Playbooks</h3>

              <p>
                Develop specific playbooks for each risk tier and churn driver. If the model identifies "declining usage" as the primary risk factor, the intervention should address that specifically—perhaps a training session or feature walkthrough—rather than a generic discount offer.
              </p>

              <h2 className="text-3xl eb-garamond font-bold mt-12 mb-6">Measuring Success</h2>

              <p>
                Track these metrics to evaluate your churn prediction program:
              </p>

              <ul>
                <li><strong>Model performance:</strong> Precision, recall, AUC at your chosen threshold</li>
                <li><strong>Intervention effectiveness:</strong> Save rate for high-risk accounts that received intervention</li>
                <li><strong>Business impact:</strong> Retained ARR attributable to the program</li>
                <li><strong>Efficiency:</strong> CSM time spent on high-risk vs. low-risk accounts</li>
              </ul>

              <h2 className="text-3xl eb-garamond font-bold mt-12 mb-6">The Bottom Line</h2>

              <p>
                Churn prediction isn't magic—it's applied data science. The companies that succeed are those that invest in the fundamentals: clean data, thoughtful feature engineering, and tight integration between predictions and actions.
              </p>

              <p>
                Start simple, prove value, then iterate. A basic model that drives action beats a sophisticated model that sits on a shelf.
              </p>
            </motion.article>

            {/* Sidebar */}
            <motion.aside
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-4"
            >
              <div className="sticky top-32 space-y-8">
                {/* Share */}
                <div className="bg-[#F8F9FA] p-6 rounded-xl">
                  <h3 className="font-bold mb-4">Share this article</h3>
                  <div className="flex gap-3">
                    <button className="w-10 h-10 bg-[#0077B5] rounded-full flex items-center justify-center text-white hover:bg-[#005a8c] transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </button>
                    <button className="w-10 h-10 bg-[#1DA1F2] rounded-full flex items-center justify-center text-white hover:bg-[#1a8cd8] transition-colors">
                      <Twitter className="w-5 h-5" />
                    </button>
                    <button className="w-10 h-10 bg-[#051C2C] rounded-full flex items-center justify-center text-white hover:bg-[#051C2C]/80 transition-colors">
                      <Share2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Key Takeaways */}
                <div className="bg-[#F8F9FA] p-6 rounded-xl">
                  <h3 className="font-bold mb-4">Key Takeaways</h3>
                  <ul className="space-y-3 text-sm text-[#051C2C]/70">
                    <li className="flex gap-2">
                      <span className="text-[#0077B5] font-bold">1.</span>
                      Product usage features are typically the strongest churn predictors
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#0077B5] font-bold">2.</span>
                      60-day prediction horizon balances accuracy with intervention time
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#0077B5] font-bold">3.</span>
                      Gradient boosting models (XGBoost) work well for churn prediction
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#0077B5] font-bold">4.</span>
                      Connect predictions to specific intervention playbooks
                    </li>
                  </ul>
                </div>

                {/* CTA */}
                <div className="bg-[#0077B5] p-6 rounded-xl text-white">
                  <h3 className="font-bold mb-3">Need help building your churn prediction system?</h3>
                  <p className="text-white/80 text-sm mb-4">
                    We've helped 50+ SaaS companies reduce churn with predictive analytics.
                  </p>
                  <Link href="/contact">
                    <Button className="w-full bg-white text-[#0077B5] hover:bg-white/90">
                      Schedule a Consultation
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>

      {/* Related Content */}
      <RelatedContent 
        items={[
          {
            title: "B2B software company reduces churn by 38%",
            category: "Case Study",
            link: "/solutions/data-driven-customer-intelligence/case-studies/saas-churn-reduction",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
          },
          {
            title: "Beyond Segmentation: The Future of Customer Intelligence",
            category: "Strategy",
            link: "/solutions/data-driven-customer-intelligence/insights/beyond-segmentation",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
          },
          {
            title: "Hyper-Personalization at Scale: A Practical Guide",
            category: "Marketing",
            link: "/solutions/data-driven-customer-intelligence/insights/hyper-personalization",
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80"
          }
        ]}
      />

      <Footer />
    </div>
  );
}
