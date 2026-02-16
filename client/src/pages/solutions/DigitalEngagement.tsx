import { motion } from "framer-motion";
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, MessageSquare, Smartphone, Users, Zap, ChevronRight } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { RelatedContent } from "@/components/RelatedContent";
import { dataRelatedItems } from "@/data/related-content";

export default function DigitalEngagement() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section - Black Background (matches IntelligentProcessOptimization) */}
      <section className="relative min-h-[70vh] md:min-h-[80vh] bg-black pt-20">
        <div className="container px-4 sm:px-6 md:px-12 h-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-0 items-center min-h-[60vh] md:min-h-[70vh]">
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-xl py-12 lg:py-0 lg:pr-12"
            >
              {/* Breadcrumb */}
              <nav className="flex items-center space-x-2 text-sm text-white/50 mb-8">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <ChevronRight className="w-3 h-3" />
                <Link href="/solutions" className="hover:text-white transition-colors">Solutions</Link>
                <ChevronRight className="w-3 h-3" />
                <span className="text-white/70">Digital Engagement</span>
              </nav>

              <h1 className="text-4xl sm:text-5xl md:text-6xl eb-garamond tracking-tight text-white leading-[1.1] mb-3">
                Digital Engagement
              </h1>

              <p className="text-lg md:text-xl text-white/70 leading-relaxed italic">
                Build meaningful customer relationships through intelligent, omnichannel engagement at every touchpoint.
              </p>
            </motion.div>

            {/* Right Column - Hero Image */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative h-[300px] sm:h-[400px] lg:h-full lg:absolute lg:right-0 lg:top-0 lg:w-1/2"
            >
              <img
                src="/digital-engagement-hero.5ffb7f81.jpg"
                alt="Digital Engagement - Omnichannel customer experience"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent lg:block hidden" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* What we do Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="/digital-engagement-hero.5ffb7f81.jpg" 
                alt="Customer engagement strategy" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 eb-garamond">What we do</h2>
              <p className="text-lg leading-relaxed mb-6">
                Want to build and consolidate deep customer relationships across all channels through targeted interactions? Digital Engagement is what you need. Customers expect speed and relevant results. That's why a smart engagement strategy zooms in on preferences and behavior. By delivering targeted interactions at just the right moment, Digital Engagement takes customer satisfaction and brand loyalty to new heights.
              </p>
              <p className="text-lg leading-relaxed">
                NEXDYNE architects omnichannel engagement platforms that unify customer touchpoints—mobile apps, web portals, email, SMS, push notifications, and conversational AI. Our solutions combine real-time behavioral triggers, predictive analytics, and dynamic content personalization to ensure every interaction feels relevant, timely, and valuable. Whether you're launching a customer loyalty program, building a mobile-first experience, or implementing conversational AI for support, we design engagement systems that drive measurable improvements in retention, satisfaction, and lifetime value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <p className="text-sm font-semibold text-muted-foreground mb-4">Digital Engagement</p>
              <h2 className="text-3xl font-bold mb-8 eb-garamond">Services</h2>
              
              <Card className="p-8 bg-background">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-primary-foreground">?</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Do you want to know more?</h3>
                    <Button className="mb-4">Get in touch</Button>
                    <Link href="#schedule" className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-2">
                      Schedule a meeting
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </Card>
            </div>

            <div className="space-y-6">
              <Link href="/solutions/conversational-ai" className="block group">
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">Conversational AI</h3>
                      <p className="text-muted-foreground">
                        Provide 24/7 customer support and smart interactions that understand customer needs. Conversational AI takes your customer experience to the next level.
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
                  </div>
                </Card>
              </Link>

              <Link href="/solutions/mobile-apps" className="block group">
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">Mobile apps</h3>
                      <p className="text-muted-foreground">
                        Bring your mobile app idea to life with NEXDYNE's iOS and Android services that deliver seamless, engaging experiences customers love.
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
                  </div>
                </Card>
              </Link>

              <Link href="/solutions/headless-cms" className="block group">
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">Headless CMS</h3>
                      <p className="text-muted-foreground">
                        Still working with a traditional CMS? Go headless today and enjoy flexible, sustainable growth with content that adapts to any channel.
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
                  </div>
                </Card>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#FFE5D9]">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 eb-garamond">Want to know more?</h2>
              <p className="text-lg mb-8">
                Let's discuss how digital engagement can transform your customer relationships and drive measurable business outcomes.
              </p>
            </div>
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-2xl font-bold flex-shrink-0">
                SC
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">Sarah Chen</h3>
                <p className="text-muted-foreground mb-3">Chief Analytics Officer</p>
                <div className="flex gap-3">
                  <Button>Get in touch</Button>
                  <Button variant="outline">Schedule a meeting</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <p className="text-sm font-semibold text-muted-foreground mb-4">Partners</p>
          <h2 className="text-3xl font-bold mb-4 eb-garamond">Awesome partners turn dreams into reality</h2>
          <p className="text-lg text-muted-foreground mb-12">With these technologies we build digital engagement platforms</p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold">Contentful</h3>
            </Card>
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold">Storyblok</h3>
            </Card>
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold">Contentstack</h3>
            </Card>
          </div>

          <Link href="/partners">
            <Button variant="outline">All partners</Button>
          </Link>
        </div>
      </section>

      {/* Why NEXDYNE Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="/digital-engagement-why-nexdyne.38489b67.jpg" 
                alt="Why NEXDYNE" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 eb-garamond">Why NEXDYNE</h2>
              <p className="text-lg leading-relaxed mb-6">
                Whether you're looking for a strategic partner, a boost for your digital transformation, or the ultimate customer experience for your customers, you've come to the right place. With our next-generation digital solutions, you'll always be one step ahead of the competition.
              </p>
              <p className="text-lg leading-relaxed mb-8">
                NEXDYNE combines deep expertise in customer engagement platforms with proven implementation methodologies that minimize risk and accelerate time-to-value. Our engagement solutions leverage cutting-edge technologies—conversational AI, real-time personalization, omnichannel orchestration—while maintaining the flexibility to evolve as customer expectations shift. With NEXDYNE, digital engagement becomes your competitive advantage.
              </p>
              <Button>Get in touch</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section className="py-20 bg-[#E8F4F8]">
        <div className="container">
          <p className="text-sm font-semibold text-muted-foreground mb-4">Cases</p>
          <h2 className="text-3xl font-bold mb-4 eb-garamond">Cases we love talkin' about</h2>
          <p className="text-lg text-muted-foreground mb-12">
            Heard of a business that transforms customer engagement into competitive advantage? That'd be us. Check out these inspiring cases.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Link href="/cases/retail-omnichannel" className="block group">
              <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                <img 
                  src="/digital-engagement-case-retail.97f87b05.jpg" 
                  alt="Retail Omnichannel Engagement" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    Retailer Increases Customer Engagement by 156% with Omnichannel Platform
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Mobile-first engagement strategy drives 43% increase in app usage and 31% boost in customer lifetime value through personalized experiences.
                  </p>
                  <Button variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    Read case study
                  </Button>
                </div>
              </Card>
            </Link>

            <Link href="/cases/banking-mobile-engagement" className="block group">
              <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                <img 
                  src="/digital-engagement-case-banking.a7d48e8c.jpg" 
                  alt="Banking Mobile Engagement" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    Bank Transforms Digital Experience with AI-Powered Mobile App
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Conversational AI and proactive notifications reduce call center volume by 38% while improving customer satisfaction scores by 27 points.
                  </p>
                  <Button variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    Read case study
                  </Button>
                </div>
              </Card>
            </Link>

            <Link href="/cases/hospitality-guest-experience" className="block group">
              <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                <img 
                  src="/digital-engagement-case-hospitality.829438cc.jpg" 
                  alt="Hospitality Guest Experience" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    Hotel Chain Elevates Guest Experience Through Digital Engagement
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Personalized mobile concierge service increases guest satisfaction by 34% and drives 52% growth in ancillary revenue per stay.
                  </p>
                  <Button variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    Read case study
                  </Button>
                </div>
              </Card>
            </Link>
          </div>

          <Link href="/cases">
            <Button>All cases</Button>
          </Link>
        </div>
      </section>

      {/* Services Footer Navigation */}
      <section className="py-16 bg-background border-t">
        <div className="container">
          <h2 className="text-2xl font-bold mb-8 eb-garamond">SERVICES</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            <Link href="/solutions/process-automation" className="text-muted-foreground hover:text-foreground transition-colors">
              Process Automation
            </Link>
            <Link href="/solutions/app-development" className="text-muted-foreground hover:text-foreground transition-colors">
              App Development
            </Link>
            <Link href="/solutions/customer-intelligence" className="text-muted-foreground hover:text-foreground transition-colors">
              Data-Driven Customer Intelligence
            </Link>
            <Link href="/solutions/digital-engagement" className="text-foreground font-semibold">
              Digital Engagement
            </Link>
            <Link href="/solutions/ecommerce" className="text-muted-foreground hover:text-foreground transition-colors">
              E-commerce
            </Link>
            <Link href="/solutions/agentic-ai" className="text-muted-foreground hover:text-foreground transition-colors">
              Agentic AI
            </Link>
          </div>
        </div>
      </section>

      <RelatedContent items={dataRelatedItems} />
      <Footer />
    </div>
  );
}
