// TODO: David — confirm Green Growth experience & impact numbers with practice lead before publish.
// TODO: David — populate 2-3 thought-leadership insights for the Green Growth hub.
// TODO: confirm ambition copy with practice lead before publish

import CapabilityHubTemplate from "@/components/CapabilityHubTemplate";

export default function GreenGrowth() {
  return (
    <CapabilityHubTemplate
      hubName="Green Growth"
      slug="green-growth"
      insightsTopic="growth"
      heroSubtitle="Sustainable growth strategy, ESG marketing, and green brand positioning. We help you build brands and businesses that thrive while protecting the planet."
      heroImage="/images/capabilities/cap-woman-motion.jpg"
      heroFocal="60% 50%"
      experienceStats={[
        { number: "100+", label: "sustainable growth strategies developed for clients" },
        { number: "30%", label: "average revenue growth from green product lines" },
        { number: "45%", label: "improvement in brand perception for sustainability leaders" },
        { number: "Senior-led", label: "Every engagement led by a partner with deep practitioner experience" },
      ]}
      // TODO: confirm ambition copy with practice lead before publish
      ambitions={[
        {
          title: "Sharpen the green growth thesis",
          description:
            "Make clear, evidence-based choices about where green growth can move the needle for the business — and where it cannot. Stop spreading effort across too many fronts.",
        },
        {
          title: "Translate intent into a measurable system",
          description:
            "Move beyond a deck. Build the operating model, KPIs, and cadence that turn green growth ambitions into quarterly outcomes you can actually defend.",
        },
        {
          title: "Reach the customer with one voice",
          description:
            "Align brand, product, and commercial teams around a single view of the customer so every green growth touchpoint reinforces the same value promise.",
        },
        {
          title: "Compound the data advantage",
          description:
            "Instrument green growth so each campaign, account, and decision feeds the next one — building a proprietary asset that competitors cannot copy from a vendor.",
        },
        {
          title: "Modernise the green growth tech and talent stack",
          description:
            "Invest in the platforms, partners, and people that match the next stage of the business — not the one you grew up in.",
        },
        {
          title: "Prove the ROI conversation in the boardroom",
          description:
            "Connect green growth investment to revenue, margin, and customer-equity outcomes the CEO and CFO will fund in the next planning cycle.",
        },
      ]}
      howWeCanHelp={[
        {
          title: "Sustainable Growth Strategy",
          description:
            "Develop growth strategies that integrate sustainability into your core business. Identify green market opportunities and build sustainable competitive advantage.",
          href: "/capabilities/growth-marketing-sales/green-growth/sustainable-growth-strategy",
        },
        {
          title: "ESG Brand Positioning",
          description:
            "Build authentic sustainability narratives that resonate with stakeholders. Develop ESG communications that build trust and differentiate your brand.",
          href: "/capabilities/growth-marketing-sales/green-growth/esg-brand-positioning",
        },
        {
          title: "Green Product Innovation",
          description:
            "Design sustainable products and services that meet customer needs. Develop go-to-market strategies for green offerings.",
          href: "/capabilities/growth-marketing-sales/green-growth/green-product-innovation",
        },
        {
          title: "Circular Economy Models",
          description:
            "Design business models that eliminate waste and create value from sustainability. Implement circular strategies that drive both impact and profit.",
          href: "/capabilities/growth-marketing-sales/green-growth/circular-economy-models",
        },
        {
          title: "Sustainability Measurement",
          description:
            "Build measurement frameworks that track environmental and business impact. Report progress credibly to stakeholders and regulators.",
          href: "/capabilities/growth-marketing-sales/green-growth/sustainability-measurement",
        },
        {
          title: "Green Marketing",
          description:
            "Develop marketing strategies that communicate sustainability authentically. Avoid greenwashing while building brand equity through ESG leadership.",
          href: "/capabilities/growth-marketing-sales/green-growth/green-marketing",
        },
      ]}
      ambitionsCTAText="Talk to us about your Green Growth ambition →"
      thoughtLeadership={[]}
      approachPillars={[
        {
          step: "01",
          title: "Assess opportunity",
          body: "We analyze your market, customers, and operations to identify sustainability opportunities. We quantify the business case for green initiatives and prioritize investments.",
        },
        {
          step: "02",
          title: "Develop strategy",
          body: "We create sustainability strategies that align with your business objectives. We design green products, services, and business models that drive growth.",
        },
        {
          step: "03",
          title: "Execute and communicate",
          body: "We help you implement sustainability initiatives and communicate your progress authentically. We build brand equity through credible, compelling ESG storytelling.",
        },
      ]}
      featuredCases={[
        { slug: "financial-fraud-detection", title: "Catching card fraud before the money moves", industry: "Financial Services", metric: "73%", image: "/images/industries/fin-monitors.jpg" },
        { slug: "bank-cross-sell", title: "Turning single accounts into real relationships", industry: "Financial Services", metric: "$24M", image: "/images/industries/fin-trader.jpg" },
        { slug: "healthcare-readmission", title: "Cutting avoidable readmissions with better prediction", industry: "Healthcare", metric: "42%", image: "/case-doctor-consultation.799c1562.jpg" },
      ]}
      relatedCapabilities={[
        { href: "/capabilities/strategy-corporate-finance", name: "Strategy & Corporate Finance" },
        { href: "/capabilities/business-building", name: "Business Building" },
        { href: "/capabilities/operations", name: "Operations" },
      ]}
      ctaLeadName="Talk to our Green Growth lead"
    />
  );
}
