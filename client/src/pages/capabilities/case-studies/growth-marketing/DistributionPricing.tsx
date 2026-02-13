import CaseStudyArticle from "@/components/CaseStudyArticle";

export default function DistributionPricing() {
  return (
    <CaseStudyArticle
      industry="Growth, Marketing & Sales"
      industryHref="/capabilities/growth-marketing-sales"
      title="Pricing Optimization Improves Margins by 8 Points"
      subtitle="How a distribution company transformed their pricing approach to capture value while maintaining customer relationships"
      client="A 160-employee distribution company with $125M in annual revenue, serving industrial customers with MRO supplies and equipment. The company had grown through acquisition but pricing was inconsistent across the combined customer base."
      challenge="Gross margins had eroded from 28% to 22% over five years as sales reps discounted to win deals. Pricing was ad hoc, with no systematic approach to setting or managing prices. Customer profitability varied wildly, with some accounts actually losing money. Competitors were using data-driven pricing while the company relied on gut feel."
      metrics={[
        { value: "8pts", label: "Margin Improvement" },
        { value: "3%", label: "Customer Retention" },
        { value: "$10M", label: "Profit Impact" },
        { value: "30%", label: "Pricing Consistency" },
      ]}
      relatedCaseStudies={[
        {
          title: "Sales Process Optimization Increases Win Rate",
          href: "/capabilities/growth-marketing-sales/case-studies/software-sales-optimization",
          industry: "Technology"
        },
        {
          title: "E-commerce Launch Drives $5M New Revenue",
          href: "/capabilities/growth-marketing-sales/case-studies/manufacturer-ecommerce",
          industry: "Manufacturing"
        },
        {
          title: "Account-Based Marketing Lands Enterprise Clients",
          href: "/capabilities/growth-marketing-sales/case-studies/tech-abm",
          industry: "Technology"
        }
      ]}
    >
      <h2>Diagnosing Pricing Leakage</h2>
      <p>
        Our analysis revealed significant value leakage across multiple dimensions. List prices hadn't been updated in years and didn't reflect market conditions. Discounting was inconsistent—similar customers received vastly different prices. Freight and handling charges were often waived without justification. Rebates and allowances had accumulated without systematic review.
      </p>

      <h2>Building the Pricing Foundation</h2>
      <p>
        We established the infrastructure for systematic pricing management. We implemented pricing software that provided visibility and control. We created a pricing governance structure with clear roles and approval authorities. We established pricing analytics that tracked performance and identified opportunities. We also built a pricing team with dedicated resources and capabilities.
      </p>

      <h2>Optimizing List Prices</h2>
      <p>
        We developed a data-driven approach to setting list prices. We analyzed competitive positioning and price elasticity by product category. We implemented market-based pricing that reflected value and competition. We established a regular review cadence to keep prices current. We also created a process for pricing new products at launch.
      </p>

      <h2>Managing Discounts and Exceptions</h2>
      <p>
        We transformed how discounts were granted and managed. We created discount guidelines based on customer value and competitive situation. We implemented approval workflows that required justification for exceptions. We established deal desk support for complex pricing situations. We also built reporting that tracked discount trends and outliers.
      </p>

      <h2>Enabling the Sales Team</h2>
      <p>
        We equipped sales reps to have value-based pricing conversations. We developed training on pricing strategy and negotiation techniques. We created tools that showed customer profitability and pricing history. We established incentives that rewarded margin, not just revenue. We also built coaching programs that reinforced pricing discipline.
      </p>

      <h2>Key Lessons</h2>
      <ul>
        <li>Pricing visibility is the first step to pricing improvement</li>
        <li>Discount governance prevents margin erosion</li>
        <li>Sales enablement is essential for pricing execution</li>
        <li>Pricing improvement is sustainable with the right infrastructure</li>
      </ul>
    </CaseStudyArticle>
  );
}
