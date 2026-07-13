// TODO: confirm with practice lead before publish — experience stats, challenge, opportunity, approach pillars, outcomes, related services, and CTA lead name for Business Intelligence.

import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export default function StrategyCorporateFinanceFpaBusinessIntelligence() {
  return (
    <ServiceDetailTemplate
      hubName="Financial Planning & Analysis"
      hubSlug="strategy-corporate-finance/fpa"
      hubHref="/capabilities/strategy-corporate-finance/fpa"
      serviceName="Business Intelligence"
      serviceSlug="business-intelligence"
      heroSubtitle="Deploy dashboards and analytics tools that provide real-time visibility into performance across the organization."
      heroImage="/images/capabilities/cap-data-bars.jpg"
      experienceStats={[
        { number: "100+", label: "Financial Planning & Analysis engagements delivered for growing companies" },
        { number: "20-40%", label: "Typical performance improvement captured within the first 12 months" },
        { number: "8-16 wks", label: "Time to first measurable impact in a focused workstream" },
        { number: "Embedded", label: "Capability transfer at every engagement" },
      ]}
      challenge="Leaders know business intelligence can unlock material value, yet the gap between intent and execution is wide. Legacy processes, fragmented data, and unclear ownership keep performance well below potential — and small fixes rarely move the needle on their own."
      opportunity="A focused business intelligence program — grounded in Financial Planning & Analysis fundamentals and powered by modern analytics — can sharpen decisions, lift returns, and free working capital. The teams that win treat this as a multi-year capability build, not a one-off project."
      approachPillars={[
        {
          step: "01",
          title: "Diagnose and discover",
          body:
            "We assess your current business intelligence state — mapping processes, capabilities, data, and gaps. We benchmark against best-in-class peers and quantify the value at stake.",
        },
        {
          step: "02",
          title: "Design and decide",
          body:
            "We co-design a target operating model for business intelligence — balancing speed, cost, risk, and impact. The blueprint is grounded in your context and built to scale.",
        },
        {
          step: "03",
          title: "Deliver and embed",
          body:
            "We deploy in agile sprints, measuring impact at each step. We build internal Financial Planning & Analysis capability alongside process change so the new way of working sticks long after we leave.",
        },
      ]}
      outcomes={[
        "Clear, executive-ready strategy for business intelligence aligned to enterprise priorities",
        "Measurable performance gains across cost, growth, risk, and resilience",
        "Stronger leadership ownership and cross-functional governance to sustain results",
        "Internal Financial Planning & Analysis capability uplift that compounds value beyond the engagement",
      ]}
      featuredCases={[
        { slug: "healthcare-transformation", title: "Unifying scattered patient data to improve outcomes", industry: "Healthcare", metric: "35%", image: "/case-medical-collaboration.9602cc8c.jpg" },
        { slug: "pe-healthcare-diligence", title: "Cutting healthcare diligence time by 40%", industry: "Private Equity", metric: "40%", image: "/images/capabilities/cap-conference-data.jpg" },
      ]}
      relatedServices={[
        { slug: "budgeting-forecasting", name: "Budgeting & Forecasting", href: "/capabilities/strategy-corporate-finance/fpa/budgeting-forecasting" },
        { slug: "variance-analysis", name: "Variance Analysis", href: "/capabilities/strategy-corporate-finance/fpa/variance-analysis" },
        { slug: "financial-modeling", name: "Financial Modeling", href: "/capabilities/strategy-corporate-finance/fpa/financial-modeling" },
      ]}
      ctaLeadName="Talk to our Business Intelligence lead"
    />
  );
}
