import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export default function DistributionFPA() {
  return (
    <CaseStudyTemplate
      client="Industrial Distribution Company"
      industry="Distribution · Strategy & Finance"
      title="FP&A Transformation Enables Data-Driven Decisions"
      subtitle="How a distribution company modernized its finance function to gain real-time visibility and accelerate decision-making."
      heroImage="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1600&q=80"
      challenge={`The company was growing rapidly but flying blind. Monthly financials took 20+ days to close, making it impossible to respond to market changes. Leadership made decisions based on intuition rather than data, and the finance team spent all their time on transaction processing rather than analysis.

A 200-employee industrial distribution company with $75M in revenue operates 8 warehouses across the Midwest serving manufacturing customers. The diagnostic revealed a finance function overwhelmed by manual processes: 80% of team time spent on data entry and reconciliation, multiple disconnected systems requiring manual data transfer, no standardized chart of accounts across locations, inventory valuation updated only monthly, and customer profitability unknown at the account level.`}
      solution={`NEXDYNE implemented a cloud-based ERP system integrating financials, inventory, and sales—including data migration and cleansing from legacy systems, a standardized chart of accounts and cost centers, automated bank reconciliations and intercompany eliminations, and integration with the warehouse management system for real-time inventory visibility.

With clean data flowing into a single system, analytical tools were built to serve the business: executive dashboards showing revenue, margin, and inventory turns by location, customer profitability analysis incorporating all costs to serve, product margin analysis identifying pricing optimization opportunities, and a rolling 13-week cash flow forecast.

Finance team transformation restructured roles to separate transaction processing from analysis, trained team members on new tools and analytical techniques, established a business partner model with finance liaisons for each region, and created a monthly business review process driving accountability.`}
      impact={`Monthly close time dropped from 20+ days to 5 days, enabling leadership to identify and respond to performance issues in weeks rather than months. Real-time dashboards gave location managers and executives visibility into key operational and financial metrics for the first time. Finance team productivity tripled as automation freed the team from transaction processing for genuine business partnership.

Working capital improved 15% as the customer profitability analysis and real-time inventory data revealed opportunities to optimize receivables, payables, and inventory levels that had been invisible in the previous fragmented system. The business now has the financial infrastructure to support continued growth—each new warehouse can be onboarded with standardized reporting from day one rather than requiring manual reconciliation.`}
      metrics={[
        { value: "5 days", label: "Faster monthly close" },
        { value: "Real-time", label: "Performance visibility" },
        { value: "15%", label: "Working capital freed" },
        { value: "3x", label: "Finance productivity" }
      ]}
      tags={["Distribution", "FP&A", "Finance Transformation", "Strategy"]}
      relatedCapability={{
        title: "Strategy & Finance",
        link: "/capabilities/strategy-finance"
      }}
    />
  );
}
