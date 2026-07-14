import InsightArticleV2 from "@/components/InsightArticleV2";

export default function PsychologyOfValue() {
  const sections = [
    { id: "anchor-and-frame", label: "The anchor and frame" },
    { id: "decoy-effect", label: "The decoy effect" },
    { id: "willingness-to-pay", label: "Willingness-to-pay" },
    { id: "value-based-pricing", label: "Value-based pricing" },
  ];

  const relatedInsights = [
    { title: "Algorithmic Pricing for Growing Companies", category: "Pricing Strategy", link: "/insights/algorithmic-pricing-smes", image: "/images/insight-algo-pricing.jpg" },
    { title: "Optimizing Subscription Models", category: "Pricing Strategy", link: "/insights/subscription-pricing-models", image: "/images/insight-subscription-models.jpg" },
    { title: "Value Proposition Design", category: "Growth & Marketing", link: "/insights/value-proposition-design", image: "/images/insights-pricing-strategy.jpg" },
  ];

  return (
    <InsightArticleV2
      category="Pricing Strategy"
      title={'The Psychology of Value: Why "Cost-Plus" Fails in the Digital Age'}
      subtitle="Customers don't care about your margins; they care about their own utility. To win in a crowded market, companies must shift their pricing paradigm from internal costs to external willingness-to-pay."
      heroImage="/images/insight-pricing-psychology.jpg"
      publishDate="October 12, 2024"
      readTime="8 min"
      sections={sections}
      keyTakeaways={[
        "Cost-plus pricing ignores the single most important variable in the equation—the customer's perception of value.",
        "Price is always relative; anchoring and choice architecture guide customers toward the option you want them to pick.",
        "Willingness-to-pay is malleable, expanded by scarcity, urgency, social proof, and risk reversal.",
        "Value-based pricing means segmenting by need, quantifying the ROI you deliver, and testing prices to find the demand curve.",
      ]}
      relatedInsights={relatedInsights}
    >
      <p>
        For decades, the dominant logic in pricing was simple arithmetic: calculate the cost of goods sold (COGS), add a
        healthy margin, and present the final number to the customer. This "cost-plus" model is comfortable. It's safe.
        It guarantees—on paper, at least—that every sale is profitable.
      </p>

      <p>It is also fundamentally flawed.</p>

      <p>
        Cost-plus pricing ignores the single most important variable in the economic equation: the customer.
        Specifically, it ignores the customer's perception of value. In the digital age, where competitors are a click
        away and product comparisons are instantaneous, pricing is not just a financial decision; it is a psychological
        signal.
      </p>

      <h2 id="anchor-and-frame">The Anchor and the Frame</h2>

      <p>
        Behavioral economics teaches us that price is never evaluated in a vacuum. It is always relative. A $50 bottle of
        wine feels expensive at a casual diner but like a bargain at a Michelin-starred restaurant. The liquid hasn't
        changed; the context has.
      </p>

      <p>
        This is the power of <strong>anchoring</strong>. When you present a "Premium" option alongside a "Standard" one,
        the higher price serves as an anchor, making the standard option feel more affordable. Smart companies use this
        to their advantage. They don't just sell a product; they design a choice architecture that guides the customer
        toward the optimal purchase.
      </p>

      <h2 id="decoy-effect">The Decoy Effect</h2>

      <p>
        Consider the classic example of the movie theater popcorn. You have a Small for $4 and a Large for $8. Most
        people choose the Small. But introduce a Medium for $7.50, and suddenly the Large looks like an incredible
        deal—only 50 cents more for a lot more product! The Medium is a "decoy"—it exists not to be sold, but to make the
        Large look attractive.
      </p>

      <p>
        In B2B software, we see this in "Enterprise" tiers that include features most mid-sized companies don't need,
        priced high enough to make the "Pro" tier seem like a no-brainer. The goal isn't always to sell the most
        expensive option; it's to increase the average order value (AOV) by framing the middle option as the "smart"
        choice.
      </p>

      <h2 id="willingness-to-pay">Willingness-to-Pay (WTP) is Not Fixed</h2>

      <p>
        Perhaps the biggest myth in pricing is that a customer has a fixed price they are willing to pay. In reality, WTP
        is highly malleable. It can be influenced by:
      </p>

      <ul>
        <li><strong>Scarcity:</strong> "Only 2 seats left at this price."</li>
        <li><strong>Urgency:</strong> "Offer expires in 24 hours."</li>
        <li><strong>Social Proof:</strong> "Trusted by 500+ enterprises."</li>
        <li><strong>Risk Reversal:</strong> "30-day money-back guarantee."</li>
      </ul>

      <p>
        By pulling these levers, companies can expand the customer's WTP, capturing value that a static cost-plus model
        would have left on the table.
      </p>

      <h2 id="value-based-pricing">Moving to Value-Based Pricing</h2>

      <p>So, how do you break the cost-plus addiction? The transition requires a fundamental shift in mindset:</p>

      <ol>
        <li><strong>Segment by Need, Not Demographics:</strong> Don't just price for "small businesses" vs. "enterprises." Price for "speed-conscious" vs. "budget-conscious" customers.</li>
        <li><strong>Quantify Your Value:</strong> If your software saves a customer 10 hours a week, calculate the dollar value of that time. Price against that ROI, not your server costs.</li>
        <li><strong>Test and Iterate:</strong> Pricing should be dynamic. Use A/B testing to find the elasticity of your demand curve. You might find that raising prices actually <em>increases</em> conversion by signaling higher quality.</li>
      </ol>

      <p>
        In the end, price is the ultimate marketing tool. It tells a story about who you are, who your product is for,
        and what it's worth. Don't let your accountants write that story alone.
      </p>
    </InsightArticleV2>
  );
}
