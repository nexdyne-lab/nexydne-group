import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Target, TrendingDown, AlertTriangle, Clock, TrendingUp, Zap, BarChart3, CheckCircle } from "lucide-react";

export default function SaasAdjacentProductMvp() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Adjacent Product MVP Clears 1,200 Paying Accounts in Three Quarters | B2B SaaS Case Study"
      seoDescription="A vertical SaaS operator had killed the same adjacent-product idea twice. A narrower brief, a rebuilt opportunity case, and an instrumented MVP in 14 weeks reached 1,200 paying accounts and the portfolio's fastest growth."
      canonical="/cases/saas-adjacent-product-mvp"
      industry="B2B SaaS"
      industryLink="/industries/technology-media-telecom"
      title="How a Vertical SaaS Operator Finally Launched the Product It Had Killed Twice"
      subtitle="The idea for an adjacent product had died in planning two years running. Narrowing the job it needed to do, and shipping an instrumented MVP fast, turned it into the portfolio's fastest-growing line."
      heroImage="/images/capabilities/cap-coder.jpg"
      metrics={[
        { value: "1,200", label: "Paying Accounts" },
        { value: "3 Qtrs", label: "Post-Launch" },
        { value: "14 Wks", label: "To MVP" },
        { value: "#1", label: "Growth in Portfolio" }
      ]}
      clientContextTitle="The Idea That Kept Dying"
      clientContextIntro="A vertical SaaS operator had wanted to extend into an adjacent workflow for years, and had killed the same idea twice before it ever shipped. Each attempt had collapsed under its own scope — a broad, ambitious brief that could never be built or validated quickly enough to survive internal scrutiny."
      clientContextBody="The instinct each time had been to design the complete product, which made the opportunity case fragile and the build daunting. Nobody could prove the idea would work, so it was safer to shelve it — again. The operator did not need more conviction; it needed a narrower bet. If the brief could be drawn around a single, sharp job-to-be-done and shipped as an instrumented MVP, the market could answer the question that two planning cycles never could."
      clientProfile={{
        industry: "Vertical SaaS Operator",
        companySize: "Mid-Market SaaS",
        projectDuration: "6 Months",
        additionalInfo: "Adjacent-Workflow Extension",
        additionalLabel: "Growth Bet"
      }}
      challengeTitle="Why It Kept Getting Shelved"
      challenges={[
        { icon: Target, title: "A Brief Too Broad", description: "Each attempt scoped the complete product, making the build daunting and the opportunity case fragile." },
        { icon: TrendingDown, title: "Killed Twice Before", description: "The idea had collapsed under its own scope in two prior planning cycles." },
        { icon: AlertTriangle, title: "No Way to Prove It", description: "Without a shippable test, the idea could never survive internal scrutiny." },
        { icon: Clock, title: "Planning, Not Shipping", description: "The effort stayed stuck in design rather than reaching a market that could answer the question." }
      ]}
      approachTitle="Narrow the Bet, Ship to Learn"
      approachIntro="We rebuilt the opportunity case, redrew the brief around a narrower job-to-be-done, and shipped an instrumented MVP in fourteen weeks — letting the market validate what two planning cycles could not."
      steps={[
        { step: "01", title: "Rebuilding the Opportunity Case", description: "We reconstructed the business case around a realistic, evidence-based view of the adjacent opportunity rather than an ambitious one." },
        { step: "02", title: "Narrowing the Brief", description: "We redrew the product brief around a single sharp job-to-be-done, making the first version buildable and testable." },
        { step: "03", title: "Shipping an Instrumented MVP", description: "We shipped the MVP in fourteen weeks with instrumentation built in, so every signal from real users was captured." },
        { step: "04", title: "Letting the Market Decide", description: "We used live usage to validate and expand the line, which reached 1,200 paying accounts by the third quarter and led the portfolio in growth." }
      ]}
      resultsTitle="The Bet That Finally Paid"
      results={[
        { icon: TrendingUp, value: "1,200", label: "Paying accounts", detail: "By the third quarter post-launch" },
        { icon: Zap, value: "14 Wks", label: "To MVP", detail: "Instrumented and in market" },
        { icon: BarChart3, value: "#1", label: "Growth line", detail: "Largest growth percentage in the portfolio" },
        { icon: CheckCircle, value: "Validated", label: "By the market", detail: "Not by another planning cycle" }
      ]}
      quote="We had talked ourselves out of this product twice by trying to design the whole thing. Drawing the brief around one job and shipping it in fourteen weeks let the market tell us what our planning decks never could. It is now the fastest-growing line we have."
      quoteAuthor="Chief Product Officer"
      quoteRole="Vertical SaaS operator"
      relatedStudies={[
        { title: "How a Wealth Manager Saved Nine Months of Build by Validating in 90 Days", metric: "90 days", label: "to validate the product", link: "/cases/wealth-digital-advisory-mvp", image: "/images/cases/wealth-digital-advisory-mvp-hero.jpg" },
        { title: "How a Heritage Brand Launched a Thriving DTC Business Without Hurting Wholesale", metric: "Both", label: "channels grew in year one", link: "/cases/consumer-dtc-launch", image: "/images/cases/consumer-dtc-launch-hero.jpg" }
      ]}
      ctaTitle="Is a good product idea stuck in planning?"
      ctaDescription="Let's narrow the brief and ship an instrumented MVP that lets the market answer the question."
    />
  );
}
