import { Link } from "wouter";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { SEO } from "./SEO";

interface CaseStudyItem {
  title: string;
  client: string;
  href: string;
  industry: string;
  metrics: { value: string; label: string }[];
}

interface CaseStudiesListingProps {
  title: string;
  subtitle: string;
  parentTitle: string;
  parentHref: string;
  caseStudies: CaseStudyItem[];
}

export default function CaseStudiesListing({
  title,
  subtitle,
  parentTitle,
  parentHref,
  caseStudies,
}: CaseStudiesListingProps) {
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

      {/* Case Studies Grid */}
      <section className="nx-section bg-subtle">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid sm:grid-cols-2 gap-6 lg:gap-7">
            {caseStudies.map((caseStudy, index) => (
              <Link key={index} href={caseStudy.href}>
                <article className="group bg-card border border-border overflow-hidden cursor-pointer h-full transition duration-300 hover:border-primary/40 hover:shadow-[0_22px_44px_-24px_rgba(224,76,44,0.4)] hover:-translate-y-1">
                  <div className="p-8">
                    <span className="nx-eyebrow text-primary">
                      {caseStudy.industry}
                    </span>
                    <h2 className="nx-h3 text-charcoal mt-2 mb-3 group-hover:text-primary transition-colors">
                      {caseStudy.title}
                    </h2>
                    <p className="text-muted-foreground mb-6">{caseStudy.client}</p>
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                      {caseStudy.metrics.slice(0, 2).map((metric, idx) => (
                        <div key={idx}>
                          <p className="text-[1.75rem] font-bold text-primary tracking-[-0.02em] leading-[1.1]">
                            {metric.value}
                          </p>
                          <p className="text-sm text-muted-foreground">{metric.label}</p>
                        </div>
                      ))}
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
            Ready to Be Our Next Success Story?
          </h2>
          <p className="nx-lead text-muted-foreground mb-8 mx-auto">
            Let's discuss how we can help you achieve similar results.
          </p>
          <Link href="/contact">
            <span className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground text-[13px] font-semibold uppercase tracking-[0.1em] hover:bg-primary-hover transition-colors cursor-pointer">
              Start Your Transformation
            </span>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
