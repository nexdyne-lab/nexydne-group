
import CapabilityHubTemplate from "@/components/CapabilityHubTemplate";

export default function StrategyAdvisoryHub() {
  return (
    <CapabilityHubTemplate
      hubName="Strategy & Advisory"
      slug="technology/strategy-advisory-hub"
      heroSubtitle="Tech strategy, target architecture, due diligence, and cost optimization. We turn the technology agenda into a body of decisions leadership can execute against, not a slide deck that sits on the shelf."
      heroImage="/images/capabilities/cap-aerial-grid.jpg"
      experienceStats={[
        { number: "50+", label: "Technology strategy and advisory engagements delivered for CIO and CTO leadership" },
        { number: "~$15M", label: "Operational savings delivered through strategy and cost optimization in the last three years" },
        { number: "20+", label: "Technology due diligence assessments delivered for PE and corporate development teams" },
        { number: "Decision-led", label: "Strategy delivered as a body of executable decisions, not a deck on the shelf" },
      ]}
      ambitions={[
        {
          title: "Set the right tech strategy",
          description:
            "A technology strategy is only as real as the decisions it produces. We build the vision, the principles sharp enough to decide trade-offs, the target architecture that hangs together, and the governance operating model that turns strategy into executed work.",
        },
        {
          title: "Run technology due diligence at deal pace",
          description:
            "Evidence-led technical assessment, integration or value-creation analysis, IC-ready findings, and post-deal advisory — delivered on the timetable a real M&A or PE process actually demands.",
        },
        {
          title: "Get IT cost under control",
          description:
            "Application rationalization, vendor and license consolidation, contract renegotiation, and the operating model that keeps the savings holding into year two — not just a one-time cut that snaps back next budget cycle.",
        },
        {
          title: "Build a defensible target architecture",
          description:
            "An architecture that survives the steering committee — sequenced, costed, and tied to a real business outcome rather than an architectural-purity exercise that the engineering team quietly ignores.",
        },
        {
          title: "Operate technology governance that decides",
          description:
            "Move from architecture review boards that stall decisions to governance that compresses cycle time. Principles, decision rights, escalation paths, and the cadence that actually clears the backlog.",
        },
        {
          title: "Make the CIO agenda investable",
          description:
            "We translate the technology agenda into a portfolio CFO and CEO can actually fund — value cases, sequenced milestones, and the governance that proves return rather than asks for trust.",
        },
      ]}
      ambitionsCTAText="Talk to us about your Strategy & Advisory ambition →"
      howWeCanHelp={[
        {
          title: "Technology Strategy",
          description:
            "Enterprise technology strategy for CIO and CTO leadership — vision, principles, target architecture, and the governance operating model that turns strategy into a body of decisions, not a deck on the shelf.",
          href: "/capabilities/technology/technology-strategy",
        },
        {
          title: "Technology Due Diligence",
          description:
            "Technology due diligence for M&A acquisitions and PE portfolio investments — evidence-led technical assessment, integration or value-creation analysis, IC-ready findings, and post-deal advisory.",
          href: "/capabilities/technology/technology-due-diligence",
        },
        {
          title: "Cost Optimization",
          description:
            "Enterprise IT cost optimization across application rationalization, vendor and license consolidation, contract renegotiation, and the operating model that keeps the savings holding into year two.",
          href: "/capabilities/technology/cost-optimization",
        },
      ]}
      thoughtLeadership={[]}
      approachPillars={[
        {
          step: "01",
          title: "Diagnose the technology agenda",
          body: "We pressure-test the technology agenda with evidence — what is the cost, what is the value, what is the risk, and what would actually be different if we did this. The brief that emerges is short, sharp, and decision-ready.",
        },
        {
          step: "02",
          title: "Architect the decisions",
          body: "We translate the agenda into a portfolio of decisions — target architecture, sequencing, value case, and governance operating model — that leadership can actually fund and the engineering team can actually execute.",
        },
        {
          step: "03",
          title: "Embed the operating model",
          body: "Strategy decays the moment the slide deck lands. We embed the principles, decision rights, and governance cadence that keeps the strategy alive as new options arrive — quarter after quarter.",
        },
      ]}
      featuredCases={[
        { slug: "tech-engineering-transformation", title: "Tripling a software company's release speed", industry: "Technology, Media & Telecom", metric: "3x", image: "/images/capabilities/cap-iot-network.jpg" },
        { slug: "cloud-migration-health-system", title: "Moving core systems to the cloud without disruption", industry: "Healthcare", metric: "35%", image: "/images/industries/tech-datacenter.jpg" },
        { slug: "legacy-core-modernization", title: "Modernizing a legacy core without a big-bang rewrite", industry: "Insurance", metric: "70%", image: "/images/industries/ops-monitors-dark.jpg" },
      ]}
      relatedCapabilities={[
        { href: "/capabilities/operations", name: "Operations" },
        { href: "/capabilities/artificial-intelligence", name: "Artificial Intelligence" },
        { href: "/capabilities/strategy-corporate-finance", name: "Strategy & Corporate Finance" },
      ]}
      ctaLeadName="Talk to our Strategy & Advisory lead"
    />
  );
}
