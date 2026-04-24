import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export default function RetailerMLForecasting() {
  return (
    <CaseStudyTemplate
      client="Major Retailer"
      industry="Retail · AI & Machine Learning"
      title="Predicting Demand with 98% Accuracy"
      subtitle="How a major retailer reduced inventory waste by 30% using an ML-powered forecasting engine."
      heroImage="https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=1600&auto=format&fit=crop"
      challenge={`The client was relying on legacy spreadsheet-based forecasting methods that couldn't account for complex variables like weather, local events, and social media trends. This led to excess inventory in some regions causing markdowns, stockouts in high-demand stores resulting in lost revenue, and manual planning processes taking 2+ weeks per cycle.

The legacy approach could not operate at SKU-store-week granularity or adapt to the dynamic, multi-variable nature of modern retail demand.`}
      solution={`NEXDYNE built a custom Machine Learning pipeline on Databricks that ingests real-time sales data, weather patterns, and marketing calendars to predict SKU-level demand.

XGBoost models were trained on 5 years of historical data and re-trained weekly to adapt to new trends. The demand forecasting model incorporated variables including weather, local events, promotions, and social signals—providing a far more accurate picture than traditional moving averages. Integration with the client's ERP system enabled automated purchase order generation based on predicted demand, closing the loop from forecast to replenishment without manual intervention.`}
      impact={`Forecast accuracy reached 98% at the SKU/store level for a 2-week horizon—dramatically exceeding the previous system's performance. Inventory waste (markdowns from excess stock) decreased 30% as buyers confidently ordered closer to actual demand. Planning cycle time reduced 10x, from weeks to days, freeing demand planning teams for strategic work instead of manual data processing.

Stockouts in high-demand stores decreased substantially as the model correctly predicted regional demand spikes. The combination of fewer markdowns and fewer lost sales from stockouts produced substantial financial improvements across the retail network.`}
      metrics={[
        { value: "30%", label: "Reduction in inventory waste" },
        { value: "98%", label: "Forecast accuracy at SKU/store level" },
        { value: "10x", label: "Faster planning cycle" }
      ]}
      tags={["Retail", "Machine Learning", "Demand Forecasting", "AI"]}
      relatedCapability={{
        title: "AI & Machine Learning",
        link: "/capabilities/ai"
      }}
    />
  );
}
