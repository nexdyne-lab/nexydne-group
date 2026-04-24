import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export default function EcommerceDataWarehouse() {
  return (
    <CaseStudyTemplate
      client="Multi-Brand E-Commerce Retailer"
      industry="E-Commerce · Data Engineering"
      title="E-Commerce Retailer Migrates to Snowflake"
      subtitle="Multi-brand retailer modernizes legacy data warehouse, reducing query times by 85% and cutting infrastructure costs 40%."
      heroImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&q=80"
      challenge={`A multi-brand e-commerce retailer operating 6 online storefronts with $450M in annual revenue struggled with a legacy on-premise data warehouse built on Oracle Exadata. The system required 3 full-time DBAs to maintain, cost $180K annually in licensing and hardware maintenance, and took 4-6 hours to run nightly ETL jobs. Business analysts waited 15-30 seconds for basic product performance queries, and the marketing team couldn't access customer behavior data for same-day campaign optimization.

The company's data team of 5 engineers lacked cloud data warehouse expertise and modern ELT tooling experience. Previous attempts to modernize using internal resources stalled after 8 months due to the complexity of migrating 15 years of historical data, rewriting 200+ legacy ETL jobs, and ensuring zero downtime for critical business reporting.`}
      solution={`NEXDYNE deployed a 3-person data engineering team with deep Snowflake and dbt expertise. We started with a 2-week discovery phase, cataloging all existing ETL jobs, data sources, downstream dependencies, and business-critical reporting workflows. Our team designed a phased migration strategy that prioritized high-value use cases first while maintaining parallel operation of legacy and modern systems to ensure zero business disruption.

We implemented a modern ELT architecture using Fivetran for data ingestion from Shopify, Salesforce, Google Analytics, and internal databases, with dbt for transformation logic. All transformation code was version-controlled in Git with automated testing via dbt's built-in testing framework. We established data quality monitoring using Monte Carlo to catch schema changes and data anomalies before they impacted business users. Throughout the 7-month engagement, we conducted hands-on training sessions teaching the client's team dbt development, Snowflake optimization, and DataOps best practices.`}
      impact={`The Snowflake migration completed on schedule with zero downtime for business-critical reporting. Query performance improved dramatically—analysts now get results in 2-3 seconds instead of 15-30 seconds. The marketing team can now analyze customer behavior and adjust campaigns in real-time, leading to a 22% improvement in email campaign conversion rates.

Infrastructure costs dropped 40% ($72K annually) by eliminating Oracle licensing, reducing DBA headcount from 3 to 1, and leveraging Snowflake's automatic scaling. The client's data team now independently develops and deploys new dbt models, with 15 new analytics use cases shipped in the 6 months post-migration.`}
      metrics={[
        { value: "85%", label: "Query time reduction" },
        { value: "40%", label: "Infrastructure cost savings" },
        { value: "30 min", label: "ETL runtime (from 4-6 hours)" }
      ]}
      tags={["Data Engineering", "Cloud Migration", "Snowflake", "E-Commerce"]}
      relatedCapability={{
        title: "Data Transformation",
        link: "/capabilities/data-transformation"
      }}
    />
  );
}
