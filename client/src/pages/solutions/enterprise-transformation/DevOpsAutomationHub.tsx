// TODO: confirm DevOps & Automation hub experience & impact numbers with practice lead before publish.
// TODO: populate 2-3 thought-leadership insights for the DevOps & Automation hub.
// TODO: confirm hero image asset — using fallback Unsplash URL until /images/devops-automation-hub-abstract.jpg lands.

import CapabilityHubTemplate from "@/components/CapabilityHubTemplate";

export default function DevOpsAutomationHub() {
  return (
    <CapabilityHubTemplate
      hubName="DevOps & Automation"
      slug="technology/devops-automation-hub"
      heroSubtitle="CI/CD, infrastructure as code, and the operating model that ships safely and often. We measure where the pipeline is actually slow, rebuild the architecture, engineer the test framework, and lift DORA metrics quarter-over-quarter."
      heroImage="/images/capabilities/cap-robot-factory.jpg"
      experienceStats={[
        // TODO: confirm with practice lead before publish
        { number: "40+", label: "DevOps and CI/CD engagements delivered for mid-market and enterprise clients" },
        // TODO: confirm with practice lead before publish
        { number: "5x", label: "Average lift in deployment frequency in the first two quarters" },
        // TODO: confirm with practice lead before publish
        { number: "60%", label: "Median reduction in change-failure rate across pipelines we rebuild" },
        // TODO: confirm with practice lead before publish
        { number: "DORA-aligned", label: "Every engagement instrumented to the four DORA metrics from day one" },
      ]}
      // TODO: confirm ambition copy with practice lead before publish
      ambitions={[
        {
          title: "Lift deployment frequency from quarterly to daily",
          description:
            "Engineering productivity is not a culture conversation. We measure where the pipeline is actually slow, rebuild the architecture, and engineer the deployment automation that lifts DORA frequency without sacrificing reliability.",
        },
        {
          title: "Build CI/CD that actually catches regressions",
          description:
            "Pipelines that run fast but block nothing are theater. We engineer the test framework — unit, contract, integration, end-to-end — so the pipeline becomes a real safety net the team trusts when shipping under pressure.",
        },
        {
          title: "Infrastructure as code, end-to-end",
          description:
            "Move from snowflake servers and ClickOps to fully reproducible infrastructure. Terraform, Pulumi, and GitOps patterns that make every environment a Git history rather than a tribal-knowledge mystery.",
        },
        {
          title: "Automate the operational toil",
          description:
            "Identify the recurring manual work that quietly burns the on-call rotation — and automate it. Runbooks become bots. Alerts become self-healing. Engineers move from firefighting to feature work.",
        },
        {
          title: "Make observability a discipline",
          description:
            "Logs, metrics, traces, SLOs, and error budgets engineered so that incidents are detected before customers notice — and so post-incident learning compounds rather than fading at the next sprint planning.",
        },
        {
          title: "Build the DevOps operating model",
          description:
            "Tools alone do not lift DORA. We embed the team topology, on-call discipline, deployment governance, and platform-team partnership that keeps DevOps gains durable into year two and beyond.",
        },
      ]}
      ambitionsCTAText="Talk to us about your DevOps & Automation ambition →"
      howWeCanHelp={[
        {
          title: "DevOps & CI/CD",
          description:
            "CI/CD pipeline implementation, automated testing infrastructure, deployment automation, and the DevOps operating model that lifts deployment frequency and shrinks lead time without sacrificing reliability.",
          href: "/capabilities/technology/devops-cicd",
        },
        {
          title: "DevOps Automation",
          description:
            "CI/CD pipelines, infrastructure as code, deployment automation, and observability — engineered to take engineering velocity from quarterly windows to multiple safe deploys a day.",
          href: "/capabilities/technology/devops-automation",
        },
      ]}
      thoughtLeadership={[]}
      approachPillars={[
        {
          step: "01",
          title: "Measure the pipeline",
          body: "We instrument the four DORA metrics — deployment frequency, lead time, change failure rate, time to restore — and benchmark against industry. The roadmap follows the bottleneck, not the technology fashion of the quarter.",
        },
        {
          step: "02",
          title: "Engineer the safety net",
          body: "We rebuild the test framework — unit, contract, integration, end-to-end — and engineer the deployment automation so the pipeline becomes a real safety net the team trusts when shipping under pressure.",
        },
        {
          step: "03",
          title: "Embed the operating model",
          body: "Tools alone do not lift DORA. We embed team topology, on-call discipline, deployment governance, and the platform-team partnership that keeps the gains durable into year two and beyond.",
        },
      ]}
      featuredCases={[
        {
          slug: "fintech-payment-automation",
          title: "Fintech replatforms monolith into microservices and cuts release cycle to weekly",
          industry: "Financial Services · Technology",
          metric: "Weekly",
          image: "/images/case-fintech-payment-automation.jpg",
        },
        {
          slug: "accounting-audit-automation",
          title: "Accounting firm modernizes audit platform with CI/CD and observability",
          industry: "Professional Services · Technology",
          metric: "45%",
          image: "/images/case-accounting-audit-automation.jpg",
        },
        {
          slug: "bank-process-automation",
          title: "Bank rebuilds core platform on cloud-native architecture and reduces infra cost",
          industry: "Financial Services · Technology",
          metric: "30%",
          image: "/images/case-bank-process-automation.jpg",
        },
      ]}
      relatedCapabilities={[
        { href: "/capabilities/operations", name: "Operations" },
        { href: "/capabilities/artificial-intelligence", name: "Artificial Intelligence" },
        { href: "/capabilities/strategy-corporate-finance", name: "Strategy & Corporate Finance" },
      ]}
      ctaLeadName="Talk to our DevOps & Automation lead"
    />
  );
}
