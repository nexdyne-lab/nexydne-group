import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Target, Users, TrendingDown, BarChart3, TrendingUp, CheckCircle } from "lucide-react";

export default function HealthOnboardingJourneyMap() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Onboarding Journey Map Lifts First-90-Day Retention 19% | Customer Journey Case Study"
      seoDescription="A health-insurance carrier's onboarding NPS had fallen for four quarters. Journey mapping surfaced 11 broken handoffs invisible from inside any function; fixing the top three lifted first-90-day retention 19%."
      canonical="/cases/health-onboarding-journey-map"
      industry="Health Insurance"
      industryLink="/industries/healthcare"
      title="How a Health Insurer Found 11 Broken Handoffs and Lifted Early Retention 19%"
      subtitle="Onboarding satisfaction had slid for a year and no one could agree why. Reconstructing the new-member journey exposed eleven broken handoffs that no single team could see."
      heroImage="/images/cases/health-onboarding-journey-map-hero.jpg"
      metrics={[
        { value: "19%", label: "Higher 90-Day Retention" },
        { value: "11", label: "Broken Handoffs Found" },
        { value: "3", label: "Fixed First" },
        { value: "4 Qtrs", label: "Of Decline Reversed" }
      ]}
      clientContextTitle="Falling Satisfaction, No Agreement Why"
      clientContextIntro="A regional health-insurance carrier had watched its new-member onboarding NPS fall for four straight quarters, and the leadership team could not agree on the cause. Enrollment blamed ID-card fulfillment, fulfillment blamed the welcome-call team, and everyone had a theory but no evidence."
      clientContextBody="The disagreement was itself the clue: the problem lived in the gaps between functions, where no single team could see it. A new member's journey crossed enrollment, ID-card fulfillment, and the welcome call, and the failures were at the handoffs between them — invisible from inside any one function's view. Without a reconstruction of the actual end-to-end journey, the organization was arguing from partial pictures. The carrier needed both qualitative discovery with real new members and a quantitative reconstruction across the systems, to make the broken handoffs visible and fixable."
      clientProfile={{
        industry: "Regional Health-Insurance Carrier",
        companySize: "~500,000 Members",
        projectDuration: "4 Months",
        additionalInfo: "New-Member Onboarding",
        additionalLabel: "Journey Redesign"
      }}
      challengeTitle="Why No One Could See the Problem"
      challenges={[
        { icon: Target, title: "Failures Between Functions", description: "The problems lived in the handoffs between enrollment, fulfillment, and the welcome call — invisible from any single function." },
        { icon: Users, title: "Theories, No Evidence", description: "Every team had a theory for the falling NPS, but no reconstruction of the real journey." },
        { icon: TrendingDown, title: "Four Quarters of Decline", description: "Onboarding satisfaction had slid for a year with no clear cause." },
        { icon: BarChart3, title: "Only Partial Pictures", description: "Each function saw its own slice, so the organization argued from incomplete views." }
      ]}
      approachTitle="Reconstruct the Real Journey"
      approachIntro="We ran qualitative discovery with 28 new members and quantitative reconstruction across the enrollment, ID-card fulfillment, and welcome-call systems — surfacing 11 broken handoffs, and remediation on the top three lifted first-90-day retention 19 percent."
      steps={[
        { step: "01", title: "Talking to Real New Members", description: "We ran qualitative discovery with 28 new members to hear where onboarding actually broke down for them." },
        { step: "02", title: "Reconstructing the Journey From Systems", description: "We rebuilt the end-to-end journey quantitatively across the enrollment, fulfillment, and welcome-call systems." },
        { step: "03", title: "Surfacing the Broken Handoffs", description: "The synthesis exposed eleven broken handoffs between functions that no single team had been able to see." },
        { step: "04", title: "Fixing the Top Three", description: "We remediated the three highest-impact handoffs, lifting first-90-day retention 19 percent within two quarters." }
      ]}
      resultsTitle="The Gaps Made Visible and Fixed"
      results={[
        { icon: TrendingUp, value: "19%", label: "Higher retention", detail: "First-90-day, within two quarters" },
        { icon: Target, value: "11", label: "Broken handoffs", detail: "Surfaced across functions" },
        { icon: CheckCircle, value: "3", label: "Fixed first", detail: "The highest-impact gaps" },
        { icon: BarChart3, value: "Reversed", label: "NPS decline", detail: "Four quarters of slide" }
      ]}
      quote="Our onboarding scores had fallen for a year and every team blamed a different one — because the real problems were in the handoffs between them, where nobody could see. Reconstructing the whole new-member journey surfaced eleven broken handoffs. We fixed the worst three and early retention rose nineteen percent. You cannot fix what no single team can see."
      quoteAuthor="VP of Member Experience"
      quoteRole="Regional health-insurance carrier"
      relatedStudies={[
        { title: "How a B2B SaaS Company Aligned Three Teams Around Six Moments of Truth", metric: "1/3", label: "fewer renewal escalations", link: "/cases/saas-cross-functional-journey", image: "/images/capabilities/cap-conference-data.jpg" },
        { title: "How an E-Commerce Operator Lifted Revenue per Customer 21% With Real Personalization", metric: "21%", label: "more revenue per customer", link: "/cases/ecommerce-personalization-execution", image: "/images/capabilities/cap-retail-data.jpg" }
      ]}
      ctaTitle="Is a problem hiding in the gaps between your teams?"
      ctaDescription="Let's reconstruct the end-to-end journey and make the broken handoffs visible."
    />
  );
}
