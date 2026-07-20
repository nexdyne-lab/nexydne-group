import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Target, Users, BarChart3, Shield, TrendingUp, CheckCircle } from "lucide-react";

export default function PayerAutomationCoeScale() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Automation CoE Charter Scales From 12 to 140 Automations | Healthcare Payer Case Study"
      seoDescription="A regional health plan had 12 orphaned RPA bots and no shared library. A center-of-excellence operating model — intake, reusable components, citizen-developer guardrails, benefits tracking — scaled to 140 automations on the same headcount."
      canonical="/cases/payer-automation-coe-scale"
      industry="Healthcare Payer"
      industryLink="/industries/healthcare"
      title="How a Health Plan Turned 12 Orphaned Bots Into 140 Working Automations"
      subtitle="The automation portfolio had stalled at a dozen bots nobody clearly owned. Building the operating model — not buying more tools — let it scale more than tenfold on the same team."
      heroImage="/images/cases/payer-automation-coe-scale-hero.jpg"
      metrics={[
        { value: "12→140", label: "Production Automations" },
        { value: "18 Mo", label: "To Scale" },
        { value: "Same", label: "Headcount Footprint" },
        { value: "Reusable", label: "Component Library" }
      ]}
      clientContextTitle="A Dozen Bots and Nowhere to Go"
      clientContextIntro="A regional health plan had dipped into automation and stalled. Its portfolio consisted of 12 RPA bots with unclear ownership, no shared component library, and no operating model to guide what got automated next or who was responsible when something broke."
      clientContextBody="Each bot had been built in isolation, so nothing was reusable — every new automation started from scratch, and every broken one became a mystery. Without intake, prioritization, or benefits tracking, the program had no way to demonstrate value or decide where to invest, and no guardrails for the business users who wanted to build their own automations safely. The health plan did not need a bigger technology stack; it needed the operating model that turns scattered bots into a scalable capability."
      clientProfile={{
        industry: "Regional Health Plan",
        companySize: "Upper Mid-Market",
        projectDuration: "18 Months",
        additionalInfo: "Shared-Services Operations",
        additionalLabel: "Automation Home"
      }}
      challengeTitle="Why the Portfolio Couldn't Grow"
      challenges={[
        { icon: Target, title: "Bots Built in Isolation", description: "Twelve automations had been created one-off, with no shared components, so nothing could be reused." },
        { icon: Users, title: "Unclear Ownership", description: "No one clearly owned the bots, so broken automations became mysteries and accountability was absent." },
        { icon: BarChart3, title: "No Intake or Benefits Tracking", description: "Without prioritization or value measurement, the program could not decide where to invest or prove its worth." },
        { icon: Shield, title: "No Guardrails for Citizen Developers", description: "Business users who wanted to build automations had no safe framework to do so." }
      ]}
      approachTitle="Build the Operating Model, Not More Bots"
      approachIntro="We designed the center-of-excellence operating model — intake, prioritization, reusable components, citizen-developer guardrails, and benefits tracking — and the program scaled from 12 to 140 production automations on the same headcount footprint."
      steps={[
        { step: "01", title: "Standing Up Intake and Prioritization", description: "We built a clear intake and prioritization process so the program could choose the highest-value automations deliberately rather than opportunistically." },
        { step: "02", title: "Creating a Reusable Component Library", description: "We established shared, reusable components so each new automation built on the last instead of starting from zero." },
        { step: "03", title: "Adding Citizen-Developer Guardrails", description: "We defined guardrails that let business users safely build their own automations within the CoE's standards, multiplying capacity." },
        { step: "04", title: "Tracking Benefits to Justify Scale", description: "We instrumented benefits tracking so the program could demonstrate value and earn the mandate to keep scaling." }
      ]}
      resultsTitle="A Scalable Capability, Same Team"
      results={[
        { icon: TrendingUp, value: "12→140", label: "Production automations", detail: "Scaled within 18 months" },
        { icon: Users, value: "Same", label: "Headcount", detail: "No added team to reach 140" },
        { icon: CheckCircle, value: "Reusable", label: "Components", detail: "Each automation builds on the last" },
        { icon: BarChart3, value: "Tracked", label: "Benefits", detail: "Value proven to justify scale" }
      ]}
      quote="We had a dozen bots nobody owned and no way to build the thirteenth without starting over. The answer was not more technology — it was the operating model: a real intake, reusable parts, safe guardrails for our own people, and benefits we could actually prove. We went to a hundred and forty automations with the same team we started with."
      quoteAuthor="VP of Operations"
      quoteRole="Regional health plan"
      relatedStudies={[
        { title: "How a Specialty Distributor Cut Order Cycle Time From 9 Days to Under Six", metric: "41%", label: "faster order cycle", link: "/cases/distribution-order-fulfillment-redesign", image: "/images/capabilities/cap-warehouse-robot.jpg" },
        { title: "How a Hospital System Freed a Quarter of Its Bed-Day Capacity by Redesigning Discharge", metric: "28%", label: "more bed-day capacity", link: "/cases/hospital-discharge-workflow-redesign", image: "/images/cases/hospital-discharge-workflow-redesign-hero.jpg" }
      ]}
      ctaTitle="Is your automation portfolio stalled at a handful of bots?"
      ctaDescription="Let's build the operating model that scales scattered automations into a real capability."
    />
  );
}
