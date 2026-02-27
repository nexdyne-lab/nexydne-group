import InsightArticle from "@/components/InsightArticle";

export default function MAPlaybook() {
  return (
    <InsightArticle
      title="M&A for Growth: A Mid-Market Buyer's Playbook"
      subtitle="How to identify, evaluate, and integrate acquisitions that accelerate your strategic objectives."
      date="December 2025"
      readTime="12 min"
      category="Strategy & Corporate Finance"
      categoryHref="/capabilities/strategy-corporate-finance"
      authors={[
        { name: "Jennifer Martinez", role: "Partner, M&A Advisory" },
        { name: "Robert Kim", role: "Director, Corporate Development" },
      ]}
      relatedContent={[
        {
          title: "Capital Raising in 2026: What Mid-Size Companies Need to Know",
          href: "/capabilities/strategy-corporate-finance/insights/capital-raising-2026",
          category: "Capital",
        },
        {
          title: "The Mid-Market CFO's Guide to Strategic Finance",
          href: "/capabilities/strategy-corporate-finance/insights/strategic-finance-guide",
          category: "Leadership",
        },
      ]}
    >
      <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
        Acquisitions can accelerate growth, expand capabilities, and create competitive advantage. But for mid-market companies without dedicated M&A teams, the process can be daunting. This playbook provides a practical framework for successful acquisitions.
      </p>

      <h2 className="text-2xl font-bold text-charcoal mt-12 mb-6 eb-garamond">
        Why Mid-Market Companies Acquire
      </h2>
      <p className="text-charcoal/80 mb-6 leading-relaxed">
        The most successful mid-market acquirers pursue deals for clear strategic reasons: geographic expansion, capability addition, customer access, or talent acquisition. Opportunistic deals without strategic rationale rarely deliver expected value.
      </p>

      <h2 className="text-2xl font-bold text-charcoal mt-12 mb-6 eb-garamond">
        Building Your M&A Capability
      </h2>
      <p className="text-charcoal/80 mb-6 leading-relaxed">
        Even without a dedicated team, mid-market companies can build effective M&A capabilities through clear strategy, systematic processes, and selective use of external advisors.
      </p>

      <h2 className="text-2xl font-bold text-charcoal mt-12 mb-6 eb-garamond">
        The Integration Imperative
      </h2>
      <p className="text-charcoal/80 mb-6 leading-relaxed">
        Integration is where most acquisitions succeed or fail. Planning should begin before the deal closes and address people, processes, systems, and culture.
      </p>

      <h2 className="text-2xl font-bold text-charcoal mt-12 mb-6 eb-garamond">
        Key Takeaways
      </h2>
      <ul className="list-disc pl-6 text-charcoal/80 space-y-3 mb-8">
        <li>Acquisitions should serve clear strategic objectives</li>
        <li>Systematic processes improve deal quality and execution</li>
        <li>Integration planning must begin before close</li>
        <li>Cultural fit is as important as financial fit</li>
      </ul>
    </InsightArticle>
  );
}
