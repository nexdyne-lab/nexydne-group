import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export function SpecializedCodingAssistant() {
  return (
    <CaseStudyTemplate
      client="Major Automotive OEM"
      industry="Automotive · AI & Machine Learning"
      title="Automotive Manufacturer Accelerates Embedded Software Dev with Custom AI"
      subtitle="Fine-tuned model understood proprietary hardware constraints and safety standards, speeding up ECU code generation by 35%."
      heroImage="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&q=80"
      challenge={`A major automotive OEM was developing next-generation electric vehicle (EV) platforms. The software running on Electronic Control Units (ECUs) had to meet rigorous safety standards (ISO 26262) and operate within strict memory and processing constraints. General-purpose coding assistants failed to understand these specific requirements, often suggesting inefficient or non-compliant code.

The engineering team needed a specialized tool that "spoke the language" of embedded systems and their proprietary vehicle architecture.`}
      solution={`NEXDYNE fine-tuned a code-generation model on the client's historical embedded C/C++ codebase, safety manuals, and hardware specifications.

Safety-Critical Code Generation trained the model to prioritize MISRA C compliance and avoid unsafe memory practices, generating code that was ready for safety certification. Hardware-Aware Optimization suggested optimizations specific to the target microcontroller architecture, ensuring efficient use of limited RAM and CPU cycles. Automated Documentation generated detailed technical documentation and traceability matrices required for regulatory audits automatically alongside code output.`}
      impact={`ECU development time decreased 35% as engineers automated boilerplate code generation and relied on the assistant for safety-compliant patterns. Bug density decreased 50%—the model's adherence to MISRA C and domain-specific constraints eliminated entire categories of safety-critical defects that human developers introduced under time pressure. Safety certification time was cut in half as automated documentation and traceability matrices met regulatory audit requirements out-of-the-box.

The tool effectively encoded safety and hardware expertise that previously required extensive mentoring of junior engineers, enabling the team to scale EV software development without proportionally increasing senior engineering headcount.`}
      metrics={[
        { value: "35%", label: "Reduction in development time" },
        { value: "50%", label: "Decrease in bug density" },
        { value: "2x", label: "Faster safety certification" }
      ]}
      quote={{
        text: "This isn't just a coding tool; it's a domain expert. It understands the constraints of our hardware better than some of our junior engineers, helping us build safer cars faster.",
        author: "Chief Software Engineer",
        role: "Major Automotive OEM"
      }}
      tags={["Automotive", "AI", "GenAI", "Embedded Systems"]}
      relatedCapability={{
        title: "AI & Machine Learning",
        link: "/capabilities/ai"
      }}
    />
  );
}

export default SpecializedCodingAssistant;
