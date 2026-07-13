import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Clock, FileText, Shield, DollarSign, Target, Zap } from "lucide-react";

export default function GenerativeAIDocumentAutomation() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Drafting Policy Documents in Minutes with Generative AI | Insurance Case Study"
      seoDescription="An insurance carrier was spending days drafting policies, endorsements and customer letters by hand. Generative AI with a human check cut drafting time by 85% while staying inside compliance rules."
      canonical="/cases/generative-ai-document-automation"
      industry="Insurance"
      industryLink="/industries/insurance"
      title="Drafting Policy Documents in Minutes, Not Days, with Generative AI"
      subtitle="An insurance carrier was losing days to hand-drafting policies, endorsements and customer letters. Letting AI write the first draft — with a person always reviewing it — changed how fast the business could move without changing what it stood behind."
      heroImage="/images/industries/fin-monitors.jpg"
      metrics={[
        { value: "85%", label: "Less Drafting Time" },
        { value: "3x", label: "More Documents Handled" },
        { value: "70%", label: "Less Rework" },
        { value: "$4M", label: "Saved Each Year" }
      ]}
      clientContextTitle="When Every Document Is Written by Hand, the Business Can Only Move So Fast"
      clientContextIntro="A regional insurance carrier — a company that writes commercial policies for businesses across several states — produced almost everything in writing. Policy documents, the endorsements that change a policy mid-term, renewal letters and answers to customer questions were all drafted from scratch by underwriters and support staff, often by copying an old document and editing it line by line. Each one had to be accurate, consistent and worded in a way the company's compliance team and its regulators would accept."
      clientContextBody="The work was slow and easy to get wrong. A single endorsement could take an experienced underwriter the better part of a day, and a complex new policy several days. Because everyone started from a different old document, wording drifted over time, and small errors — a wrong date, an out-of-date clause, a figure that did not match the quote — slipped through and had to be caught and corrected later. As the business grew, the backlog of documents grew with it, and customers waited longer for the paperwork that let them get covered. Leadership was clear that the answer was not to lower its standards or add headcount indefinitely; it was to give its people a faster way to produce the same trustworthy documents."
      clientProfile={{
        industry: "Commercial Insurance Carrier",
        companySize: "~$300M Annual Revenue",
        projectDuration: "10 Months",
        additionalInfo: "~200 Underwriters & Staff",
        additionalLabel: "Document Workforce"
      }}
      challengeTitle="Why the Paperwork Kept Piling Up"
      challenges={[
        {
          icon: Clock,
          title: "Days Spent on Each Document",
          description: "Drafting a policy or endorsement by hand could take an underwriter most of a day, and complex documents several — time that could not scale as the business grew."
        },
        {
          icon: FileText,
          title: "Wording That Drifted",
          description: "Because every document started from a different old one, language grew inconsistent over time, and no two versions of the same clause quite matched."
        },
        {
          icon: Target,
          title: "Errors Caught Too Late",
          description: "Wrong dates, outdated clauses and figures that did not match the quote slipped through and had to be found and reworked after the fact."
        },
        {
          icon: Shield,
          title: "Compliance Under Strain",
          description: "Every document had to satisfy strict regulatory and internal rules, and checking each one by hand added still more time to an already slow process."
        }
      ]}
      approachTitle="Letting AI Write the First Draft, With a Person Always in the Loop"
      approachIntro="Working alongside the carrier's underwriting and compliance leaders, we set out to let generative AI — technology that produces written text from a set of instructions — draft documents from the carrier's own approved language, so its people could spend their time reviewing and deciding rather than typing. A person reviewed and signed off on every document before it ever reached a customer."
      steps={[
        {
          step: "01",
          title: "Building on the Carrier's Own Approved Language",
          description: "Rather than let the AI write freely, we grounded it in the company's library of approved clauses, templates and past documents. It drafted using the carrier's own tested wording, so what it produced already reflected the language compliance had signed off on."
        },
        {
          step: "02",
          title: "Turning the Facts of a Policy Into a Draft",
          description: "We connected the tool to the systems that already held the details of each policy — the customer, the coverage, the dates and the figures. From those facts it assembled a complete first draft in minutes, with the right numbers already in the right places."
        },
        {
          step: "03",
          title: "Checking the Rules Before a Person Ever Sees It",
          description: "Every draft passed through automatic checks for the carrier's compliance rules — required clauses present, dates and figures consistent, prohibited language absent. Anything questionable was flagged for the reviewer instead of buried in the text."
        },
        {
          step: "04",
          title: "Keeping a Person in Charge",
          description: "The underwriter or specialist reviewed each draft, made any changes and gave final approval. The AI never sent anything on its own; it did the drafting so people could focus their judgement where it mattered most."
        }
      ]}
      resultsTitle="Faster Paperwork, Same Standards"
      results={[
        {
          icon: Clock,
          value: "85%",
          label: "Less drafting time",
          detail: "Documents that took days now took minutes to draft"
        },
        {
          icon: Zap,
          value: "3x",
          label: "More documents handled",
          detail: "The same team cleared roughly three times the volume"
        },
        {
          icon: Target,
          value: "70%",
          label: "Less rework",
          detail: "Fewer errors reaching review meant far less redoing"
        },
        {
          icon: DollarSign,
          value: "$4M",
          label: "Saved each year",
          detail: "Across faster turnaround and reduced rework"
        }
      ]}
      quote="Our standards never moved — every document still gets read and approved by one of our people, and it still has to satisfy every rule we answer to. What changed is that our underwriters no longer spend their days typing. The AI writes the first draft from our own approved language, and they do what they are actually good at: reviewing it and making the call."
      quoteAuthor="Chief Underwriting Officer"
      quoteRole="Regional insurance carrier"
      relatedStudies={[
        {
          title: "Resolving service requests end to end with AI agents",
          metric: "60%",
          label: "resolved without a handoff",
          link: "/cases/agentic-ai-service-resolution",
          image: "/images/industries/fin-trader.jpg"
        },
        {
          title: "Coding claims accurately with a fine-tuned model",
          metric: "40%",
          label: "fewer denials",
          link: "/cases/custom-model-clinical-coding",
          image: "/case-medical-collaboration.9602cc8c.jpg"
        }
      ]}
      ctaTitle="Ready to give your people back their time?"
      ctaDescription="Let's talk about what letting AI draft your documents — with a person always in the loop — could be worth."
    />
  );
}
