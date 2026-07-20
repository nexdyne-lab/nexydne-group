import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { TrendingUp, Footprints, PackageX, Server, Bot, Boxes, Timer, DollarSign } from "lucide-react";

export function EcommerceFulfillment() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Automating Order Fulfillment to Triple Capacity | E-Commerce Case Study"
      seoDescription="A home-goods e-tailer's manual fulfillment couldn't scale as volume doubled, with workers walking 8 miles a shift. Phased automation tripled capacity and cut labor cost per order 60%."
      canonical="/capabilities/operations/case-studies/ecommerce-fulfillment"
      industry="Retail"
      industryLink="/industries/retail"
      title="How an E-Commerce Company Tripled Fulfillment Capacity With Automation"
      subtitle="A home-goods e-tailer automated its fulfillment operation in phases — tripling order capacity while cutting labor cost per order 60% and reaching 99.2% accuracy and a 4-hour ship time."
      heroImage="/images/industries/retail-warehouse.jpg"
      metrics={[
        { value: "3x", label: "Order Capacity" },
        { value: "60%", label: "Labor Cost Reduction" },
        { value: "99.2%", label: "Order Accuracy" },
        { value: "4 hrs", label: "Avg Ship Time" }
      ]}
      clientContextTitle="Held Together by Heroics"
      clientContextIntro="A 175-employee e-commerce company specializing in home goods operates a single 200,000-square-foot fulfillment center. Order volume had doubled in 18 months, but largely manual processes couldn't scale — peak season required hiring 50+ temporary workers with inconsistent training and spiking error rates."
      clientContextBody="The diagnostic revealed an operation held together by effort rather than systems: picking from paper lists with workers walking 8 miles a shift, packing stations with no standardization, inconsistent quality checks, and a 12-year-old warehouse management system incapable of supporting modern automation. The company needed to triple capacity without proportionally growing headcount."
      clientProfile={{
        industry: "Home-Goods E-Commerce",
        companySize: "200,000 sq ft",
        projectDuration: "Phased Automation",
        additionalInfo: "Goods-to-Person",
        additionalLabel: "Approach"
      }}
      challengeTitle="Why Fulfillment Couldn't Scale"
      challenges={[
        {
          icon: TrendingUp,
          title: "Volume doubled in 18 months",
          description: "Manual processes hit their limit as order growth accelerated."
        },
        {
          icon: Footprints,
          title: "8 miles of walking a shift",
          description: "Paper-list picking sent workers backtracking across the facility."
        },
        {
          icon: PackageX,
          title: "Error spikes at peak",
          description: "50+ temporary workers with inconsistent training drove errors during high volume."
        },
        {
          icon: Server,
          title: "A 12-year-old WMS",
          description: "The legacy system couldn't support modern automation or process design."
        }
      ]}
      approachTitle="A Phased Automation Roadmap"
      approachIntro="NEXDYNE developed a phased automation roadmap balancing investment with returns — each phase designed to deliver positive ROI within 12 months, starting with a modern WMS."
      steps={[
        {
          step: "01",
          title: "Modernize the WMS",
          description: "A new WMS with wave planning, zone picking, and mobile guidance cut pick-path travel 40% and eliminated paper."
        },
        {
          step: "02",
          title: "Automate the fast movers",
          description: "Goods-to-person automation for the 20% of SKUs driving 80% of picks reached 99.9% accuracy — a 5x productivity gain."
        },
        {
          step: "03",
          title: "Standardize the work",
          description: "Standard procedures for every task cut new-hire ramp from 4 weeks to 1, with real-time performance dashboards."
        },
        {
          step: "04",
          title: "Improve continuously",
          description: "A frontline-driven continuous-improvement program kept refining the operation."
        }
      ]}
      resultsTitle="The Payoff"
      results={[
        {
          icon: Bot,
          value: "3x",
          label: "Order capacity",
          detail: "Handling three years of projected growth in the same facility"
        },
        {
          icon: DollarSign,
          value: "60%",
          label: "Lower labor cost per order",
          detail: "As automation absorbed volume growth"
        },
        {
          icon: Timer,
          value: "4 hrs",
          label: "Average ship time",
          detail: "With order accuracy at 99.2%, no peak-season spikes"
        }
      ]}
      quote=""
      quoteAuthor=""
      quoteRole=""
      relatedStudies={[
        {
          title: "Doubling Warehouse Throughput Without Expanding",
          metric: "2x",
          label: "throughput",
          link: "/capabilities/operations/case-studies/distribution-warehouse",
          image: "/images/capabilities/cap-warehouse-robot.jpg"
        },
        {
          title: "Building a Custom Inventory App That Cut Stockouts 40%",
          metric: "40%",
          label: "fewer stockouts",
          link: "/cases/retail-inventory-app",
          image: "/images/capabilities/cap-retail-apparel.jpg"
        }
      ]}
      ctaTitle="Ready to scale fulfillment?"
      ctaDescription="Let's talk about what phased automation could do for your capacity and labor cost."
    />
  );
}

export default EcommerceFulfillment;
