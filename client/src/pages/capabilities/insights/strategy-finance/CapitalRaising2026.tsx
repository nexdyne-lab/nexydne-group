import InsightArticle from "@/components/InsightArticle";

export default function CapitalRaising2026() {
  return (
    <InsightArticle
      title="Capital Raising in 2026: What Mid-Size Companies Need to Know"
      subtitle="Current market conditions, investor expectations, and strategies for successful fundraising."
      date="January 2026"
      readTime="9 min"
      category="Strategy & Corporate Finance"
      categoryHref="/capabilities/strategy-corporate-finance"
      authors={[
        { name: "David Park", role: "Partner, Capital Advisory" },
      ]}
      relatedContent={[
        {
          title: "The Mid-Market CFO's Guide to Strategic Finance",
          href: "/capabilities/strategy-corporate-finance/insights/strategic-finance-guide",
          category: "Leadership",
        },
        {
          title: "M&A for Growth: A Mid-Market Buyer's Playbook",
          href: "/capabilities/strategy-corporate-finance/insights/ma-playbook",
          category: "M&A",
        },
      ]}
    >
      <p className="text-xl text-gray-600 mb-8 leading-relaxed">
        The capital markets have shifted significantly over the past two years. For mid-size companies seeking growth capital, understanding these changes is essential for successful fundraising.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6 eb-garamond">
        The Current Landscape
      </h2>
      <p className="text-gray-700 mb-6 leading-relaxed">
        After a period of abundant capital and elevated valuations, the market has normalized. Investors are more selective, due diligence is more rigorous, and valuations more closely reflect fundamental performance. For quality companies, however, capital remains available.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6 eb-garamond">
        What Investors Want in 2026
      </h2>
      <p className="text-gray-700 mb-6 leading-relaxed">
        Today's investors prioritize profitability, capital efficiency, and sustainable growth over growth at any cost. Companies that can demonstrate strong unit economics, clear paths to profitability, and defensible market positions are attracting premium valuations.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6 eb-garamond">
        Preparing for a Successful Raise
      </h2>
      <p className="text-gray-700 mb-6 leading-relaxed">
        Successful fundraising requires preparation that begins 12-18 months before going to market. This includes cleaning up financials, building a compelling narrative, and establishing relationships with potential investors.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6 eb-garamond">
        Key Takeaways
      </h2>
      <ul className="list-disc pl-6 text-gray-700 space-y-3 mb-8">
        <li>Capital markets have normalized but remain accessible for quality companies</li>
        <li>Investors prioritize profitability and capital efficiency</li>
        <li>Preparation should begin 12-18 months before fundraising</li>
        <li>Strong financials and compelling narrative are essential</li>
      </ul>
    </InsightArticle>
  );
}
