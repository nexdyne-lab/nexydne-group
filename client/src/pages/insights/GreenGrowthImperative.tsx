import InsightArticleV2 from "@/components/InsightArticleV2";

export default function GreenGrowthImperative() {
  const sections = [
    { id: "competitive-advantage", label: "Competitive advantage" },
    { id: "what-we-do", label: "What we do" },
    { id: "sectors-in-transition", label: "Sectors in transition" },
    { id: "impact", label: "Impact by the numbers" },
  ];

  const relatedInsights = [
    { title: "The Net Zero Transition: What it would cost, what it could bring", category: "Sustainability", link: "/insights/net-zero-transition", image: "/images/insights/net-zero-transition-hero.jpg" },
    { title: "Carbon Markets 2025: From Voluntary to Compliance", category: "Sustainability", link: "/insights/carbon-markets", image: "/images/insights/carbon-markets-hero.jpg" },
    { title: "The Green Materials Revolution", category: "Sustainability", link: "/insights/green-materials", image: "/images/insights/green-materials-hero.jpg" },
  ];

  return (
    <InsightArticleV2
      category="Sustainability"
      categoryHref="/insights"
      title="Green Growth"
      subtitle="Companies don't have to choose between sustainability and growth—they can have both."
      heroImage="/images/insights/green-growth-imperative-hero.jpg"
      readTime="6 min"
      sections={sections}
      keyTakeaways={[
        "Green growth is sustainable growth generated with the ESG levers companies are already implementing.",
        "Companies must play offense—not just to protect the core business, but to capture the full value from sustainability.",
        "Green revenue growth management and pricing and margin management commercialize green opportunities along the full value chain.",
        "The path to net zero looks different for every industry, from energy and materials to consumer goods and advanced manufacturing.",
      ]}
      relatedInsights={relatedInsights}
    >
      <p>
        We consider green growth to be sustainable growth that can be generated with the power of the ESG levers that
        companies are already implementing. The journey to net zero will create opportunities—and challenges—for B2B and
        B2C companies in many industries.
      </p>

      <h2 id="competitive-advantage">Sustainability as a competitive advantage</h2>
      <p>
        Companies need to play offense, however, on this journey—not just to protect their core business, but also to
        capture the full value from sustainability. It's undeniable that the transition to net zero requires significant
        investment. We're here to help companies to achieve strong returns on these investments.
      </p>

      <h2 id="what-we-do">What we do</h2>
      <p>Commercializing green opportunities along the full value chain.</p>

      <h3>Green revenue growth management</h3>
      <p>
        We help to investigate what the most attractive value pools are based on, where you can have sustainability
        impact, and if there is a willingness to pay. Organizations need to look at their ESG operations through the eyes
        of their customers to understand where they could create additional value.
      </p>
      <ul>
        <li>Identify high-impact sustainability value pools</li>
        <li>Quantify customer willingness to pay for green attributes</li>
      </ul>

      <h3>Pricing and margin management</h3>
      <p>
        Companies can achieve premiums, but customers' willingness to pay varies by segment and changes constantly. To
        succeed in the long term, companies must understand how demand-supply scenarios and regulations may affect
        prices.
      </p>
      <ul>
        <li>Dynamic pricing strategies for sustainable products</li>
        <li>Commercial models that capture full ESG value</li>
      </ul>

      <h2 id="sectors-in-transition">Sectors in transition</h2>
      <p>
        The path to net zero looks different for every industry. We help organizations navigate their specific
        challenges and opportunities.
      </p>
      <ul>
        <li><strong>Energy &amp; Materials:</strong> Decarbonizing heavy industry while maintaining competitiveness.</li>
        <li><strong>Consumer Goods:</strong> Meeting the rising demand for sustainable products and packaging.</li>
        <li><strong>Advanced Manufacturing:</strong> Building circular supply chains and efficient production systems.</li>
      </ul>

      <h2 id="impact">Impact by the numbers</h2>
      <p>Real results from our green growth transformations.</p>
      <ul>
        <li><strong>10%+ green willingness to pay:</strong> Identified in selected customer segments and regions for B2B corporations.</li>
        <li><strong>Portfolio-wide risk assessment:</strong> Potential green value pools identified through TCFD assessment.</li>
        <li><strong>Decarbonization upside:</strong> Material potential value found for a client in Asia accelerating their net-zero race.</li>
        <li><strong>30-50% sustainable materials:</strong> Potential premium compared to conventional incumbent products.</li>
      </ul>
    </InsightArticleV2>
  );
}
