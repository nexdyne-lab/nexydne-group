import IndustryCapabilityTemplate from "@/components/IndustryCapabilityTemplate";

const cases = [
  {
    slug: "consulting-knowledge-management",
    title: "Transforming knowledge management for a global consulting firm",
    industry: "Professional Services",
    metric: "3x",
    image: "/images/industries/skyscraper.jpg",
  },
  {
    slug: "healthcare-data-analytics",
    title: "Unlocking healthcare insights with real-time data analytics",
    industry: "Healthcare",
    metric: "25%",
    image: "/images/industries/arch-glass-sphere.jpg",
  },
  {
    slug: "bank-process-automation",
    title: "How RPA eliminated 10,000+ hours of manual work at a major bank",
    industry: "Financial Services",
    metric: "10K+ hrs",
    image: "/images/industries/city-digital.jpg",
  },
];

const related = [
  { name: "Strategy & Growth", href: "/industries/urban-development/strategy-growth" },
  { name: "Operations Excellence", href: "/industries/urban-development/operations-excellence" },
  { name: "Risk & Resilience", href: "/industries/urban-development/risk-resilience" },
];

export default function UrbanDevelopmentDataTransformation() {
  return (
    <IndustryCapabilityTemplate
      industry="Urban Development"
      industrySlug="urban-development"
      capability="Data Transformation"
      capabilitySlug="data-transformation"
      heroSubtitle="The built environment now generates data at every layer — GIS parcels, BIM models, traffic and utility sensors, permit and 311 records — and almost none of it talks to the rest. We help cities, developers, and infrastructure providers unify that into one governed urban data platform, and stand up the digital twin that turns a district from something you manage in spreadsheets into something you can actually model."
      heroImage="/images/industries/city-digital.jpg"
      heroFocal="60% 50%"
      perspective={{
        heading: "A digital twin is worthless if the underlying data can't be trusted.",
        image: "/images/data-abstract.jpg",
        paragraphs: [
          "Every smart-city program ends up in the same place: dozens of sensor pilots, a GIS team, a BIM archive from the contractor, and a permitting system, all owned by different departments and none of them reconciled to the same parcel or asset ID. You can buy a shiny digital-twin viewer on top of that, but it will only ever be as trustworthy as the fragmented data underneath — and planners learn fast not to bet a rezoning on a model they can't audit.",
          "We fix the foundation first. We unify GIS, BIM, IoT, and records data onto one governed platform with a single spatial and asset backbone, engineer the pipelines that keep it current, and put the governance in place so the digital twin of the built environment becomes a decision system planners, engineers, and council members actually rely on — not a demo that impresses at the ribbon-cutting and goes stale by year two.",
        ],
      }}
      offeringsHeading="How we build data transformation for urban development."
      offeringsIntro="Each capability is a working system, delivered by the team that will help you run it."
      offerings={[
        {
          title: "Data Strategy",
          description:
            "Set the target for the urban data estate — the parcels, assets, and sensors that matter and who is accountable for each.",
          href: "/solutions/data-strategy",
        },
        {
          title: "Data Platform",
          description:
            "Stand up the integrated urban data platform that unifies GIS, BIM, IoT, and records on one spatial backbone.",
          href: "/solutions/data-platform",
        },
        {
          title: "Data Engineering",
          description:
            "Build the pipelines that keep sensor, permit, and asset data current enough to drive a live digital twin.",
          href: "/solutions/data-engineering",
        },
        {
          title: "Data Governance",
          description:
            "Reconcile every layer to a single parcel and asset ID so planners can audit a model before they zone on it.",
          href: "/solutions/data-governance",
        },
        {
          title: "Data Visualization",
          description:
            "Turn the twin into planning dashboards and public-facing views councils and residents can read and interrogate.",
          href: "/solutions/data-visualization",
        },
        {
          title: "Data Solutions",
          description:
            "Deploy the mobility, utility, and land-use analytics that make the platform earn its keep beyond the pilot.",
          href: "/solutions/data-solutions",
        },
      ]}
      stats={[
        { number: "1", label: "spatial and asset backbone every department reconciles to" },
        { number: "40%+", label: "less analyst time spent stitching GIS, BIM, and sensor feeds by hand" },
        { number: "Live", label: "digital twin planners can query before a zoning or capital decision" },
      ]}
      casesHeading="Urban data transformation, proved in outcomes."
      cases={cases}
      relatedHeading="Adjacent work for Urban Development leaders."
      related={related}
      generalPractice={{
        label: "Explore our firm-wide Data Transformation practice",
        href: "/capabilities/data-transformation",
      }}
      cta={{
        heading: "Give the district a data foundation you can zone on.",
        body: "Tell us where the urban data breaks down — a sensor program stuck in pilot, a GIS and BIM split, a twin no one trusts. Our Urban Development data team will read your note and come back within two business days with a concrete first move, not a sales pitch.",
      }}
    />
  );
}
