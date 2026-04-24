import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export default function RetailDemandForecasting() {
  return (
    <CaseStudyTemplate
      client="Mid-Sized Specialty Retailer"
      industry="Retail · Machine Learning"
      title="Retailer Reduces Stockouts 35% with Demand Forecasting"
      subtitle="Multi-location forecasting model predicts SKU-level demand 8 weeks ahead, optimizing inventory across 200 stores and cutting overstock 28%."
      heroImage="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&q=80"
      challenge={`A mid-sized specialty retailer with 200 locations faced chronic inventory problems. Popular items sold out before replenishment arrived, while slow-moving SKUs accumulated in back rooms. Store managers ordered based on gut feel, corporate buyers relied on last year's sales, and nobody could predict seasonal spikes accurately.

The financial impact was severe: $12M in lost sales from stockouts, $6M in markdowns to clear excess inventory, and deteriorating customer satisfaction as shoppers learned not to rely on product availability. Their existing inventory system used simple moving averages that couldn't handle regional demand variation, promotional effects, or weather-driven purchasing patterns.

They needed demand forecasting that worked at SKU-store-week granularity, incorporated external signals (weather, local events, competitor promotions), and integrated with their existing replenishment systems. The solution had to be explainable—buyers needed to understand why the model recommended specific order quantities.`}
      solution={`NEXDYNE built a gradient boosting model (XGBoost) that forecasts demand 8 weeks ahead for every SKU-store combination. The model ingests 3 years of transaction history, promotional calendars, local weather forecasts, regional demographics, and competitor pricing data scraped from public websites.

We engineered features that capture seasonal patterns (back-to-school, holidays), promotional lift (historical response to discounts), cannibalization effects (substitute products), and local preferences (regional taste differences). The model retrains weekly on fresh data, automatically detecting trend shifts and adjusting forecasts. SHAP values provide forecast explainability so buyers understand why the model recommends specific order quantities.

Forecasts feed directly into their replenishment system via API, generating purchase orders that optimize for target service levels while minimizing carrying costs. Store managers see predictions in their existing Tableau dashboard with confidence intervals and explanations for unusual forecasts.`}
      impact={`Within 6 months of deployment, stockouts dropped 35% and overstock situations fell 28%. The retailer saved $8.5M annually through reduced markdowns, lower carrying costs, and recaptured sales. Forecast accuracy (MAPE) improved from 42% with their old system to 18% with the ML model.

Store managers trust the system enough to reduce safety stock levels, freeing up working capital. Buyers spend less time firefighting stockouts and more time on strategic merchandising. Customer satisfaction scores improved 12 points as product availability became reliable. The model continues to improve as it learns from new data, with seasonal forecasts becoming more accurate each year.`}
      metrics={[
        { value: "35%", label: "Stockout reduction" },
        { value: "28%", label: "Overstock reduction" },
        { value: "$8.5M", label: "Annual savings" },
        { value: "200", label: "Stores optimized" }
      ]}
      tags={["Retail", "Machine Learning", "Demand Forecasting", "AI"]}
      relatedCapability={{
        title: "AI & Machine Learning",
        link: "/capabilities/ai"
      }}
    />
  );
}
