import InsightArticleV2 from "@/components/InsightArticleV2";

export default function LeanOperations() {
  const sections = [
    { id: "lean-principles", label: "Lean Principles for Mid-Size Companies" },
    { id: "lean-tools", label: "High-Impact Lean Tools" },
    { id: "key-takeaways", label: "Key Takeaways" },
  ];

  return (
    <InsightArticleV2
      title="Lean Operations for Mid-Size Companies: Beyond the Basics"
      subtitle="Advanced lean techniques adapted for companies without dedicated continuous improvement teams."
      date="January 2026"
      readTime="9 min"
      category="Operations"
      categoryHref="/capabilities/operations"
      sections={sections}
      keyTakeaways={[
        "Lean principles apply to companies of all sizes",
        "Implementation must be adapted for limited resources",
        "Start with high-impact, low-complexity tools",
        "Build capability gradually through practice",
      ]}
      authors={[
        { name: "James Wilson", role: "Partner, Operations Excellence" },
      ]}
      relatedContent={[
        {
          title: "Supply Chain Resilience: Lessons from Recent Disruptions",
          href: "/capabilities/operations/insights/iot-resilient-supply-chain",
          category: "Supply Chain",
        },
        {
          title: "The Automation ROI Calculator: Where to Invest First",
          href: "/capabilities/operations/insights/automation-roi",
          category: "Automation",
        },
      ]}
    >
      <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
        Lean principles have transformed manufacturing and service operations worldwide. But most lean methodologies were developed for large enterprises with dedicated continuous improvement teams. This guide adapts lean techniques for mid-size companies with limited resources.
      </p>

      <h2 id="lean-principles" className="text-2xl font-bold text-charcoal mt-12 mb-6">
        Lean Principles for Mid-Size Companies
      </h2>
      <p className="text-charcoal/80 mb-6 leading-relaxed">
        The core principles of lean—eliminating waste, continuous improvement, and respect for people—apply regardless of company size. However, the implementation approach must be adapted for organizations without dedicated lean teams.
      </p>

      <h2 id="lean-tools" className="text-2xl font-bold text-charcoal mt-12 mb-6">
        High-Impact Lean Tools
      </h2>
      <p className="text-charcoal/80 mb-6 leading-relaxed">
        Not all lean tools deliver equal value for mid-size companies. We recommend starting with value stream mapping, 5S, and visual management before advancing to more complex techniques.
      </p>

      <h2 id="key-takeaways" className="text-2xl font-bold text-charcoal mt-12 mb-6">
        Key Takeaways
      </h2>
      <ul className="list-disc pl-6 text-charcoal/80 space-y-3 mb-8">
        <li>Lean principles apply to companies of all sizes</li>
        <li>Implementation must be adapted for limited resources</li>
        <li>Start with high-impact, low-complexity tools</li>
        <li>Build capability gradually through practice</li>
      </ul>
    </InsightArticleV2>
  );
}
