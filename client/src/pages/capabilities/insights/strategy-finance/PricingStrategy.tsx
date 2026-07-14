import InsightArticleV2 from "@/components/InsightArticleV2";

export default function PricingStrategy() {
  const sections = [
    { id: "pricing-opportunity", label: "The Pricing Opportunity" },
    { id: "pricing-frameworks", label: "Pricing Frameworks by Business Model" },
  ];

  return (
    <InsightArticleV2
      title="Pricing Strategy for Profitable Growth"
      subtitle="How to optimize pricing without losing customers, with frameworks for different business models."
      date="November 2025"
      readTime="7 min"
      category="Strategy & Corporate Finance"
      categoryHref="/capabilities/strategy-corporate-finance"
      heroImage="/images/insights-pricing-strategy.jpg"
      sections={sections}
      keyTakeaways={[
        "Pricing improvements have outsized profit impact.",
        "Value-based pricing outperforms cost-plus approaches.",
        "Different business models require different pricing strategies.",
        "Regular price reviews should be part of the business rhythm.",
      ]}
      authors={[
        { name: "Thomas Wright", role: "Partner, Pricing & Revenue Management" },
      ]}
      relatedContent={[
        {
          title: "Working Capital Optimization: Quick Wins and Long-Term Strategies",
          href: "/capabilities/strategy-corporate-finance/insights/working-capital",
          category: "Cash Flow",
        },
        {
          title: "Building a World-Class FP&A Function",
          href: "/capabilities/strategy-corporate-finance/insights/fpa-excellence",
          category: "FP&A",
        },
      ]}
    >
      <p>
        Pricing is one of the most powerful levers for improving profitability, yet many growing companies approach it reactively. A strategic approach to pricing can significantly improve margins without sacrificing volume.
      </p>

      <h2 id="pricing-opportunity">The Pricing Opportunity</h2>
      <p>
        A 1% improvement in price typically has 3-4x the profit impact of a 1% improvement in volume or cost. Yet most companies spend far more time on cost reduction than pricing optimization.
      </p>

      <h2 id="pricing-frameworks">Pricing Frameworks by Business Model</h2>
      <p>
        Effective pricing strategies vary by business model. Product companies, service businesses, and subscription models each require different approaches to value-based pricing.
      </p>
    </InsightArticleV2>
  );
}
