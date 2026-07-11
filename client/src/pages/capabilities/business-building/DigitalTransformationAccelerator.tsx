// TODO: David — confirm Digital Transformation Accelerator experience & impact numbers with practice lead before publish.
// TODO: David — populate 2-3 thought-leadership insights for the Digital Transformation Accelerator hub.

import CapabilityHubTemplate from "@/components/CapabilityHubTemplate";

export default function DigitalTransformationAccelerator() {
  return (
    <CapabilityHubTemplate
      hubName="Digital Transformation Accelerator"
      slug="digital-transformation-accelerator"
      insightsTopic="business"
      heroSubtitle="Transform your technology foundation with right-sized enterprise architecture, cloud migration strategies, data platforms, and API integration frameworks — enterprise capabilities without enterprise overhead."
      heroImage="/images/digital-transformation-abstract.jpg"
      heroFocal="55% 50%"
      experienceStats={[
        // TODO: confirm with practice lead before publish
        { number: "40-60%", label: "Infrastructure cost reduction through cloud optimization" },
        // TODO: confirm with practice lead before publish
        { number: "70%", label: "Faster integration delivery with standardized API frameworks" },
        // TODO: confirm with practice lead before publish
        { number: "99.9%", label: "System availability through redundancy and automated failover" },
      ]}
      ambitions={[
        {
          title: "Close the architecture gap",
          description:
            "Replace fragmented inherited stacks with a coherent technology blueprint that guides investment decisions and prevents architectural drift as the business grows.",
        },
        {
          title: "Move to the cloud without breaking the business",
          description:
            "Execute a phased migration that prioritizes continuity — workloads moved on the right cadence, costs controlled, and cloud-native patterns adopted where they actually pay.",
        },
        {
          title: "Unify your data into a real platform",
          description:
            "Bring fragmented data sources together into modern warehousing, streaming, and ML pipelines that support both operational reporting and advanced analytics.",
        },
        {
          title: "Untangle integrations once and for all",
          description:
            "Replace brittle point-to-point integrations with scalable, maintainable RESTful and event-driven APIs that let new systems plug in cleanly.",
        },
        {
          title: "Pay down technical debt with discipline",
          description:
            "Sequence the legacy modernization work so risk is bounded, value is delivered along the way, and the team is never asked to rewrite everything at once.",
        },
        {
          title: "Stand up architecture governance that lasts",
          description:
            "Establish review boards, standards, and decision rights so architectural integrity holds up after the engagement ends — even as new leaders and acquisitions arrive.",
        },
      ]}
      ambitionsCTAText="Talk to us about your Digital Transformation ambition →"
      howWeCanHelp={[
        {
          title: "Architecture Assessment",
          description:
            "We conduct comprehensive architecture assessments to understand current state, identify gaps, and define target architecture. This phase establishes the transformation roadmap and prioritizes initiatives.",
          href: "/capabilities/business-building/digital-transformation-accelerator/architecture-assessment",
        },
        {
          title: "Foundation Build",
          description:
            "We establish core architecture components including cloud infrastructure, data platforms, and integration frameworks. This phase focuses on building stable foundations that support subsequent business migrations.",
          href: "/capabilities/business-building/digital-transformation-accelerator/foundation-build",
        },
        {
          title: "Capability Migration",
          description:
            "We execute phased migrations of business capabilities to the new architecture. Each migration follows proven patterns that minimize disruption while delivering immediate value through improved performance.",
          href: "/capabilities/business-building/digital-transformation-accelerator/capability-migration",
        },
        {
          title: "Optimization & Governance",
          description:
            "We establish continuous improvement processes and governance frameworks that maintain architectural integrity as your business evolves. This includes architecture review boards, technology standards, and ongoing optimization.",
          href: "/capabilities/business-building/digital-transformation-accelerator/optimization-governance",
        },
        {
          // TODO: confirm with practice lead before publish
          title: "Legacy Modernization",
          description:
            "Decompose monolithic legacy systems into modular services using strangler-fig and event-driven patterns — retiring technical debt incrementally without halting feature delivery.",
          href: "/capabilities/business-building/digital-transformation-accelerator/legacy-modernization",
        },
        {
          // TODO: confirm with practice lead before publish
          title: "DevSecOps Enablement",
          description:
            "Stand up CI/CD pipelines, infrastructure-as-code, and security automation that turn architecture decisions into safely repeatable deployments at mid-market scale.",
          href: "/capabilities/business-building/digital-transformation-accelerator/devsecops-enablement",
        },
      ]}
      thoughtLeadership={[]}
      approachPillars={[
        {
          step: "01",
          title: "Assess",
          body: "We map current state, identify architecture gaps, and define a target blueprint. Outputs include a transformation roadmap with prioritized initiatives, business-value cases, and risk-mitigated sequencing.",
        },
        {
          step: "02",
          title: "Build & Migrate",
          body: "We establish cloud infrastructure, data platforms, and integration frameworks, then execute phased capability migrations using proven patterns that minimize disruption and deliver value at each stage.",
        },
        {
          step: "03",
          title: "Govern & Optimize",
          body: "We install architecture review boards, technology standards, and continuous-improvement processes that maintain architectural integrity as the business — and the technology landscape — keeps evolving.",
        },
      ]}
      featuredCases={[
        {
          slug: "logistics-tech-spinoff",
          title: "Logistics Company Builds Technology Spin-Off",
          industry: "Logistics · Business Building",
          metric: "70%",
          image: "/images/capabilities/cap-venturing.jpg",
        },
        {
          slug: "consulting-saas",
          title: "Professional Services Firm Builds SaaS Product",
          industry: "Professional Services · Business Building",
          metric: "99.9%",
          image: "/images/capabilities/cap-lightbulb-idea.jpg",
        },
        {
          slug: "ecommerce-platform-launch",
          title: "Industrial Distributor Launches B2B E-commerce Platform",
          industry: "Industrial Distribution · Business Building",
          metric: "40-60%",
          image: "/images/capabilities/cap-celebrate.jpg",
        },
      ]}
      relatedCapabilities={[
        { href: "/capabilities/strategy-corporate-finance", name: "Strategy & Corporate Finance" },
        { href: "/capabilities/growth-marketing-sales", name: "Growth, Marketing & Sales" },
        { href: "/capabilities/ai-technology-consulting", name: "AI Technology Consulting" },
      ]}
      ctaLeadName="Talk to our Digital Transformation Accelerator lead"
    />
  );
}
