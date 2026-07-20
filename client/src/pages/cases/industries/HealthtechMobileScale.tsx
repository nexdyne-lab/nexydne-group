import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Users, Target, Zap, Clock, TrendingUp, CheckCircle } from "lucide-react";

export default function HealthtechMobileScale() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Health-Tech Scale-Up Hits 2M Users on One React Native Codebase | Mobile Apps Case Study"
      seoDescription="A health-tech scale-up needed to ship to iOS and Android in lockstep through hypergrowth. Modular architecture and feature-flag discipline let one team reach 2M users without a separate team per platform."
      canonical="/cases/healthtech-mobile-scale"
      industry="Healthcare"
      industryLink="/industries/healthcare"
      title="How a Health-Tech Scale-Up Reached 2M Users With One Mobile Team"
      subtitle="Explosive growth demanded iOS and Android move together, but a scale-up cannot run two mobile teams. Modular architecture and feature-flag discipline let one team carry the whole load."
      heroImage="/images/cases/healthtech-mobile-scale-hero.jpg"
      metrics={[
        { value: "2M", label: "Users Reached" },
        { value: "1", label: "Mobile Team" },
        { value: "Modular", label: "Architecture" },
        { value: "Disciplined", label: "Feature Flags" }
      ]}
      clientContextTitle="Growth Faster Than the Team Could Scale"
      clientContextIntro="A health-tech scale-up was adding users faster than it could add engineers. Its mobile app had to stay excellent on both iOS and Android through that surge, but staffing a full team per platform was neither affordable nor fast enough to keep up with the growth."
      clientContextBody="Running two native teams would have meant coordination overhead, divergent roadmaps, and one platform perpetually trailing the other — exactly the fragmentation a scale-up in hypergrowth cannot absorb. At the same time, shipping quickly to millions of users demanded real release discipline, because a bad release now reached a very large audience. The scale-up needed a modular architecture that let one team maintain both platforms coherently and a feature-flag practice rigorous enough to release fast without breaking things at scale."
      clientProfile={{
        industry: "Health-Tech Scale-Up",
        companySize: "High-Growth Company",
        projectDuration: "Ongoing Through Scale",
        additionalInfo: "iOS + Android",
        additionalLabel: "Mobile Platforms"
      }}
      challengeTitle="Why Two Teams Wasn't an Option"
      challenges={[
        { icon: Users, title: "Users Outpacing Hiring", description: "Growth was faster than the company could add mobile engineers." },
        { icon: Target, title: "Divergence Risk", description: "Two native teams would drift, leaving one platform always behind." },
        { icon: Zap, title: "Fast Releases at Scale", description: "A bad release now reached a very large audience, demanding real discipline." },
        { icon: Clock, title: "Coordination Overhead", description: "Parallel teams would add coordination cost a scale-up could not spare." }
      ]}
      approachTitle="Modular Architecture, Disciplined Releases"
      approachIntro="We built a modular React Native architecture and instilled feature-flag discipline, so a single team could ship to iOS and Android in lockstep and scale safely to 2M users."
      steps={[
        { step: "01", title: "Structuring for Modularity", description: "We architected the app in modules so one team could develop and maintain features across both platforms coherently." },
        { step: "02", title: "Keeping Platforms in Lockstep", description: "We designed the shared codebase so iOS and Android never diverged on features or fixes." },
        { step: "03", title: "Instilling Feature-Flag Discipline", description: "We built a rigorous feature-flag practice to release quickly and roll back instantly, protecting a large user base." },
        { step: "04", title: "Scaling to 2M", description: "We carried the app through hypergrowth to two million users on one team, without platform lag." }
      ]}
      resultsTitle="One Team, Two Platforms, Millions of Users"
      results={[
        { icon: TrendingUp, value: "2M", label: "Users", detail: "Reached during hypergrowth" },
        { icon: Users, value: "1", label: "Team", detail: "No per-platform staffing" },
        { icon: CheckCircle, value: "Lockstep", label: "Platforms", detail: "iOS and Android aligned" },
        { icon: Zap, value: "Safe", label: "Releases", detail: "Feature-flag discipline at scale" }
      ]}
      quote="Our users were growing faster than we could hire, and we simply could not run two mobile teams. A modular codebase and real discipline around feature flags let one team keep iOS and Android moving together all the way to two million users. Nothing lagged, and nothing broke at scale."
      quoteAuthor="Head of Mobile Engineering"
      quoteRole="Health-tech scale-up"
      relatedStudies={[
        { title: "How a Regional Bank Modernized Its Mobile App and Cut Crashes 71%", metric: "71%", label: "lower crash rate", link: "/cases/bank-mobile-modernization", image: "/images/industries/fin-trader.jpg" },
        { title: "How a Specialty Insurer Replaced a 22-Year-Old Policy System Without an Outage", metric: "Zero", label: "business-impacting outages", link: "/cases/insurer-policy-strangler", image: "/images/cases/insurer-policy-strangler-hero.jpg" }
      ]}
      ctaTitle="Growing faster than you can staff mobile?"
      ctaDescription="Let's build the modular architecture and release discipline to scale on one team."
    />
  );
}
