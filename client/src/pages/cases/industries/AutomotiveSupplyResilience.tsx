import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Cog, DollarSign, Target, Package, Search, ShieldCheck } from "lucide-react";

export default function AutomotiveSupplyResilience() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="De-Risking Chip Supply and Recall Traceability | Automotive Case Study"
      seoDescription="A components supplier kept losing production to chip and parts shortages and could not trace a suspect part quickly. Getting ahead of supply and tightening traceability cut line stoppages by 80%."
      canonical="/cases/automotive-supply-resilience"
      industry="Automotive"
      industryLink="/industries/automotive"
      title="De-Risking Parts Supply and Recall Traceability for a Components Supplier"
      subtitle="A supplier kept losing production when a single chip or component ran short, and when a quality issue surfaced it could not tell exactly which parts were affected. Getting ahead of supply and knowing where every part went changed both."
      heroImage="/images/industries/mfg-robot-arm.jpg"
      metrics={[
        { value: "80%", label: "Fewer Line Stoppages" },
        { value: "90%", label: "Faster Recall Tracing" },
        { value: "$7M", label: "Saved Each Year" },
        { value: "100%", label: "Parts Traceable" }
      ]}
      clientContextTitle="When One Missing Chip Stops the Whole Line"
      clientContextIntro="A components supplier built electronic assemblies that went into vehicles for several automakers. Those assemblies depended on a small number of specialised chips and components, some of them available from only one source. When any one of those parts ran short — as happened repeatedly through a stretch of unstable supply — the supplier's line simply stopped, and a stopped line meant missed shipments to customers who ran no inventory buffer of their own."
      clientContextBody="A second, quieter risk sat alongside the first. When a quality problem turned up in the field, the supplier struggled to say precisely which finished assemblies contained the suspect batch of parts. Records were incomplete and spread across systems, so the only safe answer was to cast a wide net — recalling or quarantining far more product than was actually affected, at considerable cost and to the alarm of its customers. The company was exposed on both ends: it could not keep the line reliably fed, and it could not quickly prove where its parts had gone."
      clientProfile={{
        industry: "Automotive Components Supplier",
        companySize: "~$540M Annual Revenue",
        projectDuration: "15 Months",
        additionalInfo: "3 Plants",
        additionalLabel: "Manufacturing Footprint"
      }}
      challengeTitle="Exposed on Both Ends"
      challenges={[
        {
          icon: Cog,
          title: "Lines Stopped by Shortages",
          description: "A single chip or component running short was enough to halt production, and the supplier's customers held no buffer to absorb a missed shipment."
        },
        {
          icon: Package,
          title: "Blind to Single-Source Risk",
          description: "Critical parts came from one supplier apiece, yet the company had no clear, current view of where those single points of failure sat."
        },
        {
          icon: Search,
          title: "Slow, Wide Recalls",
          description: "When a defect surfaced, incomplete records meant the supplier had to quarantine far more product than was actually affected — expensive and alarming to customers."
        },
        {
          icon: Target,
          title: "Reacting, Not Anticipating",
          description: "The company learned of a shortage when the part failed to arrive, leaving no time to find an alternative before the line went down."
        }
      ]}
      approachTitle="Seeing the Supply Coming and the Parts Going"
      approachIntro="We helped the supplier get ahead of its supply risk instead of reacting to it, and gave it the ability to trace any part from the moment it arrived to the finished assembly it ended up in — so a shortage could be headed off and a quality issue contained to exactly the parts involved."
      steps={[
        {
          step: "01",
          title: "Mapping Where the Risk Really Sat",
          description: "We built a clear picture of which parts came from a single source and which were most likely to run short, so the company knew exactly where its vulnerabilities were rather than being surprised by them one at a time."
        },
        {
          step: "02",
          title: "Early Warning on Supply",
          description: "We put in place a simple way to watch the health of critical suppliers and lead times, so a looming shortage raised a flag weeks ahead — long enough to draw down safety stock or qualify an alternative before the line was ever at risk."
        },
        {
          step: "03",
          title: "Second Sources for the Parts That Matter",
          description: "For the highest-risk components we helped the supplier qualify a second source, so no single vendor could bring the line down on its own — focusing the effort only where a single source genuinely threatened production."
        },
        {
          step: "04",
          title: "A Complete Trail for Every Part",
          description: "We connected the records so each incoming batch of components was tied to the finished assemblies it went into. If a defect appeared, the supplier could name the exact products affected in minutes instead of casting a wide, costly net."
        }
      ]}
      resultsTitle="A Supply Chain That Holds"
      results={[
        {
          icon: Cog,
          value: "80%",
          label: "Fewer line stoppages",
          detail: "Shortages headed off before they halted production"
        },
        {
          icon: Search,
          value: "90%",
          label: "Faster recall tracing",
          detail: "Affected parts identified in minutes, not days"
        },
        {
          icon: DollarSign,
          value: "$7M",
          label: "Saved each year",
          detail: "From avoided downtime and far narrower recalls"
        },
        {
          icon: ShieldCheck,
          value: "100%",
          label: "Parts traceable",
          detail: "Every batch tied to the assembly it ended up in"
        }
      ]}
      quote="Before, a single part running short could stop us cold, and when a quality issue came up we had to pull far more product than was really involved because we simply could not prove otherwise. Now we see the shortages coming and we can trace any part to the exact vehicle it went into. We stopped being at the mercy of our supply chain and started managing it."
      quoteAuthor="Vice President, Supply Chain"
      quoteRole="Automotive components supplier"
      relatedStudies={[
        {
          title: "Retooling a Supplier Line for Electric-Vehicle Parts",
          metric: "45%",
          label: "fewer launch defects",
          link: "/cases/automotive-ev-transition",
          image: "/images/industries/auto-robotics-team.jpg"
        },
        {
          title: "Turning Connected-Vehicle Data into Fewer Warranty Claims",
          metric: "30%",
          label: "fewer warranty claims",
          link: "/cases/automotive-connected-vehicle",
          image: "/images/industries/tech-datacenter.jpg"
        }
      ]}
      ctaTitle="Ready to take control of your supply risk?"
      ctaDescription="Let's talk about getting ahead of shortages and tracing every part with confidence."
    />
  );
}
