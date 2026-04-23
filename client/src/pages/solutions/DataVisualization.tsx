import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { RelatedContent } from "@/components/RelatedContent";
import { dataRelatedItems } from "@/data/related-content";

export default function DataVisualization() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-800 via-red-700 to-secondary text-white py-20">
        <div className="container">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm mb-8 text-white/90">
            <Link href="/" className="hover:text-white transition-colors">
              Services
            </Link>
            <span>/</span>
            <Link href="/solutions/data-solutions" className="hover:text-white transition-colors">
              Data solutions
            </Link>
            <span>/</span>
            <span className="text-white">Data visualization</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-3 eb-garamond">
                Data visualization
              </h1>
              <p className="text-xl lg:text-2xl text-white/95 leading-relaxed">
                Dashboards that drive action, not just display data. Real-time insights delivered when decisions get made—executive scorecards, operational metrics, embedded analytics that turn information into outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Expert CTA - Left Side */}
            <div className="flex flex-col items-center lg:items-start">
              <div className="w-48 h-48 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full mb-6 flex items-center justify-center">
                <div className="w-40 h-40 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full"></div>
              </div>
              <h3 className="text-2xl font-bold text-charcoal mb-4">Want to know more?</h3>
              <button className="px-8 py-3 bg-slate-900 text-white rounded-full hover:bg-slate-800 transition-colors font-semibold">
                Ask Martijn Voorveld
              </button>
            </div>

            {/* Benefits - Right Side */}
            <div>
              <h2 className="text-4xl font-bold text-charcoal mb-12">The benefits</h2>
              
              <div className="space-y-8">
                {/* Benefit 1 */}
                <div className="flex gap-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-8 h-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-charcoal mb-2">Decision-focused design</h3>
                    <p className="text-charcoal/80">
                      Dashboards built around decision workflows, not data availability. Sales managers see pipeline velocity and conversion bottlenecks. Operations teams spot capacity constraints before they cause delays.
                    </p>
                  </div>
                </div>

                {/* Benefit 2 */}
                <div className="flex gap-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-8 h-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-charcoal mb-2">Real-time operational visibility</h3>
                    <p className="text-charcoal/80">
                      Live dashboards refresh every 60 seconds, surfacing issues as they emerge. Dispatchers intervene on at-risk shipments before delays impact customers. Production teams adjust schedules based on real-time equipment status.
                    </p>
                  </div>
                </div>

                {/* Benefit 3 */}
                <div className="flex gap-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-8 h-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-charcoal mb-2">Quantified business impact</h3>
                    <p className="text-charcoal/80">
                      Measure what was previously invisible—waste margins, churn risk, inventory turnover, equipment health. Dashboards quantify problems so teams can prioritize improvements by ROI.
                    </p>
                  </div>
                </div>

                {/* Benefit 4 */}
                <div className="flex gap-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-8 h-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-charcoal mb-2">Predictive alerts, not reactive reports</h3>
                    <p className="text-charcoal/80">
                      Leading indicators surface opportunities and risks weeks in advance. Maintenance teams schedule interventions before equipment fails. Finance tracks burn rate against runway with 12-week forecast.
                    </p>
                  </div>
                </div>

                {/* Benefit 5 */}
                <div className="flex gap-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-8 h-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-charcoal mb-2">Self-service without IT bottlenecks</h3>
                    <p className="text-charcoal/80">
                      Business users filter, drill down, and export data without waiting for analyst support. Automated report generation eliminates manual Excel work. AI summaries explain anomalies in plain language.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-slate-50">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold text-charcoal mb-8">
            Visualization that drives outcomes
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-charcoal/80 mb-6">
              Pretty charts don't create value—actionable insights do. Most dashboards fail because they're designed around data availability instead of decision workflows. Teams get overwhelmed by metrics that don't drive action. Executives can't find the three KPIs that actually matter buried among 47 vanity metrics.
            </p>
            
            <p className="text-lg text-charcoal/80 mb-6">
              NEXDYNE builds dashboards around decision moments. We start by understanding what questions your teams need answered to make better decisions—sales managers evaluating pipeline health, operations teams allocating capacity, finance tracking burn rate. Then we design visualizations that surface those insights at the moment of decision.
            </p>

            <p className="text-lg text-charcoal/80 mb-8">
              From executive scorecards tracking strategic KPIs to operational dashboards monitoring real-time performance, we create tailor-made solutions that fit your workflow. No generic templates. No forcing your processes into vendor constraints. Dashboards that provide the insight your organization needs, designed for the people who will actually use them.
            </p>

            <blockquote className="border-l-4 border-primary pl-6 py-4 my-8 bg-white">
              <p className="text-xl text-red-900 font-medium italic mb-4">
                "Data becomes valuable when everyone can act on it. A good dashboard doesn't just show what's happening now—it tells you what to do next. We've seen operations teams reduce delivery delays 40% by surfacing at-risk shipments 2 hours before they miss windows."
              </p>
              <p className="text-charcoal/80 font-semibold">
                Martijn Voorveld, Field CTO - NEXDYNE TECHNOLOGIES
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold text-charcoal mb-8">
            Our approach
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-charcoal/80 mb-6">
              We don't start with technology or available data—we start with your decision-making process. What do your teams need to know to make better decisions? What impact does that have on business outcomes? The answers determine how we build dashboards that provide actionable insight.
            </p>

            <p className="text-lg text-charcoal/80">
              We build working prototypes in 2-3 weeks using sample data. You validate the design with actual users before we connect to production systems. This approach catches usability issues early—confusing layouts, missing drill-downs, incorrect alert thresholds—when they're cheap to fix. We work closely with dashboard users throughout implementation to ensure the technology delivers real impact, because only then can you make better data-driven decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Expert CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-red-50">
        <div className="container max-w-5xl">
          <div className="bg-white rounded-2xl shadow-lg p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-charcoal mb-4">Want to know more?</h2>
                <p className="text-xl text-charcoal/80 mb-2 font-semibold">Martijn Voorveld</p>
                <p className="text-muted-foreground mb-8">Senior Sales Manager</p>
                <div className="flex flex-wrap gap-4">
                  <button className="px-8 py-3 bg-slate-900 text-white rounded-full hover:bg-slate-800 transition-colors font-semibold">
                    Get in touch
                  </button>
                  <button className="px-8 py-3 border-2 border-slate-900 text-charcoal rounded-full hover:bg-slate-900 hover:text-white transition-colors font-semibold">
                    Schedule a meeting
                  </button>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-64 h-64 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center">
                  <div className="w-56 h-56 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-6xl">
          <div className="mb-12">
            <p className="text-sm font-semibold text-muted-foreground mb-2">Partners</p>
            <h2 className="text-4xl font-bold text-charcoal mb-4">Agentic AI</h2>
            <button className="px-6 py-2 border-2 border-slate-900 text-charcoal rounded-full hover:bg-slate-900 hover:text-white transition-colors font-semibold">
              All partners
            </button>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white border-2 border-slate-200 rounded-lg p-8 hover:border-blue-500 transition-colors">
              <h3 className="text-xl font-bold text-charcoal mb-3">Glean</h3>
              <p className="text-charcoal/80">
                Enterprise AI search platform connecting knowledge across all company systems.
              </p>
            </div>

            <div className="bg-white border-2 border-slate-200 rounded-lg p-8 hover:border-blue-500 transition-colors">
              <h3 className="text-xl font-bold text-charcoal mb-3">Weaviate</h3>
              <p className="text-charcoal/80">
                Open-source vector database powering semantic search and AI applications.
              </p>
            </div>

            <div className="bg-white border-2 border-slate-200 rounded-lg p-8 hover:border-blue-500 transition-colors">
              <h3 className="text-xl font-bold text-charcoal mb-3">LangChain</h3>
              <p className="text-charcoal/80">
                Framework for building LLM-powered applications with intelligent workflows.
              </p>
            </div>

            <div className="bg-white border-2 border-slate-200 rounded-lg p-8 hover:border-blue-500 transition-colors">
              <h3 className="text-xl font-bold text-charcoal mb-3">N8N</h3>
              <p className="text-charcoal/80">
                Workflow automation platform orchestrating data flows between systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why NEXDYNE Section */}
      <section className="py-20 bg-slate-50">
        <div className="container max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="h-96 bg-slate-200 rounded-lg"></div>
            <div>
              <h2 className="text-4xl font-bold text-charcoal mb-6">Why NEXDYNE</h2>
              <p className="text-lg text-charcoal/80 mb-6">
                Most consultancies deliver dashboard mockups that look impressive in presentations but fail in production. NEXDYNE builds working prototypes during the engagement so you see real data flowing through real visualizations before we scale. You validate the approach with actual users, not hypothetical personas.
              </p>
              <p className="text-lg text-charcoal/80 mb-8">
                We're integrators, not BI vendors. We recommend best-of-breed tools—Tableau, Power BI, Looker, custom React dashboards—based on your requirements, not partnership incentives. When the engagement ends, you own the dashboards and the knowledge to evolve them.
              </p>
              <button className="px-8 py-3 bg-slate-900 text-white rounded-full hover:bg-slate-800 transition-colors font-semibold">
                Get in touch
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-6xl">
          <div className="mb-12">
            <p className="text-sm font-semibold text-muted-foreground mb-2">CASES</p>
            <h2 className="text-4xl font-bold text-charcoal mb-4">
              Cases we love talking about
            </h2>
            <p className="text-lg text-charcoal/80 max-w-3xl">
              Heard of a business that transforms unique business challenges into exceptional outcomes? That'd be us. Check out these inspiring cases.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <Link href="/case-studies/logistics-operations-dashboard">
              <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                <div className="h-48 bg-slate-200"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-charcoal mb-3">
                    Logistics Company Reduces Delivery Delays 40% with Real-Time Operations Dashboard
                  </h3>
                  <p className="text-charcoal/80 mb-4">
                    Custom dashboard surfaced capacity bottlenecks and route inefficiencies, enabling proactive intervention before delays occurred.
                  </p>
                  <button className="text-blue-500 hover:text-primary font-semibold flex items-center gap-2">
                    <span>Read more</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </Link>

            <Link href="/case-studies/saas-product-analytics">
              <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                <div className="h-48 bg-slate-200"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-charcoal mb-3">
                    SaaS Company Increases Trial-to-Paid Conversion 28% with Product Analytics Dashboard
                  </h3>
                  <p className="text-charcoal/80 mb-4">
                    Usage analytics identified friction points in onboarding flow, driving targeted improvements that boosted conversion rates.
                  </p>
                  <button className="text-blue-500 hover:text-primary font-semibold flex items-center gap-2">
                    <span>Read more</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </Link>

            <Link href="/case-studies/manufacturing-predictive-maintenance">
              <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                <div className="h-48 bg-slate-200"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-charcoal mb-3">
                    Manufacturing Plant Cuts Downtime 35% with Predictive Maintenance Dashboard
                  </h3>
                  <p className="text-charcoal/80 mb-4">
                    Equipment health dashboard predicted failures 2 weeks in advance, enabling scheduled maintenance instead of emergency repairs.
                  </p>
                  <button className="text-blue-500 hover:text-primary font-semibold flex items-center gap-2">
                    <span>Read more</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </Link>
          </div>

          <button className="px-6 py-2 border-2 border-slate-900 text-charcoal rounded-full hover:bg-slate-900 hover:text-white transition-colors font-semibold flex items-center gap-2 mx-auto">
            <span>All cases</span>
          </button>
        </div>
      </section>

      {/* Related Services Section */}
      <section className="py-20 bg-slate-50">
        <div className="container max-w-6xl">
          <h2 className="text-4xl font-bold text-charcoal mb-12">Related services</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/solutions/data-strategy">
              <div className="bg-white border-2 border-dashed border-slate-300 rounded-lg p-6 hover:border-blue-500 transition-colors">
                <h3 className="text-xl font-bold text-charcoal mb-3">Data Strategy</h3>
                <p className="text-charcoal/80 mb-4">
                  Define what data matters and how to monetize it. Map your data landscape, identify high-value use cases, and build executable roadmaps.
                </p>
                <span className="text-blue-500 hover:text-primary font-semibold flex items-center gap-2">
                  Learn more
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>

            <Link href="/solutions/data-platform">
              <div className="bg-white border-2 border-dashed border-slate-300 rounded-lg p-6 hover:border-blue-500 transition-colors">
                <h3 className="text-xl font-bold text-charcoal mb-3">Data Platform</h3>
                <p className="text-charcoal/80 mb-4">
                  Modern data warehouses and lakes built on cloud infrastructure. Scalable architectures that ingest, transform, and serve data at enterprise scale.
                </p>
                <span className="text-blue-500 hover:text-primary font-semibold flex items-center gap-2">
                  Learn more
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>

            <div className="bg-white border-4 border-blue-500 rounded-lg p-6 relative">
              <div className="absolute -top-3 left-6 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Current page
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Data visualization</h3>
              <p className="text-charcoal/80 mb-4">
                Real-time dashboards and analytics interfaces that surface insights when decisions get made. Executive scorecards, operational metrics, embedded analytics.
              </p>
              <span className="text-blue-500 font-semibold flex items-center gap-2">
                Learn more
                <ArrowRight className="w-4 h-4" />
              </span>
            </div>

            <div className="bg-white border-2 border-dashed border-slate-300 rounded-lg p-6 hover:border-blue-500 transition-colors">
              <h3 className="text-xl font-bold text-charcoal mb-3">Data training</h3>
              <p className="text-charcoal/80 mb-4">
                Upskill your teams on analytics tools, data literacy, and self-service capabilities. Hands-on workshops that build internal capability.
              </p>
              <span className="text-blue-500 hover:text-primary font-semibold flex items-center gap-2">
                Learn more
                <ArrowRight className="w-4 h-4" />
              </span>
            </div>

            <div className="bg-white border-2 border-dashed border-slate-300 rounded-lg p-6 hover:border-blue-500 transition-colors">
              <h3 className="text-xl font-bold text-charcoal mb-3">Data governance</h3>
              <p className="text-charcoal/80 mb-4">
                Policies, processes, and controls that ensure data quality, security, and compliance. Stewardship programs that scale with your organization.
              </p>
              <span className="text-blue-500 hover:text-primary font-semibold flex items-center gap-2">
                Learn more
                <ArrowRight className="w-4 h-4" />
              </span>
            </div>

            <div className="bg-white border-2 border-dashed border-slate-300 rounded-lg p-6 hover:border-blue-500 transition-colors">
              <h3 className="text-xl font-bold text-charcoal mb-3">Data Engineering</h3>
              <p className="text-charcoal/80 mb-4">
                Dedicated teams that build and maintain your data infrastructure. Pipelines, transformations, quality monitoring, and platform operations.
              </p>
              <span className="text-blue-500 hover:text-primary font-semibold flex items-center gap-2">
                Learn more
                <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-red-700 to-secondary text-white">
        <div className="container max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to turn data into action?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's build dashboards that drive decisions, not just display metrics.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-red-700 rounded-full hover:bg-slate-100 transition-colors font-semibold">
              Contact us
            </button>
            <Link href="/solutions/data-solutions">
              <button className="px-8 py-3 border-2 border-white text-white rounded-full hover:bg-white hover:text-red-700 transition-colors font-semibold">
                View our services
              </button>
            </Link>
          </div>
        </div>
      </section>

      <RelatedContent items={dataRelatedItems} />
      <Footer />
    </div>
  );
}
