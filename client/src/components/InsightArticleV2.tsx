// InsightArticleV2.tsx — fresh MBB-grade long-read template.
// Drop-in compatible with InsightArticle props, plus optional `sections` (sticky TOC).
import { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Linkedin, Link2, Check, ArrowRight } from "lucide-react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { SEO } from "./SEO";

interface RelatedInsight {
  title: string;
  category: string;
  link: string;
  image: string;
}

interface InsightArticleV2Props {
  category: string;
  categoryHref?: string;
  title: string;
  subtitle: string;
  heroImage?: string;
  heroCaption?: string;
  readTime: string;
  publishDate?: string;
  date?: string;
  children: React.ReactNode;
  relatedInsights?: RelatedInsight[];
  relatedContent?: { title: string; href: string; category: string }[];
  authors?: { name: string; role: string }[];
  keyTakeaways?: string[];
  references?: { label: string; url: string }[];
  sections?: { id: string; label: string }[];
}

export default function InsightArticleV2({
  category,
  categoryHref = "/insights",
  title,
  subtitle,
  heroImage,
  heroCaption,
  readTime,
  publishDate,
  date,
  children,
  relatedInsights = [],
  relatedContent = [],
  authors = [],
  keyTakeaways = [],
  references = [],
  sections = [],
}: InsightArticleV2Props) {
  const displayDate = publishDate || date || "";
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState<string>(sections[0]?.id ?? "");
  const [copied, setCopied] = useState(false);

  const allRelatedInsights =
    relatedInsights.length > 0
      ? relatedInsights
      : relatedContent.map((item) => ({
          title: item.title,
          category: item.category,
          link: item.href,
          image: "/images/insight-placeholder.jpg",
        }));

  const byline = authors.length > 0 ? authors : [{ name: "NexDyne Consulting Group", role: "Editorial" }];

  // Reading-progress bar
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const scrolled = h.scrollTop;
      const height = h.scrollHeight - h.clientHeight;
      setProgress(height > 0 ? Math.min(100, (scrolled / height) * 100) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Sticky TOC active-section tracking
  useEffect(() => {
    if (sections.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        }
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [sections]);

  const copyLink = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1800);
      });
    }
  };

  const shareLinkedIn =
    typeof window !== "undefined"
      ? `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`
      : "#";

  return (
    <div className="min-h-screen bg-white text-charcoal">
      <SEO title={title} description={subtitle} />

      {/* Reading-progress bar */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-[3px] bg-transparent">
        <div className="h-full bg-primary transition-[width] duration-150 ease-out" style={{ width: `${progress}%` }} />
      </div>

      <Navigation />

      {/* ── Masthead ──────────────────────────────────────────────────────── */}
      <section className="bg-off-white">
        <div className="container px-4 sm:px-6 md:px-12 pt-24 md:pt-28 pb-12 md:pb-16">
          <Link href="/insights">
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-block mb-9 text-[13px] font-semibold uppercase tracking-[0.1em] text-charcoal border-b border-charcoal/40 hover:border-primary hover:text-primary transition-colors cursor-pointer pb-1"
            >
              ← Back to Insights
            </motion.span>
          </Link>

          <div className="max-w-4xl">
            <Link href={categoryHref}>
              <span className="inline-flex items-center gap-3 nx-eyebrow text-primary mb-5 cursor-pointer">
                <span className="h-px w-8 bg-primary" />
                {category}
              </span>
            </Link>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-3xl sm:text-4xl md:text-[2.9rem] lg:text-[3.35rem] text-charcoal leading-[1.08] tracking-[-0.02em] font-medium"
            >
              {title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="nx-lead text-charcoal/70 max-w-3xl mt-6"
            >
              {subtitle}
            </motion.p>

            {/* Meta row */}
            <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-[13px] text-charcoal/60">
              <span className="font-medium text-charcoal/80">{byline[0].name}</span>
              {displayDate && <span aria-hidden className="h-1 w-1 rounded-full bg-charcoal/30" />}
              {displayDate && <span>{displayDate}</span>}
              {readTime && <span aria-hidden className="h-1 w-1 rounded-full bg-charcoal/30" />}
              {readTime && <span>{readTime} read</span>}
            </div>
          </div>
        </div>
      </section>

      {/* ── Full-bleed hero ───────────────────────────────────────────────── */}
      {heroImage && (
        <motion.figure
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="w-full"
        >
          <div className="relative w-full aspect-[16/9] lg:aspect-[21/9] overflow-hidden bg-charcoal">
            <img src={heroImage} alt={title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
          </div>
          {heroCaption && (
            <figcaption className="container px-4 sm:px-6 md:px-12 mt-3 text-[12px] text-charcoal/50">
              {heroCaption}
            </figcaption>
          )}
        </motion.figure>
      )}

      {/* ── Body ──────────────────────────────────────────────────────────── */}
      <section className="py-14 md:py-20 bg-white">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
            {/* Left rail */}
            <aside className="lg:col-span-3">
              <div className="lg:sticky lg:top-28 space-y-9">
                {sections.length > 0 && (
                  <nav aria-label="On this page">
                    <span className="block text-[11px] font-semibold uppercase tracking-[0.16em] text-charcoal/45 mb-4">
                      On this page
                    </span>
                    <ul className="space-y-1 border-l border-border">
                      {sections.map((s) => (
                        <li key={s.id}>
                          <a
                            href={`#${s.id}`}
                            className={`block -ml-px border-l-2 pl-4 py-1.5 text-[13px] leading-snug transition-colors ${
                              activeSection === s.id
                                ? "border-primary text-charcoal font-medium"
                                : "border-transparent text-charcoal/55 hover:text-charcoal"
                            }`}
                          >
                            {s.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                )}

                <div>
                  <span className="block text-[11px] font-semibold uppercase tracking-[0.16em] text-charcoal/45 mb-4">
                    Share
                  </span>
                  <div className="flex items-center gap-3">
                    <a
                      href={shareLinkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Share on LinkedIn"
                      className="h-10 w-10 rounded-full border border-border flex items-center justify-center text-charcoal hover:bg-charcoal hover:text-white hover:border-charcoal transition-colors"
                    >
                      <Linkedin className="w-[17px] h-[17px]" />
                    </a>
                    <button
                      type="button"
                      onClick={copyLink}
                      aria-label="Copy link"
                      className="h-10 w-10 rounded-full border border-border flex items-center justify-center text-charcoal hover:bg-charcoal hover:text-white hover:border-charcoal transition-colors cursor-pointer"
                    >
                      {copied ? <Check className="w-[17px] h-[17px] text-primary" /> : <Link2 className="w-[17px] h-[17px]" />}
                    </button>
                  </div>
                </div>
              </div>
            </aside>

            {/* Main column */}
            <div className="lg:col-span-9">
              <div className="max-w-[46rem]">
                {/* Key takeaways */}
                {keyTakeaways.length > 0 && (
                  <motion.aside
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 bg-off-white border border-border border-t-[3px] border-t-primary p-7 md:p-9"
                  >
                    <span className="block text-[11px] font-semibold uppercase tracking-[0.16em] text-charcoal/55 mb-5">
                      Key takeaways
                    </span>
                    <ul className="space-y-4">
                      {keyTakeaways.map((t, i) => (
                        <li key={i} className="flex gap-4 text-[15px] md:text-base text-charcoal/85 leading-[1.6]">
                          <span className="shrink-0 text-[13px] font-semibold text-primary tabular-nums pt-0.5">
                            0{i + 1}
                          </span>
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.aside>
                )}

                {/* Prose body */}
                <div
                  className="nx-article prose prose-lg max-w-none
                    prose-headings:font-medium prose-headings:tracking-[-0.01em] prose-headings:text-charcoal
                    prose-h2:text-[1.6rem] prose-h2:md:text-[1.9rem] prose-h2:leading-[1.2] prose-h2:mt-14 prose-h2:mb-5 prose-h2:scroll-mt-28
                    prose-h3:text-[1.2rem] prose-h3:md:text-[1.35rem] prose-h3:mt-10 prose-h3:mb-3
                    prose-p:text-charcoal/80 prose-p:leading-[1.8] prose-p:text-[1.05rem]
                    prose-strong:text-charcoal prose-strong:font-semibold
                    prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                    prose-blockquote:border-l-2 prose-blockquote:border-primary prose-blockquote:not-italic
                    prose-blockquote:pl-6 prose-blockquote:my-10 prose-blockquote:text-[1.4rem] prose-blockquote:md:text-[1.7rem]
                    prose-blockquote:leading-[1.4] prose-blockquote:tracking-[-0.01em] prose-blockquote:text-charcoal prose-blockquote:font-medium
                    [&>p:first-of-type]:first-letter:float-left [&>p:first-of-type]:first-letter:mr-3 [&>p:first-of-type]:first-letter:mt-1
                    [&>p:first-of-type]:first-letter:text-[3.4rem] [&>p:first-of-type]:first-letter:leading-[0.8]
                    [&>p:first-of-type]:first-letter:font-semibold [&>p:first-of-type]:first-letter:text-primary"
                >
                  {children}
                </div>

                {/* Sources */}
                {references.length > 0 && (
                  <div id="references" className="mt-16 pt-10 border-t border-border">
                    <span className="block text-[11px] font-semibold uppercase tracking-[0.16em] text-charcoal/55 mb-6">
                      Sources &amp; references
                    </span>
                    <ol className="space-y-3">
                      {references.map((r, i) => (
                        <li key={i} id={`ref-${i + 1}`} className="flex gap-3 text-[13px] leading-relaxed scroll-mt-28">
                          <span className="text-charcoal/45 font-medium shrink-0 tabular-nums">{i + 1}.</span>
                          <a
                            href={r.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-charcoal/70 hover:text-primary transition-colors break-words underline decoration-charcoal/20 underline-offset-2 hover:decoration-primary"
                          >
                            {r.label}
                          </a>
                        </li>
                      ))}
                    </ol>
                  </div>
                )}

                {/* Author byline */}
                <div className="mt-14 pt-8 border-t border-border flex items-start gap-4">
                  <div className="shrink-0 h-12 w-12 rounded-full bg-charcoal text-white flex items-center justify-center text-[13px] font-semibold tracking-[0.02em]">
                    {byline[0].name.split(" ").map((w) => w[0]).slice(0, 2).join("")}
                  </div>
                  <div>
                    <span className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-charcoal/45 mb-1">
                      Written by
                    </span>
                    <p className="text-[15px] font-semibold text-charcoal">{byline[0].name}</p>
                    <p className="text-[13px] text-muted-foreground">{byline[0].role}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA — charcoal close ──────────────────────────────────────────── */}
      <section className="bg-charcoal text-white">
        <div className="container px-4 sm:px-6 md:px-12 py-16 md:py-24">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/50 mb-6">
              <span className="h-px w-8 bg-primary" /> Take the next step
            </span>
            <h2 className="text-[1.9rem] md:text-[2.6rem] font-medium tracking-[-0.02em] leading-[1.1]">
              Ready to put this into practice?
            </h2>
            <p className="text-[15px] md:text-base text-white/70 leading-[1.7] mt-5 max-w-2xl">
              Our partners can help you turn these ideas into governed, measurable outcomes for your
              organization.
            </p>
            <Link href="/contact">
              <span className="inline-flex items-center gap-2 mt-9 px-9 py-4 bg-primary text-white text-[13px] font-semibold uppercase tracking-[0.12em] hover:bg-primary-hover transition-colors cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
                Schedule a consultation <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Related ───────────────────────────────────────────────────────── */}
      {allRelatedInsights.length > 0 && (
        <section className="nx-section bg-off-white border-t border-border">
          <div className="container px-4 sm:px-6 md:px-12">
            <div className="flex items-center gap-6 mb-12">
              <div>
                <span className="block nx-eyebrow text-charcoal/55 mb-2">Continue reading</span>
                <h2 className="nx-h2 text-charcoal">Related insights</h2>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
              {allRelatedInsights.map((insight, i) => (
                <Link key={i} href={insight.link}>
                  <article className="group cursor-pointer">
                    <div className="aspect-[16/10] overflow-hidden rounded-xl">
                      <img
                        src={insight.image}
                        alt={insight.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-[1100ms] ease-out group-hover:scale-[1.04]"
                      />
                    </div>
                    <div className="pt-5">
                      <span className="nx-eyebrow text-primary">{insight.category}</span>
                      <h3 className="mt-2 text-charcoal font-semibold text-[1.2rem] lg:text-[1.35rem] leading-[1.25] tracking-[-0.015em] group-hover:text-primary transition-colors">
                        {insight.title}
                      </h3>
                    </div>
                  </article>
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
