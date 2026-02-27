import InsightArticle from "@/components/InsightArticle";

export default function FPAExcellence() {
  return (
    <InsightArticle
      title="Building a World-Class FP&A Function"
      subtitle="The capabilities, tools, and processes that separate good FP&A from great FP&A."
      date="December 2025"
      readTime="8 min"
      category="Strategy & Corporate Finance"
      categoryHref="/capabilities/strategy-corporate-finance"
      authors={[
        { name: "Amanda Foster", role: "Senior Manager, FP&A Transformation" },
      ]}
      relatedContent={[
        {
          title: "The Mid-Market CFO's Guide to Strategic Finance",
          href: "/capabilities/strategy-corporate-finance/insights/strategic-finance-guide",
          category: "Leadership",
        },
        {
          title: "Working Capital Optimization: Quick Wins and Long-Term Strategies",
          href: "/capabilities/strategy-corporate-finance/insights/working-capital",
          category: "Cash Flow",
        },
      ]}
    >
      <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
        Financial Planning & Analysis has evolved from a back-office function to a strategic capability. World-class FP&A teams drive better decisions, improve forecast accuracy, and enable agile responses to market changes.
      </p>

      <h2 className="text-2xl font-bold text-charcoal mt-12 mb-6 eb-garamond">
        The FP&A Maturity Model
      </h2>
      <p className="text-charcoal/80 mb-6 leading-relaxed">
        FP&A functions typically evolve through four stages: reactive reporting, proactive analysis, strategic partnership, and predictive intelligence. Most mid-market companies operate at stages one or two, with significant opportunity to advance.
      </p>

      <h2 className="text-2xl font-bold text-charcoal mt-12 mb-6 eb-garamond">
        Essential FP&A Capabilities
      </h2>
      <p className="text-charcoal/80 mb-6 leading-relaxed">
        World-class FP&A requires excellence in forecasting, variance analysis, scenario planning, and business partnership. These capabilities must be supported by appropriate tools and processes.
      </p>

      <h2 className="text-2xl font-bold text-charcoal mt-12 mb-6 eb-garamond">
        Key Takeaways
      </h2>
      <ul className="list-disc pl-6 text-charcoal/80 space-y-3 mb-8">
        <li>FP&A has evolved from reporting to strategic partnership</li>
        <li>Most mid-market companies have significant room to improve</li>
        <li>Technology enables but doesn't replace analytical capability</li>
        <li>Business partnership requires deep operational understanding</li>
      </ul>
    </InsightArticle>
  );
}
