import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Layers, DollarSign, Target, Clock, TrendingUp, MapPin } from "lucide-react";

export default function UrbanMasterPlanning() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Phasing a Mixed-Use District for Stronger Returns | Urban Development Case Study"
      seoDescription="A mid-sized developer was trying to build an entire district at once and straining its balance sheet. Planning the district as a sequence of phases lifted projected returns by 18% and cut the capital it had to put at risk at any one time."
      canonical="/cases/urban-master-planning"
      industry="Urban Development"
      industryLink="/industries/urban-development"
      title="How a Developer Phased a New District and Raised Projected Returns 18%"
      subtitle="A mid-sized developer had won the rights to a large mixed-use district but no clear plan for the order in which to build it. Treating the district as a sequence of phases — each one helping to fund the next — changed the economics of the whole project."
      heroImage="/images/industries/skyscraper.jpg"
      metrics={[
        { value: "18%", label: "Higher Projected Returns" },
        { value: "$14M", label: "Carrying Cost Avoided" },
        { value: "40%", label: "Less Capital at Risk" },
        { value: "2 Yrs", label: "Sooner to Stable Income" }
      ]}
      clientContextTitle="A Whole District, and No Clear Order to Build It"
      clientContextIntro="A regional real-estate developer had secured the rights to transform a former industrial site into a new mixed-use district — homes, offices, shops and public space spread across a program worth roughly $220 million and expected to take more than a decade to complete. It was the largest single project the company had ever taken on, and comfortably within reach of its ambitions. What it did not yet have was a credible answer to a deceptively simple question: in what order should the district actually be built?"
      clientContextBody="The instinct was to move on every part of the site at once, to show progress and get the whole vision out of the ground quickly. But that approach meant borrowing heavily and carrying vacant, unfinished buildings for years before any of them earned a dollar — a level of exposure that made the developer's lenders nervous and left almost no room for anything to go wrong. Decisions about what to build first were being made on gut feel and on which parcel happened to be ready, rather than on which sequence would put the project on the soundest financial footing. Leadership recognised that the plan for the buildings was strong; what was missing was a plan for the money and the timing behind them."
      clientProfile={{
        industry: "Real-Estate Developer",
        companySize: "~$300M Annual Revenue",
        projectDuration: "12 Months",
        additionalInfo: "~$220M District Program",
        additionalLabel: "Project Scale"
      }}
      challengeTitle="Why the Numbers Were Fragile"
      challenges={[
        {
          icon: DollarSign,
          title: "Too Much Capital at Risk at Once",
          description: "Building the whole district in parallel meant carrying heavy debt and empty buildings for years — a level of exposure the balance sheet could not comfortably absorb."
        },
        {
          icon: Clock,
          title: "A Long Wait for Any Income",
          description: "Because nothing was sequenced to open early, the project would have gone years before generating the rent and sales that make later phases affordable."
        },
        {
          icon: Target,
          title: "Sequencing Decided by Instinct",
          description: "Which parcel to build first was chosen on gut feel and readiness, not on which order gave the project the strongest and safest returns."
        },
        {
          icon: MapPin,
          title: "No Way to Test the Trade-offs",
          description: "The team had no reliable way to compare one build order against another, so it could not see what a different sequence was actually worth."
        }
      ]}
      approachTitle="Planning the District as a Sequence, Not a Single Bet"
      approachIntro="Working alongside the developer's finance and development leaders, we reframed the district as a series of connected phases — each one sized to be affordable, to prove out demand, and to help pay for the phase that followed — and gave the team a clear, tested plan for the order in which to build."
      steps={[
        {
          step: "01",
          title: "One Financial Model for the Whole District",
          description: "We built a single model that tied together construction cost, financing, and the rent and sales each part of the district would earn over time. For the first time the team could see the entire program's cash flow in one place, rather than parcel by parcel."
        },
        {
          step: "02",
          title: "Testing Different Build Orders",
          description: "Using that model, we compared realistic sequences side by side — which parts to open first, which to hold back — and measured each one on return, on how much capital it put at risk, and on how soon the district started earning income."
        },
        {
          step: "03",
          title: "A Phasing Plan That Funds Itself",
          description: "We settled on a sequence that led with the homes and shops most likely to lease quickly, so early income and rising land value helped fund the later, more speculative phases instead of fresh borrowing."
        },
        {
          step: "04",
          title: "Clear Triggers to Commit or Wait",
          description: "Rather than lock in a decade of decisions, we set simple market and leasing thresholds that told the developer when each phase was ready to start — so capital was committed as demand proved out, not before."
        }
      ]}
      resultsTitle="A Stronger, Safer Project"
      results={[
        {
          icon: TrendingUp,
          value: "18%",
          label: "Higher projected returns",
          detail: "From sequencing rather than added cost"
        },
        {
          icon: DollarSign,
          value: "$14M",
          label: "Carrying cost avoided",
          detail: "Less debt held against empty buildings"
        },
        {
          icon: Layers,
          value: "40%",
          label: "Less capital at risk at once",
          detail: "Exposure spread across phases, not concentrated"
        },
        {
          icon: Clock,
          value: "2 Yrs",
          label: "Sooner to stable income",
          detail: "Early phases earning while later ones build"
        }
      ]}
      quote="We were about to bet the company on building everything at once. Phasing the district didn't change what we wanted to create — it changed how much we had to risk to get there. Each part now helps pay for the next, and our lenders finally see a plan they can stand behind."
      quoteAuthor="Chief Financial Officer"
      quoteRole="Regional real-estate developer"
      relatedStudies={[
        {
          title: "Cutting Building Operating Costs with Connected Data",
          metric: "22%",
          label: "lower operating costs",
          link: "/cases/urban-smart-buildings",
          image: "/images/industries/arch-glass-sphere.jpg"
        },
        {
          title: "Delivering Capital Projects On Time and On Budget",
          metric: "95%",
          label: "on-time delivery",
          link: "/cases/urban-capital-projects",
          image: "/images/industries/city-digital.jpg"
        }
      ]}
      ctaTitle="Ready to build in the right order?"
      ctaDescription="Let's talk about what a smarter phasing plan could be worth to your next district."
    />
  );
}
