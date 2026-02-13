import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Zap, Shield } from "lucide-react";

export function EnergyTradingPlatform() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Breadcrumb */}
      <div className="container py-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground">Home</Link>
          <span>/</span>
          <Link href="/intelligent-process-optimization" className="hover:text-foreground">Intelligent Process Optimization</Link>
          <span>/</span>
          <Link href="/solutions/app-development" className="hover:text-foreground">App Development</Link>
          <span>/</span>
          <Link href="/solutions/custom-software" className="hover:text-foreground">Custom Software</Link>
          <span>/</span>
          <span className="text-foreground">Energy Firm Builds Real-Time Trading Platform</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container max-w-4xl">
          <h1 className="text-5xl font-bold mb-3">Energy Firm Builds Real-Time Trading Platform for $50M Daily Volume</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Custom React/Node.js platform processes 50,000 trades daily with sub-second latency, replacing legacy system that couldn't scale.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-green-600" />
              <span className="font-semibold">$50M daily volume</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-blue-600" />
              <span className="font-semibold">Sub-second latency</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-blue-600" />
              <span className="font-semibold">99.99% uptime</span>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              A mid-sized energy trading firm in Houston was processing $50 million in daily transactions through a 15-year-old proprietary system built on outdated technology. The platform struggled to handle peak trading volumes, frequently experienced latency spikes during market volatility, and lacked the real-time analytics traders needed to make split-second decisions.
            </p>
            <p>
              The legacy system's limitations were costing the firm money in three ways: missed trading opportunities due to slow execution, manual workarounds that increased operational risk, and expensive maintenance contracts for obsolete infrastructure. Off-the-shelf trading platforms couldn't accommodate their unique risk models and regulatory reporting requirements.
            </p>
            <p>
              They needed a custom solution that could scale with their growth, integrate with their existing risk management systems, and provide the performance and reliability their traders demanded.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-gray-50">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">The Solution</h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              NEXDYNE architected a modern trading platform using React for the frontend and Node.js microservices for the backend, deployed on AWS for elastic scalability. We built real-time market data feeds, order execution logic, and risk analytics dashboards tailored to their specific trading strategies.
            </p>
            <p>
              The platform processes 50,000 trades daily with sub-second latency, even during peak volatility. WebSocket connections deliver live price updates to trader workstations, while automated risk checks validate every order before execution. Integration with their existing ETRM system ensures seamless position reconciliation and regulatory reporting.
            </p>
            <p>
              We implemented a phased rollout strategy, running the new platform in parallel with the legacy system for three months to validate accuracy and build trader confidence. Post-launch, we provided 24/7 monitoring and support during the critical first quarter.
            </p>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">The Results</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#8B2635] mb-2">$50M</div>
              <div className="text-muted-foreground">Daily trading volume processed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#8B2635] mb-2">99.99%</div>
              <div className="text-muted-foreground">Platform uptime achieved</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#8B2635] mb-2">85%</div>
              <div className="text-muted-foreground">Reduction in execution latency</div>
            </div>
          </div>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              The new platform transformed the firm's trading operations. Traders gained real-time visibility into positions, risk exposure, and market conditions—enabling faster, more confident decision-making. Automated order validation eliminated manual review bottlenecks, reducing average execution time from 3.2 seconds to under 0.5 seconds.
            </p>
            <p>
              The firm eliminated $240,000 in annual maintenance costs for the legacy system and reduced infrastructure spending by 40% through cloud-native architecture. More importantly, they captured trading opportunities they would have missed with the old platform, generating an estimated $1.8 million in additional revenue during the first year.
            </p>
            <p>
              Six months post-launch, the platform has maintained 99.99% uptime, processed over 12 million trades, and scaled seamlessly to support 40% growth in trading volume. The firm now has a competitive advantage in speed and reliability that off-the-shelf platforms couldn't deliver.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#2D5BFF] via-[#4169FF] to-[#5B7FFF] text-white">
        <div className="container max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to build custom software that delivers competitive advantage?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how bespoke development can solve your unique challenges and drive measurable ROI.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <a href="mailto:martijn@nexdyne.com">Schedule a consultation</a>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[#8B2635]">
              <Link href="/solutions/custom-software">Learn more about custom software</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
