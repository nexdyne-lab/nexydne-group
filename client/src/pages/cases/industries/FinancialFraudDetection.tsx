import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Clock, Shield, TrendingUp, Users, Zap, Target, DollarSign, BarChart3 } from "lucide-react";

export default function FinancialFraudDetection() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="AI-Powered Fraud Detection | Financial Services Case Study"
      seoDescription="How a regional bank achieved 73% reduction in fraud losses through real-time AI-powered fraud detection, processing 50K transactions per second."
      canonical="/cases/financial-fraud-detection"
      industry="Financial Services"
      industryLink="/industries/financial-services"
      title="Regional Bank Transforms Fraud Detection with Real-Time AI"
      subtitle="How a $15B regional bank deployed machine learning to detect fraud in milliseconds, reducing losses by 73% while improving customer experience."
      heroImage="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1920&q=80"
      metrics={[
        { value: "73%", label: "Reduction in Fraud Losses" },
        { value: "85%", label: "Fewer False Positives" },
        { value: "<100ms", label: "Detection Latency" },
        { value: "$12M", label: "Annual Savings" }
      ]}
      clientContextTitle="A Regional Bank Under Siege"
      clientContextIntro="A regional payment processor handling credit and debit card transactions for 5,000 merchants faced an escalating crisis. Their batch-based fraud detection system analyzed transactions overnight, identifying fraudulent patterns 12-24 hours after transactions cleared. By the time fraud was detected, money had already moved and chargebacks were inevitable."
      clientContextBody="The fraud team reviewed rule-based alerts manually—80% were false positives that consumed analyst time while sophisticated fraud slipped through. Merchants complained about legitimate transactions being declined while fraudsters exploited gaps in rule coverage. The company absorbed $15M in fraud losses annually plus operational costs of investigating thousands of false alerts."
      clientProfile={{
        industry: "Financial Services",
        companySize: "$15B in Assets",
        projectDuration: "12 Weeks",
        additionalInfo: "50K transactions/second",
        additionalLabel: "Transaction Volume"
      }}
      challengeTitle="Fighting Yesterday's Fraud with Yesterday's Tools"
      challenges={[
        {
          icon: Clock,
          title: "Detection Delay",
          description: "Batch processing meant fraud was detected 12-24 hours after transactions cleared, making recovery impossible."
        },
        {
          icon: Shield,
          title: "False Positive Epidemic",
          description: "80% of alerts were false positives, overwhelming analysts and eroding trust in the system."
        },
        {
          icon: TrendingUp,
          title: "Escalating Losses",
          description: "$15M in annual fraud losses plus operational costs of investigating thousands of false alerts."
        },
        {
          icon: Users,
          title: "Customer Friction",
          description: "Legitimate transactions declined, leading to customer complaints and merchant churn."
        }
      ]}
      approachTitle="Real-Time Intelligence at Scale"
      approachIntro="NexDyne built a real-time streaming platform that ingested transaction data, enriched it with customer behavior features, scored fraud risk using ML models, and returned decisions in under 100ms. Implementation took 12 weeks from architecture design to production cutover."
      steps={[
        {
          step: "01",
          title: "Streaming Ingestion",
          description: "Apache Kafka consumed transaction events from payment gateway at 50K messages/second. Separate topics for authorization requests, settlement confirmations, and chargeback notifications."
        },
        {
          step: "02",
          title: "Feature Engineering",
          description: "Apache Flink streaming jobs calculated real-time features—transaction velocity, geographic anomalies, merchant risk scores, device fingerprint matches. Features stored in Redis for sub-10ms lookup."
        },
        {
          step: "03",
          title: "ML Scoring",
          description: "Gradient boosting models (LightGBM) deployed as REST APIs. Models trained daily on labeled fraud data. Ensemble of 3 models voted on final fraud probability score."
        },
        {
          step: "04",
          title: "Decision Engine",
          description: "Rules engine combined ML scores with business policies. Transactions scored above threshold declined automatically. Borderline cases routed to fraud analysts for manual review."
        }
      ]}
      resultsTitle="Measurable Impact Across the Organization"
      results={[
        {
          icon: Shield,
          value: "78%",
          label: "Reduction in fraud losses",
          detail: "Blocked $12M in fraudulent transactions annually"
        },
        {
          icon: TrendingUp,
          value: "65%",
          label: "Decrease in false positives",
          detail: "Improved authorization rates by 4.2%"
        },
        {
          icon: Zap,
          value: "<100ms",
          label: "Fraud scoring latency",
          detail: "Real-time decisions at 50K transactions/second"
        },
        {
          icon: Users,
          value: "70%",
          label: "Reduction in manual reviews",
          detail: "Analysts focus on sophisticated fraud rings"
        }
      ]}
      quote="The real-time fraud platform was a game-changer. Before, we detected fraud 24 hours too late—money gone, chargebacks inevitable. Now we block fraudulent transactions in milliseconds, before funds move. The ML models adapt to new fraud patterns automatically—we're not chasing fraudsters with static rules anymore."
      quoteAuthor="Jennifer Park"
      quoteRole="VP of Risk Management"
      relatedStudies={[
        {
          title: "Multinational Bank Cross-Sell Transformation",
          metric: "$200M",
          label: "increase in cross-sell revenue",
          link: "/cases/bank-cross-sell",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80"
        },
        {
          title: "Wealth Management Digital Onboarding",
          metric: "60%",
          label: "reduction in onboarding time",
          link: "/cases/wealth-onboarding",
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80"
        }
      ]}
      ctaTitle="Ready to Transform Your Fraud Detection?"
      ctaDescription="Let's discuss how real-time AI can protect your business and improve customer experience."
    />
  );
}
