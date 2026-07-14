import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Factory, Cog, TrendingUp, Zap, Shield, Clock, BarChart3 } from "lucide-react";

export default function AutomotiveSmartFactory() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Turning an Aging Plant into a Smart Factory | Manufacturing Case Study"
      seoDescription="A vehicle manufacturer had watched output from its flagship plant plateau for years. Connecting the line and acting on its equipment's own signals lifted productivity by 40% and avoided $18M a year."
      canonical="/cases/automotive-smart-factory"
      industry="Manufacturing"
      industryLink="/industries/manufacturing"
      title="How a Vehicle Manufacturer Lifted Plant Productivity by 40%"
      subtitle="A manufacturer's flagship plant had run much the same way for thirty years, and its output had stopped improving. Connecting the line and acting on the signals its own machines were already sending changed what the plant could produce."
      heroImage="/images/industries/mfg-robotics.jpg"
      metrics={[
        { value: "40%", label: "Higher Productivity" },
        { value: "65%", label: "Less Unplanned Downtime" },
        { value: "$18M", label: "Saved Each Year" },
        { value: "99.2%", label: "Right First Time" }
      ]}
      clientContextTitle="A Thirty-Year-Old Plant That Had Stopped Getting Better"
      clientContextIntro="A vehicle manufacturer ran its flagship assembly plant much as it had for three decades. Years of continuous-improvement work had made the operation leaner, yet its productivity had flattened: the plant was turning only about 62 cents of every dollar of its equipment's capacity into finished vehicles, against an industry best of roughly 85. When a machine stopped without warning, a single lost hour of production could cost tens of thousands of dollars."
      clientContextBody="The deeper trouble was that the plant could never see problems coming. Equipment was maintained on a fix-it-when-it-breaks basis, so failures arrived as surprises and always at the wrong moment. Quality defects were caught late in the line, after the cost of the work was already sunk, and putting them right meant expensive rework. The plant's leaders knew modernization was overdue, but the investment was large and the case for it hard to prove — until they could show, in the plant's own numbers, exactly where the lost capacity was going."
      clientProfile={{
        industry: "Automotive Manufacturing",
        companySize: "~$500M Annual Revenue",
        projectDuration: "18 Months",
        additionalInfo: "30-Year-Old Plant",
        additionalLabel: "Flagship Facility"
      }}
      challengeTitle="Why the Plant Had Stopped Improving"
      challenges={[
        {
          icon: Factory,
          title: "Capacity Left on the Table",
          description: "The plant converted only about 62% of its equipment's capacity into finished vehicles, well short of the roughly 85% the best plants achieve."
        },
        {
          icon: Clock,
          title: "Downtime Without Warning",
          description: "Unplanned breakdowns took the line out for around 180 hours a month, each stopped hour costing tens of thousands of dollars in lost production."
        },
        {
          icon: Shield,
          title: "Defects Caught Too Late",
          description: "Quality problems surfaced far down the line, after the work was done — putting them right meant costly rework on more than three vehicles in a hundred."
        },
        {
          icon: Cog,
          title: "Maintenance as Firefighting",
          description: "With no read on the health of its equipment until something failed, the maintenance team spent its days reacting to emergencies rather than preventing them."
        }
      ]}
      approachTitle="Building a Plant That Could See Itself"
      approachIntro="Working alongside the plant's own engineers and operators, we set out to give the factory something it had never had: a clear, live picture of how every machine and station was performing — so that trouble could be spotted and dealt with before it stopped the line or spoiled a vehicle."
      steps={[
        {
          step: "01",
          title: "Giving the Equipment a Voice",
          description: "We fitted the plant's critical machines with sensors that read the things which quietly precede a breakdown — vibration, temperature, the current a motor draws — and added cameras at the points where quality mattered most. For the first time, the equipment could report its own condition instead of failing silently."
        },
        {
          step: "02",
          title: "One Live View of the Whole Line",
          description: "We brought those readings together into a single, real-time picture of the line that operators could actually use — showing where production was flowing, where it was backing up, and where a bottleneck was forming, in time to act before it cost throughput."
        },
        {
          step: "03",
          title: "Fixing Problems Before They Happen",
          description: "By learning the patterns that came before past failures, the system could flag a developing fault two to three weeks ahead. Repairs moved from emergency call-outs to planned work, folded into downtime the plant had scheduled anyway."
        },
        {
          step: "04",
          title: "Catching Defects at the Source",
          description: "The cameras checked quality at each station as work was done, and when something drifted out of tolerance the system traced it back to where it started and alerted the operator on the spot — so a defect was corrected once, not built into vehicle after vehicle."
        }
      ]}
      resultsTitle="A Plant Performing at Its Best"
      results={[
        {
          icon: TrendingUp,
          value: "40%",
          label: "Higher productivity",
          detail: "From about 62% of capacity to 87% — past the industry benchmark"
        },
        {
          icon: Zap,
          value: "65%",
          label: "Less unplanned downtime",
          detail: "From roughly 180 stopped hours a month to 63"
        },
        {
          icon: BarChart3,
          value: "$18M",
          label: "Saved each year",
          detail: "From higher output and far less emergency maintenance"
        },
        {
          icon: Shield,
          value: "99.2%",
          label: "Right the first time",
          detail: "Up from 96.8% — around 80% fewer defects"
        }
      ]}
      quote="We took a plant that had been running the same way for thirty years and gave it a new way of working. Within months we were building more vehicles, at higher quality, for less — but the deeper change is in our people. They no longer wait for something to break; they watch the numbers and act before it does."
      quoteAuthor="Plant Manager"
      quoteRole="Automotive manufacturer"
      relatedStudies={[
        {
          title: "Catching Chip Defects Before They Happen",
          metric: "92%",
          label: "defect prediction accuracy",
          link: "/cases/semiconductor-quality-prediction",
          image: "/images/industries/mfg-robot-arm.jpg"
        },
        {
          title: "Turning an Equipment Maker into a Services Business",
          metric: "$30M",
          label: "new service revenue",
          link: "/cases/industrial-connected-products",
          image: "/images/capabilities/cap-battery-factory.jpg"
        }
      ]}
      ctaTitle="Ready to see what your plant is really capable of?"
      ctaDescription="Let's talk about what a clearer view of your operation could be worth."
    />
  );
}
