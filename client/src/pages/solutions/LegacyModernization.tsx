// Refactored to ServiceDetailTemplate (Cat 2-4f Phase 1 v2). Source content preserved.
// Original 5-phase methodology compressed to 3 pillars; all 6 deliverables preserved as outcomes.

import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export default function LegacyModernization() {
  return (
    <ServiceDetailTemplate
      hubName="Modernization"
      hubSlug="modernization-hub"
      hubHref="/capabilities/technology/modernization-hub"
      serviceName="Legacy Modernization"
      serviceSlug="legacy-modernization"
      heroSubtitle="Legacy systems do not get modernized by ambition. They get modernized by a 6Rs decision that survives the steering committee, a strangler-fig execution model that protects the operating business, and a disciplined sunset plan that actually turns the old estate off."
      heroImage="/solution-enterprise-transformation.0a0f2624.webp"
      experienceStats={[
        { number: "60-80%", label: "Of in-scope legacy footprint retired within 24 months" },
        { number: "25-40%", label: "Annual run-cost reduction once sunset schedule completes" },
        { number: "6Rs", label: "Defensible decision per application" },
        { number: "0", label: "Big-bang cutovers — every wave is strangler-fig" },
      ]}
      challenge="Stop launching modernization programs that run for three years and never retire a single legacy system. Most programs fail at the same place — six quarters in, the new platform is live, the legacy is still live, and nobody has the conviction to pull the plug."
      opportunity="We run modernization as a portfolio decision, not an architecture exercise. Every application gets a defensible 6Rs verdict, every wave ships value at the end of the quarter, every cutover earns its trust through parallel run, and every legacy component has a sunset date that the program is held to."
      approachPillars={[
        {
          step: "01",
          title: "Assess & Decide with 6Rs",
          body: "We inventory the legacy estate end-to-end and stitch applications, data stores, integrations, and batch surfaces into a single dependency graph. Each application is then scored against the 6Rs framework — retain, retire, rehost, replatform, refactor, replace — anchored to business value, technical debt, vendor risk, and five-year TCO.",
        },
        {
          step: "02",
          title: "Architect the Target & Sequence the Waves",
          body: "From the 6Rs decisions we design the target-state architecture — domain boundaries, shared platforms, integration patterns, data ownership, and the security and observability fabric the modern estate needs. The roadmap sequences work in delivery waves that respect dependencies and produce business-visible value at the end of every quarter.",
        },
        {
          step: "03",
          title: "Execute Strangler-Fig & Retire",
          body: "Big-bang cutovers fail. Every replatform and refactor wave runs the strangler-fig pattern with parallel-run reconciliation; the legacy stays operational until the new path earns the trust to retire it. We then run post-cutover stabilization and the disciplined sunset schedule that actually turns the old estate off.",
        },
      ]}
      outcomes={[
        "Complete legacy system inventory and dependency map — with the runtime dependency graph that makes the blast radius of every modernization move visible.",
        "Per-application 6Rs decision matrix with the business case, risk profile, and five-year TCO model behind every recommendation.",
        "Target-state architecture covering domain boundaries, shared platforms, integration patterns, data ownership, and the security and observability fabric the modern estate needs.",
        "Sequenced modernization roadmap organized into waves — each wave dependency-aware, capacity-aware, and tied to a business-visible outcome at the end of the quarter.",
        "Strangler-fig execution playbook including parallel-run discipline, traffic routing patterns, reconciliation harness, rollback procedures, and the cutover runbook for each wave.",
        "Disciplined retirement and sunset plan — license retirement, data archival, contract exit, infrastructure release, and the architecture-review cadence that prevents the next legacy estate from accreting.",
      ]}
      featuredCases={[
        { slug: "insurance-claims-automation", title: "Settling straightforward claims in hours, not weeks", industry: "Insurance", metric: "60%", image: "/case-insurance-claims.399e5d4b.jpg" },
        { slug: "healthcare-transformation", title: "Unifying scattered patient data to improve outcomes", industry: "Healthcare", metric: "35%", image: "/case-medical-collaboration.9602cc8c.jpg" },
      ]}
      relatedServices={[
        { slug: "cloud-migration-architecture", name: "Cloud Migration Architecture", href: "/capabilities/technology/cloud-migration-architecture" },
        { slug: "infrastructure-modernization", name: "Infrastructure Modernization", href: "/capabilities/technology/infrastructure-modernization" },
        { slug: "platform-engineering", name: "Platform Engineering", href: "/capabilities/technology/platform-engineering" },
      ]}
      ctaLeadName="Talk to our Modernization lead"
    />
  );
}
