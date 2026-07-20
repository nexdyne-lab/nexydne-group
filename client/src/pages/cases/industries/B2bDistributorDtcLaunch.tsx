import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { TrendingDown, Target, AlertTriangle, DollarSign, TrendingUp, CheckCircle } from "lucide-react";

export default function B2bDistributorDtcLaunch() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="B2B Distributor's First DTC Channel Grows 340% | Business Growth Case Study"
      seoDescription="A traditional B2B distributor launched its first direct-to-consumer channel, capturing share from digital-native competitors. A validated model and the right commerce stack grew the new channel 340% into a real revenue engine."
      canonical="/cases/b2b-distributor-dtc-launch"
      industry="Retail & Consumer"
      industryLink="/industries/retail"
      title="How a B2B Distributor Built a Direct-to-Consumer Engine From Scratch"
      subtitle="Digital-native competitors were reaching the distributor's end customers directly and taking share. Launching its own direct channel — done right — turned a defensive worry into a fast-growing revenue engine."
      heroImage="/images/capabilities/cap-warehouse-robot.jpg"
      metrics={[
        { value: "340%", label: "DTC Channel Growth" },
        { value: "New", label: "Revenue Engine" },
        { value: "Share", label: "Won From Digital Natives" },
        { value: "Validated", label: "Before Scaling" }
      ]}
      clientContextTitle="Watching Digital Natives Take the Customer"
      clientContextIntro="A traditional B2B distributor had built a solid business selling through intermediaries, but the ground was shifting. Digital-native competitors were going straight to the end customer — the very customer the distributor served at one remove — and steadily taking share with a faster, more direct experience."
      clientContextBody="The distributor had never sold direct and had no infrastructure, model, or muscle for it. Launching a direct-to-consumer channel carelessly risked wasting capital on an experience that could not compete with the digital natives, or straining the intermediary relationships that still carried the core business. But standing still meant ceding the customer relationship entirely. The distributor needed to launch its first direct channel deliberately — a validated commercial model, the right commerce technology, and a disciplined go-to-market — so the new channel could grow into a genuine revenue engine rather than an expensive experiment."
      clientProfile={{
        industry: "B2B Distributor",
        companySize: "15,000+ SKUs",
        projectDuration: "8 Months",
        additionalInfo: "First Direct Channel",
        additionalLabel: "Growth Bet"
      }}
      challengeTitle="Why Going Direct Was Hard"
      challenges={[
        { icon: TrendingDown, title: "Losing the End Customer", description: "Digital-native rivals were reaching customers directly and taking share the distributor could not defend." },
        { icon: Target, title: "No Direct-Selling Muscle", description: "The distributor had never sold direct and lacked the model, stack, or experience to do it." },
        { icon: AlertTriangle, title: "Risk to the Core Channel", description: "A careless direct launch could strain the intermediary relationships that still carried the business." },
        { icon: DollarSign, title: "Experiment vs. Engine", description: "Without discipline, the launch risked becoming expensive proof-of-concept rather than a real revenue stream." }
      ]}
      approachTitle="Launch Direct, Deliberately"
      approachIntro="We validated the commercial model before scaling, selected the commerce stack, and stood up a disciplined go-to-market — building a direct channel that grew 340 percent into a real revenue engine while protecting the core business."
      steps={[
        { step: "01", title: "Validating the Model First", description: "We tested the direct-to-consumer commercial model on a controlled basis before committing capital, so the channel scaled on evidence rather than hope." },
        { step: "02", title: "Selecting the Commerce Stack", description: "We chose the commerce technology that let the distributor deliver an experience able to compete with the digital natives." },
        { step: "03", title: "Standing Up Go-to-Market", description: "We built the go-to-market motion for a channel the distributor had never run, from demand generation to fulfillment." },
        { step: "04", title: "Scaling Into an Engine", description: "With the model proven, we scaled the channel to 340 percent growth, turning a defensive move into a genuine new revenue stream." }
      ]}
      resultsTitle="A New Channel That Compounds"
      results={[
        { icon: TrendingUp, value: "340%", label: "Channel growth", detail: "On the new direct-to-consumer channel" },
        { icon: Target, value: "Share", label: "Won back", detail: "From digital-native competitors" },
        { icon: CheckCircle, value: "Validated", label: "Then scaled", detail: "Evidence before capital" },
        { icon: DollarSign, value: "Engine", label: "Not experiment", detail: "A durable new revenue stream" }
      ]}
      quote="The digital-native players were going straight to our end customer and we had no way to answer. Launching our own direct channel felt risky because we had never done it — so we validated the model before we spent real money, then scaled it. It grew three hundred and forty percent and became a genuine revenue engine, not a science project."
      quoteAuthor="Chief Commercial Officer"
      quoteRole="B2B distributor"
      relatedStudies={[
        { title: "How a Professional-Services Firm Turned Its Methodology Into Recurring Revenue", metric: "35%", label: "revenue now recurring", link: "/cases/services-saas-productization", image: "/images/cases/services-saas-productization-hero.jpg" },
        { title: "How a Regional Manufacturer Cut Order Processing Time by 78%", metric: "78%", label: "faster order processing", link: "/cases/logistics-shipment-automation", image: "/images/capabilities/cap-robot-factory.jpg" }
      ]}
      ctaTitle="Are digital natives taking your end customer?"
      ctaDescription="Let's launch a validated direct channel that competes — and protects your core business."
    />
  );
}
