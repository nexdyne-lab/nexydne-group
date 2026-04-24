import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export function BankCrossSell() {
  return (
    <CaseStudyTemplate
      client="Regional Community Bank"
      industry="Financial Services · Growth Marketing & Sales"
      title="2.1x Cross-Sell Conversion Rate"
      subtitle="A 120-employee community bank with $1.2B in assets implements next-best-action models to personalize product recommendations, doubling cross-sell conversion and generating $640K in new revenue."
      heroImage="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1600&q=80"
      challenge={`A regional community bank with 120 employees and $1.2B in assets was struggling to deepen relationships with existing customers. Despite having a loyal customer base with an average tenure of 8+ years, the bank's cross-sell ratio of 2.1 products per customer lagged significantly behind the industry benchmark of 3.5.

The bank's approach to cross-selling was fundamentally broken. Branch staff made generic product recommendations based on intuition rather than data. Marketing campaigns promoted the same products to everyone, regardless of individual needs or financial situations. Customers felt marketed to rather than understood.

Key challenges included no visibility into which products each customer was most likely to need, branch staff overwhelmed with product options and no guidance on prioritization, marketing campaigns with sub-1% response rates, and customer data siloed across core banking, CRM, and digital channels.`}
      solution={`NEXDYNE implemented a comprehensive next-best-action recommendation system that put the right product in front of the right customer at the right time—through the right channel.

Customer data was unified from core banking, CRM, digital banking, and external sources to create comprehensive 360-degree customer financial profiles with life event detection signals and channel preference mapping. Machine learning models were built to predict likelihood of purchase for each product category, covering 12 product propensity models, life stage segmentation, and timing optimization signals.

A recommendation engine ranked products by propensity, profitability, and customer value to surface the optimal offer with real-time recommendations and channel-specific messaging. Recommendations were deployed to branch staff, call center, digital banking, and marketing automation systems with training and playbooks—enabling consistent omnichannel personalization.`}
      impact={`Cross-sell conversion more than doubled—from the previous generic-pitch approach to a 2.1x improvement—generating $640K in new first-year revenue. Customer engagement increased 45% through recommendation acceptance, and products per customer rose from 2.1 to 2.8, moving meaningfully toward the industry benchmark.

Customers who received consistent recommendations across branch, digital, and call center channels showed 2x higher conversion than single-channel outreach. The branch staff adoption rate surged when simple, actionable recommendations with talking points replaced complex dashboards. Life event signals—new home, new job—proved to dramatically improve conversion beyond propensity scores alone.`}
      metrics={[
        { value: "2.1x", label: "Cross-sell conversion" },
        { value: "$640K", label: "New revenue generated" },
        { value: "45%", label: "Customer engagement increase" },
        { value: "2.8", label: "Products per customer" }
      ]}
      quote={{
        text: "The next-best-action engine NEXDYNE built transformed our cross-sell strategy. We went from generic product pitches to personalized recommendations that doubled our conversion rate. Our customers feel understood, not marketed to.",
        author: "Robert Thompson",
        role: "Chief Digital Officer"
      }}
      tags={["Financial Services", "AI", "Growth Marketing", "Customer Intelligence"]}
      relatedCapability={{
        title: "Growth Marketing & Sales",
        link: "/capabilities/growth-marketing-sales"
      }}
    />
  );
}

export default BankCrossSell;
