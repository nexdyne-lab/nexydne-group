import IndustryCapabilityTemplate from "@/components/IndustryCapabilityTemplate";

const cases = [
  {
    slug: "warehouse-optimization",
    title: "Lifting warehouse productivity 45% for a regional distributor",
    industry: "Transportation & Logistics",
    metric: "45%",
    image: "/images/industries/retail-warehouse.jpg",
  },
  {
    slug: "freight-optimization",
    title: "Cutting freight costs 18% for a consumer-goods shipper",
    industry: "Transportation & Logistics",
    metric: "18%",
    image: "/images/industries/transport-traffic.jpg",
  },
  {
    slug: "last-mile-optimization",
    title: "Cutting last-mile delivery costs 30% for a regional carrier",
    industry: "Transportation & Logistics",
    metric: "30%",
    image: "/images/industries/transport-bridge.jpg",
  },
];

const related = [
  { name: "Data Transformation", href: "/industries/transportation-logistics/data-transformation" },
  { name: "Customer Intelligence", href: "/industries/transportation-logistics/customer-intelligence" },
  { name: "Strategy & Growth", href: "/industries/transportation-logistics/strategy-growth" },
];

export default function TransportationLogisticsOperationsExcellence() {
  return (
    <IndustryCapabilityTemplate
      industry="Transportation & Logistics"
      industrySlug="transportation-logistics"
      capability="Operations Excellence"
      capabilitySlug="operations-excellence"
      heroSubtitle="In transportation and logistics the operating ratio is decided in the dispatch board, the routing engine, and the dock — thousands of small decisions made every hour under real constraints. We help carriers, 3PLs, and private fleets optimize routing, load, and warehouse throughput so on-time performance and cost-per-mile move together, not against each other."
      heroImage="/images/industries/transport-traffic.jpg"
      heroFocal="60% 50%"
      perspective={{
        heading: "Cost-per-mile and on-time service are the same problem, solved in the network.",
        image: "/images/insight-ai-powered-operations.jpg",
        paragraphs: [
          "Most operators still run the network on planner intuition, static lane rates, and a warehouse whose throughput nobody can see until the shift is over. It works right up to the moment volume spikes, a driver calls out, or a customer changes the delivery window — and then the exceptions eat the margin the plan was supposed to protect.",
          "We rebuild the operating core so the decisions get made better and faster: route and load optimization that respects hours-of-service and appointment windows, dispatch and yard workflows that surface the next best move, and fulfillment that flexes with demand. The result is a network where empty miles fall, dock dwell shrinks, and on-time delivery holds even when the day goes sideways.",
        ],
      }}
      offeringsHeading="How we build operations excellence for transportation and logistics."
      offeringsIntro="Each capability is a working system, delivered by the team that will help you run it."
      offerings={[
        {
          title: "Process Discovery & Mining",
          description:
            "Map how orders, dispatch, and dock work actually flow to find the empty miles, dwell, and rework hiding in the network.",
          href: "/solutions/process-optimization/process-discovery-mining",
        },
        {
          title: "Intelligent Automation Design",
          description:
            "Automate load tendering, appointment scheduling, and settlement so planners spend their time on exceptions, not keystrokes.",
          href: "/solutions/process-optimization/intelligent-automation-design",
        },
        {
          title: "Workflow Optimization",
          description:
            "Redesign dispatch, yard, and warehouse workflows to lift throughput and protect on-time service when volume spikes.",
          href: "/solutions/process-optimization/workflow-optimization",
        },
        {
          title: "AI-Powered Decision Support",
          description:
            "Give planners route, load, and slotting recommendations that respect hours-of-service, capacity, and delivery windows in real time.",
          href: "/solutions/process-optimization/ai-powered-decision-support",
        },
        {
          title: "Continuous Improvement Programs",
          description:
            "Stand up the operating cadence that keeps cost-per-mile and dock productivity improving lane by lane, not just in the pilot.",
          href: "/solutions/process-optimization/continuous-improvement-programs",
        },
        {
          title: "Change Management & Training",
          description:
            "Bring dispatchers, drivers, and dock leads with you so new tools actually change behavior at 4 a.m., not just in the demo.",
          href: "/solutions/process-optimization/change-management-training",
        },
      ]}
      stats={[
        { number: "10–20%", label: "reduction in cost-per-mile on optimized lanes" },
        { number: "15%+", label: "lift in warehouse and dock throughput per shift" },
        { number: "5–8 pts", label: "improvement in on-time, in-full delivery" },
      ]}
      casesHeading="Operations excellence, proved in outcomes."
      cases={cases}
      relatedHeading="Adjacent work for Transportation & Logistics leaders."
      related={related}
      generalPractice={{
        label: "Explore our firm-wide Operations practice",
        href: "/capabilities/operations",
      }}
      cta={{
        heading: "Move service and margin in the same direction.",
        body: "Tell us where the network leaks — a lane, a dock, a dispatch handoff. Our Transportation & Logistics team will read your note and come back within two business days with a concrete first move, not a sales pitch.",
      }}
    />
  );
}
