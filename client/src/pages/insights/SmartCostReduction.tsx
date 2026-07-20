import InsightArticleV2 from "@/components/InsightArticleV2";

export default function SmartCostReduction() {
  const sections = [
    { id: "paradox", label: "The cost paradox" },
    { id: "framework", label: "Strategic cost framework" },
    { id: "principles", label: "Principles" },
    { id: "levers", label: "High-impact levers" },
    { id: "mistakes", label: "Common mistakes" },
    { id: "bottom-line", label: "The bottom line" },
  ];

  const relatedInsights = [
    { title: "Working Capital Optimization", category: "Performance Improvement", link: "/insights/working-capital-optimization", image: "/images/insights/working-capital-optimization-hero.jpg" },
    { title: "Lean Operations at Scale", category: "Performance Improvement", link: "/insights/lean-operations-scale", image: "/images/insights/lean-operations-scale-hero.jpg" },
    { title: "A Performance Improvement Framework", category: "Performance Improvement", link: "/insights/performance-improvement-framework", image: "/images/insights/performance-improvement-framework-hero.jpg" },
  ];

  return (
    <InsightArticleV2
      category="Performance Improvement"
      title="Smart Cost Reduction: Beyond the Cuts"
      subtitle="How to reduce costs strategically without damaging your business. A framework for sustainable cost optimization that preserves competitive advantage."
      heroImage="/images/insights/smart-cost-reduction-hero.jpg"
      publishDate="December 2024"
      readTime="10 min"
      sections={sections}
      keyTakeaways={[
        "Most cost-reduction efforts fail because the cuts damage the business in ways that ultimately cost more than they save.",
        "Smart cost reduction sorts spend into strategic, essential, discretionary, and waste categories—and acts differently on each.",
        "It starts with strategy, targets root causes rather than symptoms, and protects the costs that drive revenue.",
        "High-impact levers include process optimization, strategic sourcing, organizational simplification, and portfolio rationalization—while avoiding across-the-board or overly deep cuts.",
      ]}
      relatedInsights={relatedInsights}
    >
      <h2 id="paradox">The Cost Reduction Paradox</h2>
      <p>
        Most cost reduction efforts fail. Not because they don't cut costs—they often do—but because the cuts damage
        the business in ways that ultimately cost more than they save. Revenue declines, quality suffers, key talent
        leaves, and the organization ends up worse off than before.
      </p>
      <p>
        Smart cost reduction is different. It focuses on eliminating waste and inefficiency while preserving—or even
        enhancing—the capabilities that drive competitive advantage. This article provides a framework for cost
        reduction that creates sustainable value.
      </p>

      <h2 id="framework">The Strategic Cost Framework</h2>
      <p>The framework sorts spend into four categories of costs:</p>
      <ul>
        <li>
          <strong>Strategic costs:</strong> Investments that create competitive advantage. Protect and potentially
          increase these.
        </li>
        <li>
          <strong>Essential costs:</strong> Required to operate the business but don't differentiate. Optimize for
          efficiency.
        </li>
        <li>
          <strong>Discretionary costs:</strong> Nice-to-have but not essential. Evaluate ROI and reduce where
          appropriate.
        </li>
        <li>
          <strong>Waste:</strong> Costs that add no value. Eliminate aggressively.
        </li>
      </ul>

      <h2 id="principles">Principles of Smart Cost Reduction</h2>

      <h3>Start with Strategy</h3>
      <p>
        Before cutting costs, clarify what capabilities are essential to your competitive advantage. Cost reduction
        should reinforce strategy, not undermine it.
      </p>

      <h3>Focus on Root Causes</h3>
      <p>
        Symptoms are easy to cut; root causes are hard to address. Sustainable cost reduction requires understanding
        why costs exist and addressing underlying drivers.
      </p>

      <h3>Protect Revenue</h3>
      <p>
        The fastest way to destroy value is to cut costs that drive revenue. Ensure cost reduction efforts don't
        damage customer relationships, product quality, or sales effectiveness.
      </p>

      <h2 id="levers">High-Impact Cost Reduction Levers</h2>
      <ul>
        <li>
          <strong>Process Optimization:</strong> Eliminate waste, reduce variation, and automate repetitive tasks.
          Often delivers 15-30% cost reduction in targeted processes without reducing capability.
        </li>
        <li>
          <strong>Strategic Sourcing:</strong> Consolidate spend, negotiate better terms, and optimize the supplier
          base. Typically delivers 10-20% savings on addressable spend categories.
        </li>
        <li>
          <strong>Organizational Simplification:</strong> Reduce layers, eliminate redundancy, and clarify decision
          rights. Can reduce overhead costs by 20-40% while improving agility.
        </li>
        <li>
          <strong>Portfolio Rationalization:</strong> Exit unprofitable products, customers, or markets. Frees
          resources for higher-value activities and simplifies operations.
        </li>
      </ul>

      <h2 id="mistakes">Common Mistakes to Avoid</h2>
      <ul>
        <li>
          <strong>Across-the-board cuts:</strong> Treating all costs equally ignores strategic importance and often
          damages high-value activities.
        </li>
        <li>
          <strong>Cutting too deep:</strong> Aggressive cuts that damage capability often cost more to repair than they
          save.
        </li>
        <li>
          <strong>Ignoring implementation:</strong> Announcing cuts is easy; actually capturing savings requires
          sustained effort and tracking.
        </li>
        <li>
          <strong>Neglecting culture:</strong> Cost reduction done poorly damages morale and trust. Communication and
          change management matter.
        </li>
      </ul>

      <h2 id="bottom-line">The Bottom Line</h2>
      <p>
        Smart cost reduction is strategic, not tactical. It requires understanding which costs create value and which
        don't, then systematically eliminating waste while protecting competitive advantage. Done right, cost reduction
        strengthens the business; done wrong, it destroys value. The difference is in the approach.
      </p>
    </InsightArticleV2>
  );
}
