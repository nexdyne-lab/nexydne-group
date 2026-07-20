import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Zap, Shield, Leaf, Clock, DollarSign } from "lucide-react";

export default function UtilityGridModernization() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Cutting Outage Time Nearly in Half for a Regional Utility | Energy & Utilities Case Study"
      seoDescription="A regional electric utility learned about outages only when customers called. Giving its operators a live view of the grid cut the length of the average outage by 45%."
      canonical="/cases/utility-grid-modernization"
      industry="Energy & Utilities"
      industryLink="/industries/energy-utilities"
      title="How a Regional Utility Cut the Length of an Outage Nearly in Half"
      subtitle="A regional electric utility could not see its own network — it learned about outages when the phone rang. Giving operators a live picture of the grid, and letting it heal the simplest faults on its own, changed how quickly the lights came back on."
      heroImage="/images/cases/utility-grid-modernization-hero.jpg"
      metrics={[
        { value: "45%", label: "Shorter Outages" },
        { value: "99.98%", label: "Grid Reliability" },
        { value: "$14M", label: "Saved Each Year" },
        { value: "30%", label: "Rooftop Solar Hosted" }
      ]}
      clientContextTitle="A Grid That Could Not See Itself"
      clientContextIntro="A regional electric utility delivered power to around 600,000 homes and businesses across roughly 9,000 miles of distribution lines. Its network had been built for a simpler era — power flowing one way, from a handful of plants out to customers who did little more than switch on a light. That world was gone. Rooftop solar was now pushing power back the other way, electric vehicles were adding load, and customers who tracked a package to the minute expected the same from their utility."
      clientContextBody="The deeper problem was that the utility could barely see its own grid. Operators usually learned about an outage only when customers began calling, and crews then had to drive the lines to find where the fault actually was — which is why the average outage stretched to about 90 minutes. Voltage swings from all that rooftop solar caused power-quality complaints the network had never been designed to handle. With outages costing the business roughly $30 million a year and regulators pressing for better reliability, leadership concluded it could no longer run a modern grid half-blind."
      clientProfile={{
        industry: "Regional Electric Utility",
        companySize: "~$650M Annual Revenue",
        projectDuration: "18 Months",
        additionalInfo: "~600,000 Customers",
        additionalLabel: "Customers Served"
      }}
      challengeTitle="Running a Modern Grid Half-Blind"
      challenges={[
        {
          icon: Zap,
          title: "Outages Found by Phone",
          description: "The utility had no live view of its network, so operators often learned an outage had happened only when customers started calling it in."
        },
        {
          icon: Clock,
          title: "Slow to Restore",
          description: "With no way to pinpoint a fault remotely, crews had to patrol the lines to find it — which is why the average outage ran about 90 minutes."
        },
        {
          icon: Leaf,
          title: "Built for One-Way Power",
          description: "Rooftop solar was sending power back up a grid designed to send it only one way, causing voltage swings and power-quality complaints."
        },
        {
          icon: Shield,
          title: "Failures by Surprise",
          description: "Aging equipment tended to fail without warning, and replacement was reactive — the utility fixed things after they broke, not before."
        }
      ]}
      approachTitle="Giving the Grid Eyes, and Letting It Heal Itself"
      approachIntro="Working alongside the utility's operations team, we set out to turn a network the company could not see into one it could watch in real time — and, where possible, one that could restore the simplest outages on its own before a crew was ever dispatched."
      steps={[
        {
          step: "01",
          title: "Eyes on Every Part of the Network",
          description: "We fitted the distribution grid with sensors and monitors that reported conditions continuously, so for the first time operators could watch the state of the network on a screen and see a problem the moment it appeared rather than hours later."
        },
        {
          step: "02",
          title: "Faults That Fix Themselves",
          description: "We put in a system that could locate a fault, isolate the damaged section and reroute power around it automatically — restoring most customers in seconds, while the crew was left to repair only the small stretch that was actually broken."
        },
        {
          step: "03",
          title: "Replacing Equipment Before It Fails",
          description: "By reading the signals its equipment was already sending, alongside weather and the age of each asset, we helped the utility spot the parts most likely to fail and replace them on a plan — turning surprise breakdowns into scheduled work."
        },
        {
          step: "04",
          title: "Making Room for Rooftop Solar",
          description: "We added automatic voltage management that smoothed the swings caused by two-way power flow, letting the grid host far more rooftop solar without the power-quality problems that had held it back."
        }
      ]}
      resultsTitle="A Grid Worth Trusting"
      results={[
        {
          icon: Clock,
          value: "45%",
          label: "Shorter outages",
          detail: "The average outage fell from about 90 to 50 minutes"
        },
        {
          icon: Shield,
          value: "99.98%",
          label: "Grid reliability",
          detail: "Up from 99.95% — among the best in its region"
        },
        {
          icon: DollarSign,
          value: "$14M",
          label: "Saved each year",
          detail: "From fewer, shorter outages and leaner maintenance"
        },
        {
          icon: Leaf,
          value: "30%",
          label: "Rooftop solar the grid can host",
          detail: "Up from 10% — clearing the way for more clean power"
        }
      ]}
      quote="We went from a utility that heard about outages from its customers to one that often has the power back before they finish dialing. Seeing the grid in real time changed everything — we spend far less time hunting for faults and far more time preventing them."
      quoteAuthor="Vice President, Grid Operations"
      quoteRole="Regional electric utility"
      relatedStudies={[
        {
          title: "Sharper Generation Forecasts for a Renewables Developer",
          metric: "25%",
          label: "better forecast accuracy",
          link: "/cases/renewable-energy-forecasting",
          image: "/images/cases/renewable-energy-forecasting-hero.jpg"
        },
        {
          title: "Halving Unplanned Outages at a Power Generator",
          metric: "60%",
          label: "fewer unplanned outages",
          link: "/cases/power-generation-predictive-maintenance",
          image: "/images/industries/energy-powerplant.jpg"
        }
      ]}
      ctaTitle="Ready to see your grid clearly?"
      ctaDescription="Let's talk about what real-time visibility could be worth to your reliability."
    />
  );
}
