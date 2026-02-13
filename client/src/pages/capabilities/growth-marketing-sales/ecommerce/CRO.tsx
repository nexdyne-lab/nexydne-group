import React from 'react';
import { 
  BarChart3, 
  ArrowRight, 
  CheckCircle2, 
  MousePointerClick, 
  Zap, 
  Users,
  Search,
  Smartphone
} from 'lucide-react';
import { Link } from 'wouter';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import { RelatedContent } from "@/components/RelatedContent";
import { dataRelatedItems } from "@/data/related-content";

export function CRO() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-[#0a0e3d]">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e3d]/90 via-[#0a0e3d]/80 to-[#0a0e3d]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <Breadcrumbs className="mb-5 sm:mb-6 md:mb-8" />
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-2 sm:mb-3 md:mb-4 leading-tight eb-garamond">
              Conversion Rate <br/>
              <span className="text-[#00d4ff]">Optimization (CRO)</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
              Turn more visitors into customers. We use data science, behavioral psychology, and rigorous A/B testing to systematically improve your e-commerce performance.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-24">
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-6 eb-garamond">
                The Science of Selling Online
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Optimization isn't guesswork; it's an engineering discipline. We analyze every step of your conversion funnel—from landing page to checkout—to identify friction points and revenue leaks.
              </p>
              <p className="text-lg text-slate-600 mb-5 sm:mb-6 md:mb-8 leading-relaxed">
                Our approach combines quantitative data (analytics, heatmaps) with qualitative insights (user testing, surveys) to build a hypothesis-driven testing roadmap. We don't just tweak button colors; we re-engineer user flows for maximum clarity and motivation.
              </p>
              
              <div className="grid grid-cols-1 gap-4">
                {[
                  "Full-Funnel Audit & Heuristic Analysis",
                  "High-Velocity A/B & Multivariate Testing",
                  "Checkout Flow & Form Optimization",
                  "Personalization Strategy & Implementation"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#00d4ff]" />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-50 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Optimization Levers</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="p-3 bg-blue-100 rounded-lg h-fit">
                    <Zap className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">Site Speed & Performance</h4>
                    <p className="text-slate-600 text-sm">Optimizing Core Web Vitals to reduce bounce rates. Every 100ms delay costs 1% in revenue.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="p-3 bg-blue-100 rounded-lg h-fit">
                    <MousePointerClick className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">UX & Usability</h4>
                    <p className="text-slate-600 text-sm">Simplifying navigation, improving search relevance, and clarifying value propositions.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="p-3 bg-blue-100 rounded-lg h-fit">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">Trust & Social Proof</h4>
                    <p className="text-slate-600 text-sm">Strategically placing reviews, trust badges, and urgency signals to build confidence.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Methodology */}
          <div className="mb-24">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-6 sm:mb-8 md:mb-12 text-center eb-garamond">
              Our Optimization Cycle
            </h2>
            <div className="grid md:grid-cols-4 gap-4 sm:p-6 md:p-8">
              {[
                {
                  icon: <Search className="w-8 h-8 text-blue-600" />,
                  title: "Analyze",
                  desc: "Gather data from GA4, heatmaps, and session recordings to find drop-off points."
                },
                {
                  icon: <BarChart3 className="w-8 h-8 text-blue-600" />,
                  title: "Hypothesize",
                  desc: "Formulate data-backed theories on what changes will drive lift."
                },
                {
                  icon: <Smartphone className="w-8 h-8 text-blue-600" />,
                  title: "Experiment",
                  desc: "Design and launch controlled A/B tests to validate hypotheses."
                },
                {
                  icon: <CheckCircle2 className="w-8 h-8 text-blue-600" />,
                  title: "Iterate",
                  desc: "Implement winners, learn from losers, and restart the cycle."
                }
              ].map((step, index) => (
                <div key={index} className="bg-slate-50 p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl border border-slate-100 hover:shadow-md transition-shadow">
                  <div className="mb-4 p-3 bg-white rounded-lg w-fit shadow-sm">
                    {step.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">{step.title}</h3>
                  <p className="text-slate-600 text-sm">{step.desc}</p>
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
            Stop Leaving Money on the Table
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Get a complimentary CRO audit of your key conversion paths.
          </p>
          <Link href="/contact">
            <button className="px-8 py-4 bg-[#00d4ff] text-[#0a0e3d] font-bold rounded-full hover:bg-white transition-all duration-300">
              Request CRO Audit
            </button>
          </Link>
        </div>
      </section>

      <RelatedContent items={dataRelatedItems} />
      <Footer />
    </div>
  );
}
