
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export default function StrategyCorporateFinanceMergersAcquisitionsPostMergerIntegration() {
  return (
    <ServiceDetailTemplate
      hubName="Mergers & Acquisitions"
      hubSlug="strategy-corporate-finance/mergers-acquisitions"
      hubHref="/capabilities/strategy-corporate-finance/mergers-acquisitions"
      serviceName="Post-Merger Integration"
      serviceSlug="post-merger-integration"
      heroSubtitle="Plan and execute integration to capture synergies. Manage cultural integration and operational alignment."
      heroImage="/images/industries/deal-handshake.jpg"
      experienceStats={[
        { number: "100+", label: "Mergers & Acquisitions engagements delivered for growing companies" },
        { number: "20-40%", label: "Typical performance improvement captured within the first 12 months" },
        { number: "8-16 wks", label: "Time to first measurable impact in a focused workstream" },
        { number: "Embedded", label: "Capability transfer at every engagement" },
      ]}
      challenge="Leaders know post-merger integration can unlock material value, yet the gap between intent and execution is wide. Legacy processes, fragmented data, and unclear ownership keep performance well below potential — and small fixes rarely move the needle on their own."
      opportunity="A focused post-merger integration program — grounded in Mergers & Acquisitions fundamentals and powered by modern analytics — can sharpen decisions, lift returns, and free working capital. The teams that win treat this as a multi-year capability build, not a one-off project."
      approachPillars={[
        {
          step: "01",
          title: "Diagnose and discover",
          body:
            "We assess your current post-merger integration state — mapping processes, capabilities, data, and gaps. We benchmark against best-in-class peers and quantify the value at stake.",
        },
        {
          step: "02",
          title: "Design and decide",
          body:
            "We co-design a target operating model for post-merger integration — balancing speed, cost, risk, and impact. The blueprint is grounded in your context and built to scale.",
        },
        {
          step: "03",
          title: "Deliver and embed",
          body:
            "We deploy in agile sprints, measuring impact at each step. We build internal Mergers & Acquisitions capability alongside process change so the new way of working sticks long after we leave.",
        },
      ]}
      outcomes={[
        "Clear, executive-ready strategy for post-merger integration aligned to enterprise priorities",
        "Measurable performance gains across cost, growth, risk, and resilience",
        "Stronger leadership ownership and cross-functional governance to sustain results",
        "Internal Mergers & Acquisitions capability uplift that compounds value beyond the engagement",
      ]}
      featuredCases={[
        { slug: "financial-fraud-detection", title: "Catching card fraud before the money moves", industry: "Financial Services", metric: "73%", image: "/images/industries/fin-monitors.jpg" },
        { slug: "insurance-claims-automation", title: "Settling straightforward claims in hours, not weeks", industry: "Insurance", metric: "60%", image: "/case-insurance-claims.399e5d4b.jpg" },
      ]}
      relatedServices={[
        { slug: "ma-strategy", name: "M&A Strategy", href: "/capabilities/strategy-corporate-finance/mergers-acquisitions/ma-strategy" },
        { slug: "target-identification", name: "Target Identification", href: "/capabilities/strategy-corporate-finance/mergers-acquisitions/target-identification" },
        { slug: "commercial-due-diligence", name: "Commercial Due Diligence", href: "/capabilities/strategy-corporate-finance/mergers-acquisitions/commercial-due-diligence" },
      ]}
      ctaLeadName="Talk to our Post-Merger Integration lead"
    />
  );
}
