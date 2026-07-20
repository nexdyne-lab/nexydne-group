import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { TrendingDown, Target, AlertTriangle, Clock, TrendingUp, DollarSign, CheckCircle } from "lucide-react";

export default function LenderApplicationFunnelCro() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Application Funnel Optimization Adds 1,400 Funded Accounts a Month | Lending Case Study"
      seoDescription="A digital lender was converting traffic well below benchmark. A diagnostic, eight prioritized hypotheses, and a biweekly test cadence added 1,400 funded accounts a month on flat acquisition spend."
      canonical="/cases/lender-application-funnel-cro"
      industry="Financial Services"
      industryLink="/industries/financial-services"
      title="How a Digital Lender Added 1,400 Funded Accounts a Month Without Spending More on Traffic"
      subtitle="The lender was good at buying traffic and poor at converting it. Working the application funnel with a disciplined test program turned the same visitors into far more funded accounts."
      heroImage="/images/industries/fin-monitors.jpg"
      metrics={[
        { value: "1,400", label: "More Funded Accounts / Mo" },
        { value: "Flat", label: "Acquisition Spend" },
        { value: "8", label: "Hypotheses Prioritized" },
        { value: "Biweekly", label: "Test Cadence" }
      ]}
      clientContextTitle="Buying Traffic, Losing Applicants"
      clientContextIntro="A digital lender had a healthy top of funnel and a leaky middle. It acquired traffic efficiently, but converted that traffic into funded accounts at a rate well below industry benchmark — meaning it was paying to attract applicants and then losing them inside its own application flow."
      clientContextBody="Every point of conversion left on the table was expensive, because the acquisition cost had already been paid. The application funnel was long and friction-heavy, but the team had no rigorous read on which steps were doing the damage, and no disciplined program to fix them. Improving conversion, not buying more traffic, was the cheapest growth available — the lender just needed a diagnostic to find the leaks and a cadence to close them."
      clientProfile={{
        industry: "Digital Lender",
        companySize: "Mid-Market",
        projectDuration: "6 Months",
        additionalInfo: "Online Application Funnel",
        additionalLabel: "Growth Surface"
      }}
      challengeTitle="Why Traffic Wasn't Becoming Accounts"
      challenges={[
        { icon: TrendingDown, title: "Below-Benchmark Conversion", description: "Traffic converted to funded accounts well under industry norms, wasting already-paid acquisition cost." },
        { icon: Target, title: "No Read on the Leaks", description: "The team could not say which application steps were losing applicants." },
        { icon: AlertTriangle, title: "A Friction-Heavy Funnel", description: "The long application flow carried avoidable friction at multiple points." },
        { icon: Clock, title: "No Testing Cadence", description: "There was no disciplined program to systematically identify and close the leaks." }
      ]}
      approachTitle="Diagnose the Funnel, Then Work It"
      approachIntro="We ran the diagnostic, prioritized eight hypotheses against the application funnel, and operated the program at a biweekly test cadence — turning conversion into the lender's cheapest growth lever."
      steps={[
        { step: "01", title: "Diagnosing the Application Funnel", description: "We measured the funnel step by step to locate exactly where applicants dropped, replacing guesswork with an evidence base." },
        { step: "02", title: "Prioritizing Eight Hypotheses", description: "We built and ranked eight hypotheses against the biggest leaks, so the highest-impact fixes ran first." },
        { step: "03", title: "Running a Biweekly Cadence", description: "We operated the program at a steady biweekly test cadence, compounding wins rather than running one-off experiments." },
        { step: "04", title: "Compounding the Funnel Lift", description: "Six months of accumulated wins produced 1,400 additional funded accounts per month on unchanged acquisition spend." }
      ]}
      resultsTitle="More Accounts From the Same Spend"
      results={[
        { icon: TrendingUp, value: "1,400", label: "More funded accounts", detail: "Per month, six months in" },
        { icon: DollarSign, value: "Flat", label: "Acquisition spend", detail: "Growth from conversion, not traffic" },
        { icon: Target, value: "8", label: "Hypotheses", detail: "Prioritized against the funnel" },
        { icon: CheckCircle, value: "Biweekly", label: "Cadence", detail: "Compounding wins over two quarters" }
      ]}
      quote="We were pouring money into traffic and quietly losing those people inside our own application. Fixing the funnel was the cheapest growth we had — fourteen hundred more funded accounts a month, and we did not spend an extra dollar acquiring them."
      quoteAuthor="Head of Growth"
      quoteRole="Digital lender"
      relatedStudies={[
        { title: "How a Vertical SaaS Operator Finally Launched the Product It Had Killed Twice", metric: "1,200", label: "paying accounts in 3 quarters", link: "/cases/saas-adjacent-product-mvp", image: "/images/capabilities/cap-coder.jpg" },
        { title: "How a Wealth Manager Saved Nine Months of Build by Validating in 90 Days", metric: "90 days", label: "to validate the product", link: "/cases/wealth-digital-advisory-mvp", image: "/images/cases/wealth-digital-advisory-mvp-hero.jpg" }
      ]}
      ctaTitle="Losing applicants inside your own funnel?"
      ctaDescription="Let's diagnose the leaks and work them on a cadence — conversion is usually the cheapest growth you have."
    />
  );
}
