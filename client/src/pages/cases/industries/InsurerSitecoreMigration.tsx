import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Clock, AlertTriangle, Target, BarChart3, Zap, CheckCircle } from "lucide-react";

export default function InsurerSitecoreMigration() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="National Insurer Migrates to Sitecore Composable in 12 Months | DXP Case Study"
      seoDescription="A national insurer's legacy monolithic CMS made publishing slow. A staged migration to Sitecore's composable stack cut content publishing cycle time by more than half."
      canonical="/cases/insurer-sitecore-migration"
      industry="Financial Services"
      industryLink="/industries/insurance"
      title="How a National Insurer Halved Publishing Time With a Composable Migration"
      subtitle="A legacy monolithic CMS made every content change slow and risky. A staged migration to Sitecore's composable stack cut publishing cycle time by more than half."
      heroImage="/images/industries/fin-handshake-city.jpg"
      metrics={[
        { value: "50%+", label: "Faster Publishing" },
        { value: "12 Mo", label: "Staged Migration" },
        { value: "Composable", label: "Sitecore Stack" },
        { value: "Monolith", label: "Retired" }
      ]}
      clientContextTitle="A CMS That Slowed Everything"
      clientContextIntro="A national insurer ran its digital presence on a legacy monolithic content-management system that had become a drag on the business. Publishing a content change was slow and cumbersome, and because everything was coupled together, each change carried risk and required careful coordination."
      clientContextBody="The monolith tied content, presentation, and delivery into one tightly-coupled system, so the marketing and product teams could not move at the speed the business needed. Compliance-driven content updates — important in insurance — queued behind a slow release process, and the platform could not easily adopt modern channels or tools. The insurer needed to migrate to Sitecore's composable stack, decoupling content from delivery, but it had to do so in stages to avoid disrupting a live, regulated digital presence."
      clientProfile={{
        industry: "National Insurer",
        companySize: "~$1.1B Annual Revenue",
        projectDuration: "12 Months",
        additionalInfo: "Sitecore Composable Migration",
        additionalLabel: "Digital Platform"
      }}
      challengeTitle="Why Publishing Was Slow and Risky"
      challenges={[
        { icon: Clock, title: "Slow, Cumbersome Publishing", description: "Every content change crawled through a slow, coupled release process." },
        { icon: AlertTriangle, title: "Coupled and Risky", description: "Because everything was tied together, each change carried risk and heavy coordination." },
        { icon: Target, title: "Compliance Content Queued", description: "Important regulated updates waited behind the slow release process." },
        { icon: BarChart3, title: "Hard to Adopt Modern Tools", description: "The monolith could not easily take on modern channels or capabilities." }
      ]}
      approachTitle="Migrate to Composable, in Stages"
      approachIntro="We ran a staged migration from the legacy monolithic CMS to Sitecore's composable stack, decoupling content from delivery and cutting publishing cycle time by more than half — without disrupting the live, regulated presence."
      steps={[
        { step: "01", title: "Planning the Staged Migration", description: "We sequenced the move to Sitecore composable in stages so the live, regulated digital presence was never disrupted." },
        { step: "02", title: "Decoupling Content From Delivery", description: "We separated content from presentation on the composable stack, so teams could publish without a coupled release." },
        { step: "03", title: "Migrating in Waves", description: "We moved the presence across in waves, validating each before switching over." },
        { step: "04", title: "Speeding Publishing", description: "With content decoupled, publishing cycle time fell by more than half and compliance updates stopped queuing." }
      ]}
      resultsTitle="Publishing at Business Speed"
      results={[
        { icon: Zap, value: "50%+", label: "Faster publishing", detail: "Cycle time more than halved" },
        { icon: CheckCircle, value: "12 Mo", label: "Staged", detail: "No disruption to live presence" },
        { icon: Target, value: "Decoupled", label: "Content", detail: "From delivery" },
        { icon: BarChart3, value: "Retired", label: "Monolith", detail: "Composable stack in place" }
      ]}
      quote="Our old CMS made every content change slow and every release a coordination exercise, and in insurance some of those changes are compliance-critical. Migrating to a composable stack in careful stages cut our publishing time by more than half without ever disrupting the live site. Our teams finally publish at the speed the business actually moves."
      quoteAuthor="VP of Digital Experience"
      quoteRole="National insurer"
      relatedStudies={[
        { title: "How a Global Law Firm Migrated 12M Documents Without Losing a Single Ethical Wall", metric: "12M", label: "documents migrated", link: "/cases/law-firm-csp-migration", image: "/images/capabilities/cap-conference-data.jpg" },
        { title: "How a Manufacturer Cut Engineering Document Search Time by Two-Thirds", metric: "2/3", label: "less document search time", link: "/cases/manufacturer-content-discovery", image: "/images/capabilities/cap-robot-factory.jpg" }
      ]}
      ctaTitle="Is a monolithic CMS slowing your publishing?"
      ctaDescription="Let's migrate to composable in stages and halve your publishing cycle time."
    />
  );
}
