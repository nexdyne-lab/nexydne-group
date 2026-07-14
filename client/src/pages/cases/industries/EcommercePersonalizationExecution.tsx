import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Target, BarChart3, Clock, AlertTriangle, TrendingUp, CheckCircle, Zap } from "lucide-react";

export default function EcommercePersonalizationExecution() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Email and On-Site Personalization Lifts Revenue per Customer 21% | Personalization Case Study"
      seoDescription="An e-commerce operator ran broadcast email and a static homepage to a base rich with signals. A twelve-use-case personalization program with a reusable variant library lifted revenue per active customer 21%."
      canonical="/cases/ecommerce-personalization-execution"
      industry="E-Commerce"
      industryLink="/industries/retail"
      title="How an E-Commerce Operator Lifted Revenue per Customer 21% With Real Personalization"
      subtitle="The operator had every signal needed to personalize and used none of it, blasting broadcast email to a static homepage. A structured program of twelve experiences changed that."
      heroImage="/images/capabilities/cap-retail-data.jpg"
      metrics={[
        { value: "21%", label: "More Revenue per Customer" },
        { value: "12", label: "Use-Cases Shipped" },
        { value: "Reusable", label: "Variant Library" },
        { value: "CDP+ESP+CMS", label: "Integrated" }
      ]}
      clientContextTitle="Every Signal, No Personalization"
      clientContextIntro="An e-commerce operator had a customer base rich with signals — browse history, purchase timing, category affinity, replenishment cycles — and was doing nothing with any of it. It ran broadcast email to everyone and a static homepage for all visitors, treating a highly knowable base as anonymous."
      clientContextBody="The gap was execution, not data or intent. The operator knew personalization mattered but had no use-case map to prioritize what to build, no reusable library to build variants efficiently, and no integration wiring the customer data platform to the email service and content system so experiences could actually be delivered. The most valuable moments — post-purchase and replenishment, where a well-timed message drives real revenue — were entirely unaddressed. The operator needed a structured personalization program: a prioritized use-case map, a reusable variant library, and the integration to execute across CDP, ESP, and CMS."
      clientProfile={{
        industry: "E-Commerce Operator",
        companySize: "~$310M Annual Revenue",
        projectDuration: "5 Months",
        additionalInfo: "Personalization Execution",
        additionalLabel: "Lifecycle Program"
      }}
      challengeTitle="Why the Signals Went Unused"
      challenges={[
        { icon: Target, title: "Broadcast to a Knowable Base", description: "The operator ran the same email and homepage to everyone despite rich per-customer signals." },
        { icon: BarChart3, title: "No Use-Case Map", description: "There was no prioritized plan for which personalization experiences to build." },
        { icon: Clock, title: "No Reusable Library", description: "Without reusable variants, building experiences was slow and one-off." },
        { icon: AlertTriangle, title: "Disconnected Systems", description: "The CDP, ESP, and CMS were not integrated to deliver personalized experiences." }
      ]}
      approachTitle="Map the Use-Cases, Build to Reuse, Integrate"
      approachIntro="We shipped a use-case map of twelve personalization experiences, built a reusable variant library, and wired the integration across the CDP, ESP, and CMS — lifting revenue per active customer 21 percent, driven mostly by post-purchase and replenishment."
      steps={[
        { step: "01", title: "Mapping Twelve Use-Cases", description: "We built a prioritized map of twelve personalization experiences, focusing on the moments with the most revenue at stake." },
        { step: "02", title: "Building a Reusable Variant Library", description: "We created a reusable library so experiences could be built and shipped efficiently rather than one at a time." },
        { step: "03", title: "Integrating CDP, ESP, and CMS", description: "We wired the customer data platform to the email service and content system so personalized experiences could actually be delivered." },
        { step: "04", title: "Activating Post-Purchase and Replenishment", description: "We ran the previously unaddressed post-purchase and replenishment use-cases, which drove most of the 21 percent revenue-per-customer lift." }
      ]}
      resultsTitle="Signals Turned Into Revenue"
      results={[
        { icon: TrendingUp, value: "21%", label: "More revenue", detail: "Per active customer, in two quarters" },
        { icon: CheckCircle, value: "12", label: "Use-cases", detail: "Shipped from the map" },
        { icon: Zap, value: "Reusable", label: "Variant library", detail: "Fast to build experiences" },
        { icon: Target, value: "Delivered", label: "Across CDP+ESP+CMS", detail: "Integrated to execute" }
      ]}
      quote="We had every signal you could want on our customers and we were emailing all of them the same thing over the same static homepage. A real program — a map of what to build, a library to build it fast, and the plumbing to actually deliver it — lifted revenue per customer twenty-one percent. Most of it came from post-purchase and replenishment moments we had simply never touched."
      quoteAuthor="VP of Growth"
      quoteRole="E-commerce operator"
      relatedStudies={[
        { title: "How a Hospitality Loyalty Program Raised Booking Conversion 14%", metric: "14%", label: "higher booking conversion", link: "/cases/hospitality-personalization-execution", image: "/images/industries/travel-city-twilight.jpg" },
        { title: "How a Specialty Retailer Lifted Lifecycle Revenue 38% in Two Quarters", metric: "38%", label: "higher lifecycle revenue", link: "/cases/retail-engagement", image: "/images/capabilities/cap-retail-apparel.jpg" }
      ]}
      ctaTitle="Do you have the signals but not the personalization?"
      ctaDescription="Let's map the use-cases, build a reusable library, and integrate to execute."
    />
  );
}
