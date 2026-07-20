import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Smartphone, Star, Building2, Fingerprint, UserMinus, AlertTriangle, Sparkles } from "lucide-react";

export default function FintechMobileBanking() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Launching a Credit Union Mobile App to 78% Adoption | Financial Services Case Study"
      seoDescription="A 125,000-member credit union was losing young members to big-bank apps. A new mobile banking app hit 78% adoption and a 4.8-star rating in six months."
      canonical="/cases/fintech-mobile-banking"
      industry="Financial Services"
      industryLink="/industries/financial-services"
      title="How a Credit Union Launched a Mobile App to 78% Adoption"
      subtitle="A regional credit union built iOS and Android mobile banking with biometric auth, mobile check deposit, and P2P payments — reaching 78% adoption and a 4.8-star rating in six months."
      heroImage="/images/industries/fin-monitors.jpg"
      metrics={[
        { value: "78%", label: "Member Adoption" },
        { value: "4.8★", label: "App Store Rating" },
        { value: "92%", label: "Fewer Routine Branch Visits" }
      ]}
      clientContextTitle="Losing the Next Generation"
      clientContextIntro="A community credit union serving 125,000 members across the Pacific Northwest faced growing pressure from big banks with sophisticated mobile experiences. Its existing app suffered from poor UX, frequent crashes, and limited functionality — and digital-banking satisfaction lagged 28 points behind the industry average."
      clientContextBody="Younger members (25–40) were closing accounts at an alarming rate, citing the lack of modern mobile features. The credit union needed a complete overhaul that matched national banks — biometric auth, mobile check deposit, P2P payments, bill pay, alerts, cardless ATM — while keeping its personal service and meeting SOC 2 Type II and FFIEC requirements."
      clientProfile={{
        industry: "Community Credit Union",
        companySize: "125,000 Members",
        projectDuration: "Native iOS + Android",
        additionalInfo: "SOC 2 Type II",
        additionalLabel: "Compliance"
      }}
      challengeTitle="Why Members Were Leaving"
      challenges={[
        {
          icon: AlertTriangle,
          title: "A failing existing app",
          description: "Poor UX, frequent crashes, and limited features left digital-banking satisfaction 28 points below industry average."
        },
        {
          icon: UserMinus,
          title: "Younger members departing",
          description: "Members aged 25–40 were closing accounts, citing missing modern mobile features as the reason."
        },
        {
          icon: Building2,
          title: "Outgunned by national banks",
          description: "Big banks offered sophisticated apps the credit union couldn't match with its aging platform."
        },
        {
          icon: Fingerprint,
          title: "High compliance bar",
          description: "The new app had to meet SOC 2 Type II and FFIEC mobile-banking requirements without adding friction."
        }
      ]}
      approachTitle="A Modern App, Built on Real Research"
      approachIntro="NEXDYNE partnered with the credit union's IT, compliance, and member-experience teams — starting with user research across 250 members to shape a UX that felt modern without losing the personal touch."
      steps={[
        {
          step: "01",
          title: "Native iOS and Android",
          description: "We built native apps in Swift and Kotlin for optimal, platform-specific performance and experience."
        },
        {
          step: "02",
          title: "Integrate with core banking",
          description: "Secure APIs into the Symitar core delivered real-time account data and transaction processing."
        },
        {
          step: "03",
          title: "Deposit, pay, and transfer",
          description: "Mobile check deposit used image processing and OCR with fraud detection; P2P payments ran over the Zelle network for instant transfers."
        },
        {
          step: "04",
          title: "Secure without friction",
          description: "Multi-factor auth, device fingerprinting, and behavioral analytics stopped fraud while keeping the experience frictionless."
        }
      ]}
      resultsTitle="The Payoff"
      results={[
        {
          icon: Smartphone,
          value: "78%",
          label: "Member adoption",
          detail: "In six months, beating the 60% target"
        },
        {
          icon: Star,
          value: "4.8★",
          label: "App Store rating",
          detail: "With satisfaction up 35 points, above industry average"
        },
        {
          icon: Sparkles,
          value: "8,500",
          label: "New members in year one",
          detail: "64% citing the mobile experience as a key factor"
        }
      ]}
      quote=""
      quoteAuthor=""
      quoteRole=""
      relatedStudies={[
        {
          title: "Lifting Member Satisfaction 45% at a Credit Union",
          metric: "45%",
          label: "higher satisfaction",
          link: "/capabilities/ai-technology-consulting/case-study/credit-union",
          image: "/images/industries/fin-monitors.jpg"
        },
        {
          title: "Scaling a Fintech Platform to 50M Transactions a Day",
          metric: "50M",
          label: "daily transactions",
          link: "/cases/fintech-microservices",
          image: "/images/cases/fintech-microservices-hero.jpg"
        }
      ]}
      ctaTitle="Ready to give your members an app they'll love?"
      ctaDescription="Let's talk about what a modern mobile experience could do for adoption and retention."
    />
  );
}
