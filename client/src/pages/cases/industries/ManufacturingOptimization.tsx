import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Clock, BarChart3, Target, DollarSign, TrendingDown, CheckCircle } from "lucide-react";

export default function ManufacturingOptimization() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Reducing Production Cycle Time by 22% | Manufacturing Case Study"
      seoDescription="A manufacturer's production cycle time had crept up as changeovers, queue time, and unbalanced lines went unmeasured. Process discovery exposed the real losses; the redesign cut cycle time 22% without new equipment."
      canonical="/cases/manufacturing-optimization"
      industry="Manufacturing"
      industryLink="/industries/manufacturing"
      title="How a Manufacturer Cut Production Cycle Time by 22% Without New Equipment"
      subtitle="The line felt slow, and the instinct was to buy capacity. Discovering where time was actually lost — in changeovers, queues, and imbalance — showed the gains were already on the floor."
      heroImage="/images/capabilities/cap-robot-factory.jpg"
      metrics={[
        { value: "22%", label: "Faster Cycle Time" },
        { value: "0", label: "New Equipment" },
        { value: "Discovery", label: "Losses Made Visible" },
        { value: "Balanced", label: "Line Rebalanced" }
      ]}
      clientContextTitle="Slow Line, Expensive Instinct"
      clientContextIntro="A manufacturer's production cycle time had crept upward over several years, and the reflex response was gathering momentum: buy more equipment to add capacity. Before committing that capital, leadership wanted to know where the time was actually going — because the line felt slow, but no one had measured why."
      clientContextBody="The losses were hiding in plain sight and going unmeasured. Changeovers took longer than anyone tracked, work-in-progress queued between stations without visibility, and the line was unbalanced so faster stations sat idle waiting on slower ones. None of this showed up in a capacity number; it only showed up when the process was discovered and measured station by station. The manufacturer needed the real drivers of cycle time surfaced before it spent money solving a problem it had not diagnosed."
      clientProfile={{
        industry: "Discrete Manufacturer",
        companySize: "~$390M Annual Revenue",
        projectDuration: "5 Months",
        additionalInfo: "Single-Site Production Line",
        additionalLabel: "Operating Scope"
      }}
      challengeTitle="Why the Line Was Really Slow"
      challenges={[
        { icon: Clock, title: "Unmeasured Changeovers", description: "Changeovers ran longer than anyone tracked, quietly consuming available production time." },
        { icon: BarChart3, title: "Invisible Queue Time", description: "Work-in-progress waited between stations with no visibility into how much time it cost." },
        { icon: Target, title: "An Unbalanced Line", description: "Faster stations sat idle waiting on slower ones, so throughput was capped by imbalance, not capacity." },
        { icon: DollarSign, title: "The Wrong Instinct to Spend", description: "The reflex to buy equipment risked capital on a problem no one had actually diagnosed." }
      ]}
      approachTitle="Discover the Losses, Then Redesign"
      approachIntro="We used process discovery to make the real losses visible — changeover time, queue time, and line imbalance — then redesigned the flow to cut cycle time 22 percent without buying any new equipment."
      steps={[
        { step: "01", title: "Discovering the Process", description: "We measured the line station by station, surfacing the changeover, queue, and imbalance losses that the capacity number had hidden." },
        { step: "02", title: "Attacking Changeover Time", description: "We reduced changeover duration with structured methods, reclaiming production time that had been silently lost." },
        { step: "03", title: "Rebalancing the Line", description: "We rebalanced work across stations so faster ones stopped waiting on slower ones, lifting throughput without new machines." },
        { step: "04", title: "Cutting Queue Time", description: "We reduced work-in-progress waiting between stations, tightening flow and shrinking end-to-end cycle time." }
      ]}
      resultsTitle="Gains That Were Already on the Floor"
      results={[
        { icon: TrendingDown, value: "22%", label: "Faster cycle time", detail: "Without new equipment" },
        { icon: DollarSign, value: "$0", label: "New capital", detail: "Gains from flow, not capacity" },
        { icon: Target, value: "Balanced", label: "Line", detail: "Stations no longer waiting on each other" },
        { icon: CheckCircle, value: "Visible", label: "Losses", detail: "Changeover and queue time surfaced" }
      ]}
      quote="We were about to spend serious money on more equipment for a line we had never actually measured. When we discovered where the time really went — changeovers, queues, stations waiting on each other — we cut cycle time by more than a fifth without buying a single machine. The capacity was there the whole time."
      quoteAuthor="Plant Manager"
      quoteRole="Discrete manufacturer"
      relatedStudies={[
        { title: "How a Financial-Services Firm Eliminated 98% of Its Compliance Deviations", metric: "98%", label: "fewer compliance deviations", link: "/cases/financial-services-compliance", image: "/images/industries/fin-monitors.jpg" },
        { title: "How a Commercial Lender Made Its Underwriting Decisions More Consistent — Without Automating Them Away", metric: "32%", label: "more consistent approvals", link: "/cases/commercial-lending-decision-support", image: "/images/industries/fin-monitors.jpg" }
      ]}
      ctaTitle="About to buy capacity you might already have?"
      ctaDescription="Let's discover where your cycle time really goes before you spend on equipment."
    />
  );
}
