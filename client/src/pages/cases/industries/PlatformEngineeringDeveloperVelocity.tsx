import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Clock, DollarSign, Target, Cog, Zap, Rocket } from "lucide-react";

export default function PlatformEngineeringDeveloperVelocity() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Helping Engineers Ship Software Faster | Technology Case Study"
      seoDescription="A growing software company's engineers spent more time fighting infrastructure and approvals than building product. A shared, paved path to release software tripled how often teams could ship."
      canonical="/cases/platform-engineering-developer-velocity"
      industry="Technology, Media & Telecom"
      industryLink="/industries/technology-media-telecom"
      title="How a Software Company Helped Its Engineers Ship Three Times More Often"
      subtitle="A growing software company's engineers were spending more of their week wrestling with infrastructure, approvals and inconsistent setups than building product. A shared, paved path to release software changed how fast every team could move."
      heroImage="/images/capabilities/cap-conference-data.jpg"
      metrics={[
        { value: "3x", label: "More Frequent Releases" },
        { value: "60%", label: "Shorter Lead Time" },
        { value: "50%", label: "Fewer Failed Deploys" },
        { value: "2x", label: "More Time on Product" }
      ]}
      clientContextTitle="When Every Team Rebuilds the Same Plumbing"
      clientContextIntro="A software company — one whose products serve businesses across the country — had grown fast, and its engineering had grown with it. But every team had built its own way of getting software into customers' hands. Each had its own setup for servers, testing and releases, cobbled together over years and understood by only a handful of people. What worked when the company was small had quietly become a tax on everything it now wanted to do."
      clientContextBody="The cost showed up in the calendar. A new engineer could wait days to get a working environment. Shipping a change meant navigating a maze of manual approvals and hand-configured steps that differed from one team to the next, and when something broke, no two teams debugged it the same way. Engineers the company had hired to build product were instead spending as much as half their week on infrastructure and process. Leadership recognized the pattern: the problem was not the people or their tools, but that there was no shared, reliable path for getting software out the door — so everyone kept reinventing it."
      clientProfile={{
        industry: "Software Company",
        companySize: "National Customer Base",
        projectDuration: "12 Months",
        additionalInfo: "~500 Engineers",
        additionalLabel: "Engineering Workforce"
      }}
      challengeTitle="Why Shipping Had Grown So Slow"
      challenges={[
        {
          icon: Clock,
          title: "Days Lost Before the First Line",
          description: "New engineers waited days for a working environment, and even seasoned teams spent hours on setup that should have taken minutes."
        },
        {
          icon: Cog,
          title: "Every Team Its Own Way",
          description: "Each team had built its own tools, servers and release steps, so nothing learned on one team carried over to another."
        },
        {
          icon: Target,
          title: "Releases Held Up by Hand",
          description: "Getting a change to customers meant a chain of manual approvals and hand-configured steps — slow to run and easy to get wrong."
        },
        {
          icon: DollarSign,
          title: "Half the Week on Plumbing",
          description: "Engineers hired to build product were spending up to half their time wrestling with infrastructure instead of writing it."
        }
      ]}
      approachTitle="Building One Paved Path for Everyone"
      approachIntro="Working alongside the company's engineering leaders, we set out to build a single, well-worn path for shipping software — a standard, self-service way for any team to go from an idea to a running product safely, without reinventing the plumbing or waiting on a central team each time."
      steps={[
        {
          step: "01",
          title: "A Self-Service Way to Start",
          description: "We built a standard setup that any engineer could use to spin up a working environment on their own in minutes. What used to take days of tickets and waiting became a single, self-service step."
        },
        {
          step: "02",
          title: "One Reliable Route to Release",
          description: "We replaced each team's hand-built release steps with one shared, automated path from code to customers. The same tested route worked for every team, so releasing stopped being an event and became routine."
        },
        {
          step: "03",
          title: "Guardrails Instead of Gatekeepers",
          description: "We built the company's security and quality checks directly into the paved path, so the safe way to ship was also the easy way. Teams moved faster because the right guardrails were already in place, not because oversight was removed."
        },
        {
          step: "04",
          title: "Making the Path the Obvious Choice",
          description: "We supported teams as they moved onto the shared path and kept improving it based on what they needed. Because it was genuinely easier than the old do-it-yourself approach, teams adopted it by choice rather than mandate."
        }
      ]}
      resultsTitle="What Changed for Every Team"
      results={[
        {
          icon: Rocket,
          value: "3x",
          label: "More frequent releases",
          detail: "Shipping became routine, not an event"
        },
        {
          icon: Clock,
          value: "60%",
          label: "Shorter lead time",
          detail: "From idea to running in production"
        },
        {
          icon: Zap,
          value: "50%",
          label: "Fewer failed deploys",
          detail: "Guardrails caught problems before customers did"
        },
        {
          icon: DollarSign,
          value: "2x",
          label: "More time on product",
          detail: "Hours returned from plumbing to product"
        }
      ]}
      quote="Our engineers never lacked talent or drive — they lacked a road. Every team was paving its own, and paying for it in lost days. Once there was one path that was genuinely easier to take, people took it, and we got a huge amount of that time back for building the things our customers actually pay us for."
      quoteAuthor="Vice President, Engineering"
      quoteRole="Software company"
      relatedStudies={[
        {
          title: "Moving core systems to the cloud without disruption",
          metric: "35%",
          label: "lower infrastructure cost",
          link: "/cases/cloud-migration-health-system",
          image: "/images/industries/tech-datacenter.jpg"
        },
        {
          title: "Turning compliance into an always-on posture",
          metric: "Audit-ready",
          label: "not a periodic scramble",
          link: "/cases/security-compliance-hardening",
          image: "/images/cases/security-compliance-hardening-hero.jpg"
        }
      ]}
      ctaTitle="Ready to give your engineers their week back?"
      ctaDescription="Let's talk about what a shared, paved path to shipping software could be worth."
    />
  );
}
