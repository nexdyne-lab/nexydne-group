import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Split, Clock, Percent, PackageX, Network, Brain, ArrowLeftRight, DollarSign } from "lucide-react";

export function RetailCaseStudy() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Cutting Inventory Carrying Costs 47% With AI | Retail Case Study"
      seoDescription="A 28-store specialty retailer had excess stock in some stores and stockouts in others, with 28% seasonal markdowns. AI-driven inventory optimization cut carrying costs 47% and stockouts 68%."
      canonical="/case-studies/retail-inventory-optimization"
      industry="Retail"
      industryLink="/industries/retail"
      title="How a Specialty Retailer Cut Inventory Carrying Costs 47%"
      subtitle="A 28-store specialty home-goods retailer deployed AI-driven inventory optimization with real-time visibility — cutting carrying costs 47%, stockouts 68%, and saving $2.1M a year."
      heroImage="/images/capabilities/cap-retail-apparel.jpg"
      metrics={[
        { value: "47%", label: "Lower Carrying Costs" },
        { value: "68%", label: "Fewer Stockouts" },
        { value: "$2.1M", label: "Annual Savings" },
        { value: "28", label: "Store Locations" }
      ]}
      clientContextTitle="Excess and Stockouts at Once"
      clientContextIntro="A specialty home-goods retailer with 28 stores across the Midwest and East, 320 employees, and 15,000+ SKUs struggled with simultaneous inventory problems — excess in some locations while stocking out in others. Rapid expansion from 12 to 28 stores in four years outgrew legacy systems."
      clientContextBody="Each store ran semi-independent inventory that didn't sync in real time, so corporate buyers decided on weekly aggregated reports with a 5–7 day lag. With 40% of revenue in seasonal products, the company over-ordered some seasons and under-ordered others, with end-of-season markdowns averaging 28% of seasonal inventory. Online orders drew from a separate warehouse, so 12% were canceled or delayed when products showed in stock but were allocated to stores."
      clientProfile={{
        industry: "Home-Goods Retailer",
        companySize: "28 Stores",
        projectDuration: "Unified Platform",
        additionalInfo: "15,000+ SKUs",
        additionalLabel: "Catalog"
      }}
      challengeTitle="Why Inventory Was Out of Balance"
      challenges={[
        {
          icon: Split,
          title: "Semi-independent store systems",
          description: "Stores didn't sync in real time, so buyers worked from weekly aggregated reports."
        },
        {
          icon: Clock,
          title: "5–7 day replenishment lag",
          description: "The gap between actual sales and decisions missed critical demand signals."
        },
        {
          icon: Percent,
          title: "28% seasonal markdowns",
          description: "Over- and under-ordering on 40%-seasonal revenue drove heavy end-of-season markdowns."
        },
        {
          icon: PackageX,
          title: "Split online inventory",
          description: "A separate warehouse pool canceled or delayed 12% of online orders shown in stock."
        }
      ]}
      approachTitle="One Inventory Pool, AI-Optimized"
      approachIntro="NEXDYNE implemented a unified inventory-intelligence platform with real-time cross-channel visibility, AI demand forecasting, and automated allocation."
      steps={[
        {
          step: "01",
          title: "Sync everything in real time",
          description: "Integration across 28 stores, the warehouse, and e-commerce updated every sale, return, and transfer within seconds."
        },
        {
          step: "02",
          title: "Forecast at store-SKU level",
          description: "ML models used sales history, local events, and weather for 90-day rolling forecasts at 87%+ accuracy, updated daily."
        },
        {
          step: "03",
          title: "Automate rebalancing",
          description: "Detected imbalances generated pre-approved transfer recommendations with optimal routing and one-click confirmation."
        },
        {
          step: "04",
          title: "Unify the channels",
          description: "A single inventory pool served store and online, with ship-from-store fulfilling from the nearest location with stock."
        }
      ]}
      resultsTitle="The Payoff"
      results={[
        {
          icon: DollarSign,
          value: "47%",
          label: "Lower carrying costs",
          detail: "From $4.2M to $2.2M, with turnover from 4.2x to 6.1x"
        },
        {
          icon: PackageX,
          value: "68%",
          label: "Fewer stockouts",
          detail: "From 340 to 108 a month, capturing lost sales"
        },
        {
          icon: Percent,
          value: "11%",
          label: "Seasonal markdown rate",
          detail: "Down from 28%, protecting gross margin"
        }
      ]}
      quote="The transformation has been remarkable. We went from constantly firefighting inventory issues to having predictive insights that let us stay ahead of demand. Our buyers now spend their time on strategic decisions instead of chasing data."
      quoteAuthor="Michael Rodriguez"
      quoteRole="VP of Operations, HomeStyle Goods"
      relatedStudies={[
        {
          title: "Cutting Stockouts 35% With ML Demand Forecasting",
          metric: "35%",
          label: "fewer stockouts",
          link: "/cases/retail-demand-forecasting",
          image: "/images/capabilities/cap-retail-apparel.jpg"
        },
        {
          title: "Automating Order Fulfillment to Triple Capacity",
          metric: "3x",
          label: "order capacity",
          link: "/capabilities/operations/case-studies/ecommerce-fulfillment",
          image: "/images/industries/retail-warehouse.jpg"
        }
      ]}
      ctaTitle="Ready to balance your inventory?"
      ctaDescription="Let's talk about what AI-driven optimization could do for your carrying costs and stockouts."
    />
  );
}

export default RetailCaseStudy;
