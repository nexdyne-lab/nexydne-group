// TODO: David — confirm M&A & Strategic Partnerships experience & impact numbers with practice lead before publish.
// TODO: David — populate 2-3 thought-leadership insights for the M&A & Strategic Partnerships hub.
// TODO: confirm hero image asset — using fallback Unsplash URL until /images/ma-partnerships-abstract.jpg lands.

import CapabilityHubTemplate from "@/components/CapabilityHubTemplate";

export default function MAPartnerships() {
  return (
    <CapabilityHubTemplate
      hubName="M&A & Strategic Partnerships"
      slug="ma-partnerships"
      heroSubtitle="Navigate complex transactions with confidence. From target identification to post-merger integration — and the joint ventures, alliances, and partnerships that unlock growth without a full acquisition."
      heroImage="/images/industries/deal-handshake.jpg"
      experienceStats={[
        { number: "50+", label: "M&A transactions completed for mid-market companies across diverse industries" },
        { number: "$750M+", label: "Total transaction value advised on buy-side and sell-side engagements" },
        { number: "85%", label: "Of our acquisitions achieve or exceed projected synergy targets within 24 months" },
        // TODO: confirm with practice lead before publish
        { number: "Deals & alliances", label: "Acquisitions, JVs, and partnerships across the growth toolkit" },
      ]}
      // TODO: confirm ambition copy with practice lead before publish
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
        { slug: "pe-industrial-transformation", title: "Adding $18M in EBITDA at an industrial manufacturer", industry: "Private Equity", metric: "$18M", image: "/images/industries/transport-traffic.jpg" },
        { slug: "bank-cross-sell", title: "Turning single accounts into real relationships", industry: "Financial Services", metric: "$24M", image: "/images/industries/fin-trader.jpg" },
        { slug: "wealth-onboarding", title: "Cutting wealth onboarding from weeks to days", industry: "Financial Services", metric: "60%", image: "/images/industries/fin-handshake-city.jpg" },
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
