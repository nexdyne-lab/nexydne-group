import InsightArticleV2 from "@/components/InsightArticleV2";

export default function WorkingCapital() {
  const sections = [
    { id: "working-capital-opportunity", label: "The Working Capital Opportunity" },
    { id: "quick-wins-long-term", label: "Quick Wins vs. Long-Term Strategies" },
  ];

  return (
    <InsightArticleV2
      title="Working Capital Optimization: Quick Wins and Long-Term Strategies"
      subtitle="Practical approaches to improving cash flow without sacrificing growth or relationships."
      date="November 2025"
      readTime="8 min"
      category="Strategy & Corporate Finance"
      categoryHref="/capabilities/strategy-corporate-finance"
      heroImage="/images/insight-working-capital-optimization.jpg"
      sections={sections}
      keyTakeaways={[
        "Most companies have significant working capital improvement opportunity.",
        "Quick wins can be captured through process improvements.",
        "Sustainable improvement requires a systematic approach.",
        "Balance cash optimization with customer and supplier relationships.",
      ]}
      authors={[
        { name: "Lisa Chang", role: "Director, Treasury & Working Capital" },
      ]}
      relatedContent={[
        {
          title: "The CFO's Guide to Strategic Finance",
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
      <p>
        Working capital optimization can free significant cash without external financing. For growing companies, even modest improvements in receivables, payables, and inventory can release millions in trapped capital.
      </p>

      <h2 id="working-capital-opportunity">The Working Capital Opportunity</h2>
      <p>
        Most growing companies have 10-20% improvement opportunity in working capital. This represents cash that can fund growth, reduce debt, or provide operating flexibility.
      </p>

      <h2 id="quick-wins-long-term">Quick Wins vs. Long-Term Strategies</h2>
      <p>
        Some working capital improvements can be captured quickly through better processes and policies. Others require longer-term investments in systems, relationships, and organizational capabilities.
      </p>
    </InsightArticleV2>
  );
}
