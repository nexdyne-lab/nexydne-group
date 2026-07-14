import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { AlertTriangle, Clock, TrendingDown, Target, TrendingUp, Zap, CheckCircle } from "lucide-react";

export default function HospitalityPersonalizationExecution() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="App and Email Personalization Raises Booking Conversion 14% | Personalization Case Study"
      seoDescription="A hospitality loyalty program had the data to personalize but no way to ship variants without an engineering ticket each. Rebuilding the variant pipeline lifted booking conversion 14% and took variant ship rate from one a quarter to nine."
      canonical="/cases/hospitality-personalization-execution"
      industry="Travel & Hospitality"
      industryLink="/industries/travel-hospitality"
      title="How a Hospitality Loyalty Program Raised Booking Conversion 14%"
      subtitle="The team had the data to personalize and no way to act on it — every variant needed an engineering ticket. Rebuilding the pipeline took them from one experiment a quarter to nine."
      heroImage="/images/industries/travel-city-twilight.jpg"
      metrics={[
        { value: "14%", label: "Higher Conversion" },
        { value: "1 → 9", label: "Variants / Quarter" },
        { value: "No Ticket", label: "Per Variant" },
        { value: "Returning", label: "Members" }
      ]}
      clientContextTitle="The Data to Personalize, No Way to Ship It"
      clientContextIntro="A hospitality loyalty program had rich data on its returning members and a clear appetite to personalize their app and email experiences. What it lacked was the ability to execute: every personalization variant required an engineering ticket, so shipping even a simple experiment took weeks and competed with the core roadmap."
      clientContextBody="The bottleneck was operational, not strategic. Because marketing could not ship a variant without engineering, the team managed roughly one experiment a quarter — far too slow to learn or capture value. Good ideas queued behind engineering priorities and mostly never shipped. Meanwhile returning members, the program's most valuable audience, saw generic experiences the team knew it could improve. The program needed a rebuilt variant pipeline — one that let marketing create and ship personalized experiences without an engineering ticket each — plus the integration and testing framework to do it safely and measure the result."
      clientProfile={{
        industry: "Hospitality Loyalty Program",
        companySize: "~$850M Annual Revenue",
        projectDuration: "5 Months",
        additionalInfo: "Personalization Execution",
        additionalLabel: "Loyalty Marketing"
      }}
      challengeTitle="Why Nothing Shipped"
      challenges={[
        { icon: AlertTriangle, title: "An Engineering Ticket per Variant", description: "Every personalization experience required engineering, so shipping took weeks." },
        { icon: Clock, title: "One Experiment a Quarter", description: "The bottleneck limited the team to roughly one variant per quarter." },
        { icon: TrendingDown, title: "Ideas Queuing, Not Shipping", description: "Good ideas waited behind the core roadmap and mostly never launched." },
        { icon: Target, title: "Best Members Seeing Generic", description: "Returning members, the most valuable audience, got experiences the team knew it could improve." }
      ]}
      approachTitle="Rebuild the Pipeline, Free the Team"
      approachIntro="We rebuilt the variant pipeline, integrated the personalization engine to the CDP and the app, and stood up an A/B framework — lifting booking conversion 14 percent on returning members and taking the team's ship rate from one variant a quarter to nine."
      steps={[
        { step: "01", title: "Rebuilding the Variant Pipeline", description: "We rebuilt the pipeline so marketing could create and ship personalized variants without an engineering ticket each time." },
        { step: "02", title: "Integrating Engine, CDP, and App", description: "We wired the personalization engine to the customer data platform and the app so experiences could be delivered directly." },
        { step: "03", title: "Standing Up an A/B Framework", description: "We built a testing framework so every variant could be shipped safely and its impact measured." },
        { step: "04", title: "Accelerating the Ship Rate", description: "We took the team from one experiment a quarter to nine, and booking conversion on returning members rose 14 percent." }
      ]}
      resultsTitle="From One Experiment to Nine"
      results={[
        { icon: TrendingUp, value: "14%", label: "Higher conversion", detail: "On returning members" },
        { icon: Zap, value: "1 → 9", label: "Variants / quarter", detail: "On flat headcount" },
        { icon: CheckCircle, value: "No Ticket", label: "Per variant", detail: "Marketing ships directly" },
        { icon: Target, value: "Tested", label: "Every variant", detail: "A/B framework in place" }
      ]}
      quote="We had all the member data we could want and could barely ship a single personalization test a quarter, because everything needed an engineering ticket. Rebuilding the pipeline so marketing could ship on its own took us to nine experiments a quarter and lifted booking conversion fourteen percent on our best members. The data was never the problem — execution was."
      quoteAuthor="VP of Loyalty Marketing"
      quoteRole="Hospitality loyalty program"
      relatedStudies={[
        { title: "How a Specialty Retailer Lifted Lifecycle Revenue 38% in Two Quarters", metric: "38%", label: "higher lifecycle revenue", link: "/cases/retail-engagement", image: "/images/capabilities/cap-retail-apparel.jpg" },
        { title: "How a B2B SaaS Company Cut Trial-to-Paid Lag by 44%", metric: "44%", label: "shorter trial-to-paid lag", link: "/cases/saas-onboarding", image: "/images/capabilities/cap-coder.jpg" }
      ]}
      ctaTitle="Can your team ship personalization without engineering?"
      ctaDescription="Let's rebuild the variant pipeline so marketing ships fast and safely."
    />
  );
}
