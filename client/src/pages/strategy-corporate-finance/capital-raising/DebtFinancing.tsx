// TODO: confirm with practice lead before publish — experience stats, challenge, opportunity, approach pillars, outcomes, related services, and CTA lead name for Debt Financing.

import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export default function StrategyCorporateFinanceCapitalRaisingDebtFinancing() {
  return (
    <ServiceDetailTemplate
      hubName="Capital Raising"
      hubSlug="strategy-corporate-finance/capital-raising"
      hubHref="/capabilities/strategy-corporate-finance/capital-raising"
      serviceName="Debt Financing"
      serviceSlug="debt-financing"
      heroSubtitle="Access bank loans, asset-based lending, and alternative debt structures. We negotiate terms that preserve flexibility and minimize cost of capital."
      heroImage="/images/industries/deal-handshake.jpg"
      experienceStats={[
        { number: "100+", label: "Capital Raising engagements delivered for mid-market and growth companies" },
        { number: "20-40%", label: "Typical performance improvement captured within the first 12 months" },
        { number: "8-16 wks", label: "Time to first measurable impact in a focused workstream" },
        { number: "Embedded", label: "Capability transfer at every engagement" },
      ]}
      challenge="Leaders know debt financing can unlock material value, yet the gap between intent and execution is wide. Legacy processes, fragmented data, and unclear ownership keep performance well below potential — and small fixes rarely move the needle on their own."
      opportunity="A focused debt financing program — grounded in Capital Raising fundamentals and powered by modern analytics — can sharpen decisions, lift returns, and free working capital. The teams that win treat this as a multi-year capability build, not a one-off project."
      approachPillars={[
        {
          step: "01",
          title: "Diagnose and discover",
          body:
            "We assess your current debt financing state — mapping processes, capabilities, data, and gaps. We benchmark against best-in-class peers and quantify the value at stake.",
        },
        {
          step: "02",
          title: "Design and decide",
          body:
            "We co-design a target operating model for debt financing — balancing speed, cost, risk, and impact. The blueprint is grounded in your context and built to scale.",
        },
        {
          step: "03",
          title: "Deliver and embed",
          body:
            "We deploy in agile sprints, measuring impact at each step. We build internal Capital Raising capability alongside process change so the new way of working sticks long after we leave.",
        },
      ]}
      outcomes={[
        "Clear, executive-ready strategy for debt financing aligned to enterprise priorities",
        "Measurable performance gains across cost, growth, risk, and resilience",
        "Stronger leadership ownership and cross-functional governance to sustain results",
        "Internal Capital Raising capability uplift that compounds value beyond the engagement",
      ]}
      featuredCases={[
        { slug: "financial-fraud-detection", title: "Catching card fraud before the money moves", industry: "Financial Services", metric: "73%", image: "/images/industries/fin-monitors.jpg" },
        { slug: "insurance-claims-automation", title: "Settling straightforward claims in hours, not weeks", industry: "Insurance", metric: "60%", image: "/case-insurance-claims.399e5d4b.jpg" },
        { slug: "bank-cross-sell", title: "Turning single accounts into real relationships", industry: "Financial Services", metric: "$24M", image: "/images/industries/fin-trader.jpg" },
      ]}
      relatedServices={[
        { slug: "equity-financing", name: "Equity Financing", href: "/capabilities/strategy-corporate-finance/capital-raising/equity-financing" },
        { slug: "investment-readiness", name: "Investment Readiness", href: "/capabilities/strategy-corporate-finance/capital-raising/investment-readiness" },
        { slug: "investor-relations", name: "Investor Relations", href: "/capabilities/strategy-corporate-finance/capital-raising/investor-relations" },
      ]}
      ctaLeadName="Talk to our Debt Financing lead"
    />
  );
}
