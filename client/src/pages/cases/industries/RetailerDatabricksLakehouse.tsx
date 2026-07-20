import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Target, Clock, BarChart3, DollarSign, Zap, CheckCircle } from "lucide-react";

export default function RetailerDatabricksLakehouse() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Retailer Cuts Time-to-Insight 70% With Lakehouse | Data Platform Case Study"
      seoDescription="A national retailer ran three legacy warehouses that couldn't keep up. A Databricks lakehouse unified BI, demand forecasting, and personalization on one platform and cut time-to-insight 70%."
      canonical="/cases/retailer-databricks-lakehouse"
      industry="Retail"
      industryLink="/industries/retail"
      title="How a National Retailer Cut Time-to-Insight by 70% With a Lakehouse"
      subtitle="Three legacy warehouses each held part of the truth and none of them talked. A single Databricks lakehouse unified BI, forecasting, and personalization — and made insight fast."
      heroImage="/images/industries/retail-shelves.jpg"
      metrics={[
        { value: "70%", label: "Faster Time-to-Insight" },
        { value: "3 → 1", label: "Warehouses Unified" },
        { value: "One", label: "Platform" },
        { value: "BI+ML", label: "On the Same Data" }
      ]}
      clientContextTitle="Three Warehouses, One Fractured Truth"
      clientContextIntro="A national retailer was running its analytics across three separate legacy data warehouses, each built at a different time for a different purpose. BI ran on one, demand forecasting pulled from another, and personalization drew on a third — and reconciling them was a constant, manual tax."
      clientContextBody="The fragmentation slowed everything. Every cross-functional question required stitching data across three platforms with subtly different definitions, so answers took weeks and rarely agreed. The forecasting and personalization teams could not easily use the same features, and the cost of running three warehouses was substantial. The retailer needed to consolidate onto a single platform that could serve BI, machine learning, and personalization from one copy of the data — collapsing the reconciliation tax and speeding up how fast the business could learn."
      clientProfile={{
        industry: "National Retailer",
        companySize: "500+ Stores",
        projectDuration: "6 Months",
        additionalInfo: "3 Legacy Warehouses",
        additionalLabel: "Analytics Estate"
      }}
      challengeTitle="Why Insight Was So Slow"
      challenges={[
        { icon: Target, title: "Three Disconnected Warehouses", description: "BI, forecasting, and personalization each ran on a different platform with different definitions." },
        { icon: Clock, title: "A Constant Reconciliation Tax", description: "Every cross-functional question meant stitching three platforms together by hand, so answers took weeks." },
        { icon: BarChart3, title: "No Shared Features", description: "Forecasting and personalization could not easily use the same data, duplicating effort." },
        { icon: DollarSign, title: "High Platform Cost", description: "Running three warehouses carried substantial and redundant cost." }
      ]}
      approachTitle="Unify on a Lakehouse"
      approachIntro="We replaced the three legacy warehouses with a single Databricks lakehouse that unified BI, demand forecasting, and personalization on one platform — cutting time-to-insight 70 percent."
      steps={[
        { step: "01", title: "Designing the Lakehouse", description: "We designed a Databricks lakehouse able to serve BI, machine learning, and personalization from one governed copy of the data." },
        { step: "02", title: "Consolidating the Three Warehouses", description: "We migrated the three legacy warehouses onto the lakehouse, reconciling definitions into a single source of truth." },
        { step: "03", title: "Unifying BI and ML", description: "We put reporting, forecasting, and personalization on the same platform and features, ending the duplicated effort across teams." },
        { step: "04", title: "Accelerating Insight", description: "With one platform and one definition, cross-functional questions that took weeks now resolved in a fraction of the time." }
      ]}
      resultsTitle="One Platform, Faster Learning"
      results={[
        { icon: Zap, value: "70%", label: "Faster insight", detail: "Time from question to answer" },
        { icon: CheckCircle, value: "3 → 1", label: "Warehouses", detail: "Unified onto the lakehouse" },
        { icon: BarChart3, value: "BI+ML", label: "Same data", detail: "Reporting and models aligned" },
        { icon: DollarSign, value: "Lower", label: "Platform cost", detail: "Three systems retired to one" }
      ]}
      quote="Every real question meant reconciling three warehouses that never quite agreed, and it took weeks. Putting everything on one lakehouse — reporting, forecasting, and personalization on the same data — cut our time to insight by seventy percent. The whole business is finally arguing from the same numbers."
      quoteAuthor="VP of Analytics"
      quoteRole="National retailer"
      relatedStudies={[
        { title: "How an Asset Manager Let Portfolio Teams Ship Analytics in Days, Not Quarters", metric: "Days", label: "not quarters to ship analytics", link: "/cases/asset-manager-data-mesh", image: "/images/industries/fin-handshake-city.jpg" },
        { title: "How a Manufacturer Cut Its Reporting Cycle From 14 Days to 6 Hours", metric: "14 days → 6 hrs", label: "reporting cycle", link: "/cases/manufacturing-data-platform", image: "/images/industries/mfg-robot-arm.jpg" }
      ]}
      ctaTitle="Is fragmented data slowing your insight?"
      ctaDescription="Let's unify BI, ML, and personalization on one lakehouse and speed up how fast you learn."
    />
  );
}
