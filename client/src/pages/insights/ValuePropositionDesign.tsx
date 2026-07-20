import InsightArticleV2 from "@/components/InsightArticleV2";

export default function ValuePropositionDesign() {
  const sections = [
    { id: "feature-vs-outcome", label: "Feature vs. outcome" },
    { id: "designing-the-interface", label: "Designing the interface" },
    { id: "versioning", label: "Versioning your value prop" },
  ];

  return (
    <InsightArticleV2
      category="Product Strategy"
      title="Value Proposition Design: The API Between Product and Market"
      subtitle={'Why great products fail to find traction, and how to define a clear "interface contract" with your customers.'}
      heroImage="/images/insights/value-proposition-design-hero.jpg"
      publishDate="December 10, 2025"
      readTime="6 min"
      sections={sections}
      keyTakeaways={[
        "A value proposition is the contract between product and market: give us X, and we return Y.",
        "The most common failure is answering with a feature when the customer asked for an outcome.",
        "Design value propositions by profiling customer jobs and pains, mapping value to them, then A/B testing the messaging.",
        "Markets shift, so version your value proposition and build feedback loops to keep it in sync with reality.",
      ]}
      relatedInsights={[
        { title: "Why NPS Is a Vanity Metric", category: "Growth & Marketing", link: "/insights/why-nps-is-a-vanity-metric", image: "/images/insights/why-nps-is-a-vanity-metric-hero.jpg" },
        { title: "Beyond Segmentation", category: "Growth & Marketing", link: "/insights/beyond-segmentation", image: "/images/insights/beyond-segmentation-hero.jpg" },
        { title: "The Psychology of Value", category: "Pricing Strategy", link: "/insights/psychology-of-value", image: "/images/insights/psychology-of-value-hero.jpg" },
      ]}
    >
      <p>
        In software engineering, an API (Application Programming Interface) defines how two systems
        interact. It specifies the inputs, the outputs, and the expected behavior. If the API is poorly
        documented or unstable, no one will build on it.
      </p>
      <p>
        A Value Proposition is the API between your product and the market. It defines the contract: "If
        you give us X (money/time), we will return Y (value/outcome)." Yet, most companies treat their
        value proposition as marketing fluff rather than a strict engineering specification.
      </p>

      <h2 id="feature-vs-outcome">The "Feature" vs. "Outcome" Bug</h2>
      <p>
        The most common bug in value proposition design is returning a "Feature" when the customer
        requested an "Outcome."
      </p>
      <p>
        <strong>Bad API Response:</strong> "We have an AI-powered recommendation engine with 99.9% uptime."
        (Feature)
      </p>
      <p>
        <strong>Good API Response:</strong> "We reduce your customer churn by 15%." (Outcome)
      </p>
      <p>
        Customers don't care about your implementation details. They care about the return value. Your
        value proposition must be strictly typed to the customer's pain points.
      </p>

      <h2 id="designing-the-interface">Designing the Interface</h2>
      <p>We use a rigorous process to design value propositions that compile:</p>
      <ul>
        <li><strong>1. Customer Profiling (The Request):</strong> What is the customer trying to achieve? What are their jobs-to-be-done? What are the error codes (pains) they are currently hitting?</li>
        <li><strong>2. Value Mapping (The Response):</strong> How exactly does our product resolve those errors? Which specific features map to which specific pains?</li>
        <li><strong>3. Fit Testing (Integration Testing):</strong> We don't guess. We run A/B tests on messaging and positioning to see which "API call" returns the highest conversion rate.</li>
      </ul>

      <h2 id="versioning">Versioning Your Value Prop</h2>
      <p>
        Markets change. Competitors release updates. Customer expectations drift. A static value
        proposition is a deprecated API. You must version your value proposition, releasing updates as you
        learn more about the market. At NexDyne, we help you build the feedback loops to keep your value
        proposition in sync with reality.
      </p>
    </InsightArticleV2>
  );
}
