import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Activity, DollarSign, Target, Wrench, Clock, TrendingUp } from "lucide-react";

export default function AutomotiveConnectedVehicle() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Turning Connected-Vehicle Data into Value | Automotive Case Study"
      seoDescription="A vehicle manufacturer was collecting data from its connected vehicles but doing little with it. Reading those signals cut warranty claims by 30% and opened an entirely new recurring service revenue line."
      canonical="/cases/automotive-connected-vehicle"
      industry="Automotive"
      industryLink="/industries/automotive"
      title="Turning Connected-Vehicle Data into Fewer Warranty Claims — and a New Revenue Line"
      subtitle="A vehicle manufacturer was already collecting data from the vehicles it sold, but doing almost nothing with it. Reading those signals cut its warranty bill and opened a service business it had never had before."
      heroImage="/images/cases/automotive-connected-vehicle-hero.jpg"
      metrics={[
        { value: "30%", label: "Fewer Warranty Claims" },
        { value: "New", label: "Subscription Revenue Line" },
        { value: "25%", label: "Lower Warranty Cost" },
        { value: "~25 Days", label: "Earlier Fault Warning" }
      ]}
      clientContextTitle="Data Coming In, and Nowhere to Go"
      clientContextIntro="A vehicle manufacturer built specialised vehicles that spent their working lives on the road for the businesses that owned them. Every one of those vehicles was connected — quietly sending back a steady stream of information about how its systems were performing. That data landed in the company's systems and, for the most part, simply sat there. No one was turning it into anything the business could use."
      clientContextBody="Meanwhile two problems were costing the company real money. Warranty was one: components failed in the field, customers brought vehicles in for repairs the manufacturer paid for, and each of those failures was a surprise that could have been seen coming. The other was a missed opportunity — the manufacturer sold a vehicle once and then had little to offer its customers afterward, even though those customers would happily have paid to keep their vehicles running reliably. The information needed to solve both problems was already arriving every day; the company just was not reading it."
      clientProfile={{
        industry: "Vehicle Manufacturer",
        companySize: "Mid-Sized Vehicle Maker",
        projectDuration: "16 Months",
        additionalInfo: "~40,000 Connected Vehicles",
        additionalLabel: "In-Service Fleet"
      }}
      challengeTitle="Value Left on the Table"
      challenges={[
        {
          icon: DollarSign,
          title: "A Rising Warranty Bill",
          description: "Components failed in the field and the manufacturer paid to fix them — each failure an avoidable surprise that ate into margin."
        },
        {
          icon: Activity,
          title: "Data That Went Unused",
          description: "Vehicles sent back a constant stream of performance information, but almost none of it was turned into insight or action."
        },
        {
          icon: TrendingUp,
          title: "No Life After the Sale",
          description: "The company sold a vehicle once and had little to offer afterward — leaving a recurring revenue relationship on the table."
        },
        {
          icon: Target,
          title: "Problems Found Too Late",
          description: "Faults surfaced when a vehicle broke down and came in for repair, the most disruptive and expensive moment to discover them."
        }
      ]}
      approachTitle="Making the Vehicle's Data Earn Its Keep"
      approachIntro="We helped the manufacturer turn the signals its vehicles were already sending into two things at once — early warning that heads off warranty failures, and a service offer customers would pay for. One stream of data, put to work on both sides of the business."
      steps={[
        {
          step: "01",
          title: "Bringing the Signals Together",
          description: "We pulled the scattered streams coming off each vehicle into a single, current view of how every vehicle in the field was actually performing — the foundation everything else was built on."
        },
        {
          step: "02",
          title: "Learning the Signs of a Failure",
          description: "By studying the manufacturer's own history of field failures, we taught the system to recognize the early patterns that come before a breakdown, giving on average about three to four weeks of warning before a component gave out."
        },
        {
          step: "03",
          title: "Heading Off Warranty Before It Happened",
          description: "Those early warnings flowed to the service network so a developing fault could be fixed during a planned visit rather than an emergency — cutting the warranty repairs the manufacturer had been paying for."
        },
        {
          step: "04",
          title: "Turning Insight into a Service Customers Buy",
          description: "We packaged the same health monitoring into a subscription the manufacturer could sell to fleet owners, who valued knowing a problem was coming before it stranded a vehicle. A cost center became a product."
        }
      ]}
      resultsTitle="One Data Stream, Two Wins"
      results={[
        {
          icon: Wrench,
          value: "30%",
          label: "Fewer warranty claims",
          detail: "Faults fixed early instead of after a breakdown"
        },
        {
          icon: TrendingUp,
          value: "New",
          label: "Subscription revenue line",
          detail: "A recurring service business that did not exist before"
        },
        {
          icon: DollarSign,
          value: "25%",
          label: "Lower warranty cost each year",
          detail: "Repairs prevented rather than paid for"
        },
        {
          icon: Clock,
          value: "~25 Days",
          label: "Typical advance warning",
          detail: "Time to fix on a planned visit, not an emergency"
        }
      ]}
      quote="We were sitting on all this information and treating it like exhaust. Once we started actually reading it, two things happened: our warranty costs fell because we fixed problems before they became failures, and we found a service our customers genuinely wanted to buy. The same data that was saving us money started making us money."
      quoteAuthor="Chief Operating Officer"
      quoteRole="Vehicle manufacturer"
      relatedStudies={[
        {
          title: "Retooling a Supplier Line for Electric-Vehicle Parts",
          metric: "45%",
          label: "fewer launch defects",
          link: "/cases/automotive-ev-transition",
          image: "/images/cases/automotive-ev-transition-hero.jpg"
        },
        {
          title: "De-Risking Parts Supply and Recall Traceability",
          metric: "80%",
          label: "fewer line stoppages",
          link: "/cases/automotive-supply-resilience",
          image: "/images/cases/automotive-supply-resilience-hero.jpg"
        }
      ]}
      ctaTitle="Ready to put your vehicle data to work?"
      ctaDescription="Let's talk about turning the signals you already collect into lower warranty costs and new revenue."
    />
  );
}
