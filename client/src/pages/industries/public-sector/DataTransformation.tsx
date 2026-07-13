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
  { name: "Risk & Resilience", href: "/industries/public-sector/risk-resilience" },
];

export default function PublicSectorDataTransformation() {
  return (
    <IndustryCapabilityTemplate
      industry="Public Sector"
      industrySlug="public-sector"
      capability="Data Transformation"
      capabilitySlug="data-transformation"
      heroSubtitle="Public data is scattered across mainframes bought before the analysts were born, spreadsheets on shared drives, and a dozen program systems that each claim to be the source of truth. We help federal, state, and local agencies modernize that estate into one governed, authoritative record — the foundation for better decisions, safe AI, and the open, credible reporting the public expects."
      heroImage="/images/industries/city-digital.jpg"
      heroFocal="60% 50%"
      perspective={{
        heading: "You cannot govern, report, or automate on data no one agrees is true.",
        image: "/images/data-abstract.jpg",
        paragraphs: [
          "Ask three offices for the number of active cases and you will get three answers, each defensible and none reconcilable. That is not a discipline problem — it is decades of program systems, each with its own definitions, custody rules, and green-screen extract. Every dashboard, oversight response, and AI ambition eventually runs into the same wall: there is no single authoritative record to stand on.",
          "We modernize the estate without the rip-and-replace that public-sector risk tolerance can't stomach — strangling the legacy system module by module while a governed platform becomes the one place a fact is defined once. That platform carries lineage and records-retention rules with the data, so transparency and open-data commitments are a query rather than a project, and security and compliance are built into the record instead of bolted on after an audit finding.",
        ],
      }}
      offeringsHeading="How we build data transformation for the public sector."
      offeringsIntro="Each capability is a working system, delivered by the team that will help you run it."
      offerings={[
        {
          title: "Data Strategy",
          description:
            "Define the authoritative sources, ownership, and sequencing to retire legacy silos in an order the mission and the budget can sustain.",
          href: "/solutions/data-strategy",
        },
        {
          title: "Data Platform",
          description:
            "Stand up a modern, secure platform that becomes the single place a fact is defined once and trusted across agencies.",
          href: "/solutions/data-platform",
        },
        {
          title: "Data Engineering",
          description:
            "Move data off mainframes and out of spreadsheets with pipelines that carry lineage, so no one has to re-key or re-argue the numbers.",
          href: "/solutions/data-engineering",
        },
        {
          title: "Data Governance",
          description:
            "Embed stewardship, records retention, and access controls into the platform so compliance and transparency are built in, not audited in.",
          href: "/solutions/data-governance",
        },
        {
          title: "Data Visualization",
          description:
            "Turn the authoritative record into public dashboards and oversight reporting leaders can defend line by line.",
          href: "/solutions/data-visualization",
        },
        {
          title: "Data Solutions",
          description:
            "Ship the open-data portals, matching, and reporting products that turn a modernized estate into visible public value.",
          href: "/solutions/data-solutions",
        },
      ]}
      stats={[
        { number: "One authoritative record", label: "instead of three defensible answers to the same question" },
        { number: "Strangler pattern", label: "legacy retired module by module, not in a high-risk big-bang cutover" },
        { number: "Transparency by design", label: "records retention and open-data rules travel with the data" },
      ]}
      casesHeading="Data transformation, proved in outcomes."
      cases={cases}
      relatedHeading="Adjacent work for Public Sector leaders."
      related={related}
      generalPractice={{
        label: "Explore our firm-wide Data Transformation practice",
        href: "/capabilities/data-transformation",
      }}
      cta={{
        heading: "Give the agency one version of the truth.",
        body: "Tell us where the data fights break out — a legacy system, an oversight report, an open-data mandate. Our Public Sector team will read your note and come back within two business days with a concrete first move, not a sales pitch.",
      }}
    />
  );
}
