import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { ArrowRight, GitMerge, Eye, Users, TrendingUp, Workflow, Target } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function ProcessOrchestration() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Breadcrumb */}
      <div className="container py-4 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-charcoal">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/solutions/intelligent-process-optimization" className="hover:text-charcoal">Intelligent Process Optimization</Link>
        <span className="mx-2">/</span>
        <Link href="/solutions/intelligent-process-optimization/process-automation" className="hover:text-charcoal">Process Automation</Link>
        <span className="mx-2">/</span>
        <span className="text-charcoal">Process Orchestration</span>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container relative py-16 sm:py-20 md:py-24 lg:py-16 sm:py-20 md:py-24 lg:py-32">
          <div className="max-w-5xl">
            <h1 className="text-6xl md:text-7xl font-bold mb-5 sm:mb-3 md:mb-4 leading-tight eb-garamond">
              Process Orchestration
            </h1>
            <p className="text-2xl leading-relaxed opacity-90 max-w-3xl">
              Transform fragmented workflows into seamless end-to-end processes. Coordinate complex operations across teams, departments, and systems to deliver flawless execution at scale.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 max-w-7xl mx-auto">
            <div>
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-charcoal">Complete visibility</h3>
              <p className="text-lg text-charcoal/80 leading-relaxed">
                Visualize workflows and data flows across the organization. Identify bottlenecks, measure performance, and optimize continuously.
              </p>
            </div>

            <div>
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-charcoal">Intelligent automation</h3>
              <p className="text-lg text-charcoal/80 leading-relaxed">
                Automate manual processes and eliminate errors. Decision trees handle critical choices, ensuring consistency and compliance.
              </p>
            </div>

            <div>
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-charcoal">Cross-functional coordination</h3>
              <p className="text-lg text-charcoal/80 leading-relaxed">
                Create an overarching layer that enables departments to collaborate effectively and execute unified business processes.
              </p>
            </div>

            <div>
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-charcoal">Scalable growth</h3>
              <p className="text-lg text-charcoal/80 leading-relaxed">
                Handle more customers with existing staff. Automation enables revenue growth without proportional cost increases.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What is Process Orchestration Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 lg:py-24 bg-subtle">
        <div className="container max-w-5xl mx-auto">
          <div className="mb-8 sm:mb-12 md:mb-16">
            <p className="text-sm font-semibold tracking-widest uppercase mb-4 text-muted-foreground">Understanding Process Orchestration</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal">
              The orchestration imperative
            </h2>
          </div>
          
          <div className="prose prose-xl max-w-none text-charcoal/80 leading-relaxed space-y-6">
            <p>
              Most organizations operate with fragmented processes—workflows that span multiple departments, touch numerous systems, and require constant human intervention to keep moving forward. Customer onboarding involves sales, operations, finance, and IT. Order fulfillment requires coordination between sales, inventory, logistics, and accounting. Product development demands alignment across engineering, design, marketing, and manufacturing.
            </p>
            <p>
              Process Orchestration creates an intelligent coordination layer that automates and streamlines these complex, cross-functional workflows from start to finish. Instead of relying on email threads, manual handoffs, and tribal knowledge to move work between departments, orchestration platforms provide a single source of truth that manages the entire process lifecycle—triggering actions, routing decisions, enforcing business rules, and ensuring nothing falls through the cracks.
            </p>
            <p>
              The platform integrates with your existing systems—RPA robots, business applications, databases, communication tools—to create unified workflows that execute consistently regardless of volume. You gain real-time visibility into process performance, identify bottlenecks that constrain throughput, and continuously optimize based on data rather than assumptions. The result: faster cycle times, higher quality, better customer experiences, and the ability to scale operations without proportional increases in headcount.
            </p>
          </div>

          {/* Quote */}
          <div className="mt-12 border-l-4 border-primary pl-8 py-6 bg-white">
            <p className="text-xl italic text-gray-800 mb-4">
              "Our customer onboarding process involved seven departments and took weeks. Process orchestration reduced it to days while improving accuracy and customer satisfaction. We can now handle 3x the volume with the same team."
            </p>
            <p className="text-lg font-semibold text-charcoal">VP of Operations, SaaS Company</p>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 lg:py-24 bg-slate-900 text-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-6 sm:p-6 sm:p-8 md:p-12 lg:gap-8 sm:gap-6 sm:p-8 md:p-12 lg:gap-16 items-start max-w-7xl mx-auto">
            <div>
              <p className="text-sm font-semibold tracking-widest uppercase mb-6 text-cyan-400">Our Methodology</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-5 sm:mb-6 md:mb-8">
                From chaos to choreography
              </h2>
              <p className="text-xl leading-relaxed opacity-90 mb-5 sm:mb-6 md:mb-8">
                Process orchestration isn't what you search for—it's the solution to organization-wide challenges. Your business is growing, but processes can't keep pace. Teams are overwhelmed, customer satisfaction is declining, and operational costs are rising faster than revenue.
              </p>
              <p className="text-lg leading-relaxed opacity-90 mb-5 sm:mb-6 md:mb-8">
                We map your processes comprehensively—every workflow, every system, every handoff, every decision point. From customer journeys to financial close, from supply chain to employee onboarding, we document how work flows, which systems are involved, and where friction exists. We assess your existing automation investments—RPA, integration platforms, workflow tools—and build on them to drive deeper transformation.
              </p>
              <p className="text-lg leading-relaxed opacity-90">
                Then we implement orchestration platforms that coordinate these complex workflows end-to-end. You gain visibility into organizational bottlenecks, automate manual coordination tasks, and create processes that scale efficiently. The result: higher revenue, improved customer satisfaction, and employees who focus on value creation instead of administrative coordination.
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="bg-slate-800 p-4 sm:p-6 md:p-8 rounded-lg border border-slate-700">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-charcoal">1</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Process Discovery</h3>
                    <p className="text-lg opacity-90 leading-relaxed">
                      Map end-to-end workflows across departments and systems. Document current state, identify pain points, and quantify improvement opportunities.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800 p-4 sm:p-6 md:p-8 rounded-lg border border-slate-700">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-charcoal">2</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Orchestration Design</h3>
                    <p className="text-lg opacity-90 leading-relaxed">
                      Design optimized workflows that eliminate handoffs, automate decisions, and integrate existing automation investments into cohesive processes.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800 p-4 sm:p-6 md:p-8 rounded-lg border border-slate-700">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-charcoal">3</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Continuous Optimization</h3>
                    <p className="text-lg opacity-90 leading-relaxed">
                      Monitor performance metrics, identify new bottlenecks, and systematically expand orchestration to additional processes for compounding benefits.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <p className="text-sm font-semibold tracking-widest uppercase mb-4 text-muted-foreground">Applications</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal">
              Where orchestration drives transformation
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:p-6 md:p-8 max-w-7xl mx-auto">
            <div className="p-4 sm:p-6 md:p-8 border-2 border-border hover:border-primary transition-all duration-300">
              <Workflow className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3 text-charcoal">Customer Onboarding</h3>
              <p className="text-charcoal/80 leading-relaxed">
                Coordinate sales, operations, finance, and IT to deliver seamless onboarding experiences that accelerate time-to-value and improve retention.
              </p>
            </div>

            <div className="p-4 sm:p-6 md:p-8 border-2 border-border hover:border-primary transition-all duration-300">
              <GitMerge className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3 text-charcoal">Order-to-Cash</h3>
              <p className="text-charcoal/80 leading-relaxed">
                Streamline the entire revenue cycle from quote to payment—integrating sales, fulfillment, shipping, invoicing, and collections.
              </p>
            </div>

            <div className="p-4 sm:p-6 md:p-8 border-2 border-border hover:border-primary transition-all duration-300">
              <Users className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3 text-charcoal">Employee Lifecycle</h3>
              <p className="text-charcoal/80 leading-relaxed">
                Automate hiring, onboarding, performance management, and offboarding workflows that span HR, IT, facilities, and department managers.
              </p>
            </div>

            <div className="p-4 sm:p-6 md:p-8 border-2 border-border hover:border-primary transition-all duration-300">
              <TrendingUp className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3 text-charcoal">Procure-to-Pay</h3>
              <p className="text-charcoal/80 leading-relaxed">
                Orchestrate requisition, approval, purchasing, receiving, invoice matching, and payment processes for complete spend visibility.
              </p>
            </div>

            <div className="p-4 sm:p-6 md:p-8 border-2 border-border hover:border-primary transition-all duration-300">
              <Target className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3 text-charcoal">Incident Management</h3>
              <p className="text-charcoal/80 leading-relaxed">
                Coordinate detection, triage, escalation, resolution, and post-mortem workflows across support, engineering, and operations teams.
              </p>
            </div>

            <div className="p-4 sm:p-6 md:p-8 border-2 border-border hover:border-primary transition-all duration-300">
              <Eye className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3 text-charcoal">Compliance Workflows</h3>
              <p className="text-charcoal/80 leading-relaxed">
                Ensure consistent execution of regulatory processes—audit preparation, policy attestation, risk assessment, and documentation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 lg:py-24 bg-subtle">
        <div className="container">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <p className="text-sm font-semibold tracking-widest uppercase mb-4 text-muted-foreground">Related Capabilities</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal">
              Complementary automation technologies
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4 sm:p-6 md:p-8 max-w-5xl mx-auto">
            <Link href="/solutions/intelligent-process-optimization/process-automation/rpa" className="group">
              <div className="p-4 sm:p-6 md:p-8 border-2 border-border hover:border-primary transition-all duration-300 h-full bg-white">
                <h3 className="text-xl font-bold mb-3 text-charcoal group-hover:text-primary transition-colors">
                  RPA (Robotic Process Automation)
                </h3>
                <p className="text-charcoal/80 mb-4 leading-relaxed">
                  Deploy intelligent software robots to handle repetitive, rule-based tasks across systems—eliminating manual effort and human error.
                </p>
                <div className="flex items-center text-primary font-semibold">
                  Learn more
                  <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            <Link href="/solutions/intelligent-process-optimization/process-automation/ipaas" className="group">
              <div className="p-4 sm:p-6 md:p-8 border-2 border-border hover:border-primary transition-all duration-300 h-full bg-white">
                <h3 className="text-xl font-bold mb-3 text-charcoal group-hover:text-primary transition-colors">
                  iPaaS (Integration Platform)
                </h3>
                <p className="text-charcoal/80 mb-4 leading-relaxed">
                  Connect disparate systems seamlessly through integration platforms that orchestrate data flow and synchronize business processes.
                </p>
                <div className="flex items-center text-primary font-semibold">
                  Learn more
                  <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 lg:py-24 bg-slate-900 text-white">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-5 sm:mb-6 md:mb-8">
            Ready to orchestrate seamless operations?
          </h2>
          <p className="text-xl leading-relaxed opacity-90 mb-6 sm:mb-8 md:mb-12">
            Schedule a complimentary consultation to explore how process orchestration can eliminate bottlenecks, improve coordination, and enable scalable growth.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-primary hover:bg-primary-hover text-white text-lg px-5 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6">
              Schedule consultation
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
