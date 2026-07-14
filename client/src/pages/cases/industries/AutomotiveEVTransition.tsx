import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Clock, DollarSign, Target, Cog, Zap, Gauge } from "lucide-react";

export default function AutomotiveEVTransition() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Retooling a Components Line for Electric Vehicles | Automotive Case Study"
      seoDescription="A components supplier had to convert a line to electric-vehicle parts without a rough, expensive launch. A disciplined approach cut launch defects by 45% and lowered unit cost by 22%."
      canonical="/cases/automotive-ev-transition"
      industry="Automotive"
      industryLink="/industries/automotive"
      title="Retooling a Supplier Line for Electric-Vehicle Parts — Without a Rough Launch"
      subtitle="A components maker had to convert an existing line to electric-vehicle parts while its old business still had to ship every day. Treating the switch as an engineering problem, not a scramble, changed the economics of the launch."
      heroImage="/images/industries/auto-robotics-team.jpg"
      metrics={[
        { value: "45%", label: "Fewer Launch Defects" },
        { value: "22%", label: "Lower Unit Cost" },
        { value: "$6M", label: "Cost Avoided" },
        { value: "3 mo", label: "Faster to Full Rate" }
      ]}
      clientContextTitle="A New Product on an Old Line, With No Room to Fail"
      clientContextIntro="A components supplier — a company that makes precision parts that go into vehicles built by larger automakers — had won its first major electric-vehicle program. The part was new, the tolerances were tighter than anything the plant had made before, and the work had to be done on a line that was still producing the supplier's established products every day. There was no spare building and no spare crew; the same floor and the same people had to carry both the old business and the new one."
      clientContextBody="Early builds went badly. The first electric-vehicle parts came off the line with defect rates several times higher than the plant's mature products, and every reject was expensive scrap. Getting to an acceptable quality level was taking far longer than the program plan allowed, and the cost of each good part was running well above the price the supplier had quoted to win the work. Left alone, the program would have launched late, missed its margins, and put the customer relationship at risk. Leadership recognized that the problem was not the workforce's effort but the way the line had been set up to learn — slowly, and only after mistakes had already been made."
      clientProfile={{
        industry: "Automotive Components Supplier",
        companySize: "~$380M Annual Revenue",
        projectDuration: "14 Months",
        additionalInfo: "2 Plants",
        additionalLabel: "Manufacturing Footprint"
      }}
      challengeTitle="Why the Launch Was Struggling"
      challenges={[
        {
          icon: Target,
          title: "High Defect Rates on New Parts",
          description: "The first electric-vehicle parts came off the line with defect rates several times those of the plant's established products — every reject was costly scrap."
        },
        {
          icon: DollarSign,
          title: "Cost Above the Quoted Price",
          description: "The cost of each good part was running well above what the supplier had quoted to win the program, quietly erasing the margin the work was meant to earn."
        },
        {
          icon: Clock,
          title: "A Slow, Painful Ramp",
          description: "Reaching an acceptable quality level was taking far longer than the plan allowed, threatening to push the launch past the customer's start-of-production date."
        },
        {
          icon: Cog,
          title: "Two Programs, One Floor",
          description: "The new line shared space, equipment and people with the supplier's existing business, so every hour spent fixing the launch was an hour taken from products already sold."
        }
      ]}
      approachTitle="Engineering the Launch Instead of Surviving It"
      approachIntro="Working alongside the plant's engineers and line leaders, we set out to make the new line learn quickly and deliberately — finding the sources of variation before they became scrap, and building the quality into the process rather than inspecting it in at the end."
      steps={[
        {
          step: "01",
          title: "Finding Where the Defects Really Came From",
          description: "Rather than treat every reject the same, we traced defects back to their true source — a handful of process steps where small variations in setup and material were doing most of the damage. That turned a vague quality problem into a short, specific list to fix."
        },
        {
          step: "02",
          title: "Locking Down the Critical Few Steps",
          description: "We tightened and standardised the settings on those critical steps and put simple checks in place so an operator could see a process drifting before it produced a bad part, instead of discovering the problem in an inspection bin afterward."
        },
        {
          step: "03",
          title: "Cross-Training a Stretched Crew",
          description: "Because the same people ran both the old and new work, we built clear, hands-on training and work instructions for the new part so quality no longer depended on which experienced operator happened to be on shift."
        },
        {
          step: "04",
          title: "Ramping Volume as Quality Earned It",
          description: "We tied each increase in production rate to the line actually holding its quality, so the plant sped up only when it was ready. The ramp was steadier, and the expensive back-and-forth of pushing volume before the process was stable disappeared."
        }
      ]}
      resultsTitle="A Launch That Paid Off"
      results={[
        {
          icon: Target,
          value: "45%",
          label: "Fewer launch defects",
          detail: "Quality built into the process, not inspected in"
        },
        {
          icon: Gauge,
          value: "22%",
          label: "Lower unit cost",
          detail: "Less scrap and rework on every part made"
        },
        {
          icon: DollarSign,
          value: "$6M",
          label: "Cost avoided",
          detail: "Largely from scrap and delay that never happened"
        },
        {
          icon: Zap,
          value: "3 mo",
          label: "Faster to full rate",
          detail: "The line hit its production target ahead of plan"
        }
      ]}
      quote="We had won the work, but for a while it looked like winning it might cost us money. The turning point was realizing most of our scrap came from just a few steps. Once we controlled those, the line settled down, the cost came back to where we had promised, and we launched on time. That program is now a reference we point new customers to."
      quoteAuthor="Vice President, Operations"
      quoteRole="Automotive components supplier"
      relatedStudies={[
        {
          title: "Turning Connected-Vehicle Data into Fewer Warranty Claims",
          metric: "30%",
          label: "fewer warranty claims",
          link: "/cases/automotive-connected-vehicle",
          image: "/images/industries/tech-datacenter.jpg"
        },
        {
          title: "De-Risking Parts Supply and Recall Traceability",
          metric: "80%",
          label: "fewer line stoppages",
          link: "/cases/automotive-supply-resilience",
          image: "/images/industries/mfg-robot-arm.jpg"
        }
      ]}
      ctaTitle="Ready to launch a new program cleanly?"
      ctaDescription="Let's talk about building quality and cost into the line before the ramp begins."
    />
  );
}
