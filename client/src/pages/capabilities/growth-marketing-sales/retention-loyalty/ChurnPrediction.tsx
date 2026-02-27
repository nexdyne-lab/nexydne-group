import React from "react";
import { ArrowRight, BarChart3, ShieldCheck, Activity, Users } from "lucide-react";
import { Link } from "wouter";
import GrowthBreadcrumbs from "@/components/GrowthBreadcrumbs";
import Navbar from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { RelatedContent } from "@/components/RelatedContent";
import { dataRelatedItems } from "@/data/related-content";

export default function ChurnPrediction() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative bg-base pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-base via-transparent to-base"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <GrowthBreadcrumbs />
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-sm font-medium mb-6">
              <BarChart3 className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>Predictive Analytics</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-3 leading-tight eb-garamond">
              Churn Prediction & <span className="text-secondary">Prevention</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground/50 max-w-2xl leading-relaxed">
              Stop guessing who's leaving. We build predictive models that identify churn risk factors and trigger automated win-back workflows before it's too late.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
            <div>
              <h2 className="text-3xl font-bold text-charcoal mb-6 eb-garamond">
                The Science of Staying
              </h2>
              <div className="prose prose-lg text-muted-foreground">
                <p>
                  Churn isn't an event; it's a process. By the time a customer cancels, they've likely been disengaged for months. Our approach focuses on identifying the <strong>leading indicators</strong> of churn—the subtle behavioral shifts that signal dissatisfaction long before the "Cancel" button is clicked.
                </p>
                <p>
                  We deploy machine learning models that analyze thousands of data points—from login frequency and feature usage to support ticket sentiment and payment history—to assign a dynamic <strong>Churn Probability Score</strong> to every user.
                </p>
                <h3 className="text-xl font-bold text-charcoal mt-8 mb-4">Our Methodology</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 bg-blue-50 p-1 rounded">
                      <Activity className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" />
                    </div>
                    <div>
                      <strong className="text-charcoal">Behavioral Pattern Recognition</strong>
                      <p className="text-sm">Identifying the specific usage drops that correlate with future cancellation.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 bg-blue-50 p-1 rounded">
                      <ShieldCheck className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" />
                    </div>
                    <div>
                      <strong className="text-charcoal">Automated Intervention</strong>
                      <p className="text-sm">Triggering personalized emails, in-app messages, or CS alerts the moment risk spikes.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 bg-blue-50 p-1 rounded">
                      <Users className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" />
                    </div>
                    <div>
                      <strong className="text-charcoal">Cohort Analysis</strong>
                      <p className="text-sm">Understanding which customer segments have the highest natural retention and why.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-slate-50 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border border-slate-100">
              <h3 className="text-xl font-bold text-charcoal mb-6">
                The Prevention Workflow
              </h3>
              <div className="space-y-6">
                <div className="relative pl-8 border-l-2 border-slate-200 pb-6 last:pb-0">
                  <div className="absolute -left-[9px] top-0 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-blue-600 border-4 border-white shadow-sm"></div>
                  <h4 className="font-bold text-charcoal mb-2">1. Signal Detection</h4>
                  <p className="text-sm text-muted-foreground">
                    Model detects a 40% drop in "Core Feature Usage" for Account Acme Corp.
                  </p>
                </div>
                <div className="relative pl-8 border-l-2 border-slate-200 pb-6 last:pb-0">
                  <div className="absolute -left-[9px] top-0 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-blue-600 border-4 border-white shadow-sm"></div>
                  <h4 className="font-bold text-charcoal mb-2">2. Risk Scoring</h4>
                  <p className="text-sm text-muted-foreground">
                    Churn Probability Score jumps from 12% to 78%. Account flagged as "High Risk".
                  </p>
                </div>
                <div className="relative pl-8 border-l-2 border-slate-200 pb-6 last:pb-0">
                  <div className="absolute -left-[9px] top-0 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-blue-600 border-4 border-white shadow-sm"></div>
                  <h4 className="font-bold text-charcoal mb-2">3. Automated Action</h4>
                  <p className="text-sm text-muted-foreground">
                    System triggers "Re-engagement Sequence B" (educational content + offer) and alerts the dedicated CSM via Slack.
                  </p>
                </div>
                <div className="relative pl-8 border-l-2 border-slate-200 pb-6 last:pb-0">
                  <div className="absolute -left-[9px] top-0 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-secondary/100 border-4 border-white shadow-sm"></div>
                  <h4 className="font-bold text-charcoal mb-2">4. Resolution</h4>
                  <p className="text-sm text-muted-foreground">
                    CSM intervenes, resolves the blocker. Usage rebounds. Risk score drops to 15%.
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
