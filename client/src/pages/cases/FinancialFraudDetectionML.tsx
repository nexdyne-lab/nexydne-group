import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export function FinancialFraudDetectionML() {
  return (
    <CaseStudyTemplate
      client="Regional Bank"
      industry="Banking · Fraud Detection"
      title="Bank Detects Fraud 40% Faster with ML Anomaly Detection"
      subtitle="Graph neural network identifies suspicious transaction patterns in real-time, reducing false positives 65% while catching fraud earlier."
      heroImage="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1600&q=80"
      challenge={`A regional bank processing 15M transactions monthly struggled with fraud detection that generated too many false alarms while missing sophisticated fraud rings. Their rule-based system flagged 8% of transactions for manual review, overwhelming fraud analysts with false positives and creating customer friction when legitimate purchases got blocked.

Traditional fraud patterns—large purchases in foreign countries, rapid-fire transactions—were easy to catch but represented only 30% of actual fraud. Organized crime networks used subtle techniques: small test transactions to validate stolen cards, gradual spending increases to avoid velocity rules, and coordinated activity across multiple compromised accounts that looked normal in isolation.

The bank needed real-time fraud scoring that considered network effects (is this merchant connected to other fraud cases?), behavioral anomalies (does this purchase fit the customer's profile?), and evolving tactics. The solution had to score transactions in under 100ms to fit within payment authorization flows.`}
      solution={`NEXDYNE deployed a two-stage fraud detection system: a fast gradient boosting model for real-time transaction scoring, plus a graph neural network (GNN) that runs hourly to identify fraud rings and update entity risk scores. The GNN builds a network of relationships—cardholders, merchants, devices, IP addresses—and propagates fraud signals through connected entities.

The real-time model combines transaction features, customer behavior, and entity risk scores from the GNN, outputting a fraud probability and explanation in 80ms. Fraud analysts review high-risk transactions in a custom dashboard that shows network context: which merchants have processed high chargeback volumes, which devices are associated with fraud across multiple cards.

The system learns from analyst feedback—confirmed fraud cases retrain the model nightly, and new fraud patterns get incorporated automatically.`}
      impact={`Fraud detection speed improved 40%—the system now catches suspicious activity an average of 2.3 transactions earlier than the old rule-based approach, preventing larger losses before fraudsters max out stolen cards. False positive rates dropped 65%, reducing manual review volume from 8% to 2.8% of transactions.

The bank prevented $18M in fraud losses in the first year while reducing operational costs. Customer complaints about declined legitimate purchases fell 52%, and authorization approval rates improved 3.2 percentage points. The graph neural network uncovered fraud rings that rule-based systems missed entirely, leading to 14 law enforcement referrals and permanent merchant blocks.`}
      metrics={[
        { value: "40%", label: "Faster fraud detection" },
        { value: "65%", label: "False positive reduction" },
        { value: "$18M", label: "Annual fraud losses prevented" }
      ]}
      tags={["Fraud Detection", "Graph Neural Networks", "Machine Learning", "Banking"]}
      relatedCapability={{
        title: "Artificial Intelligence",
        link: "/capabilities/artificial-intelligence"
      }}
    />
  );
}

export default FinancialFraudDetectionML;
