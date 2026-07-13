import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { ShoppingCart, Smartphone, TrendingUp, Users, Target, DollarSign, Star } from "lucide-react";

export default function FashionRetailTransformation() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Growing a Fashion Retailer's Online Sales by 85% | Retail Case Study"
      seoDescription="A regional fashion retailer was losing digital-first shoppers to online-only rivals. Bringing its stores and website together into one experience grew online sales 85% and lifted conversion by nearly a third."
      canonical="/cases/fashion-retail-digital-transformation"
      industry="Retail"
      industryLink="/industries/retail"
      title="How a Regional Fashion Retailer Grew Its Online Sales by 85%"
      subtitle="A well-known apparel chain was losing a generation of digital-first shoppers to online-only rivals. Bringing its stores and website together into a single experience changed how — and how much — its customers bought."
      heroImage="/images/capabilities/cap-retail-apparel.jpg"
      metrics={[
        { value: "85%", label: "E-Commerce Growth" },
        { value: "32%", label: "Higher Conversion" },
        { value: "$40M", label: "Revenue Gain" },
        { value: "4.6/5", label: "Customer Rating" }
      ]}
      clientContextTitle="A Trusted Brand That Shoppers Could No Longer Reach Easily"
      clientContextIntro="A regional fashion retailer with roughly 120 stores had built a loyal following over decades, but its online business had never kept pace. The website was slow, the mobile app was poorly rated, and the recommendations shown to shoppers felt generic. Online sales accounted for only about one dollar in eight — well below what comparable retailers were seeing."
      clientContextBody="The deeper problem was that the company's stores and its website behaved as if they belonged to two different businesses. A customer could not buy online and collect in a store, could not return a website order at the counter, and could not tell from either channel what was actually in stock nearby. Younger, digital-first shoppers — the very customers the brand needed to keep — were quietly drifting to online-only competitors that made buying effortless. Leadership was clear that the answer was not a flashier website but a single, joined-up experience across everywhere the brand met its customers."
      clientProfile={{
        industry: "Fashion Retail",
        companySize: "~$600M Annual Revenue",
        projectDuration: "18 Months",
        additionalInfo: "~120 Stores",
        additionalLabel: "Store Network"
      }}
      challengeTitle="Two Businesses Wearing One Brand"
      challenges={[
        {
          icon: Smartphone,
          title: "A Digital Experience Falling Behind",
          description: "A slow website and a poorly rated mobile app, paired with generic recommendations, gave shoppers little reason to buy online and every reason to leave."
        },
        {
          icon: ShoppingCart,
          title: "Stores and Website Working Apart",
          description: "Online and store systems did not talk to each other, so customers could not shop across the two — no buying online to collect in store, no returning web orders at the counter."
        },
        {
          icon: Target,
          title: "Conversion Left on the Table",
          description: "Barely three in a hundred website visits ended in a purchase — well short of what comparable retailers achieved, and worth millions in missed sales each year."
        },
        {
          icon: Users,
          title: "Losing the Next Generation",
          description: "Digital-first shoppers were steadily defecting to online-only rivals whose experiences simply felt easier."
        }
      ]}
      approachTitle="Building One Experience Across Every Channel"
      approachIntro="Working alongside the retailer's commercial and technology teams, we set out to make the brand feel like one business wherever a customer met it — online, on a phone, or in a store — and to make everyday shopping effortless rather than a source of friction."
      steps={[
        {
          step: "01",
          title: "A Faster, Simpler Storefront",
          description: "We rebuilt the website and mobile app around speed and clarity, cutting page-load times to under two seconds and giving both a single, shared view of every product. For the first time, what a customer saw online matched what was actually on the shelves."
        },
        {
          step: "02",
          title: "Recommendations That Actually Fit",
          description: "We replaced one-size-fits-all merchandising with recommendations shaped by each shopper's browsing and buying history, so the homepage, product suggestions and offers a customer saw reflected their own tastes rather than the average."
        },
        {
          step: "03",
          title: "Letting Customers Shop Across Store and Screen",
          description: "We connected store and online inventory so customers could buy online and collect in store, return web orders at the counter, and order from a store an item that was out of stock in their size. Stores became part of the online operation rather than a separate channel."
        },
        {
          step: "04",
          title: "One View of Every Customer",
          description: "We brought each customer's online and in-store activity together into a single picture, so a store associate could pick up where the website left off and service felt personal wherever it happened."
        }
      ]}
      resultsTitle="From Digital Laggard to Digital Leader"
      results={[
        {
          icon: TrendingUp,
          value: "85%",
          label: "Growth in online sales",
          detail: "Online rose from about 12% to 22% of total revenue"
        },
        {
          icon: Target,
          value: "32%",
          label: "Higher conversion",
          detail: "Website purchases rose from 3.2% to 4.2% of visits"
        },
        {
          icon: DollarSign,
          value: "$40M",
          label: "Additional revenue",
          detail: "From digital growth and better conversion"
        },
        {
          icon: Star,
          value: "4.6/5",
          label: "Customer app rating",
          detail: "Up from 2.1 before the work began"
        }
      ]}
      quote="We had spent years thinking we needed a better website. What we actually needed was to stop treating our stores and our online business as two separate things. Once a customer could shop with us however suited them — browse on a phone, try on in a store, collect an online order on the way home — the growth took care of itself."
      quoteAuthor="Chief Digital Officer"
      quoteRole="Regional fashion retailer"
      relatedStudies={[
        {
          title: "Cutting a Grocer's Fresh-Food Waste by a Third",
          metric: "35%",
          label: "less fresh-food waste",
          link: "/cases/grocery-demand-forecasting",
          image: "/images/capabilities/cap-food.jpg"
        },
        {
          title: "Turning a Stale Loyalty Program Into Growth",
          metric: "45%",
          label: "higher member spend",
          link: "/cases/retail-loyalty-transformation",
          image: "/images/capabilities/cap-retail-data.jpg"
        }
      ]}
      ctaTitle="Ready to bring your channels together?"
      ctaDescription="Let's talk about what a single, joined-up customer experience could be worth."
    />
  );
}
