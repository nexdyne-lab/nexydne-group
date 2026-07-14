import InsightArticleV2 from "@/components/InsightArticleV2";

export default function NetZeroTransition() {
  const sections = [
    { id: "key-findings", label: "Key findings" },
    { id: "economic-case", label: "The economic case" },
    { id: "managing-transition", label: "Managing the transition" },
  ];

  const relatedInsights = [
    { title: "Making Sense of Carbon Markets", category: "Sustainability", link: "/insights/carbon-markets", image: "/images/insight-carbon-markets.jpg" },
    { title: "The Green Growth Imperative", category: "Sustainability", link: "/insights/green-growth-imperative", image: "/images/green-growth-hero.jpg" },
    { title: "The Rise of Green Materials", category: "Sustainability", link: "/insights/green-materials", image: "/images/insight-green-materials.jpg" },
  ];

  return (
    <InsightArticleV2
      category="Report"
      title="The Net Zero Transition: What it would cost, what it could bring"
      subtitle="A comprehensive analysis of the economic transformation required to achieve net-zero emissions by 2050."
      heroImage="/images/insight-net-zero.jpg"
      readTime="6 min"
      sections={sections}
      keyTakeaways={[
        "Reaching net zero entails a massive economic transformation: capital spending on physical assets for energy and land-use systems between 2021 and 2050 would total about $275 trillion, or $9.2 trillion per year on average.",
        "That represents an annual increase of as much as $3.5 trillion from today, with spending rising to 8.8% of GDP between 2026 and 2030 before falling.",
        "The transition affects every country and sector, hitting developing countries, fossil fuel-dependent regions, and the sectors accounting for 20% of GDP hardest.",
        "The cost of inaction is far higher; managed well, the transition could create new products, services, and markets and modernize the global capital stock.",
      ]}
      relatedInsights={relatedInsights}
    >
      <p>
        The transition to net-zero emissions will entail a massive economic transformation. Our research
        suggests that capital spending on physical assets for energy and land-use systems in the net-zero
        transition between 2021 and 2050 would amount to about $275 trillion, or $9.2 trillion per year on
        average, an annual increase of as much as $3.5 trillion from today.
      </p>

      <h2 id="key-findings">Key findings</h2>
      <ul>
        <li>
          <strong>Universal transformation:</strong> The transition will affect every country and every
          sector of the economy, with the most significant effects in developing countries and fossil
          fuel-dependent regions.
        </li>
        <li>
          <strong>Front-loaded investment:</strong> Spending needs to rise to 8.8% of GDP between 2026 and
          2030 before falling.
        </li>
        <li>
          <strong>Uneven impact:</strong> Sectors accounting for 20% of GDP face the highest exposure, but
          supply chain effects will ripple through the entire economy.
        </li>
        <li>
          <strong>Opportunity for growth:</strong> The transition could create opportunities for new
          products, services, and markets, potentially boosting global GDP.
        </li>
      </ul>

      <h2 id="economic-case">The economic case</h2>
      <p>
        While the costs are significant, the cost of inaction is far higher. Physical risks from climate
        change are already manifesting and will intensify. Moreover, the transition offers a unique
        opportunity to modernize the global capital stock, improve energy efficiency, and drive innovation.
      </p>

      <h2 id="managing-transition">Managing the transition</h2>
      <p>
        Governments and businesses must work together to manage the transition. Key priorities include:
      </p>
      <ul>
        <li>Compensating for the early retirement of high-carbon assets.</li>
        <li>Reskilling workers in affected industries.</li>
        <li>Ensuring a just transition for vulnerable communities.</li>
        <li>Mobilizing private capital through policy incentives and risk-sharing mechanisms.</li>
      </ul>
    </InsightArticleV2>
  );
}
