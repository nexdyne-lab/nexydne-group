
import CapabilityHubTemplate from "@/components/CapabilityHubTemplate";

export default function MergersAcquisitions() {
  return (
    <CapabilityHubTemplate
      hubName="Mergers & Acquisitions Advisory"
      slug="mergers-acquisitions"
      heroSubtitle="Navigate complex transactions with expert guidance. From target identification and valuation to negotiation and post-merger integration — disciplined deal work that captures the value you paid for."
      heroImage="/images/industries/deal-handshake.jpg"
      experienceStats={[
        { number: "50+", label: "M&A transactions advised to close" },
        { number: "30+", label: "M&A transactions completed for growing companies" },
        { number: "90%", label: "Synergy capture rate through disciplined integration planning" },
        { number: "Buy & sell side", label: "End-to-end advisory across the full transaction lifecycle" },
      ]}
      ambitions={[
        {
          title: "Build a defensible M&A thesis",
          description:
            "Anchor every deal in a clear strategic logic — targets, synergies, and value creation hypotheses your board and investors can stand behind.",
        },
        {
          title: "Find the right targets, not just available ones",
          description:
            "Systematically map markets and screen opportunities so you negotiate from a curated shortlist instead of chasing whatever banker pitch lands in the inbox.",
        },
        {
          title: "Run diligence that catches the real risks",
          description:
            "Commercial, financial, operational, and tech diligence that surfaces deal-breakers early — and turns lessons into integration-day priorities.",
        },
        {
          title: "Negotiate value, not just price",
          description:
            "Structure deals that protect downside, share upside fairly, and account for the working capital, earnouts, and reps & warranties that quietly move outcomes.",
        },
        {
          title: "Capture the synergies you underwrote",
          description:
            "Integration playbooks built before close, with owners, timelines, and tracking — so the synergy case becomes operating reality rather than a memory.",
        },
        {
          title: "Exit on your terms",
          description:
            "Position the business, manage the process, and select the buyer who pays for what's actually being sold — protecting employees, customers, and your legacy.",
        },
      ]}
      howWeCanHelp={[
        {
          title: "M&A Strategy",
          description:
            "Define your acquisition strategy aligned with corporate objectives. Identify the right targets and optimal deal structures.",
          href: "/capabilities/strategy-corporate-finance/mergers-acquisitions/ma-strategy",
        },
        {
          title: "Target Identification",
          description:
            "Systematic screening and evaluation of potential targets. Market mapping, competitor analysis, and opportunity assessment.",
          href: "/capabilities/strategy-corporate-finance/mergers-acquisitions/target-identification",
        },
        {
          title: "Commercial Due Diligence",
          description:
            "Deep-dive analysis of target's market position, customers, and growth potential. Validate the investment thesis.",
          href: "/capabilities/strategy-corporate-finance/mergers-acquisitions/commercial-due-diligence",
        },
        {
          title: "Financial Due Diligence",
          description:
            "Rigorous examination of financial statements, quality of earnings, and working capital. Identify risks and opportunities.",
          href: "/capabilities/strategy-corporate-finance/mergers-acquisitions/financial-due-diligence",
        },
        {
          title: "Valuation & Deal Structuring",
          description:
            "Determine fair value and optimal deal structure. Model synergies and negotiate terms that protect your interests.",
          href: "/capabilities/strategy-corporate-finance/mergers-acquisitions/valuation-deal-structuring",
        },
        {
          title: "Post-Merger Integration",
          description:
            "Plan and execute integration to capture synergies. Manage cultural integration and operational alignment.",
          href: "/capabilities/strategy-corporate-finance/mergers-acquisitions/post-merger-integration",
        },
      ]}
      ambitionsCTAText="Talk to us about your Mergers & Acquisitions ambition →"
      thoughtLeadership={[]}
      approachPillars={[
        {
          step: "01",
          title: "Strategize and screen",
          body: "We help you define your M&A strategy, identify potential targets, and evaluate opportunities against your strategic objectives and risk tolerance.",
        },
        {
          step: "02",
          title: "Diligence and negotiate",
          body: "We conduct thorough due diligence, build valuation models, and support negotiations to ensure you get the right deal on the right terms.",
        },
        {
          step: "03",
          title: "Integrate and capture",
          body: "We plan and execute post-merger integration to capture synergies, align cultures, and realize the full value of the transaction.",
        },
      ]}
      featuredCases={[
        { slug: "pe-industrial-transformation", title: "Adding $18M in EBITDA at an industrial manufacturer", industry: "Private Equity", metric: "$18M", image: "/images/industries/transport-traffic.jpg" },
        { slug: "bank-cross-sell", title: "Turning single accounts into real relationships", industry: "Financial Services", metric: "$24M", image: "/images/industries/fin-trader.jpg" },
        { slug: "wealth-onboarding", title: "Cutting wealth onboarding from weeks to days", industry: "Financial Services", metric: "60%", image: "/images/industries/fin-handshake-city.jpg" },
      ]}
      relatedCapabilities={[
        { href: "/capabilities/strategy-corporate-finance/ma-partnerships", name: "M&A & Strategic Partnerships" },
        { href: "/capabilities/strategy-corporate-finance/capital-raising", name: "Capital Raising & Investment" },
        { href: "/capabilities/strategy-corporate-finance/business-strategy", name: "Business Strategy & Transformation" },
      ]}
      ctaLeadName="Talk to our Mergers & Acquisitions Advisory lead"
    />
  );
}
