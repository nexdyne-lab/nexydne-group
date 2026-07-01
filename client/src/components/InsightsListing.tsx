import { Link } from "wouter";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { SEO } from "./SEO";

interface InsightItem {
  title: string;
  excerpt: string;
  href: string;
  date: string;
  readTime: string;
  category: string;
}

interface InsightsListingProps {
  title: string;
  subtitle: string;
  parentTitle: string;
  parentHref: string;
  insights: InsightItem[];
}

export default function InsightsListing({
  title,
  subtitle,
  parentTitle,
  parentHref,
  insights,
}: InsightsListingProps) {
  return (
    <div className="min-h-screen bg-white">
      <SEO title={title} description={subtitle} />
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pb-20 bg-charcoal text-white">
        <div className="container max-w-5xl mx-auto px-4">
          <Link href={parentHref}>
            <span className="nx-eyebrow text-amber hover:text-white transition-colors">
              {parentTitle}
            </span>
          </Link>
          <h1 className="nx-h1 mt-4 mb-6">
            {title}
          </h1>
          <p className="nx-lead text-white/70 max-w-3xl">
            {subtitle}
          </p>
        </div>
      </section>

      {/* Insights Grid */}
      <section className="nx-section bg-subtle">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
            {insights.map((insight, index) => (
              <Link key={index} href={insight.href}>
                <article className="group bg-card border border-border overflow-hidden cursor-pointer h-full flex flex-col transition duration-300 hover:border-primary/40 hover:shadow-[0_22px_44px_-24px_rgba(224,76,44,0.4)] hover:-translate-y-1">
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="nx-eyebrow text-primary">
                        {insight.category}
                      </span>
                    </div>
                    <h2 className="nx-h3 text-charcoal mb-3 group-hover:text-primary transition-colors">
                      {insight.title}
                    </h2>
                    <p className="text-charcoal/75 leading-[1.55] mb-5 flex-1">
                      {insight.excerpt}
                    </p>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground pt-4 border-t border-border">
                      <span>{insight.date}</span>
                      <span className="w-1 h-1 bg-charcoal/25 rounded-full" />
                      <span>{insight.readTime}</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="nx-section bg-white">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <h2 className="nx-h2 text-charcoal mb-4">
            Want to Discuss These Topics?
          </h2>
          <p className="nx-lead text-muted-foreground mb-8 mx-auto">
            Our experts are ready to help you apply these insights to your
            business.
          </p>
          <Link href="/contact">
            <span className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground text-[13px] font-semibold uppercase tracking-[0.1em] hover:bg-primary-hover transition-colors cursor-pointer">
              Contact Our Team
            </span>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
