import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
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

const ease = [0.22, 1, 0.36, 1] as const;
const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease },
};

export default function InsightsListing({
  title,
  subtitle,
  parentTitle,
  parentHref,
  insights,
}: InsightsListingProps) {
  return (
    <div className="min-h-screen bg-white text-charcoal">
      <SEO title={title} description={subtitle} />
      <Navigation />

      {/* ── Masthead — light editorial (matches InsightArticleV2) ─────────── */}
      <section className="bg-off-white border-b border-border">
        <div className="container px-4 sm:px-6 md:px-12 pt-24 md:pt-28 pb-12 md:pb-16">
          <Link href="/insights">
            <span className="inline-block mb-8 text-[13px] font-semibold uppercase tracking-[0.1em] text-charcoal border-b border-charcoal/40 hover:border-primary hover:text-primary transition-colors cursor-pointer pb-1">
              ← All insights
            </span>
          </Link>
          <div className="max-w-4xl">
            <Link href={parentHref}>
              <span className="inline-flex items-center gap-3 nx-eyebrow text-primary mb-5 cursor-pointer">
                <span className="h-px w-8 bg-primary" />
                {parentTitle}
              </span>
            </Link>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease }}
              className="text-3xl sm:text-4xl md:text-[2.9rem] lg:text-[3.35rem] text-charcoal leading-[1.08] tracking-[-0.02em] font-medium"
            >
              {title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5, ease }}
              className="nx-lead text-charcoal/70 max-w-3xl mt-6"
            >
              {subtitle}
            </motion.p>
          </div>
        </div>
      </section>

      {/* ── Insights grid ─────────────────────────────────────────────────── */}
      <section className="nx-section bg-white">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
            {insights.map((insight, index) => (
              <motion.div key={index} {...fadeUp} transition={{ ...fadeUp.transition, delay: (index % 3) * 0.08 }}>
                <Link href={insight.href}>
                  <article className="group h-full flex flex-col bg-white border border-border p-7 lg:p-8 cursor-pointer transition-shadow duration-300 hover:shadow-[0_22px_44px_-26px_rgba(0,0,0,0.28)]">
                    <span className="nx-eyebrow text-primary">{insight.category}</span>
                    <h2 className="text-charcoal font-semibold text-[1.2rem] lg:text-[1.3rem] leading-[1.3] tracking-[-0.015em] mt-3 mb-3 group-hover:text-primary transition-colors">
                      {insight.title}
                    </h2>
                    <p className="text-[0.95rem] text-muted-foreground leading-[1.6] flex-1">
                      {insight.excerpt}
                    </p>
                    <div className="flex items-center gap-3 text-[13px] text-muted-foreground pt-5 mt-5 border-t border-border">
                      <span>{insight.date}</span>
                      <span aria-hidden className="w-1 h-1 bg-charcoal/25 rounded-full" />
                      <span>{insight.readTime} read</span>
                      <ArrowRight className="w-4 h-4 ml-auto text-charcoal/40 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
                  </article>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA — charcoal close ──────────────────────────────────────────── */}
      <section className="bg-charcoal text-white">
        <div className="container px-4 sm:px-6 md:px-12 py-16 md:py-24 text-center">
          <span className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/50 mb-6">
            <span className="h-px w-8 bg-primary" /> Take the next step <span className="h-px w-8 bg-primary" />
          </span>
          <h2 className="text-[1.9rem] md:text-[2.4rem] font-medium tracking-[-0.02em] leading-[1.1] max-w-2xl mx-auto">
            Want to discuss these topics?
          </h2>
          <p className="text-[15px] md:text-base text-white/70 leading-[1.7] mt-5 max-w-xl mx-auto">
            Our partners are ready to help you apply these ideas to your business.
          </p>
          <Link href="/contact">
            <span className="inline-flex items-center gap-2 mt-9 px-9 py-4 bg-primary text-white text-[13px] font-semibold uppercase tracking-[0.12em] hover:bg-primary-hover transition-colors cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
              Contact our team <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
