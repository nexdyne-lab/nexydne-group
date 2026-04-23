import { ArrowLeft, Check } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function RetailShrinkage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white py-20">
        <div className="container">
          <nav className="flex items-center gap-2 text-sm mb-8 text-muted-foreground/50">
            <Link href="/" className="hover:text-white transition-colors">Services</Link>
            <span>/</span>
            <Link href="/capabilities/risk-resilience" className="hover:text-white transition-colors">Risk & Resilience</Link>
            <span>/</span>
            <span className="text-white">Retail Shrinkage Reduction</span>
          </nav>

          <h1 className="text-5xl md:text-6xl font-bold mb-3 max-w-4xl">
            National Retailer Reduces Shrinkage by 25% with AI
          </h1>
          <p className="text-xl text-muted-foreground/50 max-w-3xl">
            Computer vision and POS anomaly detection combined to identify theft and operational errors in real-time.
          </p>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold text-charcoal mb-6">The Challenge</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-charcoal/80 mb-6">
              A national retail chain was losing millions annually to shrinkage—a combination of shoplifting, employee theft, and administrative errors. Traditional security measures like EAS tags and security guards were expensive and often ineffective against sophisticated theft or internal collusion.
            </p>
            <p className="text-lg text-charcoal/80 mb-6">
              The retailer needed a scalable, automated solution to detect suspicious behavior at self-checkout kiosks and throughout the store without adding friction to the customer experience.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-slate-50">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold text-charcoal mb-6">The Solution</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-charcoal/80 mb-8">
              NEXDYNE implemented an integrated loss prevention platform powered by computer vision and transaction analytics.
            </p>

            <h3 className="text-2xl font-bold text-charcoal mb-4">Key Features</h3>
            <ul className="space-y-4 mb-8">
              <li className="flex gap-3">
                <Check className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-charcoal">Self-Checkout Monitoring.</strong> Overhead cameras analyzed items placed in the bagging area. If a customer scanned a cheap item but bagged an expensive one (ticket switching) or failed to scan an item (miss-scan), the system alerted the attendant instantly.
                </div>
              </li>
              <li className="flex gap-3">
                <Check className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-charcoal">POS Anomaly Detection.</strong> ML models analyzed transaction logs to flag suspicious patterns, such as excessive voids, refunds to the same credit card, or transactions occurring outside business hours, helping identify internal theft.
                </div>
              </li>
              <li className="flex gap-3">
                <Check className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-charcoal">Shelf Sweep Detection.</strong> Computer vision identified rapid, large-volume removal of high-value items (like razors or baby formula) from shelves, triggering real-time alerts to security personnel.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold text-charcoal mb-12">The Results</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">25%</div>
              <div className="text-muted-foreground">Reduction in overall shrinkage</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">3x</div>
              <div className="text-muted-foreground">ROI within first year</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">60%</div>
              <div className="text-muted-foreground">Decrease in false positive alerts</div>
            </div>
          </div>

          <div className="bg-slate-50 border-l-4 border-slate-600 p-6 mb-12">
            <p className="text-lg text-charcoal/80 italic mb-4">
              "The system paid for itself in six months. We're catching theft we didn't even know was happening, and our honest customers appreciate that we can keep prices lower by reducing losses."
            </p>
            <p className="text-charcoal font-semibold">
              Chief Operations Officer
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-700 to-slate-900 text-white">
        <div className="container max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">
            Protect your bottom line
          </h2>
          <p className="text-xl text-muted-foreground/50 mb-8">
            See how AI can secure your stores and reduce losses.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-charcoal rounded-full hover:bg-slate-100 transition-colors font-semibold">
              Contact us
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
