import InsightArticleV2 from "@/components/InsightArticleV2";

export default function EcommerceEconomics() {
  const sections = [
    { id: "d2c-opportunity", label: "The D2C opportunity" },
    { id: "unit-economics", label: "Unit economics" },
    { id: "customer-acquisition", label: "Customer acquisition" },
    { id: "fulfillment", label: "Fulfillment & operations" },
    { id: "technology-stack", label: "Technology stack" },
    { id: "path-to-profitability", label: "Path to profitability" },
  ];

  const relatedInsights = [
    { title: "The digital growth playbook for growing companies", category: "Growth & Marketing", link: "/insights/digital-growth-playbook", image: "/images/insights/digital-growth-playbook-hero.jpg" },
    { title: "The marketplace playbook: Building network effects", category: "Growth & Marketing", link: "/insights/marketplace-playbook", image: "/images/insights/marketplace-playbook-hero.jpg" },
    { title: "Headless commerce: The engineering case", category: "Technology", link: "/insights/headless-commerce-guide", image: "/images/insights/headless-commerce-guide-hero.jpg" },
  ];

  return (
    <InsightArticleV2
      category="Growth & Marketing"
      title="E-commerce economics: Building profitable D2C channels"
      subtitle="The unit economics, technology choices, and operational considerations that determine D2C success."
      heroImage="/images/insights/ecommerce-economics-hero.jpg"
      publishDate="November 28, 2025"
      readTime="10 min"
      sections={sections}
      keyTakeaways={[
        "D2C can capture the margin that traditional retail (40-60% of sale price) and marketplaces (15-45% in fees) take—but only with efficient customer acquisition and scale.",
        "Model the unit economics rigorously around CAC, LTV, AOV, and contribution margin, targeting an LTV:CAC ratio of 3:1 or higher and a 40%+ contribution margin.",
        "Fulfillment is often the hidden killer of D2C profitability; choose among in-house, 3PL, FBA, or drop-ship based on volume, control, and cost per order.",
        "The path to profitability runs through repeat purchase rate, conversion, returns, shipping rates, and diversified acquisition.",
      ]}
      relatedInsights={relatedInsights}
    >
      <p>
        Direct-to-consumer (D2C) e-commerce promises higher margins, direct customer relationships, and valuable
        first-party data. But the path to profitability is littered with companies that underestimated the complexity
        of building a sustainable D2C business.
      </p>

      <h2 id="d2c-opportunity">The D2C opportunity</h2>

      <p>
        Traditional retail channels take 40-60% of the final sale price. Marketplaces like Amazon charge 15-45% in
        fees. D2C promises to capture that margin—but only if you can acquire customers efficiently and operate at
        scale.
      </p>

      <p>
        The companies that succeed in D2C share common characteristics: strong brand identity, products with natural
        replenishment cycles, and the operational discipline to manage complex logistics. Those that fail typically
        underestimate customer acquisition costs or overestimate their ability to compete with established players.
      </p>

      <p>
        Comparing gross margin before customer acquisition and fulfillment costs illustrates the prize:
      </p>
      <ul>
        <li><strong>Traditional retail:</strong> roughly 35% gross margin retained</li>
        <li><strong>Marketplace:</strong> roughly 50% retained</li>
        <li><strong>D2C e-commerce:</strong> roughly 70% retained</li>
      </ul>

      <h2 id="unit-economics">Unit economics fundamentals</h2>

      <p>
        Before launching a D2C channel, you need to model the unit economics rigorously. The key metrics that determine
        profitability:
      </p>

      <ul>
        <li><strong>Customer Acquisition Cost (CAC):</strong> Total marketing spend divided by new customers acquired. Benchmark: $30-100 for most consumer products.</li>
        <li><strong>Customer Lifetime Value (LTV):</strong> Total revenue from a customer over their relationship. Target: LTV:CAC ratio of 3:1 or higher.</li>
        <li><strong>Average Order Value (AOV):</strong> Revenue per transaction. Higher AOV improves unit economics by spreading fixed costs.</li>
        <li><strong>Contribution Margin:</strong> Revenue minus variable costs (COGS, shipping, payment processing). Target: 40%+ for sustainability.</li>
      </ul>

      <p>A sample unit economics model shows how those costs stack up:</p>
      <ul>
        <li>Average Order Value: $85.00</li>
        <li>Cost of Goods Sold (35%): -$29.75</li>
        <li>Shipping &amp; Fulfillment: -$8.50</li>
        <li>Payment Processing (3%): -$2.55</li>
        <li>Returns &amp; Refunds (8%): -$6.80</li>
        <li><strong>Contribution Margin: $37.40 (44%)</strong></li>
      </ul>

      <h2 id="customer-acquisition">Customer acquisition strategy</h2>

      <p>
        Customer acquisition is where most D2C businesses struggle. The days of cheap Facebook ads are over—CACs have
        increased 60% over the past three years. Successful D2C brands diversify their acquisition channels:
      </p>

      <ul>
        <li><strong>Paid Social (Meta, TikTok) — CAC $40-80:</strong> Scalable, precise targeting, and measurable, but expensive, with increasing competition and privacy changes.</li>
        <li><strong>Paid Search (Google, Bing) — CAC $30-60:</strong> High intent, predictable, and brand-protective, but limited in scale and expensive for competitive terms.</li>
        <li><strong>Influencer Marketing — CAC $20-50:</strong> Authentic, brand-building, and potentially cost-effective, but hard to scale with attribution challenges.</li>
        <li><strong>Content/SEO — CAC $10-30:</strong> Low marginal cost that compounds over time, but slow to build and requires expertise.</li>
        <li><strong>Referral Programs — CAC $15-25:</strong> High-quality customers at low cost, but limited in scale and dependent on an existing base.</li>
      </ul>

      <h2 id="fulfillment">Fulfillment &amp; operations</h2>

      <p>
        Fulfillment is often the hidden killer of D2C profitability. Customers expect Amazon-level speed and service,
        but few growing companies can match that infrastructure. Your options:
      </p>

      <ul>
        <li><strong>In-house — $3-6 per order, high control:</strong> Best for high volume and custom packaging.</li>
        <li><strong>3PL — $5-10 per order, medium control:</strong> Best for scaling businesses with variable demand.</li>
        <li><strong>FBA — $8-15 per order, low control:</strong> Best for Amazon-centric operations needing Prime eligibility.</li>
        <li><strong>Drop Ship — variable cost, very low control:</strong> Best for testing products with low capital.</li>
      </ul>

      <h2 id="technology-stack">Technology stack decisions</h2>

      <p>
        Your technology choices have long-term implications for scalability, cost, and flexibility. The key decision is
        between all-in-one platforms and composable commerce:
      </p>

      <h3>All-in-one platforms (Shopify, BigCommerce, Squarespace)</h3>
      <ul>
        <li>Fast time to market</li>
        <li>Lower upfront cost</li>
        <li>Built-in best practices</li>
        <li>Limited customization</li>
        <li>Transaction fees add up</li>
      </ul>

      <h3>Composable commerce (headless + best-of-breed components)</h3>
      <ul>
        <li>Maximum flexibility</li>
        <li>Better performance</li>
        <li>No vendor lock-in</li>
        <li>Higher complexity</li>
        <li>Requires a technical team</li>
      </ul>

      <h2 id="path-to-profitability">Path to profitability</h2>

      <p>
        Most D2C businesses lose money in year one. The path to profitability requires disciplined focus on a few key
        levers:
      </p>

      <ol>
        <li><strong>Increase repeat purchase rate:</strong> Subscription models, loyalty programs, and email marketing can increase LTV by 2-3x without increasing CAC.</li>
        <li><strong>Optimize conversion rate:</strong> A/B testing, site speed improvements, and checkout optimization can improve conversion by 20-50%.</li>
        <li><strong>Reduce returns:</strong> Better product descriptions, sizing guides, and quality control can cut returns from 15% to 5%.</li>
        <li><strong>Negotiate shipping rates:</strong> As volume grows, negotiate better rates with carriers. Consider zone-skipping and regional carriers.</li>
        <li><strong>Diversify acquisition:</strong> Reduce dependence on paid social by investing in content, SEO, and referral programs.</li>
      </ol>
    </InsightArticleV2>
  );
}
