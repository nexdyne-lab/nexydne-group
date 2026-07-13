// TODO: David — confirm Retention & Loyalty experience & impact numbers with practice lead before publish.
// TODO: David — populate 2-3 thought-leadership insights for the Retention & Loyalty hub.
// TODO: confirm ambition copy with practice lead before publish

import CapabilityHubTemplate from "@/components/CapabilityHubTemplate";

export default function RetentionLoyalty() {
  return (
    <CapabilityHubTemplate
      hubName="Retention & Loyalty"
      slug="retention-loyalty"
      insightsTopic="growth"
      heroSubtitle="Customer retention strategy, loyalty program design, and lifecycle marketing. We help you build lasting customer relationships that drive sustainable growth."
      heroImage="/images/industries/deal-handshake.jpg"
      heroFocal="55% 50%"
      experienceStats={[
        { number: "150+", label: "retention and loyalty programs designed and implemented" },
        { number: "25%", label: "average increase in customer lifetime value" },
        { number: "40%", label: "reduction in churn for clients within first year" },
        { number: "Senior-led", label: "Every engagement led by a partner with deep practitioner experience" },
      ]}
      // TODO: confirm ambition copy with practice lead before publish
      ambitions={[
        {
          title: "Sharpen the retention & loyalty thesis",
          description:
            "Make clear, evidence-based choices about where retention & loyalty can move the needle for the business — and where it cannot. Stop spreading effort across too many fronts.",
        },
        {
          title: "Translate intent into a measurable system",
          description:
            "Move beyond a deck. Build the operating model, KPIs, and cadence that turn retention & loyalty ambitions into quarterly outcomes you can actually defend.",
        },
        {
          title: "Reach the customer with one voice",
          description:
            "Align brand, product, and commercial teams around a single view of the customer so every retention & loyalty touchpoint reinforces the same value promise.",
        },
        {
          title: "Compound the data advantage",
          description:
            "Instrument retention & loyalty so each campaign, account, and decision feeds the next one — building a proprietary asset that competitors cannot copy from a vendor.",
        },
        {
          title: "Modernise the retention & loyalty tech and talent stack",
          description:
            "Invest in the platforms, partners, and people that match the next stage of the business — not the one you grew up in.",
        },
        {
          title: "Prove the ROI conversation in the boardroom",
          description:
            "Connect retention & loyalty investment to revenue, margin, and customer-equity outcomes the CEO and CFO will fund in the next planning cycle.",
        },
      ]}
      howWeCanHelp={[
        {
          title: "Loyalty Program Design",
          description:
            "Design loyalty programs that drive engagement and value. Create reward structures, tiers, and experiences that resonate with your customers.",
          href: "/capabilities/growth-marketing-sales/retention-loyalty/loyalty-program-design",
        },
        {
          title: "Customer Lifecycle Marketing",
          description:
            "Build lifecycle marketing programs that engage customers at every stage. Design onboarding, engagement, and win-back campaigns.",
          href: "/capabilities/growth-marketing-sales/retention-loyalty/customer-lifecycle-marketing",
        },
        {
          title: "Churn Prevention",
          description:
            "Identify at-risk customers before they leave. Build predictive models and intervention strategies that reduce churn.",
          href: "/capabilities/growth-marketing-sales/retention-loyalty/churn-prevention",
        },
        {
          title: "Rewards & Benefits",
          description:
            "Design reward structures that motivate behavior. Create partnerships, experiences, and benefits that differentiate your program.",
          href: "/capabilities/growth-marketing-sales/retention-loyalty/rewards-and-benefits",
        },
        {
          title: "Retention Analytics",
          description:
            "Build analytics capabilities that track retention performance. Measure customer lifetime value, cohort retention, and program ROI.",
          href: "/capabilities/growth-marketing-sales/retention-loyalty/retention-analytics",
        },
        {
          title: "Re-engagement Campaigns",
          description:
            "Win back lapsed customers with targeted campaigns. Design offers and messaging that reactivate dormant relationships.",
          href: "/capabilities/growth-marketing-sales/retention-loyalty/re-engagement-campaigns",
        },
      ]}
      ambitionsCTAText="Talk to us about your Retention & Loyalty ambition →"
      thoughtLeadership={[]}
      approachPillars={[
        {
          step: "01",
          title: "Understand and segment",
          body: "We analyze customer behavior, preferences, and value to identify retention opportunities. We segment customers based on lifecycle stage, value, and risk to enable targeted strategies.",
        },
        {
          step: "02",
          title: "Design and implement",
          body: "We design retention strategies and loyalty programs tailored to your customers and business model. We implement the technology, processes, and content needed to execute at scale.",
        },
        {
          step: "03",
          title: "Measure and optimize",
          body: "We establish measurement frameworks that track retention metrics and program performance. We continuously test and optimize to improve customer lifetime value.",
        },
      ]}
      featuredCases={[
        { slug: "insurance-digital-distribution", title: "Turning a call-center insurer into a digital one", industry: "Insurance", metric: "50%", image: "/images/industries/fin-handshake-city.jpg" },
        { slug: "wealth-onboarding", title: "Cutting wealth onboarding from weeks to days", industry: "Financial Services", metric: "60%", image: "/images/industries/fin-handshake-city.jpg" },
        { slug: "insurance-claims-automation", title: "Settling straightforward claims in hours, not weeks", industry: "Insurance", metric: "60%", image: "/case-insurance-claims.399e5d4b.jpg" },
      ]}
      relatedCapabilities={[
        { href: "/capabilities/strategy-corporate-finance", name: "Strategy & Corporate Finance" },
        { href: "/capabilities/business-building", name: "Business Building" },
        { href: "/capabilities/operations", name: "Operations" },
      ]}
      ctaLeadName="Talk to our Retention & Loyalty lead"
    />
  );
}
