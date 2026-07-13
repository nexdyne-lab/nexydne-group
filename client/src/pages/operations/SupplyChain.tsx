
import CapabilityHubTemplate from "@/components/CapabilityHubTemplate";

export default function SupplyChainOptimization() {
  return (
    <CapabilityHubTemplate
      hubName="Supply Chain Optimization"
      slug="operations/supply-chain"
      heroSubtitle="Build resilient, cost-effective supply chains that adapt to disruption. Optimize inventory management, supplier relationships, and logistics networks."
      heroImage="/images/capabilities/cap-data-bars.jpg"
      experienceStats={[
        { number: "150+", label: "Supply chain transformation engagements across industries" },
        { number: "20-35%", label: "Typical reduction in total supply chain costs" },
        { number: "40-60%", label: "Improvement in inventory turns and service levels" },
        { number: "End-to-end", label: "Network design through last-mile execution" },
      ]}
      ambitions={[
        {
          title: "End-to-end visibility",
          description:
            "See your full supply chain in real time — flows, costs, exceptions, and risk — so planners and executives act on the same trusted picture instead of stale spreadsheets.",
        },
        {
          title: "Forecast demand with confidence",
          description:
            "Lift forecast accuracy with advanced analytics and demand-sensing signals — and translate that lift into less safety stock, fewer stockouts, and better service.",
        },
        {
          title: "Build supplier resilience",
          description:
            "Diversify, qualify, and continuously monitor suppliers so a single disruption never derails revenue. Risk-aware sourcing baked into every category strategy.",
        },
        {
          title: "Right-size inventory",
          description:
            "Free working capital trapped in the wrong nodes. Scientific inventory optimization that balances service levels, cost-to-serve, and obsolescence risk.",
        },
        {
          title: "Cut transportation cost",
          description:
            "Re-engineer flows, modes, and lanes — and use AI-driven routing and load building — to take 10-25% out of freight spend without slipping on service.",
        },
        {
          title: "Run S&OP that actually decides",
          description:
            "Move from reporting meetings to disciplined integrated planning where commercial, supply, and finance commit to one number — and execute against it.",
        },
      ]}
      howWeCanHelp={[
        {
          title: "Supply Chain Strategy",
          description:
            "Define your supply chain vision and operating model. Align network design, sourcing strategy, and capabilities with business objectives.",
          href: "/capabilities/operations/supply-chain/supply-chain-strategy",
        },
        {
          title: "Demand Planning & Forecasting",
          description:
            "Improve forecast accuracy with advanced analytics. Reduce stockouts and excess inventory through better demand sensing and planning.",
          href: "/capabilities/operations/supply-chain/demand-planning-forecasting",
        },
        {
          title: "Inventory Optimization",
          description:
            "Right-size inventory across the network. Balance service levels with working capital through scientific inventory management.",
          href: "/capabilities/operations/supply-chain/inventory-optimization",
        },
        {
          title: "Procurement Excellence",
          description:
            "Transform procurement from cost center to value creator. Strategic sourcing, supplier development, and contract optimization.",
          href: "/capabilities/operations/supply-chain/procurement-excellence",
        },
        {
          title: "Logistics & Distribution",
          description:
            "Optimize transportation and distribution networks. Reduce costs while improving delivery performance and flexibility.",
          href: "/capabilities/operations/supply-chain/logistics-distribution",
        },
        {
          title: "Supply Chain Digitization",
          description:
            "Deploy technology to enable visibility and agility. Control towers, analytics platforms, and automation solutions.",
          href: "/capabilities/operations/supply-chain/supply-chain-digitization",
        },
      ]}
      ambitionsCTAText="Talk to us about your Supply Chain Optimization ambition →"
      thoughtLeadership={[]}
      approachPillars={[
        {
          step: "01",
          title: "Diagnose the network",
          body: "We map your end-to-end supply chain — analyzing flows, costs, and service levels. We identify pain points, quantify improvement opportunities, and benchmark against best-in-class performers.",
        },
        {
          step: "02",
          title: "Design the architecture",
          body: "We develop a target state that balances cost, service, and resilience. We optimize network design, sourcing strategy, and inventory positioning to create a supply chain that delivers competitive advantage.",
        },
        {
          step: "03",
          title: "Deploy and scale",
          body: "We implement changes in agile sprints, measuring impact at each stage. We build internal capabilities alongside process improvements — ensuring your transformation is sustainable and self-reinforcing.",
        },
      ]}
      featuredCases={[
        { slug: "warehouse-optimization", title: "Lifting warehouse productivity 45% for a regional distributor", industry: "Transportation & Logistics", metric: "45%", image: "/images/industries/retail-warehouse.jpg" },
        { slug: "freight-optimization", title: "Cutting freight costs 18% for a consumer-goods shipper", industry: "Transportation & Logistics", metric: "18%", image: "/images/industries/transport-traffic.jpg" },
        { slug: "last-mile-optimization", title: "Cutting last-mile delivery costs 30% for a regional carrier", industry: "Transportation & Logistics", metric: "30%", image: "/images/industries/transport-bridge.jpg" },
      ]}
      relatedCapabilities={[
        { href: "/capabilities/strategy-corporate-finance", name: "Strategy & Corporate Finance" },
        { href: "/capabilities/business-building", name: "Business Building" },
        { href: "/capabilities/ai-technology-consulting", name: "AI Technology Consulting" },
      ]}
      ctaLeadName="Talk to our Supply Chain Optimization lead"
    />
  );
}
