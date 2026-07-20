import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { DollarSign, AlertTriangle, Target, Users, TrendingUp, CheckCircle } from "lucide-react";

export default function TelecomConversationalAi() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Telecom Hits 64% Containment on Tier-1 Support | Conversational AI Case Study"
      seoDescription="A telecom provider's contact center was overwhelmed. A retrieval-grounded conversational agent with strict handoff design absorbed the top contact reasons at 64% containment while protecting CSAT."
      canonical="/cases/telecom-conversational-ai"
      industry="Telecommunications"
      industryLink="/industries/technology-media-telecom"
      title="How a Telecom Provider Reached 64% Containment on Tier-1 Support"
      subtitle="The contact center was drowning in routine tier-1 calls, but past automation had hurt customer satisfaction. A retrieval-grounded agent absorbed the volume without letting CSAT slip."
      heroImage="/images/capabilities/cap-iot-network.jpg"
      metrics={[
        { value: "64%", label: "Tier-1 Containment" },
        { value: "Grounded", label: "In Real Answers" },
        { value: "Protected", label: "CSAT" },
        { value: "Strict", label: "Handoff Design" }
      ]}
      clientContextTitle="Automate Support Without Angering Customers"
      clientContextIntro="A telecom provider's contact center handled a flood of tier-1 support contacts — billing questions, plan changes, basic troubleshooting. The volume was expensive and repetitive, but the provider was wary of automation, having seen earlier bots frustrate customers and drag down satisfaction scores."
      clientContextBody="The tension was real. Automating tier-1 support could remove enormous cost, but a bot that hallucinated answers or trapped customers in loops would damage CSAT more than the savings were worth, and telecom customers are quick to churn. The provider needed an agent that was grounded in its actual knowledge base rather than making things up, and that handed off to a human cleanly the moment it was out of its depth — absorbing the routine volume while protecting the customer experience through every release."
      clientProfile={{
        industry: "Telecom Provider",
        companySize: "~2M Subscribers",
        projectDuration: "6 Months",
        additionalInfo: "Tier-1 Support Automation",
        additionalLabel: "Contact Center"
      }}
      challengeTitle="Why Automation Was Risky"
      challenges={[
        { icon: DollarSign, title: "Expensive Repetitive Volume", description: "Tier-1 contacts were high-volume, costly, and repetitive." },
        { icon: AlertTriangle, title: "Past Bots Hurt CSAT", description: "Earlier automation had frustrated customers and dragged down satisfaction." },
        { icon: Target, title: "Hallucination Risk", description: "A bot that invented answers would damage trust and drive churn." },
        { icon: Users, title: "Churn-Prone Customers", description: "Telecom customers are quick to leave over a bad service experience." }
      ]}
      approachTitle="Ground the Agent, Design the Handoff"
      approachIntro="We built a retrieval-grounded conversational agent that answered from the provider's real knowledge base and handed off strictly when out of scope — reaching 64 percent tier-1 containment while protecting CSAT through every release."
      steps={[
        { step: "01", title: "Grounding in the Knowledge Base", description: "We built the agent to answer from the provider's actual knowledge base via retrieval, not from unconstrained generation." },
        { step: "02", title: "Designing Strict Handoffs", description: "We designed firm boundaries so the agent handed off to a human the moment a contact fell outside its competence." },
        { step: "03", title: "Absorbing the Top Contact Reasons", description: "We targeted the highest-volume tier-1 reasons — billing, plan changes, basic troubleshooting — for containment." },
        { step: "04", title: "Protecting CSAT Through Releases", description: "We monitored satisfaction continuously and released carefully, so containment rose without CSAT slipping." }
      ]}
      resultsTitle="Containment Without the CSAT Hit"
      results={[
        { icon: TrendingUp, value: "64%", label: "Tier-1 containment", detail: "On the top contact reasons" },
        { icon: CheckCircle, value: "Grounded", label: "Answers", detail: "From the real knowledge base" },
        { icon: Users, value: "Protected", label: "CSAT", detail: "Through every release" },
        { icon: Target, value: "Clean", label: "Handoff", detail: "To a human when out of scope" }
      ]}
      quote="We badly needed to take cost out of tier-1 support, but we had been burned by bots that made customers angry, and in telecom an angry customer leaves. An agent grounded in our real answers, with strict rules about when to hand off to a person, got us to sixty-four percent containment and our satisfaction scores held. That balance was the whole point."
      quoteAuthor="VP of Customer Care"
      quoteRole="Telecom provider"
      relatedStudies={[
        { title: "How a Regional Bank Cut IT Helpdesk Volume by 53%", metric: "53%", label: "lower IT helpdesk volume", link: "/cases/bank-internal-agent", image: "/images/industries/fin-trader.jpg" },
        { title: "How a Regional Insurer Cut Inbound Calls 47% With a Self-Service Portal", metric: "47%", label: "lower inbound call volume", link: "/cases/insurance-portal", image: "/images/cases/insurance-portal-hero.jpg" }
      ]}
      ctaTitle="Want to automate support without hurting CSAT?"
      ctaDescription="Let's build a grounded agent with strict handoffs that contains volume and protects the experience."
    />
  );
}
