import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { RelatedContent } from "@/components/RelatedContent";
import { dataRelatedItems } from "@/data/related-content";

export default function CustomerDataPlatform() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section - Maroon Background */}
      <section className="relative bg-gradient-to-br from-red-900 via-[#2D5BFF] to-[#4169FF] text-white py-20 md:py-28">
        <div className="container">
          <div className="mb-8">
            <div className="flex items-center gap-2 text-sm opacity-90">
              <Link href="/"><a className="hover:underline">Services</a></Link>
              <span>/</span>
              <Link href="/solutions/personalization"><a className="hover:underline">Personalization</a></Link>
              <span>/</span>
              <span>Customer data platform (CDP)</span>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-4 eb-garamond">
                Customer data platform (CDP)
              </h1>
            </div>
            
            <div>
              <p className="text-2xl md:text-3xl leading-relaxed">
                Customer Data Platform: one central customer profile for data-driven marketing and sales that deliver.
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
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800" 
                  alt="Marcus Rivera"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Do you want to know more?</h3>
              <button className="border-2 border-slate-900 text-slate-900 px-8 py-3 rounded-full font-semibold hover:bg-slate-900 hover:text-white transition-colors">
                Ask Marcus Rivera
              </button>
            </div>
            
            {/* Benefits Grid */}
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-12">The benefits</h2>
              
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">Central customer profile</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Merge diverse customer data into one comprehensive profile and give your teams precise insights. Eliminate data silos and create a single source of truth that powers every customer interaction across marketing, sales, and service.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">Personalization and targeted marketing</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Achieve high-precision segmentation and personalized interactions. Greatly enhance the relevance and impact of marketing and sales campaigns. Deliver the right message to the right customer at exactly the right moment across every channel.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">Real-time insights and response</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Let companies instantly respond to changing customer behavior. The result? More relevance in customer interactions and an awesome customer experience. Trigger automated campaigns based on real-time signals that drive immediate action.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">Customer lifecycle optimization</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Help to spot opportunities at every point in the customer lifecycle. This drives growth and customer satisfaction. Identify at-risk customers before they churn and discover upsell opportunities at precisely the right moment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About CDP Section */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold text-slate-900 mb-8">About Customer Data Platforms (CDP)</h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            A Customer Data Platform (CDP) gathers customer data from multiple sources to create a central, comprehensive profile. This lets you segment customers accurately and make data-driven decisions on solid ground, enabling personalized interactions. A CDP also guarantees secure, compliant data processing, which is non-negotiable in an environment reliant on customer trust.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed">
            Modern CDPs go beyond simple data aggregation—they provide real-time identity resolution, predictive analytics, and activation capabilities that connect directly to marketing automation, advertising platforms, and customer service tools. This unified approach eliminates the complexity of managing dozens of point solutions while ensuring every team works from the same customer truth.
          </p>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container max-w-4xl">
          <blockquote className="text-3xl md:text-4xl font-bold text-red-900 leading-relaxed mb-8">
            "Our data linking expertise delivers personalized, real-time interactions that enhance the customer experience and unlock growth opportunities."
          </blockquote>
          <p className="text-lg text-slate-600">
            Marcus Rivera - Director of Customer Intelligence | NEXDYNE
          </p>
        </div>
      </section>

      {/* Our CDP Solution Section */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold text-slate-900 mb-8">Our CDP solution</h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            At NEXDYNE, we leverage CDPs as part of a broader data strategy, integrating various data sources to create a complete customer profile. Our data integration and analysis expertise seamlessly link CDP solutions to your systems, ensuring fast and secure availability of customer data from every channel. This integration helps you create personalized interactions and make smart, data-driven decisions that bring your brand closer to your customers.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed">
            We don't just implement technology—we design customer data architectures that scale with your business, maintain compliance across jurisdictions, and deliver measurable ROI. Our CDP implementations include data governance frameworks, identity resolution strategies, and activation playbooks that ensure your teams can immediately leverage unified customer profiles to drive revenue and retention.
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
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800" 
                  alt="Marcus Rivera"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Do you want to know more?</h2>
              <p className="text-xl text-slate-700 mb-4">Marcus Rivera</p>
              <p className="text-lg text-slate-600 mb-8">Director of Customer Intelligence</p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-slate-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-slate-800 transition-colors">
                  Get in touch
                </button>
                <button className="border-2 border-slate-900 text-slate-900 px-8 py-3 rounded-full font-semibold hover:bg-slate-900 hover:text-white transition-colors flex items-center gap-2">
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
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Why NEXDYNE</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Whether you're looking for a strategic partner, a boost for your digital transformation, or the ultimate customer experience for your customers, you've come to the right place. With our next-generation digital solutions, you'll always be one step ahead of the competition.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Our CDP implementations combine technical excellence with business pragmatism—we focus on use cases that deliver immediate value while building the foundation for long-term customer intelligence capabilities. From identity resolution to predictive modeling, we ensure your CDP investment drives measurable business outcomes.
              </p>
              <button className="bg-slate-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-slate-800 transition-colors">
                Get in touch
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="container">
          <div className="mb-12">
            <p className="text-sm uppercase tracking-wider text-slate-500 font-semibold mb-2">
              Partners
            </p>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Awesome partners turn dreams into reality
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              With these partners we realize our personalization solutions
            </p>
            <button className="border-2 border-slate-900 text-slate-900 px-8 py-3 rounded-full font-semibold hover:bg-slate-900 hover:text-white transition-colors">
              All partners
            </button>
          </div>
          
          {/* Partner Cards Grid */}
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg border border-slate-200 hover:border-blue-500 hover:shadow-lg transition-all">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Bloomreach</h3>
              <p className="text-slate-600">
                Commerce experience cloud combining CDP, search, merchandising, and content in one platform—powering personalized digital experiences that drive revenue.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg border border-slate-200 hover:border-blue-500 hover:shadow-lg transition-all">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Commercetools</h3>
              <p className="text-slate-600">
                Headless commerce platform enabling brands to create unique, personalized shopping experiences across every touchpoint with API-first architecture.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg border border-slate-200 hover:border-blue-500 hover:shadow-lg transition-all">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Tweakwise</h3>
              <p className="text-slate-600">
                Search, merchandising, and personalization platform that optimizes product discovery and increases conversion through intelligent recommendations.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg border border-slate-200 hover:border-blue-500 hover:shadow-lg transition-all">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Sitecore</h3>
              <p className="text-slate-600">
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
