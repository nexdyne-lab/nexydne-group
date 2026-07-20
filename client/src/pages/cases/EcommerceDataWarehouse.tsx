import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Zap, DollarSign, Timer, Database, RefreshCw, ShieldCheck, GraduationCap } from "lucide-react";

export default function EcommerceDataWarehouse() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Migrating a Retailer to Snowflake | E-Commerce Data Engineering Case Study"
      seoDescription="A multi-brand retailer's legacy Oracle warehouse was costly to run and took 4–6 hours for ETL. A Snowflake + dbt migration cut query times 85% and infrastructure cost 40% with zero downtime."
      canonical="/cases/ecommerce-data-warehouse"
      industry="Retail"
      industryLink="/industries/retail"
      title="How a Multi-Brand Retailer Migrated to Snowflake and Cut Query Times 85%"
      subtitle="A multi-brand e-commerce retailer modernized its legacy data warehouse — reducing query times 85% and infrastructure costs 40%, with zero downtime for business-critical reporting."
      heroImage="/images/cases/ecommerce-data-warehouse-hero.jpg"
      metrics={[
        { value: "85%", label: "Faster Queries" },
        { value: "40%", label: "Lower Infra Cost" },
        { value: "30 min", label: "ETL (from 4–6 hrs)" }
      ]}
      clientContextTitle="Fifteen Years of Data, Stuck on Oracle"
      clientContextIntro="A multi-brand e-commerce retailer running six storefronts struggled with a legacy on-premise warehouse on Oracle Exadata. It needed three full-time DBAs, carried heavy annual licensing and hardware costs, and took 4–6 hours to run nightly ETL — while analysts waited 15–30 seconds for basic queries."
      clientContextBody="The marketing team couldn't access customer-behavior data for same-day campaign optimization, and the five-person data team lacked cloud-warehouse and modern ELT experience. A previous in-house modernization attempt stalled after eight months against the complexity of migrating 15 years of history, rewriting 200+ ETL jobs, and guaranteeing zero downtime for critical reporting."
      clientProfile={{
        industry: "Multi-Brand E-Commerce Retailer",
        companySize: "6 Storefronts",
        projectDuration: "7-Month Engagement",
        additionalInfo: "Snowflake + dbt",
        additionalLabel: "Modern Stack"
      }}
      challengeTitle="Why the Legacy Warehouse Held Them Back"
      challenges={[
        {
          icon: Timer,
          title: "Slow queries, slow ETL",
          description: "Analysts waited 15–30 seconds for basic queries while nightly ETL ran 4–6 hours, delaying every insight."
        },
        {
          icon: DollarSign,
          title: "Costly to run",
          description: "The Oracle Exadata warehouse carried heavy annual licensing costs and required three full-time DBAs just to keep running."
        },
        {
          icon: RefreshCw,
          title: "No real-time optimization",
          description: "Marketing couldn't reach customer-behavior data in time to adjust campaigns the same day."
        },
        {
          icon: Database,
          title: "A stalled migration",
          description: "A prior in-house effort stalled after eight months against 15 years of history and 200+ legacy ETL jobs."
        }
      ]}
      approachTitle="A Phased Move to a Modern ELT Stack"
      approachIntro="NEXDYNE deployed a three-person data-engineering team with deep Snowflake and dbt expertise, and designed a phased migration that kept legacy and modern systems running in parallel for zero business disruption."
      steps={[
        {
          step: "01",
          title: "Discover before migrating",
          description: "A two-week discovery cataloged every ETL job, data source, downstream dependency, and business-critical report before anything moved."
        },
        {
          step: "02",
          title: "Modern ELT with Fivetran + dbt",
          description: "We ingested from Shopify, Salesforce, Google Analytics, and internal databases via Fivetran, with dbt transformations version-controlled in Git and automatically tested."
        },
        {
          step: "03",
          title: "Guard data quality",
          description: "Monte Carlo monitoring caught schema changes and anomalies before they reached business users."
        },
        {
          step: "04",
          title: "Hand over the keys",
          description: "Hands-on training in dbt, Snowflake optimization, and DataOps left the client's team able to build and deploy independently."
        }
      ]}
      resultsTitle="The Payoff"
      results={[
        {
          icon: Zap,
          value: "85%",
          label: "Faster queries",
          detail: "Results in 2–3 seconds instead of 15–30"
        },
        {
          icon: DollarSign,
          value: "40%",
          label: "Lower infrastructure cost",
          detail: "With DBA headcount down from 3 to 1"
        },
        {
          icon: GraduationCap,
          value: "15",
          label: "New use cases shipped",
          detail: "By the client's own team in the 6 months after"
        }
      ]}
      quote=""
      quoteAuthor=""
      quoteRole=""
      relatedStudies={[
        {
          title: "Lifting Repeat Purchase 42% for an E-commerce Brand",
          metric: "42%",
          label: "more repeat purchases",
          link: "/solutions/data-driven-customer-intelligence/case-studies/ecommerce-repeat-purchase",
          image: "/images/capabilities/cap-celebrate.jpg"
        },
        {
          title: "Reducing Retail Shrinkage 25% with Computer Vision",
          metric: "25%",
          label: "less shrinkage",
          link: "/case-studies/retail-shrinkage-reduction",
          image: "/images/capabilities/cap-retail-apparel.jpg"
        }
      ]}
      ctaTitle="Ready to make your data fast and affordable again?"
      ctaDescription="Let's talk about what a modern data platform could do for your speed and cost."
    />
  );
}
