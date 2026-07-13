// TODO: confirm with practice lead before publish — experience stats, approach pillars, outcomes, and CTA lead name for Logistics & Distribution.

import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export default function OperationsSupplyChainLogisticsDistribution() {
  return (
    <ServiceDetailTemplate
      hubName="Supply Chain Optimization"
      hubSlug="operations/supply-chain"
      hubHref="/capabilities/operations/supply-chain"
      serviceName="Logistics & Distribution"
      serviceSlug="logistics-distribution"
      heroSubtitle="Optimize transportation and distribution networks. Reduce costs while improving delivery performance and flexibility."
      heroImage="/images/industries/retail-warehouse.jpg"
      experienceStats={[
        { number: "100+", label: "Supply Chain Optimization engagements delivered globally" },
        { number: "20-40%", label: "Typical performance improvement captured" },
        { number: "8-16 wks", label: "Time to first measurable impact" },
        { number: "Embedded", label: "Capability transfer at every engagement" },
      ]}
      challenge="Operations leaders know logistics & distribution can unlock material value, yet the gap between intent and execution is wide. Legacy processes, fragmented data, and unclear ownership keep performance well below potential — and small fixes rarely move the needle on their own."
      opportunity="A focused logistics & distribution program — grounded in supply chain optimization fundamentals and powered by modern analytics — can compress cycle times, lift quality, and free working capital. The teams that win treat this as a multi-year capability build, not a one-off project."
      approachPillars={[
        {
          step: "01",
          title: "Diagnose the current state",
          body:
            "We assess your existing logistics & distribution approach — mapping flows, capabilities, and gaps. We benchmark against best-in-class performers and quantify the opportunity ahead.",
        },
        {
          step: "02",
          title: "Design the target state",
          body:
            "We co-design a target operating model for logistics & distribution — balancing speed, cost, quality, and risk. The blueprint is grounded in your context and built to scale.",
        },
        {
          step: "03",
          title: "Deliver and embed",
          body:
            "We deploy in agile sprints, measuring impact at each step. We build internal capability alongside process change so the new way of working sticks long after we leave.",
        },
      ]}
      outcomes={[
        "Clear, executive-ready strategy for logistics & distribution aligned to enterprise priorities",
        "Measurable performance gains across cost, quality, speed, and customer experience",
        "Stronger frontline ownership and cross-functional governance to sustain results",
        "Internal Supply Chain Optimization capability uplift that compounds value beyond the engagement",
      ]}
      featuredCases={[
        { slug: "healthcare-revenue-cycle", title: "Recovering revenue the system had already earned", industry: "Healthcare", metric: "$32M", image: "/case-healthcare-team.5797392b.jpg" },
        { slug: "bank-cross-sell", title: "Turning single accounts into real relationships", industry: "Financial Services", metric: "$24M", image: "/images/industries/fin-trader.jpg" },
      ]}
      relatedServices={[
        { slug: "supply-chain-strategy", name: "Supply Chain Strategy", href: "/capabilities/operations/supply-chain/supply-chain-strategy" },
        { slug: "demand-planning-forecasting", name: "Demand Planning & Forecasting", href: "/capabilities/operations/supply-chain/demand-planning-forecasting" },
        { slug: "inventory-optimization", name: "Inventory Optimization", href: "/capabilities/operations/supply-chain/inventory-optimization" },
      ]}
      ctaLeadName="Talk to our Logistics & Distribution lead"
    />
  );
}
