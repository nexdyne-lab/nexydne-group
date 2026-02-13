import React, { useEffect } from "react";
import { useLocation } from "wouter";
import Navbar from "@/components/Navigation";
import Footer from "@/components/Footer";
import { 
  Megaphone, 
  BarChart3, 
  MousePointerClick, 
  Users,
  Smartphone,
  CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { RelatedContent } from "@/components/RelatedContent";
import { dataRelatedItems } from "@/data/related-content";

export default function DigitalMarketing() {
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
            src="https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=2670&auto=format&fit=crop" 
            alt="Digital Marketing" 
            className="w-full h-full object-cover opacity-50"
          />
        </div>

        <div className="container mx-auto px-6 relative z-20">
          <div className="max-w-4xl">
            <div className="inline-flex items-center space-x-2 bg-[#00d4ff]/10 backdrop-blur-md border border-[#00d4ff]/20 rounded-full px-4 py-1.5 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#00d4ff] animate-pulse shadow-[0_0_10px_rgba(0,212,255,0.5)]" />
              <span className="text-sm font-medium text-[#00d4ff] tracking-widest uppercase">Performance Engine</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-4 leading-tight eb-garamond">
              Digital <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#0056b3]">
                Marketing
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-2xl leading-relaxed font-light">
              Transform clicks into customers. We combine creative storytelling with data science to deliver personalized experiences that drive conversion and loyalty.
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
                Precision at Scale
              </h2>
              <p className="text-lg text-slate-400 leading-relaxed mb-6">
                The digital landscape is crowded. To stand out, brands must move beyond generic broadcasting to hyper-personalized engagement. It's not just about reaching more people; it's about reaching the *right* people with the *right* message at the *right* time.
              </p>
              <p className="text-lg text-slate-400 leading-relaxed">
                NexDyne's Digital Marketing practice empowers you to take control of your customer data. We build full-funnel strategies that optimize every touchpoint, ensuring your marketing spend delivers measurable ROI.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 bg-[#050829] border border-white/10 rounded-xl">
                <BarChart3 className="w-8 h-8 text-[#00d4ff] mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">Data-Driven</h3>
                <p className="text-sm text-slate-400">Decisions based on analytics, not guesswork.</p>
              </div>
              <div className="p-6 bg-[#050829] border border-white/10 rounded-xl">
                <Users className="w-8 h-8 text-[#00d4ff] mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">Customer-Centric</h3>
                <p className="text-sm text-slate-400">Strategies built around the user journey.</p>
              </div>
              <div className="p-6 bg-[#050829] border border-white/10 rounded-xl">
                <MousePointerClick className="w-8 h-8 text-[#00d4ff] mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">Performance-First</h3>
                <p className="text-sm text-slate-400">Focus on conversion, retention, and LTV.</p>
              </div>
              <div className="p-6 bg-[#050829] border border-white/10 rounded-xl">
                <Smartphone className="w-8 h-8 text-[#00d4ff] mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">Omnichannel</h3>
                <p className="text-sm text-slate-400">Seamless experiences across all devices.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-[#050829] border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Marketing Capabilities</h2>
            <div className="w-20 h-1 bg-[#00d4ff]" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group p-8 bg-[#0a0e3d] border border-white/10 rounded-2xl hover:bg-white transition-all duration-300">
              <h3 className="text-2xl font-bold text-white group-hover:text-slate-900 mb-4 transition-colors">
                Performance Marketing
              </h3>
              <p className="text-slate-400 group-hover:text-slate-600 mb-6 transition-colors">
                Optimize your paid media mix across search, social, and display. We use algorithmic bidding and dynamic creative to lower CAC and increase ROAS.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-slate-400 group-hover:text-slate-600">
                  <CheckCircle2 className="w-4 h-4 text-[#00d4ff]" /> Paid Search (SEM) & SEO
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-400 group-hover:text-slate-600">
                  <CheckCircle2 className="w-4 h-4 text-[#00d4ff]" /> Programmatic Display
                </li>
              </ul>
            </div>

            <div className="group p-8 bg-[#0a0e3d] border border-white/10 rounded-2xl hover:bg-white transition-all duration-300">
              <h3 className="text-2xl font-bold text-white group-hover:text-slate-900 mb-4 transition-colors">
                Marketing Technology (MarTech)
              </h3>
              <p className="text-slate-400 group-hover:text-slate-600 mb-6 transition-colors">
                Build a robust tech stack that integrates data, automates workflows, and enables real-time personalization at scale.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-slate-400 group-hover:text-slate-600">
                  <CheckCircle2 className="w-4 h-4 text-[#00d4ff]" /> CRM & CDP Implementation
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-400 group-hover:text-slate-600">
                  <CheckCircle2 className="w-4 h-4 text-[#00d4ff]" /> Marketing Automation
                </li>
              </ul>
            </div>

            <div className="group p-8 bg-[#0a0e3d] border border-white/10 rounded-2xl hover:bg-white transition-all duration-300">
              <h3 className="text-2xl font-bold text-white group-hover:text-slate-900 mb-4 transition-colors">
                Content & Brand Strategy
              </h3>
              <p className="text-slate-400 group-hover:text-slate-600 mb-6 transition-colors">
                Develop a compelling brand voice and content ecosystem that educates, engages, and inspires your target audience.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-slate-400 group-hover:text-slate-600">
                  <CheckCircle2 className="w-4 h-4 text-[#00d4ff]" /> Brand Positioning
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-400 group-hover:text-slate-600">
                  <CheckCircle2 className="w-4 h-4 text-[#00d4ff]" /> Content Marketing Engines
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
            Amplify your brand.
          </h2>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
            Ready to take your digital presence to the next level? Let's build a marketing engine that drives real growth.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button className="bg-white text-[#2352ff] hover:bg-gray-100 rounded-full px-10 py-6 text-lg font-bold shadow-xl transition-all hover:scale-105">
              Get a Marketing Audit
            </Button>
          </div>
        </div>
      </section>

      <RelatedContent items={dataRelatedItems} />
      <Footer />
    </div>
  );
}
