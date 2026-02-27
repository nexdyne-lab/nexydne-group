import React from 'react';
import { Link } from 'wouter';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { ArrowRight, Fingerprint, Compass, Heart, MessageSquare } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { RelatedContent } from "@/components/RelatedContent";
import { strategyRelatedItems } from "@/data/related-content";

export default function BrandStrategy() {
  return (
    <div className="min-h-screen bg-white text-charcoal font-sans selection:bg-blue-100">
      <Navigation />

      {/* Hero Section */}
      <header className="pt-16 sm:pt-20 pb-16 border-b border-slate-100 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="text-sm font-medium text-muted-foreground mb-6 uppercase tracking-wider">
              <Link href="/capabilities/growth-marketing-sales" className="hover:text-blue-900 transition-colors">
                Growth, Marketing & Sales
              </Link>
              <span className="mx-2">/</span>
              <Link href="/capabilities/growth-marketing-sales/digital-marketing" className="hover:text-blue-900 transition-colors">
                Digital Marketing
              </Link>
              <span className="mx-2">/</span>
              <span className="text-blue-900">Brand Strategy & Positioning</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-charcoal mb-3 leading-[1.1] eb-garamond">
              Brand Strategy & Positioning
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-charcoal leading-relaxed max-w-3xl font-light font-serif">
              Build a brand that resonates. We help you define your purpose, differentiate your offering, and create lasting emotional connections with your audience.
            </p>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16">
          
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-12">
            
            <section className="prose prose-lg prose-slate max-w-none">
              <p className="text-lg leading-relaxed text-muted-foreground">
                In a digital-first world, your brand is more than a logo or a tagline—it's the sum of every interaction a customer has with your business. We help clients build brands that stand for something meaningful and stand out in a crowded marketplace.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground mt-6">
                Our approach blends creative intuition with rigorous analysis. We dive deep into market dynamics, customer psychology, and competitive landscapes to uncover the unique value only you can provide. From there, we craft compelling narratives and visual identities that drive loyalty and advocacy.
              </p>
            </section>

            {/* Key Focus Areas */}
            <section>
              <h2 className="text-2xl font-bold text-charcoal mb-5 sm:mb-6 md:mb-8 eb-garamond">Building Iconic Brands</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:p-6 md:p-8">
                <div className="bg-white p-4 sm:p-5 md:p-6 rounded-sm border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <Compass className="w-8 h-8 text-blue-900 mb-4" />
                  <h3 className="text-lg font-bold text-charcoal mb-3">Brand Purpose & Vision</h3>
                  <p className="text-muted-foreground">
                    Defining the "why" behind your business to align your organization and inspire your customers with a clear, authentic mission.
                  </p>
                </div>
                <div className="bg-white p-4 sm:p-5 md:p-6 rounded-sm border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <Fingerprint className="w-8 h-8 text-blue-900 mb-4" />
                  <h3 className="text-lg font-bold text-charcoal mb-3">Identity & Design</h3>
                  <p className="text-muted-foreground">
                    Creating distinctive visual systems and brand guidelines that ensure consistency and recognition across all digital and physical touchpoints.
                  </p>
                </div>
                <div className="bg-white p-4 sm:p-5 md:p-6 rounded-sm border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <MessageSquare className="w-8 h-8 text-blue-900 mb-4" />
                  <h3 className="text-lg font-bold text-charcoal mb-3">Messaging & Voice</h3>
                  <p className="text-muted-foreground">
                    Crafting a unique tone of voice and key messaging frameworks that communicate your value proposition clearly and persuasively.
                  </p>
                </div>
                <div className="bg-white p-4 sm:p-5 md:p-6 rounded-sm border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <Heart className="w-8 h-8 text-blue-900 mb-4" />
                  <h3 className="text-lg font-bold text-charcoal mb-3">Brand Experience</h3>
                  <p className="text-muted-foreground">
                    Mapping the customer journey to ensure your brand promise is delivered consistently at every moment of truth.
                  </p>
                </div>
              </div>
            </section>

            <Separator className="bg-slate-200" />

            {/* Impact Section */}
            <section>
              <h2 className="text-2xl font-bold text-charcoal mb-6 eb-garamond">Why Brand Matters</h2>
              <div className="bg-slate-50 p-4 sm:p-6 md:p-8 rounded-sm">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:p-6 md:p-8 text-center">
                  <div>
                    <div className="text-4xl font-bold text-blue-900 mb-2">3x</div>
                    <div className="text-sm text-muted-foreground uppercase tracking-wide">Higher Shareholder Returns</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-blue-900 mb-2">50%</div>
                    <div className="text-sm text-muted-foreground uppercase tracking-wide">More Customer Loyalty</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-blue-900 mb-2">20%</div>
                    <div className="text-sm text-muted-foreground uppercase tracking-wide">Price Premium Potential</div>
                  </div>
                </div>
              </div>
            </section>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-slate-50 p-4 sm:p-6 md:p-8 border-t-4 border-blue-900">
              <h3 className="text-lg font-bold text-charcoal mb-4">Related Capabilities</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/capabilities/growth-marketing-sales/digital-marketing/performance-marketing" className="text-muted-foreground hover:text-blue-900 hover:underline flex items-center">
                    <ArrowRight className="w-3 h-3 mr-2 text-blue-500" />
                    Performance Marketing
                  </Link>
                </li>
                <li>
                  <Link href="/capabilities/growth-marketing-sales/digital-marketing/analytics-attribution" className="text-muted-foreground hover:text-blue-900 hover:underline flex items-center">
                    <ArrowRight className="w-3 h-3 mr-2 text-blue-500" />
                    Analytics & Attribution
                  </Link>
                </li>
                <li>
                  <Link href="/capabilities/strategy-finance" className="text-muted-foreground hover:text-blue-900 hover:underline flex items-center">
                    <ArrowRight className="w-3 h-3 mr-2 text-blue-500" />
                    Strategy & Corporate Finance
                  </Link>
                </li>
              </ul>
            </div>

            <div className="bg-blue-900 text-white p-4 sm:p-6 md:p-8 rounded-sm">
              <h3 className="text-xl font-serif font-bold mb-4">Define your future</h3>
              <p className="text-blue-100 mb-6">
                Let's build a brand that drives your business forward.
              </p>
              <Link href="/contact">
                <Button className="w-full bg-white text-blue-900 hover:bg-blue-50">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>

        </div>
      </main>

      <RelatedContent items={strategyRelatedItems} />
      <Footer />
    </div>
  );
}
