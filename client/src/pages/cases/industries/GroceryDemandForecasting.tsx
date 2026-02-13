import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { BarChart3, TrendingDown, Leaf, DollarSign, Package, Brain, Target, Zap } from "lucide-react";

export default function GroceryDemandForecasting() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="AI Demand Forecasting for Grocery | Retail Case Study"
      seoDescription="How a grocery chain reduced food waste by 35% and improved on-shelf availability through AI-powered demand forecasting across 500 stores."
      canonical="/cases/grocery-demand-forecasting"
      industry="Retail"
      industryLink="/industries/retail"
      title="Grocery Chain Reduces Waste 35% with AI Demand Forecasting"
      subtitle="How machine learning models predict demand at the store-SKU-day level, optimizing inventory and reducing food waste across 500 stores."
      heroImage="https://images.unsplash.com/photo-1542838132-92c53300491e?w=1920&q=80"
      metrics={[
        { value: "35%", label: "Waste Reduction" },
        { value: "96%", label: "On-Shelf Availability" },
        { value: "$28M", label: "Annual Savings" },
        { value: "50K", label: "SKUs Forecasted" }
      ]}
      clientContextTitle="A Grocer Battling Waste and Stockouts"
      clientContextIntro="A regional grocery chain with 500 stores faced the classic retail paradox: too much inventory of slow-moving items (leading to waste) and too little of fast-moving items (leading to stockouts). Fresh categories were particularly challenging—perishables accounted for 40% of revenue but 70% of waste."
      clientContextBody="Legacy forecasting relied on simple moving averages and buyer intuition. It couldn't account for weather, local events, promotions, or the complex substitution patterns that drive grocery demand. The chain threw away $80M in unsold perishables annually while losing $50M in sales to stockouts."
      clientProfile={{
        industry: "Grocery Retail",
        companySize: "500 Stores, $8B Revenue",
        projectDuration: "12 Months",
        additionalInfo: "50,000 SKUs",
        additionalLabel: "Product Assortment"
      }}
      challengeTitle="The Forecasting Paradox"
      challenges={[
        {
          icon: Leaf,
          title: "Perishable Waste",
          description: "$80M in annual waste from unsold perishables—35% of fresh inventory discarded."
        },
        {
          icon: Package,
          title: "Stockout Losses",
          description: "$50M in lost sales from out-of-stocks—customers leaving without purchasing."
        },
        {
          icon: Brain,
          title: "Forecast Accuracy",
          description: "Legacy systems achieved only 65% forecast accuracy—missing demand signals entirely."
        },
        {
          icon: BarChart3,
          title: "Complexity",
          description: "50,000 SKUs × 500 stores × 365 days = 9 billion forecasts needed annually."
        }
      ]}
      approachTitle="AI-Powered Demand Intelligence"
      approachIntro="NexDyne built a machine learning forecasting platform that predicted demand at the store-SKU-day level, incorporating external signals and enabling automated replenishment decisions."
      steps={[
        {
          step: "01",
          title: "Data Integration",
          description: "Unified 5 years of sales data with external signals: weather forecasts, local events, school schedules, competitor promotions, and social media trends. Created a comprehensive demand signal repository."
        },
        {
          step: "02",
          title: "ML Model Development",
          description: "Built gradient boosting models that predicted demand at store-SKU-day granularity. Models learned seasonal patterns, promotional lift, weather sensitivity, and substitution effects. Achieved 85% forecast accuracy—20 points above legacy."
        },
        {
          step: "03",
          title: "Fresh Category Focus",
          description: "Developed specialized models for perishables that optimized for both availability and waste. Models considered shelf life, markdown timing, and demand uncertainty to recommend optimal order quantities."
        },
        {
          step: "04",
          title: "Automated Replenishment",
          description: "Integrated forecasts with automated ordering systems. Store managers received AI-recommended orders that they could approve or adjust. System learned from manager overrides to improve future recommendations."
        }
      ]}
      resultsTitle="Sustainable Profitability"
      results={[
        {
          icon: Leaf,
          value: "35%",
          label: "Reduction in waste",
          detail: "From $80M to $52M in annual perishable waste"
        },
        {
          icon: Package,
          value: "96%",
          label: "On-shelf availability",
          detail: "Up from 91%—$25M in recovered sales"
        },
        {
          icon: DollarSign,
          value: "$28M",
          label: "Annual savings",
          detail: "From reduced waste and improved availability"
        },
        {
          icon: Target,
          value: "85%",
          label: "Forecast accuracy",
          detail: "20-point improvement over legacy systems"
        }
      ]}
      quote="The AI forecasting system sees patterns we never could. It knows that a sunny weekend after a rainy week drives 40% more grilling demand. It predicts the impact of a local sports event on snack sales. We're not guessing anymore—we're predicting."
      quoteAuthor="David Martinez"
      quoteRole="VP of Supply Chain"
      relatedStudies={[
        {
          title: "Digital Transformation for Fashion Retailer",
          metric: "85%",
          label: "e-commerce growth",
          link: "/cases/fashion-retail-digital-transformation",
          image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80"
        },
        {
          title: "Loyalty Program Transformation",
          metric: "45%",
          label: "increase in member spend",
          link: "/cases/retail-loyalty-transformation",
          image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80"
        }
      ]}
      ctaTitle="Ready to Optimize Your Inventory?"
      ctaDescription="Let's discuss how AI forecasting can reduce waste and improve availability."
    />
  );
}
