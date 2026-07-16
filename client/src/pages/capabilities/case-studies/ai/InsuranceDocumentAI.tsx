import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Clock, FileStack, ShieldQuestion, TrendingDown, ScanText, Split, UserCheck, DollarSign } from "lucide-react";

export function InsuranceDocumentAI() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Cutting Claims Processing Time 73% With Document AI | Insurance Case Study"
      seoDescription="A 200-employee P&C insurer's adjusters spent 60% of their time on document review, stretching claims to 12 days. Intelligent document processing cut it to 3.2 days and saved $1.2M."
      canonical="/capabilities/artificial-intelligence/case-studies/insurance-document-ai"
      industry="Insurance"
      industryLink="/industries/insurance"
      title="How a Regional Insurer Cut Claims Processing Time 73% With Document AI"
      subtitle="A property & casualty insurer deployed intelligent document processing and AI triage — cutting average claims time from 12 days to 3.2, processing 50,000+ claims a year at 94% accuracy, and saving $1.2M."
      heroImage="/case-insurance-office.f039a4a1.jpg"
      metrics={[
        { value: "73%", label: "Faster Processing" },
        { value: "$1.2M", label: "Annual Savings" },
        { value: "50K+", label: "Claims Automated" },
        { value: "94%", label: "Accuracy Rate" }
      ]}
      clientContextTitle="Adjusters Buried in Paper"
      clientContextIntro="A regional property & casualty insurer with 200 employees processing 50,000+ claims a year had built its reputation on personalized service and fair claims handling. But as it grew, paper-based processes became a liability — adjusters spent 60% of their time on document review rather than customer service and complex decisions."
      clientContextBody="Average claims processing time had stretched to 12 days and satisfaction was declining. Traditional automation proved too rigid for the variety of documents received — everything from handwritten repair estimates to complex medical records. The insurer needed a solution that could handle ambiguity and learn from experienced adjusters rather than replace their judgment."
      clientProfile={{
        industry: "Property & Casualty Insurer",
        companySize: "200 Employees",
        projectDuration: "16-Week Rollout",
        additionalInfo: "50,000+ Claims/Year",
        additionalLabel: "Volume"
      }}
      challengeTitle="Why Claims Took Twelve Days"
      challenges={[
        {
          icon: FileStack,
          title: "60% of time on documents",
          description: "Adjusters reviewed paper instead of serving customers and making complex decisions."
        },
        {
          icon: Clock,
          title: "12-day processing",
          description: "The manual pipeline stretched claims to nearly two weeks, eroding satisfaction."
        },
        {
          icon: ShieldQuestion,
          title: "Document variety defeated automation",
          description: "Handwritten estimates to medical records were too varied for rigid, rules-based tools."
        },
        {
          icon: TrendingDown,
          title: "Low first-touch resolution",
          description: "Just 23% of claims resolved on first touch, dragging out cycle times."
        }
      ]}
      approachTitle="Intelligent Processing That Augments Adjusters"
      approachIntro="NEXDYNE implemented an intelligent document processing platform paired with AI triage — classifying documents, extracting data with confidence scoring, and routing by complexity, while augmenting rather than replacing adjusters."
      steps={[
        {
          step: "01",
          title: "Classify and extract",
          description: "The platform classified incoming documents, extracted key fields with confidence scoring, and requested missing information from policyholders."
        },
        {
          step: "02",
          title: "Triage by risk",
          description: "AI fast-tracked straightforward claims, flagged complex or high-value ones for senior review, and detected fraud and subrogation signals."
        },
        {
          step: "03",
          title: "Augment the adjuster",
          description: "Pre-populated summaries, suggested next steps from similar claims, and automated routine communications freed adjusters for judgment."
        },
        {
          step: "04",
          title: "Pilot, then learn",
          description: "Starting with auto claims, adjusters flagged incorrect extractions, improving model accuracy from 87% to 94% before expanding lines."
        }
      ]}
      resultsTitle="The Payoff"
      results={[
        {
          icon: ScanText,
          value: "3.2 days",
          label: "Average claims time",
          detail: "Down from 12, with per-claim document time from 45 to 8 minutes"
        },
        {
          icon: UserCheck,
          value: "41%",
          label: "First-touch resolution",
          detail: "Up from 23%, with NPS up 18 points"
        },
        {
          icon: DollarSign,
          value: "$1.2M",
          label: "Annual benefits",
          detail: "From labor, fraud detection, and subrogation recovery"
        }
      ]}
      quote="I became an adjuster because I wanted to help people, not shuffle papers. Now I actually have time to talk to policyholders, understand their situations, and find solutions. The AI handles the paperwork so I can do my real job."
      quoteAuthor="Senior Claims Specialist"
      quoteRole="Regional Property & Casualty Insurance Company"
      relatedStudies={[
        {
          title: "AI-Driven Underwriting That Accelerated a Lender 5x",
          metric: "5x",
          label: "application throughput",
          link: "/capabilities/artificial-intelligence/case-studies/lender-ai-underwriting",
          image: "/images/industries/fin-handshake-city.jpg"
        },
        {
          title: "Automating KYC Compliance With RPA",
          metric: "80%",
          label: "less manual work",
          link: "/cases/financial-institution",
          image: "/images/industries/fin-monitors.jpg"
        }
      ]}
      ctaTitle="Ready to free your adjusters from paperwork?"
      ctaDescription="Let's talk about what intelligent document processing could do for your claims operation."
    />
  );
}

export default InsuranceDocumentAI;
