import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ArrowRight, Zap, DollarSign, Puzzle, RefreshCw } from "lucide-react";
import { RelatedContent } from "@/components/RelatedContent";
import { dataRelatedItems } from "@/data/related-content";

export function LowcodeDevelopment() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Breadcrumb */}
      <div className="container py-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
          <span>/</span>
          <Link href="/intelligent-process-optimization" className="hover:text-foreground transition-colors">Intelligent Process Optimization</Link>
          <span>/</span>
          <Link href="/solutions/app-development" className="hover:text-foreground transition-colors">App Development</Link>
          <span>/</span>
          <span className="text-foreground">Low-code Development</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-rose-900 to-rose-800 text-white py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-3 eb-garamond">Low-code Development</h1>
            </div>
            <div>
              <p className="text-xl leading-relaxed">
                Build unique applications that differentiate your business. Fast time-to-market, agile iteration, and flexible customization for evolving requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-[300px_1fr] gap-16">
            {/* Contact Person */}
            <div>
              <h2 className="text-3xl font-bold mb-8">The benefits of low-code</h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-24 h-24 rounded-full bg-blue-200"></div>
                </div>
                <div>
                  <p className="font-semibold mb-2">Do you want to know more?</p>
                  <button className="px-6 py-2 border-2 border-primary text-charcoal rounded-full hover:bg-primary hover:text-white transition-colors duration-200 ease-in-out">
                    Ask Martijn Voorveld
                  </button>
                </div>
              </div>
            </div>

            {/* Benefits Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Rapid time-to-market</h3>
                <p className="text-muted-foreground">
                  Visual development accelerates delivery by 5-10x compared to traditional coding. Launch MVPs in weeks, not quarters, and validate ideas before competitors catch up.
                </p>
              </div>

              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Lower total cost of ownership</h3>
                <p className="text-muted-foreground">
                  Reduce development costs by 50-70% while maintaining enterprise-grade quality. Faster delivery means revenue generation starts sooner, improving ROI on every project.
                </p>
              </div>

              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                  <Puzzle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Tailored business fit</h3>
                <p className="text-muted-foreground">
                  Low-code platforms make customization straightforward. Build applications that match your exact workflows and business logic—no compromising on generic SaaS features.
                </p>
              </div>

              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                  <RefreshCw className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Agile evolution</h3>
                <p className="text-muted-foreground">
                  Adapt to changing requirements without rewriting code. Updates and enhancements deploy in days, keeping your applications aligned with business needs as markets shift.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Explanation Section */}
      <section className="py-20 bg-subtle">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold mb-8 text-center">Accelerate innovation with low-code</h2>
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              Low-code development uses visual modeling and pre-built components to create enterprise applications with minimal hand-coding. Instead of writing thousands of lines of code, developers assemble applications using drag-and-drop interfaces, workflow builders, and reusable templates. This approach compresses development timelines from months to weeks while maintaining the flexibility to customize for unique business requirements.
            </p>
            <p>
              The benefits extend beyond speed. Low-code reduces costs by 50-70%, makes applications easier to maintain, and enables rapid iteration based on user feedback. It's ideal for organizations that need to innovate quickly, relieve pressure on IT teams, or test new ideas without committing to lengthy development cycles. Even non-technical business analysts can participate in application design, bridging the gap between business needs and technical execution.
            </p>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-gradient-to-br from-rose-100 to-rose-50">
        <div className="container max-w-4xl text-center">
          <blockquote className="text-3xl font-bold text-rose-900 mb-6">
            "With low-code, speed to market isn't a compromise—it's your competitive advantage. Imagine it, and we'll build it in weeks, not quarters."
          </blockquote>
          <p className="text-lg text-muted-foreground">Martijn Voorveld - Chief Technology Officer, NEXDYNE</p>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold mb-8 text-center">How we approach low-code</h2>
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              Whether you're launching a new product or modernizing legacy systems, you need a partner who understands both business strategy and technical execution. As low-code specialists with expertise across multiple platforms—Mendix, OutSystems, Microsoft Power Platform—we deliver solutions that scale with your business. We think long-term: every application we build is designed for maintainability, extensibility, and future growth.
            </p>
            <p>
              Our approach starts with understanding your business objectives, not just technical requirements. We map workflows, identify integration points, and design data models that support your operations. Then we build iteratively, delivering working prototypes in weeks so you can validate assumptions and gather user feedback early. This agile methodology reduces risk and ensures the final application solves real problems, not hypothetical ones.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-100 to-peach-100">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-[200px_1fr] gap-12 items-center">
              <div className="flex items-center justify-center">
                <div className="w-40 h-40 rounded-full bg-blue-200"></div>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4">Do you want to know more?</h2>
                <p className="text-lg mb-2">Martijn Voorveld</p>
                <p className="text-muted-foreground mb-6">Chief Technology Officer</p>
                <div className="flex gap-4">
                  <button className="px-8 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors duration-200 ease-in-out">
                    Get in touch
                  </button>
                  <button className="px-8 py-3 border-2 border-primary text-charcoal rounded-full hover:bg-primary hover:text-white transition-colors duration-200 ease-in-out flex items-center gap-2">
                    Schedule a meeting <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <p className="text-sm font-semibold text-primary mb-2">Partners</p>
              <h2 className="text-4xl font-bold mb-4">Platform partners that power rapid delivery</h2>
              <button className="px-6 py-2 border-2 border-primary text-charcoal rounded-full hover:bg-primary hover:text-white transition-colors duration-200 ease-in-out">
                All partners
              </button>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 border-2 border-border rounded-lg hover:border-blue-500 transition-colors">
                <div className="h-24 flex items-center justify-center mb-4">
                  <div className="text-2xl font-bold text-primary">Mendix</div>
                </div>
                <h3 className="font-bold mb-2">Mendix</h3>
                <p className="text-sm text-muted-foreground">Enterprise-grade low-code platform for complex applications</p>
              </div>

              <div className="p-8 border-2 border-border rounded-lg hover:border-blue-500 transition-colors">
                <div className="h-24 flex items-center justify-center mb-4">
                  <div className="text-2xl font-bold text-primary">OutSystems</div>
                </div>
                <h3 className="font-bold mb-2">OutSystems</h3>
                <p className="text-sm text-muted-foreground">High-performance low-code for mission-critical systems</p>
              </div>

              <div className="p-8 border-2 border-border rounded-lg hover:border-blue-500 transition-colors">
                <div className="h-24 flex items-center justify-center mb-4">
                  <div className="text-2xl font-bold text-primary">Power Platform</div>
                </div>
                <h3 className="font-bold mb-2">Microsoft Power Platform</h3>
                <p className="text-sm text-muted-foreground">Low-code tools integrated with Microsoft 365 ecosystem</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why NEXDYNE Section */}
      <section className="py-20 bg-subtle">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <img 
                src="/app-development-hero.af074160.jpg" 
                alt="NEXDYNE office" 
                className="w-full h-[400px] object-cover rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">Why NEXDYNE</h2>
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                Whether you need a strategic technology partner, acceleration for your digital transformation, or exceptional user experiences for your customers, you've found the right team. With our next-generation low-code solutions, you'll always stay ahead of the competition.
              </p>
              <button className="px-8 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors duration-200 ease-in-out">
                Get in touch
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container">
          <div className="mb-12">
            <p className="text-sm font-semibold text-primary mb-2">Cases</p>
            <h2 className="text-4xl font-bold mb-4">Cases we love talking about</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mb-8">
              Heard of a business that transforms unique business challenges into exceptional outcomes? That'd be us. Check out these inspiring cases!
            </p>
            <button className="px-6 py-2 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors duration-200 ease-in-out">
              All cases
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/cases/insurance-claims-portal" className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                <img 
                  src="/insurance-claims-portal.92f37a95.jpg" 
                  alt="Insurance Claims Portal" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    Insurance Company Launches Digital Claims Portal in 8 Weeks
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Regional insurer replaces paper-based claims processing with Mendix low-code portal—reducing processing time from 14 days to 2 hours.
                  </p>
                  <div className="flex items-center text-primary font-semibold">
                    Read more <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/cases/logistics-tracking-app" className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                <img 
                  src="/logistics-tracking-app.6af6fd0f.jpg" 
                  alt="Logistics Tracking App" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    Logistics Firm Builds Real-Time Tracking App for 500 Drivers
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    3PL provider deploys OutSystems mobile app for package tracking and route optimization—improving on-time delivery from 82% to 96%.
                  </p>
                  <div className="flex items-center text-primary font-semibold">
                    Read more <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/cases/municipal-permit-system" className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                <img 
                  src="/municipal-permit-system.03378c44.jpg" 
                  alt="Municipal Permit System" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    City Government Modernizes Permit System Serving 250K Residents
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Municipal government replaces 30-year-old legacy system with Power Platform solution—reducing permit approval time from 45 days to 7 days.
                  </p>
                  <div className="flex items-center text-primary font-semibold">
                    Read more <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Footer Navigation */}
      <section className="py-12 bg-white border-t">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">App Development Services</h3>
              <ul className="space-y-2">
                <li><Link href="/solutions/app-development" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"><ArrowRight className="w-4 h-4" /> App Development</Link></li>
                <li><Link href="/solutions/lowcode-development" className="text-primary font-semibold flex items-center gap-2"><ArrowRight className="w-4 h-4" /> Low-code Development</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <RelatedContent items={dataRelatedItems} />
      <Footer />
    </div>
  );
}
