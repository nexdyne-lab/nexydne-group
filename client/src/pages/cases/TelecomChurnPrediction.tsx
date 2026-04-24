import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export default function TelecomChurnPrediction() {
  return (
    <CaseStudyTemplate
      client="Regional Telecom Provider"
      industry="Telecommunications · Machine Learning"
      title="Telecom Provider Cuts Churn 22% with Predictive Model"
      subtitle="Real-time churn scoring identifies at-risk customers 60 days before cancellation, enabling targeted retention campaigns that save $12M annually."
      heroImage="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1600&q=80"
      challenge={`A regional telecom provider with 2.8M subscribers faced escalating churn rates in a competitive market. By the time customer service noticed warning signs—support tickets, billing disputes, plan downgrades—it was often too late to prevent cancellation. Retention offers went to customers who weren't actually at risk, wasting budget on unnecessary discounts.

Their existing approach relied on manual rules: "if customer calls support 3+ times in a month, flag for retention." These rules generated too many false positives (frustrated but loyal customers) and missed subtle patterns that predicted churn (gradual usage decline, competitor price shopping, life events like relocation).

They needed a system that scored every customer's churn risk daily, identified the specific factors driving each individual's risk, and integrated with their CRM to trigger personalized retention campaigns automatically. The model had to balance precision (don't waste retention budget) with recall (don't miss high-value customers about to leave).`}
      solution={`NEXDYNE deployed a gradient boosting classifier (LightGBM) that predicts 90-day churn probability for every subscriber, updated nightly. The model combines behavioral signals (usage patterns, payment history, support interactions), demographic data (contract type, tenure, device age), and external indicators (competitor promotions, local unemployment rates, seasonal moving patterns).

We engineered features that capture early warning signs: declining data usage, increased competitor website visits, plan comparison activity, and social network effects (friends who recently churned). The model outputs not just a risk score but also the top 3 drivers for each customer, enabling personalized retention tactics via SHAP values.

High-risk customers trigger automated workflows in Salesforce: retention specialists receive prioritized task lists, outbound dialers queue targeted calls, and email campaigns deploy personalized offers based on churn drivers—price-sensitive customers get discounts, service-frustrated customers get priority support, feature-seekers get upgrade offers.`}
      impact={`Churn rate dropped 22% in the first year, saving $12M in annual recurring revenue. The model achieves 78% precision at 65% recall, meaning retention efforts focus on genuinely at-risk customers while catching most potential churners before they leave. Average customer lifetime value increased 18% as saved customers stayed longer.

Win-back rates for contacted customers improved from 23% to 41% as retention specialists address specific pain points instead of throwing generic discounts at everyone. The model also identified unexpected churn drivers that informed product strategy: customers with outdated devices churn 3x faster (leading to a device upgrade program), and billing complexity correlated strongly with churn (triggering a billing simplification initiative).`}
      metrics={[
        { value: "22%", label: "Churn reduction" },
        { value: "$12M", label: "Annual revenue saved" },
        { value: "60 days", label: "Early warning window" },
        { value: "2.8M", label: "Customers scored daily" }
      ]}
      tags={["Telecommunications", "Machine Learning", "Churn Prediction", "AI"]}
      relatedCapability={{
        title: "AI & Machine Learning",
        link: "/capabilities/ai"
      }}
    />
  );
}
