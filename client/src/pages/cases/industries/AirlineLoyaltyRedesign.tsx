import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Star, Users, DollarSign, Heart, Target, TrendingUp, Gift } from "lucide-react";

export default function AirlineLoyaltyRedesign() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Reviving a Regional Airline's Loyalty Program | Travel & Hospitality Case Study"
      seoDescription="A regional airline's frequent-flyer program had millions of members but few who cared. Rewards that fit each traveler nearly doubled the share of active members and lifted spend."
      canonical="/cases/airline-loyalty-redesign"
      industry="Travel & Hospitality"
      industryLink="/industries/travel-hospitality"
      title="Reviving a Regional Airline's Loyalty Program: 40% More Active Members"
      subtitle="A regional airline had millions of loyalty members but only a fraction who still cared. Making the rewards fit the traveler — not the other way round — turned a dormant program into a reason to keep flying."
      heroImage="/images/cases/airline-loyalty-redesign-hero.jpg"
      metrics={[
        { value: "40%", label: "More Active Members" },
        { value: "25%", label: "More Rewards Redeemed" },
        { value: "12%", label: "More Member Revenue" },
        { value: "3.5x", label: "Spend vs. Non-Members" }
      ]}
      clientContextTitle="Millions of Members, Few Who Still Cared"
      clientContextIntro="A regional airline had built a frequent-flyer program with around 4 million members over the years. On paper it looked healthy; in practice it was fading. Only about one member in five was still active, and the miles people had earned mostly sat untouched — years of unredeemed rewards accumulating on the books — because members no longer saw what they were worth. Newer competitors were launching programs that felt fresh, while this one felt frozen in an earlier decade."
      clientContextBody="At heart the program did only one thing: you flew, you earned miles, you redeemed them for another flight. There was no sense that the airline knew who you were. A member who flew every week for work received the same generic emails as someone who took one holiday a year, and neither was offered anything that felt made for them. The program had become a line of cost rather than a reason to choose the airline — and leadership wanted it to earn its keep."
      clientProfile={{
        industry: "Regional Airline",
        companySize: "~4M Loyalty Members",
        projectDuration: "14 Months",
        additionalInfo: "20% Active at Start",
        additionalLabel: "Starting Engagement"
      }}
      challengeTitle="Miles Without Meaning"
      challenges={[
        {
          icon: Users,
          title: "Members Who Had Tuned Out",
          description: "Only about 20% of 4 million members were still active — the other four in five had enrolled and then quietly stopped engaging."
        },
        {
          icon: Gift,
          title: "Rewards Left Unclaimed",
          description: "Years of earned miles sat unredeemed, because members no longer saw enough value in earning or spending them."
        },
        {
          icon: Target,
          title: "One Message for Everyone",
          description: "Every member got the same offers regardless of how, or how often, they travelled — so almost nothing felt relevant."
        },
        {
          icon: Heart,
          title: "No Reason to Feel Loyal",
          description: "The program was purely transactional, with nothing to set it apart from the newer offerings members were being courted by."
        }
      ]}
      approachTitle="Making the Program Fit the Traveler"
      approachIntro="Working with the airline's loyalty team, we rebuilt the program around the member rather than the mile — so that what each person was offered, and how they earned it, actually reflected who they were and how they liked to travel."
      steps={[
        {
          step: "01",
          title: "Understanding Who the Members Really Are",
          description: "We grouped members by how they actually travelled and what seemed to motivate them — the frequent business flyer, the once-a-year holidaymaker, the aspiring regular — so the airline could speak to each in a way that fit rather than treating everyone the same."
        },
        {
          step: "02",
          title: "Rewards Worth Wanting",
          description: "We replaced the one-size catalogue with rewards chosen for each member from their travel and redemption history, so the options in front of someone were ones they were genuinely likely to want — and to use."
        },
        {
          step: "03",
          title: "Earning That's Worth the Effort",
          description: "We added simple, well-timed ways to earn beyond flying — occasional challenges, bonuses and small surprises — that gave members a reason to check in and stay engaged between trips."
        },
        {
          step: "04",
          title: "Moments Beyond the Flight",
          description: "We broadened rewards past seats to experiences members remembered: partner offers, the occasional unexpected upgrade, the option to give miles to a cause. Small gestures that made membership feel like a relationship, not a ledger."
        }
      ]}
      resultsTitle="A Program Members Came Back To"
      results={[
        {
          icon: TrendingUp,
          value: "40%",
          label: "More active members",
          detail: "Active share rose from about 20% to 28%"
        },
        {
          icon: Gift,
          value: "25%",
          label: "More rewards redeemed",
          detail: "Members using their miles and seeing the value"
        },
        {
          icon: DollarSign,
          value: "12%",
          label: "More member revenue",
          detail: "From higher member spend and retention"
        },
        {
          icon: Star,
          value: "3.5x",
          label: "Spend vs. non-members",
          detail: "Engaged members are worth far more"
        }
      ]}
      quote="We turned a points scheme back into a relationship. Our members no longer just earn miles they forget about — they're offered things that actually suit them, and they come back to use them. The change was not spending more on rewards; it was spending on the right ones for each person."
      quoteAuthor="Vice President, Loyalty and Partnerships"
      quoteRole="Regional airline"
      relatedStudies={[
        {
          title: "Lifting Hotel Revenue per Room by 18%",
          metric: "18%",
          label: "more revenue per room",
          link: "/cases/hotel-revenue-transformation",
          image: "/images/cases/hotel-revenue-transformation-hero.jpg"
        },
        {
          title: "Restoring Personal Service Across a Hotel Group",
          metric: "+25pts",
          label: "guest recommendation score",
          link: "/cases/hotel-guest-experience",
          image: "/images/cases/hotel-guest-experience-hero.jpg"
        }
      ]}
      ctaTitle="Ready to make your loyalty program worth caring about?"
      ctaDescription="Let's talk about building rewards that fit your travelers instead of the other way round."
    />
  );
}
