import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Heart, Star, Users, Target, DollarSign, Sparkles } from "lucide-react";

export default function HotelGuestExperience() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Restoring Personal Service Across a Hotel Group | Travel & Hospitality Case Study"
      seoDescription="As it grew, an upscale hotel group lost the personal touch that made its name. Giving every property one clear view of each guest lifted its recommendation score by 25 points."
      canonical="/cases/hotel-guest-experience"
      industry="Travel & Hospitality"
      industryLink="/industries/travel-hospitality"
      title="Restoring Personal Service Across a Growing Hotel Group"
      subtitle="An upscale hotel group had built its name on knowing its guests — and was quietly losing that as it grew. Giving every property one clear view of each guest brought the personal touch back at scale."
      heroImage="/images/cases/hotel-guest-experience-hero.jpg"
      metrics={[
        { value: "+25pts", label: "Guest Recommendation Score" },
        { value: "40%", label: "More Loyalty Sign-Ups" },
        { value: "$11M", label: "Revenue Impact" },
        { value: "92%", label: "Guest Satisfaction" }
      ]}
      clientContextTitle="A Brand Built on the Personal Touch — and Quietly Losing It"
      clientContextIntro="An upscale hotel group had grown to around 30 properties, and its reputation rested on service that felt personal — the sense that the staff remembered you. But the thing that made the brand had not kept up with its size. What a hotel knew about a guest stayed inside that hotel's own systems, so a regular at one property arrived at another a complete stranger, asked once again to explain the preferences they had shared many times before."
      clientContextBody="The staff genuinely wanted to deliver on the brand's promise, but they were working blind. A guest's usual room, their favorite table, the anniversary they had celebrated last year — none of it followed them from one property to the next. Special occasions passed unnoticed and small preferences were forgotten, even as guests paid premium rates for exactly the recognition they were not getting. Over five years the group's guest recommendation score had slipped by 15 points, and management could feel loyal guests drifting to rivals who simply remembered them better."
      clientProfile={{
        industry: "Upscale Hotel Group",
        companySize: "~30 Properties",
        projectDuration: "16 Months",
        additionalInfo: "~1.2M Annual Guests",
        additionalLabel: "Guest Volume"
      }}
      challengeTitle="Personal Service Lost as the Group Grew"
      challenges={[
        {
          icon: Users,
          title: "What One Hotel Knew, the Others Didn't",
          description: "Each property kept its own guest records, so nothing a guest shared at one hotel was known at the next — every arrival started from scratch."
        },
        {
          icon: Heart,
          title: "A Slipping Reputation",
          description: "The group's guest recommendation score had fallen 15 points in five years as the personal touch that defined the brand faded."
        },
        {
          icon: Target,
          title: "Missed Moments",
          description: "Anniversaries went unmarked and familiar preferences were forgotten — generic service in spite of premium prices."
        },
        {
          icon: Star,
          title: "Loyal Guests Drifting Away",
          description: "Repeat guests who no longer felt recognized were quietly moving to competitors who remembered them."
        }
      ]}
      approachTitle="One Clear View of Every Guest"
      approachIntro="Working with the group's operations and service leaders, we set out to give every property the same clear picture of each guest — and to put that knowledge in the hands of the staff at the moment it mattered, so the brand could feel personal again at any size."
      steps={[
        {
          step: "01",
          title: "One Guest Record, Shared Across Every Property",
          description: "We brought each guest's history, preferences and past requests together into a single record that every hotel in the group could see — so a guest recognized at one property was recognized at all of them, without ever having to repeat themselves."
        },
        {
          step: "02",
          title: "Anticipating What a Guest Will Want",
          description: "We used each guest's own history, and the patterns of guests like them, to suggest what they were likely to appreciate — so even a first-time visitor could be met with thoughtful, relevant touches rather than a blank slate."
        },
        {
          step: "03",
          title: "Putting the Knowledge in Staff Hands",
          description: "We gave front-line staff a simple tool showing, before each interaction, who the guest was, what they preferred and how to make the stay special — turning service from reactive to genuinely anticipatory."
        },
        {
          step: "04",
          title: "Letting Guests Shape Their Own Stay",
          description: "We added an easy digital experience — check in from a phone, set room preferences, make requests during the stay — so guests could tailor things themselves while the group quietly learned what they liked for next time."
        }
      ]}
      resultsTitle="The Personal Touch, Restored at Scale"
      results={[
        {
          icon: Star,
          value: "+25pts",
          label: "Guest recommendation score",
          detail: "Back above the brand's historic best"
        },
        {
          icon: Heart,
          value: "40%",
          label: "More loyalty sign-ups",
          detail: "Guests who feel recognized choose to belong"
        },
        {
          icon: DollarSign,
          value: "$11M",
          label: "Revenue impact",
          detail: "From stronger loyalty and higher spend"
        },
        {
          icon: Sparkles,
          value: "92%",
          label: "Guest satisfaction",
          detail: "With service that finally felt personal again"
        }
      ]}
      quote="We built our name on knowing our guests, and as we grew we were quietly losing that. Now our people know a guest before they walk in — what they like, what to remember, what will make the stay special. The technology did not replace the human warmth; it gave our staff what they needed to show it, in every hotel we run."
      quoteAuthor="Chief Experience Officer"
      quoteRole="Upscale hotel group"
      relatedStudies={[
        {
          title: "Lifting Hotel Revenue per Room by 18%",
          metric: "18%",
          label: "more revenue per room",
          link: "/cases/hotel-revenue-transformation",
          image: "/images/cases/hotel-revenue-transformation-hero.jpg"
        },
        {
          title: "Reviving a Regional Airline's Loyalty Program",
          metric: "40%",
          label: "more active members",
          link: "/cases/airline-loyalty-redesign",
          image: "/images/cases/airline-loyalty-redesign-hero.jpg"
        }
      ]}
      ctaTitle="Ready to make every guest feel remembered?"
      ctaDescription="Let's talk about giving every property one clear view of the guests you already have."
    />
  );
}
