import CaseStudyArticle from "@/components/CaseStudyArticle";

export default function ConsultingSaaS() {
  return (
    <CaseStudyArticle
      industry="Business Building"
      industryHref="/capabilities/business-building"
      title="Professional Services Firm Builds SaaS Product"
      subtitle="How a consulting firm transformed their proprietary methodology into a subscription software product, creating recurring revenue and expanding market reach"
      client="A 120-employee management consulting firm specializing in operational excellence. The firm had developed a proprietary assessment and improvement methodology over 15 years. Revenue was entirely project-based with significant seasonality."
      challenge="Project-based revenue created feast-or-famine cycles. The firm's methodology was valuable but delivery required expensive senior consultants. Smaller companies couldn't afford full engagements. The leadership sought recurring revenue and broader market access while protecting their intellectual property."
      metrics={[
        { value: "2,400", label: "Paying Subscribers" },
        { value: "45%", label: "Gross Margin" },
        { value: "$3.2M", label: "ARR" },
        { value: "92%", label: "Retention Rate" },
      ]}
      relatedCaseStudies={[
        {
          title: "Regional Distributor Launches Digital Marketplace",
          href: "/capabilities/business-building/case-studies/distributor-marketplace",
          industry: "Distribution"
        },
        {
          title: "Healthcare Provider Launches Telehealth Venture",
          href: "/capabilities/business-building/case-studies/healthcare-telehealth",
          industry: "Healthcare"
        },
        {
          title: "Financial Services Firm Enters Adjacent Market",
          href: "/capabilities/business-building/case-studies/wealth-adjacent",
          industry: "Financial Services"
        }
      ]}
    >
      <h2>Productizing the Methodology</h2>
      <p>
        Our first task was translating consulting methodology into software. We mapped the assessment process to identify components suitable for self-service. We identified which elements required human expertise versus algorithmic guidance. We designed a product that delivered 80% of the value at 20% of the cost. We also created upgrade paths that connected software users to consulting services.
      </p>

      <h2>Designing the Product</h2>
      <p>
        We designed a SaaS product that guided users through operational assessments. The platform included diagnostic questionnaires based on the firm's frameworks. We built benchmarking capabilities using anonymized data from consulting engagements. We created action planning tools that prioritized improvement opportunities. We also developed progress tracking and reporting dashboards.
      </p>

      <h2>Building the Technology</h2>
      <p>
        We developed the platform using modern SaaS architecture. We built a multi-tenant system that scaled efficiently. We implemented robust security to protect client data. We created APIs that enabled integration with common business systems. We also built analytics infrastructure to generate insights from aggregated data.
      </p>

      <h2>Launching to Market</h2>
      <p>
        We developed a go-to-market strategy targeting mid-size companies. We created content marketing that demonstrated methodology value. We built free assessment tools that generated qualified leads. We designed pricing tiers that matched different company sizes. We also trained the sales team on SaaS selling motions.
      </p>

      <h2>Connecting Software and Services</h2>
      <p>
        We created seamless connections between product and consulting. Software users who needed deeper support could easily engage consultants. Consultants used the platform to deliver more efficient engagements. Product data informed consulting recommendations. We also built referral programs that incentivized both channels.
      </p>

      <h2>Key Lessons</h2>
      <ul>
        <li>Not all consulting IP translates equally well to software</li>
        <li>Self-service products expand addressable market significantly</li>
        <li>Software and services can be complementary, not competitive</li>
        <li>Aggregated data creates new value beyond individual assessments</li>
      </ul>
    </CaseStudyArticle>
  );
}
