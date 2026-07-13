import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Target, BarChart3, Clock, CheckCircle, TrendingUp, Zap } from "lucide-react";

export default function SubscriptionCdpIdentity() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Identity Resolution Recovers 22% of Lost Customer Journeys | Subscription Case Study"
      seoDescription="A subscription operator's CDP stalled inside identity — the same customer resolved to three IDs. A deterministic-first identity rebuild recovered 22% of cross-channel journeys previously invisible to analytics."
      canonical="/cases/subscription-cdp-identity"
      industry="Subscription Services"
      industryLink="/industries/technology-media-telecom"
      title="How a Subscription Operator Recovered a Fifth of Its Lost Customer Journeys"
      subtitle="The same customer showed up as three different people across web, app, and support. Rebuilding identity from the ground up made those journeys visible again — and unblocked a stalled CDP program."
      heroImage="/images/capabilities/cap-iot-network.jpg"
      metrics={[
        { value: "22%", label: "Journeys Recovered" },
        { value: "3→1", label: "IDs per Customer" },
        { value: "200K", label: "Validation Cohort" },
        { value: "Unblocked", label: "Stalled CDP Program" }
      ]}
      clientContextTitle="One Customer, Three Identities"
      clientContextIntro="A subscription operator had invested in a customer data platform and then watched the whole program stall inside a single, unglamorous problem: identity. Anonymous web traffic, mobile app sessions, and customer-service interactions were each resolving to a separate ID for the very same person."
      clientContextBody="Because the same customer appeared three times, every downstream ambition — journey analytics, personalization, lifecycle marketing — was built on sand. A customer who researched on the web, subscribed in the app, and later called support looked like three unrelated people, so the analytics stack simply could not see the journey that actually happened. The CDP investment sat idle behind this wall. Leadership needed identity solved correctly and provably, not patched, before anything else could move."
      clientProfile={{
        industry: "Subscription Services Operator",
        companySize: "~$290M Annual Revenue",
        projectDuration: "4 Months",
        additionalInfo: "Web, App & Support Channels",
        additionalLabel: "Touchpoints"
      }}
      challengeTitle="Why the CDP Would Not Move"
      challenges={[
        { icon: Target, title: "Fragmented Identity", description: "Web, app, and support each generated their own customer ID, so one person resolved to three separate records." },
        { icon: BarChart3, title: "Invisible Journeys", description: "Cross-channel behavior could not be reconstructed, so the analytics stack missed the journeys customers actually took." },
        { icon: Clock, title: "A Stalled Investment", description: "The CDP program could not advance past identity, leaving personalization and lifecycle work blocked." },
        { icon: CheckCircle, title: "No Proof of Correctness", description: "Any identity fix had to be validated rigorously, not asserted, before the business would build on it." }
      ]}
      approachTitle="A Deterministic-First Identity Rebuild"
      approachIntro="We rebuilt the identity architecture on a deterministic-first model with probabilistic supplements, then validated it against a 200,000-customer cohort so the business could trust the resolved record before building anything on top of it."
      steps={[
        { step: "01", title: "Mapping Where Identity Broke", description: "We traced exactly how and where the same customer split into multiple IDs across web, app, and support, isolating the specific handoffs that lost the link." },
        { step: "02", title: "Leading With Deterministic Matching", description: "We rebuilt resolution on deterministic signals first — authenticated identifiers the business could trust — so the core of every record was certain, not inferred." },
        { step: "03", title: "Supplementing Probabilistically", description: "Where deterministic links were missing, we layered in carefully bounded probabilistic matching to recover journeys without introducing false merges." },
        { step: "04", title: "Validating Against 200K Customers", description: "We tested the rebuilt architecture against a 200,000-customer cohort with known ground truth, proving accuracy before the CDP program resumed on top of it." }
      ]}
      resultsTitle="Journeys Visible, Program Unblocked"
      results={[
        { icon: TrendingUp, value: "22%", label: "Journeys recovered", detail: "Cross-channel sessions previously invisible" },
        { icon: CheckCircle, value: "3→1", label: "IDs per customer", detail: "Collapsed to a single resolved record" },
        { icon: BarChart3, value: "200K", label: "Validation cohort", detail: "Proving accuracy before rollout" },
        { icon: Zap, value: "Unblocked", label: "CDP program", detail: "Resumed once identity was trusted" }
      ]}
      quote="Everyone wanted to talk about personalization, but we were quietly stuck on the fact that our best customer looked like three strangers. Solving identity properly — and proving it against real customers before we trusted it — was the unglamorous step that finally let the whole platform move."
      quoteAuthor="Head of Data Platform"
      quoteRole="Subscription services operator"
      relatedStudies={[
        { title: "How a Hotel Brand Recovered 18% of Its Abandoned Bookings", metric: "18%", label: "cart abandonment recovered", link: "/cases/hospitality-booking-journey-optimization", image: "/images/industries/travel-city-twilight.jpg" },
        { title: "How a Telecom Carrier Cut Repeat Activation Calls by 27%", metric: "27%", label: "fewer repeat calls", link: "/cases/telecom-activation-journey-redesign", image: "/images/industries/city-night.jpg" }
      ]}
      ctaTitle="Is your CDP stalled inside identity?"
      ctaDescription="Let's talk about a deterministic-first rebuild that you can prove before you build on it."
    />
  );
}
