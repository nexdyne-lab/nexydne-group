import { ArrowRight, Check } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function FinancialFraudDetection() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 text-white py-20">
        <div className="container">
          <nav className="flex items-center gap-2 text-sm mb-8 text-muted-foreground/50">
            <Link href="/" className="hover:text-white transition-colors">Services</Link>
            <span>/</span>
            <Link href="/case-studies" className="hover:text-white transition-colors">Cases</Link>
            <span>/</span>
            <span className="text-white">Financial Fraud Detection</span>
          </nav>

          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-3">
              Financial Services Firm Detects Fraud in Real-Time
            </h1>
            <p className="text-xl text-muted-foreground/50">
              Real-time streaming platform processes 50K transactions/second with sub-100ms fraud detection latency, blocking $12M in fraudulent transactions annually.
            </p>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold text-charcoal mb-6">The Challenge</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-charcoal/80 mb-4">
              A regional payment processor handling credit and debit card transactions for 5,000 merchants struggled with fraud detection. Their batch-based system analyzed transactions overnight, identifying fraudulent patterns 12-24 hours after transactions cleared. By the time fraud was detected, money had already moved and chargebacks were inevitable.
            </p>
            <p className="text-lg text-charcoal/80 mb-4">
              The fraud team reviewed rule-based alerts manually—80% false positives that consumed analyst time while sophisticated fraud slipped through. Merchants complained about legitimate transactions being declined (false positives) while fraudsters exploited gaps in rule coverage. The company absorbed $15M in fraud losses annually plus operational costs of investigating thousands of false alerts.
            </p>
            <p className="text-lg text-charcoal/80">
              The firm needed a real-time fraud detection system that scored transactions in milliseconds, learned from new fraud patterns automatically, and reduced false positives without increasing fraud losses.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-slate-50">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold text-charcoal mb-6">The Solution</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-charcoal/80 mb-6">
              NEXDYNE built a real-time streaming platform that ingested transaction data, enriched it with customer behavior features, scored fraud risk using ML models, and returned decisions in under 100ms. Implementation took 12 weeks from architecture design to production cutover.
            </p>

            <h3 className="text-2xl font-bold text-charcoal mb-4">Architecture</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                <span className="text-charcoal/80"><strong>Streaming ingestion:</strong> Apache Kafka consumed transaction events from payment gateway (Authorize.Net) at 50K messages/second. Separate topics for authorization requests, settlement confirmations, and chargeback notifications.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                <span className="text-charcoal/80"><strong>Feature engineering:</strong> Apache Flink streaming jobs calculated real-time features—transaction velocity (count in last hour), geographic anomalies (distance from previous transaction), merchant risk score, device fingerprint matches. Features stored in Redis for sub-10ms lookup.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                <span className="text-charcoal/80"><strong>ML scoring:</strong> Gradient boosting models (LightGBM) deployed as REST APIs on AWS Lambda. Models trained daily on labeled fraud data (confirmed fraud + legitimate transactions). Ensemble of 3 models voted on final fraud probability score.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                <span className="text-charcoal/80"><strong>Decision engine:</strong> Rules engine combined ML scores with business policies (transaction limits, merchant risk tiers, customer whitelist). Transactions scored above threshold declined automatically. Borderline cases routed to fraud analysts for manual review.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                <span className="text-charcoal/80"><strong>Data warehouse:</strong> Snowflake stored historical transactions, fraud labels, and model performance metrics. Analysts queried data to investigate fraud patterns and retrain models.</span>
              </li>
            </ul>

            <h3 className="text-2xl font-bold text-charcoal mb-4">Implementation Approach</h3>
            <p className="text-lg text-charcoal/80 mb-4">
              We ran the new system in shadow mode for 4 weeks—scoring transactions in real-time but not blocking them. Validated that ML models caught fraud the old system missed while reducing false positives 60%. Tuned decision thresholds based on business tolerance for fraud losses vs. customer friction.
            </p>
            <p className="text-lg text-charcoal/80">
              We trained 6 fraud analysts and 2 data engineers to operate the platform—investigate model decisions, label new fraud patterns, retrain models weekly, and adjust decision rules. The fraud team now owns the models and can adapt to emerging fraud tactics independently.
            </p>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold text-charcoal mb-8">The Results</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-5xl font-bold text-indigo-600 mb-2">78%</div>
              <div className="text-charcoal/80">Reduction in fraud losses</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-indigo-600 mb-2">65%</div>
              <div className="text-charcoal/80">Decrease in false positives</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-indigo-600 mb-2">&lt;100ms</div>
              <div className="text-charcoal/80">Fraud scoring latency</div>
            </div>
          </div>

          <div className="bg-indigo-50 border-l-4 border-indigo-600 p-6 mb-8">
            <p className="text-lg text-charcoal/80 italic mb-4">
              "The real-time fraud platform was a game-changer. Before, we detected fraud 24 hours too late—money gone, chargebacks inevitable. Now we block fraudulent transactions in milliseconds, before funds move. Fraud losses dropped 78% in the first year. Just as important, false positives decreased 65%, so we're not declining legitimate customers. The ML models adapt to new fraud patterns automatically—we're not chasing fraudsters with static rules anymore."
            </p>
            <p className="text-charcoal font-semibold">
              Jennifer Park, VP of Risk Management
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <h3 className="text-2xl font-bold text-charcoal mb-4">Business Impact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                <span className="text-charcoal/80"><strong>Financial savings:</strong> Blocked $12M in fraudulent transactions annually. Chargeback rates decreased from 0.8% to 0.2%, saving $3.2M in chargeback fees and operational costs.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                <span className="text-charcoal/80"><strong>Customer experience:</strong> False positive reduction improved authorization rates 4.2%. Legitimate customers no longer had cards declined incorrectly, reducing customer service complaints 45%.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                <span className="text-charcoal/80"><strong>Operational efficiency:</strong> Automated fraud detection reduced manual review workload 70%. Fraud analysts focused on sophisticated fraud rings instead of investigating false alerts.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                <span className="text-charcoal/80"><strong>Merchant retention:</strong> Lower fraud rates and fewer false declines improved merchant satisfaction scores 38%. Merchant churn decreased 22%.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-20 bg-slate-50">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold text-charcoal mb-8">Technology Stack</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <h3 className="text-xl font-bold text-charcoal mb-3">Streaming Platform</h3>
              <ul className="space-y-2 text-charcoal/80">
                <li>• Apache Kafka (event streaming)</li>
                <li>• Apache Flink (stream processing)</li>
                <li>• Redis (feature store)</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <h3 className="text-xl font-bold text-charcoal mb-3">ML & Scoring</h3>
              <ul className="space-y-2 text-charcoal/80">
                <li>• Python (LightGBM, scikit-learn)</li>
                <li>• AWS Lambda (model serving)</li>
                <li>• MLflow (experiment tracking)</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <h3 className="text-xl font-bold text-charcoal mb-3">Data Platform</h3>
              <ul className="space-y-2 text-charcoal/80">
                <li>• Snowflake data warehouse</li>
                <li>• AWS S3 (data lake)</li>
                <li>• dbt (data transformation)</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <h3 className="text-xl font-bold text-charcoal mb-3">Monitoring & Ops</h3>
              <ul className="space-y-2 text-charcoal/80">
                <li>• Datadog (system monitoring)</li>
                <li>• Grafana (model performance dashboards)</li>
                <li>• PagerDuty (alerting)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-indigo-900 text-white">
        <div className="container max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to build real-time ML systems?
          </h2>
          <p className="text-xl text-muted-foreground/50 mb-8">
            Let's talk about streaming platforms that turn milliseconds into competitive advantage.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-charcoal rounded-full hover:bg-slate-100 transition-colors font-semibold">
              Contact us
            </button>
            <button className="px-8 py-3 border-2 border-white text-white rounded-full hover:bg-white hover:text-charcoal transition-colors font-semibold">
              View all cases
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
