import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Target, Clock, TrendingDown, Users, CheckCircle, BarChart3 } from "lucide-react";

export default function FinancialServicesInsightRedesign() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Insight Redesign Cuts Executive Review Time 38% | Customer Insights Case Study"
      seoDescription="A consumer financial-services CMO inherited a 92-page monthly insight pack nobody read. Rebuilding the function around six decision-anchored questions and a one-page monthly artifact cut review time 38% and shifted six decisions a quarter."
      canonical="/cases/financial-services-insight-redesign"
      industry="Consumer Financial Services"
      industryLink="/industries/financial-services"
      title="How a Consumer-Finance CMO Turned a 92-Page Pack Nobody Read Into Six Decisions a Quarter"
      subtitle="The monthly insight pack ran to 92 pages and nobody read it end to end. Rebuilding the function around six decisions, not a deck, made insight something executives actually used."
      heroImage="/images/cases/financial-services-insight-redesign-hero.jpg"
      metrics={[
        { value: "38%", label: "Less Review Time" },
        { value: "92 → 1", label: "Pages" },
        { value: "6", label: "Decisions / Quarter" },
        { value: "Decision", label: "Anchored" }
      ]}
      clientContextTitle="A 92-Page Pack Nobody Read"
      clientContextIntro="A consumer financial-services CMO inherited a monthly insight function whose flagship output was a ninety-two-page pack. It was comprehensive, meticulously produced, and read end-to-end by essentially no one — a monument to activity that informed almost no actual decisions."
      clientContextBody="The pack was the problem. It answered every question the analysts could think of rather than the few questions the executives needed to decide, and its sheer length guaranteed that busy leaders skimmed it and moved on. The insight team was working hard and producing volume, but the volume itself buried the signal. The CMO wanted the function rebuilt not around a deck but around decisions — a small set of the questions the leadership team actually needed answered, delivered in a form they would genuinely use."
      clientProfile={{
        industry: "Consumer Financial-Services Firm",
        companySize: "~$400M Annual Revenue",
        projectDuration: "4 Months",
        additionalInfo: "Insight Function Redesign",
        additionalLabel: "Executive Reporting"
      }}
      challengeTitle="Why the Pack Went Unread"
      challenges={[
        { icon: Target, title: "Answering Everything, Deciding Nothing", description: "The pack covered every question analysts could think of, not the few executives needed to decide." },
        { icon: Clock, title: "Ninety-Two Pages", description: "Its length guaranteed leaders skimmed it and moved on." },
        { icon: TrendingDown, title: "Volume Burying Signal", description: "Hard-working analysts produced volume that drowned out the insight that mattered." },
        { icon: Users, title: "No Decisions Informed", description: "For all the effort, the pack informed almost no actual decisions." }
      ]}
      approachTitle="Anchor Insight to Decisions"
      approachIntro="We threw out the deck and rebuilt the function around six decision-anchored questions, a one-page narrative-led monthly artifact, and a recurring quality review — cutting executive review time 38 percent and shifting six decisions per quarter."
      steps={[
        { step: "01", title: "Finding the Decisions That Matter", description: "We worked with the leadership team to identify the six recurring questions their decisions actually hinged on." },
        { step: "02", title: "Building a One-Page Artifact", description: "We replaced the ninety-two-page pack with a one-page, narrative-led monthly artifact answering those six questions." },
        { step: "03", title: "Instituting a Quality Review", description: "We stood up a recurring review to keep the artifact sharp and genuinely decision-relevant over time." },
        { step: "04", title: "Measuring the Decisions", description: "We tracked the outcome, and the senior team self-reported six new decisions per quarter directly informed by the new format." }
      ]}
      resultsTitle="Insight Executives Actually Use"
      results={[
        { icon: TrendingDown, value: "38%", label: "Less review time", detail: "For the executive team" },
        { icon: CheckCircle, value: "92 → 1", label: "Pages", detail: "A one-page monthly artifact" },
        { icon: Target, value: "6", label: "Decisions / quarter", detail: "Directly informed by the format" },
        { icon: BarChart3, value: "Anchored", label: "To decisions", detail: "Not to a comprehensive deck" }
      ]}
      quote="I inherited a ninety-two-page insight pack that was a masterpiece of effort and completely unread. Rebuilding it around the six questions we actually make decisions on — on a single page — cut our review time by nearly forty percent and, for the first time, the insight team's work is showing up in real decisions. Less turned out to be far more."
      quoteAuthor="Chief Marketing Officer"
      quoteRole="Consumer financial-services firm"
      relatedStudies={[
        { title: "How a Retailer Recovered 14 Weeks of Analyst Time by Fixing Its Insight Cadence", metric: "3x", label: "higher brief engagement", link: "/cases/retail-insight-cadence", image: "/images/cases/retail-insight-cadence-hero.jpg" },
        { title: "How a National Retailer Drove a 34% Revenue Lift With AI Personalization", metric: "34%", label: "revenue lift", link: "/cases/retail-personalization", image: "/images/capabilities/cap-retail-apparel.jpg" }
      ]}
      ctaTitle="Does your insight function produce packs nobody reads?"
      ctaDescription="Let's rebuild it around the decisions your leaders actually make."
    />
  );
}
