import InsightArticleV2 from "@/components/InsightArticleV2";

export default function SubscriptionPricingModels() {
  const sections = [
    { id: "usage-based-pricing", label: "Usage-based pricing" },
    { id: "hybrid-model", label: "The hybrid model" },
    { id: "tiering", label: "Good/Better/Best tiering" },
    { id: "per-user-seat", label: "The per-user seat" },
  ];

  return (
    <InsightArticleV2
      category="Business Models"
      title="Beyond the Flat Rate: Optimizing Subscription Models for Growth"
      subtitle={'The "all-you-can-eat" subscription model is simple, but it often leaves money on the table. Advanced recurring revenue models align pricing with customer success.'}
      heroImage="/images/insights/subscription-pricing-models-hero.jpg"
      publishDate="September 18, 2024"
      readTime="7 min"
      sections={sections}
      keyTakeaways={[
        "Flat-rate subscriptions are simple, but they undercharge power users and price out light users.",
        "Usage-based pricing aligns vendor and customer incentives, letting revenue scale automatically as customers grow.",
        "A hybrid model pairs a recurring platform fee with a usage component to combine predictability with upside.",
        "Effective tiering locks 'fence' features behind higher plans, and per-seat pricing can suppress the adoption that defends against churn.",
      ]}
      relatedInsights={[
        { title: "The Psychology of Value", category: "Pricing Strategy", link: "/insights/psychology-of-value", image: "/images/insights/psychology-of-value-hero.jpg" },
        { title: "Algorithmic Pricing for Growing Companies", category: "Pricing Strategy", link: "/insights/algorithmic-pricing-smes", image: "/images/insights/algorithmic-pricing-smes-hero.jpg" },
        { title: "Pricing Strategy", category: "Business Models", link: "/insights/psychology-of-value", image: "/images/insights/psychology-of-value-hero.jpg" },
      ]}
    >
      <p>
        The subscription economy has revolutionized business. From software to socks, recurring revenue
        provides predictability and high valuations. But many companies get stuck in the "Netflix
        trap"—a single, flat monthly fee for unlimited access.
      </p>
      <p>While simple, flat-rate pricing has two major flaws:</p>
      <ol>
        <li><strong>It undercharges power users:</strong> Customers who derive massive value from your product pay the same as casual users.</li>
        <li><strong>It creates a barrier for light users:</strong> Small customers who only need a fraction of the value are priced out by the "average" fee.</li>
      </ol>
      <p>
        To maximize Net Dollar Retention (NDR) and Lifetime Value (LTV), companies must evolve their
        pricing architecture.
      </p>

      <h2 id="usage-based-pricing">The Rise of Usage-Based Pricing (UBP)</h2>
      <p>
        Companies like Snowflake and Twilio have popularized usage-based pricing (also known as
        consumption-based pricing). You pay for what you use—gigabytes stored, messages sent, API calls
        made.
      </p>
      <p>
        This model aligns the vendor's incentives with the customer's success. If the customer grows, they
        use more, and they pay more. It removes the friction of "upselling" because the upsell happens
        automatically as usage scales.
      </p>
      <p>
        However, UBP introduces unpredictability. Customers hate surprise bills. The solution? The{" "}
        <strong>Hybrid Model</strong>.
      </p>

      <h2 id="hybrid-model">The Hybrid Model: Best of Both Worlds</h2>
      <p>
        The most robust pricing model today combines a recurring platform fee with a usage-based
        component.
      </p>
      <ul>
        <li><strong>Platform Fee:</strong> Covers fixed costs and grants access to core features. This provides revenue predictability for the vendor.</li>
        <li><strong>Usage Fees:</strong> Charge for the metric that correlates with value (e.g., active users, transactions processed). This captures the upside of customer growth.</li>
      </ul>
      <p>
        HubSpot is a classic example: you pay a base subscription fee for the Marketing Hub, but the price
        scales based on the number of "Marketing Contacts" you have. As your database grows, HubSpot grows
        with you.
      </p>

      <h2 id="tiering">Good/Better/Best Tiering</h2>
      <p>
        Even within subscription models, tiering is critical. But the mistake most companies make is
        tiering based on <em>features</em> that don't matter.
      </p>
      <p>
        Effective tiering requires identifying "fence" features—capabilities that are critical for a
        specific segment of customers. For example, Single Sign-On (SSO) is often a "fence" for the
        Enterprise tier. A small startup doesn't care about SSO, but a Fortune 500 company{" "}
        <em>requires</em> it for compliance. By locking SSO behind the Enterprise plan, you force large
        companies to self-select into the higher price point.
      </p>

      <h2 id="per-user-seat">The Psychology of the "Per User" Seat</h2>
      <p>
        "Per seat" pricing is the standard in SaaS, but it's under attack. Why? Because it discourages
        adoption. If a company has to pay $20 for every new user, they will share logins or restrict
        access. This limits the product's "stickiness" within the organization.
      </p>
      <p>
        Forward-thinking companies are moving to "active user" pricing (Slack) or flat organizational
        pricing with usage caps. The goal is to get as many people using the product as possible, because
        widespread adoption is the best defense against churn.
      </p>
    </InsightArticleV2>
  );
}
