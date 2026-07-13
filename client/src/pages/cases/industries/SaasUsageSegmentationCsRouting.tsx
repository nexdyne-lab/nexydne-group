import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Target, TrendingDown, Users, BarChart3, TrendingUp, CheckCircle } from "lucide-react";

export default function SaasUsageSegmentationCsRouting() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Usage-Based Segments Lift Net Revenue Retention 6 Points | B2B SaaS Case Study"
      seoDescription="A SaaS provider sized customer success by revenue tier, not risk. Behavioral segments built on product-usage telemetry rerouted CS capacity and lifted net revenue retention six points with no added headcount."
      canonical="/cases/saas-usage-segmentation-cs-routing"
      industry="B2B Software"
      industryLink="/industries/technology-media-telecom"
      title="How a B2B Software Provider Lifted Net Revenue Retention by Six Points"
      subtitle="Customer success was staffed by how much a customer paid, not by whether they were at risk. Segmenting on product usage sent the team's attention where it actually changed the outcome."
      heroImage="/images/capabilities/cap-conference-data.jpg"
      metrics={[
        { value: "+6 pts", label: "Net Revenue Retention" },
        { value: "0", label: "Added Headcount" },
        { value: "3 Qtrs", label: "To the Lift" },
        { value: "3", label: "Usage Signals Modeled" }
      ]}
      clientContextTitle="Staffing Success by Revenue, Not by Risk"
      clientContextIntro="A B2B software provider had built its customer-success organization the way most do — by revenue tier. The biggest accounts got the most attention, and everyone else got a shared queue. The trouble was that revenue tier says almost nothing about which customers are about to churn or ready to expand."
      clientContextBody="The team was working hard against the wrong map. A large, healthy account with deep product adoption absorbed a dedicated success manager it did not need, while a mid-sized account quietly sliding toward cancellation — logins falling, integrations going dormant — sat unattended in the shared queue until the renewal was already lost. Leadership could see net revenue retention softening but had no systematic way to point their finite success capacity at the accounts where it would actually move the number."
      clientProfile={{
        industry: "B2B Software Provider",
        companySize: "~$220M ARR",
        projectDuration: "6 Months",
        additionalInfo: "Mid-Market & Enterprise Book",
        additionalLabel: "Customer Base"
      }}
      challengeTitle="Why Capacity Was Pointed at the Wrong Accounts"
      challenges={[
        { icon: Target, title: "Tier Is Not Risk", description: "Success capacity was allocated by revenue tier, which reveals nothing about whether an account is about to churn or ready to grow." },
        { icon: TrendingDown, title: "At-Risk Accounts Left Unattended", description: "Customers sliding toward cancellation sat in a shared queue while healthy large accounts absorbed dedicated coverage they did not need." },
        { icon: Users, title: "A Fixed Team, Misdirected", description: "The organization could not simply hire its way out; the capacity existed but was aimed at the wrong customers." },
        { icon: BarChart3, title: "No Early-Warning Signal", description: "There was no systematic read on adoption depth, integration footprint, or login cadence to flag risk before renewal." }
      ]}
      approachTitle="Segments Built on Product Telemetry"
      approachIntro="We built behavioral segments from product-usage telemetry — depth of feature adoption, integration footprint, and login cadence — and rerouted the existing customer-success capacity against risk and expansion potential rather than revenue tier."
      steps={[
        { step: "01", title: "Modeling Health From Usage", description: "We turned raw product telemetry into three legible signals — how deeply features were adopted, how embedded the integrations were, and how consistently users logged in — that together predicted risk and expansion." },
        { step: "02", title: "Defining Risk-and-Expansion Segments", description: "We grouped the book into behavioral segments that distinguished at-risk accounts, expansion-ready accounts, and stable ones, replacing the revenue-tier map." },
        { step: "03", title: "Rerouting the Same Capacity", description: "We reallocated existing success managers against the new segments so the at-risk expansion cohort finally received proactive attention, funded by pulling back from over-served healthy accounts." },
        { step: "04", title: "Closing the Loop on Outcomes", description: "We tracked retention and expansion by segment so the team could see which interventions worked and refine the routing each quarter." }
      ]}
      resultsTitle="The Same Team, Aimed Where It Counts"
      results={[
        { icon: TrendingUp, value: "+6 pts", label: "Net revenue retention", detail: "On the segmented book over three quarters" },
        { icon: CheckCircle, value: "0", label: "Added headcount", detail: "Funded entirely by reallocating capacity" },
        { icon: Target, value: "3", label: "Usage signals", detail: "Adoption depth, integrations, login cadence" },
        { icon: Users, value: "3 Qtrs", label: "To the lift", detail: "From reroute to measured gain" }
      ]}
      quote="We were spending our best people on accounts that were never going to leave, and finding out an at-risk customer was in trouble at the renewal call. Segmenting on how customers actually used the product let us put the same team where it mattered — and retention moved without a single new hire."
      quoteAuthor="VP of Customer Success"
      quoteRole="B2B software provider"
      relatedStudies={[
        { title: "How a Multi-Brand Retailer Cut Wasted Ad Spend With a Unified Customer View", metric: "28%", label: "better paid-media efficiency", link: "/cases/retail-cdp-unification", image: "/images/industries/retail-shelves.jpg" },
        { title: "How a Subscription Operator Recovered a Fifth of Its Lost Customer Journeys", metric: "22%", label: "journeys recovered", link: "/cases/subscription-cdp-identity", image: "/images/capabilities/cap-iot-network.jpg" }
      ]}
      ctaTitle="Is your success team staffed by revenue tier instead of risk?"
      ctaDescription="Let's talk about usage-based segments that point your existing capacity at the accounts that decide retention."
    />
  );
}
