import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Clock, DollarSign, Target, Users, Zap, CheckCircle } from "lucide-react";

export default function AgenticAIServiceResolution() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Resolving Everyday Service Requests Without a Handoff | Financial Services Case Study"
      seoDescription="A regional bank was routing every routine request to a person, leaving customers waiting and costs high. AI agents that take action — not just answer — now resolve 60% of requests end to end."
      canonical="/cases/agentic-ai-service-resolution"
      industry="Financial Services"
      industryLink="/industries/financial-services"
      title="How a Regional Bank Resolved 60% of Everyday Requests Without a Human Handoff"
      subtitle="Routine service requests were being passed to a person even when the answer was obvious and the action was simple. AI agents that could act on the customer's behalf, not just answer questions, changed what the bank could handle on its own."
      heroImage="/images/cases/agentic-ai-service-resolution-hero.jpg"
      metrics={[
        { value: "60%", label: "Resolved Without a Handoff" },
        { value: "70%", label: "Faster Resolution" },
        { value: "30%", label: "Lower Cost to Serve" },
        { value: "$6M", label: "Saved Each Year" }
      ]}
      clientContextTitle="When Every Request Ends Up in Someone's Queue"
      clientContextIntro="A regional retail bank served several hundred thousand everyday customers across a few dozen branches and its mobile app. Most of what those customers asked for was routine — reset a card PIN, dispute a small charge, update an address, move a payment date. Yet almost every one of these requests, however simple, ended up in a queue waiting for a person to pick it up, look up the account, take the action and confirm it was done."
      clientContextBody="The bank's older tools could answer questions but could not do anything. A chatbot might tell a customer how to replace a lost card, but it could not actually order the card, so the request still went to a person. The result was long waits for customers on requests that should have taken seconds, and a service team spending most of its day on repetitive tasks rather than the complicated cases that genuinely needed human judgment. Leadership saw the pattern clearly: the problem was not the volume of requests, it was that the bank had no way to finish a request without a human doing every step."
      clientProfile={{
        industry: "Regional Retail Bank",
        companySize: "~$320M Annual Revenue",
        projectDuration: "10 Months",
        additionalInfo: "~250 Service Staff",
        additionalLabel: "Customer Operations Team"
      }}
      challengeTitle="Why Simple Requests Still Took a Person"
      challenges={[
        {
          icon: Clock,
          title: "Long Waits on Simple Things",
          description: "Routine requests sat in a queue behind everything else, so a customer could wait hours for an action that took seconds to perform."
        },
        {
          icon: Users,
          title: "Skilled Staff on Repetitive Work",
          description: "Experienced agents spent most of their day on look-ups and form-filling instead of the complex cases where their judgment actually mattered."
        },
        {
          icon: Target,
          title: "Tools That Could Answer but Not Act",
          description: "The bank's chatbots could explain what to do but could not do it, so nearly every conversation still ended with a handoff to a person."
        },
        {
          icon: DollarSign,
          title: "A High Cost to Serve",
          description: "Because a person touched almost every request, the cost of handling routine service stayed stubbornly high no matter how efficient the team became."
        }
      ]}
      approachTitle="From Answering to Acting"
      approachIntro="Working alongside the bank's customer operations leaders, we introduced AI agents that could complete a request from start to finish — check the account, take the action within the bank's own systems, and confirm the outcome with the customer — while making sure a person stepped in the moment a request was sensitive, unusual or high value."
      steps={[
        {
          step: "01",
          title: "Starting Where the Risk Was Lowest",
          description: "Rather than trying to automate everything at once, we began with a short list of common, low-risk requests — PIN resets, address changes, payment-date moves — where the right action was clear and the downside of a mistake was small."
        },
        {
          step: "02",
          title: "Agents That Take the Action, Not Just Explain It",
          description: "We connected the agents securely to the bank's core systems so they could actually do the work — order the replacement card, update the record, reschedule the payment — and then tell the customer it was done, instead of handing the task to a person."
        },
        {
          step: "03",
          title: "Clear Limits and a Human on Standby",
          description: "We gave every agent firm boundaries. Anything above a set value, anything that looked like fraud, or anything the agent was unsure about was passed straight to a person, along with everything it had already gathered — so the customer never had to start over."
        },
        {
          step: "04",
          title: "Learning From Every Interaction",
          description: "We reviewed what the agents resolved well and where they fell short, then steadily widened the set of requests they could handle. The team kept full visibility into every action an agent took, so trust grew alongside the results."
        }
      ]}
      resultsTitle="Requests Finished, Not Just Fielded"
      results={[
        {
          icon: CheckCircle,
          value: "60%",
          label: "Resolved without a handoff",
          detail: "Routine requests finished end to end by an agent"
        },
        {
          icon: Clock,
          value: "70%",
          label: "Faster resolution",
          detail: "Seconds instead of hours on common requests"
        },
        {
          icon: Zap,
          value: "30%",
          label: "Lower cost to serve",
          detail: "Fewer routine requests reaching a person"
        },
        {
          icon: DollarSign,
          value: "$6M",
          label: "Saved each year",
          detail: "As staff shifted to higher-value work"
        }
      ]}
      quote="For years our best people spent their days resetting PINs and updating addresses. The difference now is that the AI does not just tell a customer what to do — it actually does it, then confirms it is done. That freed our team to spend their time on the customers who really need a human, and our customers stopped waiting for things that should have taken seconds."
      quoteAuthor="Head of Customer Operations"
      quoteRole="Regional retail bank"
      relatedStudies={[
        {
          title: "Drafting policy documents in minutes with generative AI",
          metric: "70%",
          label: "less drafting time",
          link: "/cases/generative-ai-document-automation",
          image: "/images/industries/fin-monitors.jpg"
        },
        {
          title: "Cutting unplanned downtime with a digital twin",
          metric: "45%",
          label: "less unplanned downtime",
          link: "/cases/digital-twin-predictive-operations",
          image: "/images/industries/mfg-robot-arm.jpg"
        }
      ]}
      ctaTitle="Ready to finish more requests without a handoff?"
      ctaDescription="Let's talk about where AI agents could take action for your customers, not just answer them."
    />
  );
}
