// TODO: David — confirm Portfolio Optimization experience & impact numbers with practice lead before publish.
// TODO: David — populate 2-3 thought-leadership insights for the Portfolio Optimization hub.
// TODO: confirm ambition copy with practice lead before publish

import CapabilityHubTemplate from "@/components/CapabilityHubTemplate";

export default function PortfolioOptimization() {
  return (
    <CapabilityHubTemplate
      hubName="Portfolio Optimization"
      slug="portfolio-optimization"
      insightsTopic="growth"
      heroSubtitle="Product portfolio strategy, SKU rationalization, and assortment optimization. We help you build portfolios that maximize growth and profitability."
      heroImage="/images/capabilities/cap-conference-data.jpg"
      heroFocal="60% 50%"
      experienceStats={[
        { number: "120+", label: "portfolio optimization projects delivered across industries" },
        { number: "25%", label: "average margin improvement through SKU rationalization" },
        { number: "$200M+", label: "in working capital freed through portfolio simplification" },
        { number: "Senior-led", label: "Every engagement led by a partner with deep practitioner experience" },
      ]}
      // TODO: confirm ambition copy with practice lead before publish
      ambitions={[
        {
          title: "Sharpen the portfolio optimization thesis",
          description:
            "Make clear, evidence-based choices about where portfolio optimization can move the needle for the business — and where it cannot. Stop spreading effort across too many fronts.",
        },
        {
          title: "Translate intent into a measurable system",
          description:
            "Move beyond a deck. Build the operating model, KPIs, and cadence that turn portfolio optimization ambitions into quarterly outcomes you can actually defend.",
        },
        {
          title: "Reach the customer with one voice",
          description:
            "Align brand, product, and commercial teams around a single view of the customer so every portfolio optimization touchpoint reinforces the same value promise.",
        },
        {
          title: "Compound the data advantage",
          description:
            "Instrument portfolio optimization so each campaign, account, and decision feeds the next one — building a proprietary asset that competitors cannot copy from a vendor.",
        },
        {
          title: "Modernise the portfolio optimization tech and talent stack",
          description:
            "Invest in the platforms, partners, and people that match the next stage of the business — not the one you grew up in.",
        },
        {
          title: "Prove the ROI conversation in the boardroom",
          description:
            "Connect portfolio optimization investment to revenue, margin, and customer-equity outcomes the CEO and CFO will fund in the next planning cycle.",
        },
      ]}
      howWeCanHelp={[
        {
          title: "Portfolio Strategy",
          description:
            "Develop portfolio strategies that align with market opportunities and business objectives. Define architecture, roles, and investment priorities.",
          href: "/capabilities/growth-marketing-sales/portfolio-optimization/portfolio-strategy",
        },
        {
          title: "SKU Rationalization",
          description:
            "Identify and eliminate low-value SKUs that drain resources. Reduce complexity while protecting revenue and customer satisfaction.",
          href: "/capabilities/growth-marketing-sales/portfolio-optimization/sku-rationalization",
        },
        {
          title: "Assortment Optimization",
          description:
            "Optimize product assortments by channel and customer segment. Balance breadth and depth to maximize sales and margin.",
          href: "/capabilities/growth-marketing-sales/portfolio-optimization/assortment-optimization",
        },
        {
          title: "Innovation Pipeline",
          description:
            "Build innovation pipelines that fill portfolio gaps. Prioritize new product investments based on strategic fit and market potential.",
          href: "/capabilities/growth-marketing-sales/portfolio-optimization/innovation-pipeline",
        },
        {
          title: "Portfolio Analytics",
          description:
            "Build analytics capabilities that track portfolio performance. Measure true profitability and identify optimization opportunities.",
          href: "/capabilities/growth-marketing-sales/portfolio-optimization/portfolio-analytics",
        },
        {
          title: "Category Management",
          description:
            "Optimize category strategies and shelf placement. Maximize category performance through data-driven assortment decisions.",
          href: "/capabilities/growth-marketing-sales/portfolio-optimization/category-management",
        },
      ]}
      ambitionsCTAText="Talk to us about your Portfolio Optimization ambition →"
      thoughtLeadership={[]}
      approachPillars={[
        {
          step: "01",
          title: "Diagnose complexity",
          body: "We analyze your portfolio to understand true profitability by product, channel, and customer. We identify complexity costs and quantify the opportunity from rationalization.",
        },
        {
          step: "02",
          title: "Design target portfolio",
          body: "We develop portfolio strategy aligned with market opportunities and competitive positioning. We define which products to grow, maintain, harvest, or eliminate.",
        },
        {
          step: "03",
          title: "Execute transformation",
          body: "We implement portfolio changes while managing customer and channel impacts. We establish governance to prevent complexity from creeping back.",
        },
      ]}
      featuredCases={[
        {
          slug: "bank-process-automation",
          title: "Regional Bank Automates Loan Origination End-to-End",
          industry: "Financial Services · Automation",
          metric: "70%",
          image: "/images/capabilities/cap-telescope.jpg",
        },
        {
          slug: "fintech-payment-automation",
          title: "Fintech Cuts Payment Reconciliation Cost By Two Thirds",
          industry: "Financial Services · Payments",
          metric: "67%",
          image: "/images/industries/deal-handshake.jpg",
        },
        {
          slug: "legal-document-intelligence",
          title: "Legal Tech Vendor Launches Document Intelligence Platform For Mid-Market Firms",
          industry: "Professional Services · Document AI",
          metric: "10x",
          image: "/images/capabilities/cap-woman-motion.jpg",
        },
      ]}
      relatedCapabilities={[
        { href: "/capabilities/strategy-corporate-finance", name: "Strategy & Corporate Finance" },
        { href: "/capabilities/business-building", name: "Business Building" },
        { href: "/capabilities/operations", name: "Operations" },
      ]}
      ctaLeadName="Talk to our Portfolio Optimization lead"
    />
  );
}
