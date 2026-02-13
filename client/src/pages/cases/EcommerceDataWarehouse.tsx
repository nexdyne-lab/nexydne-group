import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function EcommerceDataWarehouse() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Breadcrumb */}
      <div className="bg-muted/30 border-b">
        <div className="container py-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <span>/</span>
            <Link href="/solutions/data-solutions" className="hover:text-foreground transition-colors">Data Solutions</Link>
            <span>/</span>
            <Link href="/solutions/data-engineering" className="hover:text-foreground transition-colors">Data Engineering</Link>
            <span>/</span>
            <span className="text-foreground">E-Commerce Retailer Migrates to Snowflake</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#2D5BFF] via-[#4169FF] to-[#5B7FFF] text-white">
        <div className="container max-w-4xl">
          <h1 className="text-4xl lg:text-5xl font-bold mb-3">
            E-Commerce Retailer Migrates to Snowflake
          </h1>
          <p className="text-xl lg:text-2xl leading-relaxed opacity-90">
            Multi-brand retailer modernizes legacy data warehouse, reducing query times by 85% and cutting infrastructure costs 40%
          </p>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-16 bg-background">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              A multi-brand e-commerce retailer operating 6 online storefronts with $450M in annual revenue struggled with a legacy on-premise data warehouse built on Oracle Exadata. The system, implemented in 2012, required 3 full-time DBAs to maintain, cost $180K annually in licensing and hardware maintenance, and took 4-6 hours to run nightly ETL jobs. Business analysts waited 15-30 seconds for basic product performance queries, and the marketing team couldn't access customer behavior data for same-day campaign optimization.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The company's data team of 5 engineers lacked cloud data warehouse expertise and modern ELT tooling experience. Leadership wanted to migrate to Snowflake to reduce costs, improve query performance, and enable self-service analytics, but feared business disruption during migration. Previous attempts to modernize using internal resources stalled after 8 months due to complexity of migrating 15 years of historical data, rewriting 200+ legacy ETL jobs, and ensuring zero downtime for critical business reporting.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 bg-muted/30">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">The Solution</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              NEXDYNE deployed a 3-person data engineering team with deep Snowflake and dbt expertise. We started with a 2-week discovery phase, cataloging all existing ETL jobs, data sources, downstream dependencies, and business-critical reporting workflows. Our team designed a phased migration strategy that prioritized high-value use cases first while maintaining parallel operation of legacy and modern systems to ensure zero business disruption.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              We implemented a modern ELT architecture using Fivetran for data ingestion from Shopify, Salesforce, Google Analytics, and internal databases, with dbt for transformation logic. All transformation code was version-controlled in Git with automated testing via dbt's built-in testing framework. We established data quality monitoring using Monte Carlo to catch schema changes and data anomalies before they impacted business users. Throughout the 7-month engagement, we conducted hands-on training sessions teaching the client's team dbt development, Snowflake optimization, and DataOps best practices.
            </p>
            
            <h3 className="text-2xl font-bold mb-4 mt-8">Key Technical Implementations</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">Snowflake data warehouse with 15TB of historical data migrated using AWS DataSync and Snowpipe</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">dbt project with 180 models, 300+ data quality tests, and automated documentation generation</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">Fivetran connectors for 12 data sources with incremental sync and automatic schema drift detection</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">CI/CD pipeline using GitHub Actions for automated dbt testing and deployment to production</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">Monte Carlo data observability platform monitoring 50+ critical data pipelines with automated alerting</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 bg-background">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">The Results</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
              <div className="text-4xl font-bold text-[#8B2635] mb-2">85%</div>
              <div className="text-sm font-semibold text-muted-foreground">Query time reduction</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
              <div className="text-4xl font-bold text-[#8B2635] mb-2">40%</div>
              <div className="text-sm font-semibold text-muted-foreground">Infrastructure cost savings</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
              <div className="text-4xl font-bold text-[#8B2635] mb-2">30 min</div>
              <div className="text-sm font-semibold text-muted-foreground">ETL runtime (from 4-6 hours)</div>
            </div>
          </div>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              The Snowflake migration completed on schedule with zero downtime for business-critical reporting. Query performance improved dramatically—analysts now get results in 2-3 seconds instead of 15-30 seconds, and complex multi-brand performance dashboards that previously timed out now render in under 10 seconds. The marketing team can now analyze customer behavior and adjust campaigns in real-time, leading to a 22% improvement in email campaign conversion rates.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Infrastructure costs dropped 40% ($72K annually) by eliminating Oracle licensing, reducing DBA headcount from 3 to 1, and leveraging Snowflake's automatic scaling. The client's data team now independently develops and deploys new dbt models, with 15 new analytics use cases shipped in the 6 months post-migration. The modern stack enabled self-service analytics for 40 business users via Looker, reducing ad-hoc SQL request backlog by 70%. Most importantly, the company can now scale data infrastructure to support planned expansion into 4 new markets without additional engineering headcount.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#2D5BFF] via-[#4169FF] to-[#5B7FFF] text-white">
        <div className="container max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to modernize your data warehouse?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how NEXDYNE can accelerate your cloud migration.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-white text-[#8B2635] hover:bg-white/90 rounded-full px-8">
              Get in touch
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 rounded-full px-8">
              View all cases
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
