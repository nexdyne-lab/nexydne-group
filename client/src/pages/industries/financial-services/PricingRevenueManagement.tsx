import IndustryCapabilityTemplate from "@/components/IndustryCapabilityTemplate";

const cases = [
  {
    slug: "financial-fraud-detection",
    title: "Catching card fraud before the money moves",
    industry: "Financial Services",
    metric: "73%",
    image: "/images/industries/fin-monitors.jpg",
  },
  {
    slug: "bank-cross-sell",
    title: "Turning single accounts into real relationships",
    industry: "Financial Services",
    metric: "$24M",
    image: "/images/industries/fin-trader.jpg",
  },
  {
    slug: "wealth-onboarding",
    title: "Cutting wealth onboarding from weeks to days",
    industry: "Financial Services",
    metric: "60%",
    image: "/images/industries/fin-handshake-city.jpg",
  },
];

const related = [
  { name: "Customer & Growth Strategy", href: "/industries/financial-services/customer-growth-strategy" },
  { name: "Digital & Data Transformation", href: "/industries/financial-services/digital-data-transformation" },
  { name: "Risk, Compliance & Resilience", href: "/industries/financial-services/risk-compliance-resilience" },
];

export default function FinancialServicesPricingRevenueManagement() {
  return (
    <IndustryCapabilityTemplate
      industry="Financial Services"
      industrySlug="financial-services"
      capability="Pricing & Revenue Management"
      capabilitySlug="pricing-revenue-management"
      heroSubtitle="Fee compression, rate sensitivity, and portfolios priced on gut feel are quietly draining margin at every bank, insurer, and asset manager. We help financial services firms fund performance through disciplined portfolio, fee-structure, and dynamic pricing — tuned to demand, risk, and competition."
      heroImage="/images/ai-powered-finance-abstract.jpg"
      heroFocal="60% 40%"
      perspective={{
        heading: "Price is the fastest margin lever in financial services — and the least managed.",
        image: "/images/industries/advisor-charts.jpg",
        paragraphs: [
          "Most institutions still price on precedent: last year's fee schedule, a relationship manager's discretion, a rate grid nobody has revisited since the last cycle. Meanwhile fee transparency, rate comparison, and low-cost challengers are compressing every one of those lines. The margin is leaking in places the P&L cannot easily see.",
          "We bring pricing and revenue management under one disciplined engine: portfolio and fee-structure analytics, dynamic pricing tuned to demand and risk, and the FP&A and performance rigor to defend net revenue in every review. The point is a pricing capability your commercial and finance teams run every cycle — not a one-off study.",
        ],
      }}
      offeringsHeading="How we build pricing and revenue management for financial services."
      offeringsIntro="From fee-structure design to FP&A rigor, each capability defends net revenue every cycle."
      offerings={[
        {
          title: "Pricing & Monetization Strategy",
          description:
            "Design fee structures and pricing models that hold margin as rates and competition shift.",
          href: "/solutions/business-growth/pricing-monetization-strategy",
        },
        {
          title: "Revenue Operations & Analytics",
          description:
            "See net revenue by product, segment, and relationship — and act on it every cycle.",
          href: "/solutions/business-growth/revenue-operations-analytics",
        },
        {
          title: "Predictive Cash-Flow Modeling",
          description:
            "Model revenue and liquidity forward so pricing decisions get ahead of the cycle.",
          href: "/capabilities/strategy-corporate-finance/ai-powered-finance/predictive-cash-flow-modeling",
        },
        {
          title: "Financial Planning & Analysis",
          description:
            "Bring FP&A rigor to the pricing and portfolio decisions that move the P&L.",
          href: "/capabilities/strategy-corporate-finance/financial-planning-analysis",
        },
        {
          title: "Performance Improvement",
          description:
            "Find and capture the margin that portfolio and fee discipline leave on the table.",
          href: "/capabilities/strategy-corporate-finance/performance-improvement",
        },
        {
          title: "Conversion Optimization",
          description:
            "Lift digital acquisition and conversion so pricing power is not your only lever.",
          href: "/solutions/business-growth/conversion-optimization",
        },
      ]}
      stats={[
        { number: "3–5 pts", label: "of margin recovered through pricing discipline" },
        { number: "Dynamic", label: "pricing tuned to demand, risk, and competition" },
        { number: "90 days", label: "to a defensible net-revenue pricing baseline" },
      ]}
      casesHeading="Pricing and revenue, proved in outcomes."
      cases={cases}
      relatedHeading="Adjacent work for Financial Services leaders."
      related={related}
      generalPractice={{
        label: "Explore our firm-wide Strategy & Corporate Finance practice",
        href: "/capabilities/strategy-corporate-finance",
      }}
      cta={{
        heading: "Stop leaving margin on the table.",
        body: "Tell us where net revenue is leaking — a product, a fee line, a portfolio. Our Financial Services team will read your note and come back within two business days with a concrete first move, not a sales pitch.",
      }}
    />
  );
}
