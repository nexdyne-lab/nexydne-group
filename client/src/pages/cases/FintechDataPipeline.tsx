import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export default function FintechDataPipeline() {
  return (
    <CaseStudyTemplate
      client="Payment Processing Company"
      industry="Fintech · Data Engineering"
      title="Fintech Scales Real-Time Transaction Processing"
      subtitle="Payment processor builds Kafka streaming pipeline handling 50,000 transactions per second with 99.99% uptime and sub-100ms latency."
      heroImage="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1600&q=80"
      challenge={`A rapidly growing payment processing company serving 2,500 merchants across the United States faced a critical infrastructure bottleneck. Their legacy batch-based transaction processing system could only handle 5,000 transactions per second during peak hours. As merchant volume grew 300% year-over-year, the system began experiencing frequent outages, delayed settlements, and data inconsistencies that threatened customer trust and regulatory compliance.

The internal engineering team of 8 people lacked specialized expertise in distributed streaming architectures and real-time data processing. They needed to rebuild their entire transaction pipeline to handle 10x current volume while maintaining PCI-DSS compliance, implementing fraud detection in real-time, and providing merchants with instant transaction visibility.`}
      solution={`NEXDYNE embedded a 4-person data engineering team specializing in real-time streaming architectures. Within 2 weeks, our engineers conducted a comprehensive technical assessment, identified critical failure points, and designed a cloud-native architecture using Apache Kafka, AWS Kinesis, and Flink for stream processing. The new architecture separated transaction ingestion, processing, fraud detection, and settlement into independent microservices that could scale horizontally.

We implemented CI/CD pipelines using GitHub Actions, established comprehensive monitoring with Datadog, and built automated testing frameworks that validated data integrity across the entire streaming pipeline. Throughout the 6-month engagement, we conducted weekly knowledge transfer sessions—by month 4, the client's team was independently managing routine pipeline maintenance and feature development. Key implementations included an Apache Kafka cluster with 12 brokers handling 50K messages/second and a PCI-DSS compliant encryption and tokenization layer.`}
      impact={`The new real-time transaction processing pipeline went live in production after 5 months of development and 1 month of parallel testing. The system now handles peak loads of 50,000 transactions per second with 99.99% uptime and sub-100ms end-to-end latency. Merchant churn dropped 45% within the first quarter post-launch as transaction visibility and settlement speed improved dramatically.

The client's internal engineering team gained deep expertise in distributed streaming architectures. The company successfully passed their PCI-DSS audit with zero findings. The new architecture positioned them to support 10x growth without additional engineering augmentation, saving an estimated $2.4M in hiring and infrastructure costs over 3 years.`}
      metrics={[
        { value: "10x", label: "Transaction capacity increase" },
        { value: "99.99%", label: "System uptime achieved" },
        { value: "<100ms", label: "End-to-end latency" }
      ]}
      tags={["Data Engineering", "Fintech", "Real-Time Systems", "Kafka"]}
      relatedCapability={{
        title: "Technology",
        link: "/capabilities/technology"
      }}
    />
  );
}
