
import CapabilityHubTemplate from "@/components/CapabilityHubTemplate";

export default function CloudInfrastructureHub() {
  return (
    <CapabilityHubTemplate
      hubName="Cloud & Infrastructure"
      slug="technology/cloud-infrastructure-hub"
      heroSubtitle="Migrate, modernize, and optimize your cloud estate end-to-end. We design target architectures, sequence migration waves, and operate the platform with FinOps discipline so the cloud compounds developer velocity instead of dragging on the P&L."
      heroImage="/images/capabilities/cap-coder.jpg"
      experienceStats={[
        { number: "60+", label: "Cloud and infrastructure engagements delivered for growing and enterprise clients" },
        { number: "38%", label: "Average infrastructure cost reduction across cloud migration engagements" },
        { number: "3x", label: "Average lift in deployment frequency post platform modernization" },
        { number: "AWS · Azure · GCP", label: "Multi-cloud delivery across the three hyperscalers" },
      ]}
      ambitions={[
        {
          title: "Migrate to cloud at enterprise scale",
          description:
            "Most cloud migrations fail at the strategy step. We rebuild the workload inventory, run a defensible 6Rs decision, design the target architecture, and sequence the migration so cutover risk is named before the change window opens.",
        },
        {
          title: "Modernize legacy infrastructure",
          description:
            "Move from on-prem and pet servers to cloud-native and infrastructure-as-code. A sequenced roadmap, evidence-led assessment, and the operating model that runs the modernized estate as a managed product.",
        },
        {
          title: "Build a cloud-native foundation",
          description:
            "Land elastic, secure, cost-optimized platforms across AWS, Azure, and GCP that compound developer velocity, not cloud bills. Landing zones, networking, identity, and observability done once, properly.",
        },
        {
          title: "Get cloud spend under control",
          description:
            "FinOps for cloud spend — right-sizing, commitment optimization, waste elimination, and the governance cadence that turns cloud cost from a quarterly fire drill into a managed line on the operating P&L.",
        },
        {
          title: "Operate the post-migration estate",
          description:
            "Go-live is not the finish line. We embed the platform-team operating model, run the FinOps cadence, train your team, and optimize the estate continuously so cost, reliability, and velocity all move together.",
        },
        {
          title: "Lift reliability and developer experience",
          description:
            "Reliable platforms make reliable products. SLOs, error budgets, golden paths, and the platform-as-a-product operating model that lifts developer satisfaction and incident response in the same quarter.",
        },
      ]}
      ambitionsCTAText="Talk to us about your Cloud & Infrastructure ambition →"
      howWeCanHelp={[
        {
          title: "Cloud Migration Architecture",
          description:
            "Cloud migration strategy and target architecture — 6Rs decisions per workload, defensible target state, sequenced execution, and the operating model that runs the post-migration estate.",
          href: "/capabilities/technology/cloud-migration-architecture",
        },
        {
          title: "Infrastructure Modernization",
          description:
            "Modernize legacy infrastructure to cloud-native and infrastructure-as-code — assessment, sequenced roadmap, target architecture, and the operating model that runs the modernized estate as a managed product.",
          href: "/capabilities/technology/infrastructure-modernization",
        },
        {
          title: "Cloud Infrastructure",
          description:
            "Cloud-native modernization on AWS, Azure, and GCP. Build elastic, secure, cost-optimized platforms that compound developer velocity.",
          href: "/capabilities/technology/cloud-infrastructure",
        },
        {
          title: "Cloud Cost Optimization",
          description:
            "FinOps for cloud spend — right-sizing, commitment optimization, waste elimination, and the governance cadence that turns cloud cost from a quarterly fire drill into a managed line on the operating P&L.",
          href: "/capabilities/technology/cloud-cost-optimization",
        },
      ]}
      thoughtLeadership={[]}
      approachPillars={[
        {
          step: "01",
          title: "Diagnose the estate",
          body: "We map your current systems, quantify the cost of doing nothing, and pressure-test the cloud thesis with evidence. No assumptions — just a defensible inventory and a 6Rs decision per workload that survives the steering committee.",
        },
        {
          step: "02",
          title: "Architect and migrate in waves",
          body: "We design a target architecture that fits your business, your budget, and your team. Then we migrate in sequenced waves with parallel-run discipline, so cutover risk is named and contained before the change window opens.",
        },
        {
          step: "03",
          title: "Operate with FinOps discipline",
          body: "We embed the platform-team operating model, run the FinOps cadence, train your team, and optimize the estate continuously so cost, reliability, and developer velocity all move together quarter-over-quarter.",
        },
      ]}
      featuredCases={[
        { slug: "healthcare-transformation", title: "Unifying scattered patient data to improve outcomes", industry: "Healthcare", metric: "35%", image: "/case-medical-collaboration.9602cc8c.jpg" },
        { slug: "healthcare-revenue-cycle", title: "Recovering revenue the system had already earned", industry: "Healthcare", metric: "$32M", image: "/case-healthcare-team.5797392b.jpg" },
        { slug: "bank-cross-sell", title: "Turning single accounts into real relationships", industry: "Financial Services", metric: "$24M", image: "/images/industries/fin-trader.jpg" },
      ]}
      relatedCapabilities={[
        { href: "/capabilities/operations", name: "Operations" },
        { href: "/capabilities/artificial-intelligence", name: "Artificial Intelligence" },
        { href: "/capabilities/strategy-corporate-finance", name: "Strategy & Corporate Finance" },
      ]}
      ctaLeadName="Talk to our Cloud & Infrastructure lead"
    />
  );
}
