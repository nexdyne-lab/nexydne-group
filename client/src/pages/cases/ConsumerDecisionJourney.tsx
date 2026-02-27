import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, CheckCircle2, BarChart3, Map, Zap } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function ConsumerDecisionJourney() {
  return (
    <div className="min-h-screen bg-base text-white font-sans selection:bg-secondary selection:text-base">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-base via-base/80 to-base z-10" />
          <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop" 
            alt="Journey Mapping" 
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
              AI-Powered Journey <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary-hover">
                Orchestration
              </span>
            </h1>
            <p className="text-xl text-muted-foreground/50 leading-relaxed max-w-2xl">
              How a consumer electronics giant used granular data and AI to map the decision journey, optimizing media spend and selling out inventory in record time.
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
              A global consumer electronics manufacturer was preparing to launch a flagship smart home device. In previous launches, they had spread their marketing budget thinly across TV, print, and broad digital display, resulting in mediocre sales and low brand recall.
            </p>
            <p className="mb-6">
              They knew the consumer path to purchase had evolved into a complex, non-linear journey, but their marketing mix hadn't kept pace. They lacked visibility into which touchpoints actually influenced decisions and were wasting budget on channels that didn't drive conversion.
            </p>
            <p>
              They needed a way to identify exactly when and where potential buyers were most influenceable—from initial discovery to final purchase—to allocate their limited launch budget for maximum impact.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-base border-y border-white/5">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-white">The Solution</h2>
          <p className="text-lg text-muted-foreground/70 leading-relaxed mb-12">
            NexDyne mapped the Consumer Decision Journey (CDJ) using advanced attribution modeling and AI-driven sentiment analysis. We discovered that 70% of decisions were made during the "active evaluation" phase, where consumers compared specs and read reviews online—yet the client was spending 80% of their budget on broad awareness.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-base p-8 rounded-2xl border border-white/10 hover:border-secondary/30 transition-colors">
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
                <Map className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Journey Mapping</h3>
              <ul className="space-y-4 text-muted-foreground/70">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-secondary mr-3 mt-1 flex-shrink-0" />
                  <span>Shifted 60% of media spend to high-impact digital channels</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-secondary mr-3 mt-1 flex-shrink-0" />
                  <span>Partnered with key tech influencers and review sites for social proof</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-secondary mr-3 mt-1 flex-shrink-0" />
                  <span>Optimized product detail pages for conversion using A/B testing</span>
                </li>
              </ul>
            </div>

            <div className="bg-base p-8 rounded-2xl border border-white/10 hover:border-secondary/30 transition-colors">
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Agile Execution</h3>
              <ul className="space-y-4 text-muted-foreground/70">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-secondary mr-3 mt-1 flex-shrink-0" />
                  <span>Established a cross-functional "Launch War Room" for real-time adjustments</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-secondary mr-3 mt-1 flex-shrink-0" />
                  <span>Implemented real-time sentiment monitoring to address concerns instantly</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-secondary mr-3 mt-1 flex-shrink-0" />
                  <span>Deployed AI-generated creative variations to combat ad fatigue</span>
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
              <div className="text-4xl font-bold text-secondary mb-2">Sold Out</div>
              <div className="text-sm text-muted-foreground/70">Inventory in 2 Weeks</div>
            </div>
            <div className="text-center p-6 bg-white/5 rounded-2xl border border-white/10">
              <div className="text-4xl font-bold text-secondary mb-2">3x</div>
              <div className="text-sm text-muted-foreground/70">ROAS vs. Previous Launch</div>
            </div>
            <div className="text-center p-6 bg-white/5 rounded-2xl border border-white/10">
              <div className="text-4xl font-bold text-secondary mb-2">#1</div>
              <div className="text-sm text-muted-foreground/70">Category Market Share</div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-base to-base p-8 rounded-2xl border border-white/10">
            <h3 className="text-xl font-bold mb-6 text-white">Business Impact</h3>
            <ul className="space-y-4 text-muted-foreground/70">
              <li className="flex items-start">
                <BarChart3 className="w-5 h-5 text-secondary mr-3 mt-1 flex-shrink-0" />
                <span><strong>Market Leadership:</strong> The successful launch established the brand as a serious contender in the smart home space, paving the way for future products.</span>
              </li>
              <li className="flex items-start">
                <BarChart3 className="w-5 h-5 text-secondary mr-3 mt-1 flex-shrink-0" />
                <span><strong>Capability Building:</strong> The "Launch War Room" model became the standard operating procedure for all future product introductions.</span>
              </li>
              <li className="flex items-start">
                <BarChart3 className="w-5 h-5 text-secondary mr-3 mt-1 flex-shrink-0" />
                <span><strong>Data-Driven Culture:</strong> Marketing decisions shifted from "gut feel" to evidence-based strategies grounded in the consumer decision journey.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to map your customer's journey?</h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Let's discuss how to target your marketing spend where it matters most.
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
