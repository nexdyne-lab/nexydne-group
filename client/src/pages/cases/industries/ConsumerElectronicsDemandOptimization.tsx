import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Smartphone, Package, TrendingUp, DollarSign, Target, Clock, BarChart3, Zap } from "lucide-react";

export default function ConsumerElectronicsDemandOptimization() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Demand Optimization for Consumer Electronics | Consumer Products Case Study"
      seoDescription="How a consumer electronics company reduced inventory by 40% while improving availability through AI-powered demand optimization."
      canonical="/cases/consumer-electronics-demand-optimization"
      industry="Consumer Products"
      industryLink="/industries/consumer-products"
      title="Consumer Electronics Company Cuts Inventory 40% with AI Optimization"
      subtitle="How machine learning models optimize inventory across short product lifecycles, reducing excess stock while maintaining availability."
      heroImage="https://images.unsplash.com/photo-1498049794561-7780e7231661?w=1920&q=80"
      metrics={[
        { value: "40%", label: "Inventory Reduction" },
        { value: "97%", label: "In-Stock Rate" },
        { value: "$120M", label: "Working Capital Freed" },
        { value: "60%", label: "Less Obsolescence" }
      ]}
      clientContextTitle="A Tech Company Drowning in Inventory"
      clientContextIntro="A global consumer electronics company launched 200+ products annually with lifecycles of 12-18 months. The challenge: forecast demand for products that didn't exist last year and won't exist next year. Forecast errors led to $300M in excess inventory and $100M in obsolescence write-offs annually."
      clientContextBody="Traditional forecasting failed for new products—no history to extrapolate. By the time demand patterns emerged, the product lifecycle was half over. The company either over-ordered components (creating excess) or under-ordered (missing sales). Short lifecycles meant mistakes were permanent—no time to course-correct."
      clientProfile={{
        industry: "Consumer Electronics",
        companySize: "$8B Annual Revenue",
        projectDuration: "12 Months",
        additionalInfo: "200+ Annual Launches",
        additionalLabel: "New Products"
      }}
      challengeTitle="The New Product Forecasting Problem"
      challenges={[
        {
          icon: Package,
          title: "Excess Inventory",
          description: "$300M in excess inventory from over-forecasting—tying up capital and warehouse space."
        },
        {
          icon: Clock,
          title: "Short Lifecycles",
          description: "12-18 month product lifecycles—no time to learn from mistakes and adjust."
        },
        {
          icon: Target,
          title: "New Product Uncertainty",
          description: "200+ new products annually with no demand history—forecasting in the dark."
        },
        {
          icon: DollarSign,
          title: "Obsolescence Costs",
          description: "$100M in annual write-offs from unsold inventory at end of life."
        }
      ]}
      approachTitle="AI for Short-Lifecycle Products"
      approachIntro="NexDyne built an AI-powered demand optimization system designed specifically for short-lifecycle products: learning from analogous products, sensing demand signals early, and dynamically adjusting forecasts throughout the lifecycle."
      steps={[
        {
          step: "01",
          title: "Analog Product Matching",
          description: "Developed ML models that identified similar historical products based on features, price points, and market positioning. New product forecasts started with patterns from analogous products, not from zero."
        },
        {
          step: "02",
          title: "Launch Signal Detection",
          description: "Built models that detected demand signals in the first 2-4 weeks of launch: pre-order velocity, early reviews, social sentiment, and channel sell-through. Early signals predicted lifecycle trajectory with 80% accuracy."
        },
        {
          step: "03",
          title: "Dynamic Forecast Adjustment",
          description: "Implemented continuous forecast updates as demand signals emerged. Forecasts adjusted weekly based on actual sell-through, enabling rapid response to over- or under-performance."
        },
        {
          step: "04",
          title: "End-of-Life Optimization",
          description: "Built models that predicted end-of-life demand and optimized final orders. Reduced obsolescence by matching supply to remaining demand—no more warehouses full of last year's products."
        }
      ]}
      resultsTitle="Inventory Excellence"
      results={[
        {
          icon: Package,
          value: "40%",
          label: "Inventory reduction",
          detail: "From $750M to $450M average inventory"
        },
        {
          icon: Target,
          value: "97%",
          label: "In-stock rate maintained",
          detail: "Availability preserved despite less inventory"
        },
        {
          icon: DollarSign,
          value: "$120M",
          label: "Working capital freed",
          detail: "Redeployed to growth initiatives"
        },
        {
          icon: TrendingUp,
          value: "60%",
          label: "Less obsolescence",
          detail: "Write-offs reduced from $100M to $40M"
        }
      ]}
      quote="We used to treat new product forecasting as guesswork—and we guessed wrong a lot. The AI platform changed that. It learns from similar products, detects demand signals early, and adjusts continuously. We're carrying less inventory, writing off less obsolescence, and still meeting customer demand."
      quoteAuthor="David Park"
      quoteRole="SVP of Global Operations"
      relatedStudies={[
        {
          title: "Demand Forecasting for Food & Beverage",
          metric: "30%",
          label: "forecast improvement",
          link: "/cases/food-beverage-demand-forecasting",
          image: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=600&q=80"
        },
        {
          title: "Assortment Optimization for Retailer",
          metric: "12%",
          label: "sales lift",
          link: "/cases/retail-assortment-optimization",
          image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80"
        }
      ]}
      ctaTitle="Ready to Optimize Your Inventory?"
      ctaDescription="Let's discuss how AI can help you manage short-lifecycle products."
    />
  );
}
