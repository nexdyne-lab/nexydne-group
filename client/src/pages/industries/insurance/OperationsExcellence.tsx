import IndustryCapabilityTemplate from "@/components/IndustryCapabilityTemplate";

const cases = [
  {
    slug: "insurance-ai-underwriting",
    title: "Quoting Commercial Business in a Day, Not a Week",
    industry: "Insurance",
    metric: "40%",
    image: "/images/cases/insurance-ai-underwriting-hero.jpg",
  },
  {
    slug: "insurance-claims-automation",
    title: "Settling Straightforward Claims in Hours, Not Weeks",
    industry: "Insurance",
    metric: "60%",
    image: "/images/cases/insurance-claims-automation-hero.jpg",
  },
  {
    slug: "insurance-digital-distribution",
    title: "Turning a Call-Center Insurer Into a Digital One",
    industry: "Insurance",
    metric: "50%",
    image: "/images/cases/insurance-digital-distribution-hero.jpg",
  },
];

const related = [
  { name: "Risk & Resilience", href: "/industries/insurance/risk-resilience" },
  { name: "Data Transformation", href: "/industries/insurance/data-transformation" },
  { name: "Customer Intelligence", href: "/industries/insurance/customer-intelligence" },
];

export default function InsuranceOperationsExcellence() {
  return (
    <IndustryCapabilityTemplate
      industry="Insurance"
      industrySlug="insurance"
      capability="Operations Excellence"
      capabilitySlug="operations-excellence"
      heroSubtitle="The expense ratio is where carriers quietly lose the underwriting profit they fought for. Manual FNOL, adjuster queues, re-keyed submissions, and endorsement backlogs add cost to every policy and days to every claim. We help insurers automate claims and underwriting operations for straight-through processing — cutting cycle time and loss-adjustment expense without loosening control."
      heroImage="/images/industries/ops-monitors-dark.jpg"
      heroFocal="60% 50%"
      perspective={{
        heading: "Straight-through processing is the cheapest combined-ratio point you'll ever buy.",
        image: "/images/insight-ai-powered-operations.jpg",
        paragraphs: [
          "Underwriting profit is won on risk selection and lost on the expense ratio, and most carriers' operations were built for a paper world. Submissions get re-keyed from ACORD forms, straightforward claims sit in the same adjuster queue as complex ones, endorsements and renewals move by email, and every touch adds cost and cycle time. Meanwhile policyholders and brokers judge you against experiences they get everywhere else — and leave when yours lags.",
          "We redesign the work, then automate it. Intelligent automation and decisioning route low-complexity claims to straight-through settlement and free adjusters for the losses that need judgment; underwriting workflow gives underwriters clean, triaged submissions instead of inboxes; and policy-servicing automation takes endorsements, renewals, and billing off people entirely. The payoff shows up in three places at once: expense ratio, loss-adjustment expense, and how fast a broker gets a quote back.",
        ],
      }}
      offeringsHeading="How we build operations excellence for insurers."
      offeringsIntro="Each capability is a working system, delivered by the team that will help you run it."
      offerings={[
        {
          title: "Process Discovery & Mining",
          description:
            "See how submissions, FNOL, and endorsements actually flow to find the queues, rework, and handoffs driving loss-adjustment and expense.",
          href: "/solutions/process-optimization/process-discovery-mining",
        },
        {
          title: "Intelligent Automation Design",
          description:
            "Route low-complexity claims and clean submissions to straight-through processing so people handle only the exceptions that need judgment.",
          href: "/solutions/process-optimization/intelligent-automation-design",
        },
        {
          title: "Workflow Optimization",
          description:
            "Rebuild underwriting and claims workflow so triaged, decision-ready work reaches underwriters and adjusters instead of overflowing inboxes.",
          href: "/solutions/process-optimization/workflow-optimization",
        },
        {
          title: "AI-Powered Decision Support",
          description:
            "Give adjusters and underwriters guided severity, reserving, and referral recommendations at the point of decision to cut leakage and cycle time.",
          href: "/solutions/process-optimization/ai-powered-decision-support",
        },
        {
          title: "Continuous Improvement Programs",
          description:
            "Instrument cycle time, straight-through rate, and leakage so claims and policy operations keep getting leaner every quarter.",
          href: "/solutions/process-optimization/continuous-improvement-programs",
        },
        {
          title: "Change Management & Training",
          description:
            "Bring adjusters, underwriters, and service teams along so automation raises throughput without eroding control or morale.",
          href: "/solutions/process-optimization/change-management-training",
        },
      ]}
      stats={[
        { number: "85%", label: "reduction in cycle time on automated claims lines" },
        { number: "3–6 pts", label: "improvement in expense ratio from straight-through processing" },
        { number: "60%+", label: "of routine claims and endorsements settled with no manual touch" },
      ]}
      casesHeading="Operations excellence, proved in outcomes."
      cases={cases}
      relatedHeading="Adjacent work for Insurance leaders."
      related={related}
      generalPractice={{
        label: "Explore our firm-wide Operations practice",
        href: "/capabilities/operations",
      }}
      cta={{
        heading: "Take cost and cycle time out of every policy and claim.",
        body: "Tell us where operations drag — an FNOL backlog, an underwriting queue, a servicing cost you cannot move. Our Insurance team will read your note and come back within two business days with a concrete first move, not a sales pitch.",
      }}
    />
  );
}
