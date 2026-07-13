import IndustryCapabilityTemplate from "@/components/IndustryCapabilityTemplate";

const cases = [
  {
    slug: "warehouse-optimization",
    title: "Lifting warehouse productivity 45% for a regional distributor",
    industry: "Transportation & Logistics",
    metric: "45%",
    image: "/images/industries/retail-warehouse.jpg",
  },
  {
    slug: "freight-optimization",
    title: "Cutting freight costs 18% for a consumer-goods shipper",
    industry: "Transportation & Logistics",
    metric: "18%",
    image: "/images/industries/transport-traffic.jpg",
  },
  {
    slug: "last-mile-optimization",
    title: "Cutting last-mile delivery costs 30% for a regional carrier",
    industry: "Transportation & Logistics",
    metric: "30%",
    image: "/images/industries/transport-bridge.jpg",
  },
];

const related = [
  { name: "Operations Excellence", href: "/industries/transportation-logistics/operations-excellence" },
  { name: "Data Transformation", href: "/industries/transportation-logistics/data-transformation" },
  { name: "Customer Intelligence", href: "/industries/transportation-logistics/customer-intelligence" },
];

export default function TransportationLogisticsStrategyGrowth() {
  return (
    <IndustryCapabilityTemplate
      industry="Transportation & Logistics"
      industrySlug="transportation-logistics"
      capability="Strategy & Growth"
      capabilitySlug="strategy-growth"
      heroSubtitle="Growth in transportation and logistics is a network problem: where to put terminals, which services to launch, how to fund the fleet, and how to fold decarbonization into the plan instead of bolting it on. We help carriers, 3PLs, and fleet owners make those capital-heavy bets with the discipline the thin margins demand."
      heroImage="/images/industries/transport-bridge.jpg"
      heroFocal="60% 50%"
      perspective={{
        heading: "In a network business, the strategy is where the assets go — and what you ask them to do.",
        image: "/images/business-strategy-abstract.jpg",
        paragraphs: [
          "Logistics has always run on thin margins and long-lived assets, so the strategic bets are unforgiving: a terminal in the wrong place, a service the market wasn't ready for, or a fleet order timed against the cycle can weigh on returns for a decade. Meanwhile e-commerce has pulled volume toward last-mile and cold-chain, capital costs have reset, and shippers' scope-3 commitments are quietly rewriting which carriers make the shortlist.",
          "We help you make those calls with evidence: network and footprint strategy grounded in real demand and lane economics, new-service cases for last-mile, cold-chain, and value-added logistics, and asset and capital strategy that times fleet renewal and electrification to the cycle. Decarbonization runs through all of it — not as a compliance line item, but as a growth position with real customers behind it.",
        ],
      }}
      offeringsHeading="How we build strategy and growth for transportation and logistics."
      offeringsIntro="Each capability is a working system, delivered by the team that will help you run it."
      offerings={[
        {
          title: "Growth Strategy",
          description:
            "Define where to play across modes, lanes, and geographies — and where density, not just volume, actually creates value.",
          href: "/capabilities/strategy-corporate-finance/business-strategy/growth-strategy",
        },
        {
          title: "Business Model Innovation",
          description:
            "Build the case for last-mile, cold-chain, and value-added logistics services that lift margin above commodity haul.",
          href: "/capabilities/strategy-corporate-finance/business-strategy/business-model-innovation",
        },
        {
          title: "Strategic Planning",
          description:
            "Turn network, footprint, and fleet-renewal choices into a sequenced plan the capital committee can stand behind.",
          href: "/capabilities/strategy-corporate-finance/business-strategy/strategic-planning",
        },
        {
          title: "Organizational Transformation",
          description:
            "Reshape the operating model and talent so the network can actually run the new services and assets you fund.",
          href: "/capabilities/strategy-corporate-finance/business-strategy/organizational-transformation",
        },
        {
          title: "Digital Strategy",
          description:
            "Set the platform and data agenda that turns visibility and telematics into a durable commercial edge.",
          href: "/capabilities/strategy-corporate-finance/business-strategy/digital-strategy",
        },
        {
          title: "Turnaround & Restructuring",
          description:
            "Restore operating ratio and balance-sheet flexibility when lanes, terminals, or fleet economics have turned against you.",
          href: "/capabilities/strategy-corporate-finance/business-strategy/turnaround-restructuring",
        },
      ]}
      stats={[
        { number: "2–4 pts", label: "operating-ratio improvement from network and footprint moves" },
        { number: "20%+", label: "of new revenue from last-mile, cold-chain, and value-added services" },
        { number: "10-yr", label: "asset and decarbonization roadmap tied to the fleet cycle" },
      ]}
      casesHeading="Strategy and growth, proved in outcomes."
      cases={cases}
      relatedHeading="Adjacent work for Transportation & Logistics leaders."
      related={related}
      generalPractice={{
        label: "Explore our firm-wide Strategy & Corporate Finance practice",
        href: "/capabilities/strategy-corporate-finance",
      }}
      cta={{
        heading: "Make the network bet with the odds on your side.",
        body: "Tell us where the growth question sits — a footprint decision, a new service, a fleet-and-emissions plan. Our Transportation & Logistics team will read your note and come back within two business days with a concrete first move, not a sales pitch.",
      }}
    />
  );
}
