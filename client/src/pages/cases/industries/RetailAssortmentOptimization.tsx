import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Grid3X3, TrendingUp, DollarSign, Target, Users, BarChart3, Package, Sparkles } from "lucide-react";

export default function RetailAssortmentOptimization() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Assortment Optimization | Consumer Products Case Study"
      seoDescription="How a retailer achieved 12% sales lift through AI-powered assortment optimization that tailored product selection to local customer preferences."
      canonical="/cases/retail-assortment-optimization"
      industry="Consumer Products"
      industryLink="/industries/consumer-products"
      title="Retailer Achieves 12% Sales Lift Through Assortment Optimization"
      subtitle="How AI-powered localization tailored product assortments to customer preferences at each store, increasing sales while reducing inventory."
      heroImage="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1920&q=80"
      metrics={[
        { value: "12%", label: "Sales Lift" },
        { value: "15%", label: "Less Inventory" },
        { value: "$180M", label: "Revenue Increase" },
        { value: "25%", label: "Fewer SKUs" }
      ]}
      clientContextTitle="A Retailer with One-Size-Fits-All Assortments"
      clientContextIntro="A national retailer with 1,200 stores used the same product assortment everywhere—urban and rural, affluent and value-conscious, diverse demographics all received identical product selection. The result: products that flew off shelves in some stores gathered dust in others."
      clientContextBody="Category managers made assortment decisions based on national sales data, missing local preferences. Stores in Hispanic neighborhoods lacked products those customers wanted. Affluent suburban stores carried value items that didn't sell. The retailer was leaving money on the table by ignoring the diversity of its customer base."
      clientProfile={{
        industry: "Retail",
        companySize: "1,200 Stores",
        projectDuration: "12 Months",
        additionalInfo: "80,000 SKUs",
        additionalLabel: "Product Range"
      }}
      challengeTitle="The Localization Gap"
      challenges={[
        {
          icon: Grid3X3,
          title: "One-Size-Fits-All",
          description: "Same assortment in all 1,200 stores regardless of local customer demographics and preferences."
        },
        {
          icon: Users,
          title: "Missed Preferences",
          description: "Local customer preferences invisible in national sales data—opportunities hidden in averages."
        },
        {
          icon: Package,
          title: "Inventory Inefficiency",
          description: "Products that sold well nationally sat unsold in stores where they didn't fit local demand."
        },
        {
          icon: Target,
          title: "Category Complexity",
          description: "80,000 SKUs made manual localization impossible—too many products, too many stores."
        }
      ]}
      approachTitle="AI-Powered Local Assortments"
      approachIntro="NexDyne built an AI-powered assortment optimization platform that analyzed local demand patterns, customer demographics, and competitive dynamics to recommend store-specific assortments."
      steps={[
        {
          step: "01",
          title: "Store Clustering",
          description: "Analyzed customer demographics, purchase patterns, and competitive environment to cluster stores into 50 distinct segments. Each segment represented stores with similar customer bases and demand patterns."
        },
        {
          step: "02",
          title: "Local Demand Modeling",
          description: "Built ML models that predicted demand for each SKU in each store cluster based on demographics, historical sales, and market basket analysis. Identified products that would over- or under-perform in each location."
        },
        {
          step: "03",
          title: "Assortment Optimization",
          description: "Developed optimization algorithms that selected the best assortment for each cluster given space constraints and supplier requirements. Balanced local relevance with operational efficiency."
        },
        {
          step: "04",
          title: "Continuous Learning",
          description: "Implemented feedback loops that tracked performance of localized assortments and refined recommendations. Models improved as they learned which localization decisions drove results."
        }
      ]}
      resultsTitle="Localization That Delivers"
      results={[
        {
          icon: TrendingUp,
          value: "12%",
          label: "Sales lift",
          detail: "From better product-customer matching"
        },
        {
          icon: Package,
          value: "15%",
          label: "Inventory reduction",
          detail: "Fewer slow-moving items in wrong stores"
        },
        {
          icon: DollarSign,
          value: "$180M",
          label: "Annual revenue increase",
          detail: "From optimized assortments"
        },
        {
          icon: Sparkles,
          value: "25%",
          label: "SKU reduction per store",
          detail: "Better selection, not more selection"
        }
      ]}
      quote="We stopped treating all our stores the same and started treating our customers as individuals. The AI sees patterns in local demand that our category managers couldn't detect. Stores now carry products their customers actually want—and sales prove it."
      quoteAuthor="Michael Torres"
      quoteRole="Chief Merchandising Officer"
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
      ctaTitle="Ready to Localize Your Assortments?"
      ctaDescription="Let's discuss how AI can help you match products to local customer preferences."
    />
  );
}
