import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { TrendingDown, Users, AlertTriangle, Target, TrendingUp, CheckCircle, DollarSign } from "lucide-react";

export default function ServicesSaasProductization() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Services Firm Productizes Its Methodology Into Recurring SaaS Revenue | Case Study"
      seoDescription="A professional-services firm turned its methodology into a software product, shifting from project-based revenue to predictable recurring streams. A validated MVP and packaging built a subscription line reaching 35% of revenue."
      canonical="/cases/services-saas-productization"
      industry="Professional Services"
      industryLink="/industries"
      title="How a Professional-Services Firm Turned Its Methodology Into Recurring Revenue"
      subtitle="The firm's expertise was trapped in one-off projects that reset to zero each quarter. Productizing its methodology into software converted hard-won know-how into predictable, recurring revenue."
      heroImage="/images/cases/services-saas-productization-hero.jpg"
      metrics={[
        { value: "35%", label: "Revenue Now Recurring" },
        { value: "Project→SaaS", label: "Revenue Model Shift" },
        { value: "Validated", label: "MVP Before Build" },
        { value: "Predictable", label: "Revenue Streams" }
      ]}
      clientContextTitle="Expertise That Reset to Zero Every Quarter"
      clientContextIntro="A professional-services firm had built a distinctive methodology that clients valued and paid well for — one engagement at a time. The revenue was entirely project-based, which meant that however strong the reputation, every quarter began near zero and the firm's value lived in people's heads rather than in an asset that compounded."
      clientContextBody="The partners knew their methodology was, in effect, a product delivered by hand. Codifying it into software could turn a linear, headcount-bound business into one with predictable recurring revenue and value that scaled beyond billable hours. But services firms routinely fail at this — they over-build, mistake a services process for a product, and stall. The firm needed to validate that clients would actually buy and use a software version before investing heavily, then package and launch it in a way that shifted the revenue model without abandoning the services relationships that funded it."
      clientProfile={{
        industry: "Professional-Services Firm",
        companySize: "1,800 Employees",
        projectDuration: "9 Months",
        additionalInfo: "Methodology-to-Software",
        additionalLabel: "New Product Line"
      }}
      challengeTitle="Why Project Revenue Was a Ceiling"
      challenges={[
        { icon: TrendingDown, title: "Revenue That Reset", description: "Entirely project-based income meant every quarter started near zero, however strong the brand." },
        { icon: Users, title: "Value Trapped in People", description: "The firm's worth lived in individuals' heads rather than in a compounding asset." },
        { icon: AlertTriangle, title: "The Services-to-Product Trap", description: "Services firms routinely over-build and mistake a delivery process for a product, stalling the shift." },
        { icon: Target, title: "Protecting the Core", description: "The move had to shift the model without abandoning the services relationships that funded it." }
      ]}
      approachTitle="Productize, Validate, Package"
      approachIntro="We validated demand with an MVP before heavy investment, then packaged and launched the software so the firm could shift from project-based revenue toward predictable recurring streams — reaching 35 percent recurring revenue."
      steps={[
        { step: "01", title: "Codifying the Methodology", description: "We translated the firm's hand-delivered methodology into a sharp software concept, drawing the line between the product and the services around it." },
        { step: "02", title: "Validating With an MVP", description: "We shipped an MVP to real clients to prove they would buy and use the software before the firm committed serious capital." },
        { step: "03", title: "Packaging for Recurring Revenue", description: "We designed the packaging and pricing to convert episodic project value into a predictable subscription, avoiding the services-to-product trap." },
        { step: "04", title: "Shifting the Model Without Losing the Core", description: "We launched the line alongside the services business, growing recurring revenue to 35 percent of the total while the relationships that funded it stayed intact." }
      ]}
      resultsTitle="Know-How That Compounds"
      results={[
        { icon: TrendingUp, value: "35%", label: "Revenue recurring", detail: "Shifted from project-based" },
        { icon: CheckCircle, value: "Validated", label: "Before building", detail: "MVP proved real demand" },
        { icon: DollarSign, value: "Predictable", label: "Streams", detail: "No longer resetting each quarter" },
        { icon: Target, value: "Intact", label: "Core services", detail: "Relationships preserved through the shift" }
      ]}
      quote="Our best asset was a methodology that walked out the door every night in our people's heads, and our revenue started from scratch every quarter. Turning that method into software — after proving clients would actually buy it — gave us recurring revenue that now makes up a third of the business, without giving up the client relationships that got us here."
      quoteAuthor="Managing Partner"
      quoteRole="Professional-services firm"
      relatedStudies={[
        { title: "How a Regional Manufacturer Cut Order Processing Time by 78%", metric: "78%", label: "faster order processing", link: "/cases/logistics-shipment-automation", image: "/images/capabilities/cap-robot-factory.jpg" },
        { title: "How a Professional-Services Firm Won Back Its Leadership Position", metric: "40%", label: "faster delivery cycle", link: "/cases/saas-customer-onboarding", image: "/images/cases/saas-customer-onboarding-hero.jpg" }
      ]}
      ctaTitle="Is your expertise trapped in one-off projects?"
      ctaDescription="Let's validate and productize your methodology into predictable recurring revenue."
    />
  );
}
