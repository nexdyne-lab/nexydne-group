import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Clock, ShieldCheck, FileWarning, Target, Cog, Eye, DollarSign } from "lucide-react";

export default function SecurityComplianceHardening() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Making Audits a Non-Event for a Financial Services Firm | Financial Services Case Study"
      seoDescription="A financial services firm treated security and compliance as a periodic fire drill — every audit a scramble. Building controls into how the business runs made the firm audit-ready every day and closed real exposure."
      canonical="/cases/security-compliance-hardening"
      industry="Financial Services"
      industryLink="/industries/financial-services"
      title="Turning the Annual Audit Scramble Into a Non-Event for a Financial Services Firm"
      subtitle="A financial services firm treated security and compliance as a periodic fire drill — every audit a scramble, gaps found late, controls proven by hand. Building those controls into how the business actually runs made the firm audit-ready every day."
      heroImage="/images/industries/fin-monitors.jpg"
      metrics={[
        { value: "Audit-ready", label: "Every Day, Not Once a Year" },
        { value: "80%", label: "Less Audit Prep Time" },
        { value: "70%", label: "Fewer Findings" },
        { value: "$4M", label: "Exposure Closed" }
      ]}
      clientContextTitle="When Every Audit Is a Fire Drill"
      clientContextIntro="A financial services firm — a company that manages money and moves sensitive customer data for a living — faced a wall of security and compliance obligations from its regulators, its customers and its own board. On paper it met them. In practice, it met them the same way every year: in a frantic scramble in the weeks before each audit, when teams stopped their regular work to hunt down evidence and prove that controls were in place."
      clientContextBody="The problem was that security and compliance lived outside the flow of the business rather than inside it. Controls were checked periodically instead of enforced continuously, and evidence was assembled by hand from screenshots, spreadsheets and email threads. Because no one had a live picture of where the firm actually stood, gaps were discovered late — during an audit, or worse, after an incident. Each audit consumed thousands of staff hours, findings piled up faster than they could be closed, and the firm was never quite sure, on any given day, whether it was truly compliant or simply between audits."
      clientProfile={{
        industry: "Financial Services Firm",
        companySize: "~$500M Annual Revenue",
        projectDuration: "14 Months",
        additionalInfo: "12+ Frameworks",
        additionalLabel: "Regulatory Obligations"
      }}
      challengeTitle="Why Compliance Kept Feeling Like a Scramble"
      challenges={[
        {
          icon: Clock,
          title: "Audits Ran on Overtime",
          description: "Every audit pulled teams off their real work for weeks to gather evidence by hand — thousands of staff hours spent proving things that should have been provable in minutes."
        },
        {
          icon: FileWarning,
          title: "Gaps Found Too Late",
          description: "Controls were checked periodically rather than enforced continuously, so problems surfaced during an audit — or after an incident — instead of when they first appeared."
        },
        {
          icon: Target,
          title: "No Live Picture of Where It Stood",
          description: "Evidence lived in screenshots and spreadsheets, so on any given day no one could say with confidence whether the firm was actually compliant."
        },
        {
          icon: ShieldCheck,
          title: "Real Exposure Behind the Paperwork",
          description: "Because attention went to passing audits rather than running controls, genuine weaknesses sat open between reviews — the gaps that matter most to an attacker."
        }
      ]}
      approachTitle="Building Controls Into How the Business Runs"
      approachIntro="Working alongside the firm's security and compliance leaders, we set out to stop treating audits as events and start treating controls as part of everyday operations — enforced automatically, monitored continuously and able to prove themselves at any moment, not just at audit time."
      steps={[
        {
          step: "01",
          title: "One Map From Rules to Controls",
          description: "We translated the firm's many overlapping obligations into a single set of controls, mapped once to every framework that required them. A control proven in place now satisfied multiple regulators at once, instead of being re-proven for each audit separately."
        },
        {
          step: "02",
          title: "Controls That Enforce Themselves",
          description: "We built the most important controls directly into the systems and workflows they protected — so the safe path was the default path. Rather than reminding people to follow a policy, the process simply would not let the risky action through."
        },
        {
          step: "03",
          title: "Evidence That Collects Itself",
          description: "We connected the firm's systems so that proof of each control was captured automatically as work happened, and kept in one place. The weeks of manual evidence-gathering before every audit disappeared, because the evidence was always there and always current."
        },
        {
          step: "04",
          title: "Always Watching, Not Occasionally Checking",
          description: "We put continuous monitoring in place so a control that drifted out of compliance was flagged the moment it happened, with a clear owner and a fix. The firm moved from finding out at audit time to knowing in real time — and closing gaps in hours rather than months."
        }
      ]}
      resultsTitle="Audits Became a Non-Event"
      results={[
        {
          icon: Clock,
          value: "80%",
          label: "Less audit prep time",
          detail: "Evidence ready on demand, not assembled by hand"
        },
        {
          icon: FileWarning,
          value: "70%",
          label: "Fewer audit findings",
          detail: "Problems caught and fixed continuously, not at audit time"
        },
        {
          icon: Eye,
          value: "Continuous",
          label: "Controls monitored live",
          detail: "A real-time view of compliance, every day of the year"
        },
        {
          icon: DollarSign,
          value: "$4M",
          label: "Exposure closed",
          detail: "Real weaknesses fixed, and avoided regulatory and breach costs"
        }
      ]}
      quote="We used to prove we were secure a few weeks a year and hope for the best in between. Now the controls run every day, and the evidence is simply there when anyone asks. The audit stopped being an event we brace for — and, more importantly, the gaps that used to hide between audits aren't there anymore."
      quoteAuthor="Chief Information Security Officer"
      quoteRole="Financial services firm"
      relatedStudies={[
        {
          title: "Modernizing a legacy core without a big-bang rewrite",
          metric: "0",
          label: "big-bang cutovers",
          link: "/cases/legacy-core-modernization",
          image: "/images/industries/ops-monitors-dark.jpg"
        },
        {
          title: "Shipping faster with an internal developer platform",
          metric: "3x",
          label: "faster releases",
          link: "/cases/platform-engineering-developer-velocity",
          image: "/images/capabilities/cap-conference-data.jpg"
        }
      ]}
      ctaTitle="Ready to make your next audit a non-event?"
      ctaDescription="Let's talk about building security and compliance into how your business actually runs."
    />
  );
}
