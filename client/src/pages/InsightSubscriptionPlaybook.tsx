import InsightArticleV2 from "@/components/InsightArticleV2";

export default function InsightSubscriptionPlaybook() {
  const relatedInsights = [
    { title: "Digital channels driving revenue growth", category: "Digital Growth", link: "/insights/digital-channels-growth", image: "/images/abstract-growth.jpg" },
    { title: "E-commerce launch guide: zero to revenue in 90 days", category: "Digital Commerce", link: "/insights/ecommerce-launch-guide", image: "/images/adoption-abstract.jpg" },
    { title: "Subscription pricing models", category: "Pricing", link: "/insights/subscription-pricing-models", image: "/images/business-strategy-abstract.jpg" },
  ];

  const sections = [
    { id: "why-subscriptions", label: "Why subscriptions matter" },
    { id: "five-models", label: "Five subscription models" },
    { id: "building", label: "Building the business" },
    { id: "transition", label: "The phased transition" },
  ];

  return (
    <InsightArticleV2
      category="Business Models"
      categoryHref="/insights"
      canonicalPath="/insights/subscription-economy-playbook"
      title="The subscription economy playbook for traditional businesses"
      subtitle="Transform your business from unpredictable one-time sales to sustainable recurring revenue. How traditional companies are successfully adopting subscription models."
      heroImage="/images/business-strategy-abstract.jpg"
      publishDate="January 2026"
      readTime="8 min"
      sections={sections}
      keyTakeaways={[
        "Subscription models are no longer limited to software — traditional businesses from manufacturing to professional services are adopting them successfully.",
        "Five models fit traditional businesses: access, replenishment, curation, membership, and usage-based subscriptions.",
        "Retention is the economics: small improvements in retention compound into large gains in customer lifetime value.",
        "Transition in phases over 12+ months — pilot, iterate, shift emphasis, then scale — rather than flipping the business overnight.",
      ]}
      relatedInsights={relatedInsights}
    >
      <p>
        The subscription economy has grown enormously over the past decade, and it's no longer limited to
        software and streaming services. Traditional businesses across industries — from manufacturing to
        professional services — are discovering that subscription models can transform their economics and
        competitive position.
      </p>

      <h2 id="why-subscriptions">Why subscriptions matter for traditional businesses</h2>
      <p>
        The appeal extends far beyond predictable revenue. Companies that successfully transition to recurring
        revenue models typically see higher customer lifetime value, lower acquisition costs relative to revenue,
        deeper customer relationships, and a meaningful valuation premium from investors who prize recurring
        revenue.
      </p>

      <h2 id="five-models">Five subscription models for traditional businesses</h2>

      <h3>1. Access subscriptions</h3>
      <p>Ongoing access to products, content, or services for a recurring fee. Works well for training and education companies, media and content businesses, retainer-based professional services, and equipment-as-a-service providers.</p>

      <h3>2. Replenishment subscriptions</h3>
      <p>Automate the reordering of consumables customers need regularly — industrial supplies and MRO products, office and facility consumables, personal care, pet supplies. Replenishment programs earn strong retention because they solve a genuine pain: never running out of essentials. The convenience creates real switching costs.</p>

      <h3>3. Curation subscriptions</h3>
      <p>Deliver curated selections based on customer preferences — specialty retail boxes, meal kits and wine clubs, styling services, curated media. The model monetizes expertise and creates discovery value.</p>

      <h3>4. Membership subscriptions</h3>
      <p>Exclusive benefits, discounts, or privileges for paying members — retail premium memberships, priority access for service providers, professional associations, fitness and wellness. Builds community and loyalty.</p>

      <h3>5. Usage-based subscriptions</h3>
      <p>Charge on consumption while keeping the recurring relationship — metered utilities and infrastructure, technology services (API calls, storage), hourly retainers, usage-based equipment leasing. Aligns cost with value delivered.</p>

      <h2 id="building">Building a successful subscription business</h2>
      <p>
        Start with a value proposition that genuinely improves the customer's life on a recurring basis — a
        subscription that only benefits you won't retain. Design for retention from day one: onboarding,
        engagement, and win-back flows matter more than acquisition tactics. And instrument the unit economics
        early — retention rate, lifetime value, and payback period tell you whether the model is working long
        before the top line does.
      </p>

      <h2 id="transition">The phased transition</h2>
      <ol>
        <li><strong>Phase 1 — Pilot (months 1–4):</strong> launch a focused subscription offer to a segment of customers; validate willingness to pay and retention.</li>
        <li><strong>Phase 2 — Iterate (months 5–8):</strong> refine the offer based on feedback, improve retention, and expand marketing to grow the subscriber base.</li>
        <li><strong>Phase 3 — Shift emphasis (months 9–12):</strong> make subscription the primary offering, convert existing customers, and optimize unit economics.</li>
        <li><strong>Phase 4 — Scale (year 2+):</strong> expand tiers, add enterprise options, and build recurring revenue into the majority of the business.</li>
      </ol>
      <p>
        The subscription economy isn't just for digital-native companies. The key is starting with genuine
        customer value, designing for retention from day one, and taking a phased approach that allows learning
        and iteration. Companies that make this transition successfully often wonder why they didn't do it
        sooner.
      </p>
    </InsightArticleV2>
  );
}
