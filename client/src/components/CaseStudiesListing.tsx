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
      <section className="pt-32 pb-16 bg-charcoal text-white">
        <div className="container max-w-5xl mx-auto px-4">
          <Link href={parentHref}>
            <span className="text-sm font-medium text-secondary uppercase tracking-wider hover:underline">
              {parentTitle}
            </span>
          </Link>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-xl text-white/60 leading-relaxed max-w-3xl">
            {subtitle}
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 bg-subtle">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {caseStudies.map((caseStudy, index) => (
              <Link key={index} href={caseStudy.href}>
                <article className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow cursor-pointer h-full">
                  <div className="p-8">
                    <span className="text-xs font-medium text-primary uppercase tracking-wider">
                      {caseStudy.industry}
                    </span>
                    <h2 className="text-2xl font-bold text-charcoal mt-2 mb-3 hover:text-primary transition-colors">
                      {caseStudy.title}
                    </h2>
                    <p className="text-muted-foreground mb-6">{caseStudy.client}</p>
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border/50">
                      {caseStudy.metrics.slice(0, 2).map((metric, idx) => (
                        <div key={idx}>
                          <p className="text-2xl font-bold text-primary">
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
      <section className="py-16 bg-white">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-charcoal mb-4">
            Ready to Be Our Next Success Story?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss how we can help you achieve similar results.
          </p>
          <Link href="/contact">
            <button className="px-8 py-4 bg-charcoal text-white font-bold rounded-full hover:bg-gray-800 transition-colors">
              Start Your Transformation
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
