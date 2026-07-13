import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Target, Clock, TrendingDown, DollarSign, TrendingUp, CheckCircle, Zap, Users } from "lucide-react";

export default function DtcPersonalizationStackRedesign() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Stack Redesign Lifts Personalization Throughput to 9 Releases a Month | DTC Case Study"
      seoDescription="A DTC retailer's personalization program was bottlenecked on four overlapping tools with no decisioning layer. Retiring three tools and adding governance lifted throughput from one release a month to nine."
      canonical="/cases/dtc-personalization-stack-redesign"
      industry="Direct-to-Consumer Retail"
      industryLink="/industries/retail"
      title="How a DTC Retailer Went From One Personalization Release a Month to Nine"
      subtitle="The program was not short on ideas — it was jammed by four overlapping tools and no clear place where decisions were made. Simplifying the stack, not enlarging it, unblocked the throughput."
      heroImage="/images/capabilities/cap-retail-apparel.jpg"
      metrics={[
        { value: "1→9", label: "Releases per Month" },
        { value: "3", label: "Tools Retired" },
        { value: "0", label: "Added Headcount" },
        { value: "1", label: "Decisioning Layer" }
      ]}
      clientContextTitle="Four Tools, No Decisions"
      clientContextIntro="A direct-to-consumer retailer had assembled a personalization stack the way many teams do — one tool at a time, each bought to solve the last one's gap. It ended up with four overlapping tools and, crucially, no single layer where decisioning actually happened."
      clientContextBody="The team was capable and the ideas were plentiful, but shipping a single personalization change meant negotiating four systems with unclear ownership, no shared content model, and no governance for who decided what. Throughput had fallen to roughly one release a month, and the instinctive fix — buy a fifth tool to tie the others together — would only have deepened the problem. What the program needed was less: a clear decisioning layer, modular content, and a cadence that let the team ship."
      clientProfile={{
        industry: "Direct-to-Consumer Retailer",
        companySize: "~$310M Annual Revenue",
        projectDuration: "5 Months",
        additionalInfo: "In-House Growth Team",
        additionalLabel: "Delivery Model"
      }}
      challengeTitle="Why the Program Could Barely Ship"
      challenges={[
        { icon: Target, title: "Overlapping Tools", description: "Four personalization tools did similar things with unclear boundaries, so every change meant negotiating all of them." },
        { icon: Clock, title: "No Decisioning Layer", description: "There was no single place where personalization decisions were made, leaving ownership and logic scattered." },
        { icon: TrendingDown, title: "One Release a Month", description: "Throughput had collapsed to a trickle despite a capable team and a full backlog of ideas." },
        { icon: DollarSign, title: "The Wrong Instinct", description: "The reflex to buy a fifth tool to unify the other four would have added cost and complexity, not throughput." }
      ]}
      approachTitle="Simplify the Stack, Add a Decisioning Layer"
      approachIntro="We designed the target stack, retired three of the four tools, and stood up the content modularization and governance cadence the program actually needed — lifting throughput without adding a single person."
      steps={[
        { step: "01", title: "Designing the Target Stack", description: "We mapped what each tool genuinely contributed and designed a leaner target architecture organized around a single decisioning layer." },
        { step: "02", title: "Retiring Three of Four Tools", description: "We removed the three overlapping tools that added complexity without unique value, consolidating onto the stack the program actually needed." },
        { step: "03", title: "Modularizing the Content", description: "We restructured content into reusable modules so personalization changes could be assembled and shipped quickly instead of rebuilt each time." },
        { step: "04", title: "Installing a Governance Cadence", description: "We put in place a clear cadence and ownership model for what shipped and who decided, turning a stalled backlog into a steady release rhythm." }
      ]}
      resultsTitle="Less Stack, More Shipping"
      results={[
        { icon: TrendingUp, value: "1→9", label: "Releases per month", detail: "After the stack and cadence were fixed" },
        { icon: CheckCircle, value: "3", label: "Tools retired", detail: "Complexity removed, not added" },
        { icon: Zap, value: "1", label: "Decisioning layer", detail: "One place where decisions are made" },
        { icon: Users, value: "0", label: "Added headcount", detail: "Same team, far higher throughput" }
      ]}
      quote="Our instinct was to buy something to glue our four tools together. The opposite turned out to be right. We took three tools out, gave the team one place to make decisions and a proper content model, and went from shipping once a month to nine times — with the exact same people."
      quoteAuthor="Director of Digital Experience"
      quoteRole="DTC retailer"
      relatedStudies={[
        { title: "How a Streaming Operator Raised Its Retention Save-Rate by 31%", metric: "31%", label: "higher save-rate", link: "/cases/media-churn-uplift-model", image: "/images/industries/tech-datacenter.jpg" },
        { title: "How a Regional Bank Sent Its Acquisition Budget to the Customers Worth Having", metric: "71%", label: "spend to top value deciles", link: "/cases/banking-clv-acquisition-routing", image: "/images/industries/fin-trader.jpg" }
      ]}
      ctaTitle="Is your personalization stalled by too much stack?"
      ctaDescription="Let's design the leaner architecture and cadence that let your team actually ship."
    />
  );
}
