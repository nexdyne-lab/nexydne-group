import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export default function SaasCaseStudy() {
  return (
    <CaseStudyTemplate
      client="B2B SaaS Platform"
      industry="Software & Technology · Operations"
      title="78% Faster Customer Onboarding"
      subtitle="Fast-growing B2B SaaS platform automates onboarding and provisioning, reducing setup time from 5 days to 26 hours while scaling to 400+ new customers quarterly."
      heroImage="https://images.unsplash.com/photo-1553484771-371a605b060b?w=1600&q=80"
      challenge={`Customer success managers manually created accounts, configured permissions, and set up integrations through a series of admin panels. Each new customer required 8-12 hours of setup work spread across 5 days, creating a 3-week backlog during peak quarters. With 12 different customer success managers handling onboarding, configuration quality varied significantly—some customers received comprehensive training while others got minimal setup, leading to wildly different adoption rates and satisfaction scores.

A rapidly scaling B2B SaaS company providing project management and collaboration software for mid-market professional services firms with 85-110 employees and 2,400+ active customers accelerated new customer acquisition from 80 to 400+ customers quarterly after Series B funding expanded the sales team from 8 to 35 reps. Manual onboarding processes designed for slower growth became a critical bottleneck. Data migrations from competing platforms took 15-20 hours per customer and frequently required rework. Revenue couldn't be recognized until customers were fully onboarded, meaning Q1 sales often weren't recognized until Q2.`}
      solution={`NEXDYNE built an intelligent onboarding automation platform that provisioned accounts, migrated data, and delivered personalized training—orchestrated by AI agents with minimal human intervention.

When a sales contract was signed, AI agents automatically created customer accounts, configured role-based permissions based on organization size and industry, and set up integrations with Slack, Microsoft Teams, and Google Workspace—completing the entire process in under 2 hours without human intervention. Machine learning models analyzed data from legacy systems, automatically mapped fields to the new platform's schema, and flagged potential quality issues before import, handling 95% of migrations autonomously.

AI-driven onboarding sequences adapted to customer industry, team size, and use case, automatically delivering role-specific training content, scheduling check-in calls, and monitoring adoption metrics—escalating to customer success only when engagement dropped below thresholds. Leadership dashboards showed onboarding progress and predictive models identified customers likely to churn during onboarding, triggering proactive outreach.`}
      impact={`Customer onboarding time reduced from 5 days (120 hours) to 26 hours—a 78% improvement—accelerating time-to-value and revenue recognition timelines. Annual savings of $420,000 came from reduced customer success labor, faster revenue recognition, and improved retention during onboarding. Onboarding capacity scaled to handle 400+ new customers per quarter without proportional customer success team growth.

Customer satisfaction during onboarding increased from 3.9 to 4.8 out of 5. First-90-day churn rate decreased from 12% to 3%. Revenue recognition timeline accelerated by 35 days on average. Customer success team capacity effectively increased 5x without headcount growth.`}
      metrics={[
        { value: "78%", label: "Faster onboarding" },
        { value: "26hrs", label: "Setup time" },
        { value: "$420K", label: "Annual savings" },
        { value: "400+", label: "Quarterly customers" }
      ]}
      tags={["Technology", "SaaS", "Automation", "Customer Success"]}
      relatedCapability={{
        title: "Technology",
        link: "/capabilities/technology"
      }}
    />
  );
}
