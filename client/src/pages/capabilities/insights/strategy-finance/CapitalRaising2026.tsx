import InsightArticleV2 from "@/components/InsightArticleV2";

export default function CapitalRaising2026() {
  const sections = [
    { id: "current-landscape", label: "The Current Landscape" },
    { id: "what-investors-want", label: "What Investors Want in 2026" },
    { id: "preparing", label: "Preparing for a Successful Raise" },
  ];

  return (
    <InsightArticleV2
      title="Capital Raising in 2026: What Mid-Size Companies Need to Know"
      subtitle="Current market conditions, investor expectations, and strategies for successful fundraising."
      date="January 2026"
      readTime="9 min"
      category="Strategy & Corporate Finance"
      categoryHref="/capabilities/strategy-corporate-finance"
      heroImage="/images/capital-raising-abstract.jpg"
      sections={sections}
      keyTakeaways={[
        "Capital markets have normalized but remain accessible for quality companies.",
        "Investors prioritize profitability and capital efficiency.",
        "Preparation should begin 12-18 months before fundraising.",
        "Strong financials and a compelling narrative are essential.",
      ]}
      authors={[
        { name: "David Park", role: "Partner, Capital Advisory" },
      ]}
      relatedContent={[
        {
          title: "The CFO's Guide to Strategic Finance",
          href: "/capabilities/strategy-corporate-finance/insights/strategic-finance-guide",
          category: "Leadership",
        },
        {
          title: "M&A for Growth: A Strategic Buyer's Playbook",
          href: "/capabilities/strategy-corporate-finance/insights/ma-playbook",
          category: "M&A",
        },
      ]}
    >
      <p>
        The capital markets have shifted significantly over the past two years. For mid-size companies seeking growth capital, understanding these changes is essential for successful fundraising.
      </p>

      <h2 id="current-landscape">The Current Landscape</h2>
      <p>
        After a period of abundant capital and elevated valuations, the market has normalized. Investors are more selective, due diligence is more rigorous, and valuations more closely reflect fundamental performance. For quality companies, however, capital remains available.
      </p>

      <h2 id="what-investors-want">What Investors Want in 2026</h2>
      <p>
        Today's investors prioritize profitability, capital efficiency, and sustainable growth over growth at any cost. Companies that can demonstrate strong unit economics, clear paths to profitability, and defensible market positions are attracting premium valuations.
      </p>

      <h2 id="preparing">Preparing for a Successful Raise</h2>
      <p>
        Successful fundraising requires preparation that begins 12-18 months before going to market. This includes cleaning up financials, building a compelling narrative, and establishing relationships with potential investors.
      </p>
    </InsightArticleV2>
  );
}
