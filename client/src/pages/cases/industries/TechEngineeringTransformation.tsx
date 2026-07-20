import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Code, Zap, Users, Shield, Clock } from "lucide-react";

export default function TechEngineeringTransformation() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Tripling a Software Company's Release Speed | Technology, Media & Telecom Case Study"
      seoDescription="A fast-growing software company had slowed to a monthly release cycle as its codebase and processes buckled under its own success. Rebuilding how it shipped software tripled its release speed."
      canonical="/cases/tech-engineering-transformation"
      industry="Technology, Media & Telecom"
      industryLink="/industries/technology-media-telecom"
      title="How a Growing Software Company Tripled Its Release Speed"
      subtitle="Rapid growth had left a software company shipping once a month while nimbler rivals shipped every week. Rebuilding how its teams built and released software gave the company back the speed it had as a start-up."
      heroImage="/images/capabilities/cap-conference-data.jpg"
      metrics={[
        { value: "3x", label: "Faster Releases" },
        { value: "75%", label: "Less Deploy Time" },
        { value: "90%", label: "Automated Testing" },
        { value: "2 wks", label: "To Full Productivity" }
      ]}
      clientContextTitle="Success Had Made the Software Slow to Change"
      clientContextIntro="A software company had grown quickly, scaling from a startup to an established enterprise vendor in only five years. But the speed that built the business had faded. A single, sprawling codebase, deployments done largely by hand, and engineers who spent more of their week keeping the lights on than building new things had all conspired to slow the company down. What had once been a weekly release cadence had stretched to roughly once a month."
      clientContextBody="The costs showed up everywhere. New engineers took about three months to find their feet. Every deployment was a tense, all-hands affair that often had to be undone. The team that owned the shared infrastructure had become a bottleneck, and product teams could wait weeks for a change they needed. Smaller, more agile competitors were shipping features faster, and the company could feel its early advantage slipping. Leadership concluded that the problem was not the people; it was the way the company built and released its software."
      clientProfile={{
        industry: "Enterprise Software",
        companySize: "Enterprise SaaS Vendor",
        projectDuration: "12 Months",
        additionalInfo: "~400 Engineers",
        additionalLabel: "Engineering Team"
      }}
      challengeTitle="Growing Pains"
      challenges={[
        {
          icon: Clock,
          title: "Releases Once a Month",
          description: "Features that were finished and ready often waited weeks for the next deployment, while competitors shipped every week."
        },
        {
          icon: Code,
          title: "One Tangled Codebase",
          description: "Everything lived in a single large codebase, so a change in one corner could quietly break something unrelated elsewhere."
        },
        {
          icon: Users,
          title: "A Slow Start for New Hires",
          description: "New engineers needed about three months to become productive, held back by a complicated setup and knowledge that lived only in people's heads."
        },
        {
          icon: Shield,
          title: "Deployments to Dread",
          description: "Releases were risky events that pulled in the whole team and frequently had to be rolled back when something went wrong."
        }
      ]}
      approachTitle="Making Shipping Software Routine Again"
      approachIntro="Working with the company's engineering leaders, we rebuilt the way software moved from a developer's screen to customers — giving teams the tools to work independently, automating the risky manual steps, and making the day-to-day experience of building software far smoother."
      steps={[
        {
          step: "01",
          title: "Tools Teams Could Use Themselves",
          description: "We built an internal set of tools that let product teams set up environments, release their own services and see how they were performing, without waiting on the central infrastructure team. Requests to that team fell by around 80%."
        },
        {
          step: "02",
          title: "Breaking the Monolith Into Parts",
          description: "We divided the single codebase into smaller, clearly-owned pieces with well-defined boundaries. Each team could now release its own part on its own schedule, without having to coordinate with everyone else."
        },
        {
          step: "03",
          title: "Automating the Path to Release",
          description: "We put automated testing and release in place so that every change was checked by the system and, once it passed, went live on its own. Deployments stopped being events and became something that simply happened in the background."
        },
        {
          step: "04",
          title: "A Better Day for Engineers",
          description: "We standardised how developers set up their work, wrote the documentation that had been missing, and automated onboarding. New engineers now shipped real code in their first days, and regular feedback from the team guided further improvements."
        }
      ]}
      resultsTitle="Speed Restored"
      results={[
        {
          icon: Zap,
          value: "3x",
          label: "Faster releases",
          detail: "From monthly to several times a day"
        },
        {
          icon: Clock,
          value: "75%",
          label: "Less time to deploy",
          detail: "From about four hours to under one"
        },
        {
          icon: Shield,
          value: "90%",
          label: "Automated test coverage",
          detail: "Up from 40% — confidence in every release"
        },
        {
          icon: Users,
          value: "2 weeks",
          label: "To full productivity",
          detail: "Down from three months for a new engineer"
        }
      ]}
      quote="We went from dreading deployments to barely noticing them — we release many times a day now without a second thought. Our engineers spend their time building features instead of fighting the plumbing. We have the agility we had as a young company, only now at real scale."
      quoteAuthor="Vice President, Engineering"
      quoteRole="Enterprise software company"
      relatedStudies={[
        {
          title: "Launching a Streaming Service That Won 750K Subscribers",
          metric: "750K",
          label: "subscribers in year one",
          link: "/cases/media-streaming-launch",
          image: "/images/industries/tech-datacenter.jpg"
        },
        {
          title: "Cutting a Regional Carrier's Churn by 40%",
          metric: "40%",
          label: "lower customer churn",
          link: "/cases/telecom-customer-experience",
          image: "/images/cases/telecom-customer-experience-hero.jpg"
        }
      ]}
      ctaTitle="Ready to ship faster?"
      ctaDescription="Let's talk about giving your engineering teams the speed to keep their edge."
    />
  );
}
