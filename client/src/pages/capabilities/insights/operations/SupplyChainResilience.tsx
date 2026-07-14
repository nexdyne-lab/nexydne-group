import InsightArticleV2 from "@/components/InsightArticleV2";

export default function SupplyChainResilience() {
  const relatedInsights = [
    { title: "Generative AI in Supply Chain", category: "AI", link: "/insights/generative-supply-chain", image: "/images/insight-genai-operations.jpg" },
    { title: "Digital Twins in Manufacturing", category: "Technology", link: "/insights/digital-twin-manufacturing", image: "/images/sector-manufacturing.jpg" },
    { title: "Lean Operations at Scale", category: "Operations", link: "/insights/lean-operations-scale", image: "/images/insight-lean-at-scale.jpg" },
  ];

  const sections = [
    { id: "imperative", label: "The resilience imperative" },
    { id: "pillars", label: "Five pillars of resilience" },
    { id: "technology", label: "Technology enablers" },
    { id: "getting-started", label: "Getting started" },
  ];

  return (
    <InsightArticleV2
      category="Operations"
      categoryHref="/capabilities/operations/insights"
      title="Building Supply Chain Resilience Without Breaking the Bank"
      subtitle="Practical strategies for mid-size companies to strengthen supply chain resilience while managing costs."
      heroImage="/images/supply-chain-optimization-abstract.jpg"
      publishDate="January 2026"
      readTime="11 min"
      sections={sections}
      authors={[{ name: "NexDyne Consulting Group", role: "Operations Practice" }]}
      keyTakeaways={[
        "Mid-size companies experience an average of 4-6 significant supply disruptions per year, each costing 2-5% of annual revenue—so resilience is now a necessity, not a luxury reserved for large enterprises.",
        "The most resilient companies win on visibility, fast response, and strong supplier relationships rather than on carrying the most inventory or the most suppliers.",
        "Build resilience on five pillars: visibility before inventory, strategic supplier relationships, tiered flexible sourcing, demand-side flexibility, and pre-developed response playbooks.",
        "Accessible cloud platforms, AI-powered demand sensing, and digital supplier networks let smaller companies build enterprise-grade resilience incrementally, without massive upfront investment.",
      ]}
      relatedInsights={relatedInsights}
    >
      <p>
        The past few years have taught every company the importance of supply chain resilience. But for mid-size
        companies, building resilience often seems like a luxury—something that requires the deep pockets and
        sophisticated systems of larger enterprises. This doesn't have to be the case.
      </p>

      <h2 id="imperative">The Resilience Imperative</h2>

      <p>
        Supply chain disruptions are no longer rare events. Our analysis shows that mid-size companies experience
        an average of 4-6 significant supply disruptions per year, each costing 2-5% of annual revenue in lost
        sales, expedited shipping, and customer penalties.
      </p>

      <p>
        The companies that weather these disruptions best aren't necessarily those with the most inventory or the
        most suppliers. They're the ones with the best visibility, the fastest response capabilities, and the
        strongest relationships across their supply network.
      </p>

      <h2 id="pillars">Five Pillars of Cost-Effective Resilience</h2>

      <h3>1. Visibility Before Inventory</h3>

      <p>
        The traditional response to supply uncertainty is more inventory. But inventory is expensive and doesn't
        address root causes. Better visibility often provides more resilience at lower cost.
      </p>

      <p>
        Start by mapping your supply chain beyond tier-one suppliers. Understand where your suppliers source
        their materials and where concentration risks exist. Modern supply chain visibility platforms make this
        mapping feasible even for mid-size companies.
      </p>

      <p>
        Implement early warning systems that monitor supplier health, geopolitical risks, and logistics
        disruptions. Even simple Google Alerts for key suppliers and regions can provide valuable advance notice.
      </p>

      <h3>2. Strategic Supplier Relationships</h3>

      <p>
        When disruptions hit, companies with strong supplier relationships get priority treatment. This doesn't
        require being the biggest customer—it requires being a good partner.
      </p>

      <p>
        Pay on time, every time. Communicate forecasts accurately and update them promptly when things change.
        Share information about your business that helps suppliers plan. These behaviors cost nothing but create
        significant goodwill.
      </p>

      <p>
        For critical suppliers, consider deeper partnerships: joint planning sessions, shared improvement
        initiatives, or even minority investments. These relationships provide resilience that no amount of
        inventory can match.
      </p>

      <h3>3. Flexible Sourcing Strategies</h3>

      <p>
        Dual-sourcing everything is expensive and often impractical. Instead, develop a tiered approach based on
        criticality and risk:
      </p>

      <p>
        <strong>Critical items:</strong> Maintain qualified alternative suppliers, even if you don't use them
        regularly. The qualification cost is insurance against disruption.
      </p>

      <p>
        <strong>Important items:</strong> Split volume between 2-3 suppliers, with the ability to shift share
        quickly if needed.
      </p>

      <p>
        <strong>Standard items:</strong> Single-source for efficiency, but maintain market knowledge to switch if
        necessary.
      </p>

      <h3>4. Demand-Side Flexibility</h3>

      <p>
        Resilience isn't just about supply—it's also about your ability to adapt demand. Companies that can shift
        customer orders, substitute products, or adjust pricing have more options when supply is constrained.
      </p>

      <p>
        Design products with common components where possible. This creates flexibility to shift production
        between products based on component availability.
      </p>

      <p>
        Develop customer relationships that allow honest conversations about constraints. Customers who
        understand your situation are more likely to accept alternatives or adjusted timelines.
      </p>

      <h3>5. Response Playbooks</h3>

      <p>
        When disruptions occur, speed matters. Companies with pre-developed response playbooks react faster and
        more effectively than those making decisions in crisis mode.
      </p>

      <p>
        Develop playbooks for common disruption scenarios: supplier failure, logistics disruption, demand spike,
        quality issue. Each playbook should specify: who makes decisions, what options are available, how to
        communicate with customers, and what triggers escalation.
      </p>

      <p>
        Practice these playbooks through tabletop exercises. The learning from simulation is invaluable when real
        disruptions occur.
      </p>

      <h2 id="technology">Technology Enablers</h2>

      <p>Several technologies can accelerate resilience building without massive investment:</p>

      <p>
        <strong>Cloud-based supply chain platforms:</strong> Modern SaaS solutions provide enterprise-grade
        visibility and planning capabilities at accessible price points.
      </p>

      <p>
        <strong>AI-powered demand sensing:</strong> Machine learning can detect demand shifts earlier than
        traditional forecasting, providing more time to respond.
      </p>

      <p>
        <strong>Digital supplier networks:</strong> Platforms that connect buyers and suppliers enable faster
        identification of alternative sources when disruptions occur.
      </p>

      <h2 id="getting-started">Getting Started</h2>

      <p>Building resilience is a journey, not a project. Start with these immediate actions:</p>

      <p>
        <strong>Week 1-2:</strong> Map your top 20 suppliers and their key sub-suppliers. Identify concentration
        risks.
      </p>

      <p>
        <strong>Week 3-4:</strong> Assess your top 10 items by criticality and supply risk. Prioritize resilience
        investments.
      </p>

      <p>
        <strong>Month 2:</strong> Develop response playbooks for your top 3 disruption scenarios.
      </p>

      <p>
        <strong>Month 3:</strong> Begin qualifying alternative suppliers for your highest-risk items.
      </p>

      <p>
        Each of these steps improves your resilience incrementally, without requiring massive upfront investment.
        Over time, these incremental improvements compound into significant competitive advantage.
      </p>
    </InsightArticleV2>
  );
}
