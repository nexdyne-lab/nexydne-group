import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Truck, Clock, DollarSign, Target, Leaf, MapPin } from "lucide-react";

export default function LastMileOptimization() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Cutting Last-Mile Delivery Costs 30% for a Regional Carrier | Transportation & Logistics Case Study"
      seoDescription="A regional carrier was losing money on the final leg of every delivery, with routes locked the night before. Letting routes adjust as the day unfolded cut the cost of each delivery by 30%."
      canonical="/cases/last-mile-optimization"
      industry="Transportation & Logistics"
      industryLink="/industries/transportation-logistics"
      title="How a Regional Carrier Cut Last-Mile Costs by 30%"
      subtitle="A carrier was spending more to deliver each parcel than the delivery earned, with routes fixed the night before and no way to adapt. Letting the routes adjust as the day unfolded turned a money-losing operation into a profitable one."
      heroImage="/images/industries/transport-bridge.jpg"
      metrics={[
        { value: "30%", label: "Lower Cost Per Delivery" },
        { value: "98%", label: "On-Time Delivery" },
        { value: "25%", label: "More Stops Per Route" },
        { value: "35%", label: "Fewer Emissions" }
      ]}
      clientContextTitle="Losing Money on the Last Mile"
      clientContextIntro="A regional carrier ran a fleet of around 120 vehicles making roughly eight thousand deliveries a day across a dense urban market. The final leg to the customer's door — always the most expensive part of any delivery — had become the problem: completing a delivery consumed about 80% of the revenue it brought in, and rising traffic and tighter customer time windows were making the squeeze worse."
      clientContextBody="Each evening, the next day's routes were planned on fixed assumptions and then locked. When traffic built up, the weather turned or a customer changed an order, the routes could not respond — drivers followed paths that no longer made sense while dispatchers spent the day handling exceptions by phone. The company needed its routes to adjust to the real world as it changed, rather than being set in stone before the day had even begun."
      clientProfile={{
        industry: "Last-Mile Delivery Carrier",
        companySize: "~120-Vehicle Fleet",
        projectDuration: "12 Months",
        additionalInfo: "~120 Vehicles",
        additionalLabel: "Delivery Fleet"
      }}
      challengeTitle="An Operation That Could Not Adapt"
      challenges={[
        {
          icon: DollarSign,
          title: "Costing More Than It Earned",
          description: "Each delivery consumed about 80% of the revenue it brought in, and at that spread the business could not sustain itself."
        },
        {
          icon: Clock,
          title: "Routes Locked Too Early",
          description: "Plans were fixed the night before, so once the day began there was no way to adjust to what was actually happening on the road."
        },
        {
          icon: Target,
          title: "Tight Windows to Hit",
          description: "Customers expected delivery inside narrow time windows, which were difficult and costly to meet without a smarter plan."
        },
        {
          icon: MapPin,
          title: "A Hard City to Cross",
          description: "Traffic, parking and building access made every urban route a moving puzzle, with countless variables to weigh."
        }
      ]}
      approachTitle="Routes That Adjust as the Day Unfolds"
      approachIntro="We helped the carrier move from routes fixed the night before to routes that adjust continuously through the day — building each plan on a realistic read of travel times and reshaping it in real time as traffic, orders and progress changed, so drivers were always on a sensible path."
      steps={[
        {
          step: "01",
          title: "A Realistic Read on Travel Time",
          description: "We built a reliable estimate of how long each leg of a route would actually take, accounting for the time of day, the weather and the patterns the city followed. Plans, and the promises made to customers, could finally rest on what the roads would really do."
        },
        {
          step: "02",
          title: "Routes That Rework Themselves",
          description: "We put in place routing that adjusts continuously through the day. As traffic shifts, new orders arrive, or a driver runs ahead or behind, the route reshapes itself around the change instead of forcing a call to dispatch."
        },
        {
          step: "03",
          title: "Delivery Windows That Fit the Route",
          description: "We offered customers time windows chosen to fit an efficient route rather than arbitrary slots. Customers got the convenience they wanted, and the company got the denser routes it needed to make the economics work."
        },
        {
          step: "04",
          title: "Everything the Driver Needs",
          description: "We gave drivers a simple app with clear turn-by-turn directions, live updates and delivery instructions in one place, so they could follow the best path without guesswork or phone calls."
        }
      ]}
      resultsTitle="Delivery That Pays"
      results={[
        {
          icon: DollarSign,
          value: "30%",
          label: "Lower cost per delivery",
          detail: "From denser routes and fewer wasted miles"
        },
        {
          icon: Clock,
          value: "98%",
          label: "On-time delivery",
          detail: "Inside the promised window"
        },
        {
          icon: Truck,
          value: "25%",
          label: "More stops per route",
          detail: "From tighter sequencing"
        },
        {
          icon: Leaf,
          value: "35%",
          label: "Fewer emissions",
          detail: "From fewer miles driven"
        }
      ]}
      quote="We were losing money on the last mile, and everyone in the industry treated that as simply the cost of doing business. Letting our routes adjust through the day changed that. Our drivers make more deliveries in less time, customers get an arrival time they can trust, and for the first time the final mile actually pays for itself."
      quoteAuthor="Chief Executive Officer"
      quoteRole="Regional delivery carrier"
      relatedStudies={[
        {
          title: "Lifting Warehouse Productivity by 45%",
          metric: "45%",
          label: "higher productivity",
          link: "/cases/warehouse-optimization",
          image: "/images/cases/warehouse-optimization-hero.jpg"
        },
        {
          title: "Cutting Freight Costs 18% Across the Network",
          metric: "18%",
          label: "lower freight cost",
          link: "/cases/freight-optimization",
          image: "/images/industries/transport-traffic.jpg"
        }
      ]}
      ctaTitle="Ready to make the last mile pay?"
      ctaDescription="Let's talk about what routes that adapt in real time could do for your economics."
    />
  );
}
