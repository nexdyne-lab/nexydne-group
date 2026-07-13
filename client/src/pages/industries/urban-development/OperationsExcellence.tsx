import IndustryCapabilityTemplate from "@/components/IndustryCapabilityTemplate";

const cases = [
  {
    slug: "consulting-knowledge-management",
    title: "Transforming knowledge management for a global consulting firm",
    industry: "Professional Services",
    metric: "3x",
    image: "/images/industries/skyscraper.jpg",
  },
  {
    slug: "healthcare-data-analytics",
    title: "Unlocking healthcare insights with real-time data analytics",
    industry: "Healthcare",
    metric: "25%",
    image: "/images/industries/arch-glass-sphere.jpg",
  },
  {
    slug: "bank-process-automation",
    title: "How RPA eliminated 10,000+ hours of manual work at a major bank",
    industry: "Financial Services",
    metric: "10K+ hrs",
    image: "/images/industries/city-digital.jpg",
  },
];

const related = [
  { name: "Strategy & Growth", href: "/industries/urban-development/strategy-growth" },
  { name: "Data Transformation", href: "/industries/urban-development/data-transformation" },
  { name: "Risk & Resilience", href: "/industries/urban-development/risk-resilience" },
];

export default function UrbanDevelopmentOperationsExcellence() {
  return (
    <IndustryCapabilityTemplate
      industry="Urban Development"
      industrySlug="urban-development"
      capability="Operations Excellence"
      capabilitySlug="operations-excellence"
      heroSubtitle="In development, margin leaks at two points: the capital project that slips its schedule and its budget, and the building that costs too much to run for the next fifty years. We help developers, cities, and asset owners take delay and cost out of both — tightening how projects get delivered and how the finished asset actually operates."
      heroImage="/images/industries/arch-glass-sphere.jpg"
      heroFocal="60% 50%"
      perspective={{
        heading: "The pro forma dies in the schedule and the operating budget.",
        image: "/images/insight-ai-powered-operations.jpg",
        paragraphs: [
          "A development pro forma is an optimistic document. What erodes it is rarely one dramatic event — it is the RFI that sits for three weeks, the change order that ripples through the trades, the draw that lags the work, and then years later an operating budget carrying HVAC and energy costs no one modeled at underwriting. Delay and operating cost are where the returns quietly go, and both are process problems long before they are money problems.",
          "We take that friction out end to end. On delivery, we mine the actual project workflow — RFIs, submittals, change orders, draws — to find where schedule and cost leak, and automate the handoffs that cause it. On the finished asset, we bring the same discipline to facilities and building operations, so maintenance, energy, and vendor spend are managed on data instead of by fire drill for the full hold period.",
        ],
      }}
      offeringsHeading="How we build operations excellence for urban development."
      offeringsIntro="Each capability is a working system, delivered by the team that will help you run it."
      offerings={[
        {
          title: "Process Discovery & Mining",
          description:
            "Map how projects and draws actually flow to expose where schedule and capital-project cost leak in real time.",
          href: "/solutions/process-optimization/process-discovery-mining",
        },
        {
          title: "Workflow Optimization",
          description:
            "Streamline RFIs, submittals, change orders, and inspections so delivery stops waiting on paperwork.",
          href: "/solutions/process-optimization/workflow-optimization",
        },
        {
          title: "Intelligent Automation Design",
          description:
            "Automate draw processing, permit routing, and vendor handoffs that quietly add weeks to every project.",
          href: "/solutions/process-optimization/intelligent-automation-design",
        },
        {
          title: "AI-Powered Decision Support",
          description:
            "Flag schedule slip, cost overrun, and building-operations spend early enough to actually act on it.",
          href: "/solutions/process-optimization/ai-powered-decision-support",
        },
        {
          title: "Continuous Improvement Programs",
          description:
            "Turn lessons from each asset into a delivery and operations playbook the next project inherits.",
          href: "/solutions/process-optimization/continuous-improvement-programs",
        },
        {
          title: "Change Management & Training",
          description:
            "Bring GCs, trades, and property teams onto the new way of working so the gains hold past handover.",
          href: "/solutions/process-optimization/change-management-training",
        },
      ]}
      stats={[
        { number: "15–25%", label: "reduction in schedule delay across capital-project delivery" },
        { number: "10–20%", label: "lower operating cost across the stabilized asset" },
        { number: "Weeks", label: "taken out of draw, permit, and change-order cycle time" },
      ]}
      casesHeading="Development operations, proved in outcomes."
      cases={cases}
      relatedHeading="Adjacent work for Urban Development leaders."
      related={related}
      generalPractice={{
        label: "Explore our firm-wide Operations practice",
        href: "/capabilities/operations",
      }}
      cta={{
        heading: "Protect the pro forma from delay and operating cost.",
        body: "Tell us where the margin leaks — a project that keeps slipping, a draw cycle that drags, an asset that runs too hot. Our Urban Development operations team will read your note and come back within two business days with a concrete first move, not a sales pitch.",
      }}
    />
  );
}
