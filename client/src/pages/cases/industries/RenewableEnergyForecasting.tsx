import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Sun, Wind, TrendingUp, BarChart3, DollarSign, Leaf, Target, Zap } from "lucide-react";

export default function RenewableEnergyForecasting() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="AI Forecasting for Renewable Energy | Energy Case Study"
      seoDescription="How a renewable energy company improved generation forecasting accuracy by 25% using machine learning, reducing imbalance costs by $18M annually."
      canonical="/cases/renewable-energy-forecasting"
      industry="Energy & Utilities"
      industryLink="/industries/energy-utilities"
      title="Renewable Energy Company Achieves 25% Better Forecasting"
      subtitle="How machine learning models predict solar and wind generation with unprecedented accuracy, reducing imbalance costs and enabling grid integration."
      heroImage="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1920&q=80"
      metrics={[
        { value: "25%", label: "Forecast Improvement" },
        { value: "$18M", label: "Annual Savings" },
        { value: "92%", label: "Day-Ahead Accuracy" },
        { value: "5GW", label: "Capacity Forecasted" }
      ]}
      clientContextTitle="A Renewable Developer Fighting Forecast Error"
      clientContextIntro="A leading renewable energy company operated 5GW of wind and solar assets across 50 projects. As the portfolio grew, so did a costly problem: forecast errors. When actual generation differed from forecasts submitted to grid operators, the company paid imbalance penalties—$25M annually and growing."
      clientContextBody="Legacy forecasting relied on numerical weather prediction models with limited accuracy for specific sites. A 10% forecast error on a 200MW wind farm meant 20MW of imbalance—thousands of dollars per hour in penalties. The company needed site-specific forecasting that could capture local weather patterns and asset-specific performance characteristics."
      clientProfile={{
        industry: "Renewable Energy",
        companySize: "5GW Portfolio",
        projectDuration: "9 Months",
        additionalInfo: "50 Projects",
        additionalLabel: "Asset Count"
      }}
      challengeTitle="The Forecast Accuracy Gap"
      challenges={[
        {
          icon: Target,
          title: "Imbalance Costs",
          description: "$25M in annual imbalance penalties from forecast errors—eating into project returns."
        },
        {
          icon: Wind,
          title: "Weather Variability",
          description: "Generic weather models missed local patterns—mountain effects, coastal winds, cloud formations."
        },
        {
          icon: Sun,
          title: "Asset Differences",
          description: "Each project had unique characteristics—panel degradation, turbine curves, terrain effects."
        },
        {
          icon: BarChart3,
          title: "Multiple Horizons",
          description: "Needed accurate forecasts from 15-minute to 72-hour horizons for different market products."
        }
      ]}
      approachTitle="Machine Learning for Energy Forecasting"
      approachIntro="NexDyne built an AI-powered forecasting platform that combined multiple weather models, learned site-specific patterns, and continuously improved from actual generation data."
      steps={[
        {
          step: "01",
          title: "Data Integration",
          description: "Unified data from 50 projects: SCADA generation data, on-site weather stations, satellite imagery, and multiple numerical weather prediction models. Created a comprehensive training dataset with 5 years of history."
        },
        {
          step: "02",
          title: "Ensemble Weather Models",
          description: "Built an ensemble that combined 7 weather forecast providers, weighting each based on historical accuracy for specific conditions. The ensemble outperformed any single provider by 15% on average."
        },
        {
          step: "03",
          title: "Site-Specific ML Models",
          description: "Trained gradient boosting models for each project that learned local patterns: terrain effects on wind, cloud shadow patterns on solar, seasonal variations. Models captured nuances that generic forecasts missed."
        },
        {
          step: "04",
          title: "Continuous Learning",
          description: "Implemented automated model retraining as new generation data arrived. Models adapted to changing conditions—panel degradation, new turbines, seasonal shifts. Accuracy improved continuously over time."
        }
      ]}
      resultsTitle="Forecasting Excellence"
      results={[
        {
          icon: Target,
          value: "25%",
          label: "Improvement in accuracy",
          detail: "Across all forecast horizons"
        },
        {
          icon: DollarSign,
          value: "$18M",
          label: "Annual savings",
          detail: "From reduced imbalance penalties"
        },
        {
          icon: BarChart3,
          value: "92%",
          label: "Day-ahead accuracy",
          detail: "For portfolio-level forecasts"
        },
        {
          icon: Leaf,
          value: "15%",
          label: "Higher capture prices",
          detail: "Better market positioning from accurate forecasts"
        }
      ]}
      quote="Forecast accuracy directly impacts our bottom line. Every percentage point of improvement is worth millions. The ML platform doesn't just predict better—it learns continuously. Our forecasts get more accurate every month as the models adapt to each site's unique characteristics."
      quoteAuthor="Elena Rodriguez"
      quoteRole="VP of Asset Management"
      relatedStudies={[
        {
          title: "Grid Modernization for Electric Utility",
          metric: "45%",
          label: "reduction in outage duration",
          link: "/cases/utility-grid-modernization",
          image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=80"
        },
        {
          title: "Digital Transformation for Oil & Gas",
          metric: "$150M",
          label: "operational savings",
          link: "/cases/oil-gas-digital-transformation",
          image: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=600&q=80"
        }
      ]}
      ctaTitle="Ready to Improve Your Forecasting?"
      ctaDescription="Let's discuss how AI can optimize your renewable energy operations."
    />
  );
}
