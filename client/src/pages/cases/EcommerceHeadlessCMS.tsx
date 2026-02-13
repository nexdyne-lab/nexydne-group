import { Link } from "wouter";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function EcommerceHeadlessCMS() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      {/* Navigation Breadcrumb */}
      <div className="border-b">
        <div className="container py-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">Home</Link>
            <span>/</span>
            <Link href="/solutions/customer-intelligence" className="hover:text-foreground">Data-Driven Customer Intelligence</Link>
            <span>/</span>
            <Link href="/solutions/digital-engagement" className="hover:text-foreground">Digital Engagement</Link>
            <span>/</span>
            <Link href="/solutions/headless-cms" className="hover:text-foreground">Headless CMS</Link>
            <span>/</span>
            <span className="text-foreground">Retailer Case Study</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <Link href="/solutions/headless-cms" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Headless CMS
          </Link>
          
          <h1 className="text-5xl font-bold mb-3">
            Omnichannel Retailer Launches 6 New Channels in 8 Months
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8">
            How a national retailer used headless CMS to power web, mobile app, in-store kiosks, voice commerce, and digital signage from one content hub—increasing revenue per customer by 47%.
          </p>

          <img
            src="/headless-cms-case-ecommerce.d4135bfb.jpg"
            alt="Retailer Omnichannel Headless CMS"
            className="w-full rounded-lg shadow-xl mb-12"
          />

          {/* Challenge */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">The Challenge</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              A national home goods retailer with 340 stores was losing market share to digital-native competitors. Their e-commerce platform, in-store systems, and mobile app all ran on separate content management systems, creating inconsistent product information and forcing merchandising teams to update content in three different places.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              The fragmented architecture made omnichannel initiatives nearly impossible. When the company wanted to launch in-store kiosks for endless aisle shopping, they discovered it would require building yet another content system. Voice commerce through Alexa and Google Assistant wasn't even on the roadmap because the technical complexity seemed insurmountable.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Most critically, the merchandising team couldn't execute coordinated campaigns across channels. A product promotion on the website wouldn't appear in stores for days, and mobile app content was perpetually out of sync. The company needed a unified content platform that could power all current and future customer touchpoints from a single source of truth.
            </p>
          </div>

          {/* Solution */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">The Solution</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              NEXDYNE designed a headless commerce architecture using Contentstack as the content hub, integrated with the retailer's existing Shopify Plus e-commerce platform. We created a unified product information model that served web, mobile, in-store kiosks, voice assistants, and digital signage through a single GraphQL API.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Our content orchestration layer enabled merchandisers to publish once and distribute everywhere. Product descriptions, images, videos, styling tips, and promotional content automatically flowed to all channels with channel-specific optimizations—long-form content for web, concise descriptions for voice, and high-resolution imagery for in-store displays.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              We built custom integrations that synchronized inventory data in real-time, ensuring customers saw accurate product availability regardless of channel. The in-store kiosk system let customers browse the full catalog, check inventory across locations, and order for home delivery—all powered by the same content infrastructure as the website.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our training program equipped 85 merchandising staff with skills to manage omnichannel content efficiently. We created workflow automation that reduced content publishing time by 68% while maintaining brand consistency across all customer touchpoints.
            </p>
          </div>

          {/* Results */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">The Results</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="p-6 text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">47%</div>
                <div className="text-sm text-muted-foreground">Revenue per customer increase</div>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">6</div>
                <div className="text-sm text-muted-foreground">New channels launched in 8 months</div>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">68%</div>
                <div className="text-sm text-muted-foreground">Faster content publishing</div>
              </Card>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              The headless CMS transformation unlocked true omnichannel retail. Within eight months, the retailer launched in-store kiosks (340 locations), voice commerce on Alexa and Google Assistant, a redesigned mobile app, digital signage in stores, and an AR furniture visualization tool—all powered by the same content platform.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Customer behavior shifted dramatically. In-store kiosk orders accounted for $42M in annual revenue from products not stocked in physical locations. Voice commerce adoption exceeded projections by 230%, with customers using Alexa to reorder frequently purchased items. The mobile app saw 156% growth in monthly active users after the redesign.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The business impact was transformative: average order value increased 34% as customers discovered products across channels, customer lifetime value grew 47% with improved engagement, and the company reduced content operations costs by $2.1M annually. Most importantly, the retailer regained competitive advantage—launching new customer experiences in weeks instead of months while competitors struggled with legacy systems.
            </p>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-8 mb-12">
            <h3 className="text-2xl font-bold mb-4">Ready to power your omnichannel strategy?</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Discover how NEXDYNE can build a headless CMS platform that unifies all your customer touchpoints.
            </p>
            <Button size="lg">Schedule a consultation</Button>
          </div>

          {/* Learn more */}
          <div className="border-t pt-8">
            <Link href="/solutions/headless-cms" className="inline-flex items-center text-blue-600 hover:text-blue-700 text-lg font-semibold">
              Learn more about Headless CMS
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
