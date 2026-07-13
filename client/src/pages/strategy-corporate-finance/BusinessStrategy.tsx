
import CapabilityHubTemplate from "@/components/CapabilityHubTemplate";

export default function BusinessStrategy() {
  return (
    <CapabilityHubTemplate
      hubName="Business Strategy & Transformation"
      slug="business-strategy"
      heroSubtitle="Define your path to victory. We help you clarify your vision, identify growth engines, and build the organizational capabilities needed to win in your market."
      heroImage="/images/capabilities/cap-chess.jpg"
      experienceStats={[
        { number: "150+", label: "Strategic transformations led for growing companies across diverse industries" },
        { number: "2.5x", label: "Average revenue growth achieved by clients within 3 years of strategy implementation" },
        { number: "85%", label: "Of our strategic plans are successfully executed, versus industry average of 30%" },
        { number: "End-to-end", label: "Strategy formulation through capability building and execution" },
      ]}
      ambitions={[
        {
          title: "Sharpen where to compete",
          description:
            "Make clear, evidence-based choices about markets, segments, and offerings. Stop spreading resources across too many fronts and concentrate on the battles you can win.",
        },
        {
          title: "Find the next growth engine",
          description:
            "Identify and prioritize adjacent markets, new products, and customer segments that can compound revenue when the core business matures.",
        },
        {
          title: "Reinvent the business model",
          description:
            "Reimagine how you create and capture value — new revenue streams, pricing architectures, and go-to-market motions that fit how customers buy today.",
        },
        {
          title: "Translate strategy into action",
          description:
            "Move beyond strategy decks. Build the governance, KPIs, and accountability structures that turn strategic intent into quarterly execution.",
        },
        {
          title: "Build a digital advantage",
          description:
            "Define a digital roadmap that prioritizes technology investments by business value — not by what looks fashionable in the analyst reports.",
        },
        {
          title: "Restructure for resilience",
          description:
            "Stabilize a stressed business and position it for recovery. Operational triage, capital structure work, and the strategic choices that come after.",
        },
      ]}
      howWeCanHelp={[
        {
          title: "Strategic Planning",
          description:
            "Define your vision, mission, and strategic priorities. Build a roadmap that aligns your organization around clear objectives and measurable outcomes.",
          href: "/capabilities/strategy-corporate-finance/business-strategy/strategic-planning",
        },
        {
          title: "Growth Strategy",
          description:
            "Identify and prioritize growth opportunities. Market expansion, new products, customer segments, and channels that drive sustainable revenue growth.",
          href: "/capabilities/strategy-corporate-finance/business-strategy/growth-strategy",
        },
        {
          title: "Business Model Innovation",
          description:
            "Reimagine how you create and capture value. Explore new revenue models, pricing strategies, and go-to-market approaches.",
          href: "/capabilities/strategy-corporate-finance/business-strategy/business-model-innovation",
        },
        {
          title: "Organizational Transformation",
          description:
            "Restructure for agility and performance. Design organizations that can execute strategy and adapt to changing market conditions.",
          href: "/capabilities/strategy-corporate-finance/business-strategy/organizational-transformation",
        },
        {
          title: "Digital Strategy",
          description:
            "Leverage technology for competitive advantage. Define your digital roadmap and prioritize investments that drive business value.",
          href: "/capabilities/strategy-corporate-finance/business-strategy/digital-strategy",
        },
        {
          title: "Turnaround & Restructuring",
          description:
            "Navigate challenging situations with confidence. Stabilize operations, restructure finances, and position for recovery and growth.",
          href: "/capabilities/strategy-corporate-finance/business-strategy/turnaround-restructuring",
        },
      ]}
      ambitionsCTAText="Talk to us about your Business Strategy & Transformation ambition →"
      thoughtLeadership={[]}
      approachPillars={[
        {
          step: "01",
          title: "Diagnose and discover",
          body: "We conduct rigorous analysis of your market, competitors, customers, and capabilities to build a fact-based foundation for strategic choices.",
        },
        {
          step: "02",
          title: "Design and decide",
          body: "We facilitate strategic choices about where to play and how to win, developing a clear roadmap with prioritized initiatives and resource allocation.",
        },
        {
          step: "03",
          title: "Deploy and deliver",
          body: "We help you translate strategy into action, building organizational capabilities, governance structures, and performance systems that drive execution.",
        },
      ]}
      featuredCases={[
        { slug: "pe-industrial-transformation", title: "Adding $18M in EBITDA at an industrial manufacturer", industry: "Private Equity", metric: "$18M", image: "/images/industries/transport-traffic.jpg" },
        { slug: "bank-cross-sell", title: "Turning single accounts into real relationships", industry: "Financial Services", metric: "$24M", image: "/images/industries/fin-trader.jpg" },
        { slug: "media-streaming-launch", title: "Launching a streaming service that won 750K subscribers", industry: "Technology, Media & Telecom", metric: "750K", image: "/images/industries/tech-datacenter.jpg" },
      ]}
      relatedCapabilities={[
        { href: "/capabilities/strategy-corporate-finance/performance-improvement", name: "Performance Improvement" },
        { href: "/capabilities/strategy-corporate-finance/ma-partnerships", name: "M&A & Strategic Partnerships" },
        { href: "/capabilities/strategy-corporate-finance/cfo-services", name: "Fractional CFO Services" },
      ]}
      ctaLeadName="Talk to our Business Strategy & Transformation lead"
    />
  );
}
