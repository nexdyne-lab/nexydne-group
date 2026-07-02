// TODO: David — confirm Personalization at Scale experience & impact numbers with practice lead before publish.
// TODO: David — populate 2-3 thought-leadership insights for the Personalization at Scale hub.
// TODO: confirm ambition copy with practice lead before publish

import CapabilityHubTemplate from "@/components/CapabilityHubTemplate";

export default function PersonalizationAtScale() {
  return (
    <CapabilityHubTemplate
      hubName="Personalization at Scale"
      slug="personalization-at-scale"
      heroSubtitle="AI-powered personalization, dynamic content, and 1:1 customer experiences. We help you deliver the right message to the right person at the right time—at scale."
      heroImage="/images/capabilities/cap-retail-apparel.jpg"
      heroFocal="55% 45%"
      experienceStats={[
        { number: "200+", label: "personalization programs implemented across industries" },
        { number: "40%", label: "average increase in conversion rates from personalization" },
        { number: "3x", label: "improvement in email engagement through dynamic content" },
        { number: "Senior-led", label: "Every engagement led by a partner with deep practitioner experience" },
      ]}
      // TODO: confirm ambition copy with practice lead before publish
      ambitions={[
        {
          title: "Sharpen the personalization at scale thesis",
          description:
            "Make clear, evidence-based choices about where personalization at scale can move the needle for the business — and where it cannot. Stop spreading effort across too many fronts.",
        },
        {
          title: "Translate intent into a measurable system",
          description:
            "Move beyond a deck. Build the operating model, KPIs, and cadence that turn personalization at scale ambitions into quarterly outcomes you can actually defend.",
        },
        {
          title: "Reach the customer with one voice",
          description:
            "Align brand, product, and commercial teams around a single view of the customer so every personalization at scale touchpoint reinforces the same value promise.",
        },
        {
          title: "Compound the data advantage",
          description:
            "Instrument personalization at scale so each campaign, account, and decision feeds the next one — building a proprietary asset that competitors cannot copy from a vendor.",
        },
        {
          title: "Modernise the personalization at scale tech and talent stack",
          description:
            "Invest in the platforms, partners, and people that match the next stage of the business — not the one you grew up in.",
        },
        {
          title: "Prove the ROI conversation in the boardroom",
          description:
            "Connect personalization at scale investment to revenue, margin, and customer-equity outcomes the CEO and CFO will fund in the next planning cycle.",
        },
      ]}
      howWeCanHelp={[
        {
          title: "Personalization Strategy",
          description:
            "Develop personalization strategies aligned with customer journeys and business goals. Define use cases, prioritize investments, and build roadmaps.",
          href: "/capabilities/growth-marketing-sales/personalization-at-scale/personalization-strategy",
        },
        {
          title: "AI-Powered Recommendations",
          description:
            "Build recommendation engines that predict customer preferences. Implement product, content, and next-best-action recommendations.",
          href: "/capabilities/growth-marketing-sales/personalization-at-scale/ai-powered-recommendations",
        },
        {
          title: "Dynamic Content",
          description:
            "Create content systems that enable personalization at scale. Develop modular content, dynamic templates, and automated assembly.",
          href: "/capabilities/growth-marketing-sales/personalization-at-scale/dynamic-content",
        },
        {
          title: "Customer Data Activation",
          description:
            "Activate customer data for real-time personalization. Build unified profiles and enable cross-channel targeting.",
          href: "/capabilities/growth-marketing-sales/personalization-at-scale/customer-data-activation",
        },
        {
          title: "Real-Time Personalization",
          description:
            "Implement real-time personalization across web, email, and mobile. Deliver contextual experiences based on behavior and intent.",
          href: "/capabilities/growth-marketing-sales/personalization-at-scale/real-time-personalization",
        },
        {
          title: "Testing & Optimization",
          description:
            "Build experimentation frameworks that optimize personalization. Implement A/B testing, multivariate testing, and continuous optimization.",
          href: "/capabilities/growth-marketing-sales/personalization-at-scale/testing-and-optimization",
        },
      ]}
      ambitionsCTAText="Talk to us about your Personalization at Scale ambition →"
      thoughtLeadership={[]}
      approachPillars={[
        {
          step: "01",
          title: "Define strategy",
          body: "We assess your personalization maturity and define a roadmap aligned with business objectives. We identify high-impact use cases and prioritize investments based on value and feasibility.",
        },
        {
          step: "02",
          title: "Build capabilities",
          body: "We implement the technology, data infrastructure, and content systems needed for personalization at scale. We develop AI models that predict preferences and optimize experiences.",
        },
        {
          step: "03",
          title: "Activate and optimize",
          body: "We launch personalization programs across channels and continuously test and optimize. We build measurement frameworks that track impact and inform iteration.",
        },
      ]}
      featuredCases={[
        {
          slug: "healthcare-patient-engagement",
          title: "Health Network Lifts Patient Engagement Score By 38 Points",
          industry: "Healthcare · Engagement",
          metric: "38pt",
          image: "/images/capabilities/cap-conference-data.jpg",
        },
        {
          slug: "wealth-management-automation",
          title: "Wealth Manager Automates Portfolio Reporting And Client Onboarding",
          industry: "Financial Services · Wealth",
          metric: "3x",
          image: "/images/capabilities/cap-telescope.jpg",
        },
        {
          slug: "healthcare-data-analytics",
          title: "Health System Builds Unified Analytics Platform Across 18 Hospitals",
          industry: "Healthcare · Analytics",
          metric: "18",
          image: "/images/industries/deal-handshake.jpg",
        },
      ]}
      relatedCapabilities={[
        { href: "/capabilities/strategy-corporate-finance", name: "Strategy & Corporate Finance" },
        { href: "/capabilities/business-building", name: "Business Building" },
        { href: "/capabilities/operations", name: "Operations" },
      ]}
      ctaLeadName="Talk to our Personalization at Scale lead"
    />
  );
}
