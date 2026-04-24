import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export function WealthAdjacent() {
  return (
    <CaseStudyTemplate
      client="Wealth Management Firm"
      industry="Financial Services · Business Building"
      title="Financial Services Firm Enters Adjacent Market"
      subtitle="How a wealth management firm expanded into business financial services, leveraging existing relationships and expertise to capture new revenue."
      heroImage="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1600&q=80"
      challenge={`Revenue growth was limited by the addressable market for personal wealth management. Business owner clients were using separate advisors for business finances. Competitors were offering integrated personal and business services. The firm needed to expand services without diluting core expertise.

A 140-employee wealth management firm serving high-net-worth individuals had many clients who were business owners with both personal and business financial needs—yet the firm focused exclusively on personal wealth. Deep analysis revealed that key clients regularly made consequential business financial decisions (exit planning, cash flow management, business succession) without the benefit of integrated advice, creating risk to both the clients and the firm's relationship assets.`}
      solution={`NEXDYNE identified services where personal and business finances intersected as the most natural expansion: business succession and exit planning, cash flow optimization for business owners, and retirement planning integrating business and personal assets.

New capabilities were built through a combination of recruiting advisors with business financial planning expertise, training programs for existing advisors, analytical tools and processes for business financial analysis, and partnerships for specialized services beyond core expertise. Existing wealth management clients were the primary launch market—outreach campaigns highlighted integrated service benefits, complimentary business financial assessments generated engagement, and relationship managers were trained on cross-selling approaches. New client acquisition leveraged referral relationships with business advisors and attorneys and content demonstrating integrated planning expertise.`}
      impact={`Revenue grew 35% as 220 business owners became clients of the expanded services, generating $85 million in business assets under management. The cross-sell rate of 78%—existing personal wealth clients who also engaged business services—validated the thesis that integrated advice created stronger client relationships.

The expansion also proved defensive: clients who received integrated personal and business advice became significantly stickier, reducing attrition to competitors who might offer either personal wealth or business advisory services in isolation. The firm's positioning as a true financial partner for business owners, rather than a personal wealth specialist, opened access to a materially larger addressable market.`}
      metrics={[
        { value: "35%", label: "Revenue growth" },
        { value: "220", label: "New business clients" },
        { value: "$85M", label: "Business AUM" },
        { value: "78%", label: "Cross-sell rate" }
      ]}
      tags={["Financial Services", "Wealth Management", "Business Building", "Strategy"]}
      relatedCapability={{
        title: "Strategy & Finance",
        link: "/capabilities/strategy-finance"
      }}
    />
  );
}

export default WealthAdjacent;
