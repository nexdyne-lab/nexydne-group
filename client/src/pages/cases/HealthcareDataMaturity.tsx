import { ArrowRight, Check } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function HealthcareDataMaturity() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-900 via-cyan-800 to-blue-900 text-white py-20">
        <div className="container">
          <nav className="flex items-center gap-2 text-sm mb-8 text-teal-200">
            <Link href="/" className="hover:text-white transition-colors">Services</Link>
            <span>/</span>
            <Link href="/case-studies" className="hover:text-white transition-colors">Cases</Link>
            <span>/</span>
            <span className="text-white">Healthcare Data Maturity</span>
          </nav>

          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-3">
              Healthcare System Achieves Level 3 Data Maturity in 18 Months
            </h1>
            <p className="text-xl text-teal-100">
              Maturity assessment and phased roadmap transformed ad-hoc reporting culture into self-service analytics organization where clinical teams answer their own questions without IT bottlenecks.
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
              A 12-hospital healthcare system with 3,000 physicians struggled with data-driven decision-making. Clinical quality teams, population health managers, and operational leaders needed data to improve outcomes and reduce costs, but every analysis required IT support. Analysts spent 80% of their time extracting data from disparate systems and only 20% analyzing it.
            </p>
            <p className="text-lg text-slate-700 mb-4">
              The Chief Medical Information Officer commissioned a data maturity assessment that revealed Level 1 maturity (ad-hoc reporting). No centralized data platform existed. Each department built their own Excel-based reports pulling data manually from EHRs, billing systems, and lab databases. Data definitions were inconsistent—"readmission rate" calculated differently across departments. No data governance, no self-service capabilities, no predictive analytics.
            </p>
            <p className="text-lg text-slate-700">
              The healthcare system needed a data strategy that assessed current maturity, defined target state (Level 3: self-service analytics with predictive capabilities), and built a phased roadmap to close the gap without disrupting clinical operations.
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
              NEXDYNE conducted a 4-week data maturity assessment using a 5-level framework (Level 1: Ad-hoc, Level 2: Repeatable, Level 3: Defined, Level 4: Managed, Level 5: Optimized). Assessed people, processes, technology, and governance across 8 dimensions. Identified gaps between current state (Level 1) and target state (Level 3). Built 18-month roadmap with phased milestones.
            </p>

            <h3 className="text-2xl font-bold text-slate-900 mb-4">Maturity Assessment Framework</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                <span className="text-slate-700"><strong>Data platform maturity.</strong> Current: No centralized platform, data scattered across operational systems. Target: Unified data warehouse with governed data models, self-service query access.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                <span className="text-slate-700"><strong>Analytics capabilities.</strong> Current: Manual Excel-based reporting, no predictive analytics. Target: Self-service BI dashboards, ML models for readmission prediction and resource forecasting.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                <span className="text-slate-700"><strong>Data governance.</strong> Current: No governance, inconsistent definitions, no data quality monitoring. Target: Data stewardship program, certified data sets, automated quality checks.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                <span className="text-slate-700"><strong>Organizational culture.</strong> Current: IT-dependent reporting, analysts spend 80% time on data extraction. Target: Self-service culture, business users answer own questions, analysts focus on advanced analytics.</span>
              </li>
            </ul>

            <h3 className="text-2xl font-bold text-slate-900 mb-4">18-Month Roadmap</h3>
            <p className="text-lg text-slate-700 mb-4">
              <strong>Phase 1 (Months 1-6): Build foundation.</strong> Deploy Snowflake data warehouse, migrate clinical and financial data from source systems, establish data governance council, define standard metrics (readmission rate, length of stay, cost per case). Train 20 analysts on SQL and Tableau.
            </p>
            <p className="text-lg text-slate-700 mb-4">
              <strong>Phase 2 (Months 7-12): Enable self-service.</strong> Launch Tableau dashboards for quality reporting, population health, and operational metrics. Certify 50 business users on self-service analytics. Implement data catalog so users discover available datasets. Reduce IT reporting requests 60%.
            </p>
            <p className="text-lg text-slate-700">
              <strong>Phase 3 (Months 13-18): Add predictive capabilities.</strong> Build ML models for 30-day readmission prediction, ED visit forecasting, and high-risk patient identification. Deploy models into clinical workflows. Achieve Level 3 maturity—self-service analytics with predictive capabilities embedded in operations.
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
              <div className="text-5xl font-bold text-teal-600 mb-2">Level 3</div>
              <div className="text-slate-700">Data maturity achieved (from Level 1)</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-teal-600 mb-2">75%</div>
              <div className="text-slate-700">Reduction in IT reporting requests</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-teal-600 mb-2">18 months</div>
              <div className="text-slate-700">From ad-hoc to self-service analytics</div>
            </div>
          </div>

          <div className="bg-teal-50 border-l-4 border-teal-600 p-6 mb-8">
            <p className="text-lg text-slate-700 italic mb-4">
              "The maturity assessment was a wake-up call. We were at Level 1—every analysis required IT support, data definitions were inconsistent, no one could answer their own questions. The roadmap gave us a clear path to Level 3. In 18 months we built a data warehouse, launched self-service dashboards, and deployed predictive models for readmission risk. IT reporting requests dropped 75% because clinical teams can now answer their own questions. Analysts shifted from data extraction to advanced analytics. The readmission prediction model alone saved $2.8M by identifying high-risk patients before discharge."
            </p>
            <p className="text-slate-900 font-semibold">
              Dr. Michael Rodriguez, Chief Medical Information Officer
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Business Impact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                <span className="text-slate-700"><strong>Clinical outcomes:</strong> Readmission prediction model identified 1,200 high-risk patients annually. Care coordination interventions reduced 30-day readmissions 18%, saving $2.8M in penalties and improving patient outcomes.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                <span className="text-slate-700"><strong>Operational efficiency:</strong> Self-service analytics reduced IT reporting workload 75%. 6 FTEs reallocated from manual reporting to advanced analytics projects. Quality reporting time decreased from 3 weeks to 2 hours.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                <span className="text-slate-700"><strong>Data governance:</strong> Standardized metric definitions eliminated inconsistencies. "Readmission rate" calculated identically across all departments. Data stewardship program ensured data quality—error rates decreased 65%.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                <span className="text-slate-700"><strong>Cultural transformation:</strong> Shifted from IT-dependent reporting to self-service analytics culture. 50 certified business users answer their own questions. Analysts focus on predictive models instead of Excel reports.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Maturity Levels Section */}
      <section className="py-20 bg-slate-50">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold text-slate-900 mb-8">Data Maturity Framework</h2>
          <div className="space-y-4">
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Level 1: Ad-hoc (Starting Point)</h3>
              <p className="text-slate-700">Manual reporting, no centralized platform, inconsistent definitions, IT-dependent analytics.</p>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Level 2: Repeatable</h3>
              <p className="text-slate-700">Standardized reports, basic data warehouse, some governance, still IT-dependent for custom analysis.</p>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Level 3: Defined (Target Achieved)</h3>
              <p className="text-slate-700">Self-service analytics, certified data sets, predictive models, business users answer own questions.</p>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Level 4: Managed</h3>
              <p className="text-slate-700">Real-time analytics, embedded ML in workflows, proactive insights, continuous improvement culture.</p>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Level 5: Optimized</h3>
              <p className="text-slate-700">AI-driven decision automation, data monetization, industry-leading capabilities, competitive advantage.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-teal-600 to-blue-600 text-white">
        <div className="container max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to assess your data maturity?
          </h2>
          <p className="text-xl text-teal-100 mb-8">
            Let's evaluate where you are and build a roadmap to where you need to be.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-teal-600 rounded-full hover:bg-teal-50 transition-colors font-semibold">
              Contact us
            </button>
            <button className="px-8 py-3 border-2 border-white text-white rounded-full hover:bg-white hover:text-teal-600 transition-colors font-semibold">
              View all cases
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
