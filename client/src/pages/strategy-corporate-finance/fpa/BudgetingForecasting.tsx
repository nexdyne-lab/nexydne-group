// TODO: confirm with practice lead before publish — experience stats, challenge, opportunity, approach pillars, outcomes, related services, and CTA lead name for Budgeting & Forecasting.

import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export default function StrategyCorporateFinanceFpaBudgetingForecasting() {
  return (
    <ServiceDetailTemplate
      hubName="Financial Planning & Analysis"
      hubSlug="strategy-corporate-finance/fpa"
      hubHref="/capabilities/strategy-corporate-finance/fpa"
      serviceName="Budgeting & Forecasting"
      serviceSlug="budgeting-forecasting"
      heroSubtitle="Build robust annual budgets and rolling forecasts that adapt to changing conditions. Scenario modeling for strategic decision-making."
      heroImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2400"
      experienceStats={[
        { number: "100+", label: "Financial Planning & Analysis engagements delivered for mid-market and growth companies" },
        { number: "20-40%", label: "Typical performance improvement captured within the first 12 months" },
        { number: "8-16 wks", label: "Time to first measurable impact in a focused workstream" },
        { number: "Embedded", label: "Capability transfer at every engagement" },
      ]}
      challenge="Leaders know budgeting & forecasting can unlock material value, yet the gap between intent and execution is wide. Legacy processes, fragmented data, and unclear ownership keep performance well below potential — and small fixes rarely move the needle on their own."
      opportunity="A focused budgeting & forecasting program — grounded in Financial Planning & Analysis fundamentals and powered by modern analytics — can sharpen decisions, lift returns, and free working capital. The teams that win treat this as a multi-year capability build, not a one-off project."
      approachPillars={[
        {
          step: "01",
          title: "Diagnose and discover",
          body:
            "We assess your current budgeting & forecasting state — mapping processes, capabilities, data, and gaps. We benchmark against best-in-class peers and quantify the value at stake.",
        },
        {
          step: "02",
          title: "Design and decide",
          body:
            "We co-design a target operating model for budgeting & forecasting — balancing speed, cost, risk, and impact. The blueprint is grounded in your context and built to scale.",
        },
        {
          step: "03",
          title: "Deliver and embed",
          body:
            "We deploy in agile sprints, measuring impact at each step. We build internal Financial Planning & Analysis capability alongside process change so the new way of working sticks long after we leave.",
        },
      ]}
      outcomes={[
        "Clear, executive-ready strategy for budgeting & forecasting aligned to enterprise priorities",
        "Measurable performance gains across cost, growth, risk, and resilience",
        "Stronger leadership ownership and cross-functional governance to sustain results",
        "Internal Financial Planning & Analysis capability uplift that compounds value beyond the engagement",
      ]}
      featuredCases={[
        {
          slug: "accounting-audit-automation",
          title: "Accounting Firm Cuts Audit Cycle Time By Half With Workflow Automation",
          industry: "Financial Services · Strategy",
          metric: "50%",
          image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1600&q=80",
        },
        {
          slug: "wealth-management-automation",
          title: "Wealth Manager Automates Portfolio Reporting And Client Onboarding",
          industry: "Financial Services · Strategy",
          metric: "3x",
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&q=80",
        },
        {
          slug: "healthcare-data-analytics",
          title: "Health System Unlocks Population Health Insights With Unified Data Platform",
          industry: "Healthcare · Strategy",
          metric: "40%",
          image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1600&q=80",
        },
      ]}
      relatedServices={[
        { slug: "variance-analysis", name: "Variance Analysis", href: "/capabilities/strategy-corporate-finance/fpa/variance-analysis" },
        { slug: "financial-modeling", name: "Financial Modeling", href: "/capabilities/strategy-corporate-finance/fpa/financial-modeling" },
        { slug: "kpi-development", name: "KPI Development", href: "/capabilities/strategy-corporate-finance/fpa/kpi-development" },
      ]}
      ctaLeadName="Talk to our Budgeting & Forecasting lead"
    />
  );
}
