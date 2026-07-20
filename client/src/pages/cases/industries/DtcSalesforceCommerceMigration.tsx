import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { AlertTriangle, TrendingDown, Target, Users, CheckCircle, TrendingUp } from "lucide-react";

export default function DtcSalesforceCommerceMigration() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Salesforce Commerce Migration: Zero-Incident Launch Weekend | DTC Case Study"
      seoDescription="A DTC brand migrated off an unmaintainable custom platform to Salesforce Commerce. End-to-end ownership of selection, integration, and cutover delivered a zero-incident launch weekend with organic traffic held within 2%."
      canonical="/cases/dtc-salesforce-commerce-migration"
      industry="Direct-to-Consumer"
      industryLink="/industries/retail"
      title="How a DTC Brand Replatformed to Salesforce Commerce Without a Single Launch-Weekend Incident"
      subtitle="The custom platform had become unmaintainable, but a botched migration can undo years of SEO and customer trust overnight. This cutover went live clean."
      heroImage="/images/capabilities/cap-retail-data.jpg"
      metrics={[
        { value: "Zero", label: "Customer-Visible Incidents" },
        { value: "±2%", label: "Organic Traffic Held" },
        { value: "30 Days", label: "To In-House Operation" },
        { value: "OMS+CDP", label: "Integrated Cleanly" }
      ]}
      clientContextTitle="Escaping an Unmaintainable Platform"
      clientContextIntro="A direct-to-consumer brand was running on a custom commerce platform that had quietly become unmaintainable — expensive to change, fragile under load, and dependent on knowledge that was walking out the door. The brand needed to migrate to Salesforce Commerce, and it needed the move to be invisible to customers."
      clientContextBody="Replatforming is where good brands lose ground. A rushed cutover can drop the organic search rankings built over years, break the integrations that feed the order-management and customer-data systems, and greet launch weekend with a wave of customer-visible failures. The brand could not afford any of that. It needed disciplined ownership of the whole migration — requirements, platform selection, integration architecture across OMS and CDP, and the cutover plan — plus a redirect strategy engineered to protect the organic traffic that drove the business."
      clientProfile={{
        industry: "Direct-to-Consumer Brand",
        companySize: "2M+ Annual Orders",
        projectDuration: "6 Months",
        additionalInfo: "Custom-to-Salesforce Migration",
        additionalLabel: "Replatform"
      }}
      challengeTitle="Why the Migration Was High-Stakes"
      challenges={[
        { icon: AlertTriangle, title: "An Unmaintainable Platform", description: "The custom stack was fragile, costly to change, and dependent on departing knowledge." },
        { icon: TrendingDown, title: "SEO at Risk", description: "A careless cutover could drop the organic rankings built over years of investment." },
        { icon: Target, title: "Fragile Integrations", description: "The move had to preserve clean connections to order management and the customer-data platform." },
        { icon: Users, title: "Launch-Weekend Exposure", description: "A bad go-live would hit customers directly, eroding trust at the worst moment." }
      ]}
      approachTitle="Own the Whole Migration"
      approachIntro="We owned the requirements, the selection, the integration architecture across OMS and CDP, and the cutover plan — delivering a launch weekend with zero customer-visible incidents, organic traffic within two percent of baseline, and operations in-house within thirty days."
      steps={[
        { step: "01", title: "Owning Requirements and Selection", description: "We defined the requirements and led the platform decision, landing on Salesforce Commerce as the right long-term home." },
        { step: "02", title: "Architecting the Integrations", description: "We designed clean integration architecture across the order-management and customer-data systems so nothing broke at the seams." },
        { step: "03", title: "Engineering the Cutover and Redirects", description: "We built a disciplined cutover plan and a redirect strategy engineered to preserve organic search rankings through the transition." },
        { step: "04", title: "Handing Over to the In-House Team", description: "We transferred operations to the brand's own team within thirty days, leaving it self-sufficient on the new platform." }
      ]}
      resultsTitle="A Migration Customers Never Felt"
      results={[
        { icon: CheckCircle, value: "Zero", label: "Visible incidents", detail: "Across the launch weekend" },
        { icon: TrendingUp, value: "±2%", label: "Organic traffic", detail: "Held within two percent of baseline" },
        { icon: Users, value: "30 Days", label: "To in-house ops", detail: "Team self-sufficient on the new stack" },
        { icon: Target, value: "Clean", label: "OMS & CDP", detail: "Integrations preserved" }
      ]}
      quote="Replatforming is where brands quietly lose their search rankings and their launch weekend blows up in front of customers. Ours did neither. Owning the whole migration end to end meant we went live with zero customer-visible issues, kept our organic traffic essentially flat, and had our own team running it within a month."
      quoteAuthor="Head of Ecommerce"
      quoteRole="Direct-to-consumer brand"
      relatedStudies={[
        { title: "How an Enterprise SaaS Operator Lifted Win Rate 14 Points by Selling to Fewer Segments", metric: "+14 pts", label: "win rate on focus segment", link: "/cases/enterprise-saas-gtm-rebuild", image: "/images/capabilities/cap-conference-data.jpg" },
        { title: "How an Industrial Technology Leader Stopped Leaking Deals at the Sales Handoff", metric: "31%", label: "less handoff leakage", link: "/cases/industrial-tech-gtm-alignment", image: "/images/industries/mfg-robot-arm.jpg" }
      ]}
      ctaTitle="Facing a high-stakes replatform?"
      ctaDescription="Let's own the migration end to end so customers never feel the switch and your rankings hold."
    />
  );
}
