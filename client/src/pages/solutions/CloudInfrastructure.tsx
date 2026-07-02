// Refactored to ServiceDetailTemplate (Cat 2-4f Phase 1 v2). Source content preserved.
// TODO: confirm CTA lead name + role + photo placeholder before publish.

import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export default function CloudInfrastructure() {
  return (
    <ServiceDetailTemplate
      hubName="Cloud & Infrastructure"
      hubSlug="cloud-infrastructure-hub"
      hubHref="/capabilities/technology/cloud-infrastructure-hub"
      serviceName="Cloud Infrastructure"
      serviceSlug="cloud-infrastructure"
      heroSubtitle="Cloud-native modernization across AWS, Azure, and GCP — elastic, secure, cost-optimized platforms that compound developer velocity, not cloud bills."
      heroImage="/solution-enterprise-transformation.0a0f2624.webp"
      experienceStats={[
        { number: "140+", label: "Cloud migration and modernization programs delivered to production" },
        { number: "37%", label: "Median reduction in run-rate cloud spend after FinOps engagement" },
        { number: "3.5x", label: "Average lift in deploy frequency after platform engineering investment" },
        // TODO: confirm stat with practice lead before publish
        { number: "1/3+", label: "Run-rate cloud spend cut while lifting deploy frequency by multiples" },
      ]}
      challenge="Most cloud programs trade one set of bills for another. The first migration retires the data center and introduces a new bill, the second tries to optimize that bill, and the third — done well — turns the cloud into a developer-velocity platform."
      opportunity="NexDyne's cloud infrastructure consultants design platforms that compound: assessed estate, defensible target architecture, wave-based migration, FinOps as a discipline, and platform engineering that turns cloud into deploy frequency."
      approachPillars={[
        {
          step: "01",
          title: "Assess the Estate",
          body: "Workload-by-workload assessment of cost, risk, dependencies, and modernization fit. We map the estate before we move anything — so every move is a defensible decision rather than a default lift-and-shift.",
        },
        {
          step: "02",
          title: "Design the Target & Migrate in Waves",
          body: "Landing zones, networking, identity, security, and operating model — the target architecture is defensible to engineering and to audit. Migration runs in waves with measurable gates; each wave proves the platform, retires legacy, and unlocks the next set of workloads.",
        },
        {
          step: "03",
          title: "Operate as a Product",
          body: "Platform engineering, FinOps, and security run as ongoing products — with SLAs, roadmaps, and customer-developer feedback loops. Cloud stops being a bill and starts being a managed source of velocity.",
        },
      ]}
      outcomes={[
        "Cloud Migration: lift-and-shift, replatform, or refactor — the right strategy per workload and migrations that actually finish.",
        "Cloud-native architecture using containers, Kubernetes, serverless, and event-driven patterns that scale elastically and stay operable.",
        "Multi-cloud strategy across AWS, Azure, and GCP — portability where it matters, deliberate lock-in where it pays.",
        "FinOps stood up as an operating discipline — visibility, accountability, rightsizing, and savings plans tied to engineering.",
        "Identity, network, data, and workload security baked into the platform — SOC 2, HIPAA, PCI evidence-ready rather than audit-scrambled.",
        "Internal developer platforms that turn cloud capability into developer velocity — golden paths, paved roads, and self-service primitives.",
      ]}
      featuredCases={[
        {
          slug: "bank-process-automation",
          title: "Mid-Market Bank Migrates Core Workloads and Cuts Cloud Spend 41%",
          industry: "Financial Services",
          metric: "-41%",
          image: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=1600&q=80",
        },
        {
          slug: "healthcare-data-analytics",
          title: "Health-Tech Vendor Lifts Deploy Frequency 4.2x with Platform Engineering",
          industry: "Healthcare",
          metric: "4.2x",
          image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1600&q=80",
        },
      ]}
      relatedServices={[
        { slug: "cloud-migration-architecture", name: "Cloud Migration Architecture", href: "/capabilities/technology/cloud-migration-architecture" },
        { slug: "infrastructure-modernization", name: "Infrastructure Modernization", href: "/capabilities/technology/infrastructure-modernization" },
        { slug: "cloud-cost-optimization", name: "Cloud Cost Optimization", href: "/capabilities/technology/cloud-cost-optimization" },
      ]}
      ctaLeadName="Talk to our Cloud & Infrastructure lead"
    />
  );
}
