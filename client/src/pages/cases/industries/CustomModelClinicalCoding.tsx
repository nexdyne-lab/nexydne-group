import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { FileText, DollarSign, Target, Clock, ShieldCheck, RefreshCw } from "lucide-react";

export default function CustomModelClinicalCoding() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Cutting Claim Denials 40% with a Model Trained on Its Own Records | Healthcare Case Study"
      seoDescription="A regional health system was losing millions to denied claims and slow, inconsistent coding. A model trained on its own clinical records cut denials 40% and recovered revenue in the millions — with coders still in control."
      canonical="/cases/custom-model-clinical-coding"
      industry="Healthcare"
      industryLink="/industries/healthcare"
      title="How a Regional Health System Cut Claim Denials 40% by Training a Model on Its Own Records"
      subtitle="Denied claims and slow, inconsistent coding were quietly draining millions each year. A model built on the system's own clinical documentation made coding faster and more consistent — while coders kept the final say on every claim."
      heroImage="/images/cases/custom-model-clinical-coding-hero.jpg"
      metrics={[
        { value: "40%", label: "Fewer Denials" },
        { value: "55%", label: "Faster Coding" },
        { value: "$6.5M", label: "Revenue Recovered" },
        { value: "9 Days", label: "Off Days in A/R" }
      ]}
      clientContextTitle="When Every Claim Is Coded a Little Differently"
      clientContextIntro="A regional health system — a network of hospitals and clinics serving communities across several counties — turned each patient visit into a bill by translating the clinician's notes into standardized billing codes. That translation is where revenue is won or lost. When a code does not match what the documentation supports, the insurer denies the claim, and the work of getting paid starts over. Doing this well, visit after visit, across dozens of specialties, is genuinely hard."
      clientContextBody="The system's coders were skilled, but they were carrying more than they could keep up with. Coding standards shifted, documentation varied from one physician to the next, and two equally experienced coders could read the same chart and land on different codes. The result was a steady stream of denied claims — nearly one in eight — each of which had to be reworked and resubmitted by hand. Cash that the system had already earned sat waiting for weeks, and a meaningful share of it was never collected at all. Leadership saw the pattern clearly: the problem was not effort or expertise, it was that no single coder could hold the system's entire history of correctly paid claims in their head."
      clientProfile={{
        industry: "Regional Health System",
        companySize: "~$700M Annual Revenue",
        projectDuration: "12 Months",
        additionalInfo: "~120 Coders",
        additionalLabel: "Coding & Revenue Cycle Staff"
      }}
      challengeTitle="Why Revenue Kept Leaking"
      challenges={[
        {
          icon: FileText,
          title: "Nearly One Claim in Eight Denied",
          description: "About 12% of claims came back denied, most for coding that did not line up with the documentation — every one a claim that had to be reworked from scratch."
        },
        {
          icon: RefreshCw,
          title: "Endless Rework",
          description: "Coders spent much of their week fixing and resubmitting denied claims instead of working new ones, so the backlog only grew."
        },
        {
          icon: Target,
          title: "The Same Chart, Different Codes",
          description: "With standards shifting and documentation varying by physician, two coders could read one chart and choose different codes — consistency was nearly impossible at scale."
        },
        {
          icon: Clock,
          title: "Cash Stuck in Limbo",
          description: "Money the system had already earned sat uncollected for weeks, and a portion of it was written off entirely — revenue quietly lost to slow, contested billing."
        }
      ]}
      approachTitle="A Model That Learned From the System's Own Records"
      approachIntro="Working alongside the system's coders and revenue-cycle leaders, we set out to capture what the best coders already knew and make it available on every claim — building a model trained on the health system's own history of correctly coded, correctly paid records, with coders firmly in control of the final decision."
      steps={[
        {
          step: "01",
          title: "Learning From Claims That Got Paid",
          description: "Rather than buy a generic tool, we built a model on the system's own documentation and its record of which claims had been coded correctly and paid without dispute. It learned how this organization's clinicians actually write and how their work maps to the right codes — not how coding works in general, but how it works here."
        },
        {
          step: "02",
          title: "A First Draft on Every Chart",
          description: "For each visit, the model read the clinical notes and proposed the codes it judged best supported by the documentation, with the specific wording it relied on shown right alongside. Coders no longer started from a blank page; they started from a well-reasoned draft they could confirm or correct."
        },
        {
          step: "03",
          title: "Coders Keep the Final Say",
          description: "Nothing went to the insurer without a coder's sign-off. The model handled the routine, well-documented cases quickly and flagged the ambiguous ones for a closer look, so coders spent their expertise where judgment was actually needed — never rubber-stamping a machine."
        },
        {
          step: "04",
          title: "Catching Problems Before They Became Denials",
          description: "Before a claim was ever submitted, the model checked it against the patterns that had triggered denials in the past and warned when something looked likely to be rejected. Issues that used to surface weeks later as a denial were now caught and fixed up front."
        }
      ]}
      resultsTitle="The Payoff"
      results={[
        {
          icon: ShieldCheck,
          value: "40%",
          label: "Fewer denials",
          detail: "Denial rate down from about 12% to 7%"
        },
        {
          icon: Clock,
          value: "55%",
          label: "Faster coding",
          detail: "Routine charts cleared in a fraction of the time"
        },
        {
          icon: DollarSign,
          value: "$6.5M",
          label: "Revenue recovered",
          detail: "Cash that had been slipping away each year"
        },
        {
          icon: Target,
          value: "9 Days",
          label: "Off days in A/R",
          detail: "Earned cash collected weeks sooner"
        }
      ]}
      quote="Our coders were never the problem — they were being asked to do something no person could do at this scale, and to do it exactly the same way every time. The model gives every one of them a well-reasoned starting point drawn from our own records, but the decision stays theirs. We are getting paid for the care we actually delivered, and getting paid faster."
      quoteAuthor="Vice President, Revenue Cycle"
      quoteRole="Regional health system"
      relatedStudies={[
        {
          title: "Drafting policy documents in minutes with generative AI",
          metric: "70%",
          label: "less drafting time",
          link: "/cases/generative-ai-document-automation",
          image: "/images/industries/fin-monitors.jpg"
        },
        {
          title: "Resolving service requests end to end with AI agents",
          metric: "60%",
          label: "resolved without a handoff",
          link: "/cases/agentic-ai-service-resolution",
          image: "/images/cases/agentic-ai-service-resolution-hero.jpg"
        }
      ]}
      ctaTitle="Ready to stop leaving earned revenue on the table?"
      ctaDescription="Let's talk about what a model trained on your own records could recover."
    />
  );
}
