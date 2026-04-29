import { motion } from "framer-motion";
import { Link } from "wouter";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import InsightsFeaturedHero from "@/components/insights/InsightsFeaturedHero";
import { SEO } from "@/components/SEO";

export default function Insights() {
  // ── Filter + UI state ──────────────────────────────────────────────────────
  const [topicFilter, setTopicFilter] = useState<string>("all");
  const [industryFilter, setIndustryFilter] = useState<string>("all");
  const [contentTypeFilter, setContentTypeFilter] = useState<string>("articles");
  const [tilesShown, setTilesShown] = useState<number>(12);
  const [email, setEmail] = useState<string>("");
  const [isSubmittingNewsletter, setIsSubmittingNewsletter] = useState<boolean>(false);
  const [newsletterStatus, setNewsletterStatus] = useState<"idle" | "success">("idle");

  // ── Featured article (drives Section 1 hero) ───────────────────────────────
  const featuredArticle = {
    slug: "the-hig-framework-why-mid-market-needs-more-than-strategy",
    title: "The HIG Framework: why mid-market transformation needs more than strategy.",
    dek: "Most consulting models stop at the deck. NexDyne builds, governs, and scales — across every vertical. Here's the doctrine behind it.",
    heroImage: "/images/insights-featured-hig.jpg",
    topic: "Strategy",
    readTime: "8 min read",
    date: "April 2026",
  };

  // ── Editor's Pick (drives Section 5 signal section — DIFFERENT article) ────
  const editorsPick = {
    slug: "ai-governance-the-quiet-discipline-that-makes-transformation-stick",
    title: "AI governance: the quiet discipline that makes transformation stick.",
    dek: "Most AI deployments fail not at launch but at month 18. Governance is what turns a one-time deployment into lasting organizational change.",
    topic: "Governance",
    readTime: "12 min read",
    date: "April 2026",
  };

  // ── Filter pill option lists ───────────────────────────────────────────────
  const topicOptions = [
    { value: "all", label: "All" },
    { value: "Strategy", label: "Strategy" },
    { value: "Governance", label: "Governance" },
    { value: "Customer Intelligence", label: "Customer Intelligence" },
    { value: "Process Optimization", label: "Process Optimization" },
    { value: "Enterprise Transformation", label: "Enterprise Transformation" },
    { value: "Business Growth", label: "Business Growth" },
  ];

  const industryOptions = [
    { value: "all", label: "All Industries" },
    { value: "Education", label: "Education" },
    { value: "Government & Public Sector", label: "Government & Public Sector" },
    { value: "Agriculture & AgTech", label: "Agriculture & AgTech" },
    { value: "Healthcare & Life Sciences", label: "Healthcare & Life Sciences" },
    { value: "Financial Services", label: "Financial Services" },
    { value: "Manufacturing", label: "Manufacturing" },
    { value: "Retail & Consumer Goods", label: "Retail & Consumer Goods" },
    { value: "Professional Services", label: "Professional Services" },
  ];

  const contentTypeOptions = [
    { value: "articles", label: "Articles", disabled: false },
    { value: "reports", label: "Reports", disabled: true },
    { value: "podcasts", label: "Podcasts", disabled: true },
  ];

  // ── Mock article catalog (16 entries — primary grid source) ────────────────
  const articles = [
    {
      slug: "predictive-analytics-the-quiet-edge-in-customer-retention",
      title: "Predictive analytics: the quiet edge in customer retention.",
      dek: "Most retention programs react to churn. Predictive models intervene before the customer has decided to leave — and the math behind that gap is where margin lives.",
      heroImage: "/images/insights-predictive-retention.jpg",
      topic: "Customer Intelligence",
      industry: "Financial Services",
      readTime: "9 min read",
      date: "April 2026",
    },
    {
      slug: "process-mining-what-the-logs-actually-tell-you",
      title: "Process mining: what the logs actually tell you.",
      dek: "Workflow diagrams describe what should happen. Process mining surfaces what does. The gap between the two is the cost center most operators can't see.",
      heroImage: "/images/insights-process-mining.jpg",
      topic: "Process Optimization",
      industry: "Manufacturing",
      readTime: "11 min read",
      date: "April 2026",
    },
    {
      slug: "ai-pilots-to-platform-the-month-18-problem",
      title: "From AI pilots to platform: the month-18 problem.",
      dek: "Most enterprises can ship a successful AI pilot. Far fewer turn it into a platform. The transition is where transformation actually happens — or quietly stalls.",
      heroImage: "/images/insights-ai-platform.jpg",
      topic: "Enterprise Transformation",
      industry: "Healthcare & Life Sciences",
      readTime: "13 min read",
      date: "March 2026",
    },
    {
      slug: "behavioral-segmentation-beyond-the-persona-deck",
      title: "Behavioral segmentation beyond the persona deck.",
      dek: "Persona decks describe who the customer was last quarter. Behavioral segmentation reveals what they're about to do. Three case studies on the difference.",
      heroImage: "/images/insights-behavioral-segmentation.jpg",
      topic: "Customer Intelligence",
      industry: "Retail & Consumer Goods",
      readTime: "7 min read",
      date: "March 2026",
    },
    {
      slug: "the-governance-gap-why-most-ai-policies-fail-quietly",
      title: "The governance gap: why most AI policies fail quietly.",
      dek: "Boards approve AI governance frameworks. Practitioners route around them. What separates the policies that hold from the ones that fold.",
      heroImage: "/images/insights-governance-gap.jpg",
      topic: "Governance",
      industry: "Government & Public Sector",
      readTime: "10 min read",
      date: "March 2026",
    },
    {
      slug: "growth-after-product-market-fit-the-second-curve",
      title: "Growth after product-market fit: the second curve.",
      dek: "The first curve is finding what customers want. The second is engineering the systems that scale it. Most growth stalls happen between the two.",
      heroImage: "/images/insights-second-curve.jpg",
      topic: "Business Growth",
      industry: "Professional Services",
      readTime: "8 min read",
      date: "March 2026",
    },
    {
      slug: "modernizing-legacy-without-the-rip-and-replace-trap",
      title: "Modernizing legacy without the rip-and-replace trap.",
      dek: "Wholesale replacement is the most expensive form of risk transfer. There's a quieter path that compounds — and it starts with the parts you don't replace.",
      heroImage: "/images/insights-legacy-modernization.jpg",
      topic: "Enterprise Transformation",
      industry: "Manufacturing",
      readTime: "12 min read",
      date: "February 2026",
    },
    {
      slug: "customer-data-platforms-when-they-pay-back",
      title: "Customer data platforms: when they actually pay back.",
      dek: "CDPs ship with a payback narrative the vendor wrote. The real economics depend on three operational variables most evaluations skip.",
      heroImage: "/images/insights-cdp-payback.jpg",
      topic: "Customer Intelligence",
      industry: "Retail & Consumer Goods",
      readTime: "9 min read",
      date: "February 2026",
    },
    {
      slug: "intelligent-automation-stop-automating-the-wrong-work",
      title: "Intelligent automation: stop automating the wrong work.",
      dek: "Automation ROI hinges on what you choose not to automate. A field guide to the diagnostic our process leads run before any RPA brief gets written.",
      heroImage: "/images/insights-intelligent-automation.jpg",
      topic: "Process Optimization",
      industry: "Financial Services",
      readTime: "10 min read",
      date: "February 2026",
    },
    {
      slug: "the-board-conversation-about-ai-that-isnt-happening",
      title: "The board conversation about AI that isn't happening.",
      dek: "Most boards are asking about AI strategy. Few are asking about AI accountability. The strategic risk lives almost entirely in the second question.",
      heroImage: "/images/insights-board-ai-conversation.jpg",
      topic: "Governance",
      industry: "Financial Services",
      readTime: "6 min read",
      date: "February 2026",
    },
    {
      slug: "go-to-market-acceleration-when-speed-helps-and-when-it-burns",
      title: "Go-to-market acceleration: when speed helps and when it burns.",
      dek: "Faster GTM works only when the underlying offer is repeatable. A practical test for distinguishing acceleration from premature scaling.",
      heroImage: "/images/insights-gtm-acceleration.jpg",
      topic: "Business Growth",
      industry: "Education",
      readTime: "7 min read",
      date: "January 2026",
    },
    {
      slug: "data-platform-engineering-the-foundation-everyone-skips",
      title: "Data platform engineering: the foundation everyone skips.",
      dek: "Analytics dashboards get the budget. The platform underneath them gets the postmortem. Why the order needs to flip — and what it takes to flip it.",
      heroImage: "/images/insights-data-platform.jpg",
      topic: "Enterprise Transformation",
      industry: "Healthcare & Life Sciences",
      readTime: "11 min read",
      date: "January 2026",
    },
    {
      slug: "voice-of-customer-programs-that-actually-change-the-product",
      title: "Voice-of-customer programs that actually change the product.",
      dek: "VoC programs collect signal at industrial scale and convert almost none of it into product change. The conversion mechanism is the program — not the survey.",
      heroImage: "/images/insights-voc-product.jpg",
      topic: "Customer Intelligence",
      industry: "Agriculture & AgTech",
      readTime: "8 min read",
      date: "January 2026",
    },
    {
      slug: "workflow-optimization-the-hidden-cost-of-context-switching",
      title: "Workflow optimization: the hidden cost of context switching.",
      dek: "The biggest productivity tax in modern operations is the switch between systems. Three patterns that quietly reclaim 15-25% of operator time.",
      heroImage: "/images/insights-context-switching.jpg",
      topic: "Process Optimization",
      industry: "Professional Services",
      readTime: "5 min read",
      date: "January 2026",
    },
    {
      slug: "pricing-strategy-the-discipline-most-mid-market-companies-defer",
      title: "Pricing strategy: the discipline most mid-market companies defer.",
      dek: "Pricing is the highest-leverage decision a mid-market company makes — and the one most often delegated to spreadsheets. Why the delegation costs more than it saves.",
      heroImage: "/images/insights-pricing-strategy.jpg",
      topic: "Business Growth",
      industry: "Manufacturing",
      readTime: "9 min read",
      date: "January 2026",
    },
    {
      slug: "building-a-case-for-change-without-a-burning-platform",
      title: "Building a case for change without a burning platform.",
      dek: "Crisis-driven transformation is overpriced. The harder, more durable mandate is one built before the crisis. A field-tested narrative architecture.",
      heroImage: "/images/insights-case-for-change.jpg",
      topic: "Strategy",
      industry: "Education",
      readTime: "14 min read",
      date: "January 2026",
    },
  ];

  // ── Curated topic rails (3 hand-picked clusters, 3 articles each) ──────────
  const topicRails = [
    {
      eyebrow: "DEEP DIVE",
      title: "Customer intelligence done right",
      articles: [
        articles[0], // predictive analytics
        articles[3], // behavioral segmentation
        articles[7], // CDP payback
      ],
    },
    {
      eyebrow: "NEW POV",
      title: "Process optimization at scale",
      articles: [
        articles[1], // process mining
        articles[8], // intelligent automation
        articles[13], // workflow optimization
      ],
    },
    {
      eyebrow: "FROM THE FIELD",
      title: "Enterprise transformation playbooks",
      articles: [
        articles[2], // ai pilots to platform
        articles[6], // legacy modernization
        articles[11], // data platform engineering
      ],
    },
  ];

  // ── Filter + pagination logic ──────────────────────────────────────────────
  const filteredArticles = articles.filter((article) => {
    if (topicFilter !== "all" && article.topic !== topicFilter) return false;
    if (industryFilter !== "all" && article.industry !== industryFilter) return false;
    // contentTypeFilter is "articles" by default; reports/podcasts are disabled at v1
    return true;
  });
  const visibleArticles = filteredArticles.slice(0, tilesShown);
  const hasFiltersActive = topicFilter !== "all" || industryFilter !== "all";

  const resetFilters = () => {
    setTopicFilter("all");
    setIndustryFilter("all");
    setTilesShown(12);
  };

  // ── Newsletter submit handler (stub — backend wiring is a follow-up) ───────
  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingNewsletter(true);

    // TODO: wire to real backend
    // Example: await fetch('/api/newsletter', { method: 'POST', body: JSON.stringify({ email }) });
    await new Promise((resolve) => setTimeout(resolve, 600));

    setIsSubmittingNewsletter(false);
    setNewsletterStatus("success");
  };

  return (
    <div className="min-h-screen bg-white font-sans text-charcoal">
      <SEO
        title="Insights"
        description="Perspectives on intelligence, governance, and execution from the NexDyne practice. Articles, reports, and conversations on mid-market transformation."
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
      <section className="bg-white border-b border-charcoal/10 sticky top-20 z-30">
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
                          ? "inline-flex items-center px-4 py-2 text-[13px] uppercase tracking-[0.1em] border border-primary text-primary cursor-pointer transition-colors"
                          : "inline-flex items-center px-4 py-2 text-[13px] uppercase tracking-[0.1em] border border-charcoal/15 text-charcoal/70 hover:border-primary hover:text-primary transition-colors cursor-pointer"
                      }
                    >
                      {opt.label}
                    </button>
                  );
                })}
              </div>

              {/* Industry pills */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[11px] uppercase tracking-[0.2em] text-charcoal/50 mr-2">
                  Industry
                </span>
                {industryOptions.map((opt) => {
                  const isActive = industryFilter === opt.value;
                  return (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => {
                        setIndustryFilter(opt.value);
                        setTilesShown(12);
                      }}
                      className={
                        isActive
                          ? "inline-flex items-center px-4 py-2 text-[13px] uppercase tracking-[0.1em] border border-primary text-primary cursor-pointer transition-colors"
                          : "inline-flex items-center px-4 py-2 text-[13px] uppercase tracking-[0.1em] border border-charcoal/15 text-charcoal/70 hover:border-primary hover:text-primary transition-colors cursor-pointer"
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
                        className="inline-flex items-center px-4 py-2 text-[13px] uppercase tracking-[0.1em] border border-charcoal/10 text-charcoal/30 cursor-not-allowed"
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
                          ? "inline-flex items-center px-4 py-2 text-[13px] uppercase tracking-[0.1em] border border-primary text-primary cursor-pointer transition-colors"
                          : "inline-flex items-center px-4 py-2 text-[13px] uppercase tracking-[0.1em] border border-charcoal/15 text-charcoal/70 hover:border-primary hover:text-primary transition-colors cursor-pointer"
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
                      <div className="aspect-[16/9] overflow-hidden">
                        <img
                          src={article.heroImage}
                          alt=""
                          loading={index >= 6 ? "lazy" : "eager"}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                        />
                      </div>
                      <span className="block text-[11px] uppercase tracking-[0.1em] text-charcoal/60 mt-6 mb-3">
                        {article.topic}
                      </span>
                      <h3 className="text-xl md:text-2xl text-charcoal font-medium leading-[1.25] mb-3 group-hover:text-primary transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-base text-charcoal/75 leading-[1.55] line-clamp-2 mb-4">
                        {article.dek}
                      </p>
                      <div className="text-[12px] text-charcoal/50">
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
      <section className="bg-primary text-primary-foreground py-24 md:py-32">
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
            <h2
              className="text-3xl md:text-4xl lg:text-5xl text-white leading-[1.15] mb-8"
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
                <span className="text-[13px] font-semibold uppercase tracking-[0.1em] text-white border-b border-white/40 hover:border-white pb-1 cursor-pointer">
                  Read article →
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SLOT 6 — Light-grey curated topic rails (3 hand-picked clusters) */}
      <section className="bg-grey py-24 md:py-32">
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
                      className="group block cursor-pointer bg-white border border-charcoal/10 p-6 lg:p-7"
                    >
                      <span className="block text-[11px] uppercase tracking-[0.1em] text-charcoal/60 mb-3">
                        {article.topic}
                      </span>
                      <h5 className="text-base text-charcoal font-medium group-hover:text-primary transition-colors leading-[1.3] mb-4">
                        {article.title}
                      </h5>
                      <div className="text-[12px] text-charcoal/50">
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
      <section className="bg-grey py-24 md:py-32 border-t border-charcoal/10">
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

          <div className="grid md:grid-cols-2 gap-px bg-charcoal/10 border border-charcoal/10">
            <div className="bg-white">
              <div className="h-full p-12 flex flex-col">
                <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-charcoal/60 mb-5">
                  REPORTS · COMING SOON
                </span>
                <h3 className="text-2xl md:text-3xl text-charcoal font-medium mb-5 leading-[1.2]">
                  In-depth research and frameworks.
                </h3>
                <p className="text-base text-charcoal/60 leading-[1.6] flex-1">
                  Long-form research on the doctrines and frameworks behind transformation — multi-quarter studies, primary research with mid-market operators, and the methodology papers that sit behind the engagements. Subscribe above to be the first to receive them when the catalog opens.
                </p>
              </div>
            </div>
            <div className="bg-white">
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
            <h2
              className="text-3xl md:text-4xl lg:text-5xl text-white leading-[1.1] mb-8"
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
