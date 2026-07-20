import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Clock, DollarSign, Target, Cog, TrendingUp, Layers } from "lucide-react";

export default function FpaForecastingTransformation() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Turning Month-Long Budgets into Real-Time Answers | Retail Finance Case Study"
      seoDescription="A growing retailer ran its planning on a maze of spreadsheets — a month-long close and a budget out of date the day it was set. Building a real planning capability cut the close to days and freed working capital across the chain."
      canonical="/cases/fpa-forecasting-transformation"
      industry="Retail"
      industryLink="/industries/retail"
      title="How a Growing Retailer Traded a Month-Long Close for Answers in Hours"
      subtitle="A regional retailer ran its planning on a maze of spreadsheets — a close that took weeks, a budget out of date the day it was set, and no way to answer 'what happens if' without days of work. Building a real planning capability let leadership steer instead of react."
      heroImage="/images/industries/advisor-charts.jpg"
      metrics={[
        { value: "Days", label: "Close, Down From Weeks" },
        { value: "+12pts", label: "Forecast Accuracy" },
        { value: "Hours", label: "Scenario Answers" },
        { value: "12%", label: "Working Capital Freed" }
      ]}
      clientContextTitle="When Planning Lives in a Maze of Spreadsheets"
      clientContextIntro="A regional retailer — a growing chain with stores across several states — ran its entire planning process on spreadsheets. Every budget, forecast and board report was stitched together by hand from dozens of files that different people owned and few fully understood. The finance team was capable and hard-working, but it spent its days assembling numbers rather than making sense of them."
      clientContextBody="The costs showed up everywhere. Closing the books took the better part of a month, so by the time leaders saw a result the quarter was already well underway. The annual budget was effectively out of date the day it was approved — locked in for twelve months while the business kept moving. And when a merchant or an executive asked a simple 'what happens if' question — a slower season, a price change, a new store — answering it meant days of rebuilding spreadsheets. Leadership was steering the company by looking in the rearview mirror, and everyone knew it."
      clientProfile={{
        industry: "Regional Retailer",
        companySize: "Multi-State Retail Chain",
        projectDuration: "10 Months",
        additionalInfo: "~120 Stores",
        additionalLabel: "Locations Served"
      }}
      challengeTitle="Why Finance Was Always a Step Behind"
      challenges={[
        {
          icon: Clock,
          title: "A Close That Took Weeks",
          description: "Pulling the numbers together by hand meant results arrived long after the period had ended — too late to change the outcome they described."
        },
        {
          icon: Target,
          title: "A Budget Out of Date on Day One",
          description: "A single annual budget was locked in for the year, so plans and reality drifted apart within weeks and stayed apart until the next cycle."
        },
        {
          icon: Cog,
          title: "No Quick Answer to 'What If'",
          description: "Every scenario a leader wanted to explore meant days of rebuilding spreadsheets, so most questions simply went unanswered."
        },
        {
          icon: Layers,
          title: "Numbers No One Fully Trusted",
          description: "Dozens of linked files owned by different people meant errors were easy to introduce and hard to find — and confidence in the figures suffered."
        }
      ]}
      approachTitle="Building a Real Planning Capability"
      approachIntro="Working alongside the retailer's finance leaders, we replaced the spreadsheet maze with a planning capability the team could actually run the business on — one built on the handful of things that truly move the results, updated continuously rather than once a year, and quick enough to answer a leader's question while the question still mattered."
      steps={[
        {
          step: "01",
          title: "Planning on the Few Things That Actually Move the Business",
          description: "Instead of forecasting hundreds of line items in isolation, we tied the plan to the small number of drivers that really shape it — store traffic, average basket, margin and the like. Change an assumption about the business, and the whole plan moves with it in a way everyone can follow."
        },
        {
          step: "02",
          title: "A Forecast That Rolls Forward, Not a Budget That Expires",
          description: "We replaced the once-a-year budget with a forecast the team refreshes every month, always looking a full year ahead. Plans now track the business as it changes rather than freezing on the day they are approved."
        },
        {
          step: "03",
          title: "Answers to 'What If' in Hours",
          description: "We built the plan so leaders could test a scenario — a soft season, a pricing move, a new set of stores — and see the effect on sales, margin and cash the same day, not the same week. Difficult questions became easy to ask."
        },
        {
          step: "04",
          title: "A Faster, Cleaner Close",
          description: "We pulled the actual results together automatically instead of by hand, cutting the close from weeks to days and freeing the finance team to spend its time explaining the numbers rather than assembling them."
        }
      ]}
      resultsTitle="Finance That Helps Steer the Business"
      results={[
        {
          icon: Clock,
          value: "Days",
          label: "To close the books",
          detail: "Down from the better part of a month"
        },
        {
          icon: TrendingUp,
          value: "+12pts",
          label: "More accurate forecasts",
          detail: "Plans that finally tracked the business"
        },
        {
          icon: Target,
          value: "Hours",
          label: "To answer 'what if'",
          detail: "Scenarios in a day, not a week"
        },
        {
          icon: DollarSign,
          value: "12%",
          label: "Working capital freed",
          detail: "Better-timed inventory and spend"
        }
      ]}
      quote="We used to spend three weeks building the numbers and about ten minutes discussing what they meant. Now it is the other way around. When someone asks what a slower quarter would do to us, I can show them that afternoon — and we can decide what to do about it while it still matters. That changed how we run the company."
      quoteAuthor="Chief Financial Officer"
      quoteRole="Regional retailer"
      relatedStudies={[
        {
          title: "Raising a growth round on stronger terms",
          metric: "Above",
          label: "target, less dilution",
          link: "/cases/capital-raise-series-b",
          image: "/images/cases/capital-raise-series-b-hero.jpg"
        },
        {
          title: "Adding seven points of EBITDA margin at an industrial manufacturer",
          metric: "7 pts",
          label: "added EBITDA",
          link: "/cases/pe-industrial-transformation",
          image: "/images/cases/pe-industrial-transformation-hero.jpg"
        }
      ]}
      ctaTitle="Ready to plan on what actually moves your business?"
      ctaDescription="Let's talk about trading a month-long close for answers while they still matter."
    />
  );
}
