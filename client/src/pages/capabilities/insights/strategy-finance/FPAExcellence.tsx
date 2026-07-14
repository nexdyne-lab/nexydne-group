import InsightArticleV2 from "@/components/InsightArticleV2";

export default function FPAExcellence() {
  const sections = [
    { id: "maturity-model", label: "The FP&A Maturity Model" },
    { id: "essential-capabilities", label: "Essential FP&A Capabilities" },
  ];

  return (
    <InsightArticleV2
      title="Building a World-Class FP&A Function"
      subtitle="The capabilities, tools, and processes that separate good FP&A from great FP&A."
      date="December 2025"
      readTime="8 min"
      category="Strategy & Corporate Finance"
      categoryHref="/capabilities/strategy-corporate-finance"
      heroImage="/images/fpa-abstract.jpg"
      sections={sections}
      keyTakeaways={[
        "FP&A has evolved from reporting to strategic partnership.",
        "Most growing companies have significant room to improve.",
        "Technology enables but doesn't replace analytical capability.",
        "Business partnership requires deep operational understanding.",
      ]}
      authors={[
        { name: "Amanda Foster", role: "Senior Manager, FP&A Transformation" },
      ]}
      relatedContent={[
        {
          title: "The CFO's Guide to Strategic Finance",
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
      <p>
        Financial Planning &amp; Analysis has evolved from a back-office function to a strategic capability. World-class FP&amp;A teams drive better decisions, improve forecast accuracy, and enable agile responses to market changes.
      </p>

      <h2 id="maturity-model">The FP&amp;A Maturity Model</h2>
      <p>
        FP&amp;A functions typically evolve through four stages: reactive reporting, proactive analysis, strategic partnership, and predictive intelligence. Most growing companies operate at stages one or two, with significant opportunity to advance.
      </p>

      <h2 id="essential-capabilities">Essential FP&amp;A Capabilities</h2>
      <p>
        World-class FP&amp;A requires excellence in forecasting, variance analysis, scenario planning, and business partnership. These capabilities must be supported by appropriate tools and processes.
      </p>
    </InsightArticleV2>
  );
}
