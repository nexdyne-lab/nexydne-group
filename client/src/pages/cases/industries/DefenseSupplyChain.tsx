import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Plane, Package, Shield, DollarSign, Target, Truck } from "lucide-react";

export default function DefenseSupplyChain() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="98% Fleet Readiness for a Defense Prime | Aerospace & Defense Case Study"
      seoDescription="A defense sustainment provider was grounding aircraft for want of parts while spare inventory sat in the wrong warehouses. Getting ahead of demand lifted mission readiness to 98% and freed up capital."
      canonical="/cases/supply-chain-visibility"
      industry="Aerospace & Defense"
      industryLink="/industries/aerospace-defense"
      title="Getting the Right Part to the Right Base: 98% Fleet Readiness for a Defense Prime"
      subtitle="A defense sustainment provider was grounding aircraft for want of parts while spare inventory sat in the wrong warehouses. Anticipating demand instead of reacting to it lifted readiness and freed capital at the same time."
      heroImage="/images/cases/supply-chain-visibility-hero.jpg"
      metrics={[
        { value: "98%", label: "Mission Readiness" },
        { value: "35%", label: "Better Availability" },
        { value: "25%", label: "Less Inventory" },
        { value: "$9M", label: "Saved Each Year" }
      ]}
      clientContextTitle="Billions in Inventory, and Aircraft Still Grounded"
      clientContextIntro="A defense sustainment provider kept a fleet of around 300 military aircraft mission-ready for its government customers across roughly 30 sites. In this business a missing part is not an inconvenience — a grounded aircraft is a mission that cannot be flown. Yet at any given moment roughly one aircraft in seven was waiting on a part, even as some $80 million in spares sat idle in warehouses."
      clientContextBody="The root of the problem was timing. The supply chain reacted to failures after they happened, and it stocked parts based on what had been needed in the past rather than what would be needed next. For the low-volume, high-stakes components that actually keep aircraft flying, that left the provider perpetually a step behind — too much of the wrong inventory, too little of the right, and mission readiness paying the price."
      clientProfile={{
        industry: "Defense Sustainment Provider",
        companySize: "~$450M Annual Revenue",
        projectDuration: "16 Months",
        additionalInfo: "~300 Aircraft",
        additionalLabel: "Fleet Supported"
      }}
      challengeTitle="Mission Readiness at Risk"
      challenges={[
        {
          icon: Plane,
          title: "Aircraft Waiting on Parts",
          description: "About 15% of the fleet was grounded at any time for want of a component — mission capability held hostage by the supply chain."
        },
        {
          icon: Package,
          title: "Capital in the Wrong Places",
          description: "Some $80 million in spares sat unused, tying up capital in the wrong parts at the wrong locations."
        },
        {
          icon: Target,
          title: "Forecasts That Missed What Mattered",
          description: "Demand planning worked for common parts but broke down on the rare, critical components that actually ground aircraft."
        },
        {
          icon: Truck,
          title: "Always a Step Behind",
          description: "Inventory was positioned from history rather than anticipation, so parts were seldom where the next failure would occur."
        }
      ]}
      approachTitle="From Reacting to Anticipating"
      approachIntro="We helped the contractor stop chasing failures and start staying ahead of them — anticipating which parts would be needed, where and when, and positioning them before an aircraft ever came down for repair."
      steps={[
        {
          step: "01",
          title: "Seeing Failures Coming",
          description: "Using each aircraft's usage, operating conditions and maintenance history, we built models that flagged likely component failures well before they happened — for most parts, a month or more of warning."
        },
        {
          step: "02",
          title: "A Clearer Read on Demand",
          description: "We combined those early warnings with maintenance schedules and mission plans to produce forecasts that finally held up for the rare, critical parts that had always been hardest to predict."
        },
        {
          step: "03",
          title: "Putting Parts Where They'll Be Needed",
          description: "We positioned inventory across all 30 sites according to what was actually likely to be needed and how critical it was — moving the right parts forward before the demand arrived, not after."
        },
        {
          step: "04",
          title: "Moving Fast When It Counts",
          description: "We coordinated shipments across commercial and military transport, automatically expediting the parts that affected readiness while routing everything else for the lowest cost."
        }
      ]}
      resultsTitle="A Supply Chain Ready for the Mission"
      results={[
        {
          icon: Plane,
          value: "98%",
          label: "Mission readiness",
          detail: "Up from 85% — aircraft ready to fly"
        },
        {
          icon: Shield,
          value: "35%",
          label: "Better parts availability",
          detail: "The right part, where and when it was needed"
        },
        {
          icon: Package,
          value: "25%",
          label: "Less inventory",
          detail: "About $20M in capital freed up"
        },
        {
          icon: DollarSign,
          value: "$9M",
          label: "Saved each year",
          detail: "Across inventory and logistics"
        }
      ]}
      quote="Readiness was never about holding more inventory — it was about holding the right inventory in the right place. Once we could see a failure coming a month out, we could have the replacement waiting. That is the difference between an aircraft that flies its mission and one that sits on the ground."
      quoteAuthor="Vice President, Global Logistics"
      quoteRole="Defense contractor"
      relatedStudies={[
        {
          title: "Bringing Aircraft Programs to Market Faster",
          metric: "40%",
          label: "faster development",
          link: "/cases/aerospace-digital-engineering",
          image: "/images/industries/aero-rocket.jpg"
        },
        {
          title: "Halving Surprise Groundings for an Airline",
          metric: "50%",
          label: "fewer unplanned groundings",
          link: "/cases/logistics-optimization",
          image: "/images/industries/ops-monitors-dark.jpg"
        }
      ]}
      ctaTitle="Ready to put readiness ahead of guesswork?"
      ctaDescription="Let's talk about anticipating demand instead of reacting to it."
    />
  );
}
