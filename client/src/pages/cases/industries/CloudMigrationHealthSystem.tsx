import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Clock, DollarSign, Target, Cog, Server, ShieldCheck, Activity } from "lucide-react";

export default function CloudMigrationHealthSystem() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Moving a Health System to the Cloud Without Disrupting Care | Healthcare Case Study"
      seoDescription="A regional health system was pinned down by aging on-premise systems that were costly and fragile. A careful, phased move to the cloud cut infrastructure cost by 35% and improved uptime — with zero disruption to patient care."
      canonical="/cases/cloud-migration-health-system"
      industry="Healthcare"
      industryLink="/industries/healthcare"
      title="Moving a Regional Health System to the Cloud Without Ever Interrupting Care"
      subtitle="Aging on-premise systems were expensive to run, fragile under load, and impossible to scale. A patient, workload-by-workload move to the cloud changed the economics without ever putting care at risk."
      heroImage="/images/industries/tech-datacenter.jpg"
      metrics={[
        { value: "35%", label: "Lower Infrastructure Cost" },
        { value: "99.95%", label: "Core System Uptime" },
        { value: "0", label: "Care Disruptions" },
        { value: "$6M", label: "Saved Over Three Years" }
      ]}
      clientContextTitle="When the Data Center Becomes the Bottleneck"
      clientContextIntro="A regional health system — a group of hospitals and clinics serving communities across several counties — ran its most important systems on servers it owned and managed in its own data centers. Those systems had been dependable for years, but they were aging. The hardware was near the end of its life, capacity was fixed, and every burst of demand — a busy flu season, a new clinic coming online — meant either buying more equipment months in advance or living with systems that slowed to a crawl."
      clientContextBody="The cost was mounting on two fronts. The obvious one was money: maintaining the hardware, the data-center space, the licenses and the specialists who kept it all running consumed a growing share of the technology budget every year. The quieter cost was risk. A single failed component could take a clinical application offline, and a health system cannot simply wait for a replacement part while clinicians are seeing patients. Leadership wanted the flexibility and resilience of the cloud — but they were unwilling to accept even a minute of downtime in systems that care depended on. That tension, not the technology, was the real challenge."
      clientProfile={{
        industry: "Regional Health System",
        companySize: "~$700M Annual Revenue",
        projectDuration: "20 Months",
        additionalInfo: "40+ Core Applications",
        additionalLabel: "Systems Migrated"
      }}
      challengeTitle="Why Standing Still Was the Risk"
      challenges={[
        {
          icon: DollarSign,
          title: "A Rising Fixed Cost",
          description: "Owning and maintaining the hardware, space and specialists to run it consumed an ever-larger share of the budget — spend that grew whether or not the systems were busy."
        },
        {
          icon: Server,
          title: "Capacity That Could Not Flex",
          description: "Every seasonal surge or new site meant buying equipment months ahead. Too little capacity slowed systems down; too much sat idle and paid for itself only in peaks."
        },
        {
          icon: Target,
          title: "Fragile Under Pressure",
          description: "Aging hardware meant a single failed component could take a clinical application offline — and a replacement part was hours or days away, not minutes."
        },
        {
          icon: Clock,
          title: "No Room to Add What's Next",
          description: "New capabilities the clinicians wanted kept waiting behind an infrastructure that had no spare room to grow into."
        }
      ]}
      approachTitle="A Move Measured in Workloads, Not Big Bangs"
      approachIntro="Working alongside the health system's technology and clinical leaders, we set one rule above all others: care would never be interrupted. So rather than a single risky cutover, we moved the systems to the cloud one workload at a time — proving each one worked in its new home before anyone relied on it, and keeping the old system ready until we were certain."
      steps={[
        {
          step: "01",
          title: "Start Where the Risk Is Lowest",
          description: "We sorted the forty-plus applications by how tightly care depended on them, and moved the least critical systems first. Each early move taught us something and built confidence, so that by the time we reached the clinical systems, the path was well worn."
        },
        {
          step: "02",
          title: "Prove Every Workload Before Cutting Over",
          description: "For each system, we stood up its new cloud home and ran it in parallel with the old one — checking that it performed, held its data and behaved exactly as expected under real load. Only once a workload had proven itself did we make the switch."
        },
        {
          step: "03",
          title: "Cut Over Quietly, With a Way Back",
          description: "We scheduled each cutover for the quietest possible window and kept the original system on standby, ready to fall back to in minutes if anything looked wrong. Clinicians saw no change beyond systems that were faster and more reliable than before."
        },
        {
          step: "04",
          title: "Pay for What You Use, Not What You Might Need",
          description: "Once in the cloud, systems scaled up automatically for a busy season or a new clinic and scaled back down afterward. The health system stopped paying for idle capacity and started paying for what it actually used."
        }
      ]}
      resultsTitle="A Foundation That Flexes"
      results={[
        {
          icon: DollarSign,
          value: "35%",
          label: "Lower infrastructure cost",
          detail: "About $6M saved over three years"
        },
        {
          icon: ShieldCheck,
          value: "99.95%",
          label: "Core system uptime",
          detail: "Fewer outages, and faster recovery from the ones that occurred"
        },
        {
          icon: Activity,
          value: "0",
          label: "Disruptions to patient care",
          detail: "Every cutover invisible to clinicians and patients"
        },
        {
          icon: Cog,
          value: "Weeks",
          label: "To add new capabilities",
          detail: "What once took months of hardware lead time now takes weeks"
        }
      ]}
      quote="The board's first question was always the same: can you promise this won't touch patient care? Moving one workload at a time — and proving each one before we relied on it — is how we could honestly say yes. We came out with lower costs and better uptime, but the real win was doing it without a single clinician ever noticing the ground move beneath them."
      quoteAuthor="Chief Information Officer"
      quoteRole="Regional health system"
      relatedStudies={[
        {
          title: "Modernizing a legacy core without a big-bang rewrite",
          metric: "0",
          label: "big-bang cutovers",
          link: "/cases/legacy-core-modernization",
          image: "/images/industries/ops-monitors-dark.jpg"
        },
        {
          title: "Shipping faster with an internal developer platform",
          metric: "3x",
          label: "faster releases",
          link: "/cases/platform-engineering-developer-velocity",
          image: "/images/capabilities/cap-conference-data.jpg"
        }
      ]}
      ctaTitle="Ready to move to the cloud without moving the ground beneath your teams?"
      ctaDescription="Let's talk about a phased path that protects the work that can't stop."
    />
  );
}
