import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export default function DistributionWarehouse() {
  return (
    <CaseStudyTemplate
      client="Industrial Distribution Company"
      industry="Distribution · Operations"
      title="Warehouse Optimization Doubles Throughput"
      subtitle="How a distribution company transformed their warehouse operations to double capacity without expanding footprint."
      heroImage="https://images.unsplash.com/photo-1553413077-190dd305871c?w=1600&q=80"
      challenge={`Growing demand had pushed the warehouse to apparent capacity limits. Management was planning a $12M facility expansion, but lead times and capital constraints made this problematic. The company needed to find capacity within the existing footprint while improving service levels.

A 180-employee distribution company with $95M in annual revenue operates a 350,000 square foot distribution center handling 15,000 SKUs serving industrial customers across the Southeast. Analysis revealed the warehouse wasn't actually at physical capacity—it was at the limit of current processes. Vertical space was underutilized at only 60% of available racking height. Slotting hadn't been optimized in years, so fast-moving items were scattered throughout the facility. Pick paths were inefficient, with workers frequently backtracking. Receiving and shipping competed for the same dock doors during peak periods.`}
      solution={`NEXDYNE implemented a comprehensive storage optimization program: narrow-aisle racking increasing storage positions by 40%, velocity-based slotting placing fast movers in prime locations, vertical lift modules for small parts storage, and a forward pick area reducing travel for high-frequency items.

The facility layout was redesigned to eliminate bottlenecks and reduce travel—separating receiving and shipping to dedicated dock areas, implementing cross-docking for high-velocity items, creating staging zones smoothing flow between operations, and establishing one-way traffic patterns eliminating congestion.

Lean operations implementation included wave planning batching orders for efficient processing, pick-to-cart systems allowing simultaneous multi-order picking, standard work for all warehouse operations, and visual management systems making performance visible in real-time. Supervisors were trained in lean management principles, a continuous improvement program with regular kaizen events was established, and a slotting review process maintained optimal product placement.`}
      impact={`Throughput doubled within the existing 350,000 square foot footprint, making the planned $12 million facility expansion unnecessary. Space utilization improved 30% through vertical storage additions and slotting optimization. Order accuracy reached 99.5% as standardized pick processes replaced the inconsistent individual approaches that had driven errors.

The avoided expansion represented immediate capital preservation while the operational improvements also reduced ongoing labor costs per unit processed. The lean management system, now embedded in daily operations, continues to generate incremental improvements through the kaizen program. The company gained capacity for projected growth over the next 5 years without the facility investment, lead time, and disruption that the expansion would have required.`}
      metrics={[
        { value: "2x", label: "Throughput increase" },
        { value: "30%", label: "Space utilization gain" },
        { value: "$12M", label: "Expansion avoided" },
        { value: "99.5%", label: "Order accuracy" }
      ]}
      tags={["Distribution", "Warehouse", "Operations", "Lean"]}
      relatedCapability={{
        title: "Operations",
        link: "/capabilities/operations"
      }}
    />
  );
}
