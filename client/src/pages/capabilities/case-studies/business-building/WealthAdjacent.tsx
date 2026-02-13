import CaseStudyArticle from "@/components/CaseStudyArticle";

export default function WealthAdjacent() {
  return (
    <CaseStudyArticle
      industry="Business Building"
      industryHref="/capabilities/business-building"
      title="Financial Services Firm Enters Adjacent Market"
      subtitle="How a wealth management firm expanded into business financial services, leveraging existing relationships and expertise to capture new revenue"
      client="A 140-employee wealth management firm serving high-net-worth individuals. Many clients were business owners with both personal and business financial needs. The firm had deep expertise in financial planning but focused exclusively on personal wealth."
      challenge="Revenue growth was limited by the addressable market for personal wealth management. Business owner clients were using separate advisors for business finances. Competitors were offering integrated personal and business services. The firm needed to expand services without diluting core expertise."
      metrics={[
        { value: "35%", label: "Revenue Growth" },
        { value: "220", label: "New Business Clients" },
        { value: "$85M", label: "Business AUM" },
        { value: "78%", label: "Cross-Sell Rate" },
      ]}
      relatedCaseStudies={[
        {
          title: "Professional Services Firm Builds SaaS Product",
          href: "/capabilities/business-building/case-studies/consulting-saas",
          industry: "Professional Services"
        },
        {
          title: "Healthcare Provider Launches Telehealth Venture",
          href: "/capabilities/business-building/case-studies/healthcare-telehealth",
          industry: "Healthcare"
        },
        {
          title: "Logistics Company Builds Technology Spin-Off",
          href: "/capabilities/business-building/case-studies/logistics-tech-spinoff",
          industry: "Logistics"
        }
      ]}
    >
      <h2>Identifying the Opportunity</h2>
      <p>
        Our analysis revealed significant unmet needs among existing clients. Business owner clients were managing personal and business finances separately. They wanted integrated advice that considered both dimensions. Competitors offering integrated services were winning new clients. We identified an opportunity to deepen relationships while capturing new revenue.
      </p>

      <h2>Designing the Service Offering</h2>
      <p>
        We designed business financial services that complemented personal wealth management. We focused on areas where personal and business finances intersected. We created services for business succession and exit planning. We developed cash flow optimization for business owners. We also built retirement planning that integrated business and personal assets.
      </p>

      <h2>Building Capabilities</h2>
      <p>
        We developed capabilities to deliver business financial services. We recruited advisors with business financial planning expertise. We created training programs for existing advisors. We built tools and processes for business financial analysis. We also established partnerships for specialized services beyond core expertise.
      </p>

      <h2>Launching to Existing Clients</h2>
      <p>
        We launched business services to existing wealth management clients. We identified clients with business ownership and unmet needs. We created outreach campaigns highlighting integrated service benefits. We offered complimentary business financial assessments. We also trained relationship managers on cross-selling approaches.
      </p>

      <h2>Expanding to New Clients</h2>
      <p>
        We developed strategies to attract new business owner clients. We created marketing targeting business owners with wealth accumulation goals. We built referral relationships with business advisors and attorneys. We developed content demonstrating integrated planning expertise. We also created events that brought together business owners.
      </p>

      <h2>Key Lessons</h2>
      <ul>
        <li>Existing client relationships reveal adjacent opportunities</li>
        <li>Integrated services create stronger client relationships</li>
        <li>New capabilities require dedicated expertise and training</li>
        <li>Cross-selling existing clients accelerates new service adoption</li>
      </ul>
    </CaseStudyArticle>
  );
}
