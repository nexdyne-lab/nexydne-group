import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Target, Users, TrendingDown, AlertTriangle, DollarSign, CheckCircle } from "lucide-react";

export default function BankOperatingModelTransformation() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Global Bank Reorganizes Around Customer Journeys, Captures $400M | Enterprise Transformation Case Study"
      seoDescription="A global bank's siloed functional structure blocked value. A multi-year operating-model transformation reshaped product, technology, and operations into journey-aligned teams and captured $400M in annual value."
      canonical="/cases/bank-operating-model-transformation"
      industry="Financial Services"
      industryLink="/industries/financial-services"
      title="How a Global Bank Captured $400M in Value by Reorganizing Around Customer Journeys"
      subtitle="A traditional functional structure meant no one owned the customer's end-to-end experience, and value fell through the cracks between silos. Reorganizing around journeys captured it."
      heroImage="/images/industries/fin-monitors.jpg"
      metrics={[
        { value: "$400M", label: "Annual Value" },
        { value: "Journey", label: "Aligned Teams" },
        { value: "Multi-Year", label: "Transformation" },
        { value: "Product+Tech+Ops", label: "Reshaped" }
      ]}
      clientContextTitle="A Structure the Customer Fell Through"
      clientContextIntro="A global bank was organized the traditional way — by function. Product, technology, and operations each ran as its own vertical, optimized for its own metrics. The customer, whose experience cut horizontally across all of them, was owned by no one, and enormous value fell through the gaps between the silos."
      clientContextBody="Functional silos are efficient locally and costly globally. A customer trying to open an account or resolve an issue crossed several functions, each handing off to the next, and the friction, delay, and cost of those hand-offs added up to value the bank was structurally unable to capture. No single owner was accountable for the end-to-end journey, so it could not be improved as a whole. The legacy structure had reached its ceiling. The bank needed a multi-year operating-model transformation to reorganize product, technology, and operations into teams aligned around customer journeys — putting an owner on each journey and unlocking the value the silos had trapped."
      clientProfile={{
        industry: "Global Bank",
        companySize: "Large Financial Institution",
        projectDuration: "Multi-Year Program",
        additionalInfo: "Operating-Model Transformation",
        additionalLabel: "Enterprise Scope"
      }}
      challengeTitle="Why Value Fell Through the Cracks"
      challenges={[
        { icon: Target, title: "Functional Silos", description: "Product, technology, and operations each optimized for themselves, not the customer." },
        { icon: Users, title: "No Journey Owner", description: "The customer's end-to-end experience was owned by no single function." },
        { icon: TrendingDown, title: "Value Lost in Hand-Offs", description: "Friction and delay between silos added up to value the bank could not capture." },
        { icon: AlertTriangle, title: "A Structure at Its Ceiling", description: "The legacy functional model could not reach the value trapped across it." }
      ]}
      approachTitle="Reorganize Around Journeys"
      approachIntro="We led a multi-year operating-model transformation that reshaped product, technology, and operations into journey-aligned teams — putting an owner on each customer journey and capturing $400M in annual value."
      steps={[
        { step: "01", title: "Mapping the Customer Journeys", description: "We defined the end-to-end customer journeys that cut across the bank's functional silos." },
        { step: "02", title: "Designing Journey-Aligned Teams", description: "We reshaped product, technology, and operations into cross-functional teams organized around those journeys." },
        { step: "03", title: "Putting Owners on Journeys", description: "We gave each journey a clear owner accountable for the end-to-end experience and its value." },
        { step: "04", title: "Capturing the Trapped Value", description: "We executed the transformation over multiple years, unlocking $400M in annual value the silos had blocked." }
      ]}
      resultsTitle="Value the Silos Could Never Reach"
      results={[
        { icon: DollarSign, value: "$400M", label: "Annual value", detail: "Captured from the transformation" },
        { icon: Users, value: "Journey", label: "Aligned teams", detail: "Cross-functional ownership" },
        { icon: CheckCircle, value: "Owned", label: "Every journey", detail: "End-to-end accountability" },
        { icon: Target, value: "Reshaped", label: "Operating model", detail: "Product, tech, and ops" }
      ]}
      quote="We were organized by function, and our customers experienced us horizontally — so nobody owned their journey and value quietly leaked through every hand-off. Reorganizing product, technology, and operations around the customer's journeys, with a real owner on each, unlocked four hundred million dollars a year our old structure simply could not reach."
      quoteAuthor="Chief Operating Officer"
      quoteRole="Global bank"
      relatedStudies={[
        { title: "How an Industrial Holding Company Integrated Three Acquisitions and Beat Its Synergy Targets", metric: "110%", label: "of synergy targets captured", link: "/cases/industrial-ma-integration", image: "/images/capabilities/cap-battery-factory.jpg" },
        { title: "How a Health-Tech Startup Scaled From 10K to 2M Users on a Single Codebase", metric: "10K → 2M", label: "users on one codebase", link: "/cases/healthtech-react-native", image: "/images/cases/healthtech-react-native-hero.jpg" }
      ]}
      ctaTitle="Is a functional structure trapping value between silos?"
      ctaDescription="Let's reorganize around customer journeys and put an owner on the end-to-end experience."
    />
  );
}
