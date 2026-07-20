import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Users, Clock, AlertTriangle, Target, TrendingUp, CheckCircle, Zap } from "lucide-react";

export default function RetailChatbotDeflection() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="National Retailer Deflects 68% of Support Tickets With Hybrid Bot | Chatbots Case Study"
      seoDescription="A national retailer's support team was buried in routine questions. A scripted-plus-LLM chatbot handled order status, returns, and store hours, deflecting 68% of tickets and freeing agents for high-value work."
      canonical="/cases/retail-chatbot-deflection"
      industry="Retail"
      industryLink="/industries/retail"
      title="How a National Retailer Deflected 68% of Support Tickets With a Hybrid Bot"
      subtitle="Agents spent their days answering the same routine questions over and over. A chatbot blending scripted flows with an LLM handled the repetitive volume and freed people for the hard conversations."
      heroImage="/images/capabilities/cap-retail-data.jpg"
      metrics={[
        { value: "68%", label: "Tickets Deflected" },
        { value: "Hybrid", label: "Scripted + LLM" },
        { value: "24/7", label: "Coverage" },
        { value: "Freed", label: "Live Agents" }
      ]}
      clientContextTitle="Agents Answering the Same Questions All Day"
      clientContextIntro="A national retailer's customer-support team was overwhelmed by volume, and most of it was routine: where is my order, how do I return this, what are your store hours. Skilled agents spent their days on questions a well-built system could answer, leaving genuinely difficult customer issues waiting."
      clientContextBody="The retailer had tried a purely scripted chatbot before and abandoned it — rigid decision trees frustrated customers and deflected little. A purely generative bot, on the other hand, risked giving wrong or off-brand answers on transactional questions where accuracy matters. The retailer needed a hybrid: scripted, reliable flows for the transactional questions with clear answers, and an LLM to handle the natural, varied ways customers actually ask — deflecting the routine volume without frustrating customers or risking bad answers."
      clientProfile={{
        industry: "National Retailer",
        companySize: "~130 Stores",
        projectDuration: "5 Months",
        additionalInfo: "Customer Support Automation",
        additionalLabel: "Service Operations"
      }}
      challengeTitle="Why Support Was Overwhelmed"
      challenges={[
        { icon: Users, title: "Agents on Routine Questions", description: "Skilled agents spent their days on order status, returns, and store hours." },
        { icon: Clock, title: "Hard Issues Waiting", description: "Genuinely difficult customer problems queued behind the routine volume." },
        { icon: AlertTriangle, title: "Scripted Bots Frustrate", description: "A previous rigid decision-tree bot annoyed customers and deflected little." },
        { icon: Target, title: "Generative Bots Risk Errors", description: "A purely LLM bot risked wrong or off-brand answers on transactional questions." }
      ]}
      approachTitle="Blend Scripts With an LLM"
      approachIntro="We built a hybrid chatbot that paired reliable scripted flows for transactional questions with an LLM for natural understanding — handling order status, returns, and store hours and deflecting 68 percent of tickets."
      steps={[
        { step: "01", title: "Mapping the Top Contact Reasons", description: "We identified the routine, high-volume questions — order status, returns, store hours — as the deflection targets." },
        { step: "02", title: "Building Reliable Scripted Flows", description: "We built accurate scripted flows for the transactional answers, so the bot was never wrong where accuracy matters." },
        { step: "03", title: "Adding LLM Understanding", description: "We layered in an LLM so the bot understood the many natural ways customers phrase the same request." },
        { step: "04", title: "Protecting the Handoff to Agents", description: "We designed clean escalation so anything beyond the routine reached a live agent smoothly, freeing them for high-value conversations." }
      ]}
      resultsTitle="Routine Handled, Agents Freed"
      results={[
        { icon: TrendingUp, value: "68%", label: "Tickets deflected", detail: "Routine questions resolved by the bot" },
        { icon: CheckCircle, value: "Hybrid", label: "Reliable + natural", detail: "Scripts plus LLM" },
        { icon: Users, value: "Freed", label: "Agents", detail: "For high-value conversations" },
        { icon: Zap, value: "24/7", label: "Coverage", detail: "Instant answers any hour" }
      ]}
      quote="Our agents spent all day answering where-is-my-order, and the hard problems waited. A pure script bot had failed us before, and we did not trust a pure AI bot to be accurate. Blending scripted flows for the transactional stuff with an LLM for how people actually talk deflected sixty-eight percent of our tickets and gave our agents back to the customers who really need them."
      quoteAuthor="VP of Customer Experience"
      quoteRole="National retailer"
      relatedStudies={[
        { title: "How a Regional Bank Booked 4x More Demos With a Lead-Gen Chatbot", metric: "4x", label: "more qualified demos", link: "/cases/bank-chatbot-leadgen", image: "/images/cases/bank-chatbot-leadgen-hero.jpg" },
        { title: "How a Telecom Provider Reached 64% Containment on Tier-1 Support", metric: "64%", label: "containment on tier-1 support", link: "/cases/telecom-conversational-ai", image: "/images/capabilities/cap-iot-network.jpg" }
      ]}
      ctaTitle="Are agents buried in routine questions?"
      ctaDescription="Let's build a hybrid bot that deflects the routine reliably and frees your team for hard problems."
    />
  );
}
