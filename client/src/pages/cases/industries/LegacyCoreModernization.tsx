import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Clock, DollarSign, Target, Cog, Layers, ShieldCheck } from "lucide-react";

export default function LegacyCoreModernization() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Retiring a Decades-Old Insurance Core Without a Big-Bang Rewrite | Insurance Case Study"
      seoDescription="A regional insurer was trapped by an aging policy and claims system almost no one still understood. Replacing it one capability at a time — with no risky overnight switchover — let the business keep running while the old core was finally retired."
      canonical="/cases/legacy-core-modernization"
      industry="Insurance"
      industryLink="/industries/insurance"
      title="Retiring a Decades-Old Insurance Core — Without Ever Stopping the Business"
      subtitle="A regional insurer was trapped by an aging policy and claims system that few people still understood and nothing new could connect to. Replacing it one piece at a time — rather than in one risky overnight switchover — let the company keep serving customers while the old core was finally retired."
      heroImage="/images/industries/ops-monitors-dark.jpg"
      metrics={[
        { value: "0", label: "Big-Bang Cutovers" },
        { value: "70%", label: "Faster Product Changes" },
        { value: "$6M", label: "Lower Annual Maintenance" },
        { value: "100%", label: "Uptime Through the Move" }
      ]}
      clientContextTitle="A System Almost No One Still Understood"
      clientContextIntro="A regional insurance carrier ran its entire business — every policy it issued and every claim it paid — on a core system built decades earlier. It had worked reliably for years, but the people who originally built it had long since retired, and the handful of specialists who still understood it were nearing the end of their careers. The system had become a black box: essential to the company, yet understood by almost no one inside it."
      clientContextBody="The cost of that dependence showed up everywhere. Launching a new insurance product or adjusting pricing meant painstaking changes to code that no one fully trusted, so work that should have taken weeks stretched into many months. Modern tools — a customer web portal, a mobile claims app, analytics — could not easily connect to the old core, so the company kept falling further behind competitors. Maintenance alone consumed millions of dollars a year. Leadership knew the system had to go, but the obvious path — a complete rewrite switched on overnight — was exactly the kind of high-stakes gamble that has sunk insurers before. One bad weekend could mean policies that could not be issued or claims that could not be paid."
      clientProfile={{
        industry: "Regional Insurance Carrier",
        companySize: "~$400M Annual Revenue",
        projectDuration: "24 Months",
        additionalInfo: "Policy & Claims Core",
        additionalLabel: "System Replaced"
      }}
      challengeTitle="Why Standing Still Was the Real Risk"
      challenges={[
        {
          icon: Cog,
          title: "A Black-Box Core",
          description: "The original builders were gone and only a few aging specialists still understood the system, so every change carried the risk of breaking something no one could explain."
        },
        {
          icon: Clock,
          title: "Change Measured in Months",
          description: "Launching a product or adjusting pricing meant slow, careful work on fragile code — turning weeks of work into many months and letting competitors move first."
        },
        {
          icon: Layers,
          title: "Nothing New Could Connect",
          description: "Modern portals, mobile apps and analytics could not easily plug into the old core, leaving the company unable to give customers the experience they expected."
        },
        {
          icon: DollarSign,
          title: "Millions Just to Stand Still",
          description: "Keeping the aging system running consumed millions of dollars a year — money spent maintaining the past rather than building the future."
        }
      ]}
      approachTitle="Replacing the Engine While the Car Kept Driving"
      approachIntro="Rather than attempt a risky overnight switchover, we helped the carrier replace the old system one capability at a time while it kept running. We put a stable interface in front of the old core, then moved functions across to modern systems piece by piece — so the business never stopped, and each step could be proven safe before the next one began."
      steps={[
        {
          step: "01",
          title: "Understand the Black Box First",
          description: "Before changing anything, we worked with the remaining specialists to map out what the old system actually did and why, capturing decades of hard-won business rules that lived only in the code and in a few people's heads."
        },
        {
          step: "02",
          title: "A Stable Interface in Front of the Old Core",
          description: "We placed a consistent interface between the business and the aging system, so that as we moved work to new systems behind it, the rest of the company would not have to know or care which system was doing the job on any given day."
        },
        {
          step: "03",
          title: "Move One Capability at a Time",
          description: "We rebuilt the core on modern systems in small, self-contained pieces — a single product line, then claims intake, then billing — switching each one over only after it had been proven to match the old system exactly, and keeping the old path ready to fall back to."
        },
        {
          step: "04",
          title: "Retire the Old Core for Good",
          description: "As each capability moved across and ran cleanly in real use, the old system quietly did less and less. Once nothing depended on it any longer, the company could finally shut it down — ending years of risk and millions in annual cost."
        }
      ]}
      resultsTitle="A Modern Core, Delivered Without Drama"
      results={[
        {
          icon: ShieldCheck,
          value: "0",
          label: "Big-bang cutovers",
          detail: "The business ran without interruption throughout"
        },
        {
          icon: Clock,
          value: "70%",
          label: "Faster product changes",
          detail: "New products and pricing in weeks, not months"
        },
        {
          icon: DollarSign,
          value: "$6M",
          label: "Lower annual maintenance",
          detail: "Saved once the old system was retired"
        },
        {
          icon: Target,
          value: "100%",
          label: "Uptime through the move",
          detail: "No policy or claim went unserved during the transition"
        }
      ]}
      quote="Everyone told us modernizing our core meant betting the company on one terrifying weekend. It did not. We replaced the old system a piece at a time, with the old one always there to fall back on, and our customers never felt a thing. The risk we were most afraid of simply never had to happen."
      quoteAuthor="Chief Technology Officer"
      quoteRole="Regional insurance carrier"
      relatedStudies={[
        {
          title: "Moving core systems to the cloud without disruption",
          metric: "35%",
          label: "lower infrastructure cost",
          link: "/cases/cloud-migration-health-system",
          image: "/images/industries/tech-datacenter.jpg"
        },
        {
          title: "Turning compliance into an always-on posture",
          metric: "Audit-ready",
          label: "not a periodic scramble",
          link: "/cases/security-compliance-hardening",
          image: "/images/industries/fin-monitors.jpg"
        }
      ]}
      ctaTitle="Ready to modernize your core without betting the business?"
      ctaDescription="Let's talk about replacing an aging system one safe step at a time."
    />
  );
}
