import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Target, TrendingDown, BarChart3, Users, TrendingUp, CheckCircle, Zap } from "lucide-react";

export default function SaasVocRoadmapReorder() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="VoC-Driven Roadmap Reorder Lifts Expansion Revenue 19% | B2B SaaS Case Study"
      seoDescription="A B2B SaaS roadmap was set by sales requests and competitor checklists. A voice-of-customer program surfaced two buried priorities; reordering the roadmap lifted product-led expansion revenue 19%."
      canonical="/cases/saas-voc-roadmap-reorder"
      industry="B2B SaaS"
      industryLink="/industries/technology-media-telecom"
      title="How a B2B SaaS Provider Reordered Its Roadmap and Lifted Expansion Revenue 19%"
      subtitle="The product roadmap was being written by whoever asked loudest — sales, and competitor feature lists. A structured voice-of-customer program surfaced two priorities the roadmap had buried at position seven."
      heroImage="/images/capabilities/cap-conference-data.jpg"
      metrics={[
        { value: "19%", label: "More Expansion Revenue" },
        { value: "7→1", label: "Buried Priority Moved Up" },
        { value: "3", label: "VoC Inputs Combined" },
        { value: "2 Qtrs", label: "To Ship" }
      ]}
      clientContextTitle="A Roadmap Set by Whoever Asked Loudest"
      clientContextIntro="A B2B SaaS provider was building its product roadmap the way many do under pressure — from inbound sales requests and competitor feature checklists. Each input felt urgent and defensible in the moment, and together they produced a roadmap that reflected who lobbied hardest rather than what customers valued most."
      clientContextBody="The cost was subtle but real. Because the roadmap chased individual deals and competitor parity, the features most likely to deepen adoption and drive expansion in the existing base kept getting pushed down the list. There was no systematic read on what customers as a whole actually needed, so genuinely high-value work sat at position seven while lower-value parity features shipped first. Product leadership suspected the sequencing was wrong but had no evidence base strong enough to overrule the loudest voices in the room."
      clientProfile={{
        industry: "B2B SaaS Provider",
        companySize: "~$240M ARR",
        projectDuration: "5 Months",
        additionalInfo: "Product-Led Expansion Motion",
        additionalLabel: "Growth Model"
      }}
      challengeTitle="Why the Roadmap Was in the Wrong Order"
      challenges={[
        { icon: Target, title: "Driven by the Loudest Inputs", description: "Sales requests and competitor checklists set the roadmap, reflecting who lobbied hardest rather than aggregate customer value." },
        { icon: TrendingDown, title: "High-Value Work Buried", description: "Features most likely to drive expansion kept getting pushed down in favor of individual deals and parity items." },
        { icon: BarChart3, title: "No Systematic Customer Read", description: "There was no structured way to hear what the customer base as a whole actually needed." },
        { icon: Users, title: "Evidence Too Weak to Reprioritize", description: "Product leadership suspected the order was wrong but lacked the evidence to overrule the room." }
      ]}
      approachTitle="Let the Customer Base Set the Order"
      approachIntro="We stood up a voice-of-customer program combining in-product feedback, support-theme analysis, and cohort interviews, and the synthesis surfaced two priorities the existing roadmap had buried at position seven — evidence strong enough to reorder the plan."
      steps={[
        { step: "01", title: "Combining Three VoC Inputs", description: "We built the program on three complementary sources — in-product feedback, support-theme analysis, and cohort interviews — so no single loud voice could dominate the read." },
        { step: "02", title: "Synthesizing What the Base Needed", description: "We synthesized the inputs into a clear, evidence-backed picture of what customers as a whole valued most, independent of who was asking." },
        { step: "03", title: "Reordering With Evidence", description: "The synthesis surfaced two buried priorities and gave product leadership the evidence to move them up over parity features that had been shipping first." },
        { step: "04", title: "Shipping and Measuring Expansion", description: "The reprioritized features shipped within two quarters, and we tracked their effect on product-led expansion revenue against forecast." }
      ]}
      resultsTitle="The Right Features, in the Right Order"
      results={[
        { icon: TrendingUp, value: "19%", label: "More expansion revenue", detail: "Product-led expansion against forecast" },
        { icon: Target, value: "7→1", label: "Priority moved up", detail: "Two buried priorities surfaced by VoC" },
        { icon: CheckCircle, value: "3", label: "VoC inputs", detail: "Feedback, support themes, cohort interviews" },
        { icon: Zap, value: "2 Qtrs", label: "To ship", detail: "From reorder to released features" }
      ]}
      quote="Our roadmap had become a record of who complained most convincingly. Building a real voice-of-customer program let us hear the whole base instead of the loudest few, and it surfaced two things we had buried at number seven. We moved them up, shipped them, and expansion revenue told us the customers had been right all along."
      quoteAuthor="VP of Product"
      quoteRole="B2B SaaS provider"
      relatedStudies={[
        { title: "How a Specialty Retailer Lifted Product-Page Revenue per Session by 23%", metric: "23%", label: "more PDP revenue per session", link: "/cases/retail-pdp-recommender", image: "/images/cases/retail-pdp-recommender-hero.jpg" },
        { title: "How a Streaming Operator Gave New Releases a Fair Shot at Their Audience", metric: "17%", label: "higher week-one engagement", link: "/cases/streaming-hybrid-recommender", image: "/images/industries/tech-datacenter.jpg" }
      ]}
      ctaTitle="Is your roadmap set by evidence or by whoever asks loudest?"
      ctaDescription="Let's stand up a voice-of-customer program that surfaces what your whole base actually values."
    />
  );
}
