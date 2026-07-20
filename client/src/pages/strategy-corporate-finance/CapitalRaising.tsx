
import CapabilityHubTemplate from "@/components/CapabilityHubTemplate";

export default function CapitalRaising() {
  return (
    <CapabilityHubTemplate
      hubName="Capital Raising & Investment"
      slug="capital-raising"
      heroSubtitle="Secure the funding you need to grow. We help you access debt, equity, and alternative financing sources on optimal terms — and prepare your business to win the conversation."
      heroImage="/images/industries/deal-handshake.jpg"
      experienceStats={[
        { number: "90%", label: "of mandated raises closed at or above target" },
        { number: "75+", label: "Successful fundraising transactions completed for growing companies" },
        { number: "30%", label: "Average improvement in terms achieved versus initial offers through our negotiation" },
        { number: "Investor-ready", label: "Diligence packages and pitch materials built to close" },
      ]}
      ambitions={[
        {
          title: "Raise growth equity on the right terms",
          description:
            "Find PE, VC, or strategic partners who fit the next chapter — and structure deals that fund the plan without giving away the future of the business.",
        },
        {
          title: "Optimize the debt stack",
          description:
            "Refinance, lever up, or restructure cleanly. Bank debt, asset-based lending, and alternative structures negotiated to minimize cost of capital and preserve flexibility.",
        },
        {
          title: "Get investor-ready before you go to market",
          description:
            "Clean financials, a credible business plan, and a pitch deck that survives diligence — so the first call with investors is the start of a process, not a fishing expedition.",
        },
        {
          title: "Build durable investor relationships",
          description:
            "Move from transactional updates to a real IR rhythm — reporting, milestones, and the kind of communication that builds confidence with current and prospective backers.",
        },
        {
          title: "Free trapped working capital",
          description:
            "Unlock cash already inside the business through receivables, payables, and inventory work — and reduce the size of the external raise you actually need.",
        },
        {
          title: "Tap non-dilutive funding",
          description:
            "Identify and secure grants, tax credits, and development programs that fund growth without taking equity or adding debt to the cap table.",
        },
      ]}
      howWeCanHelp={[
        {
          title: "Equity Financing",
          description:
            "Raise growth capital through private equity, venture capital, or strategic investors. We help you find the right partners and structure optimal deals.",
          href: "/capabilities/strategy-corporate-finance/capital-raising/equity-financing",
        },
        {
          title: "Debt Financing",
          description:
            "Access bank loans, asset-based lending, and alternative debt structures. We negotiate terms that preserve flexibility and minimize cost of capital.",
          href: "/capabilities/strategy-corporate-finance/capital-raising/debt-financing",
        },
        {
          title: "Investment Readiness",
          description:
            "Prepare your business for investor scrutiny. Financial clean-up, business plan development, and pitch deck creation that resonates.",
          href: "/capabilities/strategy-corporate-finance/capital-raising/investment-readiness",
        },
        {
          title: "Investor Relations",
          description:
            "Build and maintain relationships with current and prospective investors. Regular reporting, communication strategies, and stakeholder management.",
          href: "/capabilities/strategy-corporate-finance/capital-raising/investor-relations",
        },
        {
          title: "Working Capital Optimization",
          description:
            "Unlock cash trapped in your business. Improve receivables, manage payables, and optimize inventory to reduce external funding needs.",
          href: "/capabilities/strategy-corporate-finance/capital-raising/working-capital-optimization",
        },
        {
          title: "Grant & Incentive Programs",
          description:
            "Access non-dilutive funding through government grants, tax incentives, and development programs. We identify and help you secure available opportunities.",
          href: "/capabilities/strategy-corporate-finance/capital-raising/grant-incentive-programs",
        },
      ]}
      ambitionsCTAText="Talk to us about your Capital Raising & Investment ambition →"
      thoughtLeadership={[]}
      approachPillars={[
        {
          step: "01",
          title: "Assess and strategize",
          body: "We evaluate your capital needs, assess your investment readiness, and develop a financing strategy that aligns with your business objectives and risk tolerance.",
        },
        {
          step: "02",
          title: "Prepare and position",
          body: "We prepare compelling investment materials, clean up financials, and position your business to attract the right investors and lenders on favorable terms.",
        },
        {
          step: "03",
          title: "Execute and close",
          body: "We manage the fundraising process, facilitate due diligence, negotiate terms, and guide you through closing to ensure a successful transaction.",
        },
      ]}
      featuredCases={[
        { slug: "capital-raise-series-b", title: "Raising a growth round on stronger terms", industry: "Technology, Media & Telecom", metric: "1.3x", image: "/images/cases/capital-raise-series-b-hero.jpg" },
        { slug: "pe-industrial-transformation", title: "How a Fund Added Seven Points of EBITDA Margin at an Industrial Manufacturer", industry: "Private Equity", metric: "7 pts EBITDA margin", image: "/images/cases/pe-industrial-transformation-hero.jpg" },
        { slug: "bank-cross-sell", title: "Turning single accounts into real relationships", industry: "Financial Services", metric: "40% more products per customer", image: "/images/cases/bank-cross-sell-hero.jpg" },
      ]}
      relatedCapabilities={[
        { href: "/capabilities/strategy-corporate-finance/cfo-services", name: "Fractional CFO Services" },
        { href: "/capabilities/strategy-corporate-finance/ma-partnerships", name: "M&A & Strategic Partnerships" },
        { href: "/capabilities/strategy-corporate-finance/business-strategy", name: "Business Strategy & Transformation" },
      ]}
      ctaLeadName="Talk to our Capital Raising & Investment lead"
    />
  );
}
