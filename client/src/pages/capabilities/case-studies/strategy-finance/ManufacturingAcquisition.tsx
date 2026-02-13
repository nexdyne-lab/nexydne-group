import CaseStudyArticle from "@/components/CaseStudyArticle";

export default function ManufacturingAcquisition() {
  return (
    <CaseStudyArticle
      industry="Strategy & Corporate Finance"
      industryHref="/capabilities/strategy-corporate-finance"
      title="Strategic Acquisition Doubles Market Presence"
      subtitle="How a manufacturing company identified, acquired, and integrated a competitor to achieve market leadership"
      client="A 180-employee precision manufacturing company serving the aerospace and defense industry, with $45M in annual revenue and a strong reputation for quality."
      challenge="The company had grown organically for 25 years but was losing market share to larger competitors with broader capabilities. The founder wanted to accelerate growth through acquisition but had no M&A experience."
      metrics={[
        { value: "2x", label: "Market Share" },
        { value: "$45M", label: "Deal Value" },
        { value: "95%", label: "Customer Retention" },
        { value: "18%", label: "EBITDA Margin" }
      ]}
      relatedCaseStudies={[
        {
          title: "Private Equity-Backed Growth: From $40M to $120M Revenue",
          href: "/capabilities/strategy-corporate-finance/case-studies/pe-growth-healthcare",
          industry: "Healthcare"
        },
        {
          title: "Exit Preparation Maximizes Founder Value",
          href: "/capabilities/strategy-corporate-finance/case-studies/services-exit",
          industry: "Professional Services"
        },
        {
          title: "FP&A Transformation Enables Data-Driven Decisions",
          href: "/capabilities/strategy-corporate-finance/case-studies/distribution-fpa",
          industry: "Distribution"
        }
      ]}
    >
      <h2>Defining the Strategic Rationale</h2>
      <p>
        Before beginning the target search, we worked with leadership to clarify the strategic objectives for an acquisition. The analysis revealed that the company needed to expand its capabilities in CNC machining to serve larger programs, geographic presence on the West Coast to reduce shipping costs for key customers, and capacity to handle larger orders that were currently being declined.
      </p>

      <h2>Target Identification and Screening</h2>
      <p>
        We developed a systematic approach to identify potential targets, screening over 200 companies against criteria including capability fit, geographic location, financial health, and cultural alignment. This process narrowed the field to 12 serious candidates, which we then evaluated through detailed analysis and management conversations.
      </p>

      <h2>Due Diligence and Valuation</h2>
      <p>
        For the selected target—a $25M revenue competitor with complementary capabilities—we conducted comprehensive due diligence covering financial performance and quality of earnings, customer concentration and contract terms, equipment condition and capital requirements, employee capabilities and retention risk, and environmental and regulatory compliance.
      </p>

      <h2>Deal Structuring and Negotiation</h2>
      <p>
        We structured a transaction that addressed the seller's objectives while protecting our client's interests. The final deal included a combination of cash and seller financing, earnout provisions tied to customer retention, employment agreements for key personnel, and representations and warranties insurance to limit post-closing risk.
      </p>

      <h2>Integration Planning and Execution</h2>
      <p>
        Beginning before close, we developed a detailed 100-day integration plan covering customer communication and retention, employee onboarding and cultural integration, systems and process harmonization, and synergy capture and tracking. The integration was executed with minimal disruption, retaining 95% of customers and 90% of key employees.
      </p>

      <h2>Key Lessons</h2>
      <ul>
        <li>Clear strategic rationale is essential—acquisitions should solve specific business problems</li>
        <li>Systematic target screening prevents emotional decision-making</li>
        <li>Integration planning must begin before the deal closes</li>
        <li>Customer and employee retention require proactive communication</li>
      </ul>
    </CaseStudyArticle>
  );
}
