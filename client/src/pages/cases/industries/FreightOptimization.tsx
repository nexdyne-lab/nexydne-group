import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Truck, DollarSign, TrendingUp, Target, Clock, Leaf } from "lucide-react";

export default function FreightOptimization() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Cutting Freight Costs 18% for a Consumer-Goods Shipper | Transportation & Logistics Case Study"
      seoDescription="A manufacturer's freight bill was climbing faster than sales while service slipped, and its planners were routing shipments by hand. Optimizing routes, loads and modes across the network took 18% out of the cost."
      canonical="/cases/freight-optimization"
      industry="Transportation & Logistics"
      industryLink="/industries/transportation-logistics"
      title="How a Consumer-Goods Shipper Cut Freight Costs by 18%"
      subtitle="A manufacturer's freight bill was rising faster than its sales while on-time delivery slipped — and every routing decision was still made by hand. Optimizing how shipments moved across the network took real cost out and put service back."
      heroImage="/images/industries/transport-traffic.jpg"
      metrics={[
        { value: "18%", label: "Lower Freight Cost" },
        { value: "95%", label: "On-Time Delivery" },
        { value: "$14M", label: "Saved Each Year" },
        { value: "20%", label: "Fewer Emissions" }
      ]}
      clientContextTitle="A Freight Bill Rising Faster Than the Business"
      clientContextIntro="A consumer-goods manufacturer moved its products from eight distribution centers to roughly twelve hundred retail and wholesale destinations across the country. Its annual freight bill had grown to around $80 million and had climbed by a quarter in three years — faster than sales — even as on-time delivery slipped. Every day, planners decided by hand how thousands of shipments should travel, and the network had simply grown too complex to route well that way."
      clientContextBody="The planning was reactive and rested on rules of thumb. Shipments that could have travelled together moved separately. Trucks were the default choice even on routes where rail, or a mix of modes, would have been cheaper and still arrived on time. Because each decision was made in isolation, the savings that come only from looking at the whole network at once were left on the table — and service suffered alongside cost."
      clientProfile={{
        industry: "Consumer-Goods Manufacturer",
        companySize: "~$600M Annual Revenue",
        projectDuration: "12 Months",
        additionalInfo: "8 DCs, ~1,200 Destinations",
        additionalLabel: "Network Size"
      }}
      challengeTitle="A Network Too Complex to Plan by Hand"
      challenges={[
        {
          icon: DollarSign,
          title: "A Cost Line Out of Control",
          description: "The freight bill had risen roughly 25% in three years, outpacing sales and eating into margins the business could not spare."
        },
        {
          icon: Target,
          title: "Savings Left on the Table",
          description: "Planning by hand meant chances to combine shipments and choose better routes were routinely missed, one decision at a time."
        },
        {
          icon: Truck,
          title: "Trucks by Default",
          description: "Shipments went by truck out of habit, even on routes where slower, cheaper options would have met the delivery date just as well."
        },
        {
          icon: Clock,
          title: "Service Slipping",
          description: "On-time delivery had fallen to 88%, and customer complaints were mounting as reliability declined."
        }
      ]}
      approachTitle="Planning the Whole Network at Once"
      approachIntro="We helped the manufacturer replace thousands of separate, hand-made routing calls with a single view of the entire network — so shipments could be combined, routed and assigned to the right mode of transport in a way that weighed cost and service together, not one shipment at a time."
      steps={[
        {
          step: "01",
          title: "A Complete Map of the Network",
          description: "We first built an accurate picture of every route, rate, transit time and constraint the company worked with. For the first time the whole network could be seen and weighed in one place, which is what optimizing it requires."
        },
        {
          step: "02",
          title: "A Clearer Read on What Was Coming",
          description: "We put in place forecasting that anticipated shipment volumes by route and by week, so capacity could be reserved and plans made ahead of time rather than in the moment."
        },
        {
          step: "03",
          title: "Choosing the Best Way to Ship",
          description: "We introduced planning that weighs every shipment against the whole network — combining loads, selecting routes and picking the mode of transport that meets the delivery promise at the lowest cost. Decisions that took planners hours were made in seconds."
        },
        {
          step: "04",
          title: "Adjusting When Things Change",
          description: "We gave the operation the ability to respond as conditions shifted — rerouting around delays, finding backup capacity and reworking plans on the fly, so a disruption no longer meant a missed delivery."
        }
      ]}
      resultsTitle="Lower Cost, Better Service"
      results={[
        {
          icon: DollarSign,
          value: "18%",
          label: "Lower freight cost",
          detail: "From smarter routing and mode choices"
        },
        {
          icon: Clock,
          value: "95%",
          label: "On-time delivery",
          detail: "Up from 88% — service restored"
        },
        {
          icon: TrendingUp,
          value: "$14M",
          label: "Saved each year",
          detail: "Across the freight network"
        },
        {
          icon: Leaf,
          value: "20%",
          label: "Fewer emissions",
          detail: "From combined loads and mode shift"
        }
      ]}
      quote="Our planners were good at their jobs, but no person can weigh a whole network in their head, shipment after shipment, all day long. Once the routing looked at everything at once, we were spending less, delivering more reliably and burning less fuel — all at the same time. The payback came almost immediately."
      quoteAuthor="Vice President, Supply Chain"
      quoteRole="Consumer-goods manufacturer"
      relatedStudies={[
        {
          title: "Lifting Warehouse Productivity by 45%",
          metric: "45%",
          label: "higher productivity",
          link: "/cases/warehouse-optimization",
          image: "/images/industries/retail-warehouse.jpg"
        },
        {
          title: "Making Every Delivery Route Pay",
          metric: "30%",
          label: "lower cost per delivery",
          link: "/cases/last-mile-optimization",
          image: "/images/industries/transport-bridge.jpg"
        }
      ]}
      ctaTitle="Ready to take cost out of your freight?"
      ctaDescription="Let's talk about what planning your whole network at once could save."
    />
  );
}
