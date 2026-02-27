import { Link } from 'wouter';
import { ArrowRight, Mail, Calendar } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { RelatedContent } from "@/components/RelatedContent";
import { dataRelatedItems } from "@/data/related-content";

export default function CustomerJourneyMap() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-destructive to-base text-white py-24">
        <div className="container">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm mb-12 text-white/80">
            <Link href="/" className="hover:text-white transition-colors">Services</Link>
            <span>/</span>
            <Link href="/solutions/personalization" className="hover:text-white transition-colors">Personalization</Link>
            <span>/</span>
            <span className="text-white">Customer Journey Map</span>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-3 leading-tight eb-garamond">
                Customer Journey Map
              </h1>
            </div>
            <div>
              <p className="text-xl text-white/90 leading-relaxed">
                Understand your customer at every step with a clever Customer Journey Map. Reveal valuable insights and deliver customer-focused interactions at every touchpoint.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <div className="grid md:grid-cols-12 gap-12">
            {/* Left: Profile Photo */}
            <div className="md:col-span-4">
              <div className="sticky top-8">
                <div className="w-64 h-64 rounded-full overflow-hidden mb-6 bg-gradient-to-br from-blue-400 to-blue-600">
                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop"
                    alt="Rachel Foster"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4">Do you want to know more?</h3>
                <button className="px-6 py-3 border-2 border-slate-900 rounded-full hover:bg-slate-900 hover:text-white transition-all">
                  Ask Rachel Foster
                </button>
              </div>
            </div>

            {/* Right: Benefits Cards */}
            <div className="md:col-span-8">
              <h2 className="text-4xl font-bold mb-12">The benefits of Customer Journey Map</h2>
              
              <div className="space-y-8">
                {/* Benefit 1 */}
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center">
                    <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Customer-focused insights</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Provides precise insights into customers' priorities and brand experience, revealing what matters most at each stage of their journey.
                    </p>
                  </div>
                </div>

                {/* Benefit 2 */}
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center">
                    <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Identify pain points and opportunities</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Visualizes problems and potential improvements throughout the customer journey, pinpointing exactly where friction occurs and where value can be added.
                    </p>
                  </div>
                </div>

                {/* Benefit 3 */}
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center">
                    <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Touchpoint optimization</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Makes every interaction relevant and meaningful, giving customers what they really want at the precise moment they need it.
                    </p>
                  </div>
                </div>

                {/* Benefit 4 */}
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center">
                    <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Data-driven decisions</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Supports strategic choices with deep insights into customer behavior and expectations, enabling confident investment in high-impact improvements.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold mb-8 text-center">About Customer Journey Mapping</h2>
          <div className="prose prose-lg max-w-none text-charcoal/80 leading-relaxed">
            <p className="text-xl mb-6">
              Customer journey mapping gives you a fresh perspective on your customers' true brand experience. It maps each step of the customer experience to reveal what customers like and dislike. Data analysis and customer insights point you toward opportunities to make interactions more personal and valuable. The result? Meaningful interactions at every touchpoint, boosting customer satisfaction and loyalty.
            </p>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-slate-50">
        <div className="container max-w-4xl text-center">
          <blockquote className="text-3xl md:text-4xl font-bold text-destructive mb-8 leading-relaxed">
            "Thanks to the latest data technologies, customer journey mapping has never been more effective or relevant."
          </blockquote>
          <p className="text-xl text-muted-foreground">
            Rachel Foster - Director of Experience Design | Customer Intelligence
          </p>
        </div>
      </section>

      {/* Our Solution Section */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold mb-8 text-center">Our Customer Journey Mapping solution</h2>
          <div className="prose prose-lg max-w-none text-charcoal/80 leading-relaxed">
            <p className="text-xl mb-6">
              At NEXDYNE, we help organizations develop these customer-focused visualizations with deep data insights and analysis tools. Our approach is focused on identifying pivotal moments in the customer experience. And it works: we help you improve current interactions and effectively anticipate future customer expectations. The result? Meaningful interactions at every touchpoint, boosting customer engagement and loyalty.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-100 to-peach-100">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            {/* Left: Profile Photo */}
            <div className="flex justify-center md:justify-start">
              <div className="w-80 h-80 rounded-full overflow-hidden bg-gradient-to-br from-blue-400 to-blue-600">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&h=500&fit=crop"
                  alt="Rachel Foster"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right: CTA Content */}
            <div>
              <h2 className="text-4xl font-bold mb-6">Do you want to know more?</h2>
              <p className="text-2xl font-semibold mb-2">Rachel Foster</p>
              <p className="text-xl text-muted-foreground mb-8">Director of Experience Design</p>
              
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-slate-900 text-white rounded-full hover:bg-slate-800 transition-all flex items-center gap-2 text-lg font-semibold">
                  <Mail className="w-5 h-5" />
                  Get in touch
                </button>
                <button className="px-8 py-4 border-2 border-slate-900 rounded-full hover:bg-slate-900 hover:text-white transition-all flex items-center gap-2 text-lg font-semibold">
                  Schedule a meeting
                  <Calendar className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why NEXDYNE Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Building Image */}
            <div className="rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop"
                alt="NEXDYNE Office"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right: Content */}
            <div>
              <h2 className="text-4xl font-bold mb-6">Why NEXDYNE</h2>
              <p className="text-xl text-charcoal/80 leading-relaxed mb-8">
                Whether you're looking for a strategic partner, a boost for your digital transformation, or the ultimate customer experience for your customers, you've come to the right place. With our next-generation digital solutions, you'll always be one step ahead of the competition.
              </p>
              <button className="px-8 py-4 bg-slate-900 text-white rounded-full hover:bg-slate-800 transition-all text-lg font-semibold">
                Get in touch
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <div className="grid md:grid-cols-12 gap-12">
            {/* Left: Content */}
            <div className="md:col-span-4">
              <p className="text-sm uppercase tracking-wider text-muted-foreground mb-4">Partners</p>
              <h2 className="text-4xl font-bold mb-6">Awesome partners turn dreams into reality</h2>
              <p className="text-lg text-muted-foreground mb-8">
                With these partners we realize our personalization solutions
              </p>
              <button className="px-6 py-3 border-2 border-slate-900 rounded-full hover:bg-slate-900 hover:text-white transition-all">
                All partners
              </button>
            </div>

            {/* Right: Partner Cards */}
            <div className="md:col-span-8">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Partner 1 */}
                <div className="bg-white p-8 rounded-xl border border-slate-200 flex items-center justify-center h-64">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-3xl font-bold">B</span>
                    </div>
                    <h3 className="text-2xl font-bold text-destructive">Bloomreach</h3>
                  </div>
                </div>

                {/* Partner 2 */}
                <div className="bg-white p-8 rounded-xl border border-slate-200 flex items-center justify-center h-64">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                      <svg className="w-full h-full text-blue-500" viewBox="0 0 100 100" fill="currentColor">
                        <path d="M50 10 L90 30 L90 70 L50 90 L10 70 L10 30 Z" stroke="currentColor" strokeWidth="3" fill="none"/>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-destructive">Commercetools</h3>
                  </div>
                </div>

                {/* Partner 3 */}
                <div className="bg-white p-8 rounded-xl border border-slate-200 flex items-center justify-center h-64">
                  <div className="text-center">
                    <h3 className="text-3xl font-bold text-blue-500">Tweakwise</h3>
                  </div>
                </div>

                {/* Partner 4 */}
                <div className="bg-white p-8 rounded-xl border border-slate-200 flex items-center justify-center h-64">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 bg-blue-500 rounded-full flex items-center justify-center">
                      <svg className="w-16 h-16 text-white" viewBox="0 0 100 100" fill="currentColor">
                        <circle cx="50" cy="50" r="40" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-destructive">Sitecore</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RelatedContent items={dataRelatedItems} />
      <Footer />
    </div>
  );
}
