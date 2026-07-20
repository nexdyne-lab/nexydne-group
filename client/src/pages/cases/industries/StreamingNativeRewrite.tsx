import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Clock, TrendingDown, Target, AlertTriangle, Zap, TrendingUp, CheckCircle } from "lucide-react";

export default function StreamingNativeRewrite() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Swift Native Rewrite Cuts Streaming App Startup Time 62% | Media Case Study"
      seoDescription="A streaming service's legacy hybrid app was slow to launch and losing viewers at the door. A native Swift rewrite cut cold-start time 62%, restored category-leading launch performance, and lifted day-one viewership."
      canonical="/cases/streaming-native-rewrite"
      industry="Media & Entertainment"
      industryLink="/industries/technology-media-telecom"
      title="How a Streaming Service Cut App Startup Time by 62% With a Native Rewrite"
      subtitle="The app took too long to open, and viewers were leaving before the first frame. Rebuilding it natively in Swift restored the launch speed the category expects — and viewers came back."
      heroImage="/images/industries/tech-datacenter.jpg"
      metrics={[
        { value: "62%", label: "Faster Startup Time" },
        { value: "Day 1", label: "Viewership Lifted" },
        { value: "Native", label: "Swift Rewrite" },
        { value: "Restored", label: "Category-Leading Speed" }
      ]}
      clientContextTitle="Losing Viewers Before the First Frame"
      clientContextIntro="A streaming service was losing viewers at the worst possible moment — the launch screen. Its app, built years earlier as a hybrid to save development effort, had grown sluggish, and a slow cold start was enough to send impatient viewers back to a faster competitor before a single second of content played."
      clientContextBody="In streaming, startup time is a retention feature. The hybrid architecture that once looked economical now imposed a performance tax the service could not afford: layers of abstraction between the app and the device meant every launch dragged. Viewers had come to expect near-instant playback from the category leaders, and this app no longer delivered it. The service needed the launch experience rebuilt natively, close to the metal, to reclaim the speed that kept viewers from leaving in the first place."
      clientProfile={{
        industry: "Streaming Media Service",
        companySize: "5M+ Subscribers",
        projectDuration: "6 Months",
        additionalInfo: "iOS Native Rebuild",
        additionalLabel: "App Platform"
      }}
      challengeTitle="Why the Hybrid App Was Costing Viewers"
      challenges={[
        { icon: Clock, title: "Slow Cold Start", description: "The app took too long to launch, sending impatient viewers to faster competitors before playback began." },
        { icon: TrendingDown, title: "Startup as a Retention Leak", description: "In streaming, launch speed is a retention feature, and this app was leaking at the door." },
        { icon: Target, title: "A Hybrid Performance Tax", description: "Layers of abstraction between app and device dragged every launch." },
        { icon: AlertTriangle, title: "Below Category Expectations", description: "Viewers expected near-instant playback the app could no longer deliver." }
      ]}
      approachTitle="Rebuild Native, Close to the Metal"
      approachIntro="We rebuilt the app natively in Swift, engineering the launch path close to the device to strip out the hybrid performance tax — cutting startup time 62 percent, restoring category-leading launch performance, and lifting day-one viewership."
      steps={[
        { step: "01", title: "Diagnosing the Launch Path", description: "We profiled the cold-start sequence to isolate exactly where the hybrid architecture was imposing its performance tax." },
        { step: "02", title: "Rewriting in Native Swift", description: "We rebuilt the app in native Swift, removing the abstraction layers between the app and the device that slowed every launch." },
        { step: "03", title: "Engineering the Startup Sequence", description: "We optimized the launch path close to the metal so the app reached playable content dramatically faster." },
        { step: "04", title: "Measuring the Viewership Lift", description: "We tracked the impact on day-one viewership, confirming that faster launch kept viewers who had been leaving at the door." }
      ]}
      resultsTitle="Speed That Keeps Viewers"
      results={[
        { icon: Zap, value: "62%", label: "Faster startup", detail: "Cold-start time, native rebuild" },
        { icon: TrendingUp, value: "Day 1", label: "Viewership up", detail: "Fewer viewers lost at launch" },
        { icon: CheckCircle, value: "Native", label: "Swift", detail: "Abstraction tax removed" },
        { icon: Target, value: "Restored", label: "Category speed", detail: "Launch performance back to the front" }
      ]}
      quote="We were losing people before the first frame ever played, just because the app took too long to open. Rebuilding it natively in Swift cut our startup time by nearly two-thirds and put us back among the fastest in the category. Day-one viewership went up — the viewers were there all along, they just would not wait."
      quoteAuthor="VP of Product"
      quoteRole="Streaming media service"
      relatedStudies={[
        { title: "How a Medical Device App Hit Sub-100ms Response With Pure Kotlin Native", metric: "<100ms", label: "response time", link: "/cases/medical-native-kotlin", image: "/images/cases/medical-native-kotlin-hero.jpg" },
        { title: "How an Enterprise Software Operator Lifted Realized ASP 19% Without Losing a Renewal", metric: "19%", label: "higher realized ASP", link: "/cases/enterprise-software-pricing-rebuild", image: "/images/capabilities/cap-coder.jpg" }
      ]}
      ctaTitle="Is a slow app losing users at the door?"
      ctaDescription="Let's rebuild the experience natively and reclaim the speed your category expects."
    />
  );
}
