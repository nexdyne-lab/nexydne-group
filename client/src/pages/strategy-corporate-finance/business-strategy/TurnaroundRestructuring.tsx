// TODO: confirm with practice lead before publish — experience stats, challenge, opportunity, approach pillars, outcomes, related services, and CTA lead name for Turnaround & Restructuring.

import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export default function StrategyCorporateFinanceBusinessStrategyTurnaroundRestructuring() {
  return (
    <ServiceDetailTemplate
      hubName="Business Strategy & Transformation"
      hubSlug="strategy-corporate-finance/business-strategy"
      hubHref="/capabilities/strategy-corporate-finance/business-strategy"
      serviceName="Turnaround & Restructuring"
      serviceSlug="turnaround-restructuring"
      heroSubtitle="Navigate challenging situations with confidence. Stabilize operations, restructure finances, and position for recovery and growth."
      heroImage="/images/capabilities/cap-chess.jpg"
      experienceStats={[
        { number: "100+", label: "Business Strategy & Transformation engagements delivered for mid-market and growth companies" },
        { number: "20-40%", label: "Typical performance improvement captured within the first 12 months" },
        { number: "8-16 wks", label: "Time to first measurable impact in a focused workstream" },
        { number: "Embedded", label: "Capability transfer at every engagement" },
      ]}
      challenge="Leaders know turnaround & restructuring can unlock material value, yet the gap between intent and execution is wide. Legacy processes, fragmented data, and unclear ownership keep performance well below potential — and small fixes rarely move the needle on their own."
      opportunity="A focused turnaround & restructuring program — grounded in Business Strategy & Transformation fundamentals and powered by modern analytics — can sharpen decisions, lift returns, and free working capital. The teams that win treat this as a multi-year capability build, not a one-off project."
      approachPillars={[
        {
          step: "01",
          title: "Diagnose and discover",
          body:
            "We assess your current turnaround & restructuring state — mapping processes, capabilities, data, and gaps. We benchmark against best-in-class peers and quantify the value at stake.",
        },
        {
          step: "02",
          title: "Design and decide",
          body:
            "We co-design a target operating model for turnaround & restructuring — balancing speed, cost, risk, and impact. The blueprint is grounded in your context and built to scale.",
        },
        {
          step: "03",
          title: "Deliver and embed",
          body:
            "We deploy in agile sprints, measuring impact at each step. We build internal Business Strategy & Transformation capability alongside process change so the new way of working sticks long after we leave.",
        },
      ]}
      outcomes={[
        "Clear, executive-ready strategy for turnaround & restructuring aligned to enterprise priorities",
        "Measurable performance gains across cost, growth, risk, and resilience",
        "Stronger leadership ownership and cross-functional governance to sustain results",
        "Internal Business Strategy & Transformation capability uplift that compounds value beyond the engagement",
      ]}
      featuredCases={[
        { slug: "pe-industrial-transformation", title: "Adding $18M in EBITDA at an industrial manufacturer", industry: "Private Equity", metric: "$18M", image: "/images/industries/transport-traffic.jpg" },
        { slug: "financial-fraud-detection", title: "Catching card fraud before the money moves", industry: "Financial Services", metric: "73%", image: "/images/industries/fin-monitors.jpg" },
        { slug: "insurance-claims-automation", title: "Settling straightforward claims in hours, not weeks", industry: "Insurance", metric: "60%", image: "/case-insurance-claims.399e5d4b.jpg" },
      ]}
      relatedServices={[
        { slug: "strategic-planning", name: "Strategic Planning", href: "/capabilities/strategy-corporate-finance/business-strategy/strategic-planning" },
        { slug: "growth-strategy", name: "Growth Strategy", href: "/capabilities/strategy-corporate-finance/business-strategy/growth-strategy" },
        { slug: "business-model-innovation", name: "Business Model Innovation", href: "/capabilities/strategy-corporate-finance/business-strategy/business-model-innovation" },
      ]}
      ctaLeadName="Talk to our Turnaround & Restructuring lead"
    />
  );
}
