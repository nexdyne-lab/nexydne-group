import { Link } from "wouter";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { SEO } from "./SEO";

interface Metric {
  value: string;
  label: string;
}

interface RelatedCaseStudy {
  title: string;
  href: string;
  industry: string;
}

interface CaseStudyArticleProps {
  title: string;
  subtitle: string;
  industry: string;
  industryHref: string;
  client: string;
  challenge: string;
  heroImage?: string;
  metrics: Metric[];
  children: React.ReactNode;
  relatedCaseStudies?: RelatedCaseStudy[];
}

export default function CaseStudyArticle({
  title,
  subtitle,
  industry,
  industryHref,
  client,
  challenge,
  heroImage,
  metrics,
  children,
  relatedCaseStudies = [],
}: CaseStudyArticleProps) {
  return (
    <div className="min-h-screen bg-white">
      <SEO title={`${title} | Case Study`} description={subtitle} />
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-charcoal text-white">
        <div className="container max-w-5xl mx-auto px-4">
          <Link href={industryHref}>
            <span className="text-sm font-medium text-secondary uppercase tracking-wider hover:underline">
              {industry}
            </span>
          </Link>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-xl text-muted-foreground/50 mb-8 leading-relaxed max-w-3xl">
            {subtitle}
          </p>
        </div>
      </section>

      {/* Metrics Bar */}
      <section className="py-12 bg-subtle border-b border-border">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">
                  {metric.value}
                </p>
                <p className="text-sm text-muted-foreground mt-1">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client & Challenge Overview */}
      <section className="py-12 bg-white border-b border-border/50">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">
                The Client
              </h2>
              <p className="text-lg text-charcoal">{client}</p>
            </div>
            <div>
              <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">
                The Challenge
              </h2>
              <p className="text-lg text-charcoal">{challenge}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      {heroImage && (
        <section className="py-12 bg-white">
          <div className="container max-w-5xl mx-auto px-4">
            <div className="aspect-[16/9] bg-subtle rounded-lg overflow-hidden shadow-lg">
              <img
                src={heroImage}
                alt={title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>
      )}

      {/* Case Study Content */}
      <article className="py-16 bg-white">
        <div className="container max-w-3xl mx-auto px-4">
          <div className="prose prose-lg prose-gray max-w-none">{children}</div>
        </div>
      </article>

      {/* Results Summary */}
      <section className="py-16 bg-subtle">
        <div className="container max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-charcoal mb-8 text-center">
            Key Results
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm text-center"
              >
                <p className="text-3xl font-bold text-primary">
                  {metric.value}
                </p>
                <p className="text-sm text-muted-foreground mt-2">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Case Studies */}
      {relatedCaseStudies.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container max-w-6xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-charcoal mb-8">
              Related Case Studies
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {relatedCaseStudies.map((item, index) => (
                <Link key={index} href={item.href}>
                  <div className="bg-subtle p-6 rounded-lg hover:shadow-md transition-shadow cursor-pointer h-full">
                    <span className="text-xs font-medium text-primary uppercase tracking-wider">
                      {item.industry}
                    </span>
                    <h3 className="text-lg font-semibold text-charcoal mt-2 hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-charcoal text-white">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Achieve Similar Results?
          </h2>
          <p className="text-xl text-muted-foreground/50 mb-8">
            Let's discuss how we can help transform your business.
          </p>
          <Link href="/contact">
            <button className="px-8 py-4 bg-secondary text-charcoal font-bold rounded-full hover:bg-secondary transition-colors">
              Start the Conversation
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
