import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Building2, DollarSign, Target, Zap, Leaf, Users } from "lucide-react";

export default function UrbanSmartBuildings() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Cutting Building Operating Costs with Connected Data | Urban Development Case Study"
      seoDescription="A property owner was running its buildings blind, reacting to complaints and breakdowns. Using the data its buildings already produced cut operating costs by 22% and lifted tenant satisfaction."
      canonical="/cases/urban-smart-buildings"
      industry="Urban Development"
      industryLink="/industries/urban-development"
      title="How a Property Owner Cut Building Operating Costs 22% and Won Back Tenants"
      subtitle="A property owner was running its portfolio on complaints and callouts, spending more than it needed to keep buildings comfortable. Putting the data its buildings already produced to work lowered costs and made tenants want to stay."
      heroImage="/images/industries/arch-glass-sphere.jpg"
      metrics={[
        { value: "22%", label: "Lower Operating Costs" },
        { value: "28%", label: "Less Energy Used" },
        { value: "$6M", label: "Saved Each Year" },
        { value: "12 pts", label: "Higher Tenant Satisfaction" }
      ]}
      clientContextTitle="Running Buildings Blind"
      clientContextIntro="A property owner and operator managed a portfolio of around 40 commercial and residential buildings across a single metropolitan region — roughly six million square feet of space that thousands of tenants relied on every day. Each building was full of equipment that produced a constant stream of information about how it was performing: heating and cooling, lighting, elevators, energy meters. Almost none of that information was being used. Buildings were run much as they had been for decades, on fixed schedules and on responding to whatever went wrong."
      clientContextBody="The result was a business that was always a step behind its own buildings. Heating and cooling ran on timers rather than on how spaces were actually being used, so energy was wasted on empty floors and comfort complaints were common on busy ones. Equipment was serviced on a calendar or after it failed, which meant paying for work that was not yet needed and, worse, absorbing the cost and disruption of breakdowns that better information could have caught early. Tenants noticed. In a market where they had choices, uneven comfort and slow responses were quietly costing the owner renewals — and every empty floor is expensive."
      clientProfile={{
        industry: "Property Owner and Operator",
        companySize: "~$180M Annual Rental Income",
        projectDuration: "15 Months",
        additionalInfo: "~40 Buildings / 6M Sq Ft",
        additionalLabel: "Portfolio Managed"
      }}
      challengeTitle="The Cost of Not Knowing"
      challenges={[
        {
          icon: Zap,
          title: "Energy Spent on Empty Space",
          description: "Heating, cooling and lighting ran on fixed schedules rather than real use, so buildings consumed energy where and when no one needed it."
        },
        {
          icon: Building2,
          title: "Fixing Things After They Broke",
          description: "Equipment was maintained by the calendar or after failure, driving both unnecessary service and costly, disruptive breakdowns."
        },
        {
          icon: Users,
          title: "Tenants Left Waiting",
          description: "Comfort complaints and slow responses eroded the tenant experience — and, in a competitive market, put renewals at risk."
        },
        {
          icon: Target,
          title: "Data Going to Waste",
          description: "Every building produced a wealth of operating data, but with no way to bring it together, none of it informed a single decision."
        }
      ]}
      approachTitle="Letting the Buildings Tell Us What They Need"
      approachIntro="Working with the owner's operations and property teams, we brought together the information the buildings were already generating and turned it into a clear, current picture of how each one was really performing — so the portfolio could be run on evidence rather than on schedules and complaints."
      steps={[
        {
          step: "01",
          title: "One View Across the Portfolio",
          description: "We connected the systems already inside each building — energy, heating and cooling, lighting, elevators — into a single dashboard, giving the operations team one live picture of how every building was performing side by side."
        },
        {
          step: "02",
          title: "Matching Comfort to Real Use",
          description: "We adjusted heating, cooling and lighting to follow how spaces were actually occupied through the day rather than a fixed timetable, so energy went where people were and comfort improved where it mattered."
        },
        {
          step: "03",
          title: "Catching Faults Before Tenants Do",
          description: "By watching each building's own readings for the early signs of trouble, the team could flag failing equipment weeks ahead and fix it on a planned visit — before it became a breakdown or a complaint."
        },
        {
          step: "04",
          title: "Giving Tenants a Direct Line",
          description: "We added a simple way for tenants to report issues and request changes, routed straight to the right team with a clear response time — turning a source of frustration into a sign the building was well run."
        }
      ]}
      resultsTitle="Buildings That Cost Less and Keep Tenants"
      results={[
        {
          icon: DollarSign,
          value: "22%",
          label: "Lower operating costs",
          detail: "Across energy and maintenance"
        },
        {
          icon: Leaf,
          value: "28%",
          label: "Less energy used",
          detail: "Comfort matched to real occupancy"
        },
        {
          icon: DollarSign,
          value: "$6M",
          label: "Saved each year",
          detail: "Across the 40-building portfolio"
        },
        {
          icon: Users,
          value: "12 pts",
          label: "Higher tenant satisfaction",
          detail: "Supporting stronger renewals"
        }
      ]}
      quote="Our buildings were telling us what they needed all along — we just weren't listening. Now we heat and cool space based on who's actually in it, and we fix problems before a tenant ever feels them. We're spending less to run the portfolio and, just as important, our tenants want to stay."
      quoteAuthor="Chief Operating Officer"
      quoteRole="Commercial property owner and operator"
      relatedStudies={[
        {
          title: "Phasing a Mixed-Use District for Stronger Returns",
          metric: "18%",
          label: "higher projected returns",
          link: "/cases/urban-master-planning",
          image: "/images/industries/skyscraper.jpg"
        },
        {
          title: "Delivering Capital Projects On Time and On Budget",
          metric: "95%",
          label: "on-time delivery",
          link: "/cases/urban-capital-projects",
          image: "/images/industries/city-digital.jpg"
        }
      ]}
      ctaTitle="Ready to run your buildings on evidence?"
      ctaDescription="Let's talk about turning the data your buildings already produce into lower costs and happier tenants."
    />
  );
}
