import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export function DistributorDemandForecasting() {
  return (
    <CaseStudyTemplate
      client="Wholesale Distribution Company"
      industry="Distribution · Artificial Intelligence"
      title="Demand Forecasting AI Optimizes Inventory for Regional Distributor"
      subtitle="How a wholesale distributor implemented AI-powered demand forecasting to reduce inventory costs while improving service levels."
      heroImage="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1600&q=80"
      challenge={`Inventory carrying costs were consuming 18% of gross margin. Stockouts were occurring on 8% of orders, causing customer dissatisfaction. Manual forecasting couldn't keep up with 15,000+ SKUs across multiple locations. Seasonal patterns and customer-specific demand were difficult to predict.

A wholesale distribution company with 180 employees and $75M annual revenue distributes industrial supplies to 3,000+ customers across the Midwest from 5 distribution centers. The complexity of customer ordering behavior across industry segments, combined with supplier lead time variability and geographic seasonal patterns, made traditional forecasting approaches inadequate at scale.`}
      solution={`NEXDYNE developed a machine learning forecasting system tailored to distribution. The model incorporated historical sales data, customer attributes, and external factors including economic indicators relevant to customer industries, weather data that affected demand for certain products, customer financial health signals, and supplier lead time data for dynamic safety stock calculation.

The team implemented hierarchical forecasting that worked at SKU, category, and location levels, with built-in seasonality detection that automatically identified patterns and anomaly detection to flag unusual demand signals. The AI system went beyond forecasting to optimize inventory decisions—dynamic reorder points based on forecast confidence, automated replenishment recommendations for buyers, multi-echelon optimization across distribution centers, and simulation capabilities to test policy changes before implementation.

Buyers were equipped with dashboards showing forecast accuracy and inventory health, exception-based workflows that highlighted items needing attention, and feedback loops where buyer expertise improved model accuracy over time.`}
      impact={`The AI forecasting system reduced inventory by 35% while improving service levels, freeing $2.8 million in working capital. Forecast accuracy reached 92%, down from stockout rates of 8% to 2.1% of orders. Inventory carrying costs dropped significantly as dynamic reorder points replaced static safety stock rules.

Buyer productivity improved as exception-based workflows focused attention on items genuinely needing human judgment rather than routine replenishment decisions. The multi-echelon optimization across all five distribution centers enabled network-wide inventory balancing that further reduced total stock requirements while improving customer fill rates.`}
      metrics={[
        { value: "35%", label: "Inventory reduction" },
        { value: "92%", label: "Forecast accuracy" },
        { value: "2.1%", label: "Stockout rate" },
        { value: "$2.8M", label: "Working capital freed" }
      ]}
      tags={["Distribution", "AI", "Demand Forecasting", "Inventory Optimization"]}
      relatedCapability={{
        title: "AI & Machine Learning",
        link: "/capabilities/ai"
      }}
    />
  );
}

export default DistributorDemandForecasting;
