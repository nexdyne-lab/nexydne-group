import { motion } from "framer-motion";
import { Link } from "wouter";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import InsightsFeaturedHero from "@/components/insights/InsightsFeaturedHero";
import { SEO } from "@/components/SEO";
import { INSIGHTS } from "@/data/insightsRegistry";
import { trpc } from "@/lib/trpc";

export default function Insights() {
  // ── Filter + UI state ──────────────────────────────────────────────────────
  const [topicFilter, setTopicFilter] = useState<string>("all");
  const [contentTypeFilter, setContentTypeFilter] = useState<string>("articles");
  const [tilesShown, setTilesShown] = useState<number>(12);
  const [email, setEmail] = useState<string>("");
  const [isSubmittingNewsletter, setIsSubmittingNewsletter] = useState<boolean>(false);
  const [newsletterStatus, setNewsletterStatus] = useState<"idle" | "success">("idle");

  // ═══════════════════════════════════════════════════════════════════════
  // CATALOG — everything below derives from the single-source registry
  // (client/src/data/insightsRegistry.ts). No hardcoded article lists.
  // ═══════════════════════════════════════════════════════════════════════
  const withRead = (rt: string) => (rt.trim().endsWith("read") ? rt : `${rt} read`);

  /** Normalize 60+ raw article categories into 7 filterable groups. */
  const topicGroup = (t: string): string => {
    const x = t.toLowerCase();
    if (/governance|risk|security|regulation|compliance|ethic/.test(x)) return "Governance & Risk";
    if (/\bai\b|automation|agent|intelligen|machine|generative/.test(x)) return "AI & Automation";
    if (/financ|cfo|capital|fp&a|m&a|valuation|invest|fundrais|working capital/.test(x)) return "Finance";
    if (/operat|supply|process|lean|quality|manufactur|performance improvement|workforce/.test(x)) return "Operations";
    if (/market|sales|growth|customer|brand|pricing|loyalty|subscription|revenue|commerce|personali/.test(x)) return "Growth & Customers";
    if (/tech|data|architect|platform|engineer|cloud|digital|software|integration|analytics/.test(x)) return "Technology & Data";
    return "Strategy & Leadership";
  };

  const catalog = INSIGHTS.map((a) => ({
    ...a,
    readTime: withRead(a.readTime),
    group: topicGroup(a.topic),
  }));
  const bySlug = new Map(catalog.map((a) => [a.slug, a]));
  /** Curated rails reference articles BY SLUG (never by index). */
  const pick = (slugs: string[]) => slugs.map((s) => bySlug.get(s)!).filter(Boolean);

  // ── Featured article (Section 1 hero) — flagged in the registry ────────────
  const featuredArticle = catalog.find((a) => a.featured) ?? catalog[0];

  // ── Editor's Pick (Section 5) — flagged in the registry ────────────────────
  const editorsPick = catalog.find((a) => a.editorsPick) ?? catalog[1];

  // ── Filter pill option lists (derived from real data) ──────────────────────
  const groupOrder = [
    "AI & Automation",
    "Governance & Risk",
    "Operations",
    "Technology & Data",
    "Growth & Customers",
    "Finance",
    "Strategy & Leadership",
  ];
  const topicOptions = [
    { value: "all", label: "All" },
    ...groupOrder
      .filter((g) => catalog.some((a) => a.group === g))
      .map((g) => ({ value: g, label: g })),
  ];

  const contentTypeOptions = [
    { value: "articles", label: "Articles", disabled: false },
    { value: "reports", label: "Reports", disabled: true },
    { value: "podcasts", label: "Podcasts", disabled: true },
  ];

  // ── Article grid source: the full catalog minus the hero feature ───────────
  const articles = catalog.filter((a) => a.slug !== featuredArticle.slug);

  // ── Curated rails (slug-addressed — a bad slug is dropped, never a crash) ──
  const topicRails = [
    {
      eyebrow: "THE AI AGENDA",
      title: "Govern first, then scale",
      articles: pick(["shadow-ai-inside-your-firm", "agentic-ai-budget-line", "ai-adoption-outlook-2026"]),
    },
    {
      eyebrow: "START HERE",
      title: "Readiness before investment",
      articles: pick(["is-your-business-ready-for-ai", "what-should-a-small-business-automate-first", "ai-readiness-checklist-for-small-business"]),
    },
    {
      eyebrow: "FROM THE FIELD",
      title: "Operations that scale",
      articles: pick(["scaling-operations", "measuring-automation-roi", "efficiency-improvement-reality"]),
    },
  ];

  // ── Filter + pagination logic ──────────────────────────────────────────────
  const filteredArticles = articles.filter((article) => {
    if (topicFilter !== "all" && article.group !== topicFilter) return false;
    // contentTypeFilter is "articles" by default; reports/podcasts are disabled at v1
    return true;
  });
  const visibleArticles = filteredArticles.slice(0, tilesShown);
  const hasFiltersActive = topicFilter !== "all";

  const resetFilters = () => {
    setTopicFilter("all");
    setTilesShown(12);
  };

  // ── Newsletter submit handler (stub — backend wiring is a follow-up) ───────
  const subscribeNewsletter = trpc.newsletter.subscribe.useMutation();
  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingNewsletter(true);
    try {
      await subscribeNewsletter.mutateAsync({ email });
      setNewsletterStatus("success");
    } finally {
      setIsSubmittingNewsletter(false);
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-charcoal">
      <SEO
        title="Insights"
        description="Perspectives on intelligence, governance, and execution from the NexDyne practice. Articles, reports, and conversations on transformation at growing companies."
        canonical="/insights"
      />
      <Navigation />

      {/* SLOT 1 — Featured-article hero (charcoal-washed editorial photo) */}
      <InsightsFeaturedHero featuredArticle={featuredArticle} />

      {/* SLOT 2 — White editorial intro / page voice */}
      <section className="bg-white py-24 md:py-32">
        <div className="container px-6 sm:px-8 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="block text-[14px] font-semibold uppercase tracking-[0.2em] text-charcoal/60 mb-5">
              NEXDYNE INSIGHTS
            </span>
            <h3
              className="text-3xl md:text-4xl lg:text-5xl text-charcoal leading-[1.1] mb-10"
              style={{ fontWeight: 500, letterSpacing: "-0.02em" }}
            >
              Perspectives on intelligence, governance, and execution.
            </h3>
            <div className="space-y-6">
              <p className="text-base md:text-lg text-charcoal/80 leading-[1.65] max-w-[68ch]">
                NexDyne writes for the operators, partners, and boards who are accountable for transformation outcomes — not the slideware that explains them. Our work spans strategy, customer intelligence, process optimization, enterprise transformation, and business growth, with governance threaded through every engagement.
              </p>
              <p className="text-base md:text-lg text-charcoal/80 leading-[1.65] max-w-[68ch]">
                We publish when we have something earned to say — typically two to four substantive pieces a month, plus quarterly long-form reports. Subscribe below to receive each new piece directly, or filter the catalog by topic and industry to find what's relevant to your remit.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SLOT 3 — White sticky pill-filter bar */}
      <section className="bg-white border-b border-charcoal/10 sticky top-14 md:top-20 z-30">
        <div className="container px-6 sm:px-8 md:px-12 lg:px-16 py-6">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between lg:gap-8">
            <div className="flex flex-col gap-4 flex-1 min-w-0">
              {/* Topic pills */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[11px] uppercase tracking-[0.2em] text-charcoal/50 mr-2">
                  Topic
                </span>
                {topicOptions.map((opt) => {
                  const isActive = topicFilter === opt.value;
                  return (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => {
                        setTopicFilter(opt.value);
                        setTilesShown(12);
                      }}
                      className={
                        isActive
                          ? "inline-flex items-center rounded-full px-4 py-2 text-[12px] uppercase tracking-[0.1em] bg-primary text-white cursor-pointer transition-colors"
                          : "inline-flex items-center rounded-full px-4 py-2 text-[12px] uppercase tracking-[0.1em] border border-border text-charcoal/70 hover:border-charcoal hover:text-charcoal transition-colors cursor-pointer"
                      }
                    >
                      {opt.label}
                    </button>
                  );
                })}
              </div>

              {/* Content type pills */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[11px] uppercase tracking-[0.2em] text-charcoal/50 mr-2">
                  Format
                </span>
                {contentTypeOptions.map((opt) => {
                  const isActive = contentTypeFilter === opt.value;
                  if (opt.disabled) {
                    return (
                      <span
                        key={opt.value}
                        aria-disabled="true"
                        className="inline-flex items-center rounded-full px-4 py-2 text-[12px] uppercase tracking-[0.1em] border border-border text-charcoal/30 cursor-not-allowed"
                      >
                        {opt.label}
                      </span>
                    );
                  }
                  return (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => setContentTypeFilter(opt.value)}
                      className={
                        isActive
                          ? "inline-flex items-center rounded-full px-4 py-2 text-[12px] uppercase tracking-[0.1em] bg-primary text-white cursor-pointer transition-colors"
                          : "inline-flex items-center rounded-full px-4 py-2 text-[12px] uppercase tracking-[0.1em] border border-border text-charcoal/70 hover:border-charcoal hover:text-charcoal transition-colors cursor-pointer"
                      }
                    >
                      {opt.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Reset filters — visible only when filters are active */}
            {hasFiltersActive && (
              <div className="flex lg:items-start lg:pt-1 shrink-0">
                <button
                  type="button"
                  onClick={resetFilters}
                  className="text-[13px] uppercase tracking-[0.1em] text-primary hover:text-primary-hover cursor-pointer transition-colors"
                >
                  Reset filters →
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* SLOT 4 — White primary article grid (3-col desktop, 12 + Load more) */}
      <section className="bg-white py-16 md:py-24">
        <div className="container px-6 sm:px-8 md:px-12 lg:px-16">
          {filteredArticles.length === 0 ? (
            <div className="max-w-2xl py-12">
              <p className="text-base md:text-lg text-charcoal/80 leading-[1.65] mb-6">
                No articles match your filters.
              </p>
              <button
                type="button"
                onClick={resetFilters}
                className="inline-block px-8 py-3 border border-charcoal/15 text-charcoal/80 hover:border-primary hover:text-primary transition-colors text-[13px] uppercase tracking-[0.1em] font-semibold cursor-pointer"
              >
                Reset filters
              </button>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                {visibleArticles.map((article, index) => (
                  <motion.div
                    key={article.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: (index % 3) * 0.05 }}
                  >
                    <Link href={`/insights/${article.slug}`} className="group block cursor-pointer">
                      <div className="overflow-hidden rounded-xl">
                        <img
                          src={article.heroImage}
                          alt=""
                          loading={index >= 6 ? "lazy" : "eager"}
                          className="w-full aspect-[16/10] object-cover transition-transform duration-[1100ms] ease-out group-hover:scale-[1.04]"
                        />
                      </div>
                      <span className="nx-eyebrow text-primary block mt-5">
                        {article.topic}
                      </span>
                      <h3 className="text-charcoal font-semibold text-[1.2rem] lg:text-[1.35rem] leading-[1.3] tracking-[-0.015em] mt-2 mb-3 group-hover:text-primary transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-[0.95rem] text-muted-foreground leading-[1.6] line-clamp-2 mb-4">
                        {article.dek}
                      </p>
                      <div className="text-[13px] text-muted-foreground">
                        {article.readTime} · {article.date}
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {tilesShown < filteredArticles.length && (
                <div className="mt-16 flex justify-center">
                  <button
                    type="button"
                    onClick={() => setTilesShown((prev) => prev + 12)}
                    className="inline-block px-8 py-3 border border-charcoal/15 text-charcoal/80 hover:border-primary hover:text-primary transition-colors text-[13px] uppercase tracking-[0.1em] font-semibold cursor-pointer"
                  >
                    Load more articles
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* SLOT 5 — Editor's Pick signal section (THE ONE Orange-Red moment) */}
      <section className="bg-charcoal text-white nx-section">
        <div className="px-6 sm:px-8 md:px-12 lg:px-16 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70 mb-6">
              EDITOR'S PICK
            </span>
            <h2 className="nx-h2 text-white mb-8"
              style={{ fontWeight: 500, letterSpacing: "-0.02em" }}
            >
              {editorsPick.title}
            </h2>
            <p className="text-base md:text-lg text-white/85 leading-[1.65] max-w-[60ch] mb-8">
              {editorsPick.dek}
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
              <div className="text-[13px] uppercase tracking-[0.1em] text-white/70">
                {editorsPick.topic} · {editorsPick.readTime}
              </div>
              <Link href={`/insights/${editorsPick.slug}`}>
                <span className="inline-flex items-center gap-2 bg-primary text-white text-[13px] font-semibold uppercase tracking-[0.1em] px-7 py-4 hover:bg-primary-hover transition-colors cursor-pointer">
                  Read article →
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SLOT 6 — Light-grey curated topic rails (3 hand-picked clusters) */}
      <section className="bg-off-white py-24 md:py-32">
        <div className="container px-6 sm:px-8 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 max-w-[60ch]"
          >
            <span className="block text-[14px] font-semibold uppercase tracking-[0.2em] text-charcoal/60 mb-5">
              CURATED COLLECTIONS
            </span>
            <h3
              className="text-3xl md:text-4xl lg:text-5xl text-charcoal leading-[1.1]"
              style={{ fontWeight: 500, letterSpacing: "-0.02em" }}
            >
              Hand-picked deep dives.
            </h3>
          </motion.div>

          <div>
            {topicRails.map((rail, railIndex) => (
              <motion.div
                key={rail.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: railIndex * 0.05 }}
                className="mb-16 lg:mb-20 last:mb-0"
              >
                <span className="block text-[11px] uppercase tracking-[0.1em] text-charcoal/60 mb-3">
                  {rail.eyebrow}
                </span>
                <h4 className="text-2xl md:text-3xl text-charcoal font-medium mb-8 leading-[1.2]">
                  {rail.title}
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {rail.articles.map((article) => (
                    <Link
                      key={article.slug}
                      href={`/insights/${article.slug}`}
                      className="group h-full flex flex-col cursor-pointer bg-white border border-border p-6 lg:p-7 transition-shadow duration-300 hover:shadow-[0_18px_40px_-24px_rgba(0,0,0,0.25)]"
                    >
                      <span className="nx-eyebrow text-primary block mb-3">
                        {article.topic}
                      </span>
                      <h5 className="text-[1.05rem] text-charcoal font-semibold group-hover:text-primary transition-colors leading-[1.35] tracking-[-0.01em] mb-4 flex-1">
                        {article.title}
                      </h5>
                      <div className="text-[12px] text-muted-foreground">
                        {article.readTime} · {article.date}
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SLOT 7 — Light-grey newsletter signup (dedicated band) */}
      <section className="bg-off-white py-24 md:py-32 border-t border-charcoal/10">
        <div className="container px-6 sm:px-8 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center max-w-5xl mx-auto"
          >
            <div>
              <span className="block text-[14px] font-semibold uppercase tracking-[0.2em] text-charcoal/60 mb-5">
                STAY INFORMED
              </span>
              <h3
                className="text-3xl md:text-4xl text-charcoal leading-[1.1] mb-6"
                style={{ fontWeight: 500, letterSpacing: "-0.02em" }}
              >
                Get NexDyne insights in your inbox.
              </h3>
              <p className="text-base md:text-lg text-charcoal/80 leading-[1.65] max-w-[50ch]">
                Quarterly perspectives on intelligence, governance, and execution. No marketing noise.
              </p>
            </div>

            <div>
              {newsletterStatus === "success" ? (
                <div className="bg-white border border-charcoal/10 p-8 lg:p-10">
                  <span className="block text-[14px] font-semibold uppercase tracking-[0.2em] text-charcoal/60 mb-5">
                    SUBSCRIBED
                  </span>
                  <p className="text-base md:text-lg text-charcoal/80 leading-[1.65]">
                    Thanks — you're on the list. Expect our next issue soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="flex flex-col gap-4">
                  <label htmlFor="newsletter-email" className="text-[13px] uppercase tracking-[0.1em] text-charcoal/60 block">
                    Work email
                  </label>
                  <input
                    id="newsletter-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    className="w-full bg-white border border-charcoal/20 px-4 py-3 text-base text-charcoal focus:outline-none focus:border-charcoal transition-colors"
                  />
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmittingNewsletter}
                      className="inline-block px-8 py-4 bg-primary text-primary-foreground hover:bg-primary-hover transition-colors text-[13px] uppercase tracking-[0.1em] font-semibold cursor-pointer disabled:opacity-50"
                    >
                      {isSubmittingNewsletter ? "Subscribing…" : "Subscribe"}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SLOT 8 — White secondary content-type rails (Reports + Podcasts placeholder) */}
      <section className="bg-white py-24 md:py-32 border-t border-charcoal/10">
        <div className="container px-6 sm:px-8 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 max-w-[60ch]"
          >
            <span className="block text-[14px] font-semibold uppercase tracking-[0.2em] text-charcoal/60 mb-5">
              MORE FORMATS
            </span>
            <h3
              className="text-3xl md:text-4xl lg:text-5xl text-charcoal leading-[1.1]"
              style={{ fontWeight: 500, letterSpacing: "-0.02em" }}
            >
              Coming soon.
            </h3>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-5">
            <div className="bg-white border border-border">
              <div className="h-full p-12 flex flex-col">
                <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-charcoal/60 mb-5">
                  REPORTS · COMING SOON
                </span>
                <h3 className="text-2xl md:text-3xl text-charcoal font-medium mb-5 leading-[1.2]">
                  In-depth research and frameworks.
                </h3>
                <p className="text-base text-charcoal/60 leading-[1.6] flex-1">
                  Long-form research on the doctrines and frameworks behind transformation — multi-quarter studies, primary research with growing operators, and the methodology papers that sit behind the engagements. Subscribe above to be the first to receive them when the catalog opens.
                </p>
              </div>
            </div>
            <div className="bg-white border border-border">
              <div className="h-full p-12 flex flex-col">
                <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-charcoal/60 mb-5">
                  PODCASTS · COMING SOON
                </span>
                <h3 className="text-2xl md:text-3xl text-charcoal font-medium mb-5 leading-[1.2]">
                  Conversations with practitioners.
                </h3>
                <p className="text-base text-charcoal/60 leading-[1.6] flex-1">
                  Long-form interviews with the operators, partners, and board members actually running transformation programs — recorded after the deck is closed and the engagement is in flight. Subscribe above to be notified when the first episode drops.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SLOT 9 — Charcoal closing CTA */}
      <section className="bg-charcoal text-white py-24 md:py-32">
        <div className="container px-6 sm:px-8 md:px-12 lg:px-16 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="block text-[14px] font-semibold uppercase tracking-[0.2em] text-white/70 mb-5">
              WORK WITH US
            </span>
            <h2 className="nx-h2 text-white mb-8"
              style={{ fontWeight: 500, letterSpacing: "-0.02em" }}
            >
              Have a problem worth solving?
            </h2>
            <p className="text-base md:text-lg text-white/80 leading-[1.65] mb-10 max-w-[60ch]">
              Tell us what you're working on. We'll route you to the practice lead who can help.
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10">
              <Link href="/contact">
                <span className="inline-block px-8 py-3 bg-primary text-primary-foreground hover:bg-primary-hover transition-colors text-[13px] uppercase tracking-[0.1em] font-semibold cursor-pointer">
                  Talk to a partner →
                </span>
              </Link>
              <Link href="/case-studies">
                <span className="text-[13px] font-semibold uppercase tracking-[0.1em] text-white border-b border-white/40 hover:border-primary hover:text-primary transition-colors cursor-pointer pb-1">
                  See our case studies →
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
