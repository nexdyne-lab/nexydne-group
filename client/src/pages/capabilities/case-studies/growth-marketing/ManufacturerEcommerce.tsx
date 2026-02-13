import CaseStudyArticle from "@/components/CaseStudyArticle";

export default function ManufacturerEcommerce() {
  return (
    <CaseStudyArticle
      industry="Growth, Marketing & Sales"
      industryHref="/capabilities/growth-marketing-sales"
      title="E-commerce Launch Drives $5M New Revenue"
      subtitle="How a manufacturer successfully launched a direct-to-consumer channel to diversify revenue and capture higher margins"
      client="A 200-employee manufacturer with $95M in annual revenue, producing specialty outdoor equipment sold through distributors and retailers. The company had strong brand recognition but no direct relationship with end consumers."
      challenge="Retail consolidation was squeezing margins and limiting growth. The company had no direct consumer data or relationships. Competitors were launching DTC channels and building brand loyalty. The company needed to establish e-commerce without alienating existing channel partners."
      metrics={[
        { value: "$5M", label: "Year 1 Revenue" },
        { value: "15K", label: "New Customers" },
        { value: "45%", label: "Gross Margin" },
        { value: "12%", label: "Repeat Rate" },
      ]}
      relatedCaseStudies={[
        {
          title: "Digital Marketing Transformation Doubles Lead Generation",
          href: "/capabilities/growth-marketing-sales/case-studies/b2b-digital-marketing",
          industry: "Professional Services"
        },
        {
          title: "Customer Retention Program Reduces Churn by 40%",
          href: "/capabilities/growth-marketing-sales/case-studies/subscription-retention",
          industry: "Media & Entertainment"
        },
        {
          title: "Pricing Optimization Improves Margins by 8 Points",
          href: "/capabilities/growth-marketing-sales/case-studies/distribution-pricing",
          industry: "Distribution"
        }
      ]}
    >
      <h2>Designing the Channel Strategy</h2>
      <p>
        We developed a DTC strategy that complemented rather than competed with existing channels. We identified product categories where DTC made sense—limited editions, customization, and accessories. We established pricing that maintained channel parity while capturing margin. We created a brand experience that differentiated from retail. We also developed a communication plan for channel partners.
      </p>

      <h2>Building the E-commerce Platform</h2>
      <p>
        We implemented a modern e-commerce platform designed for the brand experience. We selected a platform that balanced capability with implementation speed. We designed a user experience that showcased products and told brand stories. We integrated with existing ERP and inventory systems. We also implemented analytics and personalization capabilities.
      </p>

      <h2>Launching Digital Marketing</h2>
      <p>
        We developed an integrated marketing strategy to drive traffic and conversion. We implemented SEO strategies targeting product and category keywords. We launched paid advertising across search, social, and display channels. We created content marketing that built brand awareness and engagement. We also established email marketing for customer acquisition and retention.
      </p>

      <h2>Optimizing Operations</h2>
      <p>
        We built operational capabilities to support DTC fulfillment. We established a dedicated fulfillment process for consumer orders. We implemented customer service capabilities for direct consumer support. We created returns and exchange processes that maintained customer satisfaction. We also built reporting that tracked DTC performance separately from wholesale.
      </p>

      <h2>Scaling and Expanding</h2>
      <p>
        After successful launch, we focused on scaling and expanding the channel. We optimized marketing spend based on customer acquisition cost and lifetime value. We expanded product assortment based on consumer demand signals. We launched loyalty and subscription programs to increase retention. We also explored international expansion opportunities.
      </p>

      <h2>Key Lessons</h2>
      <ul>
        <li>DTC strategy must complement, not cannibalize, existing channels</li>
        <li>Brand experience is the key differentiator for manufacturer DTC</li>
        <li>Operational capabilities are as important as the platform</li>
        <li>Customer data from DTC informs broader business strategy</li>
      </ul>
    </CaseStudyArticle>
  );
}
