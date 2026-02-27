import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Search, ThumbsUp, Users, TrendingUp } from "lucide-react";
import { RelatedContent } from "@/components/RelatedContent";
import { dataRelatedItems } from "@/data/related-content";

export default function ProcessOrchestration() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-900 to-purple-700 text-white py-20">
        <div className="container">
          {/* Breadcrumb */}
          <nav className="text-sm mb-8 text-purple-200">
            <Link href="/solutions/intelligent-process-optimization" className="hover:text-white">
              Services
            </Link>
            {" / "}
            <Link href="/solutions/process-automation" className="hover:text-white">
              Process Automation
            </Link>
            {" / "}
            <span className="text-white">Process Orchestration</span>
          </nav>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-3 eb-garamond">
                Process Orchestration
              </h1>
              <p className="text-xl text-purple-100 mb-8">
                Coordinate complex workflows across multiple systems and teams. Orchestration engines manage dependencies, handle exceptions, and ensure processes complete successfully—turning fragmented operations into seamless end-to-end execution.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white transition-colors duration-200 ease-in-out">
                Do you want to know more?
              </Button>
            </div>
            <div className="hidden md:block">
              <img
                src="/process-orchestration-workflow.a6bc5b2e.jpg"
                alt="Process Orchestration Workflow"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-4xl font-bold text-charcoal mb-12">
            Why NEXDYNE Process Orchestration delivers results
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Search className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-charcoal mb-2">
                    Complete process visibility
                  </h3>
                  <p className="text-muted-foreground">
                    See exactly where work sits across your organization. Orchestration platforms visualize workflows, identify bottlenecks, and surface exceptions—no more mystery delays or lost tasks.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <ThumbsUp className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-charcoal mb-2">
                    Intelligent error handling
                  </h3>
                  <p className="text-muted-foreground">
                    Automated retry logic, escalation rules, and exception routing ensure processes complete successfully. When failures occur, the system knows exactly what to do—no manual intervention required.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-charcoal mb-2">
                    Cross-team coordination
                  </h3>
                  <p className="text-muted-foreground">
                    Orchestration acts as the overarching layer across your organization, enabling departments to collaborate seamlessly. Work flows between teams automatically without handoff delays.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-charcoal mb-2">
                    Scale without complexity
                  </h3>
                  <p className="text-muted-foreground">
                    Handle more customers with fewer staff by automating task coordination. Your business grows without increasing operational costs—orchestration ensures efficiency scales linearly.
                  </p>
                </div>
              </div>
            </div>

            <div className="hidden md:block">
              <img
                src="/camunda-workflow-diagram.21c1f5e3.png"
                alt="Workflow Orchestration Diagram"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What is Process Orchestration Section */}
      <section className="py-20 bg-slate-50">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold text-charcoal mb-6">
            Working smarter? Process Orchestration!
          </h2>
          <div className="prose prose-lg max-w-none text-charcoal/80 space-y-4">
            <p>
              Process Orchestration acts as an overarching layer across your organization, automating and streamlining entire business processes from start to finish. It integrates various systems, departments, and devices to ensure seamless collaboration. Unlike point solutions that automate individual tasks, orchestration coordinates complex workflows spanning multiple teams and technologies.
            </p>
            <p>
              Process Orchestration is ideal for companies with complex, recurring processes that span multiple systems and departments. Often, these businesses aim to grow without increasing their headcount. Process Orchestration gives you insights into organizational bottlenecks and automates manual tasks. The result? Higher revenue, improved efficiency metrics, and satisfied employees who focus on strategic work instead of repetitive coordination.
            </p>
          </div>
        </div>
      </section>

      {/* Team Quote Section */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <blockquote className="text-center">
            <p className="text-2xl md:text-3xl font-medium text-purple-900 mb-6">
              "Process Orchestration enables you to optimize all processes across departments, systems, and people. It's not just workflow automation—it's the intelligence layer that ensures every step executes correctly and exceptions get handled automatically."
            </p>
            <footer className="text-muted-foreground text-lg">
              Edwin Nooijen - Sales Director - NEXDYNE TECHNOLOGIES
            </footer>
          </blockquote>
        </div>
      </section>

      {/* The Solution You Didn't Know You Needed Section */}
      <section className="py-20 bg-slate-50">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold text-charcoal mb-6">
            The solution you didn't know you needed
          </h2>
          <div className="prose prose-lg max-w-none text-charcoal/80 space-y-4">
            <p>
              Process Orchestration often isn't what you're searching for—it's the solution to a company-wide problem. Your business is growing, but your team can't keep up. Processes are clunky, staff turnover is rising, and your efficiency metrics keep dropping. It's time for change.
            </p>
            <p>
              We map out your processes together—every single one. From the entire customer journey to invoicing, and from your supply chain to onboarding new employees, we uncover how processes flow, which systems are used, and which employees handle each step. We assess the RPA and low-code solutions you already have and build on them to drive automation further.
            </p>
          </div>
        </div>
      </section>

      {/* The Process Orchestration Method Works Section */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold text-charcoal mb-6">
            The Process Orchestration method works
          </h2>
          <div className="prose prose-lg max-w-none text-charcoal/80 space-y-4">
            <p>
              Most orchestration projects fail because they try to model every process simultaneously. We start with your most painful cross-functional workflow—typically order-to-cash or procure-to-pay—and deploy it completely in 4-6 weeks. This delivers immediate visibility into process bottlenecks and proves the platform's value before expanding.
            </p>
            <p>
              Our methodology prioritizes workflows with the highest coordination overhead. Each successful orchestration reduces manual handoffs, eliminates status-check emails, and surfaces exceptions automatically. Within six months, most clients have orchestrated 8-12 critical processes, transforming fragmented operations into seamless execution.
            </p>
          </div>
        </div>
      </section>

      {/* Expert CTA Section */}
      <section className="py-20 bg-blue-50">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-charcoal mb-8">
              Do you want to know more?
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <img
                  src="/rpa-digital-workers.0cc1b683.jpg"
                  alt="Process Orchestration Expert"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-charcoal mb-2">
                  Floris Weegink
                </h3>
                <p className="text-lg text-muted-foreground mb-6">Field CTO</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-white transition-colors duration-200 ease-in-out">
                    Get in touch
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-primary text-charcoal hover:bg-primary hover:text-white transition-colors duration-200 ease-in-out"
                  >
                    Schedule a meeting
                    <ArrowRight className="ml-2 h-4 w-4" />
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
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">
              PARTNERS
            </p>
            <h2 className="text-4xl font-bold text-charcoal mb-4">
              Enterprise orchestration through proven platforms
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl">
              We deploy enterprise-grade orchestration platforms—Camunda for complex business process management and N8N for flexible workflow automation. These partnerships enable us to deliver process visibility and exception handling at scale.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg border border-slate-200">
              <h3 className="text-3xl font-bold text-blue-600 mb-4">Camunda</h3>
              <p className="text-charcoal/80">
                Business process orchestration engine managing complex workflows. Coordinates multi-system processes with full visibility, exception handling, and automated decision-making.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg border border-slate-200">
              <h3 className="text-3xl font-bold text-blue-600 mb-4">N8N</h3>
              <p className="text-charcoal/80">
                Workflow automation platform enabling rapid process design and deployment. Connects applications, automates tasks, and orchestrates data flows across your technology stack.
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
                src="/business-process-automation.jpg"
                alt="Why NEXDYNE Process Orchestration"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-charcoal mb-6">Why NEXDYNE</h2>
              <div className="prose prose-lg text-charcoal/80">
                <p>
                  Most orchestration vendors sell platform licenses. We deliver coordinated processes. Our orchestration practice combines process mining expertise with technical execution—we don't just model workflows, we redesign operations to eliminate handoffs and ensure end-to-end completion.
                </p>
                <p>
                  This approach means faster deployment, higher process completion rates, and orchestration architectures that scale sustainably. When you work with NEXDYNE, you're not buying software—you're partnering with a team accountable for measurable business outcomes: reduced cycle times, improved throughput, and operations that execute flawlessly across systems and teams.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <div className="mb-12">
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">
              CASES
            </p>
            <h2 className="text-4xl font-bold text-charcoal mb-4">
              Cases we love talking about
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Real implementations. Real results. See how we've deployed Process Orchestration to coordinate complex workflows and eliminate operational bottlenecks.
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
                      <div className="text-2xl font-bold text-blue-600">45%</div>
                      <div className="text-sm text-muted-foreground">Faster load times</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-600">60%</div>
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
                      <div className="text-2xl font-bold text-blue-600">80%</div>
                      <div className="text-sm text-muted-foreground">Process automation</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-600">120K+</div>
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
                      <div className="text-2xl font-bold text-blue-600">40%</div>
                      <div className="text-sm text-muted-foreground">Reduced no-shows</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-600">35%</div>
                      <div className="text-sm text-muted-foreground">Higher satisfaction</div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="text-center">
            <Link href="/cases">
              <Button variant="outline" size="lg" className="border-primary text-charcoal hover:bg-primary hover:text-white transition-colors duration-200 ease-in-out">
                All cases
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Related Services Section */}
      <section className="py-20">
        <div className="container">
          <div className="mb-12">
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">
              PROCESS AUTOMATION
            </p>
            <h2 className="text-4xl font-bold text-charcoal">Services</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/solutions/rpa">
              <div className="bg-white p-8 rounded-lg border border-slate-200 hover:shadow-lg transition-shadow cursor-pointer">
                <h3 className="text-2xl font-bold text-charcoal mb-4">
                  Robotic Process Automation (RPA)
                </h3>
                <p className="text-muted-foreground mb-6">
                  Software robots that execute repetitive tasks with perfect consistency. Deploy bots that handle data entry, invoice processing, and system updates—freeing your team for strategic work.
                </p>
                <div className="flex items-center text-blue-600 font-semibold">
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </Link>

            <Link href="/solutions/ipaas">
              <div className="bg-white p-8 rounded-lg border border-slate-200 hover:shadow-lg transition-shadow cursor-pointer">
                <h3 className="text-2xl font-bold text-charcoal mb-4">iPaaS</h3>
                <p className="text-muted-foreground mb-6">
                  Connect disparate systems without custom code. Real-time data synchronization across your ERP, CRM, and legacy systems—eliminating manual data transfer.
                </p>
                <div className="flex items-center text-blue-600 font-semibold">
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </Link>

            <div className="bg-white p-8 rounded-lg border-2 border-blue-500 shadow-lg">
              <h3 className="text-2xl font-bold text-charcoal mb-4">
                Process Orchestration
              </h3>
              <p className="text-muted-foreground mb-6">
                Coordinate complex workflows across multiple systems and teams. Orchestration engines manage dependencies, handle exceptions, and ensure seamless end-to-end execution.
              </p>
              <div className="flex items-center text-blue-600 font-semibold">
                Current page
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to transform?</h2>
          <p className="text-xl mb-8 text-red-100">
            Let's talk about how AI-powered automation can accelerate your business.
          </p>
          <Button size="lg" className="bg-white text-primary hover:bg-white/90 transition-colors duration-200 ease-in-out">
            Contact us
          </Button>
          <p className="mt-6 text-red-100">or call us at +1 (555) 123-4567</p>
        </div>
      </section>

      <RelatedContent items={dataRelatedItems} />
      <Footer />
    </div>
  );
}
