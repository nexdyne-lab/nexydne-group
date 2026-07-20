import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Package, DollarSign, Target, BarChart3, Leaf } from "lucide-react";

export default function FoodBeverageDemandForecasting() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Sharper Demand Forecasting for a Food and Beverage Maker | Consumer Products Case Study"
      seoDescription="A food and beverage maker was throwing away product it over-made and losing sales on product it ran short of. A better read on demand improved forecast accuracy by 30% and cut waste."
      canonical="/cases/food-beverage-demand-forecasting"
      industry="Consumer Products"
      industryLink="/industries/consumer-products"
      title="How a Food and Beverage Maker Forecast Demand 30% More Accurately"
      subtitle="The same misread on demand produced two problems at once — perfectly good product thrown away, and shelves empty when customers came looking. A better read on demand eased both."
      heroImage="/images/cases/food-beverage-demand-forecasting-hero.jpg"
      metrics={[
        { value: "30%", label: "Better Forecasting" },
        { value: "98.5%", label: "Service Level" },
        { value: "15%", label: "Leaner Inventory" },
        { value: "25%", label: "Less Waste" }
      ]}
      clientContextTitle="When a Wrong Forecast Costs You Twice"
      clientContextIntro="A food and beverage maker produced around two thousand products for grocery and convenience customers across a dozen regional markets. Its forecasts were wrong by more than a third on average, and because much of what it sold was perishable, every error cost the company twice — good product passing its date and being thrown away, and other product selling out and sending shoppers to a competitor's brand instead."
      clientContextBody="Planning still ran on statistical models and the judgment of experienced planners. Neither could keep up with everything that actually moved demand — a heatwave, a competitor's promotion, a local event, a shift in what shoppers were talking about. Worse, the planners spent the bulk of their week simply gathering data and stitching together spreadsheets, leaving little room for the judgment that was supposed to be their real contribution. The company was working hard at forecasting and still getting it wrong."
      clientProfile={{
        industry: "Food and Beverage Maker",
        companySize: "Mid-Market",
        projectDuration: "15 Months",
        additionalInfo: "~2,000 Products",
        additionalLabel: "Product Range"
      }}
      challengeTitle="A Forecast That Missed Both Ways"
      challenges={[
        {
          icon: Target,
          title: "Forecasts Off by a Third",
          description: "Average error above 35% meant the plan was rarely close enough — producing waste and shortages at the same time."
        },
        {
          icon: Leaf,
          title: "Good Product Thrown Away",
          description: "Perishable stock made in excess passed its date before it could sell, destroying both margin and the company's waste goals."
        },
        {
          icon: Package,
          title: "Sales Lost to Empty Shelves",
          description: "When a product ran short, shoppers simply reached for a competitor's — sales the company never got back."
        },
        {
          icon: BarChart3,
          title: "Planners Buried in Spreadsheets",
          description: "Most of the planning week went to gathering data by hand, leaving little time for the judgment the role was meant to add."
        }
      ]}
      approachTitle="A Clearer Read on Demand"
      approachIntro="We helped the company build a far better read on what customers would actually buy — bringing together the outside forces that move demand, sharpening the forecast down to the product and the week, and freeing planners to spend their time on judgment rather than data entry."
      steps={[
        {
          step: "01",
          title: "Bringing the Signals Together",
          description: "We combined years of the company's own shipment history with the outside signals that move demand — weather, local events, competitor promotions and what stores were actually selling — into a single, current picture instead of a dozen scattered spreadsheets."
        },
        {
          step: "02",
          title: "Forecasting Down to the Product and Week",
          description: "We built forecasting that predicted demand for each product, in each market, week by week — and that learned the real patterns behind the numbers: seasonality, the lift from a promotion, sensitivity to weather, and how one product's sales pull from another's."
        },
        {
          step: "03",
          title: "Sensing Short-Term Shifts",
          description: "On top of the longer view, we added short-term sensing that nudged the forecast as fresh signals arrived — a sudden spell of hot weather, a jump in what stores were selling — so the near-term plan reflected this week, not last quarter."
        },
        {
          step: "04",
          title: "Freeing the Planners to Think",
          description: "We gave planners a workbench that handled the routine forecasts on its own and surfaced only the exceptions that needed a human call. Their week shifted from assembling data to understanding why demand was moving and deciding what to do about it."
        }
      ]}
      resultsTitle="A Supply Chain That Keeps Up"
      results={[
        {
          icon: Target,
          value: "30%",
          label: "More accurate forecasts",
          detail: "Accuracy up from about 65% to 85%"
        },
        {
          icon: Package,
          value: "98.5%",
          label: "Service level reached",
          detail: "Up from 94% — far fewer empty shelves"
        },
        {
          icon: DollarSign,
          value: "15%",
          label: "Leaner inventory",
          detail: "Working capital freed by better-matched stock"
        },
        {
          icon: Leaf,
          value: "25%",
          label: "Less waste",
          detail: "Less perishable product made and thrown away"
        }
      ]}
      quote="Forecasting used to be an art, and the art was mostly building spreadsheets. Now the routine work runs itself and my planners spend their time on the question that matters — why is demand changing, and what should we do about it? We are more accurate, we waste less, and we react faster when the market moves."
      quoteAuthor="Vice President, Supply Chain Planning"
      quoteRole="Food and beverage maker"
      relatedStudies={[
        {
          title: "Cutting Excess Stock for a Consumer Electronics Brand",
          metric: "40%",
          label: "less inventory",
          link: "/cases/consumer-electronics-demand-optimization",
          image: "/images/cases/consumer-electronics-demand-optimization-hero.jpg"
        },
        {
          title: "Tailoring Store Assortments Lifts a Retailer's Sales",
          metric: "12%",
          label: "sales lift",
          link: "/cases/retail-assortment-optimization",
          image: "/images/cases/retail-assortment-optimization-hero.jpg"
        }
      ]}
      ctaTitle="Ready to get ahead of demand?"
      ctaDescription="Let's talk about a read on demand accurate enough to cut waste and shortages together."
    />
  );
}
