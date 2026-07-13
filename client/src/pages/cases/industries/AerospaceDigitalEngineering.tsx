import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Clock, DollarSign, Target, Cog, Zap } from "lucide-react";

export default function AerospaceDigitalEngineering() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Bringing Aircraft Programs to Market Faster | Aerospace & Defense Case Study"
      seoDescription="A leading aircraft manufacturer was losing years and hundreds of millions to late-stage design changes. Connecting its engineering work end to end cut development time by 40%."
      canonical="/cases/aerospace-digital-engineering"
      industry="Aerospace & Defense"
      industryLink="/industries/aerospace-defense"
      title="How a Global Aircraft Maker Brought New Programs to Market 40% Faster"
      subtitle="A leading aerospace manufacturer was losing years and hundreds of millions to problems found late in testing. Connecting its engineering work end to end changed the economics of every program."
      heroImage="/images/industries/aero-rocket.jpg"
      metrics={[
        { value: "40%", label: "Faster Development" },
        { value: "60%", label: "Fewer Late Changes" },
        { value: "$500M", label: "Cost Avoided" },
        { value: "90%", label: "Right First Time" }
      ]}
      clientContextTitle="When Engineering Runs on Documents, Everything Slows Down"
      clientContextIntro="A leading commercial and defense aircraft manufacturer ran its engineering much as it had for decades. Requirements sat in one set of documents, designs in another, and test results in spreadsheets — each owned by a different team, none of them connected. When a requirement changed, it could take months for that change to reach everyone who needed it, and the gaps between systems were exactly where costly mistakes hid."
      clientContextBody="The consequences surfaced at the worst possible moment. Problems that could have been caught early were instead discovered late in testing, when the only fix was to rework finished designs and slip the schedule. Major programs routinely ran two or more years late and roughly a third over budget. Engineers spent more of their week reconciling out-of-date documents than actually engineering. Leadership concluded the issue was not talent or effort — it was that the company's engineering knowledge was scattered across systems that could not keep up with the complexity of a modern aircraft."
      clientProfile={{
        industry: "Aerospace Manufacturing",
        companySize: "~$40B Annual Revenue",
        projectDuration: "36 Months",
        additionalInfo: "50,000 Engineers",
        additionalLabel: "Engineering Workforce"
      }}
      challengeTitle="Why Programs Kept Slipping"
      challenges={[
        {
          icon: Clock,
          title: "Years Behind Schedule",
          description: "Major programs ran two or more years late — document-based ways of working simply could not keep pace with the aircraft's complexity."
        },
        {
          icon: DollarSign,
          title: "Budgets Overrun by a Third",
          description: "Problems surfaced late, when the only remedy was expensive rework — and the average program finished around 30% over budget."
        },
        {
          icon: Target,
          title: "No Single Source of Truth",
          description: "Requirements, designs and test results lived in separate systems, so teams were often working from versions that no longer agreed."
        },
        {
          icon: Cog,
          title: "Late Surprises in Test",
          description: "Integration issues were found only when parts finally came together in physical test — the most expensive point at which to discover them."
        }
      ]}
      approachTitle="Connecting Engineering End to End"
      approachIntro="Working alongside the manufacturer's engineering leaders, we set out to make the company's engineering knowledge shared, current and connected — so a change made in one place reached everywhere it mattered, and problems could be found on a screen long before they reached the factory floor."
      steps={[
        {
          step: "01",
          title: "One Authoritative Model, Not a Stack of Documents",
          description: "We moved requirements and system designs out of static documents and into a single connected model that became the official record. Documents were still produced when needed — but generated from the model rather than maintained by hand, so everyone worked from the same, current picture."
        },
        {
          step: "02",
          title: "Changes That Update Themselves",
          description: "We linked requirements, design, manufacturing and test information so a change in one flowed automatically to the others. Engineers no longer had to chase down every downstream effect of an update; the connections did it for them."
        },
        {
          step: "03",
          title: "Testing in Simulation Before Steel Is Cut",
          description: "We built high-fidelity digital models of the aircraft's systems so they could be assembled and tested virtually. Integration problems that once appeared in physical test now appeared in simulation — when they were quick and inexpensive to correct."
        },
        {
          step: "04",
          title: "Shorter Cycles, Faster Learning",
          description: "With connected data in place, teams moved from long, sequential phases to shorter cycles of design, check and refine. Feedback that used to take months arrived in days, and the whole program moved faster as a result."
        }
      ]}
      resultsTitle="The Payoff"
      results={[
        {
          icon: Clock,
          value: "40%",
          label: "Faster development",
          detail: "From first concept to production aircraft"
        },
        {
          icon: Target,
          value: "60%",
          label: "Fewer late design changes",
          detail: "Issues caught early instead of in test"
        },
        {
          icon: DollarSign,
          value: "$500M",
          label: "Cost avoided",
          detail: "Largely from eliminated rework"
        },
        {
          icon: Zap,
          value: "90%",
          label: "Right the first time",
          detail: "Systems that worked as designed on first integration"
        }
      ]}
      quote="We used to find our integration problems on the test floor — at the worst possible time and the highest possible cost. Now we find them in simulation, weeks earlier. Nothing about our ambition changed. Connecting our engineering simply gave us back years and hundreds of millions."
      quoteAuthor="Vice President, Engineering"
      quoteRole="Global aerospace manufacturer"
      relatedStudies={[
        {
          title: "98% Fleet Readiness for a Defense Prime",
          metric: "98%",
          label: "mission-ready aircraft",
          link: "/cases/supply-chain-visibility",
          image: "/images/industries/retail-warehouse.jpg"
        },
        {
          title: "Halving Surprise Groundings for an Airline",
          metric: "50%",
          label: "fewer unplanned groundings",
          link: "/cases/logistics-optimization",
          image: "/images/industries/ops-monitors-dark.jpg"
        }
      ]}
      ctaTitle="Ready to accelerate your next program?"
      ctaDescription="Let's talk about what connecting your engineering end to end could be worth."
    />
  );
}
