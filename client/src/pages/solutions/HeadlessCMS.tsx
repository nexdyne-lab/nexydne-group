import { Link } from "wouter";
import { ArrowRight, Zap, TrendingUp, Layers, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { RelatedContent } from "@/components/RelatedContent";
import { strategyRelatedItems } from "@/data/related-content";

export default function HeadlessCMS() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-base to-base text-white py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-1 bg-white/10 rounded-full text-sm mb-6">
                Digital Engagement / Headless CMS
              </div>
              <h1 className="text-5xl font-bold mb-3 eb-garamond">
                Headless CMS
              </h1>
            </div>
            <div>
              <p className="text-xl text-white/90 leading-relaxed">
                Still working with a traditional CMS? Go headless today and enjoy flexible, sustainable growth with content that adapts to any channel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-subtle">
        <div className="container">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Want to know more card */}
            <Card className="p-8 bg-white">
              <div className="w-24 h-24 rounded-full bg-blue-100 mb-6 mx-auto"></div>
              <h3 className="text-xl font-bold mb-4 text-center">Want to know more?</h3>
              <p className="text-center text-sm text-muted-foreground mb-6">
                Sarah Chen<br />
                Content Strategy Director
              </p>
              <Button className="w-full bg-primary hover:bg-primary/90 text-white transition-colors duration-200 ease-in-out">Ask Sarah Chen</Button>
            </Card>

            {/* Benefit cards */}
            <Card className="p-8 bg-white">
              <Zap className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Complete creative freedom</h3>
              <p className="text-muted-foreground">
                Shape your platform's look and feel. Headless architecture gives you maximum control over your user experience across every channel.
              </p>
            </Card>

            <Card className="p-8 bg-white">
              <TrendingUp className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Leap ahead of competition</h3>
              <p className="text-muted-foreground">
                Predict market shifts and leave competitors behind. A headless platform gives you ultimate flexibility to test new channels instantly.
              </p>
            </Card>

            <Card className="p-8 bg-white">
              <Layers className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">All-in-one omnichannel</h3>
              <p className="text-muted-foreground">
                Control all channels in one place. Enhanced customer experience: let your backend do the heavy lifting for web, mobile, IoT, and voice.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src="/headless-cms-hero.df9bd067.jpg"
                alt="Headless CMS Architecture"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">About headless CMS</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Headless architecture decouples your content from presentation, giving you complete freedom to deliver experiences anywhere. The result? A flexible infrastructure that scales with your growth and lets you launch new touchpoints without rebuilding your content foundation.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Driven by APIs, you can seamlessly integrate emerging technologies—AR, voice interfaces, IoT devices—with zero changes to your core architecture. We deliver smooth transitions to headless systems, empowering you to offer exceptional omnichannel experiences that drive real business outcomes.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Traditional CMS platforms lock you into rigid templates and monolithic architectures. Headless CMS liberates your content strategy, enabling your team to publish once and distribute everywhere—from web and mobile to digital signage and wearables—all managed from a single source of truth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-subtle">
        <div className="container max-w-4xl text-center">
          <blockquote className="text-3xl font-bold text-base mb-6">
            "Headless CMS: the architecture that turns content into your competitive advantage."
          </blockquote>
          <p className="text-lg text-muted-foreground">
            — Marcus Rivera, Chief Digital Officer
          </p>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold mb-12 text-center">Our headless CMS solutions</h2>
          <div className="space-y-8">
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-2xl font-bold mb-3">API-First Content Infrastructure</h3>
              <p className="text-lg text-muted-foreground">
                We architect headless systems with robust GraphQL and REST APIs that deliver content at scale. Your developers get clean, well-documented endpoints that make integration effortless across any frontend framework or platform.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-2xl font-bold mb-3">Omnichannel Content Orchestration</h3>
              <p className="text-lg text-muted-foreground">
                We build content workflows that span web, mobile, IoT, and emerging channels. Your content team publishes once while our orchestration layer handles distribution, localization, and personalization across every touchpoint automatically.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-2xl font-bold mb-3">Migration & Integration Excellence</h3>
              <p className="text-lg text-muted-foreground">
                We execute zero-downtime migrations from legacy CMS platforms to modern headless architectures. Our phased approach preserves your SEO equity, maintains content history, and trains your team on new workflows—all while keeping your site live.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Want to know more?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Sarah Chen<br />
                <span className="text-lg">Content Strategy Director</span>
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white transition-colors duration-200 ease-in-out">Get in touch</Button>
                <Button size="lg" variant="outline" className="border-primary text-charcoal hover:bg-primary hover:text-white transition-colors duration-200 ease-in-out">Schedule a meeting</Button>
              </div>
            </div>
            <div className="w-64 h-64 rounded-full bg-blue-200 ml-auto"></div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-3xl font-bold mb-4">Partners</h2>
          <p className="text-xl text-muted-foreground mb-12">Awesome partners turn dreams into reality</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <Card className="p-8 flex items-center justify-center">
              <span className="text-xl font-bold text-base">Contentful</span>
            </Card>
            <Card className="p-8 flex items-center justify-center">
              <span className="text-xl font-bold text-base">Contentstack</span>
            </Card>
            <Card className="p-8 flex items-center justify-center">
              <span className="text-xl font-bold text-base">Storyblok</span>
            </Card>
            <Card className="p-8 flex items-center justify-center">
              <span className="text-xl font-bold text-base">Sanity</span>
            </Card>
          </div>
        </div>
      </section>

      {/* Why NEXDYNE Section */}
      <section className="py-20 bg-subtle">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src="/headless-cms-why-nexdyne.4a5e13ca.jpg"
                alt="Why NEXDYNE"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">Why NEXDYNE</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Whether you're looking for a strategic partner, a boost for your digital transformation, or the ultimate content experience for your customers, you've come to the right place.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                With our headless CMS expertise, you'll always be one step ahead of the competition. We've delivered content platforms for Fortune 500 enterprises and fast-growing startups—architecting systems that handle millions of requests while keeping content teams productive.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white transition-colors duration-200 ease-in-out">Get in touch</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="container">
          <div className="mb-12">
            <p className="text-sm font-semibold text-muted-foreground mb-2">Cases</p>
            <h2 className="text-4xl font-bold mb-4">Cases we love talking about</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Heard of a business that transforms unique business challenges into exceptional outcomes? That'd be us. Check out these inspiring cases.
            </p>
            <Button className="bg-primary hover:bg-primary/90 text-white transition-colors duration-200 ease-in-out">All cases</Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/cases/media-headless-cms">
              <Card className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer">
                <img
                  src="/headless-cms-case-media.cfc393e5.jpg"
                  alt="Media Company Headless CMS"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Media Company Scales to 50M Monthly Readers</h3>
                  <p className="text-muted-foreground mb-4">
                    How a digital media publisher migrated to headless CMS and achieved 73% faster time-to-publish across 12 global markets.
                  </p>
                  <div className="flex items-center text-blue-600 font-semibold">
                    Read case study <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </div>
              </Card>
            </Link>

            <Link href="/cases/ecommerce-headless-cms">
              <Card className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer">
                <img
                  src="/headless-cms-case-ecommerce.d4135bfb.jpg"
                  alt="E-commerce Headless CMS"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Retailer Launches 6 New Channels in 8 Months</h3>
                  <p className="text-muted-foreground mb-4">
                    How an omnichannel retailer used headless CMS to power web, mobile, in-store kiosks, and voice commerce from one content hub.
                  </p>
                  <div className="flex items-center text-blue-600 font-semibold">
                    Read case study <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </div>
              </Card>
            </Link>

            <Link href="/cases/enterprise-headless-cms">
              <Card className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer">
                <img
                  src="/headless-cms-case-enterprise.0fec56e5.jpg"
                  alt="Enterprise Headless CMS"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Enterprise Reduces Content Ops Cost by 58%</h3>
                  <p className="text-muted-foreground mb-4">
                    How a global B2B company consolidated 47 regional sites into one headless platform and cut content management costs in half.
                  </p>
                  <div className="flex items-center text-blue-600 font-semibold">
                    Read case study <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </div>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Footer */}
      <section className="py-20 bg-white">
        <div className="container">
          <p className="text-sm font-semibold text-muted-foreground mb-4">Digital Engagement</p>
          <h2 className="text-3xl font-bold mb-12">Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/solutions/conversational-ai">
              <Card className="p-8 hover:shadow-lg transition-shadow cursor-pointer">
                <h3 className="text-xl font-bold mb-3 flex items-center justify-between">
                  Conversational AI
                  <ArrowRight className="w-5 h-5 text-blue-600" />
                </h3>
                <p className="text-muted-foreground">
                  Provide 24/7 customer support and smart interactions that understand customer needs.
                </p>
              </Card>
            </Link>

            <Link href="/solutions/mobile-apps">
              <Card className="p-8 hover:shadow-lg transition-shadow cursor-pointer">
                <h3 className="text-xl font-bold mb-3 flex items-center justify-between">
                  Mobile apps
                  <ArrowRight className="w-5 h-5 text-blue-600" />
                </h3>
                <p className="text-muted-foreground">
                  Bring your mobile app idea to life with NEXDYNE's iOS and Android services.
                </p>
              </Card>
            </Link>

            <Card className="p-8 bg-subtle">
              <h3 className="text-xl font-bold mb-3 flex items-center justify-between">
                Headless CMS
                <ArrowRight className="w-5 h-5 text-muted-foreground/70" />
              </h3>
              <p className="text-muted-foreground">
                Go headless today and enjoy flexible, sustainable growth with content that adapts to any channel.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <RelatedContent items={strategyRelatedItems} />
      <Footer />
    </div>
  );
}
