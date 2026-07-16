import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Timer, BugOff, ShieldCheck, Cpu, FileText, Gauge } from "lucide-react";

export default function SpecializedCodingAssistant() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Accelerating Embedded Software with a Custom AI Assistant | Automotive Case Study"
      seoDescription="A major automotive OEM's EV software had to meet ISO 26262 within tight hardware limits. A fine-tuned assistant cut ECU development time 35% and bug density 50%."
      canonical="/case-studies/software-specialized-coding"
      industry="Automotive"
      industryLink="/industries/automotive"
      title="How an Automotive OEM Accelerated Embedded Software Development with Custom AI"
      subtitle="A fine-tuned model that understood proprietary hardware constraints and safety standards sped up ECU code generation 35% — encoding safety and hardware expertise that once required years of mentoring."
      heroImage="/images/industries/energy-wind.jpg"
      metrics={[
        { value: "35%", label: "Faster ECU Development" },
        { value: "50%", label: "Lower Bug Density" },
        { value: "2x", label: "Faster Safety Certification" }
      ]}
      clientContextTitle="Safety-Critical Code, Under Real Constraints"
      clientContextIntro="A major automotive OEM was developing next-generation EV platforms. The software running on Electronic Control Units had to meet rigorous safety standards (ISO 26262) and operate within strict memory and processing limits — and general-purpose coding assistants kept suggesting inefficient or non-compliant code."
      clientContextBody="The engineering team needed a specialized tool that spoke the language of embedded systems and the OEM's proprietary vehicle architecture. Off-the-shelf AI didn't understand these constraints, so its suggestions created more review work than they saved."
      clientProfile={{
        industry: "Major Automotive OEM",
        companySize: "Next-Gen EV Platforms",
        projectDuration: "ISO 26262 Scope",
        additionalInfo: "Embedded C / C++",
        additionalLabel: "Training Domain"
      }}
      challengeTitle="Why Embedded Development Was Hard to Scale"
      challenges={[
        {
          icon: ShieldCheck,
          title: "Rigorous safety standards",
          description: "ECU software had to meet ISO 26262, leaving no room for the unsafe patterns generic tools suggested."
        },
        {
          icon: Cpu,
          title: "Strict hardware limits",
          description: "Code had to run within tight memory and CPU constraints, which general assistants routinely ignored."
        },
        {
          icon: BugOff,
          title: "Safety-critical defects",
          description: "Under time pressure, developers introduced entire categories of safety defects that were costly to catch late."
        },
        {
          icon: FileText,
          title: "Heavy documentation burden",
          description: "Regulatory audits demanded detailed documentation and traceability matrices, all produced by hand."
        }
      ]}
      approachTitle="A Domain Expert, Not Just a Tool"
      approachIntro="NEXDYNE fine-tuned a code-generation model on the client's historical embedded C/C++ codebase, safety manuals, and hardware specs — creating an assistant that understood the constraints better than many junior engineers."
      steps={[
        {
          step: "01",
          title: "Safety-critical code generation",
          description: "The model was trained to prioritize MISRA C compliance and avoid unsafe memory practices, producing code ready for safety certification."
        },
        {
          step: "02",
          title: "Hardware-aware optimization",
          description: "It suggested optimizations specific to the target microcontroller, ensuring efficient use of limited RAM and CPU cycles."
        },
        {
          step: "03",
          title: "Automated documentation",
          description: "Detailed technical documentation and traceability matrices for regulatory audits were generated automatically alongside the code."
        },
        {
          step: "04",
          title: "Encode expertise at scale",
          description: "The tool captured safety and hardware knowledge that once required extensive mentoring, letting the team scale EV development without proportional senior headcount."
        }
      ]}
      resultsTitle="The Payoff"
      results={[
        {
          icon: Timer,
          value: "35%",
          label: "Faster ECU development",
          detail: "As safety-compliant patterns were automated"
        },
        {
          icon: BugOff,
          value: "50%",
          label: "Lower bug density",
          detail: "Eliminating whole categories of safety defects"
        },
        {
          icon: Gauge,
          value: "2x",
          label: "Faster safety certification",
          detail: "Audit-ready documentation out of the box"
        }
      ]}
      quote="This isn't just a coding tool; it's a domain expert. It understands the constraints of our hardware better than some of our junior engineers, helping us build safer cars faster."
      quoteAuthor="Chief Software Engineer"
      quoteRole="Major Automotive OEM"
      relatedStudies={[
        {
          title: "Boosting Developer Productivity 40% with GenAI",
          metric: "40%",
          label: "faster coding velocity",
          link: "/case-studies/software-coding-assistants",
          image: "/images/industries/energy-wind.jpg"
        },
        {
          title: "Accelerating Chip Design with Digital Twins",
          metric: "25%",
          label: "more first-time-right designs",
          link: "/case-studies/semiconductor-design-twin",
          image: "/images/industries/mfg-robotics.jpg"
        }
      ]}
      ctaTitle="Ready to give your embedded teams a domain-expert assistant?"
      ctaDescription="Let's talk about what a safety-aware model could do for your development speed and certification."
    />
  );
}
