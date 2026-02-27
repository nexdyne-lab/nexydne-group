import InsightArticle from "@/components/InsightArticle";

export default function OperationalMetrics() {
  return (
    <InsightArticle
      title="Operational Metrics That Matter: A Mid-Market Guide"
      subtitle="The KPIs that actually drive performance, and how to implement them without overwhelming your team."
      date="November 2025"
      readTime="6 min"
      category="Operations"
      categoryHref="/capabilities/operations"
      authors={[
        { name: "Kevin Brown", role: "Director, Performance Analytics" },
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
      <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
        Most companies track too many metrics and act on too few. This guide identifies the operational KPIs that actually drive performance and provides practical guidance for implementation.
      </p>

      <h2 className="text-2xl font-bold text-charcoal mt-12 mb-6 eb-garamond">
        The Metrics Problem
      </h2>
      <p className="text-charcoal/80 mb-6 leading-relaxed">
        Many companies suffer from metric overload. Dashboards display dozens of KPIs, but few drive action. The solution is focusing on a small number of metrics that matter.
      </p>

      <h2 className="text-2xl font-bold text-charcoal mt-12 mb-6 eb-garamond">
        Key Takeaways
      </h2>
      <ul className="list-disc pl-6 text-charcoal/80 space-y-3 mb-8">
        <li>Less is more with operational metrics</li>
        <li>Leading indicators are more actionable than lagging</li>
        <li>Metrics must be tied to clear accountability</li>
        <li>Regular review cadence drives improvement</li>
      </ul>
    </InsightArticle>
  );
}
