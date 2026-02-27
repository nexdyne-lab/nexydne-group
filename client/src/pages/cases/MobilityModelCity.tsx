import { ArrowLeft, Check } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function MobilityModelCity() {
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
            <span className="text-white">Mobility Model City</span>
          </nav>

          <h1 className="text-5xl md:text-6xl font-bold mb-3 max-w-4xl">
            European City Optimizes Traffic with Digital Twin
          </h1>
          <p className="text-xl text-muted-foreground/50 max-w-3xl">
            Real-time traffic simulation informed urban planning decisions, reducing congestion and emissions.
          </p>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold text-charcoal mb-6">The Challenge</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-charcoal/80 mb-6">
              A rapidly growing European capital faced severe traffic congestion, leading to poor air quality and frustrated citizens. Traditional traffic management systems were reactive, adjusting signal timings only after jams had formed. The city planners wanted to implement ambitious sustainability goals—more bike lanes, pedestrian zones, and low-emission zones—but feared gridlock if they disrupted existing traffic flows without proper planning.
            </p>
            <p className="text-lg text-charcoal/80 mb-6">
              They needed a way to model the complex interactions of cars, public transit, cyclists, and pedestrians to make data-driven infrastructure decisions.
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
              NEXDYNE co-created a comprehensive mobility digital twin of the entire metropolitan area.
            </p>

            <h3 className="text-2xl font-bold text-charcoal mb-4">Key Features</h3>
            <ul className="space-y-4 mb-8">
              <li className="flex gap-3">
                <Check className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-charcoal">Multi-Modal Simulation.</strong> The model aggregated data from GPS providers, traffic cameras, public transit sensors, and mobile network data to simulate the movement of millions of commuters across all modes of transport.
                </div>
              </li>
              <li className="flex gap-3">
                <Check className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-charcoal">Scenario Planning.</strong> Planners could test the impact of closing a street for a pedestrian zone, adding a new bus line, or changing traffic light logic before implementing changes in the real world.
                </div>
              </li>
              <li className="flex gap-3">
                <Check className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-charcoal">Citizen Engagement.</strong> An interactive version of the model was made public, allowing citizens to visualize the benefits of proposed changes (e.g., "See how this new bike lane reduces your commute time by reducing car traffic").
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
              <div className="text-5xl font-bold text-blue-600 mb-2">15%</div>
              <div className="text-muted-foreground">Reduction in peak congestion</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">10%</div>
              <div className="text-muted-foreground">Decrease in CO2 emissions</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">20%</div>
              <div className="text-muted-foreground">Increase in public transit usage</div>
            </div>
          </div>

          <div className="bg-slate-50 border-l-4 border-slate-600 p-6 mb-12">
            <p className="text-lg text-charcoal/80 italic mb-4">
              "The digital twin took the guesswork out of urban planning. We could show the public exactly why we were making changes and prove that the outcome would be better for everyone."
            </p>
            <p className="text-charcoal font-semibold">
              Chief Urban Planner
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-700 to-slate-900 text-white">
        <div className="container max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">
            Build a smarter city
          </h2>
          <p className="text-xl text-muted-foreground/50 mb-8">
            Leverage data to create sustainable, efficient urban environments.
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
