import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Target, TrendingDown, Clock, AlertTriangle, Zap, CheckCircle, TrendingUp } from "lucide-react";

export default function SaasCustomerOnboarding() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="A Bold Strategy Restores a Professional Services Firm to Leadership | Case Study"
      seoDescription="A professional-services firm had lost its leadership position to nimbler rivals. A holistic transformation — simplification, execution discipline, and digitalized delivery — cut delivery cycle time 40% and restored its position."
      canonical="/cases/saas-customer-onboarding"
      industry="Professional Services"
      industryLink="/industries"
      title="How a Professional-Services Firm Won Back Its Leadership Position"
      subtitle="Complexity had made a once-leading firm slow and hard to work with, and nimbler rivals were taking its clients. A holistic transformation — simpler, more disciplined, more digital — restored its edge."
      heroImage="/images/capabilities/cap-conference-data.jpg"
      metrics={[
        { value: "40%", label: "Faster Delivery Cycle" },
        { value: "Simpler", label: "Service Portfolio" },
        { value: "Digitalized", label: "Core Delivery" },
        { value: "Restored", label: "Market Position" }
      ]}
      clientContextTitle="A Leader Made Slow by Its Own Complexity"
      clientContextIntro="A professional-services firm that had long led its category was quietly slipping. Years of adding services, layers, and bespoke ways of working had made it complex to run and slow to deliver — and a wave of nimbler competitors was capitalizing, winning the clients the firm used to consider its own."
      clientContextBody="The firm's problem was not talent or reputation; it was drag. Every engagement navigated a tangle of overlapping services and inconsistent delivery, so work took longer and cost more than it should, and clients felt the friction. Execution had grown undisciplined, with commitments slipping and no shared standard for how work got done. And while competitors digitalized their delivery, the firm still ran on manual effort. Leadership recognized that reclaiming its position required a holistic change — simplifying what it offered, instilling execution discipline, and digitalizing how it delivered — not another incremental initiative."
      clientProfile={{
        industry: "Professional-Services Firm",
        companySize: "~$380M Annual Revenue",
        projectDuration: "10 Months",
        additionalInfo: "Multi-Practice Delivery",
        additionalLabel: "Operating Model"
      }}
      challengeTitle="Why the Firm Was Losing Ground"
      challenges={[
        { icon: Target, title: "Complexity Everywhere", description: "Years of added services and bespoke ways of working made the firm slow to run and slow to deliver." },
        { icon: TrendingDown, title: "Nimbler Rivals Winning", description: "Faster competitors were taking clients the firm had long considered its own." },
        { icon: Clock, title: "Undisciplined Execution", description: "Commitments slipped and no shared standard governed how work got done." },
        { icon: AlertTriangle, title: "Manual Delivery", description: "While rivals digitalized, the firm still delivered through manual effort, adding cost and time." }
      ]}
      approachTitle="Simplify, Discipline, Digitalize"
      approachIntro="We led a holistic transformation — simplifying the service portfolio, instilling execution discipline, and digitalizing core delivery — that cut delivery cycle time 40 percent and restored the firm to a leadership position."
      steps={[
        { step: "01", title: "Simplifying the Portfolio", description: "We rationalized the tangle of overlapping services into a focused portfolio the firm could deliver consistently and profitably." },
        { step: "02", title: "Instilling Execution Discipline", description: "We established shared delivery standards and accountability so commitments were met and work stopped slipping." },
        { step: "03", title: "Digitalizing Core Delivery", description: "We digitalized the manual delivery steps that had made the firm slower than its rivals, removing cost and time from every engagement." },
        { step: "04", title: "Reclaiming the Position", description: "Together the changes cut delivery cycle time 40 percent and made the firm fast and consistent enough to win back the clients it had been losing." }
      ]}
      resultsTitle="Fast and Focused Again"
      results={[
        { icon: Zap, value: "40%", label: "Faster delivery", detail: "Cycle time across engagements" },
        { icon: Target, value: "Focused", label: "Portfolio", detail: "Overlapping services rationalized" },
        { icon: CheckCircle, value: "Disciplined", label: "Execution", detail: "Commitments met to a standard" },
        { icon: TrendingUp, value: "Restored", label: "Position", detail: "Winning back lost clients" }
      ]}
      quote="We had not lost our talent or our name — we had buried both under complexity that made us slow and hard to work with. Simplifying what we offered, holding ourselves to a real delivery standard, and finally digitalizing how we work cut our delivery time by forty percent. We are winning back the clients the fast movers had been taking from us."
      quoteAuthor="Managing Partner"
      quoteRole="Professional-services firm"
      relatedStudies={[
        { title: "How a B2B Distributor Built a Direct-to-Consumer Engine From Scratch", metric: "340%", label: "DTC channel growth", link: "/cases/b2b-distributor-dtc-launch", image: "/images/capabilities/cap-warehouse-robot.jpg" },
        { title: "How a Professional-Services Firm Turned Its Methodology Into Recurring Revenue", metric: "35%", label: "revenue now recurring", link: "/cases/services-saas-productization", image: "/images/capabilities/cap-coder.jpg" }
      ]}
      ctaTitle="Has complexity made your firm slow to deliver?"
      ctaDescription="Let's simplify, instill execution discipline, and digitalize delivery to win back your edge."
    />
  );
}
