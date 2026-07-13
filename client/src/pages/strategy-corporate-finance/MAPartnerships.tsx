
import CapabilityHubTemplate from "@/components/CapabilityHubTemplate";

export default function MAPartnerships() {
  return (
    <CapabilityHubTemplate
      hubName="M&A & Strategic Partnerships"
      slug="ma-partnerships"
      heroSubtitle="Navigate complex transactions with confidence. From target identification to post-merger integration — and the joint ventures, alliances, and partnerships that unlock growth without a full acquisition."
      heroImage="/images/industries/deal-handshake.jpg"
      experienceStats={[
        { number: "50+", label: "M&A transactions completed for growing companies across diverse industries" },
        { number: "50+", label: "buy-side and sell-side deals advised" },
        { number: "85%", label: "Of our acquisitions achieve or exceed projected synergy targets within 24 months" },
        { number: "Deals & alliances", label: "Acquisitions, JVs, and partnerships across the growth toolkit" },
      ]}
      ambitions={[
        {
          title: "Make M&A a repeatable capability",
          description:
            "Move beyond opportunistic deals to a programmatic M&A engine — clear thesis, target pipeline, and integration muscle that compounds over time.",
        },
        {
          title: "Find the right target, not the available one",
          description:
            "Systematic market mapping and screening so the deal you do is the deal that actually fits the strategy — not the one a banker happened to pitch.",
        },
        {
          title: "Diligence the deal-breakers early",
          description:
            "Financial, operational, and commercial diligence designed to surface real risks fast — and convert them into negotiation leverage or walk-away signals.",
        },
        {
          title: "Structure deals that protect value",
          description:
            "Negotiate terms, contingencies, earnouts, and reps & warranties that allocate risk fairly — and don't show up as surprises in the first 90 days post-close.",
        },
        {
          title: "Capture the synergies you paid for",
          description:
            "Integration playbooks built before signing, with owners, milestones, and a 100-day plan that turns the synergy case into operating reality.",
        },
        {
          title: "Build alliances when M&A isn't the answer",
          description:
            "Joint ventures, licensing deals, and strategic partnerships structured for shared upside — accessing capability without taking on the burden of full ownership.",
        },
      ]}
      howWeCanHelp={[
        {
          title: "M&A Strategy",
          description:
            "Define your acquisition strategy aligned with corporate objectives. Identify target profiles, set valuation parameters, and develop integration playbooks.",
          href: "/capabilities/strategy-corporate-finance/ma-partnerships/ma-strategy",
        },
        {
          title: "Target Identification",
          description:
            "Systematic search for acquisition targets that fit your strategic criteria. Market mapping, competitor analysis, and opportunity screening.",
          href: "/capabilities/strategy-corporate-finance/ma-partnerships/target-identification",
        },
        {
          title: "Due Diligence",
          description:
            "Comprehensive financial, operational, and commercial due diligence. Identify risks, validate assumptions, and uncover hidden value.",
          href: "/capabilities/strategy-corporate-finance/ma-partnerships/due-diligence",
        },
        {
          title: "Deal Structuring",
          description:
            "Structure transactions that protect your interests and optimize outcomes. Negotiate terms, manage contingencies, and close successfully.",
          href: "/capabilities/strategy-corporate-finance/ma-partnerships/deal-structuring",
        },
        {
          title: "Post-Merger Integration",
          description:
            "Capture the value you paid for. Integration planning, synergy realization, and change management to ensure successful combinations.",
          href: "/capabilities/strategy-corporate-finance/ma-partnerships/post-merger-integration",
        },
        {
          title: "Strategic Partnerships",
          description:
            "Build alliances that accelerate growth. Joint ventures, licensing agreements, and strategic partnerships structured for mutual success.",
          href: "/capabilities/strategy-corporate-finance/ma-partnerships/strategic-partnerships",
        },
      ]}
      ambitionsCTAText="Talk to us about your M&A & Strategic Partnerships ambition →"
      thoughtLeadership={[]}
      approachPillars={[
        {
          step: "01",
          title: "Strategy and targeting",
          body: "We define your M&A strategy, develop target criteria, and systematically identify opportunities that align with your strategic objectives and value creation thesis.",
        },
        {
          step: "02",
          title: "Diligence and valuation",
          body: "We conduct comprehensive due diligence across financial, operational, and commercial dimensions. We build robust valuation models and identify deal-breakers early.",
        },
        {
          step: "03",
          title: "Execution and integration",
          body: "We support negotiations, manage the transaction process, and develop integration plans that capture synergies and minimize disruption to ongoing operations.",
        },
      ]}
      featuredCases={[
        { slug: "pe-healthcare-diligence", title: "Cutting healthcare diligence time by 40%", industry: "Private Equity", metric: "40%", image: "/images/capabilities/cap-conference-data.jpg" },
        { slug: "pe-distribution-digital", title: "Standing up a carved-out distributor in six months", industry: "Private Equity", metric: "6 Months", image: "/images/industries/skyscraper.jpg" },
        { slug: "capital-raise-series-b", title: "Raising a growth round on stronger terms", industry: "Technology, Media & Telecom", metric: "1.3x", image: "/images/industries/deal-handshake.jpg" },
      ]}
      relatedCapabilities={[
        { href: "/capabilities/strategy-corporate-finance/mergers-acquisitions", name: "Mergers & Acquisitions Advisory" },
        { href: "/capabilities/strategy-corporate-finance/business-strategy", name: "Business Strategy & Transformation" },
        { href: "/capabilities/strategy-corporate-finance/capital-raising", name: "Capital Raising & Investment" },
      ]}
      ctaLeadName="Talk to our M&A & Strategic Partnerships lead"
    />
  );
}
