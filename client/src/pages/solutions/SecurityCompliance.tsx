// Refactored to ServiceDetailTemplate (Cat 2-4f Phase 1 v2). Source content preserved.
// TODO: confirm CTA lead name + role + photo placeholder before publish.

import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export default function SecurityCompliance() {
  return (
    <ServiceDetailTemplate
      hubName="Security & Compliance"
      hubSlug="security-compliance-hub"
      hubHref="/capabilities/technology/security-compliance-hub"
      serviceName="Security & Compliance"
      serviceSlug="security-compliance"
      heroSubtitle="Compliance is a control discipline, not an audit event. We assess the posture, sequence the framework roadmap, design the architecture, implement the controls with measurable evidence streams, and embed the assurance program that runs always-on."
      heroImage="/enterprise-transformation-hero.jpg"
      experienceStats={[
        { number: "40-70%", label: "Annual audit effort cut by embedding controls in engineering systems" },
        { number: "Always-on", label: "Evidence is queryable rather than collected" },
        // TODO: confirm stat with practice lead before publish
        { number: "SOC 2 / HIPAA", label: "ISO 27001, PCI-DSS, GDPR — measured against actual control evidence" },
        // TODO: confirm stat with practice lead before publish
        { number: "Quarterly", label: "Control reviews, continuous monitoring, vendor risk cycle" },
      ]}
      challenge="Stop scrambling for evidence in audit week. Start running compliance as an always-on stream. Most programs run audits as fire drills because controls were never designed into the engineering systems where the evidence actually lives."
      opportunity="We measure the current security posture against the frameworks that matter for your business, design the target architecture, implement the controls with IaC-enforced policy, and embed the assurance operating cadence that turns compliance into a permanent discipline."
      approachPillars={[
        {
          step: "01",
          title: "Assess Posture & Sequence the Roadmap",
          body: "We measure current security posture against SOC 2, ISO 27001, HIPAA, PCI-DSS, or GDPR using actual control evidence — not self-reported maturity. From the assessment we build the compliance roadmap with a multi-framework calendar, audit cost, and the prerequisite engineering work that aligns with the business cycle.",
        },
        {
          step: "02",
          title: "Architect & Implement Controls",
          body: "We design the target security architecture — identity, access, data protection, network segmentation, secrets management, vulnerability and threat management, and incident response. Then we implement the controls alongside engineering with IaC-enforced policy, logging baselines, vulnerability automation, and the evidence-collection workflow that survives a fresh quarter.",
        },
        {
          step: "03",
          title: "Audit Readiness & Ongoing Assurance",
          body: "We deliver the complete audit-readiness package before the auditor arrives — control narratives, evidence inventory, rehearsed walk-throughs, auditor liaison playbook. Then we embed the permanent assurance operating model: quarterly control reviews, continuous monitoring dashboards, vendor risk cycle, and an incident exercise calendar.",
        },
      ]}
      outcomes={[
        "Control-level security posture assessment against SOC 2, ISO 27001, HIPAA, PCI-DSS, or GDPR — measured against actual evidence with sized remediation effort per gap.",
        "Sequenced multi-framework compliance roadmap with calendar, audit cost, prerequisite engineering work, and certification cadence aligned with the business cycle.",
        "Reference target security architecture covering identity, access, data protection, segmentation, secrets, vulnerability and threat management, and incident response.",
        "Control implementation runbook with IaC-enforced policy, logging baselines, vulnerability automation, access review cadence, and the evidence-collection workflow.",
        "Complete audit readiness package — control narratives, evidence inventory, rehearsed walk-throughs, and the auditor liaison playbook delivered before audit week.",
        "Permanent ongoing assurance program — quarterly control reviews, continuous monitoring dashboards, vendor risk cycle, and incident exercise calendar.",
      ]}
      featuredCases={[
        {
          slug: "law-firm-contract-automation",
          title: "SOC 2 Type II clean opinion landed in 9 months with zero deal-blocking findings",
          industry: "B2B SaaS",
          metric: "0 findings",
          image: "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=1600&q=80",
        },
        {
          slug: "hospital-clinical-workflow",
          title: "HIPAA and HITRUST control implementation across 22 clinical applications under a regulated cutover",
          industry: "Healthcare",
          metric: "22 apps",
          image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1600&q=80",
        },
      ]}
      relatedServices={[
        { slug: "security-and-compliance", name: "Enterprise Security & Compliance", href: "/capabilities/technology/security-and-compliance" },
        { slug: "devops-cicd", name: "DevOps & CI/CD", href: "/capabilities/technology/devops-cicd" },
        { slug: "technology-due-diligence", name: "Technology Due Diligence", href: "/capabilities/technology/technology-due-diligence" },
      ]}
      ctaLeadName="Talk to our Security & Compliance lead"
    />
  );
}
