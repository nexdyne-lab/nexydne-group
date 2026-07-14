import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { AlertTriangle, Target, TrendingDown, Users, TrendingUp, CheckCircle } from "lucide-react";

export default function SaasMeddiccTransformation() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Growth-Stage SaaS Doubles Win Rate After CRM Rebuild and MEDDICC | Sales Transformation Case Study"
      seoDescription="A growth-stage SaaS company had an unreliable CRM and inconsistent qualification. A Salesforce rebuild plus rigorous MEDDICC qualification training lifted win rate from 18% to 37% in three quarters."
      canonical="/cases/saas-meddicc-transformation"
      industry="B2B SaaS"
      industryLink="/industries/technology-media-telecom"
      title="How a Growth-Stage SaaS Company Doubled Its Win Rate"
      subtitle="An unreliable CRM and gut-feel qualification meant reps chased deals they were never going to win. A rebuilt CRM and a real qualification discipline changed which deals got worked."
      heroImage="/images/capabilities/cap-conference-data.jpg"
      metrics={[
        { value: "18% → 37%", label: "Win Rate" },
        { value: "3 Qtrs", label: "To Double" },
        { value: "MEDDICC", label: "Qualification" },
        { value: "Rebuilt", label: "Salesforce" }
      ]}
      clientContextTitle="Chasing Deals They Couldn't Win"
      clientContextIntro="A growth-stage SaaS company had a win rate stuck at 18 percent, and two problems were feeding it. Its Salesforce instance had degraded into an unreliable mess that reps did not trust or fully use, and qualification was done by gut feel, so reps poured time into deals they were never well-positioned to close."
      clientContextBody="The two problems compounded each other. Without a trustworthy CRM, leadership had no clear view of the pipeline and could not coach effectively, and without a shared qualification discipline, reps could not consistently tell a winnable deal from a time-sink. The result was effort spread across too many low-probability opportunities and a win rate that reflected it. The company needed to rebuild Salesforce into a system reps would actually use, and to instill a rigorous qualification methodology — MEDDICC — so the team focused its energy on the deals it could genuinely win."
      clientProfile={{
        industry: "Growth-Stage SaaS Company",
        companySize: "~$180M ARR",
        projectDuration: "3 Quarters",
        additionalInfo: "CRM Rebuild + MEDDICC",
        additionalLabel: "Sales Transformation"
      }}
      challengeTitle="Why the Win Rate Was Stuck"
      challenges={[
        { icon: AlertTriangle, title: "An Unreliable CRM", description: "A degraded Salesforce instance reps did not trust obscured the pipeline." },
        { icon: Target, title: "Gut-Feel Qualification", description: "Without a shared discipline, reps could not tell winnable deals from time-sinks." },
        { icon: TrendingDown, title: "Effort on Low-Probability Deals", description: "Reps poured time into opportunities they were never positioned to win." },
        { icon: Users, title: "No Basis to Coach", description: "Leadership had no clear pipeline view to coach the team effectively." }
      ]}
      approachTitle="Rebuild the CRM, Instill the Discipline"
      approachIntro="We rebuilt Salesforce into a system reps would actually use and paired it with rigorous MEDDICC qualification training — lifting win rate from 18 percent to 37 percent in three quarters."
      steps={[
        { step: "01", title: "Rebuilding Salesforce", description: "We rebuilt the CRM into a clean, trustworthy system that gave reps and leadership a reliable view of the pipeline." },
        { step: "02", title: "Instilling MEDDICC Qualification", description: "We trained the team on MEDDICC so reps rigorously qualified deals and focused on the winnable ones." },
        { step: "03", title: "Focusing Effort on Winnable Deals", description: "With disciplined qualification, reps stopped chasing low-probability opportunities and concentrated their energy where it counted." },
        { step: "04", title: "Coaching From Real Data", description: "With a trustworthy CRM, leadership could coach the team from an accurate pipeline, compounding the gains." }
      ]}
      resultsTitle="Effort Where It Wins"
      results={[
        { icon: TrendingUp, value: "18% → 37%", label: "Win rate", detail: "Roughly doubled in three quarters" },
        { icon: CheckCircle, value: "Trusted", label: "CRM", detail: "Reps actually use it" },
        { icon: Target, value: "MEDDICC", label: "Qualification", detail: "Rigorous and shared" },
        { icon: Users, value: "Coachable", label: "Pipeline", detail: "Accurate view to lead from" }
      ]}
      quote="Our reps did not trust the CRM and qualified deals on instinct, so they burned time on opportunities we were never going to win — and our win rate showed it. Rebuilding Salesforce into something they actually use and drilling a real qualification discipline roughly doubled our win rate in three quarters. The team just stopped chasing deals it couldn't win."
      quoteAuthor="Chief Revenue Officer"
      quoteRole="Growth-stage SaaS company"
      relatedStudies={[
        { title: "How a Manufacturer Turned a Stagnant Partner Program Into a Growth Engine", metric: "31%", label: "higher partner revenue", link: "/cases/manufacturer-channel-transformation", image: "/images/industries/mfg-robot-arm.jpg" },
        { title: "How a National Retailer Deflected 68% of Support Tickets With a Hybrid Bot", metric: "68%", label: "of tickets deflected", link: "/cases/retail-chatbot-deflection", image: "/images/capabilities/cap-retail-data.jpg" }
      ]}
      ctaTitle="Is your team chasing deals it can't win?"
      ctaDescription="Let's rebuild the CRM and instill the qualification discipline that lifts win rate."
    />
  );
}
