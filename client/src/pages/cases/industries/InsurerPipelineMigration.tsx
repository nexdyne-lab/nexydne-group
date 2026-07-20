import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { AlertTriangle, Clock, Target, BarChart3, CheckCircle, Zap, TrendingUp } from "lucide-react";

export default function InsurerPipelineMigration() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Insurer Migrates 1,400 Pipelines to Cloud in 8 Months | Data Engineering Case Study"
      seoDescription="An insurer moved its entire on-prem ETL estate of 1,400 pipelines to dbt and Snowflake in eight months, with a phased lift-shift-modernize program and no downtime the business noticed."
      canonical="/cases/insurer-pipeline-migration"
      industry="Financial Services"
      industryLink="/industries/financial-services"
      title="How an Insurer Moved 1,400 Pipelines to the Cloud Without the Business Noticing"
      subtitle="An entire on-prem ETL estate had to move to the cloud without a downtime window the business could feel. A phased lift-shift-modernize program made the migration invisible."
      heroImage="/images/cases/insurer-pipeline-migration-hero.jpg"
      metrics={[
        { value: "1,400", label: "Pipelines Migrated" },
        { value: "8 Mo", label: "To Complete" },
        { value: "0", label: "Noticed Downtime" },
        { value: "dbt+Snowflake", label: "Target Stack" }
      ]}
      clientContextTitle="An Entire ETL Estate to Move"
      clientContextIntro="An insurer had accumulated 1,400 data pipelines on aging on-premises infrastructure that was expensive to run and impossible to scale. Moving the whole estate to a modern cloud stack was necessary, but the pipelines fed reporting, actuarial, and operational systems the business depended on daily."
      clientContextBody="The risk was disruption. A migration of this size, done as a big-bang cutover, could take down reporting the business relied on and stall operations for days. And a naive lift-and-shift would simply move the technical debt to the cloud without capturing any of the modernization benefit. The insurer needed the estate moved to dbt and Snowflake in a way that was invisible to the business — phased, sequenced by dependency, and modernizing the pipelines as they moved rather than after."
      clientProfile={{
        industry: "Insurance Carrier",
        companySize: "2M+ Policies in Force",
        projectDuration: "8 Months",
        additionalInfo: "1,400-Pipeline ETL Estate",
        additionalLabel: "Data Platform"
      }}
      challengeTitle="Why the Migration Was High-Risk"
      challenges={[
        { icon: AlertTriangle, title: "Business-Critical Pipelines", description: "The 1,400 pipelines fed reporting, actuarial, and operational systems the business used every day." },
        { icon: Clock, title: "No Tolerable Downtime", description: "A big-bang cutover risked taking down reporting and stalling operations for days." },
        { icon: Target, title: "Debt vs. Modernization", description: "A naive lift-and-shift would move the technical debt to the cloud without capturing the benefit." },
        { icon: BarChart3, title: "Tangled Dependencies", description: "The estate's interdependencies made sequencing the migration genuinely hard." }
      ]}
      approachTitle="Lift, Shift, Modernize — in Phases"
      approachIntro="We ran a phased lift-shift-modernize program that moved the entire estate to dbt and Snowflake, sequenced by dependency so the business never experienced a downtime window it noticed."
      steps={[
        { step: "01", title: "Mapping the Dependency Graph", description: "We mapped how the 1,400 pipelines depended on one another so we could sequence the migration safely, never moving a pipeline before its inputs." },
        { step: "02", title: "Migrating in Dependency-Safe Waves", description: "We moved the estate in phased waves, validating each against the on-prem output before switching the business over." },
        { step: "03", title: "Modernizing on the Way", description: "Rather than a bare lift-and-shift, we rebuilt pipelines on dbt as they moved, capturing the modernization benefit instead of deferring it." },
        { step: "04", title: "Keeping It Invisible", description: "We ran old and new in parallel through each cutover, so reporting and operations continued without a downtime window the business could feel." }
      ]}
      resultsTitle="A Modern Estate, No Disruption"
      results={[
        { icon: CheckCircle, value: "1,400", label: "Pipelines migrated", detail: "The full estate to the cloud" },
        { icon: Clock, value: "8 Mo", label: "To complete", detail: "Phased, dependency-safe" },
        { icon: Zap, value: "0", label: "Noticed downtime", detail: "Business ran throughout" },
        { icon: TrendingUp, value: "Modernized", label: "Not just moved", detail: "Rebuilt on dbt, not lifted" }
      ]}
      quote="Moving fourteen hundred pipelines off our old infrastructure sounded like something that would take down the business for a week. Sequencing it by dependency, modernizing as we went, and running old and new side by side through every cutover meant our reporting and operations never skipped a beat — most people never knew it happened."
      quoteAuthor="VP of Data Platform"
      quoteRole="Insurance carrier"
      relatedStudies={[
        { title: "How a Health System Passed Its HIPAA Audit With Zero Findings", metric: "Zero", label: "audit findings", link: "/cases/health-hipaa-audit", image: "/images/cases/health-hipaa-audit-hero.jpg" },
        { title: "How a Regional Bank Cut Data Subject Request Turnaround by 79%", metric: "79%", label: "faster subject-rights turnaround", link: "/cases/bank-subject-rights", image: "/images/industries/fin-trader.jpg" }
      ]}
      ctaTitle="Facing a large cloud migration you can't afford to disrupt?"
      ctaDescription="Let's plan a phased lift-shift-modernize the business never has to feel."
    />
  );
}
