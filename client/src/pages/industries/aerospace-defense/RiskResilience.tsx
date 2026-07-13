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
  { name: "Data Transformation", href: "/industries/aerospace-defense/data-transformation" },
  { name: "Strategy & Growth", href: "/industries/aerospace-defense/strategy-growth" },
];

export default function AerospaceDefenseRiskResilience() {
  return (
    <IndustryCapabilityTemplate
      industry="Aerospace & Defense"
      industrySlug="aerospace-defense"
      capability="Risk & Resilience"
      capabilitySlug="risk-resilience"
      heroSubtitle="CMMC, ITAR, and program-protection rules are tightening, and primes are pushing them all the way down the base. We help A&D companies harden cyber and compliance posture, build industrial-base and multi-tier supply-chain resilience, govern the models going into fielded systems, and hold the line on mission assurance and safety."
      heroImage="/images/industries/ops-monitors-dark.jpg"
      heroFocal="60% 50%"
      perspective={{
        heading: "Compliance is now a condition of the contract — and it flows downhill.",
        image: "/images/data-abstract.jpg",
        paragraphs: [
          "CMMC Level 2, ITAR, and program-protection requirements are no longer a back-office obligation; they are pass/fail gates on award and on staying on contract. Primes are flowing them down to a supplier base that is often concentrated, single-source, and years behind on the controls — which turns a tier-3 machine shop's cyber hygiene into a prime's schedule and revenue risk.",
          "We help you make resilience something you can prove rather than assert: governing custody of CUI, ITAR-controlled, and program-protected data, baking controls into the workflow so evidence is continuous instead of reconstructed before an assessment, mapping single-source and counterfeit exposure across your tiers, and putting mission-assurance and model-risk discipline around the AI now finding its way into engineering and autonomy.",
        ],
      }}
      offeringsHeading="How we build risk and resilience for aerospace and defense."
      offeringsIntro="Each capability is a working system, delivered by the team that will help you run it."
      offerings={[
        {
          title: "Data Governance",
          description:
            "Classify, control, and prove custody of CUI, ITAR-controlled, and program-protected data so an audit or a spill does not put the contract at risk.",
          href: "/solutions/data-governance",
        },
        {
          title: "Responsible AI & Model Risk",
          description:
            "Govern the models going into engineering, targeting, and autonomy with the testing, documentation, and human oversight that mission assurance and DoD policy require.",
          href: "/capabilities/artificial-intelligence/responsible-ai",
        },
        {
          title: "Automated Controls",
          description:
            "Bake CMMC, ITAR, and quality controls into the workflow so compliance is evidenced continuously, not rebuilt the week before an assessment.",
          href: "/solutions/process-optimization/intelligent-automation-design",
        },
        {
          title: "Continuous Improvement Programs",
          description:
            "Run the safety-of-flight and mission-assurance cadence that treats every escape and mishap as a closed-loop corrective action, not a one-off.",
          href: "/solutions/process-optimization/continuous-improvement-programs",
        },
        {
          title: "Process Discovery & Mining",
          description:
            "See how controlled work and parts actually move across your tiers, and find the single-source, offshore, and counterfeit exposure before it stops a line.",
          href: "/solutions/process-optimization/process-discovery-mining",
        },
        {
          title: "Change Management & Training",
          description:
            "Bring the supplier base up the CMMC and program-protection curve — the tier-2 and tier-3 shops where most of the real risk actually sits.",
          href: "/solutions/process-optimization/change-management-training",
        },
      ]}
      stats={[
        { number: "CMMC L2", label: "readiness driven across primes and their critical supplier tiers" },
        { number: "60%", label: "faster evidence collection with automated, continuous controls" },
        { number: "3 tiers", label: "of supply-chain visibility for single-source and counterfeit risk" },
      ]}
      casesHeading="Risk and resilience, proved in outcomes."
      cases={cases}
      relatedHeading="Adjacent work for Aerospace & Defense leaders."
      related={related}
      generalPractice={{
        label: "Explore our firm-wide Risk & Resilience practice",
        href: "/capabilities/risk-and-resilience",
      }}
      cta={{
        heading: "Make resilience something you can prove.",
        body: "Tell us where the exposure is — a CMMC assessment, a single-source supplier, a model heading into a fielded system. Our Aerospace & Defense team will read your note and come back within two business days with a concrete first move, not a sales pitch.",
      }}
    />
  );
}
