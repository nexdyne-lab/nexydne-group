// InsightArticle.tsx — PR 2 rewrite
// Changes: removed lucide-react, Georgia font, shadow/rounded on hero image,
// standardized padding, converted back-link and meta to text-only patterns.

import { Link } from "wouter";
import { motion } from "framer-motion";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { SEO } from "./SEO";

interface RelatedInsight {
  title: string;
  category: string;
  link: string;
  image: string;
}

interface InsightArticleProps {
  category: string;
  categoryHref?: string;
  title: string;
  subtitle: string;
  heroImage?: string;
  readTime: string;
  publishDate?: string;
  date?: string;
  children: React.ReactNode;
  relatedInsights?: RelatedInsight[];
  relatedContent?: { title: string; href: string; category: string }[];
  authors?: { name: string; role: string }[];
}

export default function InsightArticle({
  category,
  categoryHref = "/insights",
  title,
  subtitle,
  heroImage,
  readTime,
  publishDate,
  date,
  children,
  relatedInsights = [],
  relatedContent = [],
  authors = []
}: InsightArticleProps) {
  // Support both old and new date prop names
  const displayDate = publishDate || date || "";

  // Convert relatedContent to relatedInsights format if needed
  const allRelatedInsights = relatedInsights.length > 0
    ? relatedInsights
    : relatedContent.map(item => ({
        title: item.title,
        category: item.category,
        link: item.href,
        image: "/images/insight-placeholder.jpg"
      }));

  return (
    <div className="min-h-screen bg-white text-charcoal">
      <SEO title={title} description={subtitle} />
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 md:py-24 bg-subtle">
        <div className="px-6 sm:px-8 md:px-12 lg:px-16">

          {/* Back Link — text-only, no icon */}
          <Link href="/insights">
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-block mb-10 text-[13px] font-semibold uppercase tracking-[0.1em] text-charcoal border-b border-charcoal/40 hover:border-primary hover:text-primary transition-colors cursor-pointer pb-1"
            >
              Back to Insights
            </motion.span>
          </Link>

          {/* Category eyebrow */}
          <Link href={categoryHref}>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-primary mb-5 cursor-pointer"
            >
              {category}
            </motion.span>
          </Link>

          {/* Title — matches Home.tsx H2 pattern */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-[2.75rem] lg:text-[3.25rem] text-charcoal leading-[1.1] max-w-4xl mb-6"
            style={{ fontWeight: 500, letterSpacing: "-0.02em" }}
          >
            {title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-lg sm:text-xl text-charcoal/70 max-w-3xl mb-8 leading-[1.7]"
          >
            {subtitle}
          </motion.p>

          {/* Meta — plain text, no icons */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.4 }}
            className="text-[13px] text-charcoal/60"
          >
            {displayDate}{displayDate && readTime ? " · " : ""}{readTime}
          </motion.p>
        </div>
      </section>

      {/* Hero Image — no rounded corners, no shadow */}
      {heroImage && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="px-6 sm:px-8 md:px-12 lg:px-16"
        >
          <div className="aspect-[16/10] overflow-hidden bg-subtle">
            <img
              src={heroImage}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      )}

      {/* Article Body */}
      <article className="py-20 md:py-24">
        <div className="px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="prose prose-lg max-w-none
                prose-headings:font-normal prose-headings:text-charcoal
                prose-h2:text-2xl prose-h2:sm:text-3xl prose-h2:mt-12 prose-h2:mb-6
                prose-h3:text-xl prose-h3:sm:text-2xl prose-h3:mt-8 prose-h3:mb-4
                prose-p:text-charcoal/80 prose-p:leading-relaxed prose-p:mb-6
                prose-li:text-charcoal/80
                prose-strong:text-charcoal prose-strong:font-semibold
                prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                prose-blockquote:border-l-4 prose-blockquote:border-charcoal/20
                prose-blockquote:bg-subtle prose-blockquote:py-4 prose-blockquote:px-6
                prose-blockquote:not-italic prose-blockquote:text-charcoal/80"
            >
              {children}
            </motion.div>
          </div>
        </div>
      </article>

      {/* CTA Section — light background, no dark bg-base */}
      <section className="py-20 md:py-24 bg-subtle border-t border-charcoal/10">
        <div className="px-6 sm:px-8 md:px-12 lg:px-16 text-center">
          <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-charcoal/60 mb-5">
            Take the Next Step
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-[2.5rem] text-charcoal leading-[1.15] mb-6"
            style={{ fontWeight: 500, letterSpacing: "-0.02em" }}
          >
            Ready to Apply These Insights?
          </h2>
          <p className="text-base sm:text-lg text-charcoal/80 mb-10 max-w-2xl mx-auto leading-[1.7]">
            Our experts can help you implement these strategies for your business.
          </p>
          <Link href="/contact">
            <span className="inline-block px-8 py-3 bg-primary text-primary-foreground font-semibold text-[13px] tracking-[0.1em] uppercase hover:bg-primary-hover transition-colors cursor-pointer">
              Schedule a Consultation
            </span>
          </Link>
        </div>
      </section>

      {/* Related Insights — flat cards, no rounded, no shadow */}
      {allRelatedInsights.length > 0 && (
        <section className="py-20 md:py-24 bg-white">
          <div className="px-6 sm:px-8 md:px-12 lg:px-16">
            <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-charcoal/60 mb-5">
              Continue Reading
            </span>
            <h2
              className="text-3xl sm:text-4xl md:text-[2.5rem] text-charcoal leading-[1.15] mb-14"
              style={{ fontWeight: 500, letterSpacing: "-0.02em" }}
            >
              Related Insights
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
              {allRelatedInsights.map((insight, i) => (
                <Link key={i} href={insight.link}>
                  <div className="group cursor-pointer">
                    {/* Flat card image — no rounded */}
                    <div className="aspect-[16/10] overflow-hidden bg-subtle">
                      <img
                        src={insight.image}
                        alt={insight.title}
                        className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                      />
                    </div>
                    <div className="pt-6">
                      <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-primary">
                        {insight.category}
                      </span>
                      <h3
                        className="mt-2 text-lg text-charcoal leading-tight group-hover:text-primary transition-colors"
                        style={{ fontWeight: 500, letterSpacing: "-0.01em" }}
                      >
                        {insight.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
