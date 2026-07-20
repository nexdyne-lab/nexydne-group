import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { DollarSign, Target, Zap, Shield, Layers } from "lucide-react";

export default function StrategicSourcingSavings() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Cutting Materials Cost and De-Risking the Supply Base | Manufacturing Case Study"
      seoDescription="A manufacturer's spending was scattered across hundreds of suppliers with little leverage, yet dangerously concentrated on a few for critical parts. Seeing its full spend clearly cut materials cost by 12% and removed single-source risk."
      canonical="/cases/strategic-sourcing-savings"
      industry="Manufacturing"
      industryLink="/industries/manufacturing"
      title="How a Manufacturer Cut Materials Cost by 12% and Steadied Its Supply Base"
      subtitle="A mid-sized manufacturer was buying the same things from too many suppliers, yet leaning on too few for the parts it could not do without. Seeing its full spend clearly for the first time changed both at once."
      heroImage="/images/industries/mfg-robotics.jpg"
      metrics={[
        { value: "12%", label: "Lower Materials Cost" },
        { value: "$14M", label: "Annual Savings" },
        { value: "40%", label: "Fewer Suppliers" },
        { value: "0", label: "Critical Single-Source Parts" }
      ]}
      clientContextTitle="Buying the Same Thing a Dozen Different Ways"
      clientContextIntro="A manufacturer with a few hundred million dollars in revenue and two production plants bought thousands of different materials and components every year — everything from raw metal and packaging to specialized parts. Over time, and without anyone deciding it should happen, that buying had spread across hundreds of suppliers. Different plants, and even different people within the same plant, purchased the same items from different vendors at different prices, often unaware the others existed."
      clientContextBody="The result was the worst of both worlds. On everyday items the company had scattered its buying so widely that it had almost no negotiating power — it was a small customer to everyone and an important one to no one. Yet on a handful of critical parts it had drifted into the opposite trap, depending entirely on a single supplier with no backup. If one of those suppliers had a fire, a strike or a bad quarter, a plant could stop. Leadership knew materials were its single largest cost, but no one could say, in one place, exactly what the company was buying, from whom, or for how much."
      clientProfile={{
        industry: "Industrial Manufacturer",
        companySize: "~$400M Annual Revenue",
        projectDuration: "12 Months",
        additionalInfo: "2 Plants",
        additionalLabel: "Production Sites"
      }}
      challengeTitle="Why the Spend Was Working Against Them"
      challenges={[
        {
          icon: Layers,
          title: "Spend Scattered Too Thin",
          description: "The same materials were bought from many suppliers at many prices, so the company never brought its full volume to the table or earned the discount that volume deserves."
        },
        {
          icon: Shield,
          title: "Dangerous Single-Source Reliance",
          description: "For several critical parts the company depended on one supplier with no alternative — a single disruption could have idled a plant."
        },
        {
          icon: Target,
          title: "No Clear View of the Spend",
          description: "Purchasing data sat in separate systems across both plants, so no one could see the total picture of what was being bought and from whom."
        },
        {
          icon: DollarSign,
          title: "Savings Left on the Table",
          description: "Because buying was fragmented and invisible, obvious opportunities to consolidate and negotiate simply went unnoticed year after year."
        }
      ]}
      approachTitle="From Scattered Buying to a Deliberate Strategy"
      approachIntro="Working alongside the company's purchasing and plant leaders, we set out to do two things at once: give the business a single, honest view of everything it was buying, and then use that view to lower cost and remove risk — without ever putting quality or on-time delivery at stake."
      steps={[
        {
          step: "01",
          title: "One Clear Picture of Every Dollar Spent",
          description: "We pulled purchasing data from both plants into one place and sorted it into plain categories — what was being bought, from which suppliers, and at what prices. For the first time the company could see its entire spend on a single screen, and the overlaps and gaps were impossible to miss."
        },
        {
          step: "02",
          title: "Consolidating Where It Made Sense",
          description: "For everyday materials bought from many vendors, we brought the volume together and negotiated with a shorter list of suppliers as a single, larger customer. We were deliberate about it — consolidating only where it lowered cost without leaving the company overexposed to any one vendor."
        },
        {
          step: "03",
          title: "Building In a Backup for Critical Parts",
          description: "For the parts a plant could not run without, we did the opposite: we qualified a second, approved supplier for each one. That meant more competitive pricing and, more importantly, a real fallback if the primary supplier ever failed."
        },
        {
          step: "04",
          title: "A Sourcing Strategy That Sticks",
          description: "We gave each category of spend a clear plan — how many suppliers to use, how to award business, and when to revisit terms — and put simple reporting in place so leaders could see savings and supplier risk at a glance. The discipline outlasted the project."
        }
      ]}
      resultsTitle="Lower Cost and a Steadier Supply Base"
      results={[
        {
          icon: DollarSign,
          value: "12%",
          label: "Lower materials cost",
          detail: "About $14M saved every year"
        },
        {
          icon: Layers,
          value: "40%",
          label: "Fewer suppliers",
          detail: "Volume consolidated where it earned leverage"
        },
        {
          icon: Shield,
          value: "0",
          label: "Critical single-source parts",
          detail: "A qualified backup for every part a plant depends on"
        },
        {
          icon: Zap,
          value: "No",
          label: "Hit to quality or delivery",
          detail: "On-time delivery and quality held steady throughout"
        }
      ]}
      quote="We had convinced ourselves that our costs were simply what they were. The truth was we had never really looked. Once we could see everything we were buying in one place, the savings were sitting right in front of us — and so were the risks. We came out spending less and sleeping better, without cutting a single corner on quality."
      quoteAuthor="Chief Procurement Officer"
      quoteRole="Industrial manufacturer"
      relatedStudies={[
        {
          title: "Matching staffing to demand, shift by shift",
          metric: "Less",
          label: "overtime and understaffing",
          link: "/cases/workforce-scheduling-optimization",
          image: "/images/cases/workforce-scheduling-optimization-hero.jpg"
        },
        {
          title: "Lifting plant productivity by 40% at a vehicle maker",
          metric: "40%",
          label: "more productive",
          link: "/cases/automotive-smart-factory",
          image: "/images/industries/mfg-robotics.jpg"
        }
      ]}
      ctaTitle="Ready to see what you're really spending?"
      ctaDescription="Let's talk about turning a clear view of your spend into lower cost and a steadier supply base."
    />
  );
}
