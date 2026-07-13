import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Plane, Cog, Shield, Clock, DollarSign, Target, Activity } from "lucide-react";

export default function AviationPredictiveMaintenance() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Halving Surprise Aircraft Groundings for an Airline | Aerospace & Defense Case Study"
      seoDescription="Every unplanned grounding cost a regional carrier six figures and a plane full of disrupted passengers. Reading the signals its aircraft already sent cut surprise groundings in half."
      canonical="/cases/logistics-optimization"
      industry="Aerospace & Defense"
      industryLink="/industries/aerospace-defense"
      title="Halving Surprise Aircraft Groundings for a Major Airline"
      subtitle="Every unexpected grounding cost a regional carrier six figures and a plane full of disrupted passengers. Reading the signals its aircraft were already sending let the airline fix problems on its own schedule, not the fault's."
      heroImage="/images/industries/ops-monitors-dark.jpg"
      metrics={[
        { value: "50%", label: "Fewer Groundings" },
        { value: "99.2%", label: "On-Time Dispatch" },
        { value: "$7M", label: "Saved Each Year" },
        { value: "~30 Days", label: "Advance Warning" }
      ]}
      clientContextTitle="The High Price of an Unplanned Grounding"
      clientContextIntro="A regional airline flew a fleet of 80 aircraft on around 500 departures a day. Its biggest operational enemy was the unplanned grounding — an aircraft pulled from service without warning. Each one cost more than $120,000 once delays, rebookings and compensation were counted, and the airline was absorbing around 50 of them a year: close to $18 million, and a steady erosion of passenger trust."
      clientContextBody="Maintenance was scheduled by the calendar and by flight hours, not by the actual condition of each part — so a healthy component might be replaced early while a failing one slipped through. Meanwhile the aircraft themselves generated enormous volumes of operating data that no one was using. Problems were found during inspections, or when something simply broke. The airline wanted to see trouble coming while there was still time to plan around it."
      clientProfile={{
        industry: "Regional Airline",
        companySize: "80-Aircraft Fleet",
        projectDuration: "14 Months",
        additionalInfo: "~500 Daily Departures",
        additionalLabel: "Operations Scale"
      }}
      challengeTitle="The Cost of Being Caught by Surprise"
      challenges={[
        {
          icon: Plane,
          title: "Groundings Without Warning",
          description: "Around 50 unplanned groundings a year cost close to $18M and left passengers stranded."
        },
        {
          icon: Clock,
          title: "Maintenance by the Calendar",
          description: "Work was scheduled on hours and cycles rather than the true condition of each part — missing real wear and replacing healthy components."
        },
        {
          icon: Activity,
          title: "Data That Went Unread",
          description: "Aircraft produced vast amounts of operating data, but almost none of it was turned into insight."
        },
        {
          icon: Target,
          title: "Found Too Late",
          description: "Faults surfaced in inspection or in failure — after they had already disrupted the operation."
        }
      ]}
      approachTitle="Listening to What the Aircraft Already Knew"
      approachIntro="We helped the airline turn the data its fleet was already producing into early warning — spotting the signs of a developing fault weeks ahead, so a repair could be planned into a normal maintenance window rather than forced by a breakdown."
      steps={[
        {
          step: "01",
          title: "One Live Picture of Every Aircraft",
          description: "We brought together the streams each aircraft generates — engine readings, flight-control and environmental data, maintenance records — into a single, current view of each aircraft's health."
        },
        {
          step: "02",
          title: "Learning the Warning Signs",
          description: "By studying a decade of maintenance history, we taught the system to recognise the early patterns that precede a failure across dozens of the most common fault types."
        },
        {
          step: "03",
          title: "Watching in Real Time",
          description: "The system continuously assessed each aircraft's health in the air, raising a flag as soon as a concerning pattern emerged — on average about a month before the fault would have occurred."
        },
        {
          step: "04",
          title: "Fixing on the Airline's Schedule",
          description: "Those early flags fed straight into maintenance planning: repairs were folded into scheduled downtime and parts were sent ahead to the arrival airport, so a looming fault became routine work rather than a scramble."
        }
      ]}
      resultsTitle="A More Reliable Fleet"
      results={[
        {
          icon: Cog,
          value: "50%",
          label: "Fewer surprise groundings",
          detail: "From about 50 a year to 25"
        },
        {
          icon: Shield,
          value: "99.2%",
          label: "On-time dispatch",
          detail: "Up from 98.5% — among the best in the industry"
        },
        {
          icon: DollarSign,
          value: "$7M",
          label: "Saved each year",
          detail: "From avoided disruption and better-planned maintenance"
        },
        {
          icon: Clock,
          value: "~30 Days",
          label: "Typical advance warning",
          detail: "Time to plan and fix on the airline's terms"
        }
      ]}
      quote="We used to wait for things to break; now we fix them before they do. Our engineers aren't firefighting emergencies anymore — they're doing planned work on our schedule. And our passengers get where they're going, on time. That is what reliability really means."
      quoteAuthor="Vice President, Technical Operations"
      quoteRole="Major commercial airline"
      relatedStudies={[
        {
          title: "98% Fleet Readiness for a Defense Prime",
          metric: "98%",
          label: "mission-ready aircraft",
          link: "/cases/supply-chain-visibility",
          image: "/images/industries/retail-warehouse.jpg"
        },
        {
          title: "Bringing Aircraft Programs to Market Faster",
          metric: "40%",
          label: "faster development",
          link: "/cases/aerospace-digital-engineering",
          image: "/images/industries/aero-rocket.jpg"
        }
      ]}
      ctaTitle="Ready to see trouble before it grounds you?"
      ctaDescription="Let's talk about turning your fleet's data into early warning."
    />
  );
}
