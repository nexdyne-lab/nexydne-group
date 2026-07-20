import InsightArticleV2 from "@/components/InsightArticleV2";

export default function AlgorithmicTerritoryPlanning() {
  const sections = [
    { id: "tam-graph", label: "The TAM graph" },
    { id: "dynamic-rebalancing", label: "Dynamic rebalancing" },
    { id: "human-element", label: "The human element" },
  ];

  const relatedInsights = [
    { title: "The End of \"Gut Feel\" Forecasting", category: "Sales Operations", link: "/insights/ai-sales-forecasting", image: "/images/insights/ai-sales-forecasting-hero.jpg" },
    { title: "Architecting the Modern Sales Stack", category: "Sales Operations", link: "/insights/modern-sales-stack", image: "/images/insights/modern-sales-stack-hero.jpg" },
    { title: "Algorithmic Pricing for Growing Companies", category: "Technology", link: "/insights/algorithmic-pricing-smes", image: "/images/insights/algorithmic-pricing-smes-hero.jpg" },
  ];

  return (
    <InsightArticleV2
      category="Sales Strategy"
      title="Algorithmic Territory Planning: Optimizing Coverage with Geospatial Data"
      subtitle="Territory planning is often an annual exercise in spreadsheet wrestling and political infighting. By applying geospatial algorithms and propensity modeling, we can turn it into a continuous optimization process."
      heroImage="/images/insights/algorithmic-territory-planning-hero.jpg"
      publishDate="February 28, 2025"
      readTime="7 min"
      sections={sections}
      keyTakeaways={[
        "The goal of territory planning is equal opportunity; unbalanced territories create both starvation and gluttony, and simple geography or firmographics ignore actual propensity to buy.",
        "A TAM Graph maps every potential buyer enriched with intent signals—technographics, hiring trends, funding events, and category research—to score and cluster accounts into balanced territories.",
        "Dynamic rebalancing lets the algorithm redistribute accounts when a rep leaves or a vertical explodes, preventing orphaned accounts from going cold.",
        "A human-in-the-loop approach keeps algorithmic efficiency while preserving relationships: the algorithm generates the proposal, but sales leadership makes the final decision.",
      ]}
      relatedInsights={relatedInsights}
    >
      <p>
        The goal of territory planning is simple: Equal Opportunity. Every rep should have a roughly equal shot
        at making their number. If territories are unbalanced, you get two bad outcomes: "Starvation" (reps quit
        because they can't hit quota) and "Gluttony" (reps hit quota easily and stop working).
      </p>
      <p>
        Traditionally, territories were carved up by geography or simple firmographics (e.g., "Companies over
        $100M revenue in Texas"). This is a blunt instrument. It ignores the actual <em>propensity to buy</em> of
        the accounts in those patches.
      </p>

      <h2 id="tam-graph">The Total Addressable Market (TAM) Graph</h2>
      <p>
        We approach territory design by building a "TAM Graph." This is a comprehensive map of every potential
        buyer in your market, enriched with signals that indicate purchase intent.
      </p>

      <h3>Enrichment Signals</h3>
      <ul>
        <li><strong>Technographics:</strong> Do they use a competitor's product? Is that contract expiring soon?</li>
        <li><strong>Hiring Trends:</strong> Are they hiring for roles that use your product?</li>
        <li><strong>Funding Events:</strong> Did they just raise capital?</li>
        <li><strong>Intent Data:</strong> Are they researching your category on G2 or Capterra?</li>
      </ul>

      <p>
        By weighting these factors, we calculate a "TAM Score" for every account. We then use clustering
        algorithms to group these accounts into balanced territories that optimize for travel time (for field
        reps) or time zone (for inside reps).
      </p>

      <h2 id="dynamic-rebalancing">Dynamic Rebalancing</h2>
      <p>
        The market doesn't stand still for 12 months, so why should your territories? Algorithmic planning allows
        for <strong>Dynamic Rebalancing</strong>.
      </p>
      <p>
        If a rep leaves, or if a new vertical explodes, the algorithm can suggest a redistribution of accounts to
        maintain balance. This prevents "orphaned accounts" from going cold and ensures that your best leads are
        always being worked by someone.
      </p>

      <h2 id="human-element">The Human Element</h2>
      <p>
        Algorithms are great at optimization, but they don't understand relationships. A purely algorithmic
        approach might suggest moving a key account from Rep A to Rep B because it "fits the model," ignoring the
        fact that Rep A has a 5-year relationship with the CIO.
      </p>
      <p>
        That's why we advocate for a "Human-in-the-Loop" approach. The algorithm generates the <em>proposal</em>,
        but sales leadership makes the final <em>decision</em>. This combines the efficiency of machine learning
        with the nuance of human judgment.
      </p>
    </InsightArticleV2>
  );
}
