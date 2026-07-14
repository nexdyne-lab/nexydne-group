import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { TrendingUp, AlertTriangle, Users, Target, CheckCircle } from "lucide-react";

export default function LogisticsScale() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="How a Logistics Company Scaled 10x in 18 Months | Case Study"
      seoDescription="A logistics company needed to scale tenfold in eighteen months. The technology decisions and organizational changes that supported that rapid growth without breaking operations."
      canonical="/cases/logistics-scale"
      industry="Logistics"
      industryLink="/industries/transportation-logistics"
      title="How a Logistics Company Scaled 10x in 18 Months"
      subtitle="Explosive demand meant scaling the business tenfold in a year and a half — a pace that breaks most companies. The right technology and organizational decisions made it possible."
      heroImage="/images/capabilities/cap-coder.jpg"
      metrics={[
        { value: "10x", label: "Growth in 18 Months" },
        { value: "Scalable", label: "Technology" },
        { value: "Org", label: "Redesigned" },
        { value: "Held", label: "Under Load" }
      ]}
      clientContextTitle="Growth Fast Enough to Break the Company"
      clientContextIntro="A logistics company faced a challenge most would envy and few survive: demand that required it to scale tenfold in eighteen months. Growth that fast puts enormous strain on technology and organization alike, and companies frequently break under it — systems buckle, processes fail, and the culture frays."
      clientContextBody="Scaling 10x in a year and a half is not a bigger version of business as usual; it is a different problem. The technology that worked at one-tenth the volume would collapse under the full load, and an organization structured for a small company cannot coordinate a large one. Doing it without careful decisions risked exactly the failures that kill fast-growing companies — outages, broken operations, and loss of control. The company needed the right technology decisions to build a foundation that scaled and the right organizational changes to grow the team and structure in step with the volume."
      clientProfile={{
        industry: "Logistics Company",
        companySize: "High-Growth Scale-Up",
        projectDuration: "18 Months",
        additionalInfo: "10x Scaling Program",
        additionalLabel: "Growth Enablement"
      }}
      challengeTitle="Why 10x Growth Is So Hard"
      challenges={[
        { icon: TrendingUp, title: "A Pace That Breaks Companies", description: "Scaling tenfold in eighteen months strains technology and organization to the limit." },
        { icon: AlertTriangle, title: "Systems That Would Buckle", description: "Technology built for a tenth of the volume would collapse under full load." },
        { icon: Users, title: "An Org Built for Small", description: "A small-company structure cannot coordinate a large one." },
        { icon: Target, title: "Failure Modes of Fast Growth", description: "Rapid growth risks outages, broken operations, and loss of control." }
      ]}
      approachTitle="Build to Scale, Reorganize to Grow"
      approachIntro="We made the technology decisions to build a foundation that scaled and the organizational changes to grow the team and structure in step with the volume — enabling 10x growth in 18 months without breaking."
      steps={[
        { step: "01", title: "Building Scalable Technology", description: "We made the technology decisions that let the foundation handle ten times the volume." },
        { step: "02", title: "Redesigning the Organization", description: "We evolved the org structure so a growing team could coordinate at the new scale." },
        { step: "03", title: "Growing in Step With Demand", description: "We scaled technology and organization in step with the volume, avoiding the failures of fast growth." },
        { step: "04", title: "Holding Under the Load", description: "We enabled 10x growth in 18 months while operations held rather than broke." }
      ]}
      resultsTitle="Rapid Growth, Operations Intact"
      results={[
        { icon: TrendingUp, value: "10x", label: "Growth", detail: "In eighteen months" },
        { icon: CheckCircle, value: "Scalable", label: "Technology", detail: "Held under full load" },
        { icon: Users, value: "Redesigned", label: "Organization", detail: "Coordinating at scale" },
        { icon: Target, value: "Intact", label: "Operations", detail: "Grew without breaking" }
      ]}
      quote="We had to scale tenfold in eighteen months, and that kind of pace breaks companies — systems fail, operations fall apart, the whole thing can come undone. Making the right technology and organizational decisions ahead of the growth meant we could handle ten times the volume without breaking. We grew that fast and kept the business intact."
      quoteAuthor="Chief Executive Officer"
      quoteRole="Logistics company"
      relatedStudies={[
        { title: "How a Retailer Built a 360° Customer View Across 50+ Touchpoints", metric: "360°", label: "customer view", link: "/cases/retail-omnichannel", image: "/images/capabilities/cap-retail-data.jpg" },
        { title: "How a Wealth Manager Cut Client Onboarding Time by 80%", metric: "80%", label: "faster client onboarding", link: "/cases/wealth-management-onboarding", image: "/images/industries/fin-handshake-city.jpg" }
      ]}
      ctaTitle="Is rapid growth straining your foundation?"
      ctaDescription="Let's make the technology and organizational decisions that let you scale without breaking."
    />
  );
}
