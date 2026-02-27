import { ArrowLeft, Check } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function SaaSProductAnalytics() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20">
        <div className="container">
          <nav className="flex items-center gap-2 text-sm mb-8 text-purple-200">
            <Link href="/" className="hover:text-white transition-colors">Services</Link>
            <span>/</span>
            <Link href="/solutions/data-visualization" className="hover:text-white transition-colors">Data visualization</Link>
            <span>/</span>
            <span className="text-white">SaaS Product Analytics</span>
          </nav>

          <h1 className="text-5xl md:text-6xl font-bold mb-3 max-w-4xl">
            SaaS Company Increases Trial-to-Paid Conversion 28% with Product Analytics Dashboard
          </h1>
          <p className="text-xl text-purple-100 max-w-3xl">
            Usage analytics identified friction points in onboarding flow, driving targeted improvements that boosted conversion rates.
          </p>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold text-charcoal mb-6">The Challenge</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-charcoal/80 mb-6">
              A B2B SaaS company offering project management software struggled with low trial-to-paid conversion rates. Only 18% of trial users converted to paying customers—well below the SaaS industry benchmark of 25-30%. The product team lacked visibility into user behavior during the trial period. They didn't know which features drove conversion, where users got stuck, or why most trials ended without purchase.
            </p>
            <p className="text-lg text-charcoal/80 mb-6">
              The VP of Product relied on anecdotal feedback from sales calls and support tickets. Quantitative analysis happened quarterly through manual SQL queries that took days to run. By the time insights emerged, the product roadmap had already been set. The team needed real-time visibility into user behavior to identify friction points and validate product improvements.
            </p>
            <p className="text-lg text-charcoal/80">
              The company needed a product analytics dashboard that tracked user engagement throughout the trial journey—from signup to activation to conversion. The dashboard had to surface which features correlated with conversion, where users abandoned the product, and how different user segments behaved.
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
              NEXDYNE built a product analytics dashboard using Mixpanel for event tracking and Tableau for visualization. The dashboard tracked 50+ user actions—feature usage, time spent in product, collaboration patterns, support ticket creation—and correlated them with trial outcomes (converted, churned, extended trial).
            </p>

            <h3 className="text-2xl font-bold text-charcoal mb-4">Dashboard Components</h3>
            <ul className="space-y-4 mb-8">
              <li className="flex gap-3">
                <Check className="w-6 h-6 text-purple-500 flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-charcoal">Conversion funnel analysis.</strong> Visualized trial journey from signup → activation → feature adoption → conversion. Identified drop-off points where users abandoned the product. 42% of users never completed onboarding—they signed up but never created their first project.
                </div>
              </li>
              <li className="flex gap-3">
                <Check className="w-6 h-6 text-purple-500 flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-charcoal">Feature adoption heatmap.</strong> Showed which features converted users adopted vs. churned users. Converted users were 3x more likely to use collaboration features (comments, @mentions, file sharing) and 2x more likely to integrate with external tools (Slack, Google Drive).
                </div>
              </li>
              <li className="flex gap-3">
                <Check className="w-6 h-6 text-purple-500 flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-charcoal">Cohort retention analysis.</strong> Tracked how different user cohorts (by signup source, company size, industry) engaged over time. Enterprise users (50+ employees) had 35% conversion rate vs. 12% for SMBs, suggesting product-market fit issues for smaller teams.
                </div>
              </li>
              <li className="flex gap-3">
                <Check className="w-6 h-6 text-purple-500 flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-charcoal">Time-to-value metrics.</strong> Measured how long it took users to reach activation milestones (first project created, first collaborator invited, first task completed). Converted users reached activation 60% faster than churned users, indicating importance of fast time-to-value.
                </div>
              </li>
            </ul>

            <h3 className="text-2xl font-bold text-charcoal mb-4">Product Improvements Driven by Analytics</h3>
            <p className="text-lg text-charcoal/80 mb-4">
              The dashboard revealed that 42% of trial users never completed onboarding. Product team redesigned onboarding flow to guide users through creating their first project with interactive tooltips and sample data. Onboarding completion rate increased from 58% to 82%.
            </p>
            <p className="text-lg text-charcoal/80">
              Feature adoption analysis showed collaboration features correlated strongly with conversion. Product team added in-app prompts encouraging users to invite teammates during trial. Users who invited 2+ collaborators had 45% conversion rate vs. 12% for solo users.
            </p>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold text-charcoal mb-12">The Results</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-600 mb-2">28%</div>
              <div className="text-muted-foreground">Increase in trial-to-paid conversion</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-600 mb-2">23%</div>
              <div className="text-muted-foreground">Trial-to-paid conversion rate achieved</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-600 mb-2">$3.2M</div>
              <div className="text-muted-foreground">Additional ARR from improved conversion</div>
            </div>
          </div>

          <div className="bg-purple-50 border-l-4 border-purple-600 p-6 mb-12">
            <p className="text-lg text-charcoal/80 italic mb-4">
              "We were flying blind during the trial period. The analytics dashboard showed us exactly where users got stuck and which features drove conversion. We redesigned onboarding based on the data—completion rates jumped from 58% to 82%. We added prompts encouraging collaboration—users who invited teammates converted at 45% vs. 12% for solo users. Trial-to-paid conversion increased from 18% to 23%, adding $3.2M in ARR. The dashboard paid for itself in the first quarter."
            </p>
            <p className="text-charcoal font-semibold">
              David Chen, VP of Product
            </p>
          </div>

          <h3 className="text-2xl font-bold text-charcoal mb-6">Business Impact</h3>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <Check className="w-6 h-6 text-purple-500 flex-shrink-0 mt-1" />
              <div className="text-lg text-charcoal/80">
                <strong>Conversion improvement:</strong> Trial-to-paid conversion increased from 18% to 23% (28% relative improvement). With 1,000 monthly trial signups, this added 50 new paying customers per month, generating $3.2M in additional ARR.
              </div>
            </li>
            <li className="flex gap-3">
              <Check className="w-6 h-6 text-purple-500 flex-shrink-0 mt-1" />
              <div className="text-lg text-charcoal/80">
                <strong>Onboarding optimization:</strong> Onboarding completion rate increased from 58% to 82% after redesign based on analytics insights. Users who completed onboarding converted at 32% vs. 5% for those who didn't.
              </div>
            </li>
            <li className="flex gap-3">
              <Check className="w-6 h-6 text-purple-500 flex-shrink-0 mt-1" />
              <div className="text-lg text-charcoal/80">
                <strong>Product-market fit insights:</strong> Cohort analysis revealed enterprise users (50+ employees) converted at 35% vs. 12% for SMBs. Product team refocused go-to-market strategy on enterprise segment, increasing sales efficiency 40%.
              </div>
            </li>
            <li className="flex gap-3">
              <Check className="w-6 h-6 text-purple-500 flex-shrink-0 mt-1" />
              <div className="text-lg text-charcoal/80">
                <strong>Data-driven culture:</strong> Product team shifted from quarterly manual analysis to daily dashboard reviews. Feature prioritization decisions backed by usage data instead of HiPPO (highest-paid person's opinion). Product velocity increased as team validated ideas faster.
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-20 bg-slate-50">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold text-charcoal mb-6">Technology Stack</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <h3 className="text-xl font-bold text-charcoal mb-3">Analytics & Visualization</h3>
              <ul className="space-y-2 text-charcoal/80">
                <li>• Mixpanel for event tracking</li>
                <li>• Tableau for dashboard visualization</li>
                <li>• Segment for data pipeline orchestration</li>
                <li>• PostgreSQL for data warehouse</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <h3 className="text-xl font-bold text-charcoal mb-3">Integration & Infrastructure</h3>
              <ul className="space-y-2 text-charcoal/80">
                <li>• JavaScript SDK for client-side tracking</li>
                <li>• REST API for server-side events</li>
                <li>• Airflow for ETL pipelines</li>
                <li>• Snowflake for historical analytics</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
        <div className="container max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to understand what drives conversion?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Let's build product analytics that surface friction points and validate improvements with data.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-indigo-600 rounded-full hover:bg-purple-50 transition-colors font-semibold">
              Contact us
            </button>
            <Link href="/solutions/data-visualization">
              <button className="px-8 py-3 border-2 border-white text-white rounded-full hover:bg-white hover:text-indigo-600 transition-colors font-semibold">
                View all cases
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
