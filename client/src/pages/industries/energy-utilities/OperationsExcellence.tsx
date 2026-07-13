import IndustryCapabilityTemplate from "@/components/IndustryCapabilityTemplate";

const cases = [
  {
    slug: "bank-process-automation",
    title: "How RPA eliminated 10,000+ hours of manual work at a major bank",
    industry: "Financial Services",
    metric: "10K+ hrs",
    image: "/images/industries/energy-powerplant.jpg",
  },
  {
    slug: "consulting-knowledge-management",
    title: "Transforming knowledge management for a global consulting firm",
    industry: "Professional Services",
    metric: "3x",
    image: "/images/industries/energy-solar.jpg",
  },
  {
    slug: "accounting-audit-automation",
    title: "How audit automation helped an accounting firm scale 2x without hiring",
    industry: "Professional Services",
    metric: "2x",
    image: "/images/industries/energy-renewable-team.jpg",
  },
];

const related = [
  { name: "Data Transformation", href: "/industries/energy-utilities/data-transformation" },
  { name: "Risk & Resilience", href: "/industries/energy-utilities/risk-resilience" },
  { name: "Customer Intelligence", href: "/industries/energy-utilities/customer-intelligence" },
];

export default function EnergyUtilitiesOperationsExcellence() {
  return (
    <IndustryCapabilityTemplate
      industry="Energy & Utilities"
      industrySlug="energy-utilities"
      capability="Operations Excellence"
      capabilitySlug="operations-excellence"
      heroSubtitle="Utilities run a physical business on aging assets, a stretched field workforce, and reliability metrics that regulators and customers both watch. We help grid and generation operators move from run-to-failure and paper work orders to predictive maintenance, risk-based capital, and connected-worker operations — without compromising the safety and compliance the business runs on."
      heroImage="/images/industries/energy-wind.jpg"
      heroFocal="60% 50%"
      perspective={{
        heading: "Reliability is an operating discipline, not a bigger capital plan.",
        image: "/images/insight-ai-powered-operations.jpg",
        paragraphs: [
          "You cannot replace a grid built over sixty years inside a single rate cycle, and regulators will not fund you to try. The utilities pulling ahead on SAIDI and SAIFI are not the ones spending the most — they are the ones who know which transformers, poles, and feeders actually carry the risk, and who route crews, inspections, and replacement dollars to those assets first.",
          "We turn that into working operations: asset and outage data mined for the failure patterns that precede an event, predictive models that schedule maintenance before a fault instead of after, and field workflows that put the right work order, permit, and switching order on the tablet in the truck. It is the operating system behind a reliability number you can defend in a rate case.",
        ],
      }}
      offeringsHeading="How we build operations excellence for energy and utilities."
      offeringsIntro="Each capability is a working system, delivered by the team that will help you run it."
      offerings={[
        {
          title: "Process Discovery & Mining",
          description:
            "Map how work management, outage restoration, and inspection actually flow to expose the delays SCADA and the CIS never show you.",
          href: "/solutions/process-optimization/process-discovery-mining",
        },
        {
          title: "Intelligent Automation Design",
          description:
            "Automate meter-to-cash, service orders, and interconnection paperwork so crews and planners spend their hours on the grid, not the queue.",
          href: "/solutions/process-optimization/intelligent-automation-design",
        },
        {
          title: "Workflow Optimization",
          description:
            "Redesign crew dispatch, switching, and restoration so the right worker reaches the right asset with the right permit the first time.",
          href: "/solutions/process-optimization/workflow-optimization",
        },
        {
          title: "AI-Powered Decision Support",
          description:
            "Give planners and control-room operators predictive asset-health and outage-risk signals to prioritize maintenance before a fault.",
          href: "/solutions/process-optimization/ai-powered-decision-support",
        },
        {
          title: "Continuous Improvement Programs",
          description:
            "Stand up the reliability and safety cadence that moves SAIDI, SAIFI, and OSHA numbers cycle after cycle, not once.",
          href: "/solutions/process-optimization/continuous-improvement-programs",
        },
        {
          title: "Change Management & Training",
          description:
            "Bring a field workforce and control room along as connected-worker tools and new procedures replace paper and radio.",
          href: "/solutions/process-optimization/change-management-training",
        },
      ]}
      stats={[
        { number: "20–30%", label: "reduction in unplanned asset failures on predictive maintenance" },
        { number: "15%+", label: "improvement in crew wrench time from optimized dispatch" },
        { number: "10–20%", label: "lower outage minutes (SAIDI) across targeted feeders" },
      ]}
      casesHeading="Operations excellence, proved in outcomes."
      cases={cases}
      relatedHeading="Adjacent work for Energy & Utilities leaders."
      related={related}
      generalPractice={{
        label: "Explore our firm-wide Operations practice",
        href: "/capabilities/operations",
      }}
      cta={{
        heading: "Make reliability an operating discipline.",
        body: "Tell us where operations strain — a feeder that keeps tripping, a maintenance backlog, a restoration process that misses its window. Our Energy & Utilities team will read your note and come back within two business days with a concrete first move, not a sales pitch.",
      }}
    />
  );
}
