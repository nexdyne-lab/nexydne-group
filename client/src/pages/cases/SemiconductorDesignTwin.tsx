import { ArrowLeft, Check } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function SemiconductorDesignTwin() {
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
            <span className="text-white">Semiconductor Design Twin</span>
          </nav>

          <h1 className="text-5xl md:text-6xl font-bold mb-3 max-w-4xl">
            Chipmaker Accelerates Design Cycles with Digital Twins
          </h1>
          <p className="text-xl text-muted-foreground/50 max-w-3xl">
            Virtual simulation of manufacturing processes improved yield and reduced time-to-market for next-gen processors.
          </p>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold text-charcoal mb-6">The Challenge</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-charcoal/80 mb-6">
              A leading semiconductor manufacturer faced diminishing returns in Moore's Law. Developing new 3nm process nodes was becoming exponentially expensive and time-consuming. Physical prototyping cycles took months, and minor design flaws discovered late in the process cost millions in re-tooling and lost market opportunity.
            </p>
            <p className="text-lg text-charcoal/80 mb-6">
              They needed a way to simulate the entire fabrication process virtually, allowing engineers to test and optimize designs before committing to silicon.
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
              NEXDYNE implemented a physics-based digital twin of the fabrication plant and the lithography process.
            </p>

            <h3 className="text-2xl font-bold text-charcoal mb-4">Key Innovations</h3>
            <ul className="space-y-4 mb-8">
              <li className="flex gap-3">
                <Check className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-charcoal">Virtual Metrology.</strong> We used ML models to predict wafer quality metrics based on equipment sensor data, effectively creating "virtual measurements" for every step of the process without slowing down production for physical inspection.
                </div>
              </li>
              <li className="flex gap-3">
                <Check className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-charcoal">Process Simulation.</strong> Engineers could simulate the impact of parameter changes (e.g., temperature, pressure, exposure time) on the final chip structure, optimizing recipes in the digital realm.
                </div>
              </li>
              <li className="flex gap-3">
                <Check className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-charcoal">Yield Prediction.</strong> The system identified design patterns likely to cause manufacturing defects, allowing designers to modify layouts for higher manufacturability (DFM) early in the cycle.
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
              <div className="text-5xl font-bold text-blue-600 mb-2">25%</div>
              <div className="text-muted-foreground">Increase in first-time-right designs</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">30%</div>
              <div className="text-muted-foreground">Reduction in root cause analysis time</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">20%</div>
              <div className="text-muted-foreground">Increase in engineering capacity</div>
            </div>
          </div>

          <div className="bg-slate-50 border-l-4 border-slate-600 p-6 mb-12">
            <p className="text-lg text-charcoal/80 italic mb-4">
              "The digital twin has become our playground for innovation. We can fail a thousand times in the simulation to succeed once in the fab, and that one success is all that matters."
            </p>
            <p className="text-charcoal font-semibold">
              VP of R&D
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-700 to-slate-900 text-white">
        <div className="container max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">
            Accelerate your innovation
          </h2>
          <p className="text-xl text-muted-foreground/50 mb-8">
            See how digital twins can transform your R&D and manufacturing.
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
