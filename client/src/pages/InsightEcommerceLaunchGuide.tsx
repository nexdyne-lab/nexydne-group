import InsightArticleV2 from "@/components/InsightArticleV2";

export default function InsightEcommerceLaunchGuide() {
  const relatedInsights = [
    { title: "Digital channels driving revenue growth", category: "Digital Growth", link: "/insights/digital-channels-growth", image: "/images/abstract-growth.jpg" },
    { title: "The subscription economy playbook", category: "Business Models", link: "/insights/subscription-economy-playbook", image: "/images/business-strategy-abstract.jpg" },
    { title: "E-commerce economics", category: "Digital Commerce", link: "/insights/ecommerce-economics", image: "/images/adoption-abstract.jpg" },
  ];

  const sections = [
    { id: "framework", label: "The 90-day framework" },
    { id: "foundation", label: "Phase 1: Foundation" },
    { id: "build", label: "Phase 2: Build" },
    { id: "launch", label: "Phase 3: Launch" },
    { id: "pitfalls", label: "Pitfalls to avoid" },
  ];

  return (
    <InsightArticleV2
      category="Digital Commerce"
      categoryHref="/insights"
      canonicalPath="/insights/ecommerce-launch-guide"
      title="E-commerce launch guide: from zero to revenue in 90 days"
      subtitle="A practical, week-by-week roadmap for launching e-commerce capabilities quickly and effectively — from platform selection to first revenue."
      heroImage="/images/adoption-abstract.jpg"
      publishDate="January 2026"
      readTime="10 min"
      sections={sections}
      keyTakeaways={[
        "90 days is long enough to build something meaningful and short enough to prevent scope creep — the constraint forces focus.",
        "Three phases: Foundation (weeks 1–4: strategy, platform, design), Build (weeks 5–10: store, catalog, integrations, testing), Launch (weeks 11–12: soft then public).",
        "Start with the top 20% of products that drive 80% of revenue — expand the catalog after launch based on demand.",
        "Launch with 'good enough' and iterate; perfectionism, scope creep, and ignoring mobile are the classic killers.",
      ]}
      relatedInsights={relatedInsights}
    >
      <p>
        Launching e-commerce doesn't have to take years or cost millions. With the right approach, you can go
        from zero to generating revenue in 90 days. This guide provides a practical, week-by-week roadmap.
      </p>

      <h2 id="framework">The 90-day framework</h2>
      <p>
        The launch divides into three phases: <strong>Foundation</strong> (weeks 1–4), <strong>Build</strong>
        (weeks 5–10), and <strong>Launch</strong> (weeks 11–12) — each with specific deliverables and decision
        points. Why 90 days? It's long enough to build something meaningful but short enough to maintain momentum.
        Longer timelines invite scope creep, analysis paralysis, and lost market opportunity.
      </p>

      <h2 id="foundation">Phase 1: Foundation (weeks 1–4)</h2>
      <h3>Week 1 — strategy and requirements</h3>
      <ul>
        <li><strong>Who are your target customers?</strong> Define the ideal profile and buying behavior.</li>
        <li><strong>What will you sell online?</strong> Start focused — the top 20% of products that drive 80% of revenue. Expand later.</li>
        <li><strong>How will you fulfill?</strong> Warehouse, drop-ship, or hybrid.</li>
        <li><strong>Pricing strategy and success metrics</strong> — revenue target, conversion rate, average order value.</li>
      </ul>
      <h3>Week 2 — platform selection</h3>
      <p>
        Match the platform to your needs: <strong>Shopify</strong> for B2C simplicity and speed (4–8 weeks);
        <strong> Shopify Plus</strong> for high-volume B2C with customization (6–10); <strong>BigCommerce</strong> for
        B2B features and complex pricing (8–12); <strong>WooCommerce</strong> for WordPress flexibility (6–10);
        <strong> custom builds</strong> only for genuinely unique requirements (12–20+).
      </p>
      <h3>Weeks 3–4 — design and planning</h3>
      <ul>
        <li>Wireframes for key pages (home, category, product, cart, checkout) and the customer journey.</li>
        <li>Plan integrations (ERP, inventory, shipping, payment) and prepare product data.</li>
      </ul>

      <h2 id="build">Phase 2: Build (weeks 5–10)</h2>
      <ul>
        <li><strong>Weeks 5–6 — platform setup:</strong> configure the platform, theme, payments, shipping rules, and tax.</li>
        <li><strong>Weeks 7–8 — catalog and content:</strong> product listings with quality images and benefit-focused descriptions, categories and navigation, essential pages, search and filtering, trust signals. Product pages are your sales team online — invest here.</li>
        <li><strong>Weeks 9–10 — integrations and testing:</strong> connect inventory/ERP, set up email flows (welcome, abandoned cart, order confirmation), configure analytics, and test the complete purchase flow repeatedly — especially on mobile, where most of your traffic will be.</li>
      </ul>

      <h2 id="launch">Phase 3: Launch (weeks 11–12)</h2>
      <ul>
        <li><strong>Week 11 — soft launch:</strong> employees and close customers only; process real orders, fix issues, train customer service, finalize launch marketing.</li>
        <li><strong>Week 12 — public launch:</strong> announce to your customer base, activate advertising, promote on social, monitor closely, respond fast.</li>
      </ul>
      <p>
        Launch is just the beginning — the first 30 days are for watching real customer behavior and iterating on
        what the data shows.
      </p>

      <h2 id="pitfalls">Common pitfalls to avoid</h2>
      <ul>
        <li><strong>Perfectionism</strong> — launch with "good enough" and iterate. Perfect is the enemy of done.</li>
        <li><strong>Scope creep</strong> — stick to the 90-day plan; add features after launch.</li>
        <li><strong>Ignoring mobile</strong> — design mobile-first; most traffic will be mobile.</li>
        <li><strong>Weak product content</strong> — invest in quality images and descriptions.</li>
        <li><strong>No marketing plan</strong> — build it and they won't come; plan your launch marketing.</li>
        <li><strong>Underestimating fulfillment</strong> — test the fulfillment process before launch.</li>
      </ul>
      <p>
        Launching e-commerce in 90 days is ambitious but achievable. Start with a clear strategy, choose the
        right platform, build systematically, and launch with confidence. The companies that succeed are those
        that launch, learn, and iterate — not those that wait for perfection.
      </p>
    </InsightArticleV2>
  );
}
