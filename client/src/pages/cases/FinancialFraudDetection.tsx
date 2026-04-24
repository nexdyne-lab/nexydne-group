import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export default function FinancialFraudDetection() {
  return (
    <CaseStudyTemplate
      client="Regional Payment Processor"
      industry="Fintech · Fraud Detection"
      title="Financial Services Firm Detects Fraud in Real-Time"
      subtitle="Real-time streaming platform processes 50K transactions/second with sub-100ms fraud detection latency, blocking $12M in fraudulent transactions annually."
      heroImage="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1600&q=80"
      challenge={`A regional payment processor handling credit and debit card transactions for 5,000 merchants struggled with fraud detection. Their batch-based system analyzed transactions overnight, identifying fraudulent patterns 12-24 hours after transactions cleared. By the time fraud was detected, money had already moved and chargebacks were inevitable.

The fraud team reviewed rule-based alerts manually—80% false positives that consumed analyst time while sophisticated fraud slipped through. Merchants complained about legitimate transactions being declined (false positives) while fraudsters exploited gaps in rule coverage. The company absorbed $15M in fraud losses annually plus operational costs of investigating thousands of false alerts.

The firm needed a real-time fraud detection system that scored transactions in milliseconds, learned from new fraud patterns automatically, and reduced false positives without increasing fraud losses.`}
      solution={`NEXDYNE built a real-time streaming platform that ingested transaction data, enriched it with customer behavior features, scored fraud risk using ML models, and returned decisions in under 100ms.

Apache Kafka consumed transaction events at 50K messages/second. Apache Flink streaming jobs calculated real-time features—transaction velocity, geographic anomalies, merchant risk score, and device fingerprint matches. Features were stored in Redis for sub-10ms lookup. Gradient boosting models (LightGBM) deployed as REST APIs on AWS Lambda scored fraud risk. An ensemble of 3 models voted on final fraud probability scores.

A rules engine combined ML scores with business policies. Transactions scored above threshold were declined automatically, while borderline cases were routed to fraud analysts for manual review. We ran the new system in shadow mode for 4 weeks to validate accuracy before going live.`}
      impact={`The real-time fraud platform was a game-changer. Fraud losses dropped 78% in the first year as the system blocked $12M in fraudulent transactions annually. False positives decreased 65%, so legitimate customers were no longer unnecessarily declined. The ML models adapt to new fraud patterns automatically—the firm is no longer chasing fraudsters with static rules.

Chargeback rates decreased from 0.8% to 0.2%, saving $3.2M in chargeback fees and operational costs. Automated fraud detection reduced manual review workload 70%, allowing fraud analysts to focus on sophisticated fraud rings. Merchant satisfaction scores improved 38%, and merchant churn decreased 22%.`}
      metrics={[
        { value: "78%", label: "Reduction in fraud losses" },
        { value: "65%", label: "Decrease in false positives" },
        { value: "<100ms", label: "Fraud scoring latency" }
      ]}
      quote={{
        text: "Before, we detected fraud 24 hours too late—money gone, chargebacks inevitable. Now we block fraudulent transactions in milliseconds, before funds move. Fraud losses dropped 78% in the first year. Just as important, false positives decreased 65%, so we're not declining legitimate customers.",
        author: "Jennifer Park",
        role: "VP of Risk Management"
      }}
      tags={["Fraud Detection", "Machine Learning", "Real-Time Systems", "Fintech"]}
      relatedCapability={{
        title: "Artificial Intelligence",
        link: "/capabilities/artificial-intelligence"
      }}
    />
  );
}
