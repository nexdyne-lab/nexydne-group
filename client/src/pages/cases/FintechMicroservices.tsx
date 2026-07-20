import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Boxes, Zap, Rocket, Lock, AlertTriangle, GitBranch, Timer } from "lucide-react";

export default function FintechMicroservices() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Scaling a Fintech Platform to 50M Transactions a Day | Fintech Case Study"
      seoDescription="PayStream's Rails monolith buckled at 6M daily transactions. A microservices rebuild scaled to 50M/day, cut P99 latency from 800ms to 45ms, and unlocked 10x-daily deploys."
      canonical="/cases/fintech-microservices"
      industry="Financial Services"
      industryLink="/industries/financial-services"
      title="How PayStream Scaled to 50M Transactions a Day with Microservices"
      subtitle="A 190-employee fintech rebuilt its core platform with microservices and event-driven processing — scaling 8x while cutting P99 latency from 800ms to 45ms and deploying 10x more often."
      heroImage="/images/cases/fintech-microservices-hero.jpg"
      metrics={[
        { value: "50M", label: "Daily Transactions (8x)" },
        { value: "45ms", label: "P99 Latency (from 800ms)" },
        { value: "10x", label: "More Frequent Deploys" }
      ]}
      clientContextTitle="A Monolith at Its Breaking Point"
      clientContextIntro="PayStream, a fast-growing payment platform, was showing the classic symptoms of monolithic strain. Its single Ruby on Rails application — which had served early growth well — now struggled to handle 6 million daily transactions while the business grew 40% year-over-year."
      clientContextBody="Peak processing caused latency spikes that timed out merchant integrations, database locks created cascading failures, and every deployment needed a maintenance window that slowed shipping. With enterprise clients demanding 99.99% uptime and volumes projected to grow 8x over three years, PayStream needed a fundamental architecture transformation, not incremental fixes."
      clientProfile={{
        industry: "Fintech Payment Platform",
        companySize: "190 Employees",
        projectDuration: "12-Month Transformation",
        additionalInfo: "12 Bounded Contexts",
        additionalLabel: "Service Decomposition"
      }}
      challengeTitle="Why the Monolith Held Them Back"
      challenges={[
        {
          icon: AlertTriangle,
          title: "Latency spikes and timeouts",
          description: "Peak processing caused latency spikes that triggered timeouts in merchant integrations."
        },
        {
          icon: Lock,
          title: "Cascading database failures",
          description: "Database locks during high-volume periods created cascading failures across the platform."
        },
        {
          icon: Timer,
          title: "Slow, risky deployments",
          description: "Every deploy required a maintenance window, limiting how fast the team could ship features and fixes."
        },
        {
          icon: Boxes,
          title: "8x growth on the horizon",
          description: "Enterprise SLAs and projected 8x growth made the monolith an existential constraint."
        }
      ]}
      approachTitle="Event-Driven Microservices That Scale"
      approachIntro="NEXDYNE designed and implemented a modern microservices architecture using event-driven patterns that could scale horizontally to 50M+ daily transactions at sub-100ms latency."
      steps={[
        {
          step: "01",
          title: "Decompose the monolith",
          description: "We split the application into 12 bounded contexts — payments, settlements, fraud detection, merchant management — each independently deployable."
        },
        {
          step: "02",
          title: "Event sourcing for auditability",
          description: "Event sourcing for transaction processing gave complete audit trails and the ability to rebuild state from events."
        },
        {
          step: "03",
          title: "Stream at scale",
          description: "A Kafka event-streaming platform handled 100K+ events per second with exactly-once delivery semantics."
        },
        {
          step: "04",
          title: "Auto-scale on demand",
          description: "Deployed on AWS EKS, the platform scaled from 10 to 200 pods in minutes in response to transaction volume, using the strangler-fig pattern to migrate safely."
        }
      ]}
      resultsTitle="The Payoff"
      results={[
        {
          icon: Boxes,
          value: "50M",
          label: "Daily transactions",
          detail: "An 8x increase in capacity"
        },
        {
          icon: Zap,
          value: "45ms",
          label: "P99 latency",
          detail: "Down from 800ms, scaling in under 2 minutes"
        },
        {
          icon: Rocket,
          value: "10x",
          label: "More frequent deploys",
          detail: "From weekly to 10x daily, with MTTR from 45 to 5 minutes"
        }
      ]}
      quote="Our legacy monolith was holding us back from scaling. NEXDYNE decomposed it into microservices, implemented CI/CD, and enabled us to deploy 10x more frequently with higher quality. Game-changing transformation that positioned us to win enterprise deals we couldn't pursue before."
      quoteAuthor="Marcus Johnson"
      quoteRole="VP of Engineering, PayStream"
      relatedStudies={[
        {
          title: "Scaling Real-Time Payment Processing 10x",
          metric: "10x",
          label: "transaction capacity",
          link: "/cases/fintech-data-pipeline",
          image: "/images/cases/fintech-data-pipeline-hero.jpg"
        },
        {
          title: "Launching a Credit Union Mobile App to 78% Adoption",
          metric: "78%",
          label: "member adoption",
          link: "/cases/fintech-mobile-banking",
          image: "/images/industries/fin-monitors.jpg"
        }
      ]}
      ctaTitle="Ready to break out of your monolith?"
      ctaDescription="Let's talk about what a microservices architecture could unlock for your scale and velocity."
    />
  );
}
