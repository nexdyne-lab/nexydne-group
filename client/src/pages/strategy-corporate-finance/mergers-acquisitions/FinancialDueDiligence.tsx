// TODO: confirm with practice lead before publish — experience stats, challenge, opportunity, approach pillars, outcomes, related services, and CTA lead name for Financial Due Diligence.

import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export default function StrategyCorporateFinanceMergersAcquisitionsFinancialDueDiligence() {
  return (
    <ServiceDetailTemplate
      hubName="Mergers & Acquisitions"
      hubSlug="strategy-corporate-finance/mergers-acquisitions"
      hubHref="/capabilities/strategy-corporate-finance/mergers-acquisitions"
      serviceName="Financial Due Diligence"
      serviceSlug="financial-due-diligence"
      heroSubtitle="Rigorous examination of financial statements, quality of earnings, and working capital. Identify risks and opportunities."
      heroImage="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=2400"
      experienceStats={[
        { number: "100+", label: "Mergers & Acquisitions engagements delivered for mid-market and growth companies" },
        { number: "20-40%", label: "Typical performance improvement captured within the first 12 months" },
        { number: "8-16 wks", label: "Time to first measurable impact in a focused workstream" },
        { number: "Embedded", label: "Capability transfer at every engagement" },
      ]}
      challenge="Leaders know financial due diligence can unlock material value, yet the gap between intent and execution is wide. Legacy processes, fragmented data, and unclear ownership keep performance well below potential — and small fixes rarely move the needle on their own."
      opportunity="A focused financial due diligence program — grounded in Mergers & Acquisitions fundamentals and powered by modern analytics — can sharpen decisions, lift returns, and free working capital. The teams that win treat this as a multi-year capability build, not a one-off project."
      approachPillars={[
        {
          step: "01",
          title: "Diagnose and discover",
          body:
            "We assess your current financial due diligence state — mapping processes, capabilities, data, and gaps. We benchmark against best-in-class peers and quantify the value at stake.",
        },
        {
          step: "02",
          title: "Design and decide",
          body:
            "We co-design a target operating model for financial due diligence — balancing speed, cost, risk, and impact. The blueprint is grounded in your context and built to scale.",
        },
        {
          step: "03",
          title: "Deliver and embed",
          body:
            "We deploy in agile sprints, measuring impact at each step. We build internal Mergers & Acquisitions capability alongside process change so the new way of working sticks long after we leave.",
        },
      ]}
      outcomes={[
        "Clear, executive-ready strategy for financial due diligence aligned to enterprise priorities",
        "Measurable performance gains across cost, growth, risk, and resilience",
        "Stronger leadership ownership and cross-functional governance to sustain results",
        "Internal Mergers & Acquisitions capability uplift that compounds value beyond the engagement",
      ]}
      featuredCases={[
        {
          slug: "accounting-audit-automation",
          title: "Accounting Firm Cuts Audit Cycle Time By Half With Workflow Automation",
          industry: "Financial Services · Strategy",
          metric: "50%",
          image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1600&q=80",
        },
        {
          slug: "law-firm-contract-automation",
          title: "AmLaw 200 Firm Automates Contract Review Across 12 Practice Areas",
          industry: "Professional Services · Strategy",
          metric: "85%",
          image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1600&q=80",
        },
      ]}
      relatedServices={[
        { slug: "ma-strategy", name: "M&A Strategy", href: "/capabilities/strategy-corporate-finance/mergers-acquisitions/ma-strategy" },
        { slug: "target-identification", name: "Target Identification", href: "/capabilities/strategy-corporate-finance/mergers-acquisitions/target-identification" },
        { slug: "commercial-due-diligence", name: "Commercial Due Diligence", href: "/capabilities/strategy-corporate-finance/mergers-acquisitions/commercial-due-diligence" },
      ]}
      ctaLeadName="Talk to our Financial Due Diligence lead"
    />
  );
}
