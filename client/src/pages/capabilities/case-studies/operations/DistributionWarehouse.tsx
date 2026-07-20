import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { ArrowUpDown, Route, DoorOpen, PackageSearch, Boxes, Waypoints, Gauge, DollarSign } from "lucide-react";

export function DistributionWarehouse() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Doubling Warehouse Throughput Without Expanding | Distribution Case Study"
      seoDescription="A regional distributor was planning a major warehouse expansion, but the facility wasn't at physical capacity — it was at process capacity. Optimization doubled throughput and avoided the expansion."
      canonical="/capabilities/operations/case-studies/distribution-warehouse"
      industry="Transportation & Logistics"
      industryLink="/industries/transportation-logistics"
      title="How a Distributor Doubled Warehouse Throughput Without Expanding"
      subtitle="A distribution company transformed its warehouse operations — narrow-aisle racking, velocity slotting, and lean flow — doubling throughput within the existing footprint and avoiding the planned facility expansion entirely."
      heroImage="/images/capabilities/cap-warehouse-robot.jpg"
      metrics={[
        { value: "2x", label: "Throughput Increase" },
        { value: "30%", label: "Space Utilization Gain" },
        { value: "0", label: "Expansion Capital Spent" },
        { value: "99.5%", label: "Order Accuracy" }
      ]}
      clientContextTitle="At Capacity, or Just at Process Limits?"
      clientContextIntro="A 180-employee distribution company operates a 350,000-square-foot distribution center handling 15,000 SKUs across the Southeast. Growing demand had pushed the warehouse to apparent capacity, and management was planning a major facility expansion despite lead-time and capital constraints."
      clientContextBody="Analysis revealed the warehouse wasn't at physical capacity — it was at the limit of its current processes. Vertical space was underutilized at 60% of racking height, slotting hadn't been optimized in years so fast movers were scattered, pick paths forced constant backtracking, and receiving and shipping competed for the same dock doors at peak."
      clientProfile={{
        industry: "Industrial Distributor",
        companySize: "350,000 sq ft",
        projectDuration: "Within Footprint",
        additionalInfo: "15,000 SKUs",
        additionalLabel: "Handled"
      }}
      challengeTitle="Why Capacity Felt Maxed"
      challenges={[
        {
          icon: ArrowUpDown,
          title: "Underused vertical space",
          description: "Racking ran at just 60% of available height, wasting cubic capacity."
        },
        {
          icon: PackageSearch,
          title: "Stale slotting",
          description: "Fast-moving items were scattered throughout, unreviewed for years."
        },
        {
          icon: Route,
          title: "Inefficient pick paths",
          description: "Workers backtracked constantly, adding travel time to every order."
        },
        {
          icon: DoorOpen,
          title: "Dock-door contention",
          description: "Receiving and shipping competed for the same doors during peak periods."
        }
      ]}
      approachTitle="Find Capacity in the Process"
      approachIntro="NEXDYNE ran a storage-optimization and lean-flow program that found capacity inside the existing building — redesigning storage, layout, and operations rather than pouring concrete."
      steps={[
        {
          step: "01",
          title: "Optimize storage",
          description: "Narrow-aisle racking added 40% more positions, with velocity slotting, vertical lift modules, and a forward pick area."
        },
        {
          step: "02",
          title: "Redesign the layout",
          description: "Dedicated receiving and shipping docks, cross-docking for fast movers, staging zones, and one-way traffic eliminated bottlenecks."
        },
        {
          step: "03",
          title: "Run lean operations",
          description: "Wave planning, pick-to-cart multi-order picking, standard work, and real-time visual management smoothed flow."
        },
        {
          step: "04",
          title: "Sustain the gains",
          description: "Lean-management training, a kaizen program, and a slotting-review process kept improvements coming."
        }
      ]}
      resultsTitle="The Payoff"
      results={[
        {
          icon: Gauge,
          value: "2x",
          label: "Throughput",
          detail: "Within the existing 350,000 sq ft footprint"
        },
        {
          icon: DollarSign,
          value: "0",
          label: "Expansion capital spent",
          detail: "Preserving capital and years of lead time"
        },
        {
          icon: Boxes,
          value: "99.5%",
          label: "Order accuracy",
          detail: "As standardized picking replaced inconsistent methods"
        }
      ]}
      quote=""
      quoteAuthor=""
      quoteRole=""
      relatedStudies={[
        {
          title: "Automating Order Fulfillment to Triple Capacity",
          metric: "3x",
          label: "order capacity",
          link: "/capabilities/operations/case-studies/ecommerce-fulfillment",
          image: "/images/industries/retail-warehouse.jpg"
        },
        {
          title: "Cutting Supply-Chain Costs 25% for a Consumer-Goods Maker",
          metric: "25%",
          label: "cost reduction",
          link: "/capabilities/operations/case-studies/consumer-goods-supply-chain",
          image: "/images/industries/retail-warehouse.jpg"
        }
      ]}
      ctaTitle="Ready to find capacity you already have?"
      ctaDescription="Let's talk about what warehouse optimization could do before you build."
    />
  );
}

export default DistributionWarehouse;
