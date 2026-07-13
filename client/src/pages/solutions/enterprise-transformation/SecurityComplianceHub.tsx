// TODO: confirm Security & Compliance hub experience & impact numbers with practice lead before publish.
// TODO: populate 2-3 thought-leadership insights for the Security & Compliance hub.
// TODO: confirm hero image asset — using fallback Unsplash URL until /images/security-compliance-hub-abstract.jpg lands.

import CapabilityHubTemplate from "@/components/CapabilityHubTemplate";

export default function SecurityComplianceHub() {
  return (
    <CapabilityHubTemplate
      hubName="Security & Compliance"
      slug="technology/security-compliance-hub"
      heroSubtitle="Embed security and compliance into every layer of your technology stack — from zero-trust architectures to SOC 2 and HIPAA control implementation. We move security from an audit event to an always-on assurance program."
      heroImage="/images/capabilities/cap-aerial-grid.jpg"
      experienceStats={[
        // TODO: confirm with practice lead before publish
        { number: "35+", label: "Security and compliance programs delivered for growing and enterprise clients" },
        // TODO: confirm with practice lead before publish
        { number: "SOC 2 · ISO 27001 · HIPAA · PCI-DSS · GDPR", label: "Frameworks across our active control library" },
        // TODO: confirm with practice lead before publish
        { number: "90 days", label: "Median time to audit-ready posture for in-flight engagements" },
        // TODO: confirm with practice lead before publish
        { number: "Always-on", label: "Continuous control assurance, not point-in-time audit prep" },
      ]}
      // TODO: confirm ambition copy with practice lead before publish
      ambitions={[
        {
          title: "Get audit-ready without the fire drill",
          description:
            "We assess the posture, sequence the framework roadmap, design the architecture, implement the controls with measurable evidence, and embed the assurance program that runs always-on rather than spinning up annually.",
        },
        {
          title: "Embed security into the SDLC",
          description:
            "Move from periodic security review to security-as-code. Pre-commit hooks, SAST/DAST in CI, software bill of materials, and the developer-experience design that makes the secure path the easiest path.",
        },
        {
          title: "Build a zero-trust architecture",
          description:
            "Identity-aware proxies, mutual TLS, least-privilege IAM, and the architectural patterns that assume the network perimeter is already gone — because it is. Defensible posture, not defensible diagrams.",
        },
        {
          title: "Automate compliance evidence",
          description:
            "Stop chasing screenshots before audit week. Continuous control monitoring, evidence collection, and the GRC platform integration that turns compliance from a quarterly fire drill into a reliable data pipeline.",
        },
        {
          title: "Run a real threat program",
          description:
            "Threat modeling that informs design, red-team engagements that stress real assumptions, and the incident-response runbook the team has actually rehearsed under simulated pressure.",
        },
        {
          title: "Make compliance a competitive moat",
          description:
            "Sales blocked on SOC 2 questionnaires, healthcare deals stalled on HIPAA. We accelerate certification timelines so compliance becomes a sales accelerator rather than a deal blocker.",
        },
      ]}
      ambitionsCTAText="Talk to us about your Security & Compliance ambition →"
      howWeCanHelp={[
        {
          title: "Security & Compliance",
          description:
            "Enterprise security architecture and compliance frameworks — SOC 2, ISO 27001, HIPAA, PCI-DSS, GDPR — with control implementation, audit readiness, and an always-on assurance program.",
          href: "/capabilities/technology/security-compliance",
        },
        {
          title: "Security & Compliance (Enterprise)",
          description:
            "Embed security into every layer of your technology stack with zero-trust architectures, compliance automation, and proactive threat management for enterprise-scale estates.",
          href: "/capabilities/technology/security-and-compliance",
        },
      ]}
      thoughtLeadership={[]}
      approachPillars={[
        {
          step: "01",
          title: "Assess the posture",
          body: "We map the controls actually in place against the frameworks the business needs — SOC 2, ISO 27001, HIPAA, PCI-DSS, GDPR. The roadmap follows the gap, not the consultant playbook.",
        },
        {
          step: "02",
          title: "Architect and implement controls",
          body: "We design the architecture and implement the controls with measurable evidence — identity, network, data, application — so the next audit is a confirmation exercise rather than an excavation.",
        },
        {
          step: "03",
          title: "Run continuous assurance",
          body: "We embed the assurance program — continuous control monitoring, automated evidence collection, exception governance — so compliance becomes a reliable always-on stream rather than an annual fire drill.",
        },
      ]}
      featuredCases={[
        { slug: "insurance-claims-automation", title: "Settling straightforward claims in hours, not weeks", industry: "Insurance", metric: "60%", image: "/case-insurance-claims.399e5d4b.jpg" },
        { slug: "wealth-onboarding", title: "Cutting wealth onboarding from weeks to days", industry: "Financial Services", metric: "60%", image: "/images/industries/fin-handshake-city.jpg" },
        { slug: "tech-engineering-transformation", title: "Tripling a software company's release speed", industry: "Technology, Media & Telecom", metric: "3x", image: "/images/industries/tech-datacenter.jpg" },
      ]}
      relatedCapabilities={[
        { href: "/capabilities/operations", name: "Operations" },
        { href: "/capabilities/artificial-intelligence", name: "Artificial Intelligence" },
        { href: "/capabilities/strategy-corporate-finance", name: "Strategy & Corporate Finance" },
      ]}
      ctaLeadName="Talk to our Security & Compliance lead"
    />
  );
}
