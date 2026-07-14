import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { DollarSign, Target, AlertTriangle, Clock, CheckCircle, TrendingUp, Zap } from "lucide-react";

export default function BankCloudMigration() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Cloud Migration Enables 3x Growth for a Regional Bank | Technology Case Study"
      seoDescription="A 180-employee community bank's legacy infrastructure capped growth. A cloud migration cut infrastructure cost 65%, reached 99.9% uptime, and gave the bank room to grow threefold."
      canonical="/capabilities/technology/case-studies/bank-cloud-migration"
      industry="Financial Services"
      industryLink="/industries/financial-services"
      title="How a Community Bank Cut Infrastructure Cost 65% and Made Room to Grow 3x"
      subtitle="Aging on-premises infrastructure was expensive to run and could not scale with the bank's ambitions. A cloud migration cut cost, lifted reliability, and removed the ceiling on growth."
      heroImage="/images/industries/fin-monitors.jpg"
      metrics={[
        { value: "65%", label: "Lower Infrastructure Cost" },
        { value: "99.9%", label: "System Uptime" },
        { value: "3x", label: "Headroom to Grow" },
        { value: "Cloud", label: "Modernized" }
      ]}
      clientContextTitle="Infrastructure That Capped Growth"
      clientContextIntro="A 180-employee community bank was running on aging on-premises infrastructure that had quietly become a constraint on the whole business. It was costly to maintain, difficult to scale, and increasingly unreliable — and it could not support the growth the bank wanted to pursue."
      clientContextBody="Every expansion the bank considered ran into the same wall: the infrastructure could not scale to meet it without major capital outlay, and the maintenance burden already consumed a disproportionate share of the technology budget. Reliability was a growing concern too, since downtime in banking erodes customer trust directly. The bank needed to migrate to the cloud to cut the cost and maintenance burden, improve reliability, and gain the elastic capacity to grow without another infrastructure project each time."
      clientProfile={{
        industry: "Community Bank",
        companySize: "~180 Employees",
        projectDuration: "9 Months",
        additionalInfo: "On-Prem to Cloud",
        additionalLabel: "Infrastructure"
      }}
      challengeTitle="Why the Old Infrastructure Held the Bank Back"
      challenges={[
        { icon: DollarSign, title: "Costly to Maintain", description: "On-premises infrastructure consumed a disproportionate share of the technology budget." },
        { icon: Target, title: "Couldn't Scale", description: "Growth required major capital outlay each time the infrastructure hit its limits." },
        { icon: AlertTriangle, title: "Reliability Concerns", description: "Downtime in banking erodes customer trust directly, and the aging systems were increasingly fragile." },
        { icon: Clock, title: "A Ceiling on Growth", description: "Every expansion the bank considered ran into the same infrastructure wall." }
      ]}
      approachTitle="Migrate to a Scalable Cloud Foundation"
      approachIntro="We migrated the bank's infrastructure to the cloud, cutting infrastructure cost 65 percent, lifting uptime to 99.9 percent, and giving the bank the elastic capacity to grow threefold."
      steps={[
        { step: "01", title: "Assessing the Estate", description: "We assessed the on-premises estate to plan a safe, sequenced migration that protected banking operations." },
        { step: "02", title: "Migrating to the Cloud", description: "We moved infrastructure to a scalable cloud foundation, replacing the costly, fragile on-premises setup." },
        { step: "03", title: "Hardening Reliability", description: "We architected for resilience, lifting uptime to 99.9 percent to protect customer trust." },
        { step: "04", title: "Unlocking Elastic Growth", description: "We gave the bank elastic capacity so it could grow without another infrastructure project each time." }
      ]}
      resultsTitle="Lower Cost, Higher Reliability, Room to Grow"
      results={[
        { icon: DollarSign, value: "65%", label: "Lower cost", detail: "Infrastructure spend cut" },
        { icon: CheckCircle, value: "99.9%", label: "Uptime", detail: "Reliability for customers" },
        { icon: TrendingUp, value: "3x", label: "Headroom", detail: "Capacity to grow" },
        { icon: Zap, value: "Elastic", label: "Cloud", detail: "Scale without new projects" }
      ]}
      quote="Our old infrastructure was eating our technology budget and capping every growth plan we had. Moving to the cloud cut our infrastructure cost by nearly two-thirds, took our uptime to almost perfect, and — most importantly — gave us the room to grow without another expensive project every time. It changed what we could plan for."
      quoteAuthor="Chief Information Officer"
      quoteRole="Community bank"
      relatedStudies={[
        { title: "How a Precision Manufacturer Gained 40% Process Efficiency With a Modern ERP", metric: "40%", label: "process efficiency gain", link: "/capabilities/technology/case-studies/manufacturing-erp", image: "/images/industries/mfg-robot-arm.jpg" },
        { title: "How a Logistics Company Cut Partner Onboarding Time by 85% With an API Platform", metric: "85%", label: "faster partner onboarding", link: "/capabilities/technology/case-studies/logistics-api-platform", image: "/images/capabilities/cap-warehouse-robot.jpg" }
      ]}
      ctaTitle="Is legacy infrastructure capping your growth?"
      ctaDescription="Let's migrate to a scalable cloud foundation that cuts cost and removes the ceiling."
    />
  );
}
