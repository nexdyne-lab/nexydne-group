import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { ShoppingCart, BarChart3, TrendingUp, DollarSign, Target, Package, Truck, Zap } from "lucide-react";

export default function RetailDemandForecasting() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Retail Demand Forecasting Transformation | Consumer Products Case Study"
      seoDescription="How a CPG company improved retail demand forecasting by 35% through collaborative planning and AI-powered demand sensing."
      canonical="/cases/retail-demand-forecasting"
      industry="Consumer Products"
      industryLink="/industries/consumer-products"
      title="CPG Company Transforms Retail Demand Forecasting"
      subtitle="How collaborative planning with retailers and AI-powered demand sensing improved forecast accuracy by 35% and reduced out-of-stocks."
      heroImage="https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=1920&q=80"
      metrics={[
        { value: "35%", label: "Forecast Improvement" },
        { value: "50%", label: "Fewer Out-of-Stocks" },
        { value: "$65M", label: "Revenue Recovered" },
        { value: "4.2%", label: "Market Share Gain" }
      ]}
      clientContextTitle="A CPG Company Losing at the Shelf"
      clientContextIntro="A major consumer packaged goods company sold through 50,000 retail locations but had limited visibility into what happened after products left their warehouses. Out-of-stocks at retail were costing $200M in lost sales annually—customers who couldn't find products switched to competitors."
      clientContextBody="The company forecasted shipments to retailers, not consumer demand at shelf. By the time they learned about out-of-stocks, sales were already lost. Promotional planning was disconnected from inventory—big promotions often ran out of stock, wasting marketing spend. The company needed to see through to the shelf."
      clientProfile={{
        industry: "Consumer Packaged Goods",
        companySize: "$15B Annual Revenue",
        projectDuration: "18 Months",
        additionalInfo: "50,000 Retail Locations",
        additionalLabel: "Distribution"
      }}
      challengeTitle="Blind to the Shelf"
      challenges={[
        {
          icon: Package,
          title: "Out-of-Stock Losses",
          description: "$200M in annual lost sales from retail out-of-stocks—invisible until too late."
        },
        {
          icon: Target,
          title: "Shipment vs. Demand",
          description: "Forecasted shipments to retailers, not consumer demand—couldn't see true demand."
        },
        {
          icon: ShoppingCart,
          title: "Promotion Failures",
          description: "40% of promotions ran out of stock—wasted marketing spend and disappointed consumers."
        },
        {
          icon: BarChart3,
          title: "Data Gaps",
          description: "Limited POS data sharing with retailers—forecasting without demand visibility."
        }
      ]}
      approachTitle="Demand Visibility to the Shelf"
      approachIntro="NexDyne built a demand sensing platform that integrated retailer POS data, predicted consumer demand at the store level, and enabled collaborative planning to ensure product availability."
      steps={[
        {
          step: "01",
          title: "Retailer Data Integration",
          description: "Established data sharing agreements with top 20 retailers representing 70% of sales. Integrated daily POS data, inventory levels, and promotional calendars into a unified demand signal platform."
        },
        {
          step: "02",
          title: "Store-Level Forecasting",
          description: "Built ML models that predicted consumer demand at the store-SKU-day level. Models learned store-specific patterns, local demographics, and competitive dynamics—not just regional averages."
        },
        {
          step: "03",
          title: "Promotion Optimization",
          description: "Developed promotional demand models that predicted lift by promotion type, timing, and store. Enabled inventory pre-positioning to ensure availability during promotions—no more out-of-stocks on big events."
        },
        {
          step: "04",
          title: "Collaborative Planning",
          description: "Implemented joint business planning processes with key retailers. Shared forecasts, aligned on promotions, and coordinated replenishment—working as partners, not adversaries."
        }
      ]}
      resultsTitle="Winning at the Shelf"
      results={[
        {
          icon: Target,
          value: "35%",
          label: "Forecast accuracy improvement",
          detail: "At retail store level"
        },
        {
          icon: Package,
          value: "50%",
          label: "Reduction in out-of-stocks",
          detail: "$100M in recovered sales"
        },
        {
          icon: DollarSign,
          value: "$65M",
          label: "Net revenue increase",
          detail: "From improved availability"
        },
        {
          icon: TrendingUp,
          value: "4.2%",
          label: "Market share gain",
          detail: "In key categories"
        }
      ]}
      quote="We went from forecasting shipments to forecasting demand. The difference is everything. Now we can see what's happening at the shelf in near real-time, predict where we'll run out, and act before sales are lost. Our retailer relationships are stronger because we're helping them win too."
      quoteAuthor="Jennifer Williams"
      quoteRole="Chief Commercial Officer"
      relatedStudies={[
        {
          title: "Demand Forecasting for Food & Beverage",
          metric: "30%",
          label: "forecast improvement",
          link: "/cases/food-beverage-demand-forecasting",
          image: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=600&q=80"
        },
        {
          title: "Demand Optimization for Consumer Electronics",
          metric: "40%",
          label: "inventory reduction",
          link: "/cases/consumer-electronics-demand-optimization",
          image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=600&q=80"
        }
      ]}
      ctaTitle="Ready to See Through to the Shelf?"
      ctaDescription="Let's discuss how demand sensing can improve your retail performance."
    />
  );
}
