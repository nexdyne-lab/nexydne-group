import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export default function ServicesExit() {
  return (
    <CaseStudyTemplate
      client="Environmental Consulting Firm"
      industry="Professional Services · Strategy & Finance"
      title="Exit Preparation Maximizes Founder Value"
      subtitle="How a professional services firm prepared for sale and achieved a 40% valuation premium through strategic positioning."
      heroImage="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&q=80"
      challenge={`The founder wanted to exit within 2-3 years but the company wasn't ready for sale. Revenue was concentrated in a few large clients, key relationships were tied to the founder personally, and financial reporting didn't present the business in the best light.

A 140-employee professional services firm specializing in environmental consulting with $20M in revenue had a founder approaching retirement age. The sale readiness assessment identified issues that would reduce value or complicate a sale: top 3 clients representing 60% of revenue, the founder personally involved in most client relationships, EBITDA understated due to above-market owner compensation, and no clear succession plan for leadership.`}
      solution={`NEXDYNE implemented a systematic program over 18 months to reduce customer concentration through a new business development function focused on mid-size clients, expansion into adjacent service lines with existing clients, and pricing strategy improving margins on concentrated accounts. By the time of sale, no single client represented more than 15% of revenue.

Founder relationship transition introduced senior team members to key client contacts, documented institutional knowledge and client preferences, established account management processes not dependent on the founder personally, and created retention agreements for key employees.

Financial presentation was optimized by normalizing owner compensation to market rates, identifying and documenting add-backs for one-time expenses, separating real estate into a distinct entity, and preparing quality of earnings analysis proactively. When the company was ready, a competitive sale process was run that generated interest from both strategic and financial buyers.`}
      impact={`The final sale achieved a 40% premium over initial indications of value—directly attributable to the preparation work that eliminated the risk discounts buyers apply to concentrated, founder-dependent businesses. The company sold at a 5x EBITDA multiple. The founder achieved complete transition within 6 months of closing, with a succession plan that protected the client relationships and employee base built over decades.

The revenue diversification program proved particularly valuable: buyers who had initially valued the business at a discount for concentration risk revised their valuations upward significantly once they saw the diversified client base and demonstrated new business development capability. The preparation investment of 18 months generated returns many multiples of its cost in the final sale price.`}
      metrics={[
        { value: "40%", label: "Valuation premium" },
        { value: "6 months", label: "Founder transition" },
        { value: "5x", label: "EBITDA multiple" },
        { value: "100%", label: "Founder exit completed" }
      ]}
      tags={["Professional Services", "Exit Planning", "M&A", "Strategy"]}
      relatedCapability={{
        title: "Strategy & Finance",
        link: "/capabilities/strategy-finance"
      }}
    />
  );
}
