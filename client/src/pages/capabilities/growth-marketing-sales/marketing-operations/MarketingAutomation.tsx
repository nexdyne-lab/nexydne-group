import React from 'react';
import { Link } from 'wouter';
import { ArrowLeft, Mail, Target, GitBranch, MessageSquare } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { RelatedContent } from "@/components/RelatedContent";
import { dataRelatedItems } from "@/data/related-content";

export default function MarketingAutomation() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-base text-white pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        </div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="mb-5 sm:mb-6 md:mb-8">
            <Link href="/capabilities/growth-marketing-sales/marketing-operations" className="inline-flex items-center text-blue-300 hover:text-white transition-colors mb-6">
              <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
              Back to Marketing Operations
            </Link>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 leading-tight eb-garamond">
              Intelligent Marketing Automation
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-3xl font-light leading-relaxed">
              Scale your engagement with precision. We engineer sophisticated automation architectures that deliver the right message at the exact moment of impact, driving revenue around the clock.
            </p>
          </div>
        </div>
      </section>

      {/* The Strategy Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <h2 className="text-3xl font-bold text-base mb-6 eb-garamond">
              Orchestrating the Perfect Customer Journey
            </h2>
            <p className="mb-6">
              True marketing automation transcends simple email sequences. It is about creating a responsive, intelligent ecosystem that adapts to user behavior in real-time. By leveraging advanced logic and data integration, we ensure every interaction advances the customer relationship.
            </p>
            <p className="mb-5 sm:mb-6 md:mb-8">
              We help you move beyond basic campaigns to build complex, behavior-triggered journeys. By seamlessly integrating your automation platform with your CRM and digital touchpoints, we create a closed-loop system that continuously learns, optimizes, and accelerates pipeline velocity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 sm:p-6 md:p-8 mt-12">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <GitBranch className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-base mb-2">Adaptive Nurture Streams</h3>
                <p className="text-muted-foreground">
                  We design multi-branch workflows that dynamically adjust content based on prospect engagement, ensuring relevance and maximizing conversion rates.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <Target className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-base mb-2">Predictive Lead Scoring</h3>
                <p className="text-muted-foreground">
                  Implement advanced scoring models that combine demographic fit with behavioral signals to identify and prioritize your most sales-ready opportunities.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <MessageSquare className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-base mb-2">Conversational Intelligence</h3>
                <p className="text-muted-foreground">
                  Deploy sophisticated chatbots and live chat routing that qualify visitors instantly and connect high-value prospects with the right experts.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-base mb-2">Account-Based Orchestration</h3>
                <p className="text-muted-foreground">
                  Coordinate synchronized campaigns across email, social, and direct channels to penetrate and engage key decision-makers in your target accounts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms We Support */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto max-w-6xl px-4 text-center">
          <h2 className="text-3xl font-bold text-base mb-6 sm:mb-8 md:mb-12 eb-garamond">
            Enterprise-Grade Platform Expertise
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:p-6 md:p-8 items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Placeholder for logos - using text for now */}
            <div className="text-2xl font-bold text-muted-foreground/70 hover:text-destructive">HubSpot</div>
            <div className="text-2xl font-bold text-muted-foreground/70 hover:text-secondary">Marketo</div>
            <div className="text-2xl font-bold text-muted-foreground/70 hover:text-secondary">Salesforce Pardot</div>
            <div className="text-2xl font-bold text-muted-foreground/70 hover:text-charcoal">ActiveCampaign</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl font-bold text-base mb-6 eb-garamond">
            Accelerate Your Revenue Engine
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-5 sm:mb-6 md:mb-8">
            Let's build an automated system that drives consistent, scalable growth.
          </p>
          <Link href="/contact">
            <button className="px-8 py-4 bg-purple-600 text-white rounded-lg font-bold text-lg hover:bg-purple-700 transition-colors shadow-lg">
              Start Automating
            </button>
          </Link>
        </div>
      </section>

      <RelatedContent items={dataRelatedItems} />
      <Footer />
    </div>
  );
}
