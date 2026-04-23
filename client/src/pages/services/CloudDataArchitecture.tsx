import { Link } from "wouter";
import { ArrowLeft, ArrowRight } from "lucide-react";
import BainHoverCard from "@/components/BainHoverCard";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function CloudDataArchitecture() {
  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Cloud & Data Architecture Modernization | NexDyne Technologies"
        description="Build the future-proof foundation your AI initiatives require. We modernize legacy infrastructure, implement cloud-native solutions, and establish data architectures that enable intelligent operations."
      />
      <Navigation />
      
      {/* Hero Section - Clean minimal design */}
      <section className="relative min-h-[85vh] flex items-center pt-20 overflow-hidden bg-charcoal">
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-['EB Garamond',serif] font-bold tracking-tight text-white leading-[1.05] mb-4">
                Cloud & Data Architecture
              </h1>
              
              <p className="text-xl text-white leading-relaxed max-w-xl">
                Build the future-proof foundation your AI initiatives require. We modernize legacy infrastructure, implement cloud-native solutions, and establish data architectures that enable intelligent operations.
              </p>
            </div>

            <div className="hidden lg:flex items-center justify-center">
              <img 
                src="/images/cloud-data-abstract.jpg" 
                alt="Cloud & Data Architecture Visualization" 
                className="max-w-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-charcoal mb-2">40%</p>
              <p className="text-muted-foreground">Average infrastructure cost reduction</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-charcoal mb-2">99.9%</p>
              <p className="text-muted-foreground">System uptime achieved</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-charcoal mb-2">3x</p>
              <p className="text-muted-foreground">Faster data processing</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-charcoal mb-2">12</p>
              <p className="text-muted-foreground">Weeks average implementation</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Challenge Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <p className="text-primary text-sm font-medium tracking-widest uppercase mb-4">
              The Challenge
            </p>
            <h2 className="text-3xl md:text-4xl font-['EB Garamond',serif] font-bold text-charcoal mb-8">
              Legacy systems holding back your AI ambitions
            </h2>
            <div className="prose prose-lg prose-slate max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-6">
                Mid-market organizations face a critical inflection point. The promise of AI-driven transformation 
                is clear, but legacy infrastructure creates invisible barriers. Data sits in silos across 
                disconnected systems. Processing bottlenecks slow decision-making. Security concerns multiply 
                with each new integration.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Many organizations attempt piecemeal modernization—adding cloud services here, upgrading databases 
                there—only to find their technology landscape more fragmented than before. Without a coherent 
                architecture strategy, these investments fail to deliver their promised returns.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The real challenge isn't choosing between cloud providers or selecting the right database. 
                It's designing an architecture that serves your business today while creating the foundation 
                for the intelligent systems you'll need tomorrow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 bg-slate-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <p className="text-primary text-sm font-medium tracking-widest uppercase mb-4">
              Our Approach
            </p>
            <h2 className="text-3xl md:text-4xl font-['EB Garamond',serif] font-bold text-charcoal mb-12">
              Architecture designed for intelligence
            </h2>
            
            <div className="space-y-12">
              <div className="border-l-4 border-blue-600 pl-8">
                <h3 className="text-xl font-bold text-charcoal mb-4">Assessment & Strategy</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We begin with a comprehensive assessment of your current infrastructure, data flows, and 
                  business requirements. Our architects map dependencies, identify bottlenecks, and evaluate 
                  your readiness for AI integration. The result is a prioritized modernization roadmap aligned 
                  with your strategic objectives and budget constraints.
                </p>
              </div>
              
              <div className="border-l-4 border-blue-600 pl-8">
                <h3 className="text-xl font-bold text-charcoal mb-4">Cloud-Native Design</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Leveraging our AWS and Google Cloud partnerships, we design architectures that maximize 
                  the benefits of cloud computing—scalability, resilience, and cost efficiency. Our designs 
                  incorporate modern patterns like microservices, containerization, and serverless computing 
                  where they deliver genuine business value, not just technical novelty.
                </p>
              </div>
              
              <div className="border-l-4 border-blue-600 pl-8">
                <h3 className="text-xl font-bold text-charcoal mb-4">Data Architecture</h3>
                <p className="text-muted-foreground leading-relaxed">
                  AI systems are only as good as the data that feeds them. We establish unified data 
                  architectures that break down silos, ensure data quality, and enable real-time analytics. 
                  Our approach includes data governance frameworks that maintain compliance while enabling 
                  the data accessibility your AI initiatives require.
                </p>
              </div>
              
              <div className="border-l-4 border-blue-600 pl-8">
                <h3 className="text-xl font-bold text-charcoal mb-4">Migration & Implementation</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We execute migrations with minimal business disruption using proven methodologies and 
                  automated tooling. Our phased approach allows you to realize value incrementally while 
                  managing risk. We don't just migrate—we optimize, ensuring your new architecture 
                  delivers immediate performance improvements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <p className="text-primary text-sm font-medium tracking-widest uppercase mb-4">
              Capabilities
            </p>
            <h2 className="text-3xl md:text-4xl font-['EB Garamond',serif] font-bold text-charcoal mb-12">
              What we deliver
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <BainHoverCard
                title="Legacy System Migration"
                description="Systematic migration of on-premise systems to cloud infrastructure with zero data loss and minimal downtime. We handle complex dependencies and ensure business continuity throughout the transition."
                link="/solutions/legacy-modernization"
              />
              <BainHoverCard
                title="Data Lake & Warehouse Design"
                description="Modern data architectures that unify structured and unstructured data sources. We implement data lakes that serve both operational reporting and advanced analytics, including machine learning workloads."
                link="/solutions/data-platform"
              />
              <BainHoverCard
                title="API & Integration Layer"
                description="Robust API architectures that enable seamless integration between systems. We design integration layers that support both internal applications and external partner ecosystems."
                link="/solutions/api-integration"
              />
              <BainHoverCard
                title="Infrastructure as Code"
                description="Automated infrastructure provisioning and management using modern IaC practices. This ensures consistency, enables rapid scaling, and reduces the operational burden on your IT team."
                link="/solutions/devops-automation"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-4">
              Results
            </p>
            <h2 className="text-3xl md:text-4xl font-['EB Garamond',serif] font-bold mb-12">
              What our clients achieve
            </h2>
            
            <div className="space-y-8">
              <div className="border-l-4 border-blue-400 pl-8">
                <p className="text-muted-foreground/50 leading-relaxed">
                  <span className="text-white font-semibold">A regional healthcare network</span> migrated 
                  15 years of patient data to a modern cloud architecture, reducing query times from minutes 
                  to seconds and enabling real-time analytics that improved patient outcomes.
                </p>
              </div>
              
              <div className="border-l-4 border-blue-400 pl-8">
                <p className="text-muted-foreground/50 leading-relaxed">
                  <span className="text-white font-semibold">A financial services firm</span> consolidated 
                  seven disparate data systems into a unified data platform, cutting reporting time by 80% 
                  and enabling the predictive analytics that now drive their lending decisions.
                </p>
              </div>
              
              <div className="border-l-4 border-blue-400 pl-8">
                <p className="text-muted-foreground/50 leading-relaxed">
                  <span className="text-white font-semibold">A manufacturing company</span> modernized their 
                  ERP integration layer, enabling real-time inventory visibility across 12 facilities and 
                  reducing stockouts by 45%.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-['EB Garamond',serif] font-bold text-charcoal mb-8">Related Services</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <BainHoverCard
                title="Cyber Resilience & Data Privacy"
                description="Security-by-Design integrated into every transformation."
                link="/capabilities/ai-technology-consulting/services/cyber-resilience"
              />
              <BainHoverCard
                title="Agentic AI & Generative AI"
                description="Design and deploy autonomous AI systems that redefine operations."
                link="/capabilities/ai-technology-consulting/services/agentic-ai"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-['EB Garamond',serif] font-bold text-charcoal mb-6">
              Ready to modernize your infrastructure?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss how cloud and data architecture modernization can accelerate your AI initiatives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-secondary text-charcoal font-semibold rounded-full hover:bg-secondary transition-colors">
                Schedule a Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link href="/capabilities/ai-technology-consulting" className="inline-flex items-center justify-center px-8 py-4 border border-slate-300 text-charcoal/80 font-semibold rounded-full hover:bg-slate-100 transition-colors">
                Explore AI & Technology
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
