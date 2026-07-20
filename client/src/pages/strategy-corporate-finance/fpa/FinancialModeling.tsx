
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export default function StrategyCorporateFinanceFpaFinancialModeling() {
  return (
    <ServiceDetailTemplate
      hubName="Financial Planning & Analysis"
      hubSlug="strategy-corporate-finance/fpa"
      hubHref="/capabilities/strategy-corporate-finance/fpa"
      serviceName="Financial Modeling"
      serviceSlug="financial-modeling"
      heroSubtitle="Build sophisticated models for business cases, valuations, and strategic scenarios. Excel and BI-based solutions tailored to your needs."
      heroImage="/images/capabilities/cap-data-bars.jpg"
      experienceStats={[
        { number: "100+", label: "Financial Planning & Analysis engagements delivered for growing companies" },
        { number: "20-40%", label: "Typical performance improvement captured within the first 12 months" },
        { number: "8-16 wks", label: "Time to first measurable impact in a focused workstream" },
        { number: "Embedded", label: "Capability transfer at every engagement" },
      ]}
      challenge="Leaders know financial modeling can unlock material value, yet the gap between intent and execution is wide. Legacy processes, fragmented data, and unclear ownership keep performance well below potential — and small fixes rarely move the needle on their own."
      opportunity="A focused financial modeling program — grounded in Financial Planning & Analysis fundamentals and powered by modern analytics — can sharpen decisions, lift returns, and free working capital. The teams that win treat this as a multi-year capability build, not a one-off project."
      approachPillars={[
        {
          step: "01",
          title: "Diagnose and discover",
          body:
            "We assess your current financial modeling state — mapping processes, capabilities, data, and gaps. We benchmark against best-in-class peers and quantify the value at stake.",
        },
        {
          step: "02",
          title: "Design and decide",
          body:
            "We co-design a target operating model for financial modeling — balancing speed, cost, risk, and impact. The blueprint is grounded in your context and built to scale.",
        },
        {
          step: "03",
          title: "Deliver and embed",
          body:
            "We deploy in agile sprints, measuring impact at each step. We build internal Financial Planning & Analysis capability alongside process change so the new way of working sticks long after we leave.",
        },
      ]}
      outcomes={[
        "Clear, executive-ready strategy for financial modeling aligned to enterprise priorities",
        "Measurable performance gains across cost, growth, risk, and resilience",
        "Stronger leadership ownership and cross-functional governance to sustain results",
        "Internal Financial Planning & Analysis capability uplift that compounds value beyond the engagement",
      ]}
            featuredCases={[
        { slug: "fpa-forecasting-transformation", title: "Turning finance into a forecasting engine", industry: "Retail", metric: "Days, not weeks", image: "/images/industries/advisor-charts.jpg" },
        { slug: "healthcare-revenue-cycle", title: "Recovering revenue the system had already earned", industry: "Healthcare", metric: "45% fewer rejected claims", image: "/case-healthcare-team.5797392b.jpg" },
        { slug: "pe-industrial-transformation", title: "How a Fund Added Seven Points of EBITDA Margin at an Industrial Manufacturer", industry: "Private Equity", metric: "7 pts EBITDA margin", image: "/images/cases/pe-industrial-transformation-hero.jpg" },
      ]}
      relatedServices={[
        { slug: "budgeting-forecasting", name: "Budgeting & Forecasting", href: "/capabilities/strategy-corporate-finance/fpa/budgeting-forecasting" },
        { slug: "variance-analysis", name: "Variance Analysis", href: "/capabilities/strategy-corporate-finance/fpa/variance-analysis" },
        { slug: "kpi-development", name: "KPI Development", href: "/capabilities/strategy-corporate-finance/fpa/kpi-development" },
      ]}
      ctaLeadName="Talk to our Financial Modeling lead"
    />
  );
}
