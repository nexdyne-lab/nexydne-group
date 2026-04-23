import { Link } from "wouter";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function EnterpriseHeadlessCMS() {
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
            <span className="text-foreground">Enterprise Case Study</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <Link href="/solutions/headless-cms" className="inline-flex items-center text-primary hover:text-blue-700 mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Headless CMS
          </Link>
          
          <h1 className="text-5xl font-bold mb-3">
            Global Enterprise Reduces Content Ops Cost by 58%
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8">
            How a Fortune 500 B2B company consolidated 47 regional websites into one headless platform, cut content management costs in half, and accelerated time-to-market for new digital experiences.
          </p>

          <img
            src="/headless-cms-case-enterprise.0fec56e5.jpg"
            alt="Enterprise Headless CMS Consolidation"
            className="w-full rounded-lg shadow-xl mb-12"
          />

          {/* Challenge */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">The Challenge</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              A global industrial equipment manufacturer operated 47 regional websites across 23 countries, each running on different CMS platforms with separate hosting infrastructure. Content teams in each region worked in isolation, creating inconsistent brand experiences and duplicating effort across markets.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              The fragmented architecture created massive operational inefficiencies. Product launches required coordinating content updates across 47 separate systems, often taking 6-8 weeks to achieve global consistency. Regional IT teams spent 60% of their time on CMS maintenance instead of innovation. Annual hosting and licensing costs exceeded $4.2M for infrastructure that delivered mediocre performance.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Most critically, the company couldn't execute its digital transformation strategy. Plans for customer portals, partner extranets, and mobile sales tools were blocked by the inability to share content across systems. The CEO mandated a unified digital platform that could scale globally while giving regions autonomy to serve local markets effectively.
            </p>
          </div>

          {/* Solution */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">The Solution</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              NEXDYNE architected an enterprise headless CMS platform using Contentful's enterprise tier, with a multi-tenant content model that balanced global consistency with regional flexibility. We designed a phased migration that consolidated three regions per quarter, minimizing disruption while delivering quick wins.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Our content governance framework established global product content managed centrally, with regional teams controlling local market messaging, case studies, and compliance content. We built translation workflows that integrated with the company's existing LSP, automating content localization across 18 languages.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              The technical architecture used Next.js for web frontends, with shared component libraries ensuring brand consistency while allowing regional customization. We implemented Cloudflare Workers for edge computing, delivering sub-200ms page loads globally while reducing hosting costs by 67%.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our change management program trained 240 content contributors across 23 countries, creating role-based workflows that matched regional team structures. We established a center of excellence that provided ongoing support and drove continuous improvement across the global content operation.
            </p>
          </div>

          {/* Results */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">The Results</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">58%</div>
                <div className="text-sm text-muted-foreground">Content operations cost reduction</div>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">47→1</div>
                <div className="text-sm text-muted-foreground">Websites consolidated</div>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">82%</div>
                <div className="text-sm text-muted-foreground">Faster product launch coordination</div>
              </Card>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              The headless CMS consolidation delivered immediate operational benefits. Global product launches that previously took 6-8 weeks now completed in 7 business days, with content automatically distributed to all regional sites in appropriate languages. Regional IT teams redirected 60% of their time from maintenance to innovation projects.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              The unified platform enabled new digital experiences that were previously impossible. The company launched a customer portal serving 12,000 enterprise clients, a partner extranet for 3,400 distributors, and a mobile sales tool used by 850 field reps—all powered by the same content infrastructure. These new touchpoints contributed $87M in incremental revenue within 18 months.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The financial impact exceeded projections: annual content operations costs decreased from $7.2M to $3.0M, hosting infrastructure costs dropped by $2.8M, and the company avoided $1.5M in planned regional CMS upgrades. Most importantly, the unified platform positioned the company for continued digital innovation—launching new customer experiences in weeks instead of quarters while competitors remained constrained by legacy systems.
            </p>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-8 mb-12">
            <h3 className="text-2xl font-bold mb-4">Ready to consolidate your content operations?</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Learn how NEXDYNE can architect an enterprise headless CMS that scales globally.
            </p>
            <Button size="lg">Schedule a consultation</Button>
          </div>

          {/* Learn more */}
          <div className="border-t pt-8">
            <Link href="/solutions/headless-cms" className="inline-flex items-center text-primary hover:text-blue-700 text-lg font-semibold">
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
