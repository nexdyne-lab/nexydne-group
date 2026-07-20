import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Target, TrendingDown, BarChart3, Users, TrendingUp, CheckCircle, Zap } from "lucide-react";

export default function RetailRecommendations() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Retailer Lifts Recommendation Revenue 31% With Hybrid Model | Machine Learning Case Study"
      seoDescription="A national retailer's legacy collaborative-filtering recommender ignored new products and cold-start users. A cold-start-aware hybrid model lifted recommendation revenue 31% and shifted basket toward the long tail."
      canonical="/cases/retail-recommendations"
      industry="Retail"
      industryLink="/industries/retail"
      title="How a National Retailer Lifted Recommendation Revenue by 31%"
      subtitle="The recommender ignored anything new and anyone new, endlessly recycling the same popular items. A cold-start-aware hybrid model surfaced the long tail and grew the basket."
      heroImage="/images/capabilities/cap-retail-apparel.jpg"
      metrics={[
        { value: "31%", label: "More Rec Revenue" },
        { value: "Cold-Start", label: "Aware" },
        { value: "Long-Tail", label: "Basket Shift" },
        { value: "Hybrid", label: "Model" }
      ]}
      clientContextTitle="A Recommender Stuck on the Hits"
      clientContextIntro="A national retailer's product recommendations ran on a legacy collaborative-filtering model that had a well-known blind spot: it could only recommend items with plenty of purchase history, to shoppers with plenty of history. New products and new customers — the cold-start cases — were effectively invisible to it."
      clientContextBody="The consequence was a recommender that endlessly recycled the same popular items to the same known shoppers, leaving the long tail of the catalog and every new visitor underserved. New products struggled to gain traction because the system that should have surfaced them ignored them, and first-time shoppers saw generic bestsellers. The retailer was leaving basket growth on the table. It needed a recommender that handled cold-start gracefully and blended signals — a hybrid model that could surface relevant long-tail products and serve new shoppers from their first session."
      clientProfile={{
        industry: "National Retailer",
        companySize: "400+ Stores",
        projectDuration: "5 Months",
        additionalInfo: "Product Recommendations",
        additionalLabel: "Digital Merchandising"
      }}
      challengeTitle="Why the Recommender Underperformed"
      challenges={[
        { icon: Target, title: "Blind to Cold-Start", description: "Collaborative filtering could not recommend new products or serve new shoppers without history." },
        { icon: TrendingDown, title: "Recycling the Hits", description: "The model endlessly re-surfaced the same popular items to the same known customers." },
        { icon: BarChart3, title: "A Buried Long Tail", description: "Relevant long-tail products struggled to gain traction because the recommender ignored them." },
        { icon: Users, title: "Generic for New Shoppers", description: "First-time visitors saw only generic bestsellers, weakening early engagement." }
      ]}
      approachTitle="A Hybrid Model That Handles Cold-Start"
      approachIntro="We replaced the legacy collaborative filter with a cold-start-aware hybrid recommender that blended behavioral and content signals — lifting recommendation revenue 31 percent and shifting basket toward the long tail."
      steps={[
        { step: "01", title: "Diagnosing the Cold-Start Gap", description: "We quantified how much revenue the legacy model lost by ignoring new products and new shoppers." },
        { step: "02", title: "Building the Hybrid Model", description: "We combined collaborative signals with content features so the recommender could serve items and shoppers without purchase history." },
        { step: "03", title: "Handling Cold-Start Gracefully", description: "We designed the model to recommend relevant products from a shopper's first session and surface new catalog items fairly." },
        { step: "04", title: "Shifting Share to the Long Tail", description: "We tuned the recommender to broaden the basket, moving measurable share toward longer-tail SKUs." }
      ]}
      resultsTitle="A Recommender That Grows the Basket"
      results={[
        { icon: TrendingUp, value: "31%", label: "More rec revenue", detail: "Versus the legacy model" },
        { icon: CheckCircle, value: "Cold-Start", label: "Handled", detail: "New products and shoppers served" },
        { icon: BarChart3, value: "Long-Tail", label: "Basket shift", detail: "Share moved beyond the hits" },
        { icon: Zap, value: "Hybrid", label: "Signals blended", detail: "Behavioral plus content" }
      ]}
      quote="Our old recommender could only push the hits to customers we already knew — anything new, product or person, was invisible to it. A hybrid model that handles cold-start surfaced our long tail and served first-time shoppers from the start. Recommendation revenue rose thirty-one percent and the basket finally broadened beyond the same bestsellers."
      quoteAuthor="VP of Digital Merchandising"
      quoteRole="National retailer"
      relatedStudies={[
        { title: "How a Card Issuer Cut Fraud Losses 44% and False Positives at the Same Time", metric: "44%", label: "lower fraud losses", link: "/cases/fraud-detection", image: "/images/industries/fin-trader.jpg" },
        { title: "How a Manufacturer Replaced 47 Point-to-Point Integrations With an API-Led Architecture", metric: "12 wks → 3 wks", label: "per integration", link: "/cases/manufacturer-mulesoft", image: "/images/capabilities/cap-warehouse-robot.jpg" }
      ]}
      ctaTitle="Does your recommender only push the hits?"
      ctaDescription="Let's build a cold-start-aware hybrid model that surfaces the long tail and serves new shoppers."
    />
  );
}
