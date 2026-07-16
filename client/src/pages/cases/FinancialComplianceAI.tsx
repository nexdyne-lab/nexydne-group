import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { BellOff, DollarSign, ShieldCheck, Globe, MessageSquare, FileSearch } from "lucide-react";

export default function FinancialComplianceAI() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Automating Regulatory Compliance with Fine-Tuned LLMs | Financial Services Case Study"
      seoDescription="A multinational bank was drowning in false-positive alerts. Fine-tuned LLMs cut them 60%, lowered compliance costs 40%, and reached 100% coverage of employee communications."
      canonical="/case-studies/financial-compliance-automation"
      industry="Financial Services"
      industryLink="/industries/financial-services"
      title="How a Global Bank Automated Regulatory Compliance with Fine-Tuned LLMs"
      subtitle="Custom language models analyzed millions of transactions and communications — cutting false positives 60% and ensuring adherence to evolving regulations across jurisdictions."
      heroImage="/images/industries/fin-monitors.jpg"
      metrics={[
        { value: "60%", label: "Fewer False Positives" },
        { value: "40%", label: "Lower Compliance Costs" },
        { value: "100%", label: "Communications Coverage" }
      ]}
      clientContextTitle="Buried in Alerts, Blind in the Gaps"
      clientContextIntro="A multinational bank was struggling to keep up with regulatory requirements across jurisdictions. Its rule-based monitoring generated thousands of false-positive alerts daily, overwhelming compliance teams — while monitoring employee communications for misconduct remained a manual, sampling-based process that left significant gaps in coverage."
      clientContextBody="The bank needed a more intelligent, scalable solution — one that could understand the nuance of financial regulations and human communication to surface genuine risks without drowning analysts in noise. Its existing tools did the opposite: too much noise on transactions, too little coverage on communications."
      clientProfile={{
        industry: "Multinational Bank",
        companySize: "Global, Multi-Jurisdiction",
        projectDuration: "Enterprise Deployment",
        additionalInfo: "Fine-Tuned LLMs",
        additionalLabel: "Compliance Engine"
      }}
      challengeTitle="Why Compliance Couldn't Scale"
      challenges={[
        {
          icon: BellOff,
          title: "A flood of false positives",
          description: "Rule-based systems generated thousands of false alerts a day, burying analysts and hiding the genuine risks among the noise."
        },
        {
          icon: MessageSquare,
          title: "Sampling-based communication review",
          description: "Monitoring employee communications was manual and sample-based, leaving large gaps where misconduct could go undetected."
        },
        {
          icon: Globe,
          title: "Rules that couldn't keep up",
          description: "Regulations shifted constantly across jurisdictions, and keyword-based rules missed context, nuance, and slang."
        },
        {
          icon: FileSearch,
          title: "Manual case handling",
          description: "Analysts spent their time clearing routine, low-risk cases by hand instead of investigating real financial crime."
        }
      ]}
      approachTitle="An LLM That Understands Compliance"
      approachIntro="NEXDYNE fine-tuned open-source large language models on the bank's historical data and specific regulatory frameworks to create a specialized compliance engine — one that understood context, not just keywords."
      steps={[
        {
          step: "01",
          title: "Read communications for real risk",
          description: "The model analyzed emails, chats, and voice transcripts to detect subtle signs of collusion, market manipulation, or bribery — catching context and slang keyword filters missed."
        },
        {
          step: "02",
          title: "Keep pace with the rulebook",
          description: "The system automatically ingested new regulatory documents from global bodies, summarized the changes, and flagged internal policies that needed updating."
        },
        {
          step: "03",
          title: "Clear the routine, escalate the rest",
          description: "The AI reviewed onboarding documents and transaction histories, automatically clearing low-risk cases and preparing detailed dossiers for high-risk ones."
        },
        {
          step: "04",
          title: "Remove the hay, not just find the needle",
          description: "By raising the signal-to-noise ratio, the engine let analysts focus on investigating genuine crimes instead of clearing false alarms."
        }
      ]}
      resultsTitle="The Payoff"
      results={[
        {
          icon: BellOff,
          value: "60%",
          label: "Fewer false-positive alerts",
          detail: "Analysts focused on genuine risks"
        },
        {
          icon: DollarSign,
          value: "40%",
          label: "Lower compliance costs",
          detail: "By automating routine review tasks"
        },
        {
          icon: ShieldCheck,
          value: "100%",
          label: "Communications coverage",
          detail: "Eliminating the sampling gaps that created exposure"
        }
      ]}
      quote="The AI doesn't just find more needles in the haystack; it removes the hay. Our analysts can now focus on investigating real financial crimes instead of clearing false alarms."
      quoteAuthor="Global Head of Compliance"
      quoteRole="Multinational Bank"
      relatedStudies={[
        {
          title: "Modeling Climate Risk to Protect Insurance Portfolios",
          metric: "15%",
          label: "better loss ratio",
          link: "/case-studies/insurance-climate-risk",
          image: "/case-insurance-office.f039a4a1.jpg"
        },
        {
          title: "Automating Content Creation with GenAI",
          metric: "70%",
          label: "faster post-production",
          link: "/case-studies/media-content-production",
          image: "/images/industries/tech-datacenter.jpg"
        }
      ]}
      ctaTitle="Ready to cut the noise and close the gaps?"
      ctaDescription="Let's talk about what a purpose-built compliance model could do for your risk coverage."
    />
  );
}
