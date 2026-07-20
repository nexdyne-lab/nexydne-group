import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Wifi, Cog, TrendingUp, DollarSign, Shield, Users } from "lucide-react";

export default function IndustrialConnectedProducts() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Turning an Equipment Maker into a Services Business | Manufacturing Case Study"
      seoDescription="An industrial equipment manufacturer sold machines and lost touch the moment they left the factory. Staying connected to them in the field built a fast-growing recurring-services business at 40% margins."
      canonical="/cases/industrial-connected-products"
      industry="Manufacturing"
      industryLink="/industries/manufacturing"
      title="Building a Recurring Services Business on Machines Already Sold"
      subtitle="An industrial equipment manufacturer earned lumpy, one-off revenue from the machines it sold and lost sight of them the moment they shipped. Staying connected to that installed base turned it into a steady, higher-margin services business."
      heroImage="/images/capabilities/cap-battery-factory.jpg"
      metrics={[
        { value: "2,700", label: "Connected Machines" },
        { value: "85%", label: "Customer Retention" },
        { value: "40%", label: "Service Margin" },
        { value: "60%", label: "Less Customer Downtime" }
      ]}
      clientContextTitle="A Manufacturer That Lost Touch at the Loading Dock"
      clientContextIntro="An industrial equipment manufacturer built heavy machinery — compressors, pumps and turbines — for customers in energy, power and manufacturing. It was good at making and selling that equipment, but its relationship with each customer effectively ended the moment a machine left the loading dock. Revenue came in large, unpredictable lumps as orders were won and lost, and low-cost rivals were steadily squeezing the margin on the hardware itself."
      clientContextBody="Meanwhile the roughly 9,000 of the company's machines already running in the field represented a standing opportunity it had no way to reach. Its customers wrestled with unplanned breakdowns and inefficient operation; the manufacturer had the engineering knowledge to help them, but no means of delivering that expertise to thousands of machines spread across the world. To break out of the boom-and-bust of one-off sales, it needed to become a company that sold not just equipment, but the performance of that equipment over its whole life."
      clientProfile={{
        industry: "Industrial Equipment",
        companySize: "Global Installed Base",
        projectDuration: "24 Months",
        additionalInfo: "~9,000 Machines in the Field",
        additionalLabel: "Installed Base"
      }}
      challengeTitle="From One-Off Sales to Steady Revenue"
      challenges={[
        {
          icon: DollarSign,
          title: "Lumpy, Unpredictable Sales",
          description: "Revenue swung with the equipment cycle, with no steady, recurring stream to smooth the peaks and troughs."
        },
        {
          icon: TrendingUp,
          title: "Margins Under Pressure",
          description: "Low-cost competitors were eroding the profit on the hardware, and the company had little to set itself apart beyond the machine itself."
        },
        {
          icon: Users,
          title: "A Relationship That Ended at the Sale",
          description: "Once a machine shipped, the manufacturer had no ongoing contact with the customer and no view of how the equipment was actually performing."
        },
        {
          icon: Cog,
          title: "Expertise It Couldn't Scale",
          description: "The company's deep engineering know-how was locked in its people and could not reach thousands of machines in the field without a way to deliver it remotely."
        }
      ]}
      approachTitle="Staying Connected to Every Machine in the Field"
      approachIntro="We helped the manufacturer stay in touch with its equipment long after it shipped — reading how each machine was running, warning customers of trouble before it struck, and packaging that insight into services they were glad to pay for."
      steps={[
        {
          step: "01",
          title: "Keeping in Touch With the Equipment",
          description: "We built a way for machines in the field to report back on how they were running, gathering their readings and handling the urgent ones on the spot so a customer could be warned of an immediate problem without delay."
        },
        {
          step: "02",
          title: "Spotting Failures Before They Happen",
          description: "Drawing on the company's own service history, we taught the system to recognize the signs of a developing fault — in vibration, temperature and running conditions — two to four weeks before a machine would have broken down."
        },
        {
          step: "03",
          title: "Giving Customers Their Own Window",
          description: "We gave each customer a simple online view of their equipment's health, how it was performing against similar machines, and what maintenance to plan — so the value of staying connected was plain to see."
        },
        {
          step: "04",
          title: "Selling Outcomes, Not Just Access",
          description: "We built the offer into tiers — from basic monitoring to guaranteed uptime and performance — and priced it on the value delivered rather than the data itself, turning the manufacturer's expertise into a product customers renewed year after year."
        }
      ]}
      resultsTitle="A New Business Alongside the Old One"
      results={[
        {
          icon: DollarSign,
          value: "Recurring",
          label: "Service revenue, year after year",
          detail: "Steady income at around 40% margins, smoothing the equipment cycle"
        },
        {
          icon: Users,
          value: "85%",
          label: "Customer retention",
          detail: "Connected customers rarely move to another supplier"
        },
        {
          icon: Shield,
          value: "60%",
          label: "Less unplanned downtime",
          detail: "For customers on the predictive-maintenance tier"
        },
        {
          icon: Wifi,
          value: "2,700",
          label: "Connected machines",
          detail: "Roughly 30% of the installed base in two years"
        }
      ]}
      quote="We used to be a company that sold machines and moved on. Now we sell what the customer actually wants — equipment that keeps running. That business earns better margins, keeps customers with us far longer, and gives us the steady, predictable revenue we never had when we only sold hardware."
      quoteAuthor="Chief Digital Officer"
      quoteRole="Industrial equipment manufacturer"
      relatedStudies={[
        {
          title: "Lifting Plant Productivity by 40%",
          metric: "40%",
          label: "higher productivity",
          link: "/cases/automotive-smart-factory",
          image: "/images/industries/mfg-robotics.jpg"
        },
        {
          title: "Catching Chip Defects Before They Happen",
          metric: "92%",
          label: "defect prediction accuracy",
          link: "/cases/semiconductor-quality-prediction",
          image: "/images/cases/semiconductor-quality-prediction-hero.jpg"
        }
      ]}
      ctaTitle="Ready to build a business on what you've already sold?"
      ctaDescription="Let's talk about turning your installed base into recurring revenue."
    />
  );
}
