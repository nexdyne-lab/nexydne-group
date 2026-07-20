import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Clock, Shield, TrendingUp, Users, Zap } from "lucide-react";

export default function FinancialFraudDetection() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Catching Card Fraud Before the Money Moves | Financial Services Case Study"
      seoDescription="A regional bank was finding card fraud a full day after the money had already gone. Checking every transaction the moment it happened cut fraud losses by 73%."
      canonical="/cases/financial-fraud-detection"
      industry="Financial Services"
      industryLink="/industries/financial-services"
      title="How a Regional Bank Cut Card Fraud Losses by 73%"
      subtitle="A regional bank was discovering fraud a full day after the money had already moved. Checking every transaction the instant it happened turned a losing chase into a fair fight."
      heroImage="/images/industries/fin-monitors.jpg"
      metrics={[
        { value: "73%", label: "Lower Fraud Losses" },
        { value: "85%", label: "Fewer False Alarms" },
        { value: "<100ms", label: "Time to Decide" },
        { value: "$12M", label: "Saved Each Year" }
      ]}
      clientContextTitle="Finding Fraud a Day After the Money Was Gone"
      clientContextIntro="A regional bank ran the card payments for a large base of local businesses and consumers. Its defense against fraud worked in overnight batches: transactions were gathered up and examined together the next morning, which meant a fraudulent charge was typically caught twelve to twenty-four hours after it had already cleared. By then the money had moved and the loss was, in most cases, simply written off."
      clientContextBody="The team's alerts were driven by fixed rules, and roughly four out of five turned out to be false alarms — busy work that consumed analysts while genuine fraud, which rarely fit an old rule neatly, slipped past. The costs pulled in two directions at once. Honest customers had good purchases declined and grew frustrated, while the bank absorbed around $15 million a year in fraud losses on top of the expense of chasing thousands of alerts that led nowhere. Leadership recognized the real problem was timing: the bank was always looking at yesterday's fraud with yesterday's tools."
      clientProfile={{
        industry: "Regional Bank",
        companySize: "~$6B in Assets",
        projectDuration: "14 Months",
        additionalInfo: "Card Payments",
        additionalLabel: "Line of Business"
      }}
      challengeTitle="Why the Bank Kept Losing the Chase"
      challenges={[
        {
          icon: Clock,
          title: "Always a Day Too Late",
          description: "Overnight batch checks meant fraud was found twelve to twenty-four hours after the charge cleared — long after any chance to stop it."
        },
        {
          icon: Shield,
          title: "Buried in False Alarms",
          description: "About 80% of alerts were false, swamping analysts and steadily eroding their trust in the system that raised them."
        },
        {
          icon: TrendingUp,
          title: "Losses That Kept Climbing",
          description: "Around $15 million a year went to fraud, on top of the cost of investigating thousands of alerts that led nowhere."
        },
        {
          icon: Users,
          title: "Good Customers Turned Away",
          description: "Legitimate purchases were declined for lack of context, leaving loyal customers frustrated and questioning the bank."
        }
      ]}
      approachTitle="Checking Every Transaction the Moment It Happens"
      approachIntro="Working with the bank's risk and technology teams, we moved fraud checking from the morning after to the instant of the purchase — examining each transaction in the fraction of a second before it is approved, with enough context to tell a genuine customer from a fraudster."
      steps={[
        {
          step: "01",
          title: "Watching Transactions as They Happen",
          description: "Instead of collecting transactions for an overnight run, we began examining each one the moment it arrived — the same live view a fraudster has, so the bank was no longer reacting to a picture that was already hours old."
        },
        {
          step: "02",
          title: "Judging Each Purchase in Context",
          description: "For every transaction we assembled the signals that reveal fraud — how fast a card was being used, whether the location made sense, how the amount compared with the customer's normal spending — so a decision rested on the full picture, not a single rigid rule."
        },
        {
          step: "03",
          title: "Learning What Fraud Actually Looks Like",
          description: "Rather than hand-written rules, we used models trained on the bank's own history of confirmed fraud, refreshed daily so they kept pace with new tactics instead of falling a step behind them."
        },
        {
          step: "04",
          title: "Deciding in Under a Tenth of a Second",
          description: "Clear-cut fraud was declined automatically before the money could move, obvious good purchases sailed through, and only the genuinely uncertain cases reached an analyst — all inside the split second a customer waits at the terminal."
        }
      ]}
      resultsTitle="A Fair Fight, at Last"
      results={[
        {
          icon: Shield,
          value: "73%",
          label: "Lower fraud losses",
          detail: "Around $12M in fraud stopped before the money moved"
        },
        {
          icon: TrendingUp,
          value: "85%",
          label: "Fewer false alarms",
          detail: "More good purchases approved, fewer customers turned away"
        },
        {
          icon: Zap,
          value: "<100ms",
          label: "Time to decide",
          detail: "A fraud judgment in the blink of an eye, at the point of sale"
        },
        {
          icon: Users,
          value: "70%",
          label: "Less manual review",
          detail: "Analysts freed to focus on organized, sophisticated fraud"
        }
      ]}
      quote="We used to find our fraud the next morning, when the money was already gone and there was nothing to do but write it off. Now we catch it in the split second before the charge goes through. Our analysts have stopped firefighting false alarms and our customers have stopped being turned away for no reason. Same team, same customers — we simply stopped fighting yesterday's fraud with yesterday's tools."
      quoteAuthor="Head of Fraud Risk"
      quoteRole="Regional bank"
      relatedStudies={[
        {
          title: "Turning One Product Per Customer into Lasting Relationships",
          metric: "$24M",
          label: "in new revenue",
          link: "/cases/bank-cross-sell",
          image: "/images/cases/bank-cross-sell-hero.jpg"
        },
        {
          title: "Cutting Wealth Onboarding from Weeks to Days",
          metric: "60%",
          label: "faster onboarding",
          link: "/cases/wealth-onboarding",
          image: "/images/cases/wealth-onboarding-hero.jpg"
        }
      ]}
      ctaTitle="Ready to catch fraud before the money moves?"
      ctaDescription="Let's talk about checking every transaction the moment it happens, not the morning after."
    />
  );
}
