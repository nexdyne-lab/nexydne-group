import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { AlertTriangle, Target, TrendingDown, Users, CheckCircle, Zap } from "lucide-react";

export default function BankMobileModernization() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Regional Bank Cuts Mobile Crash Rate 71% After Modernization | Mobile Apps Case Study"
      seoDescription="A regional bank's six-year-old hybrid mobile app was unstable. Migrating to native Swift and Kotlin cut the crash rate 71% and unlocked the feature roadmap."
      canonical="/cases/bank-mobile-modernization"
      industry="Financial Services"
      industryLink="/industries/financial-services"
      title="How a Regional Bank Modernized Its Mobile App and Cut Crashes 71%"
      subtitle="Six years of hybrid patchwork had left the mobile app unstable and hard to change. A native migration restored the reliability customers expect from their bank."
      heroImage="/images/industries/fin-trader.jpg"
      metrics={[
        { value: "71%", label: "Lower Crash Rate" },
        { value: "Native", label: "Migration" },
        { value: "Feature", label: "Roadmap Unlocked" },
        { value: "6-Yr", label: "Codebase Retired" }
      ]}
      clientContextTitle="A Legacy App at Its Limit"
      clientContextIntro="A regional bank's mobile app had been built six years earlier on a hybrid framework and had steadily degraded. It crashed too often for a product customers use to manage their money, and the codebase had grown so tangled that the mobile team dreaded every release."
      clientContextBody="The hybrid foundation had reached the end of its useful life. Its abstraction layers made the app slow and crash-prone, and its accumulated complexity meant that adding a feature could destabilize the whole app. The mobile roadmap had effectively stalled because every change was too risky. For a bank, that is a serious problem: the app is the primary way many customers interact, and it has to be dependable. The bank needed to migrate off the hybrid codebase to native Swift and Kotlin to reclaim stability and momentum."
      clientProfile={{
        industry: "Regional Bank",
        companySize: "~$430M Annual Revenue",
        projectDuration: "7 Months",
        additionalInfo: "Hybrid-to-Native Migration",
        additionalLabel: "Mobile Banking"
      }}
      challengeTitle="Why the App Had to Be Rebuilt"
      challenges={[
        { icon: AlertTriangle, title: "Too Many Crashes", description: "The app crashed too often for a product customers use to manage money." },
        { icon: Target, title: "A Tangled Codebase", description: "Six years of hybrid complexity made every release risky." },
        { icon: TrendingDown, title: "A Stalled Roadmap", description: "Change had become so dangerous that the mobile roadmap effectively stopped." },
        { icon: Users, title: "A Dependability Gap", description: "As the primary customer channel, the app had to be reliable and was not." }
      ]}
      approachTitle="Migrate to Native, Reclaim Momentum"
      approachIntro="We migrated the six-year-old hybrid codebase to native Swift and Kotlin, cutting the crash rate 71 percent and unlocking the feature roadmap that had stalled."
      steps={[
        { step: "01", title: "Assessing the Legacy App", description: "We evaluated the hybrid codebase to confirm migration, not patching, was the right path and to plan a safe transition." },
        { step: "02", title: "Migrating to Native", description: "We rebuilt the app on native Swift and Kotlin, eliminating the hybrid abstraction that caused the instability." },
        { step: "03", title: "Cutting the Crash Rate", description: "We drove crashes down 71 percent, restoring the dependability customers expect from their bank." },
        { step: "04", title: "Restarting the Roadmap", description: "With a clean native foundation, the mobile team could ship features again without risking the whole app." }
      ]}
      resultsTitle="Stability and Momentum Restored"
      results={[
        { icon: TrendingDown, value: "71%", label: "Lower crashes", detail: "After migration to native" },
        { icon: CheckCircle, value: "Native", label: "Foundation", detail: "Swift and Kotlin" },
        { icon: Zap, value: "Moving", label: "Roadmap", detail: "Features ship safely again" },
        { icon: Users, value: "Dependable", label: "For customers", detail: "The primary banking channel" }
      ]}
      quote="Six years of hybrid patchwork had left our app crashing and our roadmap frozen — we were scared to ship anything. Migrating to native cut crashes by more than seventy percent and got us moving again. For most of our customers, the app is the bank, so it simply has to be dependable."
      quoteAuthor="VP of Digital Channels"
      quoteRole="Regional bank"
      relatedStudies={[
        { title: "How a Specialty Insurer Replaced a 22-Year-Old Policy System Without an Outage", metric: "Zero", label: "business-impacting outages", link: "/cases/insurer-policy-strangler", image: "/images/cases/insurer-policy-strangler-hero.jpg" },
        { title: "How a Logistics Provider Replaced Three Legacy Tools With One Custom TMS", metric: "58%", label: "faster load planning", link: "/cases/logistics-custom-tms", image: "/images/capabilities/cap-warehouse-robot.jpg" }
      ]}
      ctaTitle="Has a legacy mobile codebase stalled your roadmap?"
      ctaDescription="Let's migrate to native, restore stability, and get your releases moving again."
    />
  );
}
