import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Clock, Building2, Cog, DollarSign, Target, Shield } from "lucide-react";

export default function PECarveoutExecution() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Standing Up a Carved-Out Distributor in Six Months | Private Equity Case Study"
      seoDescription="A private equity fund bought a distribution business out of a larger parent and had to make it independent fast. A disciplined separation stood it up — systems and all — in six months."
      canonical="/cases/pe-distribution-digital"
      industry="Private Equity"
      industryLink="/industries/private-equity"
      title="How a Fund Made a Carved-Out Distributor Independent in 6 Months"
      subtitle="A private equity fund bought a distribution business that was deeply tangled up in its former parent. Standing it up on its own — new systems included — quickly, cleanly and without disrupting customers was the whole game."
      heroImage="/images/cases/pe-distribution-digital-hero.jpg"
      metrics={[
        { value: "6 Months", label: "To Standalone" },
        { value: "$7M", label: "Separation Costs Avoided" },
        { value: "Zero", label: "Customer Disruption" },
        { value: "100%", label: "Off Parent Systems" }
      ]}
      clientContextTitle="A Business Still Wired Into Its Old Owner"
      clientContextIntro="A private equity fund bought a distribution business — around $220 million in revenue, roughly 900 employees, serving customers from a network of regional depots — out of a much larger parent. On paper it was a clean sale. In practice the business was still wired into the parent for almost everything: its order and warehouse systems, its finance and HR, even parts of its supply chain."
      clientContextBody="A temporary support arrangement let the parent keep the lights on after close, but it cost around $600,000 a month and, more importantly, held up the value the fund had bought the business to create. Separations like this often run eighteen months or more. The fund wanted to move faster — off the parent's systems and standing on its own — without a single customer ever feeling the change."
      clientProfile={{
        industry: "Distribution (PE Carve-Out)",
        companySize: "~$220M Carve-Out Revenue",
        projectDuration: "6 Months",
        additionalInfo: "~900 Employees",
        additionalLabel: "Carved-Out Business"
      }}
      challengeTitle="Separation Against the Clock"
      challenges={[
        {
          icon: Clock,
          title: "A Meter Running",
          description: "Roughly $600,000 a month for temporary parent support — every month of delay eroding the return."
        },
        {
          icon: Cog,
          title: "Tangled at Every Level",
          description: "Shared order, warehouse, finance and HR systems meant almost nothing about the business was cleanly its own."
        },
        {
          icon: Shield,
          title: "Customers Come First",
          description: "Deliveries and service had to continue without a hitch throughout — the separation could not be felt on the front line."
        },
        {
          icon: Building2,
          title: "No Systems of Its Own",
          description: "The business had almost no independent digital backbone and had to build one while it kept trading."
        }
      ]}
      approachTitle="A Fast, Clean Separation"
      approachIntro="We led a separation built for speed and safety — running the workstreams in parallel, standing up a modern set of systems the business would own outright, and keeping a relentless focus on the customer so that nothing on the front line ever wavered."
      steps={[
        {
          step: "01",
          title: "Ready From Day One",
          description: "We put the essentials in place before close — legal entity, banking, insurance and regulatory basics — so the business could trade entirely on its own from the moment the deal closed, not weeks later."
        },
        {
          step: "02",
          title: "Its Own Digital Backbone",
          description: "Rather than untangle old shared platforms, we stood up fresh, cloud-based order, warehouse and finance systems the business would own. Customer-facing systems came first, back-office second, so service never depended on the parent."
        },
        {
          step: "03",
          title: "Building the Functions to Run Alone",
          description: "We built standalone finance, HR and procurement through a mix of new hires, transfers from the parent and selective outsourcing — enough capability to operate independently, without over-building for a business this size."
        },
        {
          step: "04",
          title: "Off the Parent, Service by Service",
          description: "We ran a disciplined exit from parent support with clear milestones, weekly tracking and a firm date for handing each service back — aggressive timelines, but ones the team could actually hit."
        }
      ]}
      resultsTitle="Independent, Ahead of Schedule"
      results={[
        {
          icon: Clock,
          value: "6 Months",
          label: "To standalone operations",
          detail: "Against a typical eighteen to twenty-four"
        },
        {
          icon: DollarSign,
          value: "$7M",
          label: "Separation costs avoided",
          detail: "From an early exit off parent support"
        },
        {
          icon: Shield,
          value: "Zero",
          label: "Customer disruption",
          detail: "Deliveries and service uninterrupted throughout"
        },
        {
          icon: Target,
          value: "100%",
          label: "Off parent systems",
          detail: "Full independence on its own digital backbone"
        }
      ]}
      quote="The business we bought couldn't stand on its own — it ran on its old owner's systems and back office. In six months it had its own, from the warehouse floor to the finance ledger, and customers never felt a thing. Getting off parent support early meant we started building value almost a year sooner than these deals usually allow."
      quoteAuthor="Operating Partner"
      quoteRole="Private equity fund"
      relatedStudies={[
        {
          title: "Adding $18M in EBITDA at an Industrial Manufacturer",
          metric: "$18M",
          label: "added EBITDA",
          link: "/cases/pe-industrial-transformation",
          image: "/images/cases/pe-industrial-transformation-hero.jpg"
        },
        {
          title: "Cutting Healthcare Diligence Time by 40%",
          metric: "40%",
          label: "faster diligence",
          link: "/cases/pe-healthcare-diligence",
          image: "/images/cases/pe-healthcare-diligence-hero.jpg"
        }
      ]}
      ctaTitle="Ready to separate cleanly and fast?"
      ctaDescription="Let's talk about standing a carved-out business on its own without disrupting customers."
    />
  );
}
