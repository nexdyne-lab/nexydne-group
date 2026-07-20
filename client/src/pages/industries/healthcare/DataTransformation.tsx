import IndustryCapabilityTemplate from "@/components/IndustryCapabilityTemplate";

const cases = [
  { slug: "healthcare-transformation", title: "Unifying scattered patient data to improve outcomes 35%", industry: "Healthcare", metric: "35%", image: "/images/cases/healthcare-transformation-hero.jpg" },
  { slug: "healthcare-readmission", title: "Cutting avoidable readmissions by 42% with better prediction", industry: "Healthcare", metric: "42%", image: "/images/cases/healthcare-readmission-hero.jpg" },
  { slug: "healthcare-revenue-cycle", title: "Recovering $32M a year in revenue already earned", industry: "Healthcare", metric: "$32M", image: "/case-healthcare-team.5797392b.jpg" },
];

const related = [
  { name: "Customer Intelligence", href: "/industries/healthcare/customer-intelligence" },
  { name: "Operations Excellence", href: "/industries/healthcare/operations-excellence" },
  { name: "Risk & Resilience", href: "/industries/healthcare/risk-resilience" },
];

export default function HealthcareDataTransformation() {
  return (
    <IndustryCapabilityTemplate
      industry="Healthcare"
      industrySlug="healthcare"
      capability="Data Transformation"
      capabilitySlug="data-transformation"
      heroSubtitle="Healthcare data is some of the richest and most fragmented anywhere — EHR, claims, labs, devices, and operational systems that were never designed to interoperate. We help providers and payers unify them into one governed, compliant data foundation for the next generation of clinical and operational AI."
      heroImage="/images/industries/tech-datacenter.jpg"
      heroFocal="60% 50%"
      perspective={{
        heading: "Interoperability isn't a project. It's the foundation.",
        image: "/images/data-abstract.jpg",
        paragraphs: [
          "Every healthcare AI ambition — risk stratification, clinical decision support, operational forecasting — assumes a connected, governed, compliant data foundation. Almost no organization has it. EHR data sits in one system, claims in another, labs and devices in a third, and none of them share an identity or a definition of a patient, an encounter, or a diagnosis.",
          "We build the foundation that makes the rest possible: a modern, HIPAA-aligned data platform, engineering and identity resolution across clinical and operational data, governance that satisfies the regulator, and the visualization that turns it into decisions at the point of care and the point of operations.",
        ],
      }}
      offeringsHeading="How we build the healthcare data foundation."
      offeringsIntro="From strategy to a governed, compliant platform, each capability moves you toward one trusted view of the patient and the enterprise."
      offerings={[
        { title: "Data Strategy", description: "Define the data ambition, use-case roadmap, and operating model that tie the platform to clinical and financial value.", href: "/solutions/data-strategy" },
        { title: "Data Platform", description: "Stand up the modern, HIPAA-aligned platform that unifies EHR, claims, labs, and operational data at scale.", href: "/solutions/data-platform" },
        { title: "Data Engineering", description: "Build the pipelines and identity resolution that turn fragmented records into one query-ready foundation.", href: "/solutions/data-engineering" },
        { title: "Data Governance", description: "Put the privacy, lineage, and controls in place so patient data is trusted — and regulator-ready.", href: "/solutions/data-governance" },
        { title: "Data Visualization", description: "Turn the foundation into decisions with dashboards clinicians and operators actually use.", href: "/solutions/data-visualization" },
        { title: "Data Solutions", description: "Deploy the accelerators and reusable components that get the first clinical AI use cases live in months.", href: "/solutions/data-solutions" },
      ]}
      stats={[
        { number: "30%", label: "of transformations succeed — we build for that 30%" },
        { number: "1 foundation", label: "HIPAA-aligned, spanning clinical and operational data" },
        { number: "Months", label: "not years, to your first clinical AI use case" },
      ]}
      casesHeading="Data transformation, proved in outcomes."
      cases={cases}
      relatedHeading="Adjacent work for Healthcare leaders."
      related={related}
      generalPractice={{ label: "Explore our firm-wide Data Transformation practice", href: "/capabilities/data-transformation" }}
      cta={{ heading: "Build the compliant data foundation healthcare AI assumes.", body: "Tell us which use case keeps stalling on data — risk stratification, decision support, forecasting. Our Healthcare data team will read your note and come back within two business days with a concrete first move, not a sales pitch." }}
    />
  );
}
