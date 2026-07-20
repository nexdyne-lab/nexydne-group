import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Sun, Wind, BarChart3, DollarSign, Leaf, Target } from "lucide-react";

export default function RenewableEnergyForecasting() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Sharper Generation Forecasts for a Renewables Developer | Energy & Utilities Case Study"
      seoDescription="A renewables developer paid heavy penalties whenever its wind and solar output missed the promises it made to the grid. Better forecasting cut those errors by 25%."
      canonical="/cases/renewable-energy-forecasting"
      industry="Energy & Utilities"
      industryLink="/industries/energy-utilities"
      title="How a Renewables Developer Made Its Forecasts 25% Sharper"
      subtitle="A wind and solar developer paid a penalty every time its output missed what it had promised the grid — and those misses had become a heavy annual cost. Learning the quirks of each site, and improving with every week of data, closed the gap."
      heroImage="/images/cases/renewable-energy-forecasting-hero.jpg"
      metrics={[
        { value: "25%", label: "Sharper Forecasts" },
        { value: "15%", label: "Higher Prices Captured" },
        { value: "92%", label: "Day-Ahead Accuracy" },
        { value: "1.5 GW", label: "Portfolio Forecasted" }
      ]}
      clientContextTitle="Paying for Being Wrong About the Weather"
      clientContextIntro="A renewables developer owned and ran about 1.5 gigawatts of wind and solar spread across roughly 20 projects. Each day it had to tell grid operators how much power each site would produce — and every time reality came in above or below that promise, it paid a penalty. As the portfolio grew, so did the bill: those imbalance penalties had become a heavy annual cost, and it was climbing."
      clientContextBody="The trouble was that the company's forecasts were built on generic weather models that treated every site much the same. But a wind farm tucked behind a ridge and a solar site on the coast do not behave alike, and a forecast that is off by even a tenth on a large wind farm racks up penalties by the hour. The developer did not need a better weather map in general — it needed a forecast that understood the particular behavior of each of its sites, at every timescale the market cared about."
      clientProfile={{
        industry: "Renewables Developer",
        companySize: "~1.5 GW Owned Capacity",
        projectDuration: "10 Months",
        additionalInfo: "~20 Wind and Solar Projects",
        additionalLabel: "Portfolio"
      }}
      challengeTitle="The Cost of a Wrong Forecast"
      challenges={[
        {
          icon: Target,
          title: "Penalties for Missing the Mark",
          description: "When output differed from what the company had promised the grid, it paid — a heavy annual bill eating directly into project returns."
        },
        {
          icon: Wind,
          title: "Weather Models Too Coarse",
          description: "Generic forecasts missed the local effects that actually drive generation — the way a ridge shapes the wind or coastal cloud shades a solar field."
        },
        {
          icon: Sun,
          title: "Every Site Is Different",
          description: "Each project had its own quirks — aging panels, particular turbines, the lay of the land — that a one-size-fits-all forecast simply could not capture."
        },
        {
          icon: BarChart3,
          title: "Many Timescales at Once",
          description: "The market demanded forecasts from fifteen minutes to three days out, and the company needed all of them to be accurate, not just the easy ones."
        }
      ]}
      approachTitle="A Forecast That Learns Each Site"
      approachIntro="We helped the developer replace one-size-fits-all weather models with forecasting that learned the particular behavior of every site it owned — and, crucially, kept getting better as more of each site's own history came in."
      steps={[
        {
          step: "01",
          title: "Bringing All the Data Together",
          description: "We pulled together each site's own generation records, its on-site weather readings, satellite imagery and several independent weather forecasts, building a single history — about five years deep — for the models to learn from."
        },
        {
          step: "02",
          title: "Blending the Best Weather Sources",
          description: "Rather than trust any one forecaster, we combined several and leaned on whichever had proven most reliable for a given site and set of conditions — a blend that beat any single source on its own."
        },
        {
          step: "03",
          title: "Teaching the Model Each Site",
          description: "We trained a dedicated model for every project so it could learn that site's personality — how terrain bends the wind, how cloud shadows move across the panels, how output shifts with the seasons — capturing the nuances generic forecasts had always missed."
        },
        {
          step: "04",
          title: "Getting Better Every Week",
          description: "We set the models to retrain automatically as fresh generation data arrived, so they kept pace with panels that age, turbines that change and weather that shifts — and the forecasts grew steadily more accurate over time."
        }
      ]}
      resultsTitle="Forecasts You Can Bank On"
      results={[
        {
          icon: Target,
          value: "25%",
          label: "Sharper forecasts",
          detail: "Across every timescale the market required"
        },
        {
          icon: DollarSign,
          value: "60%",
          label: "Lower imbalance penalties",
          detail: "Misses against grid commitments far less frequent and less severe"
        },
        {
          icon: BarChart3,
          value: "92%",
          label: "Day-ahead accuracy",
          detail: "For forecasts across the whole portfolio"
        },
        {
          icon: Leaf,
          value: "15%",
          label: "Higher prices captured",
          detail: "Better market timing from forecasts it could trust"
        }
      ]}
      quote="A sharper forecast goes straight to our bottom line — every point of accuracy is worth real money in penalties we no longer pay. What matters most is that the forecasts keep improving on their own. Each month the models understand our sites a little better, and we feel it in the results."
      quoteAuthor="Vice President, Asset Management"
      quoteRole="Renewables developer"
      relatedStudies={[
        {
          title: "Cutting Outage Time Nearly in Half for a Regional Utility",
          metric: "45%",
          label: "shorter outages",
          link: "/cases/utility-grid-modernization",
          image: "/images/cases/utility-grid-modernization-hero.jpg"
        },
        {
          title: "Halving Unplanned Outages at a Power Generator",
          metric: "60%",
          label: "fewer unplanned outages",
          link: "/cases/power-generation-predictive-maintenance",
          image: "/images/industries/energy-powerplant.jpg"
        }
      ]}
      ctaTitle="Ready to stop paying for wrong forecasts?"
      ctaDescription="Let's talk about forecasting that learns the quirks of every site you run."
    />
  );
}
