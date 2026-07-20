import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Clock, DollarSign, Target, LineChart, FileText, PieChart } from "lucide-react";

export default function CapitalRaiseSeriesB() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Closing a Growth Round Faster and on Better Terms | Technology Case Study"
      seoDescription="A growing software company had a strong business but a shaky financial story heading into a growth raise. A defensible model and a sharper narrative closed the round above target, with less dilution and better terms."
      canonical="/cases/capital-raise-series-b"
      industry="Technology, Media & Telecom"
      industryLink="/industries/technology-media-telecom"
      title="How a Software Company Closed Its Growth Round Faster, on Better Terms, and Gave Up Less"
      subtitle="A growing software company had a genuinely good business but a financial story investors could pick apart. Rebuilding the model and sharpening the narrative changed the outcome of the raise itself."
      heroImage="/images/cases/capital-raise-series-b-hero.jpg"
      metrics={[
        { value: "1.3x", label: "Over Target Raised" },
        { value: "6", label: "Weeks to Close" },
        { value: "18%", label: "Less Dilution" },
        { value: "20%", label: "Higher Valuation" }
      ]}
      clientContextTitle="A Strong Business With a Story Investors Could Poke Holes In"
      clientContextIntro="A growing software company had built something real. It had built a substantial recurring-revenue base, was growing quickly, and was adding blue-chip customers who stayed for years. On the strength of the business alone, it should have been an easy company to fund. But the way it told its financial story kept getting in the way. Its metrics were inconsistent from one board deck to the next, its model rested on assumptions no one could fully defend, and it had no clear answer to the simplest investor question of all: why this company, and why now."
      clientContextBody="The gaps were not cosmetic. Growth, retention and margin were each calculated differently depending on who pulled the numbers, so a sharp investor could make any of them look worse simply by asking how they were defined. The financial model was a sprawling spreadsheet that broke under scrutiny, with revenue and cost drivers buried in ways that invited doubt rather than confidence. And the equity narrative — the case for what the money would buy and what the company would be worth because of it — had never been written down. Management knew a raise on those foundations would be slow, would attract lowball terms, and would cost the founders far more of the company than the business warranted."
      clientProfile={{
        industry: "B2B Software Company",
        companySize: "Growing ~50% a Year",
        projectDuration: "10 Weeks",
        additionalInfo: "Series B Growth Round",
        additionalLabel: "Financing Objective"
      }}
      challengeTitle="Why the Raise Was at Risk"
      challenges={[
        {
          icon: Target,
          title: "Metrics That Told Different Stories",
          description: "Growth, retention and margin were defined inconsistently across decks, so any investor could make the numbers look weaker just by asking how they were calculated."
        },
        {
          icon: FileText,
          title: "A Model That Broke Under Scrutiny",
          description: "The financial model was a fragile, sprawling spreadsheet whose assumptions could not be traced or defended — exactly what diligence is built to expose."
        },
        {
          icon: LineChart,
          title: "No Clear Equity Narrative",
          description: "The company had never articulated what the capital would buy or what it would be worth as a result, leaving investors to fill the gap with their own, more cautious, assumptions."
        },
        {
          icon: DollarSign,
          title: "Terms Heading the Wrong Way",
          description: "A shaky story invites a lower valuation, tougher terms and more dilution — the founders risked giving up far more of the business than its performance justified."
        }
      ]}
      approachTitle="Building a Story Investors Could Trust"
      approachIntro="Working alongside the company's finance leadership, we set out to make the business as convincing on paper as it was in practice — a set of metrics that held up, a model that could withstand diligence, and a narrative that made the case for the raise on the company's own terms rather than an investor's."
      steps={[
        {
          step: "01",
          title: "One Set of Numbers Everyone Could Trust",
          description: "We settled on a single, defensible definition for every metric that mattered — how growth, retention, margin and efficiency were calculated — and rebuilt the reporting so those numbers reconciled to the accounts and told the same story every time."
        },
        {
          step: "02",
          title: "A Model Built to Withstand Diligence",
          description: "We rebuilt the financial model around the real drivers of the business, with assumptions that were transparent, benchmarked and easy to trace. Instead of hiding from investor questions, the model was designed to answer them."
        },
        {
          step: "03",
          title: "Cleaning Up the Unit Economics",
          description: "We worked through the economics of winning and keeping a customer until the picture was both honest and strong — showing that growth was efficient and durable, and framing the few soft spots as fixable rather than fatal."
        },
        {
          step: "04",
          title: "A Sharp Equity Story",
          description: "We wrote the narrative the company had been missing: a clear account of where the money would go, what it would build, and why that made the business meaningfully more valuable — turning the raise into an investment thesis rather than a request for cash."
        }
      ]}
      resultsTitle="A Better Round, on the Company's Terms"
      results={[
        {
          icon: DollarSign,
          value: "1.3x",
          label: "Over target raised",
          detail: "The round closed above the amount management set out to raise"
        },
        {
          icon: LineChart,
          value: "20%",
          label: "Higher valuation",
          detail: "Priced above the company's own starting expectation"
        },
        {
          icon: PieChart,
          value: "18%",
          label: "Less dilution",
          detail: "Founders kept more of the business than they had budgeted to give up"
        },
        {
          icon: Clock,
          value: "6",
          label: "Weeks to close",
          detail: "From opening the round to signed terms, well ahead of plan"
        }
      ]}
      quote="The business was always good — what changed was our ability to prove it. Once our numbers held up and the model could take a hard question, the whole conversation shifted. We stopped defending the past and started selling the future, and we closed faster, at a better price, and gave up less of the company than we ever expected to."
      quoteAuthor="Chief Financial Officer"
      quoteRole="Software company"
      relatedStudies={[
        {
          title: "Turning finance into a forecasting engine",
          metric: "Days, not weeks",
          label: "faster close",
          link: "/cases/fpa-forecasting-transformation",
          image: "/images/industries/advisor-charts.jpg"
        },
        {
          title: "Adding seven points of EBITDA margin at an industrial manufacturer",
          metric: "7 pts",
          label: "added EBITDA",
          link: "/cases/pe-industrial-transformation",
          image: "/images/cases/pe-industrial-transformation-hero.jpg"
        }
      ]}
      ctaTitle="Ready to raise on your own terms?"
      ctaDescription="Let's talk about what a defensible model and a sharper story could be worth to your next round."
    />
  );
}
