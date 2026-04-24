import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export default function SoftwareCodingAssistant() {
  return (
    <CaseStudyTemplate
      client="Enterprise Software Company"
      industry="Technology · AI & Machine Learning"
      title="Tech Giant Boosts Developer Productivity 40% with GenAI"
      subtitle="Custom-trained coding assistants automated boilerplate code and unit testing, allowing engineers to focus on complex architecture."
      heroImage="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1600&q=80"
      challenge={`A leading enterprise software company was facing a slowdown in feature delivery. Their codebase was massive and complex, requiring significant time for new engineers to onboard. Senior developers spent up to 30% of their time writing repetitive boilerplate code and unit tests, distracting them from high-value architectural work.

They wanted to leverage Generative AI to accelerate development but needed a solution that understood their proprietary frameworks and coding standards, which off-the-shelf tools couldn't provide.`}
      solution={`NEXDYNE fine-tuned a large language model (LLM) on the client's internal code repositories and documentation to create a secure, context-aware coding assistant.

Context-Aware Autocomplete suggested code snippets that adhered to internal style guides and utilized proprietary libraries, reducing context switching for developers. Automated Unit Testing enabled developers to highlight a function and ask the assistant to generate comprehensive unit tests, covering edge cases that were often overlooked. Legacy Code Refactoring allowed the tool to explain complex legacy code and suggest modern refactoring strategies, accelerating the modernization of technical debt.`}
      impact={`Coding velocity increased 40% as developers offloaded boilerplate generation and test writing to the AI assistant, freeing senior engineers to focus on architecture and complex problem-solving. Code review time decreased 50% as AI-generated code conformed to style guides and standards, reducing review burden. Developer adoption reached 90%—one of the highest adoption rates for any internal tooling the company had deployed.

New engineer onboarding time decreased significantly as the assistant provided in-context explanations of proprietary frameworks and code patterns. The tool effectively codified institutional knowledge that had previously required extensive mentoring from senior developers.`}
      metrics={[
        { value: "40%", label: "Increase in coding velocity" },
        { value: "50%", label: "Reduction in code review time" },
        { value: "90%", label: "Developer adoption rate" }
      ]}
      quote={{
        text: "It's like having a senior engineer pair programming with you 24/7. It handles the drudgery so we can focus on the innovation.",
        author: "Principal Software Architect",
        role: "Enterprise Software Company"
      }}
      tags={["Technology", "AI", "GenAI", "Developer Productivity"]}
      relatedCapability={{
        title: "AI & Machine Learning",
        link: "/capabilities/ai"
      }}
    />
  );
}
