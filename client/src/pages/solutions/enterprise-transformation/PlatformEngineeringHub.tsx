// TODO: confirm Platform Engineering hub experience & impact numbers with practice lead before publish.
// TODO: populate 2-3 thought-leadership insights for the Platform Engineering hub.
// TODO: confirm hero image asset — using fallback Unsplash URL until /images/platform-engineering-hub-abstract.jpg lands.

import CapabilityHubTemplate from "@/components/CapabilityHubTemplate";

export default function PlatformEngineeringHub() {
  return (
    <CapabilityHubTemplate
      hubName="Platform Engineering"
      slug="technology/platform-engineering-hub"
      heroSubtitle="Build internal developer platforms and data platforms that compound velocity. We design the IDP, build the paved paths, run the adoption, and embed the platform-team operating model that turns infrastructure into a managed product."
      heroImage="/images/capabilities/cap-aerial-grid.jpg"
      experienceStats={[
        // TODO: confirm with practice lead before publish
        { number: "30+", label: "Platform engineering programs delivered for growing and enterprise clients" },
        // TODO: confirm with practice lead before publish
        { number: "70%", label: "Median reduction in service lead time after IDP adoption" },
        // TODO: confirm with practice lead before publish
        { number: "2x", label: "Average lift in deployment frequency in the first two quarters" },
        // TODO: confirm with practice lead before publish
        { number: "Product mindset", label: "Platform-as-a-product operating model embedded with every engagement" },
      ]}
      // TODO: confirm ambition copy with practice lead before publish
      ambitions={[
        {
          title: "Stand up an internal developer platform",
          description:
            "Self-service infrastructure and golden paths that let engineering teams ship faster — operated as a product with a backlog, a roadmap, and a developer-satisfaction score that earns budget every cycle.",
        },
        {
          title: "Operate platform as a product",
          description:
            "Move the platform team from a project posture to a product posture. PM discipline, user research, OKRs, and the operating cadence that turns the platform into a sustainable internal asset.",
        },
        {
          title: "Build a data platform engineering capability",
          description:
            "Pipelines, lakehouse, warehouses, observability, and the engineering discipline that keeps the data platform a managed asset rather than a stack of fragile jobs taped together by tribal knowledge.",
        },
        {
          title: "Lift developer experience measurably",
          description:
            "Make developer experience the headline metric. Onboarding time, change failure rate, deploy lead time, and developer-satisfaction scores tracked and reported like any other product KPI.",
        },
        {
          title: "Build paved paths and golden paths",
          description:
            "Codify the easiest right thing to do. Templated services, opinionated CI/CD, and reusable patterns that compress weeks of new-service setup into hours and lift baseline reliability across the estate.",
        },
        {
          title: "Make the platform compound, not stagnate",
          description:
            "Most platforms plateau when the founding team rotates. We embed the discovery, prioritization, and roadmap discipline that keeps the platform compounding for years, not just delivering one launch.",
        },
      ]}
      ambitionsCTAText="Talk to us about your Platform Engineering ambition →"
      howWeCanHelp={[
        {
          title: "Platform Engineering",
          description:
            "Internal developer platforms (IDPs) — self-service infrastructure and golden paths that let engineering teams ship faster, operated as a product with a backlog, a roadmap, and a developer-satisfaction score.",
          href: "/capabilities/technology/platform-engineering",
        },
        {
          title: "Data Platform Engineering",
          description:
            "Build the data platform that supports enterprise analytics — pipelines, lakehouse, warehouses, observability, and the engineering discipline that keeps the platform a managed asset rather than a stack of fragile jobs.",
          href: "/capabilities/technology/data-platform-engineering",
        },
      ]}
      thoughtLeadership={[]}
      approachPillars={[
        {
          step: "01",
          title: "Diagnose developer friction",
          body: "We start by measuring where developers actually lose hours — onboarding, environment setup, deploy waits, debugging fragility. The platform roadmap follows the friction, not the technology fashion of the quarter.",
        },
        {
          step: "02",
          title: "Build the paved path",
          body: "We design the IDP as a product — golden paths, templated services, self-service deploy, and observability built in by default. Adoption is engineered into the experience, not bolted on as a training program.",
        },
        {
          step: "03",
          title: "Run platform as a product",
          body: "We stand up the platform team operating model — PM, roadmap, OKRs, user research, developer-satisfaction score — so the platform compounds for years, not just delivers one launch and plateaus.",
        },
      ]}
      featuredCases={[
        { slug: "insurance-digital-distribution", title: "Turning a call-center insurer into a digital one", industry: "Insurance", metric: "50%", image: "/images/industries/fin-handshake-city.jpg" },
        { slug: "pe-healthcare-diligence", title: "Cutting healthcare diligence time by 40%", industry: "Private Equity", metric: "40%", image: "/images/capabilities/cap-conference-data.jpg" },
        { slug: "bank-cross-sell", title: "Turning single accounts into real relationships", industry: "Financial Services", metric: "$24M", image: "/images/industries/fin-trader.jpg" },
      ]}
      relatedCapabilities={[
        { href: "/capabilities/operations", name: "Operations" },
        { href: "/capabilities/artificial-intelligence", name: "Artificial Intelligence" },
        { href: "/capabilities/strategy-corporate-finance", name: "Strategy & Corporate Finance" },
      ]}
      ctaLeadName="Talk to our Platform Engineering lead"
    />
  );
}
