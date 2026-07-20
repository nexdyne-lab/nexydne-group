import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Clock, DollarSign, Target, Users, Zap, CheckCircle } from "lucide-react";

export default function InsuranceModernization() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Legacy System Modernization for Insurance Carrier | Technology Case Study"
      seoDescription="A 175-employee specialty insurer's aging core systems were slow and costly. A modernization improved processing speed 70% and cut annual maintenance cost 40%."
      canonical="/capabilities/technology/case-studies/insurance-modernization"
      industry="Insurance"
      industryLink="/industries/insurance"
      title="How a Specialty Insurer Sped Processing 70% and Cut Maintenance Cost 40%"
      subtitle="Aging core systems made processing slow and maintenance expensive. A careful modernization delivered both speed and hard savings."
      heroImage="/images/industries/fin-handshake-city.jpg"
      metrics={[
        { value: "70%", label: "Faster Processing" },
        { value: "40%", label: "Lower Maintenance Cost" },
        { value: "Modernized", label: "Core Systems" },
        { value: "Zero", label: "Business Disruption" }
      ]}
      clientContextTitle="Aging Core Systems, Rising Costs"
      clientContextIntro="A 175-employee specialty insurance company ran its business on aging core systems that had become slow to operate and expensive to maintain. Processing took longer than it should, and a growing share of the technology budget went simply to keeping the old systems running."
      clientContextBody="The core systems were caught in the familiar legacy trap: too central to replace casually, too old to run efficiently. Processing speed suffered because the systems were dated, and maintenance costs climbed as specialized expertise grew scarce and the systems required more effort to keep alive. The insurer needed to modernize the core carefully — capturing meaningful processing-speed gains and reducing the maintenance burden — without disrupting a business that ran on those very systems."
      clientProfile={{
        industry: "Specialty Insurer",
        companySize: "~175 Employees",
        projectDuration: "10 Months",
        additionalInfo: "Core System Modernization",
        additionalLabel: "Insurance Platform"
      }}
      challengeTitle="Why the Core Was a Burden"
      challenges={[
        { icon: Clock, title: "Slow Processing", description: "Dated core systems made processing take longer than it should." },
        { icon: DollarSign, title: "Expensive to Maintain", description: "A growing share of the technology budget went to keeping old systems running." },
        { icon: Target, title: "The Legacy Trap", description: "The core was too central to replace casually, too old to run efficiently." },
        { icon: Users, title: "Scarce Expertise", description: "Specialized skills to maintain the systems were increasingly hard to find." }
      ]}
      approachTitle="Modernize the Core, Carefully"
      approachIntro="We modernized the insurer's core systems carefully, improving processing speed 70 percent and cutting maintenance cost 40 percent — without disrupting the business."
      steps={[
        { step: "01", title: "Planning a Safe Modernization", description: "We planned the modernization to protect a business that ran on the very systems being updated." },
        { step: "02", title: "Modernizing the Core", description: "We updated the core systems to run efficiently and process far faster than the legacy setup." },
        { step: "03", title: "Cutting the Maintenance Burden", description: "We reduced the ongoing maintenance cost and dependence on scarce specialized expertise." },
        { step: "04", title: "Realizing the Savings", description: "We captured a 40 percent reduction in annual maintenance cost alongside a 70 percent processing-speed improvement." }
      ]}
      resultsTitle="Faster and Cheaper to Run"
      results={[
        { icon: Zap, value: "70%", label: "Faster processing", detail: "On core operations" },
        { icon: DollarSign, value: "40%", label: "Lower maintenance cost", detail: "Year after year" },
        { icon: CheckCircle, value: "Modernized", label: "Core", detail: "Efficient again" },
        { icon: Target, value: "No", label: "Disruption", detail: "Business ran throughout" }
      ]}
      quote="Our core systems were slow and were eating our budget just to stay alive, but they ran the business so we could not touch them lightly. A careful modernization sped our processing seventy percent and cut our maintenance cost by forty percent — without disrupting a single day of operations. We finally got out of the legacy trap."
      quoteAuthor="Chief Information Officer"
      quoteRole="Specialty insurer"
      relatedStudies={[
        { title: "How a Retail Chain Cut Stockouts 25% With Real-Time Inventory Visibility", metric: "25%", label: "fewer stockouts", link: "/capabilities/technology/case-studies/retail-data-platform", image: "/images/capabilities/cap-retail-data.jpg" },
        { title: "How a Global Retailer Scaled E-Commerce Revenue 40% With AI Personalization", metric: "40%", label: "e-commerce revenue growth", link: "/case-studies/global-retailer-ai-personalization", image: "/images/capabilities/cap-retail-apparel.jpg" }
      ]}
      ctaTitle="Are aging core systems slow and costly?"
      ctaDescription="Let's modernize carefully for speed and savings, without disrupting the business."
    />
  );
}
