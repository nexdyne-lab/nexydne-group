import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { TrendingUp, Boxes, Truck, LineChart, Radar, Handshake, Network, DollarSign } from "lucide-react";

export function ConsumerGoodsSupplyChain() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Supply Chain Optimization That Cut Costs 25% | Consumer Goods Case Study"
      seoDescription="A consumer-goods maker had 150 suppliers, freight 18% above benchmark, and forecasts on spreadsheets. Demand-driven planning cut supply-chain costs 25% and lifted on-time delivery to 98%."
      canonical="/capabilities/operations/case-studies/consumer-goods-supply-chain"
      industry="Manufacturing"
      industryLink="/industries/manufacturing"
      title="How a Consumer-Goods Maker Cut Supply-Chain Costs 25%"
      subtitle="A consumer-goods manufacturer transformed a fragmented supply chain with demand-driven planning, supplier consolidation, and network redesign — cutting costs 25% and reaching 98% on-time delivery."
      heroImage="/images/industries/retail-warehouse.jpg"
      metrics={[
        { value: "25%", label: "Cost Reduction" },
        { value: "40%", label: "Lead Time Improvement" },
        { value: "<1 yr", label: "Payback Period" },
        { value: "98%", label: "On-Time Delivery" }
      ]}
      clientContextTitle="Costs Eroding Margins"
      clientContextIntro="A 200-employee consumer-goods manufacturer operates three Midwest facilities producing household cleaning products for major retailers. Raw-material costs had risen 15% over two years while customer demands for faster delivery intensified — and the fragmented supply chain had little inventory visibility and no systematic demand planning."
      clientContextBody="The diagnostic revealed interconnected issues: inventory distributed unevenly (some sites holding 90+ days of stock, others facing stockouts), 150+ suppliers with no formal management, transportation costs 18% above benchmark from inefficient routing, and demand forecasting relying on spreadsheets and sales intuition."
      clientProfile={{
        industry: "Consumer-Goods Manufacturer",
        companySize: "200 Employees",
        projectDuration: "3 Facilities",
        additionalInfo: "S&OP Process",
        additionalLabel: "Capability"
      }}
      challengeTitle="Why the Supply Chain Cost Too Much"
      challenges={[
        {
          icon: Boxes,
          title: "Stockouts and 90+ days of stock",
          description: "Inventory sat unevenly across sites, causing simultaneous shortages and excess."
        },
        {
          icon: Handshake,
          title: "150+ unmanaged suppliers",
          description: "A fragmented supplier base had no formal management program or leverage."
        },
        {
          icon: Truck,
          title: "Freight 18% over benchmark",
          description: "Inefficient routing and carrier selection inflated transportation costs."
        },
        {
          icon: LineChart,
          title: "Spreadsheet forecasting",
          description: "Quarterly, intuition-based forecasts couldn't keep up with real demand."
        }
      ]}
      approachTitle="Demand-Driven, Consolidated, Redesigned"
      approachIntro="NEXDYNE implemented demand-driven planning, consolidated the supplier base, and redesigned the distribution network — replacing reactive scheduling with a durable S&OP capability."
      steps={[
        {
          step: "01",
          title: "Plan from real demand",
          description: "A cloud demand-planning system with retailer POS data and statistical models lifted forecast accuracy from 65% to 88%, sensing shifts in days."
        },
        {
          step: "02",
          title: "Run monthly S&OP",
          description: "A formal S&OP process aligned sales, production, and procurement on one plan."
        },
        {
          step: "03",
          title: "Consolidate suppliers",
          description: "The active base went from 150 to 85 with dual-sourcing on critical materials, cutting material costs 8% via volume agreements."
        },
        {
          step: "04",
          title: "Redesign distribution",
          description: "Consolidating to two strategic DCs plus a transportation management system cut freight costs 22%."
        }
      ]}
      resultsTitle="The Payoff"
      results={[
        {
          icon: DollarSign,
          value: "25%",
          label: "Lower supply-chain costs",
          detail: "The program paid for itself inside the first year"
        },
        {
          icon: TrendingUp,
          value: "40%",
          label: "Better lead times",
          detail: "With on-time delivery reaching 98%"
        },
        {
          icon: Network,
          value: "Resilience",
          label: "A stronger supplier base",
          detail: "Consolidated relationships replaced a fragile 150-supplier network"
        }
      ]}
      quote=""
      quoteAuthor=""
      quoteRole=""
      relatedStudies={[
        {
          title: "Doubling Warehouse Throughput Without Expanding",
          metric: "2x",
          label: "throughput",
          link: "/capabilities/operations/case-studies/distribution-warehouse",
          image: "/images/capabilities/cap-warehouse-robot.jpg"
        },
        {
          title: "AI Demand Forecasting That Cut Inventory 35%",
          metric: "35%",
          label: "less inventory",
          link: "/capabilities/artificial-intelligence/case-studies/distributor-demand-forecasting",
          image: "/images/industries/retail-warehouse.jpg"
        }
      ]}
      ctaTitle="Ready to take cost out of your supply chain?"
      ctaDescription="Let's talk about what demand-driven planning could do for your costs and service."
    />
  );
}

export default ConsumerGoodsSupplyChain;
