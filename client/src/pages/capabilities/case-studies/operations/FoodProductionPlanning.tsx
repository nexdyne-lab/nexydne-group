import CaseStudyArticle from "@/components/CaseStudyArticle";

export default function FoodProductionPlanning() {
  return (
    <CaseStudyArticle
      industry="Operations"
      industryHref="/capabilities/operations"
      title="Production Planning Reduces Inventory by 35%"
      subtitle="How a food manufacturer transformed their planning processes to reduce inventory while improving customer service"
      client="A 160-employee food manufacturer with $72M in annual revenue, producing specialty sauces and condiments for foodservice and retail channels. The company operates two production facilities with 200+ SKUs."
      challenge="The company was caught in a vicious cycle: high inventory tied up working capital, but stockouts still occurred regularly. Production planning was reactive, driven by urgent customer requests rather than systematic forecasting. Changeover times were long, forcing large batch sizes that contributed to excess inventory."
      metrics={[
        { value: "35%", label: "Inventory Reduction" },
        { value: "98%", label: "On-Time Delivery" },
        { value: "$2.8M", label: "Working Capital Freed" },
        { value: "50%", label: "Changeover Reduction" },
      ]}
      relatedCaseStudies={[
        {
          title: "Supply Chain Optimization Reduces Costs by 25%",
          href: "/capabilities/operations/case-studies/consumer-goods-supply-chain",
          industry: "Manufacturing"
        },
        {
          title: "Warehouse Optimization Doubles Throughput",
          href: "/capabilities/operations/case-studies/distribution-warehouse",
          industry: "Distribution"
        },
        {
          title: "Quality System Implementation Achieves ISO Certification",
          href: "/capabilities/operations/case-studies/aerospace-quality",
          industry: "Aerospace"
        }
      ]}
    >
      <h2>Understanding the Planning Challenge</h2>
      <p>
        Our diagnostic revealed a planning process that created its own problems. Demand forecasts were updated quarterly and quickly became obsolete. Production schedules changed daily based on the loudest customer complaint. Changeover times of 4+ hours made small batches uneconomical. Safety stock levels were set arbitrarily and hadn't been reviewed in years.
      </p>

      <h2>Implementing Demand-Driven Planning</h2>
      <p>
        We transformed the planning process from reactive to proactive. We implemented weekly demand sensing that incorporated customer POS data and order patterns. We created statistical forecasting models calibrated to each product's demand characteristics. We established a formal S&OP process that aligned sales, operations, and finance. We also built exception-based planning that focused attention on meaningful deviations.
      </p>

      <h2>Reducing Changeover Times</h2>
      <p>
        Shorter changeovers enabled smaller batches and more responsive production. We conducted SMED (Single Minute Exchange of Die) events on critical production lines. We standardized changeover procedures and created visual work instructions. We invested in quick-change tooling for high-frequency changeovers. The result was a 50% reduction in average changeover time.
      </p>

      <h2>Optimizing Inventory Policies</h2>
      <p>
        With better planning and faster changeovers, we could right-size inventory. We implemented ABC-XYZ classification to segment SKUs by value and variability. We calculated optimal safety stock levels based on demand variability and service targets. We established inventory review processes that prevented creep. We also created slow-moving inventory disposition procedures.
      </p>

      <h2>Building Planning Capabilities</h2>
      <p>
        Sustainable improvement required building planning capabilities within the organization. We trained planners on demand forecasting and inventory optimization techniques. We implemented planning software that automated routine calculations. We established KPIs that balanced service, inventory, and cost objectives. We also created a planning center of excellence to drive continuous improvement.
      </p>

      <h2>Key Lessons</h2>
      <ul>
        <li>Demand visibility is the foundation for inventory optimization</li>
        <li>Changeover reduction enables smaller batches and lower inventory</li>
        <li>Inventory policies should be differentiated by SKU characteristics</li>
        <li>S&OP process alignment prevents conflicting objectives</li>
      </ul>
    </CaseStudyArticle>
  );
}
