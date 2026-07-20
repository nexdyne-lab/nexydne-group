import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { TrendingDown, Clock, Target, DollarSign, TrendingUp, Zap, CheckCircle } from "lucide-react";

export default function BankChatbotLeadgen() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Regional Bank Books 4x More Demos With Lead-Gen Chatbot | Chatbots Case Study"
      seoDescription="A regional bank was letting anonymous website traffic slip away. An on-site qualification chatbot turned visitors into qualified pipeline by routing intent in under 30 seconds, booking 4x more demos."
      canonical="/cases/bank-chatbot-leadgen"
      industry="Financial Services"
      industryLink="/industries/financial-services"
      title="How a Regional Bank Booked 4x More Demos With a Lead-Gen Chatbot"
      subtitle="Anonymous visitors came to the site, found no fast path to talk to someone, and left. A qualification bot engaged them in seconds and turned traffic into booked meetings."
      heroImage="/images/cases/bank-chatbot-leadgen-hero.jpg"
      metrics={[
        { value: "4x", label: "More Demos Booked" },
        { value: "<30s", label: "To Qualify" },
        { value: "Anonymous", label: "Traffic Converted" },
        { value: "Routed", label: "By Intent" }
      ]}
      clientContextTitle="Traffic That Left Without a Trace"
      clientContextIntro="A regional bank's commercial website drew steady traffic from prospects researching its business products, but almost none of it converted. Visitors browsed, found no fast way to talk to the right person, and left anonymously — pipeline walking out the door unrecorded."
      clientContextBody="The gap was speed and routing. A prospect ready to talk had to fill out a form and wait for a callback, by which point the moment of intent had passed. And even when someone did reach out, they were not always routed to the right specialist quickly. The bank was paying to attract this traffic and capturing almost none of its value. It needed an on-site qualification chatbot that engaged visitors the instant they showed intent, qualified them in seconds, and routed them to the right person — turning anonymous traffic into booked demos."
      clientProfile={{
        industry: "Regional Bank",
        companySize: "~$430M Annual Revenue",
        projectDuration: "4 Months",
        additionalInfo: "Lead-Gen Chatbot",
        additionalLabel: "Commercial Growth"
      }}
      challengeTitle="Why Traffic Wasn't Converting"
      challenges={[
        { icon: TrendingDown, title: "Anonymous Visitors Leaving", description: "Prospects browsed and left with no record and no conversation." },
        { icon: Clock, title: "Slow Path to Talk", description: "Form-and-callback meant the moment of intent passed before anyone responded." },
        { icon: Target, title: "Poor Routing", description: "Even engaged prospects weren't reliably routed to the right specialist." },
        { icon: DollarSign, title: "Paid Traffic Wasted", description: "The bank attracted the traffic and captured almost none of its value." }
      ]}
      approachTitle="Engage and Qualify in Seconds"
      approachIntro="We built an on-site qualification chatbot that engaged visitors at the moment of intent, qualified them in under thirty seconds, and routed them to the right person — booking 4x more demos from the same traffic."
      steps={[
        { step: "01", title: "Engaging at the Moment of Intent", description: "We built the bot to engage visitors the instant they showed buying signals, before the moment passed." },
        { step: "02", title: "Qualifying in Under 30 Seconds", description: "We designed a fast qualification flow that captured intent and fit without a lengthy form." },
        { step: "03", title: "Routing to the Right Specialist", description: "We routed qualified prospects straight to the right person, so conversations happened while interest was hot." },
        { step: "04", title: "Converting Traffic to Demos", description: "We turned anonymous traffic into booked demos, quadrupling the demo rate on the same visitor volume." }
      ]}
      resultsTitle="Traffic Turned Into Pipeline"
      results={[
        { icon: TrendingUp, value: "4x", label: "More demos", detail: "Booked from the same traffic" },
        { icon: Zap, value: "<30s", label: "To qualify", detail: "Before intent cooled" },
        { icon: CheckCircle, value: "Routed", label: "By intent", detail: "To the right specialist" },
        { icon: DollarSign, value: "Captured", label: "Anonymous traffic", detail: "Pipeline no longer walking away" }
      ]}
      quote="We were paying to bring prospects to our site and then watching them leave anonymously because the only option was a form and a callback. A bot that engaged them in the moment, qualified them in under thirty seconds, and got them to the right banker quadrupled our booked demos. Same traffic — we just stopped letting it walk away."
      quoteAuthor="Head of Commercial Marketing"
      quoteRole="Regional bank"
      relatedStudies={[
        { title: "How a Telecom Provider Reached 64% Containment on Tier-1 Support", metric: "64%", label: "containment on tier-1 support", link: "/cases/telecom-conversational-ai", image: "/images/capabilities/cap-iot-network.jpg" },
        { title: "How a Regional Bank Cut IT Helpdesk Volume by 53%", metric: "53%", label: "lower IT helpdesk volume", link: "/cases/bank-internal-agent", image: "/images/industries/fin-trader.jpg" }
      ]}
      ctaTitle="Is your website traffic leaving without a trace?"
      ctaDescription="Let's engage and qualify visitors in seconds and turn anonymous traffic into booked meetings."
    />
  );
}
