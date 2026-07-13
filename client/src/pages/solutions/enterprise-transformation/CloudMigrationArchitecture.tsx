// Refactored to ServiceDetailTemplate (Cat 2-4f Phase 1 v2). Source content preserved.
// TODO: confirm CTA lead name + role + photo placeholder before publish.

import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export default function CloudMigrationArchitecture() {
  return (
    <ServiceDetailTemplate
      hubName="Cloud & Infrastructure"
      hubSlug="cloud-infrastructure-hub"
      hubHref="/capabilities/technology/cloud-infrastructure-hub"
      serviceName="Cloud Migration Architecture"
      serviceSlug="cloud-migration-architecture"
      heroSubtitle="Most cloud migrations fail at the strategy step, not the execution step. We rebuild the workload inventory, run every application through a defensible 6Rs decision, design the target architecture, and sequence the migration so cutover risk is named before the change window opens."
      heroImage="/solution-enterprise-transformation.0a0f2624.webp"
      experienceStats={[
        { number: "40-60%", label: "Fewer cutover incidents on programs that earn the 6Rs decision first" },
        { number: "10-20%", label: "Of portfolio retired entirely instead of paying to lift it" },
        // TODO: confirm stat with practice lead before publish
        { number: "6Rs", label: "Defensible decision per workload before execution" },
        // TODO: confirm stat with practice lead before publish
        { number: "0", label: "Cutovers without a written rollback plan" },
      ]}
      challenge="Stop migrating workloads. Start deciding which ones earn their flight. Most programs lift-and-shift the same operating problems into a new bill, then spend two years reconciling cost dashboards instead of capturing the value."
      opportunity="We map every workload, run each through a defensible 6Rs matrix against business value, technical debt, and TCO, design the target landing-zone architecture, and run the migration waves with pre-cutover testing and written rollback for every workload that matters."
      approachPillars={[
        {
          step: "01",
          title: "Discover & Decide with 6Rs",
          body: "We map every workload in scope — applications, data, integrations, dependencies, runtime topology, regulatory constraints, and the human owners. Discovery tooling pulls the runtime graph, then each workload is run through a 6Rs decision — retain, retire, rehost, replatform, refactor, repurchase — against business value, technical debt, runway, and total cost of ownership.",
        },
        {
          step: "02",
          title: "Architect the Target Landing Zone",
          body: "From the strategy we design the target state — landing zone, account structure, network topology, identity, security baseline, observability, and the reference architectures the application teams build against. The architecture is defensible to engineering and to audit before any wave begins.",
        },
        {
          step: "03",
          title: "Migrate in Waves & Operate",
          body: "Migration waves run alongside the application teams with pre-cutover testing, data sync, rehearsal, go-live, and rollback for every workload that matters. The migration is the start of the cloud operating model — operations playbook, on-call, cost guardrails, and the optimization roadmap turn cloud into a managed line item.",
        },
      ]}
      outcomes={[
        "Complete workload inventory of in-scope applications, data, integrations, and dependencies — with regulatory and operational constraints documented per workload.",
        "6Rs migration strategy and decision matrix per workload — sized, sequenced, and scored against business value, technical debt, TCO, and execution risk.",
        "Reference target architecture covering landing zone, account structure, network, identity, security baseline, and the patterns application teams build against.",
        "Wave-by-wave migration runbook and cutover plan with pre-cutover testing, data sync strategy, rehearsal scripts, rollback criteria, and the run-of-show every change-window needs.",
        "Post-migration operations playbook — on-call rotation, observability stack, incident response, change governance, and the cost guardrails that protect the gain.",
        "Production-grade success metrics dashboard tracking migration progress, post-cutover stability, cost performance, and the leading indicators that catch operational regression.",
      ]}
      featuredCases={[
        { slug: "insurance-claims-automation", title: "Settling straightforward claims in hours, not weeks", industry: "Insurance", metric: "60%", image: "/case-insurance-claims.399e5d4b.jpg" },
        { slug: "healthcare-readmission", title: "Cutting avoidable readmissions with better prediction", industry: "Healthcare", metric: "42%", image: "/case-doctor-consultation.799c1562.jpg" },
      ]}
      relatedServices={[
        { slug: "cloud-cost-optimization", name: "Cloud Cost Optimization", href: "/capabilities/technology/cloud-cost-optimization" },
        { slug: "infrastructure-modernization", name: "Infrastructure Modernization", href: "/capabilities/technology/infrastructure-modernization" },
        { slug: "platform-engineering", name: "Platform Engineering", href: "/capabilities/technology/platform-engineering" },
      ]}
      ctaLeadName="Talk to our Cloud & Infrastructure lead"
    />
  );
}
