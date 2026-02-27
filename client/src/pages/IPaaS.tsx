import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { ArrowRight, Network, Zap, BarChart3, Lock, Cloud, GitBranch } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function IPaaS() {
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
        <span className="text-charcoal">iPaaS</span>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container relative py-16 sm:py-20 md:py-24 lg:py-16 sm:py-20 md:py-24 lg:py-32">
          <div className="max-w-5xl">
            <h1 className="text-6xl md:text-7xl font-bold mb-5 sm:mb-3 md:mb-4 leading-tight">
              iPaaS: Integration Platform as a Service
            </h1>
            <p className="text-2xl leading-relaxed opacity-90 max-w-3xl">
              Break down data silos and connect your entire technology ecosystem. One unified platform that orchestrates seamless data flow across all systems—no more manual transfers, no more isolated islands of information.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 max-w-6xl mx-auto">
            <div>
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
                <Network className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-charcoal">Unified command center</h3>
              <p className="text-lg text-charcoal/80 leading-relaxed">
                One platform connects all systems and workflows intuitively. Centralize business logic to enable rapid adjustments and maintain complete visibility.
              </p>
            </div>

            <div>
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-charcoal">Instant connectivity</h3>
              <p className="text-lg text-charcoal/80 leading-relaxed">
                Connect new systems without custom development. Adapt quickly to market changes—your technology infrastructure accelerates growth instead of constraining it.
              </p>
            </div>

            <div>
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-charcoal">Strategic integration</h3>
              <p className="text-lg text-charcoal/80 leading-relaxed">
                Move beyond point solutions. Integrate entire business processes to gain strategic insights into data flows and unlock operational intelligence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What is iPaaS Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 lg:py-24 bg-subtle">
        <div className="container max-w-5xl mx-auto">
          <div className="mb-8 sm:mb-12 md:mb-16">
            <p className="text-sm font-semibold tracking-widest uppercase mb-4 text-muted-foreground">Understanding iPaaS</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal">
              The integration challenge
            </h2>
          </div>
          
          <div className="prose prose-xl max-w-none text-charcoal/80 leading-relaxed space-y-6">
            <p>
              Most organizations struggle with fragmented technology landscapes—applications that don't communicate, manual data transfers between systems, and isolated information silos that prevent holistic decision-making. Sales data lives in the CRM, financial information sits in the ERP, customer service records exist in separate ticketing systems, and marketing runs on yet another platform. The result: inefficiency, errors, and strategic blindness.
            </p>
            <p>
              Integration Platform as a Service (iPaaS) eliminates these barriers by providing a cloud-based hub that connects all your business applications and data sources. Instead of building custom point-to-point integrations that become brittle and expensive to maintain, iPaaS creates a unified integration layer that orchestrates data flow across your entire technology ecosystem.
            </p>
            <p>
              The platform provides pre-built connectors for hundreds of common applications, visual workflow designers that enable business users to create integrations without coding, and centralized monitoring that gives you complete visibility into how data moves through your organization. When you need to add a new system or modify a workflow, changes happen in hours instead of months—and your IT team focuses on strategic initiatives instead of maintaining integration code.
            </p>
          </div>

          {/* Quote */}
          <div className="mt-12 border-l-4 border-primary pl-8 py-6 bg-white">
            <p className="text-xl italic text-gray-800 mb-4">
              "We had eight different systems that required manual data synchronization. iPaaS eliminated all the spreadsheet exports and manual transfers—now data flows automatically, and we have real-time visibility across the entire business."
            </p>
            <p className="text-lg font-semibold text-charcoal">CTO, Manufacturing Company</p>
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
                From fragmentation to orchestration
              </h2>
              <p className="text-xl leading-relaxed opacity-90 mb-5 sm:mb-6 md:mb-8">
                We embrace simplicity over complexity. Our approach starts with understanding your complete data landscape, then systematically connects systems through a unified platform that grows with your business.
              </p>
              <p className="text-lg leading-relaxed opacity-90 mb-5 sm:mb-6 md:mb-8">
                First, we map your technology ecosystem—every application, every data source, every workflow that requires integration. We identify redundancies, bottlenecks, and opportunities where automated data flow can eliminate manual work and unlock new capabilities.
              </p>
              <p className="text-lg leading-relaxed opacity-90">
                Then we implement a centralized integration platform that replaces custom point-to-point connections with managed, scalable workflows. You gain visibility into where costs lie, control over how data moves, and the agility to adapt quickly as business needs evolve. The platform scales alongside your organization, supporting growth without requiring proportional increases in IT resources.
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="bg-slate-800 p-4 sm:p-6 md:p-8 rounded-lg border border-slate-700">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-charcoal">1</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Landscape Assessment</h3>
                    <p className="text-lg opacity-90 leading-relaxed">
                      Document all systems, data sources, and integration requirements. Identify quick wins and strategic priorities for maximum business impact.
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
                    <h3 className="text-2xl font-bold mb-3">Platform Implementation</h3>
                    <p className="text-lg opacity-90 leading-relaxed">
                      Deploy iPaaS infrastructure, configure connectors, and build initial integrations that deliver immediate value while establishing foundation for expansion.
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
                    <h3 className="text-2xl font-bold mb-3">Scale & Govern</h3>
                    <p className="text-lg opacity-90 leading-relaxed">
                      Expand integration coverage, establish governance frameworks, and empower business users to create workflows while maintaining security and compliance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <p className="text-sm font-semibold tracking-widest uppercase mb-4 text-muted-foreground">Platform Capabilities</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal">
              Comprehensive integration infrastructure
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:p-6 md:p-8 max-w-7xl mx-auto">
            <div className="p-4 sm:p-6 md:p-8 border-2 border-border hover:border-primary transition-all duration-300">
              <Cloud className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3 text-charcoal">Pre-built Connectors</h3>
              <p className="text-charcoal/80 leading-relaxed">
                Hundreds of ready-to-use connectors for popular applications—CRM, ERP, marketing automation, databases, cloud services, and legacy systems.
              </p>
            </div>

            <div className="p-4 sm:p-6 md:p-8 border-2 border-border hover:border-primary transition-all duration-300">
              <GitBranch className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3 text-charcoal">Visual Workflow Designer</h3>
              <p className="text-charcoal/80 leading-relaxed">
                Intuitive drag-and-drop interface enables business users to create and modify integrations without writing code or waiting for IT resources.
              </p>
            </div>

            <div className="p-4 sm:p-6 md:p-8 border-2 border-border hover:border-primary transition-all duration-300">
              <BarChart3 className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3 text-charcoal">Real-time Monitoring</h3>
              <p className="text-charcoal/80 leading-relaxed">
                Centralized dashboard provides visibility into all integrations, data flows, errors, and performance metrics for proactive management.
              </p>
            </div>

            <div className="p-4 sm:p-6 md:p-8 border-2 border-border hover:border-primary transition-all duration-300">
              <Lock className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3 text-charcoal">Security & Compliance</h3>
              <p className="text-charcoal/80 leading-relaxed">
                Enterprise-grade security, encryption, access controls, and audit trails ensure data protection and regulatory compliance.
              </p>
            </div>

            <div className="p-4 sm:p-6 md:p-8 border-2 border-border hover:border-primary transition-all duration-300">
              <Zap className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3 text-charcoal">Data Transformation</h3>
              <p className="text-charcoal/80 leading-relaxed">
                Powerful mapping and transformation tools handle format conversions, data enrichment, validation, and cleansing during integration.
              </p>
            </div>

            <div className="p-4 sm:p-6 md:p-8 border-2 border-border hover:border-primary transition-all duration-300">
              <Network className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3 text-charcoal">API Management</h3>
              <p className="text-charcoal/80 leading-relaxed">
                Create, publish, and manage APIs that expose your business capabilities to partners, customers, and internal applications.
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

            <Link href="/solutions/intelligent-process-optimization/process-automation/process-orchestration" className="group">
              <div className="p-4 sm:p-6 md:p-8 border-2 border-border hover:border-primary transition-all duration-300 h-full bg-white">
                <h3 className="text-xl font-bold mb-3 text-charcoal group-hover:text-primary transition-colors">
                  Process Orchestration
                </h3>
                <p className="text-charcoal/80 mb-4 leading-relaxed">
                  Coordinate complex, multi-step workflows across teams, departments, and systems to ensure flawless end-to-end execution.
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
            Ready to unify your technology ecosystem?
          </h2>
          <p className="text-xl leading-relaxed opacity-90 mb-6 sm:mb-8 md:mb-12">
            Schedule a complimentary consultation to explore how iPaaS can eliminate data silos, streamline workflows, and unlock the full potential of your technology investments.
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
