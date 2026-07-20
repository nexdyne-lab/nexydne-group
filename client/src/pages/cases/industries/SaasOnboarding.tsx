import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Target, Clock, TrendingDown, DollarSign, Zap, CheckCircle } from "lucide-react";

export default function SaasOnboarding() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="B2B SaaS Cuts Trial-to-Paid Lag 44% | Digital Engagement Case Study"
      seoDescription="A B2B SaaS company's static drip onboarding let trials drift. Behavior-triggered onboarding journeys cut trial-to-paid lag 44% and pulled revenue recognition forward by weeks per cohort."
      canonical="/cases/saas-onboarding"
      industry="SaaS"
      industryLink="/industries/technology-media-telecom"
      title="How a B2B SaaS Company Cut Trial-to-Paid Lag by 44%"
      subtitle="Static onboarding drips sent the same emails on the same schedule while trials drifted toward expiry. Behavior-triggered journeys met each user where they actually were."
      heroImage="/images/capabilities/cap-coder.jpg"
      metrics={[
        { value: "44%", label: "Shorter Trial-to-Paid" },
        { value: "Behavior", label: "Triggered" },
        { value: "Weeks", label: "Revenue Pulled Forward" },
        { value: "Per Cohort", label: "Faster" }
      ]}
      clientContextTitle="Onboarding on a Fixed Schedule"
      clientContextIntro="A B2B SaaS company onboarded its free-trial users with a static drip sequence — the same emails, sent on the same schedule, to everyone. A user who had already found value and one who had never logged in received identical messages, and trials routinely drifted toward expiry without converting."
      clientContextBody="Static onboarding ignores the one thing that predicts conversion: what the user actually does. A trial user who hits an activation milestone is ready for a different message than one who is stuck, but the fixed sequence could not tell the difference. So users who were close to converting were not nudged at the right moment, and stuck users were not helped, and the average trial took far longer to convert than it should — delaying revenue recognition cohort after cohort. The company needed behavior-triggered onboarding journeys that responded to each user's actions in real time, moving them to paid faster."
      clientProfile={{
        industry: "B2B SaaS Company",
        companySize: "~1,800 Customers",
        projectDuration: "4 Months",
        additionalInfo: "Trial Onboarding",
        additionalLabel: "Activation Program"
      }}
      challengeTitle="Why Trials Drifted"
      challenges={[
        { icon: Target, title: "The Same Emails for Everyone", description: "Static drips sent identical messages regardless of what the user did." },
        { icon: Clock, title: "Missing the Right Moment", description: "Users close to converting were not nudged when it mattered." },
        { icon: TrendingDown, title: "Trials Drifting to Expiry", description: "Without behavioral response, trials routinely aged out without converting." },
        { icon: DollarSign, title: "Delayed Revenue Recognition", description: "Slow conversion pushed revenue back cohort after cohort." }
      ]}
      approachTitle="Trigger Onboarding on Behavior"
      approachIntro="We replaced the static drip sequence with behavior-triggered onboarding journeys that responded to each user's actions in real time — cutting trial-to-paid lag 44 percent and pulling revenue recognition forward by weeks per cohort."
      steps={[
        { step: "01", title: "Instrumenting Trial Behavior", description: "We tracked the actions that predict conversion — activation milestones, feature use, login patterns — for each trial user." },
        { step: "02", title: "Building Behavior-Triggered Journeys", description: "We replaced fixed drips with journeys that fired the right message based on what the user actually did." },
        { step: "03", title: "Nudging at the Right Moment", description: "We moved ready users toward paid at their moment of intent and helped stuck users get unstuck." },
        { step: "04", title: "Pulling Revenue Forward", description: "We cut trial-to-paid lag 44 percent, pulling revenue recognition forward by weeks per cohort." }
      ]}
      resultsTitle="Trials That Convert Faster"
      results={[
        { icon: Zap, value: "44%", label: "Shorter lag", detail: "Trial-to-paid conversion time" },
        { icon: CheckCircle, value: "Behavior", label: "Triggered", detail: "Responsive to each user" },
        { icon: DollarSign, value: "Weeks", label: "Pulled forward", detail: "Revenue recognized sooner" },
        { icon: Target, value: "Per Cohort", label: "Faster", detail: "Every trial cohort converts quicker" }
      ]}
      quote="Our onboarding sent the same emails on the same days whether a trial user was thriving or had never logged in, and trials just drifted to expiry. Journeys that respond to what each user actually does cut our trial-to-paid time by forty-four percent and pulled revenue forward by weeks every cohort. Meeting users where they are beats a fixed schedule every time."
      quoteAuthor="VP of Growth"
      quoteRole="B2B SaaS company"
      relatedStudies={[
        { title: "How a Growth-Stage SaaS Company Doubled Its Win Rate", metric: "18% → 37%", label: "win rate", link: "/cases/saas-meddicc-transformation", image: "/images/capabilities/cap-conference-data.jpg" },
        { title: "How a Manufacturer Turned a Stagnant Partner Program Into a Growth Engine", metric: "31%", label: "higher partner revenue", link: "/cases/manufacturer-channel-transformation", image: "/images/cases/manufacturer-channel-transformation-hero.jpg" }
      ]}
      ctaTitle="Is static onboarding letting trials drift?"
      ctaDescription="Let's build behavior-triggered journeys that convert trials faster and pull revenue forward."
    />
  );
}
