import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Zap, Plug } from "lucide-react";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { RelatedContent } from "@/components/RelatedContent";
import { dataRelatedItems } from "@/data/related-content";

export default function RPA() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-900 via-[#2D5BFF] to-[#4169FF] text-white py-20">
        <div className="container">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm mb-8 text-white/80">
            <Link href="/solutions/process-automation" className="hover:text-white">
              Services
            </Link>
            <span>/</span>
            <Link href="/solutions/process-automation" className="hover:text-white">
              Process Automation
            </Link>
            <span>/</span>
            <span className="text-white">RPA</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-3 eb-garamond">
                Robotic Process Automation (RPA)
              </h1>
            </div>
            <div>
              <p className="text-xl text-white/90">
                Software robots execute repetitive tasks with perfect consistency—24/7, zero errors, no breaks. Deploy intelligent automation that handles data entry, invoice processing, and system updates while your team focuses on strategic work that drives growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left: Person Image */}
            <div>
              <img
                src="/rpa-robot.398cb9df.jpg"
                alt="RPA automation technology"
                className="rounded-lg w-full"
              />
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">Do you want to know more?</h3>
                <Button size="lg" className="bg-slate-900 hover:bg-slate-800">
                  Ask our RPA specialist
                </Button>
              </div>
            </div>

            {/* Right: Benefits */}
            <div>
              <h2 className="text-4xl font-bold mb-12">
                Why NEXDYNE RPA delivers results
              </h2>

              <div className="space-y-8">
                {/* Digital workers */}
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Bot className="w-8 h-8 text-blue-500" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Digital workers</h3>
                    <p className="text-slate-600 text-lg">
                      Bots that execute transactions at machine speed with 100% accuracy. No fatigue, no errors, no downtime—operations that scale instantly without adding headcount.
                    </p>
                  </div>
                </div>

                {/* Rapid deployment */}
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Zap className="w-8 h-8 text-blue-500" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Rapid deployment</h3>
                    <p className="text-slate-600 text-lg">
                      First bot deployed in 4-6 weeks. We identify high-impact processes, build automation, and deliver measurable ROI before your competitors finish planning.
                    </p>
                  </div>
                </div>

                {/* Seamless integration */}
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Plug className="w-8 h-8 text-blue-500" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Seamless integration</h3>
                    <p className="text-slate-600 text-lg">
                      Bots interact with your existing systems through the user interface—no API required, no system changes, no IT disruption. Works with legacy and modern applications alike.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is RPA Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold mb-8 text-center">What is RPA?</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            RPA deploys software robots that mimic human actions within digital systems. These bots log into applications, extract data, perform calculations, complete transactions, and trigger workflows—executing the same repetitive tasks your team handles manually, but at machine speed with perfect accuracy. Unlike traditional automation that requires API integration or system modifications, RPA bots interact through the user interface just like humans do. This means you can automate processes across legacy systems, modern SaaS platforms, and everything in between without expensive IT projects or system changes.
          </p>
        </div>
      </section>

      {/* Team Quote Section */}
      <section className="py-20 bg-slate-50">
        <div className="container max-w-4xl">
          <blockquote className="text-center">
            <p className="text-2xl md:text-3xl font-medium text-red-900 mb-6">
              "With RPA, you don't just automate tasks—you transform operations. Bots execute with perfect consistency, scale instantly, and free your team to focus on work that requires human judgment. That's the difference between efficiency and transformation."
            </p>
            <footer className="text-slate-600 text-lg">
              Floris Weegink - Field CTO - NEXDYNE TECHNOLOGIES
            </footer>
          </blockquote>
        </div>
      </section>

      {/* The RPA Method Works Section */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold mb-8 text-center">The RPA method works</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-12">
            Most RPA projects fail because they start too big. We take the opposite approach: identify one high-volume, error-prone process and automate it completely in 4-6 weeks. This delivers immediate ROI and builds organizational confidence before scaling to additional processes. Our methodology focuses on quick wins that compound—each successful bot deployment funds the next, creating a self-sustaining automation program that transforms operations without massive upfront investment.
          </p>
        </div>
      </section>

      {/* Expert CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-100 to-blue-50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/rpa-digital-workers.0cc1b683.jpg"
                alt="RPA Digital Workers"
                className="rounded-lg w-full max-w-md mx-auto"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">Do you want to know more?</h2>
              <p className="text-xl text-slate-700 mb-4">Floris Weegink</p>
              <p className="text-lg text-slate-600 mb-8">Field CTO</p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-slate-900 hover:bg-slate-800">
                  Get in touch
                </Button>
                <Button size="lg" variant="outline" className="border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white">
                  Schedule a meeting <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <div className="max-w-3xl mb-16">
            <p className="text-sm font-semibold text-blue-500 mb-4 tracking-wide uppercase">Partners</p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Enterprise-grade RPA through proven platforms
            </h2>
            <p className="text-lg text-slate-600">
              We deploy industry-leading RPA technology from UiPath, the global standard for enterprise automation. This partnership enables us to deliver bot deployments that handle high-volume transaction processing with enterprise-grade reliability and security.
            </p>
          </div>

          <div className="max-w-md">
            <div className="bg-white rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center h-32 mb-4">
                <div className="text-6xl font-bold text-blue-500">UiPath</div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">UiPath</h3>
              <p className="text-slate-600">
                Industry-leading RPA platform powering our bot deployments. Handles high-volume transaction processing with enterprise-grade reliability and security.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <Button variant="outline" size="lg">
              All partners
            </Button>
          </div>
        </div>
      </section>

      {/* Why NEXDYNE Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/rpa-automation.0763e6ae.jpg"
                alt="Business Process Automation"
                className="rounded-lg w-full"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">Why NEXDYNE</h2>
              <p className="text-lg text-slate-700 leading-relaxed">
                Most automation vendors sell software. We deliver outcomes. Our RPA practice combines deep process expertise with technical execution—we don't just deploy bots, we redesign workflows to maximize automation potential. This approach means faster ROI, higher success rates, and automation programs that scale sustainably. When you work with NEXDYNE, you're not buying technology—you're partnering with a team that's accountable for measurable business results.
              </p>
              <div className="mt-8">
                <Button size="lg" className="bg-slate-900 hover:bg-slate-800">
                  Get in touch
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section className="py-20 bg-blue-50">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-slate-600 mb-4 tracking-wide uppercase">Cases</p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Cases we love talking about
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Real implementations. Real results. See how we've deployed RPA to eliminate manual work and accelerate operations for companies across industries.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Case Study 1 */}
            <Link href="/cases/global-retailer">
              <div className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                <img
                  src="/case-retail.jpg"
                  alt="Global Retailer Case Study"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Global Retailer</h3>
                  <p className="text-slate-600 mb-4">
                    Implemented headless commerce platform resulting in 45% increase in online revenue and 60% faster page loads.
                  </p>
                  <div className="flex gap-4 text-sm">
                    <div>
                      <div className="text-2xl font-bold text-blue-500">45%</div>
                      <div className="text-slate-600">Revenue Growth</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-500">60%</div>
                      <div className="text-slate-600">Faster Loads</div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Case Study 2 */}
            <Link href="/cases/financial-institution">
              <div className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                <img
                  src="/case-fintech.jpg"
                  alt="Fintech Startup Case Study"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Financial Institution</h3>
                  <p className="text-slate-600 mb-4">
                    Deployed RPA solution automating 80% of manual processing, saving 10K+ hours annually and 50% cost reduction.
                  </p>
                  <div className="flex gap-4 text-sm">
                    <div>
                      <div className="text-2xl font-bold text-blue-500">80%</div>
                      <div className="text-slate-600">Process Automated</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-500">10K+</div>
                      <div className="text-slate-600">Hours Saved</div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Case Study 3 */}
            <Link href="/cases/healthcare-provider">
              <div className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                <img
                  src="/case-healthcare.jpg"
                  alt="Healthcare Provider Case Study"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Healthcare Provider</h3>
                  <p className="text-slate-600 mb-4">
                    Built 60-patient engagement platform with real-time data sync, 40% improvement in patient satisfaction.
                  </p>
                  <div className="flex gap-4 text-sm">
                    <div>
                      <div className="text-2xl font-bold text-blue-500">40%</div>
                      <div className="text-slate-600">Better Satisfaction</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-500">50%</div>
                      <div className="text-slate-600">Faster Processing</div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="text-center">
            <Link href="/cases">
              <Button variant="outline" size="lg">
                All cases
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Related Services Section */}
      <section className="py-20">
        <div className="container">
          <div className="mb-12">
            <p className="text-sm font-semibold text-slate-600 mb-4 tracking-wide uppercase">Process Automation</p>
            <h2 className="text-4xl font-bold">Services</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="flex gap-6">
              <div>
                <img
                  src="/team-collaboration.jpg"
                  alt="Expert"
                  className="rounded-lg w-32 h-32 object-cover"
                />
                <div className="mt-6">
                  <h3 className="text-xl font-bold mb-4">Do you want to know more?</h3>
                  <Button className="bg-slate-900 hover:bg-slate-800">
                    Get in touch
                  </Button>
                  <Button variant="link" className="ml-4">
                    Schedule a meeting <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {/* RPA - Current page */}
              <div className="border-l-4 border-blue-500 pl-6 py-4 bg-blue-50">
                <h3 className="text-xl font-bold mb-2 flex items-center justify-between">
                  Robotic Process Automation (RPA)
                  <ArrowRight className="w-5 h-5 text-blue-500" />
                </h3>
                <p className="text-slate-600">
                  Software robots that execute repetitive tasks with perfect consistency. Deploy bots that handle data entry, invoice processing, and system updates—freeing your team for strategic work.
                </p>
              </div>

              {/* iPaaS */}
              <Link href="/solutions/ipaas">
                <div className="border-l-4 border-transparent hover:border-blue-500 pl-6 py-4 hover:bg-blue-50 transition-all cursor-pointer">
                  <h3 className="text-xl font-bold mb-2 flex items-center justify-between">
                    iPaaS
                    <ArrowRight className="w-5 h-5" />
                  </h3>
                  <p className="text-slate-600">
                    Connect disparate systems without custom code. Real-time data synchronization across your ERP, CRM, and legacy systems—eliminating manual data transfer.
                  </p>
                </div>
              </Link>

              {/* Process Orchestration */}
              <Link href="/solutions/process-orchestration">
                <div className="border-l-4 border-transparent hover:border-blue-500 pl-6 py-4 hover:bg-blue-50 transition-all cursor-pointer">
                  <h3 className="text-xl font-bold mb-2 flex items-center justify-between">
                    Process Orchestration
                    <ArrowRight className="w-5 h-5" />
                  </h3>
                  <p className="text-slate-600">
                    Coordinate complex workflows across multiple systems and teams. Orchestration engines manage dependencies, handle exceptions, and ensure seamless end-to-end execution.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <RelatedContent items={dataRelatedItems} />
      <Footer />
    </div>
  );
}
