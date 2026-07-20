import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Clock, Users, AlertTriangle, Shield, TrendingUp, CheckCircle } from "lucide-react";

export default function MfgLowcodeCoe() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Manufacturer Ships 28 OutSystems Apps in 18 Months | Low-Code Case Study"
      seoDescription="An industrial manufacturer had an 18-month IT backlog. A low-code center of excellence plus a citizen-developer cohort cleared it and shipped 28 production apps in the same window."
      canonical="/cases/mfg-lowcode-coe"
      industry="Manufacturing"
      industryLink="/industries/manufacturing"
      title="How a Manufacturer Cleared an 18-Month IT Backlog by Building a Low-Code CoE"
      subtitle="IT could not keep up, and a long queue of needed apps kept growing. A low-code center of excellence and trained citizen developers turned the backlog into 28 shipped apps."
      heroImage="/images/cases/mfg-lowcode-coe-hero.jpg"
      metrics={[
        { value: "28", label: "Apps Shipped" },
        { value: "18 Mo", label: "Backlog Cleared" },
        { value: "CoE", label: "Established" },
        { value: "Citizen", label: "Developers Enabled" }
      ]}
      clientContextTitle="A Backlog IT Couldn't Clear"
      clientContextIntro="An industrial manufacturer had an IT backlog stretching eighteen months. Dozens of needed operational applications — for the shop floor, quality, logistics — sat in a queue behind a central IT team that could not possibly build them all, and the business worked around the gaps with spreadsheets and manual processes."
      clientContextBody="Traditional development could not close a gap that size fast enough, and the business users who understood the needs best had no way to build anything themselves. But simply letting people build apps freely would have created an ungoverned sprawl of unmaintainable tools. The manufacturer needed a low-code center of excellence: a governed platform and operating model that let a trained cohort of citizen developers build production applications safely, multiplying delivery capacity without sacrificing control."
      clientProfile={{
        industry: "Industrial Manufacturer",
        companySize: "~$540M Annual Revenue",
        projectDuration: "18 Months",
        additionalInfo: "Low-Code CoE + Citizen Devs",
        additionalLabel: "Delivery Model"
      }}
      challengeTitle="Why the Backlog Kept Growing"
      challenges={[
        { icon: Clock, title: "An 18-Month Queue", description: "Dozens of needed apps sat behind a central IT team that could not build them all." },
        { icon: Users, title: "Business Users Sidelined", description: "The people who understood the needs best had no way to build anything themselves." },
        { icon: AlertTriangle, title: "Workaround Sprawl", description: "The business filled the gaps with spreadsheets and manual processes." },
        { icon: Shield, title: "Ungoverned Risk", description: "Letting people build freely would create unmaintainable tool sprawl." }
      ]}
      approachTitle="Stand Up a Governed Low-Code CoE"
      approachIntro="We established a low-code center of excellence on OutSystems and trained a citizen-developer cohort, clearing the eighteen-month backlog by shipping 28 production apps in the same window."
      steps={[
        { step: "01", title: "Establishing the CoE", description: "We built a center of excellence with the platform, standards, and governance to make citizen development safe and repeatable." },
        { step: "02", title: "Training Citizen Developers", description: "We trained a cohort of business-side developers to build production apps within the CoE's guardrails." },
        { step: "03", title: "Prioritizing the Backlog", description: "We sequenced the eighteen-month backlog by value so the highest-impact apps shipped first." },
        { step: "04", title: "Shipping 28 Apps", description: "We delivered twenty-eight governed production applications in the same window the backlog had been growing." }
      ]}
      resultsTitle="Backlog Cleared, Capacity Multiplied"
      results={[
        { icon: TrendingUp, value: "28", label: "Apps shipped", detail: "Production, in 18 months" },
        { icon: CheckCircle, value: "Cleared", label: "Backlog", detail: "The 18-month queue" },
        { icon: Users, value: "Citizen", label: "Developers", detail: "Building within guardrails" },
        { icon: Shield, value: "Governed", label: "CoE", detail: "Safe, maintainable delivery" }
      ]}
      quote="We had an eighteen-month backlog of apps our operation genuinely needed, and IT could not build fast enough. Standing up a low-code CoE and training our own people to build within guardrails turned that backlog into twenty-eight shipped applications. We multiplied our delivery capacity without losing control of what got built."
      quoteAuthor="Chief Information Officer"
      quoteRole="Industrial manufacturer"
      relatedStudies={[
        { title: "How a Regional Insurer Cut Claims Triage Time 64% Without Replacing Its Core System", metric: "64%", label: "faster claims triage", link: "/cases/insurer-lowcode-claims", image: "/images/cases/insurer-lowcode-claims-hero.jpg" },
        { title: "How an Omnichannel Retailer Collapsed Three Editorial Pipelines Into One", metric: "80%", label: "faster publishing", link: "/cases/retailer-headless-omnichannel", image: "/images/cases/retailer-headless-omnichannel-hero.jpg" }
      ]}
      ctaTitle="Is an IT backlog holding your operation back?"
      ctaDescription="Let's build a governed low-code CoE that safely multiplies your delivery capacity."
    />
  );
}
