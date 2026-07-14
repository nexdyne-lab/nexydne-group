import InsightArticleV2 from "@/components/InsightArticleV2";

export default function QualitySystems() {
  const sections = [
    { id: "quality-challenge", label: "The Quality Challenge" },
  ];

  return (
    <InsightArticleV2
      title="Quality Management Systems That Scale"
      subtitle="Building quality processes that maintain standards as your company grows."
      heroImage="/images/quality-management-abstract.jpg"
      date="December 2025"
      readTime="7 min"
      category="Operations"
      categoryHref="/capabilities/operations"
      sections={sections}
      authors={[
        { name: "Mark Anderson", role: "Senior Manager, Quality Excellence" },
      ]}
      keyTakeaways={[
        "Quality systems must evolve as companies grow",
        "Prevention is more scalable than inspection",
        "Technology enables quality at scale",
        "Culture is the foundation of sustainable quality",
      ]}
      relatedContent={[
        {
          title: "Lean Operations for Mid-Size Companies: Beyond the Basics",
          href: "/capabilities/operations/insights/lean-operations",
          category: "Lean",
        },
        {
          title: "Operational Metrics That Matter: A Practical Guide",
          href: "/capabilities/operations/insights/operational-metrics",
          category: "Performance",
        },
      ]}
    >
      <p>
        Quality management is often a casualty of growth. As companies scale, the informal quality processes that worked at smaller scale break down. This guide outlines how to build quality systems that scale with your business.
      </p>

      <h2 id="quality-challenge">The Quality Challenge</h2>
      <p>
        Growing companies face a common quality dilemma: the processes that ensured quality at smaller scale become bottlenecks as volume increases. The solution is building scalable quality systems.
      </p>
    </InsightArticleV2>
  );
}
