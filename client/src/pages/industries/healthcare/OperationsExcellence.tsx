import IndustryCapabilityTemplate from "@/components/IndustryCapabilityTemplate";

const cases = [
  { slug: "healthcare-transformation", title: "Unifying scattered patient data to improve outcomes 35%", industry: "Healthcare", metric: "35%", image: "/images/cases/healthcare-transformation-hero.jpg" },
  { slug: "healthcare-readmission", title: "Cutting avoidable readmissions by 42% with better prediction", industry: "Healthcare", metric: "42%", image: "/images/cases/healthcare-readmission-hero.jpg" },
  { slug: "healthcare-revenue-cycle", title: "How a Health System Started Collecting What It Was Already Owed", industry: "Healthcare", metric: "45% fewer rejected claims", image: "/case-healthcare-team.5797392b.jpg" },
];

const related = [
  { name: "Customer Intelligence", href: "/industries/healthcare/customer-intelligence" },
  { name: "Data Transformation", href: "/industries/healthcare/data-transformation" },
  { name: "Risk & Resilience", href: "/industries/healthcare/risk-resilience" },
];

export default function HealthcareOperationsExcellence() {
  return (
    <IndustryCapabilityTemplate
      industry="Healthcare"
      industrySlug="healthcare"
      capability="Operations Excellence"
      capabilitySlug="operations-excellence"
      heroSubtitle="Clinician burnout, thin margins, and administrative drag are straining every provider and payer. We help healthcare organizations modernize clinical and revenue-cycle workflows with automation and AI — giving time back to care and margin back to the mission."
      heroImage="/case-medical-collaboration.9602cc8c.jpg"
      heroFocal="60% 50%"
      perspective={{
        heading: "Give the time back to care.",
        image: "/images/insight-ai-powered-operations.jpg",
        paragraphs: [
          "In healthcare, the enemy of good care is often the work around it: prior authorization, documentation, coding, scheduling, and a dozen manual handoffs that pull clinicians away from patients and quietly drain margin. The systems exist; the workflows connecting them do not.",
          "We rebuild those workflows: automation across clinical documentation, revenue cycle, and access; AI decision support where it earns its place; and continuous improvement that keeps throughput and cost improving. The goal is time back for clinicians and margin back for the mission — not another portal to log into.",
        ],
      }}
      offeringsHeading="How we build operations excellence for healthcare."
      offeringsIntro="From process discovery to automated revenue cycle, each capability is delivered by the team that will help you run it."
      offerings={[
        { title: "Process Discovery & Mining", description: "Surface where clinical and administrative work actually loses time and money.", href: "/solutions/process-optimization/process-discovery-mining" },
        { title: "Intelligent Automation Design", description: "Automate prior auth, coding, documentation, and revenue-cycle work end to end.", href: "/solutions/process-optimization/intelligent-automation-design" },
        { title: "Workflow Optimization", description: "Redesign clinical and access flows to cut handoffs and delay.", href: "/solutions/process-optimization/workflow-optimization" },
        { title: "AI-Powered Decision Support", description: "Give clinicians and operators AI support where it improves the decision, not the noise.", href: "/solutions/process-optimization/ai-powered-decision-support" },
        { title: "Continuous Improvement Programs", description: "The operating cadence that keeps throughput and cost improving.", href: "/solutions/process-optimization/continuous-improvement-programs" },
        { title: "Change Management & Training", description: "Build the clinical and operational adoption that makes new workflows stick.", href: "/solutions/process-optimization/change-management-training" },
      ]}
      stats={[
        { number: "15 hrs", label: "per week given back to each physician" },
        { number: "4.2x", label: "faster end-to-end cycle times for our clients" },
        { number: "20–40%", label: "reduction in administrative cost" },
      ]}
      casesHeading="Operations, proved in outcomes."
      cases={cases}
      relatedHeading="Adjacent work for Healthcare leaders."
      related={related}
      generalPractice={{ label: "Explore our firm-wide Operations practice", href: "/capabilities/operations" }}
      cta={{ heading: "Give time back to care, margin back to the mission.", body: "Tell us what is draining time — prior auth, documentation, revenue cycle. Our Healthcare operations team will read your note and come back within two business days with a concrete first move, not a sales pitch." }}
    />
  );
}
