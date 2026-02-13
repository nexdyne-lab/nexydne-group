import CaseStudyArticle from "@/components/CaseStudyArticle";

export default function DistributionFPA() {
  return (
    <CaseStudyArticle
      industry="Strategy & Corporate Finance"
      industryHref="/capabilities/strategy-corporate-finance"
      title="FP&A Transformation Enables Data-Driven Decisions"
      subtitle="How a distribution company modernized its finance function to gain real-time visibility and accelerate decision-making"
      client="A 200-employee industrial distribution company with $75M in revenue, operating 8 warehouses across the Midwest and serving manufacturing customers."
      challenge="The company was growing rapidly but flying blind. Monthly financials took 20+ days to close, making it impossible to respond to market changes. Leadership made decisions based on intuition rather than data, and the finance team spent all their time on transaction processing rather than analysis."
      metrics={[
        { value: "5 days", label: "Faster Close" },
        { value: "Real-time", label: "Performance Visibility" },
        { value: "15%", label: "Working Capital Freed" },
        { value: "3x", label: "Finance Productivity" }
      ]}
      relatedCaseStudies={[
        {
          title: "Private Equity-Backed Growth: From $40M to $120M Revenue",
          href: "/capabilities/strategy-corporate-finance/case-studies/pe-growth-healthcare",
          industry: "Healthcare"
        },
        {
          title: "Turnaround Strategy Restores Profitability",
          href: "/capabilities/strategy-corporate-finance/case-studies/retail-turnaround",
          industry: "Retail"
        },
        {
          title: "Series B Fundraise Supports Technology Expansion",
          href: "/capabilities/strategy-corporate-finance/case-studies/saas-series-b",
          industry: "Technology"
        }
      ]}
    >
      <h2>Assessing the Current State</h2>
      <p>
        Our diagnostic revealed a finance function that was overwhelmed by manual processes. The team spent 80% of their time on data entry and reconciliation, leaving little capacity for analysis or business partnership. Key issues included multiple disconnected systems requiring manual data transfer, no standardized chart of accounts across locations, inventory valuation that was updated only monthly, and customer profitability that was unknown at the account level.
      </p>

      <h2>Designing the Future State</h2>
      <p>
        We worked with leadership to define what a world-class FP&A function would look like for a company of their size and complexity. The vision included a 5-day monthly close with automated reconciliations, real-time dashboards showing key operational and financial metrics, weekly forecasting that incorporated leading indicators, and customer and product profitability analysis to guide pricing and resource allocation.
      </p>

      <h2>Implementing the Technology Foundation</h2>
      <p>
        We selected and implemented a cloud-based ERP system that integrated financials, inventory, and sales. The implementation included data migration and cleansing from legacy systems, standardized chart of accounts and cost centers, automated bank reconciliations and intercompany eliminations, and integration with the warehouse management system for real-time inventory.
      </p>

      <h2>Building Analytical Capabilities</h2>
      <p>
        With clean data flowing into a single system, we built the analytical tools the business needed. This included executive dashboards showing revenue, margin, and inventory turns by location, customer profitability analysis incorporating all costs to serve, product margin analysis identifying opportunities for pricing optimization, and a rolling 13-week cash flow forecast.
      </p>

      <h2>Transforming the Finance Team</h2>
      <p>
        Technology alone wasn't enough—we also needed to transform how the finance team worked. We restructured roles to separate transaction processing from analysis, trained team members on new tools and analytical techniques, established a business partner model with finance liaisons for each region, and created a monthly business review process to drive accountability.
      </p>

      <h2>Key Lessons</h2>
      <ul>
        <li>Technology implementation must be accompanied by process redesign</li>
        <li>Data quality is the foundation—garbage in, garbage out</li>
        <li>Finance teams need to shift from scorekeeping to business partnership</li>
        <li>Quick wins build momentum for larger transformation efforts</li>
      </ul>
    </CaseStudyArticle>
  );
}
