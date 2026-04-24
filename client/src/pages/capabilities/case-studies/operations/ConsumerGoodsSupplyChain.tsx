import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export default function ConsumerGoodsSupplyChain() {
  return (
    <CaseStudyTemplate
      client="Consumer Goods Manufacturer"
      industry="Manufacturing · Operations"
      title="Supply Chain Optimization Reduces Costs by 25%"
      subtitle="How a consumer goods manufacturer transformed their supply chain to achieve significant cost savings and improved lead times."
      heroImage="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1600&q=80"
      challenge={`The company faced escalating supply chain costs that were eroding margins in an increasingly competitive market. Raw material costs had increased 15% over two years, while customer demands for faster delivery were intensifying. The existing supply chain was fragmented, with limited visibility into inventory levels across facilities and no systematic approach to demand planning.

A 200-employee consumer goods manufacturer with $85M in annual revenue operates three production facilities across the Midwest, producing household cleaning products sold through major retailers and regional distributors. The supply chain diagnostic revealed interconnected issues: inventory distributed unevenly across facilities (some locations holding 90+ days of stock, others facing frequent stockouts), over 150 suppliers with no formal management program, transportation costs 18% above industry benchmarks due to inefficient routing and carrier selection, and demand forecasting relying on spreadsheets and sales team intuition.`}
      solution={`NEXDYNE implemented a demand-driven planning process with a cloud-based demand planning system integrating POS data from major retail customers, statistical forecasting models improving accuracy from 65% to 88%, a monthly S&OP process aligning sales, production, and procurement, and a demand sensing capability detecting consumer behavior shifts within days rather than weeks.

Supplier optimization consolidated the active supplier base from 150 to 85 while maintaining dual-source coverage for critical materials. Volume-based agreements with strategic suppliers reduced material costs by 8%, supported by a supplier scorecard tracking quality, delivery, and responsiveness.

The distribution network was redesigned, consolidating from three regional distribution centers to two strategically located facilities and implementing a transportation management system optimizing carrier selection and routing. New carrier contracts reduced freight costs 22%. Planning team capabilities were built through advanced forecasting training, daily management systems, and a supply chain analytics function.`}
      impact={`Supply chain costs decreased 25%, generating $3.2 million in annual savings. Lead times improved 40% as demand-driven planning replaced reactive scheduling, enabling the company to meet customer delivery requirements consistently. On-time delivery reached 98%, strengthening relationships with major retail customers.

Working capital improved significantly as inventory levels normalized across facilities—ending the paradox of simultaneous stockouts and excess inventory. The supplier consolidation, combined with stronger volume-based relationships, created a more resilient supply base than the previous fragmented 150-supplier network. The S&OP process became a durable management capability that continues to adapt supply chain decisions to changing market conditions.`}
      metrics={[
        { value: "25%", label: "Cost reduction" },
        { value: "40%", label: "Lead time improvement" },
        { value: "$3.2M", label: "Annual savings" },
        { value: "98%", label: "On-time delivery" }
      ]}
      tags={["Manufacturing", "Supply Chain", "Operations", "Cost Reduction"]}
      relatedCapability={{
        title: "Operations",
        link: "/capabilities/operations"
      }}
    />
  );
}
