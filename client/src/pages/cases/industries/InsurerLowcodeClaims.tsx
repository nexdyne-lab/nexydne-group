import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Clock, AlertTriangle, Target, DollarSign, Zap, CheckCircle, Shield } from "lucide-react";

export default function InsurerLowcodeClaims() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Insurer Cuts Claims Triage Time 64% With PowerApps | Low-Code Case Study"
      seoDescription="A regional insurer needed faster claims triage without replacing its core system. A targeted PowerApps build wrapped around the existing system delivered triage automation in 12 weeks and cut triage time 64%."
      canonical="/cases/insurer-lowcode-claims"
      industry="Insurance"
      industryLink="/industries/insurance"
      title="How a Regional Insurer Cut Claims Triage Time 64% Without Replacing Its Core System"
      subtitle="Faster triage seemed to require a core-system replacement the insurer could not take on. A targeted low-code app wrapped around the existing system delivered the gain in twelve weeks."
      heroImage="/images/cases/insurer-lowcode-claims-hero.jpg"
      metrics={[
        { value: "64%", label: "Faster Triage" },
        { value: "12 Wks", label: "To Delivery" },
        { value: "No", label: "Core Replacement" },
        { value: "PowerApps", label: "Build" }
      ]}
      clientContextTitle="A Slow Process, an Untouchable Core"
      clientContextIntro="A regional insurer's claims triage was slow — new claims sat in a manual queue before being classified and routed, delaying everything downstream. The obvious fix, modernizing the core claims system, was a multi-year, high-risk program the insurer was not ready to undertake."
      clientContextBody="The core system worked for what it did; the problem was the manual triage layer wrapped around it. But the assumption inside the organization was that improving triage meant touching the core, and no one wanted to open that box. That assumption had frozen the process in place. In reality, the triage gain could be captured by a focused low-code application that sat on top of the existing system — automating classification and routing — without disturbing the core at all. The insurer needed that targeted build delivered fast, to prove value without a risky replacement."
      clientProfile={{
        industry: "Regional Insurer",
        companySize: "~$470M Annual Revenue",
        projectDuration: "12 Weeks",
        additionalInfo: "PowerApps Triage Layer",
        additionalLabel: "Claims Operations"
      }}
      challengeTitle="Why Triage Stayed Slow"
      challenges={[
        { icon: Clock, title: "A Manual Triage Queue", description: "New claims waited to be classified and routed by hand, delaying everything downstream." },
        { icon: AlertTriangle, title: "A Feared Core Replacement", description: "The assumed fix — modernizing the core system — was a multi-year, high-risk program." },
        { icon: Target, title: "A Frozen Process", description: "The belief that improvement required touching the core kept triage stuck." },
        { icon: DollarSign, title: "No Appetite for Big Bets", description: "The insurer was not ready to take on a core-system program to fix one layer." }
      ]}
      approachTitle="Wrap the Core, Don't Replace It"
      approachIntro="We built a targeted PowerApps application wrapped around the existing core system that automated claims triage — delivering it in twelve weeks and cutting triage time 64 percent without a system replacement."
      steps={[
        { step: "01", title: "Isolating the Triage Layer", description: "We showed the gain lived in the manual triage layer, not the core, so it could be fixed without touching the core system." },
        { step: "02", title: "Building the PowerApps Layer", description: "We built a focused low-code app on top of the existing system to automate claim classification and routing." },
        { step: "03", title: "Delivering in Twelve Weeks", description: "We shipped the triage automation in twelve weeks, proving value fast without a multi-year program." },
        { step: "04", title: "Cutting Triage Time", description: "We drove triage time down 64 percent while leaving the core system entirely untouched." }
      ]}
      resultsTitle="A Fast Win Around the Core"
      results={[
        { icon: Zap, value: "64%", label: "Faster triage", detail: "Claims classified and routed" },
        { icon: CheckCircle, value: "12 Wks", label: "To delivery", detail: "Not a multi-year program" },
        { icon: Shield, value: "Untouched", label: "Core system", detail: "No risky replacement" },
        { icon: Target, value: "Targeted", label: "Low-code build", detail: "Wrapped around the existing system" }
      ]}
      quote="Everyone assumed making triage faster meant opening up our core claims system, and nobody wanted to touch it. It turned out we could get the whole gain from a focused app that sat on top of the core. Twelve weeks later, triage was sixty-four percent faster and the core system was exactly as we left it."
      quoteAuthor="VP of Claims"
      quoteRole="Regional insurer"
      relatedStudies={[
        { title: "How an Omnichannel Retailer Collapsed Three Editorial Pipelines Into One", metric: "80%", label: "faster publishing", link: "/cases/retailer-headless-omnichannel", image: "/images/cases/retailer-headless-omnichannel-hero.jpg" },
        { title: "How a Digital Publisher Halved Page Load Time With a Jamstack Rebuild", metric: "50%", label: "faster page loads", link: "/cases/publisher-headless-jamstack", image: "/images/cases/publisher-headless-jamstack-hero.jpg" }
      ]}
      ctaTitle="Do you need a fast win without a core replacement?"
      ctaDescription="Let's wrap your existing system with a targeted low-code app and capture the gain in weeks."
    />
  );
}
