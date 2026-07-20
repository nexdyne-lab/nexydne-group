import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { AlertTriangle, Target, DollarSign, Clock, TrendingUp, CheckCircle, Zap } from "lucide-react";

export default function ConsumerDtcLaunch() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="DTC Launch Hits Twice Its Year-One Plan Without Cannibalizing Wholesale | Consumer Case Study"
      seoDescription="A heritage consumer brand needed to launch DTC across two new categories without hurting the wholesale channel that drove 80% of revenue. A channel-respecting model and headless stack took year-one DTC to twice plan — and wholesale grew."
      canonical="/cases/consumer-dtc-launch"
      industry="Consumer Brand"
      industryLink="/industries/consumer-products"
      title="How a Heritage Brand Launched a DTC Business at Twice Plan Without Hurting Wholesale"
      subtitle="Wholesale still produced 80% of revenue, so a direct-to-consumer launch had to grow the pie, not split it. A channel-respecting commercial model made both channels win."
      heroImage="/images/cases/consumer-dtc-launch-hero.jpg"
      metrics={[
        { value: "2×", label: "Year-One DTC Plan" },
        { value: "80%", label: "Revenue Still Wholesale" },
        { value: "Up", label: "Wholesale Finished the Year" },
        { value: "2", label: "New Categories Launched" }
      ]}
      clientContextTitle="A Launch That Couldn't Threaten the Core"
      clientContextIntro="A heritage consumer brand wanted to launch direct-to-consumer across two new product categories. The catch was structural: wholesale still produced 80 percent of revenue, and the wholesale partners would react badly to any DTC move that looked like the brand competing with its own retailers."
      clientContextBody="The brand faced a classic channel-conflict trap. A DTC launch done carelessly could win a little direct revenue while poisoning the wholesale relationships that carried the business — a net loss dressed up as innovation. It needed a commercial model that gave consumers a direct option without undercutting retailers on price or assortment, the right commerce technology to run it, and an operating model to launch cleanly. Success meant both channels finishing the year ahead, not one cannibalizing the other."
      clientProfile={{
        industry: "Heritage Consumer Brand",
        companySize: "National Wholesale Footprint",
        projectDuration: "7 Months",
        additionalInfo: "Wholesale-Led Business",
        additionalLabel: "Channel Mix"
      }}
      challengeTitle="Why DTC Was a Delicate Move"
      challenges={[
        { icon: AlertTriangle, title: "Channel Conflict Risk", description: "Any DTC move could sour the wholesale partners who carried 80 percent of revenue." },
        { icon: Target, title: "Two Unproven Categories", description: "The launch spanned two new product categories with no direct-selling track record." },
        { icon: DollarSign, title: "Protecting the Core", description: "Winning direct revenue at the expense of wholesale would be a net loss for the business." },
        { icon: Clock, title: "No Direct Operating Model", description: "The brand had no commerce stack or operating model built to run a direct channel." }
      ]}
      approachTitle="A Channel-Respecting Path to Direct"
      approachIntro="We sized the opportunity, designed a channel-respecting commercial model, selected the headless commerce stack, and stood up the launch operating model — so DTC beat its year-one plan twice over while wholesale finished the year up."
      steps={[
        { step: "01", title: "Sizing the Opportunity", description: "We quantified the realistic DTC opportunity across the two categories, grounding the launch in evidence rather than ambition." },
        { step: "02", title: "Designing a Channel-Respecting Model", description: "We built a commercial model that gave consumers a direct option without undercutting wholesale on price or assortment, defusing the conflict." },
        { step: "03", title: "Selecting the Headless Stack", description: "We chose the headless commerce architecture that let the brand run direct efficiently and evolve it over time." },
        { step: "04", title: "Standing Up the Launch Operating Model", description: "We built the operating model to launch and run the channel cleanly, so DTC scaled without disrupting the core business." }
      ]}
      resultsTitle="Both Channels Winning"
      results={[
        { icon: DollarSign, value: "2×", label: "Year-one DTC plan", detail: "Across two new categories" },
        { icon: TrendingUp, value: "Up", label: "Wholesale", detail: "Finished the year higher, not lower" },
        { icon: CheckCircle, value: "Both", label: "Channels grew", detail: "The pie expanded, not split" },
        { icon: Zap, value: "Headless", label: "Commerce stack", detail: "Built to run and evolve direct" }
      ]}
      quote="Our partners carry most of our business, so a direct launch that competed with them would have been a disaster dressed up as progress. Designing the model to respect the channel let us build a direct business that beat its year-one plan twice over while our wholesale numbers actually went up. Both sides won, which is the only version worth doing."
      quoteAuthor="Chief Commercial Officer"
      quoteRole="Heritage consumer brand"
      relatedStudies={[
        { title: "How a B2B Distributor Moved a Third of Its Order Entry Off the Sales Desk", metric: "31%", label: "of order entry self-served", link: "/cases/b2b-ecommerce-launch", image: "/images/cases/b2b-ecommerce-launch-hero.jpg" },
        { title: "How a Specialty Retailer Cut Six Weeks of Publishing Delay to Days", metric: "67%", label: "faster time-to-publish", link: "/cases/specialty-retail-headless", image: "/images/industries/retail-shelves.jpg" }
      ]}
      ctaTitle="Want to launch DTC without triggering channel conflict?"
      ctaDescription="Let's design a channel-respecting model that grows the pie instead of splitting it."
    />
  );
}
