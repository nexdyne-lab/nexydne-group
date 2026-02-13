import CaseStudyArticle from "@/components/CaseStudyArticle";

export default function PEGrowthHealthcare() {
  return (
    <CaseStudyArticle
      industry="Strategy & Corporate Finance"
      industryHref="/capabilities/strategy-corporate-finance"
      title="Private Equity-Backed Growth: From $40M to $120M Revenue"
      subtitle="How a healthcare services company executed a comprehensive post-acquisition growth strategy to triple revenue in 18 months"
      client="A 150-employee healthcare services company backed by a mid-market private equity firm, operating across three states with a focus on home health and hospice services."
      challenge="Following acquisition by a PE sponsor, the company faced pressure to execute an aggressive growth plan. The existing management team had deep clinical expertise but limited experience with rapid scaling."
      metrics={[
        { value: "3x", label: "Revenue Growth" },
        { value: "$80M", label: "Revenue Added" },
        { value: "18 months", label: "Timeline" },
        { value: "14%", label: "EBITDA Margin" }
      ]}
      relatedCaseStudies={[
        {
          title: "Strategic Acquisition Doubles Market Presence",
          href: "/capabilities/strategy-corporate-finance/case-studies/manufacturing-acquisition",
          industry: "Manufacturing"
        },
        {
          title: "FP&A Transformation Enables Data-Driven Decisions",
          href: "/capabilities/strategy-corporate-finance/case-studies/distribution-fpa",
          industry: "Distribution"
        },
        {
          title: "Series B Fundraise Supports Technology Expansion",
          href: "/capabilities/strategy-corporate-finance/case-studies/saas-series-b",
          industry: "Technology"
        }
      ]}
    >
      <h2>Diagnosing the Growth Barriers</h2>
      <p>
        Our engagement began with a comprehensive diagnostic that revealed several interconnected issues. Financial close processes took 15+ days, making it impossible to identify and respond to performance issues quickly. The company lacked standardized KPIs across locations, so comparing performance was essentially impossible. Sales relied on the founder's personal network, with no documented processes or CRM system. Additionally, the billing and collections function was understaffed, leaving significant revenue on the table.
      </p>

      <h2>Building the Financial Foundation</h2>
      <p>
        We implemented a new FP&A function with standardized reporting across all locations. This included implementing a cloud-based financial system that reduced close time from 15 days to 5 days, creating location-level P&Ls with consistent cost allocation, building a weekly flash report that tracked key operational and financial metrics, and establishing a monthly business review cadence with location leaders.
      </p>

      <h2>Systematizing Revenue Growth</h2>
      <p>
        With visibility into performance, we turned to building a scalable sales engine. We implemented a CRM system and documented the sales process from lead to close. We hired and trained a dedicated business development team to complement the founder's relationship-based approach. We built referral source analytics to identify high-potential accounts and created marketing materials and a digital presence to support outreach.
      </p>

      <h2>Optimizing Revenue Cycle</h2>
      <p>
        Our analysis revealed that the company was leaving 8-12% of earned revenue uncollected due to billing issues. We restructured the billing team and implemented new processes that reduced claim denials by 60%, improved days sales outstanding from 65 to 42 days, and recovered $1.2M in previously written-off receivables.
      </p>

      <h2>Executing the M&A Strategy</h2>
      <p>
        With the operational foundation in place, we supported two tuck-in acquisitions that added $25M in revenue. Our role included target identification and screening, financial due diligence and valuation, integration planning and execution, and synergy tracking and realization.
      </p>

      <h2>Key Lessons</h2>
      <ul>
        <li>Financial visibility is the foundation for growth - you can't improve what you can't measure</li>
        <li>Systematizing sales processes enables growth beyond founder relationships</li>
        <li>Revenue cycle optimization often represents the highest-ROI quick win</li>
        <li>M&A success depends on integration capability, not just deal-making</li>
      </ul>
    </CaseStudyArticle>
  );
}
