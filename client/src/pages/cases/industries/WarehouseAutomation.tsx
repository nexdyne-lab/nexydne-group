import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Package, TrendingUp, DollarSign, Users, Clock, Target, Zap } from "lucide-react";

export default function WarehouseAutomation() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Lifting Warehouse Productivity 45% for a Regional Distributor | Transportation & Logistics Case Study"
      seoDescription="A distributor's warehouses could not keep pace with online orders, and every peak meant scrambling for labor it could not find. Rethinking how work moved through the buildings lifted productivity by 45%."
      canonical="/cases/warehouse-optimization"
      industry="Transportation & Logistics"
      industryLink="/industries/transportation-logistics"
      title="How a Regional Distributor Lifted Warehouse Productivity by 45%"
      subtitle="A distributor's warehouses were built for pallets, not the single-item online orders now flooding in — and every peak meant hiring workers it could not find. Rethinking how work moved through the buildings changed the economics of fulfillment."
      heroImage="/images/cases/warehouse-optimization-hero.jpg"
      metrics={[
        { value: "45%", label: "Productivity Gain" },
        { value: "99.8%", label: "Order Accuracy" },
        { value: "3x", label: "Peak Throughput" },
        { value: "$8M", label: "Annual Savings" }
      ]}
      clientContextTitle="Warehouses Built for a Business That No Longer Existed"
      clientContextIntro="A regional distributor supplied retailers and, increasingly, shoppers ordering online direct. Its online orders had roughly tripled in three years, but the warehouses handling them had been designed for a different era — receiving goods by the pallet and shipping them out the same way. Filling an order for a single item meant a worker walking the length of the building to a shelf and back, and at peak the company simply could not hire enough of those workers to keep up."
      clientContextBody="The strain showed everywhere that mattered. Orders that competitors shipped the same day took the distributor two or three, and customers noticed. The fastest-moving products were often stored in the farthest corners, so staff walked miles each shift to pick them. Errors crept in under the pressure, and every holiday season became a scramble for temporary labor that was harder to find and more expensive than the year before. Leadership concluded that the problem was not how hard people worked; it was that the buildings, and the way work flowed through them, had never been rethought for the orders now coming in."
      clientProfile={{
        industry: "Wholesale Distribution",
        companySize: "~$550M Annual Revenue",
        projectDuration: "18 Months",
        additionalInfo: "4 Distribution Centers",
        additionalLabel: "Network Footprint"
      }}
      challengeTitle="Manual Work at Online Speed"
      challenges={[
        {
          icon: Users,
          title: "Labor That Could Not Be Found",
          description: "At peak the distributor needed far more pickers than the local market could supply, and fulfillment capacity was capped by how many people it could hire."
        },
        {
          icon: Clock,
          title: "Falling Behind on Speed",
          description: "Orders took two to three days to ship while competitors offered same-day delivery, and customers were beginning to shop elsewhere."
        },
        {
          icon: Package,
          title: "Miles Walked Every Shift",
          description: "Filling single-item orders meant staff walking the length of the building and back — work that was slow, tiring and easy to get wrong."
        },
        {
          icon: Target,
          title: "Products in the Wrong Places",
          description: "Shelf locations had been set years earlier and rarely revisited, so the fastest-moving items were often stored where they took longest to reach."
        }
      ]}
      approachTitle="Bringing the Work to the Worker"
      approachIntro="Working alongside the distributor's operations leaders, we set out to stop people walking to the goods and start bringing the goods to the people — and to keep the busiest products always within easy reach, so the same buildings could handle far more orders without adding floor space."
      steps={[
        {
          step: "01",
          title: "Goods That Come to the Picker",
          description: "We introduced automated systems that carry shelves of product directly to a picker standing in one place, so staff no longer walked the floor to find each item. The time spent moving around the building fell sharply, and each worker could fill far more orders in an hour."
        },
        {
          step: "02",
          title: "Keeping the Busy Items Close",
          description: "We put in place a system that continuously watches which products are selling and quietly moves the fastest movers to the most accessible positions. Placement that had been fixed for years now adjusted itself to real demand, week by week."
        },
        {
          step: "03",
          title: "Directing the Work in Real Time",
          description: "We built a control layer that decides, moment by moment, which task should go to which worker and in what order — balancing the workload across the floor so no one waited and nothing sat idle."
        },
        {
          step: "04",
          title: "Planning for the Peak, Not Reacting to It",
          description: "We added straightforward forecasting that anticipated order volumes days ahead, so staffing, stock positioning and capacity could be arranged in advance rather than improvised when the orders landed."
        }
      ]}
      resultsTitle="A Warehouse That Keeps Up"
      results={[
        {
          icon: TrendingUp,
          value: "45%",
          label: "Higher productivity",
          detail: "Orders filled per hour of labor"
        },
        {
          icon: Target,
          value: "99.8%",
          label: "Order accuracy",
          detail: "Up from 98.5%"
        },
        {
          icon: Zap,
          value: "3x",
          label: "Peak throughput",
          detail: "The same buildings, three times the volume"
        },
        {
          icon: DollarSign,
          value: "$8M",
          label: "Saved each year",
          detail: "From labor and efficiency gains"
        }
      ]}
      quote="We used to dread the holidays, because we knew we could never hire enough people to get through them. Now our staff manage the machines that do the walking, and the same four buildings handle three times the orders. Growth in our online business went from something we feared to something we can actually welcome."
      quoteAuthor="Chief Operating Officer"
      quoteRole="Regional distribution company"
      relatedStudies={[
        {
          title: "Cutting Freight Costs 18% Across the Network",
          metric: "18%",
          label: "lower freight cost",
          link: "/cases/freight-optimization",
          image: "/images/industries/transport-traffic.jpg"
        },
        {
          title: "Making Every Delivery Route Pay",
          metric: "30%",
          label: "lower cost per delivery",
          link: "/cases/last-mile-optimization",
          image: "/images/industries/transport-bridge.jpg"
        }
      ]}
      ctaTitle="Ready to get more out of your warehouses?"
      ctaDescription="Let's talk about what rethinking how work flows through your buildings could be worth."
    />
  );
}
