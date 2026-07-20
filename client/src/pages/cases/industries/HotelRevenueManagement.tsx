import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { DollarSign, TrendingUp, Target, BarChart3, Users, Clock } from "lucide-react";

export default function HotelRevenueManagement() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Lifting Hotel Revenue per Room by 18% | Travel & Hospitality Case Study"
      seoDescription="A regional hotel group was setting room rates by hand and leaving money on the table every night. Pricing that responds to real demand lifted revenue per available room by 18%."
      canonical="/cases/hotel-revenue-transformation"
      industry="Travel & Hospitality"
      industryLink="/industries/travel-hospitality"
      title="How a Regional Hotel Group Lifted Revenue per Room by 18%"
      subtitle="A hotel group was pricing its rooms by hand and leaving money on the table almost every night. Letting prices respond to real demand, property by property, changed the economics of the whole portfolio."
      heroImage="/images/cases/hotel-revenue-transformation-hero.jpg"
      metrics={[
        { value: "18%", label: "More Revenue per Room" },
        { value: "80%", label: "Less Manual Rate-Setting" },
        { value: "95%", label: "Demand Forecast Accuracy" },
        { value: "40", label: "Properties Optimized" }
      ]}
      clientContextTitle="When Rates Are Set by Hand, the Best Nights Are the Ones You Miss"
      clientContextIntro="A regional hotel group ran 40 properties across a handful of markets, and priced almost all of them the same way it always had. A small team of revenue managers set room rates by experience and a few standing rules, each of them juggling several hotels at once and making thousands of small pricing decisions a week. It was careful, capable work — but it could not keep pace with how quickly demand actually moved."
      clientContextBody="The cost showed up on the busiest and quietest nights alike. When a nearby event or a spell of good weather sent demand up, rates lagged behind and rooms sold too cheaply; when demand softened, prices held too high and rooms sat empty. Similar hotels in the same city often carried very different rates for no reason a guest would understand. Taken together, the group was leaving a meaningful share of its room revenue unclaimed — not for want of demand, but because no team working by hand could price 40 properties fast enough to catch it."
      clientProfile={{
        industry: "Hotel Group",
        companySize: "40-Property Group",
        projectDuration: "16 Months",
        additionalInfo: "40 Properties",
        additionalLabel: "Portfolio Size"
      }}
      challengeTitle="Why Revenue Was Slipping Away"
      challenges={[
        {
          icon: DollarSign,
          title: "Money Left on the Table",
          description: "Rates set by hand meant rooms often sold too cheap on strong nights and too dear on weak ones — revenue left unclaimed night after night."
        },
        {
          icon: Clock,
          title: "Always a Step Behind Demand",
          description: "Demand shifted faster than any team could reprice 40 properties, so the group was forever adjusting to conditions that had already changed."
        },
        {
          icon: Users,
          title: "Teams Stretched Thin",
          description: "A handful of revenue managers each covered several hotels, making thousands of rate decisions a week with little time to think about strategy."
        },
        {
          icon: BarChart3,
          title: "Inconsistent Pricing",
          description: "Comparable hotels in the same market were priced very differently, with no systematic way to decide what any room was really worth that night."
        }
      ]}
      approachTitle="Pricing That Keeps Up With Demand"
      approachIntro="Working alongside the group's revenue team, we set out to let prices move with real demand — automatically, property by property and night by night — so the team could spend its judgment on strategy and the exceptions rather than on routine rate-setting."
      steps={[
        {
          step: "01",
          title: "Seeing Demand Clearly, Hotel by Hotel",
          description: "We built models that forecast how many rooms each hotel would sell, and at what price, for every future night — drawing on past booking patterns, local events, competitor rates and the pace of bookings coming in. The forecasts proved right about 95% of the time."
        },
        {
          step: "02",
          title: "Prices That Adjust Themselves",
          description: "We turned those forecasts into rates that update on their own as conditions change, always within limits the group set. When demand climbs, prices rise to capture it; when it softens, they ease to fill rooms — without anyone editing a spreadsheet."
        },
        {
          step: "03",
          title: "Reading the Wider Market",
          description: "We fed in a live view of what comparable hotels nearby were charging, so each property could hold its ground against the competition instead of guessing where it stood."
        },
        {
          step: "04",
          title: "Keeping People in Charge",
          description: "We gave revenue managers a simple workbench to set the strategy, review the system's recommendations and step in whenever they judged it necessary — for a big group booking or a one-off event. The system handled the routine; the team handled the judgment."
        }
      ]}
      resultsTitle="The Payoff"
      results={[
        {
          icon: TrendingUp,
          value: "18%",
          label: "More revenue per available room",
          detail: "Across the full portfolio"
        },
        {
          icon: DollarSign,
          value: "Nightly",
          label: "Rates refreshed automatically",
          detail: "Pricing that keeps pace with demand"
        },
        {
          icon: Target,
          value: "95%",
          label: "Demand forecast accuracy",
          detail: "Enough to price with confidence"
        },
        {
          icon: Clock,
          value: "80%",
          label: "Less time on manual rate-setting",
          detail: "Freeing the team for strategy"
        }
      ]}
      quote="We were never short of demand — we were short of the time and the tools to price for it, hotel by hotel, every single night. Now the routine pricing takes care of itself, and my team spends its energy where judgment actually matters. The revenue was there all along; we just started catching it."
      quoteAuthor="Chief Revenue Officer"
      quoteRole="Regional hotel group"
      relatedStudies={[
        {
          title: "Reviving a Regional Airline's Loyalty Program",
          metric: "40%",
          label: "more active members",
          link: "/cases/airline-loyalty-redesign",
          image: "/images/cases/airline-loyalty-redesign-hero.jpg"
        },
        {
          title: "Restoring Personal Service Across a Hotel Group",
          metric: "+25pts",
          label: "guest recommendation score",
          link: "/cases/hotel-guest-experience",
          image: "/images/cases/hotel-guest-experience-hero.jpg"
        }
      ]}
      ctaTitle="Ready to price for the demand you already have?"
      ctaDescription="Let's talk about what pricing that keeps pace with demand could be worth across your properties."
    />
  );
}
