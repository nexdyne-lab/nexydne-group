import IndustryCapabilityTemplate from "@/components/IndustryCapabilityTemplate";

const cases = [
  {
    slug: "warehouse-optimization",
    title: "Lifting warehouse productivity 45% for a regional distributor",
    industry: "Transportation & Logistics",
    metric: "45%",
    image: "/images/cases/warehouse-optimization-hero.jpg",
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
  { name: "Customer Intelligence", href: "/industries/transportation-logistics/customer-intelligence" },
  { name: "Strategy & Growth", href: "/industries/transportation-logistics/strategy-growth" },
];

export default function TransportationLogisticsDataTransformation() {
  return (
    <IndustryCapabilityTemplate
      industry="Transportation & Logistics"
      industrySlug="transportation-logistics"
      capability="Data Transformation"
      capabilitySlug="data-transformation"
      heroSubtitle="A shipment already generates a flood of data — telematics, ELD, TMS, WMS, EDI, and carrier APIs — but it lands in a dozen systems that never speak to each other. We help carriers, 3PLs, and shippers unify it into one real-time visibility platform that makes predictive ETAs, network analytics, and AI genuinely possible."
      heroImage="/images/industries/tech-datacenter.jpg"
      heroFocal="60% 50%"
      perspective={{
        heading: "You can't run a modern network on data you can only see after the load delivers.",
        image: "/images/data-abstract.jpg",
        paragraphs: [
          "Every tractor, trailer, and sortation line is now a sensor, and every partner exchanges data by EDI or API. Yet most operators still stitch it together in spreadsheets after the fact — telematics in one tool, TMS in another, WMS in a third, and the customer's system nowhere at all. By the time a report exists, the exception it describes is already a claim.",
          "We build the data foundation the network actually needs: shipment, asset, and OT/IoT feeds landed in one governed platform, cleaned and modeled so an ETA is trustworthy and a forecast is defensible. That platform is what makes real-time visibility, exception prediction, and AI-driven planning work — instead of another dashboard that confirms the disruption you already lived through.",
        ],
      }}
      offeringsHeading="How we build data transformation for transportation and logistics."
      offeringsIntro="Each capability is a working system, delivered by the team that will help you run it."
      offerings={[
        {
          title: "Data Strategy",
          description:
            "Define the visibility, forecasting, and monetization use cases worth building — and the data each one actually requires.",
          href: "/solutions/data-strategy",
        },
        {
          title: "Data Platform",
          description:
            "Land telematics, TMS, WMS, and partner EDI feeds in one real-time platform built for shipment-scale volume and streaming.",
          href: "/solutions/data-platform",
        },
        {
          title: "Data Engineering",
          description:
            "Bridge OT and IT, normalizing ELD, IoT, and carrier-API data into clean, event-driven pipelines the whole network can trust.",
          href: "/solutions/data-engineering",
        },
        {
          title: "Data Governance",
          description:
            "Make ETAs, emissions figures, and settlement data auditable, with the lineage shippers and regulators now ask for.",
          href: "/solutions/data-governance",
        },
        {
          title: "Data Visualization",
          description:
            "Give planners and customers live control-tower views of shipments, dwell, and exceptions instead of yesterday's report.",
          href: "/solutions/data-visualization",
        },
        {
          title: "Data Solutions",
          description:
            "Deploy predictive-ETA, capacity, and demand-forecasting models on the platform to get ahead of disruption, not react to it.",
          href: "/solutions/data-solutions",
        },
      ]}
      stats={[
        { number: "80%+", label: "of shipment events available in real time, not after delivery" },
        { number: "25–40%", label: "improvement in ETA accuracy from a unified data foundation" },
        { number: "6–9 mo", label: "to a governed platform ready for forecasting and AI" },
      ]}
      casesHeading="Data transformation, proved in outcomes."
      cases={cases}
      relatedHeading="Adjacent work for Transportation & Logistics leaders."
      related={related}
      generalPractice={{
        label: "Explore our firm-wide Data Transformation practice",
        href: "/capabilities/data-transformation",
      }}
      cta={{
        heading: "Turn shipment data into a network you can see ahead of.",
        body: "Tell us where visibility breaks down — a mode, a partner handoff, a forecast nobody trusts. Our Transportation & Logistics data team will read your note and come back within two business days with a concrete first move, not a sales pitch.",
      }}
    />
  );
}
