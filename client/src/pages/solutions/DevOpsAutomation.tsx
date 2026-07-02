// Refactored to ServiceDetailTemplate (Cat 2-4f Phase 1 v2). Source content preserved.
// TODO: confirm CTA lead name + role + photo placeholder before publish.

import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export default function DevOpsAutomation() {
  return (
    <ServiceDetailTemplate
      hubName="DevOps & Automation"
      hubSlug="devops-automation-hub"
      hubHref="/capabilities/technology/devops-automation-hub"
      serviceName="DevOps Automation"
      serviceSlug="devops-automation"
      heroSubtitle="CI/CD, infrastructure as code, deployment automation, and observability — engineered to move engineering velocity from quarterly windows to multiple safe deploys a day."
      heroImage="/solution-enterprise-transformation.0a0f2624.webp"
      experienceStats={[
        { number: "120+", label: "CI/CD pipelines designed and deployed across enterprise engineering teams" },
        { number: "6.8x", label: "Increase in deployment frequency after a typical DevOps engagement" },
        { number: "74%", label: "Average reduction in mean-time-to-restore after observability rollout" },
        // TODO: confirm stat with practice lead before publish
        { number: "DORA", label: "Elite-quartile metrics — multiple safe deploys a day, minute-long incidents" },
      ]}
      challenge="The deploy is the product. Everything else is opinion. A decade of DORA research has settled the debate, the tools have caught up, and the gap is in execution discipline rather than technology choice."
      opportunity="NexDyne's DevOps consultants build the pipelines, the IaC standards, and the observability stack that move clients up the DORA performance bands — and stay there once we hand off, because the platform was designed for the engineers who would inherit it."
      approachPillars={[
        {
          step: "01",
          title: "Measure DORA First",
          body: "Deploy frequency, lead time, change-failure rate, MTTR. We baseline DORA against actual telemetry before we touch a pipeline — so improvement is not anecdotal and the team knows where the bottleneck actually sits.",
        },
        {
          step: "02",
          title: "Pipeline as Product",
          body: "The pipeline has users — your engineers. We design it as a product on GitHub Actions, GitLab CI, or your stack, with feedback loops, error messages, and the speed they actually need. Reproducible IaC on Terraform, Pulumi, or CDK with drift detection and module standards comes with it.",
        },
        {
          step: "03",
          title: "Automate the Risk Out & Wire Observability In",
          body: "Canary deploys, feature flags, automated rollbacks, blue-green patterns — shipping at noon is no riskier than shipping at midnight. Logs, metrics, traces, and SLOs ship with the service, not after the first incident.",
        },
      ]}
      outcomes={[
        "Modern CI/CD pipelines on GitHub Actions, GitLab CI, CircleCI, or Jenkins built for branch-to-prod in under thirty minutes.",
        "Reproducible Infrastructure as Code on Terraform, Pulumi, or CDK with drift detection, module standards, and the discipline that turns ops into engineering.",
        "Automated testing pyramids — unit, integration, contract, and end-to-end — wired into the pipeline to catch regressions before they ship.",
        "Deployment automation with blue-green, canary, and progressive delivery using feature flags — Friday deploys stop being scary.",
        "Observability stack on Datadog, Grafana, OpenTelemetry, or your tools — logs, metrics, traces, and SLOs so production sleeps when it should.",
        "DevOps maturity assessment against DORA peers and the eighteen-month roadmap that closes the gap.",
      ]}
      featuredCases={[
        {
          slug: "fintech-payment-automation",
          title: "B2B SaaS Cuts Lead Time from Six Days to Four Hours",
          industry: "SaaS & Technology",
          metric: "6 days → 4 hrs",
          image: "/images/capabilities/cap-robot-factory.jpg",
        },
        {
          slug: "bank-process-automation",
          title: "Regional Bank Achieves Zero-Downtime Deploys with Canary Pipeline",
          industry: "Financial Services",
          metric: "0 downtime",
          image: "/images/capabilities/cap-warehouse-robot.jpg",
        },
      ]}
      relatedServices={[
        { slug: "devops-cicd", name: "DevOps & CI/CD", href: "/capabilities/technology/devops-cicd" },
        { slug: "platform-engineering", name: "Platform Engineering", href: "/capabilities/technology/platform-engineering" },
        { slug: "infrastructure-modernization", name: "Infrastructure Modernization", href: "/capabilities/technology/infrastructure-modernization" },
      ]}
      ctaLeadName="Talk to our DevOps & Automation lead"
    />
  );
}
