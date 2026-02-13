import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function TelecomChurnPrediction() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {/* Breadcrumb */}
      <nav className="bg-slate-50 py-4">
        <div className="container">
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Link href="/">
              <a className="hover:text-blue-600">Home</a>
            </Link>
            <span>/</span>
            <Link href="/solutions/data-solutions">
              <a className="hover:text-blue-600">Data Solutions</a>
            </Link>
            <span>/</span>
            <Link href="/solutions/machine-learning">
              <a className="hover:text-blue-600">Machine Learning</a>
            </Link>
            <span>/</span>
            <span className="text-slate-900">Telecom Provider Cuts Churn 22% with Predictive Model</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-600 to-blue-500 text-white py-20">
        <div className="container">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold mb-3">
              Telecom Provider Cuts Churn 22% with Predictive Model
            </h1>
            <p className="text-xl mb-8">
              Real-time churn scoring identifies at-risk customers 60 days before cancellation, enabling targeted retention campaigns that save $12M annually.
            </p>
            <div className="flex flex-wrap gap-6 text-lg">
              <div>
                <div className="text-3xl font-bold">22%</div>
                <div className="text-purple-100">Churn Reduction</div>
              </div>
              <div>
                <div className="text-3xl font-bold">$12M</div>
                <div className="text-purple-100">Annual Revenue Saved</div>
              </div>
              <div>
                <div className="text-3xl font-bold">60 days</div>
                <div className="text-purple-100">Early Warning Window</div>
              </div>
              <div>
                <div className="text-3xl font-bold">2.8M</div>
                <div className="text-purple-100">Customers Scored Daily</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">The Challenge</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-slate-700 mb-4">
              A regional telecom provider with 2.8M subscribers faced escalating churn rates in a competitive market. By the time customer service noticed warning signs—support tickets, billing disputes, plan downgrades—it was often too late to prevent cancellation. Retention offers went to customers who weren't actually at risk, wasting budget on unnecessary discounts.
            </p>
            <p className="text-lg text-slate-700 mb-4">
              Their existing approach relied on manual rules: "if customer calls support 3+ times in a month, flag for retention." These rules generated too many false positives (frustrated but loyal customers) and missed subtle patterns that predicted churn (gradual usage decline, competitor price shopping, life events like relocation).
            </p>
            <p className="text-lg text-slate-700 mb-4">
              They needed a system that scored every customer's churn risk daily, identified the specific factors driving each individual's risk, and integrated with their CRM to trigger personalized retention campaigns automatically. The model had to balance precision (don't waste retention budget) with recall (don't miss high-value customers about to leave).
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-slate-50">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">The Solution</h2>
          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-lg text-slate-700 mb-4">
              NEXDYNE deployed a gradient boosting classifier that predicts 90-day churn probability for every subscriber, updated nightly. The model combines behavioral signals (usage patterns, payment history, support interactions), demographic data (contract type, tenure, device age), and external indicators (competitor promotions, local unemployment rates, seasonal moving patterns).
            </p>
            <p className="text-lg text-slate-700 mb-4">
              We engineered features that capture early warning signs: declining data usage, increased competitor website visits (inferred from browsing data), plan comparison activity, and social network effects (friends who recently churned). The model outputs not just a risk score but also the top 3 drivers for each customer, enabling personalized retention tactics.
            </p>
            <p className="text-lg text-slate-700 mb-4">
              High-risk customers trigger automated workflows in Salesforce: retention specialists receive prioritized task lists, outbound dialers queue targeted calls, and email campaigns deploy personalized offers based on churn drivers (price-sensitive customers get discounts, service-frustrated customers get priority support, feature-seekers get upgrade offers).
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Technical Approach</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">LightGBM classifier for churn probability</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Feature engineering: usage trends, support patterns</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Nightly batch scoring on Databricks</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">SHAP values for personalized retention drivers</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Integration Points</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Salesforce CRM workflow automation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Email campaign platform (Braze)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Outbound dialer prioritization</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Looker dashboard for retention team</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">The Results</h2>
          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-lg text-slate-700 mb-4">
              Churn rate dropped 22% in the first year, saving $12M in annual recurring revenue. The model achieves 78% precision at 65% recall, meaning retention efforts focus on genuinely at-risk customers while catching most potential churners before they leave. Average customer lifetime value increased 18% as saved customers stayed longer.
            </p>
            <p className="text-lg text-slate-700 mb-4">
              Retention specialists love the system because it tells them *why* each customer is at risk, not just *that* they're at risk. Conversations become consultative rather than desperate—reps address specific pain points instead of throwing generic discounts at everyone. Win-back rates for contacted customers improved from 23% to 41%.
            </p>
            <p className="text-lg text-slate-700 mb-4">
              The model identified unexpected churn drivers that informed product strategy: customers with outdated devices churn 3x faster (leading to a device upgrade program), international calling restrictions drove family plan cancellations (prompting a plan redesign), and billing complexity correlated strongly with churn (triggering a billing simplification initiative).
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-600">
              <div className="text-3xl font-bold text-purple-900 mb-2">78%</div>
              <div className="text-slate-700">Precision (customers flagged who actually churn)</div>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
              <div className="text-3xl font-bold text-blue-900 mb-2">41%</div>
              <div className="text-slate-700">Win-back Rate (up from 23%)</div>
            </div>
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
              <div className="text-3xl font-bold text-green-900 mb-2">18%</div>
              <div className="text-slate-700">Customer Lifetime Value Increase</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-blue-500 text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to reduce churn with predictive analytics?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's build churn models that identify at-risk customers early and enable targeted retention campaigns that actually work.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-purple-900 hover:bg-slate-100">
              Get in touch
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10">
              Schedule a meeting
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>
          <Footer />

    </div>
  );
}
