import { ArrowRight, Check } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function ManufacturerDataMonetization() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-[#4169FF] text-white py-20">
        <div className="container">
          <nav className="flex items-center gap-2 text-sm mb-8 text-purple-200">
            <Link href="/" className="hover:text-white transition-colors">Services</Link>
            <span>/</span>
            <Link href="/case-studies" className="hover:text-white transition-colors">Cases</Link>
            <span>/</span>
            <span className="text-white">Manufacturer Data Monetization</span>
          </nav>

          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-3">
              Manufacturer Identifies $4M Revenue Opportunity Through Data Monetization
            </h1>
            <p className="text-xl text-purple-100">
              Data strategy engagement mapped equipment telemetry landscape and built roadmap to launch predictive maintenance subscription service generating recurring revenue.
            </p>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">The Challenge</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-slate-700 mb-4">
              A mid-market industrial equipment manufacturer with $200M annual revenue collected massive amounts of telemetry data from 8,000 machines deployed at customer sites—vibration sensors, temperature readings, operating hours, fault codes. The data sat in AWS S3 buckets, used only for warranty claim investigations when equipment failed.
            </p>
            <p className="text-lg text-slate-700 mb-4">
              The CEO saw competitors launching "equipment-as-a-service" offerings with predictive maintenance capabilities. Customers asked if the manufacturer could predict failures before they happened. The product team proposed building a predictive maintenance platform but had no data strategy—no clarity on what data existed, what condition it was in, or which use cases would generate the most value.
            </p>
            <p className="text-lg text-slate-700">
              The manufacturer needed a data strategy that mapped their current data landscape, identified monetization opportunities, prioritized use cases by ROI, and created an executable roadmap that aligned engineering resources with business priorities.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-slate-50">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">The Solution</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-slate-700 mb-6">
              NEXDYNE conducted a 6-week Data Strategy Sprint that inventoried all data assets, interviewed stakeholders across product, engineering, sales, and customer success teams, identified 12 potential use cases, and prioritized them by revenue potential and implementation complexity. Delivered an executable 18-month roadmap with phased milestones.
            </p>

            <h3 className="text-2xl font-bold text-slate-900 mb-4">Data Strategy Sprint Process</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                <span className="text-slate-700"><strong>Week 1-2: Data landscape mapping.</strong> Cataloged all data sources—telemetry streams from IoT devices, warranty claims database, service technician notes, customer contracts, parts inventory. Assessed data quality, completeness, and accessibility. Identified gaps (missing sensor types, inconsistent data formats across equipment generations).</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                <span className="text-slate-700"><strong>Week 3: Stakeholder interviews.</strong> Conducted 15 interviews with product managers, engineers, sales leaders, and customer success managers. Surfaced pain points (customers calling about failures that could have been predicted, lost revenue from unplanned downtime, warranty costs from preventable failures).</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                <span className="text-slate-700"><strong>Week 4: Use case identification.</strong> Brainstormed 12 potential use cases: predictive maintenance alerts, equipment health dashboards, usage-based pricing models, warranty fraud detection, parts demand forecasting, remote diagnostics, energy optimization recommendations, customer benchmarking reports.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                <span className="text-slate-700"><strong>Week 5: Prioritization framework.</strong> Scored each use case on revenue potential, customer willingness to pay, implementation complexity, data readiness, and competitive differentiation. Predictive maintenance subscription service scored highest—$4M annual recurring revenue potential, high customer demand, feasible with existing telemetry data.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                <span className="text-slate-700"><strong>Week 6: Roadmap creation.</strong> Built 18-month phased roadmap. Phase 1 (months 1-6): Build predictive maintenance MVP for one equipment line, pilot with 10 customers. Phase 2 (months 7-12): Expand to all equipment lines, launch commercial offering. Phase 3 (months 13-18): Add usage-based pricing and customer benchmarking features.</span>
              </li>
            </ul>

            <h3 className="text-2xl font-bold text-slate-900 mb-4">Key Deliverables</h3>
            <p className="text-lg text-slate-700 mb-4">
              We delivered a 40-page strategy document with data catalog, use case business cases (revenue projections, cost estimates, ROI calculations), prioritization matrix, technical architecture recommendations, and detailed roadmap with resource requirements. More importantly, we built a proof-of-concept predictive maintenance model during the engagement using historical failure data to prove the approach worked.
            </p>
            <p className="text-lg text-slate-700">
              The proof-of-concept predicted bearing failures 2 weeks in advance with 82% accuracy. Demonstrated to the executive team that the roadmap wasn't theoretical—it was executable. The CEO approved $1.2M investment to build the commercial platform based on the strategy.
            </p>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold text-slate-900 mb-8">The Results</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-600 mb-2">$4M</div>
              <div className="text-slate-700">Projected annual recurring revenue</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-600 mb-2">12</div>
              <div className="text-slate-700">Use cases identified and prioritized</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-600 mb-2">6 weeks</div>
              <div className="text-slate-700">From kickoff to executive approval</div>
            </div>
          </div>

          <div className="bg-purple-50 border-l-4 border-purple-600 p-6 mb-8">
            <p className="text-lg text-slate-700 italic mb-4">
              "Before the strategy sprint, we knew we had valuable telemetry data but no idea how to monetize it. NEXDYNE mapped our entire data landscape, interviewed our teams, and identified 12 potential use cases in 6 weeks. The prioritization framework was eye-opening—predictive maintenance had 3x the revenue potential of other ideas. The proof-of-concept they built during the engagement proved the roadmap worked. We approved the $1.2M investment on the spot. Now we're launching a subscription service that will generate $4M annually."
            </p>
            <p className="text-slate-900 font-semibold">
              David Martinez, Chief Product Officer
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Business Impact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                <span className="text-slate-700"><strong>Revenue diversification:</strong> Predictive maintenance subscription service created new recurring revenue stream, reducing dependence on equipment sales. Projected $4M ARR at 50% gross margin.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                <span className="text-slate-700"><strong>Customer retention:</strong> Predictive maintenance increased customer stickiness. Customers using the service renewed equipment service contracts at 95% rate vs. 78% industry average.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                <span className="text-slate-700"><strong>Competitive differentiation:</strong> Launched predictive maintenance offering 9 months ahead of competitors. Sales team closed 3 major deals citing predictive capabilities as key differentiator.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                <span className="text-slate-700"><strong>Strategic alignment:</strong> Roadmap aligned engineering resources with highest-ROI opportunities. Eliminated 4 low-value projects that would have consumed $800K in development costs.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-20 bg-slate-50">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold text-slate-900 mb-8">18-Month Roadmap</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border-l-4 border-purple-600">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Phase 1: MVP Development (Months 1-6)</h3>
              <ul className="space-y-2 text-slate-700">
                <li>• Build predictive maintenance ML models for one equipment line (hydraulic presses)</li>
                <li>• Develop customer-facing dashboard showing equipment health scores and failure predictions</li>
                <li>• Pilot with 10 customers, collect feedback, validate willingness to pay</li>
                <li>• Target: 82% prediction accuracy, 2-week advance warning on failures</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border-l-4 border-purple-600">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Phase 2: Commercial Launch (Months 7-12)</h3>
              <ul className="space-y-2 text-slate-700">
                <li>• Expand predictive models to all 6 equipment lines</li>
                <li>• Launch subscription service at $500/machine/month pricing</li>
                <li>• Integrate with customer maintenance management systems (CMMS)</li>
                <li>• Target: 200 machines under subscription, $1.2M ARR</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border-l-4 border-purple-600">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Phase 3: Feature Expansion (Months 13-18)</h3>
              <ul className="space-y-2 text-slate-700">
                <li>• Add usage-based pricing tier (pay-per-use model for low-utilization equipment)</li>
                <li>• Launch customer benchmarking reports (compare equipment efficiency vs. industry peers)</li>
                <li>• Develop energy optimization recommendations (reduce operating costs 15-20%)</li>
                <li>• Target: 500 machines under subscription, $3M ARR</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-red-600 text-white">
        <div className="container max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to monetize your data assets?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Let's map your data landscape and identify high-ROI opportunities in 6 weeks.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-purple-600 rounded-full hover:bg-purple-50 transition-colors font-semibold">
              Contact us
            </button>
            <button className="px-8 py-3 border-2 border-white text-white rounded-full hover:bg-white hover:text-purple-600 transition-colors font-semibold">
              View all cases
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
