import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Clock, TrendingDown, Users, Target, TrendingUp, CheckCircle } from "lucide-react";

export default function B2bEcommerceLaunch() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="B2B Ecommerce Launch Moves 31% of Order Entry to Self-Service | Distribution Case Study"
      seoDescription="A B2B industrial distributor's inside-sales team keyed 4,200 transactional orders a month, mostly re-orders. A self-service ecommerce channel migrated 31% of order entry in a year, freeing sales for higher-value accounts."
      canonical="/cases/b2b-ecommerce-launch"
      industry="B2B Industrial"
      industryLink="/industries/manufacturing"
      title="How a B2B Distributor Moved a Third of Its Order Entry Off the Sales Desk"
      subtitle="Inside sales was keying thousands of routine re-orders a month that never needed a human. A self-service channel for the recurring catalog freed the team for the accounts that did."
      heroImage="/images/cases/b2b-ecommerce-launch-hero.jpg"
      metrics={[
        { value: "31%", label: "Of Order Entry Migrated" },
        { value: "4,200", label: "Monthly Orders Keyed" },
        { value: "12 Mo", label: "To the Shift" },
        { value: "Higher", label: "Value Accounts Freed" }
      ]}
      clientContextTitle="Salespeople Doing Data Entry"
      clientContextIntro="A B2B industrial distributor's inside-sales team was processing 4,200 transactional orders a month, and most of them were routine re-orders of the same catalog items to the same accounts. Skilled salespeople were spending their days keying orders that did not need a conversation, let alone a negotiation."
      clientContextBody="The cost was opportunity, not just efficiency. Every hour spent typing a predictable re-order was an hour not spent on the larger, more complex accounts where a salesperson's judgment actually grew the business. Customers, for their part, would happily have placed those re-orders themselves if given a simple way to do it. The distributor needed a self-service channel for the recurring catalog and, crucially, a plan to move customers onto it without disrupting the relationships inside sales had built."
      clientProfile={{
        industry: "B2B Industrial Distributor",
        companySize: "~$470M Annual Revenue",
        projectDuration: "12 Months",
        additionalInfo: "Inside-Sales Order Desk",
        additionalLabel: "Order Channel"
      }}
      challengeTitle="Why the Sales Desk Was Overloaded"
      challenges={[
        { icon: Clock, title: "Thousands of Routine Orders", description: "Inside sales keyed 4,200 orders a month, most of them predictable re-orders needing no human." },
        { icon: TrendingDown, title: "High-Value Work Crowded Out", description: "Time spent on data entry was time not spent on the complex accounts that grow the business." },
        { icon: Users, title: "Customers Ready to Self-Serve", description: "Buyers would have placed routine re-orders themselves given a simple channel." },
        { icon: Target, title: "Migration Without Disruption", description: "Moving customers to self-service risked the relationships inside sales had built." }
      ]}
      approachTitle="Self-Service for the Recurring Catalog"
      approachIntro="We launched a self-service ecommerce channel for the recurring catalog, designed the customer-migration playbook alongside the sales leaders, and tracked adoption by segment — moving 31 percent of order entry to self-service within a year."
      steps={[
        { step: "01", title: "Launching the Self-Service Channel", description: "We stood up an ecommerce channel focused on the recurring catalog, so customers could place routine re-orders without calling the desk." },
        { step: "02", title: "Designing the Migration Playbook", description: "We built the customer-migration approach with the sales leaders, so accounts moved to self-service without straining relationships." },
        { step: "03", title: "Tracking Adoption by Segment", description: "We measured migration by customer segment, directing effort where self-service fit best and keeping high-touch accounts high-touch." },
        { step: "04", title: "Redeploying the Freed Capacity", description: "As routine orders moved online, we helped inside sales refocus on the higher-value accounts where their time actually grows revenue." }
      ]}
      resultsTitle="Sales Freed for the Work That Matters"
      results={[
        { icon: TrendingUp, value: "31%", label: "Of order entry migrated", detail: "To self-service within twelve months" },
        { icon: Clock, value: "4,200", label: "Orders a month", detail: "The volume the desk had been keying" },
        { icon: Users, value: "Higher", label: "Value focus", detail: "Inside sales freed for complex accounts" },
        { icon: CheckCircle, value: "By Segment", label: "Adoption tracked", detail: "Migration matched to fit" }
      ]}
      quote="We had talented salespeople spending their days typing the same re-orders into a screen. Giving customers a simple way to place those themselves — and moving them over without bruising the relationships — took nearly a third of our order entry off the desk in a year. Our people are finally selling to the accounts that actually need them."
      quoteAuthor="VP of Sales"
      quoteRole="B2B industrial distributor"
      relatedStudies={[
        { title: "How a Specialty Retailer Cut Six Weeks of Publishing Delay to Days", metric: "67%", label: "faster time-to-publish", link: "/cases/specialty-retail-headless", image: "/images/industries/retail-shelves.jpg" },
        { title: "How a DTC Brand Replatformed to Salesforce Commerce Without a Single Launch-Weekend Incident", metric: "Zero", label: "launch-weekend incidents", link: "/cases/dtc-salesforce-commerce-migration", image: "/images/capabilities/cap-retail-data.jpg" }
      ]}
      ctaTitle="Is your sales team keying orders that don't need them?"
      ctaDescription="Let's launch self-service for the recurring catalog and migrate customers without disruption."
    />
  );
}
