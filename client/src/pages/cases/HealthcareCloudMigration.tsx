import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { ServerCrash, DollarSign, ShieldAlert, Activity, CloudCog, Database, Gauge, Rocket } from "lucide-react";

export function HealthcareCloudMigration() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Health-Tech Platform Hits 99.99% Uptime After AWS Migration | Healthcare Case Study"
      seoDescription="MedFlow's aging on-prem infrastructure averaged 4 hours of downtime a month. A phased AWS migration reached 99.99% uptime and cut infrastructure costs 65% in nine months."
      canonical="/cases/healthcare-cloud-migration"
      industry="Healthcare"
      industryLink="/industries/healthcare"
      title="How a Health-Tech Platform Reached 99.99% Uptime After Migrating to AWS"
      subtitle="A 240-employee healthcare SaaS company moved off legacy on-prem infrastructure to a multi-region AWS architecture — achieving enterprise-grade reliability and a 65% cost reduction in nine months."
      heroImage="/images/cases/healthcare-cloud-migration-hero.jpg"
      metrics={[
        { value: "99.99%", label: "Uptime Achieved" },
        { value: "65%", label: "Lower Infrastructure Cost" },
        { value: "9 mo", label: "Migration Timeline" },
        { value: "500+", label: "Medical Practices Served" }
      ]}
      clientContextTitle="Aging Infrastructure, Rising Risk"
      clientContextIntro="MedFlow, a healthcare SaaS platform serving 500+ medical practices, was running on aging on-premise infrastructure that had become a critical business risk. Its decade-old monolith struggled with load as the customer base grew."
      clientContextBody="Downtime incidents averaged 4 hours a month, directly disrupting patient scheduling, billing, and clinical workflows — every minute meant practices couldn't reach patient records or process claims. Infrastructure costs were spiraling because MedFlow paid for peak capacity 24/7 despite highly variable usage, and maintaining HIPAA and SOC 2 compliance grew harder with aging security controls."
      clientProfile={{
        industry: "Healthcare SaaS Platform",
        companySize: "240 Employees",
        projectDuration: "9-Month Migration",
        additionalInfo: "Multi-Region AWS",
        additionalLabel: "Architecture"
      }}
      challengeTitle="Why the Legacy Stack Had to Go"
      challenges={[
        {
          icon: ServerCrash,
          title: "4 hours of downtime a month",
          description: "Frequent incidents disrupted patient scheduling, billing, and clinical workflows across 500+ practices."
        },
        {
          icon: DollarSign,
          title: "Paying for peak, 24/7",
          description: "The fixed on-prem footprint charged for peak capacity around the clock despite highly variable demand."
        },
        {
          icon: ShieldAlert,
          title: "Compliance under strain",
          description: "Aging security controls made HIPAA and SOC 2 requirements increasingly hard to maintain."
        },
        {
          icon: Database,
          title: "A single-instance database",
          description: "The monolithic data tier couldn't scale with a growing customer base or recover quickly from failure."
        }
      ]}
      approachTitle="A Phased, Zero-Disruption Migration"
      approachIntro="NEXDYNE designed and executed a phased migration to AWS that prioritized reliability, security, and cost — without disrupting the 500+ medical practices depending on the platform."
      steps={[
        {
          step: "01",
          title: "Assess and design",
          description: "Months 1–2 mapped the estate and designed a multi-region architecture with automatic failover for continuous availability."
        },
        {
          step: "02",
          title: "Foundation and pilot",
          description: "Months 3–4 built the landing zone and piloted migration of non-critical workloads to prove the pattern."
        },
        {
          step: "03",
          title: "Wave-based core migration",
          description: "Months 5–7 migrated core components with AWS DMS at zero data loss, moving the database to Aurora with read replicas and point-in-time recovery."
        },
        {
          step: "04",
          title: "Cutover and optimize",
          description: "Months 8–9 executed a 15-minute planned cutover, then optimized cost with reserved instances, elastic auto-scaling, and right-sizing."
        }
      ]}
      resultsTitle="The Payoff"
      results={[
        {
          icon: Activity,
          value: "99.99%",
          label: "Uptime",
          detail: "Up from 99.5%, with zero unplanned downtime in 12 months"
        },
        {
          icon: Gauge,
          value: "2 min",
          label: "Mean time to recovery",
          detail: "Down from 45 minutes via automatic failover"
        },
        {
          icon: Rocket,
          value: "65%",
          label: "Lower infrastructure cost",
          detail: "With deploys from monthly to daily and SOC 2 Type II achieved"
        }
      ]}
      quote="NEXDYNE's Digital Transformation Roadmap gave us the confidence to migrate our entire infrastructure to AWS without disrupting customer operations. We achieved 99.99% uptime and reduced infrastructure costs by 65%. The transformation has been game-changing for our business."
      quoteAuthor="Dr. Emily Watson"
      quoteRole="Chief Technology Officer, MedFlow"
      relatedStudies={[
        {
          title: "Automating Patient Data Management, Cutting Admin Work 40%",
          metric: "40%",
          label: "less admin overhead",
          link: "/cases/healthcare-provider",
          image: "/images/cases/healthcare-provider-hero.jpg"
        },
        {
          title: "Launching a Patient Portal That Cut Admin Calls 65%",
          metric: "65%",
          label: "fewer admin calls",
          link: "/cases/healthcare-patient-portal",
          image: "/images/cases/healthcare-patient-portal-hero.jpg"
        }
      ]}
      ctaTitle="Ready to modernize without downtime?"
      ctaDescription="Let's talk about what a resilient cloud architecture could do for your reliability and cost."
    />
  );
}

export default HealthcareCloudMigration;
