import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { AlertTriangle, Clock, TrendingDown, Users, CheckCircle } from "lucide-react";

export default function RetailDataPipelineReliability() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Contract Testing Cuts Retailer Pipeline Failures 84% | Data Engineering Case Study"
      seoDescription="A national retailer's analytics pipelines broke constantly and the team distrusted the numbers. Schema contracts and freshness SLOs cut pipeline failure rate 84% and restored trust before the morning standup."
      canonical="/cases/retail-data-pipeline-reliability"
      industry="Retail"
      industryLink="/industries/retail"
      title="How a National Retailer Cut Data-Pipeline Failures by 84%"
      subtitle="Analysts started every morning wondering whether the dashboards were even right. Schema contracts and freshness SLOs turned a fragile pipeline graph into a system the business could trust."
      heroImage="/images/cases/retail-data-pipeline-reliability-hero.jpg"
      metrics={[
        { value: "84%", label: "Fewer Pipeline Failures" },
        { value: "SLO", label: "Freshness Guaranteed" },
        { value: "Trusted", label: "Before Standup" },
        { value: "Contracts", label: "On Every Source" }
      ]}
      clientContextTitle="Dashboards Nobody Trusted"
      clientContextIntro="A national retailer ran its merchandising, supply-chain, and marketing decisions off a sprawling graph of data pipelines that broke on an almost daily basis. Analysts learned to distrust the numbers, and the first hour of every morning went to checking whether the overnight loads had actually run correctly."
      clientContextBody="The pipelines had grown organically, with no contracts governing what each source was supposed to deliver and no service levels on when the data had to land. A silent schema change upstream would break a downstream table without warning, and the failure only surfaced when an analyst noticed a number looked wrong. Leadership was making decisions on data it could not fully trust, and the data team spent its time firefighting rather than building. The retailer needed reliability engineered into the pipelines, not bolted on after each break."
      clientProfile={{
        industry: "National Retailer",
        companySize: "400+ Stores",
        projectDuration: "5 Months",
        additionalInfo: "Analytics Pipeline Estate",
        additionalLabel: "Data Platform"
      }}
      challengeTitle="Why the Pipelines Kept Breaking"
      challenges={[
        { icon: AlertTriangle, title: "No Source Contracts", description: "Nothing governed what each upstream source had to deliver, so a silent schema change broke downstream tables without warning." },
        { icon: Clock, title: "No Freshness Guarantees", description: "There were no service levels on when data had to land, so staleness went unnoticed until a number looked wrong." },
        { icon: TrendingDown, title: "Eroded Trust", description: "Frequent breaks taught analysts to distrust the dashboards and re-check everything by hand." },
        { icon: Users, title: "A Team Firefighting", description: "The data team spent its days fixing breaks instead of building new capability." }
      ]}
      approachTitle="Engineer Reliability In"
      approachIntro="We introduced schema contracts on every source and freshness SLOs across the graph, turning a fragile pipeline estate into a system the analytics team could trust before the morning standup."
      steps={[
        { step: "01", title: "Defining Schema Contracts", description: "We established explicit contracts for what each source must deliver, so upstream changes that would break downstream tables were caught at the boundary." },
        { step: "02", title: "Setting Freshness SLOs", description: "We put service-level objectives on data freshness so staleness triggered an alert instead of surfacing as a wrong number hours later." },
        { step: "03", title: "Automating Contract Enforcement", description: "We wired contract and freshness checks into the pipeline runs, so a violation failed fast and loudly rather than silently corrupting a table." },
        { step: "04", title: "Rebuilding Trust", description: "With breaks caught at the source and freshness guaranteed, analysts could rely on the numbers being right when they arrived each morning." }
      ]}
      resultsTitle="Pipelines the Business Can Trust"
      results={[
        { icon: TrendingDown, value: "84%", label: "Fewer failures", detail: "Across the pipeline graph" },
        { icon: Clock, value: "SLO", label: "Freshness", detail: "Guaranteed and monitored" },
        { icon: CheckCircle, value: "Trusted", label: "By standup", detail: "Numbers right when they land" },
        { icon: Users, value: "Building", label: "Not firefighting", detail: "Team freed for new work" }
      ]}
      quote="We used to spend the first hour of every day checking whether our own data was right. Putting contracts on the sources and real freshness guarantees on the pipelines cut our failures by more than four-fifths. The dashboards are simply trustworthy now, and my team is building again instead of firefighting."
      quoteAuthor="Head of Data Engineering"
      quoteRole="National retailer"
      relatedStudies={[
        { title: "How an Insurer Moved 1,400 Pipelines to the Cloud Without the Business Noticing", metric: "1,400", label: "pipelines migrated to cloud", link: "/cases/insurer-pipeline-migration", image: "/images/cases/insurer-pipeline-migration-hero.jpg" },
        { title: "How a Health System Passed Its HIPAA Audit With Zero Findings", metric: "Zero", label: "audit findings", link: "/cases/health-hipaa-audit", image: "/images/cases/health-hipaa-audit-hero.jpg" }
      ]}
      ctaTitle="Do your pipelines break more than they should?"
      ctaDescription="Let's engineer contracts and freshness SLOs so the numbers are trustworthy before the standup."
    />
  );
}
