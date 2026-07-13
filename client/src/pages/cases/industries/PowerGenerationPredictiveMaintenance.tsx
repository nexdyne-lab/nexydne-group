import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Zap, TrendingUp, Shield, DollarSign, Clock, Activity } from "lucide-react";

export default function PowerGenerationPredictiveMaintenance() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Halving Unplanned Outages at a Power Generator | Energy & Utilities Case Study"
      seoDescription="A power generator kept losing turbines without warning, at roughly $500,000 a trip. Reading the signals its machines were already sending cut unplanned outages by 60%."
      canonical="/cases/power-generation-predictive-maintenance"
      industry="Energy & Utilities"
      industryLink="/industries/energy-utilities"
      title="How a Power Generator Halved Its Unplanned Outages"
      subtitle="A mid-sized generator kept losing turbines without warning, each trip costing around $500,000 in lost revenue and emergency repairs. Reading the signals its machines were already sending let it fix problems on a plan instead of in a panic."
      heroImage="/images/industries/energy-powerplant.jpg"
      metrics={[
        { value: "60%", label: "Fewer Unplanned Outages" },
        { value: "95%", label: "Fleet Availability" },
        { value: "$9M", label: "Saved Each Year" },
        { value: "~3 Weeks", label: "Advance Warning" }
      ]}
      clientContextTitle="Turbines That Failed Without Warning"
      clientContextIntro="An independent power producer ran a fleet of about a dozen gas turbines across six plants, together capable of producing roughly three gigawatts. In this business an unplanned outage is expensive twice over: a turbine that trips offline stops earning revenue and then has to be repaired in a hurry. Each such trip cost the company around $500,000, and it was absorbing roughly fifteen of them a year — close to $18 million in all."
      clientContextBody="The maintenance approach was largely to blame. Turbines were overhauled on a fixed calendar rather than by their actual condition, which meant a healthy machine might be opened up early while a struggling one ran on until it failed. Meanwhile each turbine streamed thousands of sensor readings, far more than any engineer could watch, so the subtle early signs of trouble slipped past unnoticed until something broke. The producer wanted to see failures coming while there was still time to plan around them."
      clientProfile={{
        industry: "Independent Power Producer",
        companySize: "~$550M Annual Revenue",
        projectDuration: "16 Months",
        additionalInfo: "~12 Gas Turbines",
        additionalLabel: "Generating Fleet"
      }}
      challengeTitle="The Price of a Surprise Outage"
      challenges={[
        {
          icon: Zap,
          title: "Costly Surprise Trips",
          description: "About fifteen unplanned outages a year, at roughly $500,000 each, added up to close to $18 million in lost revenue and emergency repairs."
        },
        {
          icon: Clock,
          title: "Maintenance by the Calendar",
          description: "Turbines were overhauled on fixed schedules that ignored their real condition — healthy machines opened up early, failing ones left running too long."
        },
        {
          icon: Activity,
          title: "More Data Than Anyone Could Read",
          description: "Each turbine produced thousands of readings, far beyond what an engineer could watch, so the early warning signs of failure went unseen."
        },
        {
          icon: Shield,
          title: "Always Reacting",
          description: "The organization was built to respond to breakdowns rather than prevent them, so its best people spent their time firefighting emergencies."
        }
      ]}
      approachTitle="From Firefighting to Foresight"
      approachIntro="We helped the producer turn the flood of data its turbines were already producing into early warning — spotting the signs of a developing fault weeks ahead, so a repair could be planned into a quiet period rather than forced by a breakdown."
      steps={[
        {
          step: "01",
          title: "One View of the Whole Fleet",
          description: "We brought together the readings from every turbine — temperatures, pressures, vibrations and performance figures — into a single live picture of how the entire fleet was running, so no machine went unwatched."
        },
        {
          step: "02",
          title: "Learning the Signs of Failure",
          description: "By studying about a decade of the company's own maintenance history, we taught the system to recognize the early patterns that precede common failures, from worn bearings to fouled compressors."
        },
        {
          step: "03",
          title: "Watching Every Turbine in Real Time",
          description: "The system continuously judged the health of each machine and raised a flag the moment a worrying pattern appeared — on average about three weeks before the failure would have happened."
        },
        {
          step: "04",
          title: "Fixing on a Plan, Not in a Panic",
          description: "Those early flags fed straight into maintenance planning, so work was done when a machine actually needed it and timed for when power prices were low — turning a looming breakdown into routine, well-timed work."
        }
      ]}
      resultsTitle="A Fleet That Keeps Running"
      results={[
        {
          icon: Shield,
          value: "60%",
          label: "Fewer unplanned outages",
          detail: "From about 15 a year down to 6"
        },
        {
          icon: TrendingUp,
          value: "95%",
          label: "Fleet availability",
          detail: "Up from 91% — among the best in its class"
        },
        {
          icon: DollarSign,
          value: "$9M",
          label: "Saved each year",
          detail: "From avoided outages and better-timed maintenance"
        },
        {
          icon: Clock,
          value: "~3 Weeks",
          label: "Typical advance warning",
          detail: "Time to plan and carry out the repair calmly"
        }
      ]}
      quote="This changed how we work more than any single machine. We used to celebrate the heroic all-night save after a turbine failed; now we celebrate the failure that never happened because we saw it coming. Our engineers do planned work on our schedule, and the fleet simply keeps running."
      quoteAuthor="Vice President, Generation"
      quoteRole="Independent power producer"
      relatedStudies={[
        {
          title: "Cutting Outage Time Nearly in Half for a Regional Utility",
          metric: "45%",
          label: "shorter outages",
          link: "/cases/utility-grid-modernization",
          image: "/images/industries/energy-solar.jpg"
        },
        {
          title: "Sharper Generation Forecasts for a Renewables Developer",
          metric: "25%",
          label: "better forecast accuracy",
          link: "/cases/renewable-energy-forecasting",
          image: "/images/industries/energy-wind.jpg"
        }
      ]}
      ctaTitle="Ready to see failures before they cost you?"
      ctaDescription="Let's talk about turning your fleet's data into weeks of advance warning."
    />
  );
}
