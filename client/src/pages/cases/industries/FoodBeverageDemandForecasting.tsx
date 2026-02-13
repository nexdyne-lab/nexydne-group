import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Package, TrendingUp, BarChart3, DollarSign, Target, Truck, Factory, Leaf } from "lucide-react";

export default function FoodBeverageDemandForecasting() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Demand Forecasting for Food & Beverage | Consumer Products Case Study"
      seoDescription="How a food and beverage company improved forecast accuracy by 30% using AI, reducing waste and stockouts across 50,000 SKUs."
      canonical="/cases/food-beverage-demand-forecasting"
      industry="Consumer Products"
      industryLink="/industries/consumer-products"
      title="Food & Beverage Company Achieves 30% Better Demand Forecasting"
      subtitle="How machine learning models predict demand across 50,000 SKUs, reducing waste, improving service levels, and optimizing production planning."
      heroImage="https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=1920&q=80"
      metrics={[
        { value: "30%", label: "Forecast Improvement" },
        { value: "98.5%", label: "Service Level" },
        { value: "$45M", label: "Working Capital Freed" },
        { value: "25%", label: "Less Waste" }
      ]}
      clientContextTitle="A CPG Giant Fighting Forecast Error"
      clientContextIntro="A global food and beverage company with $20B in revenue managed 50,000 SKUs across 100 markets. Demand planning was a constant struggle: forecast errors averaged 35%, leading to $200M in annual waste from expired products and $150M in lost sales from stockouts."
      clientContextBody="Legacy forecasting relied on statistical models and planner judgment. It couldn't account for the complex factors driving demand: weather, promotions, competitor actions, social trends, and local events. Planners spent 80% of their time gathering data and building spreadsheets, leaving little time for insight and decision-making."
      clientProfile={{
        industry: "Food & Beverage",
        companySize: "$20B Annual Revenue",
        projectDuration: "15 Months",
        additionalInfo: "50,000 SKUs",
        additionalLabel: "Product Portfolio"
      }}
      challengeTitle="The Forecast Accuracy Crisis"
      challenges={[
        {
          icon: Target,
          title: "High Forecast Error",
          description: "35% average forecast error—leading to simultaneous waste and stockouts."
        },
        {
          icon: Leaf,
          title: "Product Waste",
          description: "$200M in annual waste from expired products—destroying margin and sustainability goals."
        },
        {
          icon: Package,
          title: "Stockout Losses",
          description: "$150M in lost sales from out-of-stocks—customers switching to competitors."
        },
        {
          icon: BarChart3,
          title: "Manual Processes",
          description: "Planners spent 80% of time on data gathering—no time for strategic analysis."
        }
      ]}
      approachTitle="AI-Powered Demand Sensing"
      approachIntro="NexDyne built an AI-powered demand forecasting platform that combined internal data with external signals, automated the forecasting process, and enabled planners to focus on exceptions and insights."
      steps={[
        {
          step: "01",
          title: "Data Integration",
          description: "Unified 5 years of shipment data with external signals: weather, economic indicators, social media trends, competitor promotions, and retailer POS data. Created a comprehensive demand signal repository."
        },
        {
          step: "02",
          title: "ML Model Development",
          description: "Built hierarchical forecasting models that predicted demand at SKU-location-week granularity. Models learned seasonal patterns, promotional lift, weather sensitivity, and cannibalization effects."
        },
        {
          step: "03",
          title: "Demand Sensing",
          description: "Implemented short-term demand sensing that adjusted forecasts based on real-time signals: POS data, weather changes, and social trends. Improved short-term accuracy by 40%."
        },
        {
          step: "04",
          title: "Planner Workflow",
          description: "Built a planner workbench that automated routine forecasting and surfaced exceptions requiring human judgment. Planners shifted from data gathering to insight generation and scenario planning."
        }
      ]}
      resultsTitle="Supply Chain Excellence"
      results={[
        {
          icon: Target,
          value: "30%",
          label: "Improvement in forecast accuracy",
          detail: "From 65% to 85% accuracy"
        },
        {
          icon: Package,
          value: "98.5%",
          label: "Service level achieved",
          detail: "Up from 94%—fewer stockouts"
        },
        {
          icon: DollarSign,
          value: "$45M",
          label: "Working capital freed",
          detail: "From optimized inventory levels"
        },
        {
          icon: Leaf,
          value: "25%",
          label: "Reduction in waste",
          detail: "From better demand matching"
        }
      ]}
      quote="The AI forecasting platform transformed demand planning from art to science. Our planners used to spend all their time building forecasts—now they spend it understanding why demand is changing and what to do about it. We're more accurate, more agile, and more strategic."
      quoteAuthor="Maria Chen"
      quoteRole="VP of Supply Chain Planning"
      relatedStudies={[
        {
          title: "Demand Optimization for Consumer Electronics",
          metric: "40%",
          label: "inventory reduction",
          link: "/cases/consumer-electronics-demand-optimization",
          image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=600&q=80"
        },
        {
          title: "Assortment Optimization for Retailer",
          metric: "12%",
          label: "sales lift",
          link: "/cases/retail-assortment-optimization",
          image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80"
        }
      ]}
      ctaTitle="Ready to Transform Your Demand Planning?"
      ctaDescription="Let's discuss how AI forecasting can improve your supply chain performance."
    />
  );
}
