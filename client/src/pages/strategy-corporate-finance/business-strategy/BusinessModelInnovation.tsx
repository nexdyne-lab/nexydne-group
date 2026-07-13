
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export default function StrategyCorporateFinanceBusinessStrategyBusinessModelInnovation() {
  return (
    <ServiceDetailTemplate
      hubName="Business Strategy & Transformation"
      hubSlug="strategy-corporate-finance/business-strategy"
      hubHref="/capabilities/strategy-corporate-finance/business-strategy"
      serviceName="Business Model Innovation"
      serviceSlug="business-model-innovation"
      heroSubtitle="Reimagine how you create and capture value. Explore new revenue models, pricing strategies, and go-to-market approaches."
      heroImage="/images/capabilities/cap-chess.jpg"
      experienceStats={[
        { number: "100+", label: "Business Strategy & Transformation engagements delivered for growing companies" },
        { number: "20-40%", label: "Typical performance improvement captured within the first 12 months" },
        { number: "8-16 wks", label: "Time to first measurable impact in a focused workstream" },
        { number: "Embedded", label: "Capability transfer at every engagement" },
      ]}
      challenge="Leaders know business model innovation can unlock material value, yet the gap between intent and execution is wide. Legacy processes, fragmented data, and unclear ownership keep performance well below potential — and small fixes rarely move the needle on their own."
      opportunity="A focused business model innovation program — grounded in Business Strategy & Transformation fundamentals and powered by modern analytics — can sharpen decisions, lift returns, and free working capital. The teams that win treat this as a multi-year capability build, not a one-off project."
      approachPillars={[
        {
          step: "01",
          title: "Diagnose and discover",
          body:
            "We assess your current business model innovation state — mapping processes, capabilities, data, and gaps. We benchmark against best-in-class peers and quantify the value at stake.",
        },
        {
          step: "02",
          title: "Design and decide",
          body:
            "We co-design a target operating model for business model innovation — balancing speed, cost, risk, and impact. The blueprint is grounded in your context and built to scale.",
        },
        {
          step: "03",
          title: "Deliver and embed",
          body:
            "We deploy in agile sprints, measuring impact at each step. We build internal Business Strategy & Transformation capability alongside process change so the new way of working sticks long after we leave.",
        },
      ]}
      outcomes={[
        "Clear, executive-ready strategy for business model innovation aligned to enterprise priorities",
        "Measurable performance gains across cost, growth, risk, and resilience",
        "Stronger leadership ownership and cross-functional governance to sustain results",
        "Internal Business Strategy & Transformation capability uplift that compounds value beyond the engagement",
      ]}
      featuredCases={[
        { slug: "bank-cross-sell", title: "Turning single accounts into real relationships", industry: "Financial Services", metric: "$24M", image: "/images/industries/fin-trader.jpg" },
        { slug: "wealth-onboarding", title: "Cutting wealth onboarding from weeks to days", industry: "Financial Services", metric: "60%", image: "/images/industries/fin-handshake-city.jpg" },
        { slug: "pe-healthcare-diligence", title: "Cutting healthcare diligence time by 40%", industry: "Private Equity", metric: "40%", image: "/images/capabilities/cap-conference-data.jpg" },
      ]}
      relatedServices={[
        { slug: "strategic-planning", name: "Strategic Planning", href: "/capabilities/strategy-corporate-finance/business-strategy/strategic-planning" },
        { slug: "growth-strategy", name: "Growth Strategy", href: "/capabilities/strategy-corporate-finance/business-strategy/growth-strategy" },
        { slug: "organizational-transformation", name: "Organizational Transformation", href: "/capabilities/strategy-corporate-finance/business-strategy/organizational-transformation" },
      ]}
      ctaLeadName="Talk to our Business Model Innovation lead"
    />
  );
}
