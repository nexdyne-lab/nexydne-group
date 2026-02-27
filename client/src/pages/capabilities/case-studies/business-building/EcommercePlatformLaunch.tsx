import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight, Share2, Bookmark, Linkedin, Twitter } from "lucide-react";
import { SEO } from "@/components/SEO";

export default function EcommercePlatformLaunch() {
  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Industrial Distributor Launches B2B E-commerce Platform | Case Study" 
        description="How a $200M industrial distributor built and scaled a digital commerce platform that now drives 35% of revenue."
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-charcoal text-white pt-32 pb-20">
        <div className="container max-w-4xl">
          <Link href="/capabilities/business-building/case-studies" className="inline-flex items-center text-sm text-muted-foreground/70 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Business Building Case Studies
          </Link>
          
          <div className="mb-6">
            <span className="text-sm font-semibold text-secondary uppercase tracking-wider">
              CASE STUDY
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 leading-tight eb-garamond">
            Industrial Distributor Launches B2B E-commerce Platform
          </h1>
          
          <p className="text-xl text-muted-foreground/50 mb-8 leading-relaxed">
            How a $200M industrial distributor built and scaled a digital commerce platform that now drives 35% of revenue.
          </p>
          
          <div className="flex items-center gap-6 text-sm text-muted-foreground/70">
            <span>Industrial Distribution</span>
            <span>•</span>
            <span>$200M Revenue</span>
            <span>•</span>
            <span>18-Month Engagement</span>
          </div>
        </div>
      </section>
      
      {/* Key Results Banner */}
      <section className="bg-primary text-white py-12">
        <div className="container max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">35%</div>
              <div className="text-sm opacity-80">Revenue Through Digital</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">$28M</div>
              <div className="text-sm opacity-80">New Annual Revenue</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">2.4x</div>
              <div className="text-sm opacity-80">Average Order Value</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">18mo</div>
              <div className="text-sm opacity-80">Time to Profitability</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Article Content */}
      <article className="py-16">
        <div className="container max-w-3xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-charcoal mt-8 mb-6 eb-garamond">The Challenge</h2>
            
            <p className="text-charcoal/80 leading-relaxed mb-6">
              A regional industrial distributor with $200M in annual revenue faced an existential threat. Amazon Business and other digital-first competitors were capturing market share, particularly among younger procurement professionals who expected consumer-grade digital experiences.
            </p>
            
            <p className="text-charcoal/80 leading-relaxed mb-6">
              The company's existing digital presence was limited to a basic product catalog with no e-commerce capability. Orders came through phone calls, faxes, and emails—processes that were slow, error-prone, and increasingly out of step with customer expectations.
            </p>
            
            <p className="text-charcoal/80 leading-relaxed mb-6">
              Leadership recognized the need to build a digital commerce capability but faced significant constraints. They lacked internal digital expertise, had limited IT infrastructure, and couldn't afford the multi-year, multi-million-dollar implementations typical of enterprise e-commerce projects.
            </p>
            
            <h2 className="text-3xl font-bold text-charcoal mt-12 mb-6 eb-garamond">Our Approach</h2>
            
            <p className="text-charcoal/80 leading-relaxed mb-6">
              We designed a venture-style approach that would deliver a functional e-commerce platform in months rather than years, at a fraction of typical enterprise costs.
            </p>
            
            <h3 className="text-2xl font-bold text-charcoal mt-10 mb-4">Phase 1: Discovery and Design (Weeks 1-8)</h3>
            
            <p className="text-charcoal/80 leading-relaxed mb-6">
              We began with intensive customer research, interviewing 45 customers across segments to understand their digital expectations and pain points. This research revealed that customers valued three things above all: accurate real-time inventory visibility, simplified reordering of frequently purchased items, and integration with their procurement systems.
            </p>
            
            <p className="text-charcoal/80 leading-relaxed mb-6">
              Based on these insights, we designed a platform focused on these core needs rather than attempting to replicate every feature of consumer e-commerce sites. We selected a modern headless commerce platform that could integrate with the company's existing ERP system while providing the flexibility for rapid iteration.
            </p>
            
            <h3 className="text-2xl font-bold text-charcoal mt-10 mb-4">Phase 2: MVP Development (Weeks 9-20)</h3>
            
            <p className="text-charcoal/80 leading-relaxed mb-6">
              We built the minimum viable platform with a small, cross-functional team: two developers, one designer, one product manager, and part-time involvement from the client's operations and sales teams.
            </p>
            
            <p className="text-charcoal/80 leading-relaxed mb-6">
              The MVP included: real-time inventory and pricing from the ERP system, customer-specific pricing based on negotiated contracts, simplified reordering with saved lists and order history, and basic search and filtering across the 50,000+ SKU catalog.
            </p>
            
            <p className="text-charcoal/80 leading-relaxed mb-6">
              We deliberately excluded features that would add complexity without proportional value: advanced personalization, complex promotions, and social features. These could be added later once the core platform proved successful.
            </p>
            
            <h3 className="text-2xl font-bold text-charcoal mt-10 mb-4">Phase 3: Pilot Launch (Weeks 21-28)</h3>
            
            <p className="text-charcoal/80 leading-relaxed mb-6">
              We launched the platform to a pilot group of 50 customers, selected for their digital sophistication and willingness to provide feedback. This controlled launch allowed us to identify and fix issues before broader rollout.
            </p>
            
            <p className="text-charcoal/80 leading-relaxed mb-6">
              Key learnings from the pilot included the need for better mobile experience (many customers ordered from job sites), the importance of order status visibility, and requests for integration with popular procurement platforms.
            </p>
            
            <h3 className="text-2xl font-bold text-charcoal mt-10 mb-4">Phase 4: Scale and Optimize (Months 7-18)</h3>
            
            <p className="text-charcoal/80 leading-relaxed mb-6">
              Following successful pilot results, we expanded the platform to all customers while continuing to add features based on usage data and customer feedback. Key additions included mobile-optimized experience, punchout catalog integration for enterprise customers, automated reorder suggestions based on purchase history, and enhanced search with synonym handling and typo tolerance.
            </p>
            
            <h2 className="text-3xl font-bold text-charcoal mt-12 mb-6 eb-garamond">The Results</h2>
            
            <p className="text-charcoal/80 leading-relaxed mb-6">
              Within 18 months of launch, the e-commerce platform had transformed the business:
            </p>
            
            <p className="text-charcoal/80 leading-relaxed mb-6">
              <strong>Revenue Impact:</strong> Digital channels now drive 35% of total revenue, with $28M in annual sales flowing through the platform. More importantly, digital customers show 2.4x higher average order values than traditional channels.
            </p>
            
            <p className="text-charcoal/80 leading-relaxed mb-6">
              <strong>Customer Acquisition:</strong> The platform enabled the company to serve customers outside their traditional geographic footprint, adding 340 new accounts in the first year.
            </p>
            
            <p className="text-charcoal/80 leading-relaxed mb-6">
              <strong>Operational Efficiency:</strong> Order processing costs dropped 60% for digital orders compared to phone/fax orders. Customer service calls related to order status decreased 75%.
            </p>
            
            <p className="text-charcoal/80 leading-relaxed mb-6">
              <strong>Competitive Position:</strong> The company is now seen as a digital leader in their regional market, winning business from competitors who have been slower to digitize.
            </p>
            
            <h2 className="text-3xl font-bold text-charcoal mt-12 mb-6 eb-garamond">Key Success Factors</h2>
            
            <p className="text-charcoal/80 leading-relaxed mb-6">
              Several factors contributed to the success of this digital venture:
            </p>
            
            <p className="text-charcoal/80 leading-relaxed mb-6">
              <strong>Customer-Centric Design:</strong> By starting with deep customer research, we built features that customers actually wanted rather than features we assumed they needed.
            </p>
            
            <p className="text-charcoal/80 leading-relaxed mb-6">
              <strong>Iterative Approach:</strong> Launching with an MVP and iterating based on real usage data allowed us to avoid costly mistakes and focus investment on high-impact features.
            </p>
            
            <p className="text-charcoal/80 leading-relaxed mb-6">
              <strong>Executive Commitment:</strong> The CEO championed the initiative, ensuring adequate resources and organizational support throughout the journey.
            </p>
            
            <p className="text-charcoal/80 leading-relaxed mb-6">
              <strong>Change Management:</strong> We invested heavily in training and supporting the sales team, who initially feared the platform would cannibalize their commissions. By showing how digital could enhance rather than replace their relationships, we turned potential resistors into advocates.
            </p>
          </div>
        </div>
      </article>
      
      {/* Related Case Studies */}
      <section className="py-16 bg-subtle">
        <div className="container max-w-6xl">
          <h2 className="text-2xl font-bold text-charcoal mb-8 eb-garamond">Related Case Studies</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/cases/global-retailer-ecommerce" className="group">
              <div className="bg-white p-6 h-full hover:shadow-lg transition-shadow">
                <span className="text-xs font-semibold text-secondary uppercase tracking-wider">RETAIL</span>
                <h3 className="text-lg font-bold text-charcoal mt-3 mb-2 group-hover:text-primary transition-colors">
                  Global Retailer E-commerce Transformation
                </h3>
                <p className="text-sm text-muted-foreground">
                  How a specialty retailer built an omnichannel commerce platform.
                </p>
              </div>
            </Link>
            
            <Link href="/case-studies/retail-market-expansion" className="group">
              <div className="bg-white p-6 h-full hover:shadow-lg transition-shadow">
                <span className="text-xs font-semibold text-secondary uppercase tracking-wider">GROWTH</span>
                <h3 className="text-lg font-bold text-charcoal mt-3 mb-2 group-hover:text-primary transition-colors">
                  Retail Market Expansion Strategy
                </h3>
                <p className="text-sm text-muted-foreground">
                  Regional retailer's successful expansion into new markets.
                </p>
              </div>
            </Link>
            
            <Link href="/case-studies/saas-category-leadership" className="group">
              <div className="bg-white p-6 h-full hover:shadow-lg transition-shadow">
                <span className="text-xs font-semibold text-secondary uppercase tracking-wider">SAAS</span>
                <h3 className="text-lg font-bold text-charcoal mt-3 mb-2 group-hover:text-primary transition-colors">
                  SaaS Category Leadership
                </h3>
                <p className="text-sm text-muted-foreground">
                  How a software company achieved category leadership through product innovation.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-charcoal mb-4 eb-garamond">Ready to Build Your Digital Venture?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Our experts can help you launch and scale digital businesses within your organization.
          </p>
          <Link href="/contact">
            <button className="px-8 py-4 bg-primary text-white font-semibold hover:bg-base transition-colors">
              Schedule a Consultation
            </button>
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
