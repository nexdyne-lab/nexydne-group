import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { PhoneCall, Clock, Smartphone, TrendingDown, Users, Fingerprint, Star, HeartPulse } from "lucide-react";

export function HealthcarePatientPortal() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Launching a Patient Portal That Cut Admin Calls 65% | Healthcare Case Study"
      seoDescription="A 450-bed hospital system fielded 8,500 calls a week with 12-minute holds. A mobile-first patient portal cut admin calls 65%, hit 72% adoption, and cut refill turnaround from 48 hours to 6."
      canonical="/cases/healthcare-patient-portal"
      industry="Healthcare"
      industryLink="/industries/healthcare"
      title="How a Hospital Cut Administrative Calls 65% With a New Patient Portal"
      subtitle="A regional hospital system built a mobile-first patient portal for scheduling, test results, and refills — cutting phone volume 65%, reaching 72% adoption, and taking refill turnaround from 48 hours to 6."
      heroImage="/images/cases/healthcare-patient-portal-hero.jpg"
      metrics={[
        { value: "65%", label: "Fewer Admin Calls" },
        { value: "72%", label: "Portal Adoption" },
        { value: "4.7★", label: "App Store Rating" }
      ]}
      clientContextTitle="A Call Center at Its Limit"
      clientContextIntro="A 450-bed regional hospital system serving 12 counties faced overwhelming administrative burden from patient phone calls. Its call center received 8,500 calls a week — 65% about scheduling, test results, and prescription refills — with hold times exceeding 12 minutes at peak."
      clientContextBody="Long waits frustrated patients and burned out staff, while the hospital's legacy portal — built on outdated technology with no mobile optimization — had only 18% adoption. The hospital needed a modern, mobile-first portal that let patients manage care independently, integrated with Epic, supported biometric authentication, and stayed intuitive for patients of every age. With satisfaction declining and turnover rising, leadership set an aggressive six-month timeline."
      clientProfile={{
        industry: "Regional Hospital System",
        companySize: "85,000 Active Patients",
        projectDuration: "6-Month Timeline",
        additionalInfo: "Web + iOS + Android",
        additionalLabel: "Platforms"
      }}
      challengeTitle="Why Phones Were Overwhelmed"
      challenges={[
        {
          icon: PhoneCall,
          title: "8,500 calls a week",
          description: "Two-thirds were routine scheduling, results, and refill requests that patients couldn't self-serve."
        },
        {
          icon: Clock,
          title: "12-minute hold times",
          description: "Peak-hour waits frustrated patients and drove call-center staff burnout and turnover."
        },
        {
          icon: TrendingDown,
          title: "18% portal adoption",
          description: "The legacy portal's outdated, non-mobile experience left most patients calling instead."
        },
        {
          icon: Users,
          title: "Every patient demographic",
          description: "The new portal had to stay intuitive across all ages and technical abilities to drive real adoption."
        }
      ]}
      approachTitle="A Mobile-First Portal, Grounded in Research"
      approachIntro="NEXDYNE partnered with the hospital's IT and clinical teams to design and build a portal available as a responsive web app and native iOS and Android apps — starting with research across 120 patients of differing ages and proficiency."
      steps={[
        {
          step: "01",
          title: "Design around real patients",
          description: "User research with 120 patients shaped an experience covering scheduling, secure messaging, results, refills, and bill pay."
        },
        {
          step: "02",
          title: "Build once, run everywhere",
          description: "React Native for mobile and React for web maximized code reuse and a consistent experience across platforms."
        },
        {
          step: "03",
          title: "Integrate with Epic in real time",
          description: "HL7 FHIR APIs synced appointments, results, and records live, with push notifications for new results and refill status."
        },
        {
          step: "04",
          title: "Secure but frictionless",
          description: "Face ID, Touch ID, and fingerprint auth gave patients secure yet convenient access, validated in a 500-patient pilot."
        }
      ]}
      resultsTitle="The Payoff"
      results={[
        {
          icon: PhoneCall,
          value: "65%",
          label: "Fewer administrative calls",
          detail: "Cutting average hold times from 12 minutes to under 3"
        },
        {
          icon: Star,
          value: "72%",
          label: "Patient adoption",
          detail: "Beating the 50% target, at 4.7 stars on both app stores"
        },
        {
          icon: HeartPulse,
          value: "48h → 6h",
          label: "Refill turnaround",
          detail: "Freeing staff from routine administrative work"
        }
      ]}
      quote=""
      quoteAuthor=""
      quoteRole=""
      relatedStudies={[
        {
          title: "Launching a Credit Union Mobile App to 78% Adoption",
          metric: "78%",
          label: "member adoption",
          link: "/cases/fintech-mobile-banking",
          image: "/images/industries/fin-monitors.jpg"
        },
        {
          title: "Automating Patient Data Management, Cutting Admin Work 40%",
          metric: "40%",
          label: "less admin overhead",
          link: "/cases/healthcare-provider",
          image: "/images/cases/healthcare-provider-hero.jpg"
        }
      ]}
      ctaTitle="Ready to give patients self-service they'll use?"
      ctaDescription="Let's talk about what a modern patient portal could do for your call volume and satisfaction."
    />
  );
}

export default HealthcarePatientPortal;
