import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Clock, AlertTriangle, Shield, Target, Zap, CheckCircle } from "lucide-react";

export default function MedicalNativeKotlin() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Kotlin Native Delivers Sub-100ms Medical Device App | Healthcare Case Study"
      seoDescription="A regulated Android app needed real-time sensor fusion no cross-platform layer could guarantee. A pure Kotlin native build delivered sub-100ms response with the determinism and auditability the regulated context demanded."
      canonical="/cases/medical-native-kotlin"
      industry="Healthcare"
      industryLink="/industries/healthcare"
      title="How a Medical Device App Hit Sub-100ms Response With Pure Kotlin Native"
      subtitle="Real-time sensor fusion in a regulated device leaves no room for the timing variability of a cross-platform layer. Building natively in Kotlin delivered the precision — and the auditability — the context demanded."
      heroImage="/case-medical-collaboration.9602cc8c.jpg"
      metrics={[
        { value: "<100ms", label: "Response Time" },
        { value: "Real-Time", label: "Sensor Fusion" },
        { value: "Native", label: "Pure Kotlin" },
        { value: "Regulated", label: "Auditable by Design" }
      ]}
      clientContextTitle="When Milliseconds Are Regulated"
      clientContextIntro="A medical device company was building an Android application that fused data from multiple sensors in real time — the kind of workload where response time is not a nicety but a requirement, and where a regulated environment demands the timing be both fast and provable."
      clientContextBody="The tempting path was a cross-platform framework to share code and speed delivery. But a cross-platform abstraction introduces timing variability and a runtime layer between the app and the device — exactly what a real-time sensor-fusion workload cannot tolerate, and exactly the kind of non-determinism that makes regulatory validation harder. The company needed guaranteed sub-100ms response and an implementation clean enough to audit. That ruled out compromise: the app had to be built in pure Kotlin native, close to the platform, where the precision could be delivered and demonstrated."
      clientProfile={{
        industry: "Medical Device Company",
        companySize: "~$350M Annual Revenue",
        projectDuration: "7 Months",
        additionalInfo: "Regulated Android App",
        additionalLabel: "Device Software"
      }}
      challengeTitle="Why Cross-Platform Wasn't an Option"
      challenges={[
        { icon: Clock, title: "Hard Real-Time Requirement", description: "Sensor fusion demanded guaranteed sub-100ms response the app could not miss." },
        { icon: AlertTriangle, title: "Cross-Platform Timing Variability", description: "A shared framework's runtime layer introduced non-determinism a real-time workload cannot tolerate." },
        { icon: Shield, title: "Regulatory Auditability", description: "The regulated context required an implementation whose timing behavior could be validated and proven." },
        { icon: Target, title: "No Room for Compromise", description: "Precision and auditability together ruled out an abstraction between the app and the device." }
      ]}
      approachTitle="Build Native for Precision and Proof"
      approachIntro="We built the app in pure Kotlin native, close to the platform, so real-time sensor fusion delivered guaranteed sub-100ms response — with an implementation deterministic and clean enough to satisfy the regulated context."
      steps={[
        { step: "01", title: "Choosing Native Deliberately", description: "We ruled out cross-platform frameworks because their runtime layer could not guarantee the timing a regulated real-time workload required." },
        { step: "02", title: "Engineering the Sensor-Fusion Path", description: "We built the sensor-fusion pipeline in pure Kotlin native, close to the platform, where response time could be controlled precisely." },
        { step: "03", title: "Guaranteeing Sub-100ms Response", description: "We engineered and measured the critical path to deliver guaranteed sub-100ms response under real device conditions." },
        { step: "04", title: "Building for Auditability", description: "We kept the implementation deterministic and well-documented, so its timing behavior could be validated for the regulated context." }
      ]}
      resultsTitle="Precision the Context Demanded"
      results={[
        { icon: Zap, value: "<100ms", label: "Response time", detail: "Guaranteed under real conditions" },
        { icon: CheckCircle, value: "Real-Time", label: "Sensor fusion", detail: "Deterministic performance" },
        { icon: Target, value: "Native", label: "Pure Kotlin", detail: "No abstraction between app and device" },
        { icon: Shield, value: "Auditable", label: "By design", detail: "Timing behavior provable for regulators" }
      ]}
      quote="For a regulated device fusing sensor data in real time, a cross-platform layer was never going to give us the timing we could guarantee and prove. Building it in pure Kotlin native got us reliable sub-100ms response and an implementation we could actually put in front of regulators. Sometimes native is not the fast path — it is the only path."
      quoteAuthor="VP of Engineering"
      quoteRole="Medical device company"
      relatedStudies={[
        { title: "How an Enterprise Software Operator Lifted Realized ASP 19% Without Losing a Renewal", metric: "19%", label: "higher realized ASP", link: "/cases/enterprise-software-pricing-rebuild", image: "/images/capabilities/cap-coder.jpg" },
        { title: "How a B2B Marketplace Grew Net Revenue Retention to 134% by Pricing on Value", metric: "134%", label: "net revenue retention", link: "/cases/marketplace-usage-pricing", image: "/images/capabilities/cap-conference-data.jpg" }
      ]}
      ctaTitle="Does your app need guaranteed real-time precision?"
      ctaDescription="Let's talk about when native is not a preference but a requirement — and how to build it right."
    />
  );
}
