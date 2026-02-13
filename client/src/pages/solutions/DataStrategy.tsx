import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { RelatedContent } from "@/components/RelatedContent";
import { dataRelatedItems } from "@/data/related-content";

export default function DataStrategy() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-700 via-purple-600 to-red-500 text-white py-20">
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
            <span className="text-white">Data Strategy</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-3 eb-garamond">
                Data Strategy
              </h1>
              <p className="text-xl lg:text-2xl text-white/95 leading-relaxed">
                Most organizations collect data but lack a plan to extract value. We define what data matters, map high-impact use cases, and build executable roadmaps that turn analytics from cost center to revenue driver.
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
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Want to know more?</h3>
              <button className="px-8 py-3 bg-slate-900 text-white rounded-full hover:bg-slate-800 transition-colors font-semibold">
                Ask Martijn Voorveld
              </button>
            </div>

            {/* Benefits - Right Side */}
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-12">The benefits</h2>
              
              <div className="space-y-8">
                {/* Benefit 1 */}
                <div className="flex gap-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-8 h-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">ROI-focused roadmaps</h3>
                    <p className="text-slate-700">
                      We prioritize use cases by business impact, not technical complexity. Quick wins in quarters one and two fund long-term infrastructure investments.
                    </p>
                  </div>
                </div>

                {/* Benefit 2 */}
                <div className="flex gap-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-8 h-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Maturity assessment that drives action</h3>
                    <p className="text-slate-700">
                      Our Data Maturity Framework evaluates five dimensions—infrastructure, governance, skills, culture, and use cases—to identify capability gaps and prioritize investments.
                    </p>
                  </div>
                </div>

                {/* Benefit 3 */}
                <div className="flex gap-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-8 h-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Cross-functional alignment</h3>
                    <p className="text-slate-700">
                      Data initiatives fail when IT builds infrastructure nobody uses. We facilitate workshops with business stakeholders to ensure strategy reflects operational reality.
                    </p>
                  </div>
                </div>

                {/* Benefit 4 */}
                <div className="flex gap-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-8 h-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Knowledge transfer, not dependency</h3>
                    <p className="text-slate-700">
                      Strategy documents gather dust. We train your team to execute the roadmap, make trade-off decisions, and evolve the strategy as business needs change.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Foundation Section */}
      <section className="py-20 bg-slate-50">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold text-slate-900 mb-8">
            Data strategy: from ambition to execution
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-slate-700 mb-6">
              Every organization wants to be "data-driven," but most lack a concrete plan to get there. Teams collect data in silos, analytics tools proliferate without governance, and executives can't get answers to basic questions about customer behavior or operational efficiency.
            </p>
            
            <p className="text-lg text-slate-700 mb-6">
              NEXDYNE's Data Strategy Sprint delivers an executable roadmap in 4-8 weeks. We assess your current state—data sources, infrastructure, skills, governance—identify high-value use cases aligned with business priorities, and sequence initiatives to deliver quick wins while building long-term capability.
            </p>

            <p className="text-lg text-slate-700 mb-8">
              The output isn't a 100-page deck. It's a prioritized backlog with technical requirements, resource estimates, and success metrics for each initiative. Your team knows what to build, in what order, and how to measure progress.
            </p>

            <blockquote className="border-l-4 border-purple-600 pl-6 py-4 my-8 bg-white">
              <p className="text-xl text-purple-900 font-medium italic mb-4">
                "Organizations that treat data as a strategic asset outperform competitors by 20% in profitability. The gap isn't technology—it's having a plan to extract value systematically."
              </p>
              <p className="text-slate-700 font-semibold">
                Martijn Voorveld, Commercial Lead, NEXDYNE
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold text-slate-900 mb-8">
            Five-dimension maturity framework
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-slate-700 mb-6">
              Data maturity isn't just about technology. We evaluate five dimensions that determine whether analytics initiatives succeed or stall:
            </p>

            <div className="space-y-6 mb-8">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">1. Infrastructure & Architecture</h3>
                <p className="text-slate-700">
                  Can your systems ingest, transform, and serve data at the volume and speed required? We assess data warehouses, pipelines, APIs, and integration patterns.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">2. Data Availability & Quality</h3>
                <p className="text-slate-700">
                  What data exists, where does it live, and how reliable is it? We map data sources, identify gaps, and quantify quality issues blocking analytics use cases.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">3. Governance & Compliance</h3>
                <p className="text-slate-700">
                  Who owns data, who can access it, and how is privacy protected? We design access controls, data catalogs, and compliance frameworks that balance security with usability.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">4. Skills & Organization</h3>
                <p className="text-slate-700">
                  Does your team have the technical and analytical skills to execute? We assess capability gaps and recommend hiring, training, or augmentation strategies.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">5. Culture & Adoption</h3>
                <p className="text-slate-700">
                  Do business users trust data and incorporate insights into decisions? We identify organizational barriers and design change management approaches to drive adoption.
                </p>
              </div>
            </div>

            <p className="text-lg text-slate-700">
              The framework produces a maturity score for each dimension and highlights dependencies. You can't build predictive models (dimension 1) if data quality is poor (dimension 2). The roadmap sequences initiatives to address foundational gaps first.
            </p>
          </div>
        </div>
      </section>

      {/* Expert CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-pink-50">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center gap-12 max-w-5xl mx-auto">
            <div className="w-64 h-64 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center flex-shrink-0">
              <div className="w-56 h-56 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full"></div>
            </div>
            
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Want to know more?</h2>
              <p className="text-lg text-slate-700 mb-2 font-semibold">Martijn Voorveld</p>
              <p className="text-slate-600 mb-6">Senior Sales Manager</p>
              
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-3 bg-slate-900 text-white rounded-full hover:bg-slate-800 transition-colors font-semibold">
                  Get in touch
                </button>
                <button className="px-8 py-3 border-2 border-slate-900 text-slate-900 rounded-full hover:bg-slate-900 hover:text-white transition-colors font-semibold">
                  Schedule a meeting
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="mb-12">
            <span className="text-sm text-slate-600 uppercase tracking-wide font-semibold">PARTNERS</span>
            <h2 className="text-4xl font-bold text-slate-900 mt-2 mb-4">Agentic AI</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="border border-slate-200 rounded-lg p-6 hover:shadow-lg transition-shadow bg-white">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Glean</h3>
              <p className="text-slate-700">
                Enterprise AI search platform that connects all your company's knowledge.
              </p>
            </div>

            <div className="border border-slate-200 rounded-lg p-6 hover:shadow-lg transition-shadow bg-white">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Weaviate</h3>
              <p className="text-slate-700">
                Open-source vector database powering semantic search and AI applications.
              </p>
            </div>

            <div className="border border-slate-200 rounded-lg p-6 hover:shadow-lg transition-shadow bg-white">
              <h3 className="text-xl font-bold text-purple-900 mb-3">LangChain</h3>
              <p className="text-slate-700">
                Framework for building LLM-powered applications with intelligent workflows.
              </p>
            </div>

            <div className="border border-slate-200 rounded-lg p-6 hover:shadow-lg transition-shadow bg-white">
              <h3 className="text-xl font-bold text-purple-900 mb-3">N8N</h3>
              <p className="text-slate-700">
                Workflow automation platform orchestrating data flows between systems.
              </p>
            </div>
          </div>

          <button className="px-6 py-2 border-2 border-slate-900 text-slate-900 rounded-full hover:bg-slate-900 hover:text-white transition-colors font-semibold">
            All partners
          </button>
        </div>
      </section>

      {/* Why NEXDYNE Section */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-slate-200 rounded-lg h-96 flex items-center justify-center">
              <div className="text-slate-400 text-lg">Image placeholder</div>
            </div>
            
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Why NEXDYNE</h2>
              <p className="text-lg text-slate-700 mb-6">
                Most consultancies deliver strategy documents that sit on shelves. NEXDYNE builds the first use case during the engagement to prove the roadmap works. You see results in weeks, not quarters.
              </p>
              <p className="text-lg text-slate-700 mb-8">
                We're integrators, not vendors. We recommend best-of-breed tools—cloud platforms, BI tools, ML frameworks—based on your requirements, not partnership incentives. When the engagement ends, you own the infrastructure and the knowledge to evolve it.
              </p>
              <button className="px-8 py-3 bg-slate-900 text-white rounded-full hover:bg-slate-800 transition-colors font-semibold">
                Get in touch
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container">
          <div className="mb-12">
            <span className="text-sm text-slate-600 uppercase tracking-wide font-semibold">CASES</span>
            <h2 className="text-4xl font-bold text-slate-900 mt-2 mb-4">Cases we love talking about</h2>
            <p className="text-lg text-slate-700 max-w-2xl">
              Heard of a business that transforms unique business challenges into exceptional outcomes? That'd be us. Check out these inspiring cases.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <Link href="/case-studies/manufacturer-data-monetization">
              <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                <div className="h-48 bg-slate-200"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    Manufacturer Identifies $4M Revenue Opportunity Through Data Monetization
                  </h3>
                  <p className="text-slate-700 mb-4">
                    How a mid-market manufacturer mapped their data landscape and built a roadmap to monetize equipment telemetry data.
                  </p>
                  <button className="text-blue-500 hover:text-blue-600 font-semibold flex items-center gap-2">
                    <span>Read more</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </Link>

            <Link href="/case-studies/insurance-analytics-backlog">
              <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                <div className="h-48 bg-slate-200"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    Insurance Carrier Prioritizes $12M Analytics Backlog in 6 Weeks
                  </h3>
                  <p className="text-slate-700 mb-4">
                    Data strategy sprint identified high-ROI use cases and eliminated projects that wouldn't move the needle.
                  </p>
                  <button className="text-blue-500 hover:text-blue-600 font-semibold flex items-center gap-2">
                    <span>Read more</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </Link>

            <Link href="/case-studies/healthcare-data-maturity">
              <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                <div className="h-48 bg-slate-200"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    Healthcare System Achieves Level 3 Data Maturity in 18 Months
                  </h3>
                  <p className="text-slate-700 mb-4">
                    Maturity assessment and phased roadmap transformed ad-hoc reporting into self-service analytics culture.
                  </p>
                  <button className="text-blue-500 hover:text-blue-600 font-semibold flex items-center gap-2">
                    <span>Read more</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </Link>
          </div>

          <button className="px-6 py-2 border-2 border-slate-900 text-slate-900 rounded-full hover:bg-slate-900 hover:text-white transition-colors font-semibold flex items-center gap-2 mx-auto">
            <span>All cases</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Related Services Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="mb-12">
            <span className="text-sm text-indigo-600 uppercase tracking-wide font-semibold">DATA & AI</span>
            <h2 className="text-4xl font-bold text-slate-900 mt-2">Services</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Data Strategy - Current Page */}
            <div className="relative border-2 border-blue-500 rounded-lg p-6 bg-blue-50">
              <div className="absolute -top-3 left-6 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Current page
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center justify-between">
                Data Strategy
                <ArrowRight className="w-5 h-5 text-blue-500" />
              </h3>
              <p className="text-slate-700">
                Organizations that leverage data achieve success. We help you plot a winning strategy.
              </p>
            </div>

            {/* Data Platform */}
            <Link href="/solutions/data-platform">
              <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 hover:border-indigo-500 hover:bg-indigo-50 transition-all cursor-pointer">
                <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center justify-between">
                  Data Platform
                  <ArrowRight className="w-5 h-5 text-slate-400" />
                </h3>
                <p className="text-slate-700">
                  A data-driven organization needs a solid foundation. We'll build the platform that fits your data ambitions.
                </p>
              </div>
            </Link>

            {/* Data visualization */}
            <Link href="/solutions/data-visualization">
              <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 hover:border-indigo-500 hover:bg-indigo-50 transition-all cursor-pointer">
                <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center justify-between">
                  Data visualization
                  <ArrowRight className="w-5 h-5 text-slate-400" />
                </h3>
                <p className="text-slate-700">
                  Build your data analytics dashboard to add real value with the right insights, so you know where to optimize your business.
                </p>
              </div>
            </Link>

            {/* Data training */}
            <Link href="/solutions/data-training">
              <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 hover:border-indigo-500 hover:bg-indigo-50 transition-all cursor-pointer">
                <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center justify-between">
                  Data training
                  <ArrowRight className="w-5 h-5 text-slate-400" />
                </h3>
                <p className="text-slate-700">
                  Give your employees the knowledge and skills they need to get data under control, from newbie to boss level.
                </p>
              </div>
            </Link>

            {/* Data governance */}
            <Link href="/solutions/data-governance">
              <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 hover:border-indigo-500 hover:bg-indigo-50 transition-all cursor-pointer">
                <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center justify-between">
                  Data governance
                  <ArrowRight className="w-5 h-5 text-slate-400" />
                </h3>
                <p className="text-slate-700">
                  Work efficiently and securely with maximum control over access and compliance.
                </p>
              </div>
            </Link>

            {/* Data Engineering */}
            <Link href="/solutions/data-engineering">
              <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 hover:border-indigo-500 hover:bg-indigo-50 transition-all cursor-pointer">
                <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center justify-between">
                  Data Engineering
                  <ArrowRight className="w-5 h-5 text-slate-400" />
                </h3>
                <p className="text-slate-700">
                  Cut your time to market and strengthen your data team with experienced, certified professionals.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-red-500 text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to transform?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's talk about how a winning data strategy can accelerate your business.
          </p>
          <button className="px-8 py-3 bg-white text-purple-600 rounded-full hover:bg-slate-100 transition-colors font-semibold mb-4">
            Contact us
          </button>
          <p className="text-white/90">or call us at +1 (555) 123-4567</p>
        </div>
      </section>

      <RelatedContent items={dataRelatedItems} />
      <Footer />
    </div>
  );
}
