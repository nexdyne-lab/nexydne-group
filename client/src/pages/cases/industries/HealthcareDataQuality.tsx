import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { DollarSign, Target, AlertTriangle, BarChart3, CheckCircle, Zap } from "lucide-react";

export default function HealthcareDataQuality() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Health System Recovers $9M a Year From Data-Quality Fixes | Data Solutions Case Study"
      seoDescription="A health system was silently losing revenue to poor data quality in claims and billing. End-to-end lineage and automated quality monitoring recovered $9M annually."
      canonical="/cases/healthcare-data-quality"
      industry="Healthcare"
      industryLink="/industries/healthcare"
      title="How a Health System Recovered $9M a Year by Fixing Its Data Quality"
      subtitle="Revenue was leaking silently through data errors in claims and billing that no one could see. Lineage and automated quality monitoring turned invisible losses into recovered dollars."
      heroImage="/case-medical-collaboration.9602cc8c.jpg"
      metrics={[
        { value: "$9M", label: "Recovered Annually" },
        { value: "Silent", label: "Leakage Stopped" },
        { value: "End-to-End", label: "Lineage" },
        { value: "Automated", label: "Quality Monitoring" }
      ]}
      clientContextTitle="Revenue Leaking Where No One Could See"
      clientContextIntro="A health system was losing millions of dollars a year and could not see where it was going. The losses were buried in data-quality problems — errors and inconsistencies in claims and patient-billing data that caused claims to be underpaid, denied, or never submitted correctly."
      clientContextBody="Because the problems were in the data rather than any single obvious process, they were effectively invisible. A malformed field here, a broken reconciliation there, and revenue the system had genuinely earned quietly failed to arrive. With no lineage, no one could trace an error back to its source, and with no automated monitoring, quality problems surfaced only when someone eventually noticed a shortfall. The health system needed end-to-end lineage to trace errors to their origin and automated quality monitoring to catch them before they cost revenue."
      clientProfile={{
        industry: "Regional Health System",
        companySize: "~$680M Annual Revenue",
        projectDuration: "6 Months",
        additionalInfo: "Claims & Billing Data",
        additionalLabel: "Revenue-Critical Estate"
      }}
      challengeTitle="Why the Losses Were Invisible"
      challenges={[
        { icon: DollarSign, title: "Silent Revenue Leakage", description: "Data errors caused claims to be underpaid, denied, or mis-submitted, quietly losing earned revenue." },
        { icon: Target, title: "No Lineage to Trace Errors", description: "Without lineage, no one could trace a bad number back to its source to fix the cause." },
        { icon: AlertTriangle, title: "Problems Found Too Late", description: "With no monitoring, quality issues surfaced only when someone noticed a shortfall months later." },
        { icon: BarChart3, title: "Errors Hidden in Data", description: "Because losses lived in the data, not a visible process, they were effectively invisible." }
      ]}
      approachTitle="See the Errors, Stop the Leak"
      approachIntro="We implemented end-to-end lineage and automated data-quality monitoring across claims and patient-billing data, stopping the silent leakage and recovering $9M annually."
      steps={[
        { step: "01", title: "Building End-to-End Lineage", description: "We traced claims and billing data from source to submission so any error could be tracked to its origin and fixed at the cause." },
        { step: "02", title: "Automating Quality Monitoring", description: "We put automated quality checks across the revenue-critical data so problems were caught in real time, not months later." },
        { step: "03", title: "Fixing the Root Causes", description: "With lineage and monitoring in place, we resolved the recurring quality issues that had been silently costing revenue." },
        { step: "04", title: "Quantifying the Recovery", description: "We measured the revenue recovered as errors were eliminated, totaling $9M on an annualized basis." }
      ]}
      resultsTitle="Invisible Losses, Now Recovered"
      results={[
        { icon: DollarSign, value: "$9M", label: "Recovered", detail: "On an annualized basis" },
        { icon: CheckCircle, value: "Stopped", label: "Silent leakage", detail: "In claims and billing" },
        { icon: Target, value: "Traceable", label: "Every error", detail: "Lineage to the source" },
        { icon: Zap, value: "Automated", label: "Monitoring", detail: "Problems caught in real time" }
      ]}
      quote="We knew we were losing money and had no idea where — it was buried in data errors nobody could see. Building lineage so we could trace a bad claim to its source, and monitoring that caught problems in real time, turned nine million dollars of invisible annual leakage into revenue we actually collect."
      quoteAuthor="VP of Revenue Cycle"
      quoteRole="Regional health system"
      relatedStudies={[
        { title: "How a Health System Turned Data From Overhead Into $42M of Advantage", metric: "$42M", label: "in decision value unlocked", link: "/cases/health-system-data-strategy", image: "/case-healthcare-team.5797392b.jpg" },
        { title: "How an Industrial Holding Company Turned Its Data Into a Third Revenue Stream", metric: "3rd", label: "revenue stream created", link: "/cases/industrial-data-monetization", image: "/images/capabilities/cap-battery-factory.jpg" }
      ]}
      ctaTitle="Is poor data quality quietly costing you revenue?"
      ctaDescription="Let's build lineage and monitoring that turn invisible leakage into recovered dollars."
    />
  );
}
