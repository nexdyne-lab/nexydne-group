// Refactored to ServiceDetailTemplate (Cat 2-4f Phase 1 v2). Source content preserved.
// TODO: confirm CTA lead name + role + photo placeholder before publish.

import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export default function TechnologyStrategy() {
  return (
    <ServiceDetailTemplate
      hubName="Strategy & Advisory"
      hubSlug="strategy-advisory-hub"
      hubHref="/capabilities/technology/strategy-advisory-hub"
      serviceName="Technology Strategy"
      serviceSlug="technology-strategy"
      heroSubtitle="A technology strategy is only as real as the decisions it produces. We build the vision, the principles sharp enough to decide trade-offs, the target architecture that hangs together, and the governance operating model that turns the strategy into a body of executed work — not a deck that ages on the shared drive."
      heroImage="/solution-enterprise-transformation.0a0f2624.webp"
      experienceStats={[
        { number: "60-80%", label: "Compression in architectural review cycles" },
        { number: "3 yrs", label: "Strategy still being invoked after we leave" },
        // TODO: confirm stat with practice lead before publish
        { number: "5-yr", label: "Written technology vision expressed in business outcomes" },
        // TODO: confirm stat with practice lead before publish
        { number: "Quarterly", label: "Refresh cadence keeps strategy a living document" },
      ]}
      challenge="Stop confusing a technology deck with a technology strategy. Start running a body of decisions. Most strategies fail because they describe the future without the principles, governance, and refresh cadence that would let leadership defend trade-offs at the next quarterly review."
      opportunity="We start where every defensible technology strategy starts — with a sharp read on the business strategy itself, then a written vision, principles sharp enough to decide trade-offs, a target architecture, and the governance operating model that turns the strategy into executed work."
      approachPillars={[
        {
          step: "01",
          title: "Diagnose the Business & Set Vision",
          body: "Customer commitments, growth thesis, M&A posture, regulatory constraints, and operating model on one side. Current technology estate, talent bench, vendor footprint, and architecture posture on the other. From the diagnostic comes a written five-year technology vision expressed in business outcomes, anchored to a small set of architectural and operating principles deliberately sharp enough to settle trade-offs.",
        },
        {
          step: "02",
          title: "Architect the Target & Sequence the Roadmap",
          body: "The vision and principles get rendered into a target architecture — platform stack, integration model, data ownership, security and observability fabric, and the build-versus-buy posture per capability. The roadmap sequences the move in business-readable waves with investment, dependencies, and the recognizable capability outcome at each wave end.",
        },
        {
          step: "03",
          title: "Govern Decisions & Refresh Strategy",
          body: "Strategy without governance is theater. We design the architecture review board, investment committee, principal engineer council, and vendor management cadence with written decision rights — then embed the quarterly refresh so the strategy stays current as the business changes.",
        },
      ]}
      outcomes={[
        "Reconciled diagnostic of business strategy, current technology estate, talent bench, vendor footprint, and architecture posture — with a clear read on what to keep, retire, build, and buy.",
        "Written five-year technology vision expressed in business outcomes, anchored to a small set of deliberately sharp architectural and operating principles.",
        "Target-state architecture covering platform stack, integration model, data ownership, security and observability fabric, and the build-versus-buy posture per capability.",
        "Sequenced multi-year roadmap organized in business-readable waves, each wave anchored to a recognizable capability outcome with investment, dependencies, and risk profile.",
        "Governance and decision-rights framework — architecture review board, investment committee, principal engineer council, and vendor management cadence with written decision rights.",
        "Production-grade executive technology dashboard for the CIO, CTO, and executive committee — principle adherence, roadmap progress, investment burn, vendor concentration.",
      ]}
      featuredCases={[
        {
          slug: "consulting-knowledge-management",
          title: "CIO advisory rebuilds a five-year technology strategy that survives a CEO transition",
          industry: "Industrial Distribution",
          metric: "CEO-proof",
          image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1600&q=80",
        },
        {
          slug: "insurance-claims-processing",
          title: "Decision-rights redesign cuts architectural review backlog from 14 weeks to 9 days",
          industry: "Specialty Insurance",
          metric: "14w → 9d",
          image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1600&q=80",
        },
      ]}
      relatedServices={[
        { slug: "technology-due-diligence", name: "Technology Due Diligence", href: "/capabilities/technology/technology-due-diligence" },
        { slug: "cost-optimization", name: "Cost Optimization", href: "/capabilities/technology/cost-optimization" },
        { slug: "security-compliance", name: "Security & Compliance", href: "/capabilities/technology/security-compliance" },
      ]}
      ctaLeadName="Talk to our Strategy & Advisory lead"
    />
  );
}
