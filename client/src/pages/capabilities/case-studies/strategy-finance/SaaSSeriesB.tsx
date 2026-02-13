import CaseStudyArticle from "@/components/CaseStudyArticle";

export default function SaaSSeriesB() {
  return (
    <CaseStudyArticle
      industry="Strategy & Corporate Finance"
      industryHref="/capabilities/strategy-corporate-finance"
      title="Series B Fundraise Supports Technology Expansion"
      subtitle="How a B2B software company prepared for and executed a successful growth capital raise at an 8x revenue multiple"
      client="A 120-employee B2B SaaS company providing workflow automation software to mid-size professional services firms, with $15M ARR and strong unit economics."
      challenge="The company had achieved product-market fit and was ready to accelerate growth, but the founders had never raised institutional capital. They needed to prepare the company for investor scrutiny, develop compelling materials, and navigate the fundraising process."
      metrics={[
        { value: "$35M", label: "Capital Raised" },
        { value: "8x", label: "Revenue Multiple" },
        { value: "12 weeks", label: "Process Duration" },
        { value: "3", label: "Competing Term Sheets" }
      ]}
      relatedCaseStudies={[
        {
          title: "Exit Preparation Maximizes Founder Value",
          href: "/capabilities/strategy-corporate-finance/case-studies/services-exit",
          industry: "Professional Services"
        },
        {
          title: "Private Equity-Backed Growth: From $40M to $120M Revenue",
          href: "/capabilities/strategy-corporate-finance/case-studies/pe-growth-healthcare",
          industry: "Healthcare"
        },
        {
          title: "Strategic Acquisition Doubles Market Presence",
          href: "/capabilities/strategy-corporate-finance/case-studies/manufacturing-acquisition",
          industry: "Manufacturing"
        }
      ]}
    >
      <h2>Preparing the Company for Investor Scrutiny</h2>
      <p>
        Before approaching investors, we conducted a thorough readiness assessment. This revealed several areas that needed attention: financial reporting that didn't clearly show SaaS metrics, customer cohort data that was incomplete, a sales pipeline that wasn't systematically tracked, and legal housekeeping items including option grants and IP assignments.
      </p>

      <h2>Building the Financial Model</h2>
      <p>
        We developed a comprehensive financial model that told the company's growth story. The model included historical performance with clear SaaS metrics (ARR, MRR, churn, LTV/CAC), a bottoms-up revenue forecast based on sales capacity and conversion rates, expense projections tied to hiring plan and go-to-market investments, and scenario analysis showing different growth trajectories.
      </p>

      <h2>Crafting the Investment Narrative</h2>
      <p>
        We worked with the founders to develop a compelling pitch that would resonate with growth investors. The narrative focused on a large and growing market opportunity, differentiated product with strong customer retention, proven go-to-market motion ready to scale, and an experienced team with relevant domain expertise. We created a pitch deck, executive summary, and detailed data room materials.
      </p>

      <h2>Managing the Fundraising Process</h2>
      <p>
        We ran a structured process designed to create competitive tension while minimizing distraction for the management team. This included identifying and prioritizing 50+ potential investors, managing outreach and scheduling, preparing founders for investor meetings, coordinating due diligence requests, and negotiating term sheet provisions.
      </p>

      <h2>Closing the Transaction</h2>
      <p>
        The process generated strong interest, resulting in three competing term sheets. We helped the founders evaluate offers not just on valuation but also on investor fit, board composition, and protective provisions. The final deal included $35M at an 8x revenue multiple, a board seat for the lead investor with founder-friendly governance, standard protective provisions without unusual terms, and a secondary component allowing founders to take some chips off the table.
      </p>

      <h2>Key Lessons</h2>
      <ul>
        <li>Preparation is critical—investors will find issues, so address them proactively</li>
        <li>SaaS metrics matter—make sure your reporting tells the right story</li>
        <li>Process creates leverage—multiple interested parties improve terms</li>
        <li>Investor fit matters as much as valuation for long-term success</li>
      </ul>
    </CaseStudyArticle>
  );
}
