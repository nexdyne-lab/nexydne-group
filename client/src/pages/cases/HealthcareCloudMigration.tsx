import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export default function HealthcareCloudMigration() {
  return (
    <CaseStudyTemplate
      client="MedFlow"
      industry="Healthcare Tech · Cloud Migration"
      title="Health Tech Platform Achieves 99.99% Uptime After Cloud Migration"
      subtitle="A 240-employee healthcare SaaS company transformed their legacy infrastructure to AWS, achieving enterprise-grade reliability and 65% cost reduction in 9 months."
      heroImage="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1600&q=80"
      challenge={`MedFlow, a healthcare SaaS platform serving 500+ medical practices, was running on aging on-premise infrastructure that had become a critical business risk. Their monolithic application, built over a decade, struggled with increasing load as their customer base grew.

Downtime incidents were becoming more frequent—averaging 4 hours per month—directly impacting patient scheduling, billing, and clinical workflows. Each minute of downtime meant medical practices couldn't access patient records, schedule appointments, or process insurance claims.

Beyond reliability, their infrastructure costs were spiraling. They were paying for peak capacity 24/7, even though actual usage varied dramatically throughout the day. Compliance requirements (HIPAA, SOC 2) were becoming harder to maintain with their aging security controls.`}
      solution={`NEXDYNE designed and executed a phased migration to AWS that prioritized reliability, security, and cost optimization—without disrupting the 500+ medical practices depending on the platform.

We deployed a multi-region architecture across two AWS regions with automatic failover, ensuring continuous availability even during regional outages. Elastic auto-scaling automatically adjusts capacity based on demand, eliminating over-provisioning costs. We built comprehensive HIPAA-compliant security controls including encryption at rest and in transit, audit logging, and access management, and migrated the database from a single-instance architecture to Amazon Aurora with read replicas and point-in-time recovery.

The 9-month transformation proceeded in four phases: assessment and architecture design (months 1-2), foundation and pilot migration of non-critical workloads (months 3-4), wave-based migration of core application components using AWS DMS with zero data loss (months 5-7), and final cutover with 15-minute planned downtime followed by cost optimization through reserved instances and right-sizing (months 8-9).`}
      impact={`The migration delivered measurable business impact on reliability, cost, and engineering velocity. Uptime improved from 99.5% to 99.99%, with zero unplanned downtime in the 12 months following migration. Mean time to recovery dropped from 45 minutes to 2 minutes through automatic failover. Infrastructure costs fell 65% through elastic scaling and right-sizing—eliminating the need to pay for peak capacity around the clock.

Engineering productivity improved 40% as deployment frequency increased from monthly to daily. The team achieved SOC 2 Type II certification, removing a compliance barrier that had limited enterprise sales. The scalable architecture positioned MedFlow to serve its next tier of growth without additional infrastructure investment.`}
      metrics={[
        { value: "99.99%", label: "Uptime achieved" },
        { value: "65%", label: "Cost reduction" },
        { value: "9 months", label: "Migration timeline" },
        { value: "240", label: "Employees" }
      ]}
      quote={{
        text: "NEXDYNE's Digital Transformation Roadmap gave us the confidence to migrate our entire infrastructure to AWS without disrupting customer operations. We achieved 99.99% uptime and reduced infrastructure costs by 65%. The transformation has been game-changing for our business.",
        author: "Dr. Emily Watson",
        role: "Chief Technology Officer, MedFlow"
      }}
      tags={["Cloud Migration", "Healthcare", "AWS", "Technology"]}
      relatedCapability={{
        title: "Technology",
        link: "/capabilities/technology"
      }}
    />
  );
}
