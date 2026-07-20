import IndustryCapabilityTemplate from "@/components/IndustryCapabilityTemplate";

const cases = [
  {
    slug: "city-digital-services",
    title: "Making everyday services simple for a county's residents",
    industry: "Public Sector",
    metric: "40%",
    image: "/images/industries/city-digital.jpg",
  },
  {
    slug: "smart-city-platform",
    title: "Getting traffic moving again for a growing city",
    industry: "Public Sector",
    metric: "30%",
    image: "/images/industries/transport-traffic.jpg",
  },
  {
    slug: "government-benefits-modernization",
    title: "Getting benefits to residents weeks sooner at a county agency",
    industry: "Public Sector",
    metric: "50%",
    image: "/images/cases/government-benefits-modernization-hero.jpg",
  },
];

const related = [
  { name: "Customer Intelligence", href: "/industries/public-sector/customer-intelligence" },
  { name: "Data Transformation", href: "/industries/public-sector/data-transformation" },
  { name: "Risk & Resilience", href: "/industries/public-sector/risk-resilience" },
];

export default function PublicSectorOperationsExcellence() {
  return (
    <IndustryCapabilityTemplate
      industry="Public Sector"
      industrySlug="public-sector"
      capability="Operations Excellence"
      capabilitySlug="operations-excellence"
      heroSubtitle="Agencies are being asked to clear bigger caseloads, answer faster, and serve more constituents — with flat budgets and a workforce that is retiring faster than it can be replaced. We help federal, state, and local government redesign how work moves, automate the manual steps behind every backlog, and give overstretched teams the throughput to meet their mission."
      heroImage="/images/industries/ops-gears.jpg"
      heroFocal="60% 50%"
      perspective={{
        heading: "The backlog is a process problem before it is a headcount problem.",
        image: "/images/insight-ai-powered-operations.jpg",
        paragraphs: [
          "When a benefits queue stretches to months or a permit sits untouched for weeks, the instinct is to ask for more staff you cannot hire. But most public-sector wait time is not work — it is handoffs, re-keying, and cases parked between systems that were never designed to talk to each other. Map where a case actually spends its time and the real capacity is usually already inside the building.",
          "We start by mining how applications, claims, and requests really flow, then automate the repetitive adjudication and data-entry steps that consume caseworker hours without using their judgment. That frees your people for the exceptions, appeals, and constituent contact that genuinely need a human — and it lets the agency absorb rising demand without waiting on a hiring authority or a supplemental appropriation.",
        ],
      }}
      offeringsHeading="How we build operations excellence for the public sector."
      offeringsIntro="Each capability is a working system, delivered by the team that will help you run it."
      offerings={[
        {
          title: "Process Discovery & Mining",
          description:
            "See where a case actually spends its time — the handoffs, re-work, and queues that turn a two-day service into a two-month wait.",
          href: "/solutions/process-optimization/process-discovery-mining",
        },
        {
          title: "Intelligent Automation Design",
          description:
            "Automate eligibility checks, data entry, and routine adjudication so caseworkers spend their hours on the exceptions that need judgment.",
          href: "/solutions/process-optimization/intelligent-automation-design",
        },
        {
          title: "Workflow Optimization",
          description:
            "Redesign intake-to-decision so applications route themselves, status is visible to the constituent, and nothing sits parked between systems.",
          href: "/solutions/process-optimization/workflow-optimization",
        },
        {
          title: "AI-Powered Decision Support",
          description:
            "Give adjudicators triage, prioritization, and recommendation tools — with the audit trail public accountability requires.",
          href: "/solutions/process-optimization/ai-powered-decision-support",
        },
        {
          title: "Continuous Improvement Programs",
          description:
            "Stand up the measurement and cadence that keep wait times down after the consultants leave, not just during the project.",
          href: "/solutions/process-optimization/continuous-improvement-programs",
        },
        {
          title: "Change Management & Training",
          description:
            "Bring frontline staff and unions along so new workflows survive leadership turnover and become how the agency actually works.",
          href: "/solutions/process-optimization/change-management-training",
        },
      ]}
      stats={[
        { number: "Weeks to days", label: "the kind of case-cycle-time compression automation makes possible" },
        { number: "Same budget", label: "more cases cleared without new headcount or a supplemental appropriation" },
        { number: "Mission first", label: "staff time shifted from data entry to the constituents who need judgment" },
      ]}
      casesHeading="Operations excellence, proved in outcomes."
      cases={cases}
      relatedHeading="Adjacent work for Public Sector leaders."
      related={related}
      generalPractice={{
        label: "Explore our firm-wide Operations practice",
        href: "/capabilities/operations",
      }}
      cta={{
        heading: "Clear the backlog without waiting on a hiring authority.",
        body: "Tell us where the queue is longest — a benefits program, a permit line, a call center. Our Public Sector team will read your note and come back within two business days with a concrete first move, not a sales pitch.",
      }}
    />
  );
}
