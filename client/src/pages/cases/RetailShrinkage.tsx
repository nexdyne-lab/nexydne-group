import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { ShieldCheck, DollarSign, BellOff, ScanLine, Receipt, PackageX } from "lucide-react";

export default function RetailShrinkage() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Reducing Retail Shrinkage 25% with Computer Vision | Retail Case Study"
      seoDescription="A national retail chain was losing millions to theft and error. Computer vision and POS anomaly detection cut shrinkage 25% and paid for itself in six months."
      canonical="/case-studies/retail-shrinkage-reduction"
      industry="Retail"
      industryLink="/industries/retail"
      title="How a National Retailer Reduced Shrinkage 25% with AI"
      subtitle="Computer vision and POS anomaly detection combined to identify theft and operational errors in real time — cutting losses without adding a single point of friction for honest shoppers."
      heroImage="/images/capabilities/cap-retail-apparel.jpg"
      metrics={[
        { value: "25%", label: "Less Shrinkage" },
        { value: "3x", label: "First-Year ROI" },
        { value: "60%", label: "Fewer False Alerts" }
      ]}
      clientContextTitle="Millions Lost, and Getting Worse"
      clientContextIntro="A national retail chain was losing millions annually to shrinkage — a mix of shoplifting, employee theft, and administrative error. Traditional measures like EAS tags and security guards were expensive and often ineffective against sophisticated theft or internal collusion."
      clientContextBody="The retailer needed a scalable, automated way to detect suspicious behavior at self-checkout kiosks and throughout the store — without adding friction to the customer experience or alienating the honest majority. Its rules-based system generated too many false alarms and missed the theft that mattered."
      clientProfile={{
        industry: "National Retail Chain",
        companySize: "Multi-Store Footprint",
        projectDuration: "Six-Month Payback",
        additionalInfo: "Vision + POS Analytics",
        additionalLabel: "Platform"
      }}
      challengeTitle="Why Losses Kept Climbing"
      challenges={[
        {
          icon: ScanLine,
          title: "Self-checkout blind spots",
          description: "Ticket-switching and miss-scans at self-checkout went undetected, quietly draining margin store by store."
        },
        {
          icon: Receipt,
          title: "Invisible internal theft",
          description: "Excessive voids, repeat refunds, and off-hours transactions hid internal collusion that rules-based systems couldn't spot."
        },
        {
          icon: BellOff,
          title: "Too many false alarms",
          description: "The legacy rules engine flooded security staff with false positives, so real incidents got lost in the noise."
        },
        {
          icon: PackageX,
          title: "Costly, ineffective measures",
          description: "EAS tags and guards were expensive and no match for sophisticated theft — without stopping the losses."
        }
      ]}
      approachTitle="An Integrated Loss-Prevention Platform"
      approachIntro="NEXDYNE implemented a loss-prevention platform powered by computer vision and transaction analytics — catching what mattered while leaving the honest customer's experience untouched."
      steps={[
        {
          step: "01",
          title: "Watch the bagging area",
          description: "Overhead cameras analyzed items in the bagging area; if a shopper scanned a cheap item but bagged an expensive one — or skipped a scan — the attendant was alerted instantly."
        },
        {
          step: "02",
          title: "Flag suspicious transactions",
          description: "ML models analyzed POS logs to flag anomalies — excessive voids, repeat refunds to the same card, off-hours transactions — surfacing likely internal theft."
        },
        {
          step: "03",
          title: "Detect shelf sweeps",
          description: "Computer vision identified rapid, large-volume removal of high-value items from shelves and triggered real-time alerts to security."
        },
        {
          step: "04",
          title: "Keep the experience frictionless",
          description: "All of it ran behind the scenes — no added checkout friction and no customer-facing security changes required."
        }
      ]}
      resultsTitle="The Payoff"
      results={[
        {
          icon: ShieldCheck,
          value: "25%",
          label: "Less overall shrinkage",
          detail: "Catching theft patterns that had gone undetected"
        },
        {
          icon: DollarSign,
          value: "3x",
          label: "First-year ROI",
          detail: "The system paid for itself in six months"
        },
        {
          icon: BellOff,
          value: "60%",
          label: "Fewer false alerts",
          detail: "So staff spent time on genuine incidents"
        }
      ]}
      quote="The system paid for itself in six months. We're catching theft we didn't even know was happening, and our honest customers appreciate that we can keep prices lower by reducing losses."
      quoteAuthor="Chief Operations Officer"
      quoteRole="National Retail Chain"
      relatedStudies={[
        {
          title: "Automating Regulatory Compliance with Fine-Tuned LLMs",
          metric: "60%",
          label: "fewer false positives",
          link: "/case-studies/financial-compliance-automation",
          image: "/images/industries/fin-monitors.jpg"
        },
        {
          title: "Modeling Climate Risk to Protect Insurance Portfolios",
          metric: "15%",
          label: "better loss ratio",
          link: "/case-studies/insurance-climate-risk",
          image: "/case-insurance-office.f039a4a1.jpg"
        }
      ]}
      ctaTitle="Ready to see the losses you can't see today?"
      ctaDescription="Let's talk about what AI-driven loss prevention could recover from your margin."
    />
  );
}
