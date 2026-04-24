import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export default function TelecomCustomerExperience() {
  return (
    <CaseStudyTemplate
      client="National Telecommunications Provider"
      industry="Telecommunications · Customer Intelligence"
      title="Telecom Provider Improves NPS by 23 Points Through Customer Intelligence"
      subtitle="Unified customer data platform enables proactive service interventions and personalized engagement, reducing support costs by $32M while increasing customer satisfaction."
      heroImage="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1600&q=80"
      challenge={`A national telecommunications provider serving 8.4 million subscribers faced a customer experience crisis that threatened market position. Net Promoter Score had declined for three consecutive years, reaching -12—well below industry averages—while customer service costs consumed 18% of revenue due to high contact volumes and inefficient issue resolution. The root cause: fragmented customer data across 14 legacy systems that prevented holistic visibility into customer needs and service quality.

Service representatives lacked unified customer profiles, forcing customers to repeat information across multiple interactions. Network operations teams couldn't correlate service degradation with customer impact, leading to reactive problem-solving that allowed issues to escalate before intervention. Marketing campaigns operated without behavioral insights, resulting in irrelevant offers that damaged rather than strengthened customer relationships.

Churn rates exceeded 22% annually, requiring aggressive acquisition spending to maintain subscriber counts. Customer lifetime value declined by 31% over three years as dissatisfied customers downgraded to lower-tier plans or switched to competitors. Regulatory pressure intensified as customer complaints to oversight agencies increased.`}
      solution={`NEXDYNE designed and implemented a comprehensive customer intelligence platform that unified data from all 14 legacy systems into real-time customer profiles accessible across every touchpoint. The solution integrated network performance telemetry, billing data, service interactions, device information, and behavioral analytics into a single source of truth.

The platform's core innovation was its predictive service quality engine—ML models that analyzed network performance data to identify customers experiencing degraded service before they called support. When the system detected issues like slow data speeds or dropped calls, it automatically triggered proactive outreach through customers' preferred channels acknowledging the problem and providing estimated resolution times.

A 360-degree customer view gave service representatives complete interaction history, device details, plan information, and predicted lifetime value—enabling personalized support that resolved issues faster. The platform included sentiment analysis of support interactions that flagged at-risk customers for retention interventions before they churned. Intelligent engagement campaigns based on customer behavior enabled new customers to receive onboarding content tailored to their device, high-value customers to get priority support, and renewal customers to receive personalized upgrade recommendations based on actual usage data.`}
      impact={`Net Promoter Score improved from -12 to +11—a 23-point increase that moved the company from bottom quartile to industry-leading performance. Customer satisfaction scores increased by 34% as proactive service interventions and personalized engagement demonstrated genuine commitment to customer success.

Support costs decreased by $32 million annually as proactive service notifications reduced inbound contact volume by 38%. Average handle time dropped by 42% as representatives accessed unified customer profiles. First-call resolution improved from 67% to 89%. Churn rates decreased from 22% to 15.8%—a 28% reduction saving approximately $180 million in annual revenue. Customer lifetime value increased by 41%. Regulatory complaints dropped by 62%.`}
      metrics={[
        { value: "+23", label: "NPS point improvement" },
        { value: "$32M", label: "Support cost reduction" },
        { value: "38%", label: "Fewer support contacts" }
      ]}
      tags={["Telecommunications", "Customer Intelligence", "AI", "Operations"]}
      relatedCapability={{
        title: "Growth Marketing & Sales",
        link: "/capabilities/growth-marketing-sales"
      }}
    />
  );
}
