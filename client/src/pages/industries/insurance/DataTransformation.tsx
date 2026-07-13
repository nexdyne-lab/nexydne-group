import IndustryCapabilityTemplate from "@/components/IndustryCapabilityTemplate";

const cases = [
  {
    slug: "insurance-ai-underwriting",
    title: "Quoting Commercial Business in a Day, Not a Week",
    industry: "Insurance",
    metric: "40%",
    image: "/images/industries/fin-monitors.jpg",
  },
  {
    slug: "insurance-claims-automation",
    title: "Settling Straightforward Claims in Hours, Not Weeks",
    industry: "Insurance",
    metric: "60%",
    image: "/case-insurance-claims.399e5d4b.jpg",
  },
  {
    slug: "insurance-digital-distribution",
    title: "Turning a Call-Center Insurer Into a Digital One",
    industry: "Insurance",
    metric: "50%",
    image: "/images/industries/fin-handshake-city.jpg",
  },
];

const related = [
  { name: "Risk & Resilience", href: "/industries/insurance/risk-resilience" },
  { name: "Operations Excellence", href: "/industries/insurance/operations-excellence" },
  { name: "Customer Intelligence", href: "/industries/insurance/customer-intelligence" },
];

export default function InsuranceDataTransformation() {
  return (
    <IndustryCapabilityTemplate
      industry="Insurance"
      industrySlug="insurance"
      capability="Data Transformation"
      capabilitySlug="data-transformation"
      heroSubtitle="Every advantage a carrier wants — AI underwriting, real-time pricing, straight-through claims — dies on the same rock: policy, claims, and underwriting data trapped in a fifty-year-old policy admin system and a warehouse of PDFs. We help insurers build the data foundation that turns loss runs, ACORD forms, and adjuster notes into a real-time asset the whole book can underwrite on."
      heroImage="/images/industries/fin-monitors.jpg"
      heroFocal="60% 50%"
      perspective={{
        heading: "You cannot AI your way out of a broken policy admin system.",
        image: "/images/data-abstract.jpg",
        paragraphs: [
          "Insurance runs on some of the richest data in any industry — decades of policies, claims, submissions, and loss experience — and almost none of it is usable at the speed the business now needs. Core data is fragmented across policy admin, billing, claims, and reinsurance systems that don't agree with each other, while the highest-value signal sits locked in unstructured documents: ACORD submissions, loss runs, medical reports, adjuster narratives, and inspection photos no model can read.",
          "We build the foundation that unlocks it: a governed data platform that unifies policy, claims, and third-party exposure data; engineering pipelines that keep it current in real time; and document AI that turns submissions and loss runs into structured, underwriting-ready features. The result is the data spine an insurer needs to price at bind, triage claims in minutes, and trust the numbers a regulator will ask about.",
        ],
      }}
      offeringsHeading="How we build data transformation for insurers."
      offeringsIntro="Each capability is a working system, delivered by the team that will help you run it."
      offerings={[
        {
          title: "Data Strategy",
          description:
            "Set the roadmap that connects policy admin, claims, and reinsurance data to concrete underwriting, pricing, and loss-ratio outcomes.",
          href: "/solutions/data-strategy",
        },
        {
          title: "Data Platform",
          description:
            "Stand up a governed platform that unifies policy, claims, and third-party exposure data into one real-time source for the whole book.",
          href: "/solutions/data-platform",
        },
        {
          title: "Data Engineering",
          description:
            "Build the pipelines that keep submissions, bordereaux, and loss experience current so underwriting and pricing act on live data, not month-old extracts.",
          href: "/solutions/data-engineering",
        },
        {
          title: "Data Governance",
          description:
            "Establish the lineage, quality, and access controls that let actuaries and examiners trust every exposure and loss figure feeding the models.",
          href: "/solutions/data-governance",
        },
        {
          title: "Data Visualization",
          description:
            "Give underwriters and claims leaders live views of portfolio accumulation, rate adequacy, and loss trends instead of quarter-lagged reports.",
          href: "/solutions/data-visualization",
        },
        {
          title: "Data Solutions",
          description:
            "Apply document AI to ACORD forms, loss runs, and adjuster notes, turning unstructured submissions into structured, underwriting-ready features.",
          href: "/solutions/data-solutions",
        },
      ]}
      stats={[
        { number: "70%+", label: "of submission and loss-run data automatically extracted from documents" },
        { number: "Real-time", label: "policy and claims data replacing month-lagged warehouse extracts" },
        { number: "50%+", label: "faster time-to-market for new AI underwriting and pricing models" },
      ]}
      casesHeading="Data transformation, proved in outcomes."
      cases={cases}
      relatedHeading="Adjacent work for Insurance leaders."
      related={related}
      generalPractice={{
        label: "Explore our firm-wide Data Transformation practice",
        href: "/capabilities/data-transformation",
      }}
      cta={{
        heading: "Build the data spine your underwriting needs.",
        body: "Tell us where the data breaks the plan — a policy admin migration, a submission backlog, a model starved of clean loss data. Our Insurance team will read your note and come back within two business days with a concrete first move, not a sales pitch.",
      }}
    />
  );
}
