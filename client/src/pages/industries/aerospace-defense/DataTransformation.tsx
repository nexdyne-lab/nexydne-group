import IndustryCapabilityTemplate from "@/components/IndustryCapabilityTemplate";

const cases = [
  {
    slug: "bank-process-automation",
    title: "How RPA eliminated 10,000+ hours of manual work at a major bank",
    industry: "Financial Services",
    metric: "10K+ hrs",
    image: "/images/industries/aero-astronaut.jpg",
  },
  {
    slug: "consulting-knowledge-management",
    title: "Transforming knowledge management for a global consulting firm",
    industry: "Professional Services",
    metric: "3x",
    image: "/images/industries/eng-designers.jpg",
  },
  {
    slug: "accounting-audit-automation",
    title: "How audit automation helped an accounting firm scale 2x without hiring",
    industry: "Professional Services",
    metric: "2x",
    image: "/images/industries/ops-monitors-dark.jpg",
  },
];

const related = [
  { name: "Operations Excellence", href: "/industries/aerospace-defense/operations-excellence" },
  { name: "Risk & Resilience", href: "/industries/aerospace-defense/risk-resilience" },
  { name: "Strategy & Growth", href: "/industries/aerospace-defense/strategy-growth" },
];

export default function AerospaceDefenseDataTransformation() {
  return (
    <IndustryCapabilityTemplate
      industry="Aerospace & Defense"
      industrySlug="aerospace-defense"
      capability="Data Transformation"
      capabilitySlug="data-transformation"
      heroSubtitle="The digital thread and the digital twin only pay off if the data underneath them actually connects. We help A&D primes and suppliers wire one authoritative thread across engineering, production, and sustainment — on accredited enclaves, with controlled and classified data governed the way the program requires."
      heroImage="/images/industries/tech-circuit.jpg"
      heroFocal="60% 50%"
      perspective={{
        heading: "The digital thread is only real if the data connects.",
        image: "/images/data-abstract.jpg",
        paragraphs: [
          "MBSE, the digital thread, and the digital twin are on every A&D roadmap, but the data that would make them real is still trapped in PLM, ERP, MES, and CAD silos — often split across unclassified, CUI, and classified enclaves that were never designed to talk to each other. So the model, the shop floor, and the twin each carry their own version of the truth, and engineers spend their days reconciling instead of building.",
          "We connect that thread end to end: a data strategy that names the authoritative source for requirements, design, manufacturing, and sustainment; platforms stood up on IL4 and IL5-accredited enclaves so data is usable at the classification level it lives at; and the governance to manage lineage and access for CUI and ITAR-controlled engineering data across a decades-long lifecycle — the foundation the twins and AI actually depend on.",
        ],
      }}
      offeringsHeading="How we build data transformation for aerospace and defense."
      offeringsIntro="Each capability is a working system, delivered by the team that will help you run it."
      offerings={[
        {
          title: "Data Strategy",
          description:
            "Define the digital-thread architecture that ties requirements, design, analysis, manufacturing, and sustainment into one authoritative source of truth.",
          href: "/solutions/data-strategy",
        },
        {
          title: "Data Platform",
          description:
            "Stand up the platform on IL4, IL5, and accredited enclaves so engineering and program data is usable at the classification level it actually lives at.",
          href: "/solutions/data-platform",
        },
        {
          title: "Data Engineering",
          description:
            "Wire PLM, ERP, MES, and CAD into a connected thread so a change in the model reaches the shop floor and the twin without re-keying.",
          href: "/solutions/data-engineering",
        },
        {
          title: "Data Governance",
          description:
            "Manage lineage, classification, and access for CUI and ITAR-controlled engineering data across the full program lifecycle.",
          href: "/solutions/data-governance",
        },
        {
          title: "Data Visualization",
          description:
            "Give program, engineering, and quality leaders one live picture of build status, schedule risk, and configuration instead of a monthly deck.",
          href: "/solutions/data-visualization",
        },
        {
          title: "Data Solutions",
          description:
            "Turn the connected thread into digital twins, predictive sustainment, and AI that only work once the data underneath them is trustworthy.",
          href: "/solutions/data-solutions",
        },
      ]}
      stats={[
        { number: "1 thread", label: "connecting requirements to sustainment across the program" },
        { number: "50%", label: "less time reconciling engineering, ERP, and shop-floor data" },
        { number: "IL4/IL5", label: "accredited platforms for controlled and classified program data" },
      ]}
      casesHeading="Data transformation, proved in outcomes."
      cases={cases}
      relatedHeading="Adjacent work for Aerospace & Defense leaders."
      related={related}
      generalPractice={{
        label: "Explore our firm-wide Data Transformation practice",
        href: "/capabilities/data-transformation",
      }}
      cta={{
        heading: "Make the digital thread more than a diagram.",
        body: "Tell us where the thread breaks — between engineering and the floor, across classification levels, into sustainment. Our Aerospace & Defense data team will read your note and come back within two business days with a concrete first move, not a sales pitch.",
      }}
    />
  );
}
