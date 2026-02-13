import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, DollarSign, Wrench, Layers, Link as LinkIcon } from "lucide-react";
import { RelatedContent } from "@/components/RelatedContent";
import { dataRelatedItems } from "@/data/related-content";

export function CustomSoftware() {
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
          <span className="text-foreground">Custom Software</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#2D5BFF] via-[#4169FF] to-[#5B7FFF] text-white py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-3 eb-garamond">Custom software</h1>
            </div>
            <div>
              <p className="text-xl leading-relaxed">
                Your business isn't cookie-cutter—why should your software be? We build bespoke applications engineered to your exact workflows, integrations, and growth trajectory. No compromises, no workarounds, just software that works the way you do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-[300px_1fr] gap-12">
            {/* Contact Person */}
            <div className="space-y-4">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#4169FF] to-[#5B7FFF] flex items-center justify-center text-white text-3xl font-bold">
                MV
              </div>
              <div>
                <h3 className="font-semibold text-lg">Martijn Voorveld</h3>
                <p className="text-muted-foreground">Solutions Architect</p>
              </div>
              <Button variant="outline" className="w-full">
                <a href="mailto:martijn@nexdyne.com">Get in touch</a>
              </Button>
            </div>

            {/* Benefits Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold">Competitive total cost of ownership</h3>
                <p className="text-muted-foreground">
                  Custom doesn't mean expensive. When you factor in licensing fees, integration costs, and workarounds for off-the-shelf tools, bespoke software often delivers better ROI—especially at scale.
                </p>
              </div>

              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                  <Wrench className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold">Built for your exact requirements</h3>
                <p className="text-muted-foreground">
                  No feature bloat, no missing capabilities. Every function is designed around your team's workflows, business rules, and compliance needs. You get exactly what you need—nothing more, nothing less.
                </p>
              </div>

              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                  <Layers className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold">Seamless IT ecosystem integration</h3>
                <p className="text-muted-foreground">
                  Connect to legacy systems, third-party APIs, and proprietary databases without middleware gymnastics. Custom software speaks your infrastructure's language from day one.
                </p>
              </div>

              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                  <LinkIcon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold">Effortless third-party connectivity</h3>
                <p className="text-muted-foreground">
                  Whether it's payment processors, CRMs, ERPs, or industry-specific platforms, we build native integrations that eliminate data silos and manual data entry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-gray-50">
        <div className="container max-w-4xl">
          <h2 className="text-3xl eb-garamond font-bold mb-8">Isn't custom software prohibitively expensive?</h2>
          <div className="space-y-6 text-lg text-muted-foreground">
            <p>
              That's the myth. The reality? Custom software delivers better economics than you think—especially when you account for the hidden costs of commercial platforms.
            </p>
            <p>
              Off-the-shelf tools charge per-user licensing fees that compound as you scale. They force you to pay for features you'll never use while lacking the ones you actually need. Integration middleware, customization consultants, and workaround development add up fast.
            </p>
            <p>
              Custom software flips the equation. You invest upfront in exactly what you need, then own it outright. No recurring license fees. No vendor lock-in. No forced upgrades. And because it's built for your processes, adoption is faster and training costs are lower.
            </p>
            <p>
              For mid-sized companies scaling operations or enterprises with unique workflows, custom software often pays for itself within 18-24 months—then continues delivering value for years.
            </p>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-gradient-to-br from-rose-100 to-blue-50">
        <div className="container max-w-4xl text-center">
          <blockquote className="text-3xl font-semibold text-gray-900 mb-6">
            "Custom software lets smaller businesses compete with enterprise capabilities while helping larger organizations eliminate licensing costs that don't scale."
          </blockquote>
          <p className="text-lg text-muted-foreground">
            — Martijn Voorveld, Solutions Architect at NEXDYNE
          </p>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-3xl eb-garamond font-bold mb-8">Engineered to fit like a glove</h2>
          <div className="space-y-6 text-lg text-muted-foreground">
            <p>
              Custom software isn't about reinventing the wheel—it's about building the exact wheel your business needs to roll forward. We start by mapping your workflows, pain points, and growth plans, then architect a solution that solves today's problems while accommodating tomorrow's scale.
            </p>
            <p>
              Our iterative development approach means you see working software early and often. We deliver in sprints, gather feedback, and refine functionality before moving to the next module. This keeps development aligned with real-world usage and prevents costly rework.
            </p>
            <p>
              We prioritize maintainability and extensibility. Clean code architecture, comprehensive documentation, and modular design ensure your software can evolve as your business does—whether that means adding features, integrating new systems, or scaling to support 10x users.
            </p>
            <p>
              Post-launch, we provide ongoing support, performance monitoring, and enhancement roadmaps. Your custom software isn't a one-time delivery—it's a strategic asset that grows with you.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-100 to-peach-100">
        <div className="container">
          <div className="grid lg:grid-cols-[300px_1fr] gap-12 items-center">
            {/* Contact Person */}
            <div className="space-y-4">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#4169FF] to-[#5B7FFF] flex items-center justify-center text-white text-3xl font-bold">
                MV
              </div>
              <div>
                <h3 className="font-semibold text-lg">Martijn Voorveld</h3>
                <p className="text-muted-foreground">Solutions Architect</p>
              </div>
            </div>

            {/* CTA Content */}
            <div className="space-y-6">
              <h2 className="text-3xl eb-garamond font-bold">Ready to explore custom software?</h2>
              <p className="text-lg text-muted-foreground">
                Let's discuss your requirements, timeline, and budget. We'll show you how custom development can deliver better ROI than off-the-shelf alternatives.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-[#8B2635] hover:bg-[#6B1F2A]">
                  <a href="mailto:martijn@nexdyne.com">Schedule a consultation</a>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline">
                  <a href="/cases">View case studies</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-3xl eb-garamond font-bold text-center mb-4">Technology partners that power innovation</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            We leverage best-in-class frameworks and platforms to accelerate development without sacrificing quality or flexibility.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center max-w-4xl mx-auto">
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold text-gray-900">React</div>
              <p className="text-sm text-muted-foreground">Frontend framework</p>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold text-gray-900">Node.js</div>
              <p className="text-sm text-muted-foreground">Backend runtime</p>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold text-gray-900">PostgreSQL</div>
              <p className="text-sm text-muted-foreground">Database</p>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold text-gray-900">AWS</div>
              <p className="text-sm text-muted-foreground">Cloud infrastructure</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why NEXDYNE Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/custom-software-hero.17239718.jpg" 
                alt="NEXDYNE custom software development team" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl eb-garamond font-bold">Why NEXDYNE for custom software?</h2>
              <p className="text-lg text-muted-foreground">
                We've built mission-critical applications for energy traders, pharmaceutical manufacturers, and construction firms—industries where downtime isn't an option and compliance is non-negotiable.
              </p>
              <p className="text-lg text-muted-foreground">
                Our team combines deep technical expertise with business acumen. We don't just write code—we architect solutions that solve strategic problems and deliver measurable ROI.
              </p>
              <p className="text-lg text-muted-foreground">
                From discovery workshops to post-launch optimization, we're your long-term technology partner—not just a vendor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container">
          <h2 className="text-3xl eb-garamond font-bold text-center mb-4">Cases we love talkin' about</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Real businesses, real challenges, real results. See how custom software transformed operations for our clients.
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Case 1 */}
            <Link href="/cases/energy-trading-platform">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                <img 
                  src="/energy-trading-platform.08b27080.jpg" 
                  alt="Energy trading platform" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-semibold">Energy Firm Builds Real-Time Trading Platform for $50M Daily Volume</h3>
                  <p className="text-muted-foreground">
                    Custom React/Node.js platform processes 50,000 trades daily with sub-second latency, replacing legacy system that couldn't scale.
                  </p>
                  <div className="flex items-center text-[#8B2635] font-semibold">
                    Read case study <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </div>
            </Link>

            {/* Case 2 */}
            <Link href="/cases/pharmaceutical-compliance-system">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                <img 
                  src="/pharmaceutical-compliance-system.e22d9e5f.jpg" 
                  alt="Pharmaceutical compliance system" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-semibold">Pharma Manufacturer Automates FDA Compliance Tracking Across 12 Facilities</h3>
                  <p className="text-muted-foreground">
                    Custom compliance management system reduced audit prep time by 78% and eliminated manual spreadsheet tracking for 200+ users.
                  </p>
                  <div className="flex items-center text-[#8B2635] font-semibold">
                    Read case study <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </div>
            </Link>

            {/* Case 3 */}
            <Link href="/cases/construction-project-management">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                <img 
                  src="/construction-project-management.ade63c90.jpg" 
                  alt="Construction project management software" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-semibold">Construction Firm Replaces 5 Tools with Unified Project Management Platform</h3>
                  <p className="text-muted-foreground">
                    Custom web and mobile app consolidated scheduling, resource allocation, and financial tracking—saving $180K annually in software costs.
                  </p>
                  <div className="flex items-center text-[#8B2635] font-semibold">
                    Read case study <ArrowRight className="ml-2 h-4 w-4" />
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
          <h3 className="text-lg font-semibold mb-6">App Development Services</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/solutions/lowcode-development" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
              <ArrowRight className="h-4 w-4" />
              <span>Low-code Development</span>
            </Link>
            <Link href="/solutions/custom-software" className="flex items-center gap-2 text-foreground font-semibold">
              <ArrowRight className="h-4 w-4" />
              <span>Custom Software</span>
            </Link>
            <Link href="/solutions/app-development" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
              <ArrowRight className="h-4 w-4" />
              <span>Customer Portal</span>
            </Link>
            <Link href="/solutions/app-development" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
              <ArrowRight className="h-4 w-4" />
              <span>Legacy Modernization</span>
            </Link>
          </div>
        </div>
      </section>

      <RelatedContent items={dataRelatedItems} />
      <Footer />
    </div>
  );
}
