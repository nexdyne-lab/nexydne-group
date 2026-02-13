import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Hotel, Heart, Star, Users, Smartphone, Target, DollarSign, Sparkles } from "lucide-react";

export default function HotelGuestExperience() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Guest Experience Transformation | Hospitality Case Study"
      seoDescription="How a luxury hotel brand improved NPS by 25 points through personalized guest experiences and digital service innovation."
      canonical="/cases/hotel-guest-experience"
      industry="Travel & Hospitality"
      industryLink="/industries/travel-hospitality"
      title="Luxury Hotel Brand Improves NPS 25 Points Through Personalization"
      subtitle="How AI-powered guest profiles and digital innovation created memorable, personalized experiences that drive loyalty and advocacy."
      heroImage="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1920&q=80"
      metrics={[
        { value: "+25pts", label: "NPS Improvement" },
        { value: "40%", label: "Higher Loyalty" },
        { value: "$85M", label: "Revenue Impact" },
        { value: "92%", label: "Guest Satisfaction" }
      ]}
      clientContextTitle="A Luxury Brand Losing Its Personal Touch"
      clientContextIntro="A prestigious luxury hotel brand with 75 properties prided itself on personalized service. But as the brand grew, the personal touch was fading. Guest preferences were trapped in individual property systems. Repeat guests had to re-explain their preferences at each visit. The brand's NPS had declined 15 points in five years."
      clientContextBody="Staff wanted to deliver personalized service but lacked the information. A guest's favorite wine at one property was unknown at another. Special occasions went unrecognized. The brand needed to know its guests as well as a boutique hotel—at global scale."
      clientProfile={{
        industry: "Luxury Hospitality",
        companySize: "75 Properties",
        projectDuration: "18 Months",
        additionalInfo: "2M Annual Guests",
        additionalLabel: "Guest Volume"
      }}
      challengeTitle="Personalization Lost at Scale"
      challenges={[
        {
          icon: Users,
          title: "Siloed Guest Data",
          description: "Guest preferences trapped in property systems—no unified view across the brand."
        },
        {
          icon: Heart,
          title: "Declining NPS",
          description: "15-point NPS decline over 5 years—losing the personal touch that defined the brand."
        },
        {
          icon: Target,
          title: "Missed Moments",
          description: "Special occasions unrecognized, preferences forgotten—generic service despite premium prices."
        },
        {
          icon: Star,
          title: "Loyalty Erosion",
          description: "Repeat guests not feeling recognized—defecting to competitors who remembered them."
        }
      ]}
      approachTitle="Personalization at Scale"
      approachIntro="NexDyne built a unified guest intelligence platform that created comprehensive guest profiles, predicted preferences, and enabled personalized service across every touchpoint."
      steps={[
        {
          step: "01",
          title: "Unified Guest Profile",
          description: "Built a single guest profile that unified data from all properties, channels, and interactions. Every preference, request, and feedback captured and accessible brand-wide. Guests recognized everywhere."
        },
        {
          step: "02",
          title: "Preference Prediction",
          description: "Developed ML models that predicted guest preferences based on past behavior and similar guests. Even first-time visitors received personalized recommendations based on their profile characteristics."
        },
        {
          step: "03",
          title: "Staff Enablement",
          description: "Created mobile tools that put guest intelligence in staff hands. Before any interaction, staff saw guest preferences, history, and opportunities to delight. Service became proactive, not reactive."
        },
        {
          step: "04",
          title: "Digital Experience",
          description: "Launched a personalized digital experience: mobile check-in, room customization, and in-stay requests. Guests controlled their experience while the brand learned their preferences."
        }
      ]}
      resultsTitle="Luxury Service Restored"
      results={[
        {
          icon: Star,
          value: "+25pts",
          label: "NPS improvement",
          detail: "Returned to brand's historic highs"
        },
        {
          icon: Heart,
          value: "40%",
          label: "Increase in loyalty program engagement",
          detail: "Guests feel recognized and valued"
        },
        {
          icon: DollarSign,
          value: "$85M",
          label: "Revenue impact",
          detail: "From increased loyalty and spend"
        },
        {
          icon: Sparkles,
          value: "92%",
          label: "Guest satisfaction",
          detail: "With personalized service"
        }
      ]}
      quote="We restored the personal touch that made our brand famous. Our staff now know guests before they arrive—their preferences, their history, what will make this stay special. Technology didn't replace human connection; it enabled it at scale."
      quoteAuthor="Isabella Martinez"
      quoteRole="Chief Experience Officer"
      relatedStudies={[
        {
          title: "AI Revenue Management for Hotels",
          metric: "18%",
          label: "RevPAR increase",
          link: "/cases/hotel-revenue-management",
          image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80"
        },
        {
          title: "Airline Loyalty Program Redesign",
          metric: "40%",
          label: "increase in engagement",
          link: "/cases/airline-loyalty-redesign",
          image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&q=80"
        }
      ]}
      ctaTitle="Ready to Personalize Guest Experience?"
      ctaDescription="Let's discuss how guest intelligence can transform your hospitality brand."
    />
  );
}
