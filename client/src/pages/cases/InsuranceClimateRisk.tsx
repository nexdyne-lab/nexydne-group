import { ArrowLeft, Check } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function InsuranceClimateRisk() {
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
            <span className="text-white">Insurance Climate Risk</span>
          </nav>

          <h1 className="text-5xl md:text-6xl font-bold mb-3 max-w-4xl">
            Insurer Models Climate Risk to Protect Portfolios
          </h1>
          <p className="text-xl text-muted-foreground/50 max-w-3xl">
            Advanced geospatial analytics and climate modeling enabled more accurate underwriting and portfolio diversification.
          </p>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold text-charcoal mb-6">The Challenge</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-charcoal/80 mb-6">
              A global property and casualty insurer faced mounting losses from increasingly frequent and severe weather events. Historical loss data was no longer a reliable predictor of future risk due to climate change. The insurer's existing models failed to account for granular, localized risks like flash flooding or urban heat islands.
            </p>
            <p className="text-lg text-charcoal/80 mb-6">
              To remain solvent and competitive, they needed a forward-looking risk model that could quantify the impact of climate change on their property portfolio over 5, 10, and 20-year horizons.
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
              NEXDYNE built a next-generation climate risk engine integrating terabytes of geospatial and environmental data.
            </p>

            <h3 className="text-2xl font-bold text-charcoal mb-4">Key Features</h3>
            <ul className="space-y-4 mb-8">
              <li className="flex gap-3">
                <Check className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-charcoal">Hyper-Local Risk Scoring.</strong> We combined satellite elevation data, soil permeability maps, and climate projections to assess flood and fire risk at the individual property level, not just by zip code.
                </div>
              </li>
              <li className="flex gap-3">
                <Check className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-charcoal">Portfolio Stress Testing.</strong> The platform simulated thousands of climate scenarios (e.g., "1-in-100 year storm becomes 1-in-20 year storm") to identify concentration risks and capital requirements.
                </div>
              </li>
              <li className="flex gap-3">
                <Check className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-charcoal">Dynamic Pricing Models.</strong> Underwriters received real-time risk adjustments for new policies, allowing them to price coverage accurately based on current and future climate exposure.
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
              <div className="text-muted-foreground">Improvement in loss ratio</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">20%</div>
              <div className="text-muted-foreground">Reduction in capital requirements</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-muted-foreground">Portfolio visibility</div>
            </div>
          </div>

          <div className="bg-slate-50 border-l-4 border-slate-600 p-6 mb-12">
            <p className="text-lg text-charcoal/80 italic mb-4">
              "We can now distinguish between a risky property and a safe one on the same street. This granularity allows us to write business our competitors run from, while avoiding the risks they blindly accept."
            </p>
            <p className="text-charcoal font-semibold">
              Chief Risk Officer
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-700 to-slate-900 text-white">
        <div className="container max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">
            Future-proof your portfolio
          </h2>
          <p className="text-xl text-muted-foreground/50 mb-8">
            Understand and mitigate your climate risk exposure.
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
