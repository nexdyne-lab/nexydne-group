import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Target, Clock, AlertTriangle, BarChart3, Zap, CheckCircle } from "lucide-react";

export default function LogisticsCustomTms() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Logistics Provider Builds Custom TMS to Replace Three Legacy Tools | Custom Software Case Study"
      seoDescription="A national logistics provider ran on three siloed tools that didn't share data. A bespoke transportation management system consolidated them into one platform and cut load-planning time 58%."
      canonical="/cases/logistics-custom-tms"
      industry="Logistics"
      industryLink="/industries/transportation-logistics"
      title="How a Logistics Provider Replaced Three Legacy Tools With One Custom TMS"
      subtitle="Load planning meant juggling three disconnected tools and reconciling them by hand. A purpose-built transportation management system made it one workflow — and far faster."
      heroImage="/images/capabilities/cap-warehouse-robot.jpg"
      metrics={[
        { value: "58%", label: "Faster Load Planning" },
        { value: "3 → 1", label: "Tools Consolidated" },
        { value: "One", label: "Operating Platform" },
        { value: "Custom", label: "TMS Built" }
      ]}
      clientContextTitle="Three Tools That Didn't Talk"
      clientContextIntro="A national logistics provider ran its core operation across three separate legacy tools — one for orders, one for routing, one for fleet — that had never been designed to work together. Planners spent their days moving data between them by hand and reconciling the inevitable mismatches."
      clientContextBody="The fragmentation made load planning slow and error-prone. Because no tool held the whole picture, planners rekeyed information across systems, worked from data that was often stale, and could not optimize across the full operation. Off-the-shelf products did not fit the provider's specific network and rules, which is why it had ended up with three partial tools in the first place. It needed a bespoke transportation management system that consolidated orders, routing, and fleet into one operating platform built around how the business actually ran."
      clientProfile={{
        industry: "National Logistics Provider",
        companySize: "~1,200 Loads a Day",
        projectDuration: "9 Months",
        additionalInfo: "Custom TMS Build",
        additionalLabel: "Operating Platform"
      }}
      challengeTitle="Why Load Planning Was So Slow"
      challenges={[
        { icon: Target, title: "Three Siloed Tools", description: "Orders, routing, and fleet lived in separate systems never designed to work together." },
        { icon: Clock, title: "Manual Reconciliation", description: "Planners rekeyed data across tools and reconciled mismatches by hand." },
        { icon: AlertTriangle, title: "No Whole-Operation View", description: "No tool held the full picture, so planning could not optimize across the operation." },
        { icon: BarChart3, title: "Off-the-Shelf Didn't Fit", description: "Packaged products could not match the provider's specific network and rules." }
      ]}
      approachTitle="Build One Platform Around the Business"
      approachIntro="We built a bespoke transportation management system that consolidated the three siloed tools into one operating platform tailored to the provider's network — cutting load-planning time 58 percent."
      steps={[
        { step: "01", title: "Understanding the Operation", description: "We studied how the provider actually planned loads across orders, routing, and fleet to design a system around its real rules." },
        { step: "02", title: "Designing the Custom TMS", description: "We architected a transportation management system that unified the three functions into a single coherent workflow." },
        { step: "03", title: "Consolidating the Three Tools", description: "We replaced the siloed tools with the custom platform, ending the manual data-shuffling between them." },
        { step: "04", title: "Speeding Load Planning", description: "With one platform holding the whole picture, planners could optimize across the operation and cut planning time by 58 percent." }
      ]}
      resultsTitle="One Platform, Faster Planning"
      results={[
        { icon: Zap, value: "58%", label: "Faster planning", detail: "Load planning time cut" },
        { icon: CheckCircle, value: "3 → 1", label: "Tools", detail: "Consolidated into one TMS" },
        { icon: Target, value: "Whole", label: "Operation view", detail: "Optimize across the network" },
        { icon: BarChart3, value: "Custom", label: "Fit", detail: "Built around the real rules" }
      ]}
      quote="Our planners spent their days shuttling data between three tools that never agreed, and none of them saw the whole operation. A custom system built around how we actually plan loads pulled all three into one and cut our planning time by nearly sixty percent. Off-the-shelf never fit us — this finally does."
      quoteAuthor="VP of Operations"
      quoteRole="National logistics provider"
      relatedStudies={[
        { title: "How a Manufacturer Cleared an 18-Month IT Backlog by Building a Low-Code CoE", metric: "28", label: "apps shipped in 18 months", link: "/cases/mfg-lowcode-coe", image: "/images/cases/mfg-lowcode-coe-hero.jpg" },
        { title: "How a Regional Insurer Cut Claims Triage Time 64% Without Replacing Its Core System", metric: "64%", label: "faster claims triage", link: "/cases/insurer-lowcode-claims", image: "/images/cases/insurer-lowcode-claims-hero.jpg" }
      ]}
      ctaTitle="Are disconnected tools slowing your operation?"
      ctaDescription="Let's build one platform around how your business actually runs."
    />
  );
}
