import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Clock, AlertTriangle, Target, Users, Zap, CheckCircle } from "lucide-react";

export default function WealthManagementOnboarding() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Wealth Manager Cuts Client Onboarding Time 80% | Case Study"
      seoDescription="A wealth manager's client onboarding was a slow, paperwork-heavy process. Digitizing and streamlining it cut onboarding time 80%, improving the first impression for new clients."
      canonical="/cases/wealth-management-onboarding"
      industry="Financial Services"
      industryLink="/industries/financial-services"
      title="How a Wealth Manager Cut Client Onboarding Time by 80%"
      subtitle="Onboarding a new client meant weeks of paperwork and back-and-forth — a poor first impression for a high-touch relationship. A streamlined digital process changed that."
      heroImage="/images/industries/fin-handshake-city.jpg"
      metrics={[
        { value: "80%", label: "Faster Onboarding" },
        { value: "Digital", label: "Process" },
        { value: "Weeks → Days", label: "To Onboard" },
        { value: "Better", label: "First Impression" }
      ]}
      clientContextTitle="A Slow Start to a High-Touch Relationship"
      clientContextIntro="A wealth manager's client onboarding was slow and paperwork-heavy. Bringing on a new client meant weeks of forms, manual data entry, compliance checks, and back-and-forth — an awkward, bureaucratic start to what is meant to be a premium, high-touch relationship."
      clientContextBody="For a wealth manager, onboarding is the first real experience a new client has of the firm, and a slow, cumbersome process sends exactly the wrong signal at the worst moment. The delays came from manual, sequential steps and paper forms that could not keep pace with client expectations, and every day of friction risked the relationship before it began. The wealth manager needed to digitize and streamline onboarding — collapsing weeks of paperwork into a fast, smooth process — so the first impression matched the premium relationship the firm promised."
      clientProfile={{
        industry: "Wealth Manager",
        companySize: "~$420M Annual Revenue",
        projectDuration: "5 Months",
        additionalInfo: "Client Onboarding",
        additionalLabel: "Client Experience"
      }}
      challengeTitle="Why Onboarding Was So Slow"
      challenges={[
        { icon: Clock, title: "Weeks of Paperwork", description: "Onboarding meant forms, manual entry, and compliance checks that took weeks." },
        { icon: AlertTriangle, title: "A Poor First Impression", description: "A bureaucratic start clashed with the premium relationship the firm promised." },
        { icon: Target, title: "Manual, Sequential Steps", description: "Paper forms and sequential handoffs could not keep pace with client expectations." },
        { icon: Users, title: "Relationship at Risk", description: "Every day of friction risked the client relationship before it began." }
      ]}
      approachTitle="Digitize and Streamline Onboarding"
      approachIntro="We digitized and streamlined the client onboarding process, collapsing weeks of paperwork into a fast, smooth experience — cutting onboarding time 80 percent."
      steps={[
        { step: "01", title: "Mapping the Onboarding Journey", description: "We mapped the paperwork-heavy process to find where the weeks of delay accumulated." },
        { step: "02", title: "Digitizing the Forms and Checks", description: "We replaced paper forms and manual entry with a digital process, including compliance checks." },
        { step: "03", title: "Streamlining the Steps", description: "We parallelized and simplified the sequential steps that had stretched onboarding out." },
        { step: "04", title: "Delivering a Premium First Impression", description: "We cut onboarding time 80 percent, making the first experience match the premium relationship." }
      ]}
      resultsTitle="A Fast, Premium Start"
      results={[
        { icon: Zap, value: "80%", label: "Faster onboarding", detail: "Weeks to days" },
        { icon: CheckCircle, value: "Digital", label: "Process", detail: "Paperwork replaced" },
        { icon: Target, value: "Streamlined", label: "Steps", detail: "Parallelized and simplified" },
        { icon: Users, value: "Better", label: "First impression", detail: "Matching the relationship" }
      ]}
      quote="Onboarding is a new client's very first experience of us, and ours was weeks of paperwork and back-and-forth — the opposite of the premium relationship we promise. Digitizing and streamlining it cut onboarding time eighty percent. New clients now start with a fast, smooth experience that actually reflects the firm they chose."
      quoteAuthor="Head of Client Experience"
      quoteRole="Wealth manager"
      relatedStudies={[
        { title: "How a Community Bank Cut Infrastructure Cost 65% and Made Room to Grow 3x", metric: "65%", label: "lower infrastructure cost", link: "/capabilities/technology/case-studies/bank-cloud-migration", image: "/images/industries/fin-monitors.jpg" },
        { title: "How a Precision Manufacturer Gained 40% Process Efficiency With a Modern ERP", metric: "40%", label: "process efficiency gain", link: "/capabilities/technology/case-studies/manufacturing-erp", image: "/images/industries/mfg-robot-arm.jpg" }
      ]}
      ctaTitle="Is slow onboarding hurting your first impression?"
      ctaDescription="Let's digitize and streamline it so the first experience matches the relationship."
    />
  );
}
