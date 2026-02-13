import React from "react";
import { ArrowRight, Heart, Gift, Award, Coins } from "lucide-react";
import { Link } from "wouter";
import GrowthBreadcrumbs from "@/components/GrowthBreadcrumbs";
import Navbar from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { RelatedContent } from "@/components/RelatedContent";
import { strategyRelatedItems } from "@/data/related-content";

export default function LoyaltyProgram() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative bg-[#0a0e3d] pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e3d] via-transparent to-[#0a0e3d]"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <GrowthBreadcrumbs />
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00d4ff]/10 border border-[#00d4ff]/20 text-[#00d4ff] text-sm font-medium mb-6">
              <Heart className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>Behavioral Economics</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-3 leading-tight eb-garamond">
              Loyalty Program <span className="text-[#00d4ff]">Design</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed">
              We design loyalty ecosystems that drive true behavioral change. From tiered rewards to gamified engagement, we build programs that increase LTV and brand advocacy.
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
                Beyond "Points for Purchases"
              </h2>
              <div className="prose prose-lg text-slate-600">
                <p>
                  Modern loyalty isn't just about discounts; it's about <strong>emotional connection</strong> and <strong>habit formation</strong>. We design programs that reward the behaviors that matter most to your business model—whether that's referrals, content creation, or feature adoption.
                </p>
                <p>
                  We model the <strong>unit economics</strong> of every reward tier to ensure your program is profitable. We calculate the "breakage" rates, redemption costs, and incremental lift to guarantee that every dollar spent on loyalty generates more than a dollar in value.
                </p>
                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Strategic Pillars</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 bg-purple-50 p-1 rounded">
                      <Coins className="w-3 h-3 sm:w-4 sm:h-4 text-purple-600" />
                    </div>
                    <div>
                      <strong className="text-slate-900">Economic Modeling</strong>
                      <p className="text-sm">Rigorous financial analysis to ensure program sustainability and ROI.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 bg-purple-50 p-1 rounded">
                      <Award className="w-3 h-3 sm:w-4 sm:h-4 text-purple-600" />
                    </div>
                    <div>
                      <strong className="text-slate-900">Tiered Architecture</strong>
                      <p className="text-sm">Designing status levels that create aspirational momentum and lock-in.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 bg-purple-50 p-1 rounded">
                      <Gift className="w-3 h-3 sm:w-4 sm:h-4 text-purple-600" />
                    </div>
                    <div>
                      <strong className="text-slate-900">Experiential Rewards</strong>
                      <p className="text-sm">Moving beyond cash-back to offer exclusive access, community recognition, and personalized experiences.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-slate-50 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-6">
                The Loyalty Loop
              </h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-white rounded-lg sm:rounded-xl border border-slate-100 shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold">1</div>
                  <div>
                    <h4 className="font-bold text-slate-900">Trigger</h4>
                    <p className="text-sm text-slate-600">User completes a high-value action (e.g., completes a profile).</p>
                  </div>
                </div>
                <div className="flex justify-center">
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-slate-300 rotate-90" />
                </div>
                <div className="flex items-center gap-4 p-4 bg-white rounded-lg sm:rounded-xl border border-slate-100 shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold">2</div>
                  <div>
                    <h4 className="font-bold text-slate-900">Reward</h4>
                    <p className="text-sm text-slate-600">Immediate gratification (points, badge, or unlock).</p>
                  </div>
                </div>
                <div className="flex justify-center">
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-slate-300 rotate-90" />
                </div>
                <div className="flex items-center gap-4 p-4 bg-white rounded-lg sm:rounded-xl border border-slate-100 shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold">3</div>
                  <div>
                    <h4 className="font-bold text-slate-900">Investment</h4>
                    <p className="text-sm text-slate-600">User "spends" points or status, deepening their commitment.</p>
                  </div>
                </div>
                <div className="flex justify-center">
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-slate-300 rotate-90" />
                </div>
                <div className="flex items-center gap-4 p-4 bg-white rounded-lg sm:rounded-xl border border-slate-100 shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold">4</div>
                  <div>
                    <h4 className="font-bold text-slate-900">Advocacy</h4>
                    <p className="text-sm text-slate-600">User invites others to join the ecosystem.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RelatedContent items={strategyRelatedItems} />
      <Footer />
    </div>
  );
}
