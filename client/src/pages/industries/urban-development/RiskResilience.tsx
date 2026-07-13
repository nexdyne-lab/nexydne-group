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
  { name: "Data Transformation", href: "/industries/urban-development/data-transformation" },
  { name: "Operations Excellence", href: "/industries/urban-development/operations-excellence" },
];

export default function UrbanDevelopmentRiskResilience() {
  return (
    <IndustryCapabilityTemplate
      industry="Urban Development"
      industrySlug="urban-development"
      capability="Risk & Resilience"
      capabilitySlug="risk-resilience"
      heroSubtitle="A building underwritten today has to stand through fifty years of climate, policy, and entitlement risk it was never priced for. We help developers, cities, and infrastructure owners see that exposure clearly — climate and infrastructure resilience, entitlement and project risk, ESG and sustainability compliance, and governance for the AI now shaping planning decisions."
      heroImage="/images/industries/city-night.jpg"
      heroFocal="60% 50%"
      perspective={{
        heading: "You are underwriting a fifty-year asset against a changing climate and a moving rulebook.",
        image: "/images/data-abstract.jpg",
        paragraphs: [
          "Development is a long bet made under deep uncertainty. Flood maps that were conservative at underwriting become optimistic a decade later; an entitlement that looked routine stalls in appeals; a sustainability disclosure regime tightens after the foundation is poured. The projects that get hurt are usually the ones that treated resilience, entitlement, and ESG as boxes to clear at closing rather than exposures to manage across the entire hold.",
          "We make that exposure visible and governable. We stress-test assets and districts against climate and infrastructure risk, map entitlement and project risk before it turns into carrying cost, and stand up ESG and sustainability compliance that survives an audit rather than a press release. And as planning teams lean on AI for demand, siting, and permitting, we put the model governance around it so an algorithm never quietly drives a public decision it can't defend.",
        ],
      }}
      offeringsHeading="How we build risk and resilience for urban development."
      offeringsIntro="Each capability is a working system, delivered by the team that will help you run it."
      offerings={[
        {
          title: "Data Governance",
          description:
            "Give climate, entitlement, and ESG reporting one trusted source so a disclosure or appeal survives scrutiny.",
          href: "/solutions/data-governance",
        },
        {
          title: "Responsible AI & Model Risk",
          description:
            "Govern the demand, siting, and permitting models so an algorithm never drives a public decision it can't defend.",
          href: "/capabilities/artificial-intelligence/responsible-ai",
        },
        {
          title: "Automated Controls",
          description:
            "Embed resilience, code, and sustainability checks into the workflow so compliance is continuous, not a closing scramble.",
          href: "/solutions/process-optimization/intelligent-automation-design",
        },
        {
          title: "Continuous Improvement Programs",
          description:
            "Turn each entitlement fight and climate event into hardening the next project inherits, not a one-off lesson.",
          href: "/solutions/process-optimization/continuous-improvement-programs",
        },
        {
          title: "Process Discovery & Mining",
          description:
            "Surface where entitlement and project risk actually accumulate across the development pipeline before it costs carry.",
          href: "/solutions/process-optimization/process-discovery-mining",
        },
        {
          title: "Change Management & Training",
          description:
            "Build resilience and ESG discipline into how development, planning, and asset teams actually work.",
          href: "/solutions/process-optimization/change-management-training",
        },
      ]}
      stats={[
        { number: "50 yr", label: "climate and policy horizon we stress-test the asset against" },
        { number: "Audit-ready", label: "ESG and sustainability disclosure that holds up under scrutiny" },
        { number: "Governed", label: "every planning AI model documented, monitored, and defensible" },
      ]}
      casesHeading="Urban risk and resilience, proved in outcomes."
      cases={cases}
      relatedHeading="Adjacent work for Urban Development leaders."
      related={related}
      generalPractice={{
        label: "Explore our firm-wide Risk & Resilience practice",
        href: "/capabilities/risk-and-resilience",
      }}
      cta={{
        heading: "Underwrite the exposure you can't see yet.",
        body: "Tell us where the risk sits — a flood-exposed asset, a stalled entitlement, an ESG regime tightening, a planning model no one can explain. Our Urban Development risk team will read your note and come back within two business days with a concrete first move, not a sales pitch.",
      }}
    />
  );
}
