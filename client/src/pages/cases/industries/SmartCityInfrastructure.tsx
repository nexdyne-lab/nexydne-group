import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Car, Leaf, DollarSign, Target, Shield } from "lucide-react";

export default function SmartCityInfrastructure() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Getting Traffic Moving Again for a Growing City | Public Sector Case Study"
      seoDescription="A mid-sized city's traffic signals ran on fixed timers that ignored the road in front of them. Letting the signals respond to real conditions cut congestion by 30% and cleared paths for emergency vehicles."
      canonical="/cases/smart-city-platform"
      industry="Public Sector"
      industryLink="/industries/public-sector"
      title="How a Growing City Got Traffic Moving Again for 300,000 Residents"
      subtitle="The city's traffic signals ran on fixed timers that took no notice of the road in front of them. Letting the signals respond to what was actually happening eased the daily grind of the commute and cleared the way for ambulances."
      heroImage="/images/industries/transport-traffic.jpg"
      metrics={[
        { value: "30%", label: "Less Congestion" },
        { value: "25%", label: "Lower Emissions" },
        { value: "40%", label: "Faster Response" },
        { value: "$9M", label: "Yearly Benefit" }
      ]}
      clientContextTitle="Roads Built for Yesterday's City"
      clientContextIntro="A city of around 300,000 people had grown faster than the roads that served it, and the daily commute had become its most visible frustration. Travel times had crept up year after year, air quality was slipping, and residents increasingly felt that a city struggling to move them around was a city struggling, full stop. The infrastructure itself had not kept pace with the way people now lived and traveled."
      clientContextBody="The heart of the problem was that the city's traffic signals ran on fixed timers, cycling on the same schedule at rush hour and at midnight regardless of the traffic actually sitting at the light. The city had almost no live view of where congestion was building, ambulances and fire trucks lost precious minutes stuck in the same jams as everyone else, and drivers circling for a parking space added still more cars to already-busy streets. The city did not need more roads so much as a smarter way to run the ones it had."
      clientProfile={{
        industry: "City Government",
        companySize: "~300,000 Residents",
        projectDuration: "20 Months",
        additionalInfo: "~180 Intersections",
        additionalLabel: "Traffic Network"
      }}
      challengeTitle="Infrastructure That Couldn't Keep Up"
      challenges={[
        {
          icon: Car,
          title: "A Commute Getting Worse",
          description: "Travel times had risen steadily for years, turning everyday journeys into a reliable source of frustration for residents and businesses alike."
        },
        {
          icon: Target,
          title: "Signals on Autopilot",
          description: "Traffic lights cycled on fixed timers that ignored real conditions, holding drivers at empty intersections and stacking them up at busy ones."
        },
        {
          icon: Shield,
          title: "Emergency Vehicles Stuck in Traffic",
          description: "Ambulances and fire trucks were caught in the same congestion as everyone else, and every minute lost in traffic was a minute that mattered."
        },
        {
          icon: Leaf,
          title: "Idling and Emissions",
          description: "Stop-and-go traffic and drivers hunting for parking meant more time idling — worse for the air and for residents' patience."
        }
      ]}
      approachTitle="Letting the Streets Respond to Reality"
      approachIntro="We helped the city turn its traffic system from something that ran on a fixed schedule into something that responded to the road in front of it — using simple sensors at the busiest intersections to see what was actually happening and to time the lights accordingly."
      steps={[
        {
          step: "01",
          title: "Giving the City Eyes on the Road",
          description: "We placed sensors at the intersections that mattered most, giving the city a live picture of where traffic was building for the first time. Decisions that had been guesswork could now be made from what was actually on the street."
        },
        {
          step: "02",
          title: "Signals That Adjust Themselves",
          description: "Instead of fixed timers, the busiest signals now adjusted their timing to the traffic in front of them — easing bottlenecks as they formed and adapting to rush hours, events and incidents rather than ignoring them."
        },
        {
          step: "03",
          title: "Clearing the Way for Emergencies",
          description: "We connected ambulances and fire trucks to the signals so that lights turned green along their route as they approached, opening a path through traffic and shaving critical minutes off response times."
        },
        {
          step: "04",
          title: "Helping Residents Plan Ahead",
          description: "We gave residents simple, accurate information on parking availability and traffic conditions, so they could pick a better route or a better time — and stop circling the block in search of a space."
        }
      ]}
      resultsTitle="A City That Moves Better"
      results={[
        {
          icon: Car,
          value: "30%",
          label: "Less congestion",
          detail: "Meaningfully shorter waits on the city's busiest corridors"
        },
        {
          icon: Leaf,
          value: "25%",
          label: "Lower emissions",
          detail: "From less idling and smoother, steadier traffic flow"
        },
        {
          icon: Shield,
          value: "40%",
          label: "Faster emergency response",
          detail: "Signals clearing a path for ambulances and fire trucks"
        },
        {
          icon: DollarSign,
          value: "$9M",
          label: "Yearly benefit to the city",
          detail: "From time saved and productivity no longer lost to gridlock"
        }
      ]}
      quote="We didn't need to rebuild our roads — we needed them to pay attention. Once the signals could respond to the traffic actually in front of them, the whole city started to move a little easier. And knowing an ambulance can get a clear path through downtown is worth more than any statistic on a page."
      quoteAuthor="Director of Public Works"
      quoteRole="City government"
      relatedStudies={[
        {
          title: "Making Everyday Services Simple for a County",
          metric: "40%",
          label: "higher satisfaction",
          link: "/cases/city-digital-services",
          image: "/images/industries/city-digital.jpg"
        },
        {
          title: "Getting Benefits to Residents Weeks Sooner",
          metric: "50%",
          label: "faster processing",
          link: "/cases/government-benefits-modernization",
          image: "/images/cases/government-benefits-modernization-hero.jpg"
        }
      ]}
      ctaTitle="Ready to get your city moving again?"
      ctaDescription="Let's talk about making the infrastructure you already have work harder."
    />
  );
}
