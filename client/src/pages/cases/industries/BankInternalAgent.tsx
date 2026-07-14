import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Users, Clock, TrendingDown, Target, Zap } from "lucide-react";

export default function BankInternalAgent() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Regional Bank Cuts Internal IT Helpdesk Volume 53% | Conversational AI Case Study"
      seoDescription="A regional bank's IT helpdesk was buried in password resets and access requests. An internal AI agent absorbed the routine queries, cutting helpdesk volume 53% and reclaiming 14,000 specialist hours a year."
      canonical="/cases/bank-internal-agent"
      industry="Financial Services"
      industryLink="/industries/financial-services"
      title="How a Regional Bank Cut IT Helpdesk Volume by 53%"
      subtitle="IT specialists spent their days on password resets and access requests instead of real work. An internal agent absorbed the routine queries and gave 14,000 hours a year back to the team."
      heroImage="/images/industries/fin-trader.jpg"
      metrics={[
        { value: "53%", label: "Lower Helpdesk Volume" },
        { value: "14,000", label: "Hours Reclaimed / Yr" },
        { value: "Internal", label: "AI Agent" },
        { value: "Self-Service", label: "For Employees" }
      ]}
      clientContextTitle="Specialists Doing Password Resets"
      clientContextIntro="A regional bank's internal IT helpdesk was buried in routine requests — password resets, access requests, onboarding questions — that consumed the time of specialists whose skills were needed for far more valuable work. Employees, meanwhile, waited in a queue for answers to simple questions."
      clientContextBody="The volume was high and overwhelmingly repetitive. Each password reset or access request was a small task, but multiplied across the whole bank they added up to thousands of specialist hours a year spent on work that required no specialist at all. Employees lost productive time waiting, and the IT team could not get to the strategic work only it could do. The bank needed an internal conversational agent that could resolve these routine queries directly for employees — reclaiming specialist capacity and giving staff instant answers."
      clientProfile={{
        industry: "Regional Bank",
        companySize: "~$430M Annual Revenue",
        projectDuration: "5 Months",
        additionalInfo: "Internal IT Agent",
        additionalLabel: "Employee Support"
      }}
      challengeTitle="Why the Helpdesk Was Overloaded"
      challenges={[
        { icon: Users, title: "Specialists on Routine Tasks", description: "IT specialists spent their days on password resets and access requests." },
        { icon: Clock, title: "Employees Waiting", description: "Staff queued for answers to simple questions, losing productive time." },
        { icon: TrendingDown, title: "Thousands of Hours Lost", description: "Repetitive requests consumed thousands of specialist hours a year across the bank." },
        { icon: Target, title: "Strategic Work Crowded Out", description: "The IT team could not get to the higher-value work only it could do." }
      ]}
      approachTitle="Give Employees an Internal Agent"
      approachIntro="We built an internal conversational agent that absorbed password resets, access requests, and onboarding queries directly for employees — cutting helpdesk volume 53 percent and reclaiming 14,000 specialist hours a year."
      steps={[
        { step: "01", title: "Targeting the Routine Queries", description: "We identified password resets, access requests, and onboarding questions as the high-volume, automatable load." },
        { step: "02", title: "Building the Internal Agent", description: "We built a conversational agent employees could ask directly, resolving routine requests without a specialist." },
        { step: "03", title: "Integrating With IT Systems", description: "We connected the agent to the systems it needed so it could actually complete requests, not just answer questions." },
        { step: "04", title: "Reclaiming Specialist Capacity", description: "With routine volume absorbed, specialists were freed for strategic work, and 14,000 hours a year came back to the team." }
      ]}
      resultsTitle="Capacity Back to the Specialists"
      results={[
        { icon: TrendingDown, value: "53%", label: "Lower volume", detail: "On the IT helpdesk" },
        { icon: Clock, value: "14,000", label: "Hours reclaimed", detail: "Per year for the team" },
        { icon: Zap, value: "Instant", label: "For employees", detail: "Answers without a queue" },
        { icon: Users, value: "Freed", label: "Specialists", detail: "For strategic work" }
      ]}
      quote="Our IT specialists were spending their days resetting passwords and granting access — thousands of hours a year of it — while employees waited in a queue. An internal agent that just handles those requests cut our helpdesk volume in half and gave the team back fourteen thousand hours. Our specialists finally do specialist work."
      quoteAuthor="Chief Information Officer"
      quoteRole="Regional bank"
      relatedStudies={[
        { title: "How a Regional Insurer Cut Inbound Calls 47% With a Self-Service Portal", metric: "47%", label: "lower inbound call volume", link: "/cases/insurance-portal", image: "/images/industries/fin-handshake-city.jpg" },
        { title: "How a B2B Distributor Lifted Repeat Orders 23% With a Dealer Portal", metric: "23%", label: "higher repeat order rate", link: "/cases/distribution-dealer-portal", image: "/images/capabilities/cap-warehouse-robot.jpg" }
      ]}
      ctaTitle="Is your IT team buried in routine requests?"
      ctaDescription="Let's build an internal agent that resolves them and reclaims your specialists' time."
    />
  );
}
