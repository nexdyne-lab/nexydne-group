import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Clock, DollarSign, Target, Cog, Zap, Wrench, Activity } from "lucide-react";

export default function DigitalTwinPredictiveOperations() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Seeing Breakdowns Before They Happen | Manufacturing Case Study"
      seoDescription="A mid-sized manufacturer kept losing production to machines that failed without warning. A live digital replica of its line cut unplanned downtime by 45% and saved millions."
      canonical="/cases/digital-twin-predictive-operations"
      industry="Manufacturing"
      industryLink="/industries/manufacturing"
      title="How a Manufacturer Cut Unplanned Downtime by 45% by Seeing Breakdowns Coming"
      subtitle="A mid-sized manufacturer kept losing production to machines that stopped without warning. Building a live digital replica of its line — fed by the machines' own sensors — let it fix problems on a schedule instead of in a scramble."
      heroImage="/images/industries/mfg-robot-arm.jpg"
      metrics={[
        { value: "45%", label: "Less Unplanned Downtime" },
        { value: "12%", label: "More Throughput" },
        { value: "$6M", label: "Saved Each Year" },
        { value: "30%", label: "Less Scrap" }
      ]}
      clientContextTitle="When a Line Stops Without Warning, Everything Downstream Pays"
      clientContextIntro="A mid-sized manufacturer — a company that runs a single high-volume plant making precision components — measured its success in how steadily its production line kept moving. But the line had a habit of stopping without warning. A motor would overheat, a bearing would seize, and a machine that had been running fine an hour earlier would suddenly bring a whole section of the line to a halt."
      clientContextBody="Each stoppage was expensive in ways that compounded. Maintenance crews scrambled to diagnose the fault, orders backed up behind the idle machine, and the parts already in progress often had to be scrapped. The company's answer had been to service equipment on a fixed calendar — every so many weeks, whether a machine needed it or not — which meant it was simultaneously doing maintenance that wasn't needed and still being blindsided by the failures that mattered. Leadership knew the machines were generating a constant stream of data about their own condition; the trouble was that almost none of it was being used."
      clientProfile={{
        industry: "Industrial Manufacturer",
        companySize: "~$400M Annual Revenue",
        projectDuration: "12 Months",
        additionalInfo: "1 Plant",
        additionalLabel: "Production Site"
      }}
      challengeTitle="Why Production Kept Grinding to a Halt"
      challenges={[
        {
          icon: Zap,
          title: "Failures With No Warning",
          description: "Machines stopped without notice, turning a routine shift into an all-hands scramble to find and fix the fault."
        },
        {
          icon: Clock,
          title: "Downtime No One Could Plan For",
          description: "Unplanned stoppages could not be scheduled around, so they landed at the worst moments and rippled down the whole line."
        },
        {
          icon: Cog,
          title: "Maintenance on the Wrong Clock",
          description: "Servicing ran on a fixed calendar — too often for healthy machines, not soon enough for the ones about to fail."
        },
        {
          icon: Target,
          title: "Scrap From Sudden Stops",
          description: "Parts caught mid-process when a machine failed usually had to be thrown away, adding waste on top of lost time."
        }
      ]}
      approachTitle="Building a Live Replica of the Line"
      approachIntro="Working alongside the plant's operations and maintenance leaders, we set out to turn the data the machines were already producing into early warning — a live digital replica of the production line that could show trouble building and give crews the time to act before a breakdown."
      steps={[
        {
          step: "01",
          title: "Listening to the Machines",
          description: "We connected the sensors already built into the line — the ones tracking temperature, vibration, speed and the like — so their readings flowed into one place in real time, instead of sitting unused inside each machine."
        },
        {
          step: "02",
          title: "A Live Digital Replica of the Line",
          description: "We built a working model of the production line on screen that mirrored the real one moment by moment, fed by the machines' own data. Operators could see the health of every machine at a glance rather than walking the floor to check."
        },
        {
          step: "03",
          title: "Spotting Trouble Before It Stops the Line",
          description: "By learning what each machine's readings looked like in the days before past failures, the replica could flag a machine that was starting to drift — usually giving crews a week or more of warning that a part was heading toward failure."
        },
        {
          step: "04",
          title: "Fixing on a Schedule, Not in a Scramble",
          description: "With that warning in hand, maintenance moved from a fixed calendar to fixing what actually needed fixing, planned into quiet periods between runs — so repairs happened on the plant's terms rather than the machine's."
        }
      ]}
      resultsTitle="The Payoff"
      results={[
        {
          icon: Clock,
          value: "45%",
          label: "Less unplanned downtime",
          detail: "Failures caught early instead of on the floor"
        },
        {
          icon: Activity,
          value: "12%",
          label: "More throughput",
          detail: "A line that kept running produced more"
        },
        {
          icon: Wrench,
          value: "30%",
          label: "Less scrap",
          detail: "Fewer parts ruined by sudden stops"
        },
        {
          icon: DollarSign,
          value: "$6M",
          label: "Saved each year",
          detail: "Across downtime, scrap and maintenance"
        }
      ]}
      quote="We used to find out a machine was failing when it stopped the line — and by then it was already costing us. Now the replica tells us a week ahead, and we plan the fix into a gap in the schedule. Nothing about the machines changed. We just finally started using what they were already telling us."
      quoteAuthor="Vice President, Manufacturing"
      quoteRole="Industrial manufacturer"
      relatedStudies={[
        {
          title: "Resolving service requests end to end with AI agents",
          metric: "60%",
          label: "resolved without a handoff",
          link: "/cases/agentic-ai-service-resolution",
          image: "/images/industries/fin-trader.jpg"
        },
        {
          title: "Coding claims accurately with a model trained on its own records",
          metric: "40%",
          label: "fewer denials",
          link: "/cases/custom-model-clinical-coding",
          image: "/case-medical-collaboration.9602cc8c.jpg"
        }
      ]}
      ctaTitle="Ready to see your breakdowns coming?"
      ctaDescription="Let's talk about what a live view of your line could be worth."
    />
  );
}
