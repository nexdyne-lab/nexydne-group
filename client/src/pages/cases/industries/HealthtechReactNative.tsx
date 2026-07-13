import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Users, Target, Zap, Clock, TrendingUp, CheckCircle } from "lucide-react";

export default function HealthtechReactNative() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Health-Tech Startup Scales 10K to 2M Users on One Codebase | App Development Case Study"
      seoDescription="A health-tech startup needed to ship to iOS and Android in lockstep through hypergrowth without a team per platform. A React Native architecture with modular feature flags carried it from 10K to 2M users."
      canonical="/cases/healthtech-react-native"
      industry="Healthcare"
      industryLink="/industries/healthcare"
      title="How a Health-Tech Startup Scaled From 10K to 2M Users on a Single Codebase"
      subtitle="Hypergrowth meant shipping to iOS and Android in perfect lockstep, and the startup could not afford a separate team for each. One React Native codebase let a single team keep pace."
      heroImage="/images/capabilities/cap-coder.jpg"
      metrics={[
        { value: "10K → 2M", label: "Users" },
        { value: "1", label: "Codebase" },
        { value: "Lockstep", label: "iOS & Android" },
        { value: "Feature Flags", label: "Modular Release" }
      ]}
      clientContextTitle="Two Platforms, One Small Team"
      clientContextIntro="A health-tech startup was growing fast, and its mobile app had to be excellent on both iOS and Android at once. But it was a startup — it could not staff two separate native teams, and any drift between the platforms would fracture the product experience just as adoption was exploding."
      clientContextBody="The tension was between speed and consistency. Building two native apps in parallel would have doubled the engineering and guaranteed that one platform always lagged the other on features and fixes. Yet the product could not compromise on quality on either platform. And the app had to keep evolving safely through hypergrowth, releasing new features to millions of users without regressions. The startup needed an architecture that let one team ship to both platforms in lockstep and control releases carefully as it scaled."
      clientProfile={{
        industry: "Health-Tech Startup",
        companySize: "Venture-Backed Scale-Up",
        projectDuration: "Ongoing Through Scale",
        additionalInfo: "iOS + Android",
        additionalLabel: "Mobile Platforms"
      }}
      challengeTitle="Why One Team Had to Ship Both"
      challenges={[
        { icon: Users, title: "No Budget for Two Teams", description: "As a startup, it could not staff separate native teams for iOS and Android." },
        { icon: Target, title: "Platform Drift Risk", description: "Any lag between the two platforms would fracture the product experience during peak growth." },
        { icon: Zap, title: "Shipping Through Hypergrowth", description: "New features had to reach millions of users without regressions." },
        { icon: Clock, title: "Speed and Quality at Once", description: "The product could not trade platform quality for delivery speed, or vice versa." }
      ]}
      approachTitle="One Codebase, Controlled Releases"
      approachIntro="We built the app on a React Native architecture with modular feature flags, so a single team shipped to iOS and Android in lockstep and controlled releases safely all the way from 10K to 2M users."
      steps={[
        { step: "01", title: "Architecting for Shared Code", description: "We built a React Native architecture that let one codebase deliver a high-quality native experience on both platforms." },
        { step: "02", title: "Modularizing the App", description: "We structured the app into modules so features could be built and shipped independently without destabilizing the whole." },
        { step: "03", title: "Controlling Release With Feature Flags", description: "We used feature flags to roll features out gradually and safely to a fast-growing user base, catching issues before full exposure." },
        { step: "04", title: "Scaling With One Team", description: "We kept a single team shipping to both platforms in lockstep as usage climbed from ten thousand to two million." }
      ]}
      resultsTitle="Lockstep Delivery at Scale"
      results={[
        { icon: TrendingUp, value: "2M", label: "Users", detail: "Up from 10K on one codebase" },
        { icon: CheckCircle, value: "1", label: "Codebase", detail: "iOS and Android in lockstep" },
        { icon: Zap, value: "Flags", label: "Safe releases", detail: "Gradual rollout through growth" },
        { icon: Users, value: "One", label: "Team", detail: "No per-platform staffing" }
      ]}
      quote="We were doubling users and could not double our engineering team, but the app had to be first-class on both iOS and Android. One React Native codebase, with feature flags to roll things out carefully, let a single team keep both platforms in lockstep all the way to two million users. We never fell behind on either one."
      quoteAuthor="VP of Engineering"
      quoteRole="Health-tech startup"
      relatedStudies={[
        { title: "How a Regional Bank Cut Its Mobile App Crash Rate by 71%", metric: "71%", label: "lower crash rate", link: "/cases/bank-app-modernization", image: "/images/industries/fin-monitors.jpg" },
        { title: "How a Health-Tech Scale-Up Reached 2M Users With One Mobile Team", metric: "2M", label: "users on one team", link: "/cases/healthtech-mobile-scale", image: "/case-healthcare-team.5797392b.jpg" }
      ]}
      ctaTitle="Need to ship to both platforms without two teams?"
      ctaDescription="Let's architect a single codebase that keeps iOS and Android in lockstep as you scale."
    />
  );
}
