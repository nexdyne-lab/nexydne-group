import CaseStudyArticle from "@/components/CaseStudyArticle";

export default function ManufacturerDTC() {
  return (
    <CaseStudyArticle
      industry="Business Building"
      industryHref="/capabilities/business-building"
      title="Manufacturer Creates Direct-to-Consumer Channel"
      subtitle="How a specialty manufacturer built a successful D2C business alongside their B2B channel, capturing higher margins and building brand equity"
      client="A 200-employee specialty manufacturer producing premium outdoor equipment. The company sold exclusively through retailers and distributors. Strong brand recognition among enthusiasts but limited direct customer relationships."
      challenge="Retail partners controlled pricing and customer experience. Margin pressure from retailers was intensifying. The company had no direct customer data or relationships. Competitors were successfully launching D2C channels. The leadership needed to build D2C without alienating existing retail partners."
      metrics={[
        { value: "$8M", label: "D2C Revenue" },
        { value: "28%", label: "Higher Margins" },
        { value: "45K", label: "Direct Customers" },
        { value: "4.8", label: "Customer Rating" },
      ]}
      relatedCaseStudies={[
        {
          title: "Regional Distributor Launches Digital Marketplace",
          href: "/capabilities/business-building/case-studies/distributor-marketplace",
          industry: "Distribution"
        },
        {
          title: "Professional Services Firm Builds SaaS Product",
          href: "/capabilities/business-building/case-studies/consulting-saas",
          industry: "Professional Services"
        },
        {
          title: "Logistics Company Builds Technology Spin-Off",
          href: "/capabilities/business-building/case-studies/logistics-tech-spinoff",
          industry: "Logistics"
        }
      ]}
    >
      <h2>Developing the D2C Strategy</h2>
      <p>
        We developed a D2C strategy that complemented rather than competed with retail. We identified product categories and customer segments underserved by retail. We designed exclusive D2C products that wouldn't create channel conflict. We created a value proposition emphasizing customization and direct brand experience. We also developed pricing strategies that maintained retail relationships.
      </p>

      <h2>Building the E-commerce Platform</h2>
      <p>
        We built an e-commerce platform that delivered premium brand experience. The site showcased products with rich media and detailed specifications. We implemented product customization capabilities for D2C exclusives. We built integration with manufacturing systems for made-to-order products. We also created content that educated and engaged enthusiast customers.
      </p>

      <h2>Creating the Customer Experience</h2>
      <p>
        We designed end-to-end customer experience that differentiated from retail. We built personalized product recommendations based on use case. We created expert consultation services for complex purchases. We implemented premium packaging and unboxing experience. We also developed post-purchase engagement through content and community.
      </p>

      <h2>Managing Channel Relationships</h2>
      <p>
        We carefully managed the transition to avoid retail partner conflict. We communicated D2C strategy transparently with key partners. We maintained price parity on overlapping products. We created co-marketing programs that benefited both channels. We also developed data sharing that helped retailers serve customers better.
      </p>

      <h2>Building Customer Relationships</h2>
      <p>
        We leveraged D2C to build direct customer relationships. We implemented CRM to capture and utilize customer data. We created loyalty programs that drove repeat purchases. We built community features that connected enthusiast customers. We also developed feedback loops that informed product development.
      </p>

      <h2>Key Lessons</h2>
      <ul>
        <li>D2C and retail can coexist with careful strategy</li>
        <li>Exclusive products and customization differentiate D2C</li>
        <li>Direct customer relationships create long-term value</li>
        <li>Premium experience justifies D2C price points</li>
      </ul>
    </CaseStudyArticle>
  );
}
