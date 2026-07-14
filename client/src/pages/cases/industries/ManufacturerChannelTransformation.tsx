import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Target, AlertTriangle, TrendingDown, Users, TrendingUp, CheckCircle, Zap } from "lucide-react";

export default function ManufacturerChannelTransformation() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Manufacturer Modernizes Channel Sales, Lifts Partner Revenue 31% | Sales Transformation Case Study"
      seoDescription="An industrial manufacturer's partner program had stagnated. A new PRM, deal-registration discipline, and channel-marketing platform turned it into a growth engine, lifting partner revenue 31%."
      canonical="/cases/manufacturer-channel-transformation"
      industry="Industrial Manufacturing"
      industryLink="/industries/manufacturing"
      title="How a Manufacturer Turned a Stagnant Partner Program Into a Growth Engine"
      subtitle="The partner channel had drifted into neglect — no modern tools, no deal discipline, no marketing support. Rebuilding the channel infrastructure lifted partner revenue 31%."
      heroImage="/images/industries/mfg-robot-arm.jpg"
      metrics={[
        { value: "31%", label: "Higher Partner Revenue" },
        { value: "PRM", label: "Deployed" },
        { value: "Deal Reg", label: "Discipline" },
        { value: "Channel", label: "Marketing Platform" }
      ]}
      clientContextTitle="A Channel Left to Drift"
      clientContextIntro="An industrial manufacturer sold a meaningful share of its products through partners, but the partner program had been left to stagnate. There was no modern partner-relationship-management system, no deal-registration discipline to prevent conflict and reward partner effort, and no real marketing support to help partners sell."
      clientContextBody="Neglect had made the channel underperform and frustrated the partners. Without a PRM, partners had a poor experience working with the manufacturer; without deal registration, partners competed with each other and with the direct team, discouraging investment in deals; and without channel marketing, partners lacked the materials and demand generation to sell effectively. The channel that should have been a growth engine had become an afterthought. The manufacturer needed to modernize the channel end to end — a new PRM, deal-registration discipline, and a channel-marketing platform — to re-energize its partners and grow partner revenue."
      clientProfile={{
        industry: "Industrial Manufacturer",
        companySize: "~$540M Annual Revenue",
        projectDuration: "7 Months",
        additionalInfo: "Channel Modernization",
        additionalLabel: "Partner Program"
      }}
      challengeTitle="Why the Channel Stagnated"
      challenges={[
        { icon: Target, title: "No Modern PRM", description: "Partners had a poor experience with no partner-relationship-management system." },
        { icon: AlertTriangle, title: "No Deal Registration", description: "Without deal reg, partners competed with each other and the direct team, discouraging investment." },
        { icon: TrendingDown, title: "No Marketing Support", description: "Partners lacked the materials and demand generation to sell effectively." },
        { icon: Users, title: "A Channel as Afterthought", description: "The program that should have driven growth had been neglected." }
      ]}
      approachTitle="Modernize the Channel End to End"
      approachIntro="We deployed a new PRM, instilled deal-registration discipline, and stood up a channel-marketing platform — turning a stagnant partner program into a growth engine that lifted partner revenue 31 percent."
      steps={[
        { step: "01", title: "Deploying a Modern PRM", description: "We stood up a partner-relationship-management system that gave partners a far better experience working with the manufacturer." },
        { step: "02", title: "Instilling Deal-Registration Discipline", description: "We introduced deal registration to prevent conflict and reward partner effort, restoring partners' incentive to invest in deals." },
        { step: "03", title: "Building Channel Marketing", description: "We stood up a channel-marketing platform giving partners the materials and demand generation to sell effectively." },
        { step: "04", title: "Re-Energizing the Channel", description: "Together the changes turned the neglected program into a growth engine, lifting partner revenue 31 percent." }
      ]}
      resultsTitle="A Channel That Grows Again"
      results={[
        { icon: TrendingUp, value: "31%", label: "Higher partner revenue", detail: "From the modernized channel" },
        { icon: CheckCircle, value: "PRM", label: "Deployed", detail: "Better partner experience" },
        { icon: Target, value: "Deal Reg", label: "Discipline", detail: "Conflict prevented, effort rewarded" },
        { icon: Zap, value: "Marketing", label: "Platform", detail: "Partners equipped to sell" }
      ]}
      quote="Our partner channel had quietly become an afterthought — no real tools, no deal discipline, no marketing help — and our partners felt it. Modernizing all three, from a proper PRM to deal registration to channel marketing, turned a stagnant program into a growth engine and lifted partner revenue thirty-one percent. The partners were ready to sell; we just had to equip them."
      quoteAuthor="VP of Channel Sales"
      quoteRole="Industrial manufacturer"
      relatedStudies={[
        { title: "How a National Retailer Deflected 68% of Support Tickets With a Hybrid Bot", metric: "68%", label: "of tickets deflected", link: "/cases/retail-chatbot-deflection", image: "/images/capabilities/cap-retail-data.jpg" },
        { title: "How a Regional Bank Booked 4x More Demos With a Lead-Gen Chatbot", metric: "4x", label: "more qualified demos", link: "/cases/bank-chatbot-leadgen", image: "/images/industries/fin-monitors.jpg" }
      ]}
      ctaTitle="Has your partner channel been left to drift?"
      ctaDescription="Let's modernize the channel end to end and turn it back into a growth engine."
    />
  );
}
