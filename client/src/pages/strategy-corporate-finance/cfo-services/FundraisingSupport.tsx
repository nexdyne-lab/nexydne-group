
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export default function StrategyCorporateFinanceCfoServicesFundraisingSupport() {
  return (
    <ServiceDetailTemplate
      hubName="Fractional CFO Services"
      hubSlug="strategy-corporate-finance/cfo-services"
      hubHref="/capabilities/strategy-corporate-finance/cfo-services"
      serviceName="Fundraising Support"
      serviceSlug="fundraising-support"
      heroSubtitle="Prepare for funding rounds with financial models, due diligence packages, and investor pitch support."
      heroImage="/images/industries/advisor-charts.jpg"
      experienceStats={[
        { number: "100+", label: "Fractional CFO Services engagements delivered for growing companies" },
        { number: "20-40%", label: "Typical performance improvement captured within the first 12 months" },
        { number: "8-16 wks", label: "Time to first measurable impact in a focused workstream" },
        { number: "Embedded", label: "Capability transfer at every engagement" },
      ]}
      challenge="Leaders know fundraising support can unlock material value, yet the gap between intent and execution is wide. Legacy processes, fragmented data, and unclear ownership keep performance well below potential — and small fixes rarely move the needle on their own."
      opportunity="A focused fundraising support program — grounded in Fractional CFO Services fundamentals and powered by modern analytics — can sharpen decisions, lift returns, and free working capital. The teams that win treat this as a multi-year capability build, not a one-off project."
      approachPillars={[
        {
          step: "01",
          title: "Diagnose and discover",
          body:
            "We assess your current fundraising support state — mapping processes, capabilities, data, and gaps. We benchmark against best-in-class peers and quantify the value at stake.",
        },
        {
          step: "02",
          title: "Design and decide",
          body:
            "We co-design a target operating model for fundraising support — balancing speed, cost, risk, and impact. The blueprint is grounded in your context and built to scale.",
        },
        {
          step: "03",
          title: "Deliver and embed",
          body:
            "We deploy in agile sprints, measuring impact at each step. We build internal Fractional CFO Services capability alongside process change so the new way of working sticks long after we leave.",
        },
      ]}
      outcomes={[
        "Clear, executive-ready strategy for fundraising support aligned to enterprise priorities",
        "Measurable performance gains across cost, growth, risk, and resilience",
        "Stronger leadership ownership and cross-functional governance to sustain results",
        "Internal Fractional CFO Services capability uplift that compounds value beyond the engagement",
      ]}
            featuredCases={[
        { slug: "fpa-forecasting-transformation", title: "Turning finance into a forecasting engine", industry: "Retail", metric: "Days", image: "/images/industries/advisor-charts.jpg" },
        { slug: "healthcare-revenue-cycle", title: "Recovering revenue the system had already earned", industry: "Healthcare", metric: "$32M", image: "/case-healthcare-team.5797392b.jpg" },
        { slug: "pe-industrial-transformation", title: "Adding $18M in EBITDA at an industrial manufacturer", industry: "Private Equity", metric: "$18M", image: "/images/industries/transport-traffic.jpg" },
      ]}
      relatedServices={[
        { slug: "strategic-financial-planning", name: "Strategic Financial Planning", href: "/capabilities/strategy-corporate-finance/cfo-services/strategic-financial-planning" },
        { slug: "cash-flow-management", name: "Cash Flow Management", href: "/capabilities/strategy-corporate-finance/cfo-services/cash-flow-management" },
        { slug: "board-investor-relations", name: "Board & Investor Relations", href: "/capabilities/strategy-corporate-finance/cfo-services/board-investor-relations" },
      ]}
      ctaLeadName="Talk to our Fundraising Support lead"
    />
  );
}
