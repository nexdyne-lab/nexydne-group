// TODO: confirm with practice lead before publish — experience stats, approach pillars, outcomes, and CTA lead name for Supply Chain Digitization.

import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export default function OperationsSupplyChainSupplyChainDigitization() {
  return (
    <ServiceDetailTemplate
      hubName="Supply Chain Optimization"
      hubSlug="operations/supply-chain"
      hubHref="/capabilities/operations/supply-chain"
      serviceName="Supply Chain Digitization"
      serviceSlug="supply-chain-digitization"
      heroSubtitle="Deploy technology to enable visibility and agility. Control towers, analytics platforms, and automation solutions."
      heroImage="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2400"
      experienceStats={[
        { number: "100+", label: "Supply Chain Optimization engagements delivered globally" },
        { number: "20-40%", label: "Typical performance improvement captured" },
        { number: "8-16 wks", label: "Time to first measurable impact" },
        { number: "Embedded", label: "Capability transfer at every engagement" },
      ]}
      challenge="Operations leaders know supply chain digitization can unlock material value, yet the gap between intent and execution is wide. Legacy processes, fragmented data, and unclear ownership keep performance well below potential — and small fixes rarely move the needle on their own."
      opportunity="A focused supply chain digitization program — grounded in supply chain optimization fundamentals and powered by modern analytics — can compress cycle times, lift quality, and free working capital. The teams that win treat this as a multi-year capability build, not a one-off project."
      approachPillars={[
        {
          step: "01",
          title: "Diagnose the current state",
          body:
            "We assess your existing supply chain digitization approach — mapping flows, capabilities, and gaps. We benchmark against best-in-class performers and quantify the opportunity ahead.",
        },
        {
          step: "02",
          title: "Design the target state",
          body:
            "We co-design a target operating model for supply chain digitization — balancing speed, cost, quality, and risk. The blueprint is grounded in your context and built to scale.",
        },
        {
          step: "03",
          title: "Deliver and embed",
          body:
            "We deploy in agile sprints, measuring impact at each step. We build internal capability alongside process change so the new way of working sticks long after we leave.",
        },
      ]}
      outcomes={[
        "Clear, executive-ready strategy for supply chain digitization aligned to enterprise priorities",
        "Measurable performance gains across cost, quality, speed, and customer experience",
        "Stronger frontline ownership and cross-functional governance to sustain results",
        "Internal Supply Chain Optimization capability uplift that compounds value beyond the engagement",
      ]}
      featuredCases={[
        {
          slug: "healthcare-data-analytics",
          title: "Health System Builds Population Health Analytics Platform",
          industry: "Healthcare · Operations",
          metric: "$18M",
          image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1600&q=80",
        },
        {
          slug: "fintech-payment-automation",
          title: "Fintech Scales Payment Operations Without Headcount Growth",
          industry: "Financial Services · Operations",
          metric: "5x",
          image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1600&q=80",
        },
        {
          slug: "consulting-knowledge-management",
          title: "Top-5 Consulting Firm Builds AI Knowledge Platform",
          industry: "Professional Services · Operations",
          metric: "60%",
          image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&q=80",
        },
      ]}
      relatedServices={[
        { slug: "supply-chain-strategy", name: "Supply Chain Strategy", href: "/capabilities/operations/supply-chain/supply-chain-strategy" },
        { slug: "demand-planning-forecasting", name: "Demand Planning & Forecasting", href: "/capabilities/operations/supply-chain/demand-planning-forecasting" },
        { slug: "inventory-optimization", name: "Inventory Optimization", href: "/capabilities/operations/supply-chain/inventory-optimization" },
      ]}
      ctaLeadName="Talk to our Supply Chain Digitization lead"
    />
  );
}
