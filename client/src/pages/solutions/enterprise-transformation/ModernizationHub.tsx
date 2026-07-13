
import CapabilityHubTemplate from "@/components/CapabilityHubTemplate";

export default function ModernizationHub() {
  return (
    <CapabilityHubTemplate
      hubName="Modernization"
      slug="technology/modernization-hub"
      heroSubtitle="Replatform, refactor, and replace patterns for legacy systems — connected by a modern API layer. We retire the old estate without breaking the business and unlock the integration patterns that make the modernization actually compound."
      heroImage="/images/capabilities/cap-aerial-grid.jpg"
      experienceStats={[
        { number: "45+", label: "Modernization and integration engagements delivered for growing and enterprise clients" },
        { number: "Strangler-fig", label: "Disciplined execution pattern across every modernization program we run" },
        { number: "REST · GraphQL · gRPC", label: "API-first integration patterns across our delivery library" },
        { number: "Zero-downtime", label: "Cutover discipline that lets the business keep running through every wave" },
      ]}
      ambitions={[
        {
          title: "Modernize legacy systems and infrastructure",
          description:
            "Retire the old estate without breaking the business. A 6Rs decision per workload, a strangler-fig execution model that protects operations, and a sunset plan that actually turns the legacy off.",
        },
        {
          title: "Build an API-first integration layer",
          description:
            "Connect systems, partners, and products via well-designed REST, GraphQL, and gRPC APIs — governed, secured, and built for the long arc rather than as point-to-point spaghetti accreted over the years.",
        },
        {
          title: "Strangler-fig the monolith",
          description:
            "Replace the monolith piece by piece behind a stable interface. The customer experience never breaks, the business keeps running, and the new architecture earns its keep one bounded context at a time.",
        },
        {
          title: "Decommission with discipline",
          description:
            "Most modernizations succeed at building the new and fail at retiring the old. We sequence the decommissioning, manage the cutover, and engineer the parallel-run discipline that actually turns the legacy off.",
        },
        {
          title: "Build the integration governance",
          description:
            "API standards, contract testing, lifecycle management, and the governance that keeps the integration layer a coherent product instead of an accreted graveyard of point-to-point connections.",
        },
        {
          title: "Make the modernization compound",
          description:
            "A modernized estate that ships faster, integrates cleaner, and decommissions on a known cadence — so the next round of change builds on what came before rather than starting over.",
        },
      ]}
      ambitionsCTAText="Talk to us about your Modernization ambition →"
      howWeCanHelp={[
        {
          title: "Legacy System Modernization",
          description:
            "Modernize legacy enterprise systems through replatform, refactor, and replace patterns. Strangler-fig execution, parallel-run discipline, and disciplined decommissioning that retires the legacy without breaking the business.",
          href: "/capabilities/technology/legacy-modernization",
        },
        {
          title: "API Integration",
          description:
            "API-first integration architecture. Connect systems, partners, and products via well-designed REST, GraphQL, and gRPC APIs — governed, secured, and built for the long arc.",
          href: "/capabilities/technology/api-integration",
        },
      ]}
      thoughtLeadership={[]}
      approachPillars={[
        {
          step: "01",
          title: "Inventory the estate",
          body: "We map the legacy estate, quantify the cost of doing nothing, and pressure-test the modernization thesis with evidence. A 6Rs decision per workload that survives the steering committee.",
        },
        {
          step: "02",
          title: "Strangler-fig the build",
          body: "We replace the monolith piece by piece behind a stable API interface, with parallel-run discipline that protects operations through every cutover. The customer experience never breaks.",
        },
        {
          step: "03",
          title: "Decommission and govern",
          body: "We sequence the decommissioning, engineer the cutover discipline, and embed the integration governance — so the next round of change builds on what came before rather than starting over.",
        },
      ]}
      featuredCases={[
        { slug: "legacy-core-modernization", title: "Modernizing a legacy core without a big-bang rewrite", industry: "Insurance", metric: "70%", image: "/images/industries/ops-monitors-dark.jpg" },
        { slug: "cloud-migration-health-system", title: "Moving core systems to the cloud without disruption", industry: "Healthcare", metric: "35%", image: "/images/industries/tech-datacenter.jpg" },
        { slug: "security-compliance-hardening", title: "Turning compliance into an always-on posture", industry: "Financial Services", metric: "Audit-ready", image: "/images/industries/fin-monitors.jpg" },
      ]}
      relatedCapabilities={[
        { href: "/capabilities/operations", name: "Operations" },
        { href: "/capabilities/artificial-intelligence", name: "Artificial Intelligence" },
        { href: "/capabilities/strategy-corporate-finance", name: "Strategy & Corporate Finance" },
      ]}
      ctaLeadName="Talk to our Modernization lead"
    />
  );
}
