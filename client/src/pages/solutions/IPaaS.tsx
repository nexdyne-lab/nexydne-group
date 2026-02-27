import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Clock, Shield } from "lucide-react";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { RelatedContent } from "@/components/RelatedContent";
import { dataRelatedItems } from "@/data/related-content";

export default function IPaaS() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-700 text-white py-20">
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
            <span className="text-white">iPaaS</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-3 eb-garamond">
                iPaaS
              </h1>
              <p className="text-2xl text-blue-50 leading-relaxed">
                Connect disparate systems without custom code. Real-time data synchronization across your ERP, CRM, e-commerce, and legacy systems—eliminating manual data transfer and ensuring single-source-of-truth accuracy.
              </p>
            </div>
            <div className="order-first lg:order-last">
              <div className="aspect-[4/3] rounded-lg overflow-hidden bg-white/10 backdrop-blur">
                <img 
                  src="/ipaas-platform.9bf7f8fd.webp"
                  alt="iPaaS Integration Platform"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="order-2 lg:order-1">
              <div className="aspect-[4/3] rounded-lg overflow-hidden bg-slate-100">
                <img 
                  src="/ipaas-integration.9921b861.png"
                  alt="System Integration"
                  className="w-full h-full object-contain p-8"
                />
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold mb-4">Do you want to know more?</h3>
                <Button className="bg-slate-900 hover:bg-slate-800">
                  Ask our iPaaS specialist
                </Button>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-charcoal mb-8">
                Why NEXDYNE iPaaS delivers results
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Zap className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-charcoal mb-2">Real-time synchronization</h3>
                    <p className="text-charcoal/80">
                      Data flows instantly between systems—no batch jobs, no overnight processing, no stale information. Changes propagate in seconds, ensuring every system operates on current data.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-charcoal mb-2">Rapid deployment</h3>
                    <p className="text-charcoal/80">
                      First integration live in 2-3 weeks. Pre-built connectors for 500+ applications mean no custom API development—we configure, test, and deploy while competitors are still scoping requirements.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-charcoal mb-2">Enterprise-grade reliability</h3>
                    <p className="text-charcoal/80">
                      Built-in error handling, automatic retries, and transaction logging ensure data integrity. When integrations fail, you know immediately—no silent data loss, no mystery errors discovered weeks later.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is iPaaS Section */}
      <section className="py-20 bg-slate-50">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold text-charcoal mb-6">What is iPaaS?</h2>
          <div className="prose prose-lg max-w-none text-charcoal/80 space-y-4">
            <p>
              iPaaS (Integration Platform as a Service) connects your business applications in the cloud, enabling automated data flow between systems without custom coding. Instead of building point-to-point integrations that break every time a system updates, iPaaS provides a centralized platform with pre-built connectors, transformation logic, and orchestration capabilities.
            </p>
            <p>
              When your sales team closes a deal in Salesforce, iPaaS automatically creates the customer record in your ERP, provisions their account in your product, sends welcome emails, and updates your analytics dashboard—all without manual intervention. This isn't just about moving data; it's about orchestrating business processes across your entire technology stack.
            </p>
            <p>
              The platform handles the complexity of API authentication, data mapping, error handling, and retry logic. Your team focuses on defining business rules—the iPaaS handles the technical execution. This means integrations deploy faster, maintain themselves better, and scale effortlessly as you add new systems.
            </p>
          </div>
        </div>
      </section>

      {/* Team Quote Section */}
      <section className="py-20 bg-slate-50">
        <div className="container max-w-4xl">
          <blockquote className="text-center">
            <p className="text-2xl md:text-3xl font-medium text-blue-900 mb-6">
              "With iPaaS, you don't just connect systems—you connect your entire organization. That means faster processes, better decisions, and less manual work. Real-time data flow eliminates the delays that hold businesses back."
            </p>
            <footer className="text-muted-foreground text-lg">
              Floris Weegink - Field CTO - NEXDYNE TECHNOLOGIES
            </footer>
          </blockquote>
        </div>
      </section>

      {/* The iPaaS Method Works Section */}
      <section className="py-20 bg-slate-50">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold text-charcoal mb-6">The iPaaS method works</h2>
          <div className="prose prose-lg max-w-none text-charcoal/80 space-y-4">
            <p>
              Most integration projects fail because they try to connect everything at once. We start with your highest-pain integration—typically between your CRM and ERP—and deploy it completely in 2-3 weeks. This delivers immediate ROI by eliminating manual data entry and proves the platform's value before expanding.
            </p>
            <p>
              Our methodology prioritizes quick wins that build momentum. Each successful integration funds the next, creating a self-sustaining integration program that gradually eliminates data silos without massive upfront investment. Within six months, most clients have 10-15 critical integrations running autonomously.
            </p>
          </div>
        </div>
      </section>

      {/* Expert CTA Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div className="aspect-square rounded-lg overflow-hidden bg-slate-100">
              <img 
                src="/ipaas-systems.aeaf229c.jpg"
                alt="Integration Expert"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-charcoal mb-4">Do you want to know more?</h2>
              <div className="mb-6">
                <p className="text-lg text-charcoal/80 mb-2">Floris Weegink</p>
                <p className="text-muted-foreground">Field CTO</p>
              </div>
              <div className="flex gap-4">
                <Link href="/contact">
                  <Button className="bg-slate-900 hover:bg-slate-800 text-white">
                    Get in touch
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="ghost" className="text-charcoal">
                    Schedule a meeting
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
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
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">
              Enterprise integration through proven platforms
            </h2>
            <p className="text-lg text-muted-foreground">
              We deploy best-in-class iPaaS technology from Workato, the enterprise standard for intelligent automation and integration. This partnership enables us to deliver real-time data synchronization with enterprise-grade reliability.
            </p>
          </div>

          <div className="max-w-2xl">
            <div className="bg-white rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center h-32 mb-4">
                <div className="text-6xl font-bold text-blue-500">Workato</div>
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Workato</h3>
              <p className="text-muted-foreground">
                Enterprise integration platform connecting your critical systems. Enables real-time data synchronization across cloud and on-premise applications with 500+ pre-built connectors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why NEXDYNE Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="aspect-[4/3] rounded-lg overflow-hidden bg-slate-100">
              <img 
                src="/ipaas-integration.9921b861.png"
                alt="Why NEXDYNE"
                className="w-full h-full object-contain p-8"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-charcoal mb-6">Why NEXDYNE</h2>
              <div className="prose prose-lg max-w-none text-charcoal/80 space-y-4">
                <p>
                  Most integration vendors sell platform licenses. We deliver synchronized systems. Our iPaaS practice combines deep data architecture expertise with technical execution—we don't just connect APIs, we redesign data flows to eliminate redundancy and ensure consistency.
                </p>
                <p>
                  This approach means faster deployment, higher data quality, and integration architectures that scale sustainably. When you work with NEXDYNE, you're not buying software—you're partnering with a team accountable for measurable business outcomes: reduced manual work, improved data accuracy, and operations that execute in real-time.
                </p>
              </div>
              <div className="mt-8">
                <Link href="/contact">
                  <Button className="bg-slate-900 hover:bg-slate-800 text-white">
                    Get in touch
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <div className="mb-12">
            <span className="text-sm text-muted-foreground uppercase tracking-wide font-semibold">Cases</span>
            <h2 className="text-4xl font-bold text-charcoal mt-2 mb-4">Cases we love talking about</h2>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Real implementations. Real results. See how we've deployed iPaaS to eliminate data silos and synchronize operations for companies across industries.
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
                  <h3 className="text-xl font-bold text-charcoal mb-2">
                    Global Retailer
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Integrated e-commerce platform with ERP and warehouse systems, eliminating manual order processing
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-2xl font-bold text-blue-500">45%</div>
                      <div className="text-sm text-muted-foreground">Faster processing</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-500">60%</div>
                      <div className="text-sm text-muted-foreground">Fewer errors</div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Case Study 2 */}
            <Link href="/cases/financial-institution">
              <div className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                <img
                  src="/case-finance.jpg"
                  alt="Financial Institution Case Study"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-charcoal mb-2">
                    Financial Institution
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Connected core banking system with CRM and compliance platforms for real-time customer data sync
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-2xl font-bold text-blue-500">80%</div>
                      <div className="text-sm text-muted-foreground">Less manual work</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-500">10K+</div>
                      <div className="text-sm text-muted-foreground">Records synced daily</div>
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
                  <h3 className="text-xl font-bold text-charcoal mb-2">
                    Healthcare Provider
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Synchronized patient records across EMR, billing, and insurance systems
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-2xl font-bold text-blue-500">40%</div>
                      <div className="text-sm text-muted-foreground">Reduced overhead</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-500">50%</div>
                      <div className="text-sm text-muted-foreground">Faster claims</div>
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
            <span className="text-sm text-muted-foreground uppercase tracking-wide font-semibold">Process Automation</span>
            <h2 className="text-4xl font-bold text-charcoal mt-2">Services</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Link href="/solutions/rpa">
              <div className="border border-slate-200 rounded-lg p-6 hover:shadow-lg transition-all cursor-pointer group">
                <h3 className="text-xl font-bold text-charcoal mb-3 group-hover:text-blue-500 transition-colors">
                  Robotic Process Automation (RPA)
                </h3>
                <p className="text-muted-foreground mb-4">
                  Software robots that execute repetitive tasks with perfect consistency. Deploy bots that handle data entry, invoice processing, and system updates—freeing your team for strategic work.
                </p>
                <div className="text-blue-500 font-medium flex items-center gap-2">
                  Learn more <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>

            <div className="border-2 border-blue-500 rounded-lg p-6 bg-blue-50">
              <h3 className="text-xl font-bold text-charcoal mb-3">
                iPaaS
              </h3>
              <p className="text-muted-foreground mb-4">
                Connect disparate systems without custom code. Real-time data synchronization across your ERP, CRM, and legacy systems—eliminating manual data transfer.
              </p>
              <div className="text-blue-500 font-medium">
                Current page
              </div>
            </div>

            <Link href="#orchestration">
              <div className="border border-slate-200 rounded-lg p-6 hover:shadow-lg transition-all cursor-pointer group">
                <h3 className="text-xl font-bold text-charcoal mb-3 group-hover:text-blue-500 transition-colors">
                  Process Orchestration
                </h3>
                <p className="text-muted-foreground mb-4">
                  Coordinate complex workflows across multiple systems and teams. Orchestration engines manage dependencies, handle exceptions, and ensure seamless end-to-end execution.
                </p>
                <div className="text-blue-500 font-medium flex items-center gap-2">
                  Learn more <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          </div>

          <div className="text-center mt-12">
            <h3 className="text-2xl font-bold text-charcoal mb-6">Do you want to know more?</h3>
            <div className="flex gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-slate-900 hover:bg-slate-800 text-white">
                  Get in touch
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="ghost" className="text-charcoal">
                  Schedule a meeting
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
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
