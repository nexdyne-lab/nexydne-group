import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { PackageX, LineChart, Boxes, Brain, Gauge, DollarSign } from "lucide-react";

export function RetailDemandForecasting() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Cutting Stockouts 35% With ML Demand Forecasting | Retail Case Study"
      seoDescription="A 200-store specialty retailer bled sales to stockouts while overstock piled up. An explainable ML model forecasting SKU-store demand 8 weeks out cut stockouts 35% and overstock 28%."
      canonical="/cases/retail-demand-forecasting"
      industry="Retail"
      industryLink="/industries/retail"
      title="How a Specialty Retailer Cut Stockouts 35% With ML Demand Forecasting"
      subtitle="A multi-location forecasting model predicts SKU-level demand eight weeks ahead across 200 stores — cutting stockouts 35%, overstock 28%, and forecast error by more than half."
      heroImage="/images/cases/retail-demand-forecasting-hero.jpg"
      metrics={[
        { value: "35%", label: "Fewer Stockouts" },
        { value: "28%", label: "Less Overstock" },
        { value: "2×", label: "More Accurate Forecasts" },
        { value: "200", label: "Stores Optimized" }
      ]}
      clientContextTitle="Guessing at Demand"
      clientContextIntro="A mid-sized specialty retailer with 200 locations faced chronic inventory problems. Popular items sold out before replenishment arrived, while slow movers piled up in back rooms. Managers ordered on gut feel, buyers relied on last year's sales, and nobody predicted seasonal spikes accurately."
      clientContextBody="The impact was severe: chronic lost sales from stockouts, heavy markdowns to clear excess, and eroding customer trust as shoppers stopped relying on availability. The legacy system used simple moving averages that couldn't handle regional variation, promotional effects, or weather-driven demand. The retailer needed forecasting at SKU-store-week granularity, incorporating external signals — and it had to be explainable, so buyers understood every recommendation."
      clientProfile={{
        industry: "Specialty Retailer",
        companySize: "200 Locations",
        projectDuration: "8-Week Horizon",
        additionalInfo: "XGBoost + SHAP",
        additionalLabel: "Model"
      }}
      challengeTitle="Why Inventory Was Always Wrong"
      challenges={[
        {
          icon: PackageX,
          title: "Chronic lost sales",
          description: "Popular items sold out before replenishment arrived, driving stockouts and customer frustration."
        },
        {
          icon: Boxes,
          title: "Heavy markdowns",
          description: "Slow-moving SKUs accumulated in back rooms, forcing discounts to clear excess inventory."
        },
        {
          icon: LineChart,
          title: "Moving averages that missed",
          description: "The old system couldn't handle regional variation, promotions, or weather-driven demand."
        },
        {
          icon: Brain,
          title: "Forecasts buyers didn't trust",
          description: "Any solution had to be explainable so buyers understood why the model recommended each quantity."
        }
      ]}
      approachTitle="Explainable Forecasting at SKU-Store-Week"
      approachIntro="NEXDYNE built a gradient-boosting model (XGBoost) that forecasts demand eight weeks ahead for every SKU-store combination — trained on three years of history and external signals, with SHAP explanations buyers can read."
      steps={[
        {
          step: "01",
          title: "Ingest the full signal set",
          description: "The model combined three years of transactions with promotional calendars, local weather, demographics, and scraped competitor pricing."
        },
        {
          step: "02",
          title: "Engineer demand features",
          description: "Features captured seasonality, promotional lift, product cannibalization, and regional preferences — the drivers moving averages missed."
        },
        {
          step: "03",
          title: "Make every forecast explainable",
          description: "SHAP values showed buyers exactly why the model recommended each order quantity, building trust in the numbers."
        },
        {
          step: "04",
          title: "Feed replenishment directly",
          description: "Forecasts flowed via API into the replenishment system, generating purchase orders that hit service-level targets at minimum carrying cost."
        }
      ]}
      resultsTitle="The Payoff"
      results={[
        {
          icon: PackageX,
          value: "35%",
          label: "Fewer stockouts",
          detail: "With overstock situations down 28% within six months"
        },
        {
          icon: Gauge,
          value: "18%",
          label: "Forecast error (MAPE)",
          detail: "Down from 42% under the old moving-average system"
        },
        {
          icon: DollarSign,
          value: "Year one",
          label: "Payback on the program",
          detail: "Through lower markdowns, carrying costs, and recaptured sales"
        }
      ]}
      quote=""
      quoteAuthor=""
      quoteRole=""
      relatedStudies={[
        {
          title: "Building a Custom Inventory App That Cut Stockouts 40%",
          metric: "40%",
          label: "fewer stockouts",
          link: "/cases/retail-inventory-app",
          image: "/images/capabilities/cap-retail-apparel.jpg"
        },
        {
          title: "Automating a Retailer's Supply Chain With RPA",
          metric: "45%",
          label: "faster processing",
          link: "/cases/global-retailer",
          image: "/images/cases/global-retailer-hero.jpg"
        }
      ]}
      ctaTitle="Ready to stop guessing at demand?"
      ctaDescription="Let's talk about what explainable forecasting could do for your inventory and margins."
    />
  );
}

export default RetailDemandForecasting;
