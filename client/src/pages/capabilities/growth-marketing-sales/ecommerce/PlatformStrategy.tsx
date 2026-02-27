import React from 'react';
import { 
  Layers, 
  ArrowRight, 
  CheckCircle2, 
  Server, 
  Database, 
  Code2,
  Cpu,
  Workflow
} from 'lucide-react';
import { Link } from 'wouter';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import { RelatedContent } from "@/components/RelatedContent";
import { dataRelatedItems } from "@/data/related-content";

export function PlatformStrategy() {
  return (
    <div className="min-h-screen bg-white font-sans text-charcoal">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-base">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-base/90 via-base/80 to-base" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <Breadcrumbs className="mb-5 sm:mb-6 md:mb-8" />
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-2 sm:mb-3 md:mb-4 leading-tight eb-garamond">
              Platform Strategy & <br/>
              <span className="text-secondary">Migration Engineering</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground/50 mb-10 max-w-2xl leading-relaxed">
              Future-proof your commerce infrastructure. We architect scalable, composable platforms that decouple frontend experiences from backend logic, enabling unlimited agility.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-24">
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-charcoal mb-6 eb-garamond">
                De-risking the Move to Modern Commerce
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Legacy monoliths stifle innovation. The future belongs to composable commerce—modular, API-first architectures that allow you to swap components without rebuilding the entire system.
              </p>
              <p className="text-lg text-muted-foreground mb-5 sm:mb-6 md:mb-8 leading-relaxed">
                Our migration engineering team specializes in complex re-platforming initiatives. We map data dependencies, preserve SEO equity, and implement strangler fig patterns to migrate functionality incrementally, minimizing risk and downtime.
              </p>
              
              <div className="grid grid-cols-1 gap-4">
                {[
                  "Monolith to Microservices Decomposition",
                  "Headless CMS & Commerce Integration",
                  "Data Migration & Integrity Validation",
                  "Cloud-Native Infrastructure Setup"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-secondary" />
                    <span className="text-charcoal/80 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-50 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border border-slate-100">
              <h3 className="text-xl font-bold text-charcoal mb-6">Our Architecture Principles</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="p-3 bg-blue-100 rounded-lg h-fit">
                    <Server className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-charcoal mb-2">API-First Design</h4>
                    <p className="text-muted-foreground text-sm">Ensuring all functionality is exposed via robust APIs for seamless integration with any frontend or third-party service.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="p-3 bg-blue-100 rounded-lg h-fit">
                    <Code2 className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-charcoal mb-2">Cloud-Native Scalability</h4>
                    <p className="text-muted-foreground text-sm">Leveraging serverless functions and auto-scaling infrastructure to handle peak traffic without over-provisioning.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="p-3 bg-blue-100 rounded-lg h-fit">
                    <Database className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-charcoal mb-2">Data Consistency</h4>
                    <p className="text-muted-foreground text-sm">Implementing eventual consistency models and distributed transaction patterns to ensure data integrity across microservices.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Process Steps */}
          <div className="mb-24">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-charcoal mb-6 sm:mb-8 md:mb-12 text-center eb-garamond">
              The Migration Roadmap
            </h2>
            <div className="grid md:grid-cols-4 gap-4 sm:p-6 md:p-8">
              {[
                {
                  icon: <Workflow className="w-8 h-8 text-blue-600" />,
                  title: "Discovery & Audit",
                  desc: "Deep dive into current stack, data models, and business logic to map dependencies."
                },
                {
                  icon: <Layers className="w-8 h-8 text-blue-600" />,
                  title: "Architecture Design",
                  desc: "Blueprinting the target state with selected best-of-breed components (MACH alliance)."
                },
                {
                  icon: <Cpu className="w-8 h-8 text-blue-600" />,
                  title: "Incremental Build",
                  desc: "Developing core services and frontend layers in parallel sprints."
                },
                {
                  icon: <CheckCircle2 className="w-8 h-8 text-blue-600" />,
                  title: "Cutover & Scale",
                  desc: "Controlled rollout with A/B testing, monitoring, and performance tuning."
                }
              ].map((step, index) => (
                <div key={index} className="bg-slate-50 p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl border border-slate-100 hover:shadow-md transition-shadow">
                  <div className="mb-4 p-3 bg-white rounded-lg w-fit shadow-sm">
                    {step.icon}
                  </div>
                  <h3 className="text-lg font-bold text-charcoal mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 eb-garamond">
            Is Your Platform Holding You Back?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground/50 mb-10 max-w-2xl mx-auto">
            Don't let technical debt slow down your growth. Let's design a migration path that unlocks agility.
          </p>
          <Link href="/contact">
            <button className="px-8 py-4 bg-secondary text-base font-bold rounded-full hover:bg-white transition-all duration-300">
              Start Your Migration
            </button>
          </Link>
        </div>
      </section>

      <RelatedContent items={dataRelatedItems} />
      <Footer />
    </div>
  );
}
