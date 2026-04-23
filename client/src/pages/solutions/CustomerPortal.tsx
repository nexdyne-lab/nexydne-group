import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ArrowRight, Settings, Database, Globe, CheckCircle2 } from "lucide-react";
import { RelatedContent } from "@/components/RelatedContent";
import { dataRelatedItems } from "@/data/related-content";

export function CustomerPortal() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Breadcrumb */}
      <div className="bg-subtle border-b">
        <div className="container py-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span>/</span>
            <Link href="/intelligent-process-optimization" className="hover:text-primary">Intelligent Process Optimization</Link>
            <span>/</span>
            <Link href="/solutions/app-development" className="hover:text-primary">App Development</Link>
            <span>/</span>
            <span className="text-charcoal">Customer Portal</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-rose-900 to-rose-800 text-white py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-3 eb-garamond">Customer portal</h1>
            </div>
            <div>
              <p className="text-xl leading-relaxed">
                Empower customers with 24/7 self-service access while freeing your team to focus on high-value interactions. Modern portals drive satisfaction, reduce support costs, and unlock revenue through seamless digital experiences.
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
              <div className="sticky top-8">
                <div className="w-48 h-48 bg-blue-100 rounded-full mb-6 flex items-center justify-center">
                  <div className="w-40 h-40 bg-blue-200 rounded-full"></div>
                </div>
                <h3 className="text-xl font-bold mb-4">Want to know more?</h3>
                <button className="px-6 py-3 border-2 border-charcoal rounded-full hover:bg-charcoal hover:text-white transition-colors">
                  Ask Martijn Voorveld
                </button>
              </div>
            </div>

            {/* Benefits Grid */}
            <div>
              <h2 className="text-4xl font-bold mb-12">The benefits of a customer portal</h2>
              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-lg bg-blue-100 flex items-center justify-center">
                      <Settings className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Operational efficiency</h3>
                    <p className="text-charcoal/80 leading-relaxed">
                      Automate repetitive inquiries and transactions through self-service workflows. Your support team escapes the ticket treadmill and focuses on complex issues that require human expertise and empathy.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-lg bg-blue-100 flex items-center justify-center">
                      <Database className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Data-driven insights (and revenue)</h3>
                    <p className="text-charcoal/80 leading-relaxed">
                      Transform your portal into a customer intelligence engine. Every interaction captures behavioral data, preference signals, and friction points—enabling smarter service delivery and targeted upsell opportunities.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-lg bg-blue-100 flex items-center justify-center">
                      <Globe className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Always-on accessibility</h3>
                    <p className="text-charcoal/80 leading-relaxed">
                      Build a portal that never sleeps. Customers manage accounts, submit requests, and access information on their schedule—no hold music, no business hours, no geographic boundaries. Pure convenience drives loyalty.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-subtle">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold mb-8">Tailored customer portals</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-charcoal/80 leading-relaxed mb-6">
              Customer portals transform how organizations deliver service and build relationships. A well-designed self-service portal eliminates friction by giving customers direct access to the information and tools they need—anytime, anywhere. Whether they're tracking orders, updating account details, or submitting support requests, customers get instant gratification instead of waiting in queue.
            </p>
            <p className="text-charcoal/80 leading-relaxed mb-6">
              But the real magic happens behind the scenes. While customers enjoy autonomy, your support team gains breathing room to tackle complex challenges that require judgment and creativity. No more wasting hours on password resets or address changes. Instead, they're solving problems that move the needle on customer satisfaction and retention.
            </p>
            <p className="text-charcoal/80 leading-relaxed">
              Every portal interaction generates valuable data about customer behavior, preferences, and pain points. This intelligence fuels continuous improvement—helping you refine workflows, personalize experiences, and identify upsell opportunities that feel helpful rather than pushy.
            </p>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-4xl">
          <blockquote className="text-center">
            <p className="text-3xl font-bold text-rose-900 mb-6 leading-relaxed">
              "NEXDYNE's team doesn't just build portals—they architect customer experiences. They pinpointed exactly what our users needed, delivering a platform that feels intuitive and empowering."
            </p>
            <footer className="text-muted-foreground">
              <p className="font-semibold">Sarah Mitchell, VP of Customer Experience at TechCorp</p>
            </footer>
          </blockquote>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 bg-subtle">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold mb-8">Customer portal software: choosing the right path</h2>
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-charcoal/80 leading-relaxed mb-6">
              <strong>Build or buy?</strong> It's fundamentally a choice between flexibility and speed, functionality versus budget. While off-the-shelf portal packages offer quick deployment, we know that one size rarely fits all. So, how do we build portals that match your unique requirements?
            </p>
          </div>

          <div className="space-y-6 mb-12">
            <div>
              <h3 className="text-xl font-bold mb-2">• Low-code platforms:</h3>
              <p className="text-charcoal/80 leading-relaxed">
                Accelerate time-to-market with visual development tools that balance speed with customization flexibility.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">• Custom development:</h3>
              <p className="text-charcoal/80 leading-relaxed">
                Maximum control to address complex workflows and deliver award-winning user experiences tailored to your brand.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">• Hybrid approach:</h3>
              <p className="text-charcoal/80 leading-relaxed">
                Combine multiple technologies to achieve the optimal balance of speed, functionality, and long-term maintainability.
              </p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-charcoal/80 leading-relaxed">
              Our multidisciplinary team works in agile sprints on each project. We gather insights from usage data, optimize iteratively, and ensure your portal evolves alongside your customers' expectations.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-100 to-blue-50">
        <div className="container">
          <div className="flex items-center gap-12">
            <div className="flex-shrink-0">
              <div className="w-64 h-64 bg-blue-100 rounded-full flex items-center justify-center">
                <div className="w-56 h-56 bg-blue-200 rounded-full"></div>
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-4">Want to know more?</h2>
              <p className="text-xl mb-2">Martijn Voorveld</p>
              <p className="text-charcoal/80 mb-8">Digital Solutions Director</p>
              <div className="flex gap-4">
                <button className="px-8 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors duration-200 ease-in-out">
                  Get in touch
                </button>
                <button className="px-8 py-3 border-2 border-primary text-charcoal rounded-full hover:bg-primary hover:text-white transition-colors duration-200 ease-in-out">
                  Schedule a meeting
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-[400px_1fr] gap-12">
            <div>
              <p className="text-sm text-muted-foreground mb-2">Partners</p>
              <h2 className="text-4xl font-bold mb-6">Proven platforms power exceptional portals</h2>
              <button className="px-6 py-3 border-2 border-primary text-charcoal rounded-full hover:bg-primary hover:text-white transition-colors duration-200 ease-in-out">
                All partners
              </button>
            </div>
            <div className="flex items-center gap-8">
              <button className="p-2 hover:bg-subtle rounded-full">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <div className="flex-1 grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="h-24 flex items-center justify-center mb-4">
                    <div className="text-2xl font-bold text-primary">Salesforce</div>
                  </div>
                  <p className="font-semibold">Salesforce Experience Cloud</p>
                </div>
                <div className="text-center">
                  <div className="h-24 flex items-center justify-center mb-4">
                    <div className="text-2xl font-bold text-primary">Liferay</div>
                  </div>
                  <p className="font-semibold">Liferay DXP</p>
                </div>
                <div className="text-center">
                  <div className="h-24 flex items-center justify-center mb-4">
                    <div className="text-2xl font-bold text-primary">OutSystems</div>
                  </div>
                  <p className="font-semibold">OutSystems</p>
                </div>
              </div>
              <button className="p-2 hover:bg-subtle rounded-full">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why NEXDYNE Section */}
      <section className="py-20 bg-subtle">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/app-development-hero.af074160.jpg" 
                alt="NEXDYNE office" 
                className="rounded-lg w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">Why NEXDYNE</h2>
              <p className="text-charcoal/80 leading-relaxed mb-6">
                Whether you're seeking a strategic partner, a catalyst for digital transformation, or the ultimate customer experience for your users, you've found the right team. With our next-generation digital solutions, you'll stay ahead of the competition.
              </p>
              <button className="px-8 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors duration-200 ease-in-out">
                Get in touch
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section className="py-20 bg-blue-50">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-sm text-muted-foreground mb-2">Cases</p>
            <h2 className="text-4xl font-bold mb-4">Cases we love talkin' about</h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto mb-8">
              Heard of a business that transforms unique challenges into exceptional outcomes? That'd be us. Check out these inspiring cases.
            </p>
            <button className="px-8 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors duration-200 ease-in-out">
              All cases
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <Link href="/cases/telecom-customer-portal" className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-video bg-muted overflow-hidden">
                  <img 
                    src="/telecom-customer-portal.8f77b841.jpg" 
                    alt="Telecom customer portal" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Telecom Provider Launches Self-Service Portal for 2M Customers</h3>
                  <p className="text-charcoal/80 mb-4">
                    Salesforce Experience Cloud portal reduces support calls by 58% while driving $4.2M in annual self-service upgrades.
                  </p>
                  <div className="flex items-center text-primary font-semibold">
                    Read case study
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/cases/utility-billing-portal" className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-video bg-muted overflow-hidden">
                  <img 
                    src="/utility-billing-portal.a6b35464.jpg" 
                    alt="Utility billing portal" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Utility Company Modernizes Billing Portal for 500K Households</h3>
                  <p className="text-charcoal/80 mb-4">
                    Liferay DXP portal delivers 24/7 account access, reducing call center volume by 42% and improving payment timeliness by 28%.
                  </p>
                  <div className="flex items-center text-primary font-semibold">
                    Read case study
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/cases/insurance-policyholder-portal" className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-video bg-muted overflow-hidden">
                  <img 
                    src="/insurance-policyholder-portal.39eb5bb4.jpg" 
                    alt="Insurance policyholder portal" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Insurer Builds Policyholder Portal Serving 1.2M Members</h3>
                  <p className="text-charcoal/80 mb-4">
                    OutSystems portal enables instant policy access, claims submission, and document management—achieving 82% digital adoption in 6 months.
                  </p>
                  <div className="flex items-center text-primary font-semibold">
                    Read case study
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Footer Section */}
      <section className="py-16 bg-white border-t">
        <div className="container">
          <p className="text-sm text-muted-foreground mb-4">App Development</p>
          <h2 className="text-3xl font-bold mb-8">Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/solutions/lowcode-development" className="group flex items-start gap-3 hover:text-primary">
              <ArrowRight className="w-5 h-5 mt-1 flex-shrink-0" />
              <span className="font-semibold">Low-code Development</span>
            </Link>
            <Link href="/solutions/custom-software" className="group flex items-start gap-3 hover:text-primary">
              <ArrowRight className="w-5 h-5 mt-1 flex-shrink-0" />
              <span className="font-semibold">Custom Software</span>
            </Link>
            <div className="group flex items-start gap-3 text-primary">
              <ArrowRight className="w-5 h-5 mt-1 flex-shrink-0" />
              <span className="font-semibold">Customer Portal</span>
            </div>
            <div className="group flex items-start gap-3 text-muted-foreground/70">
              <ArrowRight className="w-5 h-5 mt-1 flex-shrink-0" />
              <span className="font-semibold">Legacy Modernization</span>
            </div>
          </div>
        </div>
      </section>

      <RelatedContent items={dataRelatedItems} />
      <Footer />
    </div>
  );
}
