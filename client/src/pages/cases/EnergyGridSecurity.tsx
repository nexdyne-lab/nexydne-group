import { ArrowLeft, Check } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function EnergyGridSecurity() {
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
            <span className="text-white">Energy Grid Security</span>
          </nav>

          <h1 className="text-5xl md:text-6xl font-bold mb-3 max-w-4xl">
            Energy Grid Prevents Blackouts with Predictive Maintenance
          </h1>
          <p className="text-xl text-muted-foreground/50 max-w-3xl">
            AI-driven monitoring system identified 95% of potential ignition sources before they caused fires, protecting communities and infrastructure.
          </p>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold text-charcoal mb-6">The Challenge</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-charcoal/80 mb-6">
              A major energy utility faced increasing challenges from aging infrastructure and extreme weather events. Wildfires caused by equipment failure were a massive liability and safety risk. Traditional inspection methods—manual patrols and helicopter surveys—were slow, expensive, and often missed subtle signs of degradation until it was too late.
            </p>
            <p className="text-lg text-charcoal/80 mb-6">
              The utility needed a way to monitor thousands of miles of transmission lines in real-time, identifying potential failure points like vegetation encroachment, conductor damage, and insulator flashovers before they led to catastrophic events.
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
              NEXDYNE deployed a comprehensive grid security and predictive maintenance platform. We integrated data from smart meters, SCADA systems, weather stations, and satellite imagery into a unified data lake.
            </p>

            <h3 className="text-2xl font-bold text-charcoal mb-4">Key Capabilities</h3>
            <ul className="space-y-4 mb-8">
              <li className="flex gap-3">
                <Check className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-charcoal">AI-Powered Visual Inspection.</strong> Computer vision models analyzed drone and satellite imagery to detect vegetation growth within right-of-way zones and identify damaged hardware with 98% accuracy.
                </div>
              </li>
              <li className="flex gap-3">
                <Check className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-charcoal">Real-time Anomaly Detection.</strong> Machine learning algorithms monitored electrical waveforms to detect "high impedance" faults—often precursors to fires—that traditional protection systems missed.
                </div>
              </li>
              <li className="flex gap-3">
                <Check className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-charcoal">Dynamic Risk Modeling.</strong> A digital twin of the grid simulated stress under various weather conditions, allowing operators to preemptively de-energize high-risk lines during storms while maintaining service elsewhere.
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
              <div className="text-5xl font-bold text-primary mb-2">95%</div>
              <div className="text-muted-foreground">Ignition sources identified</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">40%</div>
              <div className="text-muted-foreground">Reduction in outage duration</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">$12M</div>
              <div className="text-muted-foreground">Annual maintenance savings</div>
            </div>
          </div>

          <div className="bg-slate-50 border-l-4 border-slate-600 p-6 mb-12">
            <p className="text-lg text-charcoal/80 italic mb-4">
              "This system has fundamentally changed how we operate. We're no longer reacting to outages; we're preventing them. The ability to see potential fire risks weeks in advance has undoubtedly saved lives and property."
            </p>
            <p className="text-charcoal font-semibold">
              Director of Grid Operations
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-700 to-slate-900 text-white">
        <div className="container max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">
            Secure your critical infrastructure
          </h2>
          <p className="text-xl text-muted-foreground/50 mb-8">
            Learn how our predictive models can protect your assets and community.
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
