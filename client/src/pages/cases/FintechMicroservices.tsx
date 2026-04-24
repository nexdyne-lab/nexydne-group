import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export default function FintechMicroservices() {
  return (
    <CaseStudyTemplate
      client="PayStream"
      industry="Fintech · Platform Engineering"
      title="Payment Processor Scales to 50M Transactions Per Day"
      subtitle="A 190-employee fintech startup rebuilt their core platform with microservices architecture and event-driven processing to handle exponential growth."
      heroImage="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1600&q=80"
      challenge={`PayStream, a rapidly growing payment processing platform, was experiencing the classic symptoms of monolithic architecture strain. Their single Ruby on Rails application, which had served them well during early growth, was now struggling to handle 6 million daily transactions—and their business was growing 40% year-over-year.

Peak processing times were causing latency spikes that triggered timeouts in merchant integrations. Database locks during high-volume periods created cascading failures. Every deployment required a maintenance window, limiting their ability to ship features and fixes quickly.

With enterprise clients demanding 99.99% uptime SLAs and transaction volumes projected to grow 8x over three years, PayStream needed a fundamental architecture transformation—not just incremental improvements.`}
      solution={`NEXDYNE designed and implemented a modern microservices architecture using event-driven patterns that could scale horizontally to handle 50M+ daily transactions while maintaining sub-100ms latency.

We decomposed the monolith into 12 bounded contexts including payments, settlements, fraud detection, and merchant management—each independently deployable. We implemented event sourcing for transaction processing, enabling complete audit trails and the ability to rebuild state from events. An event streaming platform on Kafka handled 100K+ events per second with exactly-once delivery semantics. We deployed on AWS EKS with auto-scaling policies that respond to transaction volume in real-time, scaling from 10 to 200 pods within minutes.

The 12-month transformation proceeded in phases: domain analysis and architecture design, platform foundation, service extraction using the strangler fig pattern, and final migration with optimization.`}
      impact={`The transformation delivered measurable business impact across every dimension. Transaction capacity increased 8x to 50M daily transactions, with P99 latency reduced from 800ms to 45ms. Auto-scaling responds to demand in under 2 minutes with zero transaction loss during peak events.

Development velocity transformed dramatically: deployment frequency went from weekly to 10x daily, lead time for changes dropped from 3 weeks to 2 days, and mean time to recovery decreased from 45 minutes to 5 minutes. The microservices architecture enabled independent team deployments and unlocked enterprise deals that the firm couldn't pursue before.`}
      metrics={[
        { value: "50M", label: "Daily transactions (8x increase)" },
        { value: "45ms", label: "P99 latency (from 800ms)" },
        { value: "10x", label: "Deployment frequency increase" }
      ]}
      quote={{
        text: "Our legacy monolith was holding us back from scaling. NEXDYNE decomposed it into microservices, implemented CI/CD, and enabled us to deploy 10x more frequently with higher quality. Game-changing transformation that positioned us to win enterprise deals we couldn't pursue before.",
        author: "Marcus Johnson",
        role: "VP of Engineering, PayStream"
      }}
      tags={["Microservices", "Fintech", "Cloud Architecture", "Technology"]}
      relatedCapability={{
        title: "Technology",
        link: "/capabilities/technology"
      }}
    />
  );
}
