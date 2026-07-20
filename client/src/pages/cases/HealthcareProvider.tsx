import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { ClipboardX, DollarSign, UserMinus, Repeat, ScanLine, ShieldCheck, Gauge, HeartPulse } from "lucide-react";

export function HealthcareProvider() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Automating Patient Data Management and Cutting Admin Work 40% | Healthcare Case Study"
      seoDescription="A 12-location provider network spent 300+ hours a week re-keying patient data across four systems. Intelligent automation cut admin overhead 40% and lifted data accuracy to 95%."
      canonical="/cases/healthcare-provider"
      industry="Healthcare"
      industryLink="/industries/healthcare"
      title="How a Provider Network Cut Administrative Overhead 40% With Automation"
      subtitle="Intelligent automation streamlined patient-record management and insurance claims across 12 locations — cutting administrative overhead 40% while lifting data accuracy to 95%."
      heroImage="/images/cases/healthcare-provider-hero.jpg"
      metrics={[
        { value: "40%", label: "Less Admin Overhead" },
        { value: "50%", label: "Faster Claim Processing" },
        { value: "95%", label: "Data Accuracy" }
      ]}
      clientContextTitle="Buried in Manual Data Entry"
      clientContextIntro="A multi-location healthcare network serving 50,000+ patients a year was overwhelmed by administrative burden. Staff spent 300+ hours a week manually transferring patient data between the EHR, insurance portals, and billing — re-entering each visit across four systems."
      clientContextBody="Manual entry introduced errors that cascaded through the revenue cycle: wrong insurance information, missing authorizations, duplicate claims — a heavy annual cost in denials, delayed reimbursements, and appeals. The repetitive work drove staff burnout and pushed turnover above 40%, adding recruitment and training cost on top."
      clientProfile={{
        industry: "Healthcare Provider Network",
        companySize: "12 Locations",
        projectDuration: "8-Week Rollout",
        additionalInfo: "UiPath RPA",
        additionalLabel: "Platform"
      }}
      challengeTitle="Where the Revenue Cycle Broke Down"
      challenges={[
        {
          icon: ClipboardX,
          title: "300+ hours a week re-keying",
          description: "Every visit required manual data entry across four disconnected systems, delaying care."
        },
        {
          icon: DollarSign,
          title: "A mounting cost of denials",
          description: "Cascading entry errors drove claim denials, reimbursement delays, and costly appeals."
        },
        {
          icon: UserMinus,
          title: "40% staff turnover",
          description: "Repetitive data entry burned out staff, adding recruitment and training costs."
        },
        {
          icon: Repeat,
          title: "Slow patient registration",
          description: "Duplicate, manual workflows stretched registration and frustrated patients and staff alike."
        }
      ]}
      approachTitle="End-to-End Intelligent Automation"
      approachIntro="NEXDYNE deployed an automation solution spanning registration, insurance verification, and claims — turning hours of manual work into minutes of automated execution, with humans on the complex cases."
      steps={[
        {
          step: "01",
          title: "Map the patient journey first",
          description: "Workshops with clinical and admin staff documented every edge case, followed by a HIPAA compliance review and security hardening."
        },
        {
          step: "02",
          title: "Extract and verify automatically",
          description: "UiPath bots used OCR to pull data from insurance cards and intake forms, then verified eligibility in real time."
        },
        {
          step: "03",
          title: "Submit claims with error handling",
          description: "Bots updated EHR records and submitted claims automatically, catching errors before they reached payers."
        },
        {
          step: "04",
          title: "Pilot, then scale",
          description: "A single-location pilot validated the approach before a phased rollout across all 12 locations over eight weeks."
        }
      ]}
      resultsTitle="The Payoff"
      results={[
        {
          icon: Gauge,
          value: "40%",
          label: "Less administrative overhead",
          detail: "Freeing 240 hours a week for patient care"
        },
        {
          icon: ShieldCheck,
          value: "95%",
          label: "Data accuracy",
          detail: "Cutting the claim-denial rate 35% and speeding cash flow"
        },
        {
          icon: HeartPulse,
          value: "18%",
          label: "Staff turnover",
          detail: "Down from 40%, with registration from 15 minutes to 5"
        }
      ]}
      quote=""
      quoteAuthor=""
      quoteRole=""
      relatedStudies={[
        {
          title: "Launching a Patient Portal That Cut Admin Calls 65%",
          metric: "65%",
          label: "fewer admin calls",
          link: "/cases/healthcare-patient-portal",
          image: "/images/cases/healthcare-patient-portal-hero.jpg"
        },
        {
          title: "Automating KYC Compliance With RPA",
          metric: "80%",
          label: "less manual work",
          link: "/cases/financial-institution",
          image: "/images/industries/fin-monitors.jpg"
        }
      ]}
      ctaTitle="Ready to take the re-keying off your staff?"
      ctaDescription="Let's talk about what intelligent automation could do for your revenue cycle."
    />
  );
}

export default HealthcareProvider;
