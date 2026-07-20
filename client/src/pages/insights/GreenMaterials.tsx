import InsightArticleV2 from "@/components/InsightArticleV2";

export default function GreenMaterials() {
  const sections = [
    { id: "premium-for-green", label: "The premium for green" },
    { id: "technology-breakthroughs", label: "Technology breakthroughs" },
    { id: "supply-gap", label: "The supply gap" },
    { id: "what-leaders-should-do", label: "What leaders should do" },
  ];

  const relatedInsights = [
    { title: "Green Growth", category: "Sustainability", link: "/insights/green-growth-imperative", image: "/images/insights/green-growth-imperative-hero.jpg" },
    { title: "The Net Zero Transition: What it would cost, what it could bring", category: "Sustainability", link: "/insights/net-zero-transition", image: "/images/insights/net-zero-transition-hero.jpg" },
    { title: "Carbon Markets 2025: From Voluntary to Compliance", category: "Sustainability", link: "/insights/carbon-markets", image: "/images/insights/carbon-markets-hero.jpg" },
  ];

  return (
    <InsightArticleV2
      category="Perspective"
      categoryHref="/insights"
      title="The Green Materials Revolution"
      subtitle="From green steel to bio-based plastics, a wave of material innovation is reshaping industrial supply chains."
      heroImage="/images/insights/green-materials-hero.jpg"
      readTime="5 min"
      sections={sections}
      keyTakeaways={[
        "Steel, cement, aluminum, and chemicals are responsible for nearly 30% of total global greenhouse gas emissions, making decarbonization both a necessity and a commercial opportunity.",
        "Early movers are already securing premiums for low-carbon materials through long-term contracts for green steel, recycled plastics, and bio-based alternatives.",
        "Technologies including hydrogen-based steelmaking, carbon capture, and bio-feedstocks are reaching maturity simultaneously.",
        "Supply is lagging demand—buyers should send clear demand signals while producers secure low-cost renewable energy and share risk across the value chain.",
      ]}
      relatedInsights={relatedInsights}
    >
      <p>
        Materials account for a significant portion of global greenhouse gas emissions. Steel, cement, aluminum, and
        chemicals alone are responsible for nearly 30% of the total. Decarbonizing these sectors is not just an
        environmental necessity; it is a massive commercial opportunity.
      </p>

      <h2 id="premium-for-green">The Premium for Green</h2>
      <p>
        Early movers are already securing premiums for low-carbon materials. Automakers are signing long-term contracts
        for green steel to meet their scope 3 targets. Consumer goods companies are racing to secure supplies of
        recycled plastics and bio-based alternatives.
      </p>

      <h2 id="technology-breakthroughs">Technology Breakthroughs</h2>
      <p>Several technologies are reaching maturity simultaneously:</p>
      <ul>
        <li><strong>Hydrogen-based steelmaking (DRI):</strong> Replacing coal with green hydrogen to produce near-zero emission steel.</li>
        <li><strong>Carbon capture, utilization, and storage (CCUS):</strong> Essential for decarbonizing cement and chemicals.</li>
        <li><strong>Bio-feedstocks:</strong> Using agricultural waste and biomass to replace fossil fuels in chemical production.</li>
      </ul>

      <h2 id="supply-gap">The Supply Gap</h2>
      <p>
        Despite the excitement, supply is lagging behind demand. Scaling these technologies requires massive capital
        investment and cheap, abundant renewable energy. We estimate a supply gap of 20-30% for green steel and recycled
        plastics by 2030 unless investment accelerates significantly.
      </p>

      <h2 id="what-leaders-should-do">What Leaders Should Do</h2>
      <p>
        <strong>For buyers:</strong> Send clear demand signals through advance market commitments and long-term offtake
        agreements.
      </p>
      <p>
        <strong>For producers:</strong> Focus on securing low-cost renewable energy and building partnerships across the
        value chain to share risk and capital.
      </p>
    </InsightArticleV2>
  );
}
