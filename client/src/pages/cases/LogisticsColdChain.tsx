import { ArrowLeft, Check } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function LogisticsColdChain() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white py-20">
        <div className="container">
          <nav className="flex items-center gap-2 text-sm mb-8 text-muted-foreground/50">
            <Link href="/" className="hover:text-white transition-colors">Services</Link>
            <span>/</span>
            <Link href="/capabilities/internet-of-things" className="hover:text-white transition-colors">Internet of Things</Link>
            <span>/</span>
            <span className="text-white">Logistics Cold Chain</span>
          </nav>

          <h1 className="text-5xl md:text-6xl font-bold mb-3 max-w-4xl">
            Pharma Logistics Firm Ensures Product Safety with IoT Cold Chain
          </h1>
          <p className="text-xl text-muted-foreground/50 max-w-3xl">
            Real-time temperature monitoring and predictive alerts reduced spoilage by 90% for sensitive vaccine shipments.
          </p>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold text-charcoal mb-6">The Challenge</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-charcoal/80 mb-6">
              A global logistics provider specializing in pharmaceuticals faced strict regulatory requirements for transporting temperature-sensitive vaccines and biologics. Even minor temperature excursions could ruin an entire shipment, costing millions and endangering public health. Their existing data loggers only provided retrospective data—telling them a shipment was spoiled only after it arrived.
            </p>
            <p className="text-lg text-charcoal/80 mb-6">
              They needed a real-time monitoring solution that could alert drivers and dispatchers to temperature deviations immediately, allowing for corrective action before spoilage occurred.
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
              NEXDYNE deployed an end-to-end IoT cold chain platform with cellular-connected sensors and a centralized control tower.
            </p>

            <h3 className="text-2xl font-bold text-charcoal mb-4">Key Features</h3>
            <ul className="space-y-4 mb-8">
              <li className="flex gap-3">
                <Check className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-charcoal">Real-Time Telemetry.</strong> Smart sensors tracked temperature, humidity, light exposure, and shock in real-time, transmitting data via 5G/LTE-M networks.
                </div>
              </li>
              <li className="flex gap-3">
                <Check className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-charcoal">Predictive Alerts.</strong> ML algorithms analyzed trends to predict temperature breaches before they happened (e.g., "Container A will exceed 8°C in 30 minutes based on current ambient temperature").
                </div>
              </li>
              <li className="flex gap-3">
                <Check className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-charcoal">Automated Compliance.</strong> The system automatically generated audit-ready reports for FDA and EMA compliance, eliminating manual paperwork and data entry errors.
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
              <div className="text-5xl font-bold text-blue-600 mb-2">90%</div>
              <div className="text-muted-foreground">Reduction in product spoilage</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-muted-foreground">Regulatory compliance visibility</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">$5M</div>
              <div className="text-muted-foreground">Annual insurance savings</div>
            </div>
          </div>

          <div className="bg-slate-50 border-l-4 border-slate-600 p-6 mb-12">
            <p className="text-lg text-charcoal/80 italic mb-4">
              "We've moved from 'hoping it arrives safely' to 'knowing it's safe every second of the journey.' Our clients trust us with their most critical life-saving products because we have the data to prove our reliability."
            </p>
            <p className="text-charcoal font-semibold">
              VP of Quality Assurance
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-700 to-slate-900 text-white">
        <div className="container max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">
            Secure your supply chain
          </h2>
          <p className="text-xl text-muted-foreground/50 mb-8">
            Ensure the integrity of your sensitive shipments with IoT.
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
