import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { RelatedContent } from "@/components/RelatedContent";
import { dataRelatedItems } from "@/data/related-content";

export default function CustomerInsights() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section - Maroon Background */}
      <section className="relative bg-gradient-to-br from-red-900 via-primary to-primary text-white py-20 md:py-28">
        <div className="container">
          <div className="mb-8">
            <div className="flex items-center gap-2 text-sm opacity-90">
              <Link href="/"><a className="hover:underline">Services</a></Link>
              <span>/</span>
              <Link href="/solutions/personalization"><a className="hover:underline">Personalization</a></Link>
              <span>/</span>
              <span>Customer Insights</span>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-4 eb-garamond">
                Customer Insights
              </h1>
            </div>
            
            <div>
              <p className="text-2xl md:text-3xl leading-relaxed">
                Refine the customer experience with Customer Experience Analytics: access key insights that reveal opportunities, boost conversion and deliver serious growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-[300px_1fr] gap-12 items-start">
            {/* Profile Photo and CTA */}
            <div className="flex flex-col items-center text-center">
              <div className="w-64 h-64 rounded-full overflow-hidden bg-gradient-to-br from-blue-400 to-blue-300 mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800" 
                  alt="David Park"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-2">Do you want to know more?</h3>
              <button className="border-2 border-primary text-charcoal px-8 py-3 rounded-full font-semibold hover:bg-primary hover:text-white transition-colors duration-200 ease-in-out">
                Ask David Park
              </button>
            </div>
            
            {/* Benefits Grid */}
            <div>
              <h2 className="text-4xl font-bold text-charcoal mb-12">The benefits of Customer Insights</h2>
              
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-charcoal mb-3">More loyal visitors</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Analyze and optimize your website to offer an improved user experience and convert visitors into repeat orders. Understand what drives loyalty and systematically remove friction points that cause customers to abandon their journey.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-charcoal mb-3">Insight into user behavior</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Discover where visitors drop off and optimize navigation to smooth out their journey and seriously raise conversion rates. Map every click, scroll, and hesitation to understand the true customer experience and identify high-impact improvement opportunities.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-charcoal mb-3">Decoding opportunities and risks</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Get a complete picture of customer behavior and reveal high-potential opportunities to maximize growth. Predictive analytics identify which customers are most likely to convert, churn, or expand—enabling proactive interventions that protect revenue and accelerate expansion.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-charcoal mb-3">Positive brand experience</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Treat visitors to a unique, user-friendly experience that strengthens your brand and leaves every customer with a smile on their face. Emotional analytics reveal sentiment patterns that inform design decisions, ensuring every interaction reinforces brand affinity and drives word-of-mouth growth.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Customer Insights Section */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold text-charcoal mb-8">About Customer Insights</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Customer Experience Analytics offers invaluable insights to optimize your website and deliver a unique user experience. By analyzing web data, you can reveal where visitors drop off, get frustrated or need more clarity. We use tools like Contentsquare to map website navigation and identify exactly when visitors drop off. That data feeds improvements to your website's technical performance and user experience,
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            helping you to improve the overall feel of the website. But we're not done yet. It also leads to repeat visitors and promotes a positive brand experience. Advanced customer insights platforms combine behavioral analytics, session replay, heatmaps, and AI-powered recommendations to surface the "why" behind customer actions—transforming raw data into strategic initiatives that drive measurable business outcomes.
          </p>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container max-w-4xl">
          <blockquote className="text-3xl md:text-4xl font-bold text-red-900 leading-relaxed mb-8">
            "At NEXDYNE, we make brands pop with smart, customer-focused solutions that deliver real impact."
          </blockquote>
          <p className="text-lg text-muted-foreground">
            David Park - Analytics Director | NEXDYNE
          </p>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold text-charcoal mb-8">Our approach to Customer Insights</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Our team of experts at NEXDYNE are at the cutting edge of user experience and data analysis. We don't take a purely quantitative approach to data; we contextualize it from the user's perspective. This lets us quickly identify which data is worth exploring in greater detail and which impacts less on the user experience.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Mastering all methodologies, our experts get to the bottom of <em>what</em> is happening and <em>why</em>. Insights have never looked so good. We combine quantitative metrics with qualitative research—user interviews, usability testing, and journey mapping—to build a complete picture of customer needs, motivations, and pain points that purely data-driven approaches miss.
          </p>
        </div>
      </section>

      {/* CTA Section with Profile Photo */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-blue-100 via-blue-50 to-pink-50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="w-80 h-80 rounded-full overflow-hidden bg-gradient-to-br from-blue-400 to-blue-300 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800" 
                  alt="David Park"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div>
              <h2 className="text-4xl font-bold text-charcoal mb-6">Do you want to know more?</h2>
              <p className="text-xl text-charcoal/80 mb-4">David Park</p>
              <p className="text-lg text-muted-foreground mb-8">Analytics Director</p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors duration-200 ease-in-out">
                  Get in touch
                </button>
                <button className="border-2 border-primary text-charcoal px-8 py-3 rounded-full font-semibold hover:bg-primary hover:text-white transition-colors duration-200 ease-in-out flex items-center gap-2">
                  Schedule a meeting
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
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
              <h2 className="text-4xl font-bold text-charcoal mb-6">Why NEXDYNE</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Whether you're looking for a strategic partner, a boost for your digital transformation, or the ultimate customer experience for your customers, you've come to the right place. With our next-generation digital solutions, you'll always be one step ahead of the competition. Our customer insights practice combines technical depth with business acumen—we don't just deliver dashboards, we drive decisions that measurably improve customer satisfaction, conversion rates, and lifetime value.
              </p>
              <button className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors duration-200 ease-in-out">
                Get in touch
              </button>
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
            <h2 className="text-4xl font-bold text-charcoal mb-4">
              Cases we love talking about
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Heard of a business that transforms unique business challenges into exceptional outcomes? That'd be us. Check out these inspiring cases.
            </p>
            <button className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors duration-200 ease-in-out">
              All cases
            </button>
          </div>
          
          {/* Case Cards Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-64 bg-gradient-to-br from-blue-400 to-blue-600">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" 
                  alt="E-commerce team collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-charcoal mb-4">
                  E-commerce retailer boosts conversion 47% with behavioral insights
                </h3>
                <p className="text-muted-foreground mb-6">
                  How do you transform anonymous visitors into loyal customers? This retailer did it with advanced analytics and personalized experiences.
                </p>
                <Link href="/cases/ecommerce-conversion-insights">
                  <a className="text-primary font-semibold hover:text-blue-700 flex items-center gap-2">
                    Read case study
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-64 bg-gradient-to-br from-green-400 to-green-600">
                <img 
                  src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=800" 
                  alt="Financial services analytics"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-charcoal mb-4">
                  Financial services firm reduces drop-off by 62% with journey analytics
                </h3>
                <p className="text-muted-foreground mb-6">
                  Complex onboarding was killing conversions. Journey mapping revealed the friction points—and the path to dramatic improvement.
                </p>
                <Link href="/cases/financial-journey-analytics">
                  <a className="text-primary font-semibold hover:text-blue-700 flex items-center gap-2">
                    Read case study
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-64 bg-gradient-to-br from-purple-400 to-purple-600">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" 
                  alt="SaaS analytics dashboard"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-charcoal mb-4">
                  SaaS platform increases trial-to-paid conversion 3.4x with predictive insights
                </h3>
                <p className="text-muted-foreground mb-6">
                  Predictive analytics identified which trial users would convert—enabling targeted interventions that dramatically improved outcomes.
                </p>
                <Link href="/cases/saas-predictive-insights">
                  <a className="text-primary font-semibold hover:text-blue-700 flex items-center gap-2">
                    Read case study
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 md:py-28 bg-white">
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
            <button className="border-2 border-primary text-charcoal px-8 py-3 rounded-full font-semibold hover:bg-primary hover:text-white transition-colors duration-200 ease-in-out">
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

      <RelatedContent items={dataRelatedItems} />
      <Footer />
    </div>
  );
}
