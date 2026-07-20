import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Target, Shield, AlertTriangle, BarChart3, TrendingDown, CheckCircle } from "lucide-react";

export default function FinancialServicesCompliance() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Eliminating 98% of Compliance Deviations | Financial Services Case Study"
      seoDescription="A financial-services firm's manual, inconsistent process was generating constant compliance deviations. Process discovery and a standardized, controlled workflow eliminated 98% of them and made the process audit-ready."
      canonical="/cases/financial-services-compliance"
      industry="Financial Services"
      industryLink="/industries/financial-services"
      title="How a Financial-Services Firm Eliminated 98% of Its Compliance Deviations"
      subtitle="A critical process ran differently depending on who performed it, and the deviations piled up. Discovering the real workflow and standardizing it with controls built in nearly ended them."
      heroImage="/images/industries/fin-monitors.jpg"
      metrics={[
        { value: "98%", label: "Fewer Deviations" },
        { value: "Standard", label: "One Controlled Process" },
        { value: "Audit-Ready", label: "By Design" },
        { value: "Built-In", label: "Controls at Each Step" }
      ]}
      clientContextTitle="A Process That Ran a Different Way Every Time"
      clientContextIntro="A financial-services firm was generating a steady stream of compliance deviations on a critical, regulated process — not through negligence, but through inconsistency. The process had never been standardized, so it ran a slightly different way depending on who performed it and how busy they were."
      clientContextBody="Every deviation carried regulatory risk and consumed time in remediation, and because the underlying process was undocumented, the firm was fixing symptoms rather than the cause. Controls existed on paper but were applied unevenly, and there was no reliable record that each step had been completed correctly — which made audits painful and outcomes unpredictable. The firm needed the real process discovered and documented, then standardized into a single controlled workflow with the compliance checks built into the steps rather than bolted on after."
      clientProfile={{
        industry: "Financial-Services Firm",
        companySize: "Mid-Market",
        projectDuration: "6 Months",
        additionalInfo: "Regulated Core Process",
        additionalLabel: "Compliance Environment"
      }}
      challengeTitle="Why Deviations Kept Recurring"
      challenges={[
        { icon: Target, title: "No Standard Process", description: "The process ran differently depending on who performed it, so outcomes and controls varied constantly." },
        { icon: Shield, title: "Unevenly Applied Controls", description: "Controls existed on paper but were applied inconsistently, letting deviations slip through." },
        { icon: AlertTriangle, title: "Regulatory Risk on Every Deviation", description: "Each deviation carried compliance exposure and consumed time in remediation." },
        { icon: BarChart3, title: "No Reliable Audit Record", description: "With the process undocumented, there was no dependable evidence each step had been done correctly." }
      ]}
      approachTitle="Discover, Standardize, Build Controls In"
      approachIntro="We used process discovery to document how the work actually happened, then standardized it into a single controlled workflow with compliance checks embedded at each step — eliminating 98 percent of deviations and making the process audit-ready by design."
      steps={[
        { step: "01", title: "Discovering the Real Process", description: "We documented how the process actually ran across performers, exposing the variation that was producing the deviations." },
        { step: "02", title: "Standardizing to One Workflow", description: "We designed a single standard workflow so the process ran the same way every time, regardless of who performed it." },
        { step: "03", title: "Embedding Controls at Each Step", description: "We built the compliance checks into the steps themselves rather than bolting them on afterward, so control became part of doing the work." },
        { step: "04", title: "Making It Audit-Ready", description: "We instrumented a reliable record that each controlled step was completed, turning painful audits into a by-design outcome." }
      ]}
      resultsTitle="Deviations Designed Out"
      results={[
        { icon: TrendingDown, value: "98%", label: "Fewer deviations", detail: "On the regulated process" },
        { icon: CheckCircle, value: "One", label: "Standard workflow", detail: "Same every time, every performer" },
        { icon: Shield, value: "Built-In", label: "Controls", detail: "Embedded at each step" },
        { icon: BarChart3, value: "Audit-Ready", label: "By design", detail: "Reliable record of every step" }
      ]}
      quote="Our deviations were not a discipline problem — they were a consistency problem. Everyone did the process a little differently, so the controls landed differently too. Discovering how the work really happened and standardizing it with the checks built into each step took our deviations down by ninety-eight percent and made audits something we no longer dread."
      quoteAuthor="Chief Compliance Officer"
      quoteRole="Financial-services firm"
      relatedStudies={[
        { title: "How a Commercial Lender Made Its Underwriting Decisions More Consistent — Without Automating Them Away", metric: "32%", label: "more consistent approvals", link: "/cases/commercial-lending-decision-support", image: "/images/industries/fin-monitors.jpg" },
        { title: "How a Manufacturer Cut Unplanned Downtime in Half by Listening to Its Machines", metric: "51%", label: "less unplanned downtime", link: "/cases/industrial-iot-anomaly-detection", image: "/images/industries/mfg-robot-arm.jpg" }
      ]}
      ctaTitle="Are inconsistent processes generating compliance deviations?"
      ctaDescription="Let's standardize the workflow with controls built in, and make it audit-ready by design."
    />
  );
}
