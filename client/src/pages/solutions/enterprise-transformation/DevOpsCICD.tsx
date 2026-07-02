// Refactored to ServiceDetailTemplate (Cat 2-4f Phase 1 v2). Source content preserved.
// TODO: confirm CTA lead name + role + photo placeholder before publish.

import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export default function DevOpsCICD() {
  return (
    <ServiceDetailTemplate
      hubName="DevOps & Automation"
      hubSlug="devops-automation-hub"
      hubHref="/capabilities/technology/devops-automation-hub"
      serviceName="DevOps & CI/CD"
      serviceSlug="devops-cicd"
      heroSubtitle="Engineering productivity is not a culture conversation. We measure where the pipeline is actually slow, rebuild the architecture, engineer the test framework, and stand up the deployment automation that lifts DORA metrics quarter-over-quarter."
      heroImage="/solution-enterprise-transformation.0a0f2624.webp"
      experienceStats={[
        { number: "10-50x", label: "Lift in deployment frequency for organizations moving into the elite DORA quartile" },
        { number: "Lower CFR", label: "Change-failure rate drops as pipelines catch regressions early" },
        // TODO: confirm stat with practice lead before publish
        { number: "DORA", label: "Measured against actual telemetry, not self-report" },
        // TODO: confirm stat with practice lead before publish
        { number: "Quarter-over-quarter", label: "Metrics improve as the practice extends" },
      ]}
      challenge="Stop debating DevOps culture. Start engineering the pipeline that makes the culture inevitable. Culture-led change debates options for years; engineered pipelines move DORA metrics quarter-over-quarter and the conversation changes."
      opportunity="We measure the engineering organization against the DORA metrics using actual telemetry, design the CI/CD reference architecture, build the testing pyramid, and embed the platform-team operating model that keeps the practice on a measurable improvement curve."
      approachPillars={[
        {
          step: "01",
          title: "Measure DORA & Architect the Pipeline",
          body: "We measure the engineering organization against DORA — deployment frequency, lead time for changes, change failure rate, mean time to restore — using actual telemetry from source-control, CI, and incident systems. From the assessment we design the reference CI/CD architecture: source control, build, test, security scanning, artifact registry, deployment, and the policy gates between them.",
        },
        {
          step: "02",
          title: "Engineer Tests & Automate Deployment",
          body: "Pipelines are only as fast as the tests in them. We build the testing pyramid — unit, integration, contract, end-to-end — with the test data strategy, environment management, and flake budget. Deployment automation covers progressive delivery, feature flagging, blue-green and canary, automated rollback, and the observability stack that lets the team operate what they shipped.",
        },
        {
          step: "03",
          title: "Scale the Practice Across Teams",
          body: "DevOps is a practice, not a project. We extend the operating model across additional teams, run the engineering productivity reviews, and embed the platform team that owns the pipelines as a product the application teams adopt rather than fight.",
        },
      ]}
      outcomes={[
        "DORA-metric maturity assessment against actual telemetry — deployment frequency, lead time, change failure rate, MTTR — with team-level bottleneck analysis.",
        "Reference CI/CD pipeline architecture covering source control, build, test, security, artifact registry, deployment, and the policy gates — with toolchain decisions defended.",
        "Engineered automated testing framework with the testing pyramid — unit, integration, contract, end-to-end — and the test data strategy, environment management, and flake budget.",
        "Deployment runbook covering progressive delivery patterns, feature flag policy, blue-green and canary scripts, automated rollback, and the change-window run-of-show.",
        "Production-grade observability stack — metrics, traces, logs, and SLO tracking wired to the on-call rotation, incident response runbook, and blameless postmortem cadence.",
        "DevOps operating model — org design, RACI, platform team charter, productivity review cadence, and the engineering metrics dashboard.",
      ]}
      featuredCases={[
        {
          slug: "bank-process-automation",
          title: "Deployment frequency rises from monthly to 47 per day across a regulated platform",
          industry: "Financial Services",
          metric: "monthly → 47/d",
          image: "/images/capabilities/cap-coder.jpg",
        },
        {
          slug: "fintech-payment-automation",
          title: "Lead time for changes drops from 9 days to 4 hours across 23 engineering teams",
          industry: "B2B SaaS",
          metric: "9d → 4h",
          image: "/images/capabilities/cap-circuit-green.jpg",
        },
      ]}
      relatedServices={[
        { slug: "platform-engineering", name: "Platform Engineering", href: "/capabilities/technology/platform-engineering" },
        { slug: "devops-automation", name: "DevOps Automation", href: "/capabilities/technology/devops-automation" },
        { slug: "data-platform-engineering", name: "Data Platform Engineering", href: "/capabilities/technology/data-platform-engineering" },
      ]}
      ctaLeadName="Talk to our DevOps & Automation lead"
    />
  );
}
