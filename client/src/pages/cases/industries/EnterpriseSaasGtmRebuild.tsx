import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Target, Clock, DollarSign, AlertTriangle, TrendingUp, BarChart3, Users } from "lucide-react";

export default function EnterpriseSaasGtmRebuild() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="GTM Rebuild Lifts Win Rate 14 Points on the Focus Segment | Enterprise SaaS Case Study"
      seoDescription="An enterprise SaaS operator sold to every inbound and watched its sales cycle stretch. Rebuilding the ICP, retiring three unprofitable segments, and refocusing the motion lifted win rate 14 points with flat headcount."
      canonical="/cases/enterprise-saas-gtm-rebuild"
      industry="Enterprise SaaS"
      industryLink="/industries/technology-media-telecom"
      title="How an Enterprise SaaS Operator Lifted Win Rate 14 Points by Selling to Fewer Segments"
      subtitle="The team chased every inbound, and the sales cycle stretched with each quarter. Choosing which segments to win — and which to walk away from — turned focus into a higher win rate and more pipeline."
      heroImage="/images/capabilities/cap-conference-data.jpg"
      metrics={[
        { value: "+14 pts", label: "Win Rate, Focus Segment" },
        { value: "3", label: "Segments Retired" },
        { value: "Up", label: "Total Pipeline Value" },
        { value: "Flat", label: "Team Headcount" }
      ]}
      clientContextTitle="Chasing Everyone, Winning Slower"
      clientContextIntro="An enterprise SaaS operator was selling to every inbound that walked through the door. It felt like discipline — no opportunity left behind — but the effect was the opposite: a sales team stretched across incompatible buyer types, a cycle that lengthened every quarter, and a win rate dragged down by deals it was never well positioned to close."
      clientContextBody="The absence of focus was the problem. Some segments the team pursued had win rates below the cost of pursuing them, quietly consuming capacity that the winnable segments needed. Because everyone chased everything, the go-to-market motion was a compromise that fit no segment well. The operator did not need more leads or more reps; it needed to decide who it was actually built to win, retire the segments that did not pay, and re-engineer the motion around the ones that did."
      clientProfile={{
        industry: "Enterprise SaaS Operator",
        companySize: "1,500+ Enterprise Customers",
        projectDuration: "6 Months",
        additionalInfo: "Multi-Segment Sales Motion",
        additionalLabel: "GTM Model"
      }}
      challengeTitle="Why Selling to Everyone Backfired"
      challenges={[
        { icon: Target, title: "No Real ICP", description: "The team pursued every inbound, spreading itself across incompatible buyer types." },
        { icon: Clock, title: "A Stretching Sales Cycle", description: "The cycle lengthened every quarter as reps worked deals they were poorly positioned to win." },
        { icon: DollarSign, title: "Segments Below Cost-of-Pursuit", description: "Some segments had win rates lower than the cost of chasing them, draining capacity." },
        { icon: AlertTriangle, title: "A Compromise Motion", description: "Serving everyone meant a go-to-market motion that fit no segment well." }
      ]}
      approachTitle="Choose Who to Win, Retire the Rest"
      approachIntro="We rebuilt the ICP against the data, retired three segments where win rate was below cost-of-pursuit, and re-engineered the motion against the prioritized two — lifting focus-segment win rate 14 points while total pipeline value grew on flat headcount."
      steps={[
        { step: "01", title: "Rebuilding the ICP From Data", description: "We reconstructed the ideal-customer profile from actual win/loss and economics data, not from who happened to inbound." },
        { step: "02", title: "Retiring Three Unprofitable Segments", description: "We stopped pursuing three segments whose win rate fell below the cost of chasing them, reclaiming capacity for winnable deals." },
        { step: "03", title: "Re-Engineering the Motion", description: "We rebuilt the go-to-market motion around the prioritized two segments, so messaging, process, and effort finally fit the buyer." },
        { step: "04", title: "Redeploying Freed Capacity", description: "We aimed the reclaimed capacity at the focus segments, lifting win rate and growing total pipeline without adding headcount." }
      ]}
      resultsTitle="Focus That Compounds"
      results={[
        { icon: TrendingUp, value: "+14 pts", label: "Win rate", detail: "On the prioritized focus segment" },
        { icon: Target, value: "3", label: "Segments retired", detail: "Below cost-of-pursuit" },
        { icon: BarChart3, value: "Up", label: "Pipeline value", detail: "Total pipeline grew, not shrank" },
        { icon: Users, value: "Flat", label: "Headcount", detail: "More output from the same team" }
      ]}
      quote="We thought chasing every deal was discipline. It was the opposite — we were losing slowly, everywhere. Deciding who we were actually built to win, walking away from the segments that never paid, and rebuilding the motion around the rest lifted our win rate fourteen points and grew pipeline, with the same team."
      quoteAuthor="Chief Revenue Officer"
      quoteRole="Enterprise SaaS operator"
      relatedStudies={[
        { title: "How an Industrial Technology Leader Stopped Leaking Deals at the Sales Handoff", metric: "31%", label: "less handoff leakage", link: "/cases/industrial-tech-gtm-alignment", image: "/images/industries/mfg-robot-arm.jpg" },
        { title: "How a DTC Operator Lifted New-Customer Margin 38% Without Spending a Dollar More", metric: "38%", label: "higher contribution margin", link: "/cases/dtc-channel-reallocation", image: "/images/cases/dtc-channel-reallocation-hero.jpg" }
      ]}
      ctaTitle="Is chasing every deal stretching your team thin?"
      ctaDescription="Let's rebuild the ICP, retire what doesn't pay, and refocus the motion on the segments you win."
    />
  );
}
