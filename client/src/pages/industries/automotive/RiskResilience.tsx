import IndustryCapabilityTemplate from "@/components/IndustryCapabilityTemplate";

const cases = [
  {
    slug: "automotive-ev-transition",
    title: "Retooling a supplier line for electric-vehicle parts",
    industry: "Automotive",
    metric: "45%",
    image: "/images/cases/automotive-ev-transition-hero.jpg",
  },
  {
    slug: "automotive-connected-vehicle",
    title: "Turning connected-vehicle data into fewer warranty claims",
    industry: "Automotive",
    metric: "30%",
    image: "/images/cases/automotive-connected-vehicle-hero.jpg",
  },
  {
    slug: "automotive-supply-resilience",
    title: "De-risking parts supply and recall traceability for a supplier",
    industry: "Automotive",
    metric: "80%",
    image: "/images/cases/automotive-supply-resilience-hero.jpg",
  },
];

const related = [
  { name: "Operations Excellence", href: "/industries/automotive/operations-excellence" },
  { name: "Data Transformation", href: "/industries/automotive/data-transformation" },
  { name: "Strategy & Growth", href: "/industries/automotive/strategy-growth" },
];

export default function AutomotiveRiskResilience() {
  return (
    <IndustryCapabilityTemplate
      industry="Automotive"
      industrySlug="automotive"
      capability="Risk & Resilience"
      capabilitySlug="risk-resilience"
      heroSubtitle="A single semiconductor shortage can idle a plant, and a single connected-vehicle vulnerability can trigger a fleet-wide recall — automotive risk now spans the tier-N supply chain, the software stack, and the regulator all at once. We help OEMs and suppliers build multi-tier supply visibility, meet ISO 21434 and 26262, and turn recall and compliance from a fire drill into a controlled process."
      heroImage="/images/industries/ops-monitors-dark.jpg"
      heroFocal="60% 50%"
      perspective={{
        heading: "In automotive, resilience is now a software problem and a supply problem at once.",
        image: "/images/data-abstract.jpg",
        paragraphs: [
          "The chip crisis taught the industry that a fifty-cent part sitting three tiers deep can stop a billion-dollar plant — and battery materials and rare earths carry the same single-point-of-failure risk. At the same time, the connected, software-defined vehicle has opened an attack surface that never existed on a mechanical car, where a single exploited ECU can force a recall across an entire model line.",
          "We help you see and control both. That means multi-tier supply mapping that reaches past your direct suppliers to where the real exposure lives, a cybersecurity and functional-safety posture built to ISO 21434 and 26262 rather than bolted on afterward, and the governed data and automated controls that make recall, traceability, and regulatory reporting a repeatable process instead of an all-hands scramble.",
        ],
      }}
      offeringsHeading="How we build risk and resilience for automotive."
      offeringsIntro="Each capability is a working system, delivered by the team that will help you run it."
      offerings={[
        {
          title: "Data Governance",
          description:
            "Establish the VIN-linked traceability and part-genealogy data that makes a targeted recall possible instead of a blanket one.",
          href: "/solutions/data-governance",
        },
        {
          title: "Responsible AI & Model Risk",
          description:
            "Govern the ADAS, autonomy, and quality models whose failure modes now sit squarely inside functional-safety scope.",
          href: "/capabilities/artificial-intelligence/responsible-ai",
        },
        {
          title: "Automated Controls",
          description:
            "Automate the safety-case evidence, supplier PPAP checks, and compliance gates that today rely on manual sign-off.",
          href: "/solutions/process-optimization/intelligent-automation-design",
        },
        {
          title: "Continuous Improvement Programs",
          description:
            "Run a standing resilience program that closes supply and cyber gaps before the next shortage or vulnerability lands.",
          href: "/solutions/process-optimization/continuous-improvement-programs",
        },
        {
          title: "Process Discovery & Mining",
          description:
            "Trace how a part, a signal, or a defect actually flows through tier-N supply to find where the resilience really breaks.",
          href: "/solutions/process-optimization/process-discovery-mining",
        },
        {
          title: "Change Management & Training",
          description:
            "Build the cyber and functional-safety discipline into engineering and supplier teams so ISO 21434 and 26262 hold in practice.",
          href: "/solutions/process-optimization/change-management-training",
        },
      ]}
      stats={[
        { number: "3+ tiers", label: "of supply visibility to reach where single-point-of-failure risk actually lives" },
        { number: "ISO 21434", label: "and 26262 cyber and functional-safety posture built in, not bolted on" },
        { number: "40%+", label: "faster recall scoping with governed VIN and part-genealogy data" },
      ]}
      casesHeading="Risk and resilience, proved in outcomes."
      cases={cases}
      relatedHeading="Adjacent work for Automotive leaders."
      related={related}
      generalPractice={{
        label: "Explore our firm-wide Risk & Resilience practice",
        href: "/capabilities/risk-and-resilience",
      }}
      cta={{
        heading: "See the risk before it idles the plant.",
        body: "Tell us where the exposure worries you — a tier-N supplier you can't see, a connected-vehicle attack surface, a recall process that runs on spreadsheets. Our Automotive risk team will read your note and come back within two business days with a concrete first move, not a sales pitch.",
      }}
    />
  );
}
