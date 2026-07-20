import IndustryCapabilityTemplate from "@/components/IndustryCapabilityTemplate";

const cases = [
  { slug: "automotive-smart-factory", title: "Lifting plant productivity by 40% at a vehicle maker", industry: "Manufacturing", metric: "40%", image: "/images/industries/mfg-robotics.jpg" },
  { slug: "semiconductor-quality-prediction", title: "Catching chip defects weeks before they appear", industry: "Manufacturing", metric: "92%", image: "/images/cases/semiconductor-quality-prediction-hero.jpg" },
  { slug: "industrial-connected-products", title: "Building a $30M services business on installed machines", industry: "Manufacturing", metric: "$30M", image: "/images/capabilities/cap-battery-factory.jpg" },
];

const related = [
  { name: "Operations Excellence", href: "/industries/manufacturing/operations-excellence" },
  { name: "Data Transformation", href: "/industries/manufacturing/data-transformation" },
  { name: "Strategy & Growth", href: "/industries/manufacturing/strategy-growth" },
];

export default function ManufacturingRiskResilience() {
  return (
    <IndustryCapabilityTemplate
      industry="Manufacturing"
      industrySlug="manufacturing"
      capability="Risk & Resilience"
      capabilitySlug="risk-resilience"
      heroSubtitle="Multi-tier supply chains, cyber-physical exposure, and tightening quality and compliance demands have made resilience a board-level issue for manufacturers. We help you design supply-chain resilience, OT security, and the controls that let the plant run fast without running exposed."
      heroImage="/images/industries/ops-monitors-dark.jpg"
      heroFocal="55% 50%"
      perspective={{
        heading: "Resilience is an operating capability, not an insurance policy.",
        image: "/images/industries/transport-bridge.jpg",
        paragraphs: [
          "Manufacturers spent decades optimizing supply chains for cost — single-sourced, lean, and globe-spanning. The last few years exposed the other side of that bet: a tier-three supplier, a port, or a ransomware event can stop a line that took years to tune. And as the floor connects, cyber-physical risk becomes safety and quality risk.",
          "We help you engineer resilience in: multi-tier supply-chain visibility and scenario planning, OT and data security, and automated quality and compliance controls. The goal is a plant and a network that keep running through the shock — and controls the front line and the auditor see the same way.",
        ],
      }}
      offeringsHeading="How we build risk and resilience for manufacturing."
      offeringsIntro="Each capability moves resilience from reactive and manual to designed, continuous, and audit-ready."
      offerings={[
        { title: "Data Governance", description: "Controls, lineage, and privacy that make plant and enterprise data trusted and audit-ready.", href: "/solutions/data-governance" },
        { title: "Responsible AI & Model Risk", description: "Keep the models running the floor explainable, controlled, and safe.", href: "/capabilities/artificial-intelligence/responsible-ai" },
        { title: "Automated Controls", description: "Embed quality and compliance controls directly in the workflow, not in a periodic audit.", href: "/solutions/process-optimization/intelligent-automation-design" },
        { title: "Continuous Improvement Programs", description: "The operating cadence that keeps the control and resilience posture sharp as risk evolves.", href: "/solutions/process-optimization/continuous-improvement-programs" },
        { title: "Process Discovery & Mining", description: "Find the hidden single points of failure in how work and supply actually flow.", href: "/solutions/process-optimization/process-discovery-mining" },
        { title: "Change Management & Training", description: "Build the frontline capability that makes resilience real, not theoretical.", href: "/solutions/process-optimization/change-management-training" },
      ]}
      stats={[
        { number: "Multi-tier", label: "supply-chain visibility and scenario planning" },
        { number: "Continuous", label: "quality and compliance controls in the workflow" },
        { number: "Faster", label: "recovery from disruption and downtime" },
      ]}
      casesHeading="Risk and resilience, proved in outcomes."
      cases={cases}
      relatedHeading="Adjacent work for Manufacturing leaders."
      related={related}
      generalPractice={{ label: "Explore our firm-wide Risk & Resilience practice", href: "/capabilities/risk-and-resilience" }}
      cta={{ heading: "Run fast without running exposed.", body: "Tell us where the exposure is — a supplier, a plant, a control. Our Manufacturing risk team will read your note and come back within two business days with a concrete first move, not a sales pitch." }}
    />
  );
}
