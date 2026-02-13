import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, CheckCircle2, BarChart3, Target, Cpu } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function MarketingConversionBoost() {
  return (
    <div className="min-h-screen bg-[#0a0e3d] text-white font-sans selection:bg-[#00d4ff] selection:text-[#0a0e3d]">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e3d] via-[#0a0e3d]/80 to-[#0a0e3d] z-10" />
          <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop" 
            alt="Predictive Analytics" 
            className="w-full h-full object-cover opacity-50"
          />
        </div>

        <div className="container mx-auto px-6 relative z-20">
          <Link href="/capabilities/growth-marketing-sales">
            <Button variant="ghost" className="text-[#00d4ff] hover:bg-[#00d4ff]/10 mb-8 pl-0 hover:pl-2 transition-all">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Growth, Marketing & Sales
            </Button>
          </Link>
          
          <div className="max-w-4xl">
            <div className="inline-flex items-center space-x-2 bg-[#00d4ff]/10 backdrop-blur-md border border-[#00d4ff]/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#00d4ff] animate-pulse" />
              <span className="text-sm font-medium text-[#00d4ff] tracking-widest uppercase">Case Study</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-3 leading-tight">
              Predictive Lead Scoring <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#0056b3]">
                & Conversion Optimization
              </span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
              How a leading B2B SaaS platform leveraged machine learning to identify high-intent prospects, boosting conversion rates by 20% and reducing acquisition costs.
            </p>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-20 bg-[#0a0e3d]">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-white">The Challenge</h2>
          <div className="prose prose-lg prose-invert text-slate-400">
            <p className="mb-6">
              A rapidly growing B2B SaaS company was struggling with lead quality despite increasing traffic. Their sales team was overwhelmed with low-quality leads, wasting valuable time on prospects who were unlikely to convert.
            </p>
            <p className="mb-6">
              Their marketing approach was broad and generic, treating all visitors with the same messaging. They lacked the data infrastructure to segment their audience effectively or predict which leads had the highest propensity to buy.
            </p>
            <p>
              As a result, customer acquisition costs (CAC) were rising while conversion rates remained stagnant. The company needed a way to leverage their data to prioritize sales efforts and deliver targeted, relevant offers to the right prospects at the right time.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-[#050829] border-y border-white/5">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-white">The Solution</h2>
          <p className="text-lg text-slate-400 leading-relaxed mb-12">
            NexDyne implemented a comprehensive AI-driven lead scoring and personalization engine. We built a Customer Data Platform (CDP) to unify data from web, mobile, and CRM, and trained machine learning models to predict conversion probability based on behavioral signals.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#0a0e3d] p-8 rounded-2xl border border-white/10 hover:border-[#00d4ff]/30 transition-colors">
              <div className="w-12 h-12 bg-[#00d4ff]/10 rounded-xl flex items-center justify-center mb-6">
                <Cpu className="w-6 h-6 text-[#00d4ff]" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">AI-Powered Scoring</h3>
              <ul className="space-y-4 text-slate-400">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#00d4ff] mr-3 mt-1 flex-shrink-0" />
                  <span>Developed a proprietary ML model to score leads in real-time</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#00d4ff] mr-3 mt-1 flex-shrink-0" />
                  <span>Identified key behavioral triggers indicating purchase intent</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#00d4ff] mr-3 mt-1 flex-shrink-0" />
                  <span>Automated lead routing to prioritize high-score prospects for sales</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#0a0e3d] p-8 rounded-2xl border border-white/10 hover:border-[#00d4ff]/30 transition-colors">
              <div className="w-12 h-12 bg-[#00d4ff]/10 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-[#00d4ff]" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Dynamic Personalization</h3>
              <ul className="space-y-4 text-slate-400">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#00d4ff] mr-3 mt-1 flex-shrink-0" />
                  <span>Deployed a real-time personalization engine for web and email</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#00d4ff] mr-3 mt-1 flex-shrink-0" />
                  <span>Created dynamic content blocks tailored to industry and role</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#00d4ff] mr-3 mt-1 flex-shrink-0" />
                  <span>Set up automated nurture sequences based on lead score changes</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-[#0a0e3d]">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">The Results</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6 bg-white/5 rounded-2xl border border-white/10">
              <div className="text-4xl font-bold text-[#00d4ff] mb-2">20%</div>
              <div className="text-sm text-slate-400">Increase in Conversion Rate</div>
            </div>
            <div className="text-center p-6 bg-white/5 rounded-2xl border border-white/10">
              <div className="text-4xl font-bold text-[#00d4ff] mb-2">30%</div>
              <div className="text-sm text-slate-400">Increase in Sales Velocity</div>
            </div>
            <div className="text-center p-6 bg-white/5 rounded-2xl border border-white/10">
              <div className="text-4xl font-bold text-[#00d4ff] mb-2">15%</div>
              <div className="text-sm text-slate-400">Reduction in CAC</div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#050829] to-[#0a0e3d] p-8 rounded-2xl border border-white/10">
            <h3 className="text-xl font-bold mb-6 text-white">Business Impact</h3>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-start">
                <BarChart3 className="w-5 h-5 text-[#00d4ff] mr-3 mt-1 flex-shrink-0" />
                <span><strong>Sales Efficiency:</strong> Sales reps focused only on high-intent leads, significantly increasing their close rates and morale.</span>
              </li>
              <li className="flex items-start">
                <BarChart3 className="w-5 h-5 text-[#00d4ff] mr-3 mt-1 flex-shrink-0" />
                <span><strong>Customer Experience:</strong> Prospects received relevant content and offers, leading to higher engagement and brand perception.</span>
              </li>
              <li className="flex items-start">
                <BarChart3 className="w-5 h-5 text-[#00d4ff] mr-3 mt-1 flex-shrink-0" />
                <span><strong>Marketing ROI:</strong> Ad spend was optimized by suppressing low-quality audiences and doubling down on high-converting segments.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#2352ff] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to optimize your funnel?</h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Let's discuss how AI-driven lead scoring can transform your sales performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-[#2352ff] hover:bg-gray-100 rounded-full px-8 font-bold">
                Get in touch
              </Button>
            </Link>
            <Link href="/capabilities/growth-marketing-sales">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 rounded-full px-8 font-bold">
                Back to Capability <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
