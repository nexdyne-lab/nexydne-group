import InsightArticle from "@/components/InsightArticle";

export default function WorkingCapital() {
  return (
    <InsightArticle
      title="Working Capital Optimization: Quick Wins and Long-Term Strategies"
      subtitle="Practical approaches to improving cash flow without sacrificing growth or relationships."
      date="November 2025"
      readTime="8 min"
      category="Strategy & Corporate Finance"
      categoryHref="/capabilities/strategy-corporate-finance"
      authors={[
        { name: "Lisa Chang", role: "Director, Treasury & Working Capital" },
      ]}
      relatedContent={[
        {
          title: "The Mid-Market CFO's Guide to Strategic Finance",
          href: "/capabilities/strategy-corporate-finance/insights/strategic-finance-guide",
          category: "Leadership",
        },
        {
          title: "Building a World-Class FP&A Function",
          href: "/capabilities/strategy-corporate-finance/insights/fpa-excellence",
          category: "FP&A",
        },
      ]}
    >
      <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
        Working capital optimization can free significant cash without external financing. For mid-market companies, even modest improvements in receivables, payables, and inventory can release millions in trapped capital.
      </p>

      <h2 className="text-2xl font-bold text-charcoal mt-12 mb-6 eb-garamond">
        The Working Capital Opportunity
      </h2>
      <p className="text-charcoal/80 mb-6 leading-relaxed">
        Most mid-market companies have 10-20% improvement opportunity in working capital. This represents cash that can fund growth, reduce debt, or provide operating flexibility.
      </p>

      <h2 className="text-2xl font-bold text-charcoal mt-12 mb-6 eb-garamond">
        Quick Wins vs. Long-Term Strategies
      </h2>
      <p className="text-charcoal/80 mb-6 leading-relaxed">
        Some working capital improvements can be captured quickly through better processes and policies. Others require longer-term investments in systems, relationships, and organizational capabilities.
      </p>

      <h2 className="text-2xl font-bold text-charcoal mt-12 mb-6 eb-garamond">
        Key Takeaways
      </h2>
      <ul className="list-disc pl-6 text-charcoal/80 space-y-3 mb-8">
        <li>Most companies have significant working capital improvement opportunity</li>
        <li>Quick wins can be captured through process improvements</li>
        <li>Sustainable improvement requires systematic approach</li>
        <li>Balance cash optimization with customer and supplier relationships</li>
      </ul>
    </InsightArticle>
  );
}
