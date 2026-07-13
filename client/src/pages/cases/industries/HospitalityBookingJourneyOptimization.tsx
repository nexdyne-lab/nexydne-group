import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Target, DollarSign, TrendingDown, BarChart3, TrendingUp, CheckCircle, Zap } from "lucide-react";

export default function HospitalityBookingJourneyOptimization() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Booking-Journey Optimization Recovers 18% of Abandonment | Hospitality Case Study"
      seoDescription="A hotel brand's booking funnel leaked at three moments its journey deck never identified. Rebuilding the journey from event data and running a six-test program recovered 18% of cart abandonment on flat traffic."
      canonical="/cases/hospitality-booking-journey-optimization"
      industry="Travel and Hospitality"
      industryLink="/industries/travel-hospitality"
      title="How a Hotel Brand Recovered 18% of Its Abandoned Bookings"
      subtitle="The booking funnel was leaking at three specific moments, and the journey slide on the wall named none of them. Rebuilding the journey from real event data showed exactly where the revenue was going."
      heroImage="/images/industries/travel-city-twilight.jpg"
      metrics={[
        { value: "18%", label: "Abandonment Recovered" },
        { value: "3", label: "Friction Points Found" },
        { value: "6", label: "Tests Run" },
        { value: "Flat", label: "Traffic" }
      ]}
      clientContextTitle="A Journey Map That Named the Wrong Problems"
      clientContextIntro="A global hotel brand had a booking funnel that everyone agreed was leaking, and a beautifully produced customer-journey deck that confidently described why. The problem was that the deck had been built from workshops and assumptions, and the three moments where bookings actually collapsed were nowhere in it."
      clientContextBody="Traffic to the booking engine was healthy; conversion was not. Because the team's mental model of the journey came from a slide rather than from behavior, every fix they tried addressed a friction point that was not really costing them much, while the real leaks kept running. Revenue leadership was tired of debating opinions about the funnel and wanted the losses quantified in dollars, at each step, so the team could work the problems in the order that mattered."
      clientProfile={{
        industry: "Global Hotel Brand",
        companySize: "~$850M Annual Revenue",
        projectDuration: "5 Months",
        additionalInfo: "Direct Booking Engine",
        additionalLabel: "Primary Channel"
      }}
      challengeTitle="Why the Funnel Kept Leaking"
      challenges={[
        { icon: Target, title: "A Journey Built on Assumptions", description: "The existing journey map came from workshops, not data, and it missed the three moments where bookings actually failed." },
        { icon: DollarSign, title: "Unquantified Losses", description: "No one could say what each friction point cost, so fixes were prioritized by opinion rather than by dollars at risk." },
        { icon: TrendingDown, title: "Healthy Traffic, Weak Conversion", description: "Visitors reached the booking engine in good numbers but abandoned at specific, unaddressed steps." },
        { icon: BarChart3, title: "Effort Aimed at the Wrong Steps", description: "Because the map was wrong, improvement work kept polishing steps that were not costing the business much." }
      ]}
      approachTitle="Rebuild the Journey, Then Test It"
      approachIntro="We reconstructed the booking journey from event data, quantified each friction point in lost revenue, and ran a disciplined six-test program against the three that mattered most — leaving behind a framework that kept finding wins after we left."
      steps={[
        { step: "01", title: "Rebuilding the Journey From Events", description: "We reconstructed the actual booking journey from event data, replacing the workshop-built map with a behavioral one that showed where customers really dropped." },
        { step: "02", title: "Pricing Each Friction Point", description: "We quantified every leak in lost revenue so the team could rank the funnel by dollars at risk rather than by opinion." },
        { step: "03", title: "Running a Focused Six-Test Program", description: "We designed and ran six controlled experiments against the top three friction points, measuring genuine recovery rather than shipping untested fixes." },
        { step: "04", title: "Handing Over a Living Framework", description: "We left the team a test framework and the discipline to run it, so the funnel kept improving after the engagement ended." }
      ]}
      resultsTitle="Bookings Recovered, Momentum Retained"
      results={[
        { icon: TrendingUp, value: "18%", label: "Abandonment recovered", detail: "On flat traffic, across the funnel" },
        { icon: Target, value: "3", label: "Real friction points", detail: "Found in event data, not the old deck" },
        { icon: CheckCircle, value: "6", label: "Tests run", detail: "Against the highest-value leaks" },
        { icon: Zap, value: "2 / Qtr", label: "Wins after handover", detail: "The framework kept shipping improvements" }
      ]}
      quote="We had a gorgeous journey map on the wall that turned out to describe a funnel we did not actually have. Once we rebuilt it from what customers really did and put a dollar figure on each drop-off, the fixes almost prioritized themselves — and the team is still finding wins with the framework we were left."
      quoteAuthor="VP of Digital Revenue"
      quoteRole="Global hotel brand"
      relatedStudies={[
        { title: "How a Telecom Carrier Cut Repeat Activation Calls by 27%", metric: "27%", label: "fewer repeat calls", link: "/cases/telecom-activation-journey-redesign", image: "/images/industries/city-night.jpg" },
        { title: "How a Consumer-Finance App Lifted Product Attach 22% by Personalizing the Right Moments", metric: "22%", label: "higher product attach", link: "/cases/finance-personalization-strategy-reroute", image: "/images/industries/fin-monitors.jpg" }
      ]}
      ctaTitle="Is your journey map built on data or on assumptions?"
      ctaDescription="Let's rebuild your funnel from real behavior and quantify what each leak is costing you."
    />
  );
}
