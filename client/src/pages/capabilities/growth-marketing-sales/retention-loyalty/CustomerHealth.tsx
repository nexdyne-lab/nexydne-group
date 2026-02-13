import React from "react";
import { ArrowRight, Activity, BarChart3, ShieldCheck, Zap } from "lucide-react";
import { Link } from "wouter";
import GrowthBreadcrumbs from "@/components/GrowthBreadcrumbs";
import Navbar from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { RelatedContent } from "@/components/RelatedContent";
import { dataRelatedItems } from "@/data/related-content";

export default function CustomerHealth() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative bg-[#0a0e3d] pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e3d] via-transparent to-[#0a0e3d]"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <GrowthBreadcrumbs />
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00d4ff]/10 border border-[#00d4ff]/20 text-[#00d4ff] text-sm font-medium mb-6">
              <Activity className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>Customer Success Operations</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-3 leading-tight eb-garamond">
              Customer Health <span className="text-[#00d4ff]">Scoring</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed">
              We operationalize customer success with data. We build composite health scores that give your CS team a prioritized list of who to call, who to save, and who to upsell.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6 eb-garamond">
                The Pulse of Your Customer Base
              </h2>
              <div className="prose prose-lg text-slate-600">
                <p>
                  Most companies rely on lagging indicators like NPS or renewal rates to judge customer health. By then, it's often too late. We build <strong>real-time health models</strong> that aggregate signals from every touchpoint—product usage, support interactions, payment history, and marketing engagement.
                </p>
                <p>
                  We don't just give you a score; we give you a <strong>playbook</strong>. Our systems automatically segment customers into "At Risk," "Healthy," and "Ready for Expansion," triggering specific workflows for your CS and Sales teams to execute.
                </p>
                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">The Health Score Algorithm</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 bg-green-50 p-1 rounded">
                      <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" />
                    </div>
                    <div>
                      <strong className="text-slate-900">Usage Intensity</strong>
                      <p className="text-sm">Frequency, depth, and breadth of feature adoption.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 bg-green-50 p-1 rounded">
                      <ShieldCheck className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" />
                    </div>
                    <div>
                      <strong className="text-slate-900">Support Sentiment</strong>
                      <p className="text-sm">Volume of tickets, resolution time, and sentiment analysis of interactions.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 bg-green-50 p-1 rounded">
                      <BarChart3 className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" />
                    </div>
                    <div>
                      <strong className="text-slate-900">Commercial Health</strong>
                      <p className="text-sm">Payment timeliness, contract utilization, and license growth.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-slate-50 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-6">
                Actionable Intelligence
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-white rounded-lg sm:rounded-xl border border-slate-100 shadow-sm border-l-4 border-l-red-500">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-slate-900">Score: 0-40 (Critical)</h4>
                    <span className="text-xs font-bold text-red-500 bg-red-50 px-2 py-1 rounded-full">CHURN RISK</span>
                  </div>
                  <p className="text-sm text-slate-600 mb-2">
                    <strong>Signals:</strong> Low login rate, unresolved high-priority tickets.
                  </p>
                  <p className="text-sm text-slate-900 font-medium">
                    <strong>Action:</strong> Executive sponsor outreach + Emergency technical review.
                  </p>
                </div>

                <div className="p-4 bg-white rounded-lg sm:rounded-xl border border-slate-100 shadow-sm border-l-4 border-l-yellow-500">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-slate-900">Score: 41-70 (Neutral)</h4>
                    <span className="text-xs font-bold text-yellow-600 bg-yellow-50 px-2 py-1 rounded-full">STAGNANT</span>
                  </div>
                  <p className="text-sm text-slate-600 mb-2">
                    <strong>Signals:</strong> Steady but shallow usage, no new feature adoption.
                  </p>
                  <p className="text-sm text-slate-900 font-medium">
                    <strong>Action:</strong> "Tips & Tricks" email sequence + CSM check-in call.
                  </p>
                </div>

                <div className="p-4 bg-white rounded-lg sm:rounded-xl border border-slate-100 shadow-sm border-l-4 border-l-green-500">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-slate-900">Score: 71-100 (Healthy)</h4>
                    <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full">EXPANSION READY</span>
                  </div>
                  <p className="text-sm text-slate-600 mb-2">
                    <strong>Signals:</strong> Daily power usage, positive NPS, license cap reached.
                  </p>
                  <p className="text-sm text-slate-900 font-medium">
                    <strong>Action:</strong> Sales outreach for Enterprise Plan upgrade.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RelatedContent items={dataRelatedItems} />
      <Footer />
    </div>
  );
}
