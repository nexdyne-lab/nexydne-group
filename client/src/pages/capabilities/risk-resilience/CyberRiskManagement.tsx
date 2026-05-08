// TODO: confirm Cyber Risk Management content with Risk & Resilience practice lead before publish.
// TODO: confirm hero copy with content lead.
// TODO: confirm Experience & Impact stats with practice lead before publish.
// TODO: confirm outcomes list with practice lead before publish.
// TODO: confirm CTA lead name + role + photo placeholder before publish.

import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export default function CyberRiskManagement() {
  return (
    <ServiceDetailTemplate
      hubName="Risk & Resilience"
      hubSlug="risk-resilience"
      hubHref="/capabilities/artificial-intelligence/risk-resilience"
      serviceName="Cyber Risk Management"
      serviceSlug="cyber-risk-management"
      heroSubtitle="Protect your digital assets with AI-powered threat detection and response. Implement zero-trust architectures and continuous security monitoring. Our team brings engineering depth, design sensibility, and operating-model rigor to make this capability durable, measurable, and trusted across your business."
      heroImage="/blog-risk-resilience.5d8e23c1.jpg"
      experienceStats={[
        // TODO: confirm with practice lead before publish
        { number: "40+", label: "Cyber Risk Management engagements delivered" },
        // TODO: confirm with practice lead before publish
        { number: "8 wks", label: "Median time to first production milestone" },
        // TODO: confirm with practice lead before publish
        { number: "3x", label: "Average lift on the primary outcome metric" },
        // TODO: confirm with practice lead before publish
        { number: "92%", label: "Client renewal or extension rate" },
      ]}
      challenge="Most teams underestimate how hard it is to translate cyber risk management from a slide deck into a production-grade capability that other people in the business actually trust and use. The result is pilots that work in isolation, models that quietly drift, and roadmaps that never quite turn into operating reality."
      opportunity="Done well, cyber risk management compounds — every iteration improves accuracy, lowers cost, and unlocks new use cases that were previously out of reach. Our Risk & Resilience team brings the engineering rigor, design sensibility, and change management muscle needed to move from one-off project to durable, scaling capability."
      approachPillars={[
        // TODO: confirm pillar copy with practice lead before publish
        {
          step: "01",
          title: "Diagnose the real problem",
          body: "We start with the operating reality, not the technology. Where is value leaking, where is risk concentrated, where do your people lose hours? That is where cyber risk management earns its keep.",
        },
        // TODO: confirm pillar copy with practice lead before publish
        {
          step: "02",
          title: "Design for production from day one",
          body: "We build with deployment, governance, and change management in mind from the first sprint — so the proof of concept is the v1, not a discardable demo.",
        },
        // TODO: confirm pillar copy with practice lead before publish
        {
          step: "03",
          title: "Run, learn, scale",
          body: "We instrument every release, capture feedback from real users, and lock in what is working. The system you ship in month three is meaningfully better by month nine.",
        },
      ]}
      outcomes={[
        // TODO: confirm outcomes with practice lead before publish
        "A clear, prioritized roadmap that ties cyber risk management to specific business outcomes leadership has signed off on.",
        // TODO: confirm outcomes with practice lead before publish
        "A first production-grade release in market within a single quarter, not a multi-year programme.",
        // TODO: confirm outcomes with practice lead before publish
        "Measurable, attributable lift on the primary metric — speed, cost, quality, or revenue — within the first 90 days of deployment.",
        // TODO: confirm outcomes with practice lead before publish
        "Internal capability built alongside the work, so your teams can extend, govern, and operate the system without permanent vendor dependency.",
        // TODO: confirm outcomes with practice lead before publish
        "Documented guardrails, monitoring, and escalation paths that satisfy risk, security, and compliance reviewers.",
        // TODO: confirm outcomes with practice lead before publish
        "A repeatable pattern that travels — second and third use cases launch faster and cheaper than the first.",
      ]}
      featuredCases={[
        {
          slug: "fintech-payment-automation",
          title: "Scaling a fintech payment platform with AI-driven automation",
          industry: "Financial Services",
          metric: "5x",
          image: "/case-fintech-payments.7ab8e23c.jpg",
        },
      ]}
      relatedServices={[
        { slug: "risk-assessment-strategy", name: "Risk Assessment & Strategy", href: "/capabilities/artificial-intelligence/risk-resilience/risk-assessment-strategy" },
        { slug: "predictive-risk-analytics", name: "Predictive Risk Analytics", href: "/capabilities/artificial-intelligence/risk-resilience/predictive-risk-analytics" },
        { slug: "supply-chain-resilience", name: "Supply Chain Resilience", href: "/capabilities/artificial-intelligence/risk-resilience/supply-chain-resilience" },
      ]}
      // TODO: confirm CTA lead name + title + photo before publish
      ctaLeadName="Talk to our Risk & Resilience lead"
    />
  );
}
