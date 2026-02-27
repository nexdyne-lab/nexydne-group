import InsightArticle from "@/components/InsightArticle";

export default function WorkforcePlanning() {
  return (
    <InsightArticle
      title="Workforce Planning in an Uncertain Economy"
      subtitle="Strategies for right-sizing your workforce while maintaining capability for growth."
      date="November 2025"
      readTime="8 min"
      category="Operations"
      categoryHref="/capabilities/operations"
      authors={[
        { name: "Patricia Lee", role: "Partner, Workforce Transformation" },
      ]}
      relatedContent={[
        {
          title: "Operational Metrics That Matter: A Mid-Market Guide",
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
      <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
        Economic uncertainty makes workforce planning challenging. Companies must balance cost control with capability preservation. This guide provides strategies for navigating workforce decisions in uncertain times.
      </p>

      <h2 className="text-2xl font-bold text-charcoal mt-12 mb-6 eb-garamond">
        The Workforce Planning Challenge
      </h2>
      <p className="text-charcoal/80 mb-6 leading-relaxed">
        In uncertain economies, workforce decisions carry high stakes. Cutting too deep damages capability; maintaining excess capacity strains finances. The key is developing flexible workforce models.
      </p>

      <h2 className="text-2xl font-bold text-charcoal mt-12 mb-6 eb-garamond">
        Key Takeaways
      </h2>
      <ul className="list-disc pl-6 text-charcoal/80 space-y-3 mb-8">
        <li>Workforce planning requires balancing cost and capability</li>
        <li>Flexible workforce models provide optionality</li>
        <li>Skills-based planning improves decision quality</li>
        <li>Communication is critical during workforce changes</li>
      </ul>
    </InsightArticle>
  );
}
