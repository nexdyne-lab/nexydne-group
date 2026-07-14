import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Shield, AlertTriangle, Target, Clock, CheckCircle, Users } from "lucide-react";

export default function HealthcareSecurity() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Security Transformation Protects Healthcare Data | Technology Case Study"
      seoDescription="A 200-employee healthcare services company needed to secure protected data and achieve HIPAA compliance. A security transformation delivered zero incidents and full HIPAA compliance."
      canonical="/capabilities/technology/case-studies/healthcare-security"
      industry="Healthcare"
      industryLink="/industries/healthcare"
      title="How a Healthcare Services Company Achieved Zero Incidents and Full HIPAA Compliance"
      subtitle="Protecting patient data and meeting HIPAA is non-negotiable in healthcare, and the company's security posture had gaps. A security transformation closed them for good."
      heroImage="/case-healthcare-team.5797392b.jpg"
      metrics={[
        { value: "Zero", label: "Security Incidents" },
        { value: "HIPAA", label: "Full Compliance" },
        { value: "Hardened", label: "Posture" },
        { value: "Protected", label: "Patient Data" }
      ]}
      clientContextTitle="Security Gaps in a Zero-Tolerance Context"
      clientContextIntro="A 200-employee healthcare services company handled large volumes of protected health information, where a single breach carries severe regulatory, financial, and reputational consequences. Its security posture had grown piecemeal and contained gaps it could no longer accept, and full HIPAA compliance was not assured."
      clientContextBody="Healthcare is a zero-tolerance environment for security failures. Protected health information is a prime target, and HIPAA imposes strict, auditable requirements on how it is safeguarded. The company's security had been assembled incrementally rather than designed as a whole, leaving gaps in controls, monitoring, and incident readiness. It needed a security transformation that closed those gaps, achieved provable HIPAA compliance, and hardened the organization against incidents — so patient data was genuinely protected and the regulator satisfied."
      clientProfile={{
        industry: "Healthcare Services Company",
        companySize: "~200 Employees",
        projectDuration: "8 Months",
        additionalInfo: "Security Transformation",
        additionalLabel: "HIPAA Environment"
      }}
      challengeTitle="Why the Posture Needed Rebuilding"
      challenges={[
        { icon: Shield, title: "Piecemeal Security", description: "The posture had grown incrementally, leaving gaps in controls and monitoring." },
        { icon: AlertTriangle, title: "High-Stakes Data", description: "Protected health information is a prime target where a breach carries severe consequences." },
        { icon: Target, title: "HIPAA Not Assured", description: "Full, provable HIPAA compliance was not guaranteed by the existing controls." },
        { icon: Clock, title: "Limited Incident Readiness", description: "The organization was not hardened against or ready to respond to incidents." }
      ]}
      approachTitle="Transform Security End to End"
      approachIntro="We ran a security transformation that closed the gaps, achieved full HIPAA compliance, and hardened the organization — delivering zero security incidents."
      steps={[
        { step: "01", title: "Assessing the Gaps", description: "We assessed the security posture end to end to find every gap in controls, monitoring, and readiness." },
        { step: "02", title: "Closing the Control Gaps", description: "We rebuilt controls and monitoring into a coherent posture rather than an incremental patchwork." },
        { step: "03", title: "Achieving HIPAA Compliance", description: "We brought the organization to full, provable HIPAA compliance the regulator could verify." },
        { step: "04", title: "Hardening Against Incidents", description: "We hardened defenses and incident readiness, resulting in zero security incidents." }
      ]}
      resultsTitle="Data Protected, Regulator Satisfied"
      results={[
        { icon: Shield, value: "Zero", label: "Incidents", detail: "After the transformation" },
        { icon: CheckCircle, value: "HIPAA", label: "Compliant", detail: "Full and provable" },
        { icon: Target, value: "Hardened", label: "Posture", detail: "Coherent, not piecemeal" },
        { icon: Users, value: "Protected", label: "Patient data", detail: "Genuinely safeguarded" }
      ]}
      quote="In healthcare, a security gap is not a risk you manage — it is one you close. Our posture had grown piecemeal and we could not stand behind it. A full security transformation got us to provable HIPAA compliance and, just as importantly, zero incidents. Our patients' data is genuinely protected now, and we can prove it to the regulator."
      quoteAuthor="Chief Information Security Officer"
      quoteRole="Healthcare services company"
      relatedStudies={[
        { title: "How a Specialty Insurer Sped Processing 70% and Saved $2.1M a Year", metric: "$2.1M", label: "annual savings", link: "/capabilities/technology/case-studies/insurance-modernization", image: "/images/industries/fin-handshake-city.jpg" },
        { title: "How a Retail Chain Cut Stockouts 25% With Real-Time Inventory Visibility", metric: "25%", label: "fewer stockouts", link: "/capabilities/technology/case-studies/retail-data-platform", image: "/images/capabilities/cap-retail-data.jpg" }
      ]}
      ctaTitle="Are there gaps in your security posture?"
      ctaDescription="Let's run a transformation that closes them, achieves compliance, and hardens you against incidents."
    />
  );
}
