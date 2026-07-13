// TODO: confirm with practice lead before publish — experience stats, approach pillars, outcomes, and CTA lead name for Supply Chain Strategy.

import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export default function OperationsSupplyChainSupplyChainStrategy() {
  return (
    <ServiceDetailTemplate
      hubName="Supply Chain Optimization"
      hubSlug="operations/supply-chain"
      hubHref="/capabilities/operations/supply-chain"
      serviceName="Supply Chain Strategy"
      serviceSlug="supply-chain-strategy"
      heroSubtitle="Define your supply chain vision and operating model. Align network design, sourcing strategy, and capabilities with business objectives."
      heroImage="/images/industries/retail-warehouse.jpg"
      experienceStats={[
        { number: "100+", label: "Supply Chain Optimization engagements delivered globally" },
        { number: "20-40%", label: "Typical performance improvement captured" },
        { number: "8-16 wks", label: "Time to first measurable impact" },
        { number: "Embedded", label: "Capability transfer at every engagement" },
      ]}
      challenge="Operations leaders know supply chain strategy can unlock material value, yet the gap between intent and execution is wide. Legacy processes, fragmented data, and unclear ownership keep performance well below potential — and small fixes rarely move the needle on their own."
      opportunity="A focused supply chain strategy program — grounded in supply chain optimization fundamentals and powered by modern analytics — can compress cycle times, lift quality, and free working capital. The teams that win treat this as a multi-year capability build, not a one-off project."
      approachPillars={[
        {
          step: "01",
          title: "Diagnose the current state",
          body:
            "We assess your existing supply chain strategy approach — mapping flows, capabilities, and gaps. We benchmark against best-in-class performers and quantify the opportunity ahead.",
        },
        {
          step: "02",
          title: "Design the target state",
          body:
            "We co-design a target operating model for supply chain strategy — balancing speed, cost, quality, and risk. The blueprint is grounded in your context and built to scale.",
        },
        {
          step: "03",
          title: "Deliver and embed",
          body:
            "We deploy in agile sprints, measuring impact at each step. We build internal capability alongside process change so the new way of working sticks long after we leave.",
        },
      ]}
      outcomes={[
        "Clear, executive-ready strategy for supply chain strategy aligned to enterprise priorities",
        "Measurable performance gains across cost, quality, speed, and customer experience",
        "Stronger frontline ownership and cross-functional governance to sustain results",
        "Internal Supply Chain Optimization capability uplift that compounds value beyond the engagement",
      ]}
      featuredCases={[
        { slug: "financial-fraud-detection", title: "Catching card fraud before the money moves", industry: "Financial Services", metric: "73%", image: "/images/industries/fin-monitors.jpg" },
        { slug: "healthcare-transformation", title: "Unifying scattered patient data to improve outcomes", industry: "Healthcare", metric: "35%", image: "/case-medical-collaboration.9602cc8c.jpg" },
      ]}
      relatedServices={[
        { slug: "demand-planning-forecasting", name: "Demand Planning & Forecasting", href: "/capabilities/operations/supply-chain/demand-planning-forecasting" },
        { slug: "inventory-optimization", name: "Inventory Optimization", href: "/capabilities/operations/supply-chain/inventory-optimization" },
        { slug: "procurement-excellence", name: "Procurement Excellence", href: "/capabilities/operations/supply-chain/procurement-excellence" },
      ]}
      ctaLeadName="Talk to our Supply Chain Strategy lead"
    />
  );
}
