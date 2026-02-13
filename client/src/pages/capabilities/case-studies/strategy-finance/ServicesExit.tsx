import CaseStudyArticle from "@/components/CaseStudyArticle";

export default function ServicesExit() {
  return (
    <CaseStudyArticle
      industry="Strategy & Corporate Finance"
      industryHref="/capabilities/strategy-corporate-finance"
      title="Exit Preparation Maximizes Founder Value"
      subtitle="How a professional services firm prepared for sale and achieved a 40% valuation premium through strategic positioning"
      client="A 140-employee professional services firm specializing in environmental consulting, with $20M in revenue and a founder approaching retirement age."
      challenge="The founder wanted to exit within 2-3 years but the company wasn't ready for sale. Revenue was concentrated in a few large clients, key relationships were tied to the founder personally, and financial reporting didn't present the business in the best light."
      metrics={[
        { value: "40%", label: "Valuation Premium" },
        { value: "6 months", label: "Preparation Time" },
        { value: "5x", label: "EBITDA Multiple" },
        { value: "100%", label: "Founder Transition" }
      ]}
      relatedCaseStudies={[
        {
          title: "Series B Fundraise Supports Technology Expansion",
          href: "/capabilities/strategy-corporate-finance/case-studies/saas-series-b",
          industry: "Technology"
        },
        {
          title: "Strategic Acquisition Doubles Market Presence",
          href: "/capabilities/strategy-corporate-finance/case-studies/manufacturing-acquisition",
          industry: "Manufacturing"
        },
        {
          title: "Private Equity-Backed Growth: From $40M to $120M Revenue",
          href: "/capabilities/strategy-corporate-finance/case-studies/pe-growth-healthcare",
          industry: "Healthcare"
        }
      ]}
    >
      <h2>Assessing Sale Readiness</h2>
      <p>
        We began with a comprehensive assessment of the company's attractiveness to potential buyers. The analysis identified several issues that would reduce value or complicate a sale: top 3 clients represented 60% of revenue, the founder was personally involved in most client relationships, EBITDA was understated due to above-market owner compensation, and there was no clear succession plan for leadership.
      </p>

      <h2>Diversifying the Revenue Base</h2>
      <p>
        Over 18 months, we implemented a systematic program to reduce customer concentration. This included a new business development function focused on mid-size clients, expansion into adjacent service lines with existing clients, and a pricing strategy that improved margins on concentrated accounts. By the time of sale, no single client represented more than 15% of revenue.
      </p>

      <h2>Transitioning Key Relationships</h2>
      <p>
        The founder's personal relationships were both an asset and a liability. We developed a transition plan that introduced senior team members to key client contacts, documented institutional knowledge and client preferences, established account management processes that didn't depend on the founder, and created retention agreements for key employees.
      </p>

      <h2>Optimizing Financial Presentation</h2>
      <p>
        We worked with the company's accountants to present financials in the most favorable light. This included normalizing owner compensation to market rates, identifying and documenting add-backs for one-time expenses, separating real estate into a distinct entity, and preparing quality of earnings analysis proactively.
      </p>

      <h2>Executing the Sale Process</h2>
      <p>
        When the company was ready, we ran a competitive sale process that generated strong interest from both strategic and financial buyers. The preparation work paid off—buyers were impressed by the diversified revenue base, clear succession plan, and clean financials. The final sale achieved a 40% premium over initial indications of value.
      </p>

      <h2>Key Lessons</h2>
      <ul>
        <li>Exit preparation should begin 2-3 years before the target sale date</li>
        <li>Customer concentration is the #1 value killer—address it early</li>
        <li>Founder transition is critical for professional services firms</li>
        <li>Clean financials and proactive due diligence preparation accelerate deals</li>
      </ul>
    </CaseStudyArticle>
  );
}
