import InsightArticleV2 from "@/components/InsightArticleV2";

export function AIInEcommerce() {
  const sections = [
    { id: "intelligent-search", label: "Intelligent search" },
    { id: "dynamic-pricing", label: "Dynamic pricing" },
    { id: "predictive-inventory", label: "Predictive inventory" },
    { id: "generative-content", label: "Generative content" },
  ];

  const relatedInsights = [
    { title: "Algorithmic Pricing for Growing Companies", category: "Technology", link: "/insights/algorithmic-pricing-smes", image: "/images/insights/algorithmic-pricing-smes-hero.jpg" },
    { title: "The End of \"Gut Feel\" Forecasting", category: "Sales Operations", link: "/insights/ai-sales-forecasting", image: "/images/insights/ai-sales-forecasting-hero.jpg" },
    { title: "AI-Driven Brand Strategy: From Intuition to Intelligence", category: "Brand Strategy", link: "/insights/ai-driven-brand-strategy", image: "/images/insights/ai-driven-brand-strategy-hero.jpg" },
  ];

  return (
    <InsightArticleV2
      category="Artificial Intelligence"
      title="AI-Driven Merchandising: Beyond Recommendations"
      subtitle="How machine learning is transforming inventory management, dynamic pricing, and personalized search results to drive profitability."
      heroImage="/images/insights/ai-in-ecommerce-hero.jpg"
      publishDate="November 3, 2025"
      readTime="8 min"
      sections={sections}
      keyTakeaways={[
        "AI in e-commerce now influences the entire supply chain and customer journey in real-time—predicting intent and optimizing margins, not just suggesting products.",
        "Vector search understands semantic meaning, returning relevant results even when a shopper never uses the exact product keywords.",
        "Dynamic pricing models adjust to competitor moves, demand surges, and inventory levels to protect margin and clear stagnant stock.",
        "Predictive inventory management forecasts demand with hyper-local precision, reducing carrying costs by up to 30%.",
      ]}
      relatedInsights={relatedInsights}
    >
      <p>
        "Customers who bought this also bought..." is old news. Today's AI in e-commerce goes far deeper,
        influencing the entire supply chain and customer journey in real-time. It's no longer just about
        suggesting products; it's about predicting intent and optimizing margins.
      </p>

      <h2 id="intelligent-search">1. Intelligent Search (Vector Search)</h2>
      <p>
        Traditional keyword search fails when users don't know the exact product name. AI-powered vector search
        understands semantic meaning.
      </p>

      <h3>The Difference</h3>
      <p>
        <strong>Keyword Search:</strong> "Red dress summer" → Looks for exact matches of these words.
      </p>
      <p>
        <strong>Vector Search:</strong> "Something light and airy for a beach wedding" → Understands context,
        fabric, and occasion, returning relevant results even without keyword matches.
      </p>

      <h2 id="dynamic-pricing">2. Dynamic Pricing Algorithms</h2>
      <p>
        Airlines have done it for years; now retailers are catching up. AI models analyze competitor pricing,
        demand surges, inventory levels, and even time of day to adjust prices dynamically.
      </p>
      <ul>
        <li><strong>Margin Protection:</strong> Automatically raise prices when stock is low to maximize profit.</li>
        <li><strong>Inventory Clearance:</strong> Lower prices incrementally to clear stagnant stock before it becomes a liability.</li>
        <li><strong>Competitor Matching:</strong> React instantly to competitor flash sales.</li>
      </ul>

      <h2 id="predictive-inventory">3. Predictive Inventory Management</h2>
      <p>
        Overstocking ties up capital; understocking loses sales. AI forecasts demand with hyper-local precision.
      </p>
      <p>
        By analyzing historical sales, weather patterns, local events, and social media trends, ML models can
        predict that <em>Store A</em> needs more umbrellas next Tuesday, while <em>Store B</em> needs more
        sunscreen. This reduces carrying costs by up to 30%.
      </p>

      <h2 id="generative-content">4. Generative AI for Content</h2>
      <p>
        Creating unique product descriptions for thousands of SKUs is tedious. LLMs can generate SEO-optimized,
        on-brand descriptions, meta tags, and even alt text for images at scale.
      </p>
    </InsightArticleV2>
  );
}
