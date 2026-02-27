import InsightArticle from "@/components/InsightArticle";

export default function QualitySystems() {
  return (
    <InsightArticle
      title="Quality Management Systems That Scale"
      subtitle="Building quality processes that maintain standards as your company grows."
      date="December 2025"
      readTime="7 min"
      category="Operations"
      categoryHref="/capabilities/operations"
      authors={[
        { name: "Mark Anderson", role: "Senior Manager, Quality Excellence" },
      ]}
      relatedContent={[
        {
          title: "Lean Operations for Mid-Size Companies: Beyond the Basics",
          href: "/capabilities/operations/insights/lean-operations",
          category: "Lean",
        },
        {
          title: "Operational Metrics That Matter: A Mid-Market Guide",
          href: "/capabilities/operations/insights/operational-metrics",
          category: "Performance",
        },
      ]}
    >
      <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
        Quality management is often a casualty of growth. As companies scale, the informal quality processes that worked at smaller scale break down. This guide outlines how to build quality systems that scale with your business.
      </p>

      <h2 className="text-2xl font-bold text-charcoal mt-12 mb-6 eb-garamond">
        The Quality Challenge
      </h2>
      <p className="text-charcoal/80 mb-6 leading-relaxed">
        Growing companies face a common quality dilemma: the processes that ensured quality at smaller scale become bottlenecks as volume increases. The solution is building scalable quality systems.
      </p>

      <h2 className="text-2xl font-bold text-charcoal mt-12 mb-6 eb-garamond">
        Key Takeaways
      </h2>
      <ul className="list-disc pl-6 text-charcoal/80 space-y-3 mb-8">
        <li>Quality systems must evolve as companies grow</li>
        <li>Prevention is more scalable than inspection</li>
        <li>Technology enables quality at scale</li>
        <li>Culture is the foundation of sustainable quality</li>
      </ul>
    </InsightArticle>
  );
}
