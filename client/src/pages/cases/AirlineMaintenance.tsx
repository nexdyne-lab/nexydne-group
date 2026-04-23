import { ArrowLeft, Check } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function AirlineMaintenance() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white py-20">
        <div className="container">
          <nav className="flex items-center gap-2 text-sm mb-8 text-muted-foreground/50">
            <Link href="/" className="hover:text-white transition-colors">Services</Link>
            <span>/</span>
            <Link href="/capabilities/digital-twins" className="hover:text-white transition-colors">Digital Twins</Link>
            <span>/</span>
            <span className="text-white">Airline Maintenance Analytics</span>
          </nav>

          <h1 className="text-5xl md:text-6xl font-bold mb-3 max-w-4xl">
            Global Airline Improves Maintenance Planning with Digital Twins
          </h1>
          <p className="text-xl text-muted-foreground/50 max-w-3xl">
            Unified data platform and digital twin simulation optimized spare parts allocation and maintenance intervals, increasing fleet availability.
          </p>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold text-charcoal mb-6">The Challenge</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-charcoal/80 mb-6">
              A global airline struggled with optimizing its aircraft maintenance schedules. Balancing safety requirements, flight schedules, and hangar availability was a complex logistical puzzle. Often, aircraft were grounded longer than necessary due to unavailable spare parts or inefficient labor allocation.
            </p>
            <p className="text-lg text-charcoal/80 mb-6">
              The airline needed a way to predict maintenance needs more accurately and simulate the impact of different scheduling strategies on fleet availability and operational costs.
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
              NEXDYNE developed a comprehensive digital maintenance history platform and a fleet digital twin.
            </p>

            <h3 className="text-2xl font-bold text-charcoal mb-4">Key Components</h3>
            <ul className="space-y-4 mb-8">
              <li className="flex gap-3">
                <Check className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-charcoal">Unified Data Platform.</strong> We integrated data from flight logs, sensor telemetry, and maintenance records into a single source of truth for every aircraft in the fleet.
                </div>
              </li>
              <li className="flex gap-3">
                <Check className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-charcoal">Fleet Digital Twin.</strong> A simulation model allowed planners to test "what-if" scenarios. For example, "What happens to fleet availability if we extend the interval for Check C by 50 flight hours?" or "How does stocking more spare engines at Hub A vs. Hub B affect downtime?"
                </div>
              </li>
              <li className="flex gap-3">
                <Check className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-charcoal">Predictive Parts Allocation.</strong> ML algorithms predicted the demand for specific spare parts at different hubs based on flight routes and aircraft age, ensuring parts were available when needed.
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
              <div className="text-5xl font-bold text-primary mb-2">15%</div>
              <div className="text-muted-foreground">Reduction in maintenance costs</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">20%</div>
              <div className="text-muted-foreground">Increase in aircraft availability</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">30%</div>
              <div className="text-muted-foreground">Reduction in AOG (Aircraft on Ground) time</div>
            </div>
          </div>

          <div className="bg-slate-50 border-l-4 border-slate-600 p-6 mb-12">
            <p className="text-lg text-charcoal/80 italic mb-4">
              "The digital twin allows us to run experiments without risking operations. We've optimized our spare parts inventory and maintenance intervals in ways we never thought possible, saving millions while keeping our fleet in the air."
            </p>
            <p className="text-charcoal font-semibold">
              VP of Engineering & Maintenance
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-700 to-slate-900 text-white">
        <div className="container max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">
            Optimize your fleet operations
          </h2>
          <p className="text-xl text-muted-foreground/50 mb-8">
            Discover how digital twins can transform your maintenance strategy.
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
