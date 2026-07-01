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
      serviceSlug="security-and-compliance"
      heroSubtitle="Embed security into every layer of your technology stack with zero-trust architectures, compliance automation, and proactive threat management — security as an engineered discipline, not an annual scramble."
      heroImage="/solution-enterprise-transformation.0a0f2624.webp"
      experienceStats={[
        { number: "99.9%", label: "Reduction in critical vulnerabilities" },
        { number: "50%", label: "Decrease in compliance reporting time" },
        { number: "24/7", label: "Threat monitoring and response" },
        // TODO: confirm stat with practice lead before publish
        { number: "Zero-trust", label: "Every access request authenticated, authorized, and encrypted" },
      ]}
      challenge="Security ambition does not survive the first audit week. Most enterprise security programs add tools, not control, and lose the audit trail the moment the engineering systems change underneath them."
      opportunity="Done well, security is embedded into the engineering systems where the evidence already lives. We assess the posture, automate the controls and the evidence stream, and stand up the operating model that lets the program scale faster than threats."
      approachPillars={[
        {
          step: "01",
          title: "Assess & Baseline",
          body: "We start by conducting a comprehensive assessment of your current security posture, identifying gaps against industry best practices and regulatory requirements — SOC 2, ISO 27001, HIPAA, PCI, and GDPR measured against actual control evidence.",
        },
        {
          step: "02",
          title: "Implement & Automate",
          body: "We then implement robust security controls and automate compliance processes, integrating them seamlessly into existing workflows and infrastructure — zero-trust architecture, DevSecOps integration in CI/CD pipelines, cloud security posture management, and automated evidence collection.",
        },
        {
          step: "03",
          title: "Monitor & Evolve",
          body: "Finally, we establish continuous monitoring and a framework for ongoing improvement, ensuring the security posture evolves to meet new threats — incident response, forensics readiness, threat and vulnerability management, and the evidence stream that survives every quarterly audit.",
        },
      ]}
      outcomes={[
        "Zero-Trust Architecture — every access request authenticated, authorized, and encrypted by design, not by exception.",
        "Compliance Automation — the collection of compliance evidence and reporting streamlined for ISO 27001, SOC 2, and the frameworks your business needs.",
        "Threat & Vulnerability Management — proactive identification, assessment, and remediation across the entire technology landscape.",
        "Cloud Security Posture Management — continuous monitoring across AWS, Azure, and GCP against misconfiguration and evolving threats.",
        "DevSecOps Integration — security testing and controls embedded into CI/CD pipelines, making security a shared engineering responsibility.",
        "Incident Response & Forensics — prepared response plan that minimizes impact and recovery time when an incident hits.",
      ]}
      featuredCases={[
        {
          slug: "fintech-payment-automation",
          title: "SOC 2 Type II clean opinion landed in 9 months with zero deal-blocking findings",
          industry: "B2B SaaS",
          metric: "0 findings",
          image: "https://images.unsplash.com/photo-1556742031-c6961e8560b0?w=1600&q=80",
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
        { slug: "cloud-migration-architecture", name: "Cloud Migration & Architecture", href: "/capabilities/technology/cloud-migration-architecture" },
        { slug: "devops-cicd", name: "DevOps & CI/CD", href: "/capabilities/technology/devops-cicd" },
        { slug: "infrastructure-modernization", name: "Infrastructure Modernization", href: "/capabilities/technology/infrastructure-modernization" },
      ]}
      ctaLeadName="Talk to our Security & Compliance lead"
    />
  );
}
