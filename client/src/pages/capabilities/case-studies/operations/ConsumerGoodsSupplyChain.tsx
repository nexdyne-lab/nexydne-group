import CaseStudyArticle from "@/components/CaseStudyArticle";

export default function ConsumerGoodsSupplyChain() {
  return (
    <CaseStudyArticle
      industry="Operations"
      industryHref="/capabilities/operations"
      title="Supply Chain Optimization Reduces Costs by 25%"
      subtitle="How a consumer goods manufacturer transformed their supply chain to achieve significant cost savings and improved lead times"
      client="A 200-employee consumer goods manufacturer with $85M in annual revenue, operating three production facilities across the Midwest. The company produces household cleaning products sold through major retailers and regional distributors."
      challenge="The company faced escalating supply chain costs that were eroding margins in an increasingly competitive market. Raw material costs had increased 15% over two years, while customer demands for faster delivery were intensifying. The existing supply chain was fragmented, with limited visibility into inventory levels across facilities and no systematic approach to demand planning."
      metrics={[
        { value: "25%", label: "Cost Reduction" },
        { value: "40%", label: "Lead Time Improvement" },
        { value: "$3.2M", label: "Annual Savings" },
        { value: "98%", label: "On-Time Delivery" },
      ]}
      relatedCaseStudies={[
        {
          title: "Process Automation Transforms Order Fulfillment",
          href: "/capabilities/operations/case-studies/ecommerce-fulfillment",
          industry: "E-commerce"
        },
        {
          title: "Production Planning Reduces Inventory by 35%",
          href: "/capabilities/operations/case-studies/food-production-planning",
          industry: "Food & Beverage"
        },
        {
          title: "Warehouse Optimization Doubles Throughput",
          href: "/capabilities/operations/case-studies/distribution-warehouse",
          industry: "Distribution"
        }
      ]}
    >
      <h2>Mapping the Supply Chain Landscape</h2>
      <p>
        Our engagement began with a comprehensive supply chain diagnostic that revealed several interconnected issues. Inventory was distributed unevenly across facilities, with some locations holding 90+ days of stock while others faced frequent stockouts. The company maintained relationships with over 150 suppliers but had no formal supplier management program. Transportation costs were 18% above industry benchmarks due to inefficient routing and carrier selection. Demand forecasting relied on spreadsheets and sales team intuition, resulting in frequent production schedule changes.
      </p>

      <h2>Implementing Demand-Driven Planning</h2>
      <p>
        We implemented a demand-driven planning process that transformed how the company anticipated and responded to market needs. This included deploying a cloud-based demand planning system that integrated POS data from major retail customers, creating statistical forecasting models that improved accuracy from 65% to 88%, establishing a monthly S&OP process that aligned sales, production, and procurement, and building a demand sensing capability that detected shifts in consumer behavior within days rather than weeks.
      </p>

      <h2>Optimizing the Supplier Network</h2>
      <p>
        Our supplier optimization work focused on consolidating spend while maintaining supply security. We reduced the active supplier base from 150 to 85 while maintaining dual-source coverage for critical materials. We negotiated volume-based agreements with strategic suppliers that reduced material costs by 8%. We implemented a supplier scorecard system that tracked quality, delivery, and responsiveness. We also established a supplier development program for key partners.
      </p>

      <h2>Redesigning Distribution</h2>
      <p>
        The distribution network redesign delivered immediate cost savings. We consolidated from three regional distribution centers to two strategically located facilities. We implemented a transportation management system that optimized carrier selection and routing. We established milk-run delivery schedules for high-volume customers. We also negotiated new carrier contracts that reduced freight costs by 22%.
      </p>

      <h2>Building Operational Capabilities</h2>
      <p>
        Beyond process improvements, we focused on building sustainable capabilities within the organization. We trained the planning team on advanced forecasting techniques and S&OP facilitation. We implemented daily management systems that made supply chain performance visible. We established a continuous improvement program focused on logistics efficiency. We also created a supply chain analytics function to drive ongoing optimization.
      </p>

      <h2>Key Lessons</h2>
      <ul>
        <li>Demand visibility is the foundation for supply chain optimization</li>
        <li>Supplier consolidation enables better pricing and stronger partnerships</li>
        <li>Network redesign often delivers the largest cost savings</li>
        <li>Sustainable improvement requires capability building, not just process changes</li>
      </ul>
    </CaseStudyArticle>
  );
}
