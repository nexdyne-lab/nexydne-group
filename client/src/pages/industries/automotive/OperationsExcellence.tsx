import IndustryCapabilityTemplate from "@/components/IndustryCapabilityTemplate";

const cases = [
  {
    slug: "automotive-ev-transition",
    title: "Retooling a supplier line for electric-vehicle parts",
    industry: "Automotive",
    metric: "45%",
    image: "/images/cases/automotive-ev-transition-hero.jpg",
  },
  {
    slug: "automotive-connected-vehicle",
    title: "Turning connected-vehicle data into fewer warranty claims",
    industry: "Automotive",
    metric: "30%",
    image: "/images/cases/automotive-connected-vehicle-hero.jpg",
  },
  {
    slug: "automotive-supply-resilience",
    title: "De-risking parts supply and recall traceability for a supplier",
    industry: "Automotive",
    metric: "80%",
    image: "/images/cases/automotive-supply-resilience-hero.jpg",
  },
];

const related = [
  { name: "Data Transformation", href: "/industries/automotive/data-transformation" },
  { name: "Strategy & Growth", href: "/industries/automotive/strategy-growth" },
  { name: "Risk & Resilience", href: "/industries/automotive/risk-resilience" },
];

export default function AutomotiveOperationsExcellence() {
  return (
    <IndustryCapabilityTemplate
      industry="Automotive"
      industrySlug="automotive"
      capability="Operations Excellence"
      capabilitySlug="operations-excellence"
      heroSubtitle="Automotive plants run on takt time, just-in-sequence delivery, and a launch curve that punishes every hour of downtime — all while the same lines are being retooled for EV. We help OEMs and suppliers modernize plant operations, protect launch ramps, and lock in first-time-through quality without breaking the discipline the industry lives by."
      heroImage="/images/industries/auto-robotics-team.jpg"
      heroFocal="60% 50%"
      perspective={{
        heading: "The EV transition is being won and lost on the plant floor.",
        image: "/images/insight-ai-powered-operations.jpg",
        paragraphs: [
          "Converting an ICE line to battery-electric while the old program is still shipping is the hardest operational bet an OEM makes this decade. Ramp curves are unforgiving, skilled trades are scarce, and a single warranty spike on a new e-drive or cell pack can erase a program's margin. The plants that come out ahead treat the transition as an operations problem to be engineered, not a schedule to be survived.",
          "We bring the plant realities and the technical toolkit together: process mining that finds the real bottleneck in a body-in-white or battery-assembly line, predictive quality that catches a defect before it reaches warranty, and just-in-sequence supplier orchestration that keeps the line fed. Then we make it stick with the connected-worker tools and training that a stretched, cross-skilling workforce actually needs.",
        ],
      }}
      offeringsHeading="How we build operations excellence for automotive."
      offeringsIntro="Each capability is a working system, delivered by the team that will help you run it."
      offerings={[
        {
          title: "Process Discovery & Mining",
          description:
            "Map the real flow of a body, paint, or battery-assembly line to find the bottleneck that is quietly costing you jobs-per-hour.",
          href: "/solutions/process-optimization/process-discovery-mining",
        },
        {
          title: "Intelligent Automation Design",
          description:
            "Automate the manual quality gates, traceability logging, and supplier-release steps that slow a launch ramp and invite error.",
          href: "/solutions/process-optimization/intelligent-automation-design",
        },
        {
          title: "Workflow Optimization",
          description:
            "Rebalance takt, staffing, and material presentation across a line being retooled from ICE to EV without losing throughput.",
          href: "/solutions/process-optimization/workflow-optimization",
        },
        {
          title: "AI-Powered Decision Support",
          description:
            "Give launch and quality teams predictive alerts on defect, downtime, and supplier risk before they hit the warranty book.",
          href: "/solutions/process-optimization/ai-powered-decision-support",
        },
        {
          title: "Continuous Improvement Programs",
          description:
            "Embed a durable kaizen and first-time-through discipline that survives model-year changeovers and volume swings.",
          href: "/solutions/process-optimization/continuous-improvement-programs",
        },
        {
          title: "Change Management & Training",
          description:
            "Cross-skill a scarce workforce onto new EV and connected-worker tools so the line runs the way it was designed to.",
          href: "/solutions/process-optimization/change-management-training",
        },
      ]}
      stats={[
        { number: "15–25%", label: "reduction in unplanned line downtime during launch ramp" },
        { number: "30%+", label: "fewer warranty-driving defects caught before shipment" },
        { number: "$1.8M", label: "average annual savings per plant transformation" },
      ]}
      casesHeading="Operations excellence, proved in outcomes."
      cases={cases}
      relatedHeading="Adjacent work for Automotive leaders."
      related={related}
      generalPractice={{
        label: "Explore our firm-wide Operations practice",
        href: "/capabilities/operations",
      }}
      cta={{
        heading: "Protect the ramp. Lock in the quality.",
        body: "Tell us where the line is losing you — a launch curve, a warranty spike, a supplier that can't hold sequence. Our Automotive operations team will read your note and come back within two business days with a concrete first move, not a sales pitch.",
      }}
    />
  );
}
