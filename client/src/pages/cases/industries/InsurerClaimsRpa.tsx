import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Users, Clock, TrendingDown, Target, Zap, CheckCircle, BarChart3 } from "lucide-react";

export default function InsurerClaimsRpa() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Insurer Automates Claims Triage, Cuts Handle Time 68% | RPA Case Study"
      seoDescription="An insurer's adjusters spent their days on routine claim intake and routing. Forty-two unattended bots automated intake, classification, and routing, cutting handle time 68% and freeing adjusters for complex cases."
      canonical="/cases/insurer-claims-rpa"
      industry="Insurance"
      industryLink="/industries/insurance"
      title="How an Insurer Cut Claims Handle Time 68% With Unattended Bots"
      subtitle="Skilled adjusters were spending their days keying and routing routine claims instead of adjudicating the complex ones. A fleet of bots took over the repetitive intake work."
      heroImage="/images/cases/insurer-claims-rpa-hero.jpg"
      metrics={[
        { value: "68%", label: "Less Handle Time" },
        { value: "42", label: "Unattended Bots" },
        { value: "Intake+Routing", label: "Automated" },
        { value: "Freed", label: "Adjusters" }
      ]}
      clientContextTitle="Adjusters Doing Data Entry"
      clientContextIntro="An insurer's claims operation had skilled adjusters spending much of their day on repetitive, low-judgment work — taking in new claims, classifying them, and routing them to the right queue. The work that actually needed their expertise, adjudicating complex claims, waited behind all the routine handling."
      clientContextBody="The intake and routing steps were rules-based and repetitive, exactly the kind of work that consumes expensive expertise for no good reason. Because adjusters did it manually, handle time was long, throughput was capped by headcount, and the complex claims that drive cost and customer experience got less attention than they deserved. The insurer needed to automate the deterministic intake, classification, and routing so its adjusters could focus on the claims that genuinely required judgment — using a fleet of unattended bots to carry the repetitive load."
      clientProfile={{
        industry: "Insurance Carrier",
        companySize: "~$470M Annual Revenue",
        projectDuration: "6 Months",
        additionalInfo: "42 Unattended Bots",
        additionalLabel: "Claims Automation"
      }}
      challengeTitle="Why Skilled Adjusters Were Doing Routine Work"
      challenges={[
        { icon: Users, title: "Expertise on Repetitive Tasks", description: "Adjusters spent their days on intake, classification, and routing rather than adjudication." },
        { icon: Clock, title: "Long Handle Times", description: "Manual routine handling made claims slow to process." },
        { icon: TrendingDown, title: "Throughput Capped by Headcount", description: "Because people did the routine work, capacity was limited by headcount." },
        { icon: Target, title: "Complex Claims Underserved", description: "The claims that need judgment waited behind all the routine handling." }
      ]}
      approachTitle="Put Bots on the Routine Work"
      approachIntro="We deployed a fleet of forty-two unattended bots to process claim intake, classification, and routing — cutting handle time 68 percent and freeing adjusters for the complex cases that need them."
      steps={[
        { step: "01", title: "Identifying the Deterministic Work", description: "We isolated the rules-based intake, classification, and routing steps as ideal candidates for unattended automation." },
        { step: "02", title: "Building the Bot Fleet", description: "We deployed forty-two unattended bots to carry the repetitive intake and routing load reliably." },
        { step: "03", title: "Routing Complex Claims to People", description: "We designed the bots to handle the routine and pass genuinely complex claims to adjusters with full context." },
        { step: "04", title: "Freeing the Adjusters", description: "With the routine work automated, adjusters focused on adjudicating complex claims, and handle time fell 68 percent." }
      ]}
      resultsTitle="Adjusters on the Work That Matters"
      results={[
        { icon: Zap, value: "68%", label: "Less handle time", detail: "On claims processing" },
        { icon: CheckCircle, value: "42", label: "Bots", detail: "Carrying the routine load" },
        { icon: Users, value: "Freed", label: "Adjusters", detail: "For complex adjudication" },
        { icon: BarChart3, value: "Higher", label: "Throughput", detail: "No longer capped by headcount" }
      ]}
      quote="Our adjusters are experts in adjudicating difficult claims, and they were spending their days keying and routing simple ones. Handing that repetitive intake work to a fleet of bots cut our handle time by more than two-thirds and put our people back on the complex cases that actually need their judgment."
      quoteAuthor="VP of Claims"
      quoteRole="Insurance carrier"
      relatedStudies={[
        { title: "How a Provider Network Reclaimed 90,000 Hours a Year on Eligibility Checks", metric: "90,000", label: "hours reclaimed a year", link: "/cases/healthcare-eligibility-rpa", image: "/images/cases/healthcare-eligibility-rpa-hero.jpg" },
        { title: "How a Global Bank Captured $400M in Value by Reorganizing Around Customer Journeys", metric: "$400M", label: "in annual value", link: "/cases/bank-operating-model-transformation", image: "/images/industries/fin-monitors.jpg" }
      ]}
      ctaTitle="Are your experts stuck on repetitive work?"
      ctaDescription="Let's automate the routine with bots and free your people for the work that needs them."
    />
  );
}
