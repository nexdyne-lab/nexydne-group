import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { AlertTriangle, FileWarning, ClipboardX, GraduationCap, FileCheck2, LineChart, Award, ShieldCheck } from "lucide-react";

export function AerospaceQuality() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Achieving ISO 9001 and AS9100 to Keep At-Risk Contracts | Aerospace Case Study"
      seoDescription="A customer audit put the company's largest contracts at risk with 90 days to show progress toward AS9100. A rebuilt quality system earned ISO 9001 and AS9100 certification and cut defects 45%."
      canonical="/capabilities/operations/case-studies/aerospace-quality"
      industry="Aerospace & Defense"
      industryLink="/industries/aerospace-defense"
      title="How an Aerospace Supplier Achieved ISO and AS9100 Certification"
      subtitle="An aerospace precision-components supplier built a world-class quality management system under audit pressure — earning ISO 9001 and AS9100 certification, cutting defects 45%, and keeping every at-risk contract."
      heroImage="/images/industries/aero-rocket.jpg"
      metrics={[
        { value: "ISO 9001", label: "Certification Achieved" },
        { value: "AS9100", label: "Certification Achieved" },
        { value: "45%", label: "Defect Reduction" },
        { value: "100%", label: "Contracts Retained" }
      ]}
      clientContextTitle="An Audit With Everything at Stake"
      clientContextIntro="A 150-employee aerospace supplier manufactures precision-machined components for commercial and defense aircraft. A major customer audit revealed significant quality-system gaps, putting its largest customer contracts at risk — with 90 days to show substantial progress toward ISO 9001 and AS9100 or face disqualification."
      clientContextBody="The rapid assessment revealed a quality system that existed on paper but wasn't consistently followed: outdated documentation not reflecting actual processes, incomplete inspection records making traceability impossible, corrective actions piling up without resolution, and training records unable to demonstrate competency for critical operations."
      clientProfile={{
        industry: "Aerospace Components Supplier",
        companySize: "150 Employees",
        projectDuration: "9-Month Certification",
        additionalInfo: "AS9100",
        additionalLabel: "Standard"
      }}
      challengeTitle="Why Certification Was at Risk"
      challenges={[
        {
          icon: AlertTriangle,
          title: "Major contracts on the line",
          description: "A failed audit meant disqualification from the approved supplier list within 90 days."
        },
        {
          icon: FileWarning,
          title: "Documentation on paper only",
          description: "Procedures didn't reflect actual practice, and versions weren't controlled."
        },
        {
          icon: ClipboardX,
          title: "No traceability",
          description: "Incomplete inspection records made it impossible to trace parts and processes."
        },
        {
          icon: GraduationCap,
          title: "Unproven competency",
          description: "Training records couldn't demonstrate competency for critical operations."
        }
      ]}
      approachTitle="A Real Quality System, Not a Paper One"
      approachIntro="NEXDYNE implemented a comprehensive quality management system aligned with AS9100 — rewriting procedures to reflect best practice and building process controls into production rather than relying on inspection."
      steps={[
        {
          step: "01",
          title: "Rebuild the foundation",
          description: "Procedures were rewritten to actual practice, with document control, a calibration program, and a training-to-competency matrix."
        },
        {
          step: "02",
          title: "Build quality into production",
          description: "Statistical process control, first-article inspection, in-process checkpoints, and shop-floor visual management replaced inspection dependence."
        },
        {
          step: "03",
          title: "Drive continuous improvement",
          description: "Corrective actions with root-cause analysis, a supplier-quality program, and monthly management reviews closed the loop."
        },
        {
          step: "04",
          title: "Prepare for the audit",
          description: "Internal audits and mock assessments identified and closed gaps before external review."
        }
      ]}
      resultsTitle="The Payoff"
      results={[
        {
          icon: Award,
          value: "9 mo",
          label: "To both certifications",
          detail: "ISO 9001 in 6 months, AS9100 three months later"
        },
        {
          icon: ShieldCheck,
          value: "45%",
          label: "Fewer defects",
          detail: "As process controls replaced inspection-dependent QA"
        },
        {
          icon: FileCheck2,
          value: "2",
          label: "New Tier 1 customers",
          detail: "Previously inaccessible without AS9100 certification"
        }
      ]}
      quote=""
      quoteAuthor=""
      quoteRole=""
      relatedStudies={[
        {
          title: "Cutting Supply-Chain Costs 25% for a Consumer-Goods Maker",
          metric: "25%",
          label: "cost reduction",
          link: "/capabilities/operations/case-studies/consumer-goods-supply-chain",
          image: "/images/industries/retail-warehouse.jpg"
        },
        {
          title: "Reducing Manufacturing Downtime With Predictive Maintenance",
          metric: "45%",
          label: "less downtime",
          link: "/capabilities/artificial-intelligence/case-studies/manufacturing-predictive-maintenance",
          image: "/images/industries/mfg-robotics.jpg"
        }
      ]}
      ctaTitle="Ready to make quality a capability?"
      ctaDescription="Let's talk about what a real quality management system could do for your certifications and defects."
    />
  );
}

export default AerospaceQuality;
