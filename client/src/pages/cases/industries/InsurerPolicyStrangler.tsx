import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { AlertTriangle, Target, DollarSign, Clock, CheckCircle, Zap } from "lucide-react";

export default function InsurerPolicyStrangler() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Specialty Insurer Replaces 22-Year-Old Policy System With Phased Strangler Build | Custom Software Case Study"
      seoDescription="A specialty insurer's 22-year-old mainframe policy admin system was untouchable. An incremental strangler-fig replacement decommissioned it over 20 months with zero business-impacting outages."
      canonical="/cases/insurer-policy-strangler"
      industry="Insurance"
      industryLink="/industries/insurance"
      title="How a Specialty Insurer Replaced a 22-Year-Old Policy System Without an Outage"
      subtitle="A mainframe policy system had run the business for two decades and was too risky to replace in one move. An incremental strangler build retired it piece by piece, safely."
      heroImage="/images/cases/insurer-policy-strangler-hero.jpg"
      metrics={[
        { value: "Zero", label: "Impacting Outages" },
        { value: "22-Yr", label: "System Retired" },
        { value: "20 Mo", label: "Phased Replacement" },
        { value: "Strangler", label: "Fig Pattern" }
      ]}
      clientContextTitle="A System Too Critical to Replace"
      clientContextIntro="A specialty insurer ran its entire policy administration on a mainframe-era system that had been in service for twenty-two years. It worked, but it was increasingly costly, brittle, and dependent on scarce expertise — and it was so central to the business that no one dared replace it."
      clientContextBody="The classic trap of legacy replacement is the big-bang cutover: rebuild the whole system, switch over one weekend, and pray. For a system that touches every policy the insurer holds, that risk was unacceptable — a failed cutover could halt underwriting and servicing across the book. Yet doing nothing meant the costs and fragility kept mounting. The insurer needed a way to replace the old system incrementally, routing functionality to new components piece by piece while the old system kept running, so the mainframe could be decommissioned without a single business-impacting outage."
      clientProfile={{
        industry: "Specialty Insurer",
        companySize: "~$470M Annual Revenue",
        projectDuration: "20 Months",
        additionalInfo: "Policy Administration",
        additionalLabel: "Core System"
      }}
      challengeTitle="Why a Big-Bang Cutover Was Off the Table"
      challenges={[
        { icon: AlertTriangle, title: "A Business-Critical System", description: "The policy system touched every policy; a failed cutover could halt underwriting and servicing." },
        { icon: Target, title: "Two Decades of Complexity", description: "Twenty-two years of accumulated logic made a clean rewrite-and-switch enormously risky." },
        { icon: DollarSign, title: "Rising Cost and Fragility", description: "Doing nothing meant mounting costs and dependence on scarce mainframe expertise." },
        { icon: Clock, title: "No Tolerable Downtime", description: "The business could not accept an outage across its policy operations." }
      ]}
      approachTitle="Strangle the Legacy System Incrementally"
      approachIntro="We used a strangler-fig pattern to replace the 22-year-old policy system piece by piece over twenty months — routing functionality to new components while the old system ran, and decommissioning it without a single business-impacting outage."
      steps={[
        { step: "01", title: "Mapping the Legacy System", description: "We mapped the policy system's functions and dependencies to sequence a safe, incremental replacement." },
        { step: "02", title: "Building New Components Around It", description: "We built modern components for slices of functionality and routed traffic to them while the mainframe kept serving the rest." },
        { step: "03", title: "Migrating Piece by Piece", description: "We moved functionality across incrementally, validating each slice against the old system before switching it over." },
        { step: "04", title: "Decommissioning Safely", description: "Once every function had been strangled onto new components, we retired the mainframe with no business-impacting outage." }
      ]}
      resultsTitle="A Legacy System Retired Safely"
      results={[
        { icon: CheckCircle, value: "Zero", label: "Impacting outages", detail: "Across the 20-month replacement" },
        { icon: Target, value: "22-Yr", label: "System retired", detail: "Fully decommissioned" },
        { icon: Clock, value: "20 Mo", label: "Phased", detail: "Piece-by-piece migration" },
        { icon: Zap, value: "Modern", label: "Components", detail: "Replaced the mainframe incrementally" }
      ]}
      quote="Our policy system had run the business for twenty-two years and was far too important to replace in one risky weekend. Strangling it piece by piece — building new components and moving functionality across gradually — let us finally retire the mainframe over twenty months without a single outage our customers or underwriters ever felt."
      quoteAuthor="Chief Information Officer"
      quoteRole="Specialty insurer"
      relatedStudies={[
        { title: "How a Logistics Provider Replaced Three Legacy Tools With One Custom TMS", metric: "58%", label: "faster load planning", link: "/cases/logistics-custom-tms", image: "/images/capabilities/cap-warehouse-robot.jpg" },
        { title: "How a Manufacturer Cleared an 18-Month IT Backlog by Building a Low-Code CoE", metric: "28", label: "apps shipped in 18 months", link: "/cases/mfg-lowcode-coe", image: "/images/cases/mfg-lowcode-coe-hero.jpg" }
      ]}
      ctaTitle="Is a critical legacy system too risky to replace?"
      ctaDescription="Let's strangle it incrementally and retire it without a business-impacting outage."
    />
  );
}
