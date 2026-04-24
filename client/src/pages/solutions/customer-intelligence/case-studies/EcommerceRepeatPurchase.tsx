import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export function EcommerceRepeatPurchase() {
  return (
    <CaseStudyTemplate
      client="Specialty E-commerce Retailer"
      industry="E-commerce & Retail · Growth Marketing & Sales"
      title="42% Increase in Repeat Purchase Rate"
      subtitle="A 150-employee specialty online retailer with $45M in revenue deploys predictive analytics and personalized recommendations, increasing repeat purchase rate from 18% to 25.6% and generating $1.2M in annual revenue lift."
      heroImage="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1600&q=80"
      challenge={`A specialty e-commerce retailer with 150 employees and $45M in annual revenue was struggling to turn their customer data into growth. Despite collecting extensive transaction histories, browsing behavior, and customer feedback, their marketing team relied on generic batch-and-blast campaigns that treated all customers the same.

The company's repeat purchase rate had stagnated at 18%—well below the industry benchmark of 27%. Customer acquisition costs were rising, but lifetime value wasn't keeping pace. The marketing team knew they were sitting on valuable data but lacked the tools and expertise to activate it.

Customer data was siloed across the e-commerce platform, email system, and customer service tools, with no visibility into customer lifetime value or purchase propensity. Generic product recommendations didn't reflect individual preferences, and marketing campaigns showed declining engagement and conversion rates.`}
      solution={`NEXDYNE implemented a comprehensive customer intelligence solution transforming fragmented data into personalized experiences across four phases.

A customer data platform unified data from Shopify, Klaviyo, Zendesk, and Google Analytics into a single customer view with 360-degree profiles and real-time data synchronization. Machine learning models were developed to predict customer lifetime value with 85% accuracy, next-purchase timing, and product affinity scoring.

Twelve behavioral segments and a real-time recommendation engine enabled personalized email content and website experiences. Fifteen automated customer journeys triggered by behavioral signals were built, optimized through continuous A/B testing with dynamic send-time optimization. The recommendation engine improves continuously through feedback loops, ensuring sustained performance gains.`}
      impact={`Repeat purchase rate increased 42%—from 18% to 25.6%—generating $1.2M in incremental annual revenue. Campaign ROI improved 3.2x compared to previous generic campaigns, and email engagement increased 28% in open and click rates.

Customer lifetime value improved significantly as high-propensity customers were identified and engaged at optimal timing. The marketing team, trained to interpret insights and optimize campaigns, operates with sustained capability that continues improving after implementation. Investing in identity resolution and data cleansing upfront paid dividends in model accuracy and personalization effectiveness.`}
      metrics={[
        { value: "42%", label: "Repeat purchase increase" },
        { value: "$1.2M", label: "Annual revenue lift" },
        { value: "3.2x", label: "Campaign ROI improvement" },
        { value: "28%", label: "Email engagement increase" }
      ]}
      quote={{
        text: "We were drowning in customer data but had no way to act on it. NEXDYNE built our CDP, unified our customer view, and deployed ML models that increased repeat purchases by 42%. The ROI was immediate and measurable.",
        author: "Lisa Martinez",
        role: "VP of Marketing"
      }}
      tags={["E-commerce", "Retail", "AI", "Customer Intelligence", "Growth Marketing"]}
      relatedCapability={{
        title: "Growth Marketing & Sales",
        link: "/capabilities/growth-marketing-sales"
      }}
    />
  );
}

export default EcommerceRepeatPurchase;
