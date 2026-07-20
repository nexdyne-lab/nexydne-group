import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Target, Clock, AlertTriangle, BarChart3, Zap, CheckCircle } from "lucide-react";

export default function RetailerHeadlessOmnichannel() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Omnichannel Retailer Ships Web, App, In-Store From One Headless Stack | Headless CMS Case Study"
      seoDescription="A multi-brand retailer ran three editorial pipelines on a monolithic CMS. Migrating to a composable headless platform collapsed them into one and cut publish time 80% across web, app, and in-store."
      canonical="/cases/retailer-headless-omnichannel"
      industry="Retail"
      industryLink="/industries/retail"
      title="How an Omnichannel Retailer Collapsed Three Editorial Pipelines Into One"
      subtitle="Web, app, and in-store screens each had their own content pipeline on a monolithic CMS, so every campaign was published three times. A headless platform made it one."
      heroImage="/images/cases/retailer-headless-omnichannel-hero.jpg"
      metrics={[
        { value: "80%", label: "Faster Publishing" },
        { value: "3 → 1", label: "Editorial Pipelines" },
        { value: "Web+App+Store", label: "One Stack" },
        { value: "Composable", label: "Headless" }
      ]}
      clientContextTitle="Publishing Everything Three Times"
      clientContextIntro="A multi-brand retailer delivered content to three channels — its website, its mobile app, and in-store screens — and each ran on its own editorial pipeline bolted onto a monolithic CMS. Every campaign or content update had to be produced and published three separate times."
      clientContextBody="The triplication was slow and error-prone. The same content diverged across channels, campaigns launched unevenly, and the editorial team spent its energy on mechanical re-publishing instead of actual merchandising. The monolithic CMS coupled content to presentation, so there was no way to author once and deliver everywhere. The retailer needed a composable headless platform that separated content from channel — letting the team author content once and publish it to web, app, and in-store from a single pipeline."
      clientProfile={{
        industry: "Multi-Brand Retailer",
        companySize: "~140 Stores",
        projectDuration: "6 Months",
        additionalInfo: "Web + App + In-Store",
        additionalLabel: "Content Channels"
      }}
      challengeTitle="Why Every Campaign Shipped Three Times"
      challenges={[
        { icon: Target, title: "Three Separate Pipelines", description: "Web, app, and in-store each had their own editorial pipeline on the monolith." },
        { icon: Clock, title: "Triplicated Publishing", description: "Every update was produced and published three times, slowly." },
        { icon: AlertTriangle, title: "Content That Diverged", description: "The same content drifted across channels and campaigns launched unevenly." },
        { icon: BarChart3, title: "Content Coupled to Channel", description: "The monolithic CMS tied content to presentation, blocking author-once delivery." }
      ]}
      approachTitle="Author Once, Publish Everywhere"
      approachIntro="We migrated the retailer from its monolithic CMS to a composable headless platform, collapsing three editorial pipelines into one and cutting publish time 80 percent across web, app, and in-store."
      steps={[
        { step: "01", title: "Selecting Composable Headless", description: "We chose a headless architecture that separated content from channel, enabling author-once, publish-everywhere." },
        { step: "02", title: "Unifying the Editorial Pipeline", description: "We collapsed the three channel pipelines into a single content workflow feeding web, app, and in-store." },
        { step: "03", title: "Migrating Off the Monolith", description: "We moved content and templates off the monolithic CMS onto the composable platform without disrupting live channels." },
        { step: "04", title: "Speeding Publishing", description: "With one pipeline, the team published to all channels at once, cutting publish time by 80 percent." }
      ]}
      resultsTitle="One Pipeline, Every Channel"
      results={[
        { icon: Zap, value: "80%", label: "Faster publishing", detail: "Across all channels" },
        { icon: CheckCircle, value: "3 → 1", label: "Pipelines", detail: "Unified editorial workflow" },
        { icon: Target, value: "Everywhere", label: "Author once", detail: "Web, app, and in-store" },
        { icon: BarChart3, value: "Composable", label: "Headless", detail: "Content decoupled from channel" }
      ]}
      quote="We were producing every campaign three times — once for the website, once for the app, once for the screens in our stores — and they never quite matched. Moving to a headless platform let us author content once and push it everywhere at once. Publishing got eighty percent faster and our team went back to merchandising instead of re-typing."
      quoteAuthor="VP of Digital"
      quoteRole="Multi-brand retailer"
      relatedStudies={[
        { title: "How a Digital Publisher Halved Page Load Time With a Jamstack Rebuild", metric: "50%", label: "faster page loads", link: "/cases/publisher-headless-jamstack", image: "/images/cases/publisher-headless-jamstack-hero.jpg" },
        { title: "How a Specialty Retailer Lifted Conversion 31% With Audience-Driven Personalization", metric: "31%", label: "higher conversion", link: "/cases/retail-dxp-personalization", image: "/images/capabilities/cap-retail-apparel.jpg" }
      ]}
      ctaTitle="Are you publishing the same content to every channel by hand?"
      ctaDescription="Let's move to composable headless so you author once and publish everywhere."
    />
  );
}
