import IndustryCapabilityTemplate from "@/components/IndustryCapabilityTemplate";

const cases = [
  {
    slug: "bank-process-automation",
    title: "How RPA eliminated 10,000+ hours of manual work at a major bank",
    industry: "Financial Services",
    metric: "10K+ hrs",
    image: "/images/industries/mfg-robot-arm-team.jpg",
  },
  {
    slug: "consulting-knowledge-management",
    title: "Transforming knowledge management for a global consulting firm",
    industry: "Professional Services",
    metric: "3x",
    image: "/images/industries/mfg-robot-arm.jpg",
  },
  {
    slug: "fintech-payment-automation",
    title: "Building a scalable payment processing system for a fintech startup",
    industry: "Financial Services",
    metric: "100K+",
    image: "/images/industries/ops-gears.jpg",
  },
];

const related = [
  { name: "Operations Excellence", href: "/industries/automotive/operations-excellence" },
  { name: "Strategy & Growth", href: "/industries/automotive/strategy-growth" },
  { name: "Risk & Resilience", href: "/industries/automotive/risk-resilience" },
];

export default function AutomotiveDataTransformation() {
  return (
    <IndustryCapabilityTemplate
      industry="Automotive"
      industrySlug="automotive"
      capability="Data Transformation"
      capabilitySlug="data-transformation"
      heroSubtitle="A modern vehicle is a data platform on wheels, and the plant that builds it is another one entirely — yet telematics, ECU signals, MES, and quality systems rarely speak the same language. We help OEMs and suppliers unify vehicle, connected-services, and plant-to-cloud data into a foundation the software-defined vehicle can actually be built on."
      heroImage="/images/industries/tech-datacenter.jpg"
      heroFocal="60% 50%"
      perspective={{
        heading: "The software-defined vehicle needs a data platform, not a data lake.",
        image: "/images/data-abstract.jpg",
        paragraphs: [
          "Connected vehicles now generate telematics, diagnostics, and feature-usage data at a scale no legacy warranty or CRM system was built to hold — and it is the raw material for over-the-air features, usage-based services, and the next platform decision. Most OEMs are drowning in that signal while starving for the governed, engineered data that product and safety teams can actually trust.",
          "We build the platform underneath it: a data strategy that spans vehicle, connected-services, and manufacturing domains; the engineering to move OT signals from the plant floor to the cloud without losing traceability; and the governance to keep VIN-linked and personal data compliant across every market you sell in. The result is one foundation that serves software-defined product, plant analytics, and AI engineering at once.",
        ],
      }}
      offeringsHeading="How we build data transformation for automotive."
      offeringsIntro="Each capability is a working system, delivered by the team that will help you run it."
      offerings={[
        {
          title: "Data Strategy",
          description:
            "Define a domain model that spans the vehicle, connected services, and the plant so software and manufacturing draw from one source.",
          href: "/solutions/data-strategy",
        },
        {
          title: "Data Platform",
          description:
            "Stand up the cloud platform that can absorb fleet-scale telematics and ECU data without buckling under volume or cost.",
          href: "/solutions/data-platform",
        },
        {
          title: "Data Engineering",
          description:
            "Move OT signals from MES, PLCs, and test benches to the cloud with the lineage safety and warranty teams demand.",
          href: "/solutions/data-engineering",
        },
        {
          title: "Data Governance",
          description:
            "Govern VIN-linked, diagnostic, and personal data so connected-vehicle programs stay compliant across every market.",
          href: "/solutions/data-governance",
        },
        {
          title: "Data Visualization",
          description:
            "Give quality, launch, and connected-services teams live views of fleet health and plant performance in one pane.",
          href: "/solutions/data-visualization",
        },
        {
          title: "Data Solutions",
          description:
            "Build the fleet-analytics, predictive-warranty, and feature-usage products that turn vehicle data into a revenue stream.",
          href: "/solutions/data-solutions",
        },
      ]}
      stats={[
        { number: "70%+", label: "of connected-vehicle data typically unused before a platform exists" },
        { number: "50%", label: "faster time to a new OTA feature on a unified data foundation" },
        { number: "1 view", label: "of plant-to-cloud health across MES, telematics, and quality" },
      ]}
      casesHeading="Data transformation, proved in outcomes."
      cases={cases}
      relatedHeading="Adjacent work for Automotive leaders."
      related={related}
      generalPractice={{
        label: "Explore our firm-wide Data Transformation practice",
        href: "/capabilities/data-transformation",
      }}
      cta={{
        heading: "Give the software-defined vehicle a foundation.",
        body: "Tell us where the data breaks down — telematics you can't use, a plant that won't reach the cloud, warranty signal you can't trust. Our Automotive data team will read your note and come back within two business days with a concrete first move, not a sales pitch.",
      }}
    />
  );
}
