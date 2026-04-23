import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { RelatedContent } from "@/components/RelatedContent";
import { dataRelatedItems } from "@/data/related-content";

export default function Personalization() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section - Diagonal Split with Orange/Maroon Gradient */}
      <section className="relative min-h-[600px] overflow-hidden">
        {/* Background Gradient Shapes */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-primary to-primary"></div>
          <div 
            className="absolute inset-0 bg-gradient-to-br from-blue-500 to-secondary" 
            style={{
              clipPath: 'polygon(0 0, 60% 0, 40% 100%, 0 100%)'
            }}
          ></div>
        </div>

        <div className="container relative py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="flex items-center gap-2 text-sm mb-6 opacity-90">
                <Link href="/"><a className="hover:underline">Services</a></Link>
                <span>/</span>
                <span>Personalization</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-3 eb-garamond">
                Personalization
              </h1>
              <p className="text-xl md:text-2xl leading-relaxed opacity-95">
                Deliver hyper-relevant content, offers, and experiences to each customer using advanced segmentation, predictive analytics, and real-time decisioning engines.
              </p>
            </div>
            
            <div className="flex justify-center md:justify-end">
              <div className="w-80 h-80 rounded-full overflow-hidden bg-slate-200 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" 
                  alt="Personalization Analytics"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Importance of Personalization Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" 
                alt="The Importance of Personalization"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div>
              <h2 className="text-4xl font-bold text-charcoal mb-6">
                The Importance of Personalization
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Personalization transforms generic customer interactions into individualized experiences that drive measurable business outcomes. By delivering the right message to the right customer at precisely the right moment, personalization eliminates friction, accelerates decision-making, and builds lasting loyalty.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                Modern consumers expect brands to understand their preferences, anticipate their needs, and deliver relevant experiences across every touchpoint. Organizations that master personalization capture disproportionate market share—converting browsers into buyers, one-time purchasers into loyal advocates, and satisfied customers into brand evangelists. Personalization isn't just marketing—it's competitive advantage that compounds over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="container">
          <div className="mb-16">
            <p className="text-sm uppercase tracking-wider text-muted-foreground font-semibold mb-2">
              Personalization
            </p>
            <h2 className="text-4xl font-bold text-charcoal">
              Services
            </h2>
          </div>
          
          <div className="space-y-6">
            {/* Customer Data Platform */}
            <Link href="/solutions/personalization/customer-data-platform">
              <a className="group block bg-white p-8 rounded-lg border border-slate-200 hover:border-blue-500 hover:shadow-lg transition-all">
                <div className="flex items-start justify-between gap-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-charcoal group-hover:text-primary transition-colors mb-3">
                      Customer Data Platform (CDP)
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Customer Data Platform: one central customer profile for data-driven marketing and sales that deliver. Unify fragmented customer data into a single, real-time profile that powers personalization across every channel—consolidating behavioral, transactional, and demographic data for segmentation, journey orchestration, and predictive analytics.
                    </p>
                  </div>
                  <ArrowRight className="w-6 h-6 text-muted-foreground/70 group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
                </div>
              </a>
            </Link>

            {/* Customer Insights */}
            <Link href="/solutions/personalization/customer-insights">
              <a className="group block bg-white p-8 rounded-lg border border-slate-200 hover:border-blue-500 hover:shadow-lg transition-all">
                <div className="flex items-start justify-between gap-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-charcoal group-hover:text-primary transition-colors mb-3">
                      Customer Insights
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Refine the customer experience with Customer Experience Analytics: access key insights that reveal opportunities, boost conversion and deliver serious growth. Transform raw customer data into actionable intelligence with advanced analytics that reveal hidden patterns, predict behavior, and identify high-value opportunities.
                    </p>
                  </div>
                  <ArrowRight className="w-6 h-6 text-muted-foreground/70 group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
                </div>
              </a>
            </Link>

            {/* Customer Journey Map */}
            <Link href="/solutions/personalization/customer-journey-map">
              <a className="group block bg-white p-8 rounded-lg border border-slate-200 hover:border-blue-500 hover:shadow-lg transition-all">
                <div className="flex items-start justify-between gap-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-charcoal group-hover:text-primary transition-colors mb-3">
                      Customer Journey Map
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Understand your customer at every step with a clever Customer Journey Map. Reveal valuable insights and deliver customer-focused interactions at every touchpoint. Visualize and optimize every customer interaction from awareness to advocacy—identifying friction points, quantifying drop-off rates, and revealing opportunities to personalize experiences.
                    </p>
                  </div>
                  <ArrowRight className="w-6 h-6 text-muted-foreground/70 group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
                </div>
              </a>
            </Link>

            {/* Digital Experience Platform */}
            <Link href="/solutions/personalization/digital-experience-platform">
              <a className="group block bg-white p-8 rounded-lg border border-slate-200 hover:border-blue-500 hover:shadow-lg transition-all">
                <div className="flex items-start justify-between gap-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-charcoal group-hover:text-primary transition-colors mb-3">
                      Digital Experience Platform
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      A Digital Experience Platform marks the next smart step in your digital evolution. Discover the power of DXP and unbeatable integration. Orchestrate seamless, personalized experiences across web, mobile, and emerging channels with a unified DXP—integrating content management, personalization engines, and analytics into a single platform.
                    </p>
                  </div>
                  <ArrowRight className="w-6 h-6 text-muted-foreground/70 group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
                </div>
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* Why NEXDYNE Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800" 
                alt="NEXDYNE Office"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div>
              <h2 className="text-4xl font-bold text-charcoal mb-6">
                Why NEXDYNE
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Whether you're looking for a strategic partner, a boost for your digital transformation, or the ultimate customer experience for your customers, you've come to the right place. With our next-generation digital solutions, you'll always be one step ahead of the competition.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                NEXDYNE combines deep expertise in customer data platforms, predictive analytics, and real-time decisioning with proven implementation methodologies that minimize risk and accelerate time-to-value. Our personalization solutions leverage cutting-edge technologies while maintaining the flexibility to evolve as customer expectations shift.
              </p>
              <button className="bg-slate-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-slate-800 transition-colors">
                Get in touch
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section with Carousel */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="container">
          <div className="mb-12">
            <p className="text-sm uppercase tracking-wider text-muted-foreground font-semibold mb-2">
              Partners
            </p>
            <h2 className="text-4xl font-bold text-charcoal mb-4">
              Awesome partners turn dreams into reality
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              With these partners we realize our personalization solutions
            </p>
            <button className="border-2 border-slate-900 text-charcoal px-8 py-3 rounded-full font-semibold hover:bg-slate-900 hover:text-white transition-colors">
              All partners
            </button>
          </div>
          
          {/* Partner Cards Grid */}
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg border border-slate-200 hover:border-blue-500 hover:shadow-lg transition-all">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Bloomreach</h3>
              <p className="text-muted-foreground">
                Commerce experience cloud combining CDP, search, merchandising, and content in one platform—powering personalized digital experiences that drive revenue.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg border border-slate-200 hover:border-blue-500 hover:shadow-lg transition-all">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Commercetools</h3>
              <p className="text-muted-foreground">
                Headless commerce platform enabling brands to create unique, personalized shopping experiences across every touchpoint with API-first architecture.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg border border-slate-200 hover:border-blue-500 hover:shadow-lg transition-all">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Tweakwise</h3>
              <p className="text-muted-foreground">
                Search, merchandising, and personalization platform that optimizes product discovery and increases conversion through intelligent recommendations.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg border border-slate-200 hover:border-blue-500 hover:shadow-lg transition-all">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Sitecore</h3>
              <p className="text-muted-foreground">
                Digital experience platform combining content management, personalization, and marketing automation to deliver individualized customer journeys at scale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section className="py-20 md:py-28 bg-blue-50">
        <div className="container">
          <div className="mb-12">
            <p className="text-sm uppercase tracking-wider text-muted-foreground font-semibold mb-2">
              Cases
            </p>
            <h2 className="text-4xl font-bold text-charcoal mb-6">
              Cases we love talking about
            </h2>
            <button className="bg-slate-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-slate-800 transition-colors">
              All cases
            </button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Case 1 */}
            <Link href="/cases/retail-modernization-personalization">
              <a className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800" 
                    alt="Retail Modernization"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-charcoal mb-3 group-hover:text-primary transition-colors">
                    Retailer modernizes its legacy and unlocks new innovation potential
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    How a national home goods retailer deployed Bloomreach CDP to deliver individualized product recommendations and personalized email campaigns—driving 34% revenue lift and $18M in incremental annual revenue.
                  </p>
                  <span className="text-primary font-semibold group-hover:underline">
                    Read case study →
                  </span>
                </div>
              </a>
            </Link>

            {/* Case 2 */}
            <Link href="/cases/payment-terminal-onboarding">
              <a className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800" 
                    alt="Payment Terminal Onboarding"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-charcoal mb-3 group-hover:text-primary transition-colors">
                    Fintech speeds up terminal onboarding with personalized workflows
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    How a payment processor implemented Sitecore DXP and journey mapping to deliver personalized merchant onboarding experiences—reducing time-to-activation by 52% and increasing merchant satisfaction scores.
                  </p>
                  <span className="text-primary font-semibold group-hover:underline">
                    Read case study →
                  </span>
                </div>
              </a>
            </Link>

            {/* Case 3 */}
            <Link href="/cases/logistics-product-access">
              <a className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800" 
                    alt="Logistics Product Access"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-charcoal mb-3 group-hover:text-primary transition-colors">
                    Logistics company enables faster access to product information
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    How a global logistics provider leveraged Commercetools and customer insights to deliver personalized product catalogs and dynamic pricing—accelerating quote generation by 3.2x and reducing sales cycle length by 28%.
                  </p>
                  <span className="text-primary font-semibold group-hover:underline">
                    Read case study →
                  </span>
                </div>
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-red-900 via-primary to-secondary text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/90 via-primary/80 to-transparent"></div>
        
        <div className="container relative">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
              Ready to transform?
            </h2>
            <p className="text-xl text-center mb-8 opacity-95">
              Fill in the form or give us a call: <a href="tel:+18005551234" className="underline hover:no-underline">+1 (800) 555-1234</a>
            </p>
            
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Email *</label>
                <input 
                  type="email" 
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                  placeholder="your.email@company.com"
                />
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">First name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Last name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Phone number</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Job function</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                    placeholder="Marketing Director"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea 
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 resize-none"
                  placeholder="Tell us about your personalization goals..."
                ></textarea>
              </div>
              
              <div className="text-sm opacity-80">
                NEXDYNE is committed to protecting and respecting your privacy, and we'll only use your personal information to provide the services you requested. By submitting this form, you agree to our privacy policy.
              </div>
              
              <button 
                type="submit"
                className="w-full bg-white text-red-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-100 transition-colors"
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </section>

      <RelatedContent items={dataRelatedItems} />
      <Footer />
    </div>
  );
}
