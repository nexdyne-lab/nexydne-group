import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { BarChart3, Leaf, DollarSign, Package, Brain, Target } from "lucide-react";

export default function GroceryDemandForecasting() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Cutting a Grocer's Fresh-Food Waste by a Third | Retail Case Study"
      seoDescription="A regional grocery chain was throwing away fresh food while shelves sat empty elsewhere. Predicting demand store by store, day by day, cut waste by 35% and lifted on-shelf availability to 96%."
      canonical="/cases/grocery-demand-forecasting"
      industry="Retail"
      industryLink="/industries/retail"
      title="How a Regional Grocer Cut Fresh-Food Waste by a Third"
      subtitle="A well-run grocery chain was throwing away fresh food in some stores while running out of the same items in others. Learning to predict demand store by store turned a costly guessing game into something close to a science."
      heroImage="/images/cases/grocery-demand-forecasting-hero.jpg"
      metrics={[
        { value: "35%", label: "Less Waste" },
        { value: "96%", label: "On-Shelf Availability" },
        { value: "85%", label: "Forecast Accuracy" },
        { value: "50K", label: "Products Forecast" }
      ]}
      clientContextTitle="Too Much of One Thing, Too Little of Another"
      clientContextIntro="A regional grocery chain of around 90 stores faced a problem every grocer knows well: too much of the slow-selling items, which ended up in the bin, and too little of the fast-selling ones, which left shelves empty and shoppers disappointed. Fresh food made the stakes highest — it was a large share of sales but by far the biggest source of waste, because anything unsold had only days before it had to be thrown out."
      clientContextBody="The chain planned its orders using simple averages of past sales and the judgment of experienced buyers. That approach could not take account of the things that really move grocery demand — a change in the weather, a local event, a holiday, or the way shoppers switch to a substitute when their first choice is missing. The result was roughly a third of all fresh food written off each year, and a further stream of sales quietly lost whenever a popular item ran out. The company was convinced both numbers could be far lower."
      clientProfile={{
        industry: "Grocery Retail",
        companySize: "Regional Grocery Chain",
        projectDuration: "12 Months",
        additionalInfo: "~90 Stores",
        additionalLabel: "Store Network"
      }}
      challengeTitle="The Grocer's Balancing Act"
      challenges={[
        {
          icon: Leaf,
          title: "Fresh Food in the Bin",
          description: "Roughly a third of everything fresh that came through the door was thrown away unsold each year."
        },
        {
          icon: Package,
          title: "Empty Shelves, Lost Sales",
          description: "When popular items ran out, shoppers simply left without them — a steady stream of sales the chain never saw."
        },
        {
          icon: Brain,
          title: "Forecasts That Missed the Signal",
          description: "Ordering built on past averages was right only about two-thirds of the time — blind to weather, events and the way shoppers substitute."
        },
        {
          icon: BarChart3,
          title: "A Problem Too Big to Do by Hand",
          description: "Getting it right meant a fresh prediction for every product in every store, every day — well over a billion decisions a year, far beyond what buyers could weigh by instinct."
        }
      ]}
      approachTitle="Predicting Demand, Store by Store"
      approachIntro="We helped the grocer replace averages and instinct with genuine prediction — a forecast for each product in each store on each day that learned from the many things, beyond past sales, that actually shape what shoppers buy."
      steps={[
        {
          step: "01",
          title: "Bringing the Whole Picture Together",
          description: "We combined five years of sales history with the outside signals that move demand — weather, local events, school terms, holidays and nearby promotions — into one place, so the forecast could see everything a good buyer would want to consider."
        },
        {
          step: "02",
          title: "Learning What Really Drives Demand",
          description: "We built forecasting models that learned each product's rhythms: how it sells by season, how much a promotion lifts it, how sensitive it is to weather, and what shoppers reach for instead when it is missing. Their predictions were right about 85% of the time — twenty points better than before."
        },
        {
          step: "03",
          title: "Special Care for Fresh",
          description: "For perishables, where a wrong order means either waste or an empty shelf, we tailored the models to balance the two — weighing each item's shelf life and the cost of markdowns to recommend an order that kept shelves full without overstocking."
        },
        {
          step: "04",
          title: "Orders Ready for a Quick Yes",
          description: "The forecasts fed straight into ordering, so each store manager received a recommended order to approve or adjust rather than build from scratch. When managers changed a recommendation, the system learned from it and improved."
        }
      ]}
      resultsTitle="Fuller Shelves, Less Waste"
      results={[
        {
          icon: Leaf,
          value: "35%",
          label: "Less fresh-food waste",
          detail: "A third less fresh food written off each year"
        },
        {
          icon: Package,
          value: "96%",
          label: "On-shelf availability",
          detail: "Up from 91% — popular items in stock far more often"
        },
        {
          icon: DollarSign,
          value: "Year one",
          label: "Payback on the program",
          detail: "From less waste and recovered sales together"
        },
        {
          icon: Target,
          value: "85%",
          label: "Forecast accuracy",
          detail: "A twenty-point gain over the old approach"
        }
      ]}
      quote="The forecasting sees things our buyers, however experienced, simply could not hold in their heads — that a warm, dry weekend after a wet week sends grilling demand up sharply, or what a local match day does to snack sales. We are not guessing at the fresh order any more. We are predicting it, and our shelves and our waste figures both show it."
      quoteAuthor="Vice President, Supply Chain"
      quoteRole="Regional grocery chain"
      relatedStudies={[
        {
          title: "Growing a Fashion Retailer's Online Sales by 85%",
          metric: "85%",
          label: "online sales growth",
          link: "/cases/fashion-retail-digital-transformation",
          image: "/images/cases/fashion-retail-digital-transformation-hero.jpg"
        },
        {
          title: "Turning a Stale Loyalty Program Into Growth",
          metric: "45%",
          label: "higher member spend",
          link: "/cases/retail-loyalty-transformation",
          image: "/images/capabilities/cap-retail-data.jpg"
        }
      ]}
      ctaTitle="Ready to take the guesswork out of ordering?"
      ctaDescription="Let's talk about predicting demand store by store — and what fuller shelves with less waste could be worth."
    />
  );
}
