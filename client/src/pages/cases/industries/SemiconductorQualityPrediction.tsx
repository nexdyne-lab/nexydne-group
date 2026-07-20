import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Cpu, Target, TrendingUp, Zap, Database, DollarSign } from "lucide-react";

export default function SemiconductorQualityPrediction() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Catching Chip Defects Before They Happen | Manufacturing Case Study"
      seoDescription="A specialty chipmaker was scrapping wafer after wafer because flaws showed up only at the very end of a process hundreds of steps long. Spotting the warning signs early lifted yield 15% and cut scrap sharply."
      canonical="/cases/semiconductor-quality-prediction"
      industry="Manufacturing"
      industryLink="/industries/manufacturing"
      title="Helping a Chipmaker Catch Defects Weeks Earlier"
      subtitle="A semiconductor manufacturer was scrapping wafer after wafer of finished silicon because flaws only revealed themselves at the very end of a process hundreds of steps long. Reading the warning signs early turned quality from a post-mortem into a forecast."
      heroImage="/images/cases/semiconductor-quality-prediction-hero.jpg"
      metrics={[
        { value: "92%", label: "Defects Caught Early" },
        { value: "Half", label: "Of the Yield Gap Closed" },
        { value: "15%", label: "Higher Yield" },
        { value: "2hrs", label: "Earlier Warning" }
      ]}
      clientContextTitle="Flaws That Only Showed Up at the Finish Line"
      clientContextIntro="A semiconductor manufacturer built advanced chips at a single fabrication plant. Each chip is layered up over hundreds of separate steps onto a wafer — the thin silicon disc that carries hundreds of chips at once — and enormous value is locked into every wafer by the time it is finished. In a process that unforgiving, even a small dip in the share of chips that come out good is punishing: the plant was running a few points below its yield target, and the gap had become one of its largest avoidable costs."
      clientContextBody="The deeper problem was timing. A defect might be created early in the process but stay invisible until the very last test, days or even weeks later — by which point thousands of flawed wafers had already been pushed through the plant's most expensive stages. Engineers then spent weeks combing through data to find the root cause, while the same fault kept recurring. The plant did not need to detect defects better; it needed to see them coming."
      clientProfile={{
        industry: "Semiconductor Manufacturing",
        companySize: "Single Advanced Fab",
        projectDuration: "12 Months",
        additionalInfo: "Hundreds of Process Steps",
        additionalLabel: "Process Complexity"
      }}
      challengeTitle="A Yield Gap No One Could Close"
      challenges={[
        {
          icon: Target,
          title: "Found Too Late",
          description: "Defects surfaced only at final test, long after the step that caused them — by then thousands of wafers had already been affected."
        },
        {
          icon: Database,
          title: "Drowning in Data",
          description: "The plant generated enormous volumes of readings across hundreds of steps every day, far more than any engineer could sift through by hand."
        },
        {
          icon: DollarSign,
          title: "Costly Scrap",
          description: "With so much value locked into each finished wafer, a yield gap of a few points was among the plant's largest avoidable costs."
        },
        {
          icon: Cpu,
          title: "Hidden Causes",
          description: "Many defects came from subtle interactions between steps that traditional checks, looking at one step at a time, simply could not see."
        }
      ]}
      approachTitle="Turning Quality from Hindsight into Foresight"
      approachIntro="We helped the plant use the data it was already collecting to predict trouble rather than discover it — flagging the wafers likely to fail while there was still time to intervene, and pointing engineers straight at the cause instead of leaving them to hunt for it."
      steps={[
        {
          step: "01",
          title: "Bringing the Whole Process Together",
          description: "We pulled together the readings from every tool, measurement and test into one connected record, so that for the first time each wafer carried a complete, step-by-step history of everything that had happened to it."
        },
        {
          step: "02",
          title: "Learning What Precedes a Defect",
          description: "Working with the plant's own process experts, we identified the tell-tale signals buried in that history — the small tool-to-tool variations, timing shifts and recipe drifts that tend to come before a defect — and made sure each one made engineering sense."
        },
        {
          step: "03",
          title: "Predicting Failures in Real Time",
          description: "The system scored each wafer's likelihood of failing after every critical step, catching yield-threatening defects with 92% accuracy and around two hours before the plant's existing checks would have found them."
        },
        {
          step: "04",
          title: "Pointing Straight at the Cause",
          description: "Rather than raising a bare alarm, the system showed which process conditions were driving each prediction — so engineers could go directly to the source, correct it, and stop the fault repeating."
        }
      ]}
      resultsTitle="Catching Problems Before They Cost"
      results={[
        {
          icon: Target,
          value: "92%",
          label: "Defects caught early",
          detail: "Of the flaws that actually threaten yield"
        },
        {
          icon: DollarSign,
          value: "Year one",
          label: "Payback on the program",
          detail: "Catching faults early keeps flawed wafers out of costly later steps"
        },
        {
          icon: TrendingUp,
          value: "15%",
          label: "Higher yield",
          detail: "Closing about half of the gap to target"
        },
        {
          icon: Zap,
          value: "2hrs",
          label: "Earlier warning",
          detail: "Enough time to act before the damage spread downstream"
        }
      ]}
      quote="We went from finding our defects at the very end to seeing them coming while there was still time to do something. The system spots patterns in our process data that our best engineers couldn't uncover in months. We are not just catching bad wafers sooner — we are stopping them from being made."
      quoteAuthor="Vice President, Manufacturing Technology"
      quoteRole="Semiconductor manufacturer"
      relatedStudies={[
        {
          title: "Lifting Plant Productivity by 40%",
          metric: "40%",
          label: "higher productivity",
          link: "/cases/automotive-smart-factory",
          image: "/images/industries/mfg-robotics.jpg"
        },
        {
          title: "Turning an Equipment Maker into a Services Business",
          metric: "2,700",
          label: "machines on connected services",
          link: "/cases/industrial-connected-products",
          image: "/images/capabilities/cap-battery-factory.jpg"
        }
      ]}
      ctaTitle="Ready to see quality problems before they cost you?"
      ctaDescription="Let's talk about turning your process data into early warning."
    />
  );
}
