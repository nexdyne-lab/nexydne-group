import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { DollarSign, PackageX, Boxes, TrendingDown, Brain, Layers, Gauge, Wallet } from "lucide-react";

export function DistributorDemandForecasting() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="AI Demand Forecasting That Cut Inventory 35% | Distribution Case Study"
      seoDescription="A regional distributor's carrying costs ate 18% of margin and 8% of orders stocked out across 15,000 SKUs. AI forecasting cut inventory 35% and stockouts to 2.1% of orders."
      canonical="/capabilities/artificial-intelligence/case-studies/distributor-demand-forecasting"
      industry="Transportation & Logistics"
      industryLink="/industries/transportation-logistics"
      title="How a Wholesale Distributor Cut Inventory 35% With AI Demand Forecasting"
      subtitle="A regional distributor deployed hierarchical ML forecasting across 15,000+ SKUs and 5 distribution centers — cutting inventory 35% while cutting stockouts from 8% to 2.1% of orders."
      heroImage="/images/industries/retail-warehouse.jpg"
      metrics={[
        { value: "35%", label: "Inventory Reduction" },
        { value: "92%", label: "Forecast Accuracy" },
        { value: "2.1%", label: "Stockout Rate" },
        { value: "1/3", label: "Working Capital Freed" }
      ]}
      clientContextTitle="Forecasting That Couldn't Scale"
      clientContextIntro="A wholesale distribution company with 180 employees distributes industrial supplies to 3,000+ customers across the Midwest from 5 distribution centers. Inventory carrying costs consumed 18% of gross margin, and stockouts hit 8% of orders."
      clientContextBody="Manual forecasting couldn't keep pace with 15,000+ SKUs across multiple locations. Customer ordering behavior varied by industry segment, supplier lead times were volatile, and geographic seasonal patterns compounded the complexity — making traditional forecasting inadequate at scale and eroding both margin and customer satisfaction."
      clientProfile={{
        industry: "Wholesale Distributor",
        companySize: "180 Employees",
        projectDuration: "5 Distribution Centers",
        additionalInfo: "15,000+ SKUs",
        additionalLabel: "Catalog"
      }}
      challengeTitle="Why Inventory Ran Out of Control"
      challenges={[
        {
          icon: DollarSign,
          title: "18% of margin in carrying cost",
          description: "Static safety stock across 15,000 SKUs tied up working capital and eroded gross margin."
        },
        {
          icon: PackageX,
          title: "8% of orders stocked out",
          description: "Missed availability frustrated 3,000+ customers across industry segments."
        },
        {
          icon: Boxes,
          title: "Manual forecasting at its limit",
          description: "No manual process could handle 15,000 SKUs across five locations at the needed accuracy."
        },
        {
          icon: TrendingDown,
          title: "Volatile, seasonal demand",
          description: "Supplier lead-time variability and geographic seasonality defeated traditional methods."
        }
      ]}
      approachTitle="Hierarchical ML, Built for Distribution"
      approachIntro="NEXDYNE developed a machine-learning forecasting system tailored to distribution — incorporating sales history, customer attributes, and external signals, and going beyond forecasts to optimize inventory decisions."
      steps={[
        {
          step: "01",
          title: "Forecast at every level",
          description: "Hierarchical forecasting worked at SKU, category, and location levels with automatic seasonality and anomaly detection."
        },
        {
          step: "02",
          title: "Add the external signals",
          description: "The model incorporated economic indicators, weather, customer financial health, and supplier lead times for dynamic safety stock."
        },
        {
          step: "03",
          title: "Optimize the whole network",
          description: "Dynamic reorder points and multi-echelon optimization across all five centers balanced inventory network-wide."
        },
        {
          step: "04",
          title: "Keep buyers in control",
          description: "Exception-based dashboards focused buyer attention on real decisions, with feedback loops improving the model over time."
        }
      ]}
      resultsTitle="The Payoff"
      results={[
        {
          icon: Wallet,
          value: "35%",
          label: "Less inventory",
          detail: "Freeing a third of tied-up working capital while improving service"
        },
        {
          icon: Gauge,
          value: "92%",
          label: "Forecast accuracy",
          detail: "With stockouts down from 8% to 2.1% of orders"
        },
        {
          icon: Layers,
          value: "5 DCs",
          label: "Balanced network-wide",
          detail: "Multi-echelon optimization improved fill rates across all centers"
        }
      ]}
      quote=""
      quoteAuthor=""
      quoteRole=""
      relatedStudies={[
        {
          title: "Cutting Stockouts 35% With ML Demand Forecasting",
          metric: "35%",
          label: "fewer stockouts",
          link: "/cases/retail-demand-forecasting",
          image: "/images/cases/retail-demand-forecasting-hero.jpg"
        },
        {
          title: "Reducing Manufacturing Downtime With Predictive Maintenance",
          metric: "45%",
          label: "less downtime",
          link: "/capabilities/artificial-intelligence/case-studies/manufacturing-predictive-maintenance",
          image: "/images/industries/mfg-robotics.jpg"
        }
      ]}
      ctaTitle="Ready to right-size your inventory?"
      ctaDescription="Let's talk about what AI forecasting could do for your working capital and service levels."
    />
  );
}

export default DistributorDemandForecasting;
