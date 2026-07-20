import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { TrendingUp, Users, AlertTriangle, Clock, CheckCircle, Zap, Target } from "lucide-react";

export default function EcommerceOrderFulfillmentFeature() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="E-Commerce Order Fulfillment Automation | Case Study"
      seoDescription="A multi-channel retailer needed to handle 12,000+ daily orders without fulfillment breaking down. Order fulfillment automation let it scale volume reliably across channels."
      canonical="/case-studies/ecommerce-order-fulfillment"
      industry="Retail"
      industryLink="/industries/retail"
      title="How a Multi-Channel Retailer Scaled to 12,000+ Daily Orders"
      subtitle="Order volume was outgrowing a fulfillment process that depended on manual coordination. Automation let the retailer handle thousands of daily orders across channels reliably."
      heroImage="/images/industries/retail-shelves.jpg"
      metrics={[
        { value: "12,000+", label: "Daily Orders" },
        { value: "Multi-Channel", label: "Fulfillment" },
        { value: "Automated", label: "Coordination" },
        { value: "Reliable", label: "At Volume" }
      ]}
      clientContextTitle="Volume Outgrowing the Process"
      clientContextIntro="A multi-channel retailer's order volume was climbing toward 12,000 orders a day across web, marketplace, and store channels — and its fulfillment process, which depended heavily on manual coordination, was starting to buckle under the load."
      clientContextBody="Manual fulfillment coordination scales poorly. As volume grew, the seams between channels, warehouses, and carriers required more and more human effort to hold together, and the risk of delays, mis-ships, and bottlenecks grew with every order. The retailer could not simply add staff fast enough to keep pace, and errors at volume damaged the customer experience across every channel. It needed order fulfillment automation that coordinated the whole flow — across channels, warehouses, and carriers — so it could handle thousands of daily orders reliably without the process breaking down."
      clientProfile={{
        industry: "Multi-Channel Retailer",
        companySize: "~90 Stores",
        projectDuration: "6 Months",
        additionalInfo: "Fulfillment Automation",
        additionalLabel: "Operations"
      }}
      challengeTitle="Why Fulfillment Was Buckling"
      challenges={[
        { icon: TrendingUp, title: "Volume Climbing Fast", description: "Orders were approaching 12,000 a day across multiple channels." },
        { icon: Users, title: "Manual Coordination", description: "Fulfillment depended on human effort to hold the seams together." },
        { icon: AlertTriangle, title: "Rising Risk at Scale", description: "Delays, mis-ships, and bottlenecks grew with every additional order." },
        { icon: Clock, title: "Can't Staff Fast Enough", description: "Adding people could not keep pace with the volume growth." }
      ]}
      approachTitle="Automate Fulfillment Across Channels"
      approachIntro="We built order fulfillment automation that coordinated the whole flow across channels, warehouses, and carriers — letting the retailer handle 12,000+ daily orders reliably."
      steps={[
        { step: "01", title: "Mapping the Fulfillment Flow", description: "We mapped the end-to-end flow across channels, warehouses, and carriers to find the manual seams." },
        { step: "02", title: "Automating the Coordination", description: "We automated the coordination that had depended on human effort, removing the fragile seams." },
        { step: "03", title: "Scaling Reliably", description: "We built the automation to handle rising volume without the delays and mis-ships that plagued manual handling." },
        { step: "04", title: "Handling 12,000+ a Day", description: "We enabled the retailer to process over 12,000 orders daily across channels, reliably." }
      ]}
      resultsTitle="Volume Handled Without Breaking"
      results={[
        { icon: TrendingUp, value: "12,000+", label: "Daily orders", detail: "Handled reliably" },
        { icon: CheckCircle, value: "Multi-Channel", label: "Coordinated", detail: "Web, marketplace, store" },
        { icon: Zap, value: "Automated", label: "Fulfillment", detail: "No manual seams" },
        { icon: Target, value: "Reliable", label: "At scale", detail: "Fewer delays and mis-ships" }
      ]}
      quote="Our order volume was heading past twelve thousand a day, and a fulfillment process held together by manual coordination was starting to crack. Automating the whole flow across our channels, warehouses, and carriers let us handle that volume reliably. We scaled the business without the fulfillment breaking — which is exactly what we could not do before."
      quoteAuthor="VP of Fulfillment"
      quoteRole="Multi-channel retailer"
      relatedStudies={[
        { title: "How NexDyne Built Its Digital Product Arm From Five People to Hundreds", metric: "5 → hundreds", label: "team scaled", link: "/case-studies/saas-customer-onboarding", image: "/images/capabilities/cap-conference-data.jpg" },
        { title: "How We Helped Career Connect Reach 15,000 Students", metric: "15,000", label: "students enrolled and inspired", link: "/case-studies/career-connect-education", image: "/images/capabilities/cap-coder.jpg" }
      ]}
      ctaTitle="Is order volume outgrowing your fulfillment?"
      ctaDescription="Let's automate coordination so you scale volume reliably across channels."
    />
  );
}
