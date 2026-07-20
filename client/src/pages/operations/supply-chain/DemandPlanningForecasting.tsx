
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export default function OperationsSupplyChainDemandPlanningForecasting() {
  return (
    <ServiceDetailTemplate
      hubName="Supply Chain Optimization"
      hubSlug="operations/supply-chain"
      hubHref="/capabilities/operations/supply-chain"
      serviceName="Demand Planning & Forecasting"
      serviceSlug="demand-planning-forecasting"
      heroSubtitle="Improve forecast accuracy with advanced analytics. Reduce stockouts and excess inventory through better demand sensing and planning."
      heroImage="/images/industries/retail-warehouse.jpg"
      experienceStats={[
        { number: "100+", label: "Supply Chain Optimization engagements delivered globally" },
        { number: "20-40%", label: "Typical performance improvement captured" },
        { number: "8-16 wks", label: "Time to first measurable impact" },
        { number: "Embedded", label: "Capability transfer at every engagement" },
      ]}
      challenge="Operations leaders know demand planning & forecasting can unlock material value, yet the gap between intent and execution is wide. Legacy processes, fragmented data, and unclear ownership keep performance well below potential — and small fixes rarely move the needle on their own."
      opportunity="A focused demand planning & forecasting program — grounded in supply chain optimization fundamentals and powered by modern analytics — can compress cycle times, lift quality, and free working capital. The teams that win treat this as a multi-year capability build, not a one-off project."
      approachPillars={[
        {
          step: "01",
          title: "Diagnose the current state",
          body:
            "We assess your existing demand planning & forecasting approach — mapping flows, capabilities, and gaps. We benchmark against best-in-class performers and quantify the opportunity ahead.",
        },
        {
          step: "02",
          title: "Design the target state",
          body:
            "We co-design a target operating model for demand planning & forecasting — balancing speed, cost, quality, and risk. The blueprint is grounded in your context and built to scale.",
        },
        {
          step: "03",
          title: "Deliver and embed",
          body:
            "We deploy in agile sprints, measuring impact at each step. We build internal capability alongside process change so the new way of working sticks long after we leave.",
        },
      ]}
      outcomes={[
        "Clear, executive-ready strategy for demand planning & forecasting aligned to enterprise priorities",
        "Measurable performance gains across cost, quality, speed, and customer experience",
        "Stronger frontline ownership and cross-functional governance to sustain results",
        "Internal Supply Chain Optimization capability uplift that compounds value beyond the engagement",
      ]}
            featuredCases={[
        { slug: "warehouse-optimization", title: "Lifting warehouse productivity 45% for a regional distributor", industry: "Transportation & Logistics", metric: "45%", image: "/images/cases/warehouse-optimization-hero.jpg" },
        { slug: "freight-optimization", title: "Cutting freight costs 18% for a consumer-goods shipper", industry: "Transportation & Logistics", metric: "18%", image: "/images/industries/transport-traffic.jpg" },
        { slug: "last-mile-optimization", title: "Cutting last-mile delivery costs 30% for a regional carrier", industry: "Transportation & Logistics", metric: "30%", image: "/images/industries/transport-bridge.jpg" },
      ]}
      relatedServices={[
        { slug: "supply-chain-strategy", name: "Supply Chain Strategy", href: "/capabilities/operations/supply-chain/supply-chain-strategy" },
        { slug: "inventory-optimization", name: "Inventory Optimization", href: "/capabilities/operations/supply-chain/inventory-optimization" },
        { slug: "procurement-excellence", name: "Procurement Excellence", href: "/capabilities/operations/supply-chain/procurement-excellence" },
      ]}
      ctaLeadName="Talk to our Demand Planning & Forecasting lead"
    />
  );
}
