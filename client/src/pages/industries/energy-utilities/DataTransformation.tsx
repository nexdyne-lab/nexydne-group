import IndustryCapabilityTemplate from "@/components/IndustryCapabilityTemplate";

const cases = [
  {
    slug: "bank-process-automation",
    title: "How RPA eliminated 10,000+ hours of manual work at a major bank",
    industry: "Financial Services",
    metric: "10K+ hrs",
    image: "/images/industries/energy-powerplant.jpg",
  },
  {
    slug: "consulting-knowledge-management",
    title: "Transforming knowledge management for a global consulting firm",
    industry: "Professional Services",
    metric: "3x",
    image: "/images/industries/energy-solar.jpg",
  },
  {
    slug: "accounting-audit-automation",
    title: "How audit automation helped an accounting firm scale 2x without hiring",
    industry: "Professional Services",
    metric: "2x",
    image: "/images/industries/energy-renewable-team.jpg",
  },
];

const related = [
  { name: "Operations Excellence", href: "/industries/energy-utilities/operations-excellence" },
  { name: "Risk & Resilience", href: "/industries/energy-utilities/risk-resilience" },
  { name: "Customer Intelligence", href: "/industries/energy-utilities/customer-intelligence" },
];

export default function EnergyUtilitiesDataTransformation() {
  return (
    <IndustryCapabilityTemplate
      industry="Energy & Utilities"
      industrySlug="energy-utilities"
      capability="Data Transformation"
      capabilitySlug="data-transformation"
      heroSubtitle="Every smart meter, SCADA point, PMU, and inverter is now a data source — and most utilities still can't answer a planning question without three teams reconciling three systems. We help utilities converge OT and IT into one governed grid data platform so DERMS, predictive maintenance, and AI-driven planning finally run on the same trusted picture of the grid."
      heroImage="/images/industries/energy-solar.jpg"
      heroFocal="60% 50%"
      perspective={{
        heading: "The grid is already instrumented. The data just doesn't add up to one grid.",
        image: "/images/data-abstract.jpg",
        paragraphs: [
          "AMI, SCADA, ADMS, the GIS, the asset register, and the customer system each hold a piece of the truth, and none of them agree on where an asset is, what it's rated for, or what it did last night. Meanwhile solar, batteries, and EV charging are turning the edge of the grid into a two-way, second-by-second problem that a nightly batch and a spreadsheet were never going to solve.",
          "We converge OT and IT into one governed platform: sensor and meter telemetry engineered into usable feeds, an asset and network model everyone trusts, and the DER visibility a DERMS needs to actually orchestrate. That's the foundation predictive maintenance, hosting-capacity analysis, and AI planning all sit on — one grid data platform instead of six reconciliations.",
        ],
      }}
      offeringsHeading="How we build data transformation for energy and utilities."
      offeringsIntro="Each capability is a working system, delivered by the team that will help you run it."
      offerings={[
        {
          title: "Data Strategy",
          description:
            "Set the OT/IT data operating model — what the meter, SCADA, and asset systems each own, and how the grid picture gets reconciled once.",
          href: "/solutions/data-strategy",
        },
        {
          title: "Data Platform",
          description:
            "Stand up the grid data platform that carries AMI, telemetry, and asset data at the scale DERMS and planning analytics demand.",
          href: "/solutions/data-platform",
        },
        {
          title: "Data Engineering",
          description:
            "Turn raw meter intervals, PMU streams, and inverter telemetry into clean, time-aligned feeds engineers and models can trust.",
          href: "/solutions/data-engineering",
        },
        {
          title: "Data Governance",
          description:
            "Govern the network model, asset ratings, and DER registry so the same answer holds in the control room, planning, and the rate case.",
          href: "/solutions/data-governance",
        },
        {
          title: "Data Visualization",
          description:
            "Give operators and planners live views of load, hosting capacity, and asset health instead of yesterday's reconciled report.",
          href: "/solutions/data-visualization",
        },
        {
          title: "Data Solutions",
          description:
            "Build the DER integration, load-forecasting, and predictive-maintenance products the transition is putting on your roadmap.",
          href: "/solutions/data-solutions",
        },
      ]}
      stats={[
        { number: "1", label: "governed grid model replacing siloed OT and IT systems" },
        { number: "40%+", label: "less engineering time spent reconciling asset and network data" },
        { number: "Real-time", label: "DER and load visibility to feed DERMS and planning" },
      ]}
      casesHeading="Data transformation, proved in outcomes."
      cases={cases}
      relatedHeading="Adjacent work for Energy & Utilities leaders."
      related={related}
      generalPractice={{
        label: "Explore our firm-wide Data Transformation practice",
        href: "/capabilities/data-transformation",
      }}
      cta={{
        heading: "Make the grid data add up to one grid.",
        body: "Tell us where the picture breaks — a planning question three teams answer differently, a DERMS starved of data, a meter program with nowhere to land. Our Energy & Utilities data team will read your note and come back within two business days with a concrete first move, not a sales pitch.",
      }}
    />
  );
}
