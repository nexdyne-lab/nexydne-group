// Refactored to ServiceDetailTemplate (Cat 2-4f Phase 1 v2). Source content preserved.
// TODO: confirm CTA lead name + role + photo placeholder before publish.

import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export default function InfrastructureModernization() {
  return (
    <ServiceDetailTemplate
      hubName="Cloud & Infrastructure"
      hubSlug="cloud-infrastructure-hub"
      hubHref="/capabilities/technology/cloud-infrastructure-hub"
      serviceName="Infrastructure Modernization"
      serviceSlug="infrastructure-modernization"
      heroSubtitle="Modernizing infrastructure is a multi-year program that lands quarterly value, not a big-bang cutover three years from now. We rebuild the inventory, design the target estate, and run the waves so productivity, cost, and reliability all move together."
      heroImage="/solution-enterprise-transformation.0a0f2624.webp"
      experienceStats={[
        { number: "60-80%", label: "Of legacy infrastructure retired inside three years" },
        { number: "10x", label: "Lift in platform productivity — IaC and observability arrive with the new estate" },
        // TODO: confirm stat with practice lead before publish
        { number: "Wave-driven", label: "Sequenced execution rather than big-bang cutover" },
        // TODO: confirm stat with practice lead before publish
        { number: "Quarterly", label: "Value lands at every wave end, not at program end" },
      ]}
      challenge="Stop budgeting modernization as a big-bang cutover. Start running it as a sequence of waves that each pay their own way. Big-bang programs accumulate three years of risk and miss the productivity dividend that wave-based delivery captures every quarter."
      opportunity="We map the estate including the shadow infrastructure nobody admits to running, design the target cloud-native landing zones and IaC patterns, and run the waves so each one retires legacy and lifts productivity, cost, and reliability together."
      approachPillars={[
        {
          step: "01",
          title: "Assess & Sequence the Roadmap",
          body: "We map every server, virtual machine, container, network segment, and dependency in the estate — production, non-production, and the shadow infrastructure nobody admits to running. From the assessment we build the sequenced modernization roadmap: what gets containerized, what gets re-architected, what gets retired, what gets left alone — each move sized in dollars and scored against risk.",
        },
        {
          step: "02",
          title: "Architect the Target & Execute Waves",
          body: "We design the target — cloud-native landing zones, container platforms, infrastructure-as-code patterns, network and identity baselines, observability and security defaults. Modernization waves run alongside the application and platform teams with IaC adoption, container migration, identity consolidation, and observability rollout per wave.",
        },
        {
          step: "03",
          title: "Operate the Modern Estate",
          body: "Once legacy is retired the new operating model takes over — IaC governance, drift detection, security baseline enforcement, FinOps integration, and the platform team that owns the modernized estate as a product the application teams adopt rather than tolerate.",
        },
      ]}
      outcomes={[
        "Complete infrastructure inventory and dependency map of servers, virtual machines, containers, networks, and integrations — reconstructed against actual traffic.",
        "Sequenced multi-year modernization roadmap covering containerization, re-architecture, retirement, and lift-and-shift moves — sized in dollars and scored against risk.",
        "Reference target architecture for the modernized estate — landing zones, container platforms, IaC patterns, network and identity baselines, observability and security defaults.",
        "Wave-by-wave modernization runbook covering pre-cutover testing, IaC adoption, container migration, identity consolidation, rollback criteria, and the change-window run-of-show.",
        "Production-grade Infrastructure-as-Code framework — Terraform or Pulumi modules, policy-as-code, drift detection, automated provisioning, and the platform-team operating model.",
        "Post-modernization operations playbook — IaC governance, security baseline enforcement, observability stack, FinOps integration, on-call rotation, and the platform-team charter.",
      ]}
      featuredCases={[
        {
          slug: "telehealth-platform",
          title: "1,800-server estate consolidated to 240 IaC-managed services with 99.98 percent availability",
          industry: "Logistics",
          metric: "99.98%",
          image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1600&q=80",
        },
        {
          slug: "accounting-audit-automation",
          title: "IaC adoption across 47 plant sites cuts provisioning time from 3 weeks to 45 minutes",
          industry: "Manufacturing",
          metric: "3w → 45m",
          image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=1600&q=80",
        },
      ]}
      relatedServices={[
        { slug: "cloud-migration-architecture", name: "Cloud Migration Architecture", href: "/capabilities/technology/cloud-migration-architecture" },
        { slug: "cloud-cost-optimization", name: "Cloud Cost Optimization", href: "/capabilities/technology/cloud-cost-optimization" },
        { slug: "platform-engineering", name: "Platform Engineering", href: "/capabilities/technology/platform-engineering" },
      ]}
      ctaLeadName="Talk to our Cloud & Infrastructure lead"
    />
  );
}
