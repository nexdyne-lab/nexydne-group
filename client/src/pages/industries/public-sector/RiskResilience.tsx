import IndustryCapabilityTemplate from "@/components/IndustryCapabilityTemplate";

const cases = [
  {
    slug: "consulting-knowledge-management",
    title: "Transforming knowledge management for a global consulting firm",
    industry: "Professional Services",
    metric: "3x",
    image: "/images/industries/transport-traffic.jpg",
  },
  {
    slug: "bank-process-automation",
    title: "How RPA eliminated 10,000+ hours of manual work at a major bank",
    industry: "Financial Services",
    metric: "10K+ hrs",
    image: "/images/industries/colleagues-walking.jpg",
  },
  {
    slug: "healthcare-data-analytics",
    title: "Unlocking healthcare insights with real-time data analytics",
    industry: "Healthcare",
    metric: "25%",
    image: "/images/industries/biz-team-bright.jpg",
  },
];

const related = [
  { name: "Operations Excellence", href: "/industries/public-sector/operations-excellence" },
  { name: "Customer Intelligence", href: "/industries/public-sector/customer-intelligence" },
  { name: "Data Transformation", href: "/industries/public-sector/data-transformation" },
];

export default function PublicSectorRiskResilience() {
  return (
    <IndustryCapabilityTemplate
      industry="Public Sector"
      industrySlug="public-sector"
      capability="Risk & Resilience"
      capabilitySlug="risk-resilience"
      heroSubtitle="When a government system goes down, benefits stop, water systems go dark, and public trust erodes fast. Agencies now defend nation-state adversaries, protect the programs they run from fraud, and answer for every algorithm that touches a citizen — all under public scrutiny. We help federal, state, and local government build the security, integrity, and continuity posture that essential services demand."
      heroImage="/images/industries/ops-monitors-dark.jpg"
      heroFocal="60% 50%"
      perspective={{
        heading: "Public-sector risk is measured in services citizens cannot go without.",
        image: "/images/data-abstract.jpg",
        paragraphs: [
          "A ransomware hit on a county is not an IT incident — it is a shuttered courthouse, a frozen payroll, a 911 center running on paper. Critical infrastructure and essential services concentrate the consequences of a breach or an outage onto the people least able to absorb them, and adversaries know it. Resilience here is not a compliance checkbox; it is the ability to keep the mission running when something fails, because something eventually will.",
          "We treat security, program integrity, and AI accountability as one discipline. That means hardening critical systems and standing up continuity plans that are actually exercised; using analytics to catch improper payments and fraud before the money leaves rather than clawing it back after; and putting real governance around the models that now decide eligibility and flag risk, so a public-facing algorithm can be explained to an auditor, a legislator, and the citizen it affected.",
        ],
      }}
      offeringsHeading="How we build risk and resilience for the public sector."
      offeringsIntro="Each capability is a working system, delivered by the team that will help you run it."
      offerings={[
        {
          title: "Data Governance",
          description:
            "Lock down access, custody, and records controls on sensitive citizen data so a breach is contained and defensible, not catastrophic.",
          href: "/solutions/data-governance",
        },
        {
          title: "Responsible AI & Model Risk",
          description:
            "Govern the models that decide eligibility and flag risk so every public-facing decision can be explained to an auditor and the citizen it affects.",
          href: "/capabilities/artificial-intelligence/responsible-ai",
        },
        {
          title: "Automated Controls",
          description:
            "Catch improper payments and fraud with controls that fire before the money leaves — not a clawback effort after the audit.",
          href: "/solutions/process-optimization/intelligent-automation-design",
        },
        {
          title: "Continuous Improvement Programs",
          description:
            "Exercise continuity and incident-response plans on a real cadence so essential services keep running when a system fails.",
          href: "/solutions/process-optimization/continuous-improvement-programs",
        },
        {
          title: "Process Discovery & Mining",
          description:
            "Expose where controls are missing or bypassed across a program's real workflow, before an adversary or an IG finds the gap.",
          href: "/solutions/process-optimization/process-discovery-mining",
        },
        {
          title: "Change Management & Training",
          description:
            "Build the security and integrity culture on the frontline, because the strongest control still depends on the people using it.",
          href: "/solutions/process-optimization/change-management-training",
        },
      ]}
      stats={[
        { number: "Essential services", label: "kept running through the incident, not restored days later" },
        { number: "Before the payment", label: "fraud and improper payments stopped, not clawed back after" },
        { number: "Explainable AI", label: "every public-facing model defensible to auditors and legislators" },
      ]}
      casesHeading="Risk and resilience, proved in outcomes."
      cases={cases}
      relatedHeading="Adjacent work for Public Sector leaders."
      related={related}
      generalPractice={{
        label: "Explore our firm-wide Risk & Resilience practice",
        href: "/capabilities/risk-and-resilience",
      }}
      cta={{
        heading: "Keep essential services running when something fails.",
        body: "Tell us where the exposure worries you most — a critical system, a program's fraud losses, an AI model facing scrutiny. Our Public Sector team will read your note and come back within two business days with a concrete first move, not a sales pitch.",
      }}
    />
  );
}
