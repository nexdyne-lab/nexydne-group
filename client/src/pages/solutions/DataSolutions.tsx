import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight } from "lucide-react";
import { RelatedContent } from "@/components/RelatedContent";
import { dataRelatedItems } from "@/data/related-content";

export default function DataSolutions() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-900 via-purple-800 to-indigo-700 text-white py-20">
        <div className="container">
          {/* Breadcrumb */}
          <nav className="text-sm mb-8 text-indigo-200">
            <Link href="/solutions/intelligent-process-optimization" className="hover:text-white">
              Services
            </Link>
            {" / "}
            <span className="text-white">Data Solutions</span>
          </nav>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-3 eb-garamond">
                Data Solutions
              </h1>
              <p className="text-xl text-indigo-100 mb-8">
                Build predictive models and analytics infrastructure that powers intelligent decision-making across operations. We transform raw data into strategic assets that drive measurable business outcomes.
              </p>
            </div>
            <div className="hidden md:block">
              <img
                src="/data-analytics-dashboard.0ac27be3.jpg"
                alt="Data Analytics Dashboard"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/data-platform-architecture.8ff88a38.png"
                alt="Data Platform Architecture"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-charcoal mb-6">
                What we do
              </h2>
              <div className="space-y-4 text-lg text-charcoal/80">
                <p>
                  Most organizations sit on valuable data but lack the infrastructure to extract insights at decision speed. Spreadsheets and legacy reporting tools can't handle modern data volumes or deliver the predictive capabilities that separate market leaders from followers.
                </p>
                <p>
                  NEXDYNE builds analytics platforms that turn data into competitive advantage. From strategy through implementation—data warehousing, real-time dashboards, machine learning pipelines—we deploy infrastructure that scales with your ambitions and delivers ROI in weeks, not quarters.
                </p>
                <p>
                  We don't do endless consulting engagements. We build production systems, transfer knowledge to your team, and ensure you own the capability. When we're done, your organization runs data-driven without dependency on external resources.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <div className="mb-12">
            <span className="text-sm text-muted-foreground uppercase tracking-wide font-semibold">Data & AI</span>
            <h2 className="text-4xl font-bold text-charcoal mt-2 mb-8">Services</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Data Strategy */}
            <Link href="/solutions/data-strategy">
              <div className="group border border-slate-200 rounded-lg p-8 hover:shadow-lg transition-all cursor-pointer bg-white">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-charcoal mb-3 group-hover:text-blue-500 transition-colors">
                      Data Strategy
                    </h3>
                    <p className="text-lg text-charcoal/80">
                      Define what data matters and how to monetize it. We map your data landscape, identify high-value use cases, and build roadmaps that align analytics investments with business priorities.
                    </p>
                  </div>
                  <ArrowRight className="w-6 h-6 text-muted-foreground/70 group-hover:text-blue-500 group-hover:translate-x-1 transition-all ml-4 flex-shrink-0" />
                </div>
              </div>
            </Link>

            {/* Data Platform */}
            <Link href="/solutions/data-platform">
              <div className="group border border-slate-200 rounded-lg p-8 hover:shadow-lg transition-all cursor-pointer bg-white">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-charcoal mb-3 group-hover:text-blue-500 transition-colors">
                      Data Platform
                    </h3>
                    <p className="text-lg text-charcoal/80">
                      Modern data warehouses and lakes built on cloud infrastructure. Scalable architectures that ingest, transform, and serve data at enterprise scale with governance built in from day one.
                    </p>
                  </div>
                  <ArrowRight className="w-6 h-6 text-muted-foreground/70 group-hover:text-blue-500 group-hover:translate-x-1 transition-all ml-4 flex-shrink-0" />
                </div>
              </div>
            </Link>

            {/* Data Visualization */}
            <Link href="/solutions/data-visualization">
              <div className="group border border-slate-200 rounded-lg p-8 hover:shadow-lg transition-all cursor-pointer bg-white">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-charcoal mb-3 group-hover:text-blue-500 transition-colors">
                      Data Visualization
                    </h3>
                    <p className="text-lg text-charcoal/80">
                      Real-time dashboards and analytics interfaces that surface insights when decisions get made. Executive scorecards, operational metrics, and embedded analytics that drive action.
                    </p>
                  </div>
                  <ArrowRight className="w-6 h-6 text-muted-foreground/70 group-hover:text-blue-500 group-hover:translate-x-1 transition-all ml-4 flex-shrink-0" />
                </div>
              </div>
            </Link>

            {/* Data Training */}
            <Link href="/solutions/data-training">
              <div className="group border border-slate-200 rounded-lg p-8 hover:shadow-lg transition-all cursor-pointer bg-white">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-charcoal mb-3 group-hover:text-blue-500 transition-colors">
                      Data Training
                    </h3>
                    <p className="text-lg text-charcoal/80">
                      Give your employees the knowledge and skills they need to get data under control, from newbie to boss level.
                    </p>
                  </div>
                  <ArrowRight className="w-6 h-6 text-muted-foreground/70 group-hover:text-blue-500 group-hover:translate-x-1 transition-all ml-4 flex-shrink-0" />
                </div>
              </div>
            </Link>

            {/* Machine Learning */}
            <Link href="/solutions/machine-learning">
              <div className="group border border-slate-200 rounded-lg p-8 hover:shadow-lg transition-all cursor-pointer bg-white">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-charcoal mb-3 group-hover:text-blue-500 transition-colors">
                      Machine Learning & Predictive Analytics
                    </h3>
                    <p className="text-lg text-charcoal/80">
                      Deploy models that forecast demand, predict churn, optimize pricing, and automate decisions. Production ML pipelines that improve continuously as data accumulates.
                    </p>
                  </div>
                  <ArrowRight className="w-6 h-6 text-muted-foreground/70 group-hover:text-blue-500 group-hover:translate-x-1 transition-all ml-4 flex-shrink-0" />
                </div>
              </div>
            </Link>

            {/* Data Governance */}
            <Link href="/solutions/data-governance">
              <div className="group border border-slate-200 rounded-lg p-8 hover:shadow-lg transition-all cursor-pointer bg-white">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-charcoal mb-3 group-hover:text-blue-500 transition-colors">
                      Data Governance
                    </h3>
                    <p className="text-lg text-charcoal/80">
                      Access controls, compliance frameworks, and data quality monitoring. Ensure teams get the data they need while maintaining security, privacy, and regulatory compliance.
                    </p>
                  </div>
                  <ArrowRight className="w-6 h-6 text-muted-foreground/70 group-hover:text-blue-500 group-hover:translate-x-1 transition-all ml-4 flex-shrink-0" />
                </div>
              </div>
            </Link>

            {/* Content Service Platform */}
            <Link href="/solutions/content-service-platform">
              <div className="group border border-slate-200 rounded-lg p-8 hover:shadow-lg transition-all cursor-pointer bg-white">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-charcoal mb-3 group-hover:text-blue-500 transition-colors">
                      Content Service Platform
                    </h3>
                    <p className="text-lg text-charcoal/80">
                      Centralized content management, digital asset libraries, and multi-channel publishing workflows. Deliver consistent brand experiences across web, mobile, print, and social.
                    </p>
                  </div>
                  <ArrowRight className="w-6 h-6 text-muted-foreground/70 group-hover:text-blue-500 group-hover:translate-x-1 transition-all ml-4 flex-shrink-0" />
                </div>
              </div>
            </Link>

            {/* Data Engineering */}
            <Link href="/solutions/data-engineering" className="block">
              <div className="group border border-slate-200 rounded-lg p-8 hover:shadow-lg transition-all cursor-pointer bg-white">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-charcoal mb-3 group-hover:text-blue-500 transition-colors">
                      Data Engineering
                    </h3>
                    <p className="text-lg text-charcoal/80">
                      Augment your team with certified data engineers and architects. Accelerate delivery, build internal capability, and scale data operations without long hiring cycles.
                    </p>
                  </div>
                  <ArrowRight className="w-6 h-6 text-muted-foreground/70 group-hover:text-blue-500 group-hover:translate-x-1 transition-all ml-4 flex-shrink-0" />
                </div>
              </div>
            </Link>
          </div>

          {/* Expert CTA */}
          <div className="mt-12 flex items-center gap-6 bg-white p-8 rounded-lg border border-slate-200">
            <div className="w-32 h-32 bg-slate-100 rounded-full flex items-center justify-center flex-shrink-0">
              <div className="w-24 h-24 bg-slate-200 rounded-full"></div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-charcoal mb-3">
                Want to know more?
              </h3>
              <div className="flex gap-4">
                <Button className="bg-slate-900 hover:bg-slate-800 text-white">
                  Get in touch
                </Button>
                <Button variant="ghost" className="text-charcoal">
                  Schedule a meeting
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-20">
        <div className="container max-w-4xl text-center">
          <p className="text-xl text-charcoal/80 leading-relaxed">
            Whether you need strategic guidance on data monetization, infrastructure to handle exponential growth, or predictive models that automate decisions—NEXDYNE delivers production systems that create measurable business value. We build data capabilities that compound returns over time.
          </p>
          <Button size="lg" className="mt-8 bg-blue-500 hover:bg-blue-600 text-white">
            Get in touch
          </Button>
        </div>
      </section>

      {/* Cases Section */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <div className="mb-12">
            <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">
              CASES
            </p>
            <h2 className="text-4xl font-bold text-charcoal mb-4">
              Cases we love talking about
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Real data platforms. Real business impact. See how we've deployed analytics infrastructure that drives intelligent decision-making.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Global Retailer Case */}
            <Link href="/cases/global-retailer">
              <div className="bg-white rounded-lg overflow-hidden border border-slate-200 hover:shadow-lg transition-shadow cursor-pointer">
                <img
                  src="/case-study-retail.8af31c13.jpg"
                  alt="Global Retailer Case Study"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full mb-3">
                    RETAIL
                  </span>
                  <h3 className="text-xl font-bold text-charcoal mb-2">
                    Global Retailer
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Implemented headless commerce platform reducing page load times by 45% and increasing mobile conversion by 60%.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-primary">45%</div>
                      <div className="text-sm text-muted-foreground">Faster load times</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">60%</div>
                      <div className="text-sm text-muted-foreground">Mobile conversion</div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Financial Institution Case */}
            <Link href="/cases/financial-institution">
              <div className="bg-white rounded-lg overflow-hidden border border-slate-200 hover:shadow-lg transition-shadow cursor-pointer">
                <img
                  src="/case-study-finance.jpg"
                  alt="Financial Institution Case Study"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full mb-3">
                    FINANCIAL SERVICES
                  </span>
                  <h3 className="text-xl font-bold text-charcoal mb-2">
                    Financial Institution
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Deployed RPA bots automating 80% of manual processing, saving 120K+ hours annually and improving accuracy to 99.9%.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-primary">80%</div>
                      <div className="text-sm text-muted-foreground">Process automation</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">120K+</div>
                      <div className="text-sm text-muted-foreground">Hours saved/year</div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Healthcare Provider Case */}
            <Link href="/cases/healthcare-provider">
              <div className="bg-white rounded-lg overflow-hidden border border-slate-200 hover:shadow-lg transition-shadow cursor-pointer">
                <img
                  src="/case-study-healthcare.e02de397.jpg"
                  alt="Healthcare Provider Case Study"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full mb-3">
                    HEALTHCARE
                  </span>
                  <h3 className="text-xl font-bold text-charcoal mb-2">
                    Healthcare Provider
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Built AI-powered patient engagement platform reducing no-shows by 40% and improving patient satisfaction scores by 35%.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-primary">40%</div>
                      <div className="text-sm text-muted-foreground">Reduced no-shows</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">35%</div>
                      <div className="text-sm text-muted-foreground">Higher satisfaction</div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="text-center">
            <Link href="/cases">
              <Button variant="outline" size="lg" className="border-slate-900 text-charcoal hover:bg-slate-50">
                All cases
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20">
        <div className="container">
          <div className="mb-12">
            <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wide mb-2">
              PARTNERS
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">
              Agentic AI
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl">
              We partner with leading AI and data platforms to deliver next-generation intelligent solutions. These partnerships enable us to deploy cutting-edge agentic AI capabilities that transform how organizations leverage data.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Glean */}
            <div className="bg-white rounded-lg p-8 border border-slate-200 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center h-32 mb-4">
                <div className="text-5xl font-bold text-indigo-600">Glean</div>
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Glean</h3>
              <p className="text-muted-foreground">
                Enterprise AI search platform that connects all your company's knowledge, enabling intelligent discovery and insights across data sources.
              </p>
            </div>

            {/* Weaviate */}
            <div className="bg-white rounded-lg p-8 border border-slate-200 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center h-32 mb-4">
                <div className="text-5xl font-bold text-indigo-600">Weaviate</div>
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Weaviate</h3>
              <p className="text-muted-foreground">
                Open-source vector database that powers semantic search and AI-native applications with lightning-fast similarity search capabilities.
              </p>
            </div>

            {/* LangChain */}
            <div className="bg-white rounded-lg p-8 border border-slate-200 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center h-32 mb-4">
                <div className="text-5xl font-bold text-indigo-600">LangChain</div>
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">LangChain</h3>
              <p className="text-muted-foreground">
                Framework for building LLM-powered applications that chain together AI models, data sources, and business logic into intelligent workflows.
              </p>
            </div>

            {/* N8N */}
            <div className="bg-white rounded-lg p-8 border border-slate-200 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center h-32 mb-4">
                <div className="text-5xl font-bold text-indigo-600">N8N</div>
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">N8N</h3>
              <p className="text-muted-foreground">
                Workflow automation platform that orchestrates data flows between systems, enabling complex AI-driven process automation.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <Button variant="outline" className="border-slate-900 text-charcoal hover:bg-slate-50">
              All partners
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
        <div className="container max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to transform?</h2>
          <p className="text-xl mb-8 text-indigo-100">
            Let's talk about how data-driven intelligence can accelerate your business.
          </p>
          <Button size="lg" className="bg-white text-indigo-600 hover:bg-indigo-50">
            Contact us
          </Button>
          <p className="mt-6 text-indigo-100">or call us at +1 (555) 123-4567</p>
        </div>
      </section>

      <RelatedContent items={dataRelatedItems} />
      <Footer />
    </div>
  );
}
