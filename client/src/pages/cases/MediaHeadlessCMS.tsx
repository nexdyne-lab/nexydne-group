import { Link } from "wouter";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function MediaHeadlessCMS() {
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
            <span className="text-foreground">Media Company Case Study</span>
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
            Media Company Scales to 50M Monthly Readers with Headless CMS
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8">
            How a digital media publisher migrated to headless CMS and achieved 73% faster time-to-publish across 12 global markets while maintaining SEO rankings and reducing infrastructure costs.
          </p>

          <img
            src="/headless-cms-case-media.cfc393e5.jpg"
            alt="Media Company Headless CMS Implementation"
            className="w-full rounded-lg shadow-xl mb-12"
          />

          {/* Challenge */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">The Challenge</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              A rapidly growing digital media company was struggling with their monolithic WordPress multisite installation serving 50 million monthly readers across 12 regional markets. Their editorial teams spent hours waiting for content to publish, developers couldn't ship new features without breaking existing functionality, and the infrastructure costs were spiraling as traffic grew.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              The legacy CMS architecture created bottlenecks at every level. Editors in different time zones competed for database resources, causing publish delays during peak news cycles. The mobile app team couldn't access content efficiently, forcing them to scrape the website instead of using proper APIs. Regional teams demanded localized experiences but the monolithic system made customization nearly impossible.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Most critically, the company's growth ambitions—launching podcast platforms, newsletter systems, and smart speaker integrations—were blocked by the inflexible CMS architecture. They needed a modern content infrastructure that could scale with their audience while empowering editorial teams to move faster.
            </p>
          </div>

          {/* Solution */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">The Solution</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              NEXDYNE architected a headless CMS migration strategy using Contentful as the content hub, with Next.js powering the frontend and GraphQL APIs enabling omnichannel distribution. We designed a phased rollout that migrated one regional market at a time, preserving SEO equity and allowing editorial teams to adapt gradually.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Our content modeling approach created flexible structures that worked across all channels—articles, videos, podcasts, and newsletters—while maintaining editorial workflow efficiency. We built custom preview environments that let editors see exactly how content would appear on web, mobile, and emerging platforms before publishing.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              The migration preserved 15 years of content history while implementing modern SEO best practices. We created automated redirect mapping for 2.3 million URLs, ensuring zero traffic loss during the transition. Our CDN optimization strategy reduced page load times by 64% while cutting infrastructure costs by 42%.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We trained 180 editorial staff across 12 markets on the new system, creating role-specific workflows that matched their existing publishing habits. The result was a content platform that scaled effortlessly while giving editorial teams unprecedented speed and flexibility.
            </p>
          </div>

          {/* Results */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">The Results</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="p-6 text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">73%</div>
                <div className="text-sm text-muted-foreground">Faster time-to-publish</div>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">42%</div>
                <div className="text-sm text-muted-foreground">Infrastructure cost reduction</div>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">6</div>
                <div className="text-sm text-muted-foreground">New channels launched in 12 months</div>
              </Card>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              The headless CMS transformation delivered immediate operational improvements. Editorial teams reduced average publish time from 8 minutes to 2 minutes, enabling real-time news coverage that previously wasn't possible. The mobile app team built native reading experiences that increased engagement by 89% compared to the old mobile web experience.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Within 12 months, the company launched six new content channels—including a daily podcast network, premium newsletter platform, and Alexa news briefings—all powered by the same content hub. Regional teams gained autonomy to customize experiences for local audiences while maintaining brand consistency across markets.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The business impact was substantial: advertising CPMs increased 34% due to faster page loads, subscription conversion rates improved 28% with better mobile experiences, and the company reduced hosting costs by $1.8M annually while serving 40% more traffic. Most importantly, editorial teams reported 92% satisfaction with the new system, citing speed and flexibility as transformative improvements.
            </p>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-8 mb-12">
            <h3 className="text-2xl font-bold mb-4">Ready to transform your content operations?</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Learn how NEXDYNE can architect a headless CMS solution that scales with your growth.
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
