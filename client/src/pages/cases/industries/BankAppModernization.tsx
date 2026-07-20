import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { AlertTriangle, Target, Users, Clock, TrendingDown, CheckCircle, Zap } from "lucide-react";

export default function BankAppModernization() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Regional Bank Cuts Mobile App Crash Rate 71% | App Development Case Study"
      seoDescription="A regional bank's six-year-old hybrid mobile app was unstable and slow to change. Modernizing to native Swift and Kotlin cut the crash rate 71% and unlocked feature velocity."
      canonical="/cases/bank-app-modernization"
      industry="Financial Services"
      industryLink="/industries/financial-services"
      title="How a Regional Bank Cut Its Mobile App Crash Rate by 71%"
      subtitle="A six-year-old hybrid codebase had become unstable and nearly impossible to add features to. A modernization to native Swift and Kotlin restored reliability and unblocked the roadmap."
      heroImage="/images/industries/fin-monitors.jpg"
      metrics={[
        { value: "71%", label: "Lower Crash Rate" },
        { value: "Native", label: "Swift & Kotlin" },
        { value: "Unblocked", label: "Feature Roadmap" },
        { value: "Stable", label: "For Customers" }
      ]}
      clientContextTitle="An App Customers Had Stopped Trusting"
      clientContextIntro="A regional bank's mobile app, built six years earlier as a hybrid to save time, had aged badly. Crashes were frequent enough that customers complained and app-store ratings suffered, and the aging codebase had become so fragile that shipping a new feature risked breaking existing ones."
      clientContextBody="The hybrid architecture that once accelerated delivery now blocked it. Layers of abstraction between the app and the device made the app unstable and slow, and every fix or feature was a gamble against regressions. For a bank, an unreliable app is a trust problem — customers checking balances or moving money need it to just work. The bank had reached the point where patching the hybrid app cost more than modernizing it. It needed a rebuild on native Swift and Kotlin to restore stability and let the roadmap move again."
      clientProfile={{
        industry: "Regional Bank",
        companySize: "~$430M Annual Revenue",
        projectDuration: "7 Months",
        additionalInfo: "iOS + Android Modernization",
        additionalLabel: "Mobile Banking"
      }}
      challengeTitle="Why the Hybrid App Was Failing"
      challenges={[
        { icon: AlertTriangle, title: "Frequent Crashes", description: "The aging hybrid app crashed often enough to draw complaints and hurt app-store ratings." },
        { icon: Target, title: "A Fragile Codebase", description: "Shipping a feature risked breaking existing ones, stalling the roadmap." },
        { icon: Users, title: "A Trust Problem", description: "For a bank, an unreliable app undermines the trust customers place in it with their money." },
        { icon: Clock, title: "Patching Cost More Than Rebuilding", description: "Maintaining the hybrid app had become more expensive than modernizing it." }
      ]}
      approachTitle="Rebuild Native for Stability"
      approachIntro="We modernized the six-year-old hybrid codebase to native Swift and Kotlin, restoring stability — cutting the crash rate 71 percent — and unlocking the feature velocity the roadmap needed."
      steps={[
        { step: "01", title: "Diagnosing the Instability", description: "We traced the crashes and fragility to the hybrid architecture's abstraction layers between app and device." },
        { step: "02", title: "Rebuilding in Native Swift and Kotlin", description: "We modernized the app to native code on both platforms, close to the device, for reliability and performance." },
        { step: "03", title: "Restoring Stability", description: "We drove the crash rate down 71 percent, giving customers an app that simply works when they need it." },
        { step: "04", title: "Unblocking the Roadmap", description: "With a maintainable native codebase, new features could ship without gambling against regressions." }
      ]}
      resultsTitle="A Bank App That Just Works"
      results={[
        { icon: TrendingDown, value: "71%", label: "Lower crashes", detail: "After the native rebuild" },
        { icon: CheckCircle, value: "Native", label: "Swift & Kotlin", detail: "Stable and performant" },
        { icon: Zap, value: "Unblocked", label: "Roadmap", detail: "Features ship without regressions" },
        { icon: Users, value: "Restored", label: "Trust", detail: "Reliable when customers need it" }
      ]}
      quote="Our app crashed often enough that customers noticed, and the old hybrid code was so fragile we were afraid to touch it. Rebuilding it natively cut the crash rate by more than seventy percent and, just as important, let us start shipping features again without breaking what already worked. For a bank, an app that just works is not optional."
      quoteAuthor="Head of Digital Banking"
      quoteRole="Regional bank"
      relatedStudies={[
        { title: "How a Health-Tech Scale-Up Reached 2M Users With One Mobile Team", metric: "2M", label: "users on one team", link: "/cases/healthtech-mobile-scale", image: "/images/cases/healthtech-mobile-scale-hero.jpg" },
        { title: "How a Regional Bank Modernized Its Mobile App and Cut Crashes 71%", metric: "71%", label: "lower crash rate", link: "/cases/bank-mobile-modernization", image: "/images/industries/fin-trader.jpg" }
      ]}
      ctaTitle="Is an aging hybrid app costing you stability and speed?"
      ctaDescription="Let's modernize to native and restore both reliability and feature velocity."
    />
  );
}
