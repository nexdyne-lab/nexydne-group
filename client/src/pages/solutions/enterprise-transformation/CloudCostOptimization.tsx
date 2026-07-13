// Refactored to ServiceDetailTemplate (Cat 2-4f Phase 1 v2). Source content preserved.

import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export default function CloudCostOptimization() {
  return (
    <ServiceDetailTemplate
      hubName="Cloud & Infrastructure"
      hubSlug="cloud-infrastructure-hub"
      hubHref="/capabilities/technology/cloud-infrastructure-hub"
      serviceName="Cloud Cost Optimization"
      serviceSlug="cloud-cost-optimization"
      heroSubtitle="Cloud bills do not get smaller because someone reads a cost dashboard. We rebuild the baseline, surface the waste, restructure commitments, deploy the FinOps operating model, and embed the discipline so cost stops being the quarterly surprise it has been."
      heroImage="/solution-enterprise-transformation.0a0f2624.webp"
      experienceStats={[
        { number: "20-35%", label: "Of annualized cloud spend retired in the first twelve months" },
        { number: "Year 2", label: "Gain holds because the operating cadence — not a one-time audit — produced it" },
        { number: "Multi-cloud", label: "AWS, Azure, GCP unit economics on one defensible baseline" },
        { number: "Co-owned", label: "Cost a shared engineering metric — not a finance complaint" },
      ]}
      challenge="Stop chasing cloud bills after the fact. Start running cloud as a managed line on the operating P&L. Reactive cost reviews catch yesterday's overrun; managed FinOps prevents tomorrow's by making cost an engineering metric."
      opportunity="We rebuild twelve months of true unit economics, surface the waste, deploy the FinOps tooling stack with automated guardrails, and stand up the operating cadence — weekly cost reviews, monthly forecasts, quarterly commitment reauthorization — that holds the gain."
      approachPillars={[
        {
          step: "01",
          title: "Baseline the Spend & Surface Waste",
          body: "We connect to AWS, Azure, and GCP billing accounts and reconstruct twelve months of true unit economics — by service, environment, team, and product. Idle resources, orphaned volumes, oversized instances, and untagged spend are surfaced and tied to named owners with sized remediation.",
        },
        {
          step: "02",
          title: "Optimize & Deploy FinOps Tooling",
          body: "From the baseline we build a prioritized portfolio — right-sizing, reserved instance and savings plan coverage, storage tiering, network egress reduction, and architecture moves. Manual cost reviews never survive a release calendar; we deploy CloudHealth, Apptio Cloudability, native dashboards, and automated guardrails.",
        },
        {
          step: "03",
          title: "Operate the FinOps Discipline & Scale",
          body: "FinOps is a discipline, not a project. We stand up the operating cadence — weekly cost reviews, monthly forecasts versus actuals, quarterly commitment reauthorization, executive cost-performance reporting — then extend across the enterprise with central policy, federated execution, and chargeback or showback.",
        },
      ]}
      outcomes={[
        "Twelve-month reconstructed cost baseline and spend report — by service, environment, team, and product, with the data lineage that makes every number defensible to finance.",
        "Waste identification analysis — idle resources, oversized instances, orphaned storage, untagged spend, and underused commitments tied to named owner and sized remediation.",
        "Sequenced prioritized optimization roadmap — right-sizing, commitment, architecture, and policy moves sized in annualized dollars and scored against execution risk.",
        "Deployed FinOps tooling architecture — cost analytics, anomaly detection, automated guardrails, and dashboards wired to the source-of-truth billing accounts.",
        "Governance and accountability framework — operating cadence, RACI, tagging policy, commitment reauthorization process, and the chargeback or showback model.",
        "Production-grade executive cost performance dashboard — spend versus forecast, optimization realized, commitment coverage, and the leading indicators.",
      ]}
      featuredCases={[
        { slug: "cloud-migration-health-system", title: "Moving core systems to the cloud without disruption", industry: "Healthcare", metric: "35%", image: "/images/industries/tech-datacenter.jpg" },
        { slug: "tech-engineering-transformation", title: "Tripling a software company's release speed", industry: "Technology, Media & Telecom", metric: "3x", image: "/images/capabilities/cap-iot-network.jpg" },
        { slug: "industrial-connected-products", title: "Building a $30M services business on installed machines", industry: "Manufacturing", metric: "$30M", image: "/images/capabilities/cap-battery-factory.jpg" },
      ]}
      relatedServices={[
        { slug: "cloud-migration-architecture", name: "Cloud Migration Architecture", href: "/capabilities/technology/cloud-migration-architecture" },
        { slug: "infrastructure-modernization", name: "Infrastructure Modernization", href: "/capabilities/technology/infrastructure-modernization" },
        { slug: "cost-optimization", name: "Cost Optimization", href: "/capabilities/technology/cost-optimization" },
      ]}
      ctaLeadName="Talk to our Cloud & Infrastructure lead"
    />
  );
}
