import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export default function RetailModernizationPersonalization() {
  return (
    <CaseStudyTemplate
      client="National Home Goods Retailer"
      industry="Retail · Personalization"
      title="National Retailer Modernizes Legacy Systems and Unlocks 34% Revenue Growth with AI-Powered Personalization"
      subtitle="How a home goods retailer deployed Bloomreach CDP to deliver individualized product recommendations and personalized email campaigns—driving $18M in incremental annual revenue."
      heroImage="https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=1600&q=80"
      challenge={`A national home goods retailer with 150+ stores and a growing e-commerce presence faced mounting pressure from digital-native competitors offering personalized shopping experiences. Their legacy technology stack—built on monolithic systems and batch processing—prevented them from delivering real-time personalization across channels.

Customer data lived in siloed systems (e-commerce platform, POS, email service provider, loyalty program), making it impossible to build unified customer profiles or orchestrate personalized experiences. Generic product recommendations and one-size-fits-all email campaigns resulted in declining conversion rates and stagnant customer lifetime value. Legacy systems processed customer data overnight, making real-time personalization impossible—product recommendations reflected yesterday's behavior, not current intent signals.`}
      solution={`NEXDYNE architected and implemented a comprehensive personalization platform built on Bloomreach CDP, consolidating customer data from all touchpoints—e-commerce, POS, email, loyalty program, and customer service—into unified, real-time profiles that updated instantly as behaviors occurred.

We implemented Bloomreach's machine learning recommendation engine across the website and mobile app. Collaborative filtering analyzed purchase patterns across millions of customers to surface "customers who bought this also bought" recommendations. Real-time personalization adapted recommendations based on current session behavior—if a customer browsed bedroom furniture, the homepage dynamically featured complementary items.

We rebuilt the email program using Bloomreach Engagement: abandoned cart emails featured exact products left behind with personalized subject lines and send-time optimization; browse abandonment campaigns reminded customers of recently viewed items with dynamic pricing; predictive segmentation identified at-risk customers for win-back offers. We also trained marketing teams on Bloomreach's visual campaign builder, enabling them to create personalized campaigns without IT support.`}
      impact={`Personalized product recommendations drove $18M in incremental annual revenue, a 34% increase year-over-year. Customers who engaged with recommendations had 2.3x higher average order values and purchased 40% more frequently. The 47% conversion rate lift was driven by website conversion improving from 2.1% to 3.1%, with mobile conversion—historically lagging desktop—increasing 61%.

Personalized email campaigns achieved 42% open rates (vs. 15% for generic campaigns) and 12% click-through rates (vs. 4% previously). Abandoned cart recovery rate increased from 8% to 23%, recovering $4.2M in otherwise lost revenue. Marketing teams launched personalized campaigns 5x faster without IT bottlenecks and ran 120+ A/B tests in the first year. Customer service gained unified customer views, reducing average handle time by 18%.`}
      metrics={[
        { value: "34%", label: "Revenue increase" },
        { value: "$18M", label: "Incremental annual revenue" },
        { value: "2.8x", label: "Email CTR improvement" },
        { value: "47%", label: "Conversion rate lift" }
      ]}
      tags={["Retail", "Personalization", "AI", "Growth Marketing"]}
      relatedCapability={{
        title: "Growth Marketing & Sales",
        link: "/capabilities/growth-marketing-sales"
      }}
    />
  );
}
