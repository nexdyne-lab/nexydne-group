import { Link } from 'wouter';
import { ArrowRight, Mail, Calendar } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { RelatedContent } from "@/components/RelatedContent";
import { dataRelatedItems } from "@/data/related-content";

export default function DigitalExperiencePlatform() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary to-secondary text-white py-20">
        <div className="container">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm mb-12 text-white/80">
            <Link href="/" className="hover:text-white transition-colors">
              Services
            </Link>
            <span>/</span>
            <Link href="/solutions/personalization" className="hover:text-white transition-colors">
              Personalization
            </Link>
            <span>/</span>
            <span className="text-white">Digital Experience Platform</span>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-3 leading-tight eb-garamond">
                Digital Experience Platform
              </h1>
            </div>
            <div>
              <p className="text-xl leading-relaxed text-white/90">
                A Digital Experience Platform marks the next smart step in your digital evolution. Discover the power of DXP and unbeatable integration with NEXDYNE.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <div className="grid md:grid-cols-[300px_1fr] gap-12">
            {/* Contact Person */}
            <div className="flex flex-col items-center text-center">
              <div className="w-48 h-48 rounded-full overflow-hidden mb-6 bg-gradient-to-br from-blue-400 to-blue-600">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" 
                  alt="Michael Torres" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Do you want to know more?</h3>
              <button className="px-6 py-2 border-2 border-slate-900 rounded-full hover:bg-slate-900 hover:text-white transition-colors">
                Ask Michael Torres
              </button>
            </div>

            {/* Benefits Cards */}
            <div>
              <h2 className="text-4xl font-bold mb-12">The benefits of Digital Experience Platform</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-8 rounded-lg border border-slate-200">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <div className="w-6 h-6 bg-blue-500 rounded"></div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Omnichannel consistency</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Delivers seamless, unified experiences across web, mobile, IoT, and emerging channels—ensuring brand consistency wherever customers engage.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-lg border border-slate-200">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <div className="w-6 h-6 bg-blue-500 rounded"></div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Integrated capabilities</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Combines content management, commerce, personalization, and analytics in one platform—eliminating silos and enabling coordinated experiences.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-lg border border-slate-200">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <div className="w-6 h-6 bg-blue-500 rounded"></div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Faster time-to-market</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Empowers marketing teams to launch campaigns and experiences without IT bottlenecks—accelerating innovation and responsiveness.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-lg border border-slate-200">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <div className="w-6 h-6 bg-blue-500 rounded"></div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Real-time personalization</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Adapts content, offers, and journeys dynamically based on customer behavior and context—maximizing relevance and conversion at every touchpoint.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About DXP Section */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold mb-8 text-center">About Digital Experience Platforms (DXP)</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground leading-relaxed text-lg mb-6">
              A Digital Experience Platform (DXP) gives organizations the tools to offer personalized and consistent customer experiences on every channel and touchpoint. A DXP offers a winning combo of features, including content management, e-commerce, personalization and data analysis. It makes it super-easy to centrally manage customer interactions and tailor them to what customers truly want. Perfect for omnichannel strategies that give customers a seamless, relevant experience. Whatever the channel.
            </p>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 bg-slate-50">
        <div className="container max-w-4xl text-center">
          <blockquote className="text-3xl font-medium text-destructive mb-6">
            "We combine MACH architecture with a powerful, integrated DXP platform, maximizing flexibility."
          </blockquote>
          <p className="text-muted-foreground">
            Michael Torres - Director of Platform Engineering | Customer Intelligence
          </p>
        </div>
      </section>

      {/* Our DXP Solution Section */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold mb-8 text-center">Our Digital Experience Platform solution</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground leading-relaxed text-lg">
              At NEXDYNE, we offer custom DXP solutions that are perfectly aligned with your organization's business goals. We streamline content management, integrate content commerce, personalize interactions and leverage customer insights to help you make the most effective decisions. With a strong focus on scalability and flexibility, our DXP solutions empower businesses to quickly adapt to evolving market conditions and respond to changing customer needs like a boss. That's the power of NEXDYNE.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-100 via-peach-100 to-blue-50">
        <div className="container">
          <div className="grid md:grid-cols-[300px_1fr] gap-12 items-center">
            {/* Profile Photo */}
            <div className="flex justify-center">
              <div className="w-64 h-64 rounded-full overflow-hidden bg-gradient-to-br from-blue-400 to-blue-600">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop" 
                  alt="Michael Torres" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* CTA Content */}
            <div>
              <h2 className="text-4xl font-bold mb-6">Do you want to know more?</h2>
              <p className="text-xl mb-2 font-semibold">Michael Torres</p>
              <p className="text-lg text-muted-foreground mb-8">Director of Platform Engineering</p>
              
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors duration-200 ease-in-out flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  Get in touch
                </button>
                <button className="px-8 py-3 border-2 border-primary text-charcoal rounded-full hover:bg-primary hover:text-white transition-colors duration-200 ease-in-out flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Schedule a meeting
                  <ArrowRight className="w-5 h-5" />
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
            {/* Image */}
            <div className="rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop" 
                alt="Modern office building" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div>
              <h2 className="text-4xl font-bold mb-6">Why NEXDYNE</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Whether you're looking for a strategic partner, a boost for your digital transformation, or the ultimate customer experience for your customers, you've come to the right place. With our next-generation digital solutions, you'll always be one step ahead of the competition.
              </p>
              <button className="px-8 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors duration-200 ease-in-out">
                Get in touch
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <div className="mb-12">
            <p className="text-sm uppercase tracking-wider text-muted-foreground mb-4">Partners</p>
            <h2 className="text-4xl font-bold mb-4">Awesome partners turn dreams into reality</h2>
            <p className="text-lg text-muted-foreground mb-8">
              With these partners we realize our personalization solutions
            </p>
            <button className="px-6 py-2 border-2 border-primary text-charcoal rounded-full hover:bg-primary hover:text-white transition-colors duration-200 ease-in-out">
              All partners
            </button>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-8 rounded-lg border border-slate-200 flex flex-col items-center justify-center min-h-[200px]">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-2xl font-bold">B</span>
              </div>
              <h3 className="text-xl font-semibold text-destructive">Bloomreach</h3>
            </div>

            <div className="bg-white p-8 rounded-lg border border-slate-200 flex flex-col items-center justify-center min-h-[200px]">
              <h3 className="text-xl font-semibold text-destructive">Commercetools</h3>
            </div>

            <div className="bg-white p-8 rounded-lg border border-slate-200 flex flex-col items-center justify-center min-h-[200px]">
              <h3 className="text-xl font-semibold text-blue-500">Tweakwise</h3>
            </div>

            <div className="bg-white p-8 rounded-lg border border-slate-200 flex flex-col items-center justify-center min-h-[200px]">
              <div className="w-16 h-16 bg-blue-500 rounded-full mb-4"></div>
              <h3 className="text-xl font-semibold text-destructive">Sitecore</h3>
            </div>
          </div>
        </div>
      </section>

      <RelatedContent items={dataRelatedItems} />
      <Footer />
    </div>
  );
}
