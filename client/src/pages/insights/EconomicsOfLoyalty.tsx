import InsightArticleV2 from "@/components/InsightArticleV2";

export default function EconomicsOfLoyalty() {
  const sections = [
    { id: "discount-trap", label: "The discount trap" },
    { id: "amazon-prime", label: "The Amazon Prime model" },
    { id: "behavioral-economics", label: "Behavioral economics" },
    { id: "margin-positive", label: "Margin-positive design" },
  ];

  const relatedInsights = [
    { title: "Why NPS is a Vanity Metric", category: "Data Science", link: "/insights/why-nps-is-a-vanity-metric", image: "/images/insights/why-nps-is-a-vanity-metric-hero.jpg" },
    { title: "The Churn Prediction Playbook", category: "Technical Guide", link: "/insights/churn-prediction-playbook", image: "/images/insights/churn-prediction-playbook-hero.jpg" },
    { title: "Subscription Pricing Models", category: "Unit Economics", link: "/insights/subscription-pricing-models", image: "/images/insights/subscription-pricing-models-hero.jpg" },
  ];

  return (
    <InsightArticleV2
      category="Unit Economics"
      title="The Economics of Loyalty: Why Points Programs Fail"
      subtitle="Most loyalty programs are just disguised price cuts. We analyze the math behind successful behavioral rewards vs. margin-killing discounts."
      heroImage="/images/insights/economics-of-loyalty-hero.jpg"
      publishDate="March 12, 2025"
      readTime="8 min"
      sections={sections}
      keyTakeaways={[
        "Traditional points-based programs often act as a tax on your own margin, discounting customers who would have bought anyway.",
        "At a 30% gross margin, a 10% loyalty discount gives away 33% of your profit unless it lifts LTV or lowers CAC.",
        "Amazon Prime shows structural loyalty: a paid subscription changes behavior. Don't pay customers to stay—make them pay to belong.",
        "Design margin-positive programs by asking whether they change behavior, add value rather than discount, and create a barrier to exit.",
      ]}
      relatedInsights={relatedInsights}
    >
      <p>
        "Buy 10, get 1 free." It's the oldest trick in the book. But in the digital economy, this model is
        fundamentally broken. Traditional points-based loyalty programs are often just a tax on your own margin—giving
        discounts to customers who would have bought anyway.
      </p>

      <p>
        True loyalty isn't about bribery; it's about habit formation. The most successful retention strategies today
        don't rely on financial incentives, but on <strong>structural lock-in</strong> and{" "}
        <strong>behavioral reinforcement</strong>.
      </p>

      <h2 id="discount-trap">The discount trap</h2>

      <p>
        Let's look at the unit economics. If you have a 30% gross margin and you offer a 10% loyalty discount, you
        aren't giving away 10% of your revenue; you are giving away <strong>33% of your profit</strong>.
      </p>

      <p>
        Unless that discount drives a commensurate increase in Lifetime Value (LTV) or a decrease in Customer
        Acquisition Cost (CAC) via referrals, you are simply eroding your own profitability.
      </p>

      <h3>Transactional loyalty</h3>
      <ul>
        <li>Based on discounts</li>
        <li>Easy to copy by competitors</li>
        <li>Attracts price-sensitive customers</li>
        <li>Erodes margin</li>
      </ul>

      <h3>Emotional / structural loyalty</h3>
      <ul>
        <li>Based on experience and utility</li>
        <li>Hard to replicate</li>
        <li>Attracts value-sensitive customers</li>
        <li>Preserves margin</li>
      </ul>

      <h2 id="amazon-prime">The Amazon Prime model</h2>

      <p>
        Amazon Prime is the gold standard of structural loyalty. It's not a discount program; it's a{" "}
        <strong>paid subscription</strong> that changes behavior. By paying upfront for shipping, customers feel
        "invested" in the platform. They stop price-shopping because they want to "get their money's worth" from their
        Prime membership.
      </p>

      <p>
        This is the key shift: <strong>Don't pay customers to stay. Make them pay to belong.</strong>
      </p>

      <h2 id="behavioral-economics">Behavioral economics of rewards</h2>

      <p>
        If you must use rewards, use them to drive specific behaviors, not just spend.
      </p>

      <ul>
        <li><strong>Variable rewards:</strong> The "surprise and delight" model (like a random upgrade) is more addictive than a predictable "buy X get Y" model.</li>
        <li><strong>Goal gradient effect:</strong> People work harder to achieve a goal as they get closer to it. Visualizing progress (e.g., "You are 80% of the way to VIP status") drives incremental activity.</li>
        <li><strong>Sunk cost fallacy:</strong> Charging a small membership fee (like Costco) makes customers more loyal because they want to justify the expense.</li>
      </ul>

      <h2 id="margin-positive">Designing a margin-positive program</h2>

      <p>
        We advise clients to audit their loyalty programs with three questions:
      </p>

      <ol>
        <li>Does this program change behavior, or just reward existing behavior?</li>
        <li>Is the reward a discount (margin negative) or a value-add service (margin neutral)?</li>
        <li>Does the program create a barrier to exit?</li>
      </ol>

      <p>
        The future of loyalty is not points. It's integration. It's becoming so embedded in your customer's workflow or
        life that leaving becomes inconceivable.
      </p>
    </InsightArticleV2>
  );
}
