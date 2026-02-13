import { ArrowRight, Check } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function InsuranceAnalyticsBacklog() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-900 via-blue-800 to-purple-900 text-white py-20">
        <div className="container">
          <nav className="flex items-center gap-2 text-sm mb-8 text-indigo-200">
            <Link href="/" className="hover:text-white transition-colors">Services</Link>
            <span>/</span>
            <Link href="/case-studies" className="hover:text-white transition-colors">Cases</Link>
            <span>/</span>
            <span className="text-white">Insurance Analytics Backlog</span>
          </nav>

          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-3">
              Insurance Carrier Prioritizes $12M Analytics Backlog in 6 Weeks
            </h1>
            <p className="text-xl text-indigo-100">
              Data strategy sprint identified high-ROI use cases, eliminated projects that wouldn't move the needle, and created executable roadmap that aligned analytics team with business priorities.
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
              A regional property & casualty insurance carrier with $800M in annual premiums had accumulated a $12M analytics project backlog over 3 years. Business units submitted 47 requests—fraud detection models, claims cost prediction, underwriting automation, customer churn prevention, pricing optimization, agent performance dashboards. The analytics team of 8 people couldn't execute everything.
            </p>
            <p className="text-lg text-slate-700 mb-4">
              The Chief Data Officer faced impossible choices. Every business unit claimed their project was "critical." No objective framework existed to prioritize requests. The team worked on whichever project had the loudest executive sponsor, not the highest business value. Projects took 9 months on average to deliver because scope kept expanding. Stakeholders complained about slow delivery while the analytics team burned out from context-switching.
            </p>
            <p className="text-lg text-slate-700">
              The carrier needed a data strategy that objectively prioritized the backlog, killed low-value projects, sequenced high-impact initiatives, and created realistic delivery timelines that matched team capacity.
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
              NEXDYNE conducted a 6-week Data Strategy Sprint that evaluated all 47 backlog projects, scored them on business value and implementation complexity, identified 8 high-ROI initiatives to execute, killed 23 low-value projects, and built an 18-month roadmap with realistic delivery milestones based on team capacity.
            </p>

            <h3 className="text-2xl font-bold text-slate-900 mb-4">Prioritization Framework</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                <span className="text-slate-700"><strong>Business value scoring.</strong> Evaluated each project on financial impact (revenue increase, cost reduction, loss prevention), strategic alignment (regulatory compliance, competitive differentiation), and stakeholder demand (number of users, executive sponsorship). Scored 1-10 on each dimension.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                <span className="text-slate-700"><strong>Implementation complexity assessment.</strong> Scored each project on data readiness (quality, completeness, accessibility), technical difficulty (ML model complexity, integration requirements), and organizational change (process changes, training needs). Scored 1-10 on each dimension.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                <span className="text-slate-700"><strong>Value/complexity matrix.</strong> Plotted all 47 projects on 2x2 matrix. High-value, low-complexity projects (quick wins) executed first. High-value, high-complexity projects (strategic bets) sequenced based on dependencies. Low-value projects killed regardless of complexity.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                <span className="text-slate-700"><strong>Capacity planning.</strong> Calculated team capacity (8 FTEs = 14,400 hours/year after meetings, training, support). Estimated effort for each project. Sequenced projects to match capacity, avoiding overcommitment that caused previous delays.</span>
              </li>
            </ul>

            <h3 className="text-2xl font-bold text-slate-900 mb-4">Key Findings</h3>
            <p className="text-lg text-slate-700 mb-4">
              <strong>8 high-ROI projects identified:</strong> Fraud detection model ($3.2M annual savings), claims cost prediction ($2.8M savings), underwriting automation ($1.5M savings), pricing optimization ($4M revenue increase), customer churn prevention ($1.8M retention value), agent performance dashboard (strategic enabler), regulatory reporting automation (compliance requirement), data quality monitoring (foundational capability).
            </p>
            <p className="text-lg text-slate-700 mb-4">
              <strong>23 projects killed:</strong> Low-value requests that consumed resources without meaningful impact. Examples: vanity dashboards with no decision-making use case, reports duplicating existing capabilities, exploratory analyses with no defined business question.
            </p>
            <p className="text-lg text-slate-700">
              <strong>16 projects deferred:</strong> Medium-value initiatives postponed until foundational capabilities (data platform, governance, quality monitoring) were in place. Revisit in 18 months when prerequisites exist.
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
              <div className="text-5xl font-bold text-indigo-600 mb-2">$13.3M</div>
              <div className="text-slate-700">Projected value from 8 prioritized projects</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-indigo-600 mb-2">49%</div>
              <div className="text-slate-700">Backlog reduction (23 projects killed)</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-indigo-600 mb-2">6 weeks</div>
              <div className="text-slate-700">From backlog chaos to executable roadmap</div>
            </div>
          </div>

          <div className="bg-indigo-50 border-l-4 border-indigo-600 p-6 mb-8">
            <p className="text-lg text-slate-700 italic mb-4">
              "We had 47 analytics projects in the backlog and no way to prioritize them objectively. Every business unit claimed their project was critical. The team couldn't deliver fast enough, and stakeholders were frustrated. NEXDYNE's prioritization framework was a revelation—scoring projects on business value and implementation complexity gave us an objective basis to make tough decisions. We killed 23 low-value projects that would have wasted resources. The 8 high-ROI initiatives we're executing will deliver $13.3M in value. The roadmap is realistic—we're not overcommitting anymore. Team morale improved because they're working on projects that matter."
            </p>
            <p className="text-slate-900 font-semibold">
              Lisa Chen, Chief Data Officer
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Business Impact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                <span className="text-slate-700"><strong>Financial clarity:</strong> Quantified value of each project—$13.3M projected impact from 8 prioritized initiatives vs. unknown ROI from previous ad-hoc approach. Executive team approved $2.5M analytics investment based on clear business case.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                <span className="text-slate-700"><strong>Resource optimization:</strong> Eliminated 23 low-value projects that would have consumed 8,000 hours. Reallocated effort to high-impact initiatives. Team focused on 8 projects instead of context-switching across 47.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                <span className="text-slate-700"><strong>Stakeholder alignment:</strong> Transparent prioritization framework ended political battles over project sequencing. Business units accepted decisions because criteria were objective. Reduced escalations to executive team 80%.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                <span className="text-slate-700"><strong>Delivery predictability:</strong> Capacity-based roadmap set realistic expectations. Average project delivery time decreased from 9 months to 5 months because scope was defined upfront and team wasn't overcommitted.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Prioritization Matrix Section */}
      <section className="py-20 bg-slate-50">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold text-slate-900 mb-8">Prioritization Matrix</h2>
          <div className="bg-white p-8 rounded-lg border border-slate-200">
            <div className="grid grid-cols-2 gap-6">
              <div className="border-2 border-green-500 p-6 rounded-lg bg-green-50">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Quick Wins (Execute First)</h3>
                <p className="text-sm text-slate-600 mb-4">High value, low complexity</p>
                <ul className="space-y-2 text-slate-700 text-sm">
                  <li>• Fraud detection model ($3.2M savings)</li>
                  <li>• Regulatory reporting automation</li>
                  <li>• Agent performance dashboard</li>
                </ul>
              </div>

              <div className="border-2 border-yellow-500 p-6 rounded-lg bg-yellow-50">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Strategic Bets (Sequence Carefully)</h3>
                <p className="text-sm text-slate-600 mb-4">High value, high complexity</p>
                <ul className="space-y-2 text-slate-700 text-sm">
                  <li>• Pricing optimization ($4M revenue)</li>
                  <li>• Claims cost prediction ($2.8M savings)</li>
                  <li>• Underwriting automation ($1.5M savings)</li>
                </ul>
              </div>

              <div className="border-2 border-slate-300 p-6 rounded-lg bg-slate-50">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Fill-Ins (Execute When Capacity Allows)</h3>
                <p className="text-sm text-slate-600 mb-4">Low value, low complexity</p>
                <ul className="space-y-2 text-slate-700 text-sm">
                  <li>• Data quality monitoring</li>
                  <li>• Customer churn prevention ($1.8M)</li>
                </ul>
              </div>

              <div className="border-2 border-red-500 p-6 rounded-lg bg-red-50">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Kill (Eliminate Immediately)</h3>
                <p className="text-sm text-slate-600 mb-4">Low value, any complexity</p>
                <ul className="space-y-2 text-slate-700 text-sm">
                  <li>• 23 projects eliminated</li>
                  <li>• Vanity dashboards with no use case</li>
                  <li>• Duplicate reporting capabilities</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
        <div className="container max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">
            Drowning in analytics backlog?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Let's prioritize your projects and build an executable roadmap in 6 weeks.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-indigo-600 rounded-full hover:bg-indigo-50 transition-colors font-semibold">
              Contact us
            </button>
            <button className="px-8 py-3 border-2 border-white text-white rounded-full hover:bg-white hover:text-indigo-600 transition-colors font-semibold">
              View all cases
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
