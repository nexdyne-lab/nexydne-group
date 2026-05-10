// Refactored to ServiceDetailTemplate (Cat 2-4f Phase 1 v2). Source content preserved.
// TODO: confirm CTA lead name + role + photo placeholder before publish.

import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export default function DataPlatformEngineering() {
  return (
    <ServiceDetailTemplate
      hubName="Platform Engineering"
      hubSlug="platform-engineering-hub"
      hubHref="/capabilities/technology/platform-engineering-hub"
      serviceName="Data Platform Engineering"
      serviceSlug="data-platform-engineering"
      heroSubtitle="A data platform that survives leadership turnover and quarterly board questions is an engineering asset, not a vendor selection. We diagnose the estate, choose the platform, build the pipelines, and stand up the governance that makes data a managed asset."
      heroImage="/enterprise-transformation-hero.jpg"
      experienceStats={[
        { number: "60-80%", label: "Cut in pipeline incidents on engineered data platforms" },
        { number: "1/2", label: "Analytics-request backlog shrinks because the platform stops being the bottleneck" },
        // TODO: confirm stat with practice lead before publish
        { number: "Lakehouse", label: "Databricks, Snowflake, BigQuery — selection grounded in workload fit" },
        // TODO: confirm stat with practice lead before publish
        { number: "Data contracts", label: "Quality, lineage, and access governance built in" },
      ]}
      challenge="Stop buying data platforms. Start engineering one that earns its budget every quarter. Vendor-led platforms accumulate licenses and shadow analytics stacks; engineered platforms make data a managed asset that gets re-funded because every executive question lands on it."
      opportunity="We map the as-is estate including the shadow stacks, run the platform selection memo, build the pipelines against engineering standards, and embed the data governance that makes quality, lineage, and access a built-in part of the platform rather than a regulatory afterthought."
      approachPillars={[
        {
          step: "01",
          title: "Diagnose the Estate & Select the Platform",
          body: "We map the as-is data estate — sources, pipelines, warehouses, lakes, integrations, BI consumers, and the shadow stack the analytics teams stood up when central IT could not deliver. From the diagnostic we run the platform selection — Databricks, Snowflake, BigQuery, or hybrid lakehouse — against your workload mix, governance constraints, and team capability.",
        },
        {
          step: "02",
          title: "Build the Pipelines & Govern Quality",
          body: "We build the pipelines — ingestion, transformation, semantic models — against engineering standards that survive a personnel change. dbt, Airflow, Spark, Delta, Iceberg — the toolchain is opinionated. Data quality, lineage, access control, and PII handling are built into the platform with deployed data contracts and automated quality tests.",
        },
        {
          step: "03",
          title: "Scale Across Domains & Optimize",
          body: "Once the first wave is operational we extend the platform across additional domains, tune compute and storage economics, and stand up the FinOps cadence specific to data workloads — query optimization, tier management, chargeback so the platform keeps earning its re-funding.",
        },
      ]}
      outcomes={[
        "End-to-end data architecture map of the as-is estate with latency, freshness, lineage, quality, and cost-per-query measured against the workloads the platform serves.",
        "Written platform selection memo — Databricks, Snowflake, BigQuery, or hybrid — with the workload-fit, governance, capability, and total-cost analysis behind the recommendation.",
        "Reference pipeline architecture covering ingestion, transformation, semantic layer, and the integration model — built with dbt, Airflow, Spark, and the toolchain decisions defended.",
        "Data quality and governance framework — contracts, automated quality tests, access control, PII handling, and lineage tooling deployed and integrated with pipelines.",
        "Production-grade observability dashboards — pipeline freshness, quality, cost-per-pipeline, SLA tracking — wired to the on-call rotation that owns platform health.",
        "Sequenced scaling roadmap covering additional domains, performance tuning, compute and storage economics, and the chargeback model that keeps the platform funded.",
      ]}
      featuredCases={[
        {
          slug: "healthcare-data-analytics",
          title: "Lakehouse migration cuts daily reporting latency from 14 hours to 22 minutes",
          industry: "Retail",
          metric: "14h → 22m",
          image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1600&q=80",
        },
        {
          slug: "consulting-knowledge-management",
          title: "Snowflake platform consolidates 11 shadow analytics stacks into one governed estate",
          industry: "B2B SaaS",
          metric: "11 → 1",
          image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1600&q=80",
        },
      ]}
      relatedServices={[
        { slug: "platform-engineering", name: "Platform Engineering", href: "/capabilities/technology/platform-engineering" },
        { slug: "cloud-migration-architecture", name: "Cloud Migration Architecture", href: "/capabilities/technology/cloud-migration-architecture" },
        { slug: "devops-cicd", name: "DevOps & CI/CD", href: "/capabilities/technology/devops-cicd" },
      ]}
      ctaLeadName="Talk to our Platform Engineering lead"
    />
  );
}
