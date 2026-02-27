import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function FinancialDataQuality() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {/* Breadcrumb */}
      <nav className="bg-slate-50 py-4">
        <div className="container">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/">
              <a className="hover:text-blue-600">Home</a>
            </Link>
            <span>/</span>
            <Link href="/solutions/data-solutions">
              <a className="hover:text-blue-600">Data Solutions</a>
            </Link>
            <span>/</span>
            <Link href="/solutions/data-governance">
              <a className="hover:text-blue-600">Data Governance</a>
            </Link>
            <span>/</span>
            <span className="text-charcoal">Bank Reduces Data Quality Issues 78% with Automated Validation</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 to-slate-700 text-white py-20">
        <div className="container">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold mb-3">
              Bank Reduces Data Quality Issues 78% with Automated Validation
            </h1>
            <p className="text-xl mb-8">
              Real-time data quality monitoring across 200+ source systems feeding regulatory reports, eliminating manual reconciliation and reducing reporting errors.
            </p>
            <div className="flex flex-wrap gap-6 text-lg">
              <div>
                <div className="text-3xl font-bold">78%</div>
                <div className="text-green-100">Data Quality Issue Reduction</div>
              </div>
              <div>
                <div className="text-3xl font-bold">200+</div>
                <div className="text-green-100">Source Systems Monitored</div>
              </div>
              <div>
                <div className="text-3xl font-bold">$4.2M</div>
                <div className="text-green-100">Annual Operational Savings</div>
              </div>
              <div>
                <div className="text-3xl font-bold">Zero</div>
                <div className="text-green-100">Regulatory Report Resubmissions</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold text-charcoal mb-6">The Challenge</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-charcoal/80 mb-4">
              A regional bank with $45B in assets struggled with data quality problems that cascaded through their regulatory reporting process. They submitted monthly Call Reports (FFIEC 031) to the FDIC, quarterly stress test data to the Fed, and annual CCAR submissions—all requiring data from 200+ source systems spanning core banking, loan origination, treasury, and risk management platforms.
            </p>
            <p className="text-lg text-charcoal/80 mb-4">
              Quality issues surfaced late in the reporting cycle: mismatched totals between systems, missing required fields, invalid date formats, duplicate records, and referential integrity violations. The data governance team spent 3 weeks each quarter manually reconciling discrepancies, often discovering errors hours before submission deadlines. They'd resubmitted 4 regulatory reports in the past year due to data errors, drawing scrutiny from examiners.
            </p>
            <p className="text-lg text-charcoal/80 mb-4">
              The root cause was lack of upstream validation. Source systems accepted bad data—loan systems allowed negative interest rates, customer records had mismatched SSNs, transaction timestamps violated logical constraints (settlement before trade date). By the time data reached the reporting warehouse, it was too late to fix problems without manual intervention. They needed quality checks at ingestion, automated validation rules that caught errors before they propagated, and dashboards that showed data quality trends so owners could address systemic issues.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-slate-50">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold text-charcoal mb-6">The Solution</h2>
          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-lg text-charcoal/80 mb-4">
              NEXDYNE deployed Monte Carlo Data for automated data quality monitoring across their entire data pipeline. We instrumented quality checks at three layers: ingestion validation (reject malformed records before they enter the warehouse), transformation testing (verify business logic during ETL), and reconciliation checks (compare record counts and totals across systems).
            </p>
            <p className="text-lg text-charcoal/80 mb-4">
              We defined 450+ validation rules based on regulatory requirements and business logic: required fields must be populated, numeric values must fall within valid ranges, dates must follow logical sequences, foreign keys must reference existing records, and totals must reconcile across related tables. Rules run automatically after each data load, and violations trigger alerts to data owners with specific record IDs and failure reasons.
            </p>
            <p className="text-lg text-charcoal/80 mb-4">
              Quality dashboards show metrics by source system, data domain, and severity: completeness (percentage of required fields populated), accuracy (values matching authoritative sources), consistency (related fields agreeing logically), and timeliness (data freshness compared to SLAs). Executives see high-level trends, data owners see actionable violations, and the governance team tracks quality improvement initiatives over time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <h3 className="text-xl font-bold text-charcoal mb-4">Technical Approach</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-charcoal/80">Monte Carlo for automated quality monitoring</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-charcoal/80">450+ validation rules based on regulations</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-charcoal/80">Three-layer validation: ingestion, transform, reconcile</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-charcoal/80">Automated alerting with root cause context</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <h3 className="text-xl font-bold text-charcoal mb-4">Integration Points</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-charcoal/80">Snowflake data warehouse for quality checks</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-charcoal/80">dbt for transformation testing</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-charcoal/80">PagerDuty for incident routing</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-charcoal/80">Tableau for quality trend dashboards</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold text-charcoal mb-6">The Results</h2>
          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-lg text-charcoal/80 mb-4">
              Data quality issues dropped 78% in the first year. The bank hasn't resubmitted a regulatory report since implementing automated validation—every submission passes first-time quality checks. Manual reconciliation time fell from 3 weeks to 2 days per reporting cycle, freeing the governance team to focus on strategic initiatives instead of firefighting data errors.
            </p>
            <p className="text-lg text-charcoal/80 mb-4">
              The system caught 2,400 quality violations in the first quarter—most were upstream data entry errors that would have propagated into regulatory reports. Source system owners now receive daily quality scorecards showing their system's health, creating accountability and driving continuous improvement. Loan origination systems fixed validation logic to prevent negative interest rates, customer master data implemented duplicate detection, and treasury systems added timestamp validation.
            </p>
            <p className="text-lg text-charcoal/80 mb-4">
              Operational savings totaled $4.2M annually: reduced manual reconciliation labor ($2.1M), avoided regulatory fines from report resubmissions ($1.5M), and improved decision-making from trustworthy data ($600K in better credit risk assessments). Examiner feedback improved significantly—regulators noted the bank's proactive approach to data quality management and reduced their scrutiny during the next audit cycle.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-secondary/10 p-6 rounded-lg border-l-4 border-green-600">
              <div className="text-3xl font-bold text-charcoal mb-2">2 days</div>
              <div className="text-charcoal/80">Reconciliation Time (down from 3 weeks)</div>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
              <div className="text-3xl font-bold text-blue-900 mb-2">2,400</div>
              <div className="text-charcoal/80">Quality Violations Caught in Q1</div>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-600">
              <div className="text-3xl font-bold text-purple-900 mb-2">100%</div>
              <div className="text-charcoal/80">First-Time Submission Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-slate-700 text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to eliminate data quality issues with automated validation?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's build quality monitoring systems that catch errors before they impact regulatory reports and business decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-charcoal hover:bg-slate-100">
              Get in touch
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10">
              Schedule a meeting
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>
          <Footer />

    </div>
  );
}
