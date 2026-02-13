import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function FinancialFraudDetectionML() {
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
            <span className="text-slate-900">Bank Detects Fraud 40% Faster with ML Anomaly Detection</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-600 to-blue-500 text-white py-20">
        <div className="container">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold mb-3">
              Bank Detects Fraud 40% Faster with ML Anomaly Detection
            </h1>
            <p className="text-xl mb-8">
              Graph neural network identifies suspicious transaction patterns in real-time, reducing false positives 65% while catching fraud earlier.
            </p>
            <div className="flex flex-wrap gap-6 text-lg">
              <div>
                <div className="text-3xl font-bold">40%</div>
                <div className="text-purple-100">Faster Fraud Detection</div>
              </div>
              <div>
                <div className="text-3xl font-bold">65%</div>
                <div className="text-purple-100">False Positive Reduction</div>
              </div>
              <div>
                <div className="text-3xl font-bold">$18M</div>
                <div className="text-purple-100">Annual Fraud Losses Prevented</div>
              </div>
              <div>
                <div className="text-3xl font-bold">&lt;100ms</div>
                <div className="text-purple-100">Real-time Scoring Latency</div>
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
              A regional bank processing 15M transactions monthly struggled with fraud detection that generated too many false alarms while missing sophisticated fraud rings. Their rule-based system flagged 8% of transactions for manual review, overwhelming fraud analysts with false positives and creating customer friction when legitimate purchases got blocked.
            </p>
            <p className="text-lg text-slate-700 mb-4">
              Traditional fraud patterns—large purchases in foreign countries, rapid-fire transactions—were easy to catch but represented only 30% of actual fraud. Organized crime networks used subtle techniques: small test transactions to validate stolen cards, gradual spending increases to avoid velocity rules, and coordinated activity across multiple compromised accounts that looked normal in isolation.
            </p>
            <p className="text-lg text-slate-700 mb-4">
              The bank needed real-time fraud scoring that considered network effects (is this merchant connected to other fraud cases?), behavioral anomalies (does this purchase fit the customer's profile?), and evolving tactics (can the model learn new fraud patterns automatically?). The solution had to score transactions in under 100ms to fit within payment authorization flows.
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
              NEXDYNE deployed a two-stage fraud detection system: a fast gradient boosting model for real-time transaction scoring, plus a graph neural network (GNN) that runs hourly to identify fraud rings and update entity risk scores. The GNN builds a network of relationships—cardholders, merchants, devices, IP addresses—and propagates fraud signals through connected entities.
            </p>
            <p className="text-lg text-slate-700 mb-4">
              The real-time model combines transaction features (amount, merchant category, location), customer behavior (spending patterns, typical merchants, time-of-day preferences), and entity risk scores from the GNN (is this merchant flagged? is this device associated with fraud?). It outputs a fraud probability and explanation in 80ms, well within the payment network's authorization window.
            </p>
            <p className="text-lg text-slate-700 mb-4">
              Fraud analysts review high-risk transactions in a custom dashboard that shows network context: "This merchant has processed 47 chargebacks this month, primarily from accounts that also transacted at these 3 other flagged merchants." The system learns from analyst feedback—confirmed fraud cases retrain the model nightly, and new fraud patterns get incorporated automatically.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Technical Approach</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">LightGBM for real-time transaction scoring</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Graph neural network for fraud ring detection</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Feature engineering: behavioral anomalies, network risk</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Nightly retraining on confirmed fraud cases</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Integration Points</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Real-time API in payment authorization flow</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Fraud analyst dashboard with network visualization</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Case management system for investigations</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Feedback loop for model improvement</span>
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
              Fraud detection speed improved 40%—the system now catches suspicious activity an average of 2.3 transactions earlier than the old rule-based approach, preventing larger losses before fraudsters max out stolen cards. False positive rates dropped 65%, reducing manual review volume from 8% to 2.8% of transactions and improving customer experience.
            </p>
            <p className="text-lg text-slate-700 mb-4">
              The bank prevented $18M in fraud losses in the first year while reducing operational costs—fewer false positives meant the same analyst team could handle higher transaction volumes. Customer complaints about declined legitimate purchases fell 52%, and authorization approval rates improved 3.2 percentage points.
            </p>
            <p className="text-lg text-slate-700 mb-4">
              The graph neural network uncovered fraud rings that rule-based systems missed entirely: a network of 23 compromised accounts funneling small purchases through 7 shell merchant accounts, a device fingerprint associated with 142 stolen cards across 8 months, and a geographic cluster of "card-not-present" fraud targeting elderly customers. These insights led to 14 law enforcement referrals and permanent merchant blocks.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-600">
              <div className="text-3xl font-bold text-purple-900 mb-2">2.8%</div>
              <div className="text-slate-700">Manual Review Rate (down from 8%)</div>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
              <div className="text-3xl font-bold text-blue-900 mb-2">52%</div>
              <div className="text-slate-700">Reduction in Customer Complaints</div>
            </div>
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
              <div className="text-3xl font-bold text-green-900 mb-2">14</div>
              <div className="text-slate-700">Law Enforcement Referrals</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-blue-500 text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to modernize fraud detection with ML?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's build real-time fraud detection systems that catch sophisticated fraud patterns while reducing false positives and customer friction.
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
