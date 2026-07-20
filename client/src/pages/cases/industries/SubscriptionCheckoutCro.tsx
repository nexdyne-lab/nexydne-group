import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Target, BarChart3, AlertTriangle, Clock, TrendingUp, CheckCircle } from "lucide-react";

export default function SubscriptionCheckoutCro() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Funnel Rebuild Lifts Checkout Conversion 28% | Subscription Commerce Case Study"
      seoDescription="A subscription operator's CRO program had produced no significant wins in nine months. Rebuilding the diagnostic, the hypothesis library, and the test infrastructure lifted checkout conversion 28% across desktop and mobile."
      canonical="/cases/subscription-checkout-cro"
      industry="Subscription Commerce"
      industryLink="/industries/retail"
      title="How a Subscription Commerce Operator Turned a Stalled CRO Program Into a 28% Conversion Lift"
      subtitle="Nine months of testing had produced not one significant win. The problem was not the team's effort — it was a diagnostic, a hypothesis backlog, and a test setup that could not find truth."
      heroImage="/images/capabilities/cap-retail-data.jpg"
      metrics={[
        { value: "28%", label: "Higher Checkout Conversion" },
        { value: "9 Mo", label: "Of Prior Zero Wins" },
        { value: "2 Qtrs", label: "To the Lift" },
        { value: "Both", label: "Desktop & Mobile" }
      ]}
      clientContextTitle="Testing Hard, Learning Nothing"
      clientContextIntro="A subscription commerce operator had a conversion-rate-optimization program that looked busy and produced nothing. Over nine months of continuous testing, not a single experiment had reached statistical significance. The team was working; the program was not."
      clientContextBody="Three things were quietly broken. The diagnostic that was supposed to point tests at real friction was thin, so hypotheses came from opinion rather than evidence. The hypothesis backlog was a long, unprioritized wish-list with no anchor in segment behavior. And the test infrastructure had no discipline around minimum detectable effect, so experiments were underpowered and their results were noise. The operator did not need more tests; it needed a program engineered to actually detect a win when one existed."
      clientProfile={{
        industry: "Subscription Commerce Operator",
        companySize: "Mid-Market",
        projectDuration: "6 Months",
        additionalInfo: "Desktop & Mobile Checkout",
        additionalLabel: "Conversion Surface"
      }}
      challengeTitle="Why Nine Months Produced No Wins"
      challenges={[
        { icon: Target, title: "A Thin Diagnostic", description: "The program lacked a rigorous read on where the funnel actually leaked, so tests chased opinion instead of evidence." },
        { icon: BarChart3, title: "An Unprioritized Backlog", description: "The hypothesis library was a long wish-list with no anchoring in segment data or expected impact." },
        { icon: AlertTriangle, title: "Underpowered Tests", description: "No discipline around minimum detectable effect meant experiments were too weak to detect real change." },
        { icon: Clock, title: "Nine Months of Noise", description: "The result was continuous activity with zero statistically significant wins to show for it." }
      ]}
      approachTitle="Re-Engineer the Program to Find Truth"
      approachIntro="We rebuilt the diagnostic, replaced the hypothesis library with a prioritized version anchored in segment data, and re-engineered the test infrastructure around minimum-detectable-effect rigor — so the program could finally detect wins where they existed."
      steps={[
        { step: "01", title: "Rebuilding the Diagnostic", description: "We produced a rigorous read of where the funnel leaked by segment, giving the program an evidence base instead of a hunch list." },
        { step: "02", title: "Prioritizing the Hypotheses", description: "We replaced the wish-list with a prioritized hypothesis library anchored in segment behavior and expected impact, so the biggest bets ran first." },
        { step: "03", title: "Fixing the Test Infrastructure", description: "We re-engineered the experimentation setup around minimum-detectable-effect rigor, ensuring every test was powered to detect a real result." },
        { step: "04", title: "Running the Program With Discipline", description: "We operated the rebuilt program with proper sequencing and readouts, and within two quarters it was delivering significant wins." }
      ]}
      resultsTitle="A Program That Wins"
      results={[
        { icon: TrendingUp, value: "28%", label: "Higher conversion", detail: "Checkout, desktop and mobile combined" },
        { icon: CheckCircle, value: "2 Qtrs", label: "To the lift", detail: "After nine months of zero wins" },
        { icon: BarChart3, value: "Powered", label: "Tests", detail: "Minimum-detectable-effect rigor" },
        { icon: Target, value: "Prioritized", label: "Backlog", detail: "Anchored in segment data" }
      ]}
      quote="We had a whole team running tests every week and could not point to a single real win in nine months. It turned out we were measuring noise. Once the diagnostic, the backlog, and the test setup were rebuilt to actually detect a result, conversion jumped twenty-eight percent — with the same people who had been stuck."
      quoteAuthor="VP of Growth"
      quoteRole="Subscription commerce operator"
      relatedStudies={[
        { title: "How a Digital Lender Added 1,400 Funded Accounts a Month Without Spending More on Traffic", metric: "1,400", label: "more funded accounts a month", link: "/cases/lender-application-funnel-cro", image: "/images/industries/fin-monitors.jpg" },
        { title: "How a Vertical SaaS Operator Finally Launched the Product It Had Killed Twice", metric: "1,200", label: "paying accounts in 3 quarters", link: "/cases/saas-adjacent-product-mvp", image: "/images/capabilities/cap-coder.jpg" }
      ]}
      ctaTitle="Is your CRO program busy but not winning?"
      ctaDescription="Let's re-engineer the diagnostic, backlog, and test setup so your program finds the wins that are there."
    />
  );
}
