// TODO: confirm with practice lead before publish — experience stats, challenge, opportunity, approach pillars, outcomes, related services, and CTA lead name for Predictive Cash Flow Modeling.

import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export default function StrategyCorporateFinanceAiPoweredFinancePredictiveCashFlowModeling() {
  return (
    <ServiceDetailTemplate
      hubName="AI-Powered Finance"
      hubSlug="strategy-corporate-finance/ai-powered-finance"
      hubHref="/capabilities/strategy-corporate-finance/ai-powered-finance"
      serviceName="Predictive Cash Flow Modeling"
      serviceSlug="predictive-cash-flow-modeling"
      heroSubtitle="Move from reactive to proactive cash management. Machine learning models that forecast cash positions with greater accuracy, identifying risks and opportunities weeks in advance."
      heroImage="/images/capabilities/cap-chess.jpg"
      experienceStats={[
        { number: "100+", label: "AI-Powered Finance engagements delivered for growing companies" },
        { number: "20-40%", label: "Typical performance improvement captured within the first 12 months" },
        { number: "8-16 wks", label: "Time to first measurable impact in a focused workstream" },
        { number: "Embedded", label: "Capability transfer at every engagement" },
      ]}
      challenge="Leaders know predictive cash flow modeling can unlock material value, yet the gap between intent and execution is wide. Legacy processes, fragmented data, and unclear ownership keep performance well below potential — and small fixes rarely move the needle on their own."
      opportunity="A focused predictive cash flow modeling program — grounded in AI-Powered Finance fundamentals and powered by modern analytics — can sharpen decisions, lift returns, and free working capital. The teams that win treat this as a multi-year capability build, not a one-off project."
      approachPillars={[
        {
          step: "01",
          title: "Diagnose and discover",
          body:
            "We assess your current predictive cash flow modeling state — mapping processes, capabilities, data, and gaps. We benchmark against best-in-class peers and quantify the value at stake.",
        },
        {
          step: "02",
          title: "Design and decide",
          body:
            "We co-design a target operating model for predictive cash flow modeling — balancing speed, cost, risk, and impact. The blueprint is grounded in your context and built to scale.",
        },
        {
          step: "03",
          title: "Deliver and embed",
          body:
            "We deploy in agile sprints, measuring impact at each step. We build internal AI-Powered Finance capability alongside process change so the new way of working sticks long after we leave.",
        },
      ]}
      outcomes={[
        "Clear, executive-ready strategy for predictive cash flow modeling aligned to enterprise priorities",
        "Measurable performance gains across cost, growth, risk, and resilience",
        "Stronger leadership ownership and cross-functional governance to sustain results",
        "Internal AI-Powered Finance capability uplift that compounds value beyond the engagement",
      ]}
      relatedServices={[
        { slug: "automated-financial-reporting", name: "Automated Financial Reporting", href: "/capabilities/strategy-corporate-finance/ai-powered-finance/automated-financial-reporting" },
        { slug: "ai-assisted-budgeting", name: "AI-Assisted Budgeting", href: "/capabilities/strategy-corporate-finance/ai-powered-finance/ai-assisted-budgeting" },
        { slug: "intelligent-variance-analysis", name: "Intelligent Variance Analysis", href: "/capabilities/strategy-corporate-finance/ai-powered-finance/intelligent-variance-analysis" },
      ]}
      ctaLeadName="Talk to our Predictive Cash Flow Modeling lead"
    />
  );
}
