
import CapabilityHubTemplate from "@/components/CapabilityHubTemplate";

export default function GrowthStrategy() {
  return (
    <CapabilityHubTemplate
      hubName="Growth Strategy"
      slug="growth-strategy"
      insightsTopic="growth"
      heroSubtitle="Identify and capture new opportunities. We help you define where to play and how to win, from market entry to portfolio optimization."
      heroImage="/images/capabilities/cap-mobile-woman.jpg"
      heroFocal="50% 45%"
      experienceStats={[
        { number: "120+", label: "growth strategy engagements over the past decade" },
        { number: "15-25%", label: "typical revenue growth acceleration" },
        { number: "10-20%", label: "EBITDA improvement through portfolio optimization" },
        { number: "Senior-led", label: "Every engagement led by a partner with deep practitioner experience" },
      ]}
      ambitions={[
        {
          title: "Sharpen the growth strategy thesis",
          description:
            "Make clear, evidence-based choices about where growth strategy can move the needle for the business — and where it cannot. Stop spreading effort across too many fronts.",
        },
        {
          title: "Translate intent into a measurable system",
          description:
            "Move beyond a deck. Build the operating model, KPIs, and cadence that turn growth strategy ambitions into quarterly outcomes you can actually defend.",
        },
        {
          title: "Reach the customer with one voice",
          description:
            "Align brand, product, and commercial teams around a single view of the customer so every growth strategy touchpoint reinforces the same value promise.",
        },
        {
          title: "Compound the data advantage",
          description:
            "Instrument growth strategy so each campaign, account, and decision feeds the next one — building a proprietary asset that competitors cannot copy from a vendor.",
        },
        {
          title: "Modernise the growth strategy tech and talent stack",
          description:
            "Invest in the platforms, partners, and people that match the next stage of the business — not the one you grew up in.",
        },
        {
          title: "Prove the ROI conversation in the boardroom",
          description:
            "Connect growth strategy investment to revenue, margin, and customer-equity outcomes the CEO and CFO will fund in the next planning cycle.",
        },
      ]}
      howWeCanHelp={[
        {
          title: "Market Entry Strategy",
          description:
            "Evaluate new market opportunities and develop entry strategies. Assess market attractiveness, competitive dynamics, and required capabilities for successful expansion.",
          href: "/capabilities/growth-marketing-sales/growth-strategy/market-entry-strategy",
        },
        {
          title: "Go-to-Market Strategy",
          description:
            "Design and execute go-to-market strategies that reach customers effectively. Optimize channel mix, pricing, and value propositions for maximum impact.",
          href: "/capabilities/growth-marketing-sales/growth-strategy/go-to-market-strategy",
        },
        {
          title: "Portfolio Optimization",
          description:
            "Optimize your product and service portfolio for growth and profitability. Identify opportunities to expand, rationalize, or reposition offerings.",
          href: "/capabilities/growth-marketing-sales/growth-strategy/portfolio-optimization",
        },
        {
          title: "Organic Growth",
          description:
            "Accelerate organic growth through customer acquisition, retention, and expansion. Build sustainable growth engines that compound over time.",
          href: "/capabilities/growth-marketing-sales/growth-strategy/organic-growth",
        },
        {
          title: "M&A Growth Strategy",
          description:
            "Identify and evaluate acquisition targets that accelerate your growth strategy. Develop integration plans that capture synergies and drive value.",
          href: "/capabilities/growth-marketing-sales/growth-strategy/manda-growth-strategy",
        },
        {
          title: "Growth Analytics",
          description:
            "Build analytics capabilities that identify growth opportunities and track performance. Use data to optimize resource allocation and investment decisions.",
          href: "/capabilities/growth-marketing-sales/growth-strategy/growth-analytics",
        },
      ]}
      ambitionsCTAText="Talk to us about your Growth Strategy ambition →"
      thoughtLeadership={[]}
      approachPillars={[
        {
          step: "01",
          title: "Define where to play",
          body: "We help you identify the most attractive markets and segments—analyzing competitive dynamics, customer needs, and your unique capabilities to determine where you can win.",
        },
        {
          step: "02",
          title: "Determine how to win",
          body: "We develop differentiated value propositions and go-to-market strategies that leverage your strengths, creating sustainable competitive advantage in your chosen markets.",
        },
        {
          step: "03",
          title: "Execute with precision",
          body: "We build the organizational capabilities, processes, and metrics needed to execute your growth strategy—ensuring alignment across sales, marketing, and product teams.",
        },
      ]}
      featuredCases={[
        { slug: "bank-cross-sell", title: "Turning single accounts into real relationships", industry: "Financial Services", metric: "$24M", image: "/images/industries/fin-trader.jpg" },
        { slug: "media-streaming-launch", title: "Launching a streaming service that won 750K subscribers", industry: "Technology, Media & Telecom", metric: "750K", image: "/images/industries/tech-datacenter.jpg" },
        { slug: "telecom-customer-experience", title: "Cutting a regional carrier's churn by 40%", industry: "Technology, Media & Telecom", metric: "40%", image: "/images/capabilities/cap-iot-network.jpg" },
      ]}
      relatedCapabilities={[
        { href: "/capabilities/strategy-corporate-finance", name: "Strategy & Corporate Finance" },
        { href: "/capabilities/business-building", name: "Business Building" },
        { href: "/capabilities/operations", name: "Operations" },
      ]}
      ctaLeadName="Talk to our Growth Strategy lead"
    />
  );
}
