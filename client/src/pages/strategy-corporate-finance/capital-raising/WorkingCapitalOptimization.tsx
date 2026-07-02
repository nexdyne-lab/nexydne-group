// TODO: confirm with practice lead before publish — experience stats, challenge, opportunity, approach pillars, outcomes, related services, and CTA lead name for Working Capital Optimization.

import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export default function StrategyCorporateFinanceCapitalRaisingWorkingCapitalOptimization() {
  return (
    <ServiceDetailTemplate
      hubName="Capital Raising"
      hubSlug="strategy-corporate-finance/capital-raising"
      hubHref="/capabilities/strategy-corporate-finance/capital-raising"
      serviceName="Working Capital Optimization"
      serviceSlug="working-capital-optimization"
      heroSubtitle="Unlock cash trapped in your business. Improve receivables, manage payables, and optimize inventory to reduce external funding needs."
      heroImage="/images/industries/deal-handshake.jpg"
      experienceStats={[
        { number: "100+", label: "Capital Raising engagements delivered for mid-market and growth companies" },
        { number: "20-40%", label: "Typical performance improvement captured within the first 12 months" },
        { number: "8-16 wks", label: "Time to first measurable impact in a focused workstream" },
        { number: "Embedded", label: "Capability transfer at every engagement" },
      ]}
      challenge="Leaders know working capital optimization can unlock material value, yet the gap between intent and execution is wide. Legacy processes, fragmented data, and unclear ownership keep performance well below potential — and small fixes rarely move the needle on their own."
      opportunity="A focused working capital optimization program — grounded in Capital Raising fundamentals and powered by modern analytics — can sharpen decisions, lift returns, and free working capital. The teams that win treat this as a multi-year capability build, not a one-off project."
      approachPillars={[
        {
          step: "01",
          title: "Diagnose and discover",
          body:
            "We assess your current working capital optimization state — mapping processes, capabilities, data, and gaps. We benchmark against best-in-class peers and quantify the value at stake.",
        },
        {
          step: "02",
          title: "Design and decide",
          body:
            "We co-design a target operating model for working capital optimization — balancing speed, cost, risk, and impact. The blueprint is grounded in your context and built to scale.",
        },
        {
          step: "03",
          title: "Deliver and embed",
          body:
            "We deploy in agile sprints, measuring impact at each step. We build internal Capital Raising capability alongside process change so the new way of working sticks long after we leave.",
        },
      ]}
      outcomes={[
        "Clear, executive-ready strategy for working capital optimization aligned to enterprise priorities",
        "Measurable performance gains across cost, growth, risk, and resilience",
        "Stronger leadership ownership and cross-functional governance to sustain results",
        "Internal Capital Raising capability uplift that compounds value beyond the engagement",
      ]}
      featuredCases={[
        {
          slug: "bank-process-automation",
          title: "Regional Bank Automates Loan Origination End-to-End",
          industry: "Financial Services · Strategy",
          metric: "70%",
          image: "/images/capabilities/cap-celebrate.jpg",
        },
        {
          slug: "insurance-claims-processing",
          title: "Insurer Slashes Claims Processing Time With Intelligent Workflow",
          industry: "Financial Services · Strategy",
          metric: "65%",
          image: "/images/industries/fin-trader.jpg",
        },
        {
          slug: "accounting-audit-automation",
          title: "Accounting Firm Cuts Audit Cycle Time By Half With Workflow Automation",
          industry: "Financial Services · Strategy",
          metric: "50%",
          image: "/images/industries/fin-handshake-city.jpg",
        },
      ]}
      relatedServices={[
        { slug: "equity-financing", name: "Equity Financing", href: "/capabilities/strategy-corporate-finance/capital-raising/equity-financing" },
        { slug: "debt-financing", name: "Debt Financing", href: "/capabilities/strategy-corporate-finance/capital-raising/debt-financing" },
        { slug: "investment-readiness", name: "Investment Readiness", href: "/capabilities/strategy-corporate-finance/capital-raising/investment-readiness" },
      ]}
      ctaLeadName="Talk to our Working Capital Optimization lead"
    />
  );
}
