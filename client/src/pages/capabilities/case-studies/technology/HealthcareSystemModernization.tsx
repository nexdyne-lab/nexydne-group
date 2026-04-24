import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export default function HealthcareSystemModernization() {
  return (
    <CaseStudyTemplate
      client="Regional Healthcare System"
      industry="Healthcare · Technology"
      title="Regional Healthcare System Modernizes Core Technology"
      subtitle="How a 12-hospital healthcare system modernized legacy infrastructure while maintaining 24/7 operations."
      heroImage="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1600&q=80"
      challenge={`A regional healthcare system operating 12 hospitals and 85 outpatient facilities faced a technology crisis. Their core clinical and administrative systems ran on aging infrastructure that was increasingly difficult and expensive to maintain. System outages were becoming more frequent, threatening patient care and regulatory compliance.

The organization needed to modernize their technology foundation while maintaining 24/7 operations across all facilities. Any significant downtime could impact patient care, violate HIPAA requirements, and damage the organization's reputation in a competitive market. Previous modernization attempts had stalled due to the complexity of healthcare IT environments, resistance from clinical staff, and concerns about disrupting patient care. Leadership needed a new approach that could deliver results without unacceptable risk.`}
      solution={`NEXDYNE designed a phased 24-month modernization program prioritizing stability and safety while progressively transforming the technology landscape. Phase 1 (months 1-4) focused on stabilizing the existing environment through a comprehensive system assessment identifying critical vulnerabilities, immediate fixes for highest-risk issues, and establishing governance including clinical advisory committees, change management processes, and communication protocols.

Phase 2 (months 5-12) built a modern hybrid cloud foundation—private cloud for sensitive clinical data, public cloud integration for less sensitive workloads, modern software-defined networking, and enhanced security controls meeting healthcare compliance requirements—developed in parallel with existing systems to allow thorough testing before migration. Phase 3 (months 13-20) migrated applications in carefully planned waves, each following a rigorous process with clinical stakeholder planning, environment preparation and testing, migration execution during low-usage windows, and intensive post-migration monitoring. Phase 4 (months 21-24) optimized the new environment, implemented advanced monitoring and automation, trained IT staff on new technologies, and established ongoing optimization programs.`}
      impact={`System availability improved to 99.99% with zero unplanned downtime affecting patient care during or after the 24-month migration—a result achieved through automatic failover and disaster recovery capabilities the legacy environment had lacked. Infrastructure costs decreased 40% through consolidation, cloud optimization, and elimination of expensive legacy maintenance contracts. New application deployments that previously took weeks now complete in hours, enabling rapid response to clinical needs and regulatory requirements—a 60% improvement in deployment cycle times.

The modernized environment passed the most recent HIPAA audit with zero findings, a marked improvement from the compliance posture of the legacy infrastructure. The phased approach and clinical partnership model resolved the organizational barriers that had derailed previous modernization attempts, establishing a replicable model for ongoing technology evolution across the system.`}
      metrics={[
        { value: "40%", label: "Infrastructure cost reduction" },
        { value: "99.99%", label: "System availability" },
        { value: "60%", label: "Faster deployment cycles" },
        { value: "Zero", label: "Unplanned downtime" }
      ]}
      tags={["Healthcare", "Technology Modernization", "Cloud", "Infrastructure"]}
      relatedCapability={{
        title: "Technology",
        link: "/capabilities/technology"
      }}
    />
  );
}
