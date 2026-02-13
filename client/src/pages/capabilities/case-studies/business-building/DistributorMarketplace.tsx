import CaseStudyArticle from "@/components/CaseStudyArticle";

export default function DistributorMarketplace() {
  return (
    <CaseStudyArticle
      industry="Business Building"
      industryHref="/capabilities/business-building"
      title="Regional Distributor Launches Digital Marketplace"
      subtitle="How an industrial supplies distributor created a new revenue stream by building a B2B marketplace connecting buyers with specialized vendors"
      client="A 150-employee industrial supplies distributor with $45M annual revenue serving manufacturing and construction customers across the Midwest. The company had strong customer relationships but faced margin pressure from larger competitors."
      challenge="Traditional distribution margins were declining as customers gained price transparency. The company's product catalog couldn't match larger competitors. Customer acquisition costs were rising. The leadership team needed a differentiated strategy that leveraged existing relationships while creating new value."
      metrics={[
        { value: "$4.2M", label: "New Revenue (Year 1)" },
        { value: "340", label: "Marketplace Sellers" },
        { value: "2,800", label: "Active Buyers" },
        { value: "18%", label: "Take Rate" },
      ]}
      relatedCaseStudies={[
        {
          title: "Professional Services Firm Builds SaaS Product",
          href: "/capabilities/business-building/case-studies/consulting-saas",
          industry: "Professional Services"
        },
        {
          title: "Manufacturer Creates Direct-to-Consumer Channel",
          href: "/capabilities/business-building/case-studies/manufacturer-dtc",
          industry: "Manufacturing"
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
        Our analysis revealed that the distributor's customers frequently needed specialized products outside their catalog. These customers were spending significant time finding and vetting new suppliers. The distributor had relationships with hundreds of specialty vendors who struggled to reach mid-size buyers. We identified an opportunity to create a curated marketplace that connected these buyers and sellers.
      </p>

      <h2>Designing the Marketplace Model</h2>
      <p>
        We designed a marketplace model that leveraged the distributor's strengths. The platform would offer curated vendors vetted by the distributor's procurement team. Buyers would benefit from consolidated invoicing and credit terms. Sellers would gain access to qualified buyers without direct sales investment. The distributor would earn transaction fees while strengthening customer relationships.
      </p>

      <h2>Building the Platform</h2>
      <p>
        We developed a B2B marketplace platform tailored to industrial supplies. The platform included robust search and filtering for technical specifications. We built integration with the distributor's existing ERP for seamless operations. We created seller onboarding tools that simplified catalog management. We also implemented buyer tools for RFQ management and order tracking.
      </p>

      <h2>Recruiting Sellers</h2>
      <p>
        We developed a seller recruitment strategy targeting specialty vendors. We identified vendors who complemented rather than competed with existing inventory. We created value propositions emphasizing access to qualified buyers. We built onboarding support to help sellers succeed on the platform. We also established quality standards that maintained the distributor's reputation.
      </p>

      <h2>Driving Buyer Adoption</h2>
      <p>
        We launched the marketplace to existing customers with targeted outreach. We identified customers with frequent specialty purchasing needs. We offered incentives for early adoption and feedback. We integrated marketplace access into existing customer portals. We also trained sales teams to promote marketplace benefits during customer interactions.
      </p>

      <h2>Key Lessons</h2>
      <ul>
        <li>Existing customer relationships provide foundation for marketplace launch</li>
        <li>Curation and quality control differentiate from open marketplaces</li>
        <li>Seller success is critical to buyer value proposition</li>
        <li>Integration with existing operations accelerates adoption</li>
      </ul>
    </CaseStudyArticle>
  );
}
