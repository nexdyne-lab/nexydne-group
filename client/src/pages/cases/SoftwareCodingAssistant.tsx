import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Rocket, GitPullRequest, Users, Code2, TestTube2, RefreshCw } from "lucide-react";

export default function SoftwareCodingAssistant() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Boosting Developer Productivity 40% with a Custom GenAI Assistant | Technology Case Study"
      seoDescription="An enterprise software firm's senior engineers spent 30% of their time on boilerplate. A fine-tuned coding assistant lifted coding velocity 40% with 90% developer adoption."
      canonical="/case-studies/software-coding-assistants"
      industry="Technology, Media & Telecom"
      industryLink="/industries/technology-media-telecom"
      title="How an Enterprise Software Firm Boosted Developer Productivity 40% with GenAI"
      subtitle="A custom-trained coding assistant automated boilerplate and unit testing — freeing engineers to focus on complex architecture, with one of the highest internal-tool adoption rates the company had seen."
      heroImage="/images/industries/energy-wind.jpg"
      metrics={[
        { value: "40%", label: "Faster Coding Velocity" },
        { value: "50%", label: "Less Code-Review Time" },
        { value: "90%", label: "Developer Adoption" }
      ]}
      clientContextTitle="A Massive Codebase, Slowing Delivery"
      clientContextIntro="A leading enterprise software company was seeing feature delivery slow down. Its codebase was massive and complex, new engineers took significant time to onboard, and senior developers spent up to 30% of their time writing repetitive boilerplate and unit tests instead of high-value architectural work."
      clientContextBody="The company wanted to use Generative AI to accelerate development — but needed a solution that understood its proprietary frameworks and coding standards, which off-the-shelf tools couldn't provide. A generic assistant would suggest code that didn't fit their conventions or libraries."
      clientProfile={{
        industry: "Enterprise Software Company",
        companySize: "Large Engineering Org",
        projectDuration: "Fine-Tuned LLM",
        additionalInfo: "Proprietary Frameworks",
        additionalLabel: "Training Scope"
      }}
      challengeTitle="Why Delivery Was Dragging"
      challenges={[
        {
          icon: Code2,
          title: "Time lost to boilerplate",
          description: "Senior developers spent up to 30% of their time on repetitive code and tests instead of architecture and hard problems."
        },
        {
          icon: Users,
          title: "Slow onboarding",
          description: "The size and complexity of the codebase meant new engineers took a long time to become productive."
        },
        {
          icon: GitPullRequest,
          title: "Heavy review burden",
          description: "Inconsistent adherence to style guides made code review slow and labor-intensive."
        },
        {
          icon: RefreshCw,
          title: "Off-the-shelf tools didn't fit",
          description: "Generic assistants didn't understand proprietary frameworks or standards, suggesting code the team couldn't use."
        }
      ]}
      approachTitle="An Assistant That Knows Your Codebase"
      approachIntro="NEXDYNE fine-tuned a large language model on the client's internal repositories and documentation to create a secure, context-aware coding assistant — one that spoke their conventions fluently."
      steps={[
        {
          step: "01",
          title: "Context-aware autocomplete",
          description: "The assistant suggested code that adhered to internal style guides and used proprietary libraries, cutting context switching for developers."
        },
        {
          step: "02",
          title: "Automated unit testing",
          description: "Developers could highlight a function and ask for comprehensive unit tests — including the edge cases humans often overlooked."
        },
        {
          step: "03",
          title: "Legacy-code refactoring",
          description: "The tool explained complex legacy code and suggested modern refactoring strategies, accelerating the paydown of technical debt."
        },
        {
          step: "04",
          title: "Codify institutional knowledge",
          description: "In-context explanations of proprietary frameworks captured knowledge that previously required extensive senior mentoring."
        }
      ]}
      resultsTitle="The Payoff"
      results={[
        {
          icon: Rocket,
          value: "40%",
          label: "Faster coding velocity",
          detail: "As boilerplate and tests moved to the assistant"
        },
        {
          icon: GitPullRequest,
          value: "50%",
          label: "Less code-review time",
          detail: "AI code conformed to style guides and standards"
        },
        {
          icon: TestTube2,
          value: "90%",
          label: "Developer adoption",
          detail: "Among the highest for any internal tool they'd deployed"
        }
      ]}
      quote="It's like having a senior engineer pair programming with you 24/7. It handles the drudgery so we can focus on the innovation."
      quoteAuthor="Principal Software Architect"
      quoteRole="Enterprise Software Company"
      relatedStudies={[
        {
          title: "Accelerating Embedded Software with a Custom AI Assistant",
          metric: "35%",
          label: "faster ECU development",
          link: "/case-studies/software-specialized-coding",
          image: "/images/industries/energy-wind.jpg"
        },
        {
          title: "Automating Content Creation with GenAI",
          metric: "70%",
          label: "faster post-production",
          link: "/case-studies/media-content-production",
          image: "/images/industries/tech-datacenter.jpg"
        }
      ]}
      ctaTitle="Ready to give your engineers their time back?"
      ctaDescription="Let's talk about what a codebase-aware assistant could do for your delivery velocity."
    />
  );
}
