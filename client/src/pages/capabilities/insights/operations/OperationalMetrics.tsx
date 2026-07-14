import InsightArticleV2 from "@/components/InsightArticleV2";

export default function OperationalMetrics() {
  const sections = [
    { id: "metrics-problem", label: "The Metrics Problem" },
  ];

  return (
    <InsightArticleV2
      title="Operational Metrics That Matter: A Practical Guide"
      subtitle="The KPIs that actually drive performance, and how to implement them without overwhelming your team."
      heroImage="/images/performance-intelligence-abstract.jpg"
      date="November 2025"
      readTime="6 min"
      category="Operations"
      categoryHref="/capabilities/operations"
      sections={sections}
      authors={[
        { name: "Kevin Brown", role: "Director, Performance Analytics" },
      ]}
      keyTakeaways={[
        "Less is more with operational metrics",
        "Leading indicators are more actionable than lagging",
        "Metrics must be tied to clear accountability",
        "Regular review cadence drives improvement",
      ]}
      relatedContent={[
        {
          title: "Quality Management Systems That Scale",
          href: "/capabilities/operations/insights/quality-systems",
          category: "Quality",
        },
        {
          title: "Workforce Planning in an Uncertain Economy",
          href: "/capabilities/operations/insights/workforce-planning",
          category: "Workforce",
        },
      ]}
    >
      <p>
        Most companies track too many metrics and act on too few. This guide identifies the operational KPIs that actually drive performance and provides practical guidance for implementation.
      </p>

      <h2 id="metrics-problem">The Metrics Problem</h2>
      <p>
        Many companies suffer from metric overload. Dashboards display dozens of KPIs, but few drive action. The solution is focusing on a small number of metrics that matter.
      </p>
    </InsightArticleV2>
  );
}
