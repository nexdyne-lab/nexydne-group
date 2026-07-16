import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { FileText, Clock, Users, Eye, Layers, DollarSign, Gauge } from "lucide-react";

export default function AccountingFirmCaseStudy() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Cutting Manual Document Processing 70% for an Accounting Firm | Professional Services Case Study"
      seoDescription="A 120-employee accounting firm was drowning in tax documents every season. ProcessFlow AI cut manual processing 70% and returned 3.5x ROI in the first year."
      canonical="/capabilities/ai-technology-consulting/case-study/accounting-firm"
      industry="Professional Services"
      industryLink="/industries"
      title="How a Regional Accounting Firm Cut Manual Document Processing 70%"
      subtitle="A 120-employee accounting firm serving growing companies deployed ProcessFlow AI to streamline tax-document processing and client onboarding — reaching its busiest season prepared instead of overwhelmed."
      heroImage="/images/capabilities/cap-conference-data.jpg"
      metrics={[
        { value: "70%", label: "Less Manual Processing" },
        { value: "8 wks", label: "To Implementation" },
        { value: "3.5x", label: "First-Year ROI" },
        { value: "60%", label: "Less Season Overtime" }
      ]}
      clientContextTitle="A Trusted Firm Outgrowing Its Paperwork"
      clientContextIntro="For two decades, this regional accounting firm had built a reputation for personalized service and deep client relationships. But as its client base grew to more than 800 businesses and high-net-worth individuals, its manual processes couldn't keep pace."
      clientContextBody="Each tax season brought the same crush: mountains of documents arriving by email, mail, and client drop-off. Staff spent hours scanning, naming, and organizing files; partners lost visibility into workload; and clients waited days just to confirm their materials had been received. Leadership recognized the bottleneck wasn't only operational — it was limiting growth and threatening the very client experience the firm was known for."
      clientProfile={{
        industry: "Regional Accounting Firm",
        companySize: "800+ Clients",
        projectDuration: "8 Weeks to Deploy",
        additionalInfo: "120 Employees",
        additionalLabel: "Team Size"
      }}
      challengeTitle="Where the Time Was Going"
      challenges={[
        {
          icon: FileText,
          title: "Documents everywhere, no order",
          description: "Materials arrived through every channel — email, mail, drop-offs — and staff spent hours scanning, naming, and sorting them by hand."
        },
        {
          icon: Clock,
          title: "A 45-minute-per-file drag",
          description: "Processing a single client file took about 45 minutes of manual work, and it stacked up fast during peak season."
        },
        {
          icon: Eye,
          title: "No visibility for partners",
          description: "Leaders couldn't see how work was distributed across the team, so bottlenecks stayed hidden until they became emergencies."
        },
        {
          icon: Users,
          title: "A client experience at risk",
          description: "Clients waited days for confirmation their documents were even received — eroding the responsiveness the firm was built on."
        }
      ]}
      approachTitle="An Intelligent Document Workflow"
      approachIntro="NEXDYNE deployed ProcessFlow AI to turn document handling from a manual, error-prone chore into an intelligent, automated workflow — combining AI document recognition with smart routing and real-time tracking."
      steps={[
        {
          step: "01",
          title: "Recognize any document, from any channel",
          description: "Documents arriving via email, scanned mail, or the new client portal are automatically classified and data-extracted — the system recognizes 200+ types, from W-2s and 1099s to complex partnership agreements."
        },
        {
          step: "02",
          title: "Route work to the right person",
          description: "Each document is automatically directed to the appropriate team member, with the system mapped onto the firm's existing tax, audit, and onboarding workflows."
        },
        {
          step: "03",
          title: "Connect to the firm's core systems",
          description: "ProcessFlow AI integrated with the firm's document-management and accounting software so nothing had to be re-keyed or moved by hand."
        },
        {
          step: "04",
          title: "Roll out in phases",
          description: "Deployment began with tax-document processing, then extended to audit workpapers and client onboarding — proving value before expanding."
        }
      ]}
      resultsTitle="The Payoff"
      results={[
        {
          icon: Gauge,
          value: "70%",
          label: "Less manual processing",
          detail: "Per-file handling fell from 45 minutes to 12"
        },
        {
          icon: Layers,
          value: "94%",
          label: "Auto-categorization accuracy",
          detail: "Eliminating manual sorting"
        },
        {
          icon: Clock,
          value: "40%",
          label: "Faster return turnaround",
          detail: "With season overtime down 60%"
        },
        {
          icon: DollarSign,
          value: "3.5x",
          label: "First-year ROI",
          detail: "As staff shifted to higher-value advisory work"
        }
      ]}
      quote="For the first time in years, we entered tax season feeling prepared rather than anxious. Our team can now focus on what they do best — advising clients — instead of shuffling paper. The ROI was evident within the first quarter."
      quoteAuthor="Managing Partner"
      quoteRole="Regional Accounting Firm"
      relatedStudies={[
        {
          title: "Lifting Member Satisfaction 45% at a Credit Union",
          metric: "45%",
          label: "higher satisfaction",
          link: "/capabilities/ai-technology-consulting/case-study/credit-union",
          image: "/images/industries/fin-monitors.jpg"
        },
        {
          title: "Cutting Patient Wait Times 35% Across a Practice Network",
          metric: "35%",
          label: "shorter wait times",
          link: "/capabilities/ai-technology-consulting/case-study/medical-practice",
          image: "/case-medical-collaboration.9602cc8c.jpg"
        }
      ]}
      ctaTitle="Ready to take the paperwork off your team's plate?"
      ctaDescription="Let's talk about what intelligent document processing could return in your busiest season."
    />
  );
}
