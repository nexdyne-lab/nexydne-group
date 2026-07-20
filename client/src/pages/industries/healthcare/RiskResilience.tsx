import IndustryCapabilityTemplate from "@/components/IndustryCapabilityTemplate";

const cases = [
  { slug: "healthcare-transformation", title: "Unifying scattered patient data to improve outcomes 35%", industry: "Healthcare", metric: "35%", image: "/images/cases/healthcare-transformation-hero.jpg" },
  { slug: "healthcare-readmission", title: "Cutting avoidable readmissions by 42% with better prediction", industry: "Healthcare", metric: "42%", image: "/images/cases/healthcare-readmission-hero.jpg" },
  { slug: "healthcare-revenue-cycle", title: "How a Health System Started Collecting What It Was Already Owed", industry: "Healthcare", metric: "45% fewer rejected claims", image: "/case-healthcare-team.5797392b.jpg" },
];

const related = [
  { name: "Customer Intelligence", href: "/industries/healthcare/customer-intelligence" },
  { name: "Operations Excellence", href: "/industries/healthcare/operations-excellence" },
  { name: "Data Transformation", href: "/industries/healthcare/data-transformation" },
];

export default function HealthcareRiskResilience() {
  return (
    <IndustryCapabilityTemplate
      industry="Healthcare"
      industrySlug="healthcare"
      capability="Risk & Resilience"
      capabilitySlug="risk-resilience"
      heroSubtitle="HIPAA, clinical risk, model governance, and cyber exposure are all rising for healthcare organizations at once — and the controls most rely on are still manual and periodic. We help providers and payers rewire risk and compliance with automated controls, model governance, and resilience the regulator and the clinician can trust."
      heroImage="/images/industries/ops-monitors-dark.jpg"
      heroFocal="55% 50%"
      perspective={{
        heading: "In healthcare, a control failure is a patient-safety failure.",
        image: "/images/business-strategy-abstract.jpg",
        paragraphs: [
          "Healthcare carries a heavier version of every risk: a data breach is a HIPAA event, a drifting model is a clinical-safety event, and downtime is a care event. Yet most compliance still runs on periodic audits and manual checks built for a slower, less connected world.",
          "We rewire the function around automation and monitoring: automated privacy and compliance controls, model governance for clinical and operational AI, and resilience across systems and supply. The goal is a control environment that protects patients and satisfies the regulator — without slowing the care down.",
        ],
      }}
      offeringsHeading="How we build risk and resilience for healthcare."
      offeringsIntro="Each capability moves control from periodic and manual to continuous, automated, and audit-ready."
      offerings={[
        { title: "Data Governance", description: "Privacy, lineage, and HIPAA-aligned controls that make patient data trusted and audit-ready.", href: "/solutions/data-governance" },
        { title: "Responsible AI & Model Risk", description: "Keep clinical and operational models explainable, monitored, and safe.", href: "/capabilities/artificial-intelligence/responsible-ai" },
        { title: "Automated Controls", description: "Embed privacy and compliance controls directly in the workflow, not in a periodic audit.", href: "/solutions/process-optimization/intelligent-automation-design" },
        { title: "Continuous Improvement Programs", description: "The operating cadence that keeps the control posture sharp as risk evolves.", href: "/solutions/process-optimization/continuous-improvement-programs" },
        { title: "Process Discovery & Mining", description: "Find the hidden single points of failure in clinical and administrative flows.", href: "/solutions/process-optimization/process-discovery-mining" },
        { title: "Change Management & Training", description: "Build the capability that makes compliance real at the front line.", href: "/solutions/process-optimization/change-management-training" },
      ]}
      stats={[
        { number: "Continuous", label: "HIPAA and compliance controls in place of periodic audits" },
        { number: "Governed", label: "clinical and operational AI, explainable and monitored" },
        { number: "Faster", label: "recovery from disruption and downtime" },
      ]}
      casesHeading="Risk and resilience, proved in outcomes."
      cases={cases}
      relatedHeading="Adjacent work for Healthcare leaders."
      related={related}
      generalPractice={{ label: "Explore our firm-wide Risk & Resilience practice", href: "/capabilities/risk-and-resilience" }}
      cta={{ heading: "Protect patients without slowing care.", body: "Tell us where the exposure is — a privacy gap, a model, a downtime risk. Our Healthcare risk team will read your note and come back within two business days with a concrete first move, not a sales pitch." }}
    />
  );
}
