import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Clock, Target, TrendingDown, AlertTriangle, Zap, CheckCircle, TrendingUp } from "lucide-react";

export default function SpecialtyRetailHeadless() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Headless Replatform Cuts Time-to-Publish 67% Across 14 Brand Sites | Retail Case Study"
      seoDescription="A specialty retailer ran 14 brand sites on a legacy monolith and spent six weeks to push any cross-brand change. A composable headless replatform cut time-to-publish 67% and restored brand-marketing's operating tempo."
      canonical="/cases/specialty-retail-headless"
      industry="Specialty Retail"
      industryLink="/industries/retail"
      title="How a Specialty Retailer Cut Six Weeks of Publishing Delay to Days"
      subtitle="Fourteen brand sites shared one aging monolith, and any cross-brand change took six weeks to ship. A composable headless architecture gave the marketing team back the tempo it had been promised years earlier."
      heroImage="/images/industries/retail-shelves.jpg"
      metrics={[
        { value: "67%", label: "Faster Time-to-Publish" },
        { value: "14", label: "Brand Sites" },
        { value: "5 Mo", label: "Waved Migration" },
        { value: "Regained", label: "Operating Tempo" }
      ]}
      clientContextTitle="Six Weeks to Change Anything"
      clientContextIntro="A specialty retailer ran fourteen brand sites on a single legacy monolith, and the architecture had become a bottleneck the whole marketing organization worked around. Pushing any change that touched more than one brand took roughly six weeks — a tempo wholly out of step with how fast the brands needed to move."
      clientContextBody="The monolith coupled everything together, so a change to one brand risked the others and had to crawl through a slow, cautious release process. The brand-marketing team had been promised, three years earlier, the ability to move quickly and independently; instead it queued behind a release train it did not control. The retailer needed to decouple the brands from one another and from the front end, without a risky big-bang cutover across fourteen live sites."
      clientProfile={{
        industry: "Specialty Retailer",
        companySize: "14 Brand Sites",
        projectDuration: "5 Months",
        additionalInfo: "14 Brand Storefronts",
        additionalLabel: "Digital Estate"
      }}
      challengeTitle="Why Publishing Took So Long"
      challenges={[
        { icon: Clock, title: "Six-Week Change Cycles", description: "Any cross-brand change took roughly six weeks to ship through the monolith's release process." },
        { icon: Target, title: "Everything Coupled Together", description: "The monolith tied fourteen brands together, so one change risked all of them." },
        { icon: TrendingDown, title: "A Marketing Team in a Queue", description: "Brand marketing waited behind a release train it did not control, unable to move at brand speed." },
        { icon: AlertTriangle, title: "No Safe Migration Path", description: "A big-bang cutover across fourteen live sites carried unacceptable risk." }
      ]}
      approachTitle="Decouple With Composable Headless"
      approachIntro="We selected the composable headless architecture, designed the integration spine, and ran the migration in waves over five months — compressing cross-brand time-to-publish by 67 percent and restoring the marketing team's tempo."
      steps={[
        { step: "01", title: "Selecting Composable Headless", description: "We chose a composable headless architecture that decoupled each brand's front end from the shared back end and from the other brands." },
        { step: "02", title: "Designing the Integration Spine", description: "We built the integration spine that connected commerce, content, and data cleanly, so decoupling did not fragment the estate." },
        { step: "03", title: "Migrating in Waves", description: "We ran the migration brand by brand in waves over five months, retiring the monolith safely without a risky big-bang cutover." },
        { step: "04", title: "Restoring Marketing's Tempo", description: "With brands decoupled, the marketing team could publish independently, cutting cross-brand time-to-publish by two-thirds." }
      ]}
      resultsTitle="Brands That Move at Brand Speed"
      results={[
        { icon: Zap, value: "67%", label: "Faster to publish", detail: "On cross-brand changes" },
        { icon: CheckCircle, value: "14", label: "Brand sites", detail: "Decoupled and migrated safely" },
        { icon: Target, value: "Waved", label: "Migration", detail: "No risky big-bang cutover" },
        { icon: TrendingUp, value: "Regained", label: "Tempo", detail: "The independence promised years earlier" }
      ]}
      quote="Every time we wanted to change something across our brands, we waited six weeks for a release train we did not run. Moving to a composable architecture, brand by brand so nothing broke, gave our marketers back the independence they had been promised three years ago — cross-brand changes now ship in a fraction of the time."
      quoteAuthor="VP of Digital"
      quoteRole="Specialty retailer"
      relatedStudies={[
        { title: "How a DTC Brand Replatformed to Salesforce Commerce Without a Single Launch-Weekend Incident", metric: "Zero", label: "launch-weekend incidents", link: "/cases/dtc-salesforce-commerce-migration", image: "/images/capabilities/cap-retail-data.jpg" },
        { title: "How an Enterprise SaaS Operator Lifted Win Rate 14 Points by Selling to Fewer Segments", metric: "+14 pts", label: "win rate on focus segment", link: "/cases/enterprise-saas-gtm-rebuild", image: "/images/capabilities/cap-conference-data.jpg" }
      ]}
      ctaTitle="Is a monolith holding your brands in a queue?"
      ctaDescription="Let's decouple with composable headless — in safe waves, not a big-bang cutover."
    />
  );
}
