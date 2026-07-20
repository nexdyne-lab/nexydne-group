import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Target, Clock, TrendingDown, Users, TrendingUp, CheckCircle, Zap } from "lucide-react";

export default function HealthEmbeddedAnalytics() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Health System Embeds Analytics in the EHR, Lifts Adoption 4x | Data Visualization Case Study"
      seoDescription="A health system's standalone BI portal went unused. Embedding real-time analytics directly inside the EHR clinician workflow lifted adoption 4x by putting insight where decisions happen."
      canonical="/cases/health-embedded-analytics"
      industry="Healthcare"
      industryLink="/industries/healthcare"
      title="How a Health System Lifted Analytics Adoption 4x by Embedding It in the EHR"
      subtitle="A standalone BI portal sat unused because it lived outside the workflow. Putting the charts inside the EHR, where clinicians actually work, changed whether analytics got used at all."
      heroImage="/images/cases/health-embedded-analytics-hero.jpg"
      metrics={[
        { value: "4x", label: "Higher Adoption" },
        { value: "In-EHR", label: "Embedded" },
        { value: "Real-Time", label: "At the Point of Care" },
        { value: "Retired", label: "Standalone Portal" }
      ]}
      clientContextTitle="Analytics Nobody Opened"
      clientContextIntro="A health system had invested in a standalone business-intelligence portal to bring analytics to its clinicians. Almost no one used it. The dashboards were fine; the problem was that using them meant leaving the electronic health record — the system where clinicians actually spend their day — to log into a separate tool."
      clientContextBody="In a clinical workflow, every extra click and context-switch is a barrier, and a separate portal was a barrier too high. Clinicians made decisions inside the EHR and had neither the time nor the habit to break out to another system to check a dashboard. So the analytics investment sat idle, and decisions were made without the insight that was technically available. The health system needed to bring the analytics to where the work already happened — embedded, real-time, inside the EHR — rather than asking clinicians to come to the analytics."
      clientProfile={{
        industry: "Regional Health System",
        companySize: "~$680M Annual Revenue",
        projectDuration: "5 Months",
        additionalInfo: "EHR-Embedded Analytics",
        additionalLabel: "Point of Care"
      }}
      challengeTitle="Why the Portal Went Unused"
      challenges={[
        { icon: Target, title: "Insight Outside the Workflow", description: "Using analytics meant leaving the EHR for a separate tool, a barrier clinicians rarely crossed." },
        { icon: Clock, title: "No Time to Context-Switch", description: "In a clinical workflow, breaking out to another system was a cost clinicians could not spare." },
        { icon: TrendingDown, title: "An Idle Investment", description: "The standalone BI portal sat almost entirely unused despite fine dashboards." },
        { icon: Users, title: "Decisions Without Insight", description: "Care decisions were made without the analytics that were technically available." }
      ]}
      approachTitle="Bring Analytics to the Clinician"
      approachIntro="We embedded real-time analytics directly inside the EHR clinician workflow, replacing the unused standalone portal and lifting adoption fourfold by putting insight where decisions actually happen."
      steps={[
        { step: "01", title: "Meeting Clinicians Where They Work", description: "We designed the analytics to live inside the EHR, so clinicians never had to leave their workflow to see them." },
        { step: "02", title: "Delivering Insight in Real Time", description: "We surfaced real-time charts at the point of care, relevant to the decision in front of the clinician." },
        { step: "03", title: "Retiring the Standalone Portal", description: "We replaced the separate BI tool that no one used, removing the context-switch entirely." },
        { step: "04", title: "Driving Adoption", description: "By embedding insight in the workflow, we lifted analytics adoption fourfold without asking clinicians to change how they work." }
      ]}
      resultsTitle="Insight Where Decisions Happen"
      results={[
        { icon: TrendingUp, value: "4x", label: "Higher adoption", detail: "Versus the standalone portal" },
        { icon: CheckCircle, value: "In-EHR", label: "Embedded", detail: "Inside the clinician workflow" },
        { icon: Zap, value: "Real-Time", label: "At point of care", detail: "Relevant to the decision" },
        { icon: Target, value: "Retired", label: "Old portal", detail: "Context-switch removed" }
      ]}
      quote="We built a perfectly good analytics portal and our clinicians never opened it, because using it meant leaving the system they live in. The moment we put the charts inside the EHR, at the point of care, adoption jumped four times over. You cannot ask clinicians to come to the data — you have to bring the data to them."
      quoteAuthor="Chief Medical Information Officer"
      quoteRole="Regional health system"
      relatedStudies={[
        { title: "How a National Retailer Lifted Recommendation Revenue by 31%", metric: "31%", label: "more recommendation revenue", link: "/cases/retail-recommendations", image: "/images/capabilities/cap-retail-apparel.jpg" },
        { title: "How a Card Issuer Cut Fraud Losses 44% and False Positives at the Same Time", metric: "44%", label: "lower fraud losses", link: "/cases/fraud-detection", image: "/images/industries/fin-trader.jpg" }
      ]}
      ctaTitle="Does your analytics sit unused outside the workflow?"
      ctaDescription="Let's embed insight where your people already work and watch adoption climb."
    />
  );
}
