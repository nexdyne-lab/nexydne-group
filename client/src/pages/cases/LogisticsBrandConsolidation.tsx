import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, CheckCircle2, BarChart3, Network, Zap } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function LogisticsBrandConsolidation() {
  return (
    <div className="min-h-screen bg-base text-white font-sans selection:bg-secondary selection:text-base">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-base via-base/80 to-base z-10" />
          <img 
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2670&auto=format&fit=crop" 
            alt="AI Supply Chain" 
            className="w-full h-full object-cover opacity-50"
          />
        </div>

        <div className="container mx-auto px-6 relative z-20">
          <Link href="/capabilities/growth-marketing-sales">
            <Button variant="ghost" className="text-secondary hover:bg-secondary/10 mb-8 pl-0 hover:pl-2 transition-all">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Growth, Marketing & Sales
            </Button>
          </Link>
          
          <div className="max-w-4xl">
            <div className="inline-flex items-center space-x-2 bg-secondary/10 backdrop-blur-md border border-secondary/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <span className="text-sm font-medium text-secondary tracking-widest uppercase">Case Study</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-3 leading-tight">
              AI-Driven Supply Chain <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary-hover">
                Branding & Optimization
              </span>
            </h1>
            <p className="text-xl text-muted-foreground/50 leading-relaxed max-w-2xl">
              How a global logistics giant leveraged predictive analytics to unify 30+ regional brands and optimize route efficiency, creating a seamless "One Network" experience.
            </p>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-20 bg-base">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-white">The Challenge</h2>
          <div className="prose prose-lg prose-invert text-muted-foreground/70">
            <p className="mb-6">
              A global logistics provider had grown rapidly through aggressive acquisitions, resulting in a fragmented portfolio of over 30 regional brands. While the company had significant global reach, its brand equity was diluted across these disparate entities.
            </p>
            <p className="mb-6">
              Customers were confused by varying service levels and brand identities, and the company struggled to cross-sell services between regions. Furthermore, operational data was siloed, preventing the optimization of global routes and leading to inefficiencies that eroded margins.
            </p>
            <p>
              The company needed a strategy to consolidate its portfolio into a unified global brand without alienating local customer bases, while simultaneously leveraging its scale to improve operational performance.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-base border-y border-white/5">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-white">The Solution</h2>
          <p className="text-lg text-muted-foreground/70 leading-relaxed mb-12">
            NexDyne partnered with the client to execute a dual-track transformation: a data-driven brand consolidation and an AI-powered operational optimization. We used machine learning to analyze customer sentiment and route efficiency, creating a unified "One Network" that delivered on the promise of speed and reliability.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-base p-8 rounded-2xl border border-white/10 hover:border-secondary/30 transition-colors">
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
                <Network className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Strategic Unification</h3>
              <ul className="space-y-4 text-muted-foreground/70">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-secondary mr-3 mt-1 flex-shrink-0" />
                  <span>Defined a monolithic brand architecture based on "Reliability & Speed"</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-secondary mr-3 mt-1 flex-shrink-0" />
                  <span>Created a phased migration roadmap using customer sentiment analysis</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-secondary mr-3 mt-1 flex-shrink-0" />
                  <span>Launched a global "One Network" campaign powered by programmatic ad buying</span>
                </li>
              </ul>
            </div>

            <div className="bg-base p-8 rounded-2xl border border-white/10 hover:border-secondary/30 transition-colors">
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">AI Operational Optimization</h3>
              <ul className="space-y-4 text-muted-foreground/70">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-secondary mr-3 mt-1 flex-shrink-0" />
                  <span>Implemented predictive routing algorithms to optimize fleet utilization</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-secondary mr-3 mt-1 flex-shrink-0" />
                  <span>Unified digital presence into a single global portal with real-time tracking</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-secondary mr-3 mt-1 flex-shrink-0" />
                  <span>Harmonized service portfolios across regions using demand forecasting</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-base">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">The Results</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6 bg-white/5 rounded-2xl border border-white/10">
              <div className="text-4xl font-bold text-secondary mb-2">Top 50</div>
              <div className="text-sm text-muted-foreground/70">Global Brand Ranking</div>
            </div>
            <div className="text-center p-6 bg-white/5 rounded-2xl border border-white/10">
              <div className="text-4xl font-bold text-secondary mb-2">18%</div>
              <div className="text-sm text-muted-foreground/70">Increase in Cross-Selling</div>
            </div>
            <div className="text-center p-6 bg-white/5 rounded-2xl border border-white/10">
              <div className="text-4xl font-bold text-secondary mb-2">$55M</div>
              <div className="text-sm text-muted-foreground/70">Operational Efficiency Savings</div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-base to-base p-8 rounded-2xl border border-white/10">
            <h3 className="text-xl font-bold mb-6 text-white">Business Impact</h3>
            <ul className="space-y-4 text-muted-foreground/70">
              <li className="flex items-start">
                <BarChart3 className="w-5 h-5 text-secondary mr-3 mt-1 flex-shrink-0" />
                <span><strong>Brand Equity:</strong> Recognized as a unified global leader, enabling premium pricing strategies and stronger customer loyalty.</span>
              </li>
              <li className="flex items-start">
                <BarChart3 className="w-5 h-5 text-secondary mr-3 mt-1 flex-shrink-0" />
                <span><strong>Customer Experience:</strong> Simplified customer journey with a single point of contact and consistent service standards globally.</span>
              </li>
              <li className="flex items-start">
                <BarChart3 className="w-5 h-5 text-secondary mr-3 mt-1 flex-shrink-0" />
                <span><strong>Operational Synergy:</strong> Streamlined marketing operations and reduced agency spend by consolidating vendor relationships.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to unify your brand strategy?</h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Let's discuss how we can help you build a powerful, consistent global brand powered by data.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-primary hover:bg-subtle rounded-full px-8 font-bold">
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
