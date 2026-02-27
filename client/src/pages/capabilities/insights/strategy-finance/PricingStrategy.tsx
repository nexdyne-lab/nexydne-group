import InsightArticle from "@/components/InsightArticle";

export default function PricingStrategy() {
  return (
    <InsightArticle
      title="Pricing Strategy for Profitable Growth"
      subtitle="How to optimize pricing without losing customers, with frameworks for different business models."
      date="November 2025"
      readTime="7 min"
      category="Strategy & Corporate Finance"
      categoryHref="/capabilities/strategy-corporate-finance"
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
      <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
        Pricing is one of the most powerful levers for improving profitability, yet many mid-market companies approach it reactively. A strategic approach to pricing can significantly improve margins without sacrificing volume.
      </p>

      <h2 className="text-2xl font-bold text-charcoal mt-12 mb-6 eb-garamond">
        The Pricing Opportunity
      </h2>
      <p className="text-charcoal/80 mb-6 leading-relaxed">
        A 1% improvement in price typically has 3-4x the profit impact of a 1% improvement in volume or cost. Yet most companies spend far more time on cost reduction than pricing optimization.
      </p>

      <h2 className="text-2xl font-bold text-charcoal mt-12 mb-6 eb-garamond">
        Pricing Frameworks by Business Model
      </h2>
      <p className="text-charcoal/80 mb-6 leading-relaxed">
        Effective pricing strategies vary by business model. Product companies, service businesses, and subscription models each require different approaches to value-based pricing.
      </p>

      <h2 className="text-2xl font-bold text-charcoal mt-12 mb-6 eb-garamond">
        Key Takeaways
      </h2>
      <ul className="list-disc pl-6 text-charcoal/80 space-y-3 mb-8">
        <li>Pricing improvements have outsized profit impact</li>
        <li>Value-based pricing outperforms cost-plus approaches</li>
        <li>Different business models require different pricing strategies</li>
        <li>Regular price reviews should be part of business rhythm</li>
      </ul>
    </InsightArticle>
  );
}
