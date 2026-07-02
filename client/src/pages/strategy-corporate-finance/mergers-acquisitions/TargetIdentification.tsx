// TODO: confirm with practice lead before publish — experience stats, challenge, opportunity, approach pillars, outcomes, related services, and CTA lead name for Target Identification.

import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export default function StrategyCorporateFinanceMergersAcquisitionsTargetIdentification() {
  return (
    <ServiceDetailTemplate
      hubName="Mergers & Acquisitions"
      hubSlug="strategy-corporate-finance/mergers-acquisitions"
      hubHref="/capabilities/strategy-corporate-finance/mergers-acquisitions"
      serviceName="Target Identification"
      serviceSlug="target-identification"
      heroSubtitle="Systematic screening and evaluation of potential targets. Market mapping, competitor analysis, and opportunity assessment."
      heroImage="/images/industries/deal-handshake.jpg"
      experienceStats={[
        { number: "100+", label: "Mergers & Acquisitions engagements delivered for mid-market and growth companies" },
        { number: "20-40%", label: "Typical performance improvement captured within the first 12 months" },
        { number: "8-16 wks", label: "Time to first measurable impact in a focused workstream" },
        { number: "Embedded", label: "Capability transfer at every engagement" },
      ]}
      challenge="Leaders know target identification can unlock material value, yet the gap between intent and execution is wide. Legacy processes, fragmented data, and unclear ownership keep performance well below potential — and small fixes rarely move the needle on their own."
      opportunity="A focused target identification program — grounded in Mergers & Acquisitions fundamentals and powered by modern analytics — can sharpen decisions, lift returns, and free working capital. The teams that win treat this as a multi-year capability build, not a one-off project."
      approachPillars={[
        {
          step: "01",
          title: "Diagnose and discover",
          body:
            "We assess your current target identification state — mapping processes, capabilities, data, and gaps. We benchmark against best-in-class peers and quantify the value at stake.",
        },
        {
          step: "02",
          title: "Design and decide",
          body:
            "We co-design a target operating model for target identification — balancing speed, cost, risk, and impact. The blueprint is grounded in your context and built to scale.",
        },
        {
          step: "03",
          title: "Deliver and embed",
          body:
            "We deploy in agile sprints, measuring impact at each step. We build internal Mergers & Acquisitions capability alongside process change so the new way of working sticks long after we leave.",
        },
      ]}
      outcomes={[
        "Clear, executive-ready strategy for target identification aligned to enterprise priorities",
        "Measurable performance gains across cost, growth, risk, and resilience",
        "Stronger leadership ownership and cross-functional governance to sustain results",
        "Internal Mergers & Acquisitions capability uplift that compounds value beyond the engagement",
      ]}
      featuredCases={[
        {
          slug: "consulting-knowledge-management",
          title: "Top-5 Consulting Firm Builds AI Knowledge Platform",
          industry: "Professional Services · Strategy",
          metric: "60%",
          image: "/images/industries/fin-handshake-city.jpg",
        },
        {
          slug: "fintech-payment-automation",
          title: "Fintech Scales Cross-Border Payments With Intelligent Automation",
          industry: "Financial Services · Strategy",
          metric: "5x",
          image: "/images/industries/meeting-topview.jpg",
        },
        {
          slug: "law-firm-contract-automation",
          title: "AmLaw 200 Firm Automates Contract Review Across 12 Practice Areas",
          industry: "Professional Services · Strategy",
          metric: "85%",
          image: "/images/capabilities/cap-aerial-grid.jpg",
        },
      ]}
      relatedServices={[
        { slug: "ma-strategy", name: "M&A Strategy", href: "/capabilities/strategy-corporate-finance/mergers-acquisitions/ma-strategy" },
        { slug: "commercial-due-diligence", name: "Commercial Due Diligence", href: "/capabilities/strategy-corporate-finance/mergers-acquisitions/commercial-due-diligence" },
        { slug: "financial-due-diligence", name: "Financial Due Diligence", href: "/capabilities/strategy-corporate-finance/mergers-acquisitions/financial-due-diligence" },
      ]}
      ctaLeadName="Talk to our Target Identification lead"
    />
  );
}
