import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Target, AlertTriangle, TrendingDown, BarChart3, TrendingUp, CheckCircle, Zap } from "lucide-react";

export default function RetailEngagement() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Specialty Retailer Lifts Lifecycle Revenue 38% in Two Quarters | Digital Engagement Case Study"
      seoDescription="A specialty retailer's lifecycle marketing ran on static drips and broken automation. An end-to-end automation rebuild plus personalized lifecycle programs lifted lifecycle revenue 38% across email and SMS."
      canonical="/cases/retail-engagement"
      industry="Retail & E-commerce"
      industryLink="/industries/retail"
      title="How a Specialty Retailer Lifted Lifecycle Revenue 38% in Two Quarters"
      subtitle="Lifecycle marketing ran on static, one-size-fits-all drips and unreliable automation. Rebuilding the automation and personalizing the programs unlocked durable repeat-purchase behavior."
      heroImage="/images/cases/retail-engagement-hero.jpg"
      metrics={[
        { value: "38%", label: "Higher Lifecycle Revenue" },
        { value: "2 Qtrs", label: "To the Lift" },
        { value: "Email+SMS", label: "Rebuilt" },
        { value: "Durable", label: "Repeat Behavior" }
      ]}
      clientContextTitle="Lifecycle on Autopilot That Didn't Work"
      clientContextIntro="A specialty retailer ran its lifecycle marketing on static drip sequences — the same welcome series, the same post-purchase emails — sent to every customer regardless of behavior, on top of automation that broke often enough that the team no longer trusted it."
      clientContextBody="The result was a lifecycle program that ran but did not perform. Static drips ignored what each customer actually did, so the messages were often irrelevant, and the flaky automation meant sends fired late, twice, or not at all. Repeat-purchase behavior — the whole point of lifecycle marketing — was left largely to chance. The retailer needed two things: a reliable end-to-end automation foundation it could trust, and personalized lifecycle programs that responded to real customer behavior across email and SMS, so repeat purchasing became a durable habit rather than an accident."
      clientProfile={{
        industry: "Specialty Retailer",
        companySize: "~$430M Annual Revenue",
        projectDuration: "5 Months",
        additionalInfo: "Lifecycle Marketing Rebuild",
        additionalLabel: "Email + SMS"
      }}
      challengeTitle="Why Lifecycle Underperformed"
      challenges={[
        { icon: Target, title: "Static, One-Size Drips", description: "The same sequences went to every customer regardless of behavior." },
        { icon: AlertTriangle, title: "Unreliable Automation", description: "Flaky automation meant sends fired late, twice, or not at all, eroding trust." },
        { icon: TrendingDown, title: "Repeat Purchase Left to Chance", description: "The core goal of lifecycle marketing was largely unaddressed." },
        { icon: BarChart3, title: "No Behavioral Response", description: "Messages ignored what each customer actually did." }
      ]}
      approachTitle="Rebuild Automation, Personalize Lifecycle"
      approachIntro="We rebuilt the end-to-end automation and layered personalized lifecycle programs across email and SMS — unlocking durable repeat-purchase behavior and lifting lifecycle revenue 38 percent in two quarters."
      steps={[
        { step: "01", title: "Rebuilding the Automation Foundation", description: "We rebuilt the end-to-end automation so sends were reliable and the team could trust the system again." },
        { step: "02", title: "Personalizing the Lifecycle Programs", description: "We replaced static drips with programs that responded to real customer behavior at each lifecycle stage." },
        { step: "03", title: "Orchestrating Email and SMS", description: "We coordinated email and SMS so customers received relevant, well-timed messages across channels." },
        { step: "04", title: "Building Durable Repeat Behavior", description: "We drove repeat purchasing into a habit, lifting lifecycle revenue 38 percent within two quarters." }
      ]}
      resultsTitle="Repeat Purchasing Made a Habit"
      results={[
        { icon: TrendingUp, value: "38%", label: "Higher lifecycle revenue", detail: "In two quarters" },
        { icon: CheckCircle, value: "Reliable", label: "Automation", detail: "Sends the team can trust" },
        { icon: Target, value: "Personalized", label: "Programs", detail: "Responsive to behavior" },
        { icon: Zap, value: "Email+SMS", label: "Orchestrated", detail: "Relevant, well-timed" }
      ]}
      quote="Our lifecycle marketing sent everyone the same drips on automation we did not even trust, and repeat purchasing was basically luck. Rebuilding the automation so it actually worked, then personalizing the programs to what customers do, lifted our lifecycle revenue thirty-eight percent in two quarters. Repeat buying became a habit instead of an accident."
      quoteAuthor="Director of Lifecycle Marketing"
      quoteRole="Specialty retailer"
      relatedStudies={[
        { title: "How a B2B SaaS Company Cut Trial-to-Paid Lag by 44%", metric: "44%", label: "shorter trial-to-paid lag", link: "/cases/saas-onboarding", image: "/images/capabilities/cap-coder.jpg" },
        { title: "How a Growth-Stage SaaS Company Doubled Its Win Rate", metric: "18% → 37%", label: "win rate", link: "/cases/saas-meddicc-transformation", image: "/images/capabilities/cap-conference-data.jpg" }
      ]}
      ctaTitle="Is your lifecycle program running but not performing?"
      ctaDescription="Let's rebuild the automation and personalize the programs for durable repeat purchasing."
    />
  );
}
