import InsightArticleV2 from "@/components/InsightArticleV2";

export default function WorkforcePlanning() {
  const sections = [
    { id: "planning-challenge", label: "The Workforce Planning Challenge" },
  ];

  return (
    <InsightArticleV2
      title="Workforce Planning in an Uncertain Economy"
      subtitle="Strategies for right-sizing your workforce while maintaining capability for growth."
      heroImage="/images/workforce-optimization-abstract.jpg"
      date="November 2025"
      readTime="8 min"
      category="Operations"
      categoryHref="/capabilities/operations"
      sections={sections}
      authors={[
        { name: "Patricia Lee", role: "Partner, Workforce Transformation" },
      ]}
      keyTakeaways={[
        "Workforce planning requires balancing cost and capability",
        "Flexible workforce models provide optionality",
        "Skills-based planning improves decision quality",
        "Communication is critical during workforce changes",
      ]}
      relatedContent={[
        {
          title: "Operational Metrics That Matter: A Practical Guide",
          href: "/capabilities/operations/insights/operational-metrics",
          category: "Performance",
        },
        {
          title: "Lean Operations for Mid-Size Companies: Beyond the Basics",
          href: "/capabilities/operations/insights/lean-operations",
          category: "Lean",
        },
      ]}
    >
      <p>
        Economic uncertainty makes workforce planning challenging. Companies must balance cost control with capability preservation. This guide provides strategies for navigating workforce decisions in uncertain times.
      </p>

      <h2 id="planning-challenge">The Workforce Planning Challenge</h2>
      <p>
        In uncertain economies, workforce decisions carry high stakes. Cutting too deep damages capability; maintaining excess capacity strains finances. The key is developing flexible workforce models.
      </p>
    </InsightArticleV2>
  );
}
