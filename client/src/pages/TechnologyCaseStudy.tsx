import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export function TechnologyCaseStudy() {
  return (
    <CaseStudyTemplate
      client="B2B Workflow Automation Company"
      industry="Technology & Software · Operations"
      title="82% Reduction in Deployment Time"
      subtitle="Fast-growing B2B software company transforms DevOps practices, reducing deployment cycles from 2 weeks to 2.5 days while achieving 99.95% uptime and 40% infrastructure cost savings."
      heroImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=80"
      challenge={`Each production deployment required 3-4 days of manual configuration, testing, and coordination across teams. Only 2 senior engineers were authorized to deploy, creating a critical bottleneck that limited releases to twice monthly. Development, staging, and production environments had drifted significantly over time, causing features that worked in development to frequently fail in production—requiring emergency fixes and rollbacks that consumed 30% of engineering time.

A B2B SaaS company providing workflow automation tools to mid-market enterprises with 145 employees, $28M ARR, and over 400 enterprise customers had grown 3x in two years but its technology infrastructure wasn't keeping pace. An engineering team of 45 developers spent more time on infrastructure maintenance than feature development. The team learned about outages from customer complaints rather than monitoring systems, with average incident detection time of 23 minutes and monthly downtime averaging 4.2 hours. Cloud costs grew 180% year-over-year despite only 60% customer growth due to unused resources, over-provisioned instances, and lack of auto-scaling.`}
      solution={`NEXDYNE implemented a comprehensive DevOps transformation including infrastructure-as-code, CI/CD automation, an observability platform, and cloud cost optimization.

Complete infrastructure was codified using Terraform and Kubernetes—all environments defined in version-controlled templates ensuring consistency and enabling any engineer to provision identical environments in minutes. End-to-end automation from code commit to production deployment implemented automated testing, security scanning, and staged rollouts enabling multiple daily deployments with zero-downtime releases and automatic rollback on failure detection.

Integrated monitoring, logging, and tracing across all services gave AI-powered anomaly detection the ability to identify issues before they impacted customers, with automated alerting and runbook execution for common incident types. Right-sizing analysis, reserved instance planning, and auto-scaling implementation reduced cloud costs substantially, with continuous cost monitoring and governance policies preventing resource sprawl.`}
      impact={`Deployment cycles reduced from 14 days to 2.5 days—an 82% improvement—with simple changes deployed same-day through automated pipelines. Monthly uptime improved from 99.5% to 99.95%, exceeding enterprise SLA requirements and eliminating customer penalties. Monthly cloud spend reduced from $180,000 to $108,000—a 40% reduction. Deployment frequency increased 12x, from 2 deployments per month to 24+, enabling rapid feature iteration.

Engineering time spent on infrastructure dropped from 35% to 8%, freeing significant capacity for feature development. Mean time to incident detection reduced from 23 minutes to under 2 minutes. All 45 engineers can now deploy safely, eliminating the 2-person bottleneck. Feature velocity increased 3x, accelerating product roadmap delivery by 6 months.`}
      metrics={[
        { value: "82%", label: "Faster deployments" },
        { value: "99.95%", label: "System uptime" },
        { value: "40%", label: "Infrastructure cost reduction" },
        { value: "12x", label: "Deployment frequency" }
      ]}
      quote={{
        text: "NEXDYNE didn't just fix our infrastructure—they transformed how our engineering team operates. We went from dreading deployments to shipping features multiple times a day with confidence. The ROI was evident within the first quarter.",
        author: "James Chen",
        role: "CTO, WorkflowPro Technologies"
      }}
      tags={["Technology", "DevOps", "Infrastructure", "Operations"]}
      relatedCapability={{
        title: "Technology",
        link: "/capabilities/technology"
      }}
    />
  );
}

export default TechnologyCaseStudy;
