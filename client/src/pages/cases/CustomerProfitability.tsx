import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, CheckCircle2, BarChart3, TrendingUp, Users } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function CustomerProfitability() {
  return (
    <div className="min-h-screen bg-base text-white font-sans selection:bg-secondary selection:text-base">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-base via-base/80 to-base z-10" />
          <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop" 
            alt="Data Analytics" 
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
              AI Customer Lifetime <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary-hover">
                Value Modeling
              </span>
            </h1>
            <p className="text-xl text-muted-foreground/50 leading-relaxed max-w-2xl">
              How a regional bank used deep learning to segment customers and tailor product offerings, increasing profitability by 30% while improving retention.
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
              A regional bank was facing declining margins in its retail banking division. While they had a large customer base, many were on legacy fee-free checking accounts that were costly to maintain. The bank wanted to migrate customers to value-added accounts but feared a mass exodus if they simply imposed new charges.
            </p>
            <p className="mb-6">
              They lacked deep insight into which customers were truly profitable and what features they valued. Without this understanding, their product design was based on assumptions, and their sales teams struggled to articulate the value of premium accounts to the right people.
            </p>
            <p>
              The bank needed a data-driven approach to identify high-potential customers and design personalized offers that would maximize lifetime value without sacrificing retention.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-base border-y border-white/5">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-white">The Solution</h2>
          <p className="text-lg text-muted-foreground/70 leading-relaxed mb-12">
            NexDyne employed a deep learning approach to model Customer Lifetime Value (CLV). We analyzed millions of transaction records to identify behavioral patterns and segment customers based on their potential profitability and feature preferences.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-base p-8 rounded-2xl border border-white/10 hover:border-secondary/30 transition-colors">
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Predictive Modeling</h3>
              <ul className="space-y-4 text-muted-foreground/70">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-secondary mr-3 mt-1 flex-shrink-0" />
                  <span>Built a CLV model to predict future profitability of each customer</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-secondary mr-3 mt-1 flex-shrink-0" />
                  <span>Identified micro-segments with high willingness to pay for premium features</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-secondary mr-3 mt-1 flex-shrink-0" />
                  <span>Simulated the impact of pricing changes on retention rates</span>
                </li>
              </ul>
            </div>

            <div className="bg-base p-8 rounded-2xl border border-white/10 hover:border-secondary/30 transition-colors">
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Personalized Migration</h3>
              <ul className="space-y-4 text-muted-foreground/70">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-secondary mr-3 mt-1 flex-shrink-0" />
                  <span>Developed targeted migration offers for each customer segment</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-secondary mr-3 mt-1 flex-shrink-0" />
                  <span>Implemented a "best fit" recommendation engine for branch staff</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-secondary mr-3 mt-1 flex-shrink-0" />
                  <span>Automated digital onboarding flows for premium accounts</span>
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
              <div className="text-4xl font-bold text-secondary mb-2">30%</div>
              <div className="text-sm text-muted-foreground/70">Increase in Profitability</div>
            </div>
            <div className="text-center p-6 bg-white/5 rounded-2xl border border-white/10">
              <div className="text-4xl font-bold text-secondary mb-2">&lt;2%</div>
              <div className="text-sm text-muted-foreground/70">Customer Attrition Rate</div>
            </div>
            <div className="text-center p-6 bg-white/5 rounded-2xl border border-white/10">
              <div className="text-4xl font-bold text-secondary mb-2">15%</div>
              <div className="text-sm text-muted-foreground/70">Increase in Primary Bank Status</div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-base to-base p-8 rounded-2xl border border-white/10">
            <h3 className="text-xl font-bold mb-6 text-white">Business Impact</h3>
            <ul className="space-y-4 text-muted-foreground/70">
              <li className="flex items-start">
                <BarChart3 className="w-5 h-5 text-secondary mr-3 mt-1 flex-shrink-0" />
                <span><strong>Sustainable Growth:</strong> Created a recurring revenue stream that is less dependent on interest rate fluctuations.</span>
              </li>
              <li className="flex items-start">
                <BarChart3 className="w-5 h-5 text-secondary mr-3 mt-1 flex-shrink-0" />
                <span><strong>Customer Satisfaction:</strong> Surprisingly, satisfaction scores increased as customers felt they were getting more value from the new feature-rich accounts.</span>
              </li>
              <li className="flex items-start">
                <BarChart3 className="w-5 h-5 text-secondary mr-3 mt-1 flex-shrink-0" />
                <span><strong>Sales Effectiveness:</strong> Bankers became more confident in selling, moving from an apologetic stance on fees to a value-driven conversation.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to maximize customer value?</h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Let's discuss how AI can help you identify and grow your most profitable relationships.
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
