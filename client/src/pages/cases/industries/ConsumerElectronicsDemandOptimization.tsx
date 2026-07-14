import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Package, TrendingUp, DollarSign, Target, Clock } from "lucide-react";

export default function ConsumerElectronicsDemandOptimization() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Cutting Excess Stock for a Consumer Electronics Brand | Consumer Products Case Study"
      seoDescription="A consumer electronics brand was tying up capital in inventory it could not sell before the next model arrived. Forecasting demand for short-lived products cut inventory by 40% without hurting availability."
      canonical="/cases/consumer-electronics-demand-optimization"
      industry="Consumer Products"
      industryLink="/industries/consumer-products"
      title="How a Consumer Electronics Brand Cut Excess Stock by 40%"
      subtitle="Every new product had to be ordered before anyone knew how it would sell — and by the time demand was clear, the model was already halfway to retirement. Learning from similar products changed those odds."
      heroImage="/images/capabilities/cap-conference-data.jpg"
      metrics={[
        { value: "40%", label: "Less Inventory" },
        { value: "97%", label: "In-Stock Rate" },
        { value: "$14M", label: "Working Capital Freed" },
        { value: "60%", label: "Less Obsolescence" }
      ]}
      clientContextTitle="Forecasting Products That Have No History"
      clientContextIntro="A consumer electronics brand brought around sixty new products to market every year, each with a shelf life of barely twelve to eighteen months. The hardest question in the business was also the most basic: how many of a product should we build when we have never sold it before? With no sales history to lean on, the company either ordered too many components and ended up with stock it could not move, or ordered too few and missed the sales window entirely."
      clientContextBody="Because product lives were so short, mistakes were permanent. By the time real demand became visible, the model was already being phased out, and there was no second chance to correct the order. The pattern repeated with every launch: excess inventory tied up capital and warehouse space, while end-of-life write-offs quietly erased margin. Leadership had come to treat forecasting as guesswork — and the company was paying for the guesses in cash it could not put to better use."
      clientProfile={{
        industry: "Consumer Electronics Brand",
        companySize: "~$400M Annual Revenue",
        projectDuration: "12 Months",
        additionalInfo: "~60 New Products a Year",
        additionalLabel: "Launch Cadence"
      }}
      challengeTitle="Why the Stock Kept Piling Up"
      challenges={[
        {
          icon: Package,
          title: "Capital Locked in Excess Stock",
          description: "Over-ordering left millions in unsold product sitting in warehouses — cash and space the business could not use elsewhere."
        },
        {
          icon: Clock,
          title: "No Time to Recover",
          description: "With products live for barely a year, a bad forecast could not be corrected — the model was gone before demand was ever clear."
        },
        {
          icon: Target,
          title: "Launching Blind",
          description: "Around sixty new products a year arrived with no sales history, so every launch forecast started from little more than a hunch."
        },
        {
          icon: DollarSign,
          title: "Write-Offs at End of Life",
          description: "Product left unsold when a model retired had to be written off, steadily eroding the margin each launch was meant to earn."
        }
      ]}
      approachTitle="Learning From the Products That Came Before"
      approachIntro="We helped the brand replace guesswork with judgment grounded in evidence — starting each new product from the behavior of similar past products, reading the earliest signs of how a launch was landing, and adjusting the plan as real demand came in rather than waiting until it was too late to act."
      steps={[
        {
          step: "01",
          title: "Starting From Look-Alikes, Not From Zero",
          description: "Rather than forecasting each launch from a blank sheet, we matched every new product to earlier ones with similar features, price and positioning. Each launch began with a demand pattern borrowed from products that had already proven how customers behaved."
        },
        {
          step: "02",
          title: "Reading the First Few Weeks",
          description: "We built a way to read the earliest signals of a launch — pre-orders, early reviews and how quickly stores were selling through — so that within the first weeks the company had a dependable read on where a product was heading, not a guess."
        },
        {
          step: "03",
          title: "Adjusting the Plan as Demand Arrived",
          description: "Forecasts were refreshed every week against actual sales, so a product that was over- or under-performing was spotted quickly and the build plan adjusted while there was still time to change it."
        },
        {
          step: "04",
          title: "Landing the Final Orders",
          description: "As each product neared the end of its life, we forecast the demand that remained and sized the final orders to match — so a model retired with its shelves nearly clear instead of leaving a warehouse full of stock to write off."
        }
      ]}
      resultsTitle="The Payoff"
      results={[
        {
          icon: Package,
          value: "40%",
          label: "Less inventory carried",
          detail: "Average stock cut by roughly two fifths"
        },
        {
          icon: Target,
          value: "97%",
          label: "In-stock rate held",
          detail: "Availability preserved despite leaner inventory"
        },
        {
          icon: DollarSign,
          value: "$14M",
          label: "Working capital freed",
          detail: "Cash redeployed into growth"
        },
        {
          icon: TrendingUp,
          value: "60%",
          label: "Less obsolescence",
          detail: "End-of-life write-offs cut by more than half"
        }
      ]}
      quote="We used to treat forecasting a brand-new product as pure guesswork — and we guessed wrong often enough to feel it in the numbers. Now every launch starts from what similar products actually did, we can read the first few weeks, and we adjust as we go. We carry less stock, write off far less, and still have the product our customers want on the shelf."
      quoteAuthor="Senior Vice President, Operations"
      quoteRole="Consumer electronics brand"
      relatedStudies={[
        {
          title: "Sharper Demand Forecasting for a Food and Beverage Maker",
          metric: "30%",
          label: "better forecasting",
          link: "/cases/food-beverage-demand-forecasting",
          image: "/images/capabilities/cap-food.jpg"
        },
        {
          title: "Tailoring Store Assortments Lifts a Retailer's Sales",
          metric: "12%",
          label: "sales lift",
          link: "/cases/retail-assortment-optimization",
          image: "/images/capabilities/cap-retail-apparel.jpg"
        }
      ]}
      ctaTitle="Ready to stop guessing on new products?"
      ctaDescription="Let's talk about forecasting demand for products that have no history yet."
    />
  );
}
