import React, { useEffect } from "react";
import { useLocation } from "wouter";
import Navbar from "@/components/Navigation";
import Footer from "@/components/Footer";
import { 
  Briefcase, 
  TrendingUp, 
  Users, 
  Award,
  Zap,
  CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { RelatedContent } from "@/components/RelatedContent";
import { dataRelatedItems } from "@/data/related-content";

export default function SalesTransformation() {
  const [location, setLocation] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0e3d] text-white font-sans selection:bg-[#00d4ff] selection:text-[#0a0e3d]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e3d] via-[#0a0e3d]/80 to-[#0a0e3d] z-10" />
          <img 
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2632&auto=format&fit=crop" 
            alt="Sales Transformation" 
            className="w-full h-full object-cover opacity-50"
          />
        </div>

        <div className="container mx-auto px-6 relative z-20">
          <div className="max-w-4xl">
            <div className="inline-flex items-center space-x-2 bg-[#00d4ff]/10 backdrop-blur-md border border-[#00d4ff]/20 rounded-full px-4 py-1.5 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#00d4ff] animate-pulse shadow-[0_0_10px_rgba(0,212,255,0.5)]" />
              <span className="text-sm font-medium text-[#00d4ff] tracking-widest uppercase">Commercial Excellence</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-4 leading-tight eb-garamond">
              Sales <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#0056b3]">
                Transformation
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-2xl leading-relaxed font-light">
              Empower your sales force to win. We redesign sales organizations, optimize processes, and implement the tools needed to accelerate revenue.
            </p>
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-24 bg-[#0a0e3d]">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                The New Science of Selling
              </h2>
              <p className="text-lg text-slate-400 leading-relaxed mb-6">
                B2B buying behavior has changed. Buyers are more informed, decision-making units are larger, and sales cycles are more complex. Traditional relationship-based selling is no longer enough.
              </p>
              <p className="text-lg text-slate-400 leading-relaxed">
                NexDyne helps you transition to a modern, data-driven sales model. We align your sales process with the buyer's journey, equipping your team with the insights and agility to close deals faster and more predictably.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6">
              <div className="flex items-center gap-6 p-6 bg-[#050829] border border-white/10 rounded-xl">
                <div className="p-4 bg-[#00d4ff]/10 rounded-full">
                  <Zap className="w-8 h-8 text-[#00d4ff]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Velocity</h3>
                  <p className="text-slate-400">Shorten sales cycles with streamlined workflows.</p>
                </div>
              </div>
              <div className="flex items-center gap-6 p-6 bg-[#050829] border border-white/10 rounded-xl">
                <div className="p-4 bg-[#00d4ff]/10 rounded-full">
                  <Award className="w-8 h-8 text-[#00d4ff]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Productivity</h3>
                  <p className="text-slate-400">Maximize rep time spent on high-value selling activities.</p>
                </div>
              </div>
              <div className="flex items-center gap-6 p-6 bg-[#050829] border border-white/10 rounded-xl">
                <div className="p-4 bg-[#00d4ff]/10 rounded-full">
                  <TrendingUp className="w-8 h-8 text-[#00d4ff]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Predictability</h3>
                  <p className="text-slate-400">Improve forecast accuracy with data-backed pipeline management.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-24 bg-[#050829] border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Sales Excellence Framework</h2>
            <div className="w-20 h-1 bg-[#00d4ff]" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group p-8 bg-[#0a0e3d] border border-white/10 rounded-2xl hover:bg-white transition-all duration-300">
              <h3 className="text-2xl font-bold text-white group-hover:text-slate-900 mb-4 transition-colors">
                Go-to-Market Architecture
              </h3>
              <p className="text-slate-400 group-hover:text-slate-600 mb-6 transition-colors">
                Design the optimal coverage model. We help you define territories, roles, and channel strategies to maximize market penetration.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-slate-400 group-hover:text-slate-600">
                  <CheckCircle2 className="w-4 h-4 text-[#00d4ff]" /> Territory Planning
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-400 group-hover:text-slate-600">
                  <CheckCircle2 className="w-4 h-4 text-[#00d4ff]" /> Channel Partner Strategy
                </li>
              </ul>
            </div>

            <div className="group p-8 bg-[#0a0e3d] border border-white/10 rounded-2xl hover:bg-white transition-all duration-300">
              <h3 className="text-2xl font-bold text-white group-hover:text-slate-900 mb-4 transition-colors">
                Sales Operations
              </h3>
              <p className="text-slate-400 group-hover:text-slate-600 mb-6 transition-colors">
                Build the engine room of your sales org. We optimize tech stacks, compensation plans, and reporting structures for peak performance.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-slate-400 group-hover:text-slate-600">
                  <CheckCircle2 className="w-4 h-4 text-[#00d4ff]" /> Incentive Compensation Design
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-400 group-hover:text-slate-600">
                  <CheckCircle2 className="w-4 h-4 text-[#00d4ff]" /> Pipeline Management
                </li>
              </ul>
            </div>

            <div className="group p-8 bg-[#0a0e3d] border border-white/10 rounded-2xl hover:bg-white transition-all duration-300">
              <h3 className="text-2xl font-bold text-white group-hover:text-slate-900 mb-4 transition-colors">
                Talent & Enablement
              </h3>
              <p className="text-slate-400 group-hover:text-slate-600 mb-6 transition-colors">
                Equip your team to win. We develop training programs, playbooks, and coaching frameworks that elevate the capability of every rep.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-slate-400 group-hover:text-slate-600">
                  <CheckCircle2 className="w-4 h-4 text-[#00d4ff]" /> Sales Playbooks
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-400 group-hover:text-slate-600">
                  <CheckCircle2 className="w-4 h-4 text-[#00d4ff]" /> Skills Assessment & Training
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-[#2352ff] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Close more deals.
          </h2>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
            Transform your sales organization into a high-performance revenue engine.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button className="bg-white text-[#2352ff] hover:bg-gray-100 rounded-full px-10 py-6 text-lg font-bold shadow-xl transition-all hover:scale-105">
              Contact Sales Practice
            </Button>
          </div>
        </div>
      </section>

      <RelatedContent items={dataRelatedItems} />
      <Footer />
    </div>
  );
}
