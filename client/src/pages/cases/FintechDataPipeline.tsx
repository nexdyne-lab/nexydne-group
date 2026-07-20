import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Gauge, ShieldCheck, Timer, Zap, Layers, Boxes } from "lucide-react";

export default function FintechDataPipeline() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Scaling Real-Time Payment Processing 10x with Kafka | Fintech Case Study"
      seoDescription="A payment processor's batch system capped at 5,000 TPS as volume grew 300%. A Kafka streaming pipeline scaled to 50,000 TPS at 99.99% uptime and sub-100ms latency."
      canonical="/cases/fintech-data-pipeline"
      industry="Financial Services"
      industryLink="/industries/financial-services"
      title="How a Payment Processor Scaled Real-Time Transactions 10x"
      subtitle="A payment processor rebuilt its transaction pipeline on Kafka streaming — handling 50,000 transactions per second at 99.99% uptime and sub-100ms latency, all PCI-DSS compliant."
      heroImage="/images/cases/fintech-data-pipeline-hero.jpg"
      metrics={[
        { value: "10x", label: "Transaction Capacity" },
        { value: "99.99%", label: "Uptime" },
        { value: "<100ms", label: "End-to-End Latency" }
      ]}
      clientContextTitle="A Batch System Buckling Under Growth"
      clientContextIntro="A rapidly growing payment processor serving 2,500 merchants hit a critical bottleneck: its legacy batch-based system could only handle 5,000 transactions per second at peak. As merchant volume grew 300% year-over-year, the system began failing — outages, delayed settlements, and data inconsistencies that threatened trust and compliance."
      clientContextBody="The eight-person engineering team lacked specialized expertise in distributed streaming and real-time processing. They needed to rebuild the entire pipeline to handle 10x the volume while maintaining PCI-DSS compliance, running fraud detection in real time, and giving merchants instant transaction visibility."
      clientProfile={{
        industry: "Payment Processing Company",
        companySize: "2,500 Merchants",
        projectDuration: "6-Month Engagement",
        additionalInfo: "Kafka + Kinesis + Flink",
        additionalLabel: "Streaming Stack"
      }}
      challengeTitle="Why the Old Pipeline Couldn't Keep Up"
      challenges={[
        {
          icon: Timer,
          title: "Capped at 5,000 TPS",
          description: "The batch system maxed out at 5,000 transactions per second — far short of peak demand as volume surged."
        },
        {
          icon: Boxes,
          title: "Outages and delayed settlements",
          description: "As volume grew 300%, the system suffered frequent outages, delayed settlements, and data inconsistencies."
        },
        {
          icon: ShieldCheck,
          title: "Compliance under strain",
          description: "Data inconsistencies threatened both customer trust and PCI-DSS regulatory compliance."
        },
        {
          icon: Layers,
          title: "A specialized skills gap",
          description: "The internal team lacked deep expertise in distributed streaming architectures and real-time processing."
        }
      ]}
      approachTitle="A Cloud-Native Streaming Architecture"
      approachIntro="NEXDYNE embedded a four-person data-engineering team specializing in real-time streaming, designing a cloud-native architecture that separated ingestion, processing, fraud detection, and settlement into independently scalable services."
      steps={[
        {
          step: "01",
          title: "Assess and design fast",
          description: "Within two weeks, engineers mapped critical failure points and designed a Kafka, Kinesis, and Flink architecture built to scale horizontally."
        },
        {
          step: "02",
          title: "Decompose into microservices",
          description: "Transaction ingestion, processing, fraud detection, and settlement each became an independent service that could scale on its own."
        },
        {
          step: "03",
          title: "Build for compliance and reliability",
          description: "A 12-broker Kafka cluster handled 50K messages/second behind a PCI-DSS-compliant encryption and tokenization layer, with CI/CD and Datadog monitoring."
        },
        {
          step: "04",
          title: "Transfer the knowledge",
          description: "Weekly sessions meant that by month four the client's team was independently managing maintenance and shipping features."
        }
      ]}
      resultsTitle="The Payoff"
      results={[
        {
          icon: Gauge,
          value: "10x",
          label: "Transaction capacity",
          detail: "Now handling 50,000 transactions per second at peak"
        },
        {
          icon: Zap,
          value: "99.99%",
          label: "Uptime",
          detail: "At sub-100ms end-to-end latency"
        },
        {
          icon: ShieldCheck,
          value: "Zero",
          label: "PCI-DSS audit findings",
          detail: "While avoiding heavy infrastructure costs over three years"
        }
      ]}
      quote=""
      quoteAuthor=""
      quoteRole=""
      relatedStudies={[
        {
          title: "Scaling a Fintech Platform to 50M Transactions a Day",
          metric: "50M",
          label: "daily transactions",
          link: "/cases/fintech-microservices",
          image: "/images/cases/fintech-microservices-hero.jpg"
        },
        {
          title: "Detecting Fraud 40% Faster with ML",
          metric: "40%",
          label: "faster fraud detection",
          link: "/cases/financial-fraud-detection-ml",
          image: "/images/cases/financial-fraud-detection-ml-hero.jpg"
        }
      ]}
      ctaTitle="Ready to scale your transactions without breaking?"
      ctaDescription="Let's talk about what a real-time streaming architecture could handle for you."
    />
  );
}
