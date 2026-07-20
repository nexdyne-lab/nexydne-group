import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Database, Swords, HelpCircle, Boxes, Map, MessagesSquare, FlaskConical, DollarSign } from "lucide-react";

export function ManufacturerDataMonetization() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Finding a $4M Revenue Opportunity Through Data Monetization | Manufacturing Case Study"
      seoDescription="A $200M manufacturer collected telemetry from 8,000 machines but used it only for warranty claims. A 6-week data-strategy sprint mapped a $4M predictive-maintenance subscription opportunity."
      canonical="/cases/manufacturer-data-monetization"
      industry="Manufacturing"
      industryLink="/industries/manufacturing"
      title="How a Manufacturer Found a $4M Revenue Opportunity in Its Own Data"
      subtitle="A data-strategy engagement mapped the equipment-telemetry landscape and built a roadmap to launch a predictive-maintenance subscription service — a $4M recurring-revenue opportunity approved on the spot."
      heroImage="/images/industries/mfg-robotics.jpg"
      metrics={[
        { value: "$4M", label: "Projected Annual Recurring Revenue" },
        { value: "12", label: "Use Cases Prioritized" },
        { value: "6 wks", label: "Kickoff to Executive Approval" }
      ]}
      clientContextTitle="Data Sitting Idle"
      clientContextIntro="A growing industrial-equipment manufacturer with $200M in revenue collected massive telemetry from 8,000 machines at customer sites — vibration, temperature, operating hours, fault codes. The data sat in S3 buckets, used only for warranty-claim investigations when equipment failed."
      clientContextBody="The CEO watched competitors launch equipment-as-a-service offerings with predictive maintenance, and customers were asking if the manufacturer could predict failures before they happened. The product team proposed building a platform but had no data strategy — no clarity on what data existed, its condition, or which use cases would generate the most value. It needed a strategy to map the landscape, identify monetization opportunities, prioritize by ROI, and produce an executable roadmap."
      clientProfile={{
        industry: "Industrial Equipment Manufacturer",
        companySize: "$200M Revenue",
        projectDuration: "6-Week Sprint",
        additionalInfo: "8,000 Machines",
        additionalLabel: "Telemetry"
      }}
      challengeTitle="Why the Data Wasn't Working"
      challenges={[
        {
          icon: Database,
          title: "Telemetry used only for warranty",
          description: "Data from 8,000 machines sat in S3, tapped only when equipment failed."
        },
        {
          icon: Swords,
          title: "Competitors moving to EaaS",
          description: "Rivals were launching equipment-as-a-service with predictive maintenance."
        },
        {
          icon: HelpCircle,
          title: "No data strategy",
          description: "The product team lacked clarity on what data existed, its quality, or its value."
        },
        {
          icon: Boxes,
          title: "Unprioritized use cases",
          description: "No framework existed to sequence opportunities by ROI and feasibility."
        }
      ]}
      approachTitle="A Data Strategy Sprint With Proof"
      approachIntro="NEXDYNE ran a 6-week Data Strategy Sprint that inventoried data assets, interviewed stakeholders, identified 12 use cases, and prioritized them by revenue and complexity — proving it with a working model."
      steps={[
        {
          step: "01",
          title: "Map the data landscape",
          description: "Weeks 1–2 cataloged telemetry, warranty claims, technician notes, contracts, and parts inventory, assessing quality and gaps."
        },
        {
          step: "02",
          title: "Interview the business",
          description: "Week 3's 15 stakeholder interviews surfaced customer pain points and lost revenue from unplanned downtime."
        },
        {
          step: "03",
          title: "Score the use cases",
          description: "Weeks 4–5 identified 12 opportunities and ranked predictive maintenance first at $4M ARR potential with existing telemetry."
        },
        {
          step: "04",
          title: "Prove it works",
          description: "A proof-of-concept model predicted bearing failures 2 weeks out at 82% accuracy, making the roadmap executable, not theoretical."
        }
      ]}
      resultsTitle="The Payoff"
      results={[
        {
          icon: DollarSign,
          value: "$4M",
          label: "Projected ARR",
          detail: "From a predictive-maintenance subscription at $500/machine/month"
        },
        {
          icon: FlaskConical,
          value: "$1.2M",
          label: "Investment approved on the spot",
          detail: "After the CEO reviewed the working proof-of-concept"
        },
        {
          icon: MessagesSquare,
          value: "95%",
          label: "Service-contract renewals",
          detail: "vs. 78% industry average, launching 9 months ahead of rivals"
        }
      ]}
      quote="Before the strategy sprint, we knew we had valuable telemetry data but no idea how to monetize it. NEXDYNE mapped our entire data landscape, interviewed our teams, and identified 12 potential use cases in 6 weeks. The prioritization framework was eye-opening — predictive maintenance had 3x the revenue potential of other ideas. The proof-of-concept they built during the engagement proved the roadmap worked. We approved the $1.2M investment on the spot."
      quoteAuthor="David Martinez"
      quoteRole="Chief Product Officer"
      relatedStudies={[
        {
          title: "Building an IoT Sensor Platform for Predictive Maintenance",
          metric: "30%",
          label: "less downtime",
          link: "/cases/manufacturing-iot-pipeline",
          image: "/images/industries/mfg-robotics.jpg"
        },
        {
          title: "Prioritizing a $12M Analytics Backlog in 6 Weeks",
          metric: "$13.3M",
          label: "prioritized value",
          link: "/cases/insurance-analytics-backlog",
          image: "/images/cases/insurance-analytics-backlog-hero.jpg"
        }
      ]}
      ctaTitle="Ready to monetize your data?"
      ctaDescription="Let's talk about what a data-strategy sprint could uncover in the data you already collect."
    />
  );
}

export default ManufacturerDataMonetization;
