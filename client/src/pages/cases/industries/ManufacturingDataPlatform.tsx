import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Clock, Target, BarChart3, TrendingDown, Zap, CheckCircle } from "lucide-react";

export default function ManufacturingDataPlatform() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Manufacturer Cuts Reporting Cycle From 14 Days to 6 Hours | Data Solutions Case Study"
      seoDescription="An industrial manufacturer's monthly close reporting took 14 days. A unified Snowflake warehouse and dbt metric layer collapsed it to 6 hours and unlocked daily operational dashboards."
      canonical="/cases/manufacturing-data-platform"
      industry="Manufacturing"
      industryLink="/industries/manufacturing"
      title="How a Manufacturer Cut Its Reporting Cycle From 14 Days to 6 Hours"
      subtitle="Monthly close reporting took two weeks of manual assembly, so the numbers were old before anyone saw them. A unified warehouse and a governed metric layer made reporting near-real-time."
      heroImage="/images/industries/mfg-robot-arm.jpg"
      metrics={[
        { value: "14d → 6h", label: "Reporting Cycle" },
        { value: "Daily", label: "Operational Dashboards" },
        { value: "One", label: "Metric Layer" },
        { value: "Snowflake", label: "Unified Warehouse" }
      ]}
      clientContextTitle="Reporting That Arrived Too Late"
      clientContextIntro="An industrial manufacturer took fourteen days to produce its monthly close reporting. By the time the numbers were assembled, reconciled, and distributed, the month they described was long over and the decisions they should have informed had already been made on gut feel."
      clientContextBody="The delay came from fragmentation and manual work. Data lived in disconnected systems, metrics were defined differently in different reports, and analysts spent two weeks each month stitching and reconciling by hand. There was no shared definition of a metric, so figures disagreed and trust eroded. Daily operational visibility was simply impossible. The manufacturer needed a unified warehouse and a governed metric layer so reporting could collapse from a two-week manual ordeal into a near-real-time capability — and unlock the daily dashboards operations had never had."
      clientProfile={{
        industry: "Industrial Manufacturer",
        companySize: "~$540M Annual Revenue",
        projectDuration: "6 Months",
        additionalInfo: "Monthly Close Reporting",
        additionalLabel: "Finance & Operations"
      }}
      challengeTitle="Why Reporting Took Two Weeks"
      challenges={[
        { icon: Clock, title: "Manual Assembly", description: "Analysts spent fourteen days each month stitching and reconciling data by hand." },
        { icon: Target, title: "No Shared Metric Definitions", description: "Metrics were defined differently across reports, so numbers disagreed and trust eroded." },
        { icon: BarChart3, title: "Fragmented Data", description: "Data lived in disconnected systems that had to be joined manually every cycle." },
        { icon: TrendingDown, title: "No Daily Visibility", description: "Operational dashboards were impossible when reporting itself took two weeks." }
      ]}
      approachTitle="Unify the Warehouse, Govern the Metrics"
      approachIntro="We built a unified Snowflake warehouse and a dbt-based metric layer that collapsed the monthly close reporting from fourteen days to six hours and unlocked daily operational dashboards."
      steps={[
        { step: "01", title: "Consolidating Into Snowflake", description: "We unified the disconnected source systems into a single Snowflake warehouse, ending the manual stitching." },
        { step: "02", title: "Building a Governed Metric Layer", description: "We defined every metric once in a dbt-based layer, so all reports drew on the same trusted definitions." },
        { step: "03", title: "Automating the Close", description: "We automated the assembly and reconciliation that had consumed two weeks, collapsing the cycle to hours." },
        { step: "04", title: "Unlocking Daily Dashboards", description: "With near-real-time data and consistent metrics, we stood up the daily operational dashboards the business had never had." }
      ]}
      resultsTitle="From Two Weeks to Same-Day"
      results={[
        { icon: Zap, value: "14d → 6h", label: "Reporting cycle", detail: "Monthly close collapsed" },
        { icon: BarChart3, value: "Daily", label: "Dashboards", detail: "Operational visibility unlocked" },
        { icon: CheckCircle, value: "One", label: "Metric layer", detail: "Consistent definitions everywhere" },
        { icon: Target, value: "Trusted", label: "Numbers", detail: "Reports finally agree" }
      ]}
      quote="Our monthly numbers used to take two weeks to produce, so they were history by the time anyone read them. A single warehouse and one governed set of metric definitions cut that to six hours and gave operations daily dashboards for the first time. We make decisions on current data now, not last month's."
      quoteAuthor="VP of Finance"
      quoteRole="Industrial manufacturer"
      relatedStudies={[
        { title: "How a Health System Recovered $9M a Year by Fixing Its Data Quality", metric: "$9M", label: "recovered annually", link: "/cases/healthcare-data-quality", image: "/images/cases/healthcare-data-quality-hero.jpg" },
        { title: "How a Health System Turned Data From Overhead Into $42M of Advantage", metric: "$42M", label: "in decision value unlocked", link: "/cases/health-system-data-strategy", image: "/case-healthcare-team.5797392b.jpg" }
      ]}
      ctaTitle="Is your reporting old before anyone reads it?"
      ctaDescription="Let's unify the warehouse and govern the metrics so reporting becomes near-real-time."
    />
  );
}
