// Refactored to ServiceDetailTemplate (Cat 2-4f Phase 1 v2). Source content preserved.
// TODO: confirm CTA lead name + role + photo placeholder before publish.

import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export default function TechnologyDueDiligence() {
  return (
    <ServiceDetailTemplate
      hubName="Strategy & Advisory"
      hubSlug="strategy-advisory-hub"
      hubHref="/capabilities/technology/strategy-advisory-hub"
      serviceName="Technology Due Diligence"
      serviceSlug="technology-due-diligence"
      heroSubtitle="Diligence is written for the partners who price the deal, not the team that inherits it. We pressure-test the technology, the integration, and the value-creation thesis with evidence, and translate findings into deal-team language."
      heroImage="/solution-enterprise-transformation.0a0f2624.webp"
      experienceStats={[
        { number: "1/2+", label: "Of engagements influence final deal terms" },
        { number: "IC-defended", label: "Repricing, condition-precedent triggers, escrow, value-creation milestones" },
        // TODO: confirm stat with practice lead before publish
        { number: "Evidence-led", label: "Findings grounded in code, traffic, and architecture — not maturity self-report" },
        // TODO: confirm stat with practice lead before publish
        { number: "First 100 days", label: "Diligence becomes the post-close value-creation roadmap" },
      ]}
      challenge="Stop reading diligence reports that read like architecture reviews. Start commissioning the ones that move deal price. Most diligence describes the target without translating findings into the valuation, condition, or roadmap language the IC actually defends."
      opportunity="We define the diligence scope with the deal team, assess the dimensions that move enterprise value, model integration or value-creation, and translate findings into a risk-and-opportunity matrix that influences final terms — repricing, escrow, condition-precedent triggers, or post-close milestones."
      approachPillars={[
        {
          step: "01",
          title: "Scope the Diligence & Assess",
          body: "We define the diligence scope with the deal team — the technology questions that actually move the deal price, the integration or value-creation hypotheses that need pressure-testing, and the access window. We then assess the target across the dimensions that move enterprise value: architecture, scalability, code quality, technical debt, infrastructure and operations, security posture, and engineering team capability.",
        },
        {
          step: "02",
          title: "Model Integration or Value Creation",
          body: "For M&A acquisitions we model the integration — system-by-system convergence, data and identity unification, redundancy in tooling and team. For PE we run the value-creation analysis with the post-close roadmap that turns combined-entity scope into a defensible value-creation thesis.",
        },
        {
          step: "03",
          title: "Report to the IC & Advise Post-Deal",
          body: "Findings translate into deal-team language — risk and opportunity matrix, valuation impact, condition-precedent triggers, post-close investment requirements. The diligence is the start of the value-creation conversation: we extend into post-close with first-100-days plan, integration program, and the technology-portfolio reporting cadence the sponsor uses.",
        },
      ]}
      outcomes={[
        "Written due diligence scope and plan covering the deal-relevant technology questions, integration or value-creation hypotheses, the access plan, and the timeline.",
        "Evidence-led technical assessment report across architecture, code quality, technical debt, infrastructure and operations, security posture, and engineering team capability.",
        "Integration or value-creation analysis — M&A integration model or PE value-creation, system convergence, data and identity unification, redundancy mapping, and the post-close roadmap.",
        "Deal-team risk and opportunity matrix — valuation impact, condition-precedent triggers, post-close investment requirements, and the rating logic the IC defends.",
        "IC-ready executive findings deck written for the partners who price the deal — headline thesis, valuation implications, the three to five things that move the deal.",
        "Post-deal technology roadmap — first-100-days plan, integration or value-creation program, milestones, and the portfolio reporting cadence.",
      ]}
      featuredCases={[
        { slug: "wealth-onboarding", title: "Cutting wealth onboarding from weeks to days", industry: "Financial Services", metric: "60%", image: "/images/industries/fin-handshake-city.jpg" },
        { slug: "pe-industrial-transformation", title: "Adding $18M in EBITDA at an industrial manufacturer", industry: "Private Equity", metric: "$18M", image: "/images/industries/transport-traffic.jpg" },
      ]}
      relatedServices={[
        { slug: "technology-strategy", name: "Technology Strategy", href: "/capabilities/technology/technology-strategy" },
        { slug: "cost-optimization", name: "Cost Optimization", href: "/capabilities/technology/cost-optimization" },
        { slug: "security-compliance", name: "Security & Compliance", href: "/capabilities/technology/security-compliance" },
      ]}
      ctaLeadName="Talk to our Strategy & Advisory lead"
    />
  );
}
