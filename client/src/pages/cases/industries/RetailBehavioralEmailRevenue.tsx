import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Target, TrendingDown, Users, BarChart3, TrendingUp, CheckCircle } from "lucide-react";

export default function RetailBehavioralEmailRevenue() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Behavioral Segmentation Lifts Email Revenue per Send 42% | Retail Case Study"
      seoDescription="A specialty retailer was blasting the same campaigns to demographic personas with falling engagement. Seven behavioral segments lifted email revenue per send 42% and cut unsubscribes a third on the top segment."
      canonical="/cases/retail-behavioral-email-revenue"
      industry="Specialty Retail"
      industryLink="/industries/retail"
      title="How a Specialty Retailer Grew Email Revenue per Send by 42%"
      subtitle="Four demographic personas were receiving the same five campaigns, and engagement was sliding. Replacing personas with behavior-based segments changed what the email channel could earn from the same list."
      heroImage="/images/capabilities/cap-retail-data.jpg"
      metrics={[
        { value: "42%", label: "More Revenue per Send" },
        { value: "-33%", label: "Unsubscribes, Top Segment" },
        { value: "7", label: "Behavioral Segments" },
        { value: "2 Qtrs", label: "To Full Lift" }
      ]}
      clientContextTitle="The Same Five Campaigns to Everyone"
      clientContextIntro="A specialty retailer was running its email program off four demographic personas — age, gender, region — and sending the same five campaigns to all of them. Engagement had been drifting down for a year, and the standard response of sending more email was quietly making it worse."
      clientContextBody="The personas were built on who customers were, not on what they did. A shopper who browsed daily and a shopper who had not visited in six months could sit in the same persona and receive the same message. The marketing team knew the segments were stale, but rebuilding them meant untangling browse and purchase data that lived in systems that did not talk to each other. Meanwhile every extra send eroded list health, pushing the most valuable customers toward the unsubscribe button."
      clientProfile={{
        industry: "Specialty Retailer",
        companySize: "Mid-Market",
        projectDuration: "4 Months",
        additionalInfo: "Email as Top Channel",
        additionalLabel: "Owned Marketing"
      }}
      challengeTitle="Why the Persona Model Was Failing"
      challenges={[
        { icon: Target, title: "Segments Built on Identity, Not Behavior", description: "Demographic personas grouped customers by who they were, so a daily browser and a lapsed shopper received identical messages." },
        { icon: TrendingDown, title: "Declining Engagement", description: "Open and click rates had slid for a year, and the reflex of sending more email was accelerating the decline." },
        { icon: Users, title: "Eroding List Health", description: "Every additional undifferentiated send pushed the highest-value customers closer to unsubscribing." },
        { icon: BarChart3, title: "Data That Would Not Connect", description: "Browse intent, purchase recency, and category affinity lived in separate systems, making richer segmentation hard to operationalize." }
      ]}
      approachTitle="Seven Segments Built on What Customers Do"
      approachIntro="We replaced the four demographic personas with seven behavioral segments built on browse intent, purchase recency, and category affinity, then activated them directly through the retailer's marketing automation so the change showed up in real campaigns, not a slide."
      steps={[
        { step: "01", title: "Unifying the Behavioral Signals", description: "We connected browse, purchase, and engagement data into a single view so each customer could be placed by what they actually did across the site." },
        { step: "02", title: "Designing Seven Segments That Act", description: "We defined seven behavioral segments distinct enough to warrant genuinely different messaging — from high-intent recent browsers to lapsing loyalists — each with a clear treatment." },
        { step: "03", title: "Wiring Segments Into Automation", description: "We activated the segments inside the marketing automation platform so campaigns targeted behavior automatically, without the team hand-building lists each week." },
        { step: "04", title: "Protecting the Best Customers", description: "We tuned send frequency by segment, easing pressure on the highest-value cohort to reverse the unsubscribe trend rather than feed it." }
      ]}
      resultsTitle="More Revenue From a Healthier List"
      results={[
        { icon: TrendingUp, value: "42%", label: "More revenue per send", detail: "Over the two quarters after launch" },
        { icon: Users, value: "-33%", label: "Fewer unsubscribes", detail: "On the highest-value segment" },
        { icon: Target, value: "7", label: "Behavioral segments", detail: "Replacing four demographic personas" },
        { icon: CheckCircle, value: "2 Qtrs", label: "To full lift", detail: "From launch to sustained gain" }
      ]}
      quote="We had been treating a customer who shops every week the same as one who has not opened an email in months, just because they fit the same age bracket. The moment we started segmenting on behavior, the channel earned more and, for the first time in a year, our best customers stopped leaving."
      quoteAuthor="Director of CRM"
      quoteRole="Specialty retailer"
      relatedStudies={[
        { title: "How a B2B Software Provider Lifted Net Revenue Retention by Six Points", metric: "+6 pts", label: "net revenue retention", link: "/cases/saas-usage-segmentation-cs-routing", image: "/images/capabilities/cap-conference-data.jpg" },
        { title: "How a Multi-Brand Retailer Cut Wasted Ad Spend With a Unified Customer View", metric: "28%", label: "better paid-media efficiency", link: "/cases/retail-cdp-unification", image: "/images/industries/retail-shelves.jpg" }
      ]}
      ctaTitle="Are your segments built on who customers are or what they do?"
      ctaDescription="Let's talk about behavioral segments that lift revenue without burning down your list."
    />
  );
}
