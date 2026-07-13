import IndustryCapabilityTemplate from "@/components/IndustryCapabilityTemplate";

const cases = [
  {
    slug: "bank-process-automation",
    title: "How RPA eliminated 10,000+ hours of manual work at a major bank",
    industry: "Financial Services",
    metric: "10K+ hrs",
    image: "/images/industries/aero-astronaut.jpg",
  },
  {
    slug: "consulting-knowledge-management",
    title: "Transforming knowledge management for a global consulting firm",
    industry: "Professional Services",
    metric: "3x",
    image: "/images/industries/eng-designers.jpg",
  },
  {
    slug: "accounting-audit-automation",
    title: "How audit automation helped an accounting firm scale 2x without hiring",
    industry: "Professional Services",
    metric: "2x",
    image: "/images/industries/ops-monitors-dark.jpg",
  },
];

const related = [
  { name: "Operations Excellence", href: "/industries/aerospace-defense/operations-excellence" },
  { name: "Risk & Resilience", href: "/industries/aerospace-defense/risk-resilience" },
  { name: "Data Transformation", href: "/industries/aerospace-defense/data-transformation" },
];

export default function AerospaceDefenseStrategyGrowth() {
  return (
    <IndustryCapabilityTemplate
      industry="Aerospace & Defense"
      industrySlug="aerospace-defense"
      capability="Strategy & Growth"
      capabilitySlug="strategy-growth"
      heroSubtitle="The budget is shifting toward space, autonomy, and hypersonics while commercial and dual-use entrants rewrite the cost curve. We help A&D primes and challengers decide where to place capital across the program portfolio, build dual-use and international franchise plays, and reshape the operating model for a faster, software-defined fight."
      heroImage="/images/industries/aero-astronaut.jpg"
      heroFocal="60% 50%"
      perspective={{
        heading: "The next budget cycle rewards the portfolio, not the program.",
        image: "/images/business-strategy-abstract.jpg",
        paragraphs: [
          "Defense spending is tilting toward space, autonomy, hypersonics, and software-defined capability, while venture-backed and commercial-adjacent entrants are winning programs at a cost and cadence legacy primes were not built for. The companies pulling ahead manage a portfolio deliberately — funding the emerging domains, defending the franchises that still pay, and having the discipline to stop feeding programs the budget is quietly leaving behind.",
          "We help you make those calls with conviction: where to place capital and bid-and-proposal dollars, how to build dual-use and commercial-off-the-shelf models that sell the same capability to DoD, allied governments, and commercial buyers, and how to reshape an operating model so a faster, software-defined business is not simply bolted onto a hardware prime built for decade-long programs.",
        ],
      }}
      offeringsHeading="How we build strategy and growth for aerospace and defense."
      offeringsIntro="Each capability is a working system, delivered by the team that will help you run it."
      offerings={[
        {
          title: "Growth Strategy",
          description:
            "Decide where to place capital and B&P across space, autonomy, hypersonics, and legacy franchises — and where to stop feeding programs the budget is leaving behind.",
          href: "/capabilities/strategy-corporate-finance/business-strategy/growth-strategy",
        },
        {
          title: "Business Model Innovation",
          description:
            "Build the dual-use and commercial-off-the-shelf models that let you sell the same capability to DoD, allied governments, and commercial buyers.",
          href: "/capabilities/strategy-corporate-finance/business-strategy/business-model-innovation",
        },
        {
          title: "Strategic Planning",
          description:
            "Turn the portfolio choice into a funded roadmap of IRAD, capture, and capacity that survives a continuing resolution.",
          href: "/capabilities/strategy-corporate-finance/business-strategy/strategic-planning",
        },
        {
          title: "Organizational Transformation",
          description:
            "Reshape the operating model so a software-defined, faster-moving business is not bolted onto a hardware prime built for decade-long programs.",
          href: "/capabilities/strategy-corporate-finance/business-strategy/organizational-transformation",
        },
        {
          title: "Digital Strategy",
          description:
            "Define the software, autonomy, and data propositions that move you up the value chain from building the platform to owning the capability.",
          href: "/capabilities/strategy-corporate-finance/business-strategy/digital-strategy",
        },
        {
          title: "Turnaround & Restructuring",
          description:
            "Fix or exit the underwater fixed-price development programs before they consume the margin the growth bets need.",
          href: "/capabilities/strategy-corporate-finance/business-strategy/turnaround-restructuring",
        },
      ]}
      stats={[
        { number: "3 horizons", label: "of program portfolio balanced across core, adjacent, and emerging domains" },
        { number: "2x", label: "faster capture cycle on dual-use and commercial-adjacent bids" },
        { number: "Top 5", label: "primes and new-entrant challengers advised on where to play" },
      ]}
      casesHeading="Strategy and growth, proved in outcomes."
      cases={cases}
      relatedHeading="Adjacent work for Aerospace & Defense leaders."
      related={related}
      generalPractice={{
        label: "Explore our firm-wide Strategy & Corporate Finance practice",
        href: "/capabilities/strategy-corporate-finance",
      }}
      cta={{
        heading: "Win the next cycle, not the last one.",
        body: "Tell us where the portfolio question is — a new domain, a dual-use play, a program bleeding margin. Our Aerospace & Defense strategy team will read your note and come back within two business days with a concrete first move, not a sales pitch.",
      }}
    />
  );
}
