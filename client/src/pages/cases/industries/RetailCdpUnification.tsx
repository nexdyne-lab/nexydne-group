import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Target, DollarSign, BarChart3, Clock, TrendingUp, CheckCircle, Zap } from "lucide-react";

export default function RetailCdpUnification() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="CDP Unifies 14 Systems, Lifts Paid-Media Efficiency 28% | Retail Case Study"
      seoDescription="A multi-brand retailer ran four loyalty programs and seven ad destinations on disconnected identity. A customer data platform unified 14 sources and lifted paid-media efficiency 28% on flat budget."
      canonical="/cases/retail-cdp-unification"
      industry="Multi-Brand Retail"
      industryLink="/industries/retail"
      title="How a Multi-Brand Retailer Cut Wasted Ad Spend With a Unified Customer View"
      subtitle="Four loyalty programs, three commerce platforms, and seven ad destinations each held a different version of the customer. A customer data platform gave them one — and stopped the retailer paying to reach people it already had."
      heroImage="/images/industries/retail-shelves.jpg"
      metrics={[
        { value: "28%", label: "Better Paid-Media Efficiency" },
        { value: "14", label: "Source Systems Unified" },
        { value: "6", label: "Use-Cases Live in Q1" },
        { value: "Flat", label: "Media Budget" }
      ]}
      clientContextTitle="Fourteen Systems, Fourteen Versions of the Customer"
      clientContextIntro="A multi-brand retailer had grown through acquisition, and it showed in the data. Four separate loyalty programs, three e-commerce platforms, and seven ad-tech destinations each carried its own idea of who the customer was, with no shared identity connecting them."
      clientContextBody="The most expensive consequence was invisible: the retailer was paying to advertise to people it had already acquired. Because no destination could reliably recognize an existing customer, suppression never worked cleanly, and prospecting budgets bled into audiences that were already loyal. Marketing wanted personalization and smarter acquisition, but every initiative stalled on the same rock — there was no single, trustworthy customer record to build on. Analysts spent their time reconciling exports instead of activating audiences."
      clientProfile={{
        industry: "Multi-Brand Retailer",
        companySize: "~$720M Annual Revenue",
        projectDuration: "5 Months",
        additionalInfo: "4 Loyalty Programs",
        additionalLabel: "Legacy Estate"
      }}
      challengeTitle="Why Nothing Could Be Activated"
      challenges={[
        { icon: Target, title: "No Shared Identity", description: "Fourteen systems each held their own customer record, so no initiative could rely on a single trustworthy view." },
        { icon: DollarSign, title: "Paying to Reach Existing Customers", description: "Because suppression never worked cleanly across destinations, prospecting spend leaked into audiences the retailer had already acquired." },
        { icon: BarChart3, title: "Analysts Reconciling, Not Activating", description: "Teams spent their time stitching exports together by hand rather than putting audiences to work." },
        { icon: Clock, title: "Stalled Personalization", description: "Every personalization and acquisition initiative hit the same wall: no unified record to build on." }
      ]}
      approachTitle="One Identity, Six Use-Cases in a Quarter"
      approachIntro="We selected the customer data platform, designed an identity-resolution graph that combined deterministic and probabilistic matching, and shipped six activation use-cases in the first quarter rather than delivering a platform and leaving activation for later."
      steps={[
        { step: "01", title: "Selecting the Platform on Real Requirements", description: "We ran a focused selection against the retailer's actual activation needs and legacy estate, landing on Treasure Data as the platform that fit the destinations already in play." },
        { step: "02", title: "Designing the Resolution Graph", description: "We built a deterministic-plus-probabilistic identity graph that reconciled the fourteen sources into a single customer record trustworthy enough to spend against." },
        { step: "03", title: "Shipping Activation, Not Just a Platform", description: "We prioritized six high-value use-cases — starting with cross-destination suppression of existing customers — and put them live in the first quarter." },
        { step: "04", title: "Enforcing Clean Suppression Everywhere", description: "We wired the unified record into all seven ad destinations so existing-customer suppression finally held consistently, cutting the wasted prospecting spend at its source." }
      ]}
      resultsTitle="A Customer View That Pays for Itself"
      results={[
        { icon: TrendingUp, value: "28%", label: "Better paid-media efficiency", detail: "On flat budget, once suppression held" },
        { icon: CheckCircle, value: "14", label: "Source systems unified", detail: "Into one trustworthy customer record" },
        { icon: Zap, value: "6", label: "Use-cases live", detail: "Activated in the first quarter" },
        { icon: DollarSign, value: "Flat", label: "Media budget", detail: "Same spend, materially more reach" }
      ]}
      quote="We had spent years buying tools that each promised a single customer view and never delivered one. The difference this time was that we shipped real use-cases in the first quarter instead of another platform. The day suppression finally worked across every destination, we stopped paying to advertise to our own customers."
      quoteAuthor="Chief Marketing Officer"
      quoteRole="Multi-brand retailer"
      relatedStudies={[
        { title: "How a Subscription Operator Recovered a Fifth of Its Lost Customer Journeys", metric: "22%", label: "journeys recovered", link: "/cases/subscription-cdp-identity", image: "/images/capabilities/cap-iot-network.jpg" },
        { title: "How a Hotel Brand Recovered 18% of Its Abandoned Bookings", metric: "18%", label: "cart abandonment recovered", link: "/cases/hospitality-booking-journey-optimization", image: "/images/cases/hospitality-booking-journey-optimization-hero.jpg" }
      ]}
      ctaTitle="Are you paying to reach customers you already have?"
      ctaDescription="Let's talk about a CDP program that ships activation in a quarter, not a platform you activate later."
    />
  );
}
