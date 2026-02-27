import React from "react";
import { ArrowRight, Cpu, Zap, TrendingUp, Target, BarChart3, Workflow } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";

export default function IntelligentProcessOptimizationNew() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Solutions', href: '/#services' },
        { label: 'Intelligent Process Optimization' }
      ]} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container relative py-16 sm:py-20 md:py-24 lg:py-16 sm:py-20 md:py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm font-semibold tracking-widest uppercase mb-6 text-cyan-400">Solutions</p>
            <h1 className="text-6xl md:text-7xl font-bold mb-5 sm:mb-3 md:mb-4 leading-tight">
              Intelligent Process Optimization
            </h1>
            <p className="text-2xl leading-relaxed opacity-90 max-w-3xl mx-auto">
              Transform manual operations into autonomous systems. Eliminate bottlenecks and accelerate execution.
            </p>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
        <div className="container max-w-5xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <p className="text-sm font-semibold tracking-widest uppercase mb-4 text-muted-foreground">The Challenge</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-5 sm:mb-6 md:mb-8 text-charcoal">
              Your operations are drowning in manual work
            </h2>
          </div>
          
          <div className="prose prose-xl max-w-none text-charcoal/80 leading-relaxed space-y-6">
            <p>
              Mid-market companies face a critical operational paradox: as they grow, manual processes that once worked become crushing bottlenecks. Teams spend hours on repetitive tasks—data entry, document processing, report generation, approval workflows—that drain productivity and delay decision-making.
            </p>
            <p>
              The cost is staggering. Every manual handoff introduces errors. Every approval queue creates delays. Every spreadsheet-driven process limits scalability. Your best talent wastes time on routine work instead of strategic initiatives, and operational friction prevents you from capturing market opportunities at speed.
            </p>
            <p>
              At NEXDYNE, we engineer intelligent automation systems that eliminate operational drag. By combining process mining, robotic automation, and AI-driven orchestration, we transform manual operations into autonomous workflows that run faster, more accurately, and at scale.
            </p>
          </div>
        </div>
      </section>

      {/* How We Help Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 md:py-20 lg:py-24 bg-subtle">
        <div className="container">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <p className="text-sm font-semibold tracking-widest uppercase mb-4 text-muted-foreground">Our Approach</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal">
              How we eliminate operational bottlenecks
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 max-w-6xl mx-auto">
            {/* AI Capability */}
            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-sm border border-border">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-cyan-100 p-3 rounded-lg flex-shrink-0">
                  <Cpu className="h-6 w-6 text-cyan-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Artificial Intelligence</h3>
                  <p className="text-charcoal/80 leading-relaxed">
                    Deploy intelligent automation that learns from your processes—document extraction, decision routing, exception handling—turning unstructured work into structured, repeatable operations.
                  </p>
                </div>
              </div>
            </div>

            {/* Technology Capability */}
            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-sm border border-border">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                  <Workflow className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Technology</h3>
                  <p className="text-charcoal/80 leading-relaxed">
                    Build modern automation infrastructure using RPA, iPaaS, and low-code platforms that integrate seamlessly with your existing systems—no rip-and-replace required.
                  </p>
                </div>
              </div>
            </div>

            {/* Operations Capability */}
            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-sm border border-border">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-purple-100 p-3 rounded-lg flex-shrink-0">
                  <BarChart3 className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Operations</h3>
                  <p className="text-charcoal/80 leading-relaxed">
                    Redesign workflows using process mining and lean principles to eliminate waste, reduce cycle times, and create operational resilience that scales with your business.
                  </p>
                </div>
              </div>
            </div>

            {/* Strategy Capability */}
            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-sm border border-border">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-orange-100 p-3 rounded-lg flex-shrink-0">
                  <Target className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Strategy & Corporate Finance</h3>
                  <p className="text-charcoal/80 leading-relaxed">
                    Quantify automation ROI and prioritize initiatives based on financial impact—ensuring every optimization delivers measurable cost savings and capacity gains.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
        <div className="container">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <p className="text-sm font-semibold tracking-widest uppercase mb-4 text-muted-foreground">Impact</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal">
              Measurable outcomes that accelerate growth
            </h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 max-w-7xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-cyan-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">60-80% faster</h3>
              <p className="text-charcoal/80 leading-relaxed">
                Process cycle times reduced through intelligent automation and workflow optimization
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">40-60% cost reduction</h3>
              <p className="text-charcoal/80 leading-relaxed">
                Operational costs eliminated by automating manual tasks and reducing error rates
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">99.5% accuracy</h3>
              <p className="text-charcoal/80 leading-relaxed">
                Error rates minimized through automated validation and intelligent exception handling
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Highlight */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container">
          <div className="max-w-4xl mx-auto bg-white rounded-xl sm:rounded-2xl shadow-xl overflow-hidden">
            <div className="p-6 sm:p-6 sm:p-8 md:p-12">
              <p className="text-sm font-semibold tracking-widest uppercase mb-4 text-cyan-600">Case Study</p>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-charcoal">
                Regional logistics company cuts shipment processing time by 75%
              </h2>
              <p className="text-xl text-charcoal/80 leading-relaxed mb-5 sm:mb-6 md:mb-8">
                A 180-employee logistics provider automated their entire shipment intake and routing workflow, reducing manual data entry from 45 minutes to 8 minutes per shipment while eliminating 95% of routing errors.
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:p-6 md:p-8 mb-5 sm:mb-6 md:mb-8">
                <div>
                  <p className="text-4xl font-bold text-cyan-600 mb-2">75%</p>
                  <p className="text-muted-foreground">Faster processing</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-cyan-600 mb-2">$420K</p>
                  <p className="text-muted-foreground">Annual savings</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-cyan-600 mb-2">95%</p>
                  <p className="text-muted-foreground">Error reduction</p>
                </div>
              </div>
              <Button variant="outline" className="group">
                Read full case study
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 md:py-20 lg:py-24 bg-slate-900 text-white">
        <div className="container text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to eliminate operational bottlenecks?
          </h2>
          <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
            Let's discuss how intelligent automation can transform your operations and unlock growth capacity.
          </p>
          <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-charcoal font-bold">
            Schedule a consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
