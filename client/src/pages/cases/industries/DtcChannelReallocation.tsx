import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { DollarSign, TrendingDown, Target, Clock, TrendingUp, Zap, CheckCircle } from "lucide-react";

export default function DtcChannelReallocation() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Channel Reallocation Lifts New-Customer Margin 38% on Flat Budget | DTC Case Study"
      seoDescription="A DTC operator spent 70% of its acquisition budget on two channels past their efficient frontier. Rebuilding channel economics and reallocating to underfunded channels lifted new-customer contribution margin 38% on flat spend."
      canonical="/cases/dtc-channel-reallocation"
      industry="Direct-to-Consumer"
      industryLink="/industries/retail"
      title="How a DTC Operator Lifted New-Customer Margin 38% Without Spending a Dollar More"
      subtitle="Seventy percent of the acquisition budget sat in two channels that had stopped being efficient a year and a half ago. Moving money to channels with intact economics changed the math."
      heroImage="/images/capabilities/cap-retail-apparel.jpg"
      metrics={[
        { value: "38%", label: "Higher Contribution Margin" },
        { value: "Flat", label: "Total Spend" },
        { value: "<30 Days", label: "Payback" },
        { value: "70%", label: "Budget Concentrated" }
      ]}
      clientContextTitle="Overspending Two Tired Channels"
      clientContextIntro="A direct-to-consumer operator had 70 percent of its acquisition budget locked into two channels that had passed their efficient frontier eighteen months earlier. The channels still 'worked' in the sense that they produced customers — but each incremental dollar was buying them at steadily worse economics."
      clientContextBody="Budgets are sticky, and these two channels had inertia on their side: they were familiar, they were measurable, and they had once been the engine of growth. But the operator was pouring marginal spend into diminishing returns while two other channels with intact unit economics sat underfunded, starved of the budget that would have grown them profitably. The fix required no new money — only an honest model of channel economics and the discipline to move spend from where it no longer paid to where it did."
      clientProfile={{
        industry: "Direct-to-Consumer Operator",
        companySize: "~$310M Annual Revenue",
        projectDuration: "6 Months",
        additionalInfo: "Multi-Channel Acquisition",
        additionalLabel: "Growth Engine"
      }}
      challengeTitle="Why the Budget Was Misallocated"
      challenges={[
        { icon: DollarSign, title: "Money in Diminishing Returns", description: "Seventy percent of budget sat in two channels past their efficient frontier, buying customers at worsening economics." },
        { icon: TrendingDown, title: "Marginal Spend Underwater", description: "Each incremental dollar in the tired channels earned less than it cost." },
        { icon: Target, title: "Underfunded Efficient Channels", description: "Two channels with intact unit economics were starved of the budget that would grow them." },
        { icon: Clock, title: "Budget Inertia", description: "The familiar channels held their allocation through habit, not performance." }
      ]}
      approachTitle="Move the Money to Where It Pays"
      approachIntro="We rebuilt the channel-economics model, identified two underfunded channels with intact unit economics, and ran the reallocation across two quarters — lifting new-customer contribution margin 38 percent on flat total spend, with payback inside thirty days."
      steps={[
        { step: "01", title: "Rebuilding Channel Economics", description: "We built an honest model of contribution margin and payback by channel, exposing where marginal spend was underwater." },
        { step: "02", title: "Finding the Efficient Channels", description: "We identified two underfunded channels whose unit economics were still strong and could absorb more spend profitably." },
        { step: "03", title: "Reallocating Across Two Quarters", description: "We moved budget deliberately from the tired channels to the efficient ones over two quarters, avoiding disruption." },
        { step: "04", title: "Confirming Fast Payback", description: "We tracked the reallocated spend to a payback inside thirty days, proving the shift and building confidence to continue it." }
      ]}
      resultsTitle="Better Economics, Same Budget"
      results={[
        { icon: TrendingUp, value: "38%", label: "Higher margin", detail: "New-customer contribution margin" },
        { icon: DollarSign, value: "Flat", label: "Total spend", detail: "Reallocated, not increased" },
        { icon: Zap, value: "<30 Days", label: "Payback", detail: "On the reallocated spend" },
        { icon: CheckCircle, value: "2 Qtrs", label: "To reallocate", detail: "Deliberate, not disruptive" }
      ]}
      quote="Most of our budget was sitting in two channels that had stopped being efficient a year and a half earlier, purely out of habit. Rebuilding the economics and moving that money to channels that still paid lifted our new-customer margin by nearly forty percent — and we never asked for another dollar."
      quoteAuthor="VP of Growth Marketing"
      quoteRole="Direct-to-consumer operator"
      relatedStudies={[
        { title: "How a Growth-Stage SaaS Team Cut a Quarter of Its Wasted Spend by Fixing Attribution", metric: "24%", label: "less wasted spend", link: "/cases/saas-attribution-rebuild", image: "/images/industries/tech-datacenter.jpg" },
        { title: "How a Streaming Service Cut App Startup Time by 62% With a Native Rewrite", metric: "62%", label: "faster startup time", link: "/cases/streaming-native-rewrite", image: "/images/industries/tech-datacenter.jpg" }
      ]}
      ctaTitle="Is your budget stuck in channels that stopped paying?"
      ctaDescription="Let's rebuild your channel economics and move spend to where the returns still are."
    />
  );
}
