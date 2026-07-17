import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { FileSpreadsheet, PackageX, Clock, CloudSun, Brain, RefreshCw, PlugZap, Gauge } from "lucide-react";

export function RetailerMLForecasting() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Predicting Demand With 98% Accuracy | Retail Case Study"
      seoDescription="A major retailer's spreadsheet forecasting couldn't handle weather, events, or trends, causing markdowns and stockouts. An ML pipeline hit 98% SKU-level accuracy and cut inventory waste 30%."
      canonical="/cases/retailer-ml-forecasting"
      industry="Retail"
      industryLink="/industries/retail"
      title="How a Major Retailer Reached 98% Demand-Forecast Accuracy"
      subtitle="A retailer replaced spreadsheet forecasting with an ML-powered engine on Databricks — reaching 98% SKU-level accuracy, cutting inventory waste 30%, and compressing planning cycles 10x."
      heroImage="/images/capabilities/cap-retail-apparel.jpg"
      metrics={[
        { value: "30%", label: "Less Inventory Waste" },
        { value: "98%", label: "Forecast Accuracy (SKU/Store)" },
        { value: "10x", label: "Faster Planning Cycle" }
      ]}
      clientContextTitle="Spreadsheets Couldn't Keep Up"
      clientContextIntro="A major retailer relied on legacy spreadsheet-based forecasting that couldn't account for complex variables like weather, local events, and social media trends. The result: excess inventory in some regions driving markdowns, stockouts in high-demand stores losing revenue, and manual planning taking 2+ weeks per cycle."
      clientContextBody="The legacy approach couldn't operate at SKU-store-week granularity or adapt to the dynamic, multi-variable nature of modern retail demand. Buyers were forced to choose between over-ordering to avoid stockouts or under-ordering to avoid markdowns — losing money either way."
      clientProfile={{
        industry: "Major Retailer",
        companySize: "Multi-Region",
        projectDuration: "Weekly Retraining",
        additionalInfo: "XGBoost on Databricks",
        additionalLabel: "Stack"
      }}
      challengeTitle="Why Forecasting Fell Short"
      challenges={[
        {
          icon: FileSpreadsheet,
          title: "Spreadsheet forecasting",
          description: "Legacy methods couldn't factor in weather, local events, or social trends."
        },
        {
          icon: PackageX,
          title: "Markdowns and stockouts at once",
          description: "Excess in some regions forced markdowns while high-demand stores ran out."
        },
        {
          icon: Clock,
          title: "2+ week planning cycles",
          description: "Manual planning was too slow to respond to shifting demand."
        },
        {
          icon: Gauge,
          title: "No SKU-store granularity",
          description: "Moving averages couldn't model demand at the level decisions required."
        }
      ]}
      approachTitle="An ML Pipeline From Forecast to Replenishment"
      approachIntro="NEXDYNE built a custom ML pipeline on Databricks that ingests real-time sales, weather, and marketing calendars to predict SKU-level demand — and closes the loop to automated replenishment."
      steps={[
        {
          step: "01",
          title: "Train on five years of data",
          description: "XGBoost models learned from five years of history and retrained weekly to adapt to new trends."
        },
        {
          step: "02",
          title: "Incorporate real signals",
          description: "The model factored in weather, local events, promotions, and social signals for a far more accurate picture than moving averages."
        },
        {
          step: "03",
          title: "Forecast at SKU/store",
          description: "Predictions ran at SKU-store granularity over a 2-week horizon, correctly anticipating regional spikes."
        },
        {
          step: "04",
          title: "Close the loop",
          description: "ERP integration auto-generated purchase orders from predicted demand, removing manual replenishment."
        }
      ]}
      resultsTitle="The Payoff"
      results={[
        {
          icon: Gauge,
          value: "98%",
          label: "Forecast accuracy",
          detail: "At SKU/store level over a 2-week horizon"
        },
        {
          icon: PackageX,
          value: "30%",
          label: "Less inventory waste",
          detail: "As buyers ordered closer to actual demand"
        },
        {
          icon: RefreshCw,
          value: "10x",
          label: "Faster planning",
          detail: "From weeks to days, freeing planners for strategic work"
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
          image: "/images/capabilities/cap-retail-apparel.jpg"
        },
        {
          title: "AI Demand Forecasting That Cut Inventory 35%",
          metric: "35%",
          label: "less inventory",
          link: "/capabilities/artificial-intelligence/case-studies/distributor-demand-forecasting",
          image: "/images/industries/retail-warehouse.jpg"
        }
      ]}
      ctaTitle="Ready to forecast with precision?"
      ctaDescription="Let's talk about what an ML forecasting engine could do for your markdowns and stockouts."
    />
  );
}

export default RetailerMLForecasting;
