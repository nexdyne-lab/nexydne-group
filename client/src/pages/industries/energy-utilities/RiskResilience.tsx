import IndustryCapabilityTemplate from "@/components/IndustryCapabilityTemplate";

const cases = [
  {
    slug: "utility-grid-modernization",
    title: "Cutting outage time nearly in half for a regional utility",
    industry: "Energy & Utilities",
    metric: "45%",
    image: "/images/industries/energy-solar.jpg",
  },
  {
    slug: "renewable-energy-forecasting",
    title: "Sharper generation forecasts for a renewables developer",
    industry: "Energy & Utilities",
    metric: "25%",
    image: "/images/industries/energy-wind.jpg",
  },
  {
    slug: "power-generation-predictive-maintenance",
    title: "Halving unplanned outages at a power generator",
    industry: "Energy & Utilities",
    metric: "60%",
    image: "/images/industries/energy-powerplant.jpg",
  },
];

const related = [
  { name: "Operations Excellence", href: "/industries/energy-utilities/operations-excellence" },
  { name: "Data Transformation", href: "/industries/energy-utilities/data-transformation" },
  { name: "Customer Intelligence", href: "/industries/energy-utilities/customer-intelligence" },
];

export default function EnergyUtilitiesRiskResilience() {
  return (
    <IndustryCapabilityTemplate
      industry="Energy & Utilities"
      industrySlug="energy-utilities"
      capability="Risk & Resilience"
      capabilitySlug="risk-resilience"
      heroSubtitle="Utilities are critical infrastructure, and the threat surface now runs from ransomware in the OT network to wildfire under the lines to a NERC-CIP audit on the desk. We help operators build a converged cyber-physical resilience posture — one that protects the grid, satisfies the regulator, and holds up when the storm, the attacker, or the auditor actually arrives."
      heroImage="/images/industries/energy-powerplant.jpg"
      heroFocal="60% 50%"
      perspective={{
        heading: "Resilience is proven under load — the storm, the attack, the audit.",
        image: "/images/data-abstract.jpg",
        paragraphs: [
          "A utility carries risks most industries never see together: an OT network that a nation-state would love to reach, a distribution system that can start a fire, and a compliance regime where a missed NERC-CIP control is a fineable event. These are not separate problems — a control that fails a cyber audit is often the same weak point that fails during a real intrusion or a real storm.",
          "We treat them as one posture. Governed operational data as the single source for controls, responsible-AI discipline over the models that now make grid decisions, and automated, evidenced controls that produce audit proof as a byproduct of running the grid — not a scramble before the assessment. It's how reliability and compliance become the same system instead of competing programs.",
        ],
      }}
      offeringsHeading="How we build risk and resilience for energy and utilities."
      offeringsIntro="Each capability is a working system, delivered by the team that will help you run it."
      offerings={[
        {
          title: "Data Governance",
          description:
            "Make governed operational and asset data the single source that controls, NERC-CIP evidence, and reliability reporting all draw from.",
          href: "/solutions/data-governance",
        },
        {
          title: "Responsible AI & Model Risk",
          description:
            "Put guardrails and validation around the load-forecasting and asset-health models now making real grid and dispatch decisions.",
          href: "/capabilities/artificial-intelligence/responsible-ai",
        },
        {
          title: "Automated Controls",
          description:
            "Automate CIP and operational controls so access, patching, and change evidence are captured as the grid runs, not before an audit.",
          href: "/solutions/process-optimization/intelligent-automation-design",
        },
        {
          title: "Continuous Improvement Programs",
          description:
            "Run the resilience cadence — tabletop to remediation — that keeps cyber, storm, and wildfire readiness improving between events.",
          href: "/solutions/process-optimization/continuous-improvement-programs",
        },
        {
          title: "Process Discovery & Mining",
          description:
            "Trace how restoration, incident response, and compliance workflows actually run to find the gaps an auditor or attacker would.",
          href: "/solutions/process-optimization/process-discovery-mining",
        },
        {
          title: "Change Management & Training",
          description:
            "Build the security and safety culture across IT, OT, and the field that turns a policy binder into how people actually operate.",
          href: "/solutions/process-optimization/change-management-training",
        },
      ]}
      stats={[
        { number: "60%+", label: "faster NERC-CIP evidence collection with automated controls" },
        { number: "IT + OT", label: "converged into one cyber-physical resilience posture" },
        { number: "Days to hours", label: "faster incident detection and restoration response" },
      ]}
      casesHeading="Risk and resilience, proved in outcomes."
      cases={cases}
      relatedHeading="Adjacent work for Energy & Utilities leaders."
      related={related}
      generalPractice={{
        label: "Explore our firm-wide Risk & Resilience practice",
        href: "/capabilities/risk-and-resilience",
      }}
      cta={{
        heading: "Build resilience that holds under load.",
        body: "Tell us where exposure keeps you up — an OT segment, a CIP audit finding, a wildfire or storm-hardening plan. Our Energy & Utilities team will read your note and come back within two business days with a concrete first move, not a sales pitch.",
      }}
    />
  );
}
