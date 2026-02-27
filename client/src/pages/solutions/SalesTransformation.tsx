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
    <div className="min-h-screen bg-base text-white font-sans selection:bg-secondary selection:text-base">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-base via-base/80 to-base z-10" />
          <img 
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2632&auto=format&fit=crop" 
            alt="Sales Transformation" 
            className="w-full h-full object-cover opacity-50"
          />
        </div>

        <div className="container mx-auto px-6 relative z-20">
          <div className="max-w-4xl">
            <div className="inline-flex items-center space-x-2 bg-secondary/10 backdrop-blur-md border border-secondary/20 rounded-full px-4 py-1.5 mb-8">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse shadow-[0_0_10px_rgba(0,212,255,0.5)]" />
              <span className="text-sm font-medium text-secondary tracking-widest uppercase">Commercial Excellence</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-4 leading-tight eb-garamond">
              Sales <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary-hover">
                Transformation
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground/50 max-w-2xl leading-relaxed font-light">
              Empower your sales force to win. We redesign sales organizations, optimize processes, and implement the tools needed to accelerate revenue.
            </p>
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-24 bg-base">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                The New Science of Selling
              </h2>
              <p className="text-lg text-muted-foreground/70 leading-relaxed mb-6">
                B2B buying behavior has changed. Buyers are more informed, decision-making units are larger, and sales cycles are more complex. Traditional relationship-based selling is no longer enough.
              </p>
              <p className="text-lg text-muted-foreground/70 leading-relaxed">
                NexDyne helps you transition to a modern, data-driven sales model. We align your sales process with the buyer's journey, equipping your team with the insights and agility to close deals faster and more predictably.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6">
              <div className="flex items-center gap-6 p-6 bg-base border border-white/10 rounded-xl">
                <div className="p-4 bg-secondary/10 rounded-full">
                  <Zap className="w-8 h-8 text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Velocity</h3>
                  <p className="text-muted-foreground/70">Shorten sales cycles with streamlined workflows.</p>
                </div>
              </div>
              <div className="flex items-center gap-6 p-6 bg-base border border-white/10 rounded-xl">
                <div className="p-4 bg-secondary/10 rounded-full">
                  <Award className="w-8 h-8 text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Productivity</h3>
                  <p className="text-muted-foreground/70">Maximize rep time spent on high-value selling activities.</p>
                </div>
              </div>
              <div className="flex items-center gap-6 p-6 bg-base border border-white/10 rounded-xl">
                <div className="p-4 bg-secondary/10 rounded-full">
                  <TrendingUp className="w-8 h-8 text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Predictability</h3>
                  <p className="text-muted-foreground/70">Improve forecast accuracy with data-backed pipeline management.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-24 bg-base border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Sales Excellence Framework</h2>
            <div className="w-20 h-1 bg-secondary" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group p-8 bg-base border border-white/10 rounded-2xl hover:bg-white transition-all duration-300">
              <h3 className="text-2xl font-bold text-white group-hover:text-charcoal mb-4 transition-colors">
                Go-to-Market Architecture
              </h3>
              <p className="text-muted-foreground/70 group-hover:text-muted-foreground mb-6 transition-colors">
                Design the optimal coverage model. We help you define territories, roles, and channel strategies to maximize market penetration.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-muted-foreground/70 group-hover:text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-secondary" /> Territory Planning
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground/70 group-hover:text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-secondary" /> Channel Partner Strategy
                </li>
              </ul>
            </div>

            <div className="group p-8 bg-base border border-white/10 rounded-2xl hover:bg-white transition-all duration-300">
              <h3 className="text-2xl font-bold text-white group-hover:text-charcoal mb-4 transition-colors">
                Sales Operations
              </h3>
              <p className="text-muted-foreground/70 group-hover:text-muted-foreground mb-6 transition-colors">
                Build the engine room of your sales org. We optimize tech stacks, compensation plans, and reporting structures for peak performance.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-muted-foreground/70 group-hover:text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-secondary" /> Incentive Compensation Design
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground/70 group-hover:text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-secondary" /> Pipeline Management
                </li>
              </ul>
            </div>

            <div className="group p-8 bg-base border border-white/10 rounded-2xl hover:bg-white transition-all duration-300">
              <h3 className="text-2xl font-bold text-white group-hover:text-charcoal mb-4 transition-colors">
                Talent & Enablement
              </h3>
              <p className="text-muted-foreground/70 group-hover:text-muted-foreground mb-6 transition-colors">
                Equip your team to win. We develop training programs, playbooks, and coaching frameworks that elevate the capability of every rep.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-muted-foreground/70 group-hover:text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-secondary" /> Sales Playbooks
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground/70 group-hover:text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-secondary" /> Skills Assessment & Training
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-primary text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Close more deals.
          </h2>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
            Transform your sales organization into a high-performance revenue engine.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button className="bg-white text-primary hover:bg-subtle rounded-full px-10 py-6 text-lg font-bold shadow-xl transition-all hover:scale-105">
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
