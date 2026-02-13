import React, { useEffect } from "react";
import Navbar from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowLeft, BarChart3, TrendingUp, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function RetailerMLForecasting() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0e3d] text-white font-sans selection:bg-[#00d4ff] selection:text-[#0a0e3d]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden min-h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e3d] via-[#0a0e3d]/90 to-[#0a0e3d] z-10" />
          <img 
            src="https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=2670&auto=format&fit=crop" 
            alt="Retail Analytics" 
            className="w-full h-full object-cover opacity-40"
          />
        </div>

        <div className="container mx-auto px-6 relative z-20">
          <Link href="/solutions/enterprise-transformation/legacy-modernization">
            <Button variant="ghost" className="text-slate-400 hover:text-white mb-8 pl-0 hover:bg-transparent">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Data Modernization
            </Button>
          </Link>
          
          <div className="max-w-4xl">
            <div className="inline-flex items-center space-x-2 bg-[#00d4ff]/10 backdrop-blur-md border border-[#00d4ff]/20 rounded-full px-4 py-1.5 mb-6">
              <span className="text-sm font-medium text-[#00d4ff] tracking-widest uppercase">Retail Case Study</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-3 leading-tight">
              Predicting Demand with <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#0056b3]">
                98% Accuracy
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl leading-relaxed font-light">
              How a major retailer reduced inventory waste by 30% using our ML-powered forecasting engine.
            </p>
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-20 bg-[#0a0e3d]">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">The Challenge</h2>
              <p className="text-slate-400 leading-relaxed mb-6">
                The client was relying on legacy spreadsheet-based forecasting methods that couldn't account for complex variables like weather, local events, and social media trends. This led to:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center mt-1 mr-4">
                    <span className="w-2 h-2 rounded-full bg-red-500" />
                  </div>
                  <span className="text-slate-300">Excess inventory in some regions, leading to markdowns.</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center mt-1 mr-4">
                    <span className="w-2 h-2 rounded-full bg-red-500" />
                  </div>
                  <span className="text-slate-300">Stockouts in high-demand stores, resulting in lost revenue.</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center mt-1 mr-4">
                    <span className="w-2 h-2 rounded-full bg-red-500" />
                  </div>
                  <span className="text-slate-300">Manual planning processes taking 2+ weeks per cycle.</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-6">The Solution</h2>
              <p className="text-slate-400 leading-relaxed mb-6">
                We built a custom Machine Learning pipeline on Databricks that ingests real-time sales data, weather patterns, and marketing calendars to predict SKU-level demand.
              </p>
              <div className="space-y-6">
                <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <BarChart3 className="w-6 h-6 text-[#00d4ff] mr-3" />
                    <h3 className="text-xl font-bold text-white">Demand Forecasting Model</h3>
                  </div>
                  <p className="text-slate-400 text-sm">
                    XGBoost models trained on 5 years of historical data, re-trained weekly to adapt to new trends.
                  </p>
                </div>
                <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <TrendingUp className="w-6 h-6 text-[#00d4ff] mr-3" />
                    <h3 className="text-xl font-bold text-white">Automated Replenishment</h3>
                  </div>
                  <p className="text-slate-400 text-sm">
                    Integration with ERP to automatically generate purchase orders based on predicted demand.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Stats */}
      <section className="py-20 bg-[#050829] border-y border-white/5">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Key Outcomes</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div className="text-5xl font-bold text-[#00d4ff] mb-4">30%</div>
              <div className="text-white font-medium text-lg mb-2">Reduction in Waste</div>
              <p className="text-slate-400 text-sm">Inventory markdowns significantly reduced.</p>
            </div>
            <div className="text-center p-8 border-x border-white/5">
              <div className="text-5xl font-bold text-[#00d4ff] mb-4">98%</div>
              <div className="text-white font-medium text-lg mb-2">Forecast Accuracy</div>
              <p className="text-slate-400 text-sm">At SKU/Store level for 2-week horizon.</p>
            </div>
            <div className="text-center p-8">
              <div className="text-5xl font-bold text-[#00d4ff] mb-4">10x</div>
              <div className="text-white font-medium text-lg mb-2">Faster Planning</div>
              <p className="text-slate-400 text-sm">Planning cycle reduced from weeks to days.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#0a0e3d]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Ready to optimize your operations?
          </h2>
          <Link href="/contact">
            <Button className="bg-[#00d4ff] hover:bg-[#00bce3] text-[#0a0e3d] rounded-full px-8 py-6 text-lg font-bold">
              Schedule a Demo
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
