import CaseStudyArticle from "@/components/CaseStudyArticle";

export default function DistributionWarehouse() {
  return (
    <CaseStudyArticle
      industry="Operations"
      industryHref="/capabilities/operations"
      title="Warehouse Optimization Doubles Throughput"
      subtitle="How a distribution company transformed their warehouse operations to double capacity without expanding footprint"
      client="A 180-employee distribution company with $95M in annual revenue, serving industrial customers across the Southeast. The company operates a 350,000 square foot distribution center handling 15,000 SKUs."
      challenge="Growing demand had pushed the warehouse to apparent capacity limits. Management was planning a $12M facility expansion, but lead times and capital constraints made this problematic. The company needed to find capacity within the existing footprint while improving service levels."
      metrics={[
        { value: "2x", label: "Throughput Increase" },
        { value: "30%", label: "Space Utilization Gain" },
        { value: "$12M", label: "Expansion Avoided" },
        { value: "99.5%", label: "Order Accuracy" },
      ]}
      relatedCaseStudies={[
        {
          title: "Supply Chain Optimization Reduces Costs by 25%",
          href: "/capabilities/operations/case-studies/consumer-goods-supply-chain",
          industry: "Manufacturing"
        },
        {
          title: "Process Automation Transforms Order Fulfillment",
          href: "/capabilities/operations/case-studies/ecommerce-fulfillment",
          industry: "E-commerce"
        },
        {
          title: "Production Planning Reduces Inventory by 35%",
          href: "/capabilities/operations/case-studies/food-production-planning",
          industry: "Food & Beverage"
        }
      ]}
    >
      <h2>Diagnosing the Capacity Constraint</h2>
      <p>
        Our analysis revealed that the warehouse wasn't actually at capacity—it was at the limit of current processes. Vertical space was underutilized, with racking only 60% of available height. Slotting hadn't been optimized in years, so fast-moving items were scattered throughout the facility. Pick paths were inefficient, with workers backtracking frequently. Receiving and shipping competed for the same dock doors during peak periods.
      </p>

      <h2>Optimizing Storage Density</h2>
      <p>
        We implemented a comprehensive storage optimization program. We installed narrow-aisle racking that increased storage positions by 40%. We implemented velocity-based slotting that placed fast movers in prime locations. We deployed vertical lift modules for small parts storage. We also created a forward pick area that reduced travel for high-frequency items.
      </p>

      <h2>Redesigning Material Flow</h2>
      <p>
        The facility layout was redesigned to eliminate bottlenecks and reduce travel. We separated receiving and shipping to dedicated dock areas. We implemented cross-docking for high-velocity items that didn't need storage. We created staging zones that smoothed flow between operations. We also established one-way traffic patterns that eliminated congestion.
      </p>

      <h2>Implementing Lean Operations</h2>
      <p>
        Beyond physical changes, we transformed how work was organized and managed. We implemented wave planning that batched orders for efficient processing. We deployed pick-to-cart systems that allowed simultaneous multi-order picking. We established standard work for all warehouse operations. We also created visual management systems that made performance visible in real-time.
      </p>

      <h2>Building Sustainable Capability</h2>
      <p>
        To ensure improvements would stick, we focused on building organizational capability. We trained supervisors in lean management principles and daily management systems. We established a continuous improvement program with regular kaizen events. We implemented a slotting review process that maintained optimal product placement. We also created performance dashboards that drove accountability.
      </p>

      <h2>Key Lessons</h2>
      <ul>
        <li>Apparent capacity constraints often reflect process limitations, not physical limits</li>
        <li>Vertical space is frequently the most underutilized resource</li>
        <li>Slotting optimization delivers ongoing productivity benefits</li>
        <li>Lean principles apply to distribution as effectively as manufacturing</li>
      </ul>
    </CaseStudyArticle>
  );
}
