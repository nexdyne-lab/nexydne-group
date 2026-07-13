// TODO: confirm with practice lead before publish — experience stats, challenge, opportunity, approach pillars, outcomes, related services, and CTA lead name for Financial Systems & Processes.

import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export default function StrategyCorporateFinanceCfoServicesFinancialSystemsProcesses() {
  return (
    <ServiceDetailTemplate
      hubName="Fractional CFO Services"
      hubSlug="strategy-corporate-finance/cfo-services"
      hubHref="/capabilities/strategy-corporate-finance/cfo-services"
      serviceName="Financial Systems & Processes"
      serviceSlug="financial-systems-processes"
      heroSubtitle="Build scalable financial infrastructure. Implement controls, policies, and systems that grow with you."
      heroImage="/images/capabilities/cap-robot-factory.jpg"
      experienceStats={[
        { number: "100+", label: "Fractional CFO Services engagements delivered for growing companies" },
        { number: "20-40%", label: "Typical performance improvement captured within the first 12 months" },
        { number: "8-16 wks", label: "Time to first measurable impact in a focused workstream" },
        { number: "Embedded", label: "Capability transfer at every engagement" },
      ]}
      challenge="Leaders know financial systems & processes can unlock material value, yet the gap between intent and execution is wide. Legacy processes, fragmented data, and unclear ownership keep performance well below potential — and small fixes rarely move the needle on their own."
      opportunity="A focused financial systems & processes program — grounded in Fractional CFO Services fundamentals and powered by modern analytics — can sharpen decisions, lift returns, and free working capital. The teams that win treat this as a multi-year capability build, not a one-off project."
      approachPillars={[
        {
          step: "01",
          title: "Diagnose and discover",
          body:
            "We assess your current financial systems & processes state — mapping processes, capabilities, data, and gaps. We benchmark against best-in-class peers and quantify the value at stake.",
        },
        {
          step: "02",
          title: "Design and decide",
          body:
            "We co-design a target operating model for financial systems & processes — balancing speed, cost, risk, and impact. The blueprint is grounded in your context and built to scale.",
        },
        {
          step: "03",
          title: "Deliver and embed",
          body:
            "We deploy in agile sprints, measuring impact at each step. We build internal Fractional CFO Services capability alongside process change so the new way of working sticks long after we leave.",
        },
      ]}
      outcomes={[
        "Clear, executive-ready strategy for financial systems & processes aligned to enterprise priorities",
        "Measurable performance gains across cost, growth, risk, and resilience",
        "Stronger leadership ownership and cross-functional governance to sustain results",
        "Internal Fractional CFO Services capability uplift that compounds value beyond the engagement",
      ]}
      featuredCases={[
        { slug: "pe-industrial-transformation", title: "Adding $18M in EBITDA at an industrial manufacturer", industry: "Private Equity", metric: "$18M", image: "/images/industries/transport-traffic.jpg" },
        { slug: "financial-fraud-detection", title: "Catching card fraud before the money moves", industry: "Financial Services", metric: "73%", image: "/images/industries/fin-monitors.jpg" },
        { slug: "insurance-claims-automation", title: "Settling straightforward claims in hours, not weeks", industry: "Insurance", metric: "60%", image: "/case-insurance-claims.399e5d4b.jpg" },
      ]}
      relatedServices={[
        { slug: "strategic-financial-planning", name: "Strategic Financial Planning", href: "/capabilities/strategy-corporate-finance/cfo-services/strategic-financial-planning" },
        { slug: "cash-flow-management", name: "Cash Flow Management", href: "/capabilities/strategy-corporate-finance/cfo-services/cash-flow-management" },
        { slug: "board-investor-relations", name: "Board & Investor Relations", href: "/capabilities/strategy-corporate-finance/cfo-services/board-investor-relations" },
      ]}
      ctaLeadName="Talk to our Financial Systems & Processes lead"
    />
  );
}
