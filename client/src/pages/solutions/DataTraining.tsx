import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight } from "lucide-react";
import { RelatedContent } from "@/components/RelatedContent";
import { dataRelatedItems } from "@/data/related-content";

export default function DataTraining() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-900 via-[#2D5BFF] to-[#4169FF] text-white py-20">
        <div className="container">
          {/* Breadcrumb */}
          <nav className="text-sm mb-8 text-purple-200">
            <Link href="/solutions/intelligent-process-optimization" className="hover:text-white">
              Services
            </Link>
            {" / "}
            <Link href="/solutions/data-solutions" className="hover:text-white">
              Data Solutions
            </Link>
            {" / "}
            <span className="text-white">Data Training</span>
          </nav>

          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-3 eb-garamond">
              Data Training
            </h1>
            <p className="text-xl text-purple-100">
              Give your employees the knowledge and skills they need to get data under control, from newbie to boss level. Build self-sufficient teams that extract value without constant external support.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Expert CTA */}
            <div className="md:col-span-1">
              <div className="sticky top-8">
                <div className="w-48 h-48 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="w-40 h-40 bg-slate-200 rounded-full"></div>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 text-center">
                  Want to know more?
                </h3>
                <div className="flex flex-col gap-3">
                  <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white">
                    Ask Martijn Voorveld
                  </Button>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="md:col-span-2 space-y-12">
              <div>
                <h2 className="text-4xl font-bold text-slate-900 mb-8">The benefits</h2>
              </div>

              {/* Benefit 1 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 flex items-center justify-center">
                    <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Useful from day one</h3>
                  <p className="text-lg text-slate-700">
                    Real-world training that applies directly to day-to-day work. Forget theory—we're talking real use cases. Participants leave with skills they can deploy immediately, not concepts they'll never use.
                  </p>
                </div>
              </div>

              {/* Benefit 2 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 flex items-center justify-center">
                    <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Suitable for all levels</h3>
                  <p className="text-lg text-slate-700">
                    From data specialists to end users, whether they're just getting started or want to dive into the detail. We tailor content to audience—business users learn self-service analytics, technical teams learn pipeline engineering.
                  </p>
                </div>
              </div>

              {/* Benefit 3 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 flex items-center justify-center">
                    <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Learn from experts</h3>
                  <p className="text-lg text-slate-700">
                    Data courses delivered by professionals who live and breathe data, keen to share their knowledge. Our trainers build production systems for Fortune 500 companies—they teach what actually works, not textbook theory.
                  </p>
                </div>
              </div>

              {/* Benefit 4 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 flex items-center justify-center">
                    <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Data training made to measure</h3>
                  <p className="text-lg text-slate-700">
                    Company-specific training or a complete course, specially designed for your teams. We build curricula around your tech stack, your data, and your business problems—not generic examples from other industries.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Knowledge Gets You There Section */}
      <section className="py-20 bg-slate-50">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Knowledge gets you there
          </h2>
          <div className="space-y-4 text-lg text-slate-700 mb-8">
            <p>
              When it comes to data, it's not the technology that's the bottleneck anymore. It's knowing what, how and why. With us, training doesn't mean just taking a course. We actually help your technical teams and your business users with hands-on knowledge of the data world—whether it's Python, SQL, or specific tools like dbt or Looker.
            </p>
            <p>
              Our training courses are available out of the box, but we always tailor them to specific needs. There's one constant, though: we don't do theory, just practical knowledge that can be deployed right away. Participants work with your actual data, solve your actual problems, and leave with runbooks they can reference when they hit roadblocks.
            </p>
          </div>

          {/* Quote */}
          <div className="bg-white p-8 rounded-lg border-l-4 border-purple-600">
            <blockquote className="text-2xl font-semibold text-purple-900 mb-4">
              "We want to empower our customers to innovate themselves, not to permanently depend on us."
            </blockquote>
            <p className="text-slate-600">
              Martijn Voorveld, Commercial Lead - NEXDYNE TECHNOLOGIES
            </p>
          </div>
        </div>
      </section>

      {/* Helping You to Help Yourself Section */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Helping you to help yourself
          </h2>
          <div className="space-y-4 text-lg text-slate-700">
            <p>
              We believe in making organizations self-reliant. That's why, as well as traditional training, we also offer training on the job that fits alongside ongoing projects. We teach your teams not only how to use solutions, but more than anything how to manage them.
            </p>
            <p>
              Because one thing is clear: we want you to get ahead without us. No need for constant consultation when we pass on real knowledge that makes your organization stronger. And that approach aligns with our vision: we're not here to stay tied to you, but to set you off on the right track. That's how we shape your data-driven future together.
            </p>
            <p>
              Training delivery ranges from half-day workshops (dashboard design, SQL fundamentals) to multi-week bootcamps (data engineering, ML operations). We work on-site or remote, synchronous or asynchronous—whatever fits your team's schedule and learning style.
            </p>
          </div>
        </div>
      </section>

      {/* Expert CTA Section */}
      <section className="py-20 bg-blue-50">
        <div className="container">
          <div className="max-w-4xl mx-auto bg-white p-12 rounded-lg shadow-lg">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="w-48 h-48 bg-slate-100 rounded-full flex items-center justify-center mx-auto">
                  <div className="w-40 h-40 bg-slate-200 rounded-full"></div>
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">
                  Want to know more?
                </h2>
                <p className="text-lg text-slate-700 mb-6">
                  <strong>Martijn Voorveld</strong><br />
                  Senior Sales Manager
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-slate-900 hover:bg-slate-800 text-white">
                    Get in touch
                  </Button>
                  <Button variant="outline" className="border-slate-300">
                    Schedule a meeting
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <div className="mb-12">
            <span className="text-sm text-slate-600 uppercase tracking-wide font-semibold">Partners</span>
            <h2 className="text-4xl font-bold text-slate-900 mt-2">Agentic AI</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Glean */}
            <div className="bg-white p-8 rounded-lg border border-slate-200 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Glean</h3>
              <p className="text-slate-700">
                Enterprise search and knowledge discovery platform that connects all your company data sources.
              </p>
            </div>

            {/* Weaviate */}
            <div className="bg-white p-8 rounded-lg border border-slate-200 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Weaviate</h3>
              <p className="text-slate-700">
                Open-source vector database for AI-native applications and semantic search capabilities.
              </p>
            </div>

            {/* LangChain */}
            <div className="bg-white p-8 rounded-lg border border-slate-200 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-purple-900 mb-3">LangChain</h3>
              <p className="text-slate-700">
                Framework for building context-aware reasoning applications powered by language models.
              </p>
            </div>

            {/* N8N */}
            <div className="bg-white p-8 rounded-lg border border-slate-200 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-purple-900 mb-3">N8N</h3>
              <p className="text-slate-700">
                Workflow automation platform that connects AI models with business processes and data sources.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why NEXDYNE Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/office-building.jpg"
                alt="NEXDYNE Office"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Why NEXDYNE
              </h2>
              <p className="text-lg text-slate-700 mb-6">
                Whether you're looking for a strategic partner, a boost for your digital transformation, or the ultimate customer experience for your customers, you've come to the right place. With our next-generation digital solutions, you'll always be one step ahead of the competition.
              </p>
              <Button className="bg-slate-900 hover:bg-slate-800 text-white">
                Get in touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Cases we love talking about</h2>
            <p className="text-xl text-slate-700">
              Heard of a business that transforms unique business challenges into exceptional outcomes? That'd be us. Check out these inspiring cases.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Case 1 */}
            <Link href="/cases/financial-services-sql-bootcamp">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all group cursor-pointer">
                <img src="/financial-services-training.55081221.jpg" alt="Financial Services Training" className="h-48 w-full object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    Financial Services Firm Upskills 50 Analysts
                  </h3>
                  <p className="text-slate-700 mb-4">
                    8-week SQL and Python bootcamp transformed business analysts into self-sufficient data practitioners, reducing IT backlog 60%.
                  </p>
                  <Button variant="ghost" className="text-blue-600 hover:text-blue-700 p-0">
                    Read more
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </Link>

            {/* Case 2 */}
            <Link href="/cases/retailer-data-academy">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all group cursor-pointer">
                <img src="/retail-data-academy.84cb2568.jpg" alt="Retail Data Academy" className="h-48 w-full object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    Retailer Builds Internal Data Academy
                  </h3>
                  <p className="text-slate-700 mb-4">
                    Custom curriculum covering analytics fundamentals through ML deployment trained 120 employees across 6 departments in 12 months.
                  </p>
                  <Button variant="ghost" className="text-blue-600 hover:text-blue-700 p-0">
                    Read more
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </Link>

            {/* Case 3 */}
            <Link href="/cases/healthcare-dashboard-training">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all group cursor-pointer">
                <img src="/healthcare-dashboard-training.fff5ec24.jpg" alt="Healthcare Dashboard Training" className="h-48 w-full object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    Healthcare Network Trains Clinical Staff on Dashboards
                  </h3>
                  <p className="text-slate-700 mb-4">
                    Half-day workshops taught 200 clinicians to build custom Tableau dashboards, improving patient outcome visibility 45%.
                  </p>
                  <Button variant="ghost" className="text-blue-600 hover:text-blue-700 p-0">
                    Read more
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Related Services Section */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-4xl font-bold text-slate-900 mb-12">Related Services</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Data Strategy */}
            <Link href="/solutions/data-strategy">
              <div className="p-6 rounded-lg border-2 border-dashed border-slate-300 hover:border-blue-500 hover:bg-blue-50 transition-all cursor-pointer">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Data Strategy</h3>
                <p className="text-slate-700">Define what data matters and how to monetize it.</p>
              </div>
            </Link>

            {/* Data Platform */}
            <Link href="/solutions/data-platform">
              <div className="p-6 rounded-lg border-2 border-dashed border-slate-300 hover:border-blue-500 hover:bg-blue-50 transition-all cursor-pointer">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Data Platform</h3>
                <p className="text-slate-700">Modern data warehouses and lakes built on cloud infrastructure.</p>
              </div>
            </Link>

            {/* Data Visualization */}
            <Link href="/solutions/data-visualization">
              <div className="p-6 rounded-lg border-2 border-dashed border-slate-300 hover:border-blue-500 hover:bg-blue-50 transition-all cursor-pointer">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Data visualization</h3>
                <p className="text-slate-700">Real-time dashboards and analytics interfaces that surface insights.</p>
              </div>
            </Link>

            {/* Data Training - Current Page */}
            <div className="p-6 rounded-lg border-2 border-blue-500 bg-blue-50 relative">
              <div className="absolute top-2 right-2">
                <span className="text-xs font-semibold text-blue-600 bg-blue-100 px-2 py-1 rounded">Current page</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Data training</h3>
              <p className="text-slate-700">Give your employees the knowledge and skills they need.</p>
            </div>

            {/* Data Governance */}
            <div className="p-6 rounded-lg border-2 border-dashed border-slate-300 hover:border-blue-500 hover:bg-blue-50 transition-all cursor-pointer">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Data governance</h3>
              <p className="text-slate-700">Access controls, compliance frameworks, and data quality monitoring.</p>
            </div>

            {/* Data Engineering */}
            <div className="p-6 rounded-lg border-2 border-dashed border-slate-300 hover:border-blue-500 hover:bg-blue-50 transition-all cursor-pointer">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Data Engineering</h3>
              <p className="text-slate-700">Augment your team with certified data engineers and architects.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-[#2D5BFF] to-[#4169FF] text-white">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to build a self-sufficient data team?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Let's design a training program that turns your team into data practitioners who solve problems without external dependency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-900 hover:bg-slate-100">
              Get in touch
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Schedule a meeting
            </Button>
          </div>
        </div>
      </section>

      <RelatedContent items={dataRelatedItems} />
      <Footer />
    </div>
  );
}
