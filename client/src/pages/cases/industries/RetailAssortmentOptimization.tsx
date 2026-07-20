import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Grid3X3, TrendingUp, DollarSign, Target, Users, Package, Sparkles } from "lucide-react";

export default function RetailAssortmentOptimization() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Tailoring Store Assortments Lifts a Retailer's Sales | Consumer Products Case Study"
      seoDescription="A regional retailer stocked every store the same way, ignoring who actually shopped there. Matching each store's range to its local customers lifted sales 12% while carrying less inventory."
      canonical="/cases/retail-assortment-optimization"
      industry="Consumer Products"
      industryLink="/industries/consumer-products"
      title="How a Retailer Lifted Sales 12% by Tailoring Each Store's Range"
      subtitle="Every store carried the same products regardless of who shopped there — so items that flew off the shelves in one neighbourhood gathered dust in another. Matching the range to the customer changed that."
      heroImage="/images/cases/retail-assortment-optimization-hero.jpg"
      metrics={[
        { value: "12%", label: "Sales Lift" },
        { value: "15%", label: "Less Inventory" },
        { value: "80", label: "Stores on Tailored Ranges" },
        { value: "25%", label: "Fewer SKUs" }
      ]}
      clientContextTitle="One Assortment for Every Kind of Shopper"
      clientContextIntro="A regional retailer ran around eighty stores and stocked nearly all of them the same way — the same products on the same shelves whether the store sat in a busy city center or a quiet rural town, whether its shoppers were affluent or watching every dollar. The result was predictable: products that sold out in one store sat untouched in another, and the chain never quite fit any of its customers."
      clientContextBody="Buying decisions were made centrally, from chain-wide sales figures that averaged away every local difference. A store serving one kind of neighbourhood was left without the products those shoppers wanted, while another carried items its customers never bought. With tens of thousands of products across the range and dozens of stores, tailoring the assortment by hand was simply impossible — so no one tried, and the money left on the table stayed there."
      clientProfile={{
        industry: "Regional Retailer",
        companySize: "~80 Stores",
        projectDuration: "12 Months",
        additionalInfo: "~40,000 SKUs",
        additionalLabel: "Product Range"
      }}
      challengeTitle="The Cost of Treating Every Store Alike"
      challenges={[
        {
          icon: Grid3X3,
          title: "One Range Everywhere",
          description: "Nearly all eighty stores carried the same assortment, regardless of who actually shopped in each neighbourhood."
        },
        {
          icon: Users,
          title: "Local Demand Left Unseen",
          description: "What each store's own customers wanted was invisible in chain-wide averages — real demand hidden inside the mean."
        },
        {
          icon: Package,
          title: "Stock in the Wrong Places",
          description: "Products that sold briskly chain-wide sat unsold in stores where they simply did not fit local demand."
        },
        {
          icon: Target,
          title: "Too Many Choices to Manage",
          description: "With tens of thousands of products across dozens of stores, tailoring the range by hand was beyond what any team could do."
        }
      ]}
      approachTitle="Matching Each Store to Its Customers"
      approachIntro="We helped the retailer stop treating every store the same and start stocking each one for the customers who actually walked through its doors — grouping stores by the shoppers they served, learning what each group really wanted, and choosing the range for each store accordingly."
      steps={[
        {
          step: "01",
          title: "Grouping Stores by Who Shops There",
          description: "We grouped the stores into around ten types based on the customers each served and the way they bought — so that stores with genuinely similar shoppers could be planned together rather than each one from scratch."
        },
        {
          step: "02",
          title: "Learning What Each Group Wants",
          description: "For each group of stores we modeled how every product was likely to sell, drawing on local buying patterns and what customers tended to purchase together — pinpointing the products that would over- or under-perform in each kind of location."
        },
        {
          step: "03",
          title: "Choosing the Right Range for Each Store",
          description: "We then chose the best assortment for each group within the shelf space and supplier terms it had to work with — balancing what local shoppers wanted against the practical limits of running the business."
        },
        {
          step: "04",
          title: "Getting Better With Every Season",
          description: "We tracked how each tailored range actually performed and fed the results back in, so the recommendations sharpened over time as the company learned which local choices really moved sales."
        }
      ]}
      resultsTitle="Tailoring That Pays Off"
      results={[
        {
          icon: TrendingUp,
          value: "12%",
          label: "Sales lift",
          detail: "From matching products to local shoppers"
        },
        {
          icon: Package,
          value: "15%",
          label: "Less inventory",
          detail: "Fewer slow sellers stranded in the wrong stores"
        },
        {
          icon: DollarSign,
          value: "80",
          label: "Stores on tailored ranges",
          detail: "Every location stocked for its own shoppers"
        },
        {
          icon: Sparkles,
          value: "25%",
          label: "Fewer products per store",
          detail: "A better-chosen range, not a bigger one"
        }
      ]}
      quote="We stopped treating all our stores the same and started stocking each one for the customers who actually shop there. The system sees patterns in local demand our buyers could never spot from headquarters. Our stores now carry what their customers want — and the sales figures show it."
      quoteAuthor="Chief Merchandising Officer"
      quoteRole="Regional retailer"
      relatedStudies={[
        {
          title: "Cutting Excess Stock for a Consumer Electronics Brand",
          metric: "40%",
          label: "less inventory",
          link: "/cases/consumer-electronics-demand-optimization",
          image: "/images/cases/consumer-electronics-demand-optimization-hero.jpg"
        },
        {
          title: "Sharper Demand Forecasting for a Food and Beverage Maker",
          metric: "30%",
          label: "better forecasting",
          link: "/cases/food-beverage-demand-forecasting",
          image: "/images/cases/food-beverage-demand-forecasting-hero.jpg"
        }
      ]}
      ctaTitle="Ready to stock each store for its own customers?"
      ctaDescription="Let's talk about matching your assortment to the shoppers each store actually serves."
    />
  );
}
