import React from 'react';
import { Link } from 'wouter';
import { ArrowLeft, CheckCircle2, Database, Users, ShieldCheck, Zap } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { RelatedContent } from "@/components/RelatedContent";
import { dataRelatedItems } from "@/data/related-content";

export default function CRMImplementation() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-[#0a0e3d] text-white pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20">
          <div className="absolute top-20 right-20 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        </div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="mb-5 sm:mb-6 md:mb-8">
            <Link href="/capabilities/growth-marketing-sales/marketing-operations" className="inline-flex items-center text-blue-300 hover:text-white transition-colors mb-6">
              <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
              Back to Marketing Operations
            </Link>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 leading-tight eb-garamond">
              CRM Architecture & Revenue Engineering
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-3xl font-light leading-relaxed">
              We architect CRM ecosystems that serve as the central nervous system of your revenue operations, driving velocity, precision, and scalable growth.
            </p>
          </div>
        </div>
      </section>

      {/* The Strategy Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="prose prose-lg max-w-none text-slate-600">
            <h2 className="text-3xl font-bold text-[#0a0e3d] mb-6 eb-garamond">
              Engineering the Perfect Sales Engine
            </h2>
            <p className="mb-6">
              A high-performance CRM is more than a database; it is a strategic asset that accelerates revenue. We approach CRM implementation with an engineering mindset, designing systems that mirror your most successful sales motions and automate the path to closure.
            </p>
            <p className="mb-5 sm:mb-6 md:mb-8">
              At NexDyne, we focus on <strong>Revenue Engineering</strong>. We map your ideal customer journey, define precise data models, and configure your technology stack to support high-velocity sales. The result is a frictionless environment where data flows seamlessly, insights are instant, and sales teams are empowered to perform at their peak.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 sm:p-6 md:p-8 mt-12">
            <div className="bg-slate-50 p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl border border-slate-100">
              <h3 className="text-xl font-bold text-[#0a0e3d] mb-4 flex items-center">
                <Users className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-blue-600" />
                Adoption by Design
              </h3>
              <p className="text-slate-600">
                We build interfaces that sales professionals love. By prioritizing user experience and reducing administrative friction, we ensure high adoption rates and consistent data entry.
              </p>
            </div>
            <div className="bg-slate-50 p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl border border-slate-100">
              <h3 className="text-xl font-bold text-[#0a0e3d] mb-4 flex items-center">
                <Database className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-blue-600" />
                Data Excellence
              </h3>
              <p className="text-slate-600">
                Reliable data is the foundation of good decision-making. We implement robust validation, enrichment, and governance protocols to ensure your CRM remains a pristine source of truth.
              </p>
            </div>
            <div className="bg-slate-50 p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl border border-slate-100">
              <h3 className="text-xl font-bold text-[#0a0e3d] mb-4 flex items-center">
                <Zap className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-blue-600" />
                Intelligent Automation
              </h3>
              <p className="text-slate-600">
                We automate routine workflows—from lead routing to contract generation—allowing your team to focus entirely on high-value interactions and closing deals.
              </p>
            </div>
            <div className="bg-slate-50 p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl border border-slate-100">
              <h3 className="text-xl font-bold text-[#0a0e3d] mb-4 flex items-center">
                <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-blue-600" />
                Enterprise Governance
              </h3>
              <p className="text-slate-600">
                We design secure, scalable permission structures that protect sensitive data while ensuring the right stakeholders have immediate access to critical information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-3xl font-bold text-[#0a0e3d] mb-4 eb-garamond">
              Implementation Methodology
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A structured, agile approach to deploying world-class revenue infrastructure.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-4 sm:p-5 md:p-6">
            {[
              {
                step: "01",
                title: "Architecture & Design",
                desc: "We blueprint your revenue model, defining the optimal data structures and process flows."
              },
              {
                step: "02",
                title: "Precision Configuration",
                desc: "We build custom pipelines, automation logic, and reporting views tailored to your strategy."
              },
              {
                step: "03",
                title: "Seamless Integration",
                desc: "We connect your CRM with marketing, finance, and support systems for a unified data ecosystem."
              },
              {
                step: "04",
                title: "Enablement & Scale",
                desc: "We provide comprehensive training and ongoing optimization to ensure long-term success."
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-4 sm:p-5 md:p-6 rounded-lg shadow-sm border border-slate-100 relative overflow-hidden">
                <div className="text-6xl font-bold text-slate-100 absolute -top-4 -right-4 select-none">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-[#0a0e3d] mb-3 relative z-10">{item.title}</h3>
                <p className="text-slate-600 text-sm relative z-10">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl font-bold text-[#0a0e3d] mb-6 eb-garamond">
            Architect Your Growth Engine
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 mb-5 sm:mb-6 md:mb-8">
            Partner with us to build a CRM foundation that scales with your ambition.
          </p>
          <Link href="/contact">
            <button className="px-8 py-4 bg-blue-600 text-white rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors shadow-lg">
              Start Your Implementation
            </button>
          </Link>
        </div>
      </section>

      <RelatedContent items={dataRelatedItems} />
      <Footer />
    </div>
  );
}
