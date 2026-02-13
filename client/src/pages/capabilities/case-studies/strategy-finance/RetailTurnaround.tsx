import CaseStudyArticle from "@/components/CaseStudyArticle";

export default function RetailTurnaround() {
  return (
    <CaseStudyArticle
      industry="Strategy & Corporate Finance"
      industryHref="/capabilities/strategy-corporate-finance"
      title="Turnaround Strategy Restores Profitability"
      subtitle="How a retail company recovered from market disruption through strategic cost reduction and operational restructuring"
      client="A 175-employee specialty retail company with 12 locations across the Southeast, facing declining sales and mounting losses after a major competitor entered the market."
      challenge="The company had lost 25% of revenue over two years as a new competitor opened nearby locations. EBITDA had turned negative, cash was running low, and the bank was threatening to call the loan. The founding family needed to act quickly to save the business."
      metrics={[
        { value: "15%", label: "EBITDA Margin Restored" },
        { value: "$8M", label: "Cost Reduction" },
        { value: "6 months", label: "To Profitability" },
        { value: "100%", label: "Debt Restructured" }
      ]}
      relatedCaseStudies={[
        {
          title: "FP&A Transformation Enables Data-Driven Decisions",
          href: "/capabilities/strategy-corporate-finance/case-studies/distribution-fpa",
          industry: "Distribution"
        },
        {
          title: "Exit Preparation Maximizes Founder Value",
          href: "/capabilities/strategy-corporate-finance/case-studies/services-exit",
          industry: "Professional Services"
        },
        {
          title: "Private Equity-Backed Growth: From $40M to $120M Revenue",
          href: "/capabilities/strategy-corporate-finance/case-studies/pe-growth-healthcare",
          industry: "Healthcare"
        }
      ]}
    >
      <h2>Stabilizing the Situation</h2>
      <p>
        The first priority was to stop the bleeding and buy time for a more comprehensive restructuring. We implemented a 13-week cash flow forecast to manage liquidity, negotiated extended payment terms with key vendors, identified and eliminated non-essential spending immediately, and began conversations with the bank about restructuring the credit facility.
      </p>

      <h2>Diagnosing the Root Causes</h2>
      <p>
        With the immediate crisis stabilized, we conducted a thorough diagnostic to understand what was driving the losses. The analysis revealed that not all locations were equally affected—some were still profitable while others were deeply underwater. The company had not adjusted its cost structure as revenue declined, and inventory was bloated with slow-moving SKUs tying up cash. Additionally, pricing had not been reviewed in years despite rising costs.
      </p>

      <h2>Rightsizing the Footprint</h2>
      <p>
        Based on location-level profitability analysis, we developed a plan to close 4 underperforming locations while investing in the 8 strongest stores. The closures were executed carefully to minimize customer disruption, with inventory transferred to remaining locations and employees offered positions where possible.
      </p>

      <h2>Restructuring the Cost Base</h2>
      <p>
        Beyond the store closures, we identified $8M in annual cost savings through renegotiated vendor contracts and consolidated suppliers, reduced corporate overhead by 30%, optimized staffing models based on traffic patterns, and renegotiated the real estate lease for the headquarters.
      </p>

      <h2>Revitalizing the Core Business</h2>
      <p>
        Cost cutting alone wouldn't save the business—we also needed to strengthen the competitive position. We refreshed the merchandise assortment based on customer data, implemented a loyalty program to increase repeat visits, upgraded the e-commerce platform to capture online sales, and trained staff on consultative selling to differentiate from the competitor.
      </p>

      <h2>Key Lessons</h2>
      <ul>
        <li>Speed is critical in turnarounds—delay makes every problem worse</li>
        <li>Not all locations or products deserve equal investment</li>
        <li>Cost cutting must be paired with revenue initiatives</li>
        <li>Stakeholder communication builds the trust needed for difficult decisions</li>
      </ul>
    </CaseStudyArticle>
  );
}
