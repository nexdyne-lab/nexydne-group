
import CapabilityHubTemplate from "@/components/CapabilityHubTemplate";

export default function MarTechStack() {
  return (
    <CapabilityHubTemplate
      hubName="MarTech Stack"
      slug="martech-stack"
      insightsTopic="growth"
      heroSubtitle="Marketing technology strategy, platform selection, and integration. We help you build and optimize the technology infrastructure that powers modern marketing."
      heroImage="/images/capabilities/cap-data-bars.jpg"
      heroFocal="45% 50%"
      experienceStats={[
        { number: "180+", label: "MarTech transformations delivered across industries" },
        { number: "35%", label: "average reduction in MarTech spend through rationalization" },
        { number: "3x", label: "improvement in marketing team productivity" },
        { number: "Senior-led", label: "Every engagement led by a partner with deep practitioner experience" },
      ]}
      ambitions={[
        {
          title: "Sharpen the martech stack thesis",
          description:
            "Make clear, evidence-based choices about where martech stack can move the needle for the business — and where it cannot. Stop spreading effort across too many fronts.",
        },
        {
          title: "Translate intent into a measurable system",
          description:
            "Move beyond a deck. Build the operating model, KPIs, and cadence that turn martech stack ambitions into quarterly outcomes you can actually defend.",
        },
        {
          title: "Reach the customer with one voice",
          description:
            "Align brand, product, and commercial teams around a single view of the customer so every martech stack touchpoint reinforces the same value promise.",
        },
        {
          title: "Compound the data advantage",
          description:
            "Instrument martech stack so each campaign, account, and decision feeds the next one — building a proprietary asset that competitors cannot copy from a vendor.",
        },
        {
          title: "Modernize the martech stack tech and talent stack",
          description:
            "Invest in the platforms, partners, and people that match the next stage of the business — not the one you grew up in.",
        },
        {
          title: "Prove the ROI conversation in the boardroom",
          description:
            "Connect martech stack investment to revenue, margin, and customer-equity outcomes the CEO and CFO will fund in the next planning cycle.",
        },
      ]}
      howWeCanHelp={[
        {
          title: "MarTech Strategy",
          description:
            "Develop a MarTech strategy aligned with your marketing objectives. Define architecture principles, governance models, and investment priorities.",
          href: "/capabilities/growth-marketing-sales/martech-stack/martech-strategy",
        },
        {
          title: "Customer Data Platforms",
          description:
            "Implement CDP solutions that unify customer data across touchpoints. Enable real-time personalization and audience activation.",
          href: "/capabilities/growth-marketing-sales/martech-stack/customer-data-platforms",
        },
        {
          title: "Marketing Automation",
          description:
            "Select and implement marketing automation platforms. Design workflows that scale personalized engagement across channels.",
          href: "/capabilities/growth-marketing-sales/martech-stack/marketing-automation",
        },
        {
          title: "Analytics & Attribution",
          description:
            "Build measurement infrastructure that tracks marketing performance. Implement attribution models that inform investment decisions.",
          href: "/capabilities/growth-marketing-sales/martech-stack/analytics-and-attribution",
        },
        {
          title: "Integration & Data Flow",
          description:
            "Design and implement integrations that connect your MarTech ecosystem. Ensure data flows seamlessly between platforms.",
          href: "/capabilities/growth-marketing-sales/martech-stack/integration-and-data-flow",
        },
        {
          title: "AI & Personalization",
          description:
            "Implement AI-powered personalization engines. Enable dynamic content, product recommendations, and predictive targeting.",
          href: "/capabilities/growth-marketing-sales/martech-stack/ai-and-personalization",
        },
      ]}
      ambitionsCTAText="Talk to us about your MarTech Stack ambition →"
      thoughtLeadership={[]}
      approachPillars={[
        {
          step: "01",
          title: "Assess and rationalize",
          body: "We audit your current MarTech landscape, identifying redundancies, gaps, and integration opportunities. We develop a rationalization roadmap that reduces cost while improving capability.",
        },
        {
          step: "02",
          title: "Design and select",
          body: "We design target architecture based on your marketing strategy and operational needs. We help you select platforms that fit your requirements, budget, and technical environment.",
        },
        {
          step: "03",
          title: "Implement and enable",
          body: "We implement new platforms and integrations, ensuring data flows seamlessly across your ecosystem. We train teams and establish governance to maximize adoption and value.",
        },
      ]}
      featuredCases={[
        { slug: "telecom-customer-experience", title: "Cutting a regional carrier's churn by 40%", industry: "Technology, Media & Telecom", metric: "40%", image: "/images/capabilities/cap-iot-network.jpg" },
        { slug: "tech-engineering-transformation", title: "Tripling a software company's release speed", industry: "Technology, Media & Telecom", metric: "3x", image: "/images/capabilities/cap-conference-data.jpg" },
        { slug: "retail-loyalty-transformation", title: "Turning a stale loyalty program into 45% more spend", industry: "Retail", metric: "45%", image: "/images/capabilities/cap-retail-data.jpg" },
      ]}
      relatedCapabilities={[
        { href: "/capabilities/strategy-corporate-finance", name: "Strategy & Corporate Finance" },
        { href: "/capabilities/business-building", name: "Business Building" },
        { href: "/capabilities/operations", name: "Operations" },
      ]}
      ctaLeadName="Talk to our MarTech Stack lead"
    />
  );
}
