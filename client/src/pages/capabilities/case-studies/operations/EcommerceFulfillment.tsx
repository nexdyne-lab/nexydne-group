import CaseStudyArticle from "@/components/CaseStudyArticle";

export default function EcommerceFulfillment() {
  return (
    <CaseStudyArticle
      industry="Operations"
      industryHref="/capabilities/operations"
      title="Process Automation Transforms Order Fulfillment"
      subtitle="How an e-commerce company automated their fulfillment operations to triple capacity while reducing labor costs"
      client="A 175-employee e-commerce company with $65M in annual revenue, specializing in home goods and décor. The company operates a single 200,000 square foot fulfillment center serving customers nationwide."
      challenge="Rapid growth had pushed the fulfillment operation to its limits. Order volume had doubled in 18 months, but the largely manual processes couldn't scale. Peak season required hiring 50+ temporary workers, training was inconsistent, and error rates spiked during high-volume periods. The company needed to triple capacity without proportionally increasing headcount."
      metrics={[
        { value: "3x", label: "Order Capacity" },
        { value: "60%", label: "Labor Cost Reduction" },
        { value: "99.2%", label: "Order Accuracy" },
        { value: "4 hrs", label: "Avg Ship Time" },
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
          title: "Production Planning Reduces Inventory by 35%",
          href: "/capabilities/operations/case-studies/food-production-planning",
          industry: "Food & Beverage"
        }
      ]}
    >
      <h2>Assessing the Current State</h2>
      <p>
        Our diagnostic revealed a fulfillment operation held together by heroic effort rather than systematic processes. Picking was done via paper lists, with workers walking an average of 8 miles per shift. Packing stations had no standardization—each worker had developed their own approach. Quality checks were visual and inconsistent. The warehouse management system was 12 years old and couldn't support modern automation.
      </p>

      <h2>Designing the Automated Future</h2>
      <p>
        We developed a phased automation roadmap that balanced investment with returns. Phase 1 focused on quick wins: implementing a modern WMS, redesigning pick paths, and standardizing packing stations. Phase 2 introduced goods-to-person automation for high-velocity SKUs. Phase 3 added automated sorting and packing for standard orders. Each phase was designed to deliver positive ROI within 12 months.
      </p>

      <h2>Implementing Modern WMS</h2>
      <p>
        The new warehouse management system became the foundation for all subsequent improvements. We implemented wave planning that optimized pick sequences and reduced travel time by 40%. We introduced zone picking that allowed parallel processing of large orders. We deployed mobile devices that provided real-time guidance and eliminated paper. We also built integration with the e-commerce platform for seamless order flow.
      </p>

      <h2>Automating High-Volume Processing</h2>
      <p>
        For the 20% of SKUs that represented 80% of picks, we implemented goods-to-person automation. Automated storage and retrieval systems brought products to stationary pick stations. Pick-to-light systems guided workers with 99.9% accuracy. Conveyor systems moved completed picks to packing stations. The result was a 5x productivity improvement for high-velocity items.
      </p>

      <h2>Standardizing and Scaling</h2>
      <p>
        Beyond automation, we focused on standardizing processes to enable consistent performance. We developed standard work procedures for every fulfillment task. We created a training program that reduced new hire ramp-up from 4 weeks to 1 week. We implemented real-time performance dashboards that made productivity visible. We also established a continuous improvement program driven by frontline workers.
      </p>

      <h2>Key Lessons</h2>
      <ul>
        <li>Modern WMS is the foundation for any fulfillment automation</li>
        <li>Focus automation investment on high-volume, repetitive tasks</li>
        <li>Standardization enables both automation and workforce flexibility</li>
        <li>Phased implementation reduces risk and demonstrates value quickly</li>
      </ul>
    </CaseStudyArticle>
  );
}
