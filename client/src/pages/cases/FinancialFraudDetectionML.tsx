import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Zap, BellOff, Network, Activity, ThumbsUp, ShieldAlert } from "lucide-react";

export default function FinancialFraudDetectionML() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Detecting Fraud 40% Faster with Graph Neural Networks | Banking Case Study"
      seoDescription="A bank processing 15M transactions a month drowned in false alarms while missing fraud rings. A GNN-powered system caught fraud 40% faster and cut false positives 65%."
      canonical="/cases/financial-fraud-detection-ml"
      industry="Financial Services"
      industryLink="/industries/financial-services"
      title="How a Bank Detects Fraud 40% Faster with ML Anomaly Detection"
      subtitle="A graph neural network identifies suspicious transaction patterns in real time — reducing false positives 65% while catching fraud earlier and uncovering rings the rules missed."
      heroImage="/images/cases/financial-fraud-detection-ml-hero.jpg"
      metrics={[
        { value: "40%", label: "Faster Fraud Detection" },
        { value: "65%", label: "Fewer False Positives" },
        { value: "3.2 pts", label: "Higher Approval Rates" }
      ]}
      clientContextTitle="Too Many Alarms, Too Little Insight"
      clientContextIntro="A regional bank processing 15M transactions monthly struggled with fraud detection that generated too many false alarms while missing sophisticated fraud rings. Its rule-based system flagged 8% of transactions for manual review, overwhelming analysts and blocking legitimate purchases."
      clientContextBody="Simple patterns — large foreign purchases, rapid-fire transactions — were easy to catch but were only 30% of actual fraud. Organized networks used subtle techniques: small test transactions on stolen cards, gradual spending increases to evade velocity rules, and coordinated activity across compromised accounts that looked normal in isolation. The bank needed real-time scoring that understood network effects and behavior — in under 100ms, inside the payment-authorization flow."
      clientProfile={{
        industry: "Regional Bank",
        companySize: "15M Transactions / Month",
        projectDuration: "Real-Time Deployment",
        additionalInfo: "80ms Scoring",
        additionalLabel: "Latency"
      }}
      challengeTitle="Why Fraud Slipped Through"
      challenges={[
        {
          icon: BellOff,
          title: "Overwhelming false positives",
          description: "The rules engine flagged 8% of transactions, burying analysts and blocking legitimate customer purchases."
        },
        {
          icon: Network,
          title: "Invisible fraud rings",
          description: "Coordinated activity across multiple compromised accounts looked normal in isolation and evaded rule-based detection."
        },
        {
          icon: Activity,
          title: "Only obvious fraud caught",
          description: "Simple patterns accounted for just 30% of fraud; subtle, evolving tactics went undetected."
        },
        {
          icon: ShieldAlert,
          title: "A hard latency budget",
          description: "Any solution had to score transactions in under 100ms to fit inside the payment-authorization flow."
        }
      ]}
      approachTitle="A Two-Stage System with a Graph Brain"
      approachIntro="NEXDYNE deployed a two-stage fraud system: a fast model for real-time scoring, plus a graph neural network that maps relationships and propagates fraud signals through connected entities."
      steps={[
        {
          step: "01",
          title: "Score every transaction in 80ms",
          description: "A gradient boosting model combined transaction features, customer behavior, and entity risk to output a fraud probability and explanation in 80 milliseconds."
        },
        {
          step: "02",
          title: "Map the network hourly",
          description: "A graph neural network built relationships across cardholders, merchants, devices, and IPs — propagating fraud signals through connected entities to expose rings."
        },
        {
          step: "03",
          title: "Give analysts network context",
          description: "A custom dashboard showed which merchants had high chargeback volumes and which devices linked fraud across multiple cards."
        },
        {
          step: "04",
          title: "Learn from every case",
          description: "Confirmed fraud retrained the model nightly, so new patterns were incorporated automatically as tactics evolved."
        }
      ]}
      resultsTitle="The Payoff"
      results={[
        {
          icon: Zap,
          value: "40%",
          label: "Faster fraud detection",
          detail: "Catching activity 2.3 transactions earlier on average"
        },
        {
          icon: BellOff,
          value: "65%",
          label: "Fewer false positives",
          detail: "Manual review from 8% down to 2.8% of transactions"
        },
        {
          icon: ThumbsUp,
          value: "3.2 pts",
          label: "Higher approval rates",
          detail: "Legitimate purchases stopped being blocked as fraud"
        }
      ]}
      quote=""
      quoteAuthor=""
      quoteRole=""
      relatedStudies={[
        {
          title: "Automating Regulatory Compliance with Fine-Tuned LLMs",
          metric: "60%",
          label: "fewer false positives",
          link: "/case-studies/financial-compliance-automation",
          image: "/images/industries/fin-monitors.jpg"
        },
        {
          title: "Reducing Retail Shrinkage 25% with Computer Vision",
          metric: "25%",
          label: "less shrinkage",
          link: "/case-studies/retail-shrinkage-reduction",
          image: "/images/capabilities/cap-retail-apparel.jpg"
        }
      ]}
      ctaTitle="Ready to catch the fraud your rules can't see?"
      ctaDescription="Let's talk about what network-aware detection could prevent across your transactions."
    />
  );
}
