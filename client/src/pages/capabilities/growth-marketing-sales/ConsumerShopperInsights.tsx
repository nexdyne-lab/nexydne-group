// TODO: David — confirm Consumer & Shopper Insights experience & impact numbers with practice lead before publish.
// TODO: David — populate 2-3 thought-leadership insights for the Consumer & Shopper Insights hub.
// TODO: confirm ambition copy with practice lead before publish

import CapabilityHubTemplate from "@/components/CapabilityHubTemplate";

export default function ConsumerShopperInsights() {
  return (
    <CapabilityHubTemplate
      hubName="Consumer & Shopper Insights"
      slug="consumer-shopper-insights"
      insightsTopic="growth"
      heroSubtitle="Understand what drives customer decisions. We help you build insights capabilities that inform strategy, drive innovation, and create competitive advantage."
      heroImage="/images/capabilities/cap-retail-apparel.jpg"
      heroFocal="55% 50%"
      experienceStats={[
        { number: "300+", label: "consumer insights projects across industries" },
        { number: "45%", label: "average improvement in customer understanding" },
        { number: "3x", label: "typical ROI on insights investments" },
        { number: "Senior-led", label: "Every engagement led by a partner with deep practitioner experience" },
      ]}
      // TODO: confirm ambition copy with practice lead before publish
      ambitions={[
        {
          title: "Sharpen the consumer & shopper insights thesis",
          description:
            "Make clear, evidence-based choices about where consumer & shopper insights can move the needle for the business — and where it cannot. Stop spreading effort across too many fronts.",
        },
        {
          title: "Translate intent into a measurable system",
          description:
            "Move beyond a deck. Build the operating model, KPIs, and cadence that turn consumer & shopper insights ambitions into quarterly outcomes you can actually defend.",
        },
        {
          title: "Reach the customer with one voice",
          description:
            "Align brand, product, and commercial teams around a single view of the customer so every consumer & shopper insights touchpoint reinforces the same value promise.",
        },
        {
          title: "Compound the data advantage",
          description:
            "Instrument consumer & shopper insights so each campaign, account, and decision feeds the next one — building a proprietary asset that competitors cannot copy from a vendor.",
        },
        {
          title: "Modernise the consumer & shopper insights tech and talent stack",
          description:
            "Invest in the platforms, partners, and people that match the next stage of the business — not the one you grew up in.",
        },
        {
          title: "Prove the ROI conversation in the boardroom",
          description:
            "Connect consumer & shopper insights investment to revenue, margin, and customer-equity outcomes the CEO and CFO will fund in the next planning cycle.",
        },
      ]}
      howWeCanHelp={[
        {
          title: "Customer Segmentation",
          description:
            "Develop actionable customer segments based on needs, behaviors, and value. Build targeting strategies that improve marketing effectiveness.",
          href: "/capabilities/growth-marketing-sales/consumer-shopper-insights/customer-segmentation",
        },
        {
          title: "Qualitative Research",
          description:
            "Conduct in-depth customer research through interviews, focus groups, and ethnography. Uncover the 'why' behind customer behavior.",
          href: "/capabilities/growth-marketing-sales/consumer-shopper-insights/qualitative-research",
        },
        {
          title: "Quantitative Research",
          description:
            "Design and execute surveys, conjoint analysis, and other quantitative methods. Measure customer attitudes and preferences at scale.",
          href: "/capabilities/growth-marketing-sales/consumer-shopper-insights/quantitative-research",
        },
        {
          title: "Journey Mapping",
          description:
            "Map customer journeys across touchpoints and channels. Identify pain points and opportunities to improve the customer experience.",
          href: "/capabilities/growth-marketing-sales/consumer-shopper-insights/journey-mapping",
        },
        {
          title: "Behavioral Analytics",
          description:
            "Analyze customer behavior data to understand decision patterns. Build predictive models that anticipate customer needs.",
          href: "/capabilities/growth-marketing-sales/consumer-shopper-insights/behavioral-analytics",
        },
        {
          title: "Insights Activation",
          description:
            "Translate insights into action across the organization. Build processes that embed customer understanding into decision making.",
          href: "/capabilities/growth-marketing-sales/consumer-shopper-insights/insights-activation",
        },
      ]}
      ambitionsCTAText="Talk to us about your Consumer & Shopper Insights ambition →"
      thoughtLeadership={[]}
      approachPillars={[
        {
          step: "01",
          title: "Listen and observe",
          body: "We combine qualitative and quantitative research to understand customer needs, behaviors, and motivations. We use ethnography, interviews, surveys, and behavioral data to build a complete picture.",
        },
        {
          step: "02",
          title: "Analyze and synthesize",
          body: "We apply advanced analytics to identify patterns and opportunities. We segment customers, map journeys, and develop predictive models that anticipate customer needs.",
        },
        {
          step: "03",
          title: "Activate and measure",
          body: "We translate insights into action across marketing, product, and experience. We build feedback loops that continuously improve customer understanding.",
        },
      ]}
      featuredCases={[
        {
          slug: "healthcare-data-analytics",
          title: "Health System Builds Unified Analytics Platform Across 18 Hospitals",
          industry: "Healthcare · Analytics",
          metric: "18",
          image: "/images/capabilities/cap-conference-data.jpg",
        },
        {
          slug: "consulting-knowledge-management",
          title: "Consulting Firm Builds AI Knowledge Engine Across 40,000 Engagements",
          industry: "Professional Services · Knowledge",
          metric: "40k+",
          image: "/images/capabilities/cap-telescope.jpg",
        },
        {
          slug: "healthcare-patient-engagement",
          title: "Health Network Lifts Patient Engagement Score By 38 Points",
          industry: "Healthcare · Engagement",
          metric: "38pt",
          image: "/images/industries/deal-handshake.jpg",
        },
      ]}
      relatedCapabilities={[
        { href: "/capabilities/strategy-corporate-finance", name: "Strategy & Corporate Finance" },
        { href: "/capabilities/business-building", name: "Business Building" },
        { href: "/capabilities/operations", name: "Operations" },
      ]}
      ctaLeadName="Talk to our Consumer & Shopper Insights lead"
    />
  );
}
